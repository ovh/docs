---
title: "Configurar y utilizar Git con un alojamiento web de OVHcloud"
excerpt: "Descubra cómo configurar y utilizar Git con un alojamiento web en el área de cliente de OVHcloud"
updated: 2024-08-22
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

Copie la dirección de su repositorio de GitHub. Debe tener el formato `https://github.com/<username>/<repository_name.git>`{.action}. Vuelva al formulario de asociación de Git y pegue la dirección de su repositorio de GitHub en el campo `Repositorio`{.action}. Si el formato de la dirección no es correcto, aparecerá el siguiente mensaje de error:

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
- La dirección de su repositorio de GitHub es correcta. Debe tener el formato `https://github.com/<username>/<repository_name.git>`{.action}.
- El nombre de la rama del repositorio de GitHub es correcto.
- El directorio de instalación está vacío.

Para validar la información del formulario de asociación de Git, haga clic en `Aplicar la configuración`{.action}.

### Activación de la asociación de Git

#### Correcto de la asociación de Git

Una vez validado el formulario de asociación de Git, se abrirá la pestaña Multisitio.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

A green banner will show you that Git is being enabled. Follow the activation of Git by clicking on the `Current tasks`{.action} link.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

The status `Running`{.action} indicates that the Git association is in progress. The process may take several minutes. When the task is complete, the status `Enabled`{.action} is displayed.

You can also track the progress of Git activation from the `Multisite`{.action} tab. In the table, identify the rows that correspond to the directory you want to associate with Git. For each of the rows concerned, in the `Git`{.action} column, the phrase `In progress`{.action} tells you that Git is being enabled.

When the Git association is complete, the status `Enabled`{.action} appears in the `Git`{.action} column for the rows concerned.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Git association errors

In the table in the `Multisite`{.action} tab, identify the rows corresponding to the directory you want to associate with Git. In the `Git` column, if the word `Error` appears, this means that at least one of the following errors has occurred:

- The SSH key has not been saved in your GitHub account.
- The installation directory is not empty.
- The GitHub repository address does not exist or is incorrect.
- The branch of the GitHub repository does not exist or its name is incorrect.

For the exact cause of the error, see the information from the last deployment. In the table, identify the row corresponding to the domain name for which you want to view the logs for the last deployment. To the right of the line, click on the `...`{.action} button, then on `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Once you have identified the error(s), associate Git again. Retry the operation by clicking on the `...`{.action} button on the corresponding line, then on `Link Git`{.action}.

### Deploy your GitHub repository on your OVHcloud web hosting plan

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain name that you want to deploy with Git. Ensure that the status of the Git column is `Enabled`{.action}. Click the `...`{.action} button, then `Deploy Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

A confirmation message appears, along with a check box telling you that if there is a conflict during deployment, you can force remote (GitHub repository) changes on your local repository. Tick or untick the box depending on your choice, then click `Confirm`{.action} to validate the deployment.

> [!warning]
>
> To avoid losing your local changes, remember to save them before overwriting them with changes from the remote branch.
>

The new version of your website has been deployed on your OVHcloud hosting plan. If other people are working on the same project and they make changes on the GitHub repository, then you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed to your web hosting plan. This avoids having to deploy Git manually, and your web hosting plan will always be up-to-date.

### Modify a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain you want to modify. Click the `...`{.action} button, then `Modify domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modify the information of your choice and click `Next`{.action}.

A second confirmation window will appear, with a summary of your changes.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Click `Confirm`{.action} to confirm your domain name changes.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before changing your domain name.

### Detach a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the line corresponding to the domain that you want to detach from your OVHcloud web hosting plan. Click the `...`{.action} button, then `Detach domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window will appear.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Click `Confirm`{.action} to confirm the detachment of your domain name.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before detaching your domain name.

### Configure Git

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row corresponding to the directory you want to configure with Git. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

The following information is displayed:

- SSH key: If you have not already done so, [save your SSH key in your GitHub account](#linkSSHKey).
- Deposit: Address of your Git deposit. This field is grayed out because you cannot change the address of the Git repository. To change the Git repository URL, you must [remove Git association from your directory](#deleteGitAssociation) and then [associate directory to Git](#associateGitRepo) again.
- Branch: Name of the branch of the GitHub repository. You can edit this field.
- Webhook URL: If you want to optimise your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

### Latest deployment information

Once you have deployed your GitHub repository on your web hosting plan, you can view information on the latest deployment, such as errors, tests and any useful information. 

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain whose logs you want to view from the last deployment. To the right of the line, click the `...`{.action} button, then `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

On this screen, you can view all the information related to the latest deployment.

### Delete Git <a name="deleteGitAssociation"></a> association

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row corresponding to the directory whose association with Git you want to remove. Click the `...`{.action} button, then `Delete Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

The message informs you that the deletion will apply to all domain names attached to your directory. Tick the `Do you want to empty the contents of the <your_directory> directory?`{.action} option if you also want to delete the contents (folders and files) of the directory.

1\.	If you select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory, as well as its contents.

2\.	If you do not select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory.

### Configure a webhook on GitHub

#### Retrieve the webhook URL

> [!primary]
>
> If you are already in the Git association form, copy the webhook URL and go to the step “[Configure the webhook](#configureWebhook)”.
>

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row that corresponds to the directory where you want to configure a webhook. Click the `...`{.action} button, then `Configure Git`{.action}.

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