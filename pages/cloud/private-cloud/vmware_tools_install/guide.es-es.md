---
title: 'Instalar VMware Tools'
slug: instalar_las_vmware_tools
excerpt: 'Cómo instalar VMware Tools en Linux o Windows'
section: 'Gestión de las máquinas virtuales'
order: 6
updated: 2022-02-01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 01/02/2022**

## Objetivo

VMware Tools mejora el rendimiento de una máquina virtual y permite utilizar muchas de sus funcionalidades simples en los productos VMware.

**Esta guía explica los pasos que debe seguir para instalar el módulo.**

## Requisitos

- Tener un usuario activo (creado en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)

## Procedimiento

El procedimiento de instalación de VMware Tools depende del sistema operativo de la máquina virtual. Para consultar el procedimiento específico de cada sistema operativo, consulte la [documentación de VMware sobre VMware Tools](https://kb.vmware.com/s/article/1014294){.external-link}.

### Linux

#### Versiones recientes

La mayoría de las distribuciones Linux recientes permiten instalar VMware Tools a través de sus sistemas de gestión de paquetes, con el nombre [Open VM Tools](https://kb.vmware.com/s/article/2073803){.external-link}.

Eso permite mantener VMware Tools actualizado del mismo modo que los demás componentes del sistema operativo de la máquina virtual. 

Si la distribución que usted utiliza ofrece el paquete Open VM Tools, podrá encontrarlo con el siguiente nombre: *open-vm-tools*.


Este método de instalación es válido al menos para las siguientes versiones de GNU/Linux:

- Fedora 19 o superior
- Debian 7.x o superior
- openSUSE 11.x o superior
- Ubuntu 12.04 LTS o superior
- Red Hat Enterprise Linux 7.0 o superior
- CentOS 7.0 o superior
- Oracle Linux 7.0 o superior
- SUSE Linux Enterprise 11 SP4 o superior

#### Versiones antiguas

Para montar el disco de VMware Tools desde el cliente web Vsphere, haga clic derecho en la MV, luego en `Guest OS`{.action} y, por último, en `Install VMware Tools`{.action}.

![installer VMware Tools](images/tools.png){.thumbnail}

A continuación, monte el volumen activado por el comando:

```sh
>     # mount /dev/cdrom /mnt
```

A continuación, descomprima el archivo comprimido de VMware Tools. En este caso, lo haremos en el directorio /tmp.

```sh
> cd /tmp 
> tar xvf /mnt/VMwareTools*.tar.gz
> cd vmware-tools-distrib
> ./vmware-install.pl default
```

> [!primary]
>
> Si quiere responder por defecto a las respuestas propuestas y no interrumpirse durante la instalación, añada "default" como argumento a la línea de instalación.
> 

Cuando finalice la instalación, el disco se eliminará automáticamente del sistema.

### Windows

Una vez montado el volumen a través de la opción "Install/Upgrade VMware Tools", acceda al disco en el ""equipo de trabajo" de su MV. Haga doble clic en el dispositivo VMware Tools para comenzar la instalación.

![VMware tools windows](images/windows.jpg){.thumbnail}

El asistente de instalación le pedirá que acepte las licencias y que elija el tipo de instalación (le recomendamos que instale todo el servidor).

Una vez finalizada la instalación, reinicie la máquina para que se apliquen los cambios. El lector de CD se desmontará automáticamente al finalizar la instalación.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
