//prueba automática 1

describe("crearTarea debe agregar una fila a la base de datos", () => {

    //iniciar prueba
    Controller.crearTarea(datosDePrueba);

    //verificar
    bd.select().from("tareas")  se agregó una tarea ? 

})