---
title: Redimensionar una instancia de Public Cloud utilizando la CLI de OpenStack
excerpt: Descubra cómo adaptar sus recursos para hacer frente a una mayor actividad
updated: 2023-09-26
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Debido al aumento de la actividad, o simplemente para responder a nuevas necesidades, su instancia puede quedarse sin recursos y ser incapaz de responder a una nueva carga. Gracias al Public Cloud de OVHcloud, podrá aumentar los recursos disponibles para su instancia en solo unos pasos.

**Descubra cómo redimensionar su instancia de Public Cloud utilizando la CLI de OpenStack.**

> [!primary]
> **Límites:**
>
> - Para las instancias clásicas sólo es posible cambiar el tamaño a un modelo superior (*upscaling*).
> - Una [instancia Metal](https://www.ovhcloud.com/es/public-cloud/metal-instances/) sólo puede redimensionarse a otro modelo **Metal**.
> - Las instancias *Flex* permiten el redimensionamiento a modelos superiores o inferiores, debido a un tamaño de disco único y bloqueado.
>

## Requisitos

- Una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud
- Un [usuario de OpenStack](create_and_delete_a_user1.)
- Disponga de un [entorno OpenStack preparado para CLI](prepare_the_environment_for_using_the_openstack_api1.)
- Haber definido las [variables de entorno OpenStack](loading_openstack_environment_variables1.)

## Procedimiento

> [!warning]
>
> Esta operación provocará el cierre de la instancia durante toda la operación.
>

### Guardar copia de seguridad de la instancia

Al cambiar el tamaño, la instancia se detiene durante toda la operación. Por lo tanto, antes de continuar, se recomienda realizar una copia de seguridad de la instancia y detener todos los procesos en ejecución. Para más información sobre los métodos de backup, consulte la [guía dedicada](save_an_instance1.).

### Lista de instancias

El primer paso consiste en enumerar las instancias para obtener el nombre de la instancia cuyo tamaño desea cambiar. En nuestro ejemplo, queremos redimensionar la instancia denominada « OVHcloudinstance ».

```bash
$ openstack server list
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| ID                                   | Name             | Image      | Flavor |        | Status | Networks                                    | 
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| 19298898-934b-xxxx-xxxx-xxxxxxxxxxxx | testinstance1    | Centos 7     | d2-2 |        | ACTIVE | Ext-Net=111.112.113.9, 2607:5300:xxx:xxxx::ae9                                                       
| 23ce0491-5e29-xxxx-xxxx-xxxxxxxxxxxx | testinstance2    | Ubuntu 23.04 | d2-2 |        | ACTIVE | Ext-Net=111.112.113.61, 2607:5300:xxx:xxxx::c0a                                                          
| 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx | OVHcloudinstance | Debian 12    | b2-7 |        | ACTIVE | Ext-Net=111.112.113.200, 2607:5300:xxx:xxxx::9a3                                  
+--------------------------------------+----------------------------------------------------------------+--------+----------------------------------------------+
```

### Lista de modelos <a name="flavorlist"></a>

A continuación, deberá ver la lista de modelos (*flavors*) disponibles en su región para recuperar el ID de la nueva plantilla. En nuestro ejemplo, queremos redimensionar nuestra instancia en un modelo b2-30 con ID `09889e6-d1fc-4967-baea-19fd97fd83a8`.

```bash
$ openstack flavor list
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 009ee05f-9430-4c85-b9f7-66297db22731 | win-hg-7-ssd-flex   |   7000 |   50 |         0 |     2 | True      |
| 01ef1e13-5a85-4c4b-84f4-9e9da85da51d | r2-15               |  15000 |   50 |         0 |     2 | True      |
| 01f4f140-3d51-4d94-ad26-9aa85941dc63 | win-hg-60-ssd-flex  |  60000 |   50 |         0 |    16 | True      |
| 041d0272-4db5-4c13-9861-a4e17c48fd9c | r2-60               |  60000 |  100 |         0 |     4 | True      |
| 0531d26b-e117-4cdb-9e83-c16727f4737e | c2-60               |  60000 |  400 |         0 |    16 | True      |
| 05ebb9db-d6c8-4b7a-bf38-eea519aa5262 | win-r2-120-flex     | 120000 |   50 |         0 |     8 | True      |
| 098889e6-d1fc-4967-baea-19fd97fd83a8 | b2-30               |  30000 |  200 |         0 |     8 | True      |
| 0ec183bd-d014-48ad-a71e-1233c5f5c79b | win-r2-30           |  30000 |   50 |         0 |     2 | True      |
| 1070c9d6-5bc7-45db-bab2-073bff119f22 | r2-30               |  30000 |   50 |         0 |     2 | True      |
| 108e2180-e257-4054-aa23-18b123d06ed8 | win-hg-120-ssd-flex | 120000 |   50 |         0 |    32 | True      |
| 11a77f5f-5cbe-4394-ba85-d4afb2b0bade | eg-30-flex          |  30000 |   50 |         0 |     8 | True      |
| 125a6e9e-7522-463a-a90d-121abaabf21a | win-b2-30-flex      |  30000 |   50 |         0 |     8 | True      |
| 1335874a-7ddd-453b-b655-d9bf044ef5f9 | eg-120-ssd          | 120000 |  800 |         0 |    32 | True      |
| fd80c213-d30f-4e0c-ae9d-ecdcb422fc1b | eg-7-ssd            |   7000 |  100 |         0 |     2 | True      |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

> [!warning]
> Tenga en cuenta que sólo puede cambiar el tamaño de una instancia de un modelo Linux a otro y de un modelo Windows a otro Windows.

### Redimensionar la instancia

Una vez que haya recuperado la información, ya puede redimensionar su instancia:

```bash
$  openstack server resize --flavor <FLAVOR-ID> <INSTANCE-NAME>
```

Por ejemplo, para redimensionar nuestra instancia « OVHcloudInstance »:

```bash
$ openstack server resize --flavor 098889e6-d1fc-4967-baea-19fd97fd83a8 OVHcloudinstance
```

Puede realizar un seguimiento del proceso ejecutando con frecuencia el siguiente comando. El estado (*status*) debe ser `RESIZE`.

```bash
$ openstack server show OVHcloudinstance
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                              |
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| id                                  | 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx                                                                                                                                                              |
| image                               | Debian 12 (31e40bc4-5b35-4c5f-96ff-37df3660dec0)                                                                                                                                                   |

| key_name                            | OVHcloud                                                                                                                                                                                               |
| name                                | OVHcloudinstance                                                                                                                                                                                     |
| status                              | RESIZE                                                                                                                                                                                             |
| tags                                |                                                                                                                                                                                                    |
| task_state                          | resize_migrating                                                                                                                                                                                   |
| updated                             | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| updated_at                          | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| vm_state                            | active           
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Reducir una instancia

> [!warning]
> Esta opción sólo está disponible para modelos *Flex*.
>

Si desea reducir su instancia, puede hacerlo siguiendo los mismos pasos mencionados [arriba](#flavorlist.) y utilizando un ID diferente en el campo <FLAVOR-ID>.

## Más información

[Redimensionar una instancia de Public Cloud desde el área de cliente de OVHcloud](resize_instance_manager1.)

[Redimensionar una instancia de Public Cloud a través de Horizon](resize_of_an_instance1.)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.