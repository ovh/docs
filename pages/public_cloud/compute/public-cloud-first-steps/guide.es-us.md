---
title: "Cómo crear una instancia de Public Cloud y conectarse a ella"
excerpt: "Descubra cómo configurar instancias de Public Cloud en el área de cliente de OVHcloud y los primeros pasos con sus instancias"
updated: 2026-02-24
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

## Objetivo

Las instancias de Public Cloud son fáciles de desplegar y gestionar. Sin embargo, como miembro del ecosistema Public Cloud de OVHcloud, las instancias ofrecen numerosas opciones de configuración y pueden adaptarse a diferentes casos de uso. Las siguientes instrucciones incluyen todos los pasos necesarios (y también los pasos opcionales) para crear una instancia en el área de cliente de OVHcloud y acceder a ella de forma remota.
A continuación, podrá ir más allá con su proyecto de Public Cloud en función de sus necesidades.

**Esta guía explica los primeros pasos con una instancia de Public Cloud.**


## Requisitos

- Un [proyecto Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ruta de navegación:** `Public Cloud`{.action} > Seleccione su proyecto

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!success]
> Benefíciese de precios reducidos comprometiéndose por un periodo de 1 a 36 meses en sus recursos de Public Cloud. Más información en nuestra página [Savings Plans](/links/public-cloud/savings-plan).

## Procedimiento

