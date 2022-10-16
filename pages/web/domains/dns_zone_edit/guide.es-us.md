---
title: 'Editar una zona DNS de OVHcloud'
excerpt: 'Cómo editar una zona DNS desde el área de cliente de OVHcloud'
slug: web_hosting_como_editar_mi_zona_dns
section: 'DNS (servidor y zona)'
order: 3
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 07/07/2022**

## Objetivo

### Entender el concepto de DNS <a name="understanddns"></a>

La sigla DNS, que significa **D**ominio **N**ame **S**ystem, es un conjunto de elementos que permiten hacer coincidir un dominio con una dirección IP.

Por ejemplo, cuando quiere acceder al sitio *mydomain.ovh*, la solicitud se realiza inicialmente por este conjunto DNS, que la aconseja a la dirección IP del servidor que aloja el sitio *mydomain.ovh*.

Habida cuenta de las operaciones que deberá realizar en el área de cliente, es importante diferenciar los **servidores DNS** y la **zona DNS**. ya que la **zona DNS** está configurada en el **servidor DNS**. 

Para más información sobre los **servidores DNS** y sus modificaciones, consulte nuestra guía [Cambiar los servidores DNS de un dominio de OVHcloud](../web_hosting_informacion_general_sobre_los_servidores_dns/) .

![DNS](images/dnsserver.png){.thumbnail}

Si seguimos el ejemplo anterior, cuando escriba *mydomain.ovh*, los **servidores DNS** asociados a este dominio serán interrogados. Estos registros contienen la **zona DNS** del dominio *mydomain.ovh* en la que se indica la dirección IP del alojamiento de *mydomain.ovh*. Así, su navegador puede ver el sitio web *mydomain.ovh* contenido en el alojamiento. Se denomina resolución DNS.

![DNS](images/dnssolve.gif){.thumbnail}

### La zona DNS 

La zona DNS de un dominio es un archivo de configuración compuesto por **registros**. Estos registros sirven de enlace entre el dominio y los servidores que alojan los servicios de internet, como sitios web (a través del registro A) o direcciones de correo (registro MX).

![DNS](images/dnszone.png){.thumbnail}

**Esta guía explica cómo editar la zona DNS de OVHcloud desde el área de cliente.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Tener acceso a la gestión del dominio desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
- Utilizar la configuración de OVHcloud (es decir, sus servidores DNS) para el dominio en cuestión. 

> [!warning]
>
> - Si el dominio no utiliza los servidores DNS de OVHcloud, deberá realizar los cambios necesarios desde el panel que le ofrezca el proveedor que gestione la configuración de su dominio.
> 
> - Si el dominio está registrado en OVHcloud, compruebe que utiliza nuestra configuración. Para ello, acceda al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, en la pestaña `Servidores DNS`{.action} del dominio correspondiente.
> 
> En ambos casos, tenga cuidado al cambiar los servidores DNS. La antigua configuración que puede aplicarse a su dominio ya no estará activa si no ha reconfigurado y personalizado previamente la nueva zona DNS de OVHcloud.<br>
> Solo puede tener una única zona DNS activa a la vez por nombre de dominio.
>

## Procedimiento

### Acceder a la gestión de una zona DNS de OVHcloud

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} en la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con un registro DNS asociado a su dominio en OVHcloud para cada línea. Puede filtrar el contenido por tipo de registro o por dominio.

