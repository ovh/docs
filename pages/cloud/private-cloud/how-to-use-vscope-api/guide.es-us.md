---
title: 'Cómo utilizar la API de vScope'
slug: vscopeapi
excerpt: 'Con la API vScope, podrá utilizar los datos de monitorización en sus aplicaciones'
section: 'Servicios y opciones de OVH'
order: 1
---

**Última actualización: 25/11/2019**

## Objetivo

OVHcloud pone a su disposición una herramienta de supervisión y monitorización de sus máquinas virtuales y de su infraestructura llamada**vScope**.

Se trata de una página web en la que se reúne toda la información útil sobre el uso de sus recursos.

Esta información también se encuentra disponible en la APIv6 y la API Metrics.

**En esta guía, describiremos el uso de estas API**.

## Procedimiento

vScope brinda dos tipos de información:

- información **live** es aquella que corresponde a los diferentes componentes en un momento determinado.
- gráficos que presentan los datos históricos de rendimiento de los diferentes componentes. Ej.: CPU, RAM de una máquina virtual.


### Recopilar los datos **live**

Los datos **live** son aquellos que se encuentran disponibles en la página principal de la interfaz vScope.

![vScope-API](images/vScope1.png){.thumbnail}

Podrá obtener los datos **live** para los siguientes componentes:

- filers
- hosts
- máquinas virtuales

El uso de la API se realiza a través de estas tres llamadas APIv6:

#### Filers

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Hosts

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### Máquina virtual

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### Recopilar los datos históricos (Gráficos)

Para recopilar y utilizar los datos históricos (Gráficos), contamos con el producto **Metrics Data Platforms**.

Mediante el protocolo Opentsdb o WARP10, podrá obtener sus datos en forma de puntos. Podrá utilizarlos a través de su aplicación o verlos directamente según el renderizado deseado.


En este artículo, explicaremos el uso del protocolo Opentsdb para obtener una visualización de datos en bruto (sin renderizado gráfico).

Para poder utilizar **Metrics Data Platforms**, deberá contar con un token de lectura. Con la nueva versión del vScope, cada usuario de la infraestructura dispone de un token de lectura. 

Para el usuario deseado, utilice la siguiente llamada a la APIv6 y obtenga el token de lectura:

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/getVscopeMetricsToken
> 

Su token se encuentra en el campo **token** del resultado.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    "token": "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

Para cada tipo de componente, existe una lista de métricas y necesita un número muy preciso de parámetros (también llamados <i>labels</i>).

#### Filers

| Métricas | Descripción | Labels |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Uso del filer en kB | datacenter : pcc-37-187-228-180_datacenter869, <br>datastore : pcc-000443 |

#### Hosts

| Métricas | Descripción | Labels |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Uso del procesador del host en porcentaje | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51 |
| vscope.host.mem.usage.perc | Uso de la memoria del host en porcentaje | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51 |
| vscope.host.net.tx | Uso de la red del host de emisión | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Uso de la red del host de recepción | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Número de paquetes de red transmitidos por el host | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Número de paquetes de red recibidos por el host | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- host : 172.17.86.51<br>\- nicname : vmnic0/vmnic1/vmnic2/vmnic3 |

#### Máquinas virtuales

| Métricas | Descripción | Labels |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | Uso del procesador de la MV en porcentaje | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.mem.usage.perc | Uso de la memoria de la MV en porcentaje | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.cpu.ready |CPU Ready de la MV en milisegundos | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.rx | Uso de la red de la MV de recepción | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.tx | Uso de la red de la MV de transmisión | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetsrx | Número de paquetes de red recibidos por la MV | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.net.packetstx | Número de paquetes de red transmitidos por la MV | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.read | Número de IO en lectura por segundo de la MV | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.io.write | Número de IO en escritura por segundo de la MV | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.read |  Ancho de banda del disco de la MV en modo lectura | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.bandwidth.write | Ancho de banda del disco de la MV en modo escritura | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.read | Latencia del disco de la MV en modo lectura | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |
| vscope.vm.disk.latency.write | Latencia del disco de la MV en modo escritura | \- datacenter : pcc-37-187-228-180_datacenter869, <br>\- vm : vm-01254 |

#### Ejemplo de recopilación con el protocolo OpenTSDB

