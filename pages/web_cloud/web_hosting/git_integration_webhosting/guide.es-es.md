---
title: "Configurar y utilizar Git con un alojamiento web de OVHcloud"
excerpt: "Descubra cómo configurar y utilizar Git con un alojamiento web en el área de cliente de OVHcloud"
updated: 2026-05-04
---

## Objetivo

En el panorama digital actual, las sociedades son cada vez más dinámicas e innovadoras. La capacidad de gestionar y desplegar eficazmente el código de su sitio web es esencial para mantener la competitividad y la durabilidad de su marca. Git, el sistema de control de versiones más utilizado del mundo, permite almacenar el código de su sitio web en plataformas como GitHub, permitiendo una mejor trazabilidad de los cambios, así como una automatización y un despliegue más rápidos. Como cliente de OVHcloud, tendrá una infraestructura sólida para alojar su sitio web, aprovechando al mismo tiempo las numerosas ventajas de Git y GitHub para el desarrollo y la evolución de su sitio web.

**Descubra cómo configurar y utilizar Git con un alojamiento web desde el área de cliente de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Tener una cuenta [GitHub](https://github.com/) y estar conectado a ella.

> [!primary]
>
> A fecha de hoy, solo la plataforma GitHub es compatible con los servicios de alojamiento web de OVHcloud.

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

> [!primary]
>
> Para la asociación y la configuración de Git, deberá realizar cambios en su cuenta de GitHub. Antes de empezar, conéctese a su cuenta de GitHub.

### Asociar un directorio a Git <a name="associateGitRepo"></a>

> [!warning]
>
> Al asociar un directorio a Git, todos los dominios presentes en dicho directorio también se asociarán a Git. Por ejemplo, si el directorio correspondiente al sitio web que usted asocia es `www`, todos los dominios asociados al directorio `www` también estarán asociados a Git.

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Asociar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Se muestra el formulario de asociación de Git. Varios elementos deben configurarse:
>>
>> - Repositorio de GitHub
>> - Rama del repositorio de GitHub
>> - Clave SSH (para un repositorio de GitHub privado)
>> - Webhook (opcional)
>>
>> Siga leyendo esta guía para obtener la información necesaria para completar los campos obligatorios.

#### Establecer el repositorio de GitHub

Introduzca la dirección de su repositorio de GitHub. Si aún no tiene un repositorio de GitHub para su proyecto, cree uno.

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

Copie la dirección de su repositorio de GitHub. Debe tener el siguiente formato:

- `https://github.com/<username>/<repository_name>.git` para un depósito público.
- `git@github.com:<username>/<repository_name>.git` para un depósito privado.

Vuelva al formulario de asociación de Git y pegue la dirección de su repositorio de GitHub en el campo `Repositorio`. Si el formato de la dirección no es correcto, aparecerá el siguiente mensaje de error:

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-repository-name.png){.thumbnail}

Ahora defina la rama de su repositorio de GitHub. La rama predeterminada es `main`, pero si desea utilizar otra rama, cree una en GitHub siguiendo estos pasos:

- Inicie sesión en su cuenta de GitHub.
- Haga clic en su imagen de perfil en la esquina superior derecha y luego en `Your repositories`{.action}.
- Acceda al repositorio de GitHub correspondiente.
- Haga clic en `Main`{.action} y luego en `View all branches`{.action}, o haga clic directamente en la pestaña `x Branch`{.action}.
- A la derecha de la pantalla que aparece, haga clic en `New branch`{.action}.
- Indique el nombre de la nueva rama y confirme haciendo clic en `Create new branch`{.action}.

Vuelva al formulario de asociación de Git en el área de cliente de OVHcloud e introduzca el nombre de la nueva rama que acaba de crear.

Si introduce la dirección de un repositorio privado de GitHub (de tipo `git@github.com:<username>/<repository_name>.git`), aparecerá un campo `SSH key` (llave SSH) debajo del campo `Branch`.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key.png){.thumbnail}

Para configurar su llave SSH, consulte el paso "Asociar una llave SSH a GitHub (solo para los repositorios privados de GitHub)" a continuación.

#### Asociar una llave SSH a GitHub (solo para los repositorios privados de GitHub) <a name="linkSSHKey"></a>

> [!primary]
>
> **¿Por qué es necesaria la llave SSH únicamente para un depósito privado?**
>
> Cuando su repositorio de GitHub es público, los archivos pueden recuperarse sin autenticación, lo que significa que Git puede clonar y actualizar el código sin necesidad de una llave SSH. Por el contrario, si su depósito es privado, GitHub requiere autenticación para acceder. La llave SSH permite establecer esta conexión segura y garantizar que solo los usuarios autorizados puedan interactuar con el repositorio.

> [!primary]
>
> La generación de una llave SSH es un paso fundamental, ya que establece una conexión segura y cifrada entre el directorio de su sitio web y el repositorio de GitHub. Esta clave garantiza que las transferencias de datos y los cambios de código se realizan de forma segura y autenticada, evitando el acceso no autorizado y garantizando la integridad del código.

