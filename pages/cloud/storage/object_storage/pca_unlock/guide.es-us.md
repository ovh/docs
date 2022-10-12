---
title: Object Storage Swift - Descongelar los datos almacenados en Public Cloud Archive
slug: pca/unlock
excerpt: Cómo desbloquear los archivos
section: OpenStack Swift Archive Storage Class Specifics
order: 030
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 12/04/2022**

## Objetivo

Public Cloud Archive es una solución de almacenamiento en frío destinada a alojar grandes volúmenes de datos sin límite de tamaño, con una tarificación muy atractiva.

Para los datos que no se consulten con frecuencia, es necesaria una solicitud de desbloqueo, que implica un plazo antes de la recuperación. El plazo varía en función de la antigüedad y la frecuencia de acceso a los datos.

## Requisitos

- Deshielo desde el Panel de configuración de OVHcloud:
    - Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Deshielo en python-swiftclient:
    - [Preparar el entorno para utilizar la API OpenStack](https://docs.ovh.com/us/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/) instalando python-swiftclient.
    - [Cargar las variables de entorno OpenStack](https://docs.ovh.com/us/es/public-cloud/cargar-las-variables-de-entorno-openstack/).

## Procedimiento

### Descongelar los objetos desde el Panel de configuración

En el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), abra la pestaña `Public Cloud`{.action}, seleccione su proyecto de Public Cloud y haga clic en el menú de la izquierda en `Cloud Archive`{.action}.

Para descongelar un archivo comprimido, haga clic en el botón `...`{.action} a la derecha de este y luego en `Descongelar`{.action} para iniciar el proceso de recuperación.

![desel](images/unfreeze.png){.thumbnail}

Una vez iniciado el proceso, la fecha y la hora de disponibilidad del archivo comprimido se muestran en la columna `Disponibilidad`.

![plazo antes de desvincular](images/unfreeze_result.png){.thumbnail}

El archivo estará disponible para descarga una vez transcurrido ese plazo. A continuación, podrá realizar la descarga directamente desde el navegador o a través de [un cliente Swift/SFTP/SCP](https://docs.ovh.com/gb/en/storage/pca/sftp/).

### Descongelar los objetos a través de python-swiftclient

Compruebe el estado del objeto a descargar:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: sealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txbb0eff9ebf9442eab0d02-0061123b5a
X-Openstack-Request-Id: txbb0eff9ebf9442eab0d02-0061123b5a
     X-Iplb-Request-Id: 6DBEFE1E:942A_3626E64B:01BB_61123B59_649EACF:8F28
       X-Iplb-Instance: 12308
```

La siguiente línea indica que el objeto está congelado:

```
X-Ovh-Retrieval-State: sealed
```

Por lo tanto, el pedido `swift download` provocará un error 429:

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

Reiniciando el pedido `swift stat`:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealing
           X-Timestamp: 1628584780.95458
 X-Ovh-Retrieval-Delay: 14313
            X-Trans-Id: tx9012d12434a447bd81528-0061123c54
X-Openstack-Request-Id: tx9012d12434a447bd81528-0061123c54
     X-Iplb-Request-Id: 6DBEFE1E:94D0_3626E64B:01BB_61123C54_6823B54:10ABF
       X-Iplb-Instance: 12309
```

La siguiente línea indica que el objeto se está descongelando:

```
X-Ovh-Retrieval-State: unsealing
```

Y la siguiente línea indica el tiempo (en segundos) que se debe esperar antes de poder descargar el objeto:

```bash
X-Ovh-Retrieval-Delay: 14313
```

Una vez transcurrido el plazo,

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txaf1eac9ceb8a45efb36e1-0061127482
X-Openstack-Request-Id: txaf1eac9ceb8a45efb36e1-0061127482
     X-Iplb-Request-Id: 6DBEFE1E:ACCC_3626E64B:01BB_61127482_E75B0:1B979
       X-Iplb-Instance: 38343
```

La siguiente línea indica que el objeto está descongelado:

```
X-Ovh-Retrieval-State: unsealed
```

La descarga del objeto funciona así:

```bash
swift download <pca_container> <object>
```

```bash
swift download <pca_container> <object>
<object> [auth 0.961s, headers 1.767s, total 1.768s, 0.001 MB/s]
```

#### Automatizar la descarga del objeto

> [!primary]
>
> Esta funcionalidad necesita el paquete `at`.
>

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

```bash
X_OVH_RETRIEVAL_DELAY=$(swift download <pca_container> <object> | awk -F ": " '/X-Ovh-Retrieval-Delay/ {print $2}'
RETRIEVAL_DELAY=$((${X_OVH_RETRIEVAL_DELAY} / 60 + 2))
swift download <pca_container> <object> | at now + ${RETRIEVAL_DELAY} minutes
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.