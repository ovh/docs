---
title: 'Tutorial - Crear una página web personal en OVHcloud'
slug: create-your-own-web-page
excerpt: 'Cómo crear su primera página web en un alojamiento web gratuito Start 10M'
section: 'Tutoriales'
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22/11/2022**

## Objetivo

Esta guía explica cómo crear la primera página de un sitio web en un alojamiento web Start 10M gratuito para la adquisición de un dominio en OVHcloud.

## Requisitos

- Tener un [dominio](https://www.ovhcloud.com/es-es/domains/)
- Tener contratado un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) o un [alojamiento gratuito Start 10M.](https://www.ovhcloud.com/es-es/domains/free-web-hosting/)
- Tener un editor de texto (bloc de notas, TextEdit, Notepad++, etc.).
- Haber instalado un cliente FTP (como [Cyberduck](https://cyberduck.io/), [FileZilla](https://filezilla-project.org/download.php), etc.) para descargar (subir al alojamiento) los archivos en su espacio dedicado.

## Antes de empezar

### ¿De qué está hecha una página web?

El contenido de un sitio web suele consistir en varias páginas web. Una página web muestra un contenido, fijo o no, que ha sido configurado para servir a una experiencia de navegación. Las páginas que visualiza en su navegador son el resultado de tres componentes que vamos a detallar:

- **HTML (HyperText Markup Language)**: lenguaje utilizado para estructurar sus páginas. La "estructura" designa los elementos y su organización.<br>
**Ejemplo**: un título de documento irá seguido de un subtítulo y de uno o más párrafos.

Los elementos utilizados para estructurar su contenido se denominan "balizas" y se escriben utilizando abrazaderas que abren y cierran.<br>
**Ejemplo**: La etiqueta `<p>` hace referencia a la que comienza un párrafo, cerrándose el mismo párrafo con la etiqueta de cierre `</p>`. 

>[!warning]
>
> Para cualquier etiqueta abierta se debe crear una etiqueta cerrada. Las etiquetas no se solapan (se cierran en orden inverso a su apertura) y no pueden ser interpretadas de otra manera que por etiquetas HTML.
>

Hay más de un centenar de etiquetas disponibles, pero puede perfectamente realizar su sitio web con algunas de ellas.

- **El CSS (Cascading Style Sheet, hojas de estilo en cascada)**: lenguaje que describe cómo se posicionarán, dimensionarán, comportarán, colorearán, o mostrarán los elementos HTML. Estas reglas se pueden aplicar a los elementos genéricos (el mismo color para todos los títulos del sitio, o el tipo de letra que se usará para todos los textos) o a elementos específicos (el texto del footor, el comportamiento al pasar por encima del menú de navegación).

- **El JavaScript**: lenguaje que permite enriquecer las interacciones en un sitio web (o una aplicación web). Aunque es imprescindible para los desarrolladores web, no es obligatorio crear un sitio web.<br>
Si no está familiarizado con el código en los diferentes lenguajes citados, puede copiar y pegar los ejemplos de código que figuran en esta guía, lo que le permitirá tener un sitio web explotable en su alojamiento.

### ¿Qué herramientas utilizar?

Para crear una página web, comience escribiendo en un archivo su código fuente a partir de uno de los tres lenguajes anteriores. Estos son sus principales nombres de extensión: *".html"* (para los archivos HTML), *".css"* (para los archivos CSS), *".js"* (para los archivos JavaScript).

Los archivos pueden escribirse en editores de texto, incluyendo los que están disponibles por defecto en su sistema operativo (bloc de notas, TextEdit). Muchas soluciones de código abierto gratuitas ofrecen funcionalidades adicionales: [Notepad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Sublime Text](https://www.sublimetext.com/) o [Micro](https://micro-editor.github.io/). También es posible utilizar un IDE (Integrated Development Environment, entorno de desarrollo integrado) como [Visual Studio Code](https://code.visualstudio.com/) o [Geany](https://www.geany.org/).

Para visualizar y ajustar sus páginas antes de guardarlas en su alojamiento, utilice su navegador web. Para ello, abra su archivo desde su ubicación local directamente en su navegador.

### ¿Sitio **estático** o sitio **dinámico**?

Un sitio web se denomina **estático** cuando las páginas que visualiza con su navegador son siempre idénticas y no ofrecen interacciones particulares aparte de los efectos (menús desplegables, por ejemplo), animaciones y vídeos.

Por el contrario, un sitio web **dinámico** implica que las páginas que visualiza son generadas por el servidor web que ejecuta código, accede a una base de datos, etc. Esto permite entregar un resultado en función de las peticiones hechas por el usuario (consulta de rúbricas, autenticación, envío de datos a través de un formulario, consulta de stock o de inventarios, etc.).

### ¿Qué es el lenguaje PHP?

PHP (*PHP Hypertext Preprocessor*) es un lenguaje utilizado mayoritariamente en el desarrollo web. Funciona exclusivamente en el lado del servidor, por lo que no es necesario para construir los elementos visibles en su navegador. Sin embargo, será útil para, por ejemplo, recuperar los mensajes que se le envíen a través del formulario de contacto de su sitio web.

## Procedimiento

Siga los pasos que se indican a continuación para crear su primera página web.

### Elabore el contenido de su página estructurándolo con código HTML

Para crear su primera página web, cree un directorio en cualquier lugar de su ordenador, en el que podrá colocar todos sus archivos.

Designe el primer archivo `index.html`, que contendrá código HTML. Este es el primer archivo que se va a crear, ya que los servidores HTTP están configurados por defecto para que la petición a su alojamiento (introduciendo su dominio en la barra de direcciones de un navegador) muestre el archivo "index".

Abra su editor de texto y guarde su archivo de trabajo. 

> [!primary]
> 
> Le recomendamos que guarde varias copias de este directorio de trabajo para realizar copias de seguridad.
> El sitio web estará disponible en su alojamiento, pero es más seguro conservar una copia local y realizar copias de seguridad en otros soportes, como los discos duros externos.
>

#### Composición de una página HTML type

Las páginas HTML siempre están organizadas de la misma forma:

- una declaración DOCTYPE que indica al navegador que lea el siguiente contenido respetando al máximo los estándares;
- una etiqueta `<html>` que enmarca todas las demás etiquetas del documento;
- una etiqueta `<head>` que contendrá información sobre la codificación de la página y su título;
- una etiqueta `<body>` que contendrá el "cuerpo" de su página HTML.

Puede copiar y pegar este código en su archivo `index.html` :

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi página personal</title>
    </head>
    <body>
         
    </body>
</html>
```

Algunas etiquetas contienen más información que otras, como la etiqueta `<html lang="en">` del ejemplo anterior.<br>
En este caso, se utilizan atributos que permiten especificar ciertos elementos. En este caso concreto, se trata de indicar cuál es el idioma principal de la página web. Algunos de estos atributos son universales y pueden utilizarse en todas las etiquetas (con algunas excepciones), otros son específicos.

La etiqueta `<head>` incluye elementos que no se mostrarán en la pantalla. Las etiquetas `<meta>` proporcionarán orientación al navegador, pero también a los motores de búsqueda, como la codificación de los caracteres utilizados en el documento (UTF-8 en el ejemplo anterior) o información sobre la visualización en móvil ("viewport" en el ejemplo anterior).
La etiqueta `<title>` es muy importante. Le permite determinar el título de su página que aparecerá en la pestaña de su navegador, pero sobre todo que será indexado por los motores de búsqueda.<br>
Este título le permitirá, por ejemplo, aparecer en los resultados de búsqueda en Google, DuckDuckGo, etc.<br>
Colocarse en la parte superior de estos resultados es un ejercicio definido por las reglas SEO (*Search Engine Optimization*). No trataremos este tema en este artículo.

La etiqueta `<body>` contendrá otras etiquetas HTML para estructurar el documento.

#### Completar con título, subtítulo y contenido

A continuación, editaremos el contenido de texto de su página, siempre siguiendo el formato HTML estándar, para añadir un título, un subtítulo, párrafos y listas de texto.

- **Etiquetas `<h1>` hasta `<h6>`**

Los títulos se escriben entre etiquetas `<h..>`, que están jerarquizadas como en cualquier documento: en primer lugar, `<h1>`, luego `<h2>`, etc., la última es la etiqueta `<h6>`. La etiqueta `<h1>` es, por tanto, indispensable si desea escribir una etiqueta `<h2>`. Si no cumple con esta regla, el navegador mostrará el resultado sin errores.

```html
<body>
    <h1>Bienvenido a mi página personal</h1>
    <h2>Cree rápida y fácilmente su sitio web</h2>
</body>
```

Puede consultar el resultado abriendo el archivo HTML a través de un navegador de internet (Firefox, Chrome, Safari, etc.): las dos cadenas se mostrarán con tamaños diferentes.

- **La etiqueta `<p>`**

Esta etiqueta se utiliza para poner texto ("p" para párrafo). Es posible configurar varias de ellas:

```html
<body>
    <h1>Bienvenido a mi página personal</h1>
    <h2>Cree rápida y fácilmente su sitio web</h2>
    <p>OVHcloud le propone, en su producto Start 10M, gratuitamente un alojamiento para toda compra de un nombre de dominio.</p>
</body>
```

- **Las etiquetas `<ul>` y `<li>`**

En HTML puede utilizar listas. Tomaremos el ejemplo de listas simples, llamadas no ordenadas (como las disponibles en un procesador de texto). Para declarar una lista, se utiliza la etiqueta `<ul>` (*unordered list*). Esta etiqueta enmarcará otros elementos, las etiquetas `<li>`, que contendrán el contenido de sus listas :

```html
<body>
    <h1>Bienvenido a mi página personal</h1>
    <h2>Cree rápida y fácilmente su sitio web</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud le propone, en su producto Start 10M, gratuitamente un alojamiento para toda compra de un nombre de dominio.</p>
    <p>La oferta "Dominio" incluye:</p>
    <ul>
        <li>Web hosting 10 MB incluido</li>
        <li>Cuenta Email 5 GB incluido</li>
        <li>DNSSEC: protección contra el envenenamiento de la caché (cache poisoning)</li>
        <li>Easy Redirect: acceso a las redes sociales desde su dominio</li>
    </ul>
</body>
```

Puede ver el resultado en su navegador: de forma predeterminada, los elementos de lista se muestran con viñetas.

#### Añadir imágenes para hacer su página más atractiva

La web es un medio sobre todo visual. Veremos en esta sección cómo insertar imágenes en su contenido. El producto Start 10M le ofrece un espacio de almacenamiento de 10 MB. Esto es suficiente para las páginas HTML y CSS, pero puede ser limitado si desea poner muchas imágenes en su sitio web. En ese caso, le recomendamos que contrate un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) que le permita disfrutar de un mayor almacenamiento.

La etiqueta HTML usada para mostrar una imagen es la etiqueta `<img>`. A diferencia de las etiquetas que hemos visto antes, no hay apertura ni cierre de este elemento. Hablaremos de una etiqueta de autocierre. Los atributos de esta etiqueta son los que le permitirán vincular la ubicación del archivo con el texto descriptivo de la imagen.

##### **Optimizar las imágenes**

Una imagen de gran tamaño es una imagen que tardará en ser cargada por su navegador, especialmente si sus visitantes utilizan un smartphone o tablet conectada a la red 4G o 5G.
Por regla general, debe optimizar sus imágenes y limitar su peso. Este peso se expresa en bytes. Las unidades que se utilizan generalmente son los kilobytes (1 KB = 1.000 bytes) o el megabyte (1 MB = 1.000.000 bytes). Una imagen superior a unas cuantas decenas de KB se considera pesada y merece ser optimizada. 

**Ejemplo**: si sus imágenes pesan 1 MB cada una, estará limitado a menos de 10 imágenes en su alojamiento Start10M. Si logras reducir su tamaño entre 50 KB y 200 KB, podrías tener hasta cien en tu página web.

Algunos consejos para que sus archivos sean lo más ligeros posible:

- Limite la definición de las imágenes redimensionándolas al tamaño en el que se mostrarán en el sitio web.
- el tamaño se expresa en píxeles anchura×altura (por ejemplo, 300×250 píxeles es el ancho de una imagen publicitaria estándar);
- modifique la resolución (la "web" utiliza una resolución por defecto de 72 dpi).
- elija los formatos comprimidos, como *JPEG*, *PNG* o *Webp*.
- también puede utilizar un formato vectorial (SVG).
- evite los formatos sin comprimir *BPM* y *TIFF*.

##### **Almacenar las imágenes en el alojamiento**

Por motivos de legibilidad, es conveniente almacenar sus imágenes en un directorio dedicado:

![Árbol de archivos y carpetas](images/create_your_personal_webpage_1.png){.thumbnail}

Consideremos un archivo en formato *PNG*. Sitúcelo en el directorio "Imágenes":

![Árbol de archivos y carpetas con imágenes](images/create_your_personal_webpage_2.png){.thumbnail}

Ahora vamos a crear un nuevo párrafo en el que colocar la imagen (en este ejemplo no explicamos el tamaño de la imagen en píxeles). El navegador lo mostrará según su tamaño original (en forma de archivo).

```html
<body>
    <h1>Bienvenido a mi página personal</h1>
    <h2>Cree rápida y fácilmente su sitio web</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>OVHcloud le propone, en su producto Start 10M, gratuitamente un alojamiento para toda compra de un nombre de dominio.</p>
    <p>La oferta "Dominio" incluye:</p>
    <ul>
        <li>Web hosting 10 MB incluido</li>
        <li>Cuenta Email 5 GB incluido</li>
        <li>DNSSEC: protección contra el envenenamiento de la caché (cache poisoning)</li>
        <li>Easy Redirect: acceso a las redes sociales desde su dominio</li>
    </ul>
</body>
```

El resultado en su navegador debería ser el siguiente:

![Resultado de código HTML en el navegador](images/create_your_personal_webpage_3.png){.thumbnail}

### Dar formato a su contenido utilizando los estilos CSS

Hemos visto cómo organizar su contenido en HTML. El resultado es minimalista con un estilo que se limita a los tamaños de títulos y subtítulos predeterminados.
Las hojas de estilo permiten cambiar la apariencia y el comportamiento de los elementos codificados en HTML.

#### Principios de redacción

##### **Creación de un archivo CSS**

Al igual que con los archivos HTML, los archivos CSS se pueden crear con cualquier editor de texto. La extensión de estos archivos debe estar en *.css*.

![Colocación de archivo CSS](images/create_your_personal_webpage_4.png){.thumbnail}

Ahora debemos asociar este archivo CSS, que hemos nombrado por convenio *style.css*, a nuestra página HTML. Este enlace se realiza añadiendo una etiqueta `<link>` en la etiqueta `<head>` del archivo index.html :

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi página personal</title>
    <link rel="stylesheet" href="style.css">
</head>
```

Para comprobarlo, declararemos en nuestra hoja de estilo un color definido para cada elemento `<h1>` de nuestra página web. Modifique el archivo de estilo.css añadiendo las siguientes líneas:

```html
h1 {
    color: red;
}
```

Este conjunto de instrucciones se denomina "regla CSS" y significa: todos los elementos HTML `<h1>` tendrán el color *(color)* rojo *(red)*.

Puede probar otro color en el elemento `<h2>`, párrafos y elementos de lista:

```html
h1 {
    color: red;
}
 
h2 {
    color: blue;
}
 
p {
    color: slategray;
}
 
li {
    color: slategray;
}
```

Actualice la página de su navegador pulsando la tecla `F5`: su título aparecerá ahora en rojo.

Los navegadores tienen estilos predeterminados, incluyendo reglas específicas para el posicionamiento de los elementos. Vamos a editar el archivo CSS en consecuencia y establecer una regla que se aplicará a todos los elementos HTML mostrados por el navegador. El selector `*` ("estrella"), llamado selector universal, se sitúa al principio del archivo CSS:

```html
* {
    padding: 0;
    margin: 0;
}
```

Comprobará que los textos se pegan ahora a los bordes del navegador.

La propiedad padding define el borde giratorio (margen interior), es decir, el espacio fuera del bloque que contiene el texto (o cualquier elemento). El siguiente esquema ilustra la correspondencia de estos términos en el llamado "modelo de cajas" en CSS:

![Modelo de la caja CSS](images/create_your_personal_webpage_5.png){.thumbnail}

### Mejorar la estructura HTML del documento

Hemos colocado elementos básicos en su etiqueta `<body>`: `h1`, `h2`, `p`, `ul` y `li`.

En su última iteración, el lenguaje [HTML5](https://html.spec.whatwg.org/) ofrece nuevas etiquetas que permiten estructurar mejor un documento y enriquecerlo semánticamente. Un documento clásico (incluso en soporte tradicional) incluye bloques identificables visualmente que se pueden reproducir en HTML:

- una cabecera que aparecerá en una etiqueta `<header>` (no confundirse con la etiqueta `<head>`).
- contenido principal, definido por una etiqueta `<main>`;
- por último, un pie de página, descrito por el `<footer>`.

Cada uno de estos elementos podrá utilizarse para usos específicos:

- el `header` contendrá, por ejemplo, el menú de navegación (que a su vez estará enmarcado por una etiqueta `<nav>`);
- en la `main` figurarán todos los elementos relacionados con el contenido, que también pueden estructurar el documento con mayor precisión (`section`, `article`, `aside`, `div`, etc.).
- el `footer` contendrá información más genérica, como enlaces a redes sociales, menciones legales, condiciones generales de uso y posiblemente otro menú de navegación.

El código HTML se mostrará del siguiente modo:

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi página personal</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
                <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
        </header>
        <main>
            <h1>Bienvenido a mi página personal</h1>
            <h2>Cree rápida y fácilmente su sitio web</h2>
            <p>OVHcloud le propone, en su producto Start 10M, gratuitamente un alojamiento para toda compra de un nombre de dominio.</p>
            <p>La oferta "Dominio" incluye:</p>
            <ul>
                <li>Web hosting 10 MB incluido</li>
                <li>Cuenta Email 5 GB incluido</li>
                <li>DNSSEC: protección contra el envenenamiento de la caché (cache poisoning)</li>
                <li>Easy Redirect: acceso a las redes sociales desde su dominio</li>
            </ul>
        </main>
        <footer>
            <p>© 2022 Mi página personal</p>
        </footer>
    </body>
</html>
```

### Hacer que un elemento sea interactivo

Los enlaces que permiten navegar de una página a otra en un sitio web son elementos esenciales de la web. Para ejecutarlos, se debe utilizar la etiqueta `<a>` (_anchoa_, ancla), que hace interactivo un elemento, acompañado de un atributo `href` que contendrá la URL a la que apuntar. En el siguiente ejemplo, vamos a hacer interactivo el logotipo de la etiqueta `<header>`:

```html
<header> 
    <a href="index.html">
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </a>
</header>
```

Podemos hacerlo de la misma manera para hacer que el texto sea interactivo:

```html
<p>La oferta <a href="https://www.ovhcloud.com/es-es/domains/">"Nombre de dominio"</a> incluye :</p>
```

Para mostrar el destino del enlace en una nueva pestaña, solo tiene que añadir un atributo `target` a su etiqueta `<a>` :

```html
<p>La oferta <a href="https://www.ovhcloud.com/es-es/domains/" target="_blank">>"Nombre de dominio"</a> incluye :</p>
```

### ¿Cómo almacenar contenido en mi alojamiento?

Para que sus páginas, y por tanto su sitio web, sean visibles para todo el mundo, debe guardarlas en su alojamiento (debe activar su alojamiento [como se indica en esta guía](https://docs.ovh.com/es/hosting/activar-start10m/)).

La transferencia de los archivos se realiza a través de un protocolo dedicado: el **FTP** (para **F**ile **T**ransfert **P**rotocol). Utilice un programa dedicado para realizar esta operación, como [FileZilla](https://filezilla-project.org/download.php?type=client) o [Cyberduck](https://cyberduck.io/download/).

### Desplegar su sitio web por FTP

Para subir los archivos a su alojamiento, consulte la guía [FileZilla](https://docs.ovh.com/es/hosting/web_hosting_guia_de_uso_de_filezilla/) utilizada.

Una vez que los archivos se hayan transferido por completo al alojamiento, podrá ver el resultado introduciendo su dominio en la barra de direcciones de su navegador o pulsando la tecla `F5` para volver a cargar la página si ya está en su sitio web.

> [!warning]
> 
> Nuestra infraestructura incluye un sistema de caché que permite que sus páginas se muestren con la menor latencia posible. Al desplegar, es posible que no visualice inmediatamente los cambios realizados en su navegador. En ese caso, espere unos segundos y no dude en refrescar la caché de su navegador con la combinación de teclas `Ctrl` + `F5`.
> 

### Mejorar el sitio web con una plantilla

El CSS y el HTML son lenguajes fáciles de entender para obtener un resultado rápido. Sin embargo, estos lenguajes, y especialmente el CSS, han cambiado considerablemente. Si bien las hojas de estilo en cascada ofrecen más funcionalidades (animaciones, gradientes, posición de los elementos en la página, etc.), se han vuelto más complejas de codificar.

Para ganar tiempo en la apariencia de su sitio web y permitirle concentrarse en el contenido, y por lo tanto lo que será referenciado, es habitual recurrir a *templates* (modelos) para ganar tiempo y tener un resultado de calidad tanto gráfica como funcionalmente (diseño, usabilidad, visibilidad en smartphone y tablet).

#### ¿Qué es una plantilla? ¿Qué soluciones utilizar?

Una *plantilla* es un modelo o ejemplo que se puede reutilizar, adaptándolo o no. El recurso a las *plantillas* permite ganar tiempo en el diseño de un sitio adaptando elementos ya diseñados, al tiempo que ofrecen las cualidades que se pueden exigir de un sitio "profesional". También puede utilizarse la palabra "tema".

Existen soluciones "open source" gratuitas disponibles en Internet, como [Bootstrap](https://materializecss.com/), [Materialize](https://materializecss.com/), [Foundation](https://get.foundation/) o incluso [Semantic UI](https://semantic-ui.com/). Estas herramientas se denominan "framework": se trata de librerías que facilitan la creación de sitios o aplicaciones web. Ofrecen elementos estandarizados, personalizables y reutilizables y toda la comunidad propone *templates* reutilizables.

#### Bootstrap

Bootstrap es el framework más común entre las herramientas utilizadas por los desarrolladores web. Desarrollado originalmente en 2010 por ingenieros que trabajaban para Twitter para alinear el desarrollo de las interfaces desarrolladas internamente. Bootstrap, disponible bajo licencia Open Source desde 2011, ha evolucionado continuamente a medida que se desarrollan los cambios tecnológicos (evolución de las tecnologías y los usos) y sigue siendo ineludible.

Algunos ejemplos de sitios web y aplicaciones realizadas con Bootstrap:

- [https://themes.getbootstrap.com/](https://themes.getbootstrap.com/)
- [https://bootswatch.com/](https://bootswatch.com/)
- [https://bootstrapmade.com/](https://bootstrapmade.com/)
- [https://bootstraptaste.com/](https://bootstraptaste.com/)
- [https://bootstrapthemes.co/](https://bootstrapthemes.co/).

## Más información

En internet encontrará muchos recursos para aprender y mejorar su práctica, copiar elementos enteros de código o fragmentos de código, añadir funcionalidades a su sitio web sin correr el riesgo de cometer errores o fallos de funcionamiento. A continuación, algunos de los sitios de referencia:

- [Empezar con el HTML](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Guía de referencia de etiquetas HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Cursillo W3Schools sobre HTML](https://www.w3schools.com/html/)
- [Tutoriels CSS Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/Tutorials)
- [CSS Tutorial W3 Schools](https://www.w3schools.com/css/).

### Volver a trabajar sus imágenes

Gracias a las numerosas herramientas gratuitas, podrá reelaborar sus ilustraciones:

- La aplicación [Fotos](https://apps.microsoft.com/store/detail/photos-microsoft/9WZDNCRFJBH4) Windows 10 y 11
- La aplicación [Photos](https://support.apple.com/es-es/guide/photos/welcome/mac) macOS
- [Paint.Net](https://www.getpaint.net/), [GIMP](https://www.gimp.org/), [darktable](https://www.darktable.org/)
- Piense también en las aplicaciones de retoque de imagen disponibles en sus smartphones Android o iOS.

También encontrará recursos en línea:

- [Compresor](https://compressor.io/)
- [ShrinkMe](https://shrinkme.app/)
- [Free Online Image Optimizer](https://kraken.io/web-interface)
- [TinyJPG](https://tinyjpg.com/) et [TinyPNG](https://tinypng.com/).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
