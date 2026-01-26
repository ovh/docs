---
title: "Backup Agent - Presentación de la oferta"
excerpt: "Presentación de las funciones y ventajas del producto Backup Agent"
updated: 2026-01-23
---

## Objetivo

Este guía le ayudará a comprender el funcionamiento del producto Backup Agent y sus ventajas para sus servicios Bare Metal.

## Presentación del producto

El producto Backup Agent permite hacer copias de seguridad de sus servidores Bare Metal utilizando un agente que, según una política de copia de seguridad que haya elegido, enviará los datos de su servidor a un punto de almacenamiento externo.

El producto Backup Agent se basa en dos productos del editor de software Veeam:

- La Veeam Service Provider Console (VSPC).
- El Veeam Agent.

El Veeam Agent es un software creado por Veeam, que se instala en su sistema operativo en Linux y Windows, y le permite hacer copias de seguridad de su sistema.

La VSPC permite aplicar las políticas de copia de seguridad a los agentes registrados en ella, y permite proporcionar las informaciones de almacenamiento y las credenciales a cada agente cuando comienza su copia de seguridad.
Aquí está la [guía](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation) que le explica cómo navegar en la VSPC.

Cuando solicite el producto, recibirá un correo electrónico confirmando la entrega con credenciales que le permitirán conectarse a su tenant en la VSPC. Esta cuenta es de solo lectura y le permitirá acceder a visualizaciones para ver sus copias de seguridad y sus agentes.

Una vez que el agente obtiene las informaciones, envía directamente los datos al punto de almacenamiento sin pasar nunca por la infraestructura VSPC.

El esquema de principio es el siguiente:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Es importante señalar que:

- La infraestructura VSPC está alojada en los centros de datos de OVHcloud y no envía datos a los servidores de Veeam.
- Los puntos de almacenamiento son buckets de [OVHcloud Object Storage](/links/public-cloud/object-storage) que están alojados en los centros de datos de OVHcloud.

Varios puntos fuertes están presentes en esta oferta:

- Primera política de copia de seguridad automática con 14 días de retención.
- Posibilidad de pasar a 30 días de retención.
- La política hace una copia de seguridad completa de su servidor.
- 14 días de inmutabilidad en nuestros buckets.
- El período de copias de seguridad automáticas es entre las 22:00 y las 06:00 (zona horaria CET para Europa - zona horaria EST para Canadá y Asia).
- Cifrado gestionado por OVHcloud del almacenamiento que aloja sus datos de copia de seguridad.
- Envío directo de los datos de copia de seguridad al bucket sin hacer una copia en nuestra infraestructura.
- El punto de almacenamiento siempre está situado lejos de la localización de su servidor Bare Metal (si está en Roubaix, su punto de almacenamiento será en Gravelines).

También es importante tener en cuenta que:

- La política de copia de seguridad está restringida, no puede modificarla.
- No puede configurar una copia de seguridad solo en una lista de archivos o carpetas.
- No puede modificar la fecha y hora de activación de las copias de seguridad (esto se considera como una mejora en el futuro).

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).