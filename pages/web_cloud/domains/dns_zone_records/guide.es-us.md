---
title: "Todo sobre los registros DNS"
excerpt: "Descubra los diferentes tipos de registro DNS disponibles en una zona DNS de OVHcloud"
updated: 2024-07-17
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Las siglas **DNS**, que significan **D**omain **N**ame **S**ystem, son un conjunto de elementos (servidores DNS, zonas DNS, etc.) que permiten asociar un dominio a una dirección IP.

Le recomendamos que consulte nuestras guías "[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" y "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" en este orden.

La zona DNS de un dominio es el archivo de configuración del dominio. Consta de información técnica, denominada "registros DNS"*. La zona DNS es, en cierto modo, un centro de referencia para un dominio.

Esta guía explica los distintos tipos de registros DNS disponibles en una zona DNS gestionada de OVHcloud. Complementa las siguientes guías:

- [Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Gestionar el historial de una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_history)
- [Eliminar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)

**Descubra los distintos tipos de registro DNS disponibles en una zona DNS de OVHcloud.**

## Procedimiento

### Los registros DNS

**La [edición de una zona DNS](/pages/web_cloud/domains/dns_zone_edit) es una operación delicada**: una modificación errónea podría, por ejemplo, deshabilitar el acceso al sitio web o la recepción de nuevos mensajes en las direcciones de correo electrónico.

A continuación se enumeran los objetivos y las características específicas de cada registro. que le permitirá entender mejor las operaciones realizadas en sus servicios DNS.

#### Registros de punteo <a name="pointer-records"></a>

Seleccione el registro que desee haciendo clic en cada una de las fichas siguientes.

