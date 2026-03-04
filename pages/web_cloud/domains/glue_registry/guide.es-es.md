---
title: "Personalizar los servidores DNS de un nombre de dominio (Hosts)"
excerpt: "Descubra cómo personalizar los servidores DNS de un nombre de dominio en OVHcloud"
updated: 2026-02-10
---

## Objetivo

Los **servidores DNS** alojan las configuraciones DNS de los nombres de dominio: las *zonas DNS*.

Estas *zonas DNS* se componen de información técnica: los *registros DNS*. En un uso clásico, los *registros DNS* permiten :

- Mostrar su sitio web con su nombre de dominio, utilizando la dirección IP de su servidor de alojamiento (registros DNS de tipo *A* y *AAAA*).
- Redirigir los mensajes recibidos en su dirección(s) de correo personalizada con su nombre de dominio (registros DNS de tipo *MX*).
- Configurar los datos relativos a la seguridad o la autenticación de los servicios (alojamiento web, servidor de correo, etc.) asociados al nombre de dominio (registros DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Para obtener más información sobre estos temas, consulte las siguientes guías :

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information).
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

En función de sus necesidades, es posible personalizar el nombre de los servidores DNS de su nombre de dominio en OVHcloud utilizando los "**Hosts**".

**Descubra cómo personalizar los servidores DNS de un nombre de dominio en OVHcloud.**

## Requisitos

- Tener un [nombre de dominio](/links/web/domains) registrado con OVHcloud.

<!-- CP-NAV-START:web-domains -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Dominios](/links/control-panel/web-domains)
- **Ruta de navegación:** `Web Cloud`{.action} > `Dominios`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-domains -->

## Procedimiento

> [!warning]
>
> **Personalizar los servidores DNS de un nombre de dominio es una operación delicada** : Una modificación errónea puede cortar el acceso al sitio web o hacer que la recepción de nuevos mensajes en las direcciones de correo electrónico no esté disponible. 
> En caso de duda, le recomendamos que siga atentamente las indicaciones que se describen a continuación o que contacte con un [proveedor especializado](/links/partner).
>

### 1 - Regla general

Algunos registros, como **Verisign** (que gestiona las extensiones *.com*, *.net* y otros TLD), utilizan un modelo técnico denominado **host objects**.<br>
En algunos casos, este modelo exige crear previamente un registro específico para un servidor DNS antes de que pueda ser **utilizado por un nombre de dominio**.<br>
Otros registros no requieren este registro y aceptan directamente el nombre del servidor DNS.

En general, OVHcloud crea automáticamente los **host objects** cuando se refieren a un nombre de dominio gestionado por OVHcloud.

> [!warning]
>
> **La pestaña "Hosts" solo es necesaria en un caso concreto**: el servidor DNS pertenece a un nombre de dominio gestionado por OVHcloud y debe ser utilizado por otro nombre de dominio que no está gestionado por OVHcloud, pero está regido *por el mismo registro* (por ejemplo, dos dominios *.com*).

#### Casos posibles

| Nombre de dominio del servidor DNS | Nombre de dominio a configurar | Creación del host por OVHcloud | Acción manual necesaria en la pestaña "Hosts" | Ejemplo |
| --------------------------------- | ------------------------------ | ------------------------------- | --------------------------------------------- | ------- |
| Gestionado por OVHcloud | Gestionado por OVHcloud | Automática | No | *ns1.example.com* (nombre de dominio *example.com* gestionado por OVHcloud) se utiliza como servidor DNS para *test.com* (OVHcloud) |
| Gestionado por OVHcloud | Gestionado por OVHcloud | Automática | No | *ns1.example.com* se utiliza como servidor DNS para *test.fr* (OVHcloud) |
| **Gestionado por OVHcloud** | **Otro registrador** | **Configuración automática imposible** | **Sí** | ***ns1.example.com* se utiliza como servidor DNS para *test.com* (otro registrador, misma extensión *.com*)** |
| Gestionado por OVHcloud | Otro registrador | N/A | No | *ns1.example.com* se utiliza como servidor DNS para *test.fr* |
| No gestionado por OVHcloud | Gestionado por OVHcloud | Fuera de alcance | No | *ns1.example.net* se utiliza como servidor DNS para *test.com* – el host debe crearse en el registrador de *example.net* |

**La tercera fila de la tabla es el único escenario en el que es necesaria una creación manual en la pestaña "Hosts".**

### 2 - Obtener los servidores DNS que utiliza actualmente su nombre de dominio <a name="step2"></a>

