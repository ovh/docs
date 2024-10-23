---
title: "Cómo eliminar una dirección IP de una lista de direcciones IP bloqueadas"
excerpt: "Cómo solicitar la retirada de una dirección IP de una lista de bloqueo si sus servicios se ven afectados por proveedores de antispam"
updated: 2024-10-21
---

## Objetivo

La *blocklist* (o lista negra) es una herramienta antispam que se utiliza en las direcciones IP (o rangos de direcciones IP) para bloquear los mensajes de correo electrónico que se consideran spam o que pueden contener programas maliciosos. Si se bloquea un dominio de correo electrónico o una dirección IP, es posible que los mensajes de correo electrónico procedentes de ese dominio o dirección IP no lleguen a su cliente (servidor entrante o antivirus), lo que afecta a la entrega y reputación del remitente. Los mensajes de correo electrónico que llegan a la bandeja de entrada se pueden enviar a la carpeta de correo basura del destinatario en lugar de a la bandeja de entrada.

Es importante tener en cuenta que las listas negras pueden incluir nombres de dominio y direcciones IP que no supongan una amenaza para los usuarios. Además, algunos servicios de filtrado de correo no deseado tienen en cuenta el registro DNS inverso al evaluar las direcciones IP, como SpamRATS.

> [!primary]
> Consulte nuestra guía sobre [cómo evitar que los mensajes de correo electrónico se marquen como spam](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization) para conocer las mejores prácticas relativas a los servidores de correo.
>

**Descubra las acciones que debe realizar para retirar sus direcciones IP de OVHcloud de una lista de bloques, si están incluidas.**

> [!warning]
> La información de esta guía puede modificarse para que se aplique a las direcciones IP recién adquiridas. OVHcloud no podrá ser considerado responsable de las acciones de terceros proveedores.
>
> Le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) o con [nuestra comunidad](/links/community) si tiene problemas o dudas sobre la administración, el uso o la implementación de servicios en un servidor.
>

## Requisitos

- Actualmente sus servicios no están sujetos a un procedimiento de denuncia de abusos.

## Procedimiento

### Proveedores compatibles

