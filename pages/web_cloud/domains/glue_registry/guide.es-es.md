---
title: "Personalizar los servidores DNS de un dominio (Hosts)"
excerpt: 'Descubra cómo personalizar los servidores DNS de su dominio en OVHcloud'
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Los **servidores DNS** alojan las configuraciones DNS de los dominios: las *zonas DNS*.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Estas *zonas DNS* se componen de información técnica: los *registros DNS*. En un uso habitual, los *registros DNS* permiten:

- mostrar su sitio web con su dominio, utilizando la dirección IP de su servidor de alojamiento (registros DNS de tipo *A* y *AAAA*).
- redirigir los mensajes de e-mail recibidos en su(s) dirección(es) de e-mail personalizada(s) con su dominio (registros DNS de tipo *MX*).
- configurar información relacionada con la seguridad o la autenticación de sus servicios (alojamiento web, servidor de e-mail, etc.) asociados a su dominio (registros DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Para más información sobre estos temas, consulte las siguientes guías:

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information).
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Según sus necesidades, puede personalizar el nombre de los servidores DNS de su dominio OVHcloud utilizando los "**Hosts**".

**Descubra cómo personalizar los servidores DNS de su dominio en OVHcloud.**

## Requisitos

- Disponer de un [dominio](/links/web/domains) registrado en OVHcloud.

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
> **Personalizar los servidores DNS de un dominio es una operación sensible**: realizar un cambio inadecuado puede cortar el acceso a su sitio web o impedir la recepción de nuevos mensajes en sus direcciones de e-mail.
> Siga cuidadosamente los pasos descritos a continuación o contacte con un [proveedor especializado](/links/partner) en caso de duda.
>

### 1 - Regla general <a name="step1"></a>

Algunos registros, como **Verisign** (que gestiona las extensiones *.com*, *.net* y otros TLD), utilizan un modelo técnico llamado **host objects**.

En algunos casos, este modelo requiere crear previamente un registro específico para un servidor DNS antes de que pueda ser **utilizado por un dominio**.

Otros registros no necesitan este registro y aceptan directamente el nombre del servidor DNS.

En general, OVHcloud crea automáticamente los **host objects** cuando conciernen un dominio gestionado por OVHcloud.

> [!warning]
>
> **La pestaña "Hosts" solo es necesaria en un caso concreto**: el servidor DNS pertenece a un dominio gestionado por OVHcloud y debe ser utilizado por otro dominio que no está gestionado por OVHcloud *pero está regido por el mismo registro* (por ejemplo, dos dominios en *.com*).
>

#### Casos posibles

| Dominio del servidor DNS | Dominio a configurar | Creación del *host* por OVHcloud             | Acción manual en el menú "Hosts" | Ejemplo |
| ----------------------------- | --------------------------- | ------------------------------------------- | ---------------------------------------------- | ------- |
| Gestionado por OVHcloud             | Gestionado por OVHcloud           | Automática                                 | No                                            | *ns1.example.com* (dominio *example.com* gestionado por OVHcloud) se utiliza como servidor DNS para el dominio *test.com* (gestionado por OVHcloud) |
| Gestionado por OVHcloud             | Gestionado por OVHcloud           | Automática                                 | No                                            | *ns1.example.com* (dominio *example.com* gestionado por OVHcloud) se utiliza como servidor DNS para el dominio *test.fr* (gestionado por OVHcloud) |
| **Gestionado por OVHcloud**         | **Otro registrador**         | **Configuración automática imposible**    | **Sí**                                        | ***ns1.example.com* (dominio *example.com* gestionado por OVHcloud) se utiliza como servidor DNS para el dominio *test.com* (gestionado por otro registrador, misma extensión *.com*)** |
| Gestionado por OVHcloud             | Otro registrador             | N/A                                         | No                                            | *ns1.example.com* (dominio *example.com* gestionado por OVHcloud) se utiliza como servidor DNS para el dominio *test.fr* (gestionado por otro registrador) |
| No gestionado por OVHcloud         | Gestionado por OVHcloud           | Fuera de perímetro                              | No                                            | *ns1.example.net* (dominio gestionado por otro registrador) se utiliza como servidor DNS para el dominio *test.com* (gestionado por OVHcloud) - el *host* debe crearse en el registrador que gestiona *example.net* |

**La tercera línea de la tabla anterior es el único caso en el que es necesaria la creación manual del *host* en la pestaña "Hosts".**

### 2 - Obtener los servidores DNS utilizados actualmente por su dominio <a name="step2"></a>

