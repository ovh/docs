---
title: Crear una instancia en Horizon
excerpt: Cómo crear una instancia en Horizon.
slug: crear_una_instancia_en_horizon
legacy_guide_number: g1772
section: Horizon
---


## 
En algunos casos, será necesario crear instancias en Horizon, especialmente si desea crear varias instancias al mismo tiempo o configurar un grupo de seguridad particular para sus instancias. 
Esta guía explica cómo crear una instancia en Horizon.


## 
Para crear una instancia:


- Conéctese a Horizon.
- En el menú izquierdo, haga clic en «Instancias».
- Haga clic en el botón «Lanzar instancia».
- Cumplimente el formulario como se indica a continuación.



## Detalles
Introduzca los siguientes datos:

|Zona de disponibilidad|Deje «nova» (opción por defecto).|
|Nombre de la instancia|Indique el nombre que quiere asignar a la nueva instancia.|
|Sabor|Seleccione el tipo de instancia que quiere crear.|
|Recuento de instancias|Indique el número de instancias que quiere crear.|
|Origen de arranque de la instancia|Seleccione el origen para la creación de la instancia: desde una imagen, desde una instantánea...|
|Nombre de la imagen|Seleccione la imagen de la instancia (solo en caso de arranque desde una imagen).|
|Instantánea de instancia|Seleccione una instantánea (snapshot) de una instancia (solo en caso de arranque desde una instantánea).|



## Acceso y seguridad
Esta sección permite indicar una llave SSH y el grupo de seguridad para la instancia.

|Par de claves|Seleccione una llave SSH para conectarse luego a la instancia (es posible crear una llave haciendo clic en el botón «+».|
|Grupos de seguridad|Seleccione el grupo de seguridad para la instancia (autorización de apertura de puertos).|



## Redes
Este apartado permite especificar a qué redes se conectará la instancia.

|Redes seleccionadas|Seleccione en la lista la red o redes para la instancia que quiere crear.|



## Pos-creación
Esta sección permite personalizar una instancia después de crearla.

|Contenidos del guión de personalización|Elija «Entrada directa» o «Archivo».|
|Datos del guión|Introduzca en el campo de texto el código del script: máx. 16 KB (solo en caso de haber seleccionado «Entrada directa»).|
|Archivo de guión|Haga clic en «Seleccionar archivo» para seleccionar el script de post-instalación (solo en caso de haber seleccionado «Entrada directa»).|



## Opciones avanzadas
Esta sección permite gestionar el particionamiento de la instancia.

|Partición de disco|«Automático» o «Manual»|
|Disco de configuración|Configura OpenStack para escribir los metadatos en un disco de configuración específico que se asociará a la instancia al crearla.|




## 
 

