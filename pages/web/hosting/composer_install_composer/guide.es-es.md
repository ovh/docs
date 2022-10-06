---
title: Instalar Composer en un alojamiento web
excerpt: Esta guía explica cómo instalar y dar los primeros pasos en Composer
slug: instalacion_de_composer_en_un_alojamiento_compartido
section: PHP
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 30/11/2020**

## Objetivo

[Composer](https://getcomposer.org/){.external} es un gestor de dependencias creado para el lenguaje PHP. Permite a los desarrolladores de PHP incluir librerías externas en sus programas. "Composer" ha permitido a los proyectos PHP simplificar la distribución de librerías y el mantenimiento de su código. Además, desde la creación de esta herramienta, se han propuesto numerosas buenas prácticas de desarrollo en el seno de la comunidad PHP y han mejorado las librerías de la comunidad PHP. Estas buenas prácticas se documentan en forma de [PSR](http://www.php-fig.org/){.external}.

**Cómo instalar y dar los primeros pasos en Composer**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVH pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener contratado un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/){.external} con acceso SSH.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.


## Procedimiento

Compruebe que utiliza una versión de PHP compatible en línea de comandos:


```bash
php —version
```

Si no es la versión correcta, puede configurar un alias:


```bash
alias php='/usr/local/php8.0/bin/php'
```

Le recomendamos que se mantenga en la carpeta raíz del alojamiento para no poner a disposición del público los archivos de Composer. Ejecute el siguiente comando:


```bash
curl -sS https://getcomposer.org/installer | php
```

Felicidades, "Composer" ya está disponible en su alojamiento compartido !


### Ejemplos de uso

Si quiere instalar Symfony 2 de forma sencilla, puede, por ejemplo, ejecutar el siguiente comando:


```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

De la misma forma, puede utilizar la API de OVH desde su alojamiento utilizando el wrapper oficial. Para ello, solo tiene que añadir un archivo llamado composer.json que contenga la lista de dependencias que necesite. Este es un ejemplo de este archivo con el wrapper de la API de OVHcloud:


```json
1. {
2.     "name": "Ejemplo Application",
3.     "description": "This is an ejemplo of OVH APIs wrapper usage",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Para instalarlo, ejecute el siguiente comando en la misma carpeta:


```bash
php composer.phar install
```

Para utilizar esta librería, puede consultar la documentación y el código, disponibles en [github](https://github.com/ovh/php-ovh){.external}


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
