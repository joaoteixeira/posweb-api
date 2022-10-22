import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createPostTagTable1666476451599 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'post_tag',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'post_id',
                        type: 'int',
                    },
                    {
                        name: 'tag_id',
                        type: 'int',
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ['post_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'post',
                    },
                    {
                        columnNames: ['tag_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'tag',
                    }
                ]
            }), 
        true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('post_tag');
    }

}
