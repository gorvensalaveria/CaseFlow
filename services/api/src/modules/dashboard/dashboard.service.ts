import { prisma } from '../../lib/prisma';

export const dashboardService = {
  async getSummary() {
    const activeMatters = await prisma.matter.count({
      where: {
        stage: {
          not: 'completed',
        },
      },
    });

    const pendingDocuments = await prisma.document.count({
      where: {
        status: 'uploaded',
      },
    });

    const aiDrafts = await prisma.aIMessageDraft.count();

    return {
      activeMatters,
      pendingDocuments,
      aiDrafts,
    };
  },
};
