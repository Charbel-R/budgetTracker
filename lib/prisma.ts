import { PrismaClient } from '@prisma/client'

const prismaClentSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClentSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClentSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}