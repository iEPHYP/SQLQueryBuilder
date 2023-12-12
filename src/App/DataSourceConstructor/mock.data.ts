import { Column, DatabaseSchema, Table } from "./schemas";

export const databaseSchemaMock: DatabaseSchema = {
	tables: [
		new Table({
			name: 'Products',
			modelName: 'products',
			primaryKeyColumn: 'id',
			columns: [
				new Column({
					name: 'id',
					type: 'primary'
				})
			]
		})
	]
}