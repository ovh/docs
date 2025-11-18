---
title: Preguntas frecuentes sobre los NAS-HA
excerpt: ¿Tiene alguna duda sobre los NAS-HA? A continuación le ofrecemos la respuesta a las preguntas más frecuentes.
updated: 2025-07-15
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>


## Objetivo

**Estas son las preguntas más frecuentes sobre la solución NAS-HA de OVHcloud.**

## Preguntas generales

/// details | ¿Qué es la solución NAS-HA de OVHcloud?

NAS-HA es un servicio de almacenamiento de archivos compartido y totalmente administrado, basado en la tecnología open source OpenZFS.

///

/// details | ¿Qué puedo hacer con NAS-HA?

NAS-HA permite centralizar los datos de diferentes cargas de trabajo Linux pero también Windows para múltiples escenarios:

- almacenamiento compartido y externalizado para aplicaciones IT (MV, DB...)
- gestión de contenidos web
- compartir archivos en la red, etc.

///

/// details | ¿Se puede gestionar el NAS-HA desde un panel de administración?

Sí, puede acceder a este espacio desde el [área de cliente de OVHcloud](/links/manager), en la sección `Bare Metal Cloud`{.action} y, seguidamente, en la sección `NAS y CDN`{.action}.

///

## Disponibilidad

/// details | ¿Qué SLA incluye NAS-HA?

NAS-HA se suministra con un índice de disponibilidad del 99,99%.

///

## Red y seguridad

/// details | ¿Qué protocolos de transferencia de archivos soportan actualmente la solución NAS-HA?

NAS-HA soporta la transferencia de archivos a través de NFS (NFSv3, NFSv4.1, NFNSv4.2) y CIFS (SMB).

///

/// details | ¿Desde qué servicios de OVHcloud puedo crear datos?

NAS-HA es un servicio que puede recibir datos de todos los servicios existentes de OVHcloud: Bare Metal Cloud (VPS, servidores dedicados OVHcloud, So you Start, Kimsufi), Public Cloud, Hosted Private Cloud, etc.

///

/// details | ¿Cómo se gestionan los accesos al NAS-HA?

La lista de control de acceso (ACL) puede configurarse desde el área de cliente de OVHcloud. Solo tiene que introducir la dirección IP del servicio al que quiere autorizar el acceso al NAS-HA.

///

/// details | ¿El servicio NAS-HA es compatible con otros servidores fuera de OVHcloud?

No, solo es posible acceder a los NAS-HA desde la red de OVHcloud.

///

/// details | ¿NAS-HA es compatible con el vRack?

Actualmente los NAS-HA no pueden añadirse a las redes privadas de un vRack. Sin embargo, el uso del NAS-HA y del vRack no son incompatibles pasando por la ruta IP pública del servidor conectado al vRack.

///

## Capacidades y rendimiento

/// details | ¿Cuáles son las capacidades de almacenamiento disponibles?

El tamaño mínimo de un servicio es de 3 TB y el tamaño máximo es de 144 TB.<br>
Ofrecemos las siguientes capacidades de almacenamiento en una base de discos de 3 TB:

- 3 TB
- 6 TB
- 9 TB
- 18 TB
- 36 TB

Ofrecemos las siguientes capacidades de almacenamiento en una base de discos de 12 TB:

- 12 TB
- 24 TB
- 36 TB
- 72 TB
- 144 TB

Las capacidades de almacenamiento que se ofrecen son las que se pueden utilizar.

///

/// details | ¿Los recursos de un NAS-HA son dedicados?

Los discos de los NAS-HA son dedicados. Los demás recursos de la máquina son compartidos (RAM, procesador y ancho de banda), con una excepción:

**Caso particular:** si se suscribe a la oferta 144 TB, todos los recursos del servidor host son dedicados (RAM, CPU, ancho de banda).

///

/// details | ¿Cuántos servicios NAS-HA puedo crear desde mi cuenta de cliente?

No hay límite de número de servicios por cuenta de cliente.

///

/// details | ¿Cuántas particiones máximas por servicio?

Es posible crear tantas particiones como desee. El tamaño mínimo es de 10 GB y el tamaño máximo se define por el tamaño máximo del servicio.

///

/// details | ¿La tasa de transferencia y el porcentaje de disponibilidad están garantizados?

- Transferencia: El ancho de banda del servicio es compartido, OVHcloud no puede garantizar la tasa de transferencia.
- Disponibilidad: La disponibilidad del servicio está garantizada y sujeta a un acuerdo de nivel de servicio (SLA). Puede consultar los detalles en nuestras condiciones específicas de uso.

///

## Uso del producto

/// details | ¿El NAS-HA puede conectarse a varios servidores a la vez?

Sí. Es posible interactuar el NAS con varios servicios de OVHcloud simultáneamente.

///

/// details | ¿Se puede instalar un sistema operativo en un NAS-HA?

No, no es posible instalar un SO en los NAS-HA.

///

/// details | ¿El espacio destinado es particionable?

