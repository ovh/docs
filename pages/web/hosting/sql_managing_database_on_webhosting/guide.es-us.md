---
title: Gestion de una base de datos desde un alojamiento compartido
slug: gestion-de-una-base-de-datos-desde-un-alojamiento-compartido
legacy_guide_number: 1943
section: Bases de datos
---

**Última actualización: 05/05/2020**

## Informacion general
Una base de datos está formada por un conjunto de datos estructurados y organizados que permiten almacenar y acceder a gran cantidad de información de forma eficaz. Se suele hablar de «BDD» o de «SQL». El SQL es el lenguaje que nos permite especificar diversos tipos de operaciones: incluir, editar, recuperar o eliminar datos de nuestra base.

Los planes de web hosting de OVH incluyen por defecto bases de datos SQL. El número de bases y su capacidad dependerá del tipo de plan.

Haga clic [aquí](https://www.ovh.com/world/es/hosting/){.external} para consultar nuestras guías de web hosting.

A estas bases de datos tan solo se puede acceder desde los alojamientos compartidos de OVHcloud. No es posible conectar un sitio o una aplicación fuera de OVHcloud.

Proponemos dos tipos de bases de datos: MySQL o PostgreSQL.


## Gestion de una base de datos en alojamiento compartido

### Creacion de una base de datos
- Conéctese al [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external} con su ID de cliente (NIC Handle) y contraseña.
- Haga clic en «Login» para aceptar la operación.


![hosting](images/3035.png){.thumbnail}

En nuestro ejemplo, utilizaremos un plan de web hosting OVHcloud con varias bases de datos y crearemos una base de datos MySQL.

- Seleccione su alojamiento en la sección «Alojamientos» y, a continuación, acceda a la pestaña «Bases de datos» .


![hosting](images/3854.png){.thumbnail}

- Haga clic en «Crear una base de datos» para acceder al formulario de creación.
- Si no tiene ninguna base de datos disponible, puede «Contratar una base de datos» .


![hosting](images/3855.png){.thumbnail}

A la hora de crear una base de datos, puede:

- seleccionar la tecnología de la base de datos: MySQL o PostgreSQL;
- conocer la versión de su base de datos, y
- seleccionar el tipo de base de datos (es posible elegir la base a partir de un plan Profesional).


![hosting](images/3040.png){.thumbnail}

Una vez introducidos los datos, haga clic en «Siguiente». A continuación, deberá indicar:

- un nombre de usuario (6 u 8 caracteres máximo, en función del tamaño de la base de datos), y
- una contraseña (debe cumplir las condiciones que se indican en el formulario).


![hosting](images/3041.png){.thumbnail}

Haga clic en «Siguiente» para pasar a la última etapa.

Aparecerá un resumen con la información relativa a la creación de su base de datos. Si todos los datos son correctos, haga clic en «Aceptar».


![hosting](images/3042.png){.thumbnail}

Si el proceso se ha realizado correctamente, aparecerá un mensaje de confirmación (deberá esperar unos minutos a que su base de datos esté plenamente operativa).

Recibirá un mensaje de correo electrónico cuando esté disponible.


![hosting](images/3043.png){.thumbnail}

¡Ya ha terminado de crear su base de datos!


## Opciones de gestion disponibles desde el area de cliente OVHcloud
Una vez creada la base de datos, OVHcloud pone a su disposición un panel de operaciones para simplificar su administración.


![hosting](images/3847.png){.thumbnail}


### Cambiar la contrasena
Esta opción le permite actualizar la contraseña de su base de datos desde el área de cliente.

**Atención: Tenga cuidado al modificar su contraseña, ya que podría interrumpir el funcionamiento del sitio o de los servicios que utilicen esta base de datos.**

Si desea modificar la contraseña de su base de datos y tiene un sitio web que utiliza esta contraseña, deberá obligatoriamente actualizar la contraseña en el archivo de conexión del servidor FTP.


### Crear una copia de seguridad (dump)
Es posible crear una copia de seguridad de su base de datos directamente desde el área de cliente.

Para ello, haga clic en el icono con forma de «rueda dentada» a la derecha de su base de datos y seleccione «Crear una copia de seguridad».

OVHcloud le ofrece elegir entre tres fechas para su copia de seguridad:

- Ahora: Copia de la base de datos en el momento de realizarla.
- Ayer: Copia de la base de datos en el estado en que se encontraba hace 24 horas.
- La semana pasada: Copia de la base de datos en el estado en que se encontraba hace 7 días.

Esta opción le permite recuperar los datos en caso de que estos sean eliminados o modificados, de forma voluntaria o involuntaria.


![hosting](images/3045.png){.thumbnail}

Haga clic en «Siguiente» y, a continuación, en «Aceptar» para completar la creación de su copia de seguridad.

Deberá esperar unos minutos a que se cree la copia de seguridad. Recibirá un mensaje de correo electrónico cuando esté disponible.


### Restaurar una copia de seguridad (dump)
También es posible restaurar los datos de una copia de seguridad.

Para ello, haga clic en el icono con forma de «lápiz» que aparece en la columna «Copias de seguridad de su base de datos». Podrá elegir entre dos opciones:

- Descargar la copia de seguridad (recuadro azul en la imagen).
- Restaurar la copia de seguridad (recuadro verde en la imagen).


![hosting](images/3848.png){.thumbnail}


### Eliminar la base de datos
Si no desea conservar una base de datos, podrá eliminarla de forma definitiva desde el área de cliente.

Para ello, haga clic en el icono con forma de «rueda dentada» a la derecha de su base de datos y seleccione «Eliminar la base de datos».

**Atención: Esta acción es irreversible y conlleva la pérdida de todos los datos incluidos en la base de datos.**

A continuación, aparecerá una ventana emergente en la que se le recordará esto último. Deberá hacer clic en «Aceptar» para confirmar la supresión de la base de datos.


![hosting](images/3046.png){.thumbnail}


### Recalcular el espacio utilizado
**Información importante sobre el espacio utilizado**

Esta información se actualiza automáticamente cada 24 horas, aunque también puede actualizarla de forma manual desde su área de cliente.

Si supera el espacio de almacenamiento recomendado, sus permisos se restringirán a un acceso de solo lectura.

Para evitar esta limitación, le recomendamos que libere espacio de su base de datos y recalcule el espacio utilizado para volver por debajo del tamaño recomendado. La base de datos se desbloqueará automáticamente en los siguientes minutos.


### Acceder a phpMyAdmin
Tan solo deberá introducir la contraseña de su base de datos. El resto de información se autocompletará.

- Contraseña: La contraseña de su base de datos.
- Versión: Podrá elegir entre conectarse a la base de datos actual o a una copia de seguridad realizada hace un día o una semana.


![hosting](images/3047.png){.thumbnail}


## Errores comunes

### Can t connect to local MySQL
Se trata de un error de conexión en el servidor MySQL. El mensaje le indica que su script intenta conectarse a MySQL en local y no lo consigue. MySQL en un alojamiento compartido de OVHcloud no funciona en local, sino en la red.

Probablemente, haya escrito «localhost» en la configuración de sus scripts y no es correcto.

Debe indicar el siguiente nombre de servidor en el archivo de configuración de su sitio:  **«nombre_de_su_bdd.mysql.db»** .


### Too Many Connections
Si al intentar conectarse a MySQL, aparece el error  **«Too many connections»** , significa que ya ha alcanzado el número máximo de clientes conectados al servidor MySQL.

En este caso, ha alcanzado el número total de conexiones simultáneas autorizadas (limitado a 30) y debe comprobar, a nivel de programación, que todas sus conexiones SQL se cierran correctamente tras cada petición.


## Otras acciones

### Importar un dump (copia de seguridad)
¿Cómo importar el backup de mi base de datos MySQL? ¿Cuáles son las distintas formas de hacerlo?

Si desea más información sobre cómo importar una base de datos MySQL, consulte nuestra [guía](..//web_hosting_importacion_de_una_base_de_datos_mysql/){.external}.


### Exportar una base de datos
¿Cómo exportar mi base de datos SQL? ¿Cuáles son las distintas formas de realizar el backup de mi base de datos?

Si desea más información sobre cómo exportar una base de datos, consulte nuestra [guía](../web_hosting_exportacion_de_una_base_de_datos/){.external}.
