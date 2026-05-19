---
title: "Backup Agent - Asistente CLI Linux"
excerpt: "Descubra cómo utilizar el script ovh-ba-install.sh proporcionado por OVHcloud para instalar y gestionar el agente de backup Veeam en un servidor Linux"
updated: 2026-04-21
---

## Objetivo

**Esta guía explica cómo utilizar el script `ovh-ba-install.sh` proporcionado por OVHcloud para instalar y gestionar el agente de backup Veeam en su servidor Linux.**

Descubrirá cómo obtener las URL de instalación, lanzar la instalación con un solo comando, navegar por el menú del asistente CLI y utilizar las herramientas de diagnóstico.

## Requisitos

- Disponer de un servicio Backup Agent activo.

<!-- CP-NAV-START:baremetal-backup-agent -->

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

<!-- CP-NAV-END:baremetal-backup-agent -->

### En el servidor

| Elemento | Detalle |
|--------|--------|
| **Sistema** | Linux **compatible** con el agente Veeam para Linux (consulte los [requisitos del sistema Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13) y las [restricciones de Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_restrictions)). |
| **Derechos** | Acceso de **administrador**: los comandos de instalación utilizan generalmente **`sudo`**. |
| **Red** | El servidor debe poder **descargar** el script y el paquete del agente (HTTPS), y **conectar** con la pasarela de backup VSPC (Veeam Service Provider Console) según las reglas de su plan. |
| **Terminal** | Una sesión **SSH** o una consola en el servidor, en modo interactivo para el menú. |

### Vocabulario mínimo

| Comando | Función |
|----------|------|
| **`curl`** | Programa que **descarga** un archivo desde una dirección web (`https://…`). |
| **`sudo`** | "Como administrador" — necesario para instalar software del sistema. |
| **`bash`** | Intérprete que **ejecuta** el script que se le indica. |

## Procedimiento

### Presentación del script ovh-ba-install.sh

El script **`ovh-ba-install.sh`** es un **asistente en línea de comandos**. Con este script, puede:

- **Instalar** el agente de **gestión** Veeam (Management Agent) a partir de la URL del paquete disponible en su área de cliente;
- **Instalar** el comando global **`ovhbackupagent`** en el servidor, para volver a abrir el mismo menú en cualquier momento (`sudo ovhbackupagent`);
- **Mostrar** un menú en modo texto: estado de los agentes, interfaz Veeam, diagnósticos, ayuda;
- **Diagnosticar** los problemas (conexión a la infraestructura, registros, archivo para el soporte);
- **Desinstalar** los paquetes Veeam y, si lo desea, el acceso directo **`ovhbackupagent`** (**Uninstall Wizard**).

> [!warning]
>
> El script **facilita la instalación y el seguimiento** en la máquina; no sustituye la configuración de sus backups en la interfaz Veeam Agent. La **baja del servicio** se realiza en el **área de cliente de OVHcloud**, no a través de este script.
>

### Instalación

#### Paso 1 — Obtener las URL de instalación

En el área de cliente de OVHcloud, abra su [Backup Agent](/links/control-panel/baremetal-backup-agent), vaya a la pestaña `Agents`{.action} y haga clic en el botón `Descargar`{.action}. En la ventana que se abre, seleccione **Linux** para mostrar el comando con las dos URL (script y paquete Linux).

![Descargar el agente — comandos de instalación Linux](images/01-backup-agent-download-linux-fr.png){.thumbnail}

> [!primary]
>
> Copie y pegue cada una de las dos URL por separado en un archivo de texto antes de conectarse por SSH.
>

#### Paso 2 — Conectarse al servidor

Conéctese por SSH al servidor con un usuario autorizado a utilizar `sudo`.

```bash
ssh <user>@<IPouDNSdevotreserveur>
```

#### Paso 3 — Lanzar la instalación

Sustituya `URL_DEL_SCRIPT` (en 2 ocasiones) y `URL_DEL_PAQUETE_AGENTE` en el comando siguiente por sus URL y ejecútelo.

```bash
curl -sSL "URL_DEL_SCRIPT" | sudo bash -s -- --setup "URL_DEL_PAQUETE_AGENTE" --script-url "URL_DEL_SCRIPT"
```

Ejemplo:

```bash
curl -sSL "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh" | sudo bash -s -- --setup "https://s3.xxx.xxx.cloud.ovh.net/xxxx/LinuxAgentPackages.vspc_tenant_xxxx.sh?X-Amz-Algorithm=xxx&X-Amz-Credential=xxx&X-Amz-Date=2xxx&X-Amz-Expires=xxx&X-Amz-SignedHeaders=xxx&X-Amz-Signature=xxx" --script-url "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh"
```

