---
title: VMware Storage VMotion
excerpt: ''
slug: vmware_storage_vmotion
legacy_guide_number: g687
section: Funcionalidades de VMware vSphere
---


## 
El Storage vMotion permite cambiar la ubicación de almacenamiento de archivos de la máquina virtual manteniendo de la máquina virtual encendida.

Esta opción sólo está disponible en los hosts de tipo L y XL, que dispongan de licencia enterprise plus de VMware en el Private Cloud OVH.


## 
Para desplazar los ficheros de una máquina virtual a otro datastore, simplemente haga clic derecho en la máquina virtual encendida y seleccionar la opción "Cambio de base de datos"

![](images/img_328.jpg){.thumbnail}
A continuación, debe elegir a qué almacenamiento desea migrar sus datos.
Usted también tiene la opción, en caso de tener varios discos virtuales en la misma máquina, de migrar un solo disco de la máquina virtual utilizando el botón "Avanzadas":

![](images/img_326.jpg){.thumbnail}
Y modificar el emplazamiento para un solo disco :

![](images/img_325.jpg){.thumbnail}
Una vez elegido el destino de sus discos virtuales, se le preguntará si desea conservar el mismo tipo de aprovisionamiento o cambiarlo :

![](images/img_327.jpg){.thumbnail}