Copie su llave SSH haciendo clic en el botón de la derecha.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key-copy.png){.thumbnail}

Registre la llave SSH en su cuenta de GitHub:

- Inicie sesión en su cuenta de GitHub.
- Haga clic en su imagen de perfil en la esquina superior derecha y luego en `Settings`{.action}.
- En la nueva página, haga clic en `SSH and GPG keys`{.action} en la columna izquierda.
- Seleccione `New SSH key`{.action} o `Add SSH key`{.action}.

Aparecerá el formulario para añadir una nueva llave SSH:

- **Title**: añada una descripción para su llave SSH. Por ejemplo, puede denominar esta llave "OVHcloud".
- **Type of key**: deje el valor por defecto `authentication key`{.action}
- **Key**: pegue su llave SSH.

Para validar la información, haga clic en `Add SSH key`{.action}. Si se le solicita, confirme el acceso a su cuenta en GitHub.

#### Configurar el despliegue automático

En la parte inferior del formulario de asociación de Git, aparece la sección `Configurar el despliegue automático`{.action}, junto con la dirección URL de webhook. Configurar un webhook permite a su repositorio de GitHub notificar automáticamente a su alojamiento web de OVHcloud los eventos que se produzcan en el repositorio de GitHub (nuevo despliegue, cambio en el código, etc.). Esta función es especialmente útil si trabaja en grupo en el mismo proyecto y desea mantener actualizados todos los cambios del repositorio de GitHub. Para más información, consulte cómo [configurar un webhook en GitHub](#configureWebhook).

#### Validar la asociación de Git

Antes de validar el formulario de asociación de Git, asegúrese de que:

- La llave SSH se ha registrado correctamente en su cuenta de GitHub.
- La dirección de su repositorio de GitHub es correcta. Debe tener el formato `https://github.com/<username>/<repository_name>.git`.
- El nombre de la rama del repositorio de GitHub es correcto.
- El directorio de instalación está vacío.

Para validar la información del formulario de asociación de Git, haga clic en `Aplicar la configuración`{.action}.

### Activación de la asociación de Git

#### Correcto de la asociación de Git

Después de validar el formulario de asociación de Git, se le redirige a la página de la pestaña `Mis sitios`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/git-activation-ongoing.png){.thumbnail}

Un banner verde le indica que Git se está activando. Siga la activación de Git haciendo clic en el enlace `Tareas en curso`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

El estado `En proceso`{.action} indica que la asociación de Git está en curso. El proceso puede tardar varios minutos. Una vez completada la tarea, aparecerá el estado `Activado`{.action}.

También puede seguir la evolución de la activación de Git desde la pestaña `Mis sitios`{.action}. En la columna `Git`{.action} de la tabla, la mención `En curso`{.action} que aparece en la línea del sitio web correspondiente le indica que Git se está activando.

Cuando la asociación de Git se completa, el estado `Activado`{.action} aparece en la columna `Git`{.action} para el sitio web correspondiente.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Errores de asociación de Git

En la tabla de la pestaña `Mis sitios`{.action}, identifique las líneas correspondientes al directorio del sitio web que desea asociar a Git. En la columna `Git`, si aparece la mención `Error`, esto significa que al menos uno de los siguientes errores ha ocurrido:

- La llave SSH no ha sido registrada en su cuenta de GitHub.
- El directorio de instalación no está vacío.
- La dirección del repositorio de GitHub no existe o es incorrecta.
- La rama del repositorio de GitHub no existe o su nombre es incorrecto.

Para conocer la causa exacta del error, consulte la información del último despliegue. En la tabla, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Información del último despliegue`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Una vez identificado(s) el (los) error(es), asocie Git de nuevo. Repita la operación haciendo clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Asociar Git`{.action}.

