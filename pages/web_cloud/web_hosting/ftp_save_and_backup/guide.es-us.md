---
title: "Restaurar el espacio de almacenamiento de un alojamiento web"
excerpt: "Descubra cómo restaurar un archivo o el espacio de almacenamiento completo de un alojamiento web"
updated: 2025-10-20
---

## Objetivo

Los planes de hosting de OVHcloud incluyen un espacio de almacenamiento en el que puede alojar sus sitios web. Existen diversos motivos por los que podría necesitar restaurar todos los datos de su espacio de almacenamiento o un archivo concreto, por ejemplo, si el sitio web ha dejado de estar accesible después de haber eliminado o modificado erróneamente algún archivo.

> [!primary]
> 
> Las copias de seguridad ofrecidas por OVHcloud para los alojamientos compartidos son extracontractuales. Ofrecemos estos servicios adicionales para ayudarle en situaciones urgentes. Le recomendamos que realice regularmente sus propias copias de seguridad para paliar las posibles pérdidas de datos.
> 
> Si realiza una copia de seguridad para su sitio web y utiliza una base de datos, realice una copia de seguridad de su base de datos. No dude en consultar nuestra guía para [exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).
>

**Esta guía explica cómo restaurar un archivo o el espacio de almacenamiento de un alojamiento web.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting) (salvo el hosting [Cloud Web](/links/web/hosting-cloud-web-offer)).
- Según el método utilizado, tener acceso a la gestión del plan de hosting desde el [área de cliente de OVHcloud](/links/manager) o disponer de la contraseña FTP necesaria para conectarse al espacio de almacenamiento. 

## Procedimiento

Antes de empezar, asegúrese de que las fechas de restauración posibles le permitirían restaurar el espacio de almacenamiento del alojamiento web al estado deseado. Estas fechas son las siguientes:

- el mismo día, a las 00:01;
- el día anterior, a las 00:01;
- dos días antes, a las 00:01;
- el domingo anterior, a la 01:00;
- el domingo de dos semanas antes, a la 01:00.

OVHcloud no podrá ofrecerle una copia de seguridad más antigua. Si la necesita, deberá utilizar una copia de seguridad del sitio web que usted mismo haya realizado en el pasado. 

Asimismo, deberá decidir el método de restauración que quiera utilizar:

|Método de restauración|Descripción|
|---|---|
|Restauración desde el área de cliente|Restaura el contenido íntegro del espacio de almacenamiento. Todo el contenido actual será sustituido por el de la copia de seguridad seleccionada.|
|Restauración desde un programa o una interfaz web|Permite conectarse en modo de solo lectura a una copia de seguridad del espacio de almacenamiento. Este método, aunque es más técnico, permite restaurar uno o varios archivos a una fecha anterior sin tener que borrar todo el contenido actual del espacio de almacenamiento.|

> [!warning]
>
> En cuanto al método de **restauración desde el área de cliente de OVHcloud**, compruebe que al menos **la mitad del espacio total de almacenamiento FTP** incluido en su paquete de alojamiento sigue disponible.
> Por ejemplo, si tiene un paquete de alojamiento **Performance**, aún deberían estar disponibles 250 GB de los 500 GB disponibles.
>
>  se debe a que nuestros robots instalan la copia de seguridad en su alojamiento antes de borrar el contenido FTP que será reemplazado por la restauración.

Para comprobar la cuota utilizada en su alojamiento web, haga clic en las fichas siguientes para ver cada uno de los **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En el cuadro **Información general**, encontrará la mención **Espacio en disco**.
>>
>> ![disk_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}
>>
>> Si el espacio de almacenamiento FTP utilizado es superior a la mitad del espacio de almacenamiento FTP total de su paquete de alojamiento, recupere localmente algunos de los elementos de gran tamaño de su sitio web (puede utilizar [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)).
>>
>> A continuación, elimínelos de su almacenamiento FTP. Esto reducirá el tamaño del espacio de almacenamiento FTP que está utilizando y entonces podrá lanzar su restauración desde el área de cliente de OVHcloud.

