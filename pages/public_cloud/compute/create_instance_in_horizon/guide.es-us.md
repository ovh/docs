---
title: 'Crear una instancia en Horizon'
excerpt: 'Cómo crear una instancia desde el panel Horizon'
updated: 2024-09-05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Es posible crear instancias directamente en Horizon. Desde esta interfaz podrá, entre otras cosas, crear varias instancias simultáneamente y configurar un grupo de seguridad para sus instancias.

**Esta guía explica cómo crear una instancia en Horizon.**

## Requisitos

- Tener un proyecto de [Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) en su cuenta de OVHcloud.
- [Estar conectado a Horizon](/pages/public_cloud/compute/introducing_horizon). 

## Procedimiento

### Crear una red privada

Por lo general, le recomendamos que cree una red privada antes de crear una instancia. Más adelante podrá asociar esta red a su instancia.

En primer lugar, conéctese a Horizon. Si necesita ayuda, consulte nuestra [guía](/pages/public_cloud/compute/introducing_horizon).

A continuación, haga clic en `Network`{.action} en la columna izquierda y seleccione `Networks`{.action}.

![network](images/create-network.png){.thumbnail}

Haga clic en `Create Network`{.action}

![network](images/create-network-1.png){.thumbnail}

> [!tabs]
> 1. **Network**
>>
>> **Network Name:** Introduzca un nombre para la red.<br>
>> **Enable Admin State:** Deje esta opción marcada para activar la red.<br>
>> **Create Subnet:** Deje esta opción marcada para crear la subred.<br>
>> **Availability Zone Hints:** Deje la opción por defecto.<br><br>
>>![network](images/network_information.png){.thumbnail}<br>
>>
> 2. **Subnet**
>>
>> **Subnet Name:** Introduzca un nombre para su subred.<br>
>> **Network Address:** Seleccione un rango de red privada. Por ejemplo, `192.168.0.0/24`.<br>
>> **IP Version:** Deje este valor a IPv4.<br>
>> **Gateway IP:** Opcional. Si no se define, se seleccionará automáticamente una dirección Gateway IP.<br>
>> **Disable Gateway:** Deje esta opción desactivada.<br><br>
>>![subnet](images/subnet_information.png){.thumbnail}<br>
>>
> 3. **Subnet Details**
>>
>> **Enable DHCP:** Deje esta opción activada.<br>
>> **Allocation Pools:** Opcional. Puede especificar el intervalo en el que se seleccionan las direcciones IP.<br>
>> **DNS Name Servers:** Opcional. Puede especificar cualquier servidor de nombres DNS.<br>
>> **Host Routes:** Opcional. Puede especificar cualquier ruta de host.<br><br>
>>![KVM](images/subnetdetails_information.png){.thumbnail}<br>
>>

### Crear una instancia

En la interfaz Horizon, haga clic en `Compute`{.action} en el menú de la izquierda y seleccione `Instances`{.action}.

![Crear una instancia](images/create-instance-step1.png){.thumbnail}

En la nueva página podrá consultar las instancias lanzadas actualmente. Para iniciar una nueva instancia, haga clic en el botón `Launch Instance`{.action}.

![Crear una instancia](images/create-instance-step2.png){.thumbnail}

Introduzca la información solicitada. Si necesita ayuda para completar los distintos campos, consulte la siguiente tabla (la lista no es exhaustiva):

**Details**

![createinstance](images/create-instance-step3.png){.thumbnail}

|Información|Detalles|
|---|---|
|Instance name|Especifique el nombre deseado para la instancia que se iniciará.|
|Description|Opcional. Agregue una descripción si es necesario.|
|Availability zone|Deje "nova" (opción predeterminada).|
|Count|Especifique el número de instancias que desea crear.|


**Source**

![createinstance](images/create-instance-step4.png){.thumbnail}

|Información|Detalles|
|---|---|
|Boot Source|Haga clic en la flecha desplegable para seleccionar el origen de inicio de una instancia (por ejemplo, "Image" o "Instance snapshot* (Instantánea de instancia)").|
|Create New Volume|Puede marcar esta opción si desea crear un volumen en el que se copie la imagen de sistema operativo especificada.|
|Volumen size (GB)|Si ha elegido crear un volumen, deje que el sistema determine el tamaño por usted.|
|Delete Volume on Instance Delete|Puede conservar la opción por defecto **No**. Si se selecciona **Yes**, al eliminar la instancia también se eliminará el volumen.|
|Image name|Seleccione la imagen de la instancia (solo en el caso de un arranque desde una imagen) haciendo clic en la flecha arriba situada junto a la imagen que desee. En nuestro ejemplo, utilizamos una selección de CentOS 7.|
|Instance snapshot|Elija una instantánea de una instancia (solo en caso de haber iniciado un snapshot) haciendo clic en la flecha arriba situada junto a la imagen de instantánea de instancia que desee.|


