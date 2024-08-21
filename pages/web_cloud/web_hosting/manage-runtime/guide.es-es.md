---
title: "Gestionar los motores de ejecución en un hosting Cloud Web"
excerpt: "Cómo realizar las operaciones relativas a los motores de ejecución en un hosting Cloud Web"
updated: 2022-07-27
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Cloud Web ofrece la posibilidad de utilizar distintos lenguajes de programación para la realización de su proyecto. De hecho, para finalizarlo, debe utilizar el motor de ejecución más adecuado.

**Esta guía explica cómo gestionar los motores de ejecución de su alojamiento Cloud Web.**

## Requisitos

- Tener contratado un plan de alojamiento [Cloud Web](/links/web/hosting-cloud-web-offer).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager) y accedido a la sección `«Web»`{.action}.

## Procedimiento

Para adaptarse a todos los proyectos de forma óptima, los planes de alojamiento Cloud Web le permiten disponer de uno o varios motores de ejecución. Por lo tanto, la elección de uno u otro dependerá de lo que desee instrumentar. 

Así pues, **si aún no lo ha hecho, asegúrese de que su proyecto sea técnicamente compatible con su alojamiento Cloud Web**. Puede consultar los lenguajes compatibles visitando el siguiente enlace: <https://www.ovhcloud.com/es-es/web-hosting/cloud-web-offer/>.Una vez que sepa exactamente qué motor o motores de ejecución debe utilizar, puede realizar las acciones que se detallan a continuación.

### Etapa 1:  acceder a la gestión de los motores de ejecución

Para ver los motores de ejecución de su alojamiento Cloud Web, inicie sesión en el [área de cliente de OVHcloud](/links/manager){.external}, haga clic en `«Alojamientos»`{.action} en la barra de servicios a la izquierda y seleccione el nombre del alojamiento Cloud Web de su interés. A continuación, abra la pestaña `«Motores de ejecución»`{.action}.

Se mostrará una tabla con los motores de ejecución que haya añadido a su alojamiento Cloud Web hasta ese momento. Tenga en cuenta que se crea automáticamente un motor en el momento de la instalación de su alojamiento.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/tab-phpfpm7-4.png){.thumbnail}

### Etapa 2: gestionar los motores de ejecución

Existen diversas formas de gestionar los motores de ejecución de su alojamiento Cloud Web:

- [Añadir o modificar un motor de ejecución](./#21-anadir-o-modificar-un-motor-de-ejecucion){.external} (el número máximo de motores de ejecución depende del [plan Cloud Web que tenga contratado](/links/web/hosting-cloud-web-offer){.external}).
- Establecer un motor de ejecución como opción por defecto.
- Eliminar un motor de ejecución.

#### 2.1\. Añadir o modificar un motor de ejecución

> [!primary]
>
> Antes de modificar un motor de ejecución, asegúrese previamente de que dicha operación no provocará que el sitio web o la aplicación que utilice el motor deje de estar disponible. Puede encontrar el número de multisitios que se apoyan en sus motores de ejecución gracias a la columna `«Número de multisitios vinculados»`. En la pestaña `«Multisitio»`{.action}, también puede encontrar el motor que utiliza cada dominio gracias a la columna `«Motor de ejecución»` de la tabla.
> 
> Para poder eliminar un motor de ejecución, es necesario eliminar las entradas multisitio que utilizan este último.

Para añadir o modificar un motor de ejecución, abra la pestaña `«Motores de ejecución»`{.action} del alojamiento Cloud Web de su interés. Y luego:

- **Si quiere añadir un motor de ejecución**, haga clic en `«Acciones»`{.action} (encima de la tabla) y, seguidamente, en `«Añadir un motor de ejecución`{.action}.
- **Si quiere modificar un motor de ejecución**, haga clic en el botón `«···»`{.action} a la derecha del motor correspondiente y, seguidamente, haga clic en `«Editar»`{.action}.

Introduzca la información solicitada en la ventana que aparece. Prosiga en función del motor de ejecución seleccionado:

- [PHP](./#php){.external} 
- [Node.js](./#nodejs){.external}
- [Ruby](./#ruby){.external} 
- [Python](./#python){.external} 

##### **PHP**

|Elemento|Descripción| 
|---|---| 
|Nombre personalizado|Introduzca un nombre que le permita diferenciar este motor de ejecución de los otros motores de su cuenta de OVHcloud.|  
|Motor de ejecución|Seleccione el nuevo motor de ejecución deseado.|  

Una vez cumplimentada toda la información, haga clic en `«Validar»`{.action}. Entonces asegúrese de que el multisitio o los multisitios que desee puedan utilizar debidamente ese motor de ejecución. Para ello, prosiga con la Etapa 3 [«asociar el motor de ejecución a un multisitio»](./#etapa-3-asociar-el-motor-de-ejecucion-a-un-multisitio){.external}.

##### **Node.js**

|Elemento|Descripción| 
|---|---| 
|Nombre personalizado|Introduzca un nombre que le permita diferenciar este motor de ejecución de los otros motores de su cuenta de OVHcloud.|
|Motor de ejecución|Seleccione el nuevo motor de ejecución deseado.|
|Ruta de acceso al directorio público|Indique el directorio en el que se alojará el contenido estático (el motor no ejecutará este contenido).|
|Entorno de la aplicación|Especifique si se trata de un entorno de «Producción», de «Prueba» o, incluso, de «Desarrollo».  Tenga en cuenta que este último tiene un comportamiento diferente a los otros y que muestra los errores directamente en la interfaz web, así pues, utilícelo con conocimiento de causa.|
|Secuencia de comandos de ejecución de la aplicación|Designe la secuencia de comandos que ejecutará la tecnología Node.js.|

Una vez cumplimentada toda la información, haga clic en `«Validar»`{.action}. Entonces asegúrese de que el multisitio o los multisitios que desee puedan utilizar debidamente ese motor de ejecución. Para ello, prosiga con la «Etapa 3: [ asociar el motor de ejecución a un multisitio](./#3-asociar-el-motor-de-ejecución-a-un-multisitio ){.external}».

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-nodejs8.png){.thumbnail}

##### **Ruby**

|Elemento|Descripción| 
|---|---| 
|Nombre personalizado|Introduzca un nombre que le permita diferenciar este motor de ejecución de los otros motores de su cuenta de OVHcloud.|
|Motor de ejecución|Seleccione el nuevo motor de ejecución deseado.|
|Ruta de acceso al directorio público|Indique el directorio en el que se alojará el contenido estático (el motor no ejecutará este contenido).|
|Entorno de la aplicación|Especifique si se trata de un entorno de «Producción», de «Prueba» o, incluso, de «Desarrollo». Tenga en cuenta que este último tiene un comportamiento diferente a los otros y que muestra los errores directamente en la interfaz web, así pues, utilícelo con conocimiento de causa.|
|Secuencia de comandos de ejecución de la aplicación|Designe la secuencia de comandos que ejecutará el motor de ejecución Ruby.|

Una vez cumplimentada toda la información, haga clic en `«Validar»`{.action}. Entonces asegúrese de que el multisitio o los multisitios que desee puedan utilizar debidamente ese motor de ejecución. Para ello, prosiga con la «Etapa 3: [ asociar el motor de ejecución a un multisitio](./#3-asociar-el-motor-de-ejecución-a-un-multisitio ){.external}».

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-ruby2-6.png){.thumbnail}

##### **Python**

|Elemento|Descripción| 
|---|---| 
|Nombre personalizado|Introduzca un nombre que le permita diferenciar este motor de ejecución de los otros motores de su cuenta de OVHcloud.|
|Motor de ejecución|Seleccione el nuevo motor de ejecución deseado.|
|Ruta de acceso al directorio público|Indique el directorio en el que se alojará el contenido estático (el motor no ejecutará este contenido).|
|Entorno de la aplicación|Especifique si se trata de un entorno de «Producción», de «Prueba» o, incluso, de «Desarrollo». Tenga en cuenta que este último tiene un comportamiento diferente a los otros y que muestra los errores directamente en la interfaz web, así pues, utilícelo con conocimiento de causa.|
|Secuencia de comandos de ejecución de la aplicación|Designe la secuencia de comandos que ejecutará el motor de ejecución Python.|

Una vez cumplimentada toda la información, haga clic en `«Validar»`{.action}. Entonces asegúrese de que el multisitio o los multisitios que desee puedan utilizar debidamente ese motor de ejecución. Para ello, prosiga con la «Etapa 3: [ asociar el motor de ejecución a un multisitio](./#3-asociar-el-motor-de-ejecución-a-un-multisitio ){.external}».

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-python3.png){.thumbnail}

### Etapa 3: asociar el motor de ejecución a un multisitio

> [!primary]
> En nuestro ejemplo, solo se crearon los motores PHP y Node.js. En su proyecto, bien podría utilizar Ruby o Python. En dicho caso, las operaciones descritas a continuación son
> aplicables.
> 
> La utilización de dos motores de ejecución al mismo tiempo en su alojamiento Cloud Web depende del [plan que haya contratado](/links/web/hosting-cloud-web-offer){.external}.
> 

Una vez que disponga del motor o los motores de ejecución necesarios para su proyecto, asegúrese de que estos estén correctamente asociados a sus multisitios. Para ello, abra la pestaña `«Multisitio»`{.action} del alojamiento Cloud Web de su interés. 

En la columna `«Motor de ejecución»` de la tabla, compruebe que el motor de ejecución asociado a los dominios de su interés sea el correcto. Los nombres que se visualizan corresponden al «Nombre personalizado» que haya establecido.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/runtime-software-applications.png){.thumbnail}

Si quiere cambiar el motor de ejecución asociado a un multisitio, haga clic en el pictograma con forma de rueda dentada situado a la derecha del dominio de su interés y, seguidamente, seleccione `«Editar»`{.action}.

A continuación, seleccione el motor correcto al lado de `«Motor de ejecución»` en la ventana que aparece. Le recordamos que los nombres que aparecen corresponden al «Nombre personalizado» que haya establecido. Es absolutamente necesario que el sitio o la aplicación accesible desde el dominio en cuestión sea compatible con el motor de ejecución seleccionado. 

Una vez seleccionado, prosiga con las etapas correspondientes hasta finalizar.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/multisite/modify-a-domain-step-1.png){.thumbnail}

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).