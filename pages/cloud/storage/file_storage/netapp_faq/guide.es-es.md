---
title: Enterprise File Storage - FAQ
excerpt: FAQ en la solución Entreprise File Storage
slug: netapp/faq
section: Enterprise File Storage
order: 7
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 21/03/2022**

## Objetivo

Estas son las preguntas más frecuentes sobre la solución Enterprise File Storage de OVHcloud.

## Preguntas generales

### ¿Qué es la solución Enterprise File Storage de OVHcloud?

Enterprise File Storage de OVHcloud es una solución de almacenamiento de archivos de altas prestaciones y alta disponibilidad. Se basa en la solución de almacenamiento de software-defined ONTAP Select de NetApp&#174; y es íntegramente gestionada por OVHcloud.

### ¿Qué puedo hacer con Enterprise File Storage?

Enterprise File Storage permite dar respuesta a numerosos casos prácticos a la modernización de su infraestructura de almacenamiento de datos corporativos gracias, entre otras cosas, a la integración del protocolo NFS.<br>
Permite externalizar el almacenamiento compartido de sus máquinas virtuales o servidores basados en Linux para diversas cargas de trabajo (aplicaciones críticas, bases de datos corporativas, CRM, ERP...) para aumentar la resiliencia global de su infraestructura y la calidad del servicio (QoS).<br>
Enterprise File Storage permite responder a los casos de uso simple de servidores de archivos compartidos, para los que el servicio debe ofrecer un rendimiento elevado, alta disponibilidad y un ancho de banda garantizado e incluido.

Esta solución también permite dar respuesta a casos prácticos más complejos, ya sea en caso de desbordamiento de cargas de trabajo on-premise o de migración a la nube. Pero también los ejemplos de backup de datos en la nube en el marco de planes de resiliencia, tanto como una buena práctica del mercado para la gestión y la perdurabilidad de los datos como para optimizar los costes operativos (datos calientes on-premises y datos tibios/fríos en la nube).

### ¿Se puede gestionar Enterprise File Storage desde el área de cliente?

Sí, puede acceder directamente a este servicio desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), en la sección `Bare Metal Cloud`{.action} y, seguidamente, en la sección `Almacenamiento y Backup`{.action}".

## Disponibilidad

### ¿Qué nivel de fiabilidad y redundancia puedo alcanzar con Enterprise File Storage?

Enterprise File Storage es un servicio de almacenamiento de alta disponibilidad, redundado por su diseño. Su arquitectura activa/activa protege esta redundancia alimentando dos servidores de ficheros diferentes en dos racks de un mismo datacenter. En caso de fallo del primero, el servicio replica automáticamente sus datos en ambos servidores. La migración suele producirse en caso de avería del servidor activo o durante un mantenimiento planificado.

### ¿Qué SLA incluye Enterprise File Storage?

Enterprise File Storage proporciona un índice de disponibilidad del 99,99%.

## Red y seguridad

### ¿Qué protocolos de transferencia de archivos soportan actualmente la solución Enterprise File Storage?

Enterprise File Storage soporta la transferencia de archivos a través de NFS (NFSv3).

### ¿Desde qué servicios de OVHcloud puedo crear datos?

Enterprise File Storage es un servicio que puede recibir datos de todos los servicios existentes de OVHcloud: Barra Metal, Public Cloud, Hosted Private Cloud (Dedicated server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/ADSL).

### ¿El servicio puede conectarse con Microsoft Active Directory (AD)?

No.

### ¿Cuáles son las certificaciones asociadas a Enterprise File Storage?

Nuestra solución Enterprise File Storage se ajusta a varios estándares avanzados del sector, incluyendo ISO27001, el RGPD y las políticas de datos de salud de varios países.

### ¿Se puede acceder a Enterprise File Storage desde una red privada de tipo vRack?

Todavía no, pero pronto estará disponible (vRack endpoint).

## Acceso *on-premises*

### ¿Es posible acceder a Enterprise File Storage desde el exterior de la red de OVHcloud?

Enterprise File Storage solo está disponible en la red de OVHcloud.<br>
Sin embargo, es posible montar una arquitectura que permita una conexión con una infraestructura ajena a esta red.<br>
Le invitamos a que contacte con nuestro servicio comercial o nuestro soporte técnico para diseñar una infraestructura que se ajuste a su ecosistema y su solución. 

## Capacidad y rendimiento

### ¿Cuáles son las capacidades de almacenamiento disponibles?

El tamaño mínimo de un servicio es de 1 TiB y el tamaño máximo es de 58 TiB. La granularidad es de 1TiB.

### ¿Cuántos servicios Enterprise File Storage puedo crear desde mi cuenta de cliente?

No hay límite de número de servicios por cuenta de cliente.

### ¿Cuál es el número máximo de volúmenes por servicio?

Es posible crear un máximo de 10 volúmenes por servicio. El tamaño mínimo es de 100 GiB y el tamaño máximo es de 29 TiB.

### ¿Qué nivel de rendimiento tiene Enterprise File Storage?

Enterprise File Storage proporciona una tasa de transferencia garantizada de 64 MB/s por TiB y 4000 IOPS por TiB.

Por ejemplo, cuando se entrega un pool de 10 TiB, se beneficia de un ancho de banda de 640 MB/s y 40000 IOPS.

## Snapshots y backups

### ¿Cómo se pueden restaurar los archivos de una versión anterior?

Los snapshots están disponibles en un directorio previsto a tal efecto (.snapshots).

### ¿Qué política de backup está asociada a Enterprise File Storage?

Los usuarios son responsables de la gestión de sus copias de seguridad (herramientas y reglas). Sin embargo, por motivos de seguridad y resiliencia de la infraestructura, OVHcloud realiza una copia de seguridad diaria del servicio en un servidor remoto. En caso de avería o ataque, OVHcloud puede restaurar los datos del día anterior. Esta acción se realiza bajo demanda y es un servicio opcional facturado.

### ¿Los snapshots están comprendidos en la capacidad de un servicio?

Se asigna a los snapshots un mínimo del 5% del espacio de almacenamiento. Por ejemplo, en un servicio de 5TiB, se reservan 250 GiB para los snapshots.

### ¿Cuál es el número máximo de snapshots por servicio?

200

### ¿Cuál es el número máximo de snapshots por volumen?

200

### ¿Cuántas políticas de snapshot puedo crear por volumen?

1

### ¿Cuántas reglas puedo crear por política de snapshot?

4

### ¿Con qué frecuencia se realizan los snapshots?

Los snapshots se almacenan al mismo nivel que el servicio. Los snapshots se replican en dos servidores distintos, en dos racks diferentes. Al mismo tiempo, OVHcloud realiza un snapshot diario en un sitio remoto.

### ¿Cómo seguir el uso de pools y volúmenes?

Todavía no hay métricas integradas para controlar el uso de pools y volúmenes. 

## Precios

### ¿Qué tipo de tarificación está asociado al servicio?

Enterprise File Storage es un servicio con facturación mensual por volumen (de 1 a 58 TB por tramos de 1 TB). También es posible, opcionalmente, contratar el servicio por un período de tiempo (12, 24 o 36 meses).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
