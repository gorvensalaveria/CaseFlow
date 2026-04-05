import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

async function main() {
  console.log('Seeding CaseFlow database...');

  await prisma.aIExtractionResult.deleteMany();
  await prisma.aIMessageDraft.deleteMany();
  await prisma.aISummary.deleteMany();
  await prisma.document.deleteMany();
  await prisma.checklistItem.deleteMany();
  await prisma.matter.deleteMany();
  await prisma.user.deleteMany();
  await prisma.client.deleteMany();

   console.log('Existing data cleared.');

     const adminPasswordHash = await bcrypt.hash('password123', 10);
  const clientPasswordHash = await bcrypt.hash('password123', 10);

  const client = await prisma.client.create({
    data: {
      firstName: 'Maria',
      lastName: 'Santos',
      email: 'maria.santos@example.com',
      phone: '+63 917 555 0101',
      nationality: 'Philippines',
    },
  });

  const adminUser = await prisma.user.create({
    data: {
      role: 'admin',
      email: 'admin@caseflow.com',
      passwordHash: adminPasswordHash,
    },
  });

  const clientUser = await prisma.user.create({
    data: {
      role: 'client',
      email: 'client@caseflow.com',
      passwordHash: clientPasswordHash,
      clientId: client.id,
    },
  });

  console.log('Base users created.', {
    adminUserId: adminUser.id,
    clientUserId: clientUser.id,
    clientId: client.id,
  });

    const matter = await prisma.matter.create({
    data: {
      clientId: client.id,
      title: 'Student Visa Application',
      visaType: 'Student Visa',
      stage: 'document_collection',
      dueDate: new Date('2026-06-30'),
      notes: 'Primary MVP sample matter for portfolio demo.',
    },
  });

  const passportChecklistItem = await prisma.checklistItem.create({
    data: {
      matterId: matter.id,
      title: 'Upload passport copy',
      status: 'pending',
      required: true,
      dueDate: new Date('2026-04-15'),
      notes: 'Clear scanned copy of the passport bio page.',
    },
  });

  const bankStatementChecklistItem = await prisma.checklistItem.create({
    data: {
      matterId: matter.id,
      title: 'Upload bank statement',
      status: 'in_progress',
      required: true,
      dueDate: new Date('2026-04-18'),
      notes: 'Latest 3 months of bank statements.',
    },
  });

  const personalStatementChecklistItem = await prisma.checklistItem.create({
    data: {
      matterId: matter.id,
      title: 'Submit personal statement',
      status: 'completed',
      required: false,
      dueDate: new Date('2026-04-12'),
      notes: 'Optional supporting explanation letter.',
    },
  });

  const sampleDocument = await prisma.document.create({
    data: {
      matterId: matter.id,
      checklistItemId: passportChecklistItem.id,
      uploadedByUserId: clientUser.id,
      fileName: 'passport-copy.pdf',
      fileUrl: '/uploads/passport-copy.pdf',
      mimeType: 'application/pdf',
      status: 'uploaded',
    },
  });

  console.log('Matter workflow created.', {
    matterId: matter.id,
    checklistItemIds: [
      passportChecklistItem.id,
      bankStatementChecklistItem.id,
      personalStatementChecklistItem.id,
    ],
    documentId: sampleDocument.id,
  });


    const aiSummary = await prisma.aISummary.create({
    data: {
      matterId: matter.id,
      generatedByUserId: adminUser.id,
      summaryText:
        'Client has started document collection for the student visa application. Passport copy is still pending, bank statement is in progress, and the optional personal statement has already been completed.',
      suggestedNextAction:
        'Follow up with the client to upload the passport copy before the due date.',
    },
  });

  const aiMessageDraft = await prisma.aIMessageDraft.create({
    data: {
      matterId: matter.id,
      generatedByUserId: adminUser.id,
      messageType: 'progress_update',
      draftText:
        'Hello Maria, this is a quick update on your student visa application. We have your personal statement on file, and your bank statement is in progress. Please upload your passport copy as soon as possible so we can continue reviewing your application.',
    },
  });

  console.log('AI support records created.', {
    aiSummaryId: aiSummary.id,
    aiMessageDraftId: aiMessageDraft.id,
  });


}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);    
  });
