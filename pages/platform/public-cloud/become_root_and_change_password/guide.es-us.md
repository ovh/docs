---
title: 'Ejecutar comandos como root'
slug: conectarse_como_usuario_root_y_establecer_una_contrasena
excerpt: 'Cómo establecer la contraseña del usuario root y ejecutar comandos como root'
section: Tutoriales
---

**Última actualización: 11/04/2019**

## Objetivo

Para realizar determinadas tareas en un servidor (como la instalación de paquetes), es necesario disponer de un nivel de acceso elevado. En los servidores Linux, este nivel se denomina «root».

**Esta guía explica cómo establecer la contraseña del usuario root y ejecutar comandos como root.**

## Requisitos

* Tener un proyecto de [Public Cloud](https://www.ovh.com/world/es/public-cloud/instancias/){.external} activo.
* Poder conectarse al servidor por SSH.

> [!primary]
>
> En esta guía nos basamos en el supuesto de que el usuario por defecto es «admin».
>

## Procedimiento

### Cambiar la contraseña root

En primer lugar, conéctese al servidor por SSH.

Para ello, utilice el comando que se indica a continuación y establezca una contraseña para el usuario «admin» (por motivos de seguridad, la contraseña no se mostrará mientras la escriba).

```sh
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully 
successfully
```

### Actualizar los repositorios (Debian y Ubuntu)

Para actualizar los paquetes de software instalados en el servidor, introduzca el siguiente comando:

```
~$ sudo apt-get update
```

### Actualizar el sistema (CentOS y Fedora)

Para actualizar el sistema operativo del servidor, introduzca el siguiente comando:

```
~$ sudo yum update
```

### Editar el archivo de configuración

Para editar el archivo de configuración del servidor, introduzca el siguiente comando:

```
~$ sudo vi /etc/hosts.allow
```

### Conectarse como root

Para conectarse como usuario root, introduzca el siguiente comando:

```
~$ sudo su -
~#
```

A continuación escriba la contraseña root.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com](https://community.ovh.com){.external}.
