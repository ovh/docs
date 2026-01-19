---
title: "Backup Agent - Cómo configurar su primera copia de seguridad"
excerpt: "Cómo configurar su primera copia de seguridad en su servidor Bare Metal con el producto Backup Agent"
updated: 2026-01-09
---

## Objetivo

Acaba de pedir su oferta Backup Agent para su servidor Bare Metal, descubra cómo configurar sus primeras copias de seguridad.

## Requisitos

- Estar conectado a la [área de cliente de OVHcloud](/links/manager).
- Haber pedido un servicio Backup Agent en el momento de la compra de su servidor Bare Metal o posteriormente a través del menú `Agente de copia de seguridad`{.action} de su espacio cliente.
- Haber iniciado y configurado un sistema operativo en su servidor Bare Metal.

## Procedimiento

Para poder configurar su primera copia de seguridad, debe instalar el agente en su servidor Bare Metal.

El funcionamiento es el siguiente:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Una vez instalado el agente, este recibirá la política de copia de seguridad y permitirá realizar las copias de seguridad.

Para instalar su agente en su servidor Bare Metal, siga el procedimiento siguiente según su sistema operativo:

### Windows

Inicie sesión en el [área de cliente de OVHcloud](/links/manager), vaya a la sección `Bare Metal Cloud`{.action} y seleccione `Agente de copia de seguridad`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Haga clic en su vspc-tenant, en la sección `Servicios`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Vaya a la sección `Agentes`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Haga clic en el botón `Descargar`{.action} en la parte superior de la tabla que enumera sus agentes.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Seleccione su sistema operativo y elija si quiere descargar el archivo de instalación o usar uno de los comandos propuestos para recuperarlo.

![Backup Agent Step 13](images/01-backup-agent-step13.png){.thumbnail}

Una vez que el archivo de instalación esté en su Bare Metal, puede ejecutarlo y seguir el procedimiento del software:

![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}

![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}

![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}

![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}

![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}

Una vez instalado, podrá ver su agente conectarse a nuestra infraestructura para recuperar su política de copia de seguridad:

![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}

![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}

Finalmente, una vez que la política de copia de seguridad se haya aplicado, podrá ver su agente de copia de seguridad configurado y presente en su servidor Baremetal:

![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}

![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}

Por defecto, sus copias de seguridad se inician entre las 22:00 y las 06:00, pero puede lanzar copias de seguridad manualmente haciendo clic en el botón `Backup Now`{.action}.

### Linux

Inicie sesión en el [área de cliente de OVHcloud](/links/manager), vaya a la sección `Bare Metal Cloud`{.action} y seleccione `Agente de copia de seguridad`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Haga clic en su vspc-tenant, en la sección `Servicios`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Vaya a la sección `Agentes`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Haga clic en el botón `Descargar`{.action} en la parte superior de la tabla que enumera sus agentes.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Seleccione su sistema operativo y elija si quiere descargar el archivo de instalación o usar uno de los comandos propuestos para recuperarlo.

![Backup Agent Step 14](images/01-backup-agent-step14.png){.thumbnail}

Una vez que el archivo de instalación esté en su servidor, vaya al directorio que lo contiene y ejecute el archivo de la siguiente manera:

```bash
sudo ./LinuxAgentPackages.<NOMDEVOTRECOMPANY>.sh
```

Una vez completada la instalación, podrá verificarla con este comando:

```bash
sudo veeamconsoleconfig -s

Management agent
    Connection state       : Connected
    Cloud gateway          : <OVHDOMAIN>:6180
    Connection account     : <UTILISATEUR>
```

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).