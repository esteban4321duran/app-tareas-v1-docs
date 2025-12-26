import { Hono } from 'hono'
import { crearTarea } from 'dominio/tareas/AdministradorTareas.ts'


//esto es un controller, pertenece a la capa de aplicación

const app = new Hono()

const PaginaTareaCreada: FC<{ tarea: Tarea }> = (props: {
    messages: string[]
}) => {
    return (
        <html>
        <h1>{ tarea.titulo } </h1>
        </html>
    )
}


app.post('/tareas', (Context) => {
    const tarea = crearTarea(
        Context.requestBody.titulo,
        Context.requestBody.detalles,
        Context.requestBody.fechaHora,
    );

    return c.html(<PaginaTareaCreada tarea={ tarea } />);
})

export default app

//espero que estos diagramas que preparé sirvan para que nos orientemos para trabajar juntos