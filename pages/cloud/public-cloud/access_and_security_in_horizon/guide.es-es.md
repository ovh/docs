---
title: Acceso y seguridad en Horizon
excerpt: Esta guía explica cómo acceder a las instancias y cómo protegerlas.
slug: acceso_y_seguridad_en_horizon
legacy_guide_number: g1774
section: Horizon
---


## 
OpenStack Horizon pone a su disposición un menú desde el que podrá configurar diferentes elementos relativos al acceso a las instancias, entre otros servicios. Puede, por ejemplo, configurar grupos de seguridad que garanticen el filtro de las conexiones entrantes y salientes de las instancias, o incluso descargar el archivo OpenRC con sus claves para poder utilizar las API de OpenStack. 
Esta guía explica cómo acceder a dicho menú.


## Requisitos

- [Crear un acceso a Horizon](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/)


## 

- Conéctese a [Horizon](https://horizon.cloud.ovh.net/auth/login/).

- En el menú izquierdo, haga clic en «Acceso y seguridad».


Grupos de seguridad

Desde esta pestaña podrá administrar las reglas de seguridad y de acceso a las instancias, en concreto limitando el acceso a determinados puertos.

![](images/img_2630.jpg){.thumbnail}
Pares de claves

Esta pestaña permite gestionar las claves SSH de dos formas distintas:


- «Crear par de claves»: Asigne un nombre a la clave. Su navegador la descargará o le propondrá descargarla.
- «Importar par de claves»: Desde aquí podrá importar una clave pública existente.


Acceso a la API

Muestra la información relacionada con la API y permite descargar el archivo openrc.sh para utilizar la API de OpenStack.

![](images/img_2632.jpg){.thumbnail}