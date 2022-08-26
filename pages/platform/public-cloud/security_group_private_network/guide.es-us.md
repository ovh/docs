---
title: Gestión de las reglas de firewall y port security en las redes que utilizan OpenStack CLI
slug: firewall_security_pci
excerpt: Cómo funcionan los grupos de seguridad en Public Cloud
section: OpenStack
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 26/08/2022**

## Objetivo

La plataforma OpenStack gestiona la seguridad de los cortafuegos combinando las reglas de conexión en **grupos de seguridad**. A continuación, las reglas se aplican asignando grupos de seguridad a los puertos de red.

Un **puerto** en el marco de [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} es un punto de conexión entre las subredes y los elementos de red (como instancias, load-balancers, routers, etc.).

**Esta guía explica cómo se gestionan los grupos de seguridad de las redes públicas y privadas en Public Cloud.**

## Requisitos

- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/us/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/)
- [Cargar las variables de entorno necesarias para OpenStack](https://docs.ovh.com/us/es/public-cloud/cargar-las-variables-de-entorno-openstack/)

## Procedimiento

### Procedimiento de activación <a name="activation"></a>

> [!primary]
>
> Esta sección de la guía solo se aplica a las configuraciones de redes privadas.

#### Para una red privada ya creada

Para evitar cualquier ruptura de la configuración durante las subidas de versión de OpenStack Stein y Open vSwitch, el parámetro "port security" se ha establecido en las redes existentes.

Debe utilizar la CLI `OpenStack` para activar el "port security" en sus puertos y su red existente.

En primer lugar, si quiere utilizar reglas de firewall en redes privadas, deberá definir la propiedad "port security" en "True":

```bash
openstack network set --enable-port-security <network_ID>
```

A continuación, deberá activar el puerto de seguridad en el puerto del servicio de la red. 

> [!primary]
> Le recordamos que, para cargar el puerto, puede utilizar la CLI OpenStack. Ejecute el comando `openstack port list --server <server_ID>` para recuperar los puertos de un servidor determinado.
>

Para todos los servicios que tengan un puerto activo en esta red, active el port security :

```bash
openstack port set --enable-port-security <port_ID>
```

Compruebe si el "port security" está activado en un puerto en particular:

```bash
openstack port show <port-ID> -f value -c port_security_enabled
```

El resultado debería ser similar al siguiente:

<pre class="console"><code>$ openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
</code></pre>

#### Para una nueva red privada:

Al actualizarse a la versión Stein en las regiones de OpenStack y actualizarse la versión de Open vSwitch ([Private network port default configuration change](https://public-cloud.status-ovhcloud.com/incidents/z6qq4bcvsn11)), el parámetro de "port security" se definirá en "True" por defecto en cualquier red privada recién creada.

Esto nos asegurará que somos coherentes con la política "True" por defecto, como en los despliegues de vanilla de OpenStack.

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

Si desea configurar reglas específicas, puede crear un nuevo grupo de seguridad y asociarle su puerto de red.

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

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
