---
title: 'Desplegar una instancia GPU'
excerpt: 'Cómo desplegar una instancia GPU en Linux o Windows'
updated: 2026-04-07
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Las instancias GPU son técnicamente similares a las instancias de la gama 2017, pero disponen además de una tarjeta gráfica (Graphic Processing Unit o GPU). La tecnología utilizada (*pci_passthrough*) permite que el sistema operativo de la instancia controle la GPU exactamente igual que en una máquina física.

> [!warning]
>
> Actualmente, la mayoría de nuestras antiguas instancias GPU (Tesla V100 and V100s) solo están disponibles en las regiones GRA7, GRA9, GRA11 y BHS5. Por el momento, los modelos más recientes (A100, H100, L4 and L40s) sólo están disponibles en GRA11.
> 

**Esta guía explica cómo instrumentar una instancia de GPU en Linux o Windows**

## Requisitos

- Un proyecto Public Cloud con acceso a las regiones en las que están disponibles la mayoría de las GPU (GRA7, GRA9, GRA11 y BHS5).
- [Una clave SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) creada para desplegar una instancia GPU Linux.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ruta de navegación:** `Public Cloud`{.action} > Seleccione su proyecto

---
<!-- CP-NAV-END:publiccloud-projects -->

## Procedimiento

A continuación, encontrará la información necesaria para desplegar una instancia GPU en Linux o Windows.

En la página `Acceso rápido`{.action}, haga clic en `Crear una instancia`{.action}. A continuación, elija un modelo de instancia GPU compatible correspondiente a las instancias de tipo **Cloud GPU**, para beneficiarse de recursos adaptados a las cargas de trabajo gráficas o de cálculo intensivo.

