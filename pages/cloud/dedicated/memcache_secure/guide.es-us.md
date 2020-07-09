---
title: Proteger un servidor con servicio Memcached
slug: proteger-servidor-con-servicio-memcached
excerpt: Cómo proteger el servicio Memcached
section: Uso avanzado
---

**Última actualización: 02/03/2018**


## Objetivo

Memcached es un servicio de bases de datos en memoria que se utiliza principalmente para acelerar aplicaciones web guardando en caché el contenido estático y los resultados de las consultas a las bases de datos. El mecanismo es muy sencillo: es una base de datos con formato clave-valor en memoria de almacenamiento no persistente.

Por defecto, Memcached no está protegido por autenticación, de modo que, si el servidor está accesible, cualquiera puede leer y escribir datos en él. Por eso es importante proteger esta base de datos.


**Esta guía explica cómo proteger el servicio Memcached.**


> [!warning]
>
> La responsabilidad sobre las máquinas que OVH pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las operaciones más comunes en su VPS. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>


## Requisitos


- Tener acceso al servidor con el servicio Memcached (por SSH para los entornos Linux o mediante el escritorio remoto para Windows).
- Identificar los servicios que usan Memcached. Para ello, responda a las siguientes preguntas:
    - ¿Los servicios que usan Memcached están en el mismo servidor? ¿Se utilizan en una red privada?
    - ¿Los servicios que usan Memcached necesitan que este esté accesible públicamente en internet?


## Procedimiento

### Configurar Memcached para protegerlo

Para proteger un servidor Memcached son necesarias dos acciones:

- limitar la dirección de escucha del servicio;
- aceptar exclusivamente las conexiones TCP.

Antes de la versión 1.5.6, Memcached autorizaba por defecto las conexiones TCP y UDP. Según indican los desarrolladores, las conexiones UDP eran necesarias en la época en la que se creó el programa, en la que disponíamos de menos recursos. Sin embargo, este último protocolo puede utilizarse para generar ataques por amplificación.

En esta guía asumimos que usted forma parte del 99% de los usuarios que no necesita las conexiones UDP.

Si su servicio Memcached solo es utilizado por la máquina local, puede limitar la dirección de escucha a **127.0.0.1**.

Si deben conectarse a él otras máquinas desde una red privada, fuerce la escucha en una IP privada, por ejemplo **10.0.0.1** (adáptela en función de la clase de su red).

En cualquier caso, **desactive la escucha en UDP** mediante la directiva `-U 0`.

A continuación pasamos a detallar la configuración para los principales sistemas operativos.


#### Debian/Ubuntu

El comportamiento por defecto de Debian y Ubuntu consiste en utilizar `service memcached status/start/restart/force-reload` para gestionar el servicio Memcached. Si ese es su caso, edite el archivo **/etc/memcached.conf** conectándose como *root*.

Empiece por añadir esta opción, que desactiva la escucha UDP, que, como hemos explicado anteriormente, está obsoleta.

```
# Disable UDP protocol
-U 0
```

Si su servicio Memcached solo es utilizado por la máquina local, puede activar la siguiente opción, que evitará que el servicio esté expuesto en internet:

```
-l 127.0.0.1
```

Una vez realizados los cambios, guarde el archivo y utilice uno de los siguientes comandos para reiniciar la configuración:


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS/Fedora/Red Hat


El comportamiento por defecto de CentOS, Fedora y Red Hat consiste en utilizar `service memcached status/start/restart/force-reload` para gestionar el servicio Memcached. Si ese es su caso, edite el archivo **/etc/sysconfig/memcached** conectándose como *root*.

Si su servicio Memcached solo es utilizado por la máquina local, le recomendamos la siguiente línea de opciones, que evitará que el servicio esté expuesto en internet mediante la desactivación del protocolo UDP, que está obsoleto:

```
OPTIONS="-l 127.0.0.1 -U 0"
```


Si también utiliza su servicio Memcached para otros servidores, esta línea de opciones desactivará únicamente el protocolo UDP:

```
OPTIONS="-U 0"
```

Una vez realizados los cambios, guarde el archivo y utilice el siguiente comando para reiniciar la configuración:

```sh
sudo service memcached force-reload
```


#### Arch Linux


El comportamiento por defecto de Arch Linux consiste en utilizar `systemctl start/restart/stop memcached` para gestionar el servicio Memcached. Si ese es su caso, edite el archivo **/usr/lib/systemd/system/memcached** conectándose como *root*.

Si su servicio Memcached solo es utilizado por la máquina local, le recomendamos la siguiente línea, que evitará que el servicio esté expuesto en internet mediante la desactivación del protocolo UDP, que está obsoleto:

```
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Si también utiliza su servicio Memcached para otros servidores, esta línea desactivará únicamente el protocolo UDP:

```
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Una vez realizados los cambios, guarde el archivo y utilice uno de los siguientes comandos para reiniciar la configuración:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.