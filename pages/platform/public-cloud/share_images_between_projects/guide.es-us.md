---
title: "Compartir imágenes entre proyectos de Public Cloud"
excerpt: "Cómo compartir imágenes entre proyectos de Public Cloud utilizando OpenStack"
updated: 2023-08-07
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

En ocasiones, es posible que necesite compartir una imagen de [backup de instancia](/pages/platform/public-cloud/save_an_instance) o una imagen de [backup por volumen](/pages/platform/public-cloud/volume-backup) entre varios proyectos de Public Cloud.

Con OpenStack, puede compartir una imagen entre varios proyectos, aunque no pertenezcan a la misma cuenta.
Esta funcionalidad ofrece numerosas posibilidades, pero también conlleva riesgos. Por lo tanto, es importante entender sus principios.

Por ejemplo, si desea compartir una imagen de un proyecto A con un proyecto B (en la misma cuenta o en una cuenta diferente), se aplican las reglas siguientes:

- La imagen permanece físicamente unida al proyecto A. El Proyecto B sólo tiene "permiso de acceso" a esta imagen.
- Si el Proyecto A elimina el acceso a la imagen (eliminación de la LCA, eliminación de la imagen, eliminación del proyecto para facturas impagadas, etc.), las instancias que se ejecutan a partir de esta imagen en el Proyecto B podrían dejar de funcionar debido a problemas de migración o de reconstrucción.

Por lo tanto, es importante tener esto en cuenta antes de comprometerse con esta configuración.
Para más información, consulte la [documentación oficial de OpenStack](https://docs.openstack.org/image-guide/share-images.html){.external}.

**Esta guía explica cómo compartir imágenes entre uno o varios proyectos, conservando al mismo tiempo la configuración y el estado de la imagen.**

## Requisitos

Antes de seguir estos pasos, le recomendamos que consulte esta guía:

- [Preparar el entorno para utilizar la API de OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)

También necesitará:

- Tener una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud;
- [Haber creado un usuario de OpenStack](/pages/platform/public-cloud/create_and_delete_a_user)

> [!primary]
>
> Esta guía hace referencia al uso del [OpenStack Client](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

## Procedimiento

### Compartir una imagen

En primer lugar, ejecute el siguiente comando para enumerar las imágenes existentes:

```bash
$ openstack image list --private
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```

> [!warning]
> 
> Para poder compartir una imagen, primero debe estar en visibilidad compartida (*shared visibility*).
>

```bash
$ openstack image set --shared <Image_UUID>
```

### Agregar un proyecto a una imagen

El siguiente paso consiste en agregar el UUID de otro proyecto como miembro de la imagen. En nuestro ejemplo a continuación, añadimos el UUID del « Proyecto B ».

```bash
$ openstack image add project 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B>
+------------+--------------------------------------+
| Field      | Value                                |
+------------+--------------------------------------+
| created_at | 2020-01-27T13:26:52Z                 |
| image_id   | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| member_id  | <UUID_Project_B>                      |
| schema     | /v2/schemas/member                   |
| status     | pending                              |
| updated_at | 2020-01-30T15:18:00Z                 |
+------------+--------------------------------------+
```

A continuación, compruebe la solicitud en el proyecto B:


```bash
$ openstack image member list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```


Si la solicitud de uso compartido tiene el estado `pending`, deberá aceptarla:

```bash
$ openstack image set --accept 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | eff99684d8294dbe8c2d4dd7407073f1 | accepted |
+--------------------------------------+----------------------------------+----------+
```

Una vez aceptada la solicitud de uso compartido, compruebe que puede ver y acceder a la imagen:

```bash
$ openstack image show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                  |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 1b19c9e5bdd36b9010de0164dd8b245e                                                                                                                                                       |
| container_format | bare                                                                                                                                                                                   |
| created_at       | 2018-05-08T15:38:50Z                                                                                                                                                                   |
| disk_format      | raw                                                                                                                                                                                    |
| file             | /v2/images/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba/file                                                                                                                                   |
| id               | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba                                                                                                                                                   |
| min_disk         | 0                                                                                                                                                                                      |
| min_ram          | 0                                                                                                                                                                                      |
| name             | pfsense                                                                                                                                                                                |
| owner            | 35c9ee22e5c84c1097a5652b0abcbab3                                                                                                                                                       |
| properties       | direct_url='swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', locations='[{'url': 'swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', 'metadata': {}}]' |
| protected        | False                                                                                                                                                                                  |
| schema           | /v2/schemas/image                                                                                                                                                                      |
| size             | 10737418240                                                                                                                                                                            |
| status           | active                                                                                                                                                                                 |
| tags             |                                                                                                                                                                                        |
| updated_at       | 2018-05-08T15:53:57Z                                                                                                                                                                   |
| virtual_size     | None                                                                                                                                                                                   |
| visibility       | private                                                                                                                                                                                |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Comprobar los miembros de una imagen

```bash
$ openstack image member list 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                      | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                      | accepted |
+--------------------------------------+----------------------------------+----------+
```

### Eliminar un miembro de una imagen o dejar de compartir una imagen

```bash
$ openstack image remove project <image> <UUID_Project_To_Delete>
```

## Más información

[Transferir el backup de una instancia entre datacenters](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.