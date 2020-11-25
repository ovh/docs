---
title: Utilizar vScope
excerpt: ''
slug: utilizar_vscope
legacy_guide_number: g718
section: Servicios y opciones de OVHcloud
---


## Acceso
Para acceder a vScope, introduzca en su navegador la siguiente dirección (sustituya el dominio por el suyo): 

https://pcc-178-32-194-8.ovh.com/vScope (con S mayúscula)

![](images/img_368.jpg){.thumbnail}
Para iniciar sesión, introduzca el nombre de usuario y la contraseña, los mismos que utiliza para conectarse al cliente vSphere.

Llegará directamente a la monitorización global de uno de sus datacenters. Para cambiar de datacenter, utilice el menú desplegable de la parte superior.

![](images/img_364.jpg){.thumbnail}


## Filer
En el recuadro izquierdo podrá ver la lista de sus datastores y las estadísticas de uso correspondientes.


## Hosts
En el recuadro derecho encontrará la lista de sus hosts, con el número de cores, máquinas virtuales, procesadores y RAM utilizados, así como el tráfico de red en las tarjetas del host (TX: subida y RX: bajada).

Haciendo doble clic en el nombre del host, se abrirá otra página con las gráficas de uso de los recursos (procesador, RAM, ancho de banda...).

![](images/img_366.jpg){.thumbnail}
Para hacer zoom, haga clic en la gráfica en el punto de inicio del período que quiere visualizar y arrástrelo hasta el punto final.

![](images/img_367.jpg){.thumbnail}
También puede seleccionar el período para el que quiere mostrar las gráficas (día, semana, mes o año) en el menú desplegable de la parte superior.


## VM
En el recuadro inferior se encuentran las estadísticas de las máquinas virtuales, que recogen:


- su nombre, 
- el datastore en el que está ubicado el VMDK, así como el espacio asignado en el datastore y el utilizado,
- el número de snapshots presentes en la máquina (realizados con el snapshot manager),
- el host en el que se encuentra la máquina virtual,
- su estado (encendida, apagada, suspendida),
- el consumo de CPU y RAM,
- información sobre los discos (estadísticas de ancho de banda, I/O y latencia).


Al igual que en los hosts, puede hacer doble clic en el nombre de la máquina para consultar sus gráficas.

