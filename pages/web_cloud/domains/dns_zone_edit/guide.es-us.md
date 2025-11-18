---
title: 'Editar una zona DNS de OVHcloud'
excerpt: 'Descubra cómo editar una zona DNS desde el área de cliente de OVHcloud'
updated: 2025-04-28
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

> [!success]
> ¡Participe en nuestra encuesta y ayúdenos a mejorar esta guía!<br>
> No dude en compartir su opinión y sus ideas con nosotros.<br>
> [Ir a la encuesta.](https://s.elq.fr/ovhext/8NwNKiG)

## Objetivo

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Las siglas **DNS**, que significan **D**omain **N**ame **S**ystem, son un conjunto de elementos (servidores DNS, zonas DNS, etc.) que permiten asociar un dominio a una dirección IP.

Para más información, consulte nuestras guías "[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" y "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)"

**Descubra cómo editar la zona DNS de OVHcloud desde el área de cliente.**

## Requisitos

- Tener acceso a la gestión del dominio desde el [área de cliente de OVHcloud](/links/manager).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Utilizar la configuración de OVHcloud (es decir, sus servidores DNS) para el dominio en cuestión. 

> [!warning]
>
> - Si el dominio no utiliza los servidores DNS de OVHcloud, deberá realizar los cambios necesarios desde el panel que le ofrezca el proveedor que gestione la configuración de su dominio.
> 
> - Si el dominio está registrado con OVHcloud, compruebe que utiliza nuestra configuración. Para ello, acceda a su [área de cliente de OVHcloud](/links/manager) y abra la pestaña `Servidores DNS`{.action} del dominio correspondiente. Si lo necesita, consulte nuestra guía "[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
> 
> En ambos casos, tenga cuidado al cambiar los servidores DNS. La antigua configuración que puede aplicarse a su dominio ya no estará activa si no ha reconfigurado y personalizado previamente la nueva zona DNS de OVHcloud.<br>
> Solo puede tener una única zona DNS activa a la vez por nombre de dominio.
>

## Procedimiento

### Acceder a la gestión de una zona DNS de OVHcloud

> [!primary]
>
> A diferencia del nombre de dominio, para una zona DNS no existe el concepto de propietario, sino de gestión de contactos para una zona DNS de OVHcloud. Si desea cambiar la gestión de su zona DNS a otra cuenta de OVHcloud, siga nuestra guía [Gestionar contactos de servicio](/pages/account_and_service_management/account_information/managing_contacts).

Para acceder a la gestión de una zona DNS de OVHcloud, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se mostrará una tabla con un registro DNS asociado a su dominio en OVHcloud para cada línea. Puede filtrar su contenido por tipo de registro o por dominio.
>>
>> ![Zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-ca.png){.thumbnail}

### Editar la zona DNS de OVHcloud de un dominio

**Editar una zona DNS es una operación delicada**: una modificación errónea podría, por ejemplo, deshabilitar el acceso al sitio web o la recepción de nuevos mensajes en las direcciones de correo electrónico.

Conocer los distintos registros le permitirá entender mejor los cambios que va a realizar si edita la zona DNS de su dominio.

> [!success]
>
> Consulte nuestra guía sobre los [registros DNS](/pages/web_cloud/domains/dns_zone_records) para entender mejor las operaciones DNS.
>
> Consulte también nuestra guía relativa a los [subdominios](/pages/web_cloud/domains/domain_create_subdomains) para más información sobre este tema.
>

Puede editar la zona DNS de OVHcloud de su dominio añadiendo, modificando o eliminando un registro DNS.<br>
Para ello, puede editar manualmente la zona en modo de texto o utilizar nuestros asistentes de configuración.

#### Editar manualmente el área en modo de texto <a name="txtmod"></a>

> [!warning]
> 
> Solo para usuarios expertos. También debe prestar especial atención a la sintaxis al realizar los cambios.
> 

Para modificar una zona DNS de OVHcloud en modo de texto, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 3**
>>
>> A la derecha o debajo de la tabla, haga clic en `Editar en modo de texto`{.action} y siga los pasos que se indican.
>>
>> > [!warning]
>> >
>> > No modifique los registros NS de su zona DNS utilizando el botón `Editar en modo de texto`{.action} en servidores DNS externos a OVHcloud. Esta zona DNS funciona **únicamente** con los servidores DNS de OVHcloud.

#### Utilizar nuestros asistentes de configuración

Esta guía solo hace referencia a la configuración a través de nuestros asistentes.

> [!primary]
>
> Compruebe que dispone de toda la información que desea modificar en la zona DNS de OVHcloud. Si el cambio se realiza a petición de un proveedor de servicios, este último deberá proporcionarle la lista de elementos que debe modificar.
>

**Haga clic en los cuatro títulos siguientes para ver las explicaciones.**

/// details | Añadir un nuevo registro DNS

Para agregar un nuevo registro DNS, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 3**
>>
>> A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action} y siga los pasos que se indican.
>>
>> Compruebe que este registro no existe y que no apunta a un destino diferente. Para ello, filtre el contenido de la tabla por tipo de registro o por dominio. Si el registro ya existe, modifíquelo mediante el procedimiento que se indica a continuación.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-ca.png){.thumbnail}
>>
>> > Cuando el destino de la grabación sea una dirección URL, no olvide puntuarla. De lo contrario, su dominio se añadirá automáticamente al final de su objetivo.
>> >
>> > **Ejemplo**: quiere crear un registro CNAME de `test.mydomain.ovh` hacia `mydomain.ovh`.
>> >
>> > Debe tener como objetivo `mydomain.ovh.` y no `mydomain.ovh` sin el **.** al final.