Sí, es necesario crear una o más particiones, según su uso. No hay límite en el número de particiones.

///

/// details | ¿Cómo cambiar la capacidad de almacenamiento en un NAS-HA?

Actualmente no es posible modificar dinámicamente el NAS-HA. Para aumentar o reducir el aprovisionamiento, es necesario:

1. Contratar un nuevo servicio NAS-HA con la nueva capacidad deseada y así disponer de sus dos NAS-HA: el antiguo y el nuevo.
2. Migrar sus datos consultando nuestra guía "[Migración de datos de un NAS-HA a otro a través de NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_migration)".
3. Dar de baja el antiguo NAS-HA.

///

## Snapshots

/// details | ¿Qué es un snapshot?

Un snapshot es una imagen instantánea del estado del disco y de los datos almacenados en él en un momento determinado. permiten ofrecer un primer nivel de backup. Es posible configurar y gestionar los snapshots desde el área de cliente de OVHcloud.

Por defecto, la función snapshot se activa al crear la partición. La frecuencia se preestablece en "cada hora".

///

/// details | ¿Qué política de backup está asociada a NAS-HA?

Los usuarios son responsables de la gestión de sus copias de seguridad (herramientas y reglas) dentro y fuera del servicio, así como de sus planes de continuidad del negocio y de recuperación ante desastres. Sin embargo, por motivos de seguridad y resiliencia de la infraestructura, OVHcloud puede realizar snapshots del servicio en un servidor remoto, aunque sin obligación de hacerlo.

Si OVHcloud ha realizado un snapshot en un servidor remoto, puede restaurar los datos del último snapshot disponible en caso de avería o ataque. Tenga en cuenta que esta operación se realiza bajo demanda y constituye un servicio opcional facturado.

///

/// details | ¿Con qué frecuencia se realizan los snapshots? <a name="frequency"></a>

La frecuencia de los snapshots puede configurarse desde el área de cliente de OVHcloud. Puede elegir la frecuencia entre las siguientes opciones:

- cada hora (por defecto)
- cada 6 horas
- cada día
- cada dos días
- cada tres días
- semanal

Además, en cualquier momento puede crear snapshots manuales, que podrá conservar sin limitación de tiempo o eliminar cuando desee. Esta funcionalidad está disponible en el [área de cliente de OVHcloud](/links/manager) o a través de la siguiente llamada a la [API](/links/api):

> [!api]
>
> @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

> [!primary]
> Consulte nuestra guía [Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps) para familiarizarse con el uso de las API de OVHcloud.
>

///

/// details | ¿Cómo funciona el sistema de gestión de los snapshots?

Puede configurar snapshots automáticos con una de las frecuencias disponibles. Independientemente de la frecuencia elegida, el último snapshot realizado siempre sustituirá al anterior. También puede crear y eliminar snapshots a demanda.

///

/// details | ¿Es posible eliminar un snapshot?

Solo se pueden eliminar los snapshots creados "bajo demanda" (véase la pregunta anterior ["¿Con qué frecuencia se realizan los snapshots?](#frequency))".<br>
Los snapshots con una frecuencia establecida se eliminan automáticamente, y no es posible eliminarlos manualmente.

///

/// details | ¿Los snapshots están incluidos en la capacidad de un servicio?

Para garantizar el almacenamiento de sus snapshots, OVHcloud dispone de un espacio adicional con el mismo soporte físico. Este espacio corresponde al menos al 15% del volumen principal. En caso de superarlo, los snapshots se almacenarán en su espacio de almacenamiento principal. El espacio adicional no puede utilizarse para otro uso que el almacenamiento de sus snapshots.

Por ejemplo, para un servicio de 3 TB, se reservan 450 GB adicionales para los snapshots.

///

/// details | ¿Cuántos snapshots se pueden realizar?

- Snapshots automáticos: uno por partición.
- Para los snapshots manuales: diez por partición

///

/// details | ¿Con qué frecuencia se realizan los snapshots?

Los snapshots se almacenan al mismo nivel que el servicio. Los snapshots se replican en dos servidores distintos en dos racks diferentes. Además, OVHcloud realiza un snapshot diario en un sitio remoto.

///

/// details | ¿Dónde se pueden encontrar los snapshots?

En la partición correspondiente, encontrará un directorio oculto llamado `.zfs` que contiene un directorio de `snapshots`. Los archivos están disponibles en solo lectura.

///

/// details | ¿Cuántas políticas de snapshots puedo crear por volumen?

1

///

## Precios

/// details | ¿Qué tipo de tarificación está asociado al servicio?

NAS-HA es un servicio facturado mensualmente al volumen (de 3 a 144 TB por tramos).

///

/// details | ¿Por qué duración puedo contratar un NAS-HA?

Los períodos ofrecidos son de 1, 3, 6 y 12 meses. Al finalizar el período contratado, la suscripción se renueva tácitamente si no se ha solicitado ninguna [rescisión](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services). Puede contratarla desde el área de cliente de OVHcloud durante toda su vigencia.

///

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).
