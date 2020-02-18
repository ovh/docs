---
title: 'Crear una llave SSH'
slug: crear-llave-ssh
excerpt: 'Cómo generar una llave SSH para conectarse a una instancia'
section: Seguridad
---

**Última actualización: 14 de noviembre de 2019**

## Objetivo

Cuando cree una [Instancia Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/){.external}, no recibirá un correo electrónico con credenciales de acceso porque la autenticación se basa en claves SSH seguras en lugar de en nombres de usuarios y contraseñas.

**Esta guía le mostrará cómo crear una clave SSH para que pueda acceder a su instancia.**

> [!primary]
>
Tenga en cuenta que las claves SSH no se utilizan con fines de autenticación en instancias que se ejecutan en el sistema operativo Windows. Para instancias de Windows, aún deberá usar un nombre de usuario y una contraseña.
>

## Requisitos

* un proyecto [Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/){.external} en su cuenta de OVHcloud
* acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedimiento

### Creación de una clave SSH en Linux y Mac

En primer lugar, abra la aplicación de la terminal (línea de comandos) y, a continuación, ejecute el siguiente comando para generar una clave SSH de 4096 bits:

```sh
# ssh-keygen -b 4096
```

El comando mostrará el siguiente resultado y le pedirá que guarde su clave recién creada:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

> [!warning]
>
> La parte privada de la clave debe mantenerse a salvo y el acceso debe limitarse a las personas autorizadas para usarla.
> 

Cuando haya guardado la clave, la línea de comandos mostrará lo siguiente:

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
0a:3a:a4:ac:d1:40:6d:63:6d:fd:d9:fa:d6:b2:e0:36 user@host
The key's randomart image is:
+---[RSA 4096]----+
|      .          |
|                 |
| .               |
|. . . .          |
|. .=.o .S.       |
| =o.o. ..   .    |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+-----------------+
```

Puede leer y mostrar la clave con el siguiente comando:

```ssh
# cat .ssh/id_rsa.pub
```

La ejecución de este comando mostrará lo siguiente:

```ssh
cat /home/user/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxU3U2q66yt/wPmw1yRsQagtNKHAzFUCSOB1nFz0RkqvqgARrHTY0bd
aS0weA//aK9f6z+Y4THPbcCj4xPH4iGikFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@host
```

### Crear una clave SSH en Windows

#### Con PuTTY

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.external} es un popular cliente SSH para Windows. Puede utilizarlo para conectarse remotamente a un servidor Linux. Su <i>software</i> complementario, [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external}, puede utilizarse para crear claves SSH.

En primer lugar, descargue el <i>software</i> [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external}, el cual utilizará para generar la clave.

Después, ejecute el <i>software</i> y seleccione RSA como tipo de clave, introduzca 4096 como el número de bits por generar y, a continuación, haga clic en el botón `«Generar»`{.action}.

![generate key](images/puttygen-01.png){.thumbnail}

Después, mueva aleatoriamente el ratón alrededor de la zona por debajo de la barra de progreso, tal y como se muestra a continuación.

![generate key](images/puttygen-02.gif){.thumbnail}

A medida que mueva su ratón, la barra de progreso irá rellenándose. Al llenarse completamente, la clave estará lista.

![generate key](images/puttygen-03.png){.thumbnail}

### Importación de una clave SSH en el área de cliente de OVHcloud

En primer lugar, resalte y copie el texto de su clave pública y, a continuación, acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Ahora, haga clic en el menú `Public Cloud`{.action}.

![cloud menu](images/cloud-menu.png){.thumbnail}

Ahora, seleccione su proyecto Public Cloud en el menú del lado izquierdo\[.action}.

![select project](images/select-project.png){.thumbnail}

A continuación, seleccione la pestaña `«Claves SSH»`{.action}. Después, pegue la clave de 4096 bits en el espacio proporcionado, dele un nombre a dicha clave y haga clic en el botón `«Añadir esta clave»`{.action}.

![save ssh key](images/save-key.png){.thumbnail}

A partir de ahí, su clave estará guardada en el área de cliente de OVHcloud para autenticación.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.