Puede recuperar los servidores DNS que utiliza actualmente su nombre de dominio mediante la herramienta DNS en línea [Zonemaster](https://zonemaster.net/en).

Para ello, acceda al enlace [https://zonemaster.net](https://zonemaster.net/en), introduzca su nombre de dominio sin los *www* (p. ej.: *domain.tld*) y marque el botón `Options`{.action} situado justo debajo del formulario de entrada del nombre de dominio.

En las opciones disponibles, haga clic directamente en el botón `Fetch NS from parent zone`{.action}.

Se mostrará un resultado:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Recupere los *servidores DNS* y conserve **todas** sus direcciones IPv4 asociadas (con formato *X.X.X.X*, donde *X* está comprendido entre *0* y *255*) e IPv6 (las demás IP que no sean IPv4). Les necesitará para el resto de esta guía.

En el ejemplo anterior, el nombre de dominio **domain.tld** utiliza actualmente los siguientes **servidores DNS** :

- **dnsX1.ovh.net** asociado a la IPv4 *203.0.113.0* y a la IPv6 *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** asociado a la IPv4 *203.0.113.1* y a la IPv6 *2001:db8:1:1b00:203:0:113:1*.

Si necesita más información, consulte [nuestro tutorial sobre la herramienta Zonemaster](/pages/web_cloud/domains/dns_zonemaster).

### 3 - Agregar los registros "Hosts" <a name="step3"></a>

> [!warning]
>
> Los registros de extensiones *.eu*, *.it*, *.be* y *.de* no consideran los registros "Hosts" como "objetos", sino como "atributos".
>
> Por lo tanto, para estas extensiones, vaya **directamente al [etapa 4](#step4)** de esta guía sin realizar el etapa 3.
>

> [!success]
>
> Antes de empezar, tenga en cuenta lo siguiente :
>
> - Puede crear servidores DNS personalizados directamente en el nombre de dominio que va a utilizarlos. Por ejemplo, puede crear los DNS personalizados *dns1.domain.tld* y *dns2.domain.tld* para el nombre de dominio *domain.tld*.
>
> - También puede crear servidores DNS personalizados en un nombre de dominio para utilizarlos con otro nombre de dominio. Por ejemplo, puede crear los DNS personalizados *dns1.domain1.tld* y *dns2.domain1.tld* para el nombre de dominio *domain2.tld*. Deberá recuperar los servidores DNS y sus IP asociadas en relación con el *domain2.tld*.
> Además, el *domain1.tld* debe estar registrado en OVHcloud para poder activar los "Hosts" records.
>

Pahaga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Haga clic en [este enlace](/links/control-panel/web-domains) y seleccione el nombre de dominio correspondiente.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Hosts`{.action}.
>>
>> Se mostrará una tabla con los registros "Hosts" configurados actualmente en OVHcloud para el nombre de dominio (en su caso). Para añadir un nuevo registro "Host", haga clic en el botón `Añadir`{.action}.
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Introduzca la información solicitada en la ventana que se abre en su pantalla :
>>
>> |Información|Detalles|
>> |---|---|
>> |Nombre del host|Personalice el nombre de host que desea utilizar como servidor DNS personalizado.|
>> |IP(s) de destino|ndique la(s) dirección(es) IP (IPv4 y/o IPv6) a la(s) que debe vincularse el nombre de host. Se trata de la(s) dirección(es) IP del servidor DNS utilizado actualmente por su nombre de dominio. Si hay varias direcciones IP, sepárelas con *comas*.|
>>
>> ![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> En la imagen anterior, tomando como ejemplo el [etapa 2](#step2), el "Host" que queremos añadir aquí (a partir del nombre de dominio *domain.tld*) es **dns1.domain.tld**. 
>>
>> Para este "Host", se indican como direcciones IP del *servidor DNS de destino*, las direcciones IP *203.0.113.0* (IPv4) y *2001:db8:1:1b00:203:0:113:0* (IPv6). Estas IP corresponden a uno de los dos servidores DNS que se utilizan actualmente para *domain.tld* (**dnsX1.ovh.net**). 
>>
>> Se añade este "Host" para que **dns1.domain.tld** pueda, al final, sustituir el nombre de servidor DNS **dnsX1.ovh.net** actualmente utilizado por el nombre de dominio *domain.tld*.
>>
>> Una vez que haya introducido toda la información, haga clic en el botón `Siguiente`{.action}, lea la información mostrada y haga clic en `Aceptar`{.action}. Repita esta operación tantas veces como sea necesario, en función del número de servidores DNS utilizados por su nombre de dominio.
>>
>> En nuestro ejemplo, deberá repetir la operación para crear el "Host" **dns2.domain.tld**. Este sustituirá posteriormente al servidor DNS **dnsX2.ovh.net** asociado actualmente a las IPv4 *203.0.113.1* e IPv6 *2001:db8:1:1b00:203:0:113:1*.

### 4 - Crear los registros DNS de tipo A y AAAA correspondientes a los DNS personalizados <a name="step4"></a>

Debe crear los registros *A* y *AAAA* para los nombres de host que definió en el paso anterior. Los registros *A* y *AAAA* deben tener como destino la dirección IP de destino que coincida con el nombre de host creado anteriormente.

Esta operación se realiza desde el panel que le ofrezca el proveedor que gestione la configuración DNS de su nombre de dominio. Existen dos posibilidades :

- **Su nombre de dominio no utiliza una zona DNS activa en OVHcloud** : Contacte con el proveedor que gestione dicha zona. Una vez realizada esta operación, vaya al siguiente paso.
- **Su nombre de dominio utiliza una zona DNS activa en OVHcloud** : Conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna de la izquierda, haga clic en `Zonas DNS`{.action} y seleccione el nombre de dominio que utilizó para crear los "Host" en el [etapa 3](#step3). Abra la pestaña `Zona DNS`{.action} y haga clic en `Añadir un registro`{.action}. Seleccione el tipo de entrada *A* o *AAAA* en función del tipo de IP asociada que quiera añadir. Siga los pasos indicados en el *subdominio* y la dirección *IPv4* (A) o *IPv6* (AAAA). Si necesita ayuda, consulte la guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}

> [!primary]
>
> En todos los casos, es necesario un plazo de propagación de 4 a 24 horas para que el cambio de la zona DNS se aplique en toda la red DNS. Le recomendamos que espere este período de tiempo antes de continuar.
>

Siguiendo con el ejemplo anterior, los registros "Hosts" que queremos añadir (del nombre de dominio *domain.tld*) son **dns1.domain.tld** y **dns2.domain.tld**. El objetivo es sustituir los servidores DNS actuales **dnsX1.ovh.net** y **dnsX2.ovh.net**.

Por lo tanto, se añaden los siguientes registros a la zona DNS activa del nombre de dominio *domain.tld* :

 - Un registro DNS de tipo *A* para el *subdominio* **dns1.domain.tld** hacia la IP *203.0.113.0* (IPv4 del servidor DNS **dnsX1.ovh.net**).
 - Un registro DNS de tipo *AAAA* para el *subdominio* **dns1.domain.tld** hacia la IP *2001:db8:1:1b00:203:0:113:0* (IPv6 del servidor DNS **dnsX1.ovh.net**).
 - Un registro DNS de tipo *A* para el *subdominio* **dns2.domain.tld** hacia la IP *203.0.113.1* (IPv4 del servidor DNS **dnsX2.ovh.net**).
 - Un registro DNS de tipo *AAAA* para el *subdominio* **dns2.domain.tld** hacia la IP *2001:db8:1:1b00:203:0:113:1* (IPv6 del servidor DNS **dnsX2.ovh.net**).

Esperábamos el tiempo de la propagación DNS.

### 5 - Sustituir los registros NS en la zona DNS activa del nombre de dominio

Para que la personalización de los servidores DNS sea visible en la red DNS (efectuando un *Whois*, un *dig ns* o a través de un analizador de configuración DNS), deberá sustituir los registros de tipo *NS* en la zona DNS activa de su nombre de dominio.

Esta operación se realiza desde el panel que le ofrezca el proveedor que gestione la configuración DNS de su nombre de dominio. Existen dos posibilidades :

- **Su nombre de dominio no utiliza una zona DNS activa en OVHcloud** : Póngase en contacto con el proveedor que gestione dicha zona para realizar el cambio.
- **Su nombre de dominio utiliza una zona DNS activa en OVHcloud** : Conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Zonas DNS`{.action} y seleccione el nombre de dominio para el que haya personalizado los servidores DNS. Abra la pestaña `Zona DNS`{.action} y haga clic en `Editar en modo de texto`{.action}. 

Aparecerá una ventana con su zona DNS en modo *textual* :

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}

> [!warning]
>
> Le recordamos que un cambio inoportuno en modo *textual* en su zona DNS puede cortar el acceso a su sitio web y/o hacer que la recepción de nuevos mensajes en sus direcciones de correo electrónico no esté disponible. 
> En caso de duda, póngase en contacto con un [proveedor especializado](/links/partner).
>

En esta ventana, sustituya **únicamente en los registros de tipo *NS*** los nombres de los servidores DNS por sus propios nombres de servidores DNS personalizados **sin olvidar** aumentar en `1` el primer valor numérico de la línea *SOA*. Una vez realizados los cambios, haga clic en `Siguiente`{.action} y luego en `Aceptar`{.action}.

El cambio no se mostrará inmediatamente en el [área de cliente de OVHcloud](/links/manager). Espere unos veinte minutos y vuelva a conectarse al área de cliente de OVHcloud para ver cómo se aplican los cambios.

> [!primary]
>
> Es necesario un plazo de propagación de 4 a 24 horas para que los cambios realizados en la zona DNS se apliquen en toda la red DNS.
>

Para entender mejor este paso, retomemos nuestro ejemplo con el nombre de dominio *domain.tld* y su zona DNS en modo "textual", que se muestra en la imagen de arriba.

En él se observan los siguientes elementos : 

- El primer valor numérico de la línea *SOA* es el siguiente: *2023071700*.
- Hay dos registros de tipo *NS* para el nombre de dominio *domain.tld*.
- Los registros de tipo *NS* siguen dirigidos a los dos servidores DNS **dnsX1.ovh.net** y **dnsX2.ovh.net**.

Para seguir personalizando los servidores DNS para el nombre de dominio *domain.tld*, deberá :

- Incrementar en `1` el primer valor numérico de la línea *SOA*: *202307170**1*** (tenga en cuenta que si el primer valor numérico fuera el siguiente:*2023071704*, se incrementaría siempre en `1` y se obtendría el siguiente resultado: *202307170**5*** ).
- Sustituir el destino **dnsX1.ovh.net.** por **dns1.domain.tld.** únicamente para la línea que comienza por **IN NS**.
- Sustituir el destino **dnsX2.ovh.net.** por **dns2.domain.tld.** sólo para la línea que comienza por **IN NS**.

Una vez realizados los cambios, el resultado de nuestro ejemplo será el siguiente :

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Para nuestro nombre de dominio *domain.tld*, los servidores DNS que se mostrarán tras la modificación y propagación DNS serán ahora **dns1.domain.tld.** y **dns2.domain.tld.**.

Si necesita ayuda, consulte la guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!success]
>
> Si personaliza los servidores DNS directamente en el nombre de dominio que va a utilizarlos, es posible que la zona DNS no muestre el nombre de dominio en los destinos de los registros de tipo *NS*, sino únicamente el *subdominio*.
>
> Por ejemplo, en lugar de mostrar los siguientes registros :
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> La zona DNS puede mostrar los registros de la siguiente manera :
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> No se preocupe, esto equivale al mismo resultado y esta configuración funcionará perfectamente. Este fenómeno se debe al hecho de que se trata del mismo nombre de dominio a ambos lados del registro *NS*.
>

### 6 - Modificar los servidores DNS de su nombre de dominio

Debe modificar los servidores DNS de su nombre de dominio sustituyendo los antiguos servidores DNS por los servidores DNS personalizados creados anteriormente.

Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action} de la columna izquierda. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione *el nombre de dominio para el que quiera personalizar los servidores DNS*.
 
