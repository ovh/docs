---
title: Utilizar Hosting Plesk
slug: descubrir-utilizar-plesk
excerpt: Como utilizar la solucion Hosting Plesk
section: Hosting Plesk
---


## Antes de empezar

### Que necesita?
Para facilitarle la navegación en esta guía, puede elegir su caso para acceder directamente al apartado correspondiente:

- [No tengo un Hosting Plesk y quiero conocer el servicio.](#plesk_desc){.external}
- [Quiero contratar un Hosting Plesk o conocer las modalidades de entrega y renovación del servicio.](#plesk_order){.external}
- [Ya tengo un Hosting Plesk y quiero administrar el servidor.](#plesk_server){.external}
- [Quiero información relativa al uso del panel Plesk.](#plesk_panel){.external}
- [Quiero consultar la respuesta a las preguntas más frecuentes (FAQ) sobre el producto Hosting Plesk.](#plesk_faq){.external}

<a name="plesk_desc"></a>

## Descripcion
Plesk es una plataforma que permite administrar proyectos web sin tener conocimientos específicos de DevOps, ya que no es necesario utilizar un terminal y líneas de comandos para desplegar proyectos, sitios web, bases de datos, correo, etc.

Disfrute de la simplicidad de Plesk para realizar (o que sus clientes puedan realizar) sus proyectos en pocos clics.

Para más información sobre Plesk, visite la [web oficial](https://www.plesk.com/){.external}.


### Tabla comparativa de los productos
||VPS Classic 1|VPS Classic 2|VPS Classic 3|Pro 1|Pro 2|
|---|---|---|---|---|---|
|**Principales funcionalidades**||||||
|Licencia Plesk [[1]](#id4){.note-ref #id1}|Web Pro + Opción revendedor|Web Pro + Opción revendedor|Web Pro + Opción revendedor|Web Host + Opción revendedor|Web Host + Opción revendedor|
|Número de sitios web|Hasta 30|Hasta 30|Hasta 30|Ilimitado|Ilimitado|
|Espacio web|50 GB|100 GB|200 GB|400 GB|800 GB|
|Cuentas de correo|100|200|400|Ilimitadas|Ilimitadas|
|Peticiones por segundo [[2]](#id5){.note-ref #id2}|Hasta 60|Hasta 60|Hasta 120|Hasta 160|Hasta 200|
|Multidominio|Ilimitado|Ilimitado|Ilimitado|Ilimitado|Ilimitado|
|Tráfico|Ilimitado|Ilimitado|Ilimitado|Ilimitado|Ilimitado|
|Ancho de banda|100 Mbps|100 Mbps|100 Mbps|**250 Mbps**|**500 Mbps**|
|SLA|99,95%|99,95%|99,95%|99,95%|99,95%|
|IPv4 fija|Incluida|Incluida|Incluida|Incluida|Incluida|
|IPv6 fija|Incluida|Incluida|Incluida|Incluida|Incluida|
|Certificado SSL Let's Encrypt|Incluido|Incluido|Incluido|Incluido|Incluido|
|Bases de datos|Hasta 30|Hasta 30|Hasta 30|Ilimitadas|Ilimitadas|
|**Características del servidor** [[3]](#id6){.note-ref #id3}||||||
|CPU|2,4 GHz|2,4 GHz|2,4 GHz|2,3 GHz|2,3 GHz|
|vCores|1|1|2|4|8|
|RAM|2 GB|4 GB|8 GB|15 GB|30 GB|
|Recursos|Compartidos|Compartidos|Compartidos|**Garantizados**|**Garantizados**|
|Migración al modelo superior|Próximamente disponible|Próximamente disponible|Próximamente disponible|Próximamente disponible|No disponible|

[[1]](#){.note-ref #id4} - ([1](#id1){.fn-backref}) 
<cite>Sin acceso root al servidor. El acceso al panel Plesk se realiza a través de la cuenta de revendedor. Para más detalles, consulte el apartado Preguntas frecuentes.</cite>

[[2]](#){.note-ref #id5} - ([1](#id2){.fn-backref}) 
<cite>Probado en páginas dinámicas con WordPress 4.5 y PHP 7.</cite>

[[3]](#){.note-ref #id6} - ([1](#id3){.fn-backref}) 
<cite>El VPS comparte recursos físicos (infraestructuras) con otros usuarios, pero tiene una parte de recursos dedicada.</cite>


#### Funcionalidades de todos los modelos de Hosting Plesk
**Funcionalidades incluidas exclusivas de OVH**

- Soporte telefónico o por email
- Protección anti-DDoS
- Panel de administración de OVH

**Funcionalidades de Plesk**

- [Plesk Onyx](https://www.plesk.com/){.external}
- Cuenta de revendedor Plesk completa
- Cuentas de clientes ilimitadas con acceso al panel Plesk
- Panel con vistas «Power User» y «proveedor de servicios»
- Actualización automática del sistema operativo y del panel Plesk
- Catálogo de aplicaciones Plesk (más de 250 aplicaciones: WordPress, Joomla, Drupal, PrestaShop, etc.)
- Selección del idioma del panel Plesk [[4]](#id13){.note-ref #id7}

**Funcionalidades de WordPress**

- Instalación gratuita de WordPress en un clic
- Configuración de la actualización automática de WordPress
- Escáner de seguridad avanzada del sitio WordPress

**Funcionalidades para desarrolladores**

- Múltiples versiones de PHP (7.1, 7.0, 5.6, 5.5 y más)
- Soporte de Git para el despliegue de sitios web
- Soporte de Ruby, NodeJS, Perl y Python
- Bases de datos MySQL y PostgreSQL
- Cuentas SSH y SFTP ilimitadas
- Cuentas de usuarios web y FTP ilimitadas, con gestión avanzada de los permisos

<a name="plesk_demo"></a>

### Probar la solucion Hosting Plesk
demo
Puede probar la solución Hosting Plesk de OVH directamente en la [demo](http://ovh.to/BXWNX8){.external}. Este entorno de demostración se reinicia cada 24 horas.

**Limitaciones de la demo:**

- La contraseña de la cuenta de revendedor de prueba no puede modificarse.
- No es posible personalizar la interfaz (logo, título de la página...).
- Los accesos SSH y SMTP están cerrados.

Estas limitaciones de la cuenta de prueba no existen en la solución Hosting Plesk.

<a name="plesk_order"></a>

## Contratacion, entrega y renovacion del servicio

### Contratar un Hosting Plesk
Acceda a la [página de presentación de la solución Hosting Plesk](https://www.ovhcloud.com/es-es/plesk-web-hosting/){.external} y elija el modelo que mejor se ajuste a sus necesidades haciendo clic en el botón `Contratar`{.action}.

Se mostrará una página con la previsualización del pedido. Haga clic en `Continuar`{.action}.

Si ya tiene una cuenta de cliente de OVH, conéctese a ella. Si no, cree una.

Acepte los contratos y haga clic en `Confirmar y pagar`{.action} para acceder a la orden de pedido. Ya solo tendrá que abonar el pedido utilizando una de las formas de pago asociadas a su cuenta.



> [!primary]
>
> La creación de su Hosting Plesk puede tardar varias horas. Cuando los servicios estén listos, se lo notificaremos por correo electrónico.
> 

Ya puede disfrutar de su Hosting Plesk.


### Acceder a la plataforma Hosting Plesk

#### Recepcion del email de notificacion de la entrega
Cuando se haya creado su Hosting Plesk, recibirá por correo electrónico toda la información necesaria para acceder al servicio.

A continuación se muestra un ejemplo de dicho email:

```
 Estimado/a cliente:
 
 Nos ponemos en contacto con usted para darle la bienvenida a OVH y agradecerle
 que haya confiado en nosotros para contratar la solución Hosting Pesk,
 su plataforma de gestión de sitios y aplicaciones en el cloud.
 
 Hemos creado una cuenta para que pueda empezar a utilizar su servicio Plesk.
 Estas son sus claves:
 
 Usuario: #LOGIN#
 Contraseña: Puede generar su contraseña en el siguiente enlace:
 #URL#
 
 Para acceder a su plataforma Plesk, haga clic en el siguiente enlace:
 #PLESKURL#
 ```

#### Que hacer si no ha recibido el email o no lo encuentra
Revise la carpeta de correo no deseado de su buzón. También puede [cambiar la dirección de correo asociada a su cuenta](#change_email){.external} si lo necesita.

Compruebe si el producto está disponible en el área de cliente de OVH. Consulte [este apartado de la guía](#plesk_manager){.external} para más detalles.

Si el producto no aparece en el área de cliente y han pasado más de 24 horas desde su contratación, [contacte con el soporte](https://www.ovh.es/soporte/contacto/){.external}.


#### Como generar la contrasena de acceso al panel Plesk
Como medida de seguridad, la contraseña de acceso al panel Plesk no se incluye directamente en el email de entrega, sino que le enviamos un enlace desde el que podrá generarla usted mismo.

Para elegir la contraseña, haga clic en el enlace de generación de la contraseña que contiene el email de entrega. Se abrirá un formulario precumplimentado con su nombre de usuario y su dirección de correo electrónico. Haga clic en `Enviar`{.action}.

Recibirá por correo electrónico un mensaje con el enlace de creación de la contraseña con el siguiente formato:

```
 Dear user,
 
 Your password could not be sent because it is stored in the encrypted form.
 
 To set up a new password, please follow the link:
 https://hr-doc-1.reseller.mis.ovh.net:8443/ch_pass_by_secret.php?secret=gRt3fYylwctOowCjB9gT79XEGNkfydn7A
 ```
Haga clic en el enlace para acceder a la página de generación de la contraseña.

Cumplimente el formulario para elegir su contraseña. El nombre de usuario será el mismo que en el primer paso. La contraseña deberá contener cifras, letras mayúsculas, letras minúsculas y caracteres especiales tales como los siguientes: ! @ # $ % ^ & * ? _ ~



> [!primary]
>
> Si no ha recibido el email de generación de la contraseña, compruebe que este no se encuentre en la carpeta de correo no deseado. También puede cambiar la dirección de correo asociada a su cuenta si lo necesita (es posible que su proveedor de correo electrónico rechace el email, lo cual puede ocurrir especialmente en las cuentas Hotmail o Live).
> 


### Renovar o eliminar un Hosting Plesk

#### Renovacion
Existen dos formas de renovar el producto:

**Desde el área de cliente:**

- En el [área de cliente de OVH](https://www.ovh.com/manager/){.external}, acceda a la sección `Facturación`{.action} y haga clic en `Mis servicios`{.action}.
- En el desplegable, elija los servicios de tipo **Revendedor de hosting**.
- Haga clic en la rueda dentada situada al final de la línea correspondiente al servicio Hosting Plesk, y seleccione `Renovar`{.action}. También puede cambiar el tipo de renovación para activar la renovación automática.

**Desde la API:**

Utilice esta llamada a la [API de OVH](https://eu.api.ovh.com/console/){.external} para gestionar la renovación del servicio:


> [!api]
>
> @api {PUT} /hosting/reseller/{serviceName}/serviceInfos
> 

#### Eliminacion
Existen dos formas de eliminar el producto:

**Desde el área de cliente:**

- Aceda a la sección `Facturación`{.action} del [área de cliente de OVH](https://www.ovh.com/manager/){.external} y haga clic en `Mis servicios`{.action}.
- En el desplegable, elija los servicios de tipo **Revendedor de hosting**.
- Haga clic en la rueda dentada situada al final de la línea correspondiente al servicio Hosting Plesk  y seleccione `Dar de baja`{.action}. En caso de que aparezca un error, active la renovación automática, también desde la rueda dentada de configuración, y a continuación haga clic en `Cancelar`{.action}.

**Desde la API:**

Utilice esta llamada a la [API de OVH](https://eu.api.ovh.com/console/){.external} para dar de baja el servicio:


> [!api]
>
> @api {PUT} /hosting/reseller/{serviceName}/serviceInfos
> 
Introduzca los siguientes parámetros:

```
 {
     "renew": {
         "period": 1,
         "forced": true,
         "automatic": true,
         "deleteAtExpiration": true
     }
 }
 ```


> [!warning]
>
> Atención: La cancelación de la renovación automática deberá realizarse antes del día 20 del mes. A partir de ese día, será efectiva al final del mes siguiente.
> 

Puede consultar toda la información relativa a la gestión de sus servicios en [esta guía](https://docs.ovh.com/es/es/account/billing/renovacion-automatica-ovh/){.external}.

<a name="plesk_server"></a>

## Gestion del servidor de Hosting Plesk

### Informacion relativa al servicio Hosting Plesk
<a name="plesk_manager"></a>
**Desde el área de cliente:**

Acceda a la [sección Sunrise del área de cliente de OVH](https://www.ovh.com/manager/sunrise/index.html#/){.external}.

En la columna izquierda, haga clic en `Hosting Reseller`{.action}. Se mostrarán todos sus productos de Hosting Plesk.

Seleccione el servicio que desee. En el panel central podrá ver la información relativa a dicho servicio.


![hosting](images/5.png){.thumbnail}

**Desde la API:**

Utilice las siguientes llamadas a la [API de OVH](https://eu.api.ovh.com/console/){.external} para obtener información relativa al servicio:


> [!api]
>
> @api {GET} /hosting/reseller
> 

> [!api]
>
> @api {GET} /hosting/reseller/{serviceName}
> 

### Gestion del servidor de Hosting Plesk
A continuación se describen las posibles acciones para gestionar el servidor de Hosting Plesk.


#### Ir al panel de control
Dirige al panel Plesk

La URL del panel de Plesk, que tiene el siguiente formato: https://{serviceName}.reseller.mis.ovh.net:8443


> [!api]
>
> @api {GET} /hosting/reseller/{serviceName}
> 
Utilice el parámetro url, al que deberá añadir el protocolo https:// y el puerto 8443.
Ejemplo: https://{url}:8443
<a name="change_email"></a>

#### Cambiar la direccion de correo electronico asociada a su cuenta
Cambia la dirección de correo electrónico asociada a la cuenta de Plesk. Por defecto, dicha dirección de correo electrónico es la que está asociada al ID de cliente de OVH con el que ha contratado el producto. Puede consultarla en los detalles del producto del área de cliente de OVH o utilizando la llamada a la API que se indica en la sección [Información relativa al servicio Hosting Plesk](#plesk_manager){.external} de esta guía.

La nueva dirección de correo electrónico

La dirección de correo electrónico asociada a la cuenta con la que accede al panel Plesk se cambia por la nueva dirección.


> [!api]
>
> @api {POST} /hosting/reseller/{serviceName}/email
> 

#### Restaurar la contrasena
Proporciona el enlace hacia la página desde la que se puede restaurar la contraseña. Esta contraseña es la de la cuenta «Reseller» creada al contratar el servicio.

Ninguno

La URL de restauración de la contraseña del panel Plesk, que tiene el siguiente formato: https://{serviceName}.reseller.mis.ovh.net:8443/get_password.php?email={emailAddress}&login_name={username}.

- 
Acceda a la URL indicada desde un navegador de internet.
- 
Haga clic en `Enviar`{.action}. Debería aparecer un mensaje similar al siguiente: «Información: Le hemos enviado a su dirección de correo electrónico las instrucciones para cambiar la contraseña».
- 
Como la contraseña está cifrada, recibirá un email con un enlace que contiene una clave de cambio de contraseña.
- 
Siga el enlace de cambio de contraseña y cumplimente el formulario para elegir una nueva contraseña.


> [!api]
>
> @api {GET} /hosting/reseller/{serviceName}/resetPasswordUrl
> 

#### Cambiar el idioma
Cambia el idioma global del panel Plesk. En la solución Hosting Plesk, solo hay un idioma disponible al mismo tiempo para el panel, ya que este está asociado a la licencia que incluye el servicio. Esto significa que el cambio de idioma es global y se aplica a todas las cuentas de usuario del panel Plesk.

Idioma [[4]](#id13){.note-ref #id12}

El idioma global del panel Plesk se actualiza con el idioma solicitado.


> [!api]
>
> @api {POST} /hosting/reseller/{serviceName}/language
> 

#### Cambiar el registro inverso
Cambia el registro inverso de la IPv4 o IPv6 de su servidor de Hosting Plesk. Para ello, deberá crear previamente un registro de tipo A o AAAA hacia el registro inverso deseado. A continuación, nosotros probamos automáticamente la resolución para modificar el registro inverso de la IPv4 o IPv6.

El registro inverso

Se crea un registro de tipo PTR asociado a la dirección IPv4 o IPv6.


> [!api]
>
> @api {POST} /hosting/reseller/{serviceName}/reverse
> 

#### Reiniciar
Reinicia el servidor de Hosting Plesk.

**hard**:
Utilizando este parámetro, se realiza un reinicio de hardware (por defecto, el reinicio es de tipo software). El reinicio de software hace un apagado elegante y reinicia la instancia. El reinicio de hardware consiste en un reinicio eléctrico de la instancia.
La instancia se reinicia. El reinicio del servidor implica que los servicios dejarán de estar disponibles durante unos minutos.


> [!api]
>
> @api {POST} /hosting/reseller/{serviceName}/reboot
> 

#### Reinstalar
Reinstala por completo el servidor de Hosting Plesk.

Ninguno

La instancia se reinstala.


> [!api]
>
> @api {POST} /hosting/reseller/{serviceName}/reinstall
> 


> [!alert]
>
> Atención: La acción Reinstalar elimina todos los datos y snapshots asociados al servidor de Hosting Plesk. Esta acción es irreversible. El servidor no estará disponible durante la reinstalación, que puede tardar varios minutos. A continuación, deberá utilizar la opción Restaurar la contraseña arriba descrita para obtener sus claves de conexión al panel Plesk.
> 

[[4]](#){.note-ref #id13} - ([1](#id7){.fn-backref}, [2](#id12){.fn-backref}) 
<cite>Idiomas disponibles: ar (ARABIC), ca-ES (CATALAN), cs-CZ (CZECH), da-DK (DANISH), de-DE (GERMAN), el-GR (GREEK), en-US (ENGLISH), es-ES (SPANISH), fi-FI (FINNISH), fr-FR (FRENCH), he-IL (HEBREW), hu-HU (HUNGARIAN), id-ID (INDONESIAN), it-IT (ITALIAN), ja-JP (JAPANESE), ko-KR (KOREAN), ms-MY (MALAY), nb-NO (NORWEGIAN), nl-NL (DUTCH), pl-PL (POLISH), pt-BR (PORTUGUESE), pt-PT (PORTUGUESE), ro-RO (ROMANIAN), ru-RU (RUSSIAN), sv-SE (SWEDISH), th-TH (THAI), tl-PH (TAGALOG), tr-TR (TURKISH), uk-UA (UKRAINIAN), vi-VN (VIETNAMESE), zh-CN (CHINESE), zh-TW (CHINESE)</cite>

<a name="ipfo"></a>

## Gestion de las IPv4 Failover
Es posible añadir direcciones IPv4 de tipo Failover a su Hosting Plesk. Esto puede ser útil si quiere asociar una dirección IP a cada sitio web o disfrutar una dirección IP geolocalizada.

Puede consultar toda la información relativa a las direcciones IP Failover en [esta página](https://www.ovh.es/servidores_dedicados/ip_failover.xml){.external}.



> [!primary]
>
> Las direcciones IP Failover son las únicas que pueden enrutarse a un Hosting Plesk. Los bloques RIPE no pueden.
> 


### Funcionamiento de las direcciones IP Failover en la solucion Hosting Plesk


> [!warning]
>
> La contratación de direcciones IP Failover con la solución Hosting Plesk todavía no está disponible, pero ya es posible enrutar IP contratadas a través de un VPS, una instancia de Public Cloud o un servidor dedicado.
> 


#### Adicion de una IP Failover
Existen dos formas de añadir una dirección IP Failover:

**Desde el área de cliente:**

- Acceda a la [sección Dedicado del área de cliente](https://www.ovh.com/manager/dedicated/){.external}.
- En la columna izquierda, haga clic en `IP`{.action}.
- En el panel central, haga clic en la rueda dentada situada al final de la línea correspondiente a la IP y seleccione `Mover la IP Failover`{.action}.
- Seleccione el servicio de destino y acepte.

**Desde la API:**

Utilice [esta llamada a la API de OVH](https://eu.api.ovh.com/console/){.external} para añadir una dirección IP Failover:


> [!api]
>
> @api {POST} /ip/{ip}/move
> 


> [!primary]
>
> Cuando la dirección IP esté enrutada a su Hosting Plesk, podrá utilizarla en el panel Plesk, en los parámetros de alojamiento de sus sitios web.
> 


#### Eliminacion de una IP Failover
**Desde el área de cliente:**

- Acceda a la [sección Dedicado del área de cliente](https://www.ovh.com/manager/dedicated/){.external}.
- En la columna izquierda, haga clic en `IP`{.action}.
- En el panel central, haga clic en la rueda dentada situada al final de la línea correspondiente a la IP y seleccione `Mover la IP Failover`{.action} (al aparcamiento de IP o a otro servicio) o `Eliminar la IP Failover`{.action} si no desea conservarla.

**Desde la API:**

Utilice [esta llamada a la API de OVH](https://eu.api.ovh.com/console/){.external} para aparcar la dirección IP Failover:


> [!api]
>
> @api {POST} /ip/{ip}/park
> 


> [!warning]
>
> Compruebe en su panel Plesk que ninguno de sus sitios web esté utilizando la dirección IP (en `Herramientas y utilidades`{.action} > `Direcciones IP`{.action}) y, si no es así, migre sus sitios a otra dirección y no olvide actualizar su zona DNS.
> Si algún sitio web utilizaba la dirección IP eliminada, se migrará automáticamente a la dirección IP principal de Hosting Plesk.
> 

<a name="plesk_panel"></a>

## Presentacion del panel Plesk

### Acerca de Plesk
- [Documentación y portal de ayuda](http://docs.plesk.com/es-ES/onyx/){.external}
- [Guía del revendedor: Familiarizándose con Plesk](https://docs.plesk.com/es-ES/onyx/reseller-guide/familiariz%C3%A1ndose-con-plesk/familiar%C3%ADcese-con-el-interfaz-de-plesk.65101/){.external}
- [Empiece su negocio en Plesk](https://docs.plesk.com/es-ES/onyx/reseller-guide/empiece-su-negocio-en-plesk.70436/){.external}


### Uso estandar
- [Administración de cuentas de cliente](https://docs.plesk.com/es-ES/onyx/reseller-guide/administraci%C3%B3n-de-cuentas-de-cliente.65730/){.external}
- [Administración de suscripciones](http://docs.plesk.com/es-ES/onyx/reseller-guide/administraci%C3%B3n-de-suscripciones.65732/){.external}
- [Administración de sitios web y dominios](http://docs.plesk.com/es-ES/onyx/reseller-guide/administraci%C3%B3n-de-sitios-web/sitios-web-y-dominios.70613/){.external}
- [Acceso a sus sitios web mediante FTP](http://docs.plesk.com/es-ES/onyx/reseller-guide/administraci%C3%B3n-de-sitios-web/acceso-a-sus-sitios-web-mediante-ftp.70615/){.external}
- [Configuración de correo](http://docs.plesk.com/es-ES/onyx/reseller-guide/administraci%C3%B3n-de-sitios-web/configuraci%C3%B3n-de-correo.70616/){.external}
- [Administración de bases de datos de sitios web](http://docs.plesk.com/es-ES/onyx/reseller-guide/administraci%C3%B3n-de-sitios-web/bases-de-datos-de-sitios-web.70619/){.external}
- [Creación de backups y restauración de sitios web](http://docs.plesk.com/es-ES/onyx/customer-guide/avanzado-creaci%C3%B3n-de-backups-y-restauraci%C3%B3n-de-sitios-web.69566/){.external}
- [Vistas de interfaz](https://docs.plesk.com/es-ES/onyx/reseller-guide/familiariz%C3%A1ndose-con-plesk/vistas-de-interfaz.73501/){.external}


### Uso avanzado
- [Help center](https://www.plesk.com/help-center){.external}
- [FAQ Plesk](https://docs.plesk.com/es-ES/onyx/faq/){.external}


## Preguntas frecuentes
<a name="contact_us"></a>

### Contacto
A continuación se encuentra la respuesta a las preguntas planteadas con más frecuencia sobre la solución Hosting Plesk.

Si quiere seguir la hoja de ruta de este producto, o si su pregunta no está respondida aquí, puede:

1. Utilizar nuestra lista de correo relativa al servicio Hosting Plesk:
- [Suscribirse](mailto:hosting-reseller-subscribe@ml.ovh.net){.external}
- [Enviar mensajes](mailto:hosting-reseller@ml.ovh.net){.external}
- [Desuscribirse](mailto:hosting-reseller-unsubscribe@ml.ovh.net){.external}
2. [Contactar con nuestro servicio de soporte](https://www.ovh.es/soporte/contacto/){.external}
<a name="plesk_faq"></a>

### Respuesta a las preguntas mas frecuentes
**¿Tengo acceso «root» al servidor de Hosting Plesk?**

Al tratarse de un producto *as a service*, no tiene acceso a la cuenta *root* del servidor. Este permiso de superusuario está destinado únicamente a los administradores de OVH.

No obstante, sí puede acceder al servidor Plesk por SSH creando un usuario desde su panel Plesk.

Para ello, en el panel Plesk, utilice el menú `Acceso a hosting web`{.action} del dominio correspondiente. A continuación, elija un tipo de *shell* para el propietario del dominio. Con el fin de evitar las limitaciones de acceso a los binarios del servidor, hemos abierto el acceso a las shells sin *chroot*.

Si debe realizar acciones que requieran permisos de superusuario, [contacte con nosotros](#contact_us){.external} y estudiaremos la viabilidad de su solicitud.

**¿Cuáles son las limitaciones de la cuenta de revendedor con respecto a una cuenta de administrador?**

Su cuenta maestra del panel Plesk es una cuenta de revendedor única. No se trata de una cuenta de administrador, por lo que pueden aplicársele restricciones. Algunas de esas restricciones son las siguientes:

Permisos disponibles:

- Acceso a la gestión de clientes, dominios, suscripciones y packs de servicios.
- Acceso a las herramientas y configuraciones de usuario (backup, interfaz, tráfico, recursos...).
- Acceso a las vistas «Proveedor de servicios» y «Power User».
- Acceso al catálogo de aplicaciones Plesk.

Permisos restringidos:

- Sin acceso a la gestión de revendedores (acceso únicamente a los parámetros de su cuenta de revendedor).
- Sin acceso a las herramientas y configuraciones globales del servidor (gestión de los servicios y demonios, actualizaciones...).
- Sin acceso al catálogo de extensiones Plesk (no dude en [contactar con nosotros](#contact_us){.external} si necesita una extensión y estudiaremos la viabilidad de su solicitud).

Si quiere probar la solución Hosting Plesk de OVH en condiciones reales, puede utilizar nuestra [demo](#plesk_demo){.external}.

**No necesito la opción de revendedor, ¿es obligatoria?**

La opción de revendedor está incluida por defecto en la licencia del producto. Si no la necesita, puede utilizar la vista «Power User» en lugar de la vista de proveedores de servicio. De esta forma, ocultará todos los menús relacionados con el modo para revendedores.

**¿Cómo editar valores de PHP?**

Puede editar los parámetros de PHP asociados a su alojamiento directamente desde el panel Plesk. En las guías de Plesk encontrará la información relativa a [dicha configuración](https://docs.plesk.com/es-ES/onyx/administrator-guide/administraci%C3%B3n-de-sitios-web/sitios-web-y-dominios/configuraci%C3%B3n-de-hosting/configuraci%C3%B3n-de-scripting-web/configuraci%C3%B3n-de-php.70742/){.external}.

Si el valor que quiere editar no está disponible en el panel Plesk, puede utilizar un archivo **.user.ini**, colocándolo en la raíz del directorio al que quiere aplicar dicho valor.

En los siguientes enlaces podrá encontrar la [lista de directivas PHP](http://php.net/manual/es/ini.list.php){.external}, los [modos de configuración](http://php.net/manual/es/configuration.changes.modes.php){.external} y la forma de [utilizar el .user.ini para PHP-FPM](http://php.net/manual/es/configuration.file.per-user.php){.external}.

**El correo de mi sitio web no se envía**

Si ha creado un nuevo sitio web y ha activado el servicio de correo para ese dominio, el correo se entregará en local en lugar de enviarse al servidor de correo indicado en los registros MX del dominio.

Si las cuentas de correo asociadas al dominio **no están** alojadas en Hosting Plesk, desactive el servicio de correo del dominio desde su panel Plesk.

Si sus mensajes de correo siguen sin enviarse, pruebe con un simple script PHP enviando un mensaje a una cuenta externa (OVH MX o Exchange, Gmail, Hotmail...) para comprobar que el servidor de correo funcione correctamente.

**¿Qué puertos tiene abiertos mi servidor?**

Al tratarse de un producto *as a service*, el cortafuegos (*firewall*) de su servidor de Hosting Plesk es gestionado por los administradores de OVH.

Estamos trabajando para incorporar una opción que le permita añadir o eliminar sus propias reglas de firewall. Puede suscribirse a nuestra [lista de correo](#contact_us){.external} para seguir el progreso de la hoja de ruta.

Los puertos abiertos por defecto son los siguientes:

20, 21, 22, 25, 53, 80, 110, 143, 443, 465, 587, 993, 995, 8443, 8447

20, 21, 25, 43, 53, 80, 123, 443, 5224, 11371

No dude en contactar con nuestro soporte su quiere abrir algún otro puerto.

**¿En qué tipo de discos están alojados los datos de mi Hosting Plesk?**

Toda la gama Hosting Plesk está alojada en discos de almacenamiento basados en la tecnología Ceph, por lo que tienen I/O garantizados y triple replicación.

**¿Puedo acceder a mi servidor MySQL/PostgreSQL desde el exterior?**

Aunque el panel Plesk le permite establecer permisos de usuario MySQL/PostgreSQL desde redes externas, los puertos MySQL y PostgreSQL están cerrados por el firewall.

Se trata de una medida de seguridad para evitar que se pueda acceder desde el exterior a su servidor de bases de datos.

[Contacte con nosotros](#contact_us){.external} si desea abrir esos puertos.

**¿Puedo utilizar la IPv4 y la IPv6 en varios sitios web?**

Las direcciones IPv4 e IPv6 incluidas con el servidor de Hosting Plesk están montadas en modo compartido, de modo que puede utilizarlas como desee en cada uno de los dominios y sitios web que gestione a través de su panel Plesk.

[Aquí](https://docs.plesk.com/es-ES/onyx/reseller-guide/familiariz%C3%A1ndose-con-plesk/visualizaci%C3%B3n-de-las-propiedades-de-su-suscripci%C3%B3n/visualizaci%C3%B3n-de-direcciones-ip.59864/){.external} encontrará la información relativa a la gestión de las direcciones IP en el panel Plesk.

**¿Puedo disfrutar de una IP Failover con mi servidor de Hosting Plesk?**

Sí, puede añadir direcciones IP Failover a su Hosting Plesk. Para más detalles, consulte [este apartado](#ipfo){.external}.

**¿Se realizan copias de seguridad de mi servidor de Hosting Plesk?**

OVH **no se encarga** de realizar el backup de sus datos. Usted mismo deberá realizar dicha configuración.

Aquí se indica cómo programar el backup de su Hosting Plesk: [Crear backups y restaurar sitios web](http://docs.plesk.com/es-ES/onyx/customer-guide/avanzado-creaci%C3%B3n-de-backups-y-restauraci%C3%B3n-de-sitios-web.69566/){.external}.

Esta solución le permitirá guardar copia de seguridad de sus sitios web y configuraciones localmente o en un servidor FTP externo.

Por otro lado, estamos trabajando para añadir una opción de snapshots automáticos del servidor.



> [!warning]
>
> Atención: Un snapshot es una imagen en un momento concreto. La restauración es completa y no permite restaurar un solo archivo, sino el servidor completo.
> 

**¿Qué hago si alcanzo las limitaciones de la licencia (número de sitios web, bases de datos, cuentas de correo...)?**

Pronto estará disponible la migración automática a un modelo superior. Hasta entonces, no dude en [contactar con nosotros](#contact_us){.external} para realizar dicha operación si lo necesita. Nosotros podremos migrarle a cualquier modelo superior de la gama Hosting Plesk, facturándole solo la diferencia de precio desde el día de la migración.

**¿Hay alguna oferta similar pero basada en cPanel?**

Todavía no tenemos un producto similar basado en cPanel.