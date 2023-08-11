---
title: Enterprise File Storage - Gestione sus políticas de snapshots
excerpt: "Cómo crear una política de snapshots, aplicarla en el volumen, modificarla y eliminarla desde el área de cliente"
updated: 2023-08-07
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Esta guía explica cómo gestionar las políticas de snapshots para los volúmenes Enterprise File Storage de OVHcloud.

**Descubra cómo crear una política de snapshots, aplicarla en su volumen, modificarla y eliminarla desde su área de cliente.**

## Requisitos

- Un servicio Enterprise File Storage de OVHcloud con un volumen disponible
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)

## Principios básicos

Un snapshot de volumen es una copia puntual de sólo lectura de un volumen.<br>
Los snapshots se crean a partir de un volumen operativo existente. No pueden existir sin eso.<br>
Una política de snapshots permite automatizar la creación de snapshots utilizando diferentes parámetros. La política puede modificarse y eliminarse si ya no la necesita.

## En la práctica

Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y seleccione la pestaña `Bare Metal Cloud`{.action} en la barra de navegación superior. Abra `Almacenamiento y backup`{.action} y luego `Enterprise File Storage`{.action} en el menú de la izquierda y seleccione su servicio en la lista.

### Crear una política de snapshots

Una política de snapshots permite automatizar los snapshots definiendo la frecuencia de creación en minutos, horas, días, semanas o meses. 
También es necesario especificar el número de copias que desea conservar.

1\. Haga clic en la pestaña `Políticas de snapshots`{.action}.

![SnapshotPolicy](images/Snapshot_Policy_1.png){.thumbnail}

2\. Introduzca el nombre de su política de snapshots, una descripción de la misma y utilice el botón `+ Añadir una nueva regla`{.action} para añadir una o varias reglas a la política.

![SnapshotPolicy](images/Snapshot_Policy_2.png){.thumbnail}

3\. Rellene los campos para especificar la hora, los días del mes, los días de la semana y los meses para la creación del snapshot. También deberá introducir un prefijo para los snapshots, necesario para poder realizar el snapshot.

Puede encontrar información más detallada para cada valor haciendo clic en el signo de interrogación. Expandiendo la sección `Ejemplo`{.action}, puede ver dos conjuntos de reglas con una explicación de su resultado.

Haga clic en la marca de verificación para agregar la nueva regla. Una vez que haya añadido todas las reglas, haga clic en `Crear una nueva política de snapshots`{.action}.

> [!primary]
> Debe especificar un prefijo y una duración en minutos. De forma opcional, puede introducir las horas, días y meses de ejecución para afinar la programación.
>

Una vez creada, no es posible modificar una política de snapshots. Si necesita aplicar una nueva configuración de frecuencia, deberá eliminar la política de snapshots actual y crear una nueva. 

### Aplicar una política de snapshots 

Una vez creada la política de snapshots, puede aplicarla a un volumen.

1\. Abra la pestaña `Volúmenes`{.action} de su pool de capacidad.

![ApplySnapshotPolicy](images/Snapshot_Policy_3.png){.thumbnail}

2\. Seleccione de la lista el volumen al que debe aplicarse la política de snapshots.
3\. Acceda a la sección `Snapshots`{.action} y en la sección `Gestionar la política de snapshots`{.action}, seleccione la política que desea aplicar. 
4\. Pulse el botón `Aplicar la política`{.action}.

![ApplySnapshotPolicy](images/Snapshot_Policy_4.png){.thumbnail}

### Eliminar una política de snapshots

> [!warning]
>
> No es posible eliminar una política de snapshots asociada a un volumen. Si quiere eliminar una política de snapshots asociada a uno o varios volúmenes, deberá disociar esta política asociando otra política de snapshots a dichos volúmenes.
>

Para eliminar una política de snapshots:

1\. Acceda a la pestaña `Políticas de snapshots`{.action} de su pool de capacidad.

![DeleteSnapshotPolicy](images/Snapshot_Policy_5.png){.thumbnail}

2\. Seleccione la política que desea eliminar.
3\. Haga clic en el botón Eliminar representado por una `papelera`{.action}.

![DeleteSnapshotPolicy](images/Snapshot_Policy_6.png){.thumbnail}

## Más información <a name="go-further"></a>

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es-es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
