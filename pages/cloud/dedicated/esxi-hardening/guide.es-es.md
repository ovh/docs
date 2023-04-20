---
title: 'Mantener y proteger su servidor dedicado ESXi desde el primer inicio'
excerpt: 'Cómo proteger eficazmente su servidor dedicado ESXi'
updated: 2023-03-22
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22/03/2023**

## Objetivo

Esta guía explica cómo mejorar la seguridad de su sistema ESXi.

En particular, esta guía explica cómo:

- Limitar el acceso a su ESXi a una dirección IP o rango de red específico;
- Desactivar servicios que aumenten la superficie de ataque del servidor.

Para ello, no solo nos basaremos en las funciones a bordo que ofrece VMware, sino también en las que ofrece OVHcloud.

> [!warning]
> 
> Recientemente, los sistemas ESXi han sido víctimas de un fallo que grupos malintencionados han explotado muy rápidamente a través de las redes públicas.
>
> Más información sobre el ataque en [una FAQ adicional (EN)](/pages/cloud/dedicated/faq-esxi).
>

### Recordatorio de las buenas prácticas de seguridad:

- Actualice regularmente sus sistemas ESXi.
- Restrice el acceso solo a las direcciones IP de confianza.
- Desactive los puertos y servicios no utilizados.
- Asegúrese de que los accesos a sus servidores o sus dispositivos de red sean limitados, controlados y protegidos con contraseñas sólidas.
- Guarde sus datos críticos en discos externos y servidores de backup protegidos y aislados de internet.

**Opcional**:

- Ponga en marcha las soluciones de registro necesarias para controlar los eventos acaecidos en sus servidores críticos y sus dispositivos de red.
- Cree packs de seguridad para la detección de acciones maliciosas, intrusiones (IPS/NIDS) y el control del ancho de banda del tráfico de red.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Tener un servidor dedicado con la solución ESXi desplegada.
- Tener contratado un servicio compatible con nuestra funcionalidad de [Network Firewall](/pages/cloud/dedicated/firewall_network) si quiere utilizarlo para filtrar.

## Procedimiento

### Protección antiintrusión nativa

Recordatorio de su definición y su principio de funcionamiento:

> [!primary]
> 
> El sistema ESXi incluye un mecanismo de seguridad asociado a la cuenta de administrador.
> En efecto, en caso de varios intentos de acceso erróneos, la cuenta de administrador se bloqueará temporalmente.
> Este mecanismo permite proteger su sistema y así evitar los intentos de conexiones malintencionadas.

