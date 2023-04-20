---
title: Utilizar Zerto entre OVHcloud y una plataforma tercera
excerpt: 'Cómo conectar su Zerto OVHcloud a otra plataforma'
updated: 2022-02-11
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 11/02/2022**

## Objetivo:

Esta guía explica cómo configurar la red privada virtual (VPN) para conectar una plataforma de terceros a su Hosted Private Cloud de OVHcloud e implementar la solución de recuperación ante desastres Zerto.<br>.
Para mostrar el procedimiento, vamos a utilizar como ejemplo la solución VPN de OPNSense, una plataforma firewall/VPN open source.
Para facilitar la explicación, vamos a describir la forma más sencilla de establecer un túnel VPN con la red de la interfaz Zerto Virtual Manager (ZVM).

Para el segundo caso, consulte nuestra guía "[Zerto entre dos datacenters de OVHcloud](/pages/cloud/private-cloud/zerto_virtual_replication_as_a_service)".

## Requisitos:

- Una dirección IP pública disponible en el Private Cloud de destino para el punto de conexión VPN.
- Una plataforma Zerto instalada y operativa en la infraestructura del cliente.
- Las máquinas de replicación Zerto (VRA: Virtual Replication Appliance) tanto del lado del cliente como del lado de OVHcloud deben poder intercambiar datos en los puertos TCP 4007 y 4008.
- Las máquinas de administración Zerto (ZVM: Zerto Virtual Manager) del lado del cliente y del lado de OVHcloud deben poder intercambiar datos en los puertos TCP 9081.

## Procedimiento

### Presentación de la arquitectura de la solución

![zerto vpn](images/image-EN-1.png){.thumbnail}

**Definición de los parámetros de esta arquitectura:**

Del lado del cliente:

- Dirección pública del punto de conexión VPN (1)
- Dirección interna del punto de conexión VPN (2)
- Dirección interna de la ZVM (3)
- Plan de direccionamiento de la red ZVM (4)

Del lado de OVHcloud:

- Dirección pública del punto de conexión VPN (5)
- Plan de direccionamiento de la red ZVM (6)
- Dirección de la ZVM (7)

> [!primary]
>
>Debe elegir el rango de red en el que desea que OVHcloud despliegue la ZVM remota, para evitar que interfiera con sus direcciones internas. 
>
>Si le conviene, puede simplemente aceptar la que se propone por defecto en la interfaz del área de cliente.
>

### 1: Activar la función Zerto en sentido cliente - OVHcloud

La activación se lleva a cabo directamente desde el área de cliente de OVHcloud. Primero debe seleccionar el datacenter asociado al Private Cloud, y hacer clic en la pestaña `Plan de Recuperación ante desastres (DRP)`{.action}.

![zerto vpn](images/image-EN-2-nucp.png){.thumbnail}

Seleccione la opción `Entre su infraestructura y un Private Cloud OVHcloud`{.action} y haga clic en `Activar Zerto DRP`{.action}.

![zerto vpn](images/image-EN-3.png){.thumbnail}

Seleccione una dirección pública disponible dentro del rango propuesto.

![zerto vpn](images/image-EN-4.png){.thumbnail}

Introduzca el rango de red deseado para el despliegue de la ZVM.

![zerto vpnzerto vpn](images/image-EN-5.png){.thumbnail}

Haga clic en `Instalar`{.action} para continuar.

![zerto vpn](images/image-EN-6.png){.thumbnail}

### 2: Activar el servicio IPSec

En la consola OPNSense, diríjase al menú `VPN`{.action} de la izquierda, y en `IPSec`{.action} seleccione `Tunnel Setting`{.action}.

![zerto vpn](images/image-EN-7.png){.thumbnail}

Active la casilla `Enable IPsec`{.action}.

![zerto vpn](images/image-EN-8.png){.thumbnail}

Haga clic en `Save`{.action} para guardar.

### 3: Configurar el túnel IPSec

Para configurar el túnel hay que completar dos conjuntos de parámetros llamados **Fase 1** y **Fase 2**.

#### 3.1. Añadir la Fase 1

En el menú `VPN`{.action}, vaya a la sección `Tunnel setting`{.action} y haga clic en el icono `+`{.action} a la derecha de la pantalla.

![zerto vpn](images/image-EN-9.png){.thumbnail}

##### 3.1.1 Fase 1: añadir información general

