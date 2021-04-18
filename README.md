# Equipo 8 🚀

## Integrantes 👨‍💻👩‍💻
- Rafael Santos
- Andrea Gutierrez
- Pamela Navarro
- Victor Láscares

## Nombre del proyecto: Aquí está. Negocios al alcance de tu mano.

## Temática del proyecto 📋
¡Aquí está! Es un directorio de negocios en México. Queremos que los clientes consulten la información de diversas categorías de negocios en las que puedan encontrar su ubicación, datos de contacto, servicios, precios y reviews de otros usuarios sobre el negocio en su Estado.

## Historias de usuario 🧑👧
1. Como usuario de directorioNegocios, quiero ver todos los negocios que hay en un estado para poder conocer sus servicios.
2. Como usuario de directorioNegocios, quiero ver todas las categorías de negocios para poder elegir el servicio que mejor cubra mis necesidades.
3. Como usuario de directorioNegocios, quiero ver las reviews de otros usuarios sobre algún negocio para saber si lo recomiendan.
4. Como usuario de directorioNegocios, quiero buscar negocios por nombre.
5. Como usuario de directorioNegocios, quiero poder consultar todos los negocios disponibles aplicando diferentes filtros (ubicación, nombre del negocio, servicios, precios, reviews).
6. Como usuario de directorioNegocios, quiero poder calificar a un negocio.
7. Como usuario de directorioNegocios, quiero poder dejar mi opinión sobre un negocio.
8. Como administrador de directorioNegocios, quiero agregar nuevos negocios con su ubicación, datos de contacto, servicios y precios, para que los clientes los puedan consultar.
9. Como administrador de directorioNegocios, quiero modificar negocios (ubicación, nombre del negocio, datos de contacto, servicios, precios).
10. Como administrador de directorioNegocios, quiero poder eliminar negocios.
11. Como administrador de directorioNegocios, quiero poder consultar todos los negocios disponibles aplicando diferentes filtros (ubicación, nombre del negocio, servicios, precios, reviews).

## Requerimientos y estructura del proyecto 📈

## ¿Qué espero que haga el proyecto? 📲💻
Esperamos que los clientes de ¡Aquí está! puedan consultar los negocios, servicios y precios de los negocios que estén registrados.

## ¿Qué tipo de usuario tendrá nuestro sistema? 🕵️‍♀️🕵️‍♂️
Nuestro sistema tendrá dos tipos de usuarios:
Cliente
Usuario administrador

## ¿Qué acciones puede realizar cada usuario? 🙋‍♂️🙋‍♀️
- Cliente: Podrá consultar ubicación, nombre del negocio, servicios, precios y reviews.
Podrá añadir reviews a los negocios.
- Usuario administrador: Podrá añadir, modificar y eliminar negocios (ubicación, nombre del negocio, servicios, precios y datos de contacto).

## ¿Qué información se necesita? 💾
Se necesita la información de todos los negocios que se quieran registrar:
Categoría del negocio
Nombre del negocio
Servicios del negocio
Precios de servicios

## ¿Cuáles son las principales entidades? 📌
Cliente 
Categoría de negocio 
Negocio
Usuario administrador

## ¿Qué características tiene cada entidad? 📊
- Cliente: Se refiere al usuario que quiere consultar ubicación, nombre del negocio, servicios, precios y reviews correspondientes a su estado de procedencia. (id, nombre, apellido, correo, contraseña)
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
 

- Negocio: Se refiere a todos los negocios. (id, nombreNegocio, ubicación, servicio, precio, contacto, calificación).
- Usuario administrador: Un administrador puede crear, modificar y eliminar información de negocios, ubicación, servicios, contacto y precios que verá el usuario.

## ¿Qué funcionalidades tiene cada entidad? 📂
- Cliente: agregarOpinion, modificarOpinion, eliminarOpinion y calificarNegocios
- Categoría de Negocio: agregarCategoria, modificarCategoria, y eliminarCategoria
- Negocio: agregarNegocios, modificarNegocios, eliminarNegocios, obtenerNegocios y listaNegocios
- Usuario administrador: agregarUsuario, modificarUsuario, consultarUsuarios, eliminarUsuario y login

## Prototipo de la Interfaz (versión 1) 🌐
Por el momento las secciones que están activas en el prototipo son "Seleccionar Estado" y la opción del estado de Morelos.
https://xd.adobe.com/view/87e4f1f3-c5d6-462c-635b-8756d4931a26-f1d5/