**Flavor**

![createinstance](images/create-instance-step5.png){.thumbnail}

*flavors* pre-construidos están disponibles para usted, seleccione el *flavor* de su elección en la pestaña `Available`.

**Networks*

![createinstance](images/create-instance-step6.png){.thumbnail}

|Información|Detalles|
|---|---|
|Network|Seleccione la(s) red(s) de la lista de redes disponibles para la Instancia que desea crear |
|Ext-Net|Representa la red pública.|
|Mynewnetwork|Representa la red privada creada al principio de esta guía.|

**Security Groups (grupos de seguridad)**

![createinstance](images/create-instance-step7.png){.thumbnail}

Para obtener más información, consulte [esta guía](/pages/public_cloud/compute/setup_security_group).


**Key Pairs (par de claves)**

> [!warning]
> 
> Aunque el campo "Key Pair" no es obligatorio en la interfaz Horizon al crear una instancia, es absolutamente necesario registrar una llave SSH para poder conectarse a una instancia. Sin una llave SSH, deberá reiniciar la instancia en modo de rescate para poder crear una contraseña o añadir una llave SSH al archivo correspondiente (para más información, consulte la guía [Modificar su llave SSH en caso de pérdida](/pages/public_cloud/compute/replacing_lost_ssh_key#procedimiento)).
>

![createinstance](images/create-instance-step8.png){.thumbnail}

En esta sección, puede crear un par de claves, importar un par de claves o utilizar un par de claves existente.

Para más información sobre la creación de una llave SSH, consulte [esta guía](/pages/public_cloud/compute/public-cloud-first-steps#create-ssh).


> [!tabs]
> **+ Create Key Pair**
>>
>> Para crear un par de claves, haga clic en el botón `+ Create Key Pair`{.action}. Tenga en cuenta que, con esta opción, deberá realizar pasos adicionales antes de poder conectarse a la instancia, sobre todo si utiliza el programa PuTTY para conectarse a su instancia. Consulte [esta sección](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) en la guía correspondiente.
>>
>> **Key Pair Name:** Introduzca un nombre para su clave.<br>
>> **Key Type:** Haga clic en la `flecha desplegable`{.action} y seleccione `SSH Key`{.action}.<br>
>> A continuación, haga clic en `Create Keypair`{.action} para empezar a crear la clave.<br>
>>
>> Una vez creado el par de claves, haga clic en `Copy Private Key to Clipboard`{.action} y luego en `Done`{.action}.<br><br>
>>![create ssh key](images/create-ssh-key-1.png){.thumbnail}<br>
>>
>> Una vez hecho esto, la clave recién creada se seleccionará automáticamente. Haga clic en `Launch Instance`{.action} para empezar a crear su instancia.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>
>>
> **Import Key Pair (Importar par de claves)**
>>
>> Si prefiere importar una llave SSH creada anteriormente, haga clic en el botón `Import Key Pair`{.action}.
>>
>> **Key Pair Name:** Introduzca un nombre para su clave.<br>
>> **Key Type (Tipo de clave):** Haga clic en la `flecha desplegable`{.action} y seleccione `SSH Key`{.action}.<br>
>> **Load Public Key from a file (Cargar la clave pública desde un archivo):** Haga clic en `Browse`{.action} para especificar la ubicación de la clave pública en su ordenador.<br>
>> **Public Key:** Copie y pegue su clave pública aquí.<br>
>> Haga clic en `Import Key Pair`{.action} para importar la clave.<br><br>
>>![import key pair](images/import-ssh-key.png){.thumbnail}<br>
>>
>> Una vez completada la operación, la clave importada se seleccionará automáticamente. Haga clic en `Launch Instance`{.action} para empezar a crear su instancia.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>

**Otras opciones**

Atención: Estas opciones no son obligatorias para la creación de una instancia base. Para más información sobre estas opciones, consulte la [documentación oficial de OpenStack](https://docs.openstack.org/horizon/latest/user/launch-instances.html){.external}.

|Información|Detalles|
|---|---|
|Custom script de origen|Especifique el origen entre "direct entry" o "file".|
|Script data|Escriba el código de script en el campo de entrada (máximo 16 KB).|
|Script file|Haga clic en `Browse`{.action} para seleccionar el script de post-instalación.|
|Disk partitioning|Elija entre "automatic" o "manual".|
|Configuration disk|Configure OpenStack para escribir metadatos en un disco de configuración específico que se asociará a la instancia de inicio.|

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.