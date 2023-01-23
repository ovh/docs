---
title: "Tutorial - Instalación y configuración de Cecil, un generador de sitios estáticos (SSG) en PHP"
slug: install-configure-cecil
excerpt: "Descubra cómo Cecil le permite crear su sitio estático con un motor de plantillas moderno (Jamstack)"
section: 'Tutoriales'
order: 04
---

**Última actualización: 19/01/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Este tutorial explica cómo instalar y configurar [Cecil](https://cecil.app/){.external}. Se trata de una aplicación escrita en PHP que permite generar y administrar páginas web estáticas.

Un sitio web compuesto principalmente por páginas web estáticas garantiza un mejor tiempo de carga para sus visitantes y una mayor seguridad. Sin un contenido dinámico, sus páginas son más robustas ante los ataques informáticos. La generación de un sitio estático permite disponer de una mayor libertad para crear el sitio web que elija. También ganará tiempo porque no tendrá que empezar desde cero.

**Descubra cómo Cecil le permite crear su sitio estático con un motor de plantillas moderno (Jamstack).**

## Requisitos

- Disponer de un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) con acceso SSH. Este acceso permite instalar en línea de comandos una o más soluciones alternativas a las que ofrecen nuestros planes de hosting por defecto.
- Estar familiarizado con la entrada en línea de comandos.
- Poder transferir archivos por FTP con un cliente como [FileZilla](https://docs.ovh.com/es/hosting/web_hosting_guia_de_uso_de_filezilla/).
- Configurar la zona DNS para que su dominio (o subdominio) apunte hacia su alojamiento web compartido. Esto resulta especialmente útil si desea alojar varios sitios web en [multisitios](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/) en su alojamiento compartido.
- Instalar previamente [Componer](https://getcomposer.org/){.external} con el archivo `composer.phar` en la raíz de su alojamiento web compartido o en la carpeta de destino de su nombre de dominio.

## Procedimiento

Los [alojamientos web compartidos](https://www.ovhcloud.com/es-es/web-hosting/) permiten declarar dominios o subdominios en multisitios. Un dominio o subdominio es necesario para desplegar su sitio web con **Cecil**.

Si necesita ayuda para declarar un dominio o subdominio multisitio en su alojamiento, consulte nuestra página "[Alojar varios sitios web en un mismo hosting](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/)".

### Crear el directorio en el que serán sus archivos

Una vez que se haya conectado al alojamiento web por SSH, cree un directorio en la raíz con el siguiente comando:

```sh
mkdir mystaticwebsite
```

Sustituya `mystaticwebsite` por el nombre de la carpeta que desee (sin acentos y sin espacios).

A continuación, acceda al directorio:

```sh
cd mystaticwebsite
```

Sustituya `mystaticwebsite` por su nombre de carpeta.

### Descarga

En el directorio que acaba de crear, descargue Cecil:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Instalación

Ejecute la instalación de Cecil con el siguiente comando:

```sh
php cecil.phar new:site
```

Introduzca los elementos solicitados:

- el título de su sitio _(title)_
- la _baseline_
- URL de su sitio web (por ejemplo, `https://mywebsite.ovh`)
- una descripción del sitio web

![Instalación Cecil](images/static_website_installation_cecil01.png){.thumbnail}

Una vez que haya introducido estos elementos, deberá desplegar el sitio web con el siguiente comando:

```sh
php cecil.phar build
```

Si se muestra el contenido del directorio, se mostrará un directorio `_site`. Este directorio contendrá todos los archivos HTML y platos :

![Instalación Cecil](images/static_website_installation_cecil02.png){.thumbnail}

Ahora puede ver el resultado accediendo a su dominio :

![Instalación Cecil](images/static_website_installation_cecil03.png){.thumbnail}

#### Configuración del puntero del dominio o subdominio

Para ver el resultado de su sitio en su navegador, cambie el puntero del dominio o subdominio al directorio_sitio creado anteriormente durante la instalación de **Cecil**.

Si tiene su dominio o subdominio alojado en OVHcloud, consulte nuestras guías relativas a la [configuración DNS](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/) y la instalación de un [multisitio en su alojamiento web](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/).

### Configurar su sitio

La información general de su sitio web puede configurarse en el archivo `config.yml`:

```sh
nano config.yml
```
Sustituya la información por defecto por su cuenta y guarde el archivo.

![Archivo de configuración YAML](images/static_website_installation_cecil04.png){.thumbnail}

### Crear una nueva página

Para crear las páginas que contengan los datos del sitio web, utilice archivos en formato _Markdown_. Estas páginas son personalizables. **Cecil** integra el motor de _template_ [Twig](https://twig.symfony.com/){.external}, que se utiliza por defecto con el _framework_ [Symfony](https://symfony.com/){.external}.

Las carpetas y archivos están organizados de la siguiente forma:

- `assets` : contiene los widgets, audio y vídeo, los scripts JavaScript y los estilos (CSS, Sass) 
- `layouts` : directorio en el que se debe usar el(los) _templates_
- `páginas` : lugar donde serán sus archivos _Markdown_
- `_site` : directorio que contiene los archivos generados y que está señalado por el dominio.
- `static` : todos los archivos estáticos de tipo PDF

#### Crear un archivo _Markdown_ en línea de comandos

En la raíz del sitio, introduzca el siguiente comando:

```sh
php cecil.phar new:page mypage.md
```

En ese caso, se creará un archivo `mypage.md` en la raíz del directorio `/pages`.

Sustituya `mypage` por el nombre de su propia página.

![Instalación Cecil](images/static_website_installation_cecil05.png){.thumbnail}

#### Generar los archivos estáticos

También en la raíz, escriba la siguiente orden:

```sh
php cecil.phar build
```

Su archivo se encuentra en el directorio `_site/mypage/`:

![Instalación Cecil](images/static_website_installation_cecil06.png){.thumbnail}

Puede visualizarlo en su servidor escribiendo la URL de su sitio web, seguido de `/mypage/`:

![Resultado del navegador](images/static_website_installation_cecil07.png){.thumbnail}

### Personalizar los archivos de su sitio web

#### Modificación del servidor

La edición de los archivos _Markdown_ puede realizarse directamente en el servidor de alojamiento web. En su [plan de hosting Performance](https://www.ovhcloud.com/es-es/web-hosting/performance-offer/), su acceso SSH permite utilizar indistintamente [GNU nano](https://nano-editor.org/){.external}, [vi](https://ex-vi.sourceforge.net/){.external} o [vim](https://www.vim.org/){.external}.
Las capturas de pantalla del presente tutorial se han realizado en **GNU nano**.

Edite el archivo `mypage.md` situado en el directorio `pages` introduciendo el siguiente comando si está en la raíz de su sitio :

```sh
 nano pages/mypage.md
```

Sustituya `mypage` por el nombre de su propia página.

![Edición del archivo en GNU nano](images/static_website_installation_cecil08.png){.thumbnail}

Añada algunas líneas en la sintaxis _Markdown_:

![Añadir contenido al archivo](images/static_website_installation_cecil09.png){.thumbnail}

Elimine los archivos de la caché utilizando el siguiente comando :

```sh
php cecil.phar clear
```

Reconstruya sus páginas tras guardar el archivo :

```sh
php cecil.phar build
```

A continuación, vuelva a su página para ver el resultado :

![Página actualizada](images/static_website_installation_cecil10.png){.thumbnail}

#### Modificación de su puesto de trabajo

Si prefiere utilizar su editor de código habitual, conéctese con un cliente FTP a su servidor para recuperar los archivos de su ordenador :

![Descargando con FileZilla](images/static_website_installation_cecil11.png){.thumbnail}

Ahora puede editar los archivos de su I.D.E.:

![Ver en Visual Studio Code](images/static_website_installation_cecil12.png){.thumbnail}

Solo tiene que volver a enviar sus archivos modificados o a los nuevos a su servidor y *rebuilder* para tener sus páginas en línea.

### Añadir la página generada al menú del sitio web

Para añadir esta nueva página al menú del sitio web, edite manualmente el encabezado del archivo `.md`, añadiendo la siguiente línea:

```sh
menu: main
```

### Conclusión

**Cecil** es una herramienta que permite construir eficazmente un sitio estático a partir de archivos *Markdown*, lenguaje de marcado más fácil de implementar que el HTML. La organización de los archivos Markdown condiciona la jerarquía de sus páginas web.<br/>
El uso de un motor de plantillas, muy utilizado en la comunidad de desarrolladores web, le permitirá encontrar fácilmente numerosas fuentes en Internet para diseñar una interfaz de apariencia profesional.

## Más información

El [sitio oficial de la aplicación Cecil](https://cecil.app/){.external}

Un [guía sobre el formato de Markdown](https://www.markdownguide.org/){.external}

Nuestra [guía sobre el uso de FileZilla](https://docs.ovh.com/es/hosting/web_hosting_guia_de_uso_de_filezilla/)
