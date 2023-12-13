import { Column, DatabaseSchema, Table } from "./schemas";

export const databaseSchemaMock: DatabaseSchema = {
  tables: [
    new Table({
      name: "Products",
      columns: [
        new Column({
          name: "id",
          type: "primary",
        }),
        new Column({
          name: "name",
          type: "string",
        }),
        new Column({
          name: "price",
          type: "number",
        }),
        new Column({
          name: "quantityInStock",
          type: "number",
        }),
        new Column({
          name: "categoryId",
          type: "primary",
          foreignTableName: "Categories",
        }),
      ],
    }),
    new Table({
      name: "Categories",
      columns: [
        new Column({
          name: "id",
          type: "primary",
        }),
        new Column({
          name: "name",
          type: "string",
        }),
      ],
    }),
    new Table({
      name: "Clients",
      columns: [
        new Column({
          name: "id",
          type: "primary",
        }),
        new Column({
          name: "name",
          type: "string",
        }),
        new Column({
          name: "email",
          type: "string",
        }),
        new Column({
          name: "contacts",
          type: "string",
        }),
        new Column({
          name: "address",
          type: "string",
        }),
      ],
    }),
    new Table({
      name: "Orders",
      columns: [
        new Column({
          name: "id",
          type: "primary",
        }),
        new Column({
          name: "clientId",
          type: "primary",
          foreignTableName: "Clients",
        }),
        new Column({
          name: "productId",
          type: "primary",
          foreignTableName: "Products",
        }),
        new Column({
          name: "orderDate",
          type: "Date",
        }),
        new Column({
          name: "quantity",
          type: "number",
        }),
      ],
    }),
  ],
};
