# Equipo 8 🚀

## Integrantes 👨‍💻👩‍💻
- Rafael Santos
- Andrea Gutierrez
- Pamela Navarro
- Victor Láscares

## Nombre del proyecto: ¡Aquí está!. Negocios al alcance de tu mano.

## Temática del proyecto 📋
¡Aquí está! Es un directorio de negocios en México. 

Muchos negocios pequeños y familiares en las localidades pueden ser desplazados por las grandes cadenas y/ empresas ofreciendo los mismos servicios que, sumados a su reputación, son más conocidos y también más costoso. Es por eso que **¡Aquí está!** permite a los negocios locales promocionarse y anunciarse para ser visibles a la gente de la localidad.
El público puede consultar la información de diversas categorías de negocios, detalles de cada negocio como ubicación, datos de contacto, servicios, precios y reviews de usuarios sobre el negocio en esa localidad, entre otros.

## Historias de usuario 🧑👧
1. Como visitante de ¡Aquí está!, quiero visualizar los negocios existentes en el Estado donde vivo.
2. Como visitante de ¡Aquí está!, quisiera buscar los tipos de negocios anunciados en la página.  
3. Como visitante de ¡Aquí está!, quisiera ver detalles del negocio como nombre, precios de los servicios o productos ofrecidos, número de contacto, link de la págin web si tiene, el nombre de la persona que atiende, horarios del establecimiento, información básica en general.
4. Como visitante de ¡Aquí está!, me interesa ver la puntuación del negocio dada por otros usuario y leer los reviews para convencerme de usar el servicio o comprar el producto.
5. Como visitante de ¡Aquí esta!, me gustaría dar mi puntuación y feedback al establecimiento para que otros usuarios puedan tomar una decisión si usar o no los servicios o productos de ese negocio.
6. Como visitante de ¡Aquí está! quisiera buscar un negocio por nombre en caso de que lo sepa.
7. Como visitante de ¡Aquí está! quiero filtrar la información de los negocios a mi manera para encontrar lo que necesito por ejemplo, por ubicación, nombre del negocio, servicios, precios, puntuación, etc.
8. Como visitante de ¡Aquí está! quiero ver rápidamente mis negocios favoritos y los últimos que he consultado.
9. Como dueño de un negocio quiero dar de alta mi negocio para que esté visible al público que visita la página.
10. Como dueño de un negocio necesito modificar mi información como ubicación, datos de contactoo los precios de mi servicios si éstos cambian.
11. Como dueño de un negocio quiero ver la puntuación que le han dado a mi negocio los usuarios y los comentarios para tomar una decisión acerca de mi negocio.
12. Como dueño de un negocio quisiera responder si es necesario algún comentario que me haya hecho algún usuario para agradecerle o recontribuirle de alguna manera.
13. Como dueño de un negocio necesito dar de baja mi negocio si es necesario.
14. Como administrador de ¡Aquí está! necesito modificar, eliminar o restaurar la información de los negocios.
15. Como administrador de ¡Aquí está! necesito acceso rápido para checar algún negocio por medio de filtros.
16. Como administrador de ¡Aquí está! necesito modificar, eliminar o restaurar la información de algún usuario.
17. Como administrador de ¡Aquí está! quiero filtrar la información de los usuarios de la página, por ejemplo, por sexo, edad, estado, etc.

## Requerimientos y estructura del proyecto 📈

## ¿Qué espero que haga el proyecto? 📲💻
Esperamos que los visitantes de **¡Aquí está!** puedan buscar los negocios cercanos a su localidad ver los detalles de los servicios o productos que ofrece. 
Si un visitante va a dar una puntuación o hacer un comentario al negocio, se requiere que este registrado para que le podamos notificar en caso de que tenga una respuesta de su comentario por parte del negocio. Que estén registrados también les permite añadir negocios favoritos y ver los que se visitaron recientemente.
Un dueño de un negocio primero tiene que registrarse y luego iniciar sesión para registrar un negocio, modificar su información, ver la puntuación que le han hecho los usuarios y responder los comentarios.

## ¿Qué tipo de usuario tendrá nuestro sistema? 🕵️‍♀️🕵️‍♂️
Nuestro sistema tendrá tres tipos de usuarios:
- *Usuario general* - son los visitantes de ¡Aqui está! que crearon una cuenta para hacer comentarios y calificar un negocio
- *Usuario commerce* - son el tipo de usuario que tiene un negocio
- *Usuario admin* - es el tipo de usuario que puede modificar o eliminar la información de algún negocio o usuario

## ¿Qué acciones puede realizar cada usuario? 🙋‍♂️🙋‍♀️
- *usrGeneral*: Puede filtrar por categorías, entidades, por nombre, por puntuación, ver detalles de los negocios, registrarse como nuevo usuario, iniciar sesión, calificar un negocio, dejar un comentario en el negocio, añadir a favorito un negocio, ver últimos negocios que se buscaron y se visualizaron los detalles de ese negocio.
- *usrCommerce*: Puede registrarse como nuevo usuario, iniciar sesión, registrar un nuevo negocio, responder comentarios de los usuarios, ver la puntuación que tiene su negocio.
- *usrAdmin*: Puede filtrar la información de los usuarios visitantes que se registraron y de los dueños de negocios así como los negocios en sí, modificar y eliminar la información de los usuarios y los negocios.

## ¿Qué información se necesita? 💾
Para la interacción con los visitantes de ¡Aquí está! se requiere la información de los negocios:
- Categoría del negocio
- Nombre del negocio
- Servicios del negocio
- Precios de servicios
- Ubicación del negocio
Para tener los detalles de los usuarios registrados se requiere:
- Nombre
- Apellido
- Correo
- Género
- Edad
- Contraseña
- Estado donde se encuentra
- Si es un usuario general o es dueño de un negocio

## ¿Cuáles son las principales entidades? 📌
Usuario 
Categoría del negocio 
Estado
Negocio
Usuario administrador

## ¿Qué características tiene cada entidad? 📊
- Usuario: Se refiere a las personas que se tienen registradas. Esta entidad pertenece tanto a los usuarios de los visitantes como a la de los dueños de los negocios con la diferencia del tipo que son. (id, nombre, apellido, correo, contraseña, género, edad, estado).
- Categoría de negocio: Se refiere al tipo de negocio (id, nombreCategoria): 
• ABARROTES
• CLÍNICAS Y HOSPITALES
• ESTÉTICAS
• FARMACIAS
• PASTELERÍAS
• PIZZERÍAS
• RESTAURANTES
• TAQUERÍAS
• TIENDAS DE AUTOSERVICIO
• UNIVERSIDADES
- Estado: Se refiere a los diferentes estados de México (id, nombreEstado).
- Negocio: Se refiere a todos los negocios. (id, nombreNegocio, ubicación, servicio, precio, contacto, calificación).
- Usuario administrador: Un administrador puede crear, modificar y eliminar información de negocios y de los usuarios.

## ¿Qué funcionalidades tiene cada entidad? 📂
- Cliente: agregarOpinion, modificarOpinion, eliminarOpinion y calificarNegocios
- Categoría de Negocio: agregarCategoria, modificarCategoria, y eliminarCategoria
- Negocio: agregarNegocios, modificarNegocios, eliminarNegocios, obtenerNegocios y listaNegocios
- Usuario administrador: agregarUsuario, modificarUsuario, consultarUsuarios, eliminarUsuario y login

