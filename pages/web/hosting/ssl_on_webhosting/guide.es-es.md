---
title: 'Gestionar un certificado SSL en un alojamiento web'
slug: gestionar-un-certificado-ssl-en-un-alojamiento-web
excerpt: 'Operaciones relativas a los certificados SSL en los alojamientos web de OVH'
section: SSL
order: 1
---

**Última actualización: 31/05/2019**

## Objetivo

Los alojamientos web de OVH son compatibles con los certificados SSL. Puede contratar un certificado SSL con OVH u obtenerlo de otro proveedor e importarlo en el alojamiento. Una vez que haya configurado e instalado el certificado, sus sitios web podrán disponer de una conexión SSL segura y, por consiguiente, podrán funcionar en HTTPS.

**Esta guía explica las distintas operaciones relativas a los certificados SSL en los alojamientos web de OVH.**

## Requisitos

- Tener contratado un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}.
- Tener al menos un [dominio](https://www.ovh.es/dominios/){.external}.
- Tener acceso al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action}.

## Procedimiento

Es posible realizar diversas acciones relativas a la gestión de un certificado SSL en un alojamiento web de OVH. Continúe leyendo esta guía en el apartado correspondiente a la acción que quiera realizar.

- [Activar un certificado SSL en un alojamiento](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/#activar-un-certificado-ssl-en-un-alojamiento){.external}: Active un certificado SSL en su alojamiento, o bien contratando con OVH un certificado gratuito o de pago, o bien importando su propio certificado SSL.

- [Activar un certificado SSL en un multisitio](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/#activar-un-certificado-ssl-en-un-multisitio){.external}: Si su plan de hosting o su certificado SSL lo permiten, puede disfrutar de una conexión segura SSL en varios sitios web situados en un mismo alojamiento (multisitio).

- [Regenerar el certificado SSL de un alojamiento](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/#regenerar-el-certificado-ssl-de-un-alojamiento){.external}: Regenere el certificado SSL de su alojamiento web de OVH después de activar el SSL en uno o más multisitios. 

- [Eliminar el certificado SSL de un alojamiento](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/#eliminar-el-certificado-ssl-de-un-alojamiento){.external}: Elimine el certificado SSL de su alojamiento web de OVH. Esta operación podría afectar al funcionamiento de los sitios web que utilizasen previamente el certificado.  

### Activar un certificado SSL en un alojamiento

Existen diversas fórmulas para disponer de un [certificado SSL](https://www.ovh.es/ssl/){.external} en un alojamiento web de OVH:

- certificado SSL gratuito Let's Encrypt, [incluido con los planes de hosting compatibles](https://www.ovh.es/ssl/){.external};
- certificado SSL de pago, [disponible como opción en los planes de hosting compatibles](https://www.ovh.es/ssl/){.external};
- importación de un certificado SSL contratado con otro proveedor.

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}. En el panel **Configuración**, consulte la información que aparece bajo el epígrafe **Certificado SSL**. Si se indica «No», significa que no hay ningún certificado SSL configurado e instalado en el alojamiento web. Haga clic en el botón `···`{.action} situado junto a **Certificado SSL** y seleccione `Contratar un certificado SSL`{.action}.

Si, por el contrario, se indica «Sí», significa que ya hay un certificado SSL instalado y configurado en el alojamiento web. No es posible contratar un nuevo certificado mientras tenga uno instalado.

![Contratar un certificado SSL](images/manage-ssl-step1.png){.thumbnail}

En el cuadro de diálogo, seleccione el tipo de certificado SSL que quiera contratar. Es posible que, en función del [plan de hosting](https://www.ovh.es/hosting/){.external} o de su configuración, algunas de las opciones que explicamos a continuación no estén disponibles. Una vez que haya seleccionado el tipo de certificado, haga clic en `Siguiente`{.action}.

![Contratar un certificado SSL](images/manage-ssl-step2.png){.thumbnail}

En función del tipo de certificado seleccionado, puede ser necesario realizar más acciones:

- **Si ha seleccionado un certificado SSL gratuito**, no será necesaria ninguna otra acción, a menos que algún problema técnico impida activar el certificado SSL (en cuyo caso aparecerá un mensaje en el área de cliente indicándole los elementos que debe comprobar) o validar el dominio para la entrega del certificado SSL. Si eso ocurre, siga las indicaciones que aparezcan en el mensaje de aviso.

- **Si ha seleccionado un certificado SSL de pago**, deberá finalizar el pedido para obtener el certificado. Para determinados tipos de certificado SSL, puede ser necesaria una validación específica. Es posible, pues, que reciba uno o más mensajes de correo electrónico relativos a la validación. En ese caso, lea la información que contienen dichos mensajes y siga sus indicaciones hasta finalizar la configuración.

- **Si ha seleccionado la importación de un certificado SSL**, deberá introducir los datos del certificado en los campos de texto. Si tiene cualquier duda, consulte la información que le haya proporcionado el proveedor del certificado. 

La configuración del certificado podría tardar desde unos minutos hasta varios días en función del tipo de certificado elegido. Para comprobar si el certificado SSL está configurado en el alojamiento web, vaya a la pestaña **Información general** del área de cliente de OVH. Bajo el epígrafe **Certificado SSL** debería aparecer la indicación «Sí». 

![Contratar un certificado SSL](images/manage-ssl-step4.png){.thumbnail}

Una vez configurado, vaya al paso [Activar un certificado SSL en un multisitio](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/#activar-un-certificado-ssl-en-un-multisitio){.external} de esta guía para asegurarse de que el sitio web correspondiente dispone de una conexión SSL segura activa.

### Activar un certificado SSL en un multisitio

Según el tipo de [certificado SSL](https://www.ovh.es/ssl/){.external} contratado, podrá activar una conexión SSL segura en uno o en varios multisitios. Para ello, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Multisitio`{.action}.

Se mostrará una tabla que contiene todos los dominios añadidos al alojamiento web. En la columna **SSL** puede consultar el estado de activación de las conexiones SSL seguras en los distintos multisitios. 

![Contratar un certificado SSL](images/manage-ssl-step5.png){.thumbnail}

Pueden aparecer tres estados diferentes:

|Estado|Descripción|
|---|---|
|Activado|Indica que ya hay un certificado SSL activado en el multisitio. Si su sitio web no está disponible en HTTPS, consulte las indicaciones ofrecidas en la guía [Habilitar HTTPS en un sitio web con certificado SSL](https://docs.ovh.com/es/hosting/activar-https-en-un-sitio-web-con-ssl/){.external}.|
|Por generar|Indica que ya se ha activado un certificado SSL en el multisitio, pero que dicho certificado todavía no está técnicamente activo. Para activarlo, deberá regenerarlo para que incluya los nuevos dominios del multisitio.|
|Desactivado|Indica que no hay ningún certificado SSL activo en el multisitio. Para activarlo, siga los pasos que se indican a continuación.|

Para activar el SSL en un multisitio, haga clic en el icono con forma de rueda dentada situado al final de la línea correspondiente y seleccione `Editar`{.action}. En el cuadro de diálogo, marque la casilla `SSL`{.action} y, en el siguiente paso, acepte los cambios.

Unos segundos después de solicitar la activación, el estado de la conexión segura SSL del multisitio cambiará a «Por generar». Repita esta operación para todos los multisitios en los que quiera activar el SSL. Continúe realizando las operaciones descritas en el apartado [Regenerar el certificado SSL de un alojamiento](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/#regenerar-el-certificado-ssl-de-un-alojamiento){.external}.

![Contratar un certificado SSL](images/manage-ssl-step6.png){.thumbnail}

### Regenerar el certificado SSL de un alojamiento

> [!primary]
>
> Esta operación solo afecta a los certificados que permiten activar una conexión segura SSL en varios sitios web situados en un mismo alojamiento (multisitios).
>

Una vez que haya activado la conexión segura SSL en uno o más multisitios, su estado cambiará a «Por generar». Es necesario generar (o regenerar) el certificado SSL de un alojamiento web para poder añadir dominios a dicho certificado.

Para ello, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}. Haga clic en el botón `···`{.action} situado junto a **Certificado SSL** y seleccione `Regenerar el certificado SSL`{.action}.

![Contratar un certificado SSL](images/manage-ssl-step7.png){.thumbnail}

En el cuadro de diálogo, lea la información que se muestra y haga clic en `Aceptar`{.action} para confirmar la operación. Espere hasta que se regenere su certificado SSL. La operación podría tardar varias horas.

Tenga en cuenta que Let's Encrypt, la autoridad que emite el certificado SSL incluido con el alojamiento web, impone un [límite de cinco regeneraciones por semana](https://letsencrypt.org/docs/rate-limits/){.external}. Así pues, preste atención al número de veces que regenera su certificado para evitar un posible bloqueo temporal.

![Contratar un certificado SSL](images/manage-ssl-step8.png){.thumbnail}

### Eliminar el certificado SSL de un alojamiento

También es posible eliminar el certificado SSL instalado en un alojamiento web. Antes de realizar esta operación, **le recomendamos encarecidamente que se asegure previamente de que la eliminación del certificado no afectará al acceso a sus sitios web**. Por otro lado, tenga en cuenta que los internautas verán una advertencia de seguridad cuando accedan a un sitio web que funcione en HTTPS pero carezca de una conexión SSL segura. 

Esta comprobación se realiza directamente en la configuración del propio sitio web. Si necesita ayuda, le recomendamos que contacte con un proveedor especializado. Nosotros no podremos asistirle.

Una vez que esté listo para eliminar el certificado SSL, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}. Haga clic en el botón `···`{.action} situado junto a **Certificado SSL** y seleccione `Eliminar el SSL`{.action}.

En el cuadro de diálogo, confirme que desea eliminar el certificado haciendo clic en `Aceptar`{.action}. La eliminación tardará unas horas en aplicarse. 

![Contratar un certificado SSL](images/manage-ssl-step9.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.