///


/// details | Modificar un registro DNS existente

Para editar un registro DNS, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el icono con forma de `...`{.action} a la derecha de la entrada correspondiente.
>>
>> A continuación, haga clic en `Editar el registro`{.action} y siga los pasos que se indican.
>>
>> ![Zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-record-ca.png){.thumbnail}

///


/// details | Eliminar un registro DNS

Para eliminar un registro DNS, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el icono con forma de `...`{.action} a la derecha de la entrada correspondiente.
>>
>> A continuación, haga clic en `Eliminar el registro`{.action} y siga los pasos que se indican.
>>
>> Puede eliminar varias entradas de una vez marcándolas en la parte izquierda de la tabla y haciendo clic en el botón `Eliminar`{.action}.
>>
>> ![Zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-record-ca.png){.thumbnail}

///


/// details | Restaurar la zona DNS

Restaurar la zona DNS permite retornar a una configuración mínima, con las entradas de OVHcloud por defecto o las de sus servicios. También puede apuntar su dominio hacia servicios de alojamiento web y de correo personalizados .

> [!alert]
>
> Antes de reiniciar la zona DNS, asegúrese de que el dominio no está asociado a servicios que esté utilizando, como un sitio web o direcciones de correo electrónico.
>

Para restaurar la zona DNS, haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 3**
>>
>> A la derecha o debajo de la tabla, haga clic en `Restaurar mi zona DNS`{.action} y siga los dos pasos que se indican.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone-ca.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Responda a la pregunta `¿Quiere activar los registros mínimos al restaurar la zona DNS?`. Establecer los registros mínimos en una zona DNS evita que una consulta al nombre de dominio provoque un error.
>>
>> - `Sí, quiero restaurar mi zona DNS con los registros mínimos`
>> - `No, pero quiero restaurar mi zona DNS`
>>
> **Etapa 5**
>>
>> Cualquiera que sea su elección en la etapa anterior, es necesario definir una respuesta cuando se pregunta a su nombre de dominio para evitar una respuesta DNS en error.
>>
>> Seleccione ambas opciones haciendo clic en las fichas siguientes.
>>
>> **Dirección IP de su alojamiento**
>>
>> - `Redirección`: su dominio apuntará hacia el servidor de redirección de OVHcloud. Esto permite mostrar una página de inicio de OVHcloud y así evitar un error DNS.<br>
>> - `Alojamiento web de OVHcloud`: Su dominio apuntará a la dirección IP del alojamiento web asociado al dominio.<br>
>> - `Personalizado`: defina el valor IPv4 ([registro A](/pages/web_cloud/domains/dns_zone_records#pointer-records)) del alojamiento web que quiera apuntar.<br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-01.png){.thumbnail}
>>
>> **Dirección de su servidor mail**
>>
>> - `Redirección`: su dominio apuntará a los servidores de redirecciones de correo. Esta elección. Es especialmente útil si no tiene ninguna solución de correo, pero desea reenviar los mensajes hacia una o varias direcciones de correo fuera de su nombre de dominio.<br>
>> - `Servidor de correo de OVHcloud`: Por definir al contratar un servicio de correo en alojamiento compartido.<br>
>> - `Personalizado`: defina la URL y la prioridad del servidor de correo electrónico ([registro MX](/pages/web_cloud/domains/dns_zone_records#mail-records)) que quiera apuntar.<br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-02.png){.thumbnail}

///


### El tiempo de propagación

Una vez que haya editado la zona DNS del dominio, los cambios tardarán un máximo de 24 horas en propagarse y ser efectivos.

Si quiere reducir este plazo en las próximas ediciones de la zona DNS de OVHcloud, puede hacerlo, hasta cierto punto, ajustando el TTL (*Time To Live*) aplicable a todos los registros de la zona DNS. Para ello, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 3**
>>
>> A la derecha o debajo de la tabla, haga clic en el botón `TTL por defecto`{.action} y siga los pasos que se indican.
>>
>> También puede modificar el TTL de un registro DNS. Sin embargo, esta operación solo puede realizarse en un registro, modificándolo o añadiéndolo.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Añadir un registro SPF a la configuración del dominio](/pages/web_cloud/domains/dns_zone_spf)

[Proteja su dominio contra el «cache poisoning» con el servicio DNSSEC](/pages/web_cloud/domains/dns_dnssec)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).