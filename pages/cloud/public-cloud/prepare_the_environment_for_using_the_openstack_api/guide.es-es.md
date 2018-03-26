---
title: Preparar el entorno para utilizar la API de OpenStack
excerpt: Preparar el entorno para utilizar la API de OpenStack
slug: preparar_el_entorno_para_utilizar_la_api_de_openstack
legacy_guide_number: g1851
section: OpenStack
---


## 
Public Cloud le ofrece la posibilidad de gestionar sus servicios con ayuda de un terminal. Para ello, puede instalar clientes OpenStack en Python. 
De este modo, podrá no solo gestionar el Object Storage, sino también automatizar las diferentes acciones que puede realizar con ayuda de estos clientes. 
Esta guía explica cómo instalar clientes OpenStack.


## En Debian

- Inicie un terminal o una conexión SSH en el entorno que desee configurar. 

- [Conéctese como usuario root](https://www.ovh.es/publiccloud/guides/g1786.conectarse_como_usuario_root_y_establecer_una_contrasena).


Actualizar la caché de paquetes:

```
root@vps187763:~# apt-get update
```


Instalar los clientes para nova (compute) y glance (image service):

```
root@vps187763:~# apt-get install python-glanceclient python-novaclient -y
```


Una vez realizado este paso, resulta aconsejable crear un usuario específico para no trabajar con el usuario root.
Consultar la ayuda sobre las CLI nova y glance: 

```
admin@vps187763:~$ nova help
```



```
admin@vps187763:~$ glance help
```


Para más información sobre la API de OpenStack, haga clic [aquí](http://docs.openstack.org/cli-reference/content/).


## En CentOS

- Inicie un terminal o una conexión SSH en el entorno que desee configurar. 

- [Conéctese como usuario root](https://www.ovh.es/publiccloud/guides/g1786.conectarse_como_usuario_root_y_establecer_una_contrasena).


Actualizar la caché de paquetes:

```
[root@vps187769 ~]# yum update -y
```


Instalar el rpm rdo-release: 

```
[root@vps187769 ~]# yum install -y https://rdoproject.org/repos/rdo-release.rpm
```


Instalar nova:

```
[root@vps187769 ~]# yum install -y python-novaclient
```


Instalar glance:

```
[root@vps187769 ~]# yum install -y python-glanceclient
```


Fuente: [https://www.rdoproject.org/Quickstart](https://www.rdoproject.org/Quickstart)
Una vez realizado este paso, resulta aconsejable crear un usuario específico para no trabajar con el usuario root.
Consultar la ayuda sobre las CLI nova y glance: 

```
[root@vps187769 ~]# nova help
```



```
[root@vps187769 ~]# glance help
```


Para más información sobre la API de OpenStack, haga clic [aquí](http://docs.openstack.org/cli-reference/content/).


## 

- Descargue e instale la versión [2.7.10 de Python](https://www.python.org/downloads/release/python-2710/). 

- Ejecute la interfaz de comando. 

- Instale PIP gracias a easy_install:



![](images/img_3060.jpg){.thumbnail}

- Instale Swift



![](images/img_3061.jpg){.thumbnail}
Consultar la ayuda sobre la CLI: 


```
C:\Windows\system32>swift --help
```




## 
 

