---
title: "Backup Agent - Como configurar a sua primeira cópia de segurança"
excerpt: "Como configurar a sua primeira cópia de segurança no seu servidor Bare Metal com o produto Backup Agent"
updated: 2026-01-23
---

## Objetivo

Acabou de encomendar a sua oferta Backup Agent para o seu servidor Bare Metal, descubra como configurar as suas primeiras cópias de segurança.

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](/links/manager).
- Ter encomendado um serviço Backup Agent no momento da encomenda do seu servidor Bare Metal ou posteriormente através do menu `Agente de Backup`{.action} do seu espaço cliente.
- Ter iniciado e configurado um sistema operativo no seu servidor Bare Metal.

## Instruções

Se desejar mais informações sobre o funcionamento do produto Backup Agent, consulte o nosso guia "[Backup Agent - Apresentação do produto](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation)" para mais informações.

Para criar uma cópia de segurança para o seu servidor, isto consiste em:
* Adicionar o seu servidor ao seu Backup Agent.
* Transferir o agente.
* Instalar o agente no seu servidor.

Depois de instalado o agente, este receberá a política de cópia de segurança e permitirá efectuar as cópias de segurança.

Depois de concluídos todos estes passos, será efectuada a sua primeira cópia de segurança.

## Adicionar o seu servidor ao seu Backup Agent

Ligue-se à sua [Área de Cliente OVHcloud](/links/manager), vá para a seção `Bare Metal Cloud`{.action} e selecione `Agente de Backup`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Clique no seu vspc-tenant, na secção `Serviços`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Vá à secção `Agentes`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

> [!primary]
>
> Deveria encontrar o servidor Bare Metal que selecionou no seu pedido na tabela, com o estado "not_installed". Isto é normal, só precisa de instalar o agente no seu servidor.
>

Clique no botão `Transferir`{.action} no topo da tabela listando os seus agentes.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Selecione o seu sistema operativo e escolha entre descarregar o ficheiro de instalação ou utilizar um dos comandos propostos para o obter.

![Backup Agent Download Windows](images/01-backup-agent-download-windows-en.png){.thumbnail}

Para instalar o seu agente no seu servidor Bare Metal, siga a seguinte metodologia consoante o seu sistema operativo:

> [!tabs]
> ### Windows
>>
>> Depois de ter o ficheiro de instalação no seu Bare Metal, pode executá-lo e seguir a procedimento do software:

![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}

![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}

![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}

![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}

![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}

Depois de instalado, poderá ver o seu agente a ligar-se à nossa infraestrutura para descarregar a sua política de cópia de segurança:

![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}

![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}

Por fim, depois de a política de cópia de segurança ser aceite, poderá ver o seu agente de cópia de segurança configurado e presente no seu servidor Baremetal:

![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}

>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> ### Linux
>> Selecione o seu sistema operativo e escolha entre descarregar o ficheiro de instalação ou utilizar um dos comandos propostos para o obter.
>>
>> ![Backup Agent Download Linux](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Depois de ter o ficheiro de instalação no seu servidor, aceda ao diretório onde se encontra e execute o ficheiro da seguinte forma:

```bash
sudo ./LinuxAgentPackages.<NOMDEVOTRECOMPANY>.sh
```

Depois de concluída a instalação, poderá verificar com este comando:

>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <UTILISATEUR>
>> ```
>> 
>> Pode ver que um elemento ainda não está instalado:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> Isto é completamente normal, aplicaremos uma configuração que permite implementar o Backup Agent com uma política de cópia de segurança.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).