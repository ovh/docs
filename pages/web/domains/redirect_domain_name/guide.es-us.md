---
title: 'Redirigir un dominio gestionado por OVH'
slug: redireccion-dominio
excerpt: 'Distintos tipos de redirecciones y cómo crear una redirección para un dominio gestionado por OVH'
section: General
---

**Última actualización: 18/04/2018**

## Objetivo

La redirección de un dominio permite que este dirija al visitante hacia un nuevo destino. Existen distintos tipos de redirecciones que se adaptan a las diferentes necesidades de los usuarios.

**Esta guía explica los distintos tipos de redirecciones y cómo crear una redirección para un dominio gestionado por OVH.**

## Requisitos

- Estar conectado al [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external}.
- Estar conectado a su alojamiento web (si desea añadir un archivo .htaccess).

## Procedimiento

### Cómo funciona la redirección de un dominio

Antes de crear una redirección para su dominio, es importante saber para qué sirve. La redirección permite que un dominio dirija a los visitantes hacia un nuevo destino (por lo general, hacia otro dominio).

Existen muchos casos en los que puede ser útil redirigir un dominio, aunque lo más habitual es hacerlo después de cambiar el dominio de un sitio web. En ese caso, la redirección permite guiar automáticamente a los visitantes que acceden a la antigua dirección hacia la nueva.

Hay varias maneras de redirigir un dominio:

- **Desde el área de cliente de OVH**: Puede utilizar el asistente de configuración para realizar la redirección.

- **Mediante un archivo (es necesario tener conocimientos de programación)**: Usted mismo puede crear la redirección en un archivo (normalmente, un archivo **.htaccess**).

Tenga en cuenta que la redirección puede afectar al posicionamiento de su sitio web en los motores de búsqueda, por lo que deberá prestar especial atención a las acciones que realice. Si lo considera necesario, puede contactar con un experto en posicionamiento web.

### Redirigir un dominio desde el área de cliente

Una vez conectado al [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external}, haga clic en `Dominios`{.action} en la columna izquierda (**1** en la imagen de abajo), seleccione el dominio correspondiente y abra la pestaña `Redireccciones`{.action} (**2** en la imagen de abajo).

Se mostrará una tabla con las redirecciones activas para el dominio.

Haga clic en `Crear una redirección`{.action} (**3** en la imagen de abajo) para añadir una redirección.

![Página principal de las redirecciones](images/create_redirection_global.png){.thumbnail}

Se abrirá una ventana en la que deberá indicar el dominio (o subdominio) que desea redirigir, es decir, el origen de la redirección.

![Primera etapa de creación de una redirección](images/adding_redirection_1.png){.thumbnail}

A continuación, elija el tipo de destino al que quiere redirigir el dominio indicado. Existen dos opciones:

**Redirección hacia una dirección web**

Redirige un dominio hacia otro dominio. Es la mejor opción si ha cambiado el nombre de dominio de su sitio web.

**Redirección hacia un servidor de OVH o externo**

Modifica la configuración DNS de un dominio sustituyendo el destino (registro A, AAAA o CNAME). Es la mejor opción si su sitio web ya no está alojado en el mismo lugar, pero el dominio sigue siendo el mismo.
Si su dominio utiliza la configuración de OVH, también puede realizar esta acción directamente desde el área de cliente (ver la guía [Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}).

Esta guía solo explica cómo realizar una redirección **hacia una dirección web**. Si necesita más información sobre cómo realizar una redirección hacia un servidor de OVH o externo, puede ponerse en contacto con su proveedor de DNS para conocer los registros DNS que debe configurar antes de continuar.

![Segunda etapa de creación de una redirección](images/adding_redirection_2.png){.thumbnail}

Para redirigir un dominio **hacia una dirección web**, seleccione el tipo de redirección que desea realizar. Puede elegir entre dos opciones:

|Tipo de redirección|Descripción|
|---|---|
|Visible|El dominio (la antigua dirección) que introduzca en el navegador de internet será redirigido hacia el nuevo dominio. La dirección que se muestra en el navegador de internet pasará a ser la nueva dirección.|
|Invisible|El dominio (la antigua dirección) que introduzca el navegador de internet no será redirigido hacia el nuevo dominio. Seguirá accediendo a la antigua dirección, que, por medio de un **iframe**, mostrará el sitio web alojado en el nuevo dominio. **Atención**: Tenga en cuenta que esta acción no es compatible con todos los sitios web y que puede afectar a su posicionamiento en los motores de búsqueda.|

