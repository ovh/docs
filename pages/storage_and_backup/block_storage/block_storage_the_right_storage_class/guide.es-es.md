---
title: Elegir la clase adecuada de Block Storage
excerpt: Aprenda a elegir la clase adecuada de Block Storage de OVHcloud. Compare rendimiento, costos y casos de uso para optimizar su almacenamiento en términos de precio y eficacia.
updated: 2025-12-15
---

## Objetivo

Este guía le ayuda a comprender las diferentes clases de Block Storage de OVHcloud y a elegir la que mejor se adapte a sus necesidades. Descubra los niveles de rendimiento, las consideraciones de costos y los casos de uso recomendados para tomar decisiones informadas sobre el almacenamiento.

## Presentación del Block Storage

El Block Storage es una solución de almacenamiento de alto rendimiento, flexible y fiable, diseñada para cargas de trabajo críticas. Puede conectar volúmenes directamente a sus instancias, aumentar la capacidad de 10 Go a 12 To, y elegir la clase adecuada: Regional Classic, Classic o High Speed, según sus necesidades en términos de rendimiento y disponibilidad.

Esta solución es ideal para bases de datos, máquinas virtuales y aplicaciones contenerizadas, con funcionalidades como instantáneas, copias de seguridad y cifrado.

## Clases de Block Storage

Nuestras clases de Block Storage están diseñadas para satisfacer las diferentes necesidades de sus cargas de trabajo en términos de rendimiento, disponibilidad y resiliencia. Elija la clase adecuada para optimizar la velocidad, la redundancia y el costo.

### Regional Classic Volume

La clase **Regional Classic Volume** ofrece alta disponibilidad al replicar automáticamente los datos en tres zonas de disponibilidad dentro de una región (3-AZ). Los volúmenes están respaldados por el almacenamiento NVMe over Fabric para un acceso rápido, coherente y fiable.

Para garantizar la continuidad del servicio incluso en caso de fallo de una zona de disponibilidad, esta clase también admite [Multi-Attach](/pages/public_cloud/compute/classic_block_multi_az_limitations). Esto permite que varias instancias situadas en diferentes zonas de disponibilidad se conecten simultáneamente y usen el mismo volumen.

Esta clase es adecuada para cargas de trabajo que requieren alta disponibilidad y fuerte resiliencia, como bases de datos críticas y aplicaciones distribuidas.

### Classic Volume

La clase **Classic Volume** es ideal para necesidades aplicativas diarias, como bases de datos, máquinas virtuales y copias de seguridad. Los datos se replican dentro de una sola zona de disponibilidad (1-AZ) o una Local Zone, con rendimiento NVMe garantizado.

Esta clase es adecuada para cargas de trabajo estándar donde la baja latencia y la fiabilidad son importantes, pero donde la replicación multi-zona no es necesaria.

### High Speed Volume

La clase **High Speed Volume** se ofrece en dos generaciones, con perfiles de rendimiento diferentes:

- Gen 1: Hasta 3 000 IOPS y 128 Mo/s – adecuada para cargas de trabajo estándar que requieren alta velocidad.
- Gen 2: 30 IOPS/Go (hasta 20 000 IOPS) y 0,5 Mo/s por Go (hasta 512 Mo/s) – recomendada para aplicaciones intensivas que requieren un máximo de I/O y ancho de banda.

Elija Gen 1 para cargas de trabajo de alta velocidad clásicas, y Gen 2 para cargas de trabajo pesadas como análisis, grandes bases de datos o cálculo de alto rendimiento.

### Tabla comparativa

| Clase de almacenamiento | Caso de uso | Rendimiento | Regiones disponibles | SLA de disponibilidad | Replicación | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| **High Speed Volume** | Cargas de trabajo de alto rendimiento, análisis, grandes bases de datos | **Gen 1**: hasta 3 000 IOPS, 128 Mo/s <br><br> **Gen 2**: 30 IOPS/Go (hasta 20 000 IOPS), 0,5 Mo/s por Go (hasta 512 Mo/s) | 3-AZ, 1-AZ, Local Zones | 99,9 % | Zonal | NVMe optimizado, rendimiento escalable |
| **Regional Classic Volume** | Aplicaciones críticas, sistemas distribuidos | 500 IOPS garantizados, 64 Mo/s | 3-AZ | 99,99 % | Multi-zona | NVMe over Fabric, alta disponibilidad |
| **Classic Volume** | Cargas de trabajo diarios, máquinas virtuales, copias de seguridad | 500 IOPS garantizados, 64 Mo/s | 1-AZ, Local Zones | 99,9 % | Zonal | NVMe over Fabric, rendimiento estándar |

