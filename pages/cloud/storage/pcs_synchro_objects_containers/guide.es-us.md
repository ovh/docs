---
title: Sincronizar contenedores de objetos
excerpt: Sincronizar contenedores de objetos
slug: sincronizar_contenedores_de_objetos
legacy_guide_number: g1919
section: Object Storage
---


## 
Si quiere mover objetos de un datacenter a otro, o de un proyecto a otro, la sincronización de objetos entre contenedores es la mejor solución para evitar cortes del servicio durante la migración.

Esta guía explica cómo implementar esta solución.


## Requisitos
Para seguir todos los pasos de esta guía, es necesario:


- [preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/) con el cliente Swift;
- cargar las variables de entorno de OpenStack;
- disponer de dos contenedores de objetos en dos datacenters diferentes.




## Crear la llave de sincronización
Para que los contenedores puedan verse, es necesario crear una llave y configurarla en cada contenedor de objetos.

Para crear la llave, ejecute el siguiente comando: 


```
root@servidor-1:~$ sharedKey=$(openssl rand -base64 32)
```




## Configurar el contenedor de destino
En primer lugar, es necesario configurar la llave en el contenedor que recibirá los datos. En nuestro caso, el contenedor se encuentra en BHS. 

Compruebe la región cargada en las variables de entorno:


```
root@servidor-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```


Configure la llave en el contenedor de destino:


```
root@servidor-1:~$ swift post --sync-key "$sharedKey" containerBHS
```


Puede utilizar el siguiente comando para comprobar que la llave se ha configurado correctamente: 


```
root@servidor-1:~$ swift stat containerBHS
Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
Container: containerBHS
Objects: 0
Bytes: 0
Read ACL:
Write ACL:
Sync To:
Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
Accept-Ranges: bytes
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444812373.28095
X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
Content-Type: text/plain; charset=utf-8
```


Obtenga la dirección del contenedor de destino para poder configurarla después en el contenedor de origen: 


```
root@servidor-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```




## Configurar el contenedor de origen
Cambie la región en las variables de entorno: 


```
root@servidor-1:~$ export OS_REGION_NAME=GRA1
```


Configure la llave en el contenedor de origen:


```
root@servidor-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


Configure el destinatario en el contenedor de origen:


```
root@servidor-1:~$ swift post --sync-to "$destContainer" containerGRA
```


Puede utilizar el siguiente comando para comprobar que la llave se ha configurado correctamente:  


```
root@servidor-1:~$ swift stat containerGRA
Account: AUTH_b3e269f057d14af594542d6312b0ba29
Container: containerGRA
Objects: 3
Bytes: 15
Read ACL:
Write ACL:
Sync To: https://storage.bhs1.cloud.ovh.net/v1/AUTH_b3e269f057d14af594542d6312b0ba29/containerBHS
Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
Accept-Ranges: bytes
Connection: close
X-Timestamp: 1444813114.55493
X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
Content-Type: text/plain; charset=utf-8
```




## Comprobar la sincronización
Pasados unos segundos (en función de la cantidad y del tamaño de los archivos que envíe), podrá comprobar que la sincronización se ha realizado adecuadamente mostrando los archivos en cada contenedor.

Muestre los archivos presentes en el contenedor de origen:


```
root@servidor-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```


Muestre los archivos presentes en el contenedor de destino:


```
root@servidor-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```


Esta guía también puede utilizarse para migrar objetos de RunAbove a Public Cloud.