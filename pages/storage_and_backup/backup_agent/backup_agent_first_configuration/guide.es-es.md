---
title: "Backup Agent - Cómo configurar su primera copia de seguridad"
excerpt: "Cómo configurar su primera copia de seguridad en su servidor Bare Metal con el producto Backup Agent"
updated: 2026-02-03
---

## Objetivo

Acaba de pedir la oferta Backup Agent para su servidor Bare Metal, descubra cómo configurar sus primeras copias de seguridad.

> [!primary]
> 
> Encuentre más información sobre el producto Backup Agent en [esta página](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Requisitos

- Estar conectado a la [área de cliente de OVHcloud](/links/manager).
- Haber pedido un servicio Backup Agent en el momento de la compra de su servidor Bare Metal o posteriormente a través del menú `Backup Agent`{.action} de su espacio cliente.
- Haber iniciado y configurado un sistema operativo en su servidor Bare Metal.

> [!warning]
>
> Debe asegurarse de que su servidor pueda ser alcanzado por nuestra infraestructura Veeam.
> Aquí está la información que debe autorizar en su servidor Bare Metal:
>
> - IP/DNS del servidor: `vspc-cgw1.stg01.eu-west-rbx.backup.ovh.net`
> - Puerto: 6180
>
> También le recomendamos encarecidamente que permita que su servidor pueda alcanzar otras direcciones externas para poder enviar sus datos al Vault. No es necesario autorizar un flujo entrante en este contexto.


## Procedimiento

Los pasos para crear una copia de seguridad para su servidor son los siguientes:

- Añadir su servidor en su Backup Agent.
- Descargar el agente.
- Instalar el agente en su servidor.

Una vez instalado el agente, este recibirá la política de copia de seguridad y permitirá realizar las copias de seguridad.

Una vez que todas estas etapas se hayan realizado, su primera copia de seguridad será realizada.

## Añadir su servidor en su Backup Agent

Conéctese a su [área de cliente de OVHcloud](/links/manager) y vaya a la sección `Backup Agent`{.action}.

![Backup Agent Menu](images/01-backup-agent-menu-en.png){.thumbnail}

Haga clic en su vspc-tenant, en la sección `Servicios`{.action}.

![Backup Agent Services](images/01-backup-agent-services-en.png){.thumbnail}

Vaya a la sección `Agentes`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos-en.png){.thumbnail}

> [!primary]
>
> Debería encontrar en la tabla el servidor Bare Metal que seleccionó en su pedido, con el estado `not_installed`. Es normal en este momento, ahora debe instalar el agente en su servidor.
>

Haga clic en el botón `Descargar`{.action} en la parte superior de la tabla que enumera sus agentes.

![Backup Agent Agents](images/01-backup-agent-agents-en.png){.thumbnail}

Seleccione su sistema operativo y elija si quiere descargar el archivo de instalación o usar una de las comandas propuestas para recuperarlo.

![Backup Agent Step 13](images/01-backup-agent-download-windows-en.png){.thumbnail}

Para instalar su agente en su servidor Bare Metal, haga clic en la pestaña correspondiente a su sistema operativo:

> [!tabs]
> Windows
>>
>> Una vez que el archivo de instalación esté en su servidor Bare Metal, puede ejecutarlo y seguir el procedimiento del software:
>>
>> ![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}
>>
>> ![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}
>>
>> ![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}
>>
>> ![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}
>>
>> ![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}
>>
>> Una vez instalado, podrá ver que su agente se conecta a nuestra infraestructura para recuperar su política de copia de seguridad:
>>
>> ![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}
>>
>> ![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}
>>
>> Finalmente, una vez que la política de copia de seguridad se haya aplicado, podrá ver que su agente de copia de seguridad está configurado y presente en su servidor Bare Metal:
>>
>> ![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}
>>
>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> Linux
>> Seleccione su sistema operativo y elija si quiere descargar el archivo de instalación o usar una de las comandas propuestas para recuperarlo.
>>
>> ![Backup Agent Step 14](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Una vez que el archivo de instalación esté en su servidor, vaya al directorio que lo contiene y ejecute el archivo de la siguiente manera:
>>
>> ```bash
>> sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
>> ```
>>
>> Una vez completada la instalación, puede verificarla con este comando:
>>
>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <UTILISATEUR>
>> ```
>> 
>> Puede ver que un elemento aún no está instalado:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> Es normal en este momento, vamos a aplicar una configuración que permita desplegar el Backup Agent con una política de copia de seguridad.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).