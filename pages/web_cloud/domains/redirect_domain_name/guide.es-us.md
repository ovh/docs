---
title: "Redirigir un nombre de dominio gestionado por OVHcloud"
excerpt: "Descubra los diferentes tipos de redirecciones y cómo crear una para un nombre de dominio gestionado por OVHcloud"
updated: 2026-03-27
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

La redirección de un nombre de dominio consiste en redirigirlo hacia un nuevo destino. Existen diferentes tipos de redirecciones, cada una de las cuales responde a una necesidad específica.

**Descubra las diferentes formas de redirigir su nombre de dominio**

## Requisitos

- Tener un [nombre de dominio](/links/web/domains)
- Estar conectado a su alojamiento web (para una redirección mediante un archivo [.htaccess](#htaccess_rewrite)).

<!-- CP-NAV-START:web-domains -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Dominios](/links/control-panel/web-domains)
- **Ruta de navegación:** `Web Cloud`{.action} > `Dominios`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-domains -->

## Procedimiento

### Comprender la redirección de un nombre de dominio

Esta funcionalidad permite redirigir un nombre de dominio/subdominio hacia:

- otro nombre de dominio/subdominio ya existente:
    - **Ejemplo**: `domain.tld`
- una URL (Uniform Resource Locator) de sitio web:
    - **Ejemplos**: `http://www.domain.tld/welcome/` o `https://www.domain.tld/welcome/` (si el nombre de dominio de destino dispone de un certificado SSL compatible).

Estas acciones se pueden realizar de varias formas:

- **Desde el [área de cliente de OVHcloud](/links/manager)**, donde un asistente de configuración permite configurar la redirección.
- **Mediante un método que requiere programación**. Deberá crear la redirección usted mismo en un archivo (generalmente un [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> La implementación de una redirección puede afectar al posicionamiento SEO de su sitio web.
> Sea prudente con las operaciones que vaya a realizar o contacte con un [proveedor especializado](/links/partner) en posicionamiento SEO si es necesario.
>
> Atención: una redirección creada desde el [área de cliente de OVHcloud](/links/manager) no permite redirigir una URL en `https://` hacia otro nombre de dominio u otra URL.
> Para crear este tipo de redirección, deberá utilizar obligatoriamente [una reescritura de URL](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite) a través de un archivo ".htaccess", por ejemplo.
>

### Redirigir un nombre de dominio desde el área de cliente

Además de las redirecciones de "apuntamiento" hacia los registros DNS A, AAAA y CNAME, hay 3 opciones de redirección disponibles desde el [área de cliente de OVHcloud](/links/manager).

Si lo necesita, consulte nuestra documentación sobre los [registros DNS](/pages/web_cloud/domains/dns_zone_records).

> [!warning]
>
> Para utilizar una de las 3 opciones siguientes, la zona DNS activa del nombre de dominio debe estar gestionada en el área de cliente de OVHcloud. Estas opciones de redirección modificarán la configuración de la zona DNS para funcionar.
>
> En caso contrario, las redirecciones no funcionarán.

> [!primary]
>
> Independientemente de la opción de redirección elegida, la modificación necesita un tiempo de propagación de 4 a 24 horas máximo para ser plenamente efectiva.

**Haga clic en la opción que prefiera para mostrar el contenido.**

/// details | Opción 1 - Redirección visible permanente hacia una dirección web

Esta opción permite, tras introducir el nombre de dominio redirigido, mostrar el nombre de dominio de destino en la barra de direcciones del navegador en lugar del nombre de dominio redirigido.

- **Ejemplo**: si redirige `domain1.tld` hacia `domain2.tld`, es `domain2.tld` lo que se mostrará en la barra de direcciones del navegador.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Esta redirección "estándar" devuelve un código HTTP 301.

<!-- CP-STEPS-START:configure-redirect-permanent -->
Haga clic en las pestañas de abajo para ver cada uno de los **7** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en la pestaña `Redirección`{.action}: la tabla muestra las redirecciones activas para su nombre de dominio. A continuación, haga clic en `Añadir una redirección`{.action}.
>>
>> ![Presentación del menú redirección](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la ventana, su nombre de dominio a redirigir ya aparece. Rellene el formulario **únicamente** si desea redirigir un *subdominio*.
>>
>> La casilla `Redirigir también`{.action} se puede marcar para redirigir también su subdominio en `www` hacia el mismo destino que elija para su nombre de dominio/subdominio.
>>
>> ![Paso 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 4**
>>
>> Seleccione `Hacia una dirección web`{.action}.
>>
>> ![Paso 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 5**
>>
>> Seleccione `Con una redirección visible`{.action} entre las dos opciones indicadas.
>>
>> ![Paso 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 6**
>>
>> Seleccione `Permanente (301)`{.action} entre las dos opciones indicadas e introduzca el nombre de dominio o la URL de destino de la redirección en el formulario `Dirección web`{.action} que aparece.
>>
>> ![Paso 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 7**
>>
>> En este último paso, asegúrese de que la información mostrada es correcta.
>>
>> ![Paso 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Haga clic en `Confirmar`{.action} para validar la configuración.
>>
>> > [!primary]
>> >
>> > Si aparece el mensaje "*Existen redirecciones a partir de los nombres de dominio que desea redirigir que entran en conflicto con las redirecciones que desea añadir*", puede marcar la casilla `Confirmar la sobreescritura de la redirección existente`{.action} para forzar la aplicación de la redirección.
>> >
>> > Atención, la configuración anterior se desactivará y eliminará.
>> >
>>
<!-- CP-STEPS-END:configure-redirect-permanent -->

///

/// details | Opción 2 - Redirección visible temporal hacia una dirección web

Al igual que la opción 1, esta opción permite mostrar, tras introducir el nombre de dominio redirigido, el nombre de dominio de destino en la barra de direcciones del navegador en lugar del nombre de dominio redirigido.

No obstante, esta opción debe utilizarse de forma puntual, por ejemplo para eventos efímeros.

El posicionamiento en los motores de búsqueda es menos eficiente que con una redirección **visible permanente** de tipo 301 (código HTTP).

- **Ejemplo**: si redirige `domain1.tld` hacia `domain2.tld`, es `domain2.tld` lo que se mostrará en la barra de direcciones del navegador.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Esta redirección devuelve un código HTTP 302.

<!-- CP-STEPS-START:configure-redirect-temporary -->
Haga clic en las pestañas de abajo para ver cada uno de los **7** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en la pestaña `Redirección`{.action}: la tabla muestra las redirecciones activas para su nombre de dominio. A continuación, haga clic en `Añadir una redirección`{.action}.
>>
>> ![Presentación del menú redirección](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la ventana, su nombre de dominio a redirigir ya aparece. Rellene el formulario **únicamente** si desea redirigir un *subdominio*.
>>
>> La casilla `Redirigir también`{.action} se puede marcar para redirigir también su subdominio en `www` hacia el mismo destino que elija para su nombre de dominio/subdominio.
>>
>> ![Paso 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 4**
>>
>> Seleccione `Hacia una dirección web`{.action}.
>>
>> ![Paso 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 5**
>>
>> Seleccione `Con una redirección visible`{.action} entre las dos opciones indicadas.
>>
>> ![Paso 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 6**
>>
>> Seleccione `Temporal (302)`{.action} entre las dos opciones indicadas e introduzca el nombre de dominio o la URL de destino de la redirección en el formulario `Dirección web`{.action} que aparece.
>>
>> ![Paso 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 7**
>>
>> En este último paso, asegúrese de que la información mostrada es correcta.
>>
>> ![Paso 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Haga clic en `Confirmar`{.action} para validar la configuración.
>>
>> > [!primary]
>> >
>> > Si aparece el mensaje "*Existen redirecciones a partir de los nombres de dominio que desea redirigir que entran en conflicto con las redirecciones que desea añadir*", puede marcar la casilla `Confirmar la sobreescritura de la redirección existente`{.action} para forzar la aplicación de la redirección.
>> >
>> > Atención, la configuración anterior se desactivará y eliminará.
<!-- CP-STEPS-END:configure-redirect-temporary -->

///

/// details | Opción 3 - Redirección invisible hacia una dirección web

Esta redirección permite, tras introducir el nombre de dominio redirigido, dejarlo en la barra de direcciones del navegador en lugar de sustituirlo por el nombre de dominio de destino.

**Atención, esta acción no es compatible con todos los sitios y afecta al posicionamiento SEO del sitio web.**

- **Ejemplo**: si redirige `domain1.tld` hacia `domain2.tld`, es `domain1.tld` lo que se mostrará en la barra de direcciones del navegador.

![Gif2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

La redirección invisible funciona con una etiqueta HTML *iFrame*. Esta permite que el nombre de dominio redirigido integre en su propia página HTML el contenido de la otra página correspondiente al nombre de dominio de destino.

Esta encapsulación impide que los visitantes del sitio visualicen el nombre de dominio de destino.

> Esta opción devuelve un código HTTP 200.

> [!warning]
>
> Atención, las páginas encapsuladas con una etiqueta *iFrame* pueden no leerse en los smartphones. Su contenido generalmente no es tenido en cuenta por los motores de búsqueda para el posicionamiento SEO y la indexación del sitio.

<!-- CP-STEPS-START:configure-redirect-invisible -->
Haga clic en las pestañas de abajo para ver cada uno de los **7** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en la pestaña `Redirección`{.action}: la tabla muestra las redirecciones activas para su nombre de dominio. A continuación, haga clic en `Añadir una redirección`{.action}.
>>
>> ![Presentación del menú redirección](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la ventana, su nombre de dominio a redirigir ya aparece. Rellene el formulario **únicamente** si desea redirigir un *subdominio*.
>>
>> La casilla `Redirigir también`{.action} se puede marcar para redirigir también su subdominio en `www` hacia el mismo destino que elija para su nombre de dominio/subdominio.
>>
>> ![Paso 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 4**
>>
>> Seleccione `Hacia una dirección web`{.action}.
>>
>> ![Paso 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 5**
>>
>> Seleccione `Con una redirección invisible`{.action} entre las dos opciones indicadas.
>>
>> ![Paso 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 6**
>>
>> Seleccione `Temporal (iframe)`{.action} entre las dos opciones indicadas e introduzca el nombre de dominio o la URL de destino de la redirección en el formulario `Dirección web`{.action} que aparece.
>>
>> ![Paso 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> Tres parámetros opcionales están disponibles en este paso:
>>
>> - **Título**: el de su sitio web. Se mostrará como título de página en la pestaña del navegador.
>> - **Palabras clave**: pueden ser utilizadas por los motores de búsqueda para referenciar parcialmente la página.
>> - **Descripción**: relativa a su sitio web. Será utilizada por los motores de búsqueda en sus resultados.
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Paso 7**
>>
>> En este último paso, asegúrese de que la información mostrada es correcta.
>>
>> ![Paso 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Haga clic en `Confirmar`{.action} para validar la configuración.
>>
>> > [!primary]
>> >
>> > Si aparece el mensaje "*Existen redirecciones a partir de los nombres de dominio que desea redirigir que entran en conflicto con las redirecciones que desea añadir*", puede marcar la casilla `Confirmar la sobreescritura de la redirección existente`{.action} para forzar la aplicación de la redirección.
>> >
>> > Atención, la configuración anterior se desactivará y eliminará.
<!-- CP-STEPS-END:configure-redirect-invisible -->

### Redirigir un nombre de dominio a través de un archivo ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad le incumben. Es su responsabilidad garantizar su correcto funcionamiento.
>
> Ponemos a su disposición esta parte de la guía para ayudarle con las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor especializado](/links/partner) si tiene dificultades. Nosotros no podremos proporcionarle asistencia en los pasos documentados a continuación. Más información en la sección "[Más información](#go-further)" de esta guía.
>

Los archivos ".htaccess" son archivos de configuración en los que se pueden especificar comandos. Cuando el servidor web (Apache) ejecuta el código del sitio web, los comandos son interpretados y ejecutados.

Entre estos comandos, es posible crear redirecciones.

Manipular un archivo ".htaccess" puede hacer que el sitio sea inaccesible. En caso de duda, contacte con un [proveedor especializado](/links/partner).

Consulte toda nuestra documentación sobre el ".htaccess" en la sección "[Más información](#go-further)" de esta guía.

> [!success]
>
> Le recomendamos **realizar una copia de seguridad del archivo .htaccess** antes de efectuar modificaciones. Así podrá restablecer la versión anterior del archivo en caso de error.
>

A continuación encontrará 4 variables para realizar redirecciones a través del archivo ".htaccess".

#### Variable 1 - "Redirect permanent"

Esta variable permite redirigir un sitio web completo, o solo una parte, hacia otro sitio o hacia otra parte de un sitio. Los visitantes son redirigidos automáticamente a la dirección/URL correcta cuando intentan acceder al sitio a través de la dirección/URL anterior.

> [!tabs]
> Código a colocar en el ".htaccess"
>>
>> Para redirigir un sitio web completo:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Para redirigir un directorio hacia otro:
>>
>> ```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Para redirigir un archivo hacia otro:
>>
>> ```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Código HTTP
>>
>> El script devuelve un código HTTP 301. Esto indica a los robots de los motores de búsqueda que deben actualizar sus enlaces a la nueva dirección/URL.
>>

#### Variable 2 - "Redirect gone"

Esta variable es útil para archivos eliminados. Sustituye el mensaje *404 documento no encontrado* por un mensaje más explícito del tipo *410 el documento ya no existe*. El visitante del sitio es informado de que el archivo al que intenta acceder ya no existe.

> [!tabs]
> Código a colocar en el ".htaccess"
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Código HTTP
>>
>> El script devuelve un código HTTP 410.
>>

#### Variable 3 - "Redirect seeother"

Si cambia la extensión de un archivo, la variable *seeother* permite modificar el tipo. El visitante que intente acceder al archivo anterior será redirigido automáticamente al que tiene la extensión correcta.

> [!tabs]
> Código a colocar en el ".htaccess"
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Código HTTP
>>
>> El script devuelve un código HTTP 303.
>>

#### Variable 4 - "Redirect Temp"

Esta variable se puede utilizar cuando traslada temporalmente archivos a otro sitio. Los visitantes que intentan acceder al sitio a través de la dirección/URL anterior son redirigidos automáticamente a la nueva dirección/URL temporal.

> [!tabs]
> Código a colocar en el ".htaccess"
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Código HTTP
>>
>> El script devuelve un código HTTP 302.

///

## Más información <a name="go-further"></a>

[Bloquear el acceso a mi sitio web para determinadas direcciones IP a través de un archivo ".htaccess"](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

[Proteger la interfaz de administración de su sitio web a través del ".htaccess"](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).

[Reescribir sus URLs gracias al "mod_rewrite"](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite).

[Realizar otras operaciones con el archivo ".htaccess"](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do).

[Cómo editar mi zona DNS](/pages/web_cloud/domains/dns_zone_records)

Para servicios especializados (posicionamiento SEO, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si necesita ayuda sobre el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
