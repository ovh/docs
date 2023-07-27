---
title: "Personalizar los servidores DNS de un dominio (Glue Records)"
excerpt: "Descubra cómo personalizar los servidores DNS de un dominio en OVHcloud"
updated: 2023-07-27
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Los **servidores DNS** alojan las configuraciones DNS de los dominios: las *zonas DNS*. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Estas *zonas DNS* se componen de información técnica: los *registros DNS*. En un uso clásico, los *registros DNS* permiten:

- mostrar su sitio web con su nombre de dominio, utilizando la dirección IP de su servidor de alojamiento (registros DNS de tipo *A* y *AAAA*).
- redirigir los mensajes recibidos en su dirección(s) de correo personalizada con su nombre de dominio (registros DNS de tipo *MX*).
- configurar los datos relativos a la seguridad o la autenticación de los servicios (alojamiento web, servidor de correo, etc.) asociados al dominio (registros DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Para más información sobre estos temas, consulte nuestras guías sobre los [servidores DNS de OVHcloud](/pages/web/domains/dns_server_general_information) y sobre [la edición de una zona DNS de OVHcloud](/pages/web/domains/dns_zone_edit).

En función de sus necesidades, es posible personalizar el nombre de los servidores DNS de su dominio en OVHcloud utilizando los «**Glue Records**».

**Descubra cómo personalizar los servidores DNS de un dominio en OVHcloud.**

## Requisitos

- Tener un dominio registrado con OVHcloud.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, parte `Web Cloud`{.action}.

## Procedimiento

> [!warning]
>
> **Personalizar los servidores DNS de un dominio es una operación delicada**: una modificación errónea puede cortar el acceso al sitio web o hacer que la recepción de nuevos mensajes en las direcciones de correo electrónico no esté disponible. 
> Siga los pasos que se describen a continuación y, en caso de duda, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/).
>

### Etapa 1: obtenga los servidores DNS que utiliza actualmente su dominio <a name="step1"></a>

