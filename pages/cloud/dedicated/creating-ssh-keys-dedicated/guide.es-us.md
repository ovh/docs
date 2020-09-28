---
title: 'Crear claves SSH'
slug: crear-claves-ssh-dedicadas
excerpt: 'Cómo crear claves SSH para una conexión segura con su servidor dedicado'
section: 'SSH y llave SSH'
order: 3
---

**Última actualización: 15/4/2020**

## Objetivo

El protocolo SSH habilita un canal seguro a través de una red no segura en una arquitectura cliente-servidor, conectando un cliente SSH con un servidor SSH. La creación de un conjunto de claves SSH le proporciona una clave pública y otra privada. Puede colocar la clave pública en cualquier servidor y, posteriormente, desbloquearla conectándose con un cliente que ya tenga almacenada su clave privada. Si los conjuntos de claves SSH coinciden, iniciará sesión sin necesidad de una contraseña.

**En esta guía, se explica cómo crear claves SSH y utilizarlas para proteger el acceso a su servidor.**

> [!primary]
>
Tenga en cuenta que las claves SSH no se utilizan con fines de autenticación en servidores que se ejecutan en el sistema operativo Windows. En cuanto a los servidores de Windows, aún deberá usar un nombre de usuario y una contraseña.
>

## Requisitos

- Tener acceso al [panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager).
- Tener un [servidor dedicado](https://www.ovh.com/world/esservidores_dedicados/) en su cuenta de OVHcloud.
- Tener acceso de administrador (raíz) a través del protocolo/programa SSH.

## Procedimiento

### Creación de una clave SSH en Linux y Mac

En un equipo Mac o Linux, abra la aplicación «Terminal» (línea de comandos).

Compruebe si dispone de una carpeta «.ssh» en el directorio «$HOME». Si la carpeta no existe, créela:

```sh
# mkdir ~/.ssh
```

Utilice el siguiente comando para crear una clave RSA de 4096 bits:

```sh
# ssh-keygen -b 4096
```
El uso del parámetro «-t» con este comando permite especificar un método de cifrado diferente, por ejemplo:

```sh
# ssh-keygen -t ed25519 -a 256
```

El comando le pedirá que guarde la nueva clave creada:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Confirme y, a continuación, tendrá la opción de introducir una frase de contraseña para proteger su clave SSH. Se recomienda usar una frase de contraseña para mayor seguridad.

Las claves SSH deben almacenarse en la carpeta «.ssh».

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

> [!warning]
>
> La clave privada debe mantenerse siempre a salvo y el acceso a la misma debe limitarse estrictamente a las personas autorizadas.
> 

Para leer y exportar su clave pública, utilice el comando «cat» en el archivo de la clave y copie el resultado:

```ssh
# cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

### Crear una clave SSH usando el cliente PuTTY (para Windows)

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) es un cliente SSH popular para Windows. Puede utilizarlo para conectarse remotamente a un servidor Linux. Su <i>software</i> complementario [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe) puede utilizarse para crear claves SSH.

En primer lugar, descargue el <i>software</i> [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe), el cual se utilizará para generar la clave.

A continuación, ejecute el <i>software</i> y seleccione el tipo de clave. En el caso de nuestro ejemplo, elegiremos una clave RSA de 4096 bits. Haga clic en el botón `«Generar»`{.action} para iniciar el proceso de creación.

![putty key](images/puttygen_01.png){.thumbnail}

Mueva aleatoriamente el cursor del ratón alrededor de la zona por debajo de la barra de progreso, tal y como se muestra a continuación.

![putty key](images/puttygen_02.gif){.thumbnail}

Siga moviendo el ratón hasta que la barra esté llena. La clave se ha creado y está lista para usarse.

![putty key](images/puttygen_03.png){.thumbnail}


### Añadir claves SSH a su servidor

Vaya al directorio «$HOME» y cree la carpeta «.ssh» (si no existe):

```ssh
$ mkdir ~/.ssh
```

Para almacenar la clave del usuario actual, abra un archivo denominado «authorized_keys» con su procesador de texto preferido:

```ssh
$ nano ~/.ssh/authorized_keys
```

Copie y pegue su **clave pública** en este nuevo archivo. Guarde el archivo y salga del procesador de texto. Reinicie su servidor o reinicie únicamente el servicio OpenSSH (el comando apropiado puede variar en función de su sistema operativo):

```ssh
$ systemctl restart sshd
```

Para comprobar que su clave se haya configurado correctamente, trate de acceder a su servidor a través del protocolo/programa SSH con el comando siguiente. Sustituya «IP_ADDRESSorHOSTNAME» por la dirección IP o el nombre de host del servidor al que está intentando acceder:

```ssh
$ ssh user@IP_ADDRESSorHOSTNAME
```

#### Añadir claves adicionales a su servidor

Si desea añadir claves SSH para usuarios adicionales, simplemente repita los pasos anteriores, pero utilice el directorio «$HOME» adecuado para crear una clave única para cada usuario.

#### Eliminar claves autorizadas de su servidor

Elimine la clave del usuario al que se le va a revocar el acceso en el archivo «authorized_keys». Después de eliminar la clave, guarde el archivo y salga del procesador de texto.

### Importar su clave SSH en el panel de control de OVHcloud

El panel de control de OVHcloud le permite almacenar las claves públicas creadas utilizando uno de los tipos de cifrado admitidos (actualmente RSA, ECDSA y ED25519). 

Abra la navegación de la barra lateral haciendo clic en su nombre en la esquina superior derecha y utilice el acceso directo `«Productos y servicios»`{.action}.

![SSH key control panel](images/SSH_keys_panel_1.png){.thumbnail}

En «Mis servicios», cambie a la pestaña `«Claves SSH»`{.action} y haga clic en `«Añadir una clave SSH»`{.action}.

![SSH key control panel](images/SSH_keys_panel_2.png){.thumbnail}

Seleccione «Dedicada» en el menú desplegable.

En la nueva ventana, introduzca un id. (un nombre de su elección) para la clave. Pegue la cadena de clave (copiada del archivo «.pub») en el campo «Clave».

![SSH key control panel](images/SSH_keys_panel_3.png){.thumbnail}

Si ha copiado el resultado completo, ya debería estar incluido el identificador después de la clave. Tenga en cuenta que, para almacenar la clave, siempre deberá especificar el identificador después de la clave pegada. Se trata de un requisito del panel de control de OVHcloud (véase el formato de ejemplo anterior). Haga clic en `«Confirmar»`{.action} para almacenar su clave pública.

> [!primary]
>
> Las claves guardadas en la sección «Dedicada» también podrán utilizarse en sus servicios de servidores virtuales privados (VPS). Por lo que se refiere a las claves SSH para los servicios Public Cloud, consulte [esta guía](../public-cloud/crear-llave-ssh/).
>


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
