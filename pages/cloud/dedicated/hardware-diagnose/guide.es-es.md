---
title: 'Diagnosticar fallos de hardware en un servidor dedicado'
slug: diagnostico-fallos-hardware-servidor-dedicado
excerpt: 'Cómo diagnosticar fallos de hardware en un servidor dedicado'
section: 'Diagnóstico y modo de rescate'
---

**Última actualización: 17/09/2018**

## Objetivo


Es posible que, con el tiempo, se produzcan fallos de hardware en el servidor que provoquen un funcionamiento deficiente. Los servidores dedicados de OVH cuentan con diversas herramientas de diagnóstico que permiten identificar cuáles son los componentes de hardware que fallan.

**Esta guía explica cómo diagnosticar fallos de hardware en un servidor dedicado.**


## Requisitos

* Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external}.
* Haber reiniciado el servidor en [modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external}.


## Procedimiento

### Utilizar la interfaz web

Una vez reiniciado el servidor en [modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external}, recibirá por correo electrónico las claves de acceso al servicio y un enlace hacia la interfaz web del modo de rescate con el siguiente formato: **https://IP_del_servidor:444**.

Al hacer clic en el enlace, se abrirá en su navegador la interfaz web que se muestra a continuación.

![Interfaz web](images/rescue-mode-04.png){.thumbnail}


### Ejecutar todas las pruebas de hardware

Haga clic en el botón `Start all tests`{.action}, situado en la parte superior de la interfaz web, para ejecutar simultáneamente todas las pruebas de hardware disponibles.

![Start all tests](images/rescue-mode-042.png){.thumbnail}


### Ejecutar pruebas de hardware individualmente

La interfaz web permite ejecutar por separado las siguientes pruebas:

- procesador(es)
- conexión de red
- memoria RAM
- particiones del disco

También puede consultar los logs SMART del servidor para obtener información detallada sobre los discos duros.

 
#### Procesadores

La prueba del procesador tarda aproximadamente 30 minutos en analizar el funcionamiento del procesador. Si el servidor se cae durante la prueba, significa que el procesador está defectuoso.

Para ejecutar esta prueba, haga clic en el botón `Start a test`{.action} de la sección correspondiente.

![Prueba del procesador](images/processors.png){.thumbnail}

#### Conexión de red

La prueba de conexión de red analiza el ancho de banda interno y externo. Para ejecutar esta prueba, haga clic en el botón `Start a test`{.action} de la sección correspondiente.

![Prueba de red](images/network-connection.png){.thumbnail}

#### Memoria RAM

La prueba de memoria RAM analiza la integridad de los módulos RAM del servidor. Si el servidor se cae durante la prueba, significa que uno o más módulos RAM están defectuosos.

Para ejecutar esta prueba, haga clic en el botón `Start a test`{.action} de la sección correspondiente.

![Prueba de RAM](images/memory.png){.thumbnail}

#### Particiones del disco

La prueba de las particiones analiza el acceso al disco y verifica el sistema de archivos. Respecto al acceso al disco, la aplicación comprueba que el sistema pueda comunicarse con los discos duros del servidor. En cuanto a la verificación del sistema de archivos, la aplicación utiliza el comando `fsck -fy`.

> [!warning]
>
> Las pruebas de verificación del sistema de archivos de un disco duro dañado pueden provocar la pérdida de datos.
>

![Prueba de disco](images/partitions.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.