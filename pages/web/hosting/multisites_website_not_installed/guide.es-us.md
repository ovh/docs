---
title: 'Solucionar el error «Sitio no instalado»'
slug: web_hosting_error_sitio_no_instalado
excerpt: 'Cómo solucionar el error «Sitio no instalado»'
section: Diagnóstico
---

**Última actualización: 30/05/2018**

## Objetivo

La página «Sitio no instalado» se muestra cuando la configuración DNS del dominio no es correcta o cuando el dominio que utiliza el sitio web no está configurado correctamente en el alojamiento web de OVH.

**Esta guía explica cómo solucionar el error «Sitio no instalado».**

## Requisitos

- Tener contratado un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}.
- Poder administrar el [plan de hosting de OVH](https://www.ovh.es/hosting/){.external} en el que está alojado el sitio web.
- Poder administrar la configuración del dominio correspondiente (es decir, su zona DNS).
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

La página «Sitio no instalado» puede aparecer únicamente en dos casos:

- El dominio que utiliza el sitio web no se ha añadido correctamente como **multisitio** a la configuración del alojamiento web de OVH.
- El dominio que utiliza el sitio web no se ha asociado correctamente al alojamiento web de OVH porque la dirección IP que utiliza en su configuración DNS no es la correcta.

A continuación se explica cómo comprobar la configuración en ambos casos para solucionar el error «Sitio no instalado».

![Sitio no instalado](images/site-not-installed-webpage.png){.thumbnail}

### 1. Comprobar la configuración del alojamiento web (multisitio)

Para comprobar que el dominio se ha añadido correctamente como multisitio al alojamiento, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento en el que esté alojado el sitio web que muestra la página «Sitio no instalado». A continuación, abra la pestaña `Multisitio`{.action}.

Se mostrará una tabla que contiene todos los dominios añadidos al alojamiento como multisitio. Puede utilizar el campo de búsqueda para encontrar fácilmente el dominio en cuestión.

Al buscar el dominio en la tabla pueden darse varias situaciones:

|Casos posibles|Medidas que deberá adoptar|
|---|---|
|El dominio figura en la tabla|El dominio está correctamente añadido como multisitio al alojamiento web. Si ha añadido el dominio menos 15 minutos antes, espere a que transcurra este período de tiempo para que la página «Sitio no instalado» desaparezca. Si transcurridos unos minutos sigue apareciendo el mismo mensaje, vaya al paso [2. Comprobar la configuración DNS del dominio](https://docs.ovh.com/es/hosting/web_hosting_error_sitio_no_instalado/#2-comprobar-la-configuracion-dns-del-dominio){.external}.|
|El dominio ha desaparecido de la tabla|Si había añadido el dominio, pero este ya no aparece en la tabla, es posible que no hubiera terminado todos los pasos para añadir el dominio al alojamiento web o que lo haya eliminado por error. En ese caso, siga todos los pasos descritos en la guía [Alojar varios sitios web en un mismo hosting](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/){.external} para volver a añadir el dominio.|
|El dominio no aparece en la tabla|Todavía no ha añadido el dominio como multisitio al alojamiento de OVH. Para añadirlo, siga todos los pasos descritos en la guía [Alojar varios sitios web en un mismo hosting](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/){.external}.|

Si, a pesar de esto, la página «Sitio no instalado» sigue apareciendo en su sitio web, vaya al paso [2. Comprobar la configuración DNS del dominio](https://docs.ovh.com/es/hosting/web_hosting_error_sitio_no_instalado/#2-comprobar-la-configuracion-dns-del-dominio){.external}.

### 2. Comprobar la configuración DNS del dominio

En primer lugar, deberá obtener la información relativa a la configuración de OVH que debe utilizar. Para ello, en la pestaña `Información general`{.action}, consulte las direcciones que aparecen bajo **IPv4** e **IPv6**.

![Sitio no instalado](images/site-not-installed-know-a-records.png){.thumbnail}

Esta información le permitirá comprobar la configuración DNS del dominio. Para ello, acceda al panel que le ofrezca su proveedor para gestionar los servidores DNS.

> [!primary]
>
> Si el dominio está registrado con OVH, compruebe que utiliza nuestra configuración. En el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en` Dominios`{.action} en la columna izquierda y seleccione el dominio. A continuación, abra la pestaña `Servidores DNS`{.action}.
>

Según la configuración que utilice el dominio, puede realizar la comprobación de dos formas distintas:

- **Si el dominio no utiliza la configuración de OVH** (es decir, si no utiliza los servidores DNS de OVH), deberá realizar la comprobación que se describe más abajo desde el panel que le ofrezca su proveedor para gestionar sus servidores DNS.

- **Si el dominio utiliza la configuración de OVH** (es decir, sus servidores DNS), puede realizar la comprobación desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Para ello, seleccione el dominio en la columna izquierda y abra la pestaña `Zona DNS`{.action}. Se mostrará una tabla que contiene la configuración DNS, con los distintos registros de su dominio (cada línea representa un registro distinto). Puede filtrar el contenido por tipo de registro o por dominio.

![Sitio no instalado](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

Compruebe que los registros DNS del dominio en el que se muestra la página «Sitio no instalado» están correctamente configurados como se indica a continuación:

|Registro|Destino|
|---|---|
|A|El destino debe corresponder a la dirección **IPv4** que aparecía en la pestaña `Información general`{.action} del dominio.|
|AAAA|El destino debe corresponder a la dirección **IPv6** que aparecía en la pestaña `Información general`{.action} del dominio.|

Por lo tanto, pueden darse dos situaciones:

|Casos posibles|Medidas que deberá adoptar|
|---|---|
|Los destinos son correctos|Eso significa que la configuración del dominio es correcta. Si ha modificado la configuración DNS menos de 24 horas antes, espere a que transcurra este período de tiempo para que los cambios sean efectivos.|
|Los destinos son incorrectos|Debe modificar la configuración del dominio. Si utiliza la configuración de OVH, siga los pasos indicados en la guía [¿Cómo editar mi zona DNS?](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}. Si no utiliza la configuración de OVH, siga las indicaciones que le ofrezca su proveedor de DNS. Una vez realizados los cambios necesarios, la modificación tarda un máximo de 24 horas en propagarse y ser efectiva.|

Si ha realizado las acciones que se indican en esta guía y ha esperado el tiempo necesario, la página «Sitio no instalado» debería desaparecer.

## Más información 

[Alojar varios sitios en un mismo hosting](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/){.external}

[¿Cómo editar mi zona DNS?](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.