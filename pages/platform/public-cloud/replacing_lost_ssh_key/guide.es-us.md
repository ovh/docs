---
title: Modificar su llave SSH en caso de pérdida
excerpt: Modificar su llave SSH en caso de pérdida
slug: modificar_su_llave_ssh_en_caso_de_perdida
legacy_guide_number: g2069
section: Seguridad
---


## 
Si pierde su llave SSH (tras una reinstalación, por ejemplo) y no ha configurado ningún método alternativo de conexión, es posible que no pueda conectarse a su instancia. 

Para recuperar el acceso, ponemos a su disposición un modo de rescate que le permite conectarse con una contraseña y modificar sus archivos. 

Esta guía explica cómo configurar el archivo authorized_keys del usuario admin para poder añadir una nueva llave SSH que le permita recuperar el acceso a su instancia.


## Requisitos

- []({legacy}1769)
- []({legacy}2029)




## 
Tras haber montado el disco de su instancia en modo rescue, podrá acceder al conjunto de sus archivos. 

El archivo que contiene sus llaves SSH es el siguiente: 


```
/home/NOM_UTILISATEUR/.ssh/authorized_keys
```


Si desea añadir su nueva llave SSH, basta con editar el archivo y añadirle su nueva llave:


```
admin@instance:~$ sudo vim /mnt/home/NOM_UTILISATEUR/.ssh/authorized_keys

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```



## Información:
Para modificar la llave SSH de su usuario por defecto, deberá acceder a su directorio personal. 

Por ejemplo, para el usuario admin, el archivo necesario se encontrará en la siguiente carpeta:


```
/home/admin/.ssh/authorized_keys
```


Para una instancia en Ubuntu 15.10, el usuario por defecto será ubuntu y el archivo se ubicará en la siguiente carpeta:


```
/home/ubuntu/.ssh/authorized_keys
```



## También puede modificar la contraseña de su usuario por defecto utilizando el modo rescue y los siguientes comandos (en caso de que el usuario sea [b]admin[/b]):

- Cambiar el directorio raíz para colocarnos directamente en el disco de la instancia: 


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```


- Cambiar la contraseña admin: 


```
root@instance:/# passwd admin
```



Una vez realizado el cambio y registradas las modificaciones, tan solo deberá reiniciar su instancia en el disco para poder conectarse a su instancia con la nueva llave SSH.