Abra la pestaña `Servidores DNS`{.action} y haga clic en `Cambiar los servidores DNS`{.action}. Sustituya sus servidores DNS actuales por los que quiera utilizar como servidor DNS personalizado.

> [!warning]
>
> Si los servidores DNS personalizados se han creado con las extensiones *.eu*, *.it*, *.be* o *.de*, introduzca **obligatoriamente** la dirección IP asociada para cada uno de los servidores DNS personalizados.
>
> De lo contrario, los servidores DNS personalizados no se tendrán en cuenta correctamente y no funcionarán con el nombre de dominio.
>

Siga los pasos que se indican y, si necesita ayuda, consulte nuestra guía "[Cambiar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

> [!primary]
> 
> Si ha personalizado servidores DNS en un nombre de dominio para utilizarlos con otro nombre de dominio que no esté registrado en OVHcloud, contacte con el proveedor en el que esté registrado el otro nombre de dominio para modificar los servidores DNS.
>

![glueregistry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}

> [!primary]
>
> Es necesario un plazo de propagación de 24 a 48 horas para que el cambio de los servidores DNS se aplique en toda la red DNS. Le recomendamos que espere este período de tiempo antes de continuar.
>

En nuestro ejemplo de personalización de los servidores DNS del nombre de dominio *domain.tld*, sustituimos el servidor DNS **dnsX1.ovh.net** por **dns1.domain.tld** y el servidor DNS **dnsX2.ovh.net** por **dns2.domain.tld**. A continuación, esperamos a que finalice la propagación DNS.

## Más información

[Descripción general de los servidores DNS de OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).