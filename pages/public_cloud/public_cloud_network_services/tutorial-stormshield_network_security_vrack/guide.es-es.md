---
title: 'Proteger su infraestructura OVHcloud con Stormshield Network Security'
excerpt: 'Cómo proteger su infraestructura de OVHcloud con Stormshield Network Security desplegado en Public Cloud'
updated: 2025-05-29
---

En el panorama digital en constante evolución, la seguridad de la infraestructura cloud se ha convertido en una prioridad para las organizaciones de todos los tamaños. A medida que las empresas confían cada vez más en las soluciones cloud para sus operaciones, garantizar la protección de los datos sensibles y mantener la integridad de la red es una tarea crítica. Stormshield SNS EVA (Stormshield Elastic Virtual Appliance) es una completa solución de seguridad diseñada para proteger los entornos cloud de una amplia gama de amenazas.

Esta guía explica cómo desplegar y configurar SNS EVA en el Public Cloud de OVHcloud con el vRack y el enrutamiento IP público, cubriendo funcionalidades clave como los firewalls de red, las VPN IPSec y las VPN SSL/TLS. Esta guía explica cómo mejorar la seguridad de la infraestructura Public Cloud de OVHcloud y garantizar la seguridad de sus operaciones.

**Esta guía explica cómo proteger su infraestructura de OVHcloud con Stormshield Network Security desplegado en Public Cloud.**

