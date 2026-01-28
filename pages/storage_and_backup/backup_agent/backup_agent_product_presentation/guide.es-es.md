---
title: "Backup Agent - Presentación de la oferta"
excerpt: "Presentación de las funciones y ventajas del producto Backup Agent"
updated: 2026-01-28
---

## Objetivo

Este guía le ayudará a comprender el funcionamiento del producto Backup Agent y sus ventajas para sus servicios Bare Metal.

## Presentación del producto

El producto Backup Agent permite hacer copias de seguridad de sus servidores Bare Metal mediante un agente que, según una política de copia de seguridad que haya elegido, enviará los datos de su servidor a un punto de almacenamiento externo.

El producto Backup Agent se basa en dos productos del editor de software Veeam:

- La Veeam Service Provider Console (VSPC).
- El Veeam Agent.

El Veeam Agent es un software creado por Veeam, que se instala en su sistema operativo bajo Linux y Windows, y le permite hacer copias de seguridad de su sistema.

La VSPC permite enviar las políticas de copia de seguridad a los agentes registrados, y permite proporcionar las informaciones de almacenamiento y las credenciales a cada agente al inicio de su copia de seguridad.
Descubra cómo navegar en la VSPC a través de [este guía](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation).

Cuando adquiere el producto, recibe un correo electrónico confirmando la entrega del servicio así como las credenciales de acceso a su tenant en la VSPC. Este cuenta es de solo lectura y le dará acceso a visualizaciones de sus copias de seguridad y de sus agentes.

Una vez que el agente obtiene las informaciones, envía directamente los datos al punto de almacenamiento sin pasar nunca por la infraestructura VSPC.

## Puntos clave

Varios puntos fuertes están presentes en esta oferta:

- Primera política de copia de seguridad automática con 14 días de retención.
- Posibilidad de pasar a 30 días de retención.
- La política hace una copia de seguridad completa de su servidor.
- 14 días de inmutabilidad en nuestros buckets.
- El período de copias de seguridad automáticas es entre 22h00 y 06h00 (zona horaria CET para Europa - zona horaria EST para Canadá y Asia).
- Cifrado gestionado por OVHcloud del almacenamiento que alberga sus datos de copia de seguridad.
- Envío directo de los datos de copia de seguridad al bucket sin hacer una copia en nuestra infraestructura.
- Punto de almacenamiento siempre situado lejos de la localización de su servidor Bare Metal (si está en Roubaix, su punto de almacenamiento será en Gravelines).

También es importante tener en cuenta que:

- La política de copia de seguridad es restringida, no puede modificarla.
- No puede configurar una copia de seguridad únicamente sobre una lista de archivos o carpetas.
- No puede modificar la fecha y la hora de los desencadenadores de copia de seguridad (esto será objeto de una mejora futura).

## La infraestructura

El esquema de principio es el siguiente:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Es importante señalar que:

- La infraestructura VSPC está alojada en los centros de datos de OVHcloud y no envía datos a los servidores de Veeam.
- El almacenamiento se basa en la tecnología [OVHcloud Object Storage](/links/public-cloud/object-storage) que está alojada en los centros de datos de OVHcloud.

Durante su entrega, recibe:

- Un Backup Tenant, generalmente nombrado `Backup-tenant-xxxx`, que es un contenedor virtual que permite agrupar todos sus servicios de copia de seguridad.
- Un VSPC Tenant, generalmente nombrado `vspc-tenant-xxxx`, que es su "empresa" en la VSPC, permitiendo acceder a sus dashboards y conectar sus agentes.
- Un Vault, generalmente nombrado `Backup-vault-xxxx`, que es su espacio de almacenamiento donde sus datos de copia de seguridad son enviados en cada copia de seguridad.

Le invitamos a leer nuestros otros guías para descubrir el producto.

## Anti-afinidad

Las copias de seguridad se realizan en un lugar externo, mediante la configuración Vault por defecto, con un punto de almacenamiento situado en una zona geográficamente distinta de la del servidor Bare Metal. Este mecanismo de anti-afinidad refuerza la resiliencia de los datos de copia de seguridad.

Mapeo de zonas de copia de seguridad:

| Localización Bare Metal | Vault Affinity |
| ----------------------- | -------------- |
| BHS                     | TOR            |
| SGP                     | SYD            |
| MUM                     | SGP            |
| SYD                     | SGP            |
| RBX                     | GRA            |
| GRA                     | SBG            |
| LIM                     | SBG            |
| PAR                     | RBX            |
| ERI                     | LIM            |
| WAR                     | LIM            |
| SBG                     | RBX            |
| TOR                     | BHS            |

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).