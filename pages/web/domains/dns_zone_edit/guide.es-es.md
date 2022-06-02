---
title: 'Editar una zona DNS de OVHcloud'
excerpt: 'Cómo editar una zona DNS desde el área de cliente de OVHcloud'
slug: web_hosting_como_editar_mi_zona_dns
section: 'DNS (servidor y zona)'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 01/06/2022**

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

- Tener acceso a la gestión del dominio desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Utilizar la configuración de OVHcloud (es decir, sus servidores DNS) para el dominio en cuestión. 

> [!warning]
>
> - Si el dominio no utiliza los servidores DNS de OVHcloud, deberá realizar los cambios necesarios desde el panel que le ofrezca el proveedor que gestione la configuración de su dominio.
> 
> - Si el dominio está registrado en OVHcloud, compruebe que utiliza nuestra configuración. Para ello, acceda al [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y abra la pestaña `Servidores DNS`{.action} del dominio correspondiente.
>

## Procedimiento

### Acceder a la gestión de una zona DNS de OVHcloud

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} en la sección `Web Cloud`{.action}.Haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con un registro DNS asociado a su dominio en OVHcloud para cada línea. Puede filtrar el contenido por tipo de registro o por dominio.

![Zona DNS](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Los registros DNS

**Editar una zona DNS es una operación delicada.** Una modificación errónea podría, por ejemplo, deshabilitar el acceso al sitio web o la recepción de nuevos mensajes en las direcciones de correo electrónico.

Conocer los distintos tipos de registros le permitirá entender mejor los cambios que debe realizar al editar la zona DNS del dominio. Le invitamos a consultar la siguiente lista. En ella se recogen los objetivos y particularidades de cada registro.

#### Registros de punteo

**A**: Conecta un dominio a una dirección IPv4. Por ejemplo, la dirección IPv4 del servidor en el que está alojado el sitio web.

**AAAA**: Conecta un dominio a una dirección IPv6. Por ejemplo, la dirección IPv6 del servidor en el que está alojado el sitio web.

**CNAME**: Utiliza la dirección IP de otro dominio creando un enlace llamado alias. Por ejemplo, si *www.mydomain.ovh* es un alias de *mydomain.ovh*, significa que *www.mydomain.ovh* utilizará la dirección IP de *mydomain.ovh*.

> [!alert]
>
> Un registro TXT que utilice el mismo dominio o subdominio que un registro CNAME perturba el funcionamiento de este último. El registro CNAME solo funcionará parcialmente o en absoluto.
>

**Registro NS**: Define los servidores DNS asociados a su zona DNS. Por ejemplo, si los registros NS de su zona DNS muestran los servidores *dns19.ovh.net* y *ns19.ovh.net*, deberá utilizarlos en la pestaña `Servidores DNS`{.action} del área de cliente. Para más información, consulte nuestra guía [Cambiar los servidores DNS de un dominio de OVHcloud](../web_hosting_informacion_general_sobre_los_servidores_dns/).

> [!warning]
>
> Utilice el botón `Cambiar los registros NS de la zona DNS a los servidores DNS externos a OVHcloud en modo de texto`{.action}. Esta zona DNS funciona **únicamente** con servidores DNS de OVHcloud.
>

#### Registros de correo

**MX**: Conecta un dominio a un servidor de correo. Por ejemplo, la dirección *10 mx1.mail.ovh.net* corresponde a uno de los servidores de correo de OVHcloud cuando usted dispone de una solución de correo de OVHcloud. Es probable que su proveedor de correo disponga de varios servidores de correo: es necesario crear varios registros MX. Consulte nuestra guía [Añadir un registro MX a la configuración del dominio](../anadir-registro-mx-configuracion-dominio/).

**SPF**: Permite evitar posibles usurpaciones de identidad en las direcciones de correo electrónico que utilizan su dominio (spoofing). Por ejemplo, el registro *v=spf1 include:mx.ovh.com ~all* indica que el servidor de recepción solo puede considerar legítimos los servidores de envío asociados a su solución de correo OVHloud. Es posible introducir este registro en forma de registro TXT o a través de nuestro sistema de configuración automática. Para más información, consulte nuestra guía [Añadir un registro SPF a la configuración del dominio](../web_hosting_el_registro_spf/).

**DKIM**: Permite verificar la autenticidad del nombre de dominio del remitente y garantizar la integridad del mensaje de correo electrónico enviado. El registro DKIM se presenta como una clave de varios caracteres. La clave DKIM es proporcionada por su proveedor de correo, que puede introducir en forma de registro TXT.

**DMARC**: Contribuye a la autenticación del correo en combinación con los métodos SPF y/o DKIM. Este valor le será dado por su proveedor de correo electrónico. Estará al menos asociado a un registro SPF o DKIM.

#### Registros extendidos

**TXT** : Permite añadir el valor que desee en formato de texto a la zona DNS del dominio. Este registro suele utilizarse en procesos de verificación.

> [!warning]
> 
> El registro TXT está limitado a 255 caracteres. No obstante, en algunos casos puede dividir su valor en varios registros. Cuando el proveedor le pida que introduzca un valor superior al límite de 255 caracteres, deberá ponerse en contacto con su proveedor.
> 

**SRV**: Indica la dirección del servidor que gestiona un servicio como, Por ejemplo, puede indicar la dirección de un servidor SIP o la de un servidor que permite la configuración automática de un cliente de correo.

**CAA**: Permite indicar las autoridades de certificación autorizadas a emitir certificados SSL para un dominio.

**NAPTR**: Utilizado en telecomunicaciones para dirigir una petición emitida desde un terminal móvil hacia un servidor. 

**LOC**: Utilizado para indicar la posición geográfica.

**SSHFP**: Utilizado para indicar la huella de una llave pública SSH.

**TLSA** : Utilizado para indicar la huella de un certificado SSL/TLS.

### Editar la zona DNS de OVHcloud de su dominio

Puede editar la zona DNS de OVHcloud de su dominio añadiendo, modificando o eliminando un registro DNS. de dos maneras distintas:

#### Editar manualmente el área en modo de texto 

Solo para usuarios expertos. 

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
>Ejemplo: quiere crear un registro CNAME de *prueba.mydomain.ovh* hacia *mydomain.ovh*.
>
>Deberá tener como objetivo *mydomain.ovh.* y no *mydomain.ovh* sin el **.** al final.

#### Modificar un registro DNS existente 

Para modificar un registro DNS, abra la pestaña `Zona DNS`{.action} del área de cliente y haga clic en el icono con forma de gráfica`...`{.action} situado a la derecha del registro que quiera modificar. Haga clic en `Editar el registro`{.action} y siga los pasos que se indican.

![Zona DNS](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### Eliminar un registro DNS

Para eliminar un registro DNS, abra la pestaña `Zona DNS`{.action} del área de cliente y haga clic en el icono con forma de gráfica`...`{.action} situado a la derecha del registro que quiera eliminar. A continuación, haga clic en `Eliminar la entrada`{.action} y siga los pasos que se indican.

Puede borrar varias entradas de una vez marcándolas desde la parte izquierda de la tabla y haciendo clic en el botón `Eliminar`{.action}.

![Zona DNS](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

#### Restaurar la zona DNS

Restaurar la zona DNS le permite:

- volver a una configuración mínima con los registros de OVHcloud por defecto.
- volver a una zona DNS vacía (a excepción de los campos NS) para establecer una configuración manual posterior.

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

## Más información

[Cambiar los servidores DNS de un dominio en OVHcloud](../web_hosting_informacion_general_sobre_los_servidores_dns/){.external}

[Añadir un registro SPF a la configuración del dominio](../web_hosting_el_registro_spf/){.external}

[Proteja su dominio contra el «cache poisoning» con el servicio DNSSEC](../proteja_su_dominio_con_dnssec/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
