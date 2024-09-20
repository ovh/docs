---
title: "Cómo crear una instancia de Public Cloud y conectarse a ella"
excerpt: "Cómo configurar instancias de Public Cloud en el área de cliente de OVHcloud y cómo empezar a utilizar las instancias"
updated: 2024-08-22
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Las instancias de Public Cloud son fáciles de desplegar y gestionar. Sin embargo, como miembro del ecosistema Public Cloud de OVHcloud, las instancias ofrecen numerosas opciones de configuración y pueden adaptarse a diferentes casos de uso. Las siguientes instrucciones incluyen todos los pasos necesarios (y opcionales) para crear una instancia en el área de cliente de OVHcloud y acceder a ella de forma remota.
A continuación, podrá ir un paso más allá con su proyecto de Public Cloud en función de sus necesidades.

**Esta guía explica los primeros pasos con una instancia de Public Cloud.**

## Requisitos

- Un [proyecto Public Cloud](/links/public-cloud/public-cloud)  en su cuenta de OVHcloud
- Acceso al [área de cliente de OVHcloud](/links/manager)

## Procedimiento

> [!primary]
>
> Si todavía no ha creado ningún proyecto de Public Cloud, comience por nuestra [guía sobre la creación de un proyecto](/pages/public_cloud/compute/create_a_public_cloud_project).
>
> **Los detalles técnicos** importantes relativos al Public Cloud de OVHcloud están disponibles en [esta página](/pages/public_cloud/compute/00-essential-info-to-get-started-on-public-cloud).
>

### Presentación del contenido

