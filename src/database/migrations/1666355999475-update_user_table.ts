import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class updateUserTable1666355999475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.changeColumns('user', [{
            oldColumn: new TableColumn({
                name: 'id',
                type: 'int'                
            }),
            newColumn: new TableColumn({
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            })
        }, {
            oldColumn: new TableColumn({
                name: "updated_at",
                type: "timestamp",                
            }),
            newColumn: new TableColumn({
                name: "updated_at",
                type: "timestamp",
                isNullable: true,
            })
        }]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumns('user', [{
            oldColumn: new TableColumn({
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            }),
            newColumn: new TableColumn({
                name: 'id',
                type: 'int',
                isPrimary: true,
            })
        }, {
            oldColumn: new TableColumn({
                name: "updated_at",
                type: "timestamp",
                isNullable: true,            
            }),
            newColumn: new TableColumn({
                name: "updated_at",
                type: "timestamp",
            })
        }]);
    }
}
