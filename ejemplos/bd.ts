//conexión a la base de datos
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!); //db es un objeto que representa la conexion

//crear una tabla
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    nombreMascota: varchar({ length: 255 }).null()
});

//buscar solamente los títulos de las tareas del usuario con id=7

db.select({ titulo }).from("tareas").join("ownership").

