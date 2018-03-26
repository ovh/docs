---
title: Preguntas frecuentes sobre los NAS
slug: faq-nas
excerpt: ¿Tiene alguna duda sobre los NAS? A continuación le ofrecemos la respuesta a las preguntas más frecuentes.
section: NAS
---

## Características del producto

### ¿Qué significa la indicación HA que aparece en el nombre de los NAS de OVH?
La sigla HA (del inglés, *high availability*) significa que OVH garantiza la alta disponibilidad del servicio. Dicha garantía se concreta en un SLA (*service level agreement*) que obliga a OVH a indemnizar a sus clientes si el servicio perdiera su disponibilidad por causa de una incidencia.

### ¿En qué datacenter puedo contratar un NAS-HA?
Puede contratar un NAS-HA en los datacenters de Francia (Roubaix, Estrasburgo y Gravelines) y en el de Canadá (situado en Beauharnois). La elección del datacenter se realiza durante el pedido. ATENCIÓN: Una vez contratado el producto, no será posible cambiar el datacenter.

### ¿Se puede gestionar el NAS-HA desde un panel de administración?
Sí. Puede acceder al panel desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager). Para ello, acceda a la sección `Cloud`{.action} y, en la columna izquierda, haga clic en `Plataformas y servicios`{.action}.

### ¿Es posible aumentar la capacidad total de un NAS?
No es posible aumentar la capacidad de un NAS-HA una vez contratado. Si desea aumentar la capacidad de almacenamiento, deberá migrar los datos a un segundo NAS de mayor capacidad.

### ¿Cuáles son las capacidades de almacenamiento disponibles?
Ofrecemos las siguientes capacidades de almacenamiento:

- 1,2 TB (1,1 TB de espacio útil)
- 2,4 TB (2,2 TB de espacio útil)
- 3,6 TB (3,2 TB de espacio útil)
- 7,2 TB (6,4 TB de espacio útil)
- 13,2 TB (10 TB de espacio útil)
- 19,2 TB (17 TB de espacio útil)
- 26,4 TB (24 TB de espacio útil)

Todas estas configuraciones están formadas por discos dedicados de 1,2 TB.

### ¿Los recursos de un NAS-HA son dedicados?
Los discos de los NAS-HA son dedicados. Los demás recursos de la máquina son compartidos (RAM, procesador y ancho de banda), con una excepción: contratando una capacidad de 26,4 TB, todos los recursos del servidor host son dedicados (RAM, procesador y ancho de banda).

### ¿Por qué duración puedo contratar un NAS-HA?
Los períodos ofrecidos son de 1, 3, 6 y 12 meses. Al finalizar el período contratado, la suscripción se renueva por prórroga tácita si no se ha solicitado la baja del servicio con anterioridad. La baja puede realizarse en cualquier momento desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager).

### ¿Dispongo de toda la capacidad que se indica en el pedido?
Al igual que en la mayoría de soluciones de almacenamiento, la capacidad teórica difiere ligeramente de la capacidad útil, ya que es necesario reservar una parte del espacio para la explotación del disco:

- los NAS-HA de 1,2 TB tienen 1,1 TB de espacio útil
- los NAS-HA de 2,4 TB tienen 2,2 TB de espacio útil
- los NAS-HA de 3,6 TB tienen 3,2 TB de espacio útil
- los NAS-HA de 7,2 TB tienen 6,4 TB de espacio útil
- los NAS-HA de 13,2 TB tienen 10 TB de espacio útil
- los NAS-HA de 19,2 TB tienen 17 TB de espacio útil
- los NAS-HA de 26,4 TB tienen 24 TB de espacio útil

Los datos anteriores se ofrecen a título indicativo y pueden variar.

## Uso del producto

