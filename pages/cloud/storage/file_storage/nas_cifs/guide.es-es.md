---
title: Montar un NAS-HA en Windows Server a través de CIFS
slug: nas/cifs
excerpt: Esta guía explica cómo montar un NAS-HA en Windows Server a través de CIFS.
section: NAS
order: 04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 08/12/2021**

## Objetivo

Configure e monte su espacio de almacenamiento NAS-HA OVHcloud en Windows Server a través de CIFS.

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/) **o** un [VPS](https://www.ovhcloud.com/es-es/vps/) **o** una [instancia de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) con una distribución Windows.
- Una oferta [NAS-HA](https://www.ovh.es/nas/).

### Configuración

- **Windows Server 2008** : haga clic en el menú `Start`{.action} > `All the programs`{.action} > `Accesories`{.action} > `Command prompt`{.action}.
- **Windows Server 2012** : haga clic en el icono `Windows PowerShell`{.action} en la barra de tareas.
- **Windows Server 2016** : haga clic en el menú `Start`{.action} y seleccione el icono de `Windows PowerShell`{.action}.
- **Windows Server 2019** : haga clic en el menú `Start`{.action} y seleccione el icono de `Windows PowerShell`{.action}.

Ejecute el siguiente comando:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

### Ejemplo

- Montaje CIFS para un NAS-HA:

```bash
net use z: \\10.16.101.8\zpool-000206_PARTITION_NAME_1
```

> [!alert]
>
> El usuario SMB/CIFS es `nobody`, cualquier cambio de permisos efectuado por este usuario puede generar conflictos con los permisos NFS existentes.
> 

## Más información

[Preguntas frecuentes sobre los NAS](https://docs.ovh.com/es/storage/faq-nas/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
