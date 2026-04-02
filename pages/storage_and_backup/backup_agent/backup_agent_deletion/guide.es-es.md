---
title: "Backup Agent - Procedimiento de eliminación"
excerpt: "Descubra cómo eliminar un agente, un vault o un tenant Backup Agent"
updated: 2026-02-03
---

## Objetivo

Este guía le explica cómo eliminar diferentes elementos de su servicio Backup Agent: los agentes, los vaults y los tenants.

## Requisitos

- Tener un servicio Backup Agent activo.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Procedimiento

### Eliminar un agente

> [!primary]
>
> **Comportamiento según el uso del agente:**
>
> - **Si el agente no se ha utilizado para transferir datos** : Puede eliminarse inmediatamente. Se desactivará en primer lugar, y luego se eliminará.
> - **Si se han transferido datos** : Aplicamos una suspensión del agente en estado "Desactivado" durante 14 días, el tiempo necesario para que se puedan eliminar los datos inmutables.

> [!warning]
>
> Una vez que su agente esté suspendido, ya no puede crear un nuevo agente en el mismo servidor, debe esperar a que el primer agente se elimine.

Vaya a la sección `Agents`{.action} y haga clic en el botón de eliminación para el agente correspondiente.

Confirme la eliminación del agente en la ventana que aparece.

![Backup Agent Delete Agent](images/01-backup-agent-delete-agent.png){.thumbnail}

### Eliminar un vault

> [!warning]
>
> Un vault no puede eliminarse si contiene datos. Si desea eliminar un vault, debe [contactar al soporte](/links/support-contact), quien realizará comprobaciones con usted antes de iniciar la eliminación.

Vaya a la sección `Vaults`{.action} y haga clic en el botón de eliminación para el vault correspondiente.

Confirme la eliminación en la ventana que aparece.

![Backup Agent Delete Vault](images/01-backup-agent-delete-vault.png){.thumbnail}

### Eliminar un tenant

> [!warning]
>
> Por el momento, un tenant no puede eliminarse de forma autónoma. Si desea eliminar un tenant, debe [contactar al soporte](/links/support-contact). Tomaremos en cuenta su solicitud.

Seleccione su tenant y haga clic en el botón de eliminación.

Confirme la eliminación en la ventana que aparece.

![Backup Agent Delete Tenant](images/01-backup-agent-delete-tenant.png){.thumbnail}

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).