![](images/image-EN-10.png){.thumbnail}

Puede mantener los valores por defecto:

- Método de conexión: Default
- Protocolo de intercambio de claves: V2
- Protocolo de Internet: IPv4
- Interfaz: WAN

Hay que rellenar obligatoriamente la IP del punto de conexión IPSec de OVHcloud, en el campo `Remote gateway`{.action}.

##### 3.1.2.Fase 1: Autenticación

En este apartado también se puede mantener la configuración por defecto. Solo hay que introducir la contraseña compartida en el campo `Pre-Shared Key`{.action}.

![zerto vpn](images/image-EN-11.png){.thumbnail}

##### 3.1.3 Fase 1: elección de los algoritmos de cifrado

![zerto vpn](images/image-EN-12.png){.thumbnail}

Los valores admitidos para cada parámetro son:

- Algoritmo de cifrado: AES 256 bits
- Algoritmo de hash: SHA256
- Grupo de claves Diffie-Hellman: 14 (2048 bits)
- Vida útil: 28 800 segundos

En la configuración avanzada se pueden mantener los valores por defecto. Haga clic en `Save`{.action} y en `aplicar los cambios`{.action}.

La Fase 1 estará ahora disponible en la interfaz.

![zerto vpn](images/image-EN-13.png){.thumbnail}

#### 3.2 Añadir una entrada Fase 2

Haga clic en el botón `Mostrar las entradas Fase 2`{.action}.

![zerto vpn](images/image-EN-14.png){.thumbnail}

No aparece disponible ninguna fase 2, hay que añadir una:

![zerto vpn](images/image-EN-15.png){.thumbnail}

Haga clic en el icono `+ `{.action}.

![zerto vpn](images/image-EN-16.png){.thumbnail}

##### 3.2.1 Fase 2: Información general

![zerto vpn](images/image-EN-17.png){.thumbnail}

Compruebe que el modo está en «Túnel IPv4».

##### 3.2.2 Fase 2: Red Local

![zerto vpn](images/image-EN-18.png){.thumbnail}

El tipo de red local seleccionado debe ser «Subred Local».

##### 3.2.3 Fase 2: Red remota

En este paso hay que introducir el plan de direccionamiento de la red en la que se encuentra la ZVM OVHcloud. 

La red deberá ser /23 (512 direcciones IP).

> [!warning]
>
> Asegúrese de comprobar dos veces la configuración, porque si se comete algún error en este paso, la VPN no funcionará. 
>

![zerto vpn](images/image-EN-19.png){.thumbnail}

##### 3.2.4 Fase 2: Intercambio de claves

Los valores admitidos para cada parámetro son:

- Protocolo: ESP
- Algoritmos de cifrado: AES 256 bits
- Algoritmos de hash: SHA256
- PFS: Off

![zerto vpn](images/image-EN-20.png){.thumbnail}

No es necesario modificar las opciones avanzadas. Haga clic en `Save`{.action} y en `Aplicar los cambios`{.action}.

#### 3.3 Comprobación del estado de la VPN:

![zerto vpn](images/image-EN-21.png){.thumbnail}

Haga clic en el triángulo naranja de la derecha para iniciar la conexión.

![zerto vpn](images/image-EN-22.png){.thumbnail}

Si la configuración es correcta, el túnel se establecerá. Aparecerán dos nuevos iconos:

- Desactivar el túnel
- Obtener información sobre el estado del túnel

![zerto vpn](images/image-EN-23.png){.thumbnail}

Haga clic en el icono de información.

![zerto vpn](images/image-EN-24.png){.thumbnail}

El túnel está ahora operativo. No olvide añadir, en caso necesario, una ruta de la ZVM local hacia la red ZVM OVHcloud.

**En caso de fallo**:

Si no se establece el túnel, verifique que se han introducido correctamente los siguientes parámetros:

- La contraseña compartida
- La IP del punto de conexión remota.
- El rango IP de la red remota

Compruebe además que no haya un firewall bloqueando el tráfico entre los dos extremos de la VPN.

También puede consultar el archivo de log IPSec en /var/log/ipsec.log.

### 4: Configuración del firewall

Para permitir el emparejamiento de la infraestructura del cliente con la de OVHcloud, se debe autorizar el tráfico entre:

- El puerto 9081 y las ZVM
- Los puertos 4007/4008 y las vRAs

