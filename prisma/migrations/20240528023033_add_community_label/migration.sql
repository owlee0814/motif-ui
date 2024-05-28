/*
  Warnings:

  - Made the column `label` on table `Community` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Community" ALTER COLUMN "label" SET NOT NULL;
