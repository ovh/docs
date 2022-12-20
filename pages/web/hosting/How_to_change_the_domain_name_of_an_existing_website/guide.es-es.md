---
title: "Casos de uso - Cómo cambiar el dominio de un sitio existente"
slug: how_to_change_the_domain_name_for_an_existing_website
excerpt: "Descubra cómo cambiar el dominio de un sitio existente"
section: "Tutoriales"
order: 02
---

**Última actualización: 13/10/2022**

> [!primary]
>
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Durante la vida de su sitio web, puede necesitar cambiar el nombre de dominio de su sitio web.< br>El caso de uso más habitual es un cambio de nombre de empresa.

Este tutorial explica los pasos que debe seguir para cambiar el dominio de su sitio web.

**Descubra cómo cambiar el dominio de un sitio existente.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/). Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

## Requisitos

- Tener un [dominio](https://www.ovhcloud.com/es-es/domains/).
- Disponer de un [hosting OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/).
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

> [!warning]
>
> El cambio del dominio para acceder a su sitio puede tener consecuencias en su posicionamiento. 
> Esté atento a las operaciones que vaya a realizar o contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/) en el posicionamiento, si es necesario.
>

Para cambiar el dominio de acceso al sitio web, deberá realizar diversas acciones en un orden adecuado.

### Etape 1 - declarar el nuevo dominio en su alojamiento compartido <a name="step1"></a>

Declare su nuevo dominio con ayuda de nuestra documentación sobre el[adición de un multisitio a su alojamiento compartido](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/). Declare también su subdominio en `www` si desea, por ejemplo, que `www.NewDomain.tld` muestre también su sitio web además de `NewDomain.tld`.

Para que el paso 1 se cumpla correctamente, deberá cumplir varias condiciones:

