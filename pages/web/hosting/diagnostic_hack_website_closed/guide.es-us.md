---
title: 'Qué hacer si un alojamiento ha sido desactivado por seguridad'
slug: sitio-web-cerrado-por-hack
excerpt: 'Cómo actuar si su alojamiento web ha sido desactivado por motivos de seguridad'
section: Diagnóstico
order: 1
---

**Última actualización: 05/05/2020**

## Objetivo

Si tiene un sitio web en un alojamiento de OVHcloud, podría recibir en algún momento un mensaje de correo electrónico informándole de que hemos realizado una operación relacionada con la seguridad de su servicio. Esta operación podría impedirle acceder a su sitio web o limitar algunas de sus funcionalidades. OVHcloud lleva a cabo este tipo de acciones cuando se ha producido una actividad sospechosa, generalmente maliciosa, en el alojamiento web. 

**Esta guía incluye algunas recomendaciones de seguridad y explica qué hacer si su alojamiento web ha sido desactivado por motivos de seguridad.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}.
- Disponer de las claves necesarias para conectarse al espacio de almacenamiento del alojamiento.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action}.

## Procedimiento

Actualmente hay una ingente cantidad de sitios web en la red, que pueden estar basados en un gestor de contenidos (también llamado CMS por sus siglas en inglés) o en una estructura personalizada (es decir, desarrollado por el propio usuario o por un tercero). En ambos casos, la tecnología en la que se basan evoluciona con el tiempo. 

Por lo tanto, **es necesario mantener los sitios web actualizados**. Las actualizaciones pueden incluir nuevas funcionalidades, mejoras de la estabilidad... pero también parches de seguridad para corregir posibles fallos.

Los fallos de seguridad que puede tener un sitio web son muy variados. Aunque una brecha de seguridad no permite penetrar en los servidores de OVH, sí puede poner en peligro los datos alojados y, por efecto bola de nieve, amenazar la estabilidad de nuestra infraestructura en caso de que sea explotada de forma masiva.

Una fallo de seguridad en un sitio web podría permitir a alguien utilizar el alojamiento con fines maliciosos, por ejemplo para enviar spam o para alojar sitios web fraudulentos, sin que usted lo supiera. 

Para evitarlo, y así garantizar su seguridad y la de todos nuestros clientes, OVHcloud puede desactivar temporalmente el alojamiento o algunas de sus funcionalidades. En ese caso, será necesario realizar diversas operaciones para solucionar el problema. Aunque no existe un único procedimiento, esta guía ofrece información sobre las medidas que debe tomar si su alojamiento web es desactivado por motivos de seguridad. 

> [!warning]
>
> Esta guía no sustituye la ayuda de un webmaster u otro profesional. Le recomendamos que, si necesita ayuda, contacte con un proveedor especializado o con el editor del servicio. Nosotros no podremos asistirle.
>

### 1. Recabar información

Antes de realizar cualquier operación en su sitio web, deberá recabar toda la información posible para intentar averiguar qué ha sucedido. A continuación le ofrecemos algunos consejos: 

#### 1.1. Lea atentamente los mensajes enviados por OVHcloud

OVHcloud debería haberle enviado un mensaje de correo electrónico notificándole que ha realizado una acción relativa a la seguridad del alojamiento. Lea atentamente la información que contiene dicho mensaje. Esta información puede variar en función de la situación, pero, en cualquier caso, le permitirá:

- determinar el momento exacto en el que se ha desactivado el sitio web;
- conocer el motivo por el que se ha desactivado el sitio web.

Estos datos le resultarán útiles en las investigaciones y operaciones que tendrá que realizar más adelante.

#### 1.2. Evalúe la seguridad del sitio web

Tanto si está basado en un CMS (como WordPress) como si utiliza una estructura personalizada, **es necesario actualizar el sitio web regularmente**. 

Esto es especialmente importante en el caso de los CMS, ya que estos se personalizan mediante temas y módulos (o plugins) adicionales. Estos últimos, aunque resultan muy prácticos, modifican o añaden nuevos fragmentos en el código del sitio web, y el usuario no siempre conoce la procedencia y el nivel de seguridad de ese nuevo código.

Así pues, deberá plantearse las siguientes preguntas: 

- **¿Ha actualizado recientemente el sitio web?** 