![Zona DNS](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Los registros DNS

**Editar una zona DNS es una operación delicada.** Una modificación errónea podría, por ejemplo, deshabilitar el acceso al sitio web o la recepción de nuevos mensajes en las direcciones de correo electrónico.

Conocer los distintos tipos de registros le permitirá entender mejor los cambios que debe realizar al editar la zona DNS del dominio. Le invitamos a consultar la siguiente lista. En ella se recogen los objetivos y particularidades de cada registro.

#### Registros de punteo

- **A** (**A**ddress): Conecta un dominio a una dirección IPv4 `X.X.X` (donde las `X` son cifras entre `0` y `255`). Por ejemplo, la dirección IPv4 del servidor en el que está alojado el sitio web.

- **AAAA** (4 letras **A**, ya que este registro está codificado en cuatro veces más bits que el puntero **A** histórico): Conecta un dominio a una dirección IPv6. Por ejemplo, la dirección IPv6 del servidor en el que está alojado el sitio web.

> [!primary]
> 
> Las direcciones IPv6 se están desplegando progresivamente para paliar la falta de direcciones IPv4 debido a la continua expansión de los usos digitales. La codificación en 128 bits de las direcciones IPv6 permite ofrecer un mayor número de direcciones IP.
>
> No obstante, si su servidor ya dispone de una IPv4, le recomendamos que dé prioridad al uso de la IPv6.<br>
> En efecto, las IPv6 todavía no se han interpretado correctamente en toda la red de internet, lo que puede provocar perturbaciones de visualización o de acceso.
>

<a name="cname"></a>

- **CNAME** (**C**anonical **NAME**): Utiliza la dirección IP de otro dominio creando un enlace llamado alias. Por ejemplo, si *www.mydomain.ovh* es un alias de *mydomain.ovh*, significa que *www.mydomain.ovh* utilizará la dirección IP de *mydomain.ovh*.

> [!alert]
>
> Un registro TXT que utilice el mismo dominio o subdominio que un registro CNAME perturba el funcionamiento de este último. El registro CNAME solo funcionará parcialmente o en absoluto.
> 

> [!warning]
>
> Por convenio, los registros CNAME no pueden ser utilizados directamente por un dominio en su propia zona DNS. En efecto, solo el dominio debe apuntar obligatoriamente y directamente a una dirección IP con un registro de tipo A (o AAAA si se trata de una IPv6).
> 
> Para seguir el ejemplo anterior, no podrá crear un registro CNAME para el dominio *mydomain.ovh* en la zona DNS que haya creado para este dominio.
> No obstante, podrá crear registros CNAME con todos los subdominios (ejemplos: *subdomain.mydomain.ovh* o *www.mydomain.ovh*) del dominio *mydomain.ovh* en la zona DNS creada para *mydomain.ovh*.
>
> Si quiere profundizar más técnicamente en este asunto, puede encontrar, al final de esta página, [un caso especial de uso relativo a los CNAME y las zonas DNS creadas para subdominios](#techusecase).
>

- **DNAME** (**D**elegation **NAME**): Permite generar un "alias" para todos los subdominios de un dominio. Este registro evita crear multitud de registros CNAME. De hecho, un registro CNAME redirige independientemente de un solo subdominio a un único destino.

Ejemplo: creando un registro DNAME de *mydomain.ovh* a *ovh.com*, todos los subdominios de *mydomain.ovh* (como *dname.mydomain.ovh* y *xxx.mydomain.ovh*) se redirigirán a los subdominios de *ovh.com* (como: *dname.ovh.com* y *xxx.ovh.com*).

Dicho de otro modo, el registro DNAME indica que *dname.mydomain.ovh* y *xxx.mydomain.ovh* deben mostrar los resultados de *dname.ovh.com* y *xxx.ovh.com*, respectivamente.

> [!warning]
> 
> En cambio, *mydomain.ovh* como dominio no mostrará el destino del dominio *ovh.com*, ya que el registro DNAME solo es válido para los subdominios de los dominios definidos en el registro DNAME.
>
> Además, si el subdominio objetivo *xxx.ovh.com* no apunta a ninguna parte, el registro DNAME tampoco mostrará nada para *xxx.mydomain.ovh*.
> 

> [!success]
> 
> El registro DNAME suele utilizarse para cambiar el nombre de la empresa. También puede configurarse cuando un usuario dispone de varias extensiones de dominios (.es, .net, .com, .info...) para redirigirlos entre sí fácilmente.
>

- **NS** (**N**ame **S**erver): Define los servidores DNS asociados a su zona DNS. Por ejemplo, si los registros NS de su zona DNS muestran los servidores *dns19.ovh.net* y *ns19.ovh.net*, deberá utilizarlos en la pestaña `Servidores DNS`{.action} del área de cliente de OVHcloud. Para más información, consulte nuestra guía [Cambiar los servidores DNS de un dominio de OVHcloud](../web_hosting_informacion_general_sobre_los_servidores_dns/).

> [!warning]
>
> Utilice el botón `Cambiar los registros NS de la zona DNS a los servidores DNS externos a OVHcloud en modo de texto`{.action}. Esta zona DNS funciona **únicamente** con servidores DNS de OVHcloud.
>

#### Registros de correo

- **MX** (**M**ail e**X**changer): Conecta un dominio a un servidor de correo. Por ejemplo, la dirección *10 mx1.mail.ovh.ca* corresponde a uno de los servidores de correo de OVHcloud cuando usted dispone de una solución de correo de OVHcloud. Es probable que su proveedor de correo disponga de varios servidores de correo: es necesario crear varios registros MX. Consulte nuestra guía [Añadir un registro MX a la configuración del dominio](../anadir-registro-mx-configuracion-dominio/).

> [!warning]
>
> En general, le recomendamos que utilice solo uno o más servidores de un mismo proveedor de correo en su zona DNS.
> De hecho, si ya tiene servicios de correo con otro proveedor de correo y añade al mismo tiempo (sin sustituir) los servidores de correo de su nuevo proveedor de correo, puede recibir mensajes de correo al azar en uno de sus dos proveedores.
> 

- **SPF** (**S**ender **P**olicy **F**ramework): Permite evitar posibles usurpaciones de identidad en las direcciones de correo electrónico que utilizan su dominio (*spoofing*). Por ejemplo, el registro `v=spf1 include:mx.ovh.ca ~all` indica que solo los servidores de envío asociados a su solución de correo de OVHcloud pueden considerarse legítimos por el servidor de recepción. Puede introducir este registro en forma de registro TXT o a través de nuestro sistema de configuración automática. Para más información, consulte nuestra guía [Añadir un registro SPF a la configuración del dominio](../web_hosting_el_registro_spf/).

- **DKIM** (**D**omain**K**eys **I**dentified **M**ail): Permite verificar la autenticidad del nombre de dominio del remitente y garantizar la integridad del mensaje de correo electrónico enviado. El registro DKIM se presenta como una clave de varios caracteres. La clave DKIM la proporciona su proveedor de correo electrónico (si esta funcionalidad la ofrece este último). Puede introducirla en forma de registro TXT.

- **DMARC** (**D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance): Contribuye a la autenticación del correo en combinación con los métodos SPF y/o DKIM. Este valor le será dado por su proveedor de correo electrónico (si esta funcionalidad la ofrece este último), estará al menos asociado a un registro SPF o DKIM.

#### Registros extendidos

- **TXT** (**T**e**XT**): Permite añadir el valor que desee en formato de texto a la zona DNS del dominio. Este registro suele utilizarse en procesos de verificación, validación o seguridad.

> [!warning]
> 
> El registro TXT está limitado a 255 caracteres. No obstante, en algunos casos puede dividir su valor en varios registros. Cuando el proveedor le pida que introduzca un valor superior al límite de 255 caracteres, deberá ponerse en contacto con su proveedor.
> 
> Este límite no existe si utiliza la funcionalidad "Cambiar al modo de texto" que se [describe a continuación](#txtmod) en esta guía (para usuarios avanzados).
> 

- **SRV** (**S**e**RV**ice resource): Indica la dirección del servidor que gestiona un servicio como, Por ejemplo, puede indicar la dirección de un servidor SIP o la de un servidor que permite la configuración automática de un cliente de correo.

- **CAA** (**C**ertification **A**uthority **A**uthorisation):: Permite indicar las autoridades de certificación autorizadas a emitir certificados SSL para un dominio.

> [!warning]
> 
> Si utiliza un certificado SSL Let's Encrypt con su dominio en un alojamiento compartido de OVHcloud y utiliza un registro CAA, este último impedirá la regeneración del certificado SSL Let's Encrypt.
> 


- **NAPTR** (**N**ame **A**uthority **P**oint**T**e**R**): Utilizado en telecomunicaciones para dirigir una petición emitida desde un terminal móvil hacia un servidor. Puede asociar un registro SRV para generar dinámicamente los URIs (Uniform Resource Identifier) de destino.

- **LOC** (**LOC**ation): Utilizado para indicar la posición geográfica (especialmente la latitud, la longitud y la altitud).

- **SSHFP** (**S**ecure **SH**ell **F**inger**P**rint): Utilizado para indicar la huella de una llave pública SSH.

- **TLSA** (**T**ransport **L**ayer **S**ecurity **A**uthentication): Utilizado para indicar la huella de un certificado SSL/TLS.

### Editar la zona DNS de OVHcloud de un dominio

Puede editar la zona DNS de OVHcloud de su dominio añadiendo, modificando o eliminando un registro DNS. de dos maneras distintas:

#### Editar manualmente el área en modo de texto <a name="txtmod"></a>

> [!warning]
> 
> Solo para usuarios expertos. También debe prestar especial atención a la sintaxis al realizar los cambios.
> 

En la pestaña `Zona DNS`{.action}, haga clic en `Cambiar al modo de texto`{.action} y siga los pasos que se indican.

#### Utilizar nuestros asistentes de configuración

Esta guía solo hace referencia a la configuración a través de nuestros asistentes.

> [!primary]
>
> Compruebe que dispone de toda la información que desea modificar en la zona DNS de OVHcloud. Si el cambio se realiza a petición de un proveedor de servicios, este último deberá proporcionarle la lista de elementos que debe modificar.
>

#### Añadir un nuevo registro DNS

Para añadir un nuevo registro DNS, abra la pestaña `Zona DNS`{.action} del dominio y haga clic en el botón `Añadir un registro`{.action} a la derecha de la tabla. Seleccione el tipo de registro DNS y siga los pasos que se indican.

Compruebe que el registro no exista ya y que no apunte a un destino diferente. Para ello, puede filtrar el contenido de la tabla por tipo de registro o por dominio. Si el registro ya existe, modifíquelo utilizando las operaciones que se describen a continuación.

![Zona DNS](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

> Cuando el destino del registro sea una URL, no olvide ponerla en blanco. Si no lo hace, el dominio se añadirá automáticamente al final del destino.
>
> Ejemplo: quiere crear un registro CNAME de *prueba.mydomain.ovh* hacia *mydomain.ovh*.
>
> Deberá tener como objetivo *mydomain.ovh.* y no *mydomain.ovh* sin el "." al final.

#### Modificar un registro DNS existente 

Para modificar un registro DNS, abra la pestaña `Zona DNS`{.action} del área de cliente y haga clic en el icono con forma de gráfica...` `{.action} situado a la derecha del registro que quiera modificar. Haga clic en `Editar el registro`{.action} y siga los pasos que se indican.

![Zona DNS](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### Eliminar un registro DNS

Para eliminar un registro DNS, abra la pestaña `Zona DNS`{.action} del área de cliente y haga clic en el icono con forma de gráfica...` `{.action} situado a la derecha del registro que quiera eliminar. A continuación, haga clic en `Eliminar la entrada`{.action} y siga los pasos que se indican.

Puede borrar varias entradas de una vez marcándolas desde la parte izquierda de la tabla y haciendo clic en el botón `Eliminar`{.action}.

![Zona DNS](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

#### Restaurar la zona DNS

Restaurar la zona DNS le permite:

- volver a una configuración mínima con las entradas de OVHcloud por defecto.
- volver a una zona DNS vacía (excepto los campos NS) para establecer una configuración manual posterior.

En la pestaña `Zona DNS`{.action}, haga clic en `Restaurar mi zona DNS`{.action} y siga los pasos que se indican.

![Zona DNS](images/edit-dns-zone-ovh-reset.png){.thumbnail}

Puede elegir entre:

- `Sí, quiero restaurar la zona DNS con los registros mínimos`. Esta opción le permite dirigir su dominio y su servicio de correo hacia:
    - cualquiera de sus servicios Web Cloud disponibles en el área de cliente de OVHcloud.
    - el servicio de redirección de OVHcloud, disponible en la pestaña `Redirección`{.action} del dominio en las secciones `Dominios`{.action} y `Correo electrónico`{.action}.
    - la función `Personalizada`. Introduzca el registro `A` y/o `MX` que desee.
- `No, pero quiero restaurar la zona DNS`. Su zona DNS estará vacía, a excepción de los registros NS que se asociarán automáticamente a los servidores DNS de OVHcloud de su zona DNS.

> [!primary]
>
> Antes de restaurar la zona DNS, asegúrese de que el dominio no está asociado a servicios en uso, como un sitio web o direcciones de correo.
>

### El tiempo de propagación

Una vez que haya editado la zona DNS del dominio, los cambios tardarán un máximo de 24 horas en propagarse y ser efectivos.

Si quiere reducir este plazo en las próximas ediciones de la zona DNS de OVHcloud, puede modificarlo hasta cierto punto adaptando el TTL (*Time To Live*) que se aplicará a todos los registros de la zona DNS.
Para ello, abra la pestaña `Zona DNS`{.action} del área de cliente, haga clic en el botón `TTL por defecto`{.action} y siga los pasos que se indican. 

También puede modificar el TTL de un registro DNS. Sin embargo, esta operación solo puede realizarse en un registro, modificándolo o añadiéndolo.

### Caso particular de uso: el uso de los registros CNAME <a name="techusecase"></a>

Algunos usuarios crean zonas DNS directamente para el subdominio de un dominio (por ejemplo, *subdominio-con-su-zona-DNS.mydomain.ovh*). La regla [anteriormente](#cname) explicada en esta guía también se aplica en este caso. 

La zona DNS está creada para el subdominio (en nuestro ejemplo, *subdominio con su propia zona DNS.mydomain.ovh*), por lo que este último está considerado como un dominio de pleno derecho en su zona DNS.

Así pues, en este caso concreto no podrá crear un registro CNAME para un *subdominio con su propia zona DNS.mydomain.ovh* en la zona DNS que haya creado para dicho subdominio. No obstante, puede crear registros CNAME como *subdominio.subdominio-con-su-zona-DNS.mydomain.ovh* o *xxx.subdominio-con-su-propia-zona-DNS.mydomain.ovh*.

## Más información

[Cambiar los servidores DNS de un dominio en OVHcloud](../web_hosting_informacion_general_sobre_los_servidores_dns/){.external}

[Añadir un registro SPF a la configuración del dominio](../web_hosting_el_registro_spf/){.external}

[Proteja su dominio contra el «cache poisoning» con el servicio DNSSEC](../proteja_su_dominio_con_dnssec/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
