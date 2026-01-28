---
title: "Backup Agent - Restricciones conocidas"
excerpt: "Descubra las restricciones y limitaciones del producto Backup Agent"
updated: 2026-01-28
---

## Objetivo

Este guía detalla las restricciones y limitaciones conocidas del producto Backup Agent que debe conocer antes de utilizar el servicio.

## Restricciones conocidas

### Política de copias de seguridad

- La política de copia de seguridad es restringida, no puede modificarla.
- No puede configurar una copia de seguridad solo en una lista de archivos o carpetas.
- No puede modificar la fecha y hora de activación de las copias de seguridad (esto será objeto de una mejora futura).

### Acceso VSPC

- El usuario que recibe es de solo lectura, no puede realizar modificaciones directamente en la VSPC.

### Vault

- No puede crear vaults adicionales, se crearán automáticamente para garantizar que sus datos no estén alojados en el mismo centro de datos donde se encuentra su servidor Bare Metal.
- No puede cambiar de vault en un agente.

### Limitaciones de los sistemas operativos

- Puede encontrar la lista de sistemas operativos compatibles para el Veeam Agent en [esta dirección](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13).

### Compatibilidad con otros productos de OVHcloud

- En la actualidad, el producto Backup Agent es compatible únicamente con los servidores dedicados, no puede utilizar su agente en otros productos.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).