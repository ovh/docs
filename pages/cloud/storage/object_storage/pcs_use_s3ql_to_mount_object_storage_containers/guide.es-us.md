---
title: Object Storage Swift - Montar un contenedor de objetos con S3QL
slug: pcs/use-s3ql-to-mount-object-storage-containers
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1908
order: 160
---

**Última actualización: 27/10/2021**

##
S3QL es un sistema de archivos que se puede montar para almacenar datos en local utilizando soluciones de almacenamiento en la nube como el Object Storage.

Ofrece múltiples funcionalidades, tales como compresión transparente, encriptado o creación de snapshots, que lo hacen especialmente adecuado para la creación de backups.

Puede encontrar más información directamente en la [web del autor](http://www.rath.org/s3ql-docs/).

Esta guía explica cómo montar un contenedor de objetos como sistema de archivos.

## Requisitos

- [Crear y eliminar un usuario de OpenStack](https://docs.ovh.com/us/es/public-cloud/crear-y-eliminar-un-usuario-de-openstack/)
- [Añadir espacios de almacenamiento](https://docs.ovh.com/us/es/storage/horizon_crear_un_contenedor_de_objetos/)

## Procedimiento

> [!primary]
>
> Utilizar un contenedor de objetos como sistema de archivos puede reducir el rendimiento de las operaciones.
>

### Creación del sistema de archivos

Crear un archivo que contenga los datos de conexión:

```bash
admin@servidor1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```


Puede consultar los datos TENANT_NAME y USERNAME en el archivo OpenRC. La guía «[Acceso y seguridad en Horizon](https://docs.ovh.com/us/es/public-cloud/acceso_y_seguridad_en_horizon/)» explica cómo.

Los argumentos REGION_NAME y CT_NAME deben adaptarse según el nombre y la localización del contenedor de objetos.

Cambie los permisos de acceso al archivo de autenticación:

```bash
admin@servidor1:~$ sudo chmod 600 s3qlcredentials.txt
```

Formate el contenedor de objetos:

```bash
admin@servidor1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
```

A continuación deberá añadir la passphrase al archivo de autenticación.

Si no quiere configurar una, deberá eliminar la línea «fs-passphrase: PASSPHRASE» del archivo de autenticación para poder continuar el montaje del sistema de archivos.

### Montaje del sistema de archivos

Cree el punto de montaje:

```bash
admin@servidor1:~$ sudo mkdir /mnt/container
```

Monte el contenedor de objetos:

```bash
admin@servidor1:~$ sudo mount.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME /mnt/container/
```

Compruebe el montaje:

```bash
admin@servidor1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME 1.0T 0 1.0T 0% /mnt/container
```

Atención: Ya no será posible utilizar S3QL en modo «offline». Por otra parte, no se recomienda configurar la persistencia mediante el archivo «/etc/fstab», sino utilizando un script que se ejecute al iniciar el servidor.

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
