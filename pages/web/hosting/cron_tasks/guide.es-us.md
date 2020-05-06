---
title: 'Web hosting: Tareas automatizadas (cron)'
excerpt: 'Web hosting: Tareas automatizadas (cron)'
id: '1990'
slug: web_hosting_tareas_automatizadas_cron
legacy_guide_number: g1990
section: Tareas automatizadas (Cron)
---


## Crear una tarea automatizada
Seleccione el alojamiento en la sección «Alojamientos» (1) situada en la columna de la izquierda, haga clic en «Más +» y seleccione la opción «Tareas planificadas - Cron» (2). Una vez dentro, haga clic en «Añadir una planificación» (3).

![](images/3261.png){.thumbnail}
En esta primera etapa, debe indicar la ruta hacia su script y el tipo de lenguaje de programación.

El resto de campos son opcionales. La opción de logs por email le ofrece la posibilidad de recibir los logs de ejecución de su tarea cron en una de las direcciones predefinidas o en la que usted indique.

Solo recibirá este mensaje de correo en caso de error. 

Por último, puede añadir una descripción a la tarea cron.

![](images/3262.png){.thumbnail}
En la segunda etapa, seleccione la periodicidad de la tarea cron.

![](images/3264.png){.thumbnail}
Existen dos opciones disponibles: el modo simple y el modo experto.

![](images/3265.png){.thumbnail}
Una vez finalizada la configuración de la tarea cron, se muestra un resumen. 

Si la información es correcta, haga clic en «Aceptar» para crear la tarea automatizada.

![](images/3266.png){.thumbnail}
Aparecerá un mensaje confirmando que la solicitud se ha enviado correctamente.

![](images/3267.png){.thumbnail}


## Editar una tarea automatizada
Seleccione el alojamiento en la sección «Alojamientos» (1) situada en la columna de la izquierda, haga clic en «Más +» y seleccione la opción «Tareas planificadas - Cron» (2). Una vez dentro, haga clic en el icono con forma de lápiz «Editar» (3) correspondiente a la tarea automatizada que desee modificar.

![](images/3268.png){.thumbnail}
Podrá modificar la ruta o el lenguaje de programación, activar los logs por email y añadir una descripción a su tarea cron.

![](images/3269.png){.thumbnail}


## Eliminar una tarea automatizada
Seleccione el alojamiento en la sección «Alojamientos» (1) situada en la columna de la izquierda, haga clic en «Más +» y seleccione la opción «Tareas planificadas - Cron» (2). Una vez dentro, haga clic en el icono «Eliminar» (3), con forma de papelera, correspondiente a la tarea automatizada que desee eliminar.

![](images/3270.png){.thumbnail}
Aparecerá un resumen de la tarea automatizada que desea eliminar.

Haga clic en «Aceptar» para completar la operación.

![](images/3271.png){.thumbnail}


## Probar la ejecución de la tarea automatizada en un navegador de internet
Puede probar su script directamente desde un navegador de internet para comprobar si genera un error. 

Por ejemplo, si su cron está en el directorio «www/cron.php» y su nombre de dominio es «test.com», deberá utilizar la URL «http://test.com/cron.php».
Para realizar esta prueba en condiciones óptimas, es aconsejable que la versión de PHP de su alojamiento sea la misma que la que indicó al crear la tarea automatizada.
Si aparece un error, deberá corregir el script. 

Si no se detecta ningún error, le aconsejamos que analice los logs de ejecución de sus tareas cron.


## Analizar los logs de ejecución de la tarea automatizada
Seleccione el alojamiento en la sección «Alojamientos» situada en la columna de la izquierda, haga clic en «Más +» y seleccione la opción «Estadísticas y logs».

![](images/4012.png){.thumbnail}
Haga clic en el enlace de acceso a los logs.

![](images/4013.png){.thumbnail}
Si la tarea automatizada se ha realizado durante ese mismo día, podrá acceder a los logs de ejecución en el OVH Speed Log (1). 

Si la tarea se ha realizado más de 24 horas antes, seleccione el archivo de los logs del mes que quiera consultar (en la imagen, del mes de junio).

![](images/3274.png){.thumbnail}
Ejemplo de logs de ejecución de una tarea automatizada:


```
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```


En este caso, la siguiente línea indica que la tarea automatizada no se ha ejecutado correctamente porque la ruta de acceso al script no es correcta o no existe: 


```
Could not open input file: /homez.600/loginftp/www/cron.php
```




## Límites

- En los alojamientos compartidos no es posible configurar los minutos en los que se debe ejecutar la tarea automatizada. Además, la tarea solo puede realizarse una vez por hora. 

- El límite del tiempo de ejecución son 60 segundos. 

- El límite de generación de datos es de 5 MB (stdin/stderr).




## Tareas automatizadas con variables
No es posible establecer rutas de tareas automatizadas introduciendo variables.

Ejemplo:

```
/www/cron.php?variable=test
```


En cambio, sí es posible definir estas variables en el script, por ejemplo.


## Rutas absolutas
Para que la tarea cron funcione, deberá utilizar rutas absolutas en el script, y no rutas relativas.
Para obtener la dirección de la ruta actual, puede utilizar la constante «_DIR_»: 
[Documentación de PHP](http://php.net/manual/es/language.constants.predefined.php)


## Informe de ejecución
Recibirá por correo electrónico un solo informe de ejecución de su tarea cron al día.


## Llamada a otro script
Si el script utilizado por su tarea cron llama a otros scripts, deberá utilizar una ruta absoluta y no relativa para que funcione. La ruta absoluta del alojamiento comienza por: 


```
/home/loginFTP/
```




## En caso de error de ejecución
Si su tarea planificada (cron) está en error, se desactivará tras 10 intentos de ejecución.


## Ejemplos de logs
Ejecución correcta del script: 

```
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh 
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```


Ejecución en error del script porque no se ha encontrado el archivo: 

```
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```


Ejecución en error del script por timeout:

```
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh 
mardi 23 décembre 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```


Ejecución en error del script por exceso de generación de datos: 

```
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh 
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```


Ejecución en error del script debido a un problema en los permisos (chmod) o una configuración incorrecta en el archivo .ovhconfig: 


```
[2015-01-08 18:07:10] 
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```