Tanto el sitio web como sus temas o módulos adicionales deben actualizarse con regularidad (por usted mismo o por un webmaster). Si no lo ha hecho, es posible que su sitio web tenga fallos de seguridad que ya hayan sido solucionados en versiones posteriores del CMS en el que esté basado. 

Así pues, compruebe que tanto el sitio web como los elementos que haya instalado en él estén a la última versión y, si fuera necesario, actualícelos.

- **¿Ha añadido recientemente un nuevo tema o módulo adicional al sitio web?**

En ese caso, es posible que el tema o módulo tenga un fallo de seguridad y que este último haya sido explotado con fines maliciosos. No obstante, podría deberse a otro motivo y no tener su origen necesariamente en este nuevo elemento instalado.

Asegúrese, pues, de que los diferentes elementos adicionales de su sitio web son seguros o tienen una buena reputación.

#### 1.3. Consulte la actividad y los logs del alojamiento

Esto le permitirá conocer con mayor detalle las acciones que se han realizado sobre el servicio y el sitio web para poder determinar qué ha podido haber motivado la desactivación del alojamiento.

Para consultar la actividad y los logs del alojamiento, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, podrá realizar dos acciones diferentes en función de la información a la que desee acceder:

- **Consultar la actividad del alojamiento**

Puede consultar la evolución de la actividad del servicio en un período determinado de días, semanas o meses. Esto le permitirá identificar si se ha producido o se está produciendo alguna actividad anormal incluso antes de que OVH la detecte y desactive el alojamiento. 

Para ello, en la pestaña `Información general`{.action}, consulte el apartado **Actividad del alojamiento**, situado al final de la página.

![Actividad del alojamiento](images/hosting-deactivation-step1.png){.thumbnail}

- **Consultar los logs del alojamiento**

También puede consultar los logs detallados del servicio, incluyendo, entre otros, todas las peticiones web que se han enviado desde el alojamiento. De este modo, podrá identificar el archivo o archivos que han permitido que otra persona utilice el alojamiento con fines maliciosos. Este tipo de análisis suele ser una tarea bastante compleja. Si lo necesita, solicite la ayuda de un webmaster.

Para acceder a los logs, haga clic en la pestaña `Más +`{.action} y seleccione `Estadísticas y logs`{.action}. Haga clic en el enlace correspondiente para consultar los logs de acceso de su sitio web. 

![Actividad del alojamiento](images/hosting-deactivation-step2.png){.thumbnail}

Consulte los logs «**web**» de la fecha que considere más oportuna: el momento en el que se desactivó el sitio web o aquel en el que comenzó la actividad anormal.

A partir de esa fecha, vaya ampliando progresivamente la horquilla de tiempo hacia los días previos. El objetivo es encontrar actividades anormales o distintas de las habituales, que suelen provenir de peticiones «POST». Este tipo de análisis también puede resultar muy complejo. De nuevo, solicite la ayuda de un webmaster si lo necesita.

### 2. Realizar las operaciones pertinentes en el sitio web

Una vez que disponga de información sobre lo sucedido, debería poder realizar las acciones oportunas en el sitio web o, al menos, saber qué tipo de medidas debe tomar. 

Estas medidas se engloban en dos categorías complementarias:

- **Corrección de los fallos de seguridad**: Esto evitará que alguien pueda volver a explotarlos.

- **Eliminación del código malicioso**: Es posible que alguna persona malintencionada haya aprovechado el fallo de seguridad para introducir código en su sitio web y, por ejemplo, crear una puerta trasera (*backdoor*) para así acceder al sitio web y al alojamiento sin que usted tenga conocimiento. Así pues, deberá comprobar si se ha añadido código malicioso y, en ese caso, eliminarlo.

> [!warning]
>
> Estas dos categorías son complementarias.
> 
> Si corrige el fallo de seguridad sin eliminar el código malicioso del alojamiento, el ciberdelincuente seguirá teniendo acceso a este último y podrá seguir utilizándolo con fines fraudulentos.
>
> Si elimina el código malicioso sin corregir el fallo de seguridad, el ciberdelincuente podría volver a explotar dicho fallo para volver a introducir código malicioso en el alojamiento, e incluso crear una nueva puerta trasera.
>

Estas operaciones no son iguales en todos los casos, ya que dependen del propio sitio web. No obstante, a continuación ofrecemos algunas  orientaciones, que deberá adaptar en función de su caso particular. Le recomendamos que, si necesita ayuda, contacte con un proveedor especializado o con el editor del servicio. 

