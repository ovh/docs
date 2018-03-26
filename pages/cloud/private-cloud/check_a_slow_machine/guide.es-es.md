---
title: Comprobar una máquina en caso de lentitud
excerpt: ''
slug: comprobar_una_maquina_en_caso_de_lentitud
legacy_guide_number: g601
section: Gestión de las máquinas virtuales
---


## 
Estos son los pasos a seguir para hacer un diagnóstico en caso de ralentización grave en una MV.

Usted debe utilizar el cliente vSphere, o accedediendo a él usando su cliente local propio, o mediante el uso de la conexión RDP que le hemos proporcionado al activar su Private Cloud.


## Verificación de las MV's :
Inicialmente, seleccionamos la MV con el problema y vamos a la pestaña "performance". Aquí nos encontramos con el resumen de gráficos de uso de nuestra MV para la CPU, la RAM, etc. Si nos encontramos con un uso importante en la ventana, las irregularidades provienen con certeza de la MV.
En este caso, puede hacer un incremento de los recursos de su MV, después de asegurarse de que no hay limitaciones en la ficha "Recursos" de los parámetros de la MV (Haga clic en la MV => Modificar Configuración => Recursos).


## Verificación Cluster / Pool de recursos
En el grupo de clúster o en el pool de recursos, vamos a la pestaña Performances; esto le permitirá ver los gráficos de rendimiento y del uso de los recursos :

![](images/img_95.jpg){.thumbnail}
En la sección "Asignación de recursos", podrá ver las cifras del consumo global de sus Mvs en los recursos disponibles:

![](images/img_96.jpg){.thumbnail}
Podemos encontrar dos casos:

- Si un host está sobrecargado, puede efectuar una migración manual de la MV a otro host, o una migración en caliente utilizando VMotion.

Si tiene la licencia Enterprise, puede utilizar la función DRS, que le permite gestionar de forma automática esta operación, en función del uso de recursos de sus hosts.


- Que todos los hosts presenten una carga importante, se deberá agregar a través de la pestaña Private Cloud OVH o Stockage OVH.




## Verificación de almacenajes
Más allá de los recursos del sistema para sus MVs, también puede controlar sus almacenamientos. Cuando usted está en el Datastore, seleccione su NAS y, a continuación en la pestaña "Performance" :

![](images/img_97.jpg){.thumbnail}


## Verificación de Red
Por último, puede comprobar el estado de la red.
En el Manager, se puede ver el caudal utilizado y las limitaciones configuradas en su VLAN :


- Manager v5 -> Private Cloud -> Resumen / Inicio