> [!warning]
> Este tutorial explica cómo utilizar una o varias soluciones de OVHcloud con herramientas externas y explica las acciones que debe realizar en un contexto específico. Es posible que tenga que adaptar las instrucciones a su caso particular.
>
> Si tiene problemas para aplicar estas instrucciones, le recomendamos que contacte con un [proveedor especializado](/links/partner) o hable del problema con nuestra comunidad. Para obtener más información, consulte la sección [Más información](#gofurther) de este tutorial.
>

## Requisitos

- Un [proyecto de Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) en su cuenta de OVHcloud.
- Estar conectado al [área de cliente de OVHcloud](/links/manager).
- Un [usuario OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (opcional).
- Conocimientos básicos de redes.
- Una cuenta Stormshield creada a través del [sitio Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm){.external}.
- Asegurarse de que el vRack esté activado y configurado para permitir una comunicación segura entre los componentes de la infraestructura.
- Un bloque de direcciones [Additional IP](/links/network/additional-ip) (/29) para permitir el failover y la configuración de la alta disponibilidad.
- Una licencia Stormshield Elastic Virtual Appliance BYOL (**B**ring **Y**our **O**wn **L**icence), obtenida de [partners o revendedores terceros](https://www.stormshield.com/partner/partner-finder/){.external}, que deberá proporcionar durante la instalación y la configuración.

## Procedimiento

Además de instalar y configurar Stormshield Network Security, este tutorial explica cómo utilizarlo en función de sus necesidades:

- [Instalar y configurar Stormshield Network Security en su entorno de Public Cloud](#step1)
- [Caso de uso 1: configurar Stormshield Network Security para usarlo como puerta de enlace](#step2)
- [Caso de uso 2: configurar un NAT (**N**network **A**ddress **T**translation) para acceder a un servicio HTTP privado desde el exterior](#step3)
- [Caso de uso 3: túnel IPsec (sitio a sitio)](#step4)
- [Caso de uso 4: VPN SSL/TLS (cliente a sitio)](#step5)

### Instalar y configurar Stormshield Network Security en su entorno Public Cloud <a name="step1"></a>

> [!primary]
> En este tutorial, la instalación y configuración de Stormshield SNS EVA se realiza principalmente a través de la línea de comandos. Abra un terminal para ejecutar las instrucciones.
>
> Tenga en cuenta que todas las secciones relativas a la «Alta disponibilidad» o a «Stormshield-2» son opcionales, así como el uso de la red vRack con Additional IP. Se incluyen para mostrar cómo implementar el sistema con dos instancias en modo activo/pasivo para alta disponibilidad. En una versión mínima, también puede funcionar con una sola instancia si es suficiente para sus necesidades.

> [!primary]
> En este escenario, utilizaremos dos máquinas virtuales configuradas para el dispositivo de seguridad para alcanzar la alta disponibilidad (**H**igh **A**vailability o HA), así como una máquina virtual adicional para la administración y gestión del dispositivo de seguridad. Esta configuración garantiza la protección contra fallos y la disponibilidad continua del servicio. Para obtener más ejemplos y sugerencias detalladas sobre las opciones de escalabilidad, consulte la [documentación de Stormshield](https://documentation.stormshield.eu/HOME/Content/Website_Topics/Root-HomePage-EN.htm){.external}.

#### Configurar el vRack

En esta etapa, configuramos el vRack, una red virtual privada proporcionada por OVHcloud. El vRack le permite interconectar varias instancias o servidores en un entorno Public Cloud, garantizando así el aislamiento de la red y manteniendo una comunicación segura. Añadiendo su proyecto de Public Cloud y su bloque Additional IP al mismo vRack, podrá permitir que sus instancias SNS EVA se comuniquen de forma segura, conservando un control total de la gestión de las direcciones IP. La red privada vRack también permite proteger los servidores Bare Metal Cloud o las MV Private Cloud con appliances de seguridad desplegados en el Public Cloud.

**Añadir su proyecto de Public Cloud y su bloque Additional IP al mismo vRack.**

A efectos de ejemplo para esta guía, el bloque de IP es `147.135.161.152/29`<br>
Utilizamos la primera IP utilizable `147.135.161.153` para la primera instancia de SNS EVA y utilizamos temporalmente la segunda IP utilizable `147.135.161.154` para el segundo SNS EVA.<br>
La dirección de la pasarela es `147.135.161.158`.

Consulte la guía «[Configurar un bloque de IP en el vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)» para obtener más información.

A continuación se muestra la arquitectura que vamos a implementar.

![SNS EVA vrack](images/stormshield-ha-vrack.png){.thumbnail}

#### Configurar la red OpenStack

Cree la red privada para las interfaces externas SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 0 --disable-port-security stormshield-ext
```

```bash
openstack subnet create --network stormshield-ext --subnet-range 192.168.1.0/29 --dhcp stormshield-ext
```

Cree la red privada para las interfaces internas del SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 200 --disable-port-security stormshield-vlan200
```

```bash
openstack subnet create --network stormshield-vlan200 --subnet-range 10.200.0.0/16 --dhcp --dns-nameserver <dns_address_ip> stormshield-vlan200
```

Cree la red privada para las interfaces SNS EVA HA (**H**igh **A**vailability):

```bash
openstack network create --provider-network-type vrack --provider-segment 199 --disable-port-security stormshield-ha
```

```bash
openstack subnet create --network stormshield-ha --subnet-range 192.168.2.0/29 --dhcp --gateway none stormshield-ha
```

#### Desplegar las instancias SNS EVA

Acceda a la sección `download` del [sitio oficial de Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/PAYG_Deployment_Guide/Downloading_installation_file.htm){.external}. Inicie sesión en su cuenta de Stormshield y siga las instrucciones para descargar la imagen de Stormshield OpenStack.

Acceda a la carpeta en la que haya descargado su imagen SNS EVA OpenStack e importe la imagen (para este tutorial utilizamos la imagen `utm-SNS-EVA-4.8.3-openstack.qcow2`):

```bash
openstack image create --disk-format raw --container-format bare --file ./utm-SNS-EVA-4.8.3-openstack.qcow2 stormshield-SNS-EVA-4.8.3
```

Cree las instancias SNS EVA (en este ejemplo, las hemos llamado `stormshield-1` y `stormshield-2`):

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-1
```

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-2
```

> [!primary]
> Por motivos de rendimiento, le recomendamos que utilice las versiones de máquinas virtuales que figuran en la lista para los tipos de licencias SNS EVA dados:
>
> - EVA1: B3-8 / B3-16
> - EVA2: B3-16 / B3-32
> - EVA3: B3-32 / B3-64
> - EVA4: B3-64 / B3-128
> - EVAU: B3-128 / B3-256
>

#### Configurar las instancias SNS EVA

Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente. En el menú de la izquierda, haga clic en `Instances`{.action} en la pestaña **Compute** y seleccione las dos instancias SNS EVA.

Acceda a la consola VNC para las dos instancias SNS EVA y configure la distribución del teclado y la contraseña.

Configure la pasarela por defecto en el primer SNS EVA con nuestra pasarela de bloque IP:

```console
vi /usr/Firewall/ConfigFiles/object

[Host]
Firewall_out_router=147.135.161.158,resolve=static
...
```

Configure la interfaz de red externa en el primer SNS EVA con la primera dirección IP utilizable de nuestro bloque IP y la interfaz de red interna con la dirección IP `10.200.0.1`:

```console
vi /usr/Firewall/ConfigFiles/network

...
[ethernet0]
...
Address=147.135.161.153
Mask=255.255.255.248

[ethernet1]
...
Address=10.200.0.1
Mask=255.255.0.0
...
```

Aplique la nueva configuración de red:

```bash
ennetwork
```

Realice la misma configuración para el segundo SNS EVA pero con la segunda dirección IP `147.135.161.154` de nuestro bloque IP para la interfaz externa en lugar de `147.135.161.153`.

Añada una licencia diferente en las dos instancias SNS EVA siguiendo la [documentación oficial](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm){.external}.

Cree una regla de firewall similar a la siguiente en los dos SNS EVA en la interfaz gráfica web:

![SNS EVA vrack](images/ha-filter.png){.thumbnail}

En el primer SNS EVA, cree un grupo de firewall (`Configuration` > `System` > `High Availability`). En cuanto a la dirección IP, compruebe qué IP ha asignado el DHCP OpenStack a la interfaz HA.

![SNS EVA vrack](images/ha-1.png){.thumbnail}

![SNS EVA vrack](images/ha-2.png){.thumbnail}

Una vez completada la configuración de la HA en el primer SNS EVA, únase al grupo de firewall en el segundo:

![SNS EVA vrack](images/ha-3.png){.thumbnail}

![SNS EVA vrack](images/ha-4.png){.thumbnail}

La segunda interfaz externa del SNS EVA utilizará ahora la misma dirección IP que la primera. Por lo tanto, la dirección IP `147.135.161.154` puede ahora utilizarse para otros fines.

Si todo está configurado correctamente, después de reiniciar el segundo SNS EVA, debería ver algo similar en los indicadores de mantenimiento del enlace HA:

![SNS EVA vrack](images/ha-5.png){.thumbnail}

#### Configurar y proteger la gestión del SNS EVA

> [!tabs]
> **Etapa 1**
>>
>> Recupere su dirección IP pública:
>>
>> ```console
>> curl ipinfo.io/ip
>> <ip_address>
>> ```
>>
> **Etapa 2**
>>
>> Cree un objeto host para su dirección IP pública:
>>
>>![SNS EVA vrack](images/configure-management-1.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Limite el acceso a la interfaz gráfica a su dirección IP pública y active el SSH:
>>
>>![SNS EVA vrack](images/configure-management-2.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Limite el acceso al SSH a su dirección IP pública:
>>
>>![SNS EVA vrack](images/configure-management-3.png){.thumbnail}

#### Resincronizar la configuración HA

La sincronización entre las dos instancias SNS EVA es fundamental para garantizar que los dos cortafuegos estén siempre actualizados con la misma configuración. Puede hacerlo desde la línea de comandos SSH o directamente desde la interfaz gráfica de usuario (GUI).

> [!primary]
> Para este ejemplo, utilizamos la solución en línea de comandos SSH. Si prefiere utilizar la interfaz gráfica de usuario para la sincronización, consulte «Pantalla de alta disponibilidad» en la [documentación de Stormshield SNS EVA](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/High_Availability/High_availability_screen.htm){.external} para obtener información detallada.

En este punto, las dos instancias SNS EVA no deben sincronizarse, ya que hemos configurado un gran número de parámetros en la primera instancia de la que la segunda no tiene conocimiento.

Conéctese por SSH a la instancia SNS EVA activa:

```bash
ssh admin@<ip_address>
```

Sincronice los dos SNS EVA:

```bash
hasync
```

Es necesario realizar esta operación cada vez que actualice la configuración.

### Configuraciones de casos de uso

Una vez implementado el firewall SNS EVA, puede utilizarse en varios escenarios de seguridad avanzada, como VPN IPsec, VPN SSL/TLS, puertas de enlace de red (IN o OUT), tal y como se describe a continuación.
Gracias a la red privada vRack, las VLAN enumeradas también pueden utilizarse fuera del entorno Public Cloud: en los productos Bare Metal o Private Cloud.

#### Caso de uso nº 1: configurar Stormshield Network Security para utilizarlo como puerta de enlace <a name="step2"></a>

En este ejemplo, el firewall virtual funcionará como una puerta de enlace segura para las instancias privadas (o cualquier otro servidor) en el VLAN200 de la red vRack dada. Este tipo de tráfico puede filtrarse por URL en el cortafuegos.

![SNS EVA vrack](images/stormshield-gateway.png){.thumbnail}

- Cree un objeto de red para el VLAN200 siguiendo [esta parte de la documentación oficial de Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm){.external}.

- [Cree una nueva regla de filtrado](https://documentation.stormshield.com/SNS/v4/en/Content/HowTo_-_IPSec_VPN_-_Authentication_by_certificate/Setup-Main-Site-30-Creating-Filtering-policy.htm){.external} similar a esta para permitir que el tráfico procedente del VLAN200 salga:

![SNS EVA vrack](images/gateway-2.png){.thumbnail}

- [Cree una regla NAT](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Filtering_and_NAT/NAT_tab.htm){.external} similar a la siguiente:

![SNS EVA vrack](images/gateway-3.png){.thumbnail}

Sincronice las dos instancias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### Comprobar si una instancia puede conectarse a Internet desde el VLAN200

[Importe su clave pública SSH](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/keypair.html){.external}:

```bash
openstack keypair create --public-key ~/.ssh/id_rsa.pub <name>
```

Cree una instancia en el VLAN200:

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network stormshield-vlan200 --key-name <name> ubuntu-webserver
```

Conéctese por SSH a la instancia SNS EVA:

```bash
ssh -A admin@<instance_ip>
```

Desde la instancia SNS EVA, conéctese por SSH al servidor web Ubuntu. Compruebe qué dirección IP ha asignado el DHCP OpenStack a la instancia del servidor web Ubuntu:

```bash
ssh ubuntu@<ip_address>
```

Pruebe si puede acceder a un sitio web público:

```bash
curl -I https://www.ovh.com/manager/
HTTP/2 200
```

#### Caso de uso n°2: configurar un NAT (**N**network **A**ddress **T**ranslation) para acceder a un servicio HTTP privado desde el exterior <a name="step3"></a>

En este ejemplo, Internet debe poder conectarse al servidor web privado instalado en el VLAN200. El objetivo de esta configuración es proteger el servidor web con un firewall de red.

![SNS EVA vrack](images/stormshield-nat-http.png){.thumbnail}

> [!tabs]
> **Etapa 1**
>>
>> Instale Nginx en la instancia ubuntu-webserver :
>>
>> ```bash
>> sudo apt-get update
>> sudo apt-get install -y nginx
>> ```
>>
> **Etapa 2**
>>
>> Cree un objeto host para la instancia ubuntu-webserver:
>>
>>![SNS EVA vrack](images/nat-1.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Cree una regla NAT similar a la siguiente:
>>
>>![SNS EVA vrack](images/nat-2.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cree una regla de filtrado similar a la siguiente:
>>
>>![SNS EVA vrack](images/nat-3.png){.thumbnail}
>>

Pruebe el acceso al sitio web desde el exterior:

```bash
curl -I http://<ip_address>
HTTP/1.1 200 OK
```

Sincronice las dos instancias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

#### Caso de uso n°3: túnel IPsec (de sitio a sitio) <a name="step4"></a>

En este ejemplo, el túnel IPsec está configurado para interconectar dos regiones PCI diferentes: SBG7 (red VLAN200) y GRA11 (red VLAN201), pero cada uno de estos sitios puede ser un sitio remoto, como una oficina o un datacenter.

![SNS EVA vrack](images/stormshield-ipsec.png){.thumbnail}

Repita todos los pasos en otra región utilizando la VLAN 201 en lugar de la VLAN 200 y rangos de direcciones IP diferentes para las subredes Stormshield-ext y Stormshield-ha.;

##### **Configurar el primer sitio**

- [Agregue un objeto host](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm){.external} para el SNS EVA remoto y agregue un objeto de red para la red privada remota VLAN201.

- [Cree un túnel de sitio a sitio estándar](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/IPSec_VPN/Encryption_policy-Tunnels_tab-Site_to_Site-Creating.htm){.external}.

> [!tabs]
> **Etapa 1**
>>
>> Añada la red privada local y la red privada remota:
>>
>>![SNS EVA vrack](images/ipsec-3.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Cree la puerta de enlace remota:
>>
>>![SNS EVA vrack](images/ipsec-4.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Seleccione una clave previamente compartida:
>>
>>![SNS EVA vrack](images/ipsec-5.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cree y active el túnel:
>>
>>![SNS EVA vrack](images/ipsec-7.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Añada una regla de filtrado como la siguiente para autorizar el tráfico a través del túnel:
>>
>>![SNS EVA vrack](images/ipsec-8.png){.thumbnail}
>>

Sincronice las dos instancias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### **Configurar el segundo sitio**

Haga exactamente lo mismo que con el primer sitio, pero utilice VLAN200 para la red privada remota y la dirección IP adecuada para OVH_REMOTE_FW.

##### **Pruebe el túnel VPN IPsec**

Desde la primera instancia de un servidor web privado del sitio web:

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address>(<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=15.2 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=14.0 ms
```

Desde la segunda instancia de servidor web privado del sitio web:

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=16.9 ms
64 bytes from <ip_address>: icmp_seq=3 ttl=64 time=16.4 ms
```

#### Caso de uso n°4: VPN SSL/TLS (de cliente a sitio) <a name="step5"></a>

En este ejemplo, un cliente remoto de OpenVPN se conectará a la red privada dentro del VLAN200.

![SNS EVA vrack](images/stormshield-ssl-vpn.png){.thumbnail}

##### **Configuración del directorio LDAP**

- [Cree un directorio LDAP interno](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Directory_configuration/Creating_an_internal_LDAP.htm){.external} para administrar los usuarios de VPN.

En un escenario de producción, este LDAP/AD debe ser remoto en lugar de local.

![SNS EVA vrack](images/ssl-vpn-1.png){.thumbnail}

- Cree el directorio de usuarios:

![SNS EVA vrack](images/ssl-vpn-2.png){.thumbnail}

- Añada un usuario a nuestro directorio local:

![SNS EVA vrack](images/ssl-vpn-3.png){.thumbnail}

- Elija una contraseña para el nuevo usuario:

![SNS EVA vrack](images/ssl-vpn-4.png){.thumbnail}

##### **Configuración de objetos de red VPN**

Cree dos objetos de red para el cliente VPN SSL.

Red cliente UDP:

![SNS EVA vrack](images/ssl-vpn-5.png){.thumbnail}

Red de cliente TCP:

![SNS EVA vrack](images/ssl-vpn-6.png){.thumbnail}

##### **Configuración del servidor VPN SSL**

Configure el servidor VPN SSL:

![SNS EVA vrack](images/ssl-vpn-7.png){.thumbnail}

##### **Gestión de los permisos de los usuarios**

Añada a su usuario permiso para utilizar el servidor VPN SSL (`Configuration` > `Users` > `Access privileges` > `Detailed Access` > `Add`)

Busque su usuario:

![SNS EVA vrack](images/ssl-vpn-8.png){.thumbnail}

Autorizar VPN SSL :

![SNS EVA vrack](images/ssl-vpn-9.png){.thumbnail}

##### **Configuración de las reglas de filtrado**

Añada una regla de filtrado como la siguiente para permitir que el cliente VPN acceda al VLAN200:

![SNS EVA vrack](images/ssl-vpn-10.png){.thumbnail}

##### **Sincronización de las instancias SNS**

Sincronice las dos instancias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### **Probar la VPN SSL/TLS**

> [!primary]
> Para probar la conectividad SSL/TLS, utilice cualquier dispositivo que tenga OpenVPN instalado. Este ejemplo incluye la prueba de un cliente OpenVPN sobre una instancia OpenStack en otra región.
>
> En este ejemplo, utilizamos el cliente OpenVPN, pero también puede utilizar la [versión empaquetada por Stormshield](https://vpn.stormshield.eu/){.external}.

Descargue el archivo de configuración VPN (`Configuration` > `VPN` > `SSL VPN` > `Advanced configuration` > `Export the configuration file`).

Cree una instancia de cliente OpenVPN pública en la región que elija:

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network Ext-Net --key-name sguyenne ubuntu-vpn-client
```

Compruebe la dirección IP asignada a la instancia y copie en ella el archivo de configuración:

```bash
scp ~/Download/openvpn_mobile_client.ovpn ubuntu@<adresse_ip>:~
```

Conéctese a la instancia:

```bash
ssh ubuntu@<ip_address>
```

Instale el cliente OpenVPN:

```bash
sudo apt-get update
sudo apt-get install -y openvpn
```

Conéctese a la VPN:

```bash
sudo openvpn --config openvpn_mobile_client.ovpn 
Enter Auth Username: address@stormshield.ovh
🔐 Enter Auth Password: ******************
```

Prueba de ping de la instancia privada del servidor web:

```console
ssh ubuntu@<ip_address>
ping <ip_address>

PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=14.1 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=13.1 ms
```

## Más información <a name="gofurther"></a>
 
Si necesita formación o asistencia técnica para implementar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener una cotización y solicite a nuestros expertos de Professional Services que le ayuden en su caso de uso específico de su proyecto.
 
Interactúe con nuestra [comunidad de usuarios](/links/community).