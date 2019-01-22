---
title: 'Gestionar los motores de ejecución en un hosting Cloud Web'
slug: gestionar-motores-ejecucion-hosting-cloud-web
excerpt: "Cómo realizar las operaciones relativas a los motores de ejecución en un hosting Cloud\_Web"
section: 'Configuración del alojamiento'
hidden: true
---

**Última actualización: 22/01/2019**

## Objetivo

El hosting Cloud Web ofrece la posibilidad de utilizar distintos lenguajes de programación en un alojamiento, ya que determinados proyectos requieren motores de ejecución específicos. 

**Esta guía explica cómo gestionar los motores de ejecución en un hosting Cloud Web.**

## Requisitos

- Tener contratado un plan de hosting [Cloud Web](https://www.ovh.es/hosting/cloud-web.xml){.external} de OVH.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager).

## Procedimiento

Para adaptarse a todos los proyectos, los planes de hosting Cloud Web permiten configurar el motor de ejecución. El uso de uno u otro motor de ejecución dependerá de las necesidades específicas de cada proyecto. 

Así pues, **asegúrese en primer lugar de que su proyecto sea técnicamente compatible con el hosting Cloud Web**. Puede consultar los lenguajes compatibles en el siguiente enlace: <https://www.ovh.es/hosting/cloud-web.xml>. 

Una vez que sepa exactamente qué motor o motores de ejecución debe utilizar, puede realizar las acciones que se detallan a continuación.

### 1. Acceder a la gestión de los motores de ejecución

Para ver los motores de ejecución de su hosting Cloud Web, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento Cloud Web correspondiente. A continuación, abra la pestaña `Motores de ejecución`{.action}.

Se mostrará una tabla con los motores de ejecución que haya añadido hasta ese momento a su hosting Cloud Web. Tenga en cuenta que, al instalar el alojamiento, se crea un motor automáticamente. Desde esa página puede realizar las siguientes acciones:

- modificar la configuración de un motor de ejecución existente;
- añadir un nuevo motor de ejecución (el número máximo de motores de ejecución depende del plan Cloud Web que tenga contratado);
- establecer un motor de ejecución como opción por defecto;
- eliminar un motor de ejecución.

![Cloud Web](images/cloud-web-runtime-step1.png){.thumbnail}

Antes de realizar cualquier operación sobre un motor de ejecución, le recomendamos que se asegure previamente de que dicha operación no provocará que el sitio web o la aplicación que utilicen el motor dejen de estar disponibles. 

Para ello, en la pestaña `Motores de ejecución`{.action}, consulte el **Número de multisitios asociados** al motor de ejecución correspondiente. A continuación, en la pestaña `Multisitio`{.action}, consulte el motor que utiliza cada dominio en la columna **Motor de ejecución**.

Una vez que esté listo para realizar la acción deseada, vaya al siguiente paso.

![Cloud Web](images/cloud-web-runtime-step2.png){.thumbnail}

### 2. Gestionar los motores de ejecución

#### 1. Modificar un motor de ejecución

Para modificar la configuración de un motor de ejecución, abra la pestaña `Motores de ejecución`{.action} del hosting Cloud Web correspondiente. A continuación, haga clic en el botón `···`{.action} situado al final de la línea correspondiente al motor que quiera configurar y seleccione `Editar`{.action}. 

![Cloud Web](images/cloud-web-runtime-step3.png){.thumbnail}

Introduzca la información solicitada. Según el motor de ejecución, es posible que aparezcan nuevos campos solicitando información adicional.

|Campo|Descripción| 
|---|---| 
|Nombre personalizado|Introduzca un nombre que le permita diferenciar su motor de ejecución de los otros motores de su área de cliente de OVH.|  
|Motor de ejecución|Seleccione el motor de ejecución deseado.|  

Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}.

![Cloud Web](images/cloud-web-runtime-step4.png){.thumbnail}

### 3. Asociar el motor a un multisitio

Una vez que disponga del motor o motores de ejecución necesarios para su proyecto, asegúrese de que estos estén correctamente asociados a sus multisitios. Para ello, abra la pestaña `Multisitio`{.action} del alojamiento Cloud Web correspondiente. Compruebe en la columna **Motor de ejecución** de la tabla que el motor de ejecución asociado al dominio sea el correcto.

Si quiere cambiar el motor de ejecución asociado a un multisitio, haga clic en el icono con forma de rueda dentada situado al final de la línea correspondiente al dominio y seleccione `Editar`{.action}. A continuación, seleccione el nuevo motor de ejecución y siga los pasos que se indican hasta finalizar la operación. Le recordamos que el sitio o aplicación web accesibles desde el dominio en cuestión deben ser compatibles con el motor de ejecución seleccionado. 

![Cloud Web](images/cloud-web-runtime-step5.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.