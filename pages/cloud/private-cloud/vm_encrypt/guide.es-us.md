---
title: Activar el cifrado de máquinas virtuales (VM Encryption)
slug: vm-encrypt
excerpt: Esta guía explica cómo activar el cifrado de sus máquinas virtuales.
section: Funcionalidades de VMware vSphere
order: 08
---

**Última actualización: 01/07/2020**

## Objetivo

El servicio Hosted Private Cloud de OVHcloud permite gestionar el cifrado de las máquinas virtuales, utilizando una estrategia de almacenamiento por medio de un servicio de administración de claves (*Key Management Server* o KMS) externo.

**Esta guía explica cómo activar el cifrado de sus máquinas virtuales con VM Encryption.**

## Requisitos

- Tener contratado el servicio [Hosted Private Cloud](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/){.external}.
- Tener un servicio de administración de claves (KMS) externo compatible **[KMIP](https://en.wikipedia.org/wiki/Key_Management_Interoperability_Protocol_(KMIP)){.external} 1.1** dentro de la [matriz de compatibilidad](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=kms&details=1&feature=293&page=1&display_interval=500&sortColumn=Partner&sortOrder=Asc){.external} VMware.
- Estar conectado a la interfaz de gestión vSphere.
- Tener máquinas virtuales con una versión Hardware 13 (mínimo).

## Procedimiento

### Recuperar la huella del certificado del servicio de administración de claves (KMS)

En función de su KMS, podrá conectarse al servidor utilizando su navegador. Haga clic a continuación en `View Certificate`{.action}, y en `Thumbprint`{.action}

![huella del certificado](images/certificate_thumbprints_01.png){.thumbnail}

![huella del certificado](images/certificate_thumbprints_02.png){.thumbnail}

Obtenga el valor de la línea `SHA1 Fingerprint`.

Aquí tiene otro método con OpenSSL:

```shell
openssl s_client -connect 192.0.2.1:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
```

En este caso, es el valor que está a la derecha del símbolo de igual:


```shell
> SHA1 Fingerprint=7B:D9:46:BE:0C:1E:B0:27:CE:33:B5:2E:22:0F:00:84:F9:18:C6:61
```

### Registrar su servicio de administración de claves (KMS)

#### Desde el área de cliente de OVHcloud

En su área de cliente, sitúese en el apartado `Hosted Private Cloud` En la barra de servicios de la izquierda, haga clic en `Private Cloud` y seleccione el servicio Private Cloud correspondiente.

Una vez en la página principal del servicio, haga clic en `Seguridad`{.action}.

![Área de cliente de OVHcloud](images/vm-encrypt_nupanel_01.png){.thumbnail}

Un poco más abajo de la página verá el apartado « **Virtual Machine Encryption Key Management Servers** ». Haga clic en el botón `Añadir un nuevo servidor KMS`{.action}.

![server KMS](images/vm-encrypt_manager_03.png){.thumbnail}

Aparecerá una ventana nueva donde debe introducir los siguientes datos:

* Dirección IP del KMS;
* El SSLThumbprint del servidor KMS obtenido anteriormente.

Active la casilla para declarar que ha leído la documentación, y haga clic en `Siguiente`{.action}. 

![server KMS](images/vm-encrypt_manager_04.png){.thumbnail}

Aparecerá una ventana mostrando el progreso de la tarea.

#### Desde la API de OVHcloud

Las funciones de cifrado pueden activarse en la API de OVHcloud.

Para obtener su «serviceName», utilice la siguiente llamada a la API:

> [!api]
>
> @api {GET} /dedicatedCloud
>

Para comprobar que el cifrado aun no está activado, utilice esta llamada a la API:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/vmEncryption
>

```shell
>     "state": "disabled"
```


Registre el KMS a continuación:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/kms
>

Para realizar esta operación, compruebe que dispone de la siguiente información:

* el « serviceName » obtenido anteriormente;
* La dirección IP del KMS;
* El SSLThumbprint del servidor KMS obtenido anteriormente.

### Añadir el servicio de gestión de claves (KMS) al vCenter

#### Acerca de esta sección

**El Servidor vCenter crea un cluster KMS cuando se añade la primera instancia KMS.** 

- Cuando añade el KMS, se le solicita que defina este cluster por defecto. Se puede modificar posteriormente. 
- Una vez que el vCenter ha creado el primer cluster, se pueden añadir nuevas instancias KMS del mismo proveedor. 
- Se puede configurar el cluster con, como mínimo, una sola instancia KMS.
- Si su entorno utiliza soluciones KMS de diferentes proveedores, se pueden añadir varios cluster KMS. 
- Si su entorno tiene varios clusters KMS y se elimina el cluster por defecto, hay que definir como tal otro cluster. Vea «Definir el cluster KMS por defecto».

#### Procedimiento

Comience el proceso conectándose a su Private Cloud con el cliente web vSphere. Consulte la lista de inventario y seleccione el vCenter correspondiente. Diríjase a «Gestionar», y después a «Key Management Servers». Haga clic en `Añadir KMS`{.action}, complete los datos KMS en el asistente que aparece en pantalla y haga clic en `Ok`{.action}.
Acepte el certificado haciendo clic en `Trust`{.action}.

![procedimiento añadir clave KMS](images/vm-encrypt_01.png){.thumbnail}

Elija las siguientes opciones:

|Nombre de la opción|Descripción|
|---|---|
|« KMS cluster »|Seleccione «Crear nuevo cluster» para obtener uno nuevo. Si un cluster ya existe, puede seleccionarlo.|
|« Cluster name »|Nombre del cluster KMS. Puede que necesite ese nombre para conectarse al KMS si su vCenter no está disponible. El nombre del cluster es muy importante para ser único y guardar una nota de ese mismo elemento.|
|« Server alias »|Alias para el KMS. Puede que necesite este nombre para conectarse al KMS si su vCenter no está disponible.|
|« Server address »|Dirección IP o FQDN del KMS.|
|« Server port »|Puerto por el que el servidor vCenter se conecta con el KMS. El puerto estándar KMIP es 5696. Puede variar si el KMS de otro proveedor está configurado en un puerto específico.|
|« Proxy address »|Deje este campo vacío.|
|« Proxy port »|Deje este campo vacío.|
|« User name »|Algunos proveedores de KMS permiten que los usuarios aíslen las claves de cifrado utilizadas por diferentes usuarios o grupos especificando un nombre de usuario y una contraseña. Especifique un nombre de usuario solo si su KMS dispone de esta funcionalidad y si tiene intención de utilizarla.|
|« Password »|Algunos proveedores de KMS permiten que los usuarios aíslen las claves de cifrado utilizadas por diferentes usuarios o grupos especificando un nombre de usuario y una contraseña. Especifique una contraseña solo si su KMS dispone de esta funcionalidad y si tiene intención de utilizarla.|


#### Importar el certificado KMS

La mayoría de proveedores de KMS necesitan un certificado para [establecer una conexión segura](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.security.doc/GUID-0212CEF2-7871-4E00-ADF2-0C71401D5E1A.html){.external} con el vCenter.

Seleccione el servidor KMS en el vCenter en el que se ha añadido el mismo. En «Todas las opciones», haga clic en `Establecer un enlace de confianza con KMS`{.action}.

> [!warning]
>
> Compruebe que el certificado no está cifrado con una contraseña cuando lo descargue del KMS. Por ejemplo, si crea un usuario, hágalo sin contraseña y descargue el certificado para el usuario KMS.
> 

![importar certificado KMS](images/vm-encrypt_02.png){.thumbnail}

#### Compruebe que el KMS está configurado.

Compruebe que e l« **Connection Status** » correspondiente al KMS está en modo « Normal ».

![verificar estado conexión](images/vm-encrypt_03.png){.thumbnail}

#### Modifique la política de almacenamiento de « VM Encryption Storage »

Cree una máquina virtual. Una vez creada, haga clic derecho sobre ella. Haga clic en `VM Policies`{.action}, y en `Edit VM Storage Policies`{.action}.

![VM encryption storage](images/vm-encrypt_04.png){.thumbnail}

Seleccione los archivos de la máquina virtual y los demás discos duros que desea cifrar.

![VM encryption storage](images/vm-encrypt_05.png){.thumbnail}

Compruebe que las tareas se han realizado sin cometer ningún fallo.

> [!primary]
>
> Si el KMS no está correctamente configurado, y si hay fallos con el intercambio de llaves entre el vCenter y KMS, habrá un error «RuntimeFault»en la tarea que tiene el mensaje de error « Cannot generate key ».
>

#### vMotion cifrado

En vMotion, el cifrado funciona a nivel de máquina virtual. Para la sincronización, se utilizan claves de cifrado de 256 bits.

El cifrado del tráfico vMotion funciona a nivel de núcleo de la máquina virtual con el algoritmo AES-GCM (Advanced Encryption Standard- Galois Counter Mode) ampliamente utilizado.

Modifique su máquina virtual y haga clic `VM Options`{.action}

Debe seleccionar las opciones si su vMotion se va a cifrar. Hay 3 políticas para el vMotion cifrado:

|Estado|Descripción|
|---|---|
|Disabled|Apagado.|
|Opportunistic|Cifrado solo si se encargan el host de origen y el host destino ESXi. En el caso contrario, vMotion no será cifrado.|
|Required|Se utilizará el cifrado.|

![vMotion cifrado](images/vm-encrypt_06.png){.thumbnail}

El desplazamiento de las máquinas entre los hosts se realiza mediante el intercambio de llaves únicas, que vCenter genera y sirve , en vez de KMS.

#### Comprobación de la configuración

![comprobación de la configuración](images/vm-encrypt_07.png){.thumbnail}

![comprobación de la configuración](images/vm-encrypt_08.png){.thumbnail}

![comprobación de la configuración](images/vm-encrypt_09.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
