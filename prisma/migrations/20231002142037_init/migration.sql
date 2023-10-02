-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_author_id_fkey`;

-- AlterTable
ALTER TABLE `post` MODIFY `author_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