### Desplegar un repositorio de GitHub en un alojamiento web de OVHcloud

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Desplegar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparece un mensaje de confirmación, así como una casilla que le indica que, en caso de conflicto durante el despliegue, puede forzar las modificaciones remotas (del repositorio GitHub) sobre su repositorio local. Marque o no la casilla según su elección, y luego haga clic en `Confirmar`{.action} para validar el despliegue.
>>
>> > [!warning]
>> >
>> > Para evitar perder sus modificaciones locales, recuerde guardarias antes de sobrescribirlas con las modificaciones de la rama remota.
>>
>> La nueva versión de su sitio web se ha desplegado correctamente en su alojamiento web OVHcloud. Si otras personas trabajan en el mismo proyecto y realizan modificaciones en el repositorio GitHub, puede [configurar un webhook en GitHub](#configureWebhook) para que sus modificaciones se desplieguen automáticamente en su alojamiento web. Esto le evita desplegar Git manualmente, y su sitio web siempre estará actualizado.

### Editar un dominio

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los nombres de dominio y subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del nombre de dominio o subdominio correspondiente, y luego en `Modificar un dominio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Dos escenarios son posibles:
>>
>> **1 - Uno o varios otros nombres de dominio están asociados al sitio web**
>>
>> Aparece la siguiente ventana:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Modifique la información según sus necesidades y haga clic en `Siguiente`{.action}.
>>
>> Aparece una segunda ventana de confirmación con el resumen de sus cambios:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Haga clic en `Confirmar`{.action} para validar los cambios de su nombre de dominio.
>>
>> **2 - Un solo nombre de dominio está asociado al sitio web**
>>
>> Aparece la siguiente ventana:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Como indica el mensaje, [elimine su asociación Git](#deleteGitAssociation) en primer lugar antes de modificar su nombre de dominio.

### Desvincular un dominio

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los nombres de dominio y subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del nombre de dominio o subdominio correspondiente, y luego en `Desvincular el dominio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Dos escenarios son posibles:
>>
>> **1 - Uno o varios otros nombres de dominio están asociados al sitio web**
>>
>> Aparece la siguiente ventana:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Haga clic en `Confirmar`{.action} para validar el desenganche de su nombre de dominio.
>>
>> **2 - Un solo nombre de dominio está asociado al sitio web**
>>
>> Aparece la siguiente ventana:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Como indica el mensaje, [elimine su asociación Git](#deleteGitAssociation) primero antes de desvincular su dominio.

### Configurar Git

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Configurar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparecen las siguientes informaciones:
>>
>> - Clave SSH: Si aún no lo ha hecho, [registre su clave SSH en su cuenta GitHub](#linkSSHKey).
>> - Repositorio: Dirección de su repositorio Git. Este campo está gris porque no puede modificar la dirección del repositorio Git. Para cambiar la URL del repositorio Git, debe [eliminar la asociación Git de su directorio](#deleteGitAssociation) y luego [asociar el directorio a Git](#associateGitRepo) de nuevo.
>> - Rama: Nombre de la rama del repositorio GitHub. Puede modificar este campo si es necesario.
>> - URL del webhook: Si desea optimizar sus despliegues en Git, [configure el webhook en GitHub](#configureWebhook).

### Información del último despliegue

Una vez que haya desplegado su repositorio de GitHub en su alojamiento web, podrá consultar la información relativa al último despliegue, como los errores, las pruebas o cualquier otra información útil.

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Información del último despliegue`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> En esta pantalla encontrará toda la información relativa al último despliegue.

### Quitar la asociación de Git <a name="deleteGitAssociation"></a>

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Eliminar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparece la siguiente ventana:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> El mensaje le informa que la eliminación se aplicará a todos los nombres de dominio asociados a su sitio web. Marque la casilla `¿Desea vaciar el contenido del directorio <su_directorio>?`{.action} si también desea eliminar el contenido (directorios y archivos) del directorio.
>>
>> 1\.	Si marca la casilla, aparece la siguiente ventana:
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>> 
>> Haga clic en `Confirmar`{.action} para validar la eliminación de la asociación Git de su directorio y de su contenido.
>> 
>> 2\.	Si no marca la casilla, aparece la siguiente ventana:
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>> 
>> Haga clic en `Confirmar`{.action} para validar la eliminación de la asociación Git de su directorio.

### Configurar un webhook en GitHub

#### Obtener la URL del webhook

> [!primary]
>
> Si ya está en el formulario de asociación de Git, copie la URL del webhook y vaya al paso "[Configurar webhook](#configureWebhook)".

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Configurar Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Etapa 4**
>> 
>> En la parte inferior del formulario que se muestra, copie la dirección contenida en el campo `URL de webhook`{.action}. Ahora debe registrar la URL y configurar el webhook en su cuenta de GitHub.

#### Configurar el webhook <a name="configureWebhook"></a>

Inicie sesión en su cuenta de GitHub y vaya al repositorio en el que desea configurar el webhook. Acceda a la pestaña `Settings`{.action} y, en el menú lateral de la configuración, haga clic en `Webhooks`{.action}. Haga clic en el botón `Add webhook`{.action} para acceder al formulario:

- **Payload URL**: introduzca la URL proporcionada en el formulario de asociación de Git (`URL de webhook`{.action}).
- **Content type**: elija `application/json`{.action} como tipo de contenido para los datos enviados.
- **Secret**: el secreto es opcional. GitHub lo usará para firmar los mensajes enviados por el webhook, mejorando así la seguridad.
- **SSL verification**: si su sitio web es compatible con HTTPS, deje esta opción activada para una mayor seguridad.
- **Which events would you like to trigger this webhook?**: seleccione los eventos que activarán el envío del webhook. Para un despliegue automático, `Just the push event`{.action} (Solo el evento push) suele ser suficiente, pero puede elegir `Send me everything`{.action} para recibir notificaciones de todos los eventos.
- **Active**: Asegúrese de que la casilla de verificación está marcada para activar el webhook.

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
