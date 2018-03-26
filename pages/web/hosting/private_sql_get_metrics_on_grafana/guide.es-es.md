---
title: Obtener las métricas de un SQL Privado en Grafana
excerpt: Obtener las métricas de un SQL Privado en Grafana
id: '2057'
slug: obtener_las_metricas_de_un_sql_privado_en_grafana
legacy_guide_number: g2057
section: SQL Privado
---


## 

## ¿Qué es Docker?
Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software.

![](images/img_3657.jpg){.thumbnail}

## ¿Qué es Grafana?
Grafana es una solución de código abierto que permite transformar datos en forma de gráficas, por ejemplo.

![](images/img_3658.jpg){.thumbnail}


## Una instancia
Para instalar Grafana, necesita utilizar Docker. Podrá instalarlo en diferentes soluciones de OVH: 


- [VPS](https://www.ovh.es/vps/)
- [Servidor dedicado](https://www.ovh.es/servidores_dedicados/)
- [Instancia Cloud](https://www.ovh.es/cloud/instances/)




## Docker

## Instalación
Consulte la documentación disponible en el siguiente [enlace](https://docs.docker.com/engine/installation/) para instalar Docker en función de su máquina.

## En un VPS
Si tiene un VPS de OVH, puede seleccionar entre instalar la distribución «Docker on Ubuntu» en la que se incluye un servidor que ya cuenta con Docker.

![](images/img_3659.jpg){.thumbnail}


## Grafana

## Instalar Grafana en Docker
Si desea utilizar Grafana en el puerto 80 de su servidor, tan solo debe utilizar el siguiente comando: 


```
docker run -i -p 80:3000 grafana/grafana
```


Si desea más información, puede consultar el siguiente [enlace](http://docs.grafana.org/installation/docker/).
Es posible instalar Grafana sin Docker. Para ello, consulte el siguiente [documento](http://docs.grafana.org/installation/).


## Un servidor SQL Privado

## Tipo de SQL Privado
Su servidor SQL Privado debe ser de tipo Docker para poder obtener las métricas.

## Activación gratuita en los alojamientos Performance
Si dispone de un alojamiento Performance, puede activar un servidor SQL Privado gratis. Para ello, consulte la siguiente [guía](https://www.ovh.es/g2023.todo_sobre_el_sql_privado#cambiar_la_configuracion_de_mi_servidor_sql_privado_servidor_de_tipo_docker).

## Contratar un servidor SQL Privado
Puede contratar un servidor SQL Privado directamente desde su área de cliente. 


- Todos los nuevos servidores SQL Privados son de tipo Docker.



![](images/img_3660.jpg){.thumbnail}

## ¿Mi servidor SQL Privado es de tipo Legacy o Docker?
Los antiguos servidores SQL Privados son de tipo Legacy (por ejemplo: «sqlprive-kx11111-009»), los nuevos son de tipo Docker (por ejemplo: «sx11111-012»).
Son dos infraestructuras diferentes.

![](images/img_3661.jpg){.thumbnail}


## Obtener el token a través de la API OVH

## Conectarse a la API OVH
Utilice el siguiente enlace para conectarse a la API OVH y, a continuación, haga clic en «Login» para conectarse. 

[https://api.ovh.com/console/](https://api.ovh.com/console/)

![](images/img_3662.jpg){.thumbnail}

## Recuperar el token
Utilice la siguiente función para recuperar la lista de servidores SQL Privados en su cuenta y, a continuación, haga clic en «Execute»: 


```
/hosting/privateDatabase
```



![](images/img_3663.jpg){.thumbnail}
Introduzca el nombre de su servidor SQL Privado de tipo Docker a través del siguiente comando: 


```
/hosting/privateDatabase/{serviceName}
```


En «graphEndpoint» encontrará los dos datos que necesita: 


- readToken
- host



![](images/img_3664.jpg){.thumbnail}


## Utilizar Grafana

## Conectarse a Grafana
Acceda a Grafana a través de su navegador e introduzca las siguientes claves por defecto: 


- admin / admin



![](images/img_3665.jpg){.thumbnail}

## Añadir su fuente de datos
Para ello, haga clic en «Data Sources» en la columna de la izquierda y, a continuación, en «Add new».

Introduzca la siguiente información: 


- Name: El nombre de su fuente de datos. En nuestro caso, podría ser «private SQL».
- Default: Sí. 
- Type: «OpenTSDB». 
- URL: Indique el contenido del campo «host» que recuperó previamente en la API OVH. 
- Access: «proxy»
- Http Auth: Marque «Basic Auth» y desmarque «With Credentials». 
- User: Indique el contenido del campo «readToken» que recuperó previamente en la API OVH. 
- Password: Indique de nuevo el contenido del campo «readToken» que recuperó previamente en la API OVH.



![](images/img_3666.jpg){.thumbnail}

## Configurar su «Dashboard»
Haga clic en «Dahboards» en la columna de la izquierda y, a continuación, haga clic en «Home» > «New».

Conseguirá así un panel de control virgen cuyo nombre podrá cambiar haciendo clic en «Manage Dashboard» > «Settings».

Puede guardar en cualquier momento su panel de control haciendo clic en el icono con forma de disquete situado en la parte superior. 

Un panel de control se compone de línea («Row»). Para añadir el primer gráfico, haga clic en el botón verde y seleccione «Add Panel» > «Graph».

![](images/img_3667.jpg){.thumbnail}
En la pestaña «General», indique el título de su gráfico. En este caso, lo llamaremos «RAM».

![](images/img_3668.jpg){.thumbnail}
En la pestaña «Metrics», compruebe que su fuente de datos es la correcta, en la parte inferior derecha. 

La primera métrica que debe introducir es «memory.hierarchical_memory_limit», que corresponde a la memoria RAM máxima asignada a su servidor SQL Privado. 

A continuación, haga clic en «+ Query» para ajustar la segunda métrica «memory.rss», que corresponde a la memoria RAM utilizada por su servidor.

![](images/img_3669.jpg){.thumbnail}
En la pestaña «Axes & Grid», seleccione en «Left Y» la unidad «data» y, a continuación, «Bytes».

![](images/img_3670.jpg){.thumbnail}
En la parte superior derecha, seleccione el intervalo de tiempo que desea. Este es el resultado obtenido en los últimos 60 días.

![](images/img_3671.jpg){.thumbnail}


## Métricas
Incluimos 3 ejemplos de métricas pertinentes para seguir el rendimiento de su SQL Privado: 

|Límite de RAM utilizada|memory.hierarchical_memory_limit|
|RAM utilizada|memory.rss|
|Número de conexiones MySQL activas|mysql.active_connections|


En el siguiente enlace encontrará información oficial sobre las métricas Docker: 


- [https://docs.docker.com/engine/articles/runmetrics/](https://docs.docker.com/engine/articles/runmetrics/)



