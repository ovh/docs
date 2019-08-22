---
title: Configurar llaves SSH adicionales
excerpt: Configurar llaves SSH adicionales
slug: configurar_llaves_ssh_adicionales
legacy_guide_number: g1924
section: Gestión de los accesos
---


## 
Al crear una instancia solo es posible configurar una única llave SSH. No obstante, usted puede autorizar el acceso a su instancia a otros usuarios que dispongan de llaves SSH configurando el archivo authorized_keys.

Esta guía explica cómo configurar llaves SSH adicionales en la instancia para dar acceso a ella a otras personas.


## Requisitos previos
Es necesario disponer de una instancia.


## Creación de la llave SSH

- Crear llaves SSH


Sin embargo, no es necesario añadirla en el área de cliente de OVH.


## Configuración de un nuevo usuario
Conéctese a la instancia.

Cree un nuevo usuario:

```
admin@serveur-1:~$ sudo adduser user2

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


Añada la clave pública SSH a la carpeta personal del nuevo usuario:

```
admin@serveur-1:~$ sudo vim /home/user2/.ssh/authorized_keys
```


Puede crear la carpeta .ssh si esta no existe.

```
admin@serveur-1:~$ sudo mkdir /home/user2/.ssh/
```


Ya podrá conectarse desde ese usuario con la clave privada asociada a la que acaba de configurar:

```
root@serveur:~$ ssh user2@149.xxx.xxx.22

Linux serveur-1 3.2.0-4-amd64 #1 SMP Debian 3.2.68-1+deb7u1 x86_64
Last login: Fri Oct 16 08:14:24 2015 from proxy-109-190-254-35.ovh.net

user2@serveur-1:~$
```


Puede configurar otras llaves SSH para el usuario admin añadiéndolas al archivo authorized_keys correspondiente:

```
admin@serveur-1:~$ sudo vim /home/admin/.ssh/authorized_keys
```