#### 4.1 Abrir puertos en ZVM

Diríjase al menú `Firewall`{.action}, y en la sección `Rules`{.action} seleccione `IPSec`{.action}.

![zerto vpn](images/image-EN-25.png){.thumbnail}

Haga clic en `Add`{.action} para crear una nueva regla.

![zerto vpn](images/image-EN-26.png){.thumbnail}

![zerto vpn](images/image-EN-27.png){.thumbnail}

Esta regla debe tener la siguiente configuración:

- Acción: «Pass» (Autorizar el tráfico)
- Interfaz: «IPSec» (el tráfico entrante que se debe autorizar proviene de la VPN)
- Protocolo: «TCP»

En los campos «Source» y «Destination» seleccione el tipo «Single host or Network». Estos campos hacen referencia respectivamente a las direcciones IP de la ZVM OVHcloud hacia la ZVM del cliente.

![zerto vpn](images/image-EN-28.png){.thumbnail}

El puerto TCP de destino autorizado es el 9081.

Guarde la regla y aplique los cambios.

#### 4.2 Abrir puertos en vRA

Abrir puertos en vRa es un poco más complejo ya que hay tantas vRA como ESXi, tanto del lado del cliente como del lado de OVHcloud. 

Todas deben comunicarse por los puertos TCP 4007 y 4008. 

Para simplificar esta configuración, OPNSense ofrece los alias. Un alias es un grupo de objetos (direcciones IP, redes, URL, etc.) que se pueden usar para definir reglas de firewall.

En nuestro caso, necesitamos 3 alias:

- Uno para las direcciones IP de las vRA del lado del cliente
- Uno para las direcciones IP de las vRA del lado de OVHcloud
- Uno para los puertos que se deben autorizar

La dirección IP de las vRA del lado de OVHcloud se puede consultar en la interfaz vSphere del Private Cloud de destino:

![zerto vpn](images/image-EN-29.png){.thumbnail}

Cree el alias OVH_VRA para los vRA del lado de OVHcloud:

![zerto vpn](images/image-EN-30.png){.thumbnail}

Hay que crear un alias para las máquinas del lado del cliente de la misma forma:

![zerto vpn](images/image-EN-31.png){.thumbnail}

Y por último, hay que crear el alias para los puertos:

![zerto vpn](images/image-EN-32.png){.thumbnail}

Ahora ya tiene todos los elementos para poder crear las reglas firewall que autoricen el tráfico desde OVHcloud hacia la plataforma del cliente. El procedimiento es el mismo, tan solo hay que utilizar los alias en la configuración:

![zerto vpn](images/image-EN-33.png){.thumbnail}

Ahora la conexión VPN es segura y está operativa.

![zerto vpn](images/image-EN-34.png){.thumbnail}

### 5: Emparejar las ZVM

Una vez instalada la ZVM en la infraestructura del cliente, ya se puede conectar a la interfaz Zerto. 

Aparecerá la siguiente pantalla.

![zerto vpn](images/image-EN-35.png){.thumbnail}

Elija la opción `Pair to a site with a licence`{.action}. Introduzca la dirección IP de la ZVM de OVHcloud y haga clic en `Start`{.action}.

En el panel de control, aparecerá un mensaje informando de que el emparejamiento está en curso.

![zerto vpn](images/image-EN-36.png){.thumbnail}

Si la operación se ha desarrollado correctamente, aparecerá el siguiente mensaje:

![zerto vpn](images/image-EN-37.png){.thumbnail}

Compruebe que el nombre de su Private Cloud OVHcloud aparece ahora en la pestaña `Sites`{.action}.

![zerto vpn](images/image-EN-38.png){.thumbnail}

Su solución Zerto ya está operativa y se pueden crear grupos de protección virtual. (VPG).

#### **Diagnóstico**:

En caso de que sea imposible establecer un diálogo entre las ZVM (sobre todo en caso de haber configurado erróneamente las reglas de firewall), aparecerá el siguiente mensaje:

![zerto vpn](images/image-EN-39.png){.thumbnail}

Será redirigido a la pantalla de acceso a la ZVM con el siguiente mensaje de error.

![zerto vpn](images/image-EN-40.png){.thumbnail}

La causa más probable es que la ZVM OVHcloud no pueda comunicarse con la ZVM del cliente en el puerto TCP 9081. Es necesario que se pueda iniciar la conexión.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
