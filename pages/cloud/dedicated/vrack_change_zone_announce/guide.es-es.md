---
title: 'Modificar el anuncio de un bloque de IP en el vRack'
slug: modificar-anuncio-bloque-ip-vrack
excerpt: 'Cómo modificar el anuncio de un bloque de IP en el vRack'
section: vRack
---

**Última actualización: 16/04/2019**

## Objetivo

El [vRack]({ovh_www}/soluciones/vrack/){.external} es una red privada que permite configurar el direccionamiento entre dos o más [servidores dedicados]({ovh_www}/servidores_dedicados/){.external} de OVH.

**Esta guía explica cómo definir la zona de anuncio de un bloque de IP en el vRack.**

## Requisitos

- Tener un [vRack]({ovh_www}/soluciones/vrack/){.external}.
- Haber [configurado un bloque de IP en el vRack](../configurar-un-bloque-ip-en-el-vrack/).
- Tener conocimientos avanzados de redes.

## Procedimiento

### 1. Comprobar la zona de anuncio actual

En primer lugar, compruebe en qué zona está anunciado actualmente el bloque de IP correspondiente. Para ello, ejecute un «traceroute» a una de las direcciones IP del bloque (cualquiera de ellas).

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.443 ms  0.426 ms  0.411 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.394 ms  0.396 ms  0.391 ms
 4  po101.gra-z1g2-a75.fr.eu (92.222.60.119)  0.374 ms  0.356 ms po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.333 ms
 5  be120.gra-d1-a75.fr.eu (37.187.232.74)  0.327 ms be121.gra-d2-a75.fr.eu (37.187.232.80)  0.335 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.328 ms
 6  vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.850 ms vl1248.rbx-d2-a75.fr.eu (37.187.231.252)  1.874 ms vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.816 ms
 7  10.95.66.51 (10.95.66.51)  1.943 ms 10.95.66.53 (10.95.66.53)  1.872 ms 10.95.66.59 (10.95.66.59)  1.860 ms
 8  1.2.3.4  2.865 ms
```

En el ejemplo anterior, la dirección IP está anunciada en **Roubaix**. Puede verse en el último salto realizado: vl1247.**rbx**-g1-a75.fr.eu (37.187.231.234) 1.816 ms. Si lo necesita, puede consultar nuestra página [Datacenters]({ovh_www}/quienes_somos/cpd.xml){.external} para identificar el datacenter correspondiente.

### 2. Modificar el anuncio del bloque de IP

Conéctese a la [API de OVH](https://api.ovh.com/console/){.external} con su ID de cliente y contraseña. Utilice las siguientes llamadas a la API para modificar el anuncio del bloque de IP:

> [!api]
>
> @api {GET} /vrack
> 

Esta llamada a la API permite mostrar la lista de vRacks. Si el nombre mostrado en la API no le permite identificar el vRack, puede consultarlo en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Cloud`{.action}. Haga clic en `vRack`{.action} en la columna izquierda y se desplegarán los vRacks existentes.

> [!api]
>
> @api {POST} /vrack/{serviceName}/ip/{ip}/announceInZone
> 

Esta llamada a la API permite modificar el anuncio de un bloque de IP. Complete la información solicitada:

|Campo|Descripción|
|---|---|
|serviceName|Introduzca el nombre del servicio vRack correspondiente.|
|ip|Introduzca el nombre del bloque de IP correspondiente (no se trata de la dirección IP probada en el paso anterior, sino el bloque de IP, por ejemplo, **1.2.3.4/27**).|
|zone|Seleccione la nueva zona donde quiera anunciar el bloque de IP (no se trata de la zona obtenida en el paso anterior).|

Por último, ejecute la llamada a la API para modificar el anuncio.

### 3. Probar la nueva zona de anuncio

Una vez que haya modificado la zona de anuncio, vuelva a ejecutar un «traceroute» en la dirección IP utilizada en el primer paso para comprobar que la modificación se haya aplicado correctamente.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.396 ms  0.379 ms  0.372 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.360 ms  0.361 ms  0.354 ms
 4  po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.401 ms  0.396 ms  0.389 ms
 5  be121.gra-d1-a75.fr.eu (37.187.232.76)  0.346 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.318 ms be120.gra-d1-a75.fr.eu (37.187.232.74)  0.351 ms
 6  10.73.0.65 (10.73.0.65)  0.625 ms 10.73.0.69 (10.73.0.69)  0.729 ms 10.73.0.65 (10.73.0.65)  0.526 ms
 7  10.17.145.25 (10.17.145.25)  0.354 ms 10.17.145.29 (10.17.145.29)  0.426 ms 10.17.145.25 (10.17.145.25)  0.415 ms
 8  1.2.3.4  2.865 ms
```

En el ejemplo anterior, la dirección IP está anunciada en **Gravelines**. Puede verse en el último salto realizado: be120.**gra**-d1-a75.fr.eu (37.187.232.74) 0.351 ms. Si lo necesita, puede consultar nuestra página [Datacenters]({ovh_www}/quienes_somos/cpd.xml){.external} para identificar el datacenter correspondiente.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community){.external}.