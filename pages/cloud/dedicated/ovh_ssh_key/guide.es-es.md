---
title: Instalar la llave SSH de OVHcloud
slug: ovh-ssh-key
excerpt: Cómo instalar una llave SSH de OVHcloud en un servidor para que los técnicos puedan intervenir
section: SSH y llave SSH
updated: 2018-02-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 12/04/2021**

## Objetivo

Hay situaciones que pueden requerir la intervención de un técnico de OVHcloud en la infraestructura dedicada de un usuario. 

**Esta guía explica cómo instalar una llave SSH de OVHcloud para permitir la intervención de los administradores de OVHcloud, y cómo desactivarla posteriormente.**

## Requisitos

- [Estar conectado por SSH](https://docs.ovh.com/es/dedicated/introduccion-ssh/){.external} (acceso *root*).

## Procedimiento

### 1. Instalar la llave

Una vez se haya conectado por SSH, introduzca uno de los siguientes comandos:

**Si el servidor está alojado en OVHcloud Francia:**

```sh
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

**Si el servidor está alojado en OVHcloud Canadá:**

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
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

[Introducción al SSH](https://docs.ovh.com/es/dedicated/introduccion-ssh/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.

