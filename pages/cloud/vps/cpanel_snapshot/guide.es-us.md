---
title: 'Backup automático - Kernel Panic (cPanel)'
excerpt: 'Cómo solucionar los problemas de bloqueo de los servidores cPanel durante el backup automático de OVHcloud'
updated: 2021-03-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 09/03/2021**

## Objetivo

Cuando utiliza la función de backup automático en un VPS que ejecuta cPanel, puede encontrar situaciones en las que su VPS se bloquea durante demasiado tiempo y se vuelve inaccesible. La principal causa está relacionada con los usuarios de cPanel que utilizan el acceso Jailed Shell. que genera un "virtfs" en su sistema de archivos. 

Al crear una copia de seguridad de su VPS (en caso de suscribirse a las copias de seguridad automáticas o a los snapshots), el hipervisor se comunica con su VPS a través de la QEMU Guest Agent para congelar el sistema de archivos en el VPS, antes de proceder al backup. Este mecanismo permite garantizar que durante la ejecución del backup no se escriba en el disco ninguna escritura, por lo que garantiza la coherencia del backup.
<br>Sin embargo, al permitir el acceso a Jailed Shell, cPanel crea un "virtfs" que no se puede congelar de esta manera. Este se bloquea y provoca un kernel panic.
<br>Existen tres maneras de evitar esto:

1. Desactivar QEMU Guest Agent
2. No permitir Jailed Shell
3. Desactivar la seguridad de la partición /tmp (no recomendada por cPanel, pero es una opción disponible)

## Requisitos

- Tener un [VPS](https://www.ovhcloud.com/es/vps/) (VPS Value, Essential, Comfort o Elite) en su cuenta de OVHcloud.
- cPanel debe estar instalado en su servidor

## Procedimiento

Elija entre las 3 opciones anteriores y siga la sección correspondiente de la guía. Sólo hay que seguir a una.
Seleccione con cuidado porque cada una tiene sus ventajas y desventajas.

### Desactivar QEMU Guest Agent

En primer lugar, compruebe si el servicio QEMU Guest Agent se está ejecutando en su servidor. Para comprobarlo, utilice el siguiente comando:

```bash
systemctl status qemu-guest-agent
```

El estado del servicio está indicado junto a "Active:". Si está activo o en ejecución, el servicio deberá detenerse y desactivarse para evitar que vuelva a activarse en el futuro. Para ello, utilice los siguientes comandos:

```bash
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent
```

### Pasar de Jailed Shell a Normal Shell

Descubra las diferencias entre Jailed Shell y Normal Shell [aquí](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell)

Para desactivar un entorno Jailed Shell para todos los usuarios, debe desactivar la opción jailshell por defecto en la interfaz "WHM's Tweak Settings" (WHM >>Home >> Server Configuration >> Tweak Settings).

Esta opción le permite activar o desactivar el uso de un Jailed Shell para las nuevas cuentas y aquellas utilizadas en las siguientes interfaces:

1. La interfaz "WHM's Modify an Account" (WHM >> Home >> Account Functions >> Modify An Account).
2. La interfaz "WHM's Upgrade/Downgrade an Account" (WHM >> Home >> Account Functions >> Upgrade/Downgrade An Account).

Esta opción no afecta a las cuentas que ya existen en el servidor, pero que no han cambiado en estas interfaces.

Para desactivar el entorno Jailed Shell de un usuario específico, utilice la interfaz "WHM's Manage Shell Access" (WHM >>Home >> Account Functions >> Manage Shell Access).

### Desactivar la seguridad de la partición /tmp en cPanel

Tenga en cuenta que cPanel no recomienda este método. Su uso está a tu riesgo y riesgo. Si desea continuar con esta opción, puede leer los pasos exactos a partir de la [documentación cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
