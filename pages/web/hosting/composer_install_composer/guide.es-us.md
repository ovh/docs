---
title: Instalación de «Composer» en un alojamiento compartido
excerpt: Esta guía explica cómo instalar «Composer» en un alojamiento compartido
id: '1894'
slug: instalacion_de_composer_en_un_alojamiento_compartido
legacy_guide_number: g1894
section: PHP
---

**Última actualización: 05/05/2020**

## Requisitos
En los planes de web hosting de OVHcloud es posible utilizar «Composer» a partir de la gama Profesional. Así pues, es necesario un acceso SSH ya que se trata de una herramienta de línea de comandos.


## Instalación

## Conéctese a través de SSH
Asegúrese de que cuenta con la última versión de PHP (5.6) disponible en línea de comando:


```
php --version
```


Si no es la versión correcta, puede configurar un alias: 


```
alias php='/usr/local/php5.6/bin/php'
```


Le aconsejamos que permanezca en la carpeta raíz de su alojamiento para que no se pueda acceder públicamente a los archivos de «Composer».

## Descargue e instale «Composer»
Deberá ejecutar el siguiente comando: 


```
curl -sS https://getcomposer.org/installer | php
```


¡Enhorabuena, «Composer» ya está disponible en su alojamiento compartido!


## Ejemplos de uso
Si desea instalar Symfony 2, puede ejecutar el siguiente comando: 


```
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```


Asimismo, puede utilizar la API OVHcloud desde su alojamiento utilizando el wrapper oficial. Para ello, tan solo tiene que añadir un archivo llamado «composer.json» que contenga la lista de dependencias que necesita. 

Ejemplo de este archivo con el wrapper de la API OVHcloud. 


```
{
"name": "Example Application",
"description": "This is an example of OVH APIs wrapper usage",
"require": {
"ovh/ovh": "1.1.*"
}
}
```


Para instalarlo tan solo tiene que ejecutar el siguiente comando en la misma carpeta: 


```
php composer.phar install
```


Para utilizar esta librería, puede consultar la documentación y el código disponible en [github](https://github.com/ovh/php-ovh).

