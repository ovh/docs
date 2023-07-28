---
title: "Proteger su dominio con DNSSEC"
excerpt: "Descubra cómo proteger un dominio del cache poisoning activando DNSSEC"
updated: 2023-07-26
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo 

Un servidor DNS aloja una o más zonas DNS. Una zona DNS contiene la configuración DNS de un dominio. Esta configuración conecta el dominio con los distintos servicios asociados (servidor de alojamiento para su sitio web, servidores para sus direcciones de correo personalizadas con su nombre de dominio, etc.).

En algunos casos, los flujos de datos que transitan por los servidores DNS pueden ser utilizados por personas malintencionadas.
Para ello, estas personas envenenan la caché de los servidores DNS con la configuración DNS que desean aplicar a su dominio: es lo que se llama "cache poisoning".
De este modo, pueden redirigir los flujos entrantes de su dominio hacia sus propios sitios web y hacia sus propias direcciones de correo.

El **D**omain **N**ame **S**ystem **SEC**urity extensions (**DNSSEC**) permite proteger la configuración DNS de su nombre de dominio contra el "cache poisoning" verificando y autentificando las respuestas DNS.

**Descubra cómo activar DNSSEC para su dominio para protegerlo contra el "cache poisoning".**

Para más información sobre el funcionamiento del **DNSSEC**, consulte nuestra página "[Comprender DNSSEC](https://www.ovhcloud.com/es/domains/dnssec/){.external}".

Si desea más información sobre estos temas, no dude en consultar nuestras guías sobre [los servidores DNS OVHcloud](/pages/web/domains/dns_server_general_information) y sobre la [edición de una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit).

## Requisitos

- Tener un dominio registrado con OVHcloud.
- El dominio debe tener una extensión compatible con DNSSEC.
- Estar conectado a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, en la parte `Web Cloud`{.action}.

## Procedimiento

Existen dos formas de activar el **DNSSEC**:

- **Su dominio utiliza los servidores DNS de OVHcloud** : la activación se realiza en un clic desde su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} (si esta no está activada por defecto).

- **Su dominio no utiliza los servidores DNS de OVHcloud** : Contacte con el proveedor que gestione la configuración DNS del dominio para pedirle su configuración. Conéctese a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente en la lista.</br>
Seleccione la pestaña `Registros DS`{.action}, haga clic en el botón `Editar`{.action} a la derecha y, seguidamente, en el botón `+`{.action} que aparece.</br>.
Ya puede introducir los 4 campos "Key Tag", "Flag", "Algoritmo", "Clave pública (codificada en base 64)" con los datos comunicados por su actual proveedor.

> [!primary]
>
> Para comprobar si su dominio utiliza la configuración DNS de OVHcloud, conéctese a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y acceda al apartado `Web Cloud`{.action}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente en la lista. Una vez seleccionado el dominio, abra la pestaña `Servidores DNS`{.action}.
>
Si los nombres de los servidores DNS acaban en *ovh.net*, *ovh.ca* o *anycast.me*, el dominio utiliza los servidores DNS de OVHcloud.
>

### Etapa 1: acceder a la gestión del dominio <a name="step1"></a>

Para activar la solución **DNSSEC** para su nombre de dominio, conéctese a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y acceda al apartado `Web Cloud`{.action}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente en la lista.

Se mostrará la información general del dominio. 

#### Etapa 2: gestionar el DNSSEC de su dominio

También en la pestaña `Información general`{.action}, tras la [etapa 1](#step1), puede comprobar el estado de activación del **DNSSEC** en su nombre de dominio.

Para ello, en el recuadro "Seguridad", compruebe el estado junto a la mención "Delegación segura (DNSSEC)".

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

Gracias al botón de activación situado encima de la mención `Delegación segura (DNSSEC)`{.action}, puede activar o desactivar el **DNSSEC** en su nombre de dominio. Al realizar esta acción, se abrirá una nueva ventana en la que podrá confirmar los cambios.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

> [!primary]
>
> La activación o desactivación del **DNSSEC** tarda **24** horas en ser efectiva.
>
Además, si más adelante desea cambiar los servidores DNS asociados a su dominio, la modificación de los servidores DNS solo será efectiva en OVHcloud tras la desactivación del **DNSSEC**. A continuación, la propagación DNS de la modificación tardará entre **24** y **48** horas en propagarse.
>
> En total, la modificación de los servidores DNS de un dominio con la solución **DNSSEC** activa será efectiva al cabo de **48** a **72** horas.
>

## Más información

[Información general sobre los servidores DNS de OVHcloud](/pages/web/domains/dns_server_general_information)

[Editar una zona DNS de OVHcloud](/pages/web/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