- [Spamhaus](https://check.spamhaus.org/)

    - [Spamhaus Block List (SBL)](https://www.spamhaus.org/blocklists/spamhaus-blocklist/)  
    Si [la IP aparece en la lista de bloqueo (SBL) de Spamhaus](https://check.spamhaus.org/sbl/listings/ovh.net/), cree una solicitud de asistencia desde el [centro de ayuda de OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help). Nuestro equipo de soporte remitirá su solicitud a nuestro equipo de informes de abuso, que se pondrá en contacto con el proveedor de la lista negra.
    - [Exploits Block List (XBL)](https://www.spamhaus.org/blocklists/exploits-blocklist/) o [Combined Spam Sources (CSS)](https://www.spamhaus.org/blocklists/combined-spam-sources/)  
    Si su IP aparece en la *Exploits Block List* y/o en la lista combinada de fuentes de spam, se debe a problemas de configuración. Siga los pasos que se indican en el sitio de Spamhaus para eliminar la IP de la lista (ver el ejemplo a continuación). Una vez que haya seguido los pasos, puede quitarlo de la lista.  
    /// details | Ejemplo
    
    ![spamhaus example](images/blocklist1.png){.thumbnail}  
    ![spamhaus example](images/blocklist2.png){.thumbnail}

    ///

- [SpamCop](https://www.spamcop.net/bl.shtml)

- [Barracuda](https://www.barracudacentral.org/lookups)

- [SpamRATS](https://spamrats.com/lookup.php)  
    Si utiliza su propio servidor de correo, deberá configurar el nombre de dominio en el campo PTR, que contiene la información de contacto del responsable. Sólo se eliminan de esta lista los servidores de correo configurados correctamente.  
    También deberá [configurar la resolución DNS inversa](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns).  
    > [!primary]
    > **Buenas prácticas:**
    >
    > Las direcciones IP utilizadas para el envío de mensajes de correo deben corresponder al nombre de dominio del responsable. También puede utilizar subdominios para la resolución DNS inversa, como `mail.dominio.com` o `gateway.dominio.com`.

### Proveedores no admitidos

#### s5h.net

/// details | Más información...

Para solicitar la eliminación, acceda a esta página desde la dirección IP bloqueada. Debería ser eliminado inmediatamente de la lista.

También puede hacerlo con las herramientas *telnet*, *curl* o *wget*.

Para eliminar su dirección IPv4 de la lista mediante *curl*, conéctese al servidor de correo electrónico indicado y ejecute el siguiente comando:

```bash
curl -4 http://www.usenix.org.uk/content/rblremove
```

Para realizar la misma operación con *telnet* desde un host Windows/Linux, introduzca las líneas *GET* y *Host* después del comando *telnet* como se muestra a continuación.

```bash
telnet www.usenix.org.uk 80
```

```bash
GET /content/rblremove HTTP/1.1
```

```bash
Host: www.usenix.org.uk
```

Para más información, consulte la página <http://www.usenix.org.uk/content/rbl.html>.

///

#### UCEprotect

/// details | Más información...

Recientemente, UCE Protect ha colocado más de un millar de nuevas ASN en su lista de bloques. Desafortunadamente, nuestro ASN (AS16276) se ha visto afectado. Para consultar la lista de otras ASN afectadas y el número de nuevas ASN añadidas, consulte los siguientes enlaces:

- http://www.uceprotect.net/en/l3charts.php
- http://stats.uceprotect.net/?page=su

Nuestro equipo encargado de los informes de abuso se ha puesto en contacto con UCEProtect para retirar nuestra ASN de la lista de bloqueo. En general, UCEProtect desea que los operadores de red de las ASN recién bloqueadas paguen por la eliminación rápida de la lista. Al igual que todos los principales proveedores, OVHcloud no paga por la supresión de la lista de bloques, ya que se trata de un servicio que está fuera de nuestro control. El pago de la retirada de una lista de bloques solo aumenta la lista de bloques en su conjunto, lo que perjudica a la industria.

UCEProtect pretende eliminar automáticamente las ASN al cabo de una semana, lo que esperamos que suceda, pero como escapa a nuestro control, no podemos ofrecer ninguna garantía al respecto.

Si esta situación le afecta actualmente, le recomendamos que:

1. Utilizar direcciones IPv6 para enviar correo electrónico. UCEProtect no bloquea los mensajes de correo electrónico enviados a través de IPv6. Todos nuestros servicios de OVHcloud se entregan con al menos una dirección IPv6 que puede configurar. Todos los principales proveedores de correo ya admiten IPv6.
2. Solicite a la parte receptora que se ponga en contacto con su proveedor de correo electrónico para dejar de utilizar la lista de bloques UCEProtect en este momento.

///

#### Fabel Spamsources

/// details | Más información...

Para quitar una IP de la lista de Fabel Spamsources, vaya a su [página de retirada de la lista](https://www.spamsources.fabel.dk/delist).

Haga clic en `Please login to continue`{.action}, introduzca su dirección de correo electrónico y compruebe su bandeja de entrada. Use el código de comprobación para completar la conexión.

Introduzca su dirección IP, indique el motivo de la solicitud de eliminación y haga clic en el botón `Submit Query`{.action}.

![fabel ejemplo](images/blocklist3.png){.thumbnail}

La eliminación de la lista debería tardar entre 20 y 30 minutos.

///

#### MIPSpace

/// details | Más información...

Para [retirar una IP de MIPSpace](https://www.mipspace.com/remove.php), conéctese primero a [su área de cliente de OVHcloud](/links/manager) y asegúrese de que la siguiente información esté actualizada:

- [La resolución inversa DNS](/pages/bare_metal_cloud/virtual_private_servers/configuring-reverse-dns) (campo PTR).
- Detalles de su organización (*RWhois*) en la sección `Network`{.action}: abra `IP`{.action} y haga clic en el botón `Engranaje`{.action} a la derecha. Seleccione `Gestionar mis organizaciones`{.action} en el menú desplegable.

///

## Más información

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).