Puede obtener los servidores DNS utilizados actualmente por su dominio con la herramienta DNS en línea [Zonemaster](https://zonemaster.net/es).

Para ello, acceda al enlace [https://zonemaster.net](https://zonemaster.net/es), introduzca su dominio sin las *www* (ejemplo: *domain.tld*) y marque el botón `Options`{.action} situado justo debajo del formulario de introducción del dominio.

En las opciones disponibles, haga clic directamente en el botón `Recuperar los NS desde la zona padre`{.action}.

Se mostrará un resultado:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Recupere los *servidores DNS* y conserve **todas** sus direcciones IPv4 (en formato *X.X.X.X*, donde cada *X* está comprendido entre *0* y *255*) e IPv6 (las demás IP que no son IPv4) asociadas. Las necesitará para el resto de esta guía.

En nuestro ejemplo ilustrado anteriormente, el dominio **domain.tld** utiliza actualmente los siguientes **servidores DNS**:

- **dnsX1.ovh.net** asociado a la IPv4 *203.0.113.0* y la IPv6 *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** asociado a la IPv4 *203.0.113.1* y la IPv6 *2001:db8:1:1b00:203:0:113:1*.

Si lo necesita, consulte nuestro tutorial sobre la herramienta [Zonemaster](/pages/web_cloud/domains/dns_zonemaster) para más información.

### 3 - Añadir los registros "host" <a name="step3"></a>

> [!warning]
>
> Los registros de las extensiones *.eu*, *.it*, *.be* y *.de* no consideran los registros "host" como "objetos", sino como "atributos".
>
> Por lo tanto, para estas extensiones, pase **directamente al [paso 4](#step4)** de esta guía sin realizar el paso 3.
>

> [!success]
>
> Antes de empezar, tenga en cuenta que:
>
> - Puede crear servidores DNS personalizados directamente en el dominio que los va a utilizar. Por ejemplo, puede crear los DNS personalizados *dns1.domain.tld* y *dns2.domain.tld* para el dominio *domain.tld*.
>
> - También puede crear servidores DNS personalizados en un dominio para utilizarlos con otro dominio. Por ejemplo, puede crear los DNS personalizados *dns1.domain1.tld* y *dns2.domain1.tld* para el dominio *domain2.tld*. Deberá obtener los servidores DNS y sus IP asociadas del *domain2.tld*.
> Además, el *domain1.tld* debe estar registrado en OVHcloud para poder configurar los hosts.
>

<!-- CP-STEPS-START:add-host-records -->
Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Una vez en el dominio correspondiente, haga clic en la pestaña `Hosts`{.action}.
>>
>> En la tabla que se muestra, si existen, encontrará los registros host configurados actualmente en OVHcloud para su dominio. Para añadir un nuevo registro, haga clic en el botón `Añadir`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la ventana que aparece en pantalla, complete la información solicitada:
>>
>> |Información|Detalles|
>> |---|---|
>> |Nombre del host|Personalice el nombre de host que desea utilizar como servidor DNS personalizado.|
>> |IP(s) de destino|Indique la o las direcciones IP (IPv4 o IPv6) a las que debe estar vinculado el nombre de host. Se trata de la o las direcciones IP del servidor DNS utilizado actualmente por su dominio. Si necesita introducir varias direcciones IP, sepárelas con *comas*.|
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> En la imagen de arriba, retomando el ejemplo del [paso 2](#step2), el host que se desea añadir aquí (a partir del dominio *domain.tld*) es **dns1.domain.tld**.
>>
>> Se indican para este host las siguientes direcciones IP del *servidor DNS de destino*: *203.0.113.0* (IPv4) y *2001:db8:1:1b00:203:0:113:0* (IPv6). Estas IP corresponden a uno de los dos servidores DNS utilizados actualmente para *domain.tld* (**dnsX1.ovh.net**).
>>
>> Se añade este host para que **dns1.domain.tld** sustituya, en última instancia, el nombre de servidor DNS **dnsX1.ovh.net** utilizado actualmente por el dominio *domain.tld*.
>>
>> Una vez completada la información, haga clic en el botón `Añadir`{.action}. Lea la información mostrada y haga clic en `Aceptar`{.action}. Repita esta operación tantas veces como sea necesario, según el número de servidores DNS utilizados por su dominio.
>>
>> En nuestro ejemplo, deberá repetir la operación para crear el host **dns2.domain.tld**. Este sustituirá posteriormente el servidor DNS **dnsX2.ovh.net** asociado actualmente a las direcciones IP *203.0.113.1* (IPv4) y *2001:db8:1:1b00:203:0:113:1* (IPv6).
<!-- CP-STEPS-END:add-host-records -->

### 4 - Crear los registros DNS de tipo A y AAAA correspondientes a los DNS personalizados <a name="step4"></a>

Debe crear los registros *A* y *AAAA* para los nombres de host definidos en el paso anterior. Los registros *A* y *AAAA* deben apuntar a la dirección IP de destino correspondiente al nombre de host creado previamente.

Esta operación se realiza desde la interfaz del proveedor que gestiona la configuración DNS de su dominio. Existen dos posibilidades:

**Haga clic en una de las 2 posibilidades para ver su contenido.**

/// details | Su dominio no utiliza una zona DNS activa en OVHcloud

Contacte con el proveedor que gestiona dicha zona. Una vez realizada la operación, continúe con el siguiente paso.

///

<!-- CP-STEPS-START:add-dns-records-ovh -->
/// details | Su dominio utiliza una zona DNS activa en OVHcloud

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio que utilizó para crear los hosts en la [parte 3](#step3).
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en `Añadir un registro`{.action}.
>>
> **Paso 3**
>>
>> Seleccione el registro de tipo *A* o *AAAA* según el tipo de IP asociada que desee añadir.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}
>>
> **Paso 4**
>>
>> Introduzca el *subdominio* y la dirección *IPv4* (A) o *IPv6* (AAAA) y continúe hasta validar la adición. Si es necesario, consulte las instrucciones descritas en nuestra documentación "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:add-dns-records-ovh -->

> [!primary]
>
> En todos los casos, es necesario un período de propagación de 4 a 24 horas para que la modificación de la zona DNS surta efecto en toda la red DNS. Le recomendamos esperar este plazo antes de continuar.
>

Si retomamos nuestro ejemplo anterior, los registros "host" que se desean añadir (a partir del dominio *domain.tld*) son **dns1.domain.tld** y **dns2.domain.tld**. El objetivo es sustituir los servidores DNS actuales **dnsX1.ovh.net** y **dnsX2.ovh.net**.

Por lo tanto, se añaden los siguientes registros en la zona DNS activa del dominio *domain.tld*:

 - Un registro DNS de tipo *A* para el *subdominio* **dns1.domain.tld** hacia la IP *203.0.113.0* (IPv4 del servidor DNS **dnsX1.ovh.net**).
 - Un registro DNS de tipo *AAAA* para el *subdominio* **dns1.domain.tld** hacia la IP *2001:db8:1:1b00:203:0:113:0* (IPv6 del servidor DNS **dnsX1.ovh.net**).
 - Un registro DNS de tipo *A* para el *subdominio* **dns2.domain.tld** hacia la IP *203.0.113.1* (IPv4 del servidor DNS **dnsX2.ovh.net**).
 - Un registro DNS de tipo *AAAA* para el *subdominio* **dns2.domain.tld** hacia la IP *2001:db8:1:1b00:203:0:113:1* (IPv6 del servidor DNS **dnsX2.ovh.net**).

A continuación, espere a que se complete la propagación DNS.

### 5 - Sustituir los registros NS en la zona DNS activa de su dominio

Para que la personalización de los servidores DNS sea visible en la red DNS (al realizar un *Whois*, un *dig ns* o mediante un analizador de configuración DNS), deberá sustituir los registros de tipo *NS* en la zona DNS activa de su dominio.

Esta operación se realiza desde la interfaz del proveedor que gestiona la configuración DNS de su dominio. Existen dos posibilidades:

**Haga clic en una de las 2 posibilidades para ver su contenido.**

/// details | Su dominio no utiliza una zona DNS activa en OVHcloud

Contacte con el proveedor que gestiona dicha zona para realizar la modificación.

///

<!-- CP-STEPS-START:update-ns-records-ovh -->
/// details | Su dominio utiliza una zona DNS activa en OVHcloud

Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio para el que ha personalizado los servidores DNS.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en `Modificar en modo de texto`{.action}.
>>
>> Aparecerá una ventana con su zona DNS en modo *texto*:
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Le recordamos que realizar un cambio inadecuado en modo *texto* en su zona DNS puede cortar el acceso a su sitio web o impedir la recepción de nuevos mensajes en sus direcciones de e-mail.
>> > Contacte con un [proveedor especializado](/links/partner) en caso de duda.
>>
> **Paso 3**
>>
>> En esta ventana, sustituya **únicamente en los registros de tipo *NS*** los nombres de los servidores DNS por sus propios nombres de servidores DNS personalizados **sin olvidar** incrementar en "1" el primer valor numérico de la línea *SOA*. Una vez realizados los cambios, haga clic en `Siguiente`{.action} y luego en `Aceptar`{.action}.
>>
>> La modificación no será visible de inmediato. Espere unos veinte minutos para comprobar que los cambios se han aplicado correctamente.

///
<!-- CP-STEPS-END:update-ns-records-ovh -->

> [!primary]
>
> Es necesario un período de propagación de 4 a 24 horas para que los cambios realizados en la zona DNS surtan efecto en toda la red DNS.
>

Para comprender mejor este paso, retomemos nuestro ejemplo con el dominio *domain.tld* y su zona DNS en modo "texto" visible en la imagen anterior.

Se observan los siguientes elementos:

- El primer valor numérico de la línea *SOA* es el siguiente: *2023071700*.
- Existen dos registros de tipo *NS* para el dominio *domain.tld*.
- Los registros de tipo *NS* apuntan aún a los dos servidores DNS **dnsX1.ovh.net** y **dnsX2.ovh.net**.

Para continuar con la personalización de los servidores DNS del dominio *domain.tld*, deberá:

- Incrementar en "1" el primer valor numérico de la línea *SOA*: *202307170**1*** (tenga en cuenta que si el primer valor numérico fuese el siguiente: *2023071704*, se incrementaría igualmente en "1" y se obtendría el resultado siguiente: *202307170**5***).
- Sustituir el destino **dnsX1.ovh.net.** por **dns1.domain.tld.** únicamente en la línea que empieza por **IN NS**.
- Sustituir el destino **dnsX2.ovh.net.** por **dns2.domain.tld.** únicamente en la línea que empieza por **IN NS**.

Una vez realizadas las modificaciones, el resultado de nuestro ejemplo será el siguiente:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Para nuestro dominio *domain.tld*, los servidores DNS que se mostrarán tras la aplicación de la modificación y la propagación DNS serán **dns1.domain.tld.** y **dns2.domain.tld.**.

Si es necesario, consulte las instrucciones descritas en nuestra documentación "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!success]
>
> En el caso de una personalización de los servidores DNS directamente en el dominio que los va a utilizar, es posible que la zona DNS no muestre el dominio en los destinos de los registros de tipo *NS*, sino únicamente el *subdominio*.
>
> Por ejemplo, en lugar de mostrar los siguientes registros:
>
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> La zona DNS puede mostrar los registros de la siguiente manera:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> No se preocupe, esto equivale al mismo resultado y esta configuración funcionará perfectamente. Este fenómeno se explica por la presencia del mismo dominio a ambos lados del registro *NS*.
>

### 6 - Modificar los servidores DNS de su dominio

Debe modificar los servidores DNS de su dominio sustituyendo los antiguos servidores DNS por los servidores DNS personalizados creados previamente.

<!-- CP-STEPS-START:change-dns-servers -->
Para ello, haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione *el dominio para el que desea personalizar los servidores DNS*.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} y haga clic en `Modificar los servidores DNS`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}
>>
> **Paso 3**
>>
>> Sustituya sus servidores DNS actuales por los que desea utilizar como servidores DNS personalizados.
>>
>> > [!warning]
>> >
>> > Si sus servidores DNS personalizados se han creado con las extensiones *.eu*, *.it*, *.be* o *.de*, introduzca **obligatoriamente** la dirección IP asociada a cada uno de sus servidores DNS personalizados.
>> >
>> > Sin ello, los servidores DNS personalizados no se tendrán en cuenta correctamente y no funcionarán con su dominio.
>>
> **Paso 4**
>>
>> Finalice los pasos y, si es necesario, consulte las instrucciones descritas en nuestra documentación "[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!primary]
>> >
>> > Si ha personalizado servidores DNS en un dominio para utilizarlos con otro dominio que no está registrado en OVHcloud, contacte con el proveedor donde está registrado su otro dominio para modificar los servidores DNS.
<!-- CP-STEPS-END:change-dns-servers -->

> [!primary]
>
> Es necesario un período de propagación de 24 a 48 horas para que el cambio de servidores DNS surta efecto en toda la red DNS.
>

En nuestro ejemplo de personalización de los servidores DNS del dominio *domain.tld*, se sustituye el servidor DNS **dnsX1.ovh.net** por **dns1.domain.tld** y el servidor DNS **dnsX2.ovh.net** por **dns2.domain.tld** y, a continuación, se espera a que se complete la propagación DNS.

## Más información

[Información general sobre los servidores DNS de OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento web, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda en el uso y la configuración de sus soluciones de OVHcloud, consulte nuestros distintos [planes de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
