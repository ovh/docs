---
title: Primeros pasos con un hosting Cloud Web
slug: primeros-pasos-hosting-cloud-web
excerpt: Cómo empezar con un alojamiento Cloud Web
section: Primeros pasos
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 04/05/2022**

## Objetivo

El plan de hosting Cloud Web de OVHcloud es el resultado de combinar veinte años de experiencia en el alojamiento web con la potencia de nuestra solución Public Cloud. Al igual que los planes de hosting convencionales, permite alojar sitios web en un servicio administrado durante las 24 horas del día, los 7 días de la semana, pero ofrece muchas más funcionalidades, como el rendimiento de los discos SSD.

**Esta guía explica cómo empezar con un hosting Cloud Web.**

## Requisitos

- Tener contratado un plan de hosting [Cloud Web](https://www.ovhcloud.com/es-es/web-hosting/cloud-web-offer/) de OVHcloud.
- Haber recibido el email de confirmación de la instalación del hosting Cloud Web.
- Disponer de un [dominio](https://www.ovhcloud.com/es-es/domains/) con el que poder acceder a su sitio web.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

### 1. Definir el proyecto

Con el fin de adaptarse lo mejor posible a cada proyecto, el plan de hosting Cloud Web ofrece más posibilidades de configuración que un alojamiento web convencional. Para llevar su proyecto a buen puerto, es importante tener una visión clara de su objetivo. Para ello, le ofrecemos las siguientes recomendaciones:

- **Delimite el proyecto:** ¿Quiere crear un blog o una tienda online? ¿Desea compartir una de sus pasiones o promocionar su actividad profesional en internet? Defina claramente las especificaciones del proyecto antes de empezar.

- **Establezca los requisitos técnicos para la instalación:** Es posible que el proyecto que quiera desplegar tenga requerimientos técnicos concretos. Asegúrese de conocerlos previamente.

- **Asegúrese de que su proyecto es técnicamente compatible con el hosting  Cloud Web:** ¿Necesita un motor de ejecución o un SQL concretos? Si todavía no lo ha hecho, asegúrese de que están disponibles con el [hosting Cloud Web](https://www.ovhcloud.com/es-es/web-hosting/cloud-web-offer/).

Una vez que haya evaluado las distintas posibilidades y haya delimitado el proyecto con precisión, puede empezar a publicarlo en internet.

### 2. Elegir el motor de ejecución

El hosting Cloud Web ofrece la posibilidad de desarrollar un proyecto en distintos lenguajes de programación. Si quiere utilizar un lenguaje distinto de PHP, que es el lenguaje por defecto, deberá seleccionar el motor de ejecución correspondiente.

Los lenguajes disponibles actualmente son:

- PHP
- Node.js
- Python
- Ruby

Para ver los motores de ejecución de su hosting Cloud Web, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento Cloud Web correspondiente. A continuación, abra la pestaña `Motores de ejecución`{.action}.

Al instalar el alojamiento, se crea automáticamente un motor, que aparece en la tabla como **Opción por defecto**. Para cambiar de motor, haga clic en el botón `...`{.action} situado al final de la línea correspondiente y seleccione `Editar`{.action}. 

Según el plan [Cloud Web](https://www.ovhcloud.com/es-es/web-hosting/cloud-web-offer/) del que disponga, también puede añadir motores de ejecución adicionales haciendo clic en el botón `Acciones`{.action} y seleccionando `Añadir un motor de ejecución`{.action}. Tenga en cuenta que el número máximo de motores de ejecución depende del plan Cloud Web que tenga contratado. Por lo tanto, asegúrese de disponer del motor o motores de ejecución necesarios para su proyecto antes de continuar.

![Cloud Web](images/cloud-web-first-steps-step1.png){.thumbnail}

### 3. Crear variables de entorno (opcional)

Si desea desplegar su proyecto en varios entornos (por ejemplo, en desarrollo, testeo o producción), deberá establecer la configuración correspondiente para que el código pueda identificarlos. Para ello, en un hosting Cloud Web es posible configurar variables de entorno, que estarán disponibles para el código del sitio o aplicación web.

Esto permite, por ejemplo, no definir un archivo «.env» en el framework PHP Laravel, tal como indica la documentación de Laravel: <https://laravel.com/docs/5.6/configuration>.

Para añadir una variable de entorno, una vez seleccionado el alojamiento Cloud Web en el área de cliente de OVHcloud, abra la pestaña `Variables de entorno`{.action}. Se mostrará una tabla que contiene las variables de entorno creadas en su alojamiento. Para añadir una nueva, haga clic en el botón `Acciones`{.action} y seleccione `Añadir una variable de entorno`{.action}. Siga las indicaciones en función de la variable que desee crear.

![Cloud Web](images/cloud-web-first-steps-step2.png){.thumbnail}

Si no utiliza ningún framework de desarrollo que incluya las variables de entorno, o si simplemente quiere comprobar que las variables funcionen correctamente, puede crear un script que realice dicha comprobación. A continuación ofrecemos dos ejemplos que le ayudarán en esta tarea (sin que estos sustituyan la ayuda de un webmaster).

**PHP**

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

**Node.js**

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

No olvide sustituir el valor «DB_DATABASE» por la variable de entorno correspondiente.

### 4. Configurar dominios adicionales como multisitio (opcional)

Con el entorno técnico del hosting Cloud Web ya listo, es posible configurar dominios adicionales como multisitio para poder alojar varios sitios web en el mismo alojamiento. Para ello, una vez seleccionado el alojamiento Cloud Web en el área de cliente de OVHcloud, abra la pestaña `Multisitio`{.action}.

Se mostrará una tabla que contiene todos los dominios añadidos al alojamiento. Algunos de ellos se habrán creado automáticamente al instalarlo. Para añadir un nuevo dominio, haga clic en el botón `Añadir un dominio o subdominio`{.action} y siga las indicaciones. El procedimiento puede variar si el dominio no está registrado en OVHcloud. 

Cuando introduzca los datos, tenga en cuenta lo siguiente:

- **Carpeta raíz:** Directorio en el que deberá alojar el dominio en el espacio de almacenamiento de su hosting Cloud Web. 

- **Motor de ejecución:** Motor de ejecución, previamente configurado, que utilizará el multisitio.

> [!warning]
>
> Si ha añadido un dominio externo, deberá crear un registro TXT llamado **ovhcontrol** en su configuración DNS. Dicho registro permite a OVHcloud asegurarse de que la adición del dominio es legítima. Por lo tanto, es un requisito indispensable. De no cumplirlo, no será posible añadir el dominio. 
>

Repita la operación para cada dominio que quiera añadir a su hosting Cloud Web, en su caso. Para más información sobre cómo añadir un dominio como multisitio, consulte la guía [Alojar varios sitios web en un mismo hosting](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/){.external}.

![Cloud Web](images/cloud-web-first-steps-step3.png){.thumbnail}

### 5. Instalar el proyecto en el hosting Cloud Web

Existen dos formas de instalar un proyecto. Si quiere instalar más de uno, deberá repetir los pasos correspondientes al procedimiento elegido para cada proyecto.

#### 5.1. Utilizar los módulos en un clic

Los módulos en un clic permiten tener la estructura de un sitio web lista para usar, que podrá personalizar a su gusto (diseño, contenido, etc.). OVHcloud ofrece cuatro módulos en un clic, que puede consultar en la página [Crear un sitio web con los CMS más populares](https://www.ovhcloud.com/es-es/web-hosting/uc-website/){.external}.

Si elige esta opción, una vez seleccionado el alojamiento Cloud Web en el área de cliente de OVHcloud, abra la pestaña `Módulos en un clic`{.action} y seleccione `Añadir un módulo`{.action}. A continuación podrá comenzar la instalación en modo estándar (no personalizable) o avanzado (que permite personalizar determinados elementos).

Si desea más información sobre los módulos en un clic de OVHcloud, consulte la guía [Instalar un sitio web con un módulo en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/){.external}

> [!primary]
>
> Para utilizar los módulos, es necesario utilizar el motor de ejecución PHP.
>

![Cloud Web](images/cloud-web-first-steps-step4.png){.thumbnail}

#### 5.2. Instalar el proyecto manualmente

La instalación manual, tanto para un nuevo sitio web como para migrar uno existente, es más técnica y requiere ciertos conocimientos. Le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del servicio. 

Si opta por realizar la instalación manual, deberá tener en su poder los archivos del sitio web o aplicación que quiera instalar, así como las claves de la base de datos, en su caso, que deberá haber creado previamente en su hosting Cloud Web. Si se trata de la migración de un sitio web, deberá disponer de una copia completa del mismo.

Aunque no existe un procedimiento universal, ya que cada proyecto es distinto, nuestras guías [Publicar un sitio web en internet](https://docs.ovh.com/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/){.external} y [Migrar un sitio web y el correo a OVHcloud](https://docs.ovh.com/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external} pueden ayudarle a realizar las operaciones necesarias.

### 6. Modificar la configuración del dominio

En este punto, ya habrá instalado su proyecto en su hosting Cloud Web y habrá creado sus direcciones de correo. Si dichas direcciones no funcionan, es posible que la configuración del dominio no sea correcta. En ese caso, o si no está seguro, le recomendamos que lea con atención la siguiente información.

Si está migrando sus servicios a OVHcloud, tenga en cuenta que las operaciones relacionadas con los DNS, si no se realizan en el momento adecuado, pueden provocar que los servicios dejen de estar disponibles. Tal como se indica en la guía [Migrar un sitio web y el correo a OVHcloud](https://docs.ovh.com/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external}, deberá modificar los servidores DNS del dominio al final del proceso.

#### 6.1. Conocer los registros de la zona DNS de OVHcloud 

Existen varios registros DNS específicos de OVHcloud. A continuación explicamos dos de ellos, que permiten que sea posible acceder a su sitio web y recibir mensajes en las direcciones de correo electrónico de OVHcloud. En la siguiente tabla se indica dónde puede consultarlos:

|Registro DNS|Servicio asociado|Dónde consultarlo|
|---|---|---|
|A|El sitio web|En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el hosting Cloud Web. A continuación, en la pestaña `Información general`{.action}, consulte la dirección IP que aparece en el apartado **IPv4**.|
|MX|El correo electrónico |En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en `Correo electrónico`{.action} y seleccione el dominio correspondiente. A continuación, en la pestaña `Información general`{.action}, consulte la información que aparece en el apartado **Registros MX**.|

#### 6.2. Comprobar y/o modificar los registros DNS

Una vez que conozca los registros DNS específicos de su hosting Cloud Web y su servicio de correo en OVHcloud, compruebe que estos están bien configurados y, si no lo están, corríjalos. Estas operaciones siempre deben realizarse en el proveedor que gestione la configuración DNS (la zona DNS) de su dominio.

> [!warning]
>
> - Si el dominio no utiliza la configuración DNS de OVHcloud, deberá realizar los cambios necesarios desde el panel que le ofrezca el proveedor que gestione dicha configuración.
> 
> - Si el dominio está registrado con OVHcloud, compruebe que utiliza nuestra configuración DNS. Para ello, en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, seleccione el dominio en la columna izquierda y abra la pestaña `Servidores DNS`{.action}.
>

A continuación se indica dónde realizar las operaciones correspondientes:

|Configuración DNS utilizada|Dónde realizar las operaciones|
|---|---|
|OVHcloud|En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action} y revise la información, modificándola cuando sea necesario. Si lo necesita, puede consultar nuestra guía [Editar una zona DNS de OVHcloud](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}.|
|Otros|Utilice el panel que le ofrezca el proveedor que gestione la configuración DNS de su dominio. Contacte con este último si tiene dificultades para realizar las operaciones.|

Una vez que haya editado la configuración DNS del dominio, los cambios tardarán un máximo de 24 horas en propagarse y ser efectivos. Si ha añadido varios dominios a su hosting Cloud Web como multisitio, deberá realizar las dos operaciones anteriores para cada uno de ellos. 

### 7. Personalizar el sitio web

Puede omitir este paso si ha migrado un sitio web existente y que, por tanto, ya está personalizado. Sin embargo, si acaba de instalar un nuevo sitio web mediante nuestros módulos, por ejemplo, puede personalizarlo cambiando el tema y publicando contenido.

Para más información sobre las distintas funcionalidades de su nuevo sitio web, consulte la documentación oficial del CMS correspondiente.

### 8. Utilizar las direcciones de correo

Para utilizar sus direcciones de correo electrónico, OVHcloud pone a su disposición un cliente de correo web (webmail): Roundcube. Puede conectarse desde <https://www.ovh.es/mail/>, donde deberá introducir la contraseña de la dirección de correo electrónico creada con OVHcloud.

Para más información sobre el uso de Roundcube, consulte nuestra [Guía de uso de Roundcube](https://docs.ovh.com/es/emails/webmail_guia_de_uso_de_roundcube/){.external}. Si desea configurar su dirección de correo electrónico en un cliente de correo o un dispositivo externo (smartphone o tablet), consulte la siguiente documentación: <https://docs.ovh.com/es/emails/>.

## Más información

[Migrar un sitio web y el correo a OVHcloud](https://docs.ovh.com/es/domains/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external}

[Publicar un sitio web en internet](https://docs.ovh.com/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/){.external}

[Instalar un sitio web con un módulo en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/){.external}

[Alojar varios sitios web en un mismo hosting](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.