---
title: "Backup Agent - Restricciones conocidas"
excerpt: "Descubra las restricciones y limitaciones del producto Backup Agent"
updated: 2026-01-23
---

## Objetivo

Esta guía detalla las restricciones y limitaciones conocidas del producto Backup Agent que debe conocer antes de utilizar el servicio.

## Restricciones conocidas

### Política de copia de seguridad

- La política de copia de seguridad está restringida, no puede modificarla.
- No puede configurar una copia de seguridad solo en una lista de archivos o carpetas.
- No puede modificar la fecha y hora de activación de las copias de seguridad (esto se considera como una mejora en el futuro).

### Acceso VSPC

- El usuario que recibe es de solo lectura, no puede hacer modificaciones directamente en la VSPC.

### Vault

- No puede crear vaults adicionales, se crearán automáticamente para asegurar que sus datos no estén alojados en el mismo centro de datos donde se encuentra su servidor Bare Metal.
- No puede cambiar el vault de un agente.

### Limitaciones de OS

- Puede encontrar la lista de sistemas operativos compatibles para el Veeam Agent aquí <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=1>

### Compatibilidad con otros productos OVHcloud

- Actualmente, el producto Backup Agent solo es compatible con los Servidores Dedicados, no puede usar su agente en otros productos.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).

