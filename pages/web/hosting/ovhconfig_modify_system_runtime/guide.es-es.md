---
title: Cambiar el entorno de ejecución de un alojamiento
excerpt: Cambiar el entorno de ejecución de un alojamiento
id: '2149'
slug: cambiar_el_entorno_de_ejecucion_de_un_alojamiento
legacy_guide_number: g2149
section: Configuración del alojamiento
---


## ¿Cómo cambiar el entorno de ejecución?

## Desde el área de cliente
Seleccione el alojamiento en la columna izquierda y haga clic en «Cambiar la configuración».

![](images/img_4127.jpg){.thumbnail}
A continuación haga clic en «Modificar la configuración actual».

![](images/img_4128.jpg){.thumbnail}
Elija en la lista desplegable uno de los entornos de ejecución que se describen más abajo.

![](images/img_4129.jpg){.thumbnail}

## En el archivo .ovhconfig
La actualización se realiza en el archivo .ovhconfig que se encuentra en la raíz del alojamiento.
En resumen, los cambios pueden realizarse o bien desde el área de cliente, o bien directamente en el archivo .ovhconfig.

Si desea más información sobre el archivo .ovhconfig, consulte la guía: 

- [Configurar PHP en un alojamiento web de OVH](https://docs.ovh.com/es/hosting/web_hosting_configurar_la_version_de_php_desde_el_area_de_cliente/)




## Los diferentes entornos de ejecución

## Entorno «legacy»
Es el entorno histórico de los alojamientos web. Antiguamente era la única configuración disponible. 


- Este entorno se sigue utilizando. no obstante, se recomienda pasar a un entorno «estable» para disfrutar de las últimas actualizaciones estables de forma automática. El entorno «legacy» puede resultar útil para sitios web que utilicen versiones antiguas de PHP o para software que ya no reciba mantenimiento (por ejemplo, un antiguo conector para las bases de datos MySQL). 


Deberá añadir la siguiente línea al archivo .ovhconfig*: 


```
container.image=legacy
```



## Entorno «estable»
Este entorno le permite disfrutar de las últimas actualizaciones estables de forma automática. 

Deberá añadir la siguiente línea al archivo .ovhconfig*: 


```
container.image=stable
```



## Entorno «jessie.i386»
Este entorno permite disfrutar de Debian Jessie. 


- Actualmente es la versión por defecto al seleccionar el entorno de ejecución «estable». 


Deberá añadir la siguiente línea al archivo .ovhconfig*: 


```
container.image=jessie.i386
```


No se recomienda seleccionar «jessie.i386» en lugar de «estable», pero ello permite asegurarse de que, cuando el entorno «estable» cambie de imagen, la actualización no afectará al sitio web. Esto solo sucede si el sitio utiliza software externo a los scripts PHP.

## Entorno «testing»
Este entorno le permite disfrutar en primicia de nuevos parches, imágenes o tecnologías, pero sin garantías. 

Deberá añadir la siguiente línea al archivo .ovhconfig*: 


```
container.image=testing
```


* El archivo .ovhconfig se encuentra en la raíz del alojamiento «/».


## Diferencias entre las imágenes
|Entorno|legacy|stable|testing|jessie.i386|
|---|---|---|---|
|Entorno|legacy|stable|testing|jessie.i386|
|Imagen|legacy|jessie.i386|jessie.i386|jessie.i386|
|Versión PHP mínima|4.4|5.3|5.3|5.3|
|OpenSSL|0.9.8o|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|
|Extensión php imagick||x|x|x|
|Extensión php memcache|x|x|x|x|
|Extensión php memcached||x|x|x|
|Extensión php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|
|Extensión mysqlnd (solo en utf-8)||x|x|x|
|Extensión redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 y 3.4|2.7 y 3.4|2.7 y 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|


** Es necesario activar PHP-FPM: []({legacy}1175)


## ¿La modificación del entorno de ejecución afecta a todo el alojamiento?
Sí, la modificación del entorno de ejecución se aplica a todo el alojamiento. En consecuencia, no es posible tener dos entornos de ejecución diferentes al mismo tiempo.


## ¿En qué planes de hosting es posible cambiar el entorno de ejecución?
Puede hacerlo en todos los planes de web hosting.


## ¿Las sesiones PHP se conservan al cambiar de entorno?
Al cambiar el entorno de ejecución, se restauran automáticamente las sesiones PHP.