#### Paso 4 — Pantalla de bienvenida

Lea la introducción y confirme con **Intro** para iniciar la instalación.

```console
 ▗▄▖ ▗▖  ▗▖▗▖ ▗▖ ▗▄▄▖▗▖    ▗▄▖ ▗▖ ▗▖▗▄▄▄     ▗▖  ▗▖    ▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖ ▗▄▖ ▗▖  ▗▖
▐▌ ▐▌▐▌  ▐▌▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █     ▝▚▞▘     ▐▌  ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▛▚▞▜▌
▐▌ ▐▌▐▌  ▐▌▐▛▀▜▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █      ▐▌      ▐▌  ▐▌▐▛▀▀▘▐▛▀▀▘▐▛▀▜▌▐▌  ▐▌
▝▚▄▞▘ ▝▚▞▘ ▐▌ ▐▌▝▚▄▄▖▐▙▄▄▖▝▚▄▞▘▝▚▄▞▘▐▙▄▄▀    ▗▞▘▝▚▖     ▝▚▞▘ ▐▙▄▄▖▐▙▄▄▖▐▌ ▐▌▐▌  ▐▌




      Backup Agent — CLI Assistant
  ─────────────────────────────────────

  Backup Agent — guided first-time setup

This setup will, in order:
  1) Install the **Veeam Management Agent** from the link you were given.
  2) Install the **ovhbackupagent** command on this server (under /usr/local/bin).
     That command is your permanent shortcut to this menu — you will not need
     to download this script again for everyday use.
  3) Show an installation summary, wait 15 seconds, then open **Agent status** to follow Backup Agent deployment.

The Veeam Backup Agent itself is deployed by our infrastructure after the
Management Agent connects; that step can take a few minutes.

Press Enter to start the installation, or Ctrl+C to cancel...
```

#### Paso 5 — Instalación en curso

Espere a que finalicen los pasos de Veeam; el script instala a continuación el comando **`ovhbackupagent`**.

#### Paso 6 — Resumen y estado de los agentes

Lea el **resumen** que se muestra durante **15 segundos** y observe la pantalla **Agent status**. El **Backup Agent** puede aparecer pasados unos minutos (despliegue por parte de la infraestructura).

```console
Installation summary

[OK] The Management Agent was installed successfully.
[OK] The **ovhbackupagent** command is now available (example: sudo ovhbackupagent).

[Info] The **Backup Agent** will be deployed shortly by our infrastructure (often within a few minutes).
Next, the **Agent status** screen opens so you can follow **`veeamconsoleconfig -s`** until the Backup Agent appears.

Main menu - reminder (available again after Agent status)

**A** - Agent status: Management / Backup Agent state (this screen refreshes every few seconds).
**V** - Open the Veeam UI on the server (once the Backup Agent is installed).
**D** - Diagnostics: VSPC connectivity test, support bundle, log issue analyzer, force-stop stuck jobs.
**I** - Install or reinstall a Management Agent package from a file or URL (advanced).
**U** - Uninstall Veeam agent packages from this server (with confirmations).
**H** - Help and README.
**Q** - Exit the assistant.

[Info] Waiting 15 seconds, then opening Agent status...
```

Tras los 15 segundos, la pantalla **Agent status** se muestra automáticamente:

```console
Agent status (veeamconsoleconfig -s)

[Info] Retrieving Veeam status (up to 45s right after install)...
Management agent
    Connection state       : Connected
    Cloud gateway          : vspc-cgw1.prod01.eu-west-rbx.backup.ovhcloud.com:6180
    Connection account     : vspc-tenant-604276/vspc-tenant-cc1-604276
Backup agent
    Version                : 13.0.1.404
    Driver version         : 13.0.1.404
    Status                 : Running

Your agents are running well.

Auto-refresh in 5s... Press Enter to return to menu.
```

Pulse **Intro** para acceder al **menú principal**.

### Volver a abrir el asistente

Para volver a abrir el asistente más adelante:

```bash
sudo ovhbackupagent
```

Si el comando no se encuentra, pruebe `sudo /usr/local/bin/ovhbackupagent` o compruebe que `/usr/local/bin` está en su `PATH`.

### Menú principal