> [!warning]
> 
> Si se activa este sistema y desea conectarse a su ESXi inmediatamente, deberá desbloquear manualmente la cuenta de administrador.
>
> Para ello, deberá [reiniciar](/pages/cloud/dedicated/getting-started-with-dedicated-server#reinicio-del-servidor-dedicado_1) el servidor ESXi desde el área de cliente de OVHcloud.
> 

Puede consultar el historial de los logs de acceso en los siguientes archivos desde un intérprete de órdenes SSH:

- `/var/run/log/vobd.log` contiene los logs que pueden utilizarse para supervisar y resolver problemas:

```
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [GenericCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535867us: [esx.audit.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
```

- `/var/run/log/hostd.log` contiene los logs del host ESXi (tareas, acceso a la interfaz web, etc.):

```
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_do_authenticate: error [login:root][error code:2]
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_sm_authenticate: failed [error code:2]
2023-02-21T08:44:19.712Z warning hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] Rejected password for user root from xxx.xxx.xxx.xxx
2023-02-21T08:44:19.712Z info hostd[2101004] [Originator@6876 sub=Vimsvc.ha-eventmgr opID=esxui-d48c-26a4] Event 175 : Cannot login root@xxx.xxx.xxx.xxx
```

Toda esta información también está disponible en el panel de administración web. Haga clic en el menú `Host`{.action} y acceda a la sección `Monitor`{.action} y haga clic en `Logs`{.action}.

![interfaz](images/gui_logs_.png){.thumbnail}

### La solución Network Firewall

> [!primary]
>
> Le recordamos que el Network Firewall no se aplica en la red de OVHcloud. Por lo tanto, las reglas configuradas no afectan a las conexiones procedentes de esta red interna.
>

Le ofrecemos activar y utilizar nuestra solución de filtrado [Network Firewall](/pages/cloud/dedicated/firewall_network).
Esta solución le permitirá gestionar fácilmente los accesos legítimos, además de los que haya configurado a través de su sistema ESXi.

También evitará bloquear inesperadamente su cuenta de administrador en caso de ataque.

Se recomienda filtrar los accesos legítimos de esta manera:

- La regla 1 (Priority 0) autoriza a las redes externas de confianza a acceder al sistema ESXi.
- La regla 2 (Priority 1) bloquea todo lo demás.

![Network_Firewall](images/firewall_network_.png){.thumbnail}

### Filtrado en ESXi

> [!primary]
>
> También puede filtrar los accesos al sistema ESXi a través del firewall integrado.
> En función de su uso, también podrá desactivar los servicios innecesarios.
>

> [!warning]
> 
> Es altamente recomendable desactivar los servicios **SSH** y **SLP**.
> Si, a pesar de todo, sigue utilizando el servicio SSH, limite al máximo su uso y sus accesos.
> Esto también se aplica a los accesos al **intérprete**.
> Preste especial atención a lo estrictamente necesario para cada una de sus necesidades.

#### Manipulación a través de la interfaz gráfica

**Servicios**

Haga clic en el menú `Host`{.action} y acceda a la sección `Manage`{.action} y, seguidamente, haga clic en `Services`{.action}.

Encuentre en la lista el servicio `TSM-SSH` y haga clic derecho en la línea asociada.

Para el servicio, haga clic en `Stop`{.action}.

![services_ssh](images/stop_service.png){.thumbnail}

Seleccione la `Policy` y edítela como en el ejemplo que se muestra.

Seleccione la opción `Start and stop manually`{.action} para evitar que el servicio esté activo al iniciar el servidor.

![services_ssh](images/ssh_disabled_.png){.thumbnail} 

Aplique los mismos parámetros para el servicio `slpd`.

![services_slp](images/slpd_.png){.thumbnail}

**Reglas de cortafuegos**

Haga clic en el menú `Networking`{.action}, luego en `Firewall Rules`{.action} y seleccione `Edit settings`{.action} para cada uno de los servicios que desea proteger:

![rulas](images/firewall_web_.png){.thumbnail}

Configure la regla para añadir únicamente las direcciones IP o las redes que deban tener acceso al sistema ESXi.

Ejemplo que solo autoriza las conexiones desde la IP 192.168.1.10:

![custom](images/custom_fw_rule.png){.thumbnail}

#### Manipulación a través del intérprete de órdenes

**Servicios**

Desactive los servicios innecesarios:

- Servicio SLP

```bash
/etc/init.d/slpd stop
esxcli network firewall ruleset set -r CIMSLP -e 0
chkconfig slpd off
```

- Servicio SSH

```bash
/etc/init.d/SSH stop
esxcli network firewall ruleset set -r sshServer -e 0
chkconfig SSH off
```

Compruebe todos los servicios activos al arrancar:

```bash
chkconfig --list | grep on
```
<br/>
<br/>

**Reglas de cortafuegos**

Establezca las reglas de firewall existentes:

```bash
esxcli network firewall ruleset list
esxcli system account list
```

> Explicaciones sobre los cambios/ajustes de las reglas de acceso: 
> 
> - Servicio `vSphereClient`: este servicio corresponde a la interfaz web de administración del puerto 443 (HTTPS).
> - Servicio `SSHServer`: este servicio corresponde a los accesos por SSH al puerto 22.

Ejemplo de servicio vSphereClient:

```bash
esxcli network firewall ruleset list --ruleset-id vSphereClient
```

Asegúrese de que la regla de cortafuegos esté activa:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --enabled true
```

Muestra la lista de direcciones IP autorizadas para esta regla:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Resultado:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  All
```

Cambie el estado de la etiqueta desactivándola:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --allowed-all false
```

Autorice exclusivamente la dirección IP legítima 192.168.1.10:

```bash
esxcli network firewall ruleset allowedip add --ruleset-id vSphereClient --ip-address 192.168.1.10
```

Compruebe la presencia de la dirección en la lista de acceso:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Resultado:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  192.168.1.10
```
<br/>
<br/>

Si quiere utilizar el servicio SSH, le explicamos cómo configurar un acceso por llave SSH.

Genere las llaves en la máquina que desea conectarse al servidor ESXi. Para una seguridad máxima, debe privilegiar el algoritmo **ECDSA** de 521 bits:  

> [!warning]
> La autenticación funciona con un par de claves: una pública y otra privada.
> No comparta en ningún caso su llave **privada**, esta debe permanecer en la máquina en la que se haya generado.

Ejecute el siguiente comando:

```bash
ssh-keygen -t ecdsa -b 521 -C "key-ecdsa-esxi-host" -f /path-to-my-key/key-ecdsa
```

```
Generating public/private ecdsa key pair.
Enter file in which to save the key (/path-to-my-key/key-ecdsa_rsa):
```

Introduzca una contraseña sólida:

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

En las máquinas a las que quiera conectarse, solo deberá introducir la llave pública (key-ecdsa.pub).

```
Your identification has been saved in /path-to-my-key/key-ecdsa.
Your public key has been saved in /path-to-my-key/key-ecdsa.pub.
The key fingerprint is:
SHA256:******************************************* key-ecdsa-esxi-host
```

Transfiera la llave pública al host ESXi para que pueda ser declarada de confianza:

```bash
cat /path-to-my-key/key-ecdsa.pub | ssh root@esxi-host-ip 'cat >> /etc/ssh/keys-root/authorized_keys'
```

## Más información

Para más información sobre las buenas prácticas de seguridad, consulte [esta guía](https://core.vmware.com/security-configuration-guide) de VMware.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.