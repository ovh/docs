---
title: General
excerpt: ''
slug: general
legacy_guide_number: g597
section: Primeros pasos
---


## 
La gran diferencia de este producto con respecto a otros, es que se instala directamente sobre la cubierta material (hablamos de un hypervisor Bare Metal). No es necesario instalar un sistema operativo « host » para instalar VMware ESXi. 
VMware es un hypervisor que permite una gestión precisa de los recursos para cada máquina virtual y un mejor rendimiento. 
Una máquina virtual es, en definitiva, un conjunto de varios ficheros. 
Este sistema de ficheros posee muchas características, la más significativa, la posibilidad de gestionar diversas conexiones simultáneas. 
ESxi dispone también de mecanismos muy precisos para la gestión de la memoria compartida, como la recuperación de la memoria inutilizada y así como para la duplicación y la descompresión de páginas de memoria.


## 
Esta herramienta permite migrar una máquina virtual de un servidor ESXi a otro « en caliente », es decir, sin interrumpir el servicio. Esta operación es posible cuando los servidores host utilizan microprocesadores compatibles (los hosts propuestos por OVH son compatibles) y el espacio de almacenamiento de ficheros de las máquinas virtuales se encuentra dividido en un SAN o un NAS.


## 
Esta herramienta permite el reparto de cargas entre diversos servidores ESXi. 
Están disponibles varios modos de funcionamiento. Por ejemplo, es posible dejar DRS gestionar automáticamente la asignación de recursos entre servidores ESXi. 
DRS se apoya en un mecanismo de vMotion para mover máquinar virtuales entre diferentes servidores. 
ESXi dentro del mismo cluster. Se pueden también crear reglas de afinidad con el fin de agrupar o separar los VMs en uno o varios ESXi. (Ej. un AD primario y secundario)


## 
Esta opción de vCenter crea un cluster de servidores ESXi asociándolos. 
La teconología « vLockStep », en la cual se apoya el cluster FT, permite a la VM del servidor secundario ejecutar la VM del servidor principal en paralelo. Solamente el servidor principal ejecuta la escritura hacia el disco o hacia la red : el servidor secundario ejecuta la misma VM en paralelo sin realizar la escritura. 
En caso de fallo del servidor principal, vCenter lo desactiva. Ésto permite que el servidor secundario tome el relevo con el fin de asegurar la continuidad en el funcionamiento de esta VM.

## ¡¡ADVERTENCIA! ! !
Esta característica no se admite actualmente en Private Cloud.


## 
vCenter es una herramienta de gestion que permite administrar de una forma centralizada el conjunto de máquinas virtuales y hosts físicos de un entorno virtual. 
A través de esta interfaz es posible igualmente gestionar: 

- las alarmas de supervisión (CU/RAM) ;
- los templates (sobres de sistemas operativos preconfigurados)
- la utilización de opciones (HA, vMotion, DRS).



