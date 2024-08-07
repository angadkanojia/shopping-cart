import { PrismaClient } from "@prisma/client";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var, vars-on-top
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.PROJECT_ENV !== "production") global.prisma = prisma;
