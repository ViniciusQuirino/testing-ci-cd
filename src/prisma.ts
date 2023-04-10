import { PrismaClient } from "@prisma/client";
import paginator from "prisma-paginate";

export const prisma = paginator(new PrismaClient());