Siga los pasos restantes como se detalla en [esta guía](/pages/public_cloud/compute/public-cloud-first-steps#create-instance). Este proceso puede tardar unos minutos.

> [!tabs]
> En Linux
>> Todas las imágenes que ofrecemos pueden utilizarse en una instancia GPU.
>>
>> En el paso de selección de imagen, abra la pestaña `Distribuciones Unix`{.action} y, a continuación, elija una imagen UNIX que se adapte a sus necesidades.
>>
>> > [!primary]
>> >
>> > Si no se siente a gusto con la compilación manual de un módulo kernel, le recomendamos usar una distribución con soporte oficial de Nvidia y para la que se proporcionen controladores *listos para usar*: <https://developer.nvidia.com/cuda-downloads>.
>> >
>>
>> Una vez entregada la instancia, puede conectarse a ella y comprobar la presencia de la tarjeta gráfica:
>>
>> ```bash
>> lspci | grep -i nvidia
>> 00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
>> 00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
>> ```
>>
>> La tarjeta gráfica está ahí, pero todavía no puede utilizarse. Para ello, primero debe instalar el controlador NVIDIA. Puede encontrar la lista de los paquetes en esta dirección: [Lista de paquetes Linux disponibles](https://developer.download.nvidia.com/compute/cuda/repos/).
>>
>> A continuación, deberá introducir los siguientes comandos:
>>
>> ```sh
>> wget URL_of_packet_to_download
>> sudo dpkg -i cuda-repo-XXXX-XXXXXX
>> sudo apt-get update
>> sudo apt-get upgrade
>> sudo apt-get install cuda
>> sudo apt-get install -y cuda-drivers
>> sudo apt-get install linux-headers-$(uname -r)
>> sudo reboot
>> ```
>>
>> > [!primary]
>> >
>> > El comando de Linux puede variar en función de su distribución. Si tiene dudas, consulte la guía oficial de su versión de Linux.
>> >
>>
>> Una vez reiniciada la instancia, la tarjeta gráfica aparecerá en la utilidad NVIDIA:
>>
>> ```sh
>> nvidia-smi
>> Wed Apr 26 13:05:25 2017
>> +-----------------------------------------------------------------------------+
>> | NVIDIA-SMI 375.51                 Driver Version: 375.51                    |
>> |-------------------------------+----------------------+----------------------+
>> | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
>> | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
>> |===============================+======================+======================|
>> |   0  GeForce GTX 106...  Off  | 0000:00:05.0     Off |                  N/A |
>> |  0%   22C    P0    26W / 120W |      0MiB /  6072MiB |      0%      Default |
>> +-------------------------------+----------------------+----------------------+
>>
>> +-----------------------------------------------------------------------------+
>> | Processes:                                                       GPU Memory |
>> |  GPU       PID  Type  Process name                               Usage      |
>> |=============================================================================|
>> |  No running processes found                                                 |
>> +-----------------------------------------------------------------------------+
>> ```
>>
>> La instancia GPU ya está completamente operativa y lista para usar.
>>
> En Windows
>> Existen incompatibilidades entre el controlador NVIDIA y la solución de virtualización *KVM/pci_passthrough*. **Las imágenes estándar de Windows no funcionan.**
>>
>> Proporcionamos imágenes especiales, basadas en una BIOS virtual **UEFI**, que permiten que el driver funcione correctamente.
>>
>> > [!warning]
>> >
>> > Ofrecemos la posibilidad de instalar imágenes especiales en algunos modelos seleccionados (T1-45, T1-90, T1-180, T2-45, T2-90, T2-180). Además, en función de la región seleccionada, es posible que estas imágenes especiales no estén disponibles.
>> >
>>
>> En el paso de selección de imagen, abra la pestaña `Distribuciones Windows`{.action} y, a continuación, seleccione una imagen Windows compatible con el modelo de instancia elegido.
>>
>> > [!warning]
>> >
>> > No podemos garantizar que la solución funcione con todas las versiones futuras del driver NVIDIA.
>> >
>> > Antes de actualizar el driver NVIDIA, le recomendamos encarecidamente que realice un snapshot de su instancia para poder revertir los cambios en caso necesario.
>> >
>>
>> **Conexión a una instancia Windows**
>>
>> Una vez creada su instancia, deberá completar la instalación de Windows (_sysprep_). Para ello, haga clic en el botón `...`{.action} y seleccione `Detalles de la instancia`{.action}. Acceda a la pestaña `Consola VNC`{.action}. La consola deberá mostrar la interfaz de post-instalación.
>>
>> En primer lugar, seleccione el país, el idioma y la distribución del teclado. A continuación, haga clic en `Siguiente`{.action}.
>>
>> En segundo lugar, deberá configurar la cuenta del administrador por defecto. Introduzca su contraseña dos veces y, a continuación, haga clic en `Finalizar`{.action} para completar el proceso de instalación. Puede utilizar el icono con forma de ojo para comprobar que los caracteres introducidos en el campo de la contraseña coinciden con la distribución de su teclado.
>>
>> La instancia se reiniciará y podrá conectarse utilizando estas credenciales desde un cliente de escritorio remoto.
>>
>> **En Windows**
>>
>> Si lo necesita, utilice el cuadro de búsqueda de Windows y abra la aplicación nativa «Conexión a Escritorio remoto».
>>
>> Indique la dirección IPv4 de su instancia y el usuario "Administrator" y, a continuación, introduzca su contraseña. Al tratarse de un certificado desconocido, es probable que aparezca un mensaje de aviso pidiéndole que confirme la conexión. Haga clic en `Sí`{.action} para conectarse a la instancia.
>>
>> > [!primary]
>> >
>> > Si tiene problemas para conectarse, compruebe que el dispositivo permite las conexiones remotas (RDP). Para ello, consulte la configuración de su sistema, las reglas de firewall y las posibles restricciones de red.
>> >
>>
>> Una vez conectado a su instancia, deberá instalar el controlador NVIDIA desde el [sitio web oficial](https://www.nvidia.com/Download/index.aspx).
>>
>> Tras la instalación, el controlador aparecerá en **Administrador de dispositivos > Adaptadores de pantalla**, lo que le permitirá verificar que la tarjeta GPU está correctamente reconocida y operativa. A continuación, podrá empezar a utilizar su instancia para las aplicaciones que requieran aceleración GPU.
>>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.