---
title: Gestión de las reglas de firewall y seguridad de los puertos en las redes privadas
slug: firewall_security_pci
excerpt: Cómo funcionan los grupos de seguridad en Public Cloud
section: OpenStack
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 16/06/2022**

## Objetivo

La plataforma OpenStack gestiona la seguridad de los cortafuegos combinando las reglas de conexión en **grupos de seguridad**. A continuación, las reglas se aplican asignando grupos de seguridad a los puertos de red.

Un **puerto** en el marco de [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} es un punto de conexión entre las subredes y los elementos de red (como instancias, load-balancers, routers, etc.).

**Esta guía explica cómo se gestionan los grupos de seguridad de las redes privadas en Public Cloud.**

> [!primary]
>
> Esta guía solo es aplicable a las configuraciones de redes privadas. En cuanto a las redes públicas, las reglas del firewall son globales.
>
> A continuación ofrecemos los [detalles de la migración](#migration) relativa a los cambios realizados en las [regiones](#regions) de Public Cloud de OpenStack.
>

## Requisitos

- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/us/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/)
- [Cargar las variables de entorno necesarias para OpenStack](https://docs.ovh.com/us/es/public-cloud/cargar-las-variables-de-entorno-openstack/)

## Procedimiento

### Configuración predeterminada

Cada puerto de red está unido a un grupo de seguridad que contiene reglas específicas.

El grupo de seguridad "default" contiene las siguientes reglas:

```bash
openstack security group rule list default

+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| 3a5564b7-5b68-4923-b796-26eb623c5b53 | None        | IPv6      | ::/0      |            | None                  |
| 43f2b673-9cbc-4bac-ad66-22ef4789d0fc | None        | IPv6      | ::/0      |            | None                  |
| a6a1ecfd-4713-4316-a020-74eccd49fd6c | None        | IPv4      | 0.0.0.0/0 |            | None                  |
| cd66a601-de94-4dbe-ae21-44792229d351 | None        | IPv4      | 0.0.0.0/0 |            | None                  |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
```

La respuesta muestra que todas las conexiones están autorizadas para cualquier protocolo y en ambos sentidos.

Según las regiones, la implementación puede ser diferente, pero el resultado es el mismo: todas las conexiones están autorizadas.

En consecuencia, todos los puertos de red (públicos y privados) permiten cada conexión al inicio de una instancia.

### Gestionar las reglas de su firewall privado

#### Añadir reglas

Si desea configurar reglas específicas, puede cambiar el grupo de seguridad predeterminado. También puede crear un nuevo grupo de seguridad y asociarle su puerto de red.

Utilice este comando para crear el grupo:

```bash
openstack security group create private

+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field           | Value                                                                                                                                                                      |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
| description     | private                                                                                                                                                                    |
| id              | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                       |
| location        | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone=    |
| name            | private                                                                                                                                                                    |
| project_id      | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                           |
| revision_number | 1                                                                                                                                                                          |
| rules           | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv4', id='54fae025-3439-4e45-8745-2ffe5b261f72', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
|                 | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv6', id='ad1aa507-79bd-434f-b674-221ef41d9ba6', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
| stateful        | None                                                                                                                                                                       |
| tags            | []                                                                                                                                                                         |
| updated_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Este ejemplo de grupo de seguridad sólo tiene reglas de salida, lo que significa que no se permitirá ninguna comunicación de entrada.

Para añadir una regla para, por ejemplo, las conexiones SSH, utilice el siguiente comando:

```bash
openstack security group rule create --protocol tcp --dst-port 22 private

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field             | Value                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
| description       |                                                                                                                                                                         |
| direction         | ingress                                                                                                                                                                 |
| ether_type        | IPv4                                                                                                                                                                    |
| id                | 8f026e18-1c8b-4042-8655-10c9a773d131                                                                                                                                    |
| location          | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone= |
| name              | None                                                                                                                                                                    |
| port_range_max    | 22                                                                                                                                                                      |
| port_range_min    | 22                                                                                                                                                                      |
| project_id        | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                        |
| protocol          | tcp                                                                                                                                                                     |
| remote_group_id   | None                                                                                                                                                                    |
| remote_ip_prefix  | 0.0.0.0/0                                                                                                                                                               |
| revision_number   | 1                                                                                                                                                                       |
| security_group_id | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                    |
| tags              | []                                                                                                                                                                      |
| updated_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```


Introduzca el siguiente comando para asociar su grupo de seguridad a su puerto:

```bash
openstack port set --security-group private 5be009d9-fc2e-4bf5-a152-dab52614b02d
```

#### Diferencias de comportamiento según las regiones <a name="regions"></a>

La configuración por defecto de la red privada puede variar en función de la región utilizada.

> [!primary]
> En algunas regiones, la propiedad "port security" se considera *hostil* aunque no aplica ninguna regla sobre la red privada. En algunas otras regiones (en función de la versión de OpenStack implementada), la propiedad "port security" se considera *enabled* y las reglas se aplican correctamente en la red privada.
> 


En resumen, las siguientes regiones ejecutan Newton OpenStack release y **ninguna regla de cortafuegos funcionará** para sus redes privadas, aunque la seguridad de los puertos esté activada:

- Singapur: SGP1
- Sídney: SYD1
- Hillsboro: US-WEST-OR-1
- Vint Hill: US-EAST-VA-1

En las siguientes regiones (ejecutando la versión Stein OpenStack), las reglas de firewall para las redes privadas **funcionarán** como se había previsto:

- Beauharnois: BHS1, BHS3, BHS5
- Frankfurt: DE1
- Gravelines: GRA1, GRA3, GRA5, GRA7, GRA9, GRA11
- Estrasburgo: SBG5, SBG7
- Londres: UK1
- Varsovia: WAW1

OVHcloud actualizará progresivamente todas las regiones de Newton a Stein para que la funcionalidad "port security" esté disponible.

Para evitar interrupciones del servicio durante la actualización, el valor *False* se asignará a la propiedad "port security" de todas las redes ya creadas. Una vez que haya actualizado una región en la versión Stein OpenStack, si quiere utilizar reglas de firewall en redes privadas, deberá establecer la propiedad "port security" en *True*.

Ejecute el siguiente comando para comprobar si la propiedad "port security" está activada en su puerto de red privada:

```bash
openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
```

### Proceso de migración <a name="migration"></a>

La migración seguirá el siguiente proceso:

- Las reglas de firewall para los nuevos puertos no se aplicarán hasta que active la propiedad "port security" en el nuevo puerto. Nada cambia en los puertos existentes.
- Las regiones de OpenStack pasarán a la versión Stein.
- Las regiones de OpenStack en versión Stein pasarán a una nueva versión de OpenVSwitch.

> [!primary]
> A partir de esta etapa, para los usuarios de Terraform, es necesario forzar la configuración del [port security a "false"](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_network_v2#port_security_enabled){.external} para que los playbooks puedan funcionar.
>

- Puede activar "port security" en las regiones Stein.
- El puerto de seguridad por defecto se modificará **activándolo** (se enviará una comunicación global a su debido tiempo).
- Las reglas de firewall funcionarán para los nuevos puertos. Nada cambia en los puertos existentes.
- Se activará la opción que permite activar la propiedad "port security" en los puertos existentes.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
