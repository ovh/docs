---
title: 'Tutorial - Uso de Zonemaster'
slug: ovhcloud-domain-zonemaster-tutorial
section: DNS (servidor y zona)
order: 08
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 12/09/2022**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/). Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado ["Más información"](#go-further) de esta guía.
> 


## Objetivo

[Zonemaster](https://zonemaster.fr/domain_check) es una herramienta nacida de la colaboración entre la [AFNIC](https://www.afnic.fr/en/) (registro francés) y [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (registro sueco). que permite analizar la configuración DNS (Domain Name System) de un dominio e identificar los elementos que pueden mejorarse o corregirse.

> [!primary]
>
> Para entender mejor el concepto de DNS, consulte la introducción de nuestra guía sobre la [configuración de una zona DNS](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/).

## Requisitos

- Tener un [dominio](https://www.ovhcloud.com/es-es/domains/).

## Procedimiento

### Campo de entrada

La herramienta Zonemaster permite comprobar una configuración DNS en un dominio o probar una zona DNS preconfigurada en futuros servidores DNS.

Para comprobar la configuración actual de un dominio, introduzca el dominio y haga clic en `Check`{.action}.

![dominios](images/zonemaster01.png){.thumbnail}

Para comprobar que la configuración DNS se haya preparado, pero todavía no se haya aplicado al dominio, marque la casilla `Opciones`{.action} e introduzca la siguiente información:

- **Servidores DNS**: Introduzca la información del servidor DNS asociado a un dominio y haga clic en el `+`{.action} para validar la entrada. Es opcional introducir una dirección IP.
- **Delegación del firmante (registro DS)**: En el marco de la protección DNSSEC, introduzca los elementos del registro DS y haga clic en `+`{.action} para añadir el valor. Si los servidores DNS no utilizan el protocolo DNSSEC, puede dejar estos campos libres.

También puede forzar la verificación de un protocolo IP específico mediante las casillas `Deshabilitar IPv6` y `Deshabilitar IPv4`.

> **Ejemplo**:<br><br> El dominio "mydomain.ovh" utiliza actualmente los servidores DNS "dns19.ovh.net" y "ns19.ovh.net". 
> Ha configurado una zona DNS para este dominio en los servidores DNS "mydns.test.ovh" y "mydns2.test.ovh". <br>
> Antes de cambiar los servidores DNS, puede realizar una búsqueda avanzada en la casilla `Opciones`{.action} introduciendo "mydns.test.ovh" y "mydns2.test.ovh" en las casillas de `servidores de nombres`.<br>
> Zonemaster realizará una prueba como si utilizara los servidores "mydns.test.ovh" y "mydns2.test.ovh" en "mydomain.ovh".<br>
> ![dominios](images/zonemaster02.png){.thumbnail}

> [!primary]
>
> Al introducir un dominio y hacer clic en el botón `Obtener datos desde la zona padre`{.action}, aparecerán los servidores DNS asociados al dominio y la información del registro DS (DNSSEC) si este se ha configurado.
> ![dominios](images/zonemaster03.png){.thumbnail}

### Resultado

Una vez validado el formulario, los resultados se clasifican por código de color:

- **Verde**: Esta parte es funcional y cumple los criterios estándar en su categoría.
- **Naranja**: Esta parte es funcional, pero merece una atención especial. La herramienta ha detectado que este parámetro tiene características que no encajan en el estándar de su categoría, sin bloquear su funcionamiento.
- **Rojo**: Esta parte presenta errores o elementos que faltan y que pueden provocar un fallo de funcionamiento. 
- **Azul**: se trata de una simple información, sin consecuencias particulares sobre el funcionamiento del nombre de dominio.

![dominios](images/zonemaster04.png){.thumbnail}

### Información útil

Si tiene más preguntas sobre Zonemaster, consulte [FAQ](https://zonemaster.net/faq) en <https://zonemaster.fr/>.

## Más información <a name="go-further"></a>

[Cambiar los servidores DNS de un dominio en OVH](https://docs.ovh.com/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/){.external}

[Modificación de una zona DNS de OVHcloud](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}.

[Proteja su dominio contra el «cache poisoning» con el servicio DNSSEC](https://docs.ovh.com/es/domains/proteja_su_dominio_con_dnssec/){.external}

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