Una vez que obtuvo su token, su punto final y su lista de métricas, recuperará los datos de uso de memoria de un host en un día.

A continuación, encontrará un ejemplo de petición.

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
-d '{ 
    "start":1564407950, 
    "queries":[ 
        { 
            "metric":"vscope.host.mem.usage.perc", 
            "aggregator":"sum",
            "downsample":"20m-max-zero",
            "tags": {
                "datacenter":"pcc-37-187-228-180_datacenter869",
                "host":"172.17.86.51" 
            } 
        } 
    ] 
}'
```

Explicación de los diferentes campos utilizados:

- read: usuario utilizado para efectuar la petición (siempre será read);
- XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX : token previamente obtenido mediante la APIv6;
- opentsdb.gra1-ovh.metrics.ovh.net : punto final OpenTSDB, también obtenido mediante la APIv6. Este punto final puede variar según su localización;
- start: marcas de tiempo que corresponden a la fecha de inicio de la petición;
- queries: tabla que contiene las métricas por obtener. Se pueden recuperar varias métricas en una sola petición;
- metric: nombre de la métrica por obtener;
- aggregator: nombre de la función de agregación (consultar la documentación OpenTSDB para más información);
- downsample: nombre de la función de muestreo (permite reducir el número de datos por recuperar. Parámetro optativo);
- tags: lista de labels (etiquetas) en forma de llave / valor;

También pueden suministrarse otros parámetros. Por favor, consulte la documentación de la API OpenTSDB para más información.

A su vez, recibirá un JSON con el resumen de la petición, como también las marcas de tiempo asociadas a su valor en el campo**dps**.
Ejemplo:

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        "tags":{
            "datacenter":"pcc-37-187-228-180_datacenter869",
            "env":"prod",
            "host":"172.17.86.51",
            "servicename":"pcc-37-187-228-180",
            "servicetype":"vscope"
        },
        "query":{
            "index":0
        },
        "aggregateTags":[],
        "dps":{
            "1564409391":4.38,
            "1564410591":4.35,
            "1564411791":4.37,
            "1564412991":4.38,
            "1564414191":4.35,
            "1564415391":4.38,
            "1564416591":4.35,
            "1564417791":4.36,
            "1564418991":4.36,
            "1564420191":4.37,
            "1564421391":4.37,
            "1564422591":4.37,
            "1564423791":4.37,
            "1564424991":4.38,
            "1564426191":4.36,
            "1564427391":4.35,
            "1564428591":4.37,
            "1564429791":4.36,
            "1564430991":4.38,
            "1564432191":4.35,
            "1564433391":4.37,
            "1564434591":4.36,
            "1564435791":4.37,
            "1564436991":4.37,
            "1564438191":4.37,
            "1564439391":4.38,
            "1564440591":4.36,
            "1564441791":4.36,
            "1564442991":4.37,
            "1564444191":4.37,
            "1564445391":4.35,
            "1564446591":4.36,
            "1564447791":4.36,
            "1564448991":4.36,
            "1564450191":4.35,
            "1564451391":4.37,
            "1564452591":4.37,
            "1564453791":4.35,
            "1564454991":4.36,
            "1564456191":4.37,
            "1564457391":4.37,
            "1564458591":4.36,
            "1564459791":4.37,
            "1564460991":4.34,
            "1564462191":4.36,
            "1564463391":4.34,
            "1564464591":4.37,
            "1564465791":4.34,
            "1564466991":4.37,
            "1564468191":4.34,
            "1564469391":4.36,
            "1564470591":4.36,
            "1564471791":4.36,
            "1564472991":4.37,
            "1564474191":4.37,
            "1564475391":4.36,
            "1564476591":4.35,
            "1564477791":4.36,
            "1564478991":4.35,
            "1564480191":4.35,
            "1564481391":4.37,
            "1564482591":4.36,
            "1564483791":4.34,
            "1564484991":4.37,
            "1564486191":4.38,
            "1564487391":4.35,
            "1564488591":4.34,
            "1564489791":4.36,
            "1564490991":4.35,
            "1564492191":4.36,
            "1564493391":4.36,
            "1564494591":4.36
        }
    }
]
```

Para más información sobre las peticiones OpenTSDB, consulte la siguiente documentación: [OpenTSDB api query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.