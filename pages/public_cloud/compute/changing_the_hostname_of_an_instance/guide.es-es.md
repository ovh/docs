---
title: 'Cambiar el hostname de una instancia de Public Cloud'
excerpt: 'Esta guía explica cómo reconfigurar cloud-init para poder cambiar el hostname de una instancia'
updated: 2025-03-20
---

## Objetivo

El módulo **cloud-init** permite configurar una [instancia de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/){.external} al crearla, pero también cada vez que se reinicie. Por eso, si quiere volver a configurar el hostname, bien porque se produjo un error al crear la instancia, o bien para reconfigurar el servidor de correo, deberá desactivar primero el módulo cloud-init, que es el encargado de configurar el hostname para que no se restablezca.

**Esta guía explica cómo reconfigurar cloud-init para poder cambiar el hostname de una instancia.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya responsabilidad recae en usted. No tenemos acceso a estas máquinas, por lo que no somos los administradores de las mismas y no podremos asistirle. Por lo tanto, usted es responsable de la gestión del software y de la seguridad diaria.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Para más información, consulte la sección ["Más información"](#mas-informacion) de esta guía.
>
> Esta guía está destinada a las instancias basadas en distribuciones Linux **únicam**
>

## Requisitos

- Haber creado una [instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- [Conectarse a la instancia por SSH](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) (sudo).

## Procedimiento

### Desactivar el módulo cloud-init

> [!primary]
>
> Para los propósitos de esta guía, usaremos el editor de archivos **vi**, ya que está presente por defecto en las distribuciones Linux. Por supuesto, puedes utilizar el editor que prefieras.
>
> Uso básico de vi :
>
> - Pulsa **i** para cambiar al modo de inserción de texto.
> - Pulse **Escape** (Esc) para salir del modo de inserción.
> Pulsa **:wq** y luego **Enter** para guardar y salir.
> Pulse **:q!** y **Enter** para salir sin guardar.


Para desactivar cloud-init, hay que empezar por modificar el archivo de configuración:

```sh
sudo vi /etc/cloud/cloud.cfg
```

Añada (o modifique si ya existen) las siguientes dos líneas:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Cambiar el hostname

El primer paso es cambiar el nombre del host (*hostname*). En este ejemplo, cambiaremos el nombre de host a **webserver**. Por supuesto, puedes cambiarlo según tus preferencias:

```sh
sudo vi /etc/hostname
```

Añade o sustituye el contenido por:

```sh
webserver
```

A continuación, edite el archivo `/etc/hosts`:

```sh
sudo vi /etc/hosts
```

Añade o sustituye el contenido por:

```sh
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

Interactúe con nuestra [comunidad de usuarios](/links/community).