Una vez que haya elegido el método de restauración más adecuado en función de sus necesidades, continúe la lectura de esta guía en el apartado correspondiente:

- [Restaurar el espacio de almacenamiento desde el área de cliente](#viacontrolpanel)
- [Restaurar un archivo desde un programa o una interfaz web](#viainterface)

### Restaurar el espacio de almacenamiento desde el área de cliente <a name="viacontrolpanel"></a>

> [!warning]
>
> Este método de restauración no está disponible si el alojamiento ha sido puesto en modo de mantenimiento por nuestros administradores o si no tiene permisos de acceso FTP (permisos `chmod`) debido a una acción por su parte.
>
> En efecto, los permisos `chmod` en la raíz del alojamiento deben estar obligatoriamente en `705` para que este método funcione.
>

> [!primary]
> **Sitio en modo "mantenimiento"**
> 
> Para determinar si el sitio web está en modo de mantenimiento, consulte nuestra guía [¿Qué hacer en caso de página 403 forbidden?](/pages/web_cloud/web_hosting/diagnostic_403_forbidden). 
> 
> En este caso:
>
> - Nuestro equipo envía un mensaje de correo electrónico al [contacto administrador](/pages/account_and_service_management/account_information/managing_contacts#acceder-a-la-gestion-de-los-contactos) del alojamiento. 
> - El estado de mantenimiento aparecerá en el [área de cliente de OVHcloud](/links/manager). En la sección `Web Cloud`{.action}, haga clic en su servicio en la sección `Alojamientos`{.action} y seleccione la pestaña `Información general`{.action}.
> - Los sitios web alojados muestran una página "403 Forbidden".

Haga clic en las fichas siguientes para ver cada una de las **6** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la nueva página, haga clic en el botón `Restaurar una copia de seguridad`{.action}.
>>
>> ![backup ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/restore-backup.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Se abrirá una ventana en la que deberá seleccionar la fecha de restauración deseada en el menú desplegable.
>>
>> |Fecha|Momento de la copia de seguridad|
>> |---|---|
>> |1 día antes|El mismo día, a las 00:01|
>> |2 días antes|El día anterior, a las 00:01|
>> |3 días antes|Dos días antes, a las 00:01|
>> |1 semana|El domingo anterior, a la 01:00|
>> |2 semanas|El domingo de dos semanas antes, a la 01:00|
>>
>> Una vez seleccionada la fecha, haga clic en el botón `Siguiente`{.action}. 
>>
> **Etapa 6**
>>
>> ![backup ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/restore-backup-step-1.png){.thumbnail}
>>
>> Asegúrese de que no se ha perdido ningún archivo en el proceso de restauración (por ejemplo, cualquier archivo que hubiera guardado en su espacio de almacenamiento después de la fecha de restauración seleccionada). Como ya hemos indicado, la restauración borrará todos los datos actuales para sustituirlos por los de la copia de seguridad.
>>
>> Haga clic en `Aceptar`{.action} para restaurar la copia de seguridad.

> [!primary]
>
> La restauración automática puede tardar desde unos minutos hasta unas horas. Si dura **más de 24 horas**, contacte con [el soporte de OVHcloud](/links/support).
>

### Restaurar un archivo desde un programa o una interfaz web <a name="viainterface"></a>

Esta operación se realiza en varios pasos. Asegúrese de tener la contraseña del usuario FTP para acceder a su espacio de almacenamiento. 

> [!warning]
>
> Para realizar las siguientes acciones, debe tener conocimientos sobre el programa o la interfaz web que vaya a utilizar. A continuación ofrecemos algunas indicaciones sobre cómo realizarlas. No obstante, si tiene alguna duda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del programa o la interfaz. Nosotros no podremos asistirle.
>

#### 1. Elegir el programa o la interfaz web que vaya a utilizar

En primer lugar, defina el software o la interfaz que va a utilizar para conectarse a la copia de seguridad de su espacio de almacenamiento. Si ya lo sabe, pase directamente al paso 2. De lo contrario, le recomendamos que utilice una de las dos soluciones siguientes:

- **FileZilla**: Puede descargar este programa desde la web oficial. Para más información, consulte nuestra [guía de uso de FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Esta guía no sustituye a la documentación oficial del editor.

- **Cyberduck**: Puede descargar este programa desde la web oficial. Para más información, consulte nuestra [guía de uso de Cyberduck (Mac)](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac). Esta guía no sustituye a la documentación oficial del editor.

Una vez que esté listo para continuar, vaya al siguiente paso.

#### 2. Conectarse a la copia de seguridad

Una vez en la interfaz web o el programa elegido, deberá conectarse a su espacio de almacenamiento para acceder a los datos de la copia de seguridad que quiera recuperar. Para realizar esta operación, necesitará el nombre de usuario FTP, la contraseña y el nombre de host del servidor FTP.

Puede consultar esta información en la pestaña `FTP - SSH`{.action} de su alojamiento.

![FTP- SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}

Si no tiene la contraseña FTP, siga las indicaciones de la guía "[Cambiar la contraseña de un usuario FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

![backup ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/login-infos.png){.thumbnail}

Al conectarse, deberá añadir a su nombre de usuario FTP el sufijo correspondiente a la copia de seguridad que desee, como se indica en la siguiente tabla:

|Fecha de la copia de seguridad|Sufijo|Ejemplo de nombre de usuario completo|
|---|---|---|
|El mismo día, a las 00:01|-snap0|usuarioftp-**snap0**|
|El día anterior, a las 00:01|-snap1|usuarioftp-**snap1**|
|Dos días antes, a las 00:01|-snap2|usuarioftp-**snap2**|
|El domingo anterior, a la 01:00|-snap3|usuarioftp-**snap3**|
|El domingo de dos semanas antes, a la 01:00|-snap4|usuarioftp-**snap4**|

En la tabla anterior, no olvide sustituir el valor **usuarioftp** por su nombre de usuario FTP y añádale el sufijo correspondiente en función de la copia de seguridad a la que quiera acceder.

La forma de conectarse al espacio de almacenamiento varía en función de la interfaz web o el programa que utilice.

#### 3. Descargar los archivos

Una vez que se haya conectado, deberá descargar los archivos que quiera restaurar. Para ello, navegue por el contenido de su espacio de almacenamiento y descargue los archivos. La operación varía en función de la interfaz web o el programa que utilice.

Antes de continuar en el siguiente paso, asegúrese de haber descargado todos los archivos que quiera restaurar y desconéctese del espacio de almacenamiento.

> [!success]
>
> Si utiliza un programa para conectarse a su espacio de almacenamiento FTP, le recomendamos que consulte la documentación oficial de su programa para realizar las operaciones correctamente.
>

#### 4. Restaurar los archivos 

Una vez que haya descargado los archivos, vuelva a conectarse al espacio de almacenamiento, pero esta vez sin añadir ningún sufijo al usuario FTP. Así se conectará al contenido actual del espacio de almacenamiento y no a una copia de seguridad anterior.

Una vez que se haya conectado, solo tiene que restaurar los archivos que desee. Para ello, navegue por el contenido del espacio de almacenamiento hasta localizar los archivos que quiera remplazar y sustitúyalos por los archivos descargados en el paso anterior.

> [!success]
>
> Si utiliza un programa para conectarse a su espacio de almacenamiento FTP, le recomendamos que consulte la documentación oficial de su programa para realizar las operaciones correctamente.
>

## Más información

[Web hosting: guía de uso de FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Web hosting: Guía de uso de Cyberduck (Mac)](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

[Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).