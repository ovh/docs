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

- **`curl`**: programa que **descarga** un archivo desde una dirección web (`https://…`).
- **`sudo`**: "como administrador" — necesario para instalar software del sistema.
- **`bash`**: intérprete que **ejecuta** el script que se le indica.

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

### Obtener las URL de instalación

En el área de cliente de OVHcloud, abra su [Backup Agent](/links/control-panel/baremetal-backup-agent), vaya a la pestaña `Agents`{.action} y haga clic en el botón `Descargar`{.action}. En la ventana que se abre, seleccione **Linux** para mostrar el comando con las dos URL (script y paquete Linux).

![Descargar el agente — comandos de instalación Linux](images/01-backup-agent-download-linux-fr.png){.thumbnail}

> [!primary]
>
> Copie y pegue cada una de las dos URL por separado en un archivo de texto antes de conectarse por SSH.
>

### Una sola línea para instalar su agente y su asistente

Mediante la línea de comandos que le proporcionamos, puede instalar el agente y el asistente al mismo tiempo. Sustituya `URL_DEL_SCRIPT` (en 2 ocasiones) y `URL_DEL_PAQUETE_AGENTE` por los enlaces copiados anteriormente.

```bash
curl -sSL "URL_DEL_SCRIPT" | sudo bash -s -- --setup "URL_DEL_PAQUETE_AGENTE" --script-url "URL_DEL_SCRIPT"
```

Ejemplo:

```bash
curl -sSL "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh" | sudo bash -s -- --setup "https://s3.xxx.xxx.cloud.ovh.net/xxxx/LinuxAgentPackages.vspc_tenant_xxxx.sh?X-Amz-Algorithm=xxx&X-Amz-Credential=xxx&X-Amz-Date=2xxx&X-Amz-Expires=xxx&X-Amz-SignedHeaders=xxx&X-Amz-Signature=xxx" --script-url "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh"
```

### Después de una instalación correcta

1. Un **resumen** se muestra durante **15 segundos** (lo que se ha realizado, función del menú, recordatorio de las teclas).
2. La pantalla **Agent status** se abre para seguir el estado de Veeam (`veeamconsoleconfig -s`), con actualización automática.
3. **Intro** vuelve al **menú principal**.

Para volver a abrir el asistente más adelante:

```bash
sudo ovhbackupagent
```

(Si el comando no se encuentra, pruebe `sudo /usr/local/bin/ovhbackupagent` o compruebe que `/usr/local/bin` está en su `PATH`.)

### Otros comandos útiles

| Necesidad | Comando (ejemplo) |
|--------|---------------------|
| Agentes ya instalados, instalar **solo** `ovhbackupagent` + menú | `sudo bash ovh-ba-install.sh --setup-local` |
| Ayuda / README en el terminal | `sudo bash ovh-ba-install.sh --readme` |

### ¿Ha vuelto a descargar el script?

Si ejecuta el script **sin argumentos** con un terminal interactivo (`sudo bash ovh-ba-install.sh`), una breve **pantalla de bienvenida** comprueba si **`ovhbackupagent`** sigue presente y si el Backup Agent está detectado, y propone si es necesario **reinstalar únicamente** el acceso directo.

## Ejemplo paso a paso: primera instalación

**Escenario**: nuevo servidor Linux, dispone de las dos URL (script y paquete Linux) copiadas desde la ventana **Descargar el agente** de su área de cliente.

1\. Conéctese por SSH al servidor con un usuario autorizado a utilizar `sudo`.

```bash
ssh <user>@<IP-o-DNS-de-su-servidor>
```

2\. Sustituya `URL_DEL_SCRIPT` (en 2 ocasiones) y `URL_DEL_PAQUETE_AGENTE` en el comando siguiente por sus URL y ejecútelo.

```bash
curl -sSL "URL_DEL_SCRIPT" | sudo bash -s -- --setup "URL_DEL_PAQUETE_AGENTE" --script-url "URL_DEL_SCRIPT"
```

3\. Lea la introducción, confirme con **Intro** para iniciar la instalación.

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

4\. Espere a que finalicen los pasos de Veeam; el script instala a continuación **`ovhbackupagent`**.

5\. Lea el **resumen** durante 15 segundos y observe el **Agent status**; el **Backup Agent** puede aparecer pasados unos minutos (despliegue por parte de la infraestructura).

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

6\. Pulse **Intro** para acceder al menú; utilice **`A`** para volver a ver el estado, **`D`** para los diagnósticos si algo se bloquea.

## Menú principal

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

| Tecla | Función |
|--------|------|
| **A** | Estado de los agentes (actualización automática). |
| **V** | Abrir la interfaz Veeam en el servidor para controlar sus backups y restauraciones (si el Backup Agent está listo). |
| **D** | Submenú **Diagnostic**: test VSPC, archivo para el soporte, análisis de registros, parada forzada de un backup bloqueado. |
| **I** | Reinstalar el Management Agent a partir de un archivo o una URL (caso avanzado). |
| **U** | **Uninstall Wizard**: desinstalación de los paquetes Veeam + opción para eliminar **`ovhbackupagent`**. |
| **H** | Ayuda / README integrado. |
| **Q** | Salir. |

La línea de estado en la parte superior del menú indica **OK/KO** para los paquetes **Management** (`veeamma`) y **Backup** (`veeam`, `veeam-libs`), y un indicador relacionado con el último job de backup.

## Resolución de problemas y diagnósticos

- **`D`** y luego **`T`**: test de conexión hacia la pasarela VSPC.
- **`D`** y luego **`B`**: generación de un **archivo** (logs + información del sistema) para enviar al soporte.
- **`D`** y luego **`I`**: **análisis** de los mensajes conocidos en los registros (`agent.log`, `veeaminstaller.log`, etc.).
- **`D`** y luego **`J`**: herramienta de **parada forzada** de una sesión de backup (usar con precaución).

Para profundizar en sus diagnósticos, consulte nuestra [guía de diagnóstico y resolución de problemas de Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting).

## Asistente de desinstalación — Uninstall Wizard (tecla **U**)

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
Puede volver a abrirlo con:

```bash
sudo ovhbackupagent
```

**¿Dónde está el script una vez instalado como comando?**  
En general: **`/usr/local/bin/ovhbackupagent`**.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
