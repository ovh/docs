---
title: 'Gestionar los motores de ejecución en un hosting Cloud Web'
slug: gestionar-motores-ejecucion-hosting-cloud-web
excerpt: 'Cómo realizar las operaciones relativas a los motores de ejecución en un hosting Cloud Web'
section: 'Configuración del alojamiento'
---

**Última actualización: 18/02/2019**

## Objetivo

El hosting Cloud Web ofrece la posibilidad de utilizar distintos lenguajes de programación en un alojamiento web, ya que determinados proyectos requieren motores de ejecución específicos.

**Esta guía explica cómo gestionar los motores de ejecución en un hosting Cloud Web.**

## Requisitos

- Tener contratado un plan de hosting [Cloud Web](https://www.ovh.es/hosting/cloud-web.xml) de OVH.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager), en la sección `Web`{.action}.

## Procedimiento

Para adaptarse a todos los proyectos, los planes de hosting Cloud Web permiten disponer de uno o varios motores de ejecución. La elección de uno u otro motor de ejecución dependerá de las necesidades específicas de cada proyecto. 

Así pues, **asegúrese en primer lugar de que su proyecto sea técnicamente compatible con el hosting Cloud Web**. Puede consultar los lenguajes compatibles en el siguiente enlace: <https://www.ovh.es/hosting/cloud-web.xml>. 

Una vez que sepa exactamente qué motor o motores de ejecución debe utilizar, puede realizar las acciones que se detallan a continuación.

### 1. Acceder a la gestión de los motores de ejecución

Para ver los motores de ejecución de su hosting Cloud Web, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento Cloud Web correspondiente. A continuación, abra la pestaña `Motores de ejecución`{.action}.

Se mostrará una tabla con los motores de ejecución que haya añadido hasta ese momento a su hosting Cloud Web. Tenga en cuenta que, al instalar el alojamiento, se crea un motor automáticamente.

![Cloud Web](images/cloud-web-runtime-step1.png){.thumbnail}

### 2. Gestionar los motores de ejecución

Existen diversas operaciones relativas a los motores de ejecución de un hosting Cloud Web:

- [añadir o modificar un motor de ejecución](./#21-anadir-o-modificar-un-motor-de-ejecucion){.external} (el número máximo de motores de ejecución depende del plan Cloud Web que tenga contratado);
- establecer un motor de ejecución como opción por defecto;
- eliminar un motor de ejecución.

#### 2.1. Añadir o modificar un motor de ejecución

> [!primary]
>
> Antes de modificar un motor de ejecución, asegúrese previamente de que dicha operación no provocará que el sitio web o la aplicación que utilicen el motor dejen de estar disponibles. Para ello, en la pestaña `Motores de ejecución`{.action}, consulte el **Número de multisitios asociados** al motor correspondiente. A continuación, en la pestaña `Multisitio`{.action}, consulte el motor que utiliza cada dominio en la columna **Motor de ejecución**.
> 

Para añadir o modificar un motor de ejecución, abra la pestaña `Motores de ejecución`{.action} del hosting Cloud Web correspondiente. Una vez ahí:

- **Si quiere añadir un motor de ejecución**, haga clic en el botón `Acciones`{.action} situado sobre la tabla y seleccione `Añadir un motor de ejecución`{.action}.
- **Si quiere modificar un motor de ejecución**, haga clic en botón `···`{.action} situado al final de la línea correspondiente al motor y seleccione `Editar`{.action}.

![Cloud Web](images/cloud-web-runtime-step2.png){.thumbnail}

Introduzca la información solicitada. Continúe leyendo esta guía en el apartado correspondiente al motor de ejecución seleccionado:

- [PHP](./#php){.external}
- [Node.js](./#nodejs){.external}

##### PHP

|Campo|Descripción| 
|---|---| 
|Nombre personalizado|Introduzca un nombre que le permita diferenciar este motor de ejecución de los otros motores de su área de cliente de OVH.|  
|Motor de ejecución|Seleccione el motor de ejecución deseado.|  

Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. Para terminar, asegúrese de que el motor de ejecución es utilizado por el multisitio o los multisitios correspondientes. Para ello, vaya al paso [3. Asociar el motor de ejecución a un multisitio](./#3-asociar-el-motor-de-ejecucion-a-un-multisitio_2){.external}.

![Cloud Web](images/cloud-web-runtime-step3.png){.thumbnail}

##### Node.js

|Campo|Descripción| 
|---|---| 
|Nombre personalizado|Introduzca un nombre que le permita diferenciar este motor de ejecución de los otros motores de su área de cliente de OVH.|
|Motor de ejecución|Seleccione el motor de ejecución deseado.|
|Ruta de acceso al directorio público|Indique el directorio en el que se alojará el contenido estático (el motor no ejecutará este contenido).|
|Entorno de la aplicación|Indique si se trata de un entorno de producción (`production`), de pruebas (`test`) o de desarrollo (`development`). Utilice este último con precaución, ya que los errores se muestran directamente en la interfaz web.|
|Script de ejecución de la aplicación|Introduzca el nombre del script que llamará a la tecnología Node.js.|

Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. Para terminar, asegúrese de que el motor de ejecución es utilizado por el multisitio o los multisitios correspondientes. Para ello, vaya al paso [3. Asociar el motor de ejecución a un multisitio](./#3-asociar-el-motor-de-ejecucion-a-un-multisitio_2){.external}.

![Cloud Web](images/cloud-web-runtime-step3-2.png){.thumbnail}

### 3. Asociar el motor de ejecución a un multisitio

Una vez que disponga del motor o motores de ejecución necesarios para su proyecto, asegúrese de que estos estén correctamente asociados a sus multisitios. Para ello, abra la pestaña `Multisitio`{.action} del alojamiento Cloud Web correspondiente. 

Compruebe en la columna **Motor de ejecución** de la tabla que el motor de ejecución asociado al dominio sea el correcto. Los nombres que aparecen en la columna **Nombre de la configuración** corresponden al nombre personalizado que usted haya indicado al crear el motor de ejecución.

![Cloud Web](images/cloud-web-runtime-step4.png){.thumbnail}

Si quiere cambiar el motor de ejecución asociado a un multisitio, haga clic en el icono con forma de rueda dentada situado al final de la línea correspondiente al dominio y seleccione `Editar`{.action}.

![Cloud Web](images/cloud-web-runtime-step5.png){.thumbnail}

A continuación, seleccione el nuevo motor de ejecución. Le recordamos que los nombres que aparecen en la columna **Nombre de la configuración** corresponden al nombre personalizado que usted haya indicado al crear el motor de ejecución y que es necesario que el sitio o aplicación web accesibles desde el dominio en cuestión sean compatibles con el motor de ejecución seleccionado. 

Una vez que haya seleccionado el motor, continúe hasta finalizar la operación.

![Cloud Web](images/cloud-web-runtime-step6.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.