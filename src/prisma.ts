import { PrismaClient } from "@prisma/client";
import { withExclude } from "prisma-exclude";
import paginator from "prisma-paginate";

export const prisma = withExclude(paginator(new PrismaClient()));