### Detalles adicionales

#### Duración mínima de almacenamiento

Para el Block Storage, no existe una duración mínima de almacenamiento: puede conectar o eliminar volúmenes en cualquier momento sin costos adicionales. Solo se le facturará por el uso efectivo del volumen durante el período en que exista.

#### Costos de instantáneas y copias de seguridad

Aunque el uso estándar de los volúmenes se factura por Go/mes, las [instantáneas](/pages/public_cloud/compute/creating_a_volume_snapshot) almacenadas en **Block Storage** y las [copias de seguridad](/pages/public_cloud/compute/volume-backup) almacenadas en **Object Storage** pueden generar costos adicionales. Las instantáneas permiten capturar el estado de un volumen en un momento dado, y las copias de seguridad garantizan la protección y recuperación de los datos.

#### Gestión del ciclo de vida y redimensionamiento

Los volúmenes Block Storage son completamente flexibles: puede [aumentar su tamaño](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk) en cualquier momento, ampliar las particiones y conectar los volúmenes a diferentes instancias. Estas operaciones se gestionan a nivel de volumen, permitiéndole optimizar capacidad y rendimiento sin interrupciones.

#### Volúmenes cifrados

Cada tipo de volumen Block Storage también está disponible en versión cifrada (LUKS), según la región. Estas variantes cifradas garantizan la confidencialidad de los datos sin impacto en el rendimiento.

> [!primary]
> Tenga en cuenta que la clase Regional Classic Volume y los volúmenes en las Local Zones no admiten el cifrado LUKS.

Los volúmenes cifrados pueden crearse directamente desde el área de cliente de OVHcloud o a través de las herramientas CLI/API especificando el tipo de volumen con el sufijo `-luks` (por ejemplo: classic-luks o highspeed-luks). Esto permite proteger fácilmente los datos sensibles manteniendo el mismo rendimiento y funcionalidades que los volúmenes estándar.

> [!primary]
> Los volúmenes cifrados no tienen ningún impacto en el rendimiento.

## Casos de uso

El Block Storage admite una gran variedad de cargas de trabajo gracias a sus prestaciones, flexibilidad y resiliencia. Los casos de uso comunes incluyen:

- **Bases de datos**: MySQL, PostgreSQL y otras bases relacionales benefician de un acceso rápido con baja latencia y alto ancho de banda.
- **Máquinas virtuales y aplicaciones contenerizadas**: Almacenamiento persistente para VM y contenedores con alta fiabilidad y acceso rápido.
- **Análisis y cargas de trabajo de IA**: Los volúmenes High Speed ofrecen un máximo de IOPS y ancho de banda para aplicaciones intensivas en datos.
- **Copia de seguridad y recuperación ante desastres**: Cree fácilmente instantáneas y copias de seguridad para sus datos críticos, garantizando una recuperación rápida y segura.

## Consideraciones relativas a las zonas y regiones

Los volúmenes Block Storage pueden desplegarse con diferentes opciones de disponibilidad según sus necesidades:

- **Regional Classic Volume (3-AZ)**: Los datos se replican en tres zonas de disponibilidad dentro de la misma región, ofreciendo alta resiliencia y un SLA del 99,99 %. Ideal para aplicaciones críticas que requieren alta disponibilidad. Para más información, consulte nuestro guía "[Uso adecuado y limitaciones de Classic Multi Attach Block Storage en regiones 3AZ (EN)](/pages/public_cloud/compute/classic_block_multi_az_limitations)".
- **Classic & High Speed Volume (1-AZ o Local Zone)**: Los datos se replican en una sola zona. Estas opciones ofrecen acceso de baja latencia y altas prestaciones, y son adecuadas para cargas de trabajo que no requieren redundancia multi-zona.
- **Local Zones**: Para aplicaciones que requieren una latencia ultra baja en una ubicación geográfica específica, las Local Zones permiten mantener el almacenamiento cerca de los recursos de cálculo.

> [!success]
> Elegir la opción adecuada de despliegue garantiza un rendimiento óptimo, una redundancia eficaz y un control de costos según su carga de trabajo y restricciones geográficas.

## Más información

[Crear y configurar un disco adicional en una instancia](/pages/public_cloud/Compute/create_and_configure_an_additional_disk_on_an_instance)

[Modificar un Volume Block Storage](/pages/public_cloud/Compute/switch_volume_type)

Si necesita formación o asistencia técnica para la implementación de nuestras soluciones, contacte a su representante comercial o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto por parte de nuestro equipo de Professional Services.

Interactúe con nuestra [comunidad de usuarios](/links/community).