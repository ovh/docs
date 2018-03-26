---
title: Efectuar un snapshot o un clon
excerpt: ''
slug: efectuar_un_snapshot_o_un_clon
legacy_guide_number: g620
section: Gestión de las máquinas virtuales
---


## Requisitos previos
Usted debe utilizar el cliente vSphere, usando su cliente local propio, o mediante el uso de la conexión RDP que le hemos proporcionado al activar su PCC.

El snapshot le permite capturar el estado de su MV cuando se inicia. Este snapshot incluye (según su elección):

- El estado de todos los discos de la máquina virtual.
- Los contenidos de la memoria de la máquina virtual.


Los snapshots son útiles cuando se debe volver varias veces a un mismo estado, sin crear múltiples máquinas virtuales. Gracias a los snapshots, se crean las posiciones de la restauración. Puede conservar el estado de base de una MV antes de migrar a otro tipo de operación. Mientras que los snapshots ofrecen una imagen "instantánea" del disco, utilizados por las soluciones de copia de seguridad, no se deben utilizar los snapshots para propias copias de seguridad de su máquina virtual. De hecho, si usted tiene un gran número de snapshots, movilizarán gran cantidad de espacio en disco y no estarán protegidos en caso de fallo de hardware.


## Tomando el snapshot
En su MV, haga clic derecho, elija "Snapshot" y "Tomar un Snapshot" :

![](images/img_133.jpg){.thumbnail}
Debe especificar el nombre que desea asignarle a este snapshot, su descripción y si lo desea, la memoria de la MV a incluir también en el snapshot.

Aquí tiene la oportunidad de tener un snapshot con o sin la RAM utilizada por la MV.
Si integra la RAM al snapshot, se incrementará el tiempo de ejecución de la tarea pero no tendrá que reiniciar durante su restauración. De lo contrario, dado que la RAM no se guarda, la tarea se ejecutará más rápidamente pero el reinicio de la MV será necesario en la restauración.

![](images/img_134.jpg){.thumbnail}


## Gestión de los snapshots
Puede encontrar el conjunto de snapshots de una MV en "Snapshot Manager". Para encontrar esa opción, haga clic derecho sobre la MV, escoja "Snapshot" y "Snapshot Manager" :

![](images/img_135.jpg){.thumbnail}


## Requisitos previos
Deberá utilizar el cliente vSphere instalado en su PC o la conexión RDP que le proporcionamos en la activación de su PCC.


## Clonar una MV
HAga clic derecho en la MV a clonar y seleccione "Clon". Especifique el nombre de su nueva MV y su emplazamiento en su árbol:

![](images/img_136.jpg){.thumbnail}
Especifique el cluster del que dependerá esta MV :

![](images/img_137.jpg){.thumbnail}
Especifique el host principal de esta MV :

![](images/img_138.jpg){.thumbnail}
Ahora indique el filer donde el espacio de disco de esta MV se almacenará. Seleccione, por ejemplo, el destino de la MV que tiene (o no) el mismo formato que su fuente. Puede usar:


- Same Format as Source: la MV creada será idéntica en todos los aspectos a la fuente;
- Thin provisioned format: creará un disco, pero solo usará el espacio de disco realmente usado en el filer;
- Thick Format: usa todo el espacio de disco correspondiente a la MV en el filer.



![](images/img_139.jpg){.thumbnail}
Ahora haremos la configuración de red a aplicar a esta MV. Tiene dos opciones:

- No personalizar: no se harán cambios en la configuración de red de la nueva MV en relación a la MV de origen;
- Personalizar usando el "Customization Wizard": esta opción le permite especificar la nueva configuración que desea implementar en esta nueva MV.



![](images/img_140.jpg){.thumbnail}

## ¡ATENCIÓN!
Si no hizo una configuración "Custom" de la nueva máquina virtual, es necesario cambiar la configuración del clon antes de iniciar para evitar un conflicto de IP.
En este caso, basta con desmarcar la tarjeta de red en los parámetros de la máquina virtual :

![](images/img_141.jpg){.thumbnail}

