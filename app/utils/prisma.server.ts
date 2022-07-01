/**
 * These are precautions put into place that prevent live-reloads from
 * saturating your database with connections while developing.
 *
 * src: https://www.prisma.io/blog/fullstack-remix-prisma-mongodb-2-ZTmOy58p4re8
 */

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$disconnect();
  }
  prisma = global.__db;
}

export { prisma };
