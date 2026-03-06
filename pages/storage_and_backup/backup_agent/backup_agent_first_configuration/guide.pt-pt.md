---
title: "Backup Agent - Como configurar a sua primeira cópia de segurança"
excerpt: "Saiba como configurar a sua primeira cópia de segurança no seu servidor Bare Metal com o produto Backup Agent a partir da área de cliente OVHcloud"
updated: 2026-03-05
---

## Objetivo

Acabou de encomendar a sua oferta Backup Agent para o seu servidor Bare Metal, descubra como configurar as suas primeiras cópias de segurança.

**Este guia explica como configurar a sua primeira cópia de segurança com o Backup Agent num servidor Bare Metal.**

> [!primary]
>
> Encontre mais informações sobre o produto Backup Agent nesta [página](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Requisitos

- Ter encomendado um serviço Backup Agent no momento da encomenda do seu servidor Bare Metal ou posteriormente através do menu `Backup Agent`{.action} da sua área de cliente.
- Ter iniciado e configurado um sistema operativo no seu servidor Bare Metal.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

> [!warning]
>
> Deve garantir que o seu servidor possa ser alcançado pela nossa infraestrutura Veeam.
> Receberá as informações exatas no seu e-mail de entrega.
>
> Aqui estão as informações a autorizar no seu servidor Bare Metal:
>
> - IP/DNS do servidor: `vspc-cgw1.prod01.eu-west-rbx.backup.ovh.net` ou `vspc-cgw21.prod01.eu-west-rbx.backup.ovh.net`
> - Porta: 6180
>
> Recomendamos vivamente que permita também que o seu servidor possa alcançar outros endereços externos para poder enviar os seus dados para o Vault. Não é necessário autorizar um fluxo de entrada neste contexto.

## Instruções

As etapas para criar uma cópia de segurança para o seu servidor são as seguintes:

- Adicionar o seu servidor ao seu Backup Agent.
- Transferir o agente.
- Instalar o agente no seu servidor.

Uma vez instalado o agente, este receberá a política de cópia de segurança e permitirá realizar as cópias de segurança.

Assim que estas etapas forem concluídas, a sua primeira cópia de segurança será executada automaticamente.

### Adicionar o seu servidor ao seu Backup Agent

Clique [neste link](/links/control-panel/baremetal-backup-agent) para aceder à secção `Backup Agent`{.action} e, de seguida, clique no seu vspc-tenant na secção `Services`{.action}.

![Backup Agent Services](images/01-backup-agent-services-en.png){.thumbnail}

Vá à secção `Agents`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos-en.png){.thumbnail}

> [!primary]
>
> Deverá encontrar na tabela o servidor Bare Metal que selecionou na sua encomenda, com o estado `not_installed`. É normal nesta fase, terá agora de instalar o agente no seu servidor.
>

Clique no botão `Transferir`{.action} no topo da tabela que lista os seus agentes.

![Backup Agent Agents](images/01-backup-agent-agents-en.png){.thumbnail}

Selecione o seu sistema operativo e escolha se deseja transferir o ficheiro de instalação ou utilizar um dos comandos propostos para o obter.

![Backup Agent Step 13](images/01-backup-agent-download-windows-en.png){.thumbnail}

Para instalar o seu agente no seu servidor Bare Metal, clique no separador correspondente ao seu sistema operativo:

> [!tabs]
> Windows
>>
>> Uma vez o ficheiro de instalação no seu servidor Bare Metal, pode executá-lo e seguir o procedimento do software:
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
>> Uma vez instalado, o agente liga-se à nossa infraestrutura para obter a sua política de cópia de segurança:
>>
>> ![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}
>>
>> ![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}
>>
>> Finalmente, uma vez a política de cópia de segurança aplicada, poderá ver o seu agente de cópia de segurança configurado e presente no seu servidor Bare Metal:
>>
>> ![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}
>>
>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> Linux
>> Selecione o seu sistema operativo e escolha se deseja transferir o ficheiro de instalação ou utilizar um dos comandos propostos para o obter.
>>
>> ![Backup Agent Step 14](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Uma vez o ficheiro de instalação no seu servidor, aceda à pasta que o contém e execute o ficheiro da seguinte forma:
>>
>> ```bash
>> sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
>> ```
>>
>> Uma vez a instalação concluída, poderá verificá-la com este comando:
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
>> Poderá então constatar que um elemento ainda não está instalado:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> É normal nesta fase, vamos aplicar uma configuração que permita implantar o Backup Agent com uma política de cópia de segurança.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).
