---
title: Local Zone Compute - Funcionalidades, capacidades y límites
excerpt: Descubra las funcionalidades, capacidades y límites actuales de las instancias de Local Zones
updated: 2026-01-16
---

## Objetivo

Las instancias Local Zone son una extensión de las [regiones](/links/public-cloud/regions-pci) que acercan los servicios de OVHcloud a lugares específicos, ofreciendo una latencia reducida y un rendimiento mejorado para las aplicaciones.

Las instancias Local Zone están situadas estratégicamente cerca de las zonas de alta demanda de los usuarios. Su principal objetivo es minimizar el tiempo necesario para la transferencia de datos entre el usuario y la cloud, con el fin de que los servicios sean más rápidos y reactivos y respondan a las exigencias de Data Residency.

Para más información, consulte nuestra [página dedicada a las instancias de Local Zone](/links/public-cloud/local-zones).

**Descubra las funcionalidades y las capacidades actuales y futuras de las instancias de Zonas locales.**

## Características disponibles

| Servicios de Public Cloud | Producto                    | Disponibilidad en Local Zone | Limitaciones |
| ------------------------- | --------------------------- | ----------------------------- | ------------ |
| Compute                   | Instancias                  | Sí | La acción "suspender (shelve)" no está soportada en Local Zones |
|                           | Instancias Metal            | No | |
|                           | GPU                         | No | |
|                           | Copia de seguridad de instancias | Sí | |
|                           | Copia de seguridad remota    | No | |
|                           | Workflow Management para copias de seguridad | Sí | |
|                           | Imágenes Linux              | Sí | |
|                           | Imágenes Windows            | No | |
|                           | Importe su propia imagen    | Sí | Tamaño máximo de imagen limitado a 25 GB |
| Network                   | Load Balancer              | No | |
|                           | Gateway                    | No | |
|                           | Floating IP                | No | |
|                           | Additional IP              | No | |
|                           | Red privada con vRack       | No | Las Local Zones no son compatibles con vRack. Las redes privadas están limitadas a la misma Local Zone. Se admite DHCP en las redes privadas locales. |
| Storage.                  | Object Storage   | Sí | 1. No se admiten políticas de usuario. todas las claves de acceso dentro de un proyecto pueden acceder a todos los buckets en todas las Local Zones. <br> 2. Solo se admite la clase de almacenamiento Standard. <br> 3. Características de S3<sup>1</sup> no soportadas: etiquetas de S3, Legal Hold, SSE-OMK, replicación de S3, registro de acceso del servidor. |
|                           | Block Storage   | Sí | Sin soporte de cifrado. Los Classic Volumes no pueden estar multiconectados. Los Classic Volumes están limitados a 250 IOPS (vs 500 IOPS en regiones de 1AZ y 3AZ). Tamaño máximo 4 TB (vs 12 TB). |
|                           | File Storage  | No | |
| Contenedor                 | Managed Kubernetes Service | No | |
|                           | Managed Rancher Service | No | |
|                           | Managed Private Registry | No | |
| DBaas                     | DBaas                      | No | |
|                           | Analytics                   | No | |
| IA                        | IA                         | No | |

## Capacidades y limitaciones

Todas las funcionalidades de instancia que no aparecen aquí, como el reinicio (reinicio) de las instancias o la compatibilidad con Object Storage, estarán disponibles en los próximos meses. Nuestro objetivo es admitir todas las funcionalidades que ya son compatibles en las regiones globales.

### Servidor SMTP

Las instancias de Local Zones no pueden contactar con servidores SMTP.

## Más información

- [Object Storage - Local Zones specifications](/pages/storage_and_backup/object_storage/s3_local_zones_limitations) (EN)

No dude en enviarnos sus preguntas, comentarios y sugerencias para mejorar el servicio:

- En el [servidor Discord de OVHcloud](https://discord.gg/ovhcloud)

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.