- El nuevo dominio debe apuntar hacia la misma "carpeta raíz" que el dominio utilizado actualmente para acceder a su sitio web.
- Compruebe que su nuevo dominio apunta correctamente a la dirección IP correcta de su alojamiento compartido. Para obtener la dirección IP, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Web cloud`{.action}, haga clic en `Alojamientos`{.action}, seleccione su alojamiento y recupere **l IPv4** en la pestaña `Información general`{.action}.

> [!warning]
>
> Si activa las opciones **IP del país** o **CDN** con su nuevo dominio, utilice la dirección IP correcta con nuestra documentación que recoge [todas las direcciones IP de nuestros alojamientos compartidos](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/).
>
> Para consultar el número del cluster en el que se encuentra el alojamiento, acceda a la sección `Web cloud`{.action}, haga clic en `Alojamientos`{.action}, seleccione el alojamiento y abra la pestaña `FTP-SSH`{.action}. Podrá ver el número del cluster en el formulario **Servidor FTP y SFTP** : `ftp.cluster0XX.ovh.net` (donde los `X` representan el número de cluster).
>

> **Certificados SSL***
>
> Si el dominio inicialmente utilizado para acceder a su sitio web dispone de un certificado SSL, consulte nuestras dos guías para efectuar o verificar las acciones descritas justo debajo de estos dos enlaces :
> - [Gestionar un certificado SSL en un alojamiento web](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/)
> - [Habilitar HTTPS en un sitio web con certificado SSL](https://docs.ovh.com/es/hosting/activar-https-en-un-sitio-web-con-ssl/)
>
> Para el certificado SSL *Let's Encrypt* gratuito, solo tiene que activar la opción `SSL` **desde ahora** para su nuevo dominio a través de la pestaña `Multisitios`{.action} de su alojamiento. Haga clic en el botón `Acciones`{.action} situado sobre la tabla que muestra los multisitios y seleccione `Regenerar el certificado SSL`{.action}. La regeneración tardará al menos 2 horas en realizarse.
>
> Para los certificados SSL de pago *Sectigo DV* y *Sectigo EV* propuestos por OVHcloud, estos últimos solo son válidos para un único nombre de dominio y su subdominio en `www`.<br>
> **Cuando llegue al [paso 3](#step3) de esta guía**, deberá eliminar su certificado SSL de pago para contratar otro para su nuevo dominio.<br>
> *Atención: La eliminación es irreversible y no se realizará ninguna devolución por el tiempo restante de su antiguo certificado SSL. Asegúrese de que los pasos 1 y 2 se han realizado correctamente.*
>
> Para los demás certificados SSL *custom* que haya instalado usted mismo, contacte con su proveedor de certificados SSL para conocer las posibilidades que ofrece esta situación.
>

Si todas las acciones se han realizado correctamente, las declaraciones en multisitio de sus dominios deben ser estrictamente idénticas **excepto si utiliza un certificado SSL de pago de tipo *Sectigo DV*, *Sectigo EV* o *custom***.

![multisitios](images/multisites.png){.thumbnail}

> [!primary]
>
> Una vez realizada la primera etapa, los cambios tardarán entre 4 y 24 horas en propagarse y ser efectivos.
>

Si su sitio web no utiliza bases de datos ni reescribe URL para su sitio web, este último ya debe mostrarse correctamente con su nuevo dominio. En ese caso, vaya directamente a [el paso 3](#step3) de esta guía. En caso contrario, vaya al paso 2.

### Etapa 2 - reescritura de las URLs en su sitio web con el nuevo dominio

La mayoría de los sitios web utilizan bases de datos para funcionar. El árbol de estas se construye generalmente alrededor del dominio utilizado inicialmente para su sitio web. Se necesitan más acciones para estos sitios web.

> [!warning]
>
> Atención, las operaciones descritas en el paso 2 son extremadamente sensibles y pueden tener consecuencias graves para su sitio web si no se efectúan con precaución. Si tiene alguna duda, no intente nada y contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/).
>
> Antes de realizar cualquier acción, le recomendamos que obtenga una [copia de seguridad de su espacio de almacenamiento FTP](https://docs.ovh.com/es/hosting/restaurar-espacio-almacenamiento-alojamiento-web/) y una [copia de seguridad de su base de datos](https://docs.ovh.com/es/hosting/web_hosting_exportacion_de_una_base_de_datos/). Para restaurar el sitio web en caso de manipulación incorrecta.
>

Vamos a diferenciar dos tipos de sitios web: 

- CMS (*Content Management System*) como WordPress, Joomla, PrestaShop, Drupal, etc.
- sitios web convencionales diseñados por usted mismo o por su proveedor.

#### Caso n°1: su sitio web es un CMS

La mayoría de los CMS permiten directamente, desde su espacio de administración *back-office*, sustituir el dominio inicialmente declarado para su sitio web por otro.

Los CMS son desarrollados por terceros no gestionados por OVHcloud. A continuación ofrecemos los enlaces a la documentación oficial de los distintos CMS que ofrece OVHcloud para su instalación en nuestros alojamientos compartidos:


- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla! : El editor de este programa no propone, en la fecha prevista, ninguna documentación para cambiar el dominio de acceso a su sitio web. Por favor, contacte directamente con el editor sobre este asunto. Para más información, consulte las páginas oficiales [docs.joomla.org](https://docs.joomla.org/){.external} o [forum.joomla.org](https://forum.joomla.org/){.external}.
- Drupal: El editor de este programa no propone, en la fecha prevista, ninguna documentación para cambiar el dominio de acceso a su sitio web. Por favor, contacte directamente con el editor sobre este asunto. Para más información, consulte las páginas oficiales [drupal.org](https://drupal.org){.external} o [drupal.fr](https://drupal.fr){.external}.
- PrestaShop: El editor de este programa no propone, en la fecha prevista, ninguna documentación para cambiar el dominio de acceso a su sitio web. Por favor, contacte directamente con el editor sobre este asunto. Para más información, haga clic [aquí](https://help-center.prestashop.com){.external} para acceder a su página oficial.

Tenga en cuenta que en estos CMS también es posible realizar sus modificaciones directamente [en la base de datos](https://docs.ovh.com/es/hosting/crear-base-de-datos/). Deberá cambiar la URL de acceso al sitio web en la tabla que se indica a tal efecto.

Para los demás CMS que OVHcloud no ofrece con instalación automática, también le recomendamos que se ponga en contacto con sus respectivos soportes para realizar la reescritura con total seguridad. 

#### Caso n°2: su sitio web es un sitio "casero"

Para reescribir sus URL con su nuevo dominio, [conéctese a la base de datos de su sitio web](https://docs.ovh.com/es/hosting/crear-base-de-datos/) y, a continuación, sustituya su antiguo dominio por el nuevo en la tabla correspondiente. 

Compruebe en su archivo `.htaccess` si las reescrituras de URL no deben actualizarse con su nuevo dominio.

Si ha contratado a un proveedor para que cree su sitio web, deberá ponerse en contacto con él para que realice los cambios de forma segura.

> [!success]
>
> Una vez finalizado el paso 2, su sitio web debe mostrarse con su nuevo dominio.
>

### Etape 3 - retirar el antiguo nombre de dominio <a name="step3"></a>

Para evitar el "*Duplicate-content*" y cuando su nuevo dominio esté plenamente operativo con su sitio web, deberá eliminar la declaración en multisitio para su antiguo dominio utilizando la guía sobre la gestión de [multisitios en su alojamiento compartido](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/).

> [!warning]
>
> No olvide contratar su certificado SSL *Sectigo EV*, *Sectigo DV* o *Custom* como se especifica en [el paso 1](#step1).
>

Una vez que el antiguo dominio haya sido eliminado de la pestaña multisitio, y si está registrado en OVHcloud, podrá redirigirlo utilizando una [redirección visible permanente 301](https://docs.ovh.com/es/domains/redireccion-dominio/). De este modo, sus visitas podrán ser automáticamente redirigidas hacia su sitio web visualizando su nuevo dominio en la barra de direcciones/URL de su navegador.

## Más información <a name="go-further"></a>

[Lista de las IP de nuestros alojamientos compartidos](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/)

[Gestionar un certificado SSL en un alojamiento web](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/)

[Habilitar HTTPS en un sitio web con certificado SSL](https://docs.ovh.com/es/hosting/activar-https-en-un-sitio-web-con-ssl/)

[Redirigir un dominio](https://docs.ovh.com/es/domains/redireccion-dominio/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.