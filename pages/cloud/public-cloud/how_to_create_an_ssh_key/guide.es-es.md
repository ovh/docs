---
title: 'Crear una llave SSH'
slug: crear-llave-ssh
excerpt: 'Cómo generar una llave SSH para conectarse a una instancia'
section: Seguridad
---

**Última actualización: 21/01/2019**

## Objetivo

Al crear una [instancia de Public Cloud](https://www.ovh.es/public-cloud/instancias/){.external}, no se envía un mensaje de correo electrónico con las claves de conexión, sino que la autenticación se realiza mediante llaves SSH seguras.

**Esta guía explica cómo generar una llave SSH para conectarse a una instancia.**

> [!primary]
>
Tenga en cuenta que, en las instancias que utilizan el sistema operativo Windows, la autenticación no se realiza mediante llaves SSH, sino mediante nombre de usuario y contraseña.
>

## Requisitos

* Tener un proyecto de [Public Cloud](https://www.ovh.es/public-cloud/instancias/){.external} en su cuenta de OVH.
* Tener acceso al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### Crear una llave SSH en Linux o Mac

Abra la aplicación Terminal (línea de comandos) y ejecute el siguiente comando para generar una llave SSH de 4096 bits:

```sh
# ssh-keygen -b 4096
```

La respuesta del comando mostrará lo siguiente y le pedirá que guarde la clave recién creada:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

> [!warning]
>
> Guarde la clave privada de la llave de forma segura y limite su acceso únicamente a las personas autorizadas.
> 

Una vez que haya guardado la llave, el terminal mostrará lo siguiente:

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

Puede ver la llave con el siguiente comando:

```ssh
# cat .ssh/id_rsa.pub
```

Al ejecutar el comando, se mostrará lo siguiente:

```ssh
cat /home/user/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxU3U2q66yt/wPmw1yRsQagtNKHAzFUCSOB1nFz0RkqvqgARrHTY0bd
aS0weA//aK9f6z+Y4THPbcCj4xPH4iGikFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@host
```

### Crear una llave SSH en Windows

#### Con PuTTY

[PuTTY](https://www.putty.org){.external} es un cliente SSH para Windows muy utilizado que permite conectarse a distancia a un servidor Linux. La herramienta asociada, [PuTTYgen](https://www.puttygen.com){.external}, que dispone de interfaz gráfica para Windows, permite crear llaves SSH.

En primer lugar, descargue el programa [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external} para poder generar la llave.

Ejecute el programa y seleccione RSA como tipo de llave. Introduzca «**4096**» en el número de bits y haga clic en el botón `Generate`{.action}.

![Generar la llave](images/puttygen-01.png){.thumbnail}

A continuación, mueva el ratón de forma aleatoria por la zona vacía situada bajo la barra de progreso.

![Generar la llave](images/puttygen-02.gif){.thumbnail}

A medida que vaya moviendo el ratón, la barra de progreso se irá completando. Una vez que la barra esté completa, la llave estará lista.

![Generar la llave](images/puttygen-03.png){.thumbnail}

### Importar una llave SSH en el área de cliente de OVH

Seleccione y copie el texto de su llave pública y, a continuación, conéctese al [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external} en la sección `Cloud`{.action}.

![Menú Cloud](images/cloud-menu.png){.thumbnail}

En la columna izquierda, seleccione el proyecto de Public Cloud y haga clic en `Infraestructura`{.action}.

![Seleccionar el proyecto Public Cloud](images/select-project.png){.thumbnail}

Abra la pestaña `Llaves SSH`{.action}.

![Guardar la llave SSH](images/save-ssh-key-01.png){.thumbnail}

Haga clic en el botón `Añadir una llave`{.action} e introduzca su llave de 4096 bytes en el área de texto. Asígnele un nombre y haga clic en el botón `Añadir esta llave`{.action} para guardarla.

![Guardar la llave SSH](images/save-ssh-key-02.png){.thumbnail}

La llave se guardará en el área de cliente de OVH y podrá utilizarla para autenticarse.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.