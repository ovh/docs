---
title: Configurar llaves SSH adicionales
excerpt: Cómo configurar llaves SSH adicionales para la instancia de Public Cloud
slug: configurar_llaves_ssh_adicionales
legacy_guide_number: g1924
section: Tutoriales
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 04/02/2022**

## Objetivo
 
Al crear una instancia, solo es posible configurar una llave SSH para la conexión inicial. Para permitir el acceso de su instancia a otros usuarios, es posible añadir claves configurando el archivo *authorized_keys*.

**Esta guía explica cómo configurar llaves SSH adicionales para las conexiones a la instancia.**

## Requisitos

- Tener una [instancia de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud.
- Haber iniciado sesión en el [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Tener acceso a su instancia por SSH como administrador (root).

## Procedimiento

> [!primary]
>
Si quiere registrar una llave SSH en el Panel de configuración de OVHcloud, le recomendamos que utilice el cifrado RSA o ECDSA. ED25519 no está soportado actualmente.
>

### Creación de la llave SSH

Para crear una nueva llave SSH, consulte la [guía de las primeras etapas con Public Cloud](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/).

### Configuración del nuevo usuario

[Conéctese a su instancia por SSH](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/#connect-to-instance) y cree un nuevo usuario con los siguientes comandos:

```bash
~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```

Abra el archivo *authorized_keys* en la carpeta personal del nuevo usuario con un editor de texto:

```bash
~$ sudo nano /home/user2/.ssh/authorized_keys
```

Añada al archivo la clave pública creada en el primer paso. Guarde y cierre el editor.

Si la carpeta .ssh todavía no existe, puede crearla con el siguiente comando:

```bash
~$ sudo mkdir /home/user2/.ssh/
```

Puede configurar varias llaves SSH añadiéndolas a los archivos *authorized_keys* de las correspondientes carpetas de usuario.

Ya puede conectarse con el usuario y la clave privada configurados anteriormente:

```bash
~$ ssh user2@instance_IP
```
```console
Linux b2-7-de1 5.10.0-10-cloud-amd64 #1 SMP Debian 5.10.84-1 (2021-12-08) x86_64

user2@server:~$
```

## Más información

[Crear una primera instancia de Public Cloud y conectarse a ella](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/)

[Cambiar la llave SSH en caso de pérdida](https://docs.ovh.com/es/public-cloud/modificar_su_llave_ssh_en_caso_de_perdida/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.