

//esto pertenece a la capa del dominio
//esta clase representa la solución que nosotros le dimos al problema.
//si separamos el dominio del problema de la forma en que almacenamos los datos, 
//si alguna vez necesitamos cambiar de proveedor de bases de datos en la nube, y también cambiamos de base de datos, el problema sigue estando resuelto.
interface Tarea {
    id: number;
    titulo: string;
    detalles: string;
    fechaHora: Date;
}

//Esto pertenece a la capa de la persistencia
//La forma en que se almacenan los datos en la base de datos, puede cambiar. También puede depender del motor de bases de datos que utilicemos. 
//No es lo mismo almacenar esto en Postgres que en Mysql, que en MongoDb, o Sqlite
interface FilaTarea {
    id: number;
    titulo: string;
    detalles: string;
    fechaHora: Date;
    borradoEn: Date;
}