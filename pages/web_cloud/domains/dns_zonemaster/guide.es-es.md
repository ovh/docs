---
title: 'Tutorial - Uso de Zonemaster'
updated: 2024-06-18
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado ["Más información"](#go-further) de esta guía.
> 

## Objetivo

[Zonemaster](https://zonemaster.net/en/run-test) es una herramienta nacida de la colaboración entre la [AFNIC](https://www.afnic.fr/en/) (registro francés) y [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (registro sueco). que permite analizar la configuración DNS (Domain Name System) de un dominio e identificar los elementos que pueden mejorarse o corregirse.

> [!primary]
>
> Para entender mejor la noción de DNS, consulte nuestra guía "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

## Requisitos

- Tener un [dominio](/links/web/domains).

## Procedimiento

### Campo de entrada

La herramienta Zonemaster permite comprobar una configuración DNS en un dominio o probar una zona DNS preconfigurada en futuros servidores DNS.

Para comprobar la configuración actual de un dominio, introduzca el dominio y haga clic en `Ejecutar`{.action}.

![Captura de pantalla del formulario de Zonemaster. El dominio "domain.tld" se ha introducido y está listo para ser probado.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test.png){.thumbnail}

Para comprobar que la configuración DNS se haya preparado, pero todavía no se haya aplicado al dominio, marque la casilla `Opciones`{.action} e introduzca la siguiente información:

- **Servidores de nombres** : introduzca la información del servidor de nombres asociado a un dominio. Haga clic en el `+`{.action} para poder añadir un servidor de nombres adicional. Es opcional introducir una dirección IP.
- **Registros DS** : introduzca los elementos del registro DS en la protección DNSSEC. Haga clic en el `+`{.action} para poder añadir un registro DS adicional. Si los servidores DNS no utilizan el protocolo DNSSEC, puede dejar estos campos libres. En el caso de una zona firmada con DNSSEC, esta función permite comprobar que la zona funciona correctamente con un servidor de resolución válido, con los registros DS que se van a publicar, antes de su publicación.

También puede forzar la verificación de un protocolo IP específico mediante las casillas `Deshabilitar IPv6` y `Deshabilitar IPv4`.

> **Ejemplo**:<br><br> El dominio "domain.tld" utiliza actualmente los servidores DNS "dnsXX.ovh.net" y "nsXX.ovh.net". 
> Ha configurado una zona DNS para este dominio en los servidores DNS "dns1.test.tld" y "dns2.test.tld". <br>
> Antes de cambiar los servidores DNS, puede realizar una búsqueda avanzada en la casilla `Opciones`{.action} introduciendo "dns1.test.tld" y "dns2.test.tld" en las casillas de `servidores de nombres`.<br>
> Zonemaster realizará una prueba como si utilizara los servidores "dns1.test.tld" y "dns2.test.tld" en "domain.tld".<br>
> ![Captura de pantalla de las opciones avanzadas del formulario de Zonemaster. Los dos servidores de nombres "dns1.test.tld" y "dns2.test.tld" se han introducido en la sección "Servidores de nombres" del formulario.](/pages/assets/screens/other/web-tools/zonemaster/run-domain-test-nameservers-option.png){.thumbnail}

> [!primary]
>
> Cuando introduzca un dominio y haga clic en los botones `Obtener datos desde la zona padre`{.action} y `Obtener DS desde la zona padre`{.action}, aparecerán los servidores DNS asociados al dominio, así como la información del registro DS (DNSSEC), en caso de que haya sido configurado.
>
> ![Captura de pantalla de la página de resultados de Zonemaster para el dominio "domain.tld". Se desarrolla la sección "Direcciones".](/pages/assets/screens/other/web-tools/zonemaster/fetch-ns-from-parent-zone.png){.thumbnail}

### Resultado

Una vez validado el formulario, los resultados se muestran por grupo de pruebas. Las pruebas se clasifican por su severidad.

- **Error**: esta parte presenta errores o elementos faltantes que pueden causar un fallo de funcionamiento.
- **Advertencia**: esta parte es funcional, pero merece una atención especial. La herramienta ha detectado que este parámetro tiene características que no encajan en el estándar de su categoría, sin bloquear su funcionamiento.
- **Aviso**:  se trata de una simple información, sin consecuencias particulares sobre el funcionamiento del nombre de dominio.
- **Información**: Esta pieza es funcional y cumple los criterios estándar de su categoría.

Para cada prueba, es posible obtener más detalles, por ejemplo, para entender el error en caso de fallo, o simplemente a título indicativo.

![Captura de pantalla de la página de resultados de Zonemaster para el dominio "domain.tld". La sección "Address" se expande.](/pages/assets/screens/other/web-tools/zonemaster/domain-analysis.png){.thumbnail}

### Información útil

Si tiene más preguntas sobre Zonemaster, consulte las [FAQ](https://zonemaster.net/es/faq) en <https://zonemaster.net/>.

## Más información <a name="go-further"></a>

[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_general_information){.external}

[Modificación de una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}.

[Proteja su dominio contra el «cache poisoning» con el servicio DNSSEC](/pages/web_cloud/domains/dns_dnssec){.external}

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community)