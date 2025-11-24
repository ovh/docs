35 71 

> **Paso 4**
> 
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Asociar Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>> 
> **Paso 5**
>> 
>> Se muestra el formulario de asociación de Git. Varios elementos deben configurarse:
>> 
>> - Repositorio de GitHub
>> - Rama del repositorio de GitHub
>> - Clave SSH (para un repositorio de GitHub privado)
>> - Webhook (opcional)
>> 
>> Siga leyendo esta guía para obtener la información necesaria para completar los campos obligatorios.

167

Después de validar el formulario de asociación de Git, se redirige a la página de la pestaña `Mis sitios`{.action}.

177 179

También puede seguir la evolución de la activación de Git desde la pestaña `Mis sitios`{.action}. En la columna `Git`{.action} de la tabla, la mención `En curso`{.action} que aparece en la línea del sitio web correspondiente le indica que Git está en proceso de activación.

Cuando la asociación de Git se completa, el estado `Activado`{.action} aparece en la columna `Git`{.action} para el sitio web correspondiente.

185

En la tabla de la pestaña `Mis sitios`{.action}, identifique las líneas correspondientes al directorio del sitio web que desea asociar a Git. En la columna `Git`, si aparece la mención `Error`, esto significa que al menos uno de los siguientes errores ha ocurrido:

192 196

Para conocer la causa exacta del error, consulte la información del último despliegue. En la tabla, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Información del último despliegue`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Una vez que se hayan identificado los errores, asocie Git nuevamente. Repita la operación haciendo clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Asociar Git`{.action}.

200 235

> **Paso 4**
>> 
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Desplegar Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Paso 5**
>> 
>> Aparece un mensaje de confirmación, así como una casilla que le indica que, en caso de conflicto durante el despliegue, puede forzar las modificaciones remotas (del repositorio de GitHub) sobre su repositorio local. Marque o no la casilla según su elección, y haga clic en `Confirmar`{.action} para validar el despliegue.
>> 
>> > [!warning]
>> >
>> > Para evitar perder sus modificaciones locales, asegúrese de guardadas antes de que sean sobrescritas por las modificaciones de la rama remota.
>> 
>> La nueva versión de su sitio web se ha desplegado correctamente en su alojamiento web de OVHcloud. Si otras personas trabajan en el mismo proyecto y realizan modificaciones en el repositorio de GitHub, puede [configurar un webhook en GitHub](#configureWebhook) para que sus modificaciones se desplieguen automáticamente en su alojamiento web. Esto le evita desplegar Git manualmente, y su sitio web siempre estará actualizado.

239 294

> **Paso 4**
>> 
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los nombres de dominio o subdominios asociados.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del nombre de dominio o subdominio correspondiente, y luego en `Modificar el dominio`{.action}.
>> 
>> ![Opciones de dominios asociados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>> 
> **Paso 5**
>> 
>> Dos escenarios son posibles:
>> 
>> **1 - Uno o varios otros nombres de dominio están asociados al sitio web**
>> 
>> Aparece la siguiente ventana:
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>> 
>> Modifique la información según sus necesidades y haga clic en `Siguiente`{.action}.
>> 
>> Aparece una segunda ventana de confirmación con un resumen de sus cambios:
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>> 
>> Haga clic en `Confirmar`{.action} para validar los cambios de su nombre de dominio.
>> 
>> **2 - Solo un nombre de dominio está asociado al sitio web**
>> 
>> Aparece la siguiente ventana:
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>> 
>> Como indica el mensaje, [elimine su asociación Git](#deleteGitAssociation) antes de modificar su nombre de dominio.

298 347

> **Paso 4**
>> 
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los nombres de dominio o subdominios asociados.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del nombre de dominio o subdominio correspondiente, y luego en `Desasociar el dominio`{.action}.
>> 
>> ![Opciones de dominios asociados](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>> 
> **Paso 5**
>> 
>> Dos escenarios son posibles:
>> 
>> **1 - Uno o varios otros nombres de dominio están asociados al sitio web**
>> 
>> Aparece la siguiente ventana.
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>> 
>> Haga clic en `Confirmar`{.action} para validar el desasociamiento de su nombre de dominio.
>> 
>> **2 - Solo un nombre de dominio está asociado al sitio web**
>> 
>> Aparece la siguiente ventana:
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> 
>> Como indica el mensaje, [elimine su asociación Git](#deleteGitAssociation) antes de desasociar su nombre de dominio.

351 385

> **Paso 4**
>> 
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Configurar Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Paso 5**
>> 
>> Aparecen las siguientes informaciones:
>> 
>> - Clave SSH: Si aún no lo ha hecho, [registre su clave SSH en su cuenta de GitHub](#linkSSHKey).
>> - Repositorio: Dirección de su repositorio Git. Este campo está grisado porque no puede modificar la dirección del repositorio Git. Para cambiar la URL del repositorio Git, debe [eliminar la asociación Git de su directorio](#deleteGitAssociation) y luego [asociar el directorio a Git](#associateGitRepo) nuevamente.
>> - Rama: Nombre de la rama del repositorio de GitHub. Puede modificar este campo si es necesario.
>> - URL de webhook: Si desea optimizar sus despliegues en Git, [configure el webhook en GitHub](#configureWebhook).

391 418

> **Paso 4**
>> 
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `informaciones del último despliegue`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
>> En esta pantalla puede encontrar toda la información relativa al último despliegue.

422 467

El mensaje le informa que la eliminación se aplicará a todos los nombres de dominio asociados a su sitio web. Marque la casilla `¿Desea vaciar el contenido del directorio <votre_repertoire>`{.action} si también desea eliminar el contenido (directorios y archivos) del directorio.
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

477 506

Haga clic en las pestañas que aparecen a continuación para mostrar sucesivamente cada una de las **5** etapas.

> [!tabs]
> **Paso 1**
>> 
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), y vaya a la sección `Web Cloud`{.action}.
>> 
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>> 
> **Paso 2**
>> 
>> Haga clic en el menú `Hébergements`{.action}, y elija el alojamiento web correspondiente.
>> 
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>> 
> **Paso 3**
>> 
>> En la página que se muestra, haga clic en la pestaña `Mis sitios`{.action}.
>> 
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Paso 4**
>> 
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Configurar Git`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Paso 5**
>> 
>> En la parte inferior del formulario que se muestra, copie la dirección contenida en el campo `URL de webhook`{.action}. Ahora debe registrar la URL y configurar el webhook en su cuenta de GitHub.