![Elección entre redirección visible e invisible](images/redirection_3xx_1.png){.thumbnail}

#### Redirección visible

Puede elegir entre dos opciones:

|Tipo de redirección|Código HTTP|Descripción|
|---|---|---|
|Visible permanente|301|Es el tipo de redirección estándar.|
|Visible temporal|302|Este tipo de redirección se debe utilizar de forma puntual (para eventos efímeros o estacionales, por ejemplo). El posicionamiento en los motores de búsqueda será peor que con una redirección de tipo 301.|

Una vez elegido el tipo de redirección visible, deberá indicar el destino de la redirección (es decir, la dirección web a la que enviará la redirección).

![Elección entre redirección visible permanente o temporal](images/redirection_3xx_2.png){.thumbnail}

Una vez completada la información, haga clic en `Siguiente`{.action}, asegúrese de que la información mostrada es correcta y haga clic en `Confirmar`{.action}.

> [!primary]
>
> La modificación tarda entre 4 y 24 horas en propagarse y ser efectiva.
>

#### Redirección invisible

Para crear una redirección invisible (código HTTP 200), complete la información que se le solicita (dirección de internet y opciones) y haga clic en `Siguiente`{.action}. Asegúrese de que la información es correcta y haga clic en `Confirmar`{.action}.

|Campo|Descripción|
|---|---|
|Título|El *title* de su sitio web. Se mostrará, por ejemplo, como título de la página en las pestañas de los navegadores de internet.|
|Palabras clave|Palabras que pueden ser utilizadas por los motores de búsqueda para posicionar la página.|
|Descripción|La descripción (*description*) del sitio web que pueden utilizar los motores de búsqueda en sus resultados.|

> [!primary]
>
> La modificación tarda entre 4 y 24 horas en propagarse y ser efectiva.
>

![Creación de una redirección invisible](images/invisible_redirection.png){.thumbnail}

### Redirigir un dominio mediante un archivo .htaccess

Los archivos **.htaccess** son archivos de configuración en los que es posible especificar comandos. Cuando el servidor web (Apache) ejecute el código de su sitio web, se interpretarán y ejecutarán dichos comandos que, entre otras acciones, permiten crear redirecciones.

Es necesario tener ciertos conocimientos técnicos para modificar un archivo .htaccess, ya que, si utiliza subdirectorios en su alojamiento, una manipulación incorrecta podría inhabilitar alguno de sus sitios web. Si necesita ayuda para modificar un archivo .htaccess, le recomendamos que contacte con un desarrollador web especializado.

> [!primary]
>
> Antes de realizar cualquier cambio, le recomendamos que **realice una copia de seguridad de su archivo .htaccess** para poder volver a la versión anterior si fuera necesario.
>

**Redirección permanente**

El código enviado será un HTTP 301, que avisa a los robots de los motores de búsqueda de que deben actualizar sus enlaces hacia la nueva dirección.

Este es el código que debe añadir para redirigir todo el sitio web:

```
Redirect permanent / http://nuevo-sitio.tld/
```

Para redirigir un directorio o archivo concreto:

```
Redirect permanent /antiguo_directorio http://nuevo-sitio.tld/nuevo_directorio
Redirect permanent /antiguo_archivo.php http://sitio.tld/nuevo_archivo.php
```

**Redirect gone**

Si un archivo ya no existe, es preferible sustituir el mensaje «404: Not Found» por un mensaje más explícito como el «410: Gone» del siguiente modo:

```
Redirect gone /eliminado.html
```

**Redirect seeother**

Si quiere cambiar la extensión de un archivo, **seeother** le permite modificarla enviando un código HTTP 303:

```
Redirect seeother /archivo.doc http://sitio.tld/archivo.pdf
```

**Redirect temp**

Es posible utilizar una redirección temporal de tipo HTTP 302 para transferir temporalmente archivos a otro sitio web:

```
Redirect temp / http://otro_sitio_web.tld/sitio/
```

## Más información

[Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.