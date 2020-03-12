---
title: 'Desplegar una instancia GPU'
slug: desplegar-una-instancia-gpu
excerpt: 'Cómo desplegar una instancia GPU en Linux o Windows'
section: 'Gestión de las instancias desde el área de cliente'
---

**Última actualización: 6/12/2019**

## Objetivo

Las instancias de GPU son técnicamente similares a las instancias de la gama de 2017, pero también cuentan con una tarjeta gráfica (unidad de procesamiento gráfico o GPU). La tecnología usada (*pci_passthrough*) permite que el sistema operativo de la instancia controle la GPU de la misma forma en la que lo haría una máquina física.

Las GPU que se ofrecen son las NVIDIA Tesla V100. 

> [!warning]
>
> Actualmente, las instancias de GPU solo están disponibles en los centros de datos GRA3, GRA5, GRA7 y BHS3. Puede que tenga que crear un nuevo proyecto y elegir la nueva gama de 2017. [Más información.](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/)
> 

**Esta guía explica cómo instrumentar una instancia de GPU en Linux o Windows**

## Requisitos

- Un proyecto de Public Cloud con acceso a las regiones en las que las GPU están disponibles (GRA3, GRA5, GRA7 y BHS3)

## Procedimiento

A continuación, encontrará la información necesaria para instrumentar una instancia de GPU en Linux o Windows.
Tenga en cuenta que no puede cambiar el sistema operativo de la instancia de Linux a Windows, o viceversa. Por tanto, asegúrese de crear la instancia con el sistema operativo correcto por defecto.


### En Linux

Todas las imágenes que ofrecemos pueden utilizarse en una instancia de GPU.

> [!primary]
>
> Si no se siente a gusto con la compilación manual de un módulo kernel, le recomendamos usar una distribución con soporte oficial de Nvidia y para la que se proporcionen controladores *listos para usar*: <https://developer.nvidia.com/cuda-downloads>.
> 

Una vez iniciada sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en su proyecto de Public Cloud en el panel de control, haga clic en `«Crear una instancia»`{.action}y elija una instancia de GPU:

![public-cloud](images/gpu.png){.thumbnail}

A continuación, seleccione el sistema operativo Linux de su elección:

![public-cloud](images/linuxchoice.png){.thumbnail}

La instancia se iniciará unos segundos más tarde. A continuación, puede iniciar sesión y buscar la tarjeta gráfica: 

```ssh
lspci | grep -i nvidia
00:05.0 3D controller: NVIDIA Corporation GV100GL [Tesla V100 PCIe 16GB] (rev a1)
```

La tarjeta gráfica está ahí, pero todavía no puede utilizarse. Para ello, primero debe instalar el controlador NVIDIA. Puede encontrar la lista de los paquetes en esta dirección: [Lista de paquetes Linux disponibles](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

A continuación, deberá introducir los siguientes comandos:

```sh
wget URL_of_packet_to_download
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> El comando de Linux puede variar en función de su distribución. Si tiene dudas, consulte la guía oficial de su versión de Linux.
> 


Cuando su instancia se haya reiniciado, la tarjeta gráfica aparecerá en el programa de utilidades de NVIDIA:

```sh
nvidia-smi
Fri Dec  6 12:32:25 2019       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.67       Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Tesla V100-PCIE...  On   | 00000000:00:05.0 Off |                    0 |
| N/A   26C    P0    35W / 250W |      0MiB / 16130MiB |      5%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

A partir de ahí, la instancia de GPU estará completamente funcional y podrá utilizarse.


### En Windows

Existen incompatibilidades entre el controlador NVIDIA y la solución de virtualización *KVM/pci_passthrough*. **Las imágenes estándar de Windows no funcionan.**
Por ello, ofrecemos imágenes especiales, basadas en una BIOS UEFI virtual que permite que el controlador funcione correctamente (solo en el caso de instancias de G1, G2 y G3, gama 2017 y anteriores).

Una vez iniciada sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en su proyecto de Public Cloud en el panel de control, haga clic en `«Crear una instancia»`{.action} y elija una instancia de GPU:

![public-cloud](images/gpu.png){.thumbnail}

A continuación, seleccione el Windows de su elección: 

![public-cloud](images/oschoice.png){.thumbnail}

Cuando se haya iniciado su instancia de GPU, deberá instalar el controlador NVIDIA desde el [sitio web oficial](https://www.nvidia.com/Download/index.aspx){.external}.

Inicie una instancia usando uno de los tipos de GPU disponibles (t1-45, t1-90, t1-180, etc.). Solo debería tardar unos minutos.

Después, todo lo que falta por hacer es instalar el controlador necesario, el cual se mostrará aquí:

![public-cloud](images/driverson.png){.thumbnail}

![public-cloud](images/devicemanager.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.