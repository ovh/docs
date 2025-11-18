---
title: "Fin del soporte Plesk y cPanel para VPS - Garantizar la continuidad de sus servicios"
excerpt: "Descubra las fechas de finalización del soporte de los sistemas operativos de su VPS OVHcloud que afectan a las licencias Plesk y cPanel"
updated: 2025-09-29
---

## Objetivo

Esta guía explica cómo garantizar la continuidad de sus servicios migrando su VPS OVHcloud hacia un sistema operativo compatible con las últimas versiones de **Plesk** y **cPanel**, una vez anunciado el fin del soporte para varios sistemas operativos.

**Descubra las fechas de finalización del soporte de los sistemas operativos de su VPS OVHcloud que afectan a las licencias Plesk y cPanel.**

## Requisitos

- Tener un producto [VPS](/links/bare-metal/vps) con un [distribution compatible](/links/bare-metal/vps-os).

## Procedimiento

Los editores **Plesk** y **cPanel** anuncian el fin del soporte para los siguientes sistemas operativos:

| Sistema operativo | Producto       | Fin del soporte        |
| ----------------- | -------------- | ---------------------- |
| Ubuntu 18.04      | Plesk          | **1 de enero de 2027** |
| Debian 10         | Plesk          | **1 de enero de 2027** |
| CentOS 7          | Plesk / cPanel | **1 de enero de 2027** |
| CloudLinux 7      | Plesk / cPanel | **1 de enero de 2027** |

Para obtener más información sobre los fines de soporte técnico, consulte la documentación oficial:

- [Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [cPanel](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/).

### ¿Qué hacer en concreto?

> [!primary]
>
> Desde un punto de vista **seguridad**, seguir utilizando un SO no compatible le expone a ataques.
> Le recomendamos que lea:
>
> - [las recomendaciones de cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).
> - [las recomendaciones de Plesk](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/securing-plesk.59464/).

#### 1. Comprobar el sistema actual

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en la sección `Servidores privados virtuales`{.action}.

![EOS Plesk cPanel](images/vpshome.png){.thumbnail}

En la pestaña `Inicio`{.action}, consulte los detalles de su sistema operativo en la sección `SO/Distribution` del recuadro `Su VPS`.

#### 2. Identificar un SO compatible

Si su sistema operativo ya no es compatible, migre a un sistema compatible recomendado por el editor.

Consulte la documentación oficial de los SO compatibles:

- [Lista de SO soportados por Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [Lista de SO compatibles con cPanel](https://docs.cpanel.net/installation-guide/system-requirements/).

#### 3. Migrar el servicio

**Opción A — Reinstalación manual**

1. [Haga una copia de seguridad de sus datos](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) (contenido web, base de datos, correo electrónico, etc.).
2. Reinstale un SO compatible desde el área de cliente de OVHcloud, tal y como se indica en la sección `Reinstalar su VPS` de nuestra guía [Primeros pasos con un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
3. [Reinstale cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) o Plesk en el nuevo sistema.
4. Restaure sus datos a partir de sus copias de seguridad.

**Opción B — Migración a través de Plesk o cPanel**

Questo metodo è consigliato se è possibile distribuire un nuovo VPS con un sistema aggiornato contemporaneamente a quello precedente.

Contrate un nuevo VPS con un SO compatible si aún no lo ha hecho. [Instale cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) o Plesk.

Utilice la herramienta de migración que prefiera. Estas herramientas permiten transferir automáticamente sitios web, bases de datos, cuentas de correo y configuraciones de un VPS a otro:

- Plesk Migrator - [Documentación oficial](https://docs.plesk.com/en-US/obsidian/migration-guide/introduction.75496/).
- cPanel Transfer Tool - [Documentación oficial](https://docs.cpanel.net/whm/transfers/transfer-tool/).

**Opción C — Actualización directa del SO sin reinstalación ni migración (usuarios avanzados)**

Si no puede desplegar un nuevo VPS, algunas herramientas permiten **actualizar directamente su sistema operativo** conservando Plesk o cPanel instalado. Este método es para usuarios avanzados, ya que puede suponer un riesgo si se ejecuta incorrectamente.

- Para **Plesk** (cambio de CentOS 7 a AlmaLinux 8), utilice el script `centos2alma` ofrecido por la [documentación oficial de Plesk](https://github.com/plesk/centos2alma). Consulte también las instrucciones detalladas del [soporte de Plesk](https://support.plesk.com/hc/en-us/articles/12377714344983).

- Para **cPanel** (cambio de CentOS 7 a AlmaLinux 8), utilice la herramienta **Elevate** que ofrece la [documentación oficial de cPanel](https://cpanel.github.io/elevate/).

> [!primary]
>
> Estas herramientas no están garantizadas al 100% y requieren copias de seguridad completas antes de proceder. Asimismo, asegúrese de que su VPS dispone de recursos suficientes (RAM, CPU y disco).

### Buenas prácticas de seguridad

Independientemente de Plesk/cPanel, es esencial **mantener el sistema operativo de su VPS actualizado** para beneficiarse de los parches de seguridad, la compatibilidad del software y el soporte del editor. Si su distribución está en **fin de vida (EOL)**, planifique una **actualización** o una **migración** a una versión aún soportada.

Para conocer las fechas de fin de vida y de fin de soporte de las imágenes y los sistemas operativos (VPS & Public Cloud), consulte nuestro guía "[Public Cloud & VPS - Ciclo de vida y anuncios de fin de vida y soporte de imágenes y distribuciones](/pages/public_cloud/compute/image-life-cycle)".

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).