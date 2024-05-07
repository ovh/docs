---
title: "Diagnosticar fallos de hardware en un servidor dedicado"
excerpt: "Cómo utilizar las herramientas de diagnóstico para identificar fallos de hardware en el servidor"
updated: 2024-05-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo


En algún momento de la vida de su servidor, puede experimentar una avería debido a un problema de hardware. Cuando el servidor se inicia en modo de rescate de OVHcloud, dispone de varias herramientas de diagnóstico que permiten identificar los componentes de hardware defectuosos.

**Esta guía explica cómo diagnosticar fallos de hardware en un servidor dedicado.**

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal).
- Haber reiniciado el servidor en [modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

## Procedimiento

Esta guía explica los tests que deben realizarse para diagnosticar:

- procesador(es)
- conexión de red
- memoria RAM
- discos y particiones

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

### Disk Health

Puede utilizar *Smartmontools* para comprobar el estado de sus discos leyendo sus datos `SMART`. Por ejemplo, para ver todos los detalles del disco denominado `nvme1n1`, escriba:

```bash
smartctl -a /dev/nvme1n1
```

Para más información sobre el resultado de este comando y su interpretación, consulte [la documentación oficial *Smartmontools*](https://www.smartmontools.org/wiki/TocDoc).

### Particiones del disco

La prueba de las particiones analiza el acceso al disco y verifica el sistema de archivos. Respecto al acceso al disco, la aplicación comprueba que el sistema pueda comunicarse con los discos duros del servidor. En cuanto a la verificación del sistema de archivos, la aplicación utiliza el comando `fsck -fy`.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
