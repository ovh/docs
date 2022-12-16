---
title: 'Diagnosticar fallos de hardware en un servidor dedicado'
slug: diagnostico-fallos-hardware-servidor-dedicado
excerpt: 'Cómo utilizar las herramientas de diagnóstico para identificar fallos de hardware en el servidor'
section: 'Diagnóstico y modo de rescate'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 15/12/2022**

## Objetivo

Es posible que, con el tiempo, se produzcan fallos de hardware en el servidor que provoquen un funcionamiento deficiente. Los servidores dedicados de OVH cuentan con diversas herramientas de diagnóstico que permiten identificar cuáles son los componentes de hardware que fallan.

**Esta guía explica cómo diagnosticar fallos de hardware en un servidor dedicado.**

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/).
- Haber reiniciado el servidor en [modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/).

## Procedimiento

Esta guía explica los tests que deben realizarse para diagnosticar:

- procesador(es)
- conexión de red
- memoria RAM
- particiones del disco

### Procesadores

La prueba del procesador tarda aproximadamente 30 minutos en analizar el funcionamiento del procesador. Si el servidor se cae durante la prueba, significa que el procesador está defectuoso.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Conexión de red

La prueba de conexión de red analiza el ancho de banda interno y externo. Estos datos son orientativos, ya que no se trata de una prueba de rendimiento.

```bash
ping -c 10 proof.ovh.net
for file in 1Mb 10Mb 100Mb 1Gb ; do time curl -4f https://proof.ovh.net/files/${file}.dat -o /dev/null; done
```

### Memoria RAM

La prueba de memoria RAM analiza la integridad de los módulos RAM del servidor. Si el servidor se cae durante la prueba, significa que uno o más módulos RAM están defectuosos.

> [!warning]
> Atención, este test puede ser muy largo.

```bash
RAM="$(awk -vOFMT=%.0f '$1 == "MemAvailable:" {print $2/1024 - 1024}' /proc/meminfo)"
memtester ${RAM}M 1
```

### Particiones del disco

La prueba de las particiones analiza el acceso al disco y verifica el sistema de archivos. Respecto al acceso al disco, la aplicación comprueba que el sistema pueda comunicarse con los discos duros del servidor. En cuanto a la verificación del sistema de archivos, la aplicación utiliza el comando `fsck -fy`.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
