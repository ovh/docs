---
title: Object Storage Swift - Sincronizar contenedores de objetos
slug: pcs/sync-object-containers
section: OpenStack Swift Storage Class Specifics
order: 060
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 27/10/2021**

## Objetivo

Si quiere mover sus objetos de un datacenter a otro, o incluso de un proyecto a otro, la mejor solución es la sincronización de objetos entre contenedores para evitar cortes del servicio durante la migración. Esta guía explica cómo implementar esta solución.

## Requisitos

- [Preparar el entorno para utilizar la API OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/) con el cliente swift
- [Cargar las variables de entorno OpenStack](https://docs.ovh.com/es/public-cloud/cargar-las-variables-de-entorno-openstack/)
- 2 contenedores de objetos en 2 datacenters diferentes

## Procedimiento

> [!primary]
>
> Si el contenedor contiene objetos de un tamaño superior a 5 Gb, ambos contenedores deben tener el mismo nombre.
>

### Configuración de la sincronización

#### Creación de la clave de sincronización

Para que los contenedores puedan identificarse, deberá crear una llave y configurarla en cada uno de los contenedores de objetos:

- Crear la llave:


```bash
root@server-1:~$ sharedKey=$(openssl rand -base64 32)
```


#### Configuración del contenedor de destino

En primer lugar, es necesario configurar la llave en el contenedor que recibirá los datos. En nuestro caso, este se encuentra en BHS.

- Compruebe la región cargada en las variables de entorno:

```bash
root@serveur-1~$ env | grep OS_REGION

OS_REGION_NAME=BHS
```

- Configure la llave en el contenedor de destino:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- Para comprobar que la configuración se haya realizado correctamente, ejecute el siguiente comando y, al mismo tiempo, obtenga el contenido de la variable "Account":

```bash
root@server-1:~$ swift stat containerBHS
                         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
                       Container: containerBHS
                         Objects: 0
                           Bytes: 0
                        Read ACL:
                       Write ACL:
                         Sync To:
                        Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
                   Accept-Ranges: bytes
                X-Storage-Policy: Policy-0
                      Connection: close
                     X-Timestamp: 1444812373.28095
                      X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
                    Content-Type: text/plain; charset=utf-8
```

- Descargue la dirección del contenedor de destino para configurarla en el contenedor de origen (es decir, del tipo: "//OVH_PUBLIC_CLOUD/Región/Account/Contenedor")

```bash
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

#### Configuración del contenedor de origen

- Cambio de región en las variables de entorno:

```bash
root@server-1:~$ export OS_REGION_NAME=GRA
```

- Configure la llave en el contenedor de origen:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Configure el destinatario en el contenedor de origen:

```bash
root@server-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- Compruebe que la configuración se haya realizado correctamente con el siguiente comando:

```bash
root@server-1:~$ swift stat containerGRA
         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
       Container: containerGRA
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS
        Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
   Accept-Ranges: bytes
      Connection: close
     X-Timestamp: 1444813114.55493
      X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
    Content-Type: text/plain; charset=utf-8
```

#### Comprobación de la sincronización

Después de unos instantes (en función del número y el tamaño de los archivos a enviar), es posible comprobar que la sincronización se ha realizado correctamente, simplemente listando los archivos en cada uno de los contenedores.

- Listar los archivos presentes en el contenedor de origen:

```bash
root@server-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- Listar los archivos presentes en el contenedor de destino:

```bash
root@server-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```

### Conmutar la sincronización entre dos contenedores

Para revertir la sincronización entre dos contenedores, es necesario eliminar los metadatos `—sync-to` del contenedor fuente y volver a declararlo en el otro contenedor, que se convertirá en el nuevo contenedor fuente.

> [!warning]
>
> No olvide cambiar también la región en la nueva URL sync-to.
>

```bash
root@server-1:~$ swift post -H "X-Container-Sync-To:" containerGRA
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerGRA"
root@server-1:~$ export OS_REGION_NAME=BHS
root@server-1:~$ swift post --sync-to "$destContainer" containerBHS
```

### Detener la sincronización entre dos contenedores

Para detener la sincronización entre dos contenedores, es necesario eliminar los metadatos `—sync-key` y `—sync-to`.

```bash
swift post -H "X-Container-Sync-Key:" containerGRA
swift post -H "X-Container-Sync-To:" containerGRA
```

> [!primary]
>
> Esta guía también puede utilizarse para migrar objetos desde RunAbove a
> Public Cloud.
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.