- [**1** Creación de llaves SSH](#create-ssh)
- [**2** Importación de llaves SSH](#import-ssh)
- [**3** Preparación de la configuración de red](#network)
- [**4** Creación de la instancia](#create-instance)
    - [**4.1** Selección de un modelo de instancia](#model)
    - [**4.2** Selección de una región](#region)
    - [**4.3** Seleccionar imagen](#image)
    - [**4.4** Configuración de su instancia](#configuration)
    - [**4.5** Configurar su red](#network)
    - [**4.6** Seleccionar un período de facturació](#billing)
- [**5** Conexión a la instancia](#connect-instance)
    - [**5.1** Verificación de la instalación de la instancia en el área de cliente de OVHcloud](#verify-status)
    - [**5.2** Primera conexión en una instancia con un SO GNU/Linux instalado](#login-linux)
    - [**5.3** Instancias Windows](#windows)
        - [**5.3.1** Finalización de la instalación de una instancia Windows](#windows)
        - [**5.3.2** Conexión remota desde Windows](#login-windows)
        - [**5.3.3** Conexión remota desde otro SO](#login-other)
    - [**5.4** Acceso a la consola VNC](#vnc-console)
- [**6** Primeros pasos en una nueva instancia](#manage-access)
    - [**6.1** Gestión de usuarios](#user-mgmt)
        - [**6.1.1** Establecer una contraseña para la cuenta de usuario actual](#set-password)
        - [**6.1.2** Activación de conexiones remotas con contraseña](#remote-password)
    - [**6.2** Claves SSH adicionales](#add-keys)


> [!primary]
>
> **Debe proporcionar una llave SSH pública al crear instancias Public Cloud en su área de cliente.** Una vez creada la instancia, puede configurar el acceso remoto como desee.
>
> **Excepción**: la autenticación de inicio de sesión en instancias Windows requiere un nombre de usuario y una contraseña porque Windows utiliza RDP (**R**emote **D**esktop **P**rotocol).
>

<a name="create-ssh"></a>

### Paso 1: crear un conjunto de claves SSH

Si ya dispone de un par de llaves SSH listas para usar, puede omitir este paso.

El [protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permite una comunicación cliente-servidor encriptada. Un **par de claves SSH** se compone de una clave pública y una clave privada.

- La **clave pública** se añade a la instancia de Public Cloud (y también puede [almacenarse en el área de cliente de OVHcloud](#import-ssh)).
- La **clave privada** se almacena en su dispositivo local y debe estar protegida contra el acceso no autorizado. Solo los dispositivos cliente con la clave privada correspondiente pueden acceder a su instancia. No se requiere contraseña de cuenta de usuario para iniciar sesión.

Dispone de dos opciones para crear y gestionar sus llaves SSH:

- La interfaz de línea de comandos de su SO (simple cliente **Open SSH**).
- Software adicional (compatible con el protocolo **Open SSH**) con línea de comandos o interfaz gráfica.

La mayoría de los sistemas operativos de escritorio contemporáneos incluyen de forma nativa el cliente **Open SSH** accesible a través de la aplicación de línea de comandos del sistema (`cmd`, `Powershell`, `Terminal`, etc.). Si no está familiarizado con el uso de las claves SSH como método de autenticación, puede utilizar las instrucciones de [esta guía](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) para crear su par de claves.

Si utiliza otro software, consulte su documentación de usuario. Las instrucciones para la solución open source `PuTTY` están disponibles en [esta guía](/pages/public_cloud/compute/creating-ssh-keys-pci#useputty).

<a name="import-ssh"></a>

### Paso 2: Importar las llaves SSH

Puede almacenar sus llaves SSH públicas en la sección `Public Cloud`{.action} de su [área de cliente de OVHcloud](/links/manager). No es obligatorio, pero hace que el proceso de creación de instancias sea más práctico.

> [!primary]
>
> Las llaves SSH almacenadas le permiten crear sus instancias más rápidamente en su área de cliente. Para cambiar los pares de claves y añadir usuarios una vez creada la instancia, consulte la guía sobre [las claves SSH adicionales](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Las llaves SSH públicas añadidas al área de cliente de OVHcloud estarán disponibles para los servicios Public Cloud de todas las [regiones](/links/public-cloud/regions-pci). Puede almacenar claves cifradas con **RSA**, **ECDSA** y **ED25519**.
>

Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Abra `SSH Keys`{.action} en el menú de la izquierda debajo de **Project Management**. Haga clic en el botón Añadir una llave SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

En la nueva ventana, introduzca un nombre para la clave. Rellene el campo `Clave` con su cadena de clave pública, por ejemplo, la creada en el [paso 1](#create-ssh). Confirme haciendo clic en `Añadir`{.action}.

![add key](images/24-addkey.png){.thumbnail}

Ahora puede seleccionar esta clave en el [Paso 4](#create-instance) para añadirla a una nueva instancia.

<a name="network"></a>

### Paso 3: preparar la configuración de red

Antes de crear su instancia, le recomendamos que analice cómo se utilizará la instancia en términos de red.

- Si por el momento no necesita configurar la instancia con una red privada, puede pasar al [paso 4](#create-instance). Puede crear una instancia expuesta a internet (ver el **Modo público** [a continuación](#networking-modes).)
- Si la instancia debe estar conectada a una nueva red privada (OVHcloud [vRack](/links/network/vrack)), **cree su vRack** antes de continuar. Para más información, consulte la [guía sobre el vRack de Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-mode"></a>

/// details | Public Cloud Networking - Modos

**Public Mode**

Las instancias en modo público están expuestas a Internet directamente a través de IPv4/IPv6. Las direcciones IP no pueden modificarse, pero las instancias pueden tener direcciones [Additional IP](/links/network/additional-ip) asociadas ([incluida su propia IP](/links/network/byoip)) y pueden conectarse a un [vRack](/links/network/vrack).

**Private Mode**

Las instancias en modo privado solo pueden estar expuestas a internet a través de un servicio [Gateway](/links/public-cloud/gateway) o [Load Balancer](/links/public-cloud/load-balancer) y direcciones [Floating IP](/links/public-cloud/floating-ip).

Para más información, consulte nuestras guías en la sección [Public Cloud Network Services](/products/public-cloud-network). La [guía de conceptos](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) proporciona una introducción a Public Cloud Networking.

**Local Private Mode**

El modo privado local sólo se aplica si se crea una instancia en **Local Zone**. Las instancias pueden estar expuestas a Internet directamente a través de IPv4/IPv6. Sólo las instancias de la Local Zone pueden conectarse a través de redes privadas. Las Local Zones no son compatibles con el [vRack](/links/network/vrack). En este modo, DHCP proporciona automáticamente direcciones IP a sus instancias.

Para más información, consulte la [página web de las Local Zones](/links/public-cloud/local-zones).

///

<a name="create-instance"></a>

### Paso 4: crear la instancia

> [!primary]
>
> Se requiere una llave SSH pública al crear una instancia en el área de cliente de OVHcloud (excepto las instancias Windows).
>
> Consulte el [paso 1](#create-ssh) y el [paso 2](#import-ssh) de esta guía si no dispone de llaves SSH listas para usar.
>

Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

En la página **Inicio**, haga clic en `Crear una instancia`{.action}.

![instance creation](images/24-instance-creation01.png){.thumbnail}

<a name="model"></a>

#### Paso 4.1: Seleccione una plantilla

En la primera etapa, seleccione un modelo de instancia (también llamado «*flavour*») que defina los recursos de la instancia. Haga clic en la pestaña con el recurso clave para encontrar nuestros modelos de instancias optimizados.

![instance model](images/24-instance-creation02.png){.thumbnail}

En la sección `Discovery`{.action} de la guía, encontrará modelos de instancias con recursos compartidos a precios muy asequibles. Son ideales para probar el Public Cloud en general o una aplicación web, por ejemplo.

Los modelos de instancia de tipo `Metal`{.action} proporcionan recursos físicos dedicados.

> [!primary]
>
> El total de recursos de Public Cloud se limitará inicialmente por motivos de control de costes y seguridad. Puede comprobar estas cuotas haciendo clic en `Quota and Regions`{.action} en la barra de navegación de la izquierda debajo de **Project Management**. Consulte [la documentación dedicada](/pages/public_cloud/compute/increasing_public_cloud_quota) para obtener más información.
>
> Tenga en cuenta que puede **actualizar** su instancia una vez creada para tener más recursos disponibles. Sin embargo, no es posible cambiar a un modelo más pequeño con una instancia regular. Encontrará más información sobre este tema en el paso 4.4** a continuación.
>

#### Información adicional

/// details | Categorías de plantillas de instancias

| Tipo | Recursos garantizados | Notas de uso |
|:---         |     :---:      |          :--- |
| General Purpose   | ✓     | Servidores de desarrollo, aplicaciones web o empresariales    |
| Compute Optimized     | ✓       | Codificación de vídeo u otra computación de alto rendimiento      |
| Memory Optimized    | ✓     | Bases de datos, análisis y cálculos en memoria    |
| GPU     | ✓       | Potencia de procesamiento masivamente paralela para aplicaciones especializadas (renderizado, big data, deep learning, etc.)       |
| Discovery    | -       | Alojamiento en recursos compartidos para entornos de prueba y desarrollo      |
| Storage Optimized   | ✓     | Optimizado para la transferencia de datos en disco    |
| Metal | ✓ | Recursos dedicados con acceso directo a los recursos de cálculo, almacenamiento y red|

///

/// details | Regiones y Local Zones

**Regiones**

Una **región** se define como una ubicación en el mundo formada por uno o varios datacenters en los que están alojados los servicios de OVHcloud. Puede encontrar más información sobre las regiones, la distribución geográfica y la disponibilidad de los servicios en nuestra [página web dedicada]
(/links/public-cloud/regions-pci) y nuestra [página web sobre las localizaciones de las infraestructuras de OVHcloud](/links/infrareg).

**Local Zones**

Las Local Zones son una extensión de las **regiones** que acercan los servicios de OVHcloud a sitios específicos, ofreciendo una latencia reducida y un rendimiento mejorado para las aplicaciones. Puede encontrar más información en la [página web de Local Zones](/links/public-cloud/local-zones) y en la [documentación de capacidades de Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

<a name="region"></a>

#### Paso 4.2: Seleccione una localización

Seleccione la [región](/links/public-cloud/regions-pci) más cercana a sus usuarios o clientes. Esta opción puede estar limitada, dependiendo de la elección del modelo en el **paso 4.1**. Tenga en cuenta que si selecciona una **Local Zone** en este paso, se aplicarán limitaciones de red a la instancia (consulte [Paso 3](#networking-modes)).

Consulte también la información de la [página web de Local Zones](/links/public-cloud/local-zones) y la [documentación de capacidades de Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

![selección de región](images/24-instance-creation03.png){.thumbnail}

<a name="image"></a>

#### Paso 4.3: Seleccione una imagen

Haga clic en la pestaña que desee y seleccione un sistema operativo para su instancia en los menús desplegables.

![image selection](images/24-instance-creation04.png){.thumbnail}

Las imágenes disponibles en esta etapa dependen de las opciones elegidas en las etapas anteriores, es decir, de la compatibilidad con el modelo de instancia y de la disponibilidad regional. Por ejemplo, si desea seleccionar un sistema operativo Windows y no hay opciones en la ficha Windows, debe cambiar las opciones de los pasos anteriores.

> [!primary]
>
> Si elige un sistema operativo que requiera una licencia de pago, estos costes se incluirán automáticamente en la facturación del proyecto.
>

Este paso también requiere **añadir una llave SSH pública** (excepto las instancias Windows). Tiene 2 opciones:

- Utilizar una clave pública ya almacenada en el área de cliente de OVHcloud
- Introducir directamente una clave pública

Haga clic en las fichas siguientes para ver su presentación:

> [!tabs]
> **Utilizar una clave almacenada**
>>
>> Para añadir una clave almacenada en el área de cliente de OVHcloud (consulte [Paso 2](#import-ssh)), selecciónela en la lista.<br><br>
>>![key selection](images/24-instance-creation05.png){.thumbnail}<br>
>>
> **Introducir directamente una llav**
>>
>> Para añadir una clave pública pegando la cadena de clave, haga clic en el botón `Añadir una clave`{.action}.<br><br>
>>![key selection](images/24-instance-creation06.png){.thumbnail}<br>
>> Escriba un nombre para la clave y la cadena de clave en los campos respectivos. Haga clic en `Siguiente`{.action}.<br><br>
>>![key selection](images/24-instance-creation07.png){.thumbnail}<br>
>> Antes de hacer clic en `Siguiente`{.action}, puede utilizar el botón `Añadir una llave`{.action} para almacenar la llave en su área de cliente de OVHcloud (consulte el [paso 2](#import-ssh) para más información).
>>

<a name="configuration"></a>

#### Paso 4.4: Configure su instancia

![instance select](images/24-instance-creation08.png){.thumbnail}

Este paso ofrece varias opciones de configuración. Haga clic en las fichas siguientes para ver los detalles:

> [!tabs]
> **1: Número de instancias que quiere crear**
>>
>> Puede crear varias instancias en función de las selecciones realizadas durante las fases de creación, pero se aplicarán [los límites de cuota de recursos](/pages/public_cloud/compute/increasing_public_cloud_quota).<br>
>>
> **3: Nombre de la instancia**
>>
>> Si el modelo seleccionado es compatible, puede crear una **instancia de Flex**. Esta opción permite actualizar a un modelo más pequeño (e incluso cambiar a otra categoría de modelo), pero limita la instancia a **50 GB de almacenamiento fijo** incluido, independientemente de las demás actualizaciones o degradaciones.<br>
>>
> **3: Instance name**
>>
>> Introduzca un nombre completo para la instancia. El valor por defecto es la referencia comercial del modelo de instancia.<br>
>>
> **4: Script de post-instalación**
>>
>> Puede añadir [su script](/pages/public_cloud/compute/launching_script_when_creating_instance) a este campo.<br>
>>
> **5: Backup automático de instancias**
>>
>> Puede activar [las copias de seguridad automatizadas](/pages/public_cloud/compute/save_an_instance) seleccionando esta opción. Consulte la información sobre precios y otros detalles.
>>

<a name="network"></a>

#### Paso 4.5: Configure su red

En este paso, deberá aplicar el modo de red Public Cloud que haya decidido, en función de la información del [paso 3](#network) anterior. Las opciones dependen del [lugar anterior](#region) de la instancia (**Región** o **Local Zone**).

##### Regiones


> [!tabs]
>  **Modo privado**
>>
>> La instancia puede permanecer totalmente privada<br><br>
>>![network type](images/24-instance-creation09.png){.thumbnail}<br>
>> Puede conectar la instancia a una [red privada](#networking-modes) y una [Floating IP](/links/public-cloud/floating-ip). No se asociará ninguna dirección IP pública dedicada.<br><br>
>>![network type](images/24-instance-creation10.png){.thumbnail}<br>
>> Tenga en cuenta que si hace clic en `Crear una nueva red privada`{.action}, el proceso de creación de instancias se interrumpirá y deberá reiniciarse desde el principio.<br>
>>
> **Modo público**
>>
>> La instancia estará expuesta a internet directamente a través de IPv4/IPv6.<br><br>
>>![network type](images/24-instance-creation11.png){.thumbnail}<br>
>> También puede conectar la instancia a una [red privada](#networking-modes) (vRack) a través del menú desplegable.<br>
>> Tenga en cuenta que si hace clic en `Crear una nueva red privada`{.action}, el proceso de creación de instancias se interrumpirá y deberá reiniciarse desde el principio.
>>

Haga clic en `Siguiente`{.action} para ir al último paso.

##### Local Zones

Puede asociar la instancia a una red privada, hacerla pública o ambas cosas.

![network type](images/24-instance-creation12.png){.thumbnail}

> [!tabs]
> **Red Pública**
>>
>> Si selecciona la opción `Red pública`, la instancia se expondrá a Internet directamente a través de IPv4/IPv6.<br>
>> Además, puede conectar la instancia a una [red privada](#networking-modes) (no compatible con el vRack) si selecciona la opción Red privada local compatible con Local Zones (consulte la pestaña **Red privada local**).
>>
> **Red Privada Local**
>>
>> Marque la casilla de verificación `Red privada local compatible con Local Zones`. Si selecciona **esta opción sin seleccionar** `Red pública`, la instancia permanecerá totalmente privada, asociada a una [red privada](#networking-modes) (no compatible con el vRack). Seleccione una red existente de la lista a través de la opción `Asociar una red privada existente` o cree una nueva para la Local Zone eligiendo `Crear una red privada local` (sin interrumpir el proceso de creación de la instancia).<br><br>
>>![network type](images/24-instance-creation13.png){.thumbnail}
>> 

Haga clic en `Siguiente`{.action} para ir al último paso.

<a name="billing"></a>

#### Paso 4.6: Seleccione un período de facturación

![modo de facturación](images/24-instance-creation14.png){.thumbnail}

> [!primary]
>
> Tenga en cuenta que, según el modelo de instancia elegido, la única opción mostrada puede ser la facturación **por horas**. Se trata de una limitación temporal. Pronto estarán disponibles nuevas opciones de facturación de Public Cloud.
>

> [!tabs]
> **Facturación mensual**
>>
>> La facturación mensual conlleva una reducción de los costes a lo largo del tiempo, pero **no puede cambiarse a facturación por horas** una vez creada la instancia.<br>
>>
> **Facturación por horas**
>>
>> La facturación por horas es la mejor opción si no ha determinado claramente la duración del período de uso. Si decide conservar la instancia para su uso a largo plazo, podrá [cambiar a una suscripción mensual](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).<br>
>> La instancia se facturará mientras no se **elimine**, independientemente del uso real de la instancia.
>>

Para más información, consulte nuestra guía de facturación dedicada:

- [Facturación del Public Cloud](/pages/public_cloud/compute/analyze_billing)
- [FAQ sobre la facturación mensual](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Una vez que haya configurado su instancia, haga clic en el botón `Crear una instancia`{.action}. La entrega del servicio puede tardar unos minutos.

<a name="connect-instance"></a>

### Paso 5: Conectarse a la instancia

Las instrucciones de este apartado se refieren a las conexiones remotas mediante los protocolos **Open SSH** y **RDP** a través de una red pública (internet).

Tenga en cuenta que ofrecemos formas de acceso alternativas (principalmente utilizadas para la solución de problemas) que solo están disponibles a través de su área de cliente de OVHcloud:

- [Consola VNC](#vnc-console)
- [Modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Si ha instalado un **OS con aplicación**, consulte nuestra [guía Primeros pasos con las aplicaciones](/pages/public_cloud/compute/apps_first_steps) y la documentación oficial del editor del SO.
>

<a name="verify-status"></a>

#### 5.1: Comprobar el estado de la instancia en el área de cliente

Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente.

![área de cliente](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Seleccione `Instances`{.action} en la barra de navegación izquierda debajo de **Compute**. La instancia está lista cuando el estado se establece en `Activado` en la tabla. Si la instancia se ha creado recientemente y tiene un estado diferente, haga clic en el botón "Actualizar" situado junto al filtro de búsqueda.

![page instances](images/24-instance-connect01.png){.thumbnail}

Haga clic en el nombre de la instancia en este panel para abrir el `Dashboard`{.action}, donde puede encontrar toda la información relativa a la instancia. Para más información sobre las funciones disponibles en esta página, consulte nuestra guía sobre [la gestión de las instancias en el área de cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Se creará automáticamente un **usuario con derechos elevados (*sudo*)* en la instancia**. El nombre de usuario refleja la imagen instalada, por ejemplo "ubuntu", "debian", "fedora", etc. Puede comprobarlo en el lado derecho del `Dashboard`{.action} en la sección **Redes**.

![page instances](images/24-instance-connect02.png){.thumbnail}

Si su [par de llaves SSH está correctamente configurado](#create-ssh), puede conectarse a la instancia con el usuario preconfigurado y su llave SSH. En los siguientes párrafos encontrará instrucciones más detalladas.

> [!primary]
>
> El acceso a través de la **consola VNC** en una nueva instancia del sistema operativo GNU/Linux creada en el área de cliente debe activarse en primer lugar como se describe en la [sección de la guía a continuación](#vnc-console).
>
> Esta guía no cubre la red privada para las instancias. Para más información, consulte nuestra documentación [Public Cloud Network Services](/products/public-cloud-network).
>

<a name="login-linux"></a>

#### 5.2: Primera conexión a una instancia con sistema operativo GNU/Linux

> [!primary]
>
> Si recibe mensajes de error relativos a sus **llaves SSH**, compruebe que su dispositivo local dispone de una llave SSH privada correctamente configurada utilizando la información de [esta guía](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).</br>
> Si sigue teniendo problemas, puede reemplazar el par de claves con [esta guía](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Si ha creado una instancia sin llave SSH, a través de la [API de OVHcloud](/pages/manage_and_operate/api/first-steps) o de la [interfaz OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), solo podrá añadir una llave SSH a su instancia a través del [modo de rescate](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) siguiendo las instrucciones descritas en [esta guía](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

Puede acceder a su instancia inmediatamente después de su creación a través de la interfaz de línea de comandos de su estación de trabajo local (`Terminal`, `Command prompt`, `Powershell`, etc.) por SSH.

```bash
ssh username@IPv4_instance
```

Ejemplo:

```bash
ssh ubuntu@203.0.113.101
```

[En función de su configuración](#create-ssh), tendrá que escribir una frase de contraseña que proteja su clave privada o especificar la ruta de acceso a su archivo de clave. Para más información, consulte nuestra [guía de claves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys).

Si utiliza otro cliente SSH, consulte la documentación del usuario de SSH. Puede consultar un ejemplo de uso de la solución open source `PuTTY` en [esta guía](/pages/public_cloud/compute/creating-ssh-keys-pci#useputty).

Continúe en el [paso 6 a continuación](#manage-access).

<a name="windows"></a>

#### 5.3: Instancias Windows

##### 5.3.1: Finalizar la instalación de una instancia Windows

Una vez que haya comprobado que la instancia Windows está [instalada](#verify-status), abra la pestaña `Consola VNC`{.action} en su [área de cliente de OVHcloud](/links/manager).

A continuación, complete la configuración inicial del sistema operativo Windows. Siga los pasos que se indican a continuación en las fichas:

> [!tabs]
> 1. **Configuración regional**
>>
>> Configure su **país/región**, el **idioma preferido de Windows** y su **distribución de teclado**. Haga clic en el botón `Siguiente`{.action} situado en la esquina inferior derecha.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Contraseña de administrador**
>>
>> Establezca una contraseña para su cuenta Windows `Administrator` y confírmela, y haga clic en `Finalizar`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Pantalla de conexión**
>>
>> Windows aplicará la configuración y mostrará la pantalla de inicio de sesión. Haga clic en el botón `Send CtrlAltDel`{.action} en la esquina superior derecha para conectarse.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Usuario administrador**
>>
>> Introduzca la contraseña `Administrator` que creó en el paso anterior y haga clic en el botón `Arrow`.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

<a name="login-windows"></a>

##### 5.3.2: Conéctese de forma remota desde Windows

En su equipo Windows local, puede utilizar la aplicación cliente `Remote Desktop Connection` para conectarse a su instancia.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduzca la dirección IPv4 de su instancia, su identificador y su contraseña. Normalmente, aparece un mensaje de advertencia solicitándole que confirme la conexión debido a un certificado desconocido. Haga clic en `Sí`{.action} para conectarse.

> [!primary]
>
> Si tiene problemas con este procedimiento, compruebe que las conexiones remotas (RDP) están permitidas en su dispositivo comprobando la configuración del sistema, las reglas de firewall y las posibles restricciones de red.
>

<a name="login-other"></a>

##### 5.3.3: Conectarse a distancia desde otro SO

Las conexiones desde un sistema operativo de escritorio que no sea Windows suelen requerir un software cliente compatible con el Remote Desktop Protocol (RDP). Algunos entornos de sobremesa y sistemas operativos pueden tener un cliente nativo integrado.

Independientemente del cliente que utilice, solo necesita la dirección IP de su instancia y su contraseña para que la cuenta `Administrator` pueda conectarse.

**Ejemplo de uso**

El software libre y open source `Remmina Remote Desktop Client` está disponible para muchas distribuciones de escritorio GNU/Linux. Si no encuentra Remmina en el administrador de software de su entorno de escritorio, puede obtenerlo en el [sitio oficial](https://remmina.org/).

![linux remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Conexión**
>>
>> Abra Remmina y asegúrese de que el protocolo de conexión está establecido en "RDP". Introduzca la dirección IPv4 de su instancia Public Cloud y pulse `Enter`.<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Autenticación**
>>
>> Si aparece un mensaje de advertencia de certificado, haga clic en `Yes`{.action}. Escriba el nombre de usuario y la contraseña de Windows y haga clic en `OK`{.action} para conectarse.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Parámetros**
>>
>> Puede encontrar elementos útiles en la barra de herramientas de la izquierda. Por ejemplo, haga clic en el icono `Toggle dynamic resolution update`{.action} para mejorar la resolución de la ventana.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

<a name="vnc-console"></a>

#### 5.4: Acceso a la consola VNC

La consola VNC le permite conectarse a sus instancias incluso cuando otros medios de acceso no están disponibles.

Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente.

![área de cliente](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Seleccione `Instances`{.action} en la barra de navegación izquierda debajo de **Compute**. Haga clic en el nombre de la instancia y abra la pestaña `Consola VNC`{.action}.

![console vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}


> [!tabs]
> **Instancia con un SO GNU/Linux instalado**
>>
>> Es necesario configurar una cuenta de usuario **con contraseña** en la instancia para utilizar la consola VNC. Para establecer una contraseña para la cuenta preconfigurada, siga los pasos de [sección 6.1.1 a continuación](#set-password).
>>
> **Instancia Windows**
>>
>> Inicie sesión con sus credenciales de Windows. Si tiene una sesión activa, dispone de acceso inmediato. Habrá una latencia considerable con respecto a una conexión RDP.
>>

<a name="manage-access"></a>

### Paso 6: primeros pasos en una nueva instancia

> [!primary]
>
> **Instancias Windows**
>
> No es necesario realizar ningún paso adicional en las instancias que tengan instalado un sistema operativo Windows.
>
> Encontrará más información en la sección [Más información](#go-further) a continuación.
>

<a name="user-mgmt"></a>

#### 6.1: Gestión de usuarios

<a name="set-password"></a>

> [!primary]
>
> Al configurar las cuentas de usuario y los niveles de permisos en una instancia, le recomendamos que utilice la información de nuestra [guía de cuentas de usuario](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Establezca una contraseña para la cuenta de usuario actual

Al [conectarse a su instancia](#manage-access), establezca una contraseña para el usuario actual introduciendo este comando:

```bash
sudo passwd
```

Introduzca una frase de contraseña, confirme con `Enter` y repita.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**Es suficiente para activar los logins a través de la [consola VNC](#vnc-console) en su [área de cliente de OVHcloud](/links/manager)**. Sin embargo, las conexiones SSH remotas con esta contraseña están siempre **desactivadas** por defecto.

<a name="remote-password"></a>

#### 6.1.2: Activación de la conexión remota mediante contraseña (opcional)

> [!warning]
>
> Este paso no es necesario y solo debe realizarse si tiene una razón válida para activar este tipo de acceso; por ejemplo, si necesita conectarse temporalmente a la instancia desde un dispositivo en el que no esté almacenada su llave SSH privada.
>
> En el ejemplo siguiente se muestra una solución temporal en una instancia en la que está instalado Ubuntu. Tenga en cuenta que es posible que tenga que ajustar los comandos en función del sistema operativo. No se recomienda conservar esta configuración en todo momento, ya que añade un riesgo potencial de seguridad al abrir el sistema a ataques basados en SSH.
>

Una vez [conectado a su instancia](#manage-access), abra el archivo de configuración con un editor de texto. Ejemplo:

```bash
sudo nano /etc/ssh/sshd_config
```

Modifique la línea `#PasswordAuthentication yes` como sigue:

```console
PasswordAuthentication yes
```

Modifique la línea `Include /etc/ssh/sshd_config.d/*.conf` como sigue:

```console
#Include /etc/ssh/sshd_config.d/*.conf
```

Guarde el archivo y cierre el editor.

Reinicie el servicio SSH con uno de los siguientes comandos:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Ya puede conectarse por SSH con un nombre de usuario y una contraseña.

Cancele estos cambios para volver a la conexión de claves para la instancia.

<a name="add-keys"></a>

#### 6.2: Llaves SSH adicionales

Si desea autorizar a más cuentas de usuario a acceder a la instancia, el procedimiento estándar es el siguiente:

- Crear la cuenta en la instancia.
- Crear un nuevo par de llaves SSH en el dispositivo.
- Añadir la clave pública a la instancia.

Para más información, consulte nuestra [guía dedicada](/pages/public_cloud/compute/configuring_additional_ssh_keys).

<a name="go-further"></a>

## Más información

[Cómo activar una licencia Windows para una instancia en modo privado](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Cómo restablecer una contraseña de administrador de Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestión de instancias en el área de cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Cómo empezar con OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)

[Cómo empezar con Horizon](/pages/public_cloud/compute/introducing_horizon)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).