### ¿En qué casos se recomienda utilizar un NAS-HA?
En una infraestructura, un NAS-HA es un espacio de almacenamiento al que puede conectar varios [servidores dedicados](https://www.ovh.es/servidores_dedicados/), [instancias de Public Cloud](https://www.ovh.es/public-cloud/instancias/) o un [Private Cloud](https://www.ovh.es/private-cloud/).

Existen múltiples casos de uso, pero la alta disponibilidad de los NAS de OVH es especialmente interesante en los siguientes casos:

- almacenamiento de datos con acceso poco frecuente, es decir, datos que no generan un tráfico significativo pero que es necesario que estén siempre disponibles, como documentación legal, manuales de empleo, etc.;
- almacenamiento de datos «estáticos» (datos que no estén destinados a ser modificados con regularidad) para liberar espacio en la infraestructura y mejorar su rendimiento, dando prioridad a los datos que evolucionan permanentemente o requieren potencia de cálculo (bases de datos, aplicaciones propias, etc.);
- solución de backup en caliente, donde la alta disponibilidad del servicio NAS garantiza que los datos están disponibles en cualquier momento, permitiendo acceder (o redirigir) a archivos que en otros soportes puedan haber perdido su disponibilidad o haberse corrompido.

### ¿En qué casos se aconseja utilizar un NAS-HA en lugar del Backup Storage?
El NAS-HA y el Backup Storage no sirven para lo mismo. Recomendamos utilizar un NAS para el almacenamiento de datos estáticos que deben estar permanentemente disponibles para su acceso. Por el contrario, el Backup Storage es una solución de backup de datos que no están destinados a ser consultados con regularidad.

Técnicamente, las principales diferencias son las siguientes:

- Los datos del NAS-HA se almacenan en discos dedicados, mientras que el espacio del Backup Storage es compartido.
- El NAS-HA es un espacio de almacenamiento montado en otro servidor que utiliza los protocolos de transferencia NFS o CIFS, mientras que el Backup Storage es un espacio autónomo, accesible mediante FTP.

### ¿Tiene funciones de sincronización (tipo Synology)?
No, el NAS-HA solo puede montarse como sistema de archivos directamente en una distribución. No obstante, el administrador del espacio puede implementar un proceso de sincronización.

### ¿El NAS-HA puede conectarse a varios servidores a la vez?
Sí. Es posible hacer interactuar el NAS con varios servicios de OVH simultáneamente.

### ¿Se puede instalar un sistema operativo en un NAS-HA?
No, no es posible instalar un SO en los NAS-HA.

### ¿Cuáles son los protocolos compatibles con los NAS-HA?
Los NAS-HA pueden montarse en un servidor Windows o Linux mediante los protocolos CIFS (Samba) o NFS.

### ¿Los NAS-HA son compatibles con el protocolo FTP?
No, el producto no es compatible con el protocolo FTP.

### ¿El espacio asignado es particionable?
Sí, es necesario crear una o más particiones, según su uso. No hay límite en el número de particiones.

## Compatibilidad del producto

### ¿Los NAS-HA son compatibles con servidores externos a OVH?
No, solo es posible acceder a los NAS-HA desde la red de OVH.

### ¿Desde qué servicios se puede acceder a un NAS-HA?
Es posible acceder al servicio desde todos los productos de OVH que tengan sistema operativo: servidores dedicados (OVH, So you Start y Kimsufi), Private Cloud, Public Cloud y VPS.

### ¿Cómo se gestionan los accesos al NAS-HA?
La lista de control de acceso (ACL) puede configurarse desde el área de cliente de OVH. Solo tiene que introducir la dirección IP del servicio al que quiere autorizar el acceso.

### ¿Los NAS-HA son compatibles con el vRack?
Actualmente los NAS-HA no pueden añadirse a las redes privadas de un vRack. No obstante, el uso del NAS-HA y el vRack no son incompatibles pasando por la ruta IP pública del servidor conectado al vRack.

## Tasa de transferencia

### ¿La tasa de transferencia y el porcentaje de disponibilidad están garantizados?

- Transferencia: El ancho de banda del servicio es compartido, por lo que OVH no puede garantizar una tasa de transferencia.
- Disponibilidad: La disponibilidad del servicio está garantizada y sujeta a un acuerdo de nivel de servicio (SLA). Los detalles pueden consultarse en las condiciones particulares del servicio.

## Snapshots

### ¿Qué es un snapshot?
Un snapshot es una imagen instantánea del estado del disco y de los datos almacenados en él en un momento determinado. Los snapshots pueden configurarse y administrarse desde el área de cliente.

Por defecto, la función snapshot está activada al crear la partición, y la frecuencia está configurada en «cada hora».

### ¿Con qué frecuencia se realizan los snapshots?
La frecuencia de los snapshots puede configurarse desde el área de cliente. Puede elegir la frecuencia entre las siguientes opciones:

- cada hora
- cada seis horas
- cada día
- cada dos días
- cada tres días
- semanal 

Además, en cualquier momento puede crear snapshots manuales, que podrá conservar sin limitación de tiempo o eliminar cuando desee. Esta funcionalidad está disponible en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager) o la [API de OVH](https://api.ovh.com/):

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

Desde la realización del snapshot, todas las acciones llevadas a cabo en la partición correspondiente se almacenarán en dicho snapshot y aumentarán el tamaño del archivo. De esa forma, en cualquier momento podrá volver al estado inicial de la partición (en el estado en el que se encontraba al realizarse el snapshot).

Técnicamente, las operaciones de eliminación de datos, así como determinadas modificaciones, son las que permiten aumentar el espacio de almacenamiento que consumen los archivos de snapshot.

### ¿Cuántos snapshots se pueden realizar?

- Snapshots automáticos: uno por partición.
- Snapshots manuales: diez por partición.

### ¿Dónde se pueden encontrar los snapshots?
En la partición correspondiente, en un directorio oculto llamado **.zfs**. En su interior se encuentra la carpeta **snapshots** que contiene los snapshots. Los archivos están disponibles en modo *read-only*.

### ¿OVH también realiza copias de seguridad de los datos?
Sí, diariamente se realiza un backup interno, que genera un snapshot más. El cliente no puede desactivar este backup.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).