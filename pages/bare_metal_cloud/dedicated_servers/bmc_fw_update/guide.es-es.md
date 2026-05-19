---
title: "Verificar la versión del firmware BMC en un servidor dedicado Linux"
excerpt: "Verifique la versión del firmware BMC en su servidor dedicado OVHcloud para garantizar la compatibilidad de la gestión de hardware."
updated: 2026-02-25
---

## Objetivo

Un controlador de administración de placa base (BMC) es responsable de la administración remota y el control de bajo nivel del hardware del servidor. Una versión obsoleta puede afectar directamente a la seguridad, la estabilidad y la capacidad de gestión del servidor. Es necesario mantener actualizado el firmware del BMC para corregir los fallos de seguridad, mantener la estabilidad del sistema y cumplir con los requisitos de conformidad.

**Este guía le indica los pasos a seguir para verificar la versión del firmware BMC en un servidor dedicado.**

## Requisitos

- Un [servidor dedicado](/links/bare-metal/bare-metal) en su cuenta de OVHcloud.
- Derechos de administrador (sudo).
- Su servidor dedicado debe estar conectado a Internet (solo si la herramienta `ipmitool` no está ya instalada).

> [!primary]
> Debido a la configuración específica de nuestros servicios, la actualización del BMC se realiza exclusivamente a través de la automatización de OVHcloud, bajo la supervisión de nuestros técnicos. No se ofrece ningún paquete ni mecanismo de actualización autónomo.
>

### En un Servidor Linux

En primer lugar, debe instalar la herramienta `ipmitool`. Esta herramienta permite consultar el BMC a través de la interfaz IPMI. Para más información, consulte la documentación oficial: <https://linux.die.net/man/1/ipmitool>.

Según la distribución Linux, el comando puede variar:

> [!tabs]
> **Debian/Ubuntu**
>>
>> ```sh
>> sudo apt update
>> sudo apt install ipmitool -y
>> ```
>>
> **RHEL/CentOS/AlmaLinux/Rocky Linux**
>>
>> ```sh
>> sudo dnf install epel-release -y
>> sudo dnf install ipmitool -y
>> ```
>>

Verificar la versión del firmware BMC con el siguiente comando:

```sh
sudo ipmitool mc info
```

![bmc](images/ipmi_tool.png){.thumbnail} 

- Si la versión del firmware es inferior o igual a 1.14, póngase en contacto con nuestro soporte creando un [ticket de asistencia desde el centro de ayuda de OVHcloud](/links/support-contact) para solicitar una actualización del firmware.
- Si la versión es superior a 1.14, no es necesario realizar ninguna acción.


### En un Servidor Windows

Actualmente, no podemos proporcionar el procedimiento para los servidores que funcionan bajo el sistema operativo Windows. Le recomendamos reiniciar su servidor Windows en nuestro entorno [modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) para verificar la versión siguiendo las instrucciones que se indican a continuación.

### En un Servidor en modo rescue

Una vez que su servidor se haya reiniciado en [modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), instale la herramienta `ipmitool`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

A continuación, verifique la versión del firmware:

```sh
ipmitool mc info
```

![bmc](images/ipmi_tool_rescue.png){.thumbnail}

- Si la versión del firmware es inferior o igual a 1.14, póngase en contacto con nuestro soporte creando un [ticket de asistencia desde el centro de ayuda de OVHcloud](/links/support-contact) para solicitar una actualización del firmware.
- Si la versión es superior a 1.14, no es necesario realizar ninguna acción.

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), póngase en contacto con los [socios de OVHcloud](/links/partner).

Si desea beneficiarse de un asesoramiento sobre el uso y la configuración de sus soluciones OVHcloud, le proponemos consultar nuestras diversas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).