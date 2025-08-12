---
title: Importe su propia imagen
excerpt: Cómo importar su propia imagen en Public Cloud
updated: 2020-10-27
---

## Objetivo

OVHcloud ofrece a los clientes de Public Cloud imágenes listas para usar, pero también la posibilidad de utilizar sus propias imágenes.

**Esta guía explica cómo importar sus propias imágenes en un proyecto de Public Cloud.**

## Requisitos

- una [instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) desde el área de cliente de OVHcloud
- su propia imagen RAW/QCOW2 (formatos recomendados) 
- un usuario de [OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) 
- un entorno [OpenStack CLI ready](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) (si utiliza CLI)

## Procedimiento

### Antes de empezar

Es recomendable utilizar imágenes cloud compatibles proporcionadas por el distribuidor o crear su propia imagen utilizando soluciones como [Packer OpenStack builder](/pages/public_cloud/compute/create_image_from_existing_image_with_packer).

Las imágenes cloud compatibles están disponibles aquí:

- <https://cloud.centos.org/centos/>
- <https://cloud.debian.org/images/cloud/>
- <https://cloud-images.ubuntu.com/releases/>
- <https://alt.fedoraproject.org/cloud/>

Otros sistemas operativos también ofrecen imágenes ISO, que también se aplican al [crear imágenes con Packer](https://www.packer.io/docs/builders), como QEMU y VirtualBox.

Asegúrese de que las imágenes tengan los siguientes elementos para que puedan integrarse en el entorno cloud:

- *QEMU Guest Agent*: esta operación permite disfrutar de una mejor experiencia de backup, ya que permite al host comunicarse con la instancia para realizar copias de seguridad en directo. No todos los sistemas operativos son compatibles con este paquete.
- *cloud-init*: para poder iniciar su instancia la primera vez que inicie, añadiendo llaves SSH y configurando la red. La mayoría de los sistemas operativos son compatibles con esta funcionalidad.

Le recomendamos que utilice imágenes en formato RAW o QCOW2. Optimice el tamaño de la imagen para que sea lo más pequeño posible para reducir el coste de la facturación mensual y reducir el tiempo de generación de las instancias.

### Importar la imagen

Con OpenStack hay dos formas de importar su propia imagen. Puede hacerlo desde la interfaz de línea de comandos OpenStack o desde [la interfaz Horizon](https://horizon.cloud.ovh.net/auth/login/).

#### En línea de comandos de OpenStack

Una vez que la imagen esté lista, siga los pasos que se indican a continuación para importar utilizando la CLI OpenStack:

1\. Descargue su archivo openrc.sh para su usuario OpenStack desde el área de cliente de OVHcloud (seleccione la región en la que quiere realizar la descarga).

![openrc](images/open_rc_download.png){.thumbnail}

2\. Cargue el archivo openrc:

```sh
source openrc.sh
```

3\. Una vez cargado el archivo, deberá introducir la contraseña del usuario de OpenStack.

4\. Ahora puede importar su imagen. El siguiente ejemplo de comando realiza las siguientes operaciones:

- El formato de disco es "RAW"
- Descargar una imagen de la ruta actual llamada "debian9.raw"
- Llama a la imagen "Debian 9 - Mi imagen".
- Establece la imagen en estado privado
- Define las propiedades recomendadas. Una configuración óptima permite utilizar funcionalidades como *snapshot* live y *cloud-init* (es necesario utilizar el nombre de usuario).

```sh
openstack image create --disk-format raw --container-format bare --file debian9.raw "Debian 9 - My Image" --private --property distribution=debian --property hw_disk_bus=scsi --property hw_scsi_model=virtio-scsi --property hw_qemu_guest_agent=yes --property image_original_user=debian
```

#### Horizon

Una vez que la imagen esté lista para ser importada, siga los pasos que se indican a continuación para importarla desde la interfaz web de OpenStack Horizon:

1\. Conéctese a [Horizon](https://horizon.cloud.ovh.net/auth/login/).

2\. Seleccione arriba a la izquierda la región en la que quiera descargar la imagen.

![horizon_1](images/horizon_1.png){.thumbnail}

3\. Acceda a la sección `Images` y haga clic en `Create Image`{.action}.

![horizon_2](images/horizon_2.png){.thumbnail}

4\. Introduzca los detalles de su imagen y seleccione el archivo desde su ordenador.

![horizon_3](images/horizon_3.png){.thumbnail}

5\. Introduzca los metadatos de la instancia (también puede introducir los metadatos personalizados que desee) y haga clic en `Create Image`{.action}.

![horizon_4](images/horizon_4.png){.thumbnail}

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
