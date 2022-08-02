---
title: Preguntas frecuentes sobre los NAS
slug: faq-nas
excerpt: ¿Tiene alguna duda sobre los NAS? A continuación le ofrecemos la respuesta a las preguntas más frecuentes.
section: NAS
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22/07/2021**

## Características del producto

### ¿Se puede gestionar el NAS-HA desde un panel de administración?

Sí. Puede acceder al panel desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)en la sección `Bare Metal Cloud`{.action} y, seguidamente, en la sección `NAS y CDN`{.action}.

### ¿Es posible aumentar la capacidad total de un NAS?

No es posible aumentar la capacidad de un NAS-HA una vez contratado. Si desea aumentar la capacidad de almacenamiento, deberá migrar los datos a un segundo NAS de mayor capacidad.

### ¿Cuáles son las capacidades de almacenamiento disponibles?

Ofrecemos las siguientes capacidades de almacenamiento:

- 3 To
- 6 To
- 9 To
- 18 To
- 36 To

Las capacidades de almacenamiento que se ofrecen son las que se pueden utilizar.

### ¿Los recursos de un NAS-HA son dedicados?

Los discos de los NAS-HA son dedicados. Los demás recursos de la máquina son compartidos (RAM, procesador y ancho de banda), con una excepción:

**Caso particular:** si se suscribe a la oferta de 36 To, todos los recursos del servidor host son dedicados (RAM, CPU, ancho de banda).

### ¿Por qué duración puedo contratar un NAS-HA?

Los períodos ofrecidos son de 1, 3, 6 y 12 meses. Al finalizar el período contratado, la suscripción se renueva por prórroga tácita si no se ha solicitado la baja del servicio con anterioridad. La baja puede realizarse en cualquier momento desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Uso del producto

### ¿El NAS-HA puede conectarse a varios servidores a la vez?

Sí. Es posible hacer interactuar el NAS con varios servicios de OVHcloud simultáneamente.

### ¿Se puede instalar un sistema operativo en un NAS-HA?

No, no es posible instalar un SO en los NAS-HA.

### ¿Cuáles son los protocolos compatibles con los NAS-HA?

Los NAS-HA pueden montarse en un servidor Windows o Linux mediante los protocolos CIFS (Samba) o NFS.

### ¿El espacio asignado es particionable?

Sí, es necesario crear una o más particiones, según su uso. No hay límite en el número de particiones.

## Compatibilidad del producto

### ¿Los NAS-HA son compatibles con servidores externos a OVHcloud?

No, solo es posible acceder a los NAS-HA desde la red de OVHcloud.

### ¿Desde qué servicios se puede acceder a un NAS-HA?

Es posible acceder al servicio desde todos los productos de OVHcloud que tengan sistema operativo: servidores dedicados (OVHcloud, So you Start y Kimsufi), Hosted Private Cloud, Public Cloud y VPS.

### ¿Cómo se gestionan los accesos al NAS-HA?

La lista de control de acceso (ACL) puede configurarse desde el área de cliente de OVHcloud. Solo tiene que introducir la dirección IP del servicio al que quiere autorizar el acceso.

### ¿Los NAS-HA son compatibles con el vRack?

Actualmente los NAS-HA no pueden añadirse a las redes privadas de un vRack. No obstante, el uso del NAS-HA y el vRack no son incompatibles pasando por la ruta IP pública del servidor conectado al vRack.

## Tasa de transferencia

### ¿La tasa de transferencia y el porcentaje de disponibilidad están garantizados?

- Transferencia: El ancho de banda del servicio es compartido, por lo que OVHcloud no puede garantizar una tasa de transferencia.
- Disponibilidad: La disponibilidad del servicio está garantizada y sujeta a un acuerdo de nivel de servicio (SLA). Los detalles pueden consultarse en las condiciones particulares del servicio.

## Snapshots

### ¿Qué es un snapshot?

Un snapshot es una imagen instantánea del estado del disco y de los datos almacenados en él en un momento determinado. Los snapshots pueden configurarse y administrarse desde el área de cliente.

Por defecto, la función snapshot está activada al crear la partición, y la frecuencia está configurada en «cada hora».

### ¿Con qué frecuencia se realizan los snapshots?

La frecuencia de los snapshots puede configurarse desde el área de cliente. Puede elegir la frecuencia entre las siguientes opciones:

- cada hora (por defecto)
- cada seis horas
- cada día
- cada dos días
- cada tres días
- semanal

Además, en cualquier momento puede crear snapshots manuales, que podrá conservar sin limitación de tiempo o eliminar cuando desee. Esta funcionalidad está disponible en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) o la [API de OVHcloud](https://ca.api.ovh.com/):

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

### ¿Cómo funciona el sistema de gestión de los snapshots?

Puede configurar snapshots automáticos con una de las frecuencias disponibles. Independientemente de la frecuencia elegida, el último snapshot realizado siempre sustituirá al anterior. También puede crear y eliminar snapshots a demanda.

### ¿Es posible eliminar un snapshot?

Solo se pueden eliminar los snapshots creados «a demanda» (ver la pregunta «¿Con qué frecuencia se realizan los snapshots?»). Los snapshots con una frecuencia establecida se eliminan automáticamente, y no es posible eliminarlos manualmente.

### ¿Cuánto espacio ocupan los snapshots en un NAS-HA?

El espacio que ocupa un snapshot varía en función de las acciones realizadas en el intervalo de tiempo que separa dos snapshots.

Desde la realización del snapshot, todas las acciones llevadas a cabo en la partición correspondiente se almacenarán en dicho snapshot y aumentarán el tamaño del archivo.

### ¿Cuántos snapshots se pueden realizar?

- Snapshots automáticos: uno por partición.
- Snapshots manuales: diez por partición.

### ¿Dónde se pueden encontrar los snapshots?

En la partición correspondiente, en un directorio oculto llamado **.zfs**. En su interior se encuentra la carpeta **snapshots** que contiene los snapshots. Los archivos están disponibles en modo *read-only*.

### ¿OVHcloud también realiza copias de seguridad de los datos?

Sí, diariamente se realiza un backup interno, que genera un snapshot más. El cliente no puede desactivar este backup.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