> [!primary]
>
> Si todavía no ha creado ningún proyecto de Public Cloud, comience por nuestra [guía sobre la creación de un proyecto](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
>
> **Los detalles técnicos** importantes relativos al Public Cloud de OVHcloud están disponibles en [esta página](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud).
>

### Presentación del contenido

- [Objetivo](#objetivo)
- [Requisitos](#requisitos)
- [Procedimiento](#procedimiento)
  - [Presentación del contenido](#presentacion-del-contenido)
  - [Paso 1: crear un juego de claves SSH](#paso-1-crear-un-juego-de-claves-ssh)
  - [Paso 2: Importar las claves SSH](#paso-2-importar-las-claves-ssh)
  - [Paso 3: preparar la configuración de red](#paso-3-preparar-la-configuracion-de-red)
  - [Paso 4: crear la instancia](#paso-4-crear-la-instancia)
    - [Paso 4.1: Nombre de la instancia](#paso-41-nombre-de-la-instancia)
    - [Paso 4.2: Seleccione una localización](#paso-42-seleccione-una-localizacion)
    - [Paso 4.3: Seleccione un modelo](#paso-43-seleccione-un-modelo)
      - [Información adicional](#informacion-adicional)
    - [Paso 4.4: Seleccione una imagen](#paso-44-seleccione-una-imagen)
    - [Paso 4.5: Seleccione una clave SSH (no aplicable a las instancias Windows)](#paso-45-seleccione-una-clave-ssh-no-aplicable-a-las-instancias-windows)
    - [Paso 4.6: Configure los parámetros de backup](#paso-46-configure-los-parametros-de-backup)
    - [Paso 4.7: Configure la red](#paso-47-configure-la-red)
    - [Paso 4.8: Seleccione un período de facturación](#paso-48-seleccione-un-periodo-de-facturacion)
    - [Paso 4.9: Configure los parámetros avanzados](#paso-49-configure-los-parametros-avanzados)
      - [Instancia flexible](#instancia-flexible)
      - [Script de post-instalación](#script-de-post-instalacion)
    - [Paso 4.10: Finalización de la instancia](#paso-410-finalizacion-de-la-instancia)
  - [Paso 5: Conectarse a la instancia](#paso-5-conectarse-a-la-instancia)
    - [5.1: Verificar el estado de la instancia en el área de cliente](#51-verificar-el-estado-de-la-instancia-en-el-area-de-cliente)
    - [5.2: Primera conexión a una instancia con sistema operativo GNU/Linux](#52-primera-conexion-a-una-instancia-con-sistema-operativo-gnulinux)
    - [5.3: Instancias Windows](#53-instancias-windows)
      - [5.3.1: Finalizar la instalación de una instancia Windows](#531-finalizar-la-instalacion-de-una-instancia-windows)
      - [5.3.2: Conéctese de forma remota desde Windows](#532-conectese-de-forma-remota-desde-windows)
      - [5.3.3: Conectarse de forma remota desde otro SO](#533-conectarse-de-forma-remota-desde-otro-so)
    - [5.4: Acceso a la consola VNC](#54-acceso-a-la-consola-vnc)
  - [Paso 6: primeros pasos en una nueva instancia](#paso-6-primeros-pasos-en-una-nueva-instancia)
    - [6.1: Gestión de usuarios](#61-gestion-de-usuarios)
      - [6.1.1: Establezca una contraseña para la cuenta de usuario actual](#611-establezca-una-contrasena-para-la-cuenta-de-usuario-actual)
      - [6.1.2: Activación de la conexión remota mediante contraseña (opcional)](#612-activacion-de-la-conexion-remota-mediante-contrasena-opcional)
    - [6.2: Claves SSH adicionales](#62-claves-ssh-adicionales)
- [Más información](#mas-informacion)

> [!primary]
>
> **Debe proporcionar una clave SSH pública al crear instancias de Public Cloud en el área de cliente.** Una vez creada la instancia, puede configurar el acceso remoto como desee.
>
> **Excepción**: la autenticación de inicio de sesión en instancias Windows requiere un nombre de usuario y una contraseña porque Windows utiliza RDP (**R**emote **D**esktop **P**rotocol).
>

### Paso 1: crear un juego de claves SSH

Si ya dispone de un par de claves SSH listo para usar, puede omitir este paso.

El [protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permite una comunicación cliente-servidor cifrada. Un **par de claves SSH** se compone de una clave pública y una clave privada.

- La **clave pública** se añade a la instancia de Public Cloud (y también puede [almacenarse en el área de cliente de OVHcloud](#paso-2-importar-las-claves-ssh)).
- La **clave privada** se almacena en su dispositivo local y debe estar protegida contra el acceso no autorizado. Solo los dispositivos cliente con la clave privada correspondiente pueden acceder a su instancia. No se requiere contraseña de cuenta de usuario para iniciar sesión.

Dispone de dos opciones para crear y gestionar sus claves SSH:

- La interfaz de línea de comandos de su SO (simple cliente **OpenSSH**).
- Software adicional (compatible con el protocolo **OpenSSH**) con línea de comandos o interfaz gráfica.

La mayoría de los sistemas operativos de escritorio contemporáneos incluyen de forma nativa el cliente **OpenSSH** accesible a través de la aplicación de línea de comandos del sistema (`cmd`, `Powershell`, `Terminal`, etc.). Si no está familiarizado con el uso de las claves SSH como método de autenticación, puede utilizar las instrucciones de [esta guía](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) para crear su par de claves.

Si utiliza otro software, consulte su documentación de usuario. Las instrucciones para la solución open source `PuTTY` están disponibles en [esta guía](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

### Paso 2: Importar las claves SSH

Puede almacenar sus claves SSH públicas en la sección `Public Cloud`{.action} de su [área de cliente de OVHcloud](/links/manager). No es obligatorio, pero hace que el proceso de creación de instancias sea más práctico.

> [!primary]
>
> Las claves SSH almacenadas le permiten crear sus instancias más rápidamente en el área de cliente. Para cambiar los pares de claves y añadir usuarios una vez creada la instancia, consulte la guía sobre [las claves SSH adicionales](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Las claves SSH públicas añadidas al área de cliente de OVHcloud estarán disponibles para los servicios Public Cloud de todas las [regiones](/links/public-cloud/regions-pci). Puede almacenar claves cifradas con **RSA**, **ECDSA** y **ED25519**.
>

Abra `Claves SSH`{.action} en el menú de la izquierda en **Parámetros**. Haga clic en el botón `Añadir una clave SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

En la nueva ventana, introduzca un nombre para la clave. Rellene el campo `Clave` con su cadena de clave pública, por ejemplo, la creada en el [paso 1](#paso-1-crear-un-juego-de-claves-ssh). Confirme haciendo clic en `Añadir`{.action}.

![add key](images/24-addkey.png){.thumbnail}

Ahora puede seleccionar esta clave en el [Paso 4](#paso-4-crear-la-instancia) para añadirla a una nueva instancia.

### Paso 3: preparar la configuración de red

Antes de crear su instancia, le recomendamos que analice cómo se utilizará la instancia en términos de red.

- Si por el momento no necesita configurar la instancia con una red privada, puede pasar al [paso 4](#paso-4-crear-la-instancia). Puede crear una instancia expuesta a Internet (ver el **Modo Público** [a continuación](#networking-modes).)
- Si la instancia debe estar conectada a una nueva red privada (OVHcloud [vRack](/links/network/vrack)), tenga en cuenta que el vRack se crea automáticamente durante la creación de su proyecto Public Cloud. Por lo tanto, no es necesaria ninguna acción previa. Para más información, consulte la [guía sobre el vRack de Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modos

**Modo Público**

Las instancias en modo público están expuestas a Internet directamente a través de IPv4/IPv6. Las direcciones IP no pueden modificarse, pero las instancias pueden tener direcciones [Additional IP](/links/network/additional-ip) asociadas ([incluida su propia IP](/links/network/byoip)) y pueden conectarse a un [vRack](/links/network/vrack).

**Modo Privado**

Las instancias en modo privado solo pueden estar expuestas a Internet a través de un servicio [Gateway](/links/public-cloud/gateway) o [Load Balancer](/links/public-cloud/load-balancer) y direcciones [Floating IP](/links/public-cloud/floating-ip).

Para más información, consulte nuestras guías en la sección [Public Cloud Network Services](/products/public-cloud-network). La [guía de conceptos](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) proporciona una introducción a Public Cloud Networking.

**Modo Privado Local**

El modo privado local solo se aplica si se crea una instancia en una **Local Zone**. Las instancias pueden estar expuestas a Internet directamente a través de IPv4/IPv6. Solo las instancias de una misma Local Zone pueden conectarse a través de redes privadas. Las Local Zones no son compatibles con el [vRack](/links/network/vrack). En este modo, DHCP proporciona automáticamente direcciones IP a sus instancias.

Para más información, consulte la [página web de Local Zones](/links/public-cloud/local-zones).

///

### Paso 4: crear la instancia

> [!primary]
>
> Se requiere una clave SSH pública al crear una instancia en el área de cliente de OVHcloud (excepto las instancias Windows).
>
> Consulte el [paso 1](#paso-1-crear-un-juego-de-claves-ssh) y el [paso 2](#paso-2-importar-las-claves-ssh) de esta guía si no dispone de claves SSH listas para usar.
>

En la página **Inicio**, haga clic en `Crear una instancia`{.action}.

#### Paso 4.1: Nombre de la instancia

Introduzca un nombre completo para su instancia. La referencia comercial del modelo de instancia es el valor por defecto. Si es necesario, también puede añadir la región y la fecha para facilitar la identificación y la gestión de sus instancias.

#### Paso 4.2: Seleccione una localización

Seleccione una [localización](/links/public-cloud/regions-pci) lo más cercana posible a sus usuarios o clientes. Tenga en cuenta que si selecciona una **Local Zone** en este paso, se aplicarán limitaciones de red a la instancia (ver [Paso 3](#networking-modes)).

Consulte también la información de nuestra [página web sobre las Local Zones](/links/public-cloud/local-zones) y de la [documentación de capacidades de las Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

La elección de la región determina el modo de despliegue de su instancia (1-AZ, 3-AZ o Local Zones). Para comprender las diferencias en términos de resiliencia, disponibilidad y arquitectura, consulte nuestra guía [Comparación y resiliencia de los modos de despliegue – Entender las regiones 3-AZ / 1-AZ / Local Zones](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).

#### Paso 4.3: Seleccione un modelo

En este paso, elegirá el modelo de instancia (también llamado flavour), que determina los recursos asignados a su instancia: procesador, memoria y capacidades asociadas. Abra la lista desplegable `Modelo de instancia` y seleccione el tipo de modelo más adecuado a su caso de uso para acceder a nuestra gama de instancias optimizadas.

El tipo de modelo `Discovery` agrupa instancias con recursos compartidos, ofrecidas a precios competitivos. Son especialmente adecuadas para descubrir el Public Cloud de OVHcloud, realizar pruebas o alojar cargas de trabajo ligeras como aplicaciones web.

Los modelos `Metal Instances` ofrecen recursos físicos totalmente dedicados, garantizando un rendimiento constante y un aislamiento máximo para las cargas de trabajo más exigentes.

> [!primary]
>
> El total de recursos de Public Cloud se limitará inicialmente por motivos de control de costes y seguridad. Puede comprobar estas cuotas haciendo clic en `Cuotas y regiones`{.action} en la barra de navegación de la izquierda en **Parámetros**. Consulte [la documentación dedicada](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) para obtener más información.
>
> Tenga en cuenta que puede **mejorar** su instancia una vez creada para tener más recursos disponibles. Sin embargo, no es posible cambiar a un modelo más pequeño con una instancia regular. Encontrará más información sobre este tema en el **paso 4.9** a continuación.
>

##### Información adicional

/// details | Categorías de modelos de instancia

| Tipo | Recursos garantizados | Notas de uso |
| :---         |     :---:      |          :--- |
| Best Sellers   | ✓     | Modelos más utilizados.    |
| General Purpose   | ✓     | Servidores de desarrollo, aplicaciones web o empresariales    |
| Compute Optimized     | ✓       | Codificación de vídeo u otra computación de alto rendimiento      |
| Memory Optimized    | ✓     | Bases de datos, análisis y cálculos en memoria    |
| Storage Optimized   | ✓     | Optimizado para la transferencia de datos en disco    |
| Discovery    | -       | Alojamiento en recursos compartidos para entornos de prueba y desarrollo      |
| Cloud GPU     | ✓       | Potencia de procesamiento masivamente paralela para aplicaciones especializadas (renderizado, big data, deep learning, etc.)       |
| Metal Instances | ✓ | Recursos dedicados con acceso directo a los recursos de cálculo, almacenamiento y red|

///

/// details | Regiones y Local Zones

**Regiones**

Una **región** se define como una ubicación en el mundo formada por uno o varios datacenters en los que están alojados los servicios de OVHcloud. Puede encontrar más información sobre las regiones, la distribución geográfica y la disponibilidad de los servicios en nuestra [página web dedicada](/links/public-cloud/regions-pci) y nuestra [página web sobre las localizaciones de las infraestructuras de OVHcloud](/links/infrareg).

**Local Zones**

Las Local Zones son una extensión de las **regiones** que acercan los servicios de OVHcloud a sitios específicos, ofreciendo una latencia reducida y un rendimiento mejorado para las aplicaciones. Puede encontrar más información en la [página web de Local Zones](/links/public-cloud/local-zones) y en la [documentación de capacidades de las Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

#### Paso 4.4: Seleccione una imagen

Abra la lista desplegable `Tipo de distribución`, seleccione la categoría correspondiente a su necesidad y, a continuación, elija el sistema operativo que desea desplegar en su instancia a través del menú desplegable `Versión de la imagen`.

Las imágenes disponibles en este paso dependen de las opciones elegidas en los pasos anteriores, es decir, de la compatibilidad con el modelo de instancia y de la disponibilidad regional. Por ejemplo, si desea seleccionar un sistema operativo Windows y no hay opciones en la pestaña Windows, debe modificar sus opciones de los pasos anteriores.

> [!primary]
>
> Si elige un sistema operativo que requiera una licencia de pago, estos costes se incluirán automáticamente en la facturación del proyecto.
>

#### Paso 4.5: Seleccione una clave SSH (no aplicable a las instancias Windows)

A excepción de las instancias Windows, la configuración de la instancia también requiere **la adición de una clave SSH pública**. Tiene dos opciones:

- Utilizar una clave pública ya almacenada en el área de cliente de OVHcloud
- Introducir directamente una clave pública

Haga clic en las pestañas siguientes para ver su presentación:

> [!tabs]
> **Utilizar una clave almacenada**
>>
>> Para añadir una clave almacenada en el área de cliente de OVHcloud (consulte [Paso 2](#paso-2-importar-las-claves-ssh)), selecciónela en la lista.
>>
> **Introducir directamente una clave**
>>
>> Para añadir una clave pública pegando la cadena de clave, haga clic en el botón `Crear una nueva llave SSH`{.action}.
>>
>> Introduzca un nombre para la clave y la cadena de clave en los campos respectivos. Haga clic en `Validar la clave`{.action}.
>>


#### Paso 4.6: Configure los parámetros de backup

Los [backups automatizados](/pages/public_cloud/compute/save_an_instance) están activados por defecto. Consulte la información sobre precios y los detalles complementarios antes de continuar.

A continuación, seleccione el tipo de rotación, es decir, el número máximo de backups conservados en el historial: 7 o 14 días.

#### Paso 4.7: Configure la red

En este paso, configurará la red de su instancia.

**Red privada**

Puede conectar su instancia a una [red privada](#networking-modes) y asignarle una [Floating IP](/links/public-cloud/floating-ip).

Haciendo clic en `Crear una red privada`{.action}, puede crear una directamente:

- Nombrar la red
- **Elegir el VLAN ID:** identificador que permite interconectar varios servicios y recursos dentro de una misma red privada, a través de un número de segmentación de red común
- **Definir el CIDR:** rango de direcciones IP de la red
- **Activar el DHCP marcando la casilla correspondiente, si es necesario:** active esta opción si desea una asignación automática de direcciones IP

> [!primary]
>
> La instancia puede permanecer totalmente privada si no le asigna una IP pública.
>

**Gateway**

Puede activar la opción para asignar una gateway a su red. Por defecto, la gateway es de tamaño S, pero podrá ajustar su tamaño más adelante en los parámetros.

**Asignar una conectividad pública**

Puede activar o desactivar esta funcionalidad según sus necesidades. Si decide activarla, tiene dos opciones:

- **Basic Public IP:** una dirección IP pública temporal, que no persiste más allá de la duración de vida de la instancia. Tenga en cuenta que el uso de una Basic Public IP no es compatible con una gateway.
- **Floating IP:** puede crear una nueva Floating IP o reutilizar una dirección existente, lo que permite una IP pública persistente y desvinculable de la instancia.

#### Paso 4.8: Seleccione un período de facturación

> [!primary]
>
> Tenga en cuenta que, según el modelo de instancia elegido, la facturación **por horas** puede ser la única opción mostrada. Se trata de una limitación temporal. Pronto estarán disponibles nuevas opciones de facturación de Public Cloud.
>

> [!tabs]
> **Facturación mensual**
>>
>> La facturación mensual conlleva una reducción de los costes a lo largo del tiempo, pero **no puede cambiarse** a facturación por horas una vez creada la instancia.
>>
> **Facturación por horas**
>>
>> La facturación por horas es la mejor opción si no ha determinado claramente la duración del período de uso. Si decide conservar la instancia para su uso a largo plazo, puede [cambiar a una suscripción mensual](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).
>>
>> La instancia se facturará mientras no se **elimine**, independientemente del uso real de la instancia.
>>

A continuación se muestra nuestra documentación de facturación dedicada:

- [Facturación de Public Cloud](/pages/public_cloud/public_cloud_cross_functional/analyze_billing)
- [FAQ sobre la facturación mensual](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Una vez finalizada la configuración de su instancia, puede hacer clic en el botón `Lanzar mi instancia`{.action} o configurar los parámetros avanzados (ver a continuación). La entrega del servicio puede tardar unos minutos.

#### Paso 4.9: Configure los parámetros avanzados

##### Instancia flexible

Una instancia Flex es una instancia con un único disco de 50 GB, diseñada para ofrecer un proceso de creación y restauración de snapshots más rápido.

Permite redimensionar la instancia hacia modelos superiores o inferiores, manteniendo un espacio de almacenamiento fijo. Los modelos clásicos solo permiten un redimensionamiento hacia modelos superiores.

##### Script de post-instalación

Puede añadir [su script de post-instalación](/pages/public_cloud/compute/launching_script_when_creating_instance) en este campo.

#### Paso 4.10: Finalización de la instancia

En el lado derecho de su pantalla, se encuentra el resumen de su configuración. En esta sección, podrá configurar el número de instancias a crear. Puede crear varias instancias en función de las selecciones realizadas durante los pasos de creación, pero se aplicarán [los límites de cuota de recursos](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota).

Una vez finalizada la configuración de su instancia, haga clic en el botón `Lanzar mi instancia`{.action}. La entrega del servicio puede tardar unos minutos.

### Paso 5: Conectarse a la instancia

Las instrucciones de esta parte se refieren a las conexiones remotas mediante los protocolos **OpenSSH** y **RDP** a través de una red pública (Internet).

Tenga en cuenta que ofrecemos formas de acceso alternativas (principalmente utilizadas para la solución de problemas) que solo están disponibles a través de su área de cliente de OVHcloud:

- [Consola VNC](#54-acceso-a-la-consola-vnc)
- [Modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Si ha instalado un **SO con aplicación**, consulte nuestra [guía sobre los primeros pasos con las aplicaciones](/pages/public_cloud/compute/apps_first_steps), así como la documentación oficial del editor del SO.
>

#### 5.1: Verificar el estado de la instancia en el área de cliente

Seleccione `Instancias`{.action} en la barra de navegación de la izquierda en **Compute**. La instancia está lista cuando el estado se establece en `Activado` en la tabla. Si la instancia se ha creado recientemente y tiene un estado diferente, haga clic en el botón "Actualizar" situado junto al filtro de búsqueda.

![page instances](images/24-instance-connect01.png){.thumbnail}

Haga clic en el nombre de la instancia en esta tabla para abrir el `Panel de control`{.action}, donde puede encontrar toda la información relativa a la instancia. Para más información sobre las funciones disponibles en esta página, consulte nuestra guía sobre [la gestión de las instancias en el área de cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Se creará automáticamente un **usuario con derechos elevados (*sudo*)** en la instancia. El nombre de usuario refleja la imagen instalada, por ejemplo "ubuntu", "debian", "fedora", etc. Puede comprobarlo en el lado derecho del `Panel de control`{.action} en la sección **Redes**.

![page instances](images/24-instance-connect02.png){.thumbnail}

Si su [par de claves SSH está correctamente configurado](#paso-1-crear-un-juego-de-claves-ssh), puede conectarse a la instancia con el usuario preconfigurado y su clave SSH. En los siguientes párrafos encontrará instrucciones más detalladas.

> [!primary]
>
> El acceso a través de la **consola VNC** en una nueva instancia del sistema operativo GNU/Linux creada en el área de cliente debe activarse primero como se describe en la [sección de la guía a continuación](#54-acceso-a-la-consola-vnc).
>
> Esta guía no cubre la red privada para las instancias. Para más información, consulte nuestra documentación [Public Cloud Network Services](/products/public-cloud-network).
>

#### 5.2: Primera conexión a una instancia con sistema operativo GNU/Linux

> [!primary]
>
> Si recibe mensajes de error relativos a sus **claves SSH**, compruebe que su dispositivo local dispone de una clave SSH privada correctamente configurada utilizando la información de [esta guía](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).<br>
> Si sigue teniendo problemas, puede reemplazar el par de claves con [esta guía](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Si ha creado una instancia sin clave SSH, a través de la [API de OVHcloud](/pages/manage_and_operate/api/first-steps) o de la [interfaz OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), solo podrá añadir una clave SSH a su instancia a través del [modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) siguiendo las instrucciones descritas en [esta guía](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

Puede acceder a su instancia inmediatamente después de su creación a través de la interfaz de línea de comandos de su estación de trabajo local (`Terminal`, `Command prompt`, `Powershell`, etc.) por SSH.

```bash
ssh username@IPv4_instance
```

Ejemplo:

```bash
ssh ubuntu@203.0.113.101
```

[En función de su configuración](#paso-1-crear-un-juego-de-claves-ssh), tendrá que introducir una frase de contraseña que proteja su clave privada o especificar la ruta de acceso a su archivo de clave. Para más información, consulte nuestra [guía de claves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys).

Si utiliza otro cliente SSH, consulte su documentación de usuario. Puede consultar un ejemplo de uso de la solución open source `PuTTY` en [esta guía](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

Continúe en el [paso 6 a continuación](#paso-6-primeros-pasos-en-una-nueva-instancia).

#### 5.3: Instancias Windows

##### 5.3.1: Finalizar la instalación de una instancia Windows

Una vez que haya comprobado que la instancia Windows está [instalada](#51-verificar-el-estado-de-la-instancia-en-el-area-de-cliente), abra la pestaña `Consola VNC`{.action} en su [área de cliente de OVHcloud](/links/manager).

A continuación, complete la configuración inicial del sistema operativo Windows. Siga los pasos que se indican a continuación en las pestañas:

> [!tabs]
> 1. **Configuración regional**
>>
>> Configure su **país/región**, el **idioma preferido de Windows** y su **distribución de teclado**. Haga clic en el botón `Siguiente`{.action} en la esquina inferior derecha.<br><br>
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
> 4. **Inicio de sesión de administrador**
>>
>> Introduzca la contraseña `Administrator` que creó en el paso anterior y haga clic en el botón "Arrow".<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### 5.3.2: Conéctese de forma remota desde Windows

En su equipo Windows local, puede utilizar la aplicación cliente `Remote Desktop Connection` para conectarse a su instancia.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduzca la dirección IPv4 de su instancia, su identificador y su contraseña. Normalmente, aparece un mensaje de advertencia solicitándole que confirme la conexión debido a un certificado desconocido. Haga clic en `Sí`{.action} para conectarse.

> [!primary]
>
> Si tiene problemas con este procedimiento, compruebe que las conexiones remotas (RDP) están permitidas en su dispositivo comprobando la configuración del sistema, las reglas de firewall y las posibles restricciones de red.
>

##### 5.3.3: Conectarse de forma remota desde otro SO

Las conexiones desde un sistema operativo de escritorio que no sea Windows suelen requerir un software cliente compatible con el `Remote Desktop Protocol` (RDP). Algunos entornos de escritorio y sistemas operativos pueden tener un cliente nativo integrado.

Independientemente del cliente que utilice, solo necesita la dirección IP de su instancia y su contraseña para que la cuenta `Administrator` pueda conectarse.

**Ejemplo de uso**

El software libre y open source `Remmina Remote Desktop Client` está disponible para muchas distribuciones de escritorio GNU/Linux. Si no encuentra Remmina en el administrador de software de su entorno de escritorio, puede obtenerlo en el [sitio oficial](https://remmina.org/).

![linux remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Conexión**
>>
>> Abra Remmina y asegúrese de que el protocolo de conexión está establecido en "RDP". Introduzca la dirección IPv4 de su instancia Public Cloud y pulse "Enter".<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Autenticación**
>>
>> Si aparece un mensaje de advertencia de certificado, haga clic en `Yes`{.action}. Introduzca el nombre de usuario y la contraseña de Windows y haga clic en `OK`{.action} para establecer la conexión.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Parámetros**
>>
>> Puede encontrar elementos útiles en la barra de herramientas de la izquierda. Por ejemplo, haga clic en el icono `Toggle dynamic resolution update`{.action} para mejorar la resolución de la ventana.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

#### 5.4: Acceso a la consola VNC

La consola VNC le permite conectarse a sus instancias incluso cuando otros medios de acceso no están disponibles.

Seleccione `Instancias`{.action} en la barra de navegación de la izquierda en **Compute**. Haga clic en el nombre de la instancia y abra la pestaña `Consola VNC`{.action}.

![console vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Instancia con un SO GNU/Linux instalado**
>>
>> Es necesario configurar una cuenta de usuario **con contraseña** en la instancia para utilizar la consola VNC. Para establecer una contraseña para la cuenta preconfigurada, siga los pasos de la [sección 6.1.1 a continuación](#611-establezca-una-contrasena-para-la-cuenta-de-usuario-actual).
>>
> **Instancia Windows**
>>
>> Inicie sesión con sus credenciales de Windows. Si tiene una sesión activa, dispone de acceso inmediato. Habrá una latencia considerable con respecto a una conexión RDP.
>>

### Paso 6: primeros pasos en una nueva instancia

> [!primary]
>
> **Instancias Windows**
>
> No es necesario realizar ningún paso adicional en las instancias que tengan instalado un sistema operativo Windows.
>
> Encontrará más información en la sección [Más información](#mas-informacion) a continuación.
>

#### 6.1: Gestión de usuarios

> [!primary]
>
> Al configurar las cuentas de usuario y los niveles de permisos en una instancia, le recomendamos que utilice la información de nuestra [guía de cuentas de usuario](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Establezca una contraseña para la cuenta de usuario actual

Al [conectarse a su instancia](#paso-6-primeros-pasos-en-una-nueva-instancia), establezca una contraseña para el usuario actual introduciendo este comando:

```bash
sudo passwd
```

Introduzca una frase de contraseña, confirme con `Enter` y repita.

```console
New password:
Retype new password:
passwd: password updated successfully
```

**Es suficiente para activar los inicios de sesión a través de la [consola VNC](#54-acceso-a-la-consola-vnc) en su [área de cliente de OVHcloud](/links/manager)**. Sin embargo, las conexiones SSH remotas con esta contraseña están siempre **desactivadas** por defecto.

##### 6.1.2: Activación de la conexión remota mediante contraseña (opcional)

> [!warning]
>
> Este paso no es necesario y solo debe realizarse si tiene una razón válida para activar este tipo de acceso; por ejemplo, si necesita conectarse temporalmente a la instancia desde un dispositivo en el que no esté almacenada su clave SSH privada.
>
> En el ejemplo siguiente se muestra una solución temporal en una instancia en la que está instalado Ubuntu. Tenga en cuenta que es posible que tenga que ajustar los comandos en función del sistema operativo. No se recomienda conservar esta configuración de forma permanente, ya que añade un riesgo potencial de seguridad al abrir el sistema a ataques basados en SSH.
>

Una vez [conectado a su instancia](#paso-6-primeros-pasos-en-una-nueva-instancia), abra el archivo de configuración con un editor de texto. Ejemplo:

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

Cancele estos cambios para volver a la conexión por clave para la instancia.

#### 6.2: Claves SSH adicionales

Si desea autorizar a más cuentas de usuario a acceder a la instancia, el procedimiento estándar es el siguiente:

- Crear la cuenta en la instancia.
- Crear un nuevo par de claves SSH en el dispositivo correspondiente.
- Añadir la clave pública a la instancia.

Para más información, consulte nuestra [guía dedicada](/pages/public_cloud/compute/configuring_additional_ssh_keys).

## Más información

[Cómo activar una licencia Windows para una instancia en modo privado](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Cómo restablecer una contraseña de administrador de Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestión de instancias en el área de cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Cómo empezar con OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

[Cómo empezar con Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).
