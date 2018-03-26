---
title: Conectarse como usuario root y establecer una contraseña
excerpt: Conectarse como usuario root y establecer una contraseña
slug: conectarse_como_usuario_root_y_establecer_una_contrasena
legacy_guide_number: g1786
section: Gestión de los accesos
---


## 
Para efectuar determinadas tareas, será necesario conectarse o realizar operaciones como root, especialmente para:   

- instalar paquetes; 
- crear una contraseña para un usuario o un root (indispensable para acceder por KVM);  
- realizar determinadas tareas de administración.




## Requisitos

- []({legacy}1775)
- Estar conectado con la llave SSH y el usuario por defecto (admin o el nombre de la distribución para las imágenes más recientes).



## Información:
En esta guía se da por hecho que el usuario por defecto se llama «admin».


## Establecer una contraseña

- Establecer una contraseña para el usuario admin (la contraseña no se muestra al introducir los datos por medidas de seguridad): 

```
~$ sudo passwd
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```


- Establecer una contraseña para el usuario root (la contraseña no se muestra al introducir los datos por medidas de seguridad): 

```
~$ sudo passwd root
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```





## Otros ejemplos:

- Actualizar la caché de paquetes (Debian/Ubuntu): 

```
~$ sudo apt-get update
```


- Actualizar el sistema (CentOS/Fedora):

```
~$ sudo yum update
```


- Editar un archivo de configuración:

```
~$ sudo vi /etc/hosts.allow
```





## 

- Conectarse como root: 

```
~$ sudo su -
~#
```


- Establecer una contraseña para root (después de conectarse como root): 

```
~# passwd
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```


- Establecer una contraseña para el usuario administrador:

```
~# passwd admin
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```