---
title: Restaurar las copias de seguridad a través de la API de OVHcloud
slug: veeam-backup-restoration
routes:
    canonical: 'https://docs.ovh.com/us/es/private-cloud/veeam-backup-restoration/'
excerpt: Cómo restaurar las copias de seguridad Veeam Managed Backup a través de la API de OVHcloud
section: Servicios y opciones de OVHcloud
order: 06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 29/03/2021**

## Objetivo

**Esta guía explica cómo identificar y restaurar las copias de seguridad a través de la API de OVHcloud.**

## Requisitos

- Estar conectado a la [API de OVHcloud.](https://ca.api.ovh.com/)
- [Veeam Managed Backup activado](https://docs.ovh.com/gb/en/managed-bare-metal/veeam-backup-as-a-service/) en su Hosted Private Cloud

## Procedimiento

Si no está familiarizado con el funcionamiento de las API de OVHcloud, consulte nuestra guía [Primeros pasos con las API de OVHcloud](https://docs.ovh.com/us/es/api/first-steps-with-ovh-api/).

### 1. generar un informe de backup

En primer lugar, debe identificar los backups que desea restaurar.

Conéctese a [https://ca.api.ovh.com/](https://ca.api.ovh.com/) y utilice la siguiente llamada:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport

Introduzca las variables:

- serviceName: la referencia de su Dedicated Cloud en forma `pcc-XX-XX-XX-XX`
- datacenterId: ID del datacenter en el que está activada la solución Veeam Managed Backup

Esta llamada va a generar un informe de copias de seguridad. Se enviará por correo electrónico a la dirección indicada en la cuenta de administrador del servicio Hosted Private Cloud.
<br>El mensaje de correo electrónico incluye los siguientes elementos:

- Nombre de la MV
- Copias de seguridad efectuadas (BackupJobName)
- Tamaño de cada backup
- **Carpeta de almacenamiento (BackupRepository)**
- Último punto de restauración

![Correo electrónico](images/backup-report-email2.png){.thumbnail}

Tenga en cuenta que el backup repository permite restaurar las copias de seguridad en la siguiente etapa.

### 2. restaurar las copias de seguridad

> [!warning]
>
> Antes de restaurar el datastore, asegúrese de que este último dispone de la capacidad de almacenamiento suficiente para alojar todos los datos que debe restaurar.
>
> En caso contrario, le informaremos por correo electrónico y la operación se cancelará.

La llamada a la API restaurará los últimos puntos de restauración válidos de cada backup presente en el directorio de almacenamiento.

Conéctese a [https://ca.api.ovh.com/](https://ca.api.ovh.com/) y utilice la siguiente llamada:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
>

Introduzca las variables:

- serviceName: la referencia de su Dedicated Cloud en forma `pcc-XX-XX-XX-XX`
- datacenterId: ID del datacenter en el que está activada la solución Veeam Managed Backup
- backupJobName (opcional): el nombre de una copia de seguridad (obtenida en el paso 1) en forma de `pcc-XXX-XXX-XXX-XXX-XXX_vm-XXX` si solo desea restaurar una MV.
- backupRepositoryName el nombre del backup repository obtenido en el paso 1.

Una vez completada la restauración, en la interfaz vSphere podrá ver las MV correspondientes a las copias de seguridad restauradas.
<br>Para identificarlos, sus nombres contienen el sufijo *BatchRestore* así como una marca de tiempo de la restauración.
<br>Las MV se restauran apagadas. A su cargo, encenderlo.

![vSphere](images/vcenter2.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
