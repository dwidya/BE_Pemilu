import { MigrationInterface, QueryRunner } from "typeorm";

export class MyArtikel1703797656279 implements MigrationInterface {
    name = 'MyArtikel1703797656279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Articel" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "image" character varying NOT NULL, "content" character varying NOT NULL, "createdAt" character varying NOT NULL, "Author" character varying NOT NULL, CONSTRAINT "PK_f14a5e5f8f48ce46b9b092588ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Partai" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "leader" character varying NOT NULL, "visimisi" character varying NOT NULL, "alamat" character varying NOT NULL, "createdAt" character varying NOT NULL, "Author" character varying NOT NULL, CONSTRAINT "PK_f14a5e5f8f48ce46b9b092588ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Paslon" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "noPaslon" character varying NOT NULL, "visimisi" character varying NOT NULL, "createdAt" character varying NOT NULL, "Author" character varying NOT NULL, CONSTRAINT "PK_f14a5e5f8f48ce46b9b092588ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "address" character varying NOT NULL, "gender" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_f14a5e5f8f48ce46b9b092588ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Vote" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "alamat" character varying NOT NULL, "jenisKelamin" character varying NOT NULL, "paslonId" character varying NOT NULL, "createdAt" character varying NOT NULL, "Author" character varying NOT NULL, CONSTRAINT "PK_f14a5e5f8f48ce46b9b092588ca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Articel"`);
        await queryRunner.query(`DROP TABLE "Partai"`);
        await queryRunner.query(`DROP TABLE "Paslon"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Vote"`);
    }

}
