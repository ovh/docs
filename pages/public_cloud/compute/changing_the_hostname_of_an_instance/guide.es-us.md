---
title: 'Cambiar el hostname de una instancia de Public Cloud'
excerpt: 'Esta guía explica cómo reconfigurar cloud-init para poder cambiar el hostname de una instancia'
updated: 2018-09-18
---

## Objetivo

El módulo **cloud-init** permite configurar una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/){.external} al crearla, pero también cada vez que se reinicie. Por eso, si quiere volver a configurar el hostname, bien porque se produjo un error al crear la instancia, o bien para reconfigurar el servidor de correo, deberá desactivar primero el módulo cloud-init, que es el encargado de configurar el hostname para que no se restablezca.

**Esta guía explica cómo reconfigurar cloud-init para poder cambiar el hostname de una instancia.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Haber creado una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/){.external}.
- [Conectarse a la instancia por SSH](/pages/public_cloud/compute/public-cloud-first-steps) (sudo).

## Procedimiento

### Desactivar el módulo cloud-init

En primer lugar, edite el archivo de configuración:

```sh
sudo vim /etc/cloud/cloud.cfg
```

Añada (o modifique si ya existen) las siguientes dos líneas:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Cambiar el hostname

El primer paso consiste en cambiar el hostname:

```sh
sudo vim /etc/hostname
webserver
```

A continuación, edite el archivo **/etc/hosts**:

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Reinicie la instancia:

```bash
sudo reboot
```

Una vez reiniciada, el cambio del hostname se habrá aplicado correctamente: 

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Más información 

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com](https://community.ovh.com/en/){.external}.
