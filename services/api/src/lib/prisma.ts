import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';
import { env } from '../config/env';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  // Prisma 7 uses a driver adapter instead of reading the URL from schema.prisma.
  new PrismaClient({
    adapter: new PrismaPg({
      connectionString: env.databaseUrl,
    }),
    log: ['warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