#### 2.1. Restaurar el sitio web a una fecha anterior

Las copias de seguridad permiten restaurar el sitio web al estado en el que se encontraba en una fecha anterior, antes de que fuera alterado por un tercero. Es importante que la copia de seguridad utilizada no contenga código malicioso, ya que, en ese caso, la restauración no serviría de nada. 

> [!warning]
>
> La restauración solo permite eliminar el código malicioso que alguien pueda haber introducido en el alojamiento web, **pero no corrige los fallos de seguridad**.
>

Existen distintas formas de restaurar un sitio web:

- **Si usted tiene una copia de seguridad del sitio web** 

Solo tiene que restaurar la copia de seguridad en el alojamiento, sustituyendo el contenido del espacio de almacenamiento y de la base de datos por el de la copia de seguridad. Si necesita ayuda, consulte nuestra guía [Importar una copia de seguridad en la base de datos de un alojamiento web](../web_hosting_importacion_de_una_base_de_datos_mysql/){.external}.

- **Si OVHcloud tiene una copia seguridad del sitio web (espacio de almacenamiento y base de datos)**

Según la fecha a la que quiera restaurar el sitio web, es posible que OVH tenga una copia de seguridad de este último. Si necesita ayuda, consulte nuestras guías [Restaurar el espacio de almacenamiento de un alojamiento web](../restaurar-espacio-almacenamiento-alojamiento-web/){.external}, [Exportar una copia de seguridad de la base de datos de un alojamiento web](../web_hosting_exportacion_de_una_base_de_datos/){.external} e [Importar una copia de seguridad en la base de datos de un alojamiento web](../web_hosting_importacion_de_una_base_de_datos_mysql/){.external}. En la medida de lo posible, asegúrese de que las fechas de las copias de seguridad seleccionadas coinciden.

- **Si ni usted ni OVHcloud tienen una copia de seguridad del sitio web** 

En ese caso, deberá [corregir manualmente el código del sitio web](./#23-corregir-manualmente-el-codigo-del-sitio-web){.external} para realizar los cambios necesarios. 

#### 2.2. Actualizar el sitio web

Para realizar esta operación debemos tener en cuenta diversas consideraciones técnicas. En primer lugar, antes de realizar una actualización, asegúrese de que tiene acceso al sitio web. 

> [!primary]
>
> Si la acción llevada a cabo por OVHcloud ha inhabilitado el acceso al sitio web, no podrá actualizarlo. En ese caso, vaya al paso [3. Reactivar el alojamiento web](./#3-reactivar-el-alojamiento-web_1){.external} para recuperar el acceso. Una vez que haya accedido al sitio web, podrá actualizarlo.
>

Conéctese al panel de administración del sitio web (que es distinto del área de cliente de OVHcloud). Compruebe lo siguiente:

- el sitio web está correctamente actualizado;
- todos los temas y módulos adicionales (o plugins) instalados están actualizados.

De lo contrario, deberá actualizarlos. Para ello, siga las indicaciones que le ofrezca el panel de administración del sitio web. 

> [!warning]
>
> **Antes de realizar esta operación, le recomendamos encarecidamente que siga todas las indicaciones relativas a la actualización** provenientes tanto del editor o creador del sitio web, como de los desarrolladores de los temas o módulos adicionales utilizados.
>

Dichas indicaciones pueden hacer referencia a elementos que podrían bloquear la actualización, por ejemplo:

- Asegúrese de que la nueva versión del CMS (como WordPress) es compatible con la versión de PHP configurada en el alojamiento. Si necesitara cambiar esta última, puede consultar nuestra guía [Cambiar la versión PHP de un alojamiento web](../cambiar-version-php-en-alojamiento-web/){.external}.
- Asegúrese de que los temas y módulos adicionales son compatibles con la nueva versión de su CMS. De lo contrario, no podrá utilizarlos y deberá encontrar una solución alternativa.

#### 2.3. Corregir manualmente el código del sitio web

Si su sitio web no está basado en un CMS (como WordPress) o si no tiene una copia de seguridad que le permita restaurarlo, deberá realizar manualmente los cambios necesarios. **Dada su dificultad técnica, le recomendamos que solicite la ayuda de un experto para realizar esta operación**. 

No existe un procedimiento válido para todos los casos, ya que depende del propio sitio web. No obstante, puede utilizar los logs del alojamiento para localizar con mayor facilidad el archivo o archivos afectados que debe corregir.

### 3. Reactivar el alojamiento web

Para reactivar el alojamiento web, es necesario realizar una operación en el espacio de almacenamiento que consiste en asignar permisos «**705**» a la raíz (o «/») de dicho espacio de almacenamiento.

> [!primary]
>
> Si el mensaje de correo electrónico enviado por OVHcloud especifica que usted no puede reactivar el alojamiento, siga los pasos que se indican en el mensaje.
>

Si tiene la posibilidad de reactivar usted mismo el alojamiento, recopile la información necesaria para conectarse a su espacio de almacenamiento (es decir, el servidor FTP, el usuario FTP y la contraseña asociada).

Para ello, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} y, en la columna izquierda, haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}. Desde el mismo lugar también podrá [cambiar la contraseña del usuario FTP](../cambiar-contrasena-usuario-ftp/){.external} si fuera necesario.

