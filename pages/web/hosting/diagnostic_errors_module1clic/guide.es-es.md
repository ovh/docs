---
title: Resolver los errores más frecuentes asociados a los módulos en 1 clic
slug: errores-frecuentes-modulos-en-1-clic
excerpt: Diagnóstico de los errores más comunes relacionados con la creación de módulos en 1 clic
section: Diagnóstico
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 24/06/2021**

## Objetivo

La creación de un [Módulo en 1 clic](../modulos-en-un-clic/) en modo simple o avanzado puede provocar diferentes anomalías.

**Cómo diagnosticar los casos más comunes de errores asociados a la creación de módulos en 1 clic**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener contratado [un plan de hosting](https://www.ovh.es/hosting/) compatible.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Haber utilizado la funcionalidad [Módulo en 1 clic](../modulos-en-un-clic/) para crear un nuevo sitio web.

## Procedimiento

> [!primary]
>
> Aquí indicamos los errores más comunes. Si encuentra otra anomalía, consulte nuestras [FAQ en los alojamientos web](../faq-web-hosting/).
>

### "Se ha producido un error al cargar la información. (You need at least one free database)"

![1freeDB](images/1freeDB.png){.thumbnail}

Si aparece este mensaje al iniciar la instalación del módulo, no es posible crear una nueva base de datos en su alojamiento.

#### Solución n°1: cambiar el plan de hosting

> [!primary]
>
> Consulte nuestra comparativa de los distintos [planes de hosting](https://www.ovh.es/hosting/).
>

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en `Web Cloud`{.action} y seleccione `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y haga clic en `Cambiar de plan` en la sección `Suscripción` - `Producto`.

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

Los planes [Hosting Profesional](https://www.ovh.es/hosting/hosting-profesional.xml) y [Hosting Performance](https://www.ovh.es/hosting/hosting-performance.xml) permiten crear hasta tres módulos en 1 clic adicional. Los planes **Hosting Performance** también le permitirán activar gratis un [servidor SQL privado](https://www.ovh.es/hosting/opciones-sql.xml).

#### Solución n°2: eliminar una base de datos no utilizada <a name="delete-the-database"></a>

> [!warning]
>
> La operación de eliminación de una base de datos es definitiva. También implica la supresión de las copias de seguridad de la base de datos en cuestión. Si no está seguro de las operaciones a realizar, contacte con su webmaster o uno de nuestros [partners](https://partner.ovhcloud.com/es-es/directory/).
>

Para eliminar una base de datos, acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y haga clic en `Web Cloud`{.action}, seleccione `Alojamientos`{.action} y `Bases de datos`{.action}. Elimine la base de datos:

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Solución nº3: contratar nuevas bases de datos

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en `Web Cloud`{.action} y seleccione `Alojamientos`{.action}. En la `Bases de datos`{.action}, haga clic en `Acciones`{.action}.

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Consulte nuestra comparativa de los distintos [productos de bases de datos](https://www.ovh.es/hosting/opciones-sql.xml).
>

#### Solución nº4: instalar el módulo en una base de datos ya utilizada

Para instalar su módulo en una base de datos ya utilizada, deberá utilizar el [modo avanzado](../modulos-en-un-clic/#instalacion-avanzada-de-un-modulo) de instalación de un nuevo **módulo en 1 clic**.

Para consultar las claves de la base de datos, consulte nuestras [FAQ](https://www.ovh.es/hosting/faq/).

### "El directorio de instalación no está vacío"

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Una vez que haya creado el módulo, recibirá un mensaje de correo electrónico indicándole que el directorio de instalación del módulo no está vacío.

Este mensaje significa que la **carpeta raíz** a la que está asociado el dominio contiene uno o más archivos o carpetas.

Para asociar su dominio a otro directorio, haga clic en `Cambiar el dominio`{.action} en la pestaña `Multisitio`{.action} e indique el nombre de un nuevo **directorio raíz** (se creará automáticamente un directorio vacío en su alojamiento).

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

También puede conectarse al alojamiento por [FTP](../conexion-espacio-almacenamiento-ftp-alojamiento-web/) y después eliminar o mover el contenido de la carpeta después de guardarlo.

### "No se puede conectar a la base de datos" <a name="delete-the-module"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Una vez que haya iniciado la instalación del módulo en modo avanzado, recibirá un mensaje de correo electrónico indicándole que el módulo no puede conectarse a la base de datos indicada. 

Por lo tanto, debe verificar las claves de la base de datos. Para localizarlos, consulte nuestras [FAQ](https://www.ovh.es/hosting/faq/).

A continuación, elimine el módulo en la pestaña `Módulos en 1 clic`{.action}:

![delete_a_module](images/delete_a_module.png){.thumbnail}

A continuación, vuelva a instalar un nuevo módulo.

### Su dominio no se propone al crear el módulo

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Abra la pestaña `Multisitio`{.action} y realice las siguientes comprobaciones:

|Escenario|Medidas que deberá adoptar|
|---|---|
|El dominio o subdominio asociado al sitio que quiere crear no aparece en el `multisitio`{.action}.|Añada su dominio siguiendo [estas indicaciones](../configurar-un-multisitio-en-un-alojamiento-web/#2-anadir-un-dominio-o-subdominio).|
|El nombre de dominio se ha eliminado del multisitio sin que usted haga nada al respecto.|Si su dominio o su [zona DNS](../../web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns) no están gestionados desde su cuenta de OVHcloud, añada su dominio al `multisitio`{.action} siguiendo [esta guía](../configurar-un-multisitio-en-un-alojamiento-web/#22-anadir-un-dominio-externo).|

### Su módulo se muestra en una dirección web de tipo "xxxxx.cluster0xx.hosting.ovh.net".

![url-cluster](images/url-cluster.png){.thumbnail}

Una vez que haya realizado todas las copias de seguridad necesarias, [elimine el módulo](#delete-the-module) y, a continuación, la [base de datos](#delete-the-database). A continuación, vuelva a instalar el dominio correspondiente.

### Su antiguo sitio web sigue apareciendo

Esta anomalía puede tener varias causas:

- Recientemente ha realizado un cambio en la zona o servidores [DNS](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/) o una [transferencia de dominio](../../domains/transferir-un-dominio-generico/). Espere a que estas operaciones se completen (48 horas para realizar cambios en sus DNS). También puede reiniciar los dispositivos (PC, smartphone, box, etc.) y vaciar la caché de su navegador.

- Su dominio siempre está asociado a su antiguo alojamiento. Cambie en este caso su [zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#editar-la-zona-dns-de-ovhcloud-de-su-dominio_1) o sus [servidores DNS](../../domains/web_hosting_informacion_general_sobre_los_servidores_dns/#cambiar-los-servidores-dns) o contacte con su antiguo proveedor de hosting.

## Más información <a name="gofurther"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
