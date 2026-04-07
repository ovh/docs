---
title: "Cambiar la contraseña de un usuario FTP"
excerpt: "Descubra cómo cambiar la contraseña de un usuario FTP en un alojamiento de OVHcloud"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Los planes de hosting de OVHcloud permiten acceder a un espacio de almacenamiento de archivos en la nube que puede utilizarse a través del protocolo **FTP**: el espacio de almacenamiento FTP.

Para acceder a este espacio de almacenamiento, puede utilizar un **usuario FTP** y su contraseña asociada.

Este acceso permite, entre otras cosas, [publicar el sitio web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Descubra cómo cambiar la contraseña de un usuario FTP en un alojamiento de OVHcloud.**

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](/links/web/hosting).
<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### Cambiar la contraseña de un usuario FTP

> [!primary]
>
> Para más información sobre las buenas prácticas de gestión de contraseñas, consulte la guía "[Establecer y gestionar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)".

Según el plan de [hosting de OVHcloud](/links/web/hosting), la contraseña de su usuario FTP se modifica de dos formas diferentes.

**Haga clic en su plan para ver el contenido.**

/// details | Planes Perso y Alojamiento gratuito 100M (un solo usuario FTP)

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
>> Haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se mostrará una tabla con los *usuarios FTP* creados en su alojamiento web. Haga clic en el *pictograma con forma de lápiz* en la columna `Contraseña`{.action}, introduzca la nueva contraseña **respetando la política de contraseñas** y confirme el cambio haciendo clic en el *botón verde* de validación.
>>
>> ![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

///

/// details | Planes Pro y Performance (varios usuarios FTP)

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
>> Haga clic en la pestaña `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se mostrará una tabla con los *usuarios FTP* creados en su alojamiento web. Haga clic en el botón `...`{.action} a la derecha del usuario FTP correspondiente y luego en `Cambiar la contraseña`{.action}. En la ventana que se abre, introduzca la nueva contraseña **respetando la política de contraseñas**, confírmela introduciéndola por segunda vez y haga clic en el botón `Aceptar`{.action}.
>>
>> ![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

///

> [!primary]
>
> La nueva contraseña debe respetar la siguiente **política de contraseñas**:
>
> - Mínimo 9 caracteres
> - Máximo 30 caracteres
> - Al menos una letra mayúscula
> - Al menos una letra minúscula
> - Al menos una cifra
> - Estar compuesta únicamente por números y letras

Por último, abra la pestaña `Tareas en curso`{.action} y vuelva a actualizar la página periódicamente. El cambio de contraseña tarda unos minutos en aplicarse.

### Acceder a su espacio de almacenamiento

Para acceder a su espacio de almacenamiento FTP, consulte nuestra guía ["Conectarse al espacio de almacenamiento de un alojamiento web"](/pages/web_cloud/web_hosting/ftp_connection).

## Más información <a name="go-further"></a>

[Establecer y gestionar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Conectarse al espacio de almacenamiento de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)

[Publicar el sitio web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).