Puede recuperar los servidores DNS que utiliza actualmente su dominio mediante la herramienta DNS en línea [Zonemaster](https://zonemaster.fr/es/run-test){.external}.

Para ello, acceda al enlace [https://zonemaster.fr](https://zonemaster.fr/es/run-test){.external}, introduzca su dominio sin los *www* (p. ej.: *domain.tld*) y marque el botón `Opciones`{.action} situado justo debajo del formulario de entrada del dominio.

En las opciones disponibles, haga clic directamente en el botón `Obtener datos desde la zona padre`{.action}.

Se mostrará un resultado:

![glue-zonemaster](images/glue-dns-zonemaster.png){.thumbnail}

Recupere los *servidores DNS* y conserve **todas** sus direcciones IPv4 asociadas (con formato *X.X.X.X*, donde *X* está comprendido entre *0* y *255*) e IPv6 (las demás IP que no sean IPv4). La necesitará para el resto de esta guía.

En el ejemplo anterior, el dominio **domain.tld** utiliza actualmente los siguientes **servidores DNS**:

- **dnsX1.ovh.net** asociado a la IPv4 *111.222.333.443* y a la IPv6 *0000:00d0:1:0000::1*;
- **dnsX2.ovh.net** asociado a la IPv4 *111.222.333.444* y a la IPv6 *0000:00d0:1:0000::2*.

Si necesita más información, consulte nuestro tutorial sobre la herramienta [Zonemaster](/pages/web/domains/dns_zonemaster)

### Etapa 2: agregar los registros «GLUE» <a name="step2"></a>

> [!success]
>
> Antes de empezar, tenga en cuenta lo siguiente:
>
> - Puede crear servidores DNS personalizados directamente en el dominio que va a utilizarlos. Por ejemplo, puede crear los DNS personalizados *dns1.domain.tld* y *dns2.domain.tld* para el nombre de dominio *domain.tld*.
>
> - También puede crear servidores DNS personalizados en un dominio para utilizarlos con otro dominio. Por ejemplo, puede crear los DNS personalizados *dns1.domain1.tld* y *dns2.domain1.tld* para el dominio *domain2.tld*. Deberá recuperar los servidores DNS y sus IP asociadas en relación con el *domain2.tld*.
> Además, el *domain1.tld* debe estar registrado en OVHcloud para poder activar los «Glue» records.
>

Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección `Web Cloud`{.action} de la página de inicio de sesión. En la columna de la izquierda, haga clic en `Dominios`{.action} y seleccione el nombre de dominio que utilizará para personalizar los nombres de los servidores DNS. 

En la nueva página, haga clic en la pestaña `Glue`{.action}.

Se mostrará una tabla con los registros «Glue» configurados actualmente en OVHcloud para el dominio (en su caso). Para añadir un nuevo registro «Glue», haga clic en el botón `Añadir`{.action}.

![glueregistry](images/glue-add.png){.thumbnail}

Introduzca la información solicitada en la ventana que se abre en su pantalla:

|Información|Detalle|  
|---|---|
|Nombre del host|Personalice el nombre de host que desea utilizar como servidor DNS personalizado.|
|IP(s) de destino|Especifique la dirección o direcciones IP (IPv4 y/o IPv6) a las que se debe enlazar el nombre de host. Dirección o direcciones IP del servidor DNS que utiliza actualmente el dominio. Si hay varias direcciones IP, separe con *comas*.|

![glueregistry](images/glue-add-glue.png){.thumbnail}

En la imagen anterior, tomando como ejemplo el [etapa 1](#step1), el «Glue» que queremos añadir aquí (a partir del dominio *domain.tld*) es **dns1.domain.tld**. 

Para este «Glue», se indican como direcciones IP del *servidor DNS de destino*, las direcciones IP *111.222.333.443* (IPv4) y *0000:00d0:1:000::1* (IPv6). Estas IP corresponden a uno de los dos servidores DNS que se utilizan actualmente para *domain.tld* (**dnsX1.ovh.net**). 

Se añade este «Glue» para que **dns1.domain.tld** pueda, al final, sustituir el nombre de servidor DNS **dnsX1.ovh.net** actualmente utilizado por el nombre de dominio *domain.tld*.

Una vez que haya introducido toda la información, haga clic en el botón `Siguiente`{.action}, lea la información mostrada y haga clic en `Aceptar`{.action}. Repita esta operación tantas veces como sea necesario, en función del número de servidores DNS utilizados por su dominio.

En nuestro ejemplo, deberá repetir la operación para crear el «Glue» **dns2.domain.tld**. Este sustituirá posteriormente al servidor DNS **dnsX2.ovh.net** asociado actualmente a las IPv4 *111.222.333.444* e IPv6 *0000:00d0:1:0000::2*

### Etapa 3: crear los registros DNS de tipo A y AAAA correspondientes a los DNS personalizados

Debe crear los registros *A* y *AAAA* para los nombres de host que definió en el paso anterior. Los registros *A* y *AAAA* deben tener como destino la dirección IP de destino que coincida con el nombre de host creado anteriormente.

Esta operación se realiza desde el panel que le ofrezca el proveedor que gestione la configuración DNS de su dominio. Existen dos posibilidades:

- **Su dominio no utiliza una zona DNS activa en OVHcloud** : Contacte con el proveedor que gestione dicha zona. Una vez realizada esta operación, vaya al siguiente paso.
- **Su dominio utiliza una zona DNS activa en OVHcloud** : Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección «Web Cloud». En la columna de la izquierda, haga clic en `Dominios`{.action} y seleccione el dominio que utilizó para crear los «Glue» en el [etapa 2](#step2). Abra la pestaña `Zona DNS`{.action} y haga clic en `Añadir un registro`{.action}. Seleccione el tipo de entrada *A* o *AAAA* en función del tipo de IP asociada que quiera añadir. Siga los pasos indicados en el *subdominio* y la dirección *IPv4* (A) o *IPv6* (AAAA). Si necesita ayuda, consulte la guía [Editar una zona DNS de OVHcloud](/pages/web/domains/dns_zone_edit).

![glueregistry](images/glue-dns-zone-add.png){.thumbnail}

> [!primary]
>
> En todos los casos, es necesario un plazo de propagación de 4 a 24 horas para que el cambio de la zona DNS se aplique en toda la red DNS. Le recomendamos que espere este período de tiempo antes de continuar.
>

Siguiendo con el ejemplo anterior, los registros «Glue» que queremos añadir (del dominio *domain.tld*) son **dns1.domain.tld** y **dns2.domain.tld**. El objetivo es sustituir los servidores DNS actuales **dnsX1.ovh.net** y **dnsX2.ovh.net**

Por lo tanto, se añaden los siguientes registros a la zona DNS activa del dominio *domain.tld*:

 - un registro DNS de tipo *A* para el *subdominio* **dns1.domain.tld** hacia la IP *111.222.333.443* (IPv4 del servidor DNS **dnsX1.ovh.net**);
 - un registro DNS de tipo *AAAA* para el *subdominio* **dns1.domain.tld** hacia la IP *0000:00d0:1:0000::1* (IPv6 del servidor DNS **dnsX1.ovh.net**);
 - un registro DNS de tipo *A* para el *subdominio* **dns2.domain.tld** hacia la IP *111.222.333.444* (IPv4 del servidor DNS **dnsX2.ovh.net**);
 - Un registro DNS de tipo *AAAA* para el *subdominio* **dns2.domain.tld** hacia la IP .*0000:00d0:1:0000::2* (IPv6 del servidor DNS **dnsX2.ovh.net**).

Esperando el tiempo de la propagación DNS.

### Etapa 4: modificar los servidores DNS de su dominio

Debe modificar los servidores DNS de su dominio sustituyendo los antiguos servidores DNS por los servidores DNS personalizados creados anteriormente.

Para ello, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección `Web Cloud`{.action} de la columna izquierda. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione *el dominio para el que quiera personalizar los servidores DNS*.
 
Abra la pestaña `Servidores DNS`{.action} y haga clic en `Cambiar los servidores DNS`{.action}. Sustituya sus servidores DNS actuales por los que quiera utilizar como servidor DNS personalizado. 

Siga los pasos que se indican y, si necesita ayuda, consulte nuestra guía «[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web/domains/dns_server_general_information) ».

> [!primary]
> 
> Si ha personalizado servidores DNS en un dominio para utilizarlos con otro dominio que no esté registrado en OVHcloud, contacte con el proveedor en el que esté registrado el otro dominio para modificar los servidores DNS.
>

![glueregistry](images/glue-dns-servers-modify.png){.thumbnail}

> [!primary]
>
> Es necesario un plazo de propagación de 24 a 48 horas para que el cambio de los servidores DNS se aplique en toda la red DNS. Le recomendamos que espere este período de tiempo antes de continuar.
>

En nuestro ejemplo de personalización de los servidores DNS del nombre de dominio *domain.tld*, sustituimos el servidor DNS **dnsX1.ovh.net** por **dns1.domain.tld** y el servidor DNS **dnsX2.ovh.net** por **dns2.domain.tld**. A continuación, esperamos a que finalice la propagación DNS.

### Etapa 5: sustituir los registros NS en la zona DNS activa del dominio

Para que la personalización de los servidores DNS sea visible en la red DNS (efectuando un *Whois*, un *dig ns* o a través de un analizador de configuración DNS), deberá sustituir los registros de tipo *NS* en la zona DNS activa de su dominio.

Esta operación se realiza desde el panel que le ofrezca el proveedor que gestione la configuración DNS de su dominio. Existen dos posibilidades:

- **Su dominio no utiliza una zona DNS activa en OVHcloud** : Póngase en contacto con el proveedor que gestione dicha zona para realizar el cambio.
- **Su dominio utiliza una zona DNS activa en OVHcloud** : Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio para el que haya personalizado los servidores DNS. Abra la pestaña `Zona DNS`{.action} y haga clic en `Editar en modo de texto`{.action}. 

Aparecerá una ventana con su zona DNS en modo *textual*:

![glueregistry](images/dns-text-format-edition.png){.thumbnail}

> [!warning]
>
> Le recordamos que un cambio inoportuno en modo *textual* en su zona DNS puede cortar el acceso a su sitio web y/o hacer que la recepción de nuevos mensajes en sus direcciones de correo electrónico no esté disponible. 
> En caso de duda, llame a un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/).
>

En esta ventana, sustituya **únicamente en los registros de tipo *NS*** los nombres de los servidores DNS por sus propios nombres de servidores DNS personalizados **sin olvidar** aumentar en «1» el primer valor numérico de la línea *SOA*. Una vez realizados los cambios, haga clic en `Siguiente`{.action} y luego en `Aceptar`{.action}.

El cambio no se mostrará inmediatamente en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Espere unos veinte minutos y vuelva a conectarse al área de cliente de OVHcloud para ver cómo se aplican los cambios.

> [!primary]
>
> Es necesario un plazo de propagación de 4 a 24 horas para que los cambios realizados en la zona DNS se apliquen en toda la red DNS.
>

Para entender mejor este último paso, retomemos nuestro ejemplo con el nombre de dominio *domain.tld* y su zona DNS en modo «textual», que se muestra en la imagen de arriba.

En él se observan los siguientes elementos: 

- el primer valor numérico de la línea *SOA* es el siguiente: *2023071700*;
- hay dos registros de tipo *NS* para el dominio *domain.tld*;
- los registros de tipo *NS* siguen dirigidos a los dos servidores DNS **dnsX1.ovh.net** y **dnsX2.ovh.net**.

Para finalizar la personalización de los servidores DNS para el dominio *domain.tld*, es necesario:

- incrementar en «1» el primer valor numérico de la línea *SOA*: *202307170**1*** (tenga en cuenta que si el primer valor numérico fuera el siguiente:*2023071704*, se incrementaría siempre en «1» y se obtendría el siguiente resultado: *202307170**5*** );
- sustituir el destino **dnsX1.ovh.net.** por **dns1.domain.tld.** únicamente para la línea que comienza por **IN NS**;
- sustituir el destino **dnsX2.ovh.net.** por **dns2.domain.tld.** sólo para la línea que comienza por **IN NS**.

Una vez realizados los cambios, el resultado de nuestro ejemplo será el siguiente:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Para nuestro dominio *domain.tld*, los servidores DNS que se mostrarán tras la modificación y propagación DNS serán ahora **dns1.domain.tld.** y **dns2.domain.tld.**.

Si necesita ayuda, consulte la guía [Editar una zona DNS de OVHcloud](/pages/web/domains/dns_zone_edit).

> [!success]
>
> Si personaliza los servidores DNS directamente en el dominio que va a utilizarlos, es posible que la zona DNS no muestre el nombre de dominio en los destinos de los registros de tipo *NS*, sino únicamente el *subdominio*.
>
> Por ejemplo, en lugar de mostrar los siguientes registros:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> La zona DNS puede mostrar los registros de la siguiente manera:
>
> - domain.tld IN NS dns1
> - domain.tld IN NS dns2
>
> No se preocupe, esto equivale al mismo resultado y esta configuración funcionará perfectamente. Este fenómeno se debe al hecho de que se trata del mismo dominio a ambos lados del registro *NS*.
>

## Más información

[Descripción general de los servidores DNS de OVHcloud](/pages/web/domains/dns_server_general_information)

[Editar una zona DNS de OVHcloud](/pages/web/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.