![Desactivación del hosting](images/hosting-deactivation-step3.png){.thumbnail}

Una vez que disponga de la información necesaria, existen diversas posibilidades en función del programa o interfaz web que quiera utilizar.

#### 3.1. Reabrir el alojamiento web con FileZilla

Abra FileZilla y conéctese al espacio de almacenamiento. En el menú superior, haga clic en `Servidor`{.action} y seleccione `Introducir comando personalizado`{.action} (el nombre de esta opción puede variar en función de la versión de FileZilla). En la nueva ventana, introduzca el siguiente comando y acepte:

```
SITE CHMOD 705 /
```

Si la operación se ha realizado correctamente, recibirá la respuesta «OK». Para comprobarlo, intente acceder a su sitio web desde un navegador. Si tiene que actualizar el sitio web, vuelva al apartado [2.2. Actualizar el sitio web](./#22-actualizar-el-sitio-web){.external} de esta guía.

![Introducir comando personalizado](images/hosting-deactivation-step4.png){.thumbnail}

#### 3.2. Reabrir el alojamiento web con el explorador de FTP «net2ftp»

Abra la pestaña `FTP - SSH`{.action} del área de cliente de OVHcloud, haga clic en el botón `Explorador FTP`{.action} y conéctese al espacio de almacenamiento. Haga clic en el botón `Avanzado`{.action} para acceder a las funciones avanzadas y, a continuación, haga clic en el botón `Go`{.action}, situado junto a «Send arbitrary FTP commands to the FTP server» (enviar comandos FTP arbitrarios al servidor FTP).

![Actividad del alojamiento](images/hosting-deactivation-step5.png){.thumbnail}

Introduzca el siguiente comando en el área de texto superior y haga clic en el botón con forma de tic verde. 

```
SITE CHMOD 705 /
```

Si la operación se ha realizado correctamente, la respuesta indicará que los permisos se han cambiado. Para comprobarlo, intente acceder a su sitio web desde un navegador. Si tiene que actualizar el sitio web, vuelva al apartado [2.2. Actualizar el sitio web](./#22-actualizar-el-sitio-web){.external} de esta guía.

![Enviar comando al servidor FTP](images/hosting-deactivation-step6.png){.thumbnail}

#### 3.3. Reabrir el alojamiento web por SSH

Conéctese al espacio de almacenamiento por SSH y ejecute el siguiente comando:

```
chmod 705 .
```

Para comprobar que dispone de los permisos necesarios, ejecute el siguiente comando:

```
ls -la
```

También puede intentar acceder al sitio web desde un navegador. Si tiene que actualizar el sitio web, vuelva al apartado [2.2. Actualizar el sitio web](./#22-actualizar-el-sitio-web){.external} de esta guía.

### 4. Mantener la seguridad del sitio web

Una vez que su sitio web ya no tenga fallos de seguridad ni código malicioso, es importante seguir velando por su seguridad. Para ello, le ofrecemos las siguientes recomendaciones:

- Actualice regularmente el sitio web, incluyendo los temas y módulos adicionales.
- Instale contenido de confianza: cuanto más personalice un sitio web instalando temas y módulos, más código alterará o añadirá al sitio. Preste especial atención a las valoraciones y comentarios de los usuarios sobre los temas y módulos que desee instalar.

En resumen, se trata de actualizar el sitio web con regularidad y de ser precavido con lo que instale en él.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
