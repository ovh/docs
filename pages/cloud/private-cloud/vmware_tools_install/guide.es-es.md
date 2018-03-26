---
title: Instalar las VMware Tools
excerpt: ''
slug: instalar_las_vmware_tools
legacy_guide_number: g621
section: Gestión de las máquinas virtuales
---


## 
Debe usar el cliente vSphere, a través de su propio cliente local o utilizando la conexión RDP que le hemos facilitado al activar su PCC.


## 
Monte el disco de VMware tools desde la consola de su MV validando la opción "Install/Upgrade VMware Tools" :

![](images/img_142.jpg){.thumbnail}
A continuación, debe montar el volumen activado por el comando:


```
# mount /dev/cdrom /mnt
```


Después, descomprima el archivo de Tools. Aquí lo haremos en la/home :


```
#cd /home (por ejemplo)
#tar xvf /mnt/VmareTools-8.3.2-257589.tar.gz
#cd /home/VMWare-tools-distrib
#./VMWare-install.pl default
```


Una vez finalizada la instalación, el disco de herramientas se eliminará automáticamente del sistema.


## 
Una vez que ha montado el volumen validando la opción « Install/Upgrade VMware Tools », encuentra el disco en el « lugar de trabajo » de su MV. Haga doble clic en él para comenzar la instalación de Tools :

![](images/img_143.jpg){.thumbnail}
El asistente de instalación comenzará a pedir que acepte las licencias y el tipo de instalación a elegir (se recomienda la instalación completa).
Una vez finalizada la instalación se le pedirá reiniciar la máquina para aplicar los cambios.