```console
 ▗▄▖ ▗▖  ▗▖▗▖ ▗▖ ▗▄▄▖▗▖    ▗▄▖ ▗▖ ▗▖▗▄▄▄     ▗▖  ▗▖    ▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖ ▗▄▖ ▗▖  ▗▖
▐▌ ▐▌▐▌  ▐▌▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █     ▝▚▞▘     ▐▌  ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▛▚▞▜▌
▐▌ ▐▌▐▌  ▐▌▐▛▀▜▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █      ▐▌      ▐▌  ▐▌▐▛▀▀▘▐▛▀▀▘▐▛▀▜▌▐▌  ▐▌
▝▚▄▞▘ ▝▚▞▘ ▐▌ ▐▌▝▚▄▄▖▐▙▄▄▖▝▚▄▞▘▝▚▄▞▘▐▙▄▄▀    ▗▞▘▝▚▖     ▝▚▞▘ ▐▙▄▄▖▐▙▄▄▖▐▌ ▐▌▐▌  ▐▌




      Backup Agent — CLI Assistant
  ─────────────────────────────────────

  ┌──────────────────────────────────────────────────────────────────────────┐
     Management Agent:   OK     Backup Agent:   OK     Last backup:  N/A 
  └──────────────────────────────────────────────────────────────────────────┘

  A  Agent status (veeamconsoleconfig -s)
  V  Open Veeam interface (veeam command)
  D  Diagnostic (test connection, support bundle, issue analyzer, job force stop)
  I  Install Management Agent (only if you want to reinstall it)
  U  Uninstall Wizard
  H  Help / README
  Q  Quit

  Your choice (A/V/D/I/U/H/Q):
```

La línea de estado en la parte superior del menú indica **OK/KO** para los paquetes **Management** (`veeamma`) y **Backup** (`veeam`, `veeam-libs`), y un indicador relacionado con el último job de backup.

| Tecla | Acción |
|--------|------|
| **A** | Estado de los agentes (actualización automática). |
| **V** | Abrir la interfaz Veeam en el servidor para controlar sus backups y restauraciones (si el Backup Agent está listo). |
| **D** | Submenú **Diagnostic**: test VSPC, archivo para el soporte, análisis de registros, parada forzada de un backup bloqueado. |
| **I** | Reinstalar el Management Agent a partir de un archivo o una URL (caso avanzado). |
| **U** | **Uninstall Wizard**: desinstalación de los paquetes Veeam + opción para eliminar **`ovhbackupagent`**. |
| **H** | Ayuda / README integrado. |
| **Q** | Salir. |

### Resolución de problemas y diagnósticos

| Teclas | Acción |
|---------|--------|
| **`D`** y luego **`T`** | Test de conexión hacia la pasarela VSPC. |
| **`D`** y luego **`B`** | Generación de un **archivo** (logs + información del sistema) para enviar al soporte. |
| **`D`** y luego **`I`** | **Análisis** de los mensajes conocidos en los registros (`agent.log`, `veeaminstaller.log`, etc.). |
| **`D`** y luego **`J`** | Herramienta de **parada forzada** de una sesión de backup (usar con precaución). |

Para profundizar en sus diagnósticos, consulte nuestra [guía de diagnóstico y resolución de problemas de Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting).

### Desinstalación — Uninstall Wizard (tecla **U**)

- Eliminación de su agente, según su familia de SO (**yum/dnf**, **zypper**, **apt-get**).
- Pregunta opcional para eliminar **`/usr/local/bin/ovhbackupagent`** y el README asociado.

> [!warning]
>
> Desinstalar los agentes **no da de baja** su plan Backup Agent. El servicio permanece activo en OVHcloud mientras no lo haya dado de baja en el **área de cliente**. Podrá **reinstalar** los agentes más adelante desde su interfaz de backup.
>

## FAQ

**¿Puedo ejecutar el script sin `sudo`?**  
No: se necesitan acciones del sistema que requieren derechos de administrador (`sudo`).

**El menú se cierra justo después de la instalación en pipe, ¿qué hacer?**  
Vuelva a abrirlo con `sudo ovhbackupagent`.

**¿Dónde está el script una vez instalado como comando?**  
En general: **`/usr/local/bin/ovhbackupagent`**.

**Los agentes ya están instalados, ¿cómo instalar solo el asistente?**  
Utilice `sudo bash ovh-ba-install.sh --setup-local`.

**He vuelto a descargar el script, ¿qué ocurre si lo ejecuto sin argumentos?**  
Una breve pantalla de bienvenida comprueba si **`ovhbackupagent`** sigue presente y si el Backup Agent está detectado, y propone si es necesario reinstalar únicamente el acceso directo.

**¿Cómo mostrar la ayuda integrada?**  
Utilice `sudo bash ovh-ba-install.sh --readme`.

## Más información

Una vez que sus agentes estén operativos, configure sus backups a través de la interfaz Veeam Agent en el servidor (tecla **`V`** en el asistente).

- [Configurar su primer backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)
- [Gestionar sus backups y restauraciones](/pages/storage_and_backup/backup_agent/backup_agent_backup_restore)
- [Diagnóstico y resolución de problemas](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting)

Interactúe con nuestra [comunidad de usuarios](/links/community).
