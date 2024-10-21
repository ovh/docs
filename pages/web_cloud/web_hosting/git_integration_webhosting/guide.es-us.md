---
title: "Configurar y utilizar Git con un alojamiento web de OVHcloud"
excerpt: "Descubra cómo configurar y utilizar Git con un alojamiento web en el área de cliente de OVHcloud"
updated: 2024-09-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

En el panorama digital actual, las sociedades son cada vez más dinámicas e innovadoras. La capacidad de gestionar y desplegar eficazmente el código de su sitio web es esencial para mantener la competitividad y la durabilidad de su marca. Git, el sistema de control de versiones más utilizado del mundo, permite almacenar el código de su sitio web en plataformas como GitHub, permitiendo una mejor trazabilidad de los cambios, así como una automatización y un despliegue más rápidos. Como cliente de OVHcloud, tendrá una infraestructura sólida para alojar su sitio web, aprovechando al mismo tiempo las numerosas ventajas de Git y GitHub para el desarrollo y la evolución de su sitio web.

**Descubra cómo configurar y utilizar Git con un alojamiento web desde el área de cliente de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), en la sección Web Cloud.
- Tener una cuenta [GitHub](https://github.com/){.external} y estar conectado a ella.

> [!primary]
>
> A fecha de hoy, solo la plataforma GitHub es compatible con los servicios de alojamiento web de OVHcloud.

## Procedimiento

> [!primary]
>
> Para la asociación y la configuración de Git, deberá realizar cambios en su cuenta de GitHub. Antes de empezar, conéctese a su cuenta de GitHub.
>

### Asociar un directorio a Git <a name="associateGitRepo"></a>

> [!warning]
>
> Al asociar un directorio a Git, todos los dominios presentes en dicho directorio también se asociarán a Git. Por ejemplo, si el directorio correspondiente al sitio web que usted asocia es `www`, todos los dominios asociados al directorio `www` también estarán asociados a Git.
>

Conéctese a su [área de cliente de OVHcloud](/links/manager) y realice las siguientes acciones:

- Acceda a la pestaña `Web Cloud`{.action}.
- Seleccione su alojamiento en la sección `Alojamientos`{.action} a la izquierda.
- Haga clic en la pestaña `Multisitio`{.action}.
- En la tabla que se abre, identifique la fila correspondiente al directorio que desea asociar a Git.
- Haga clic en el botón `...`{.action} y seleccione `Asociar Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/link-git.png){.thumbnail}

Aparecerá el formulario de asociación de Git. Es necesario configurar varios elementos:

- Llave SSH
- Depósito de GitHub
- Rama del repositorio de GitHub
- Webhook (opcional)

#### Asociar una llave SSH a GitHub <a name="linkSSHKey"></a>

> [!primary]
>
> La generación de una llave SSH es un paso fundamental, ya que establece una conexión segura y cifrada entre el directorio de su sitio web y el repositorio de GitHub. Esta clave garantiza que las transferencias de datos y los cambios de código se realizan de forma segura y autenticada, evitando el acceso no autorizado y garantizando la integridad del código.
>

Copie y guarde la llave SSH en su cuenta de GitHub. Esto permite establecer una conexión segura sin necesidad de introducir una contraseña en cada operación Git que deba realizar.

- Inicie sesión en su cuenta de GitHub.
- Haga clic en su imagen de perfil en la esquina superior derecha y luego en `Settings`{.action}.
- En la nueva página, haga clic en `SSH and GPG keys`{.action} en la columna izquierda.
- Seleccione `New SSH key`{.action} o `Add SSH key`{.action}.

Aparecerá el formulario para añadir una nueva llave SSH:

- **Title** : añada una descripción para su llave SSH. Por ejemplo, puede denominar esta llave "OVHcloud".
- **Type of key**: deje el valor por defecto `authentication key`{.action}
- **Key** : pegue su llave SSH.

Para validar la información, haga clic en `Add SSH key`{.action}. Si se le solicita, confirme el acceso a su cuenta en GitHub.

#### Establecer el repositorio de GitHub

Vuelva al formulario de asociación de Git en el área de cliente de OVHcloud. Debe introducir la dirección de su repositorio de GitHub. Si aún no tiene un repositorio de GitHub para su proyecto, cree uno.

Para crear un nuevo repositorio:

- Inicie sesión en su cuenta de GitHub.
- Haga clic en su imagen de perfil en la esquina superior derecha y luego en `Your repositories`{.action}.
- A la derecha de la pantalla, haga clic en `New`{.action}.

Introduzca un nombre para el depósito e introduzca la información solicitada.

> [!warning]
>
> Marque la opción `Add a README file` para que GitHub inicialice correctamente el repositorio.
>

Haga clic en `Create Repository`{.action}.

Copie la dirección de su repositorio de GitHub. Debe tener el formato `https://github.com/<username>/<repository_name.git>`. Vuelva al formulario de asociación de Git y pegue la dirección de su repositorio de GitHub en el campo `Repositorio`{.action}. Si el formato de la dirección no es correcto, aparecerá el siguiente mensaje de error:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-repository-name.png){.thumbnail}

Ahora defina la rama de su repositorio de GitHub. La rama predeterminada es `main`, pero si desea utilizar otra rama, cree una en GitHub siguiendo estos pasos:

- Inicie sesión en su cuenta de GitHub.
- Haga clic en su imagen de perfil en la esquina superior derecha y luego en `Your repositories`{.action}.
- Acceda al repositorio de GitHub correspondiente.
- Haga clic en `Main`{.action} y luego en `View all branches`{.action}, o haga clic directamente en la pestaña `x Branch`{.action}.
- A la derecha de la pantalla que aparece, haga clic en `New branch`{.action}.
- Indique el nombre de la nueva rama y confirme haciendo clic en `Create new branch`{.action}.

Vuelva al formulario de asociación de Git en el área de cliente de OVHcloud e introduzca el nombre de la nueva rama que acaba de crear.

#### Configurar el despliegue automático

En la parte inferior del formulario de asociación de Git, aparece la sección `Configurar el despliegue automático`{.action}, junto con la dirección URL de webhook. Configurar un webhook permite a su repositorio de GitHub notificar automáticamente a su alojamiento web de OVHcloud los eventos que se produzcan en el repositorio de GitHub (nuevo despliegue, cambio en el código, etc.). Esta función es especialmente útil si trabaja en grupo en el mismo proyecto y desea mantener actualizados todos los cambios del repositorio de GitHub. Para más información, consulte cómo [configurar un webhook en GitHub](#configureWebhook).

#### Validar la asociación de Git

Antes de validar el formulario de asociación de Git, asegúrese de que:

- La llave SSH se ha registrado correctamente en su cuenta de GitHub.
- La dirección de su repositorio de GitHub es correcta. Debe tener el formato `https://github.com/<username>/<repository_name.git>`.
- El nombre de la rama del repositorio de GitHub es correcto.
- El directorio de instalación está vacío.

Para validar la información del formulario de asociación de Git, haga clic en `Aplicar la configuración`{.action}.

### Activación de la asociación de Git

#### Correcto de la asociación de Git

Una vez validado el formulario de asociación de Git, se abrirá la pestaña Multisitio.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

Un banner verde le indica que Git se está activando. Siga la activación de Git haciendo clic en el enlace `Tareas en curso`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

El estado `En proceso`{.action} indica que la asociación de Git está en curso. El proceso puede tardar varios minutos. Una vez completada la tarea, aparecerá el estado `Activado`{.action}.

También puede consultar el progreso de la activación de Git en la pestaña `Multisitio`{.action}. En la tabla, identifique las filas correspondientes al directorio que desea asociar a Git. Para cada una de las filas en cuestión, en la columna `Git`{.action}, la mención `En curso`{.action} le indica que Git se está activando.

Cuando se realiza la asociación de Git, el estado `Activado`{.action} aparece en la columna `Git`{.action} para las filas afectadas.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Errores de asociación de Git

En la tabla de la pestaña `Multisitio`{.action}, identifique las filas correspondientes al directorio que desea asociar a Git. En la columna `Git`, si aparece `Error`, significa que se ha producido al menos uno de los siguientes errores:

- La llave SSH no ha sido registrada en su cuenta de GitHub.
- El directorio de instalación no está vacío.
- La dirección del repositorio de GitHub no existe o es incorrecta.
- La bifurcación del repositorio de GitHub no existe o su nombre es incorrecto.

Para conocer la causa exacta del error, consulte la información de la última implementación. En la tabla, identifique la fila correspondiente al dominio cuyos logs del último despliegue quiera consultar. A la derecha de la línea, haga clic en el botón `...`{.action} y luego en `Información del último despliegue`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Una vez identificado el error o los errores, vuelva a asociar Git. Vuelva a intentar la operación haciendo clic en el botón `...`{.action} de la fila correspondiente y, a continuación, en `Asociar Git`{.action}.

### Desplegar un repositorio de GitHub en un alojamiento web de OVHcloud

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `Multisitio`{.action}. En la tabla que se abre, identifique la fila correspondiente al dominio que desea desplegar con Git. Asegúrese de que el estado de la columna Git sea `Activado`{.action}. Haga clic en el botón `...`{.action} y luego en `Desplegar Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git.png){.thumbnail}

Aparecerá un mensaje de confirmación y una casilla de verificación que le indicará que, en caso de conflicto durante la implementación, puede forzar los cambios remotos (del repositorio de GitHub) en el repositorio local. Marque o no la casilla según su elección y haga clic en `Confirmar`{.action} para validar la implementación.

> [!warning]
>
> Para evitar perder los cambios locales, asegúrese de guardarlos antes de sobrescribirlos con los cambios de la rama remota.
>

La nueva versión de su sitio web se ha desplegado correctamente en su alojamiento de OVHcloud. Si otras personas trabajan en el mismo proyecto y realizan cambios en el repositorio de GitHub, puede [configurar un webhook en GitHub](#configureWebhook) para que los cambios se implementen automáticamente en su alojamiento web. De este modo, no tendrá que desplegar Git manualmente y su alojamiento web siempre estará actualizado.

### Editar un dominio

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `Multisitio`{.action}. En la tabla que se abre, identifique la fila correspondiente al dominio que desea modificar. Haga clic en el botón `...`{.action} y luego en `Modificar el dominio`{.action}. Existen dos escenarios posibles:

#### El dominio no es el único asociado al mismo directorio

Se abrirá la siguiente ventana:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modifique la información que desee y haga clic en `Siguiente`{.action}.

Aparecerá una segunda ventana de confirmación con un resumen de los cambios.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Haga clic en `Confirmar`{.action} para confirmar los cambios realizados en el dominio.

#### El dominio es el único asociado al directorio

Se abrirá la siguiente ventana:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

Como se indica en el mensaje, [elimine su asociación Git](#deleteGitAssociation) primero antes de modificar su dominio.

### Desvincular un dominio

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `Multisitio`{.action}. Se abrirá una tabla en la que deberá identificar la línea correspondiente al dominio que quiera separar del alojamiento web de OVHcloud. Haga clic en el botón `...`{.action} y luego en `Desvincular el dominio`{.action}. Existen dos escenarios posibles:

#### El dominio no es el único asociado al mismo directorio

Se abrirá la siguiente ventana.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Haga clic en `Confirmar`{.action} para confirmar la separación del dominio.

#### El dominio es el único asociado al directorio

Se abrirá la siguiente ventana:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

Como indica el mensaje, [elimine su asociación Git](#deleteGitAssociation) primero antes de desvincular su dominio.

### Configurar Git

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `Multisitio`{.action}. En la tabla que se abre, identifique la fila correspondiente al directorio que desea configurar con Git. Haga clic en el botón `...`{.action} y luego en `Configurar Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Aparecerá la siguiente información:

- Llave SSH: si todavía no lo ha hecho, [registre su llave SSH en su cuenta de GitHub](#linkSSHKey).
- Depósito: dirección de su depósito Git. Este campo aparece atenuado porque no puede cambiar la dirección del repositorio Git. Para cambiar la dirección URL del repositorio de Git, debe [quitar la asociación Git del directorio](#deleteGitAssociation) y, a continuación, volver a [asociar el directorio a Git](#associateGitRepo).
- Rama: nombre de la rama del repositorio de GitHub. Puede editar este campo.
- URL de webhook: si desea optimizar sus despliegues en Git, [configure el webhook en GitHub](#configureWebhook).

### Información del último despliegue

Una vez que haya desplegado su repositorio de GitHub en su alojamiento web, podrá consultar la información relativa al último despliegue, como los errores, las pruebas o cualquier otra información útil.

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `Multisitio`{.action}. En la tabla que se abre, identifique la fila correspondiente al dominio cuyos logs del último despliegue desea consultar. A la derecha de la línea, haga clic en el botón `...`{.action} y luego en `Información del último despliegue`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

En esta pantalla podrá consultar toda la información relativa a la última implementación.

### Quitar la asociación de Git <a name="deleteGitAssociation"></a>

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `Multisitio`{.action}. En la tabla que se abre, identifique la fila correspondiente al directorio cuya asociación con Git desea eliminar. Haga clic en el botón `...`{.action} y luego en `Eliminar Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

Se abrirá la siguiente ventana:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

El mensaje le informa de que la eliminación se aplicará a todos los dominios asociados al directorio. Marque la casilla `¿Desea vaciar el contenido del directorio <your_directory>?`{.action} si también desea eliminar el contenido (carpetas y archivos) del directorio.

1\.	Si marca la casilla, aparecerá la siguiente ventana:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Haga clic en `Confirmar`{.action} para confirmar la eliminación de la asociación Git del directorio y su contenido.

2\.	Si no activa la casilla, se abrirá la siguiente ventana:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Haga clic en `Confirmar`{.action} para confirmar la eliminación de la asociación Git del directorio.

### Configurar un webhook en GitHub

#### Obtener la URL del webhook

> [!primary]
>
> Si ya está en el formulario de asociación de Git, copie la URL del webhook y vaya al paso "[Configurar webhook](#configureWebhook)".
>

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Seleccione la pestaña `Multisitio`{.action}. En la tabla que se abre, identifique la fila correspondiente al directorio en el que desea configurar un webhook. Haga clic en el botón `...`{.action} y luego en `Configurar Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

En la parte inferior del formulario que aparece, identifique la dirección del campo `URL de webhook`{.action} y cópiela. Ahora debe guardar la URL y configurar el webhook en su cuenta de GitHub.

#### Configurar el webhook <a name="configureWebhook"></a>

Inicie sesión en su cuenta de GitHub y vaya al repositorio en el que desea configurar el webhook. Acceda a la pestaña `Settings`{.action} y, en el menú lateral de la configuración, haga clic en `Webhooks`{.action}. Haga clic en el botón `Add webhook`{.action} para acceder al formulario:

- **Payload URL**: introduzca la URL proporcionada en el formulario de asociación de Git (`URL de webhook`{.action}).
- **Content type**: elija `application/json`{.action} como tipo de contenido para los datos enviados.
- **Secret**: el secreto es opcional. GitHub lo usará para firmar los mensajes enviados por el webhook, mejorando así la seguridad.
- **SSL verification**: si su sitio web es compatible con HTTPS, deje esta opción activada para una mayor seguridad.
- **Which events would you like to trigger this webhook ?** : seleccione los eventos que activarán el envío del webhook. Para un despliegue automático, `Just the push event`{.action} (Solo el evento push) suele ser suficiente, pero puede elegir `Send me everything`{.action} para recibir notificaciones de todos los eventos.
- **Active** : Asegúrese de que la casilla de verificación está marcada para activar el webhook.

Haga clic en `Add webhook`{.action} para guardar y activar su nuevo webhook.

#### Probar su webhook

Una vez que haya creado su webhook en GitHub, diríjase a la lista de webhooks y seleccione el webhooks que acaba de crear, o haga clic en `Edit`{.action}.

En la nueva pantalla, haga clic en la pestaña `Recent Deliveries`{.action}. Para enviar un evento de prueba específico, GitHub normalmente envía un evento `ping` al crear el webhook, y puede utilizar el botón `Redeliver`{.action} junto a ese evento para probarlo.

Si la prueba ha funcionado, la pestaña `Response`{.action} devuelve un código 200. Si devuelve un código de error (normalmente 500 o 400), significa que su webhook está mal configurado. Vuelva al formulario de adición de un webhook y compruebe los datos, específicamente la URL del webhook proporcionada por OVHcloud.

#### Utilizar el webhook

Una vez configurado el webhook, el código del sitio web se actualizará automáticamente cada vez que se produzcan cambios en el repositorio de GitHub. Por ejemplo, si un compañero realiza algún cambio en el repositorio de GitHub, el código del sitio web se actualizará localmente (en el alojamiento de OVHcloud).

### Conclusión

Acaba de asociar el código de su sitio web con Git a través de su repositorio de GitHub. Ahora puede desplegar los cambios realizados en el repositorio de GitHub en su alojamiento web o desplegarlos de forma automatizada gracias al webhook, consultar los logs de sus despliegues y realizar múltiples acciones, todo ello desde su área de cliente, en solo unos clics.

## Más información <a name="go-further"></a>

[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).