> [!tabs]
> **A**
>> **A**ddress <br><br>
>> Conecta un dominio a una dirección IPv4 `X.X.X` (donde las `X` son cifras entre `0` y `255`). Por ejemplo, la dirección IPv4 del servidor en el que está alojado el sitio web.
>>
> **AAAA** 
>> 4 letras **A**, ya que este registro está codificado en cuatro veces más bits que el puntero **A** histórico<br><br>
>> Conecta un dominio a una dirección IPv6. Por ejemplo, la dirección IPv6 del servidor en el que está alojado el sitio web.
>>
>> > [!primary]
>> > Las direcciones IPv6 se están desplegando progresivamente para paliar la falta de direcciones IPv4 debido a la continua expansión de los usos digitales. La codificación en 128 bits de las direcciones IPv6 permite ofrecer un mayor número de direcciones IP.
>> >
>> > No obstante, si su servidor ya dispone de una IPv4, le recomendamos que dé prioridad al uso de la IPv6.<br>
>> > En efecto, las IPv6 todavía no se han interpretado correctamente en toda la red de internet, lo que puede provocar perturbaciones de visualización o de acceso.
>>
> **CNAME**
>> **C**anonical **NAME** <br><br>
>> Utiliza la dirección IP de otro dominio creando un enlace llamado alias. Por ejemplo, si *www.domain.tld* es un alias de *domain.tld*, significa que *www.domain.tld* utilizará la dirección IP de *domain.tld*.
>>
>> > [!alert]
>> >
>> > Un registro TXT que utilice el mismo dominio o subdominio que un registro CNAME perturba el funcionamiento de este último. El registro CNAME solo funcionará parcialmente o en absoluto.
>>
>> > [!warning]
>> >
>> > Por convenio, los registros CNAME no pueden ser utilizados directamente por un dominio en su propia zona DNS. En efecto, solo el dominio debe apuntar obligatoriamente y directamente a una dirección IP con un registro de tipo A (o AAAA si se trata de una IPv6).
>> >
>> > Para seguir el ejemplo anterior, no podrá crear un registro CNAME para el dominio *domain.tld* en la zona DNS que haya creado para este dominio.
>> > No obstante, podrá crear registros CNAME con todos los subdominios (ejemplos: *subdomain.domain.tld* o *www.domain.tld*) del dominio *domain.tld* en la zona DNS creada para *domain.tld*.
>> >
>> > Si quiere profundizar más técnicamente en este asunto, puede encontrar, al final de esta página, [un caso especial de uso relativo a los CNAME y las zonas DNS creadas para subdominios](#cnameusecase).
>>
> **DNAME**
>> **D**elegation **NAME** <br><br>
>> Permite generar un "alias" para todos los subdominios de un dominio. Este registro evita crear multitud de registros CNAME. De hecho, un registro CNAME redirige independientemente de un solo subdominio a un único destino.
>>
>> Ejemplo: creando un registro DNAME de *domain.tld* a *ovh.com*, todos los subdominios de *domain.tld* (como *dname.domain.tld* y *xxx.domain.tld*) se redirigirán a los subdominios de *ovh.com* (como: *dname.ovh.com* y *xxx.ovh.com*).
>>
>> Dicho de otro modo, el registro DNAME indica que *dname.domain.tld* y *xxx.domain.tld* deben mostrar los resultados de *dname.ovh.com* y *xxx.ovh.com*, respectivamente.
>>
>> > [!warning]
>> > 
>> > En cambio, *domain.tld* como dominio no mostrará el destino del dominio *ovh.com*, ya que el registro DNAME solo es válido para los subdominios de los dominios definidos en el registro DNAME.
>> >
>> > Además, si el subdominio objetivo *xxx.ovh.com* no apunta a ninguna parte, el registro DNAME tampoco mostrará nada para *xxx.domain.tld*.
>>
>> > [!success]
>> > 
>> > El registro DNAME suele utilizarse para cambiar el nombre de la empresa. También puede configurarse cuando un usuario dispone de varias extensiones de dominios (.es, .net, .com, .info...) para redirigirlos entre sí fácilmente.
>> >
> **NS**
>> **N**ame **S**erver<br><br>
>> Define los servidores DNS asociados a su zona DNS. Por ejemplo, si los registros NS de su zona DNS muestran los servidores *dnsXX.ovh.ca* y *nsXX.ovh.ca*, deberá utilizarlos en la pestaña `Servidores DNS`{.action} del área de cliente de OVHcloud. Para más información, consulte nuestra guía "[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!warning]
>> >
>> > Si [edita una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit), no modifique los registros NS de su zona DNS en servidores DNS externos a OVHcloud utilizando el botón `Modificar en modo de texto`{.action}. Esta zona DNS funciona **únicamente** con los servidores DNS de OVHcloud.
>> >

#### Registros de correo <a name="mail-records"></a>

Seleccione el registro que desee haciendo clic en cada una de las fichas siguientes.

> [!tabs]
> **MX**
>> **M**ail e**X**changer <br><br>
>> Conecta un dominio a un servidor de correo. Por ejemplo, la dirección *10 mx1.mail.ovh.ca* corresponde a uno de los servidores de correo de OVHcloud cuando usted dispone de una solución de correo de OVHcloud. Es probable que su proveedor de correo disponga de varios servidores de correo: es necesario crear varios registros MX. Consulte nuestra guía [Añadir un registro MX a la configuración del dominio](/pages/web_cloud/domains/dns_zone_mx).
>>
>> > [!warning]
>> >
>> > En general, le recomendamos que utilice solo uno o más servidores de un mismo proveedor de correo en su zona DNS.
>> > De hecho, si ya tiene servicios de correo con otro proveedor de correo y añade al mismo tiempo (sin sustituir) los servidores de correo de su nuevo proveedor de correo, puede recibir mensajes de correo al azar en uno de sus dos proveedores.
>>
> **SPF**
>> **S**ender **P**olicy **F**ramework <br><br>
>> Permite evitar posibles usurpaciones de identidad en las direcciones de correo electrónico que utilizan su dominio (*spoofing*). Por ejemplo, el registro `v=spf1 include:mx.ovh.ca ~all` indica que solo los servidores de envío asociados a su solución de correo de OVHcloud pueden considerarse legítimos por el servidor de recepción. Puede introducir este registro en forma de registro TXT o a través de nuestro sistema de configuración automática.
>>
>> Para más información, consulte nuestra guía [Añadir un registro SPF a la configuración del dominio](/pages/web_cloud/domains/dns_zone_spf).
>>
> **DKIM**
>> **D**omain**K**eys **I**dentified **M**ail <br><br>
>> Permite verificar la autenticidad del nombre de dominio del remitente y garantizar la integridad del mensaje de correo electrónico enviado. El registro DKIM se presenta como una clave de varios caracteres. La clave DKIM la proporciona su proveedor de correo electrónico (si esta funcionalidad la ofrece este último). Puede introducirla en forma de registro TXT.
>>
>> Consulte nuestra documentación "[Configurar un registro DKIM](/pages/web_cloud/domains/dns_zone_dkim)" para más información.
>>
> **DMARC**
>> **D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance <br><br>
>> Contribuye a la autenticación del correo en combinación con los métodos SPF y/o DKIM. Este valor le será dado por su proveedor de correo electrónico (si esta funcionalidad la ofrece este último), estará al menos asociado a un registro SPF o DKIM.
>>
>> Consulte nuestra documentación "[Configurar un registro DMARC en su dominio](/pages/web_cloud/domains/dns_zone_dmarc)" para más información.

#### Registros extendidos <a name="extended-records"></a>

Seleccione el registro que desee haciendo clic en cada una de las fichas siguientes.

> [!tabs]
> **TXT**
>> **T**e**XT** <br><br>
>> Permite añadir el valor que desee en formato de texto a la zona DNS del dominio. Este registro suele utilizarse en procesos de verificación, validación o seguridad.
>>
>> > [!warning]
>> > 
>> > El registro TXT está limitado a 255 caracteres. No obstante, en algunos casos puede dividir su valor en varios registros. Cuando el proveedor le pida que introduzca un valor superior al límite de 255 caracteres, deberá ponerse en contacto con su proveedor.
>> >
>> > Sin embargo, este límite no existe si utiliza la funcionalidad `Editar en modo de texto`{.action} descrita en la guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" (para usuarios experimentados).
>> 
> **SRV**
>> **S**e**RV**ice resource <br><br>
>> Indica la dirección del servidor que gestiona un servicio como, Por ejemplo, puede indicar la dirección de un servidor SIP o la de un servidor que permite la configuración automática de un cliente de correo.
>>
> **CAA**
>> **C**ertification **A**uthority **A**uthorization <br><br>
>> Permite indicar las autoridades de certificación autorizadas a emitir certificados SSL para un dominio.
>>
>> > [!warning]
>> >
>> > Si configura una entrada CAA para un dominio, esta configuración también se aplicará a **todos los subdominios** del mismo dominio.
>> >
>> > Si utiliza un certificado SSL Let's Encrypt con su dominio en un alojamiento compartido de OVHcloud y utiliza un registro CAA, este último impedirá la regeneración del certificado SSL Let's Encrypt.
>>
> **NAPTR**
>> **N**ame **A**uthority **P**oin**T**e**R** <br><br>
>> Utilizado en telecomunicaciones para dirigir una petición emitida desde un terminal móvil hacia un servidor. Puede asociar un registro SRV para generar dinámicamente los URIs (Uniform Resource Identifier) de destino.
>>
> **LOC**
>> **LOC**ation <br><br>
>> Utilizado para indicar la posición geográfica (especialmente la latitud, la longitud y la altitud).
>>
> **SSHFP**
>> **S**ecure **SH**ell **F**inger**P**rint <br><br>
>> Utilizado para indicar la huella de una llave pública SSH.
>>
> **TLSA**
>> **T**ransport **L**ayer **S**ecurity **A**uthentification <br><br>
>> Utilizado para indicar la huella de un certificado SSL/TLS.

#### Caso particular de uso: el uso de los registros CNAME <a name="cnameusecase"></a>

Algunos usuarios crean zonas DNS directamente para el subdominio de un dominio (por ejemplo, *subdomain-with-its-own-DNS-zone.domain.tld*). En este caso, también se aplica la regla anterior en la pestaña "CNAME" de la sección "[Registros de punteo](#pointer-records)".

La zona DNS está creada para el subdominio (en nuestro ejemplo, *subdomain-with-its-own-DNS-zone.domain.tld*), por lo que este último está considerado como un dominio de pleno derecho en su zona DNS.

Así pues, en este caso concreto no podrá crear un registro CNAME para un *subdomain-with-its-own-DNS-zone.domain.tld* en la zona DNS que haya creado para dicho subdominio. No obstante, puede crear registros CNAME como *subdomain.subdomain-with-its-own-DNS-zone.domain.tld* o *xxx.subdomain-with-its-own-DNS-zone.domain.tld*.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Añadir un registro SPF a la configuración del dominio](/pages/web_cloud/domains/dns_zone_spf)

[Proteja su dominio contra el "cache poisoning" con el servicio DNSSEC](/pages/web_cloud/domains/dns_dnssec)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).