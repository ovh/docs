---
title: Instalar la llave SSH de OVHcloud
slug: ovh-ssh-key
excerpt: Cómo instalar una llave SSH de OVHcloud en un servidor para que los técnicos puedan intervenir
section: SSH y llave SSH
---

**Última actualización: 23/01/2018**

## Objetivo

Hay situaciones que pueden requerir la intervención de un técnico de OVHcloud en la infraestructura dedicada de un usuario. 

**Esta guía explica cómo instalar una llave SSH de OVHcloud para permitir la intervención de los administradores de OVHcloud, y cómo desactivarla posteriormente.**

## Requisitos

- [Estar conectado por SSH](../introduccion-ssh/){.external} (acceso *root*).

## Procedimiento

### 1. Instalar la llave

Una vez se haya conectado por SSH, introduzca uno de los siguientes comandos:

**Si el servidor está alojado en OVHcloud Francia:**

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O instalar_la_llave.sh ; sh instalar_la_llave.sh
```

**Si el servidor está alojado en OVHcloud Canadá:**

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O instalar_la_llave.sh ; sh instalar_la_llave.sh
```

Si la operación se ha realizado correctamente, se habrá creado el archivo **authorized_keys2**. Dicho archivo contiene información con el siguiente formato:

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

### 2. Resolver los fallos

Aunque la llave se haya instalado correctamente, cabe la posibilidad de que nuestros técnicos no puedan conectarse al servidor. En ese caso, compruebe los elementos que se indican a continuación.

#### ¿El archivo «/root/.ssh/authorized_keys2» está presente en el servidor?

Para comprobar que el archivo se haya descargado correctamente, introduzca el siguiente comando:

```sh
cat /root/.ssh/authorized_keys2
```

#### ¿El servidor SSH está configurado de modo que acepte las conexiones procedentes de *root*?

Para ello, compruebe que el archivo **/etc/ssh/sshd_config** contenga los siguientes parámetros:

```bash
PermitRootLogin yes
AuthorizedKeysFile .ssh/authorized_keys2
UsePAM yes
```
Por defecto, el archivo autorizado será **.ssh/authorized_keys** y la línea estará comentada, por lo que deberá descomentarla (o añadir una nueva línea) y editar el nombre del archivo.

A continuación, reinicie el servicio SSH:

```sh
/etc/init.d/sshd restart
```

#### ¿El directorio del usuario *root* es «/root»?

Para ello, utilice `/etc/passwd`:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

El sexto elemento de la línea (cada elemento está separado por «:») debe ser **/root**.

#### ¿Su firewall podría bloquear el acceso?

Si utiliza un cortafuegos de software, debe añadir una regla de autorización para el origen **cache-ng.ovh.net** («cache-ng.ovh.ca» para los servidores de Canadá) con el puerto SSH como puerto de destino (por defecto es el **22**). A continuación le mostramos algunos ejemplos de reglas iptables:

**Servidores localizados en Francia:**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Servidores localizados en Canadá:**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

#### ¿El puerto SSH está personalizado?

Si ha cambiado el puerto SSH predeterminado, deberá comunicárnoslo para que nuestros técnicos puedan conectarse.
 

### 3. Desactivar la llave

Una vez que el técnico haya finalizado la intervención, ya puede usted desactivar la llave SSH. Para ello, solo tiene que editar el archivo **authorized_keys2** ​comentándolo (con `#`) como se indica a continuación:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Más información

[Introducción al SSH](../introduccion-ssh/)

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.

