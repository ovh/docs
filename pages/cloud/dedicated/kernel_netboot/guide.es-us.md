---
title: Iniciar su servidor en un kernel OVH
excerpt: Esta guía explica cómo iniciar el servidor en red en un kernel OVH.
slug: kernel-netboot
section: Uso avanzado
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 25/02/2022**

## Objectivo

La función Netboot es un servicio gratuito ofrecido por OVHcloud, le permite iniciar su servidor dedicado OVHcloud en un kernel precompilado proporcionado por OVHcloud. Una vez configurado de esta manera, su servidor automáticamente cargar el kernel desde la red, por lo que usted no tendrá que configurar nada más. Este método también le permite actualizar su kernel de manera muy sencilla porque OVHcloud compilada la última versión del kernel tan pronto como este disponible y lo hace disponible en Netboot.

**Esta guía realizará un arranque de red de su servidor usando un kernel OVHcloud.**

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/){.external}
- Acceso al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}

## Procedimiento

### Inicie el servidor desde el modo network

> [!primary]
>
> Esta parte esta destinada a servidor Linux. Para las distribuciones Windows, FreeBSD y Virtualizaciones, solo es posible el modo Disco duro o rescate.
>

Para iniciar el servidor en el kernel de red, primero debe de conectarse al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

Acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor de `Servidores dedicados`{.action}.

Busque “Boot” en la zona **Información general** y haga clic en `...`{.action} y luego en `Editar`{.action}.

![Netboot](images/netboot_2022.png){.thumbnail}

Seleccione `Arrancar en modo network`{.action}.

![Netboot](images/netboot_005.png){.thumbnail}

Seleccione el kernel disponible e escriba el Root device (partición donde está ubicada la partición raíz de su servidor).

Para determinar el dispositivo root en su servidor, vaya al fichero /etc/fstab en su servidor.

En SSH

```sh
cat /etc/fstab

/dev/sda1 / ext3 errors=remount-ro 0 1
/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2
/dev/sda3 swap swap defaults 0 0
  proc /proc proc defaults 0 0
sysfs /sys sysfs defaults 0 0
shm /dev/shm tmpfs nodev,nosuid,noexec 0 0
```

En nuestro ejemplo el dispositivo root sera  /dev/sda1.

Clic en `Siguiente`{.action}, y finalmente `Confirmar`{.action}

Una vez que haya realizado los cambios, haga clic en `...`{.action} a la derecha de “Estado” en la zona titulada **Estado de los servicios**. 

Haga clic en `Reiniciar`{.action} para aplicar los cambios.

![Netboot](images/netboot_004.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
