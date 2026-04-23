---
title: "Backup Agent - Assistente CLI Linux"
excerpt: "Saiba como utilizar o script ovh-ba-install.sh fornecido pela OVHcloud para instalar e gerir o agente de cópia de segurança Veeam num servidor Linux"
updated: 2026-04-21
---

## Objetivo

**Este guia explica como utilizar o script `ovh-ba-install.sh` fornecido pela OVHcloud para instalar e gerir o agente de cópia de segurança Veeam no seu servidor Linux.**

Vai descobrir como obter os URL de instalação, iniciar a instalação com um único comando, navegar no menu do assistente CLI e utilizar as ferramentas de diagnóstico.

## Requisitos

- Dispor de um serviço Backup Agent ativo.

<!-- CP-NAV-START:baremetal-backup-agent -->

### Acesso à área de cliente OVHcloud

- **Link direto:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

<!-- CP-NAV-END:baremetal-backup-agent -->

### Do lado do servidor

| Elemento | Detalhe |
|--------|--------|
| **Sistema** | Linux **compatível** com o agente Veeam para Linux (consulte os [requisitos de sistema Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13) e as [restrições Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_restrictions)). |
| **Permissões** | Acesso **administrador**: os comandos de instalação utilizam geralmente **`sudo`**. |
| **Rede** | O servidor deve poder **descarregar** o script e o pacote do agente (HTTPS), e **contactar** o gateway de cópia de segurança VSPC (Veeam Service Provider Console) de acordo com as regras da sua oferta. |
| **Terminal** | Uma sessão **SSH** ou uma consola no servidor, em modo interativo para o menu. |

### Vocabulário mínimo

| Comando | Função |
|----------|------|
| **`curl`** | Programa que **descarrega** um ficheiro a partir de um endereço web (`https://…`). |
| **`sudo`** | "Como administrador" — necessário para instalar software de sistema. |
| **`bash`** | Interpretador que **executa** o script que lhe é fornecido. |

## Instruções

### Apresentação do script ovh-ba-install.sh

O script **`ovh-ba-install.sh`** é um **assistente em linha de comandos**. Com este script, pode:

- **Instalar** o agente de **gestão** Veeam (Management Agent) a partir do URL do pacote disponível na sua área de cliente;
- **Instalar** o comando global **`ovhbackupagent`** no servidor, para reabrir o mesmo menu a qualquer momento (`sudo ovhbackupagent`);
- **Apresentar** um menu de texto: estado dos agentes, interface Veeam, diagnósticos, ajuda;
- **Diagnosticar** problemas (ligação à infraestrutura, registos, arquivo para o suporte);
- **Desinstalar** os pacotes Veeam e, se o desejar, o atalho **`ovhbackupagent`** (**Uninstall Wizard**).

> [!warning]
>
> O script **facilita a instalação e o acompanhamento** na máquina; não substitui a configuração das suas cópias de segurança na interface Veeam Agent. A **rescisão do serviço** é feita na **área de cliente OVHcloud**, e não através deste script.
>

### Instalação

#### Etapa 1 — Obter os URL de instalação

Na área de cliente OVHcloud, abra o seu [Backup Agent](/links/control-panel/baremetal-backup-agent), aceda ao separador `Agents`{.action} e clique no botão `Descarregar`{.action}. Na janela que se abre, selecione **Linux** para apresentar o comando que contém os dois URL (script e pacote Linux).

![Descarregar o agente — comandos de instalação Linux](images/01-backup-agent-download-linux-fr.png){.thumbnail}

> [!primary]
>
> Copie e cole cada um dos dois URL separadamente num ficheiro de texto antes de se ligar por SSH.
>

#### Etapa 2 — Ligar-se ao servidor

Ligue-se por SSH ao servidor com um utilizador autorizado a utilizar `sudo`.

```bash
ssh <user>@<IPouDNSdevotreserveur>
```

#### Etapa 3 — Iniciar a instalação

Substitua `URL_DO_SCRIPT` (2 vezes) e `URL_DO_PACOTE_AGENTE` no comando abaixo pelos seus URL e, em seguida, execute-o.

```bash
curl -sSL "URL_DO_SCRIPT" | sudo bash -s -- --setup "URL_DO_PACOTE_AGENTE" --script-url "URL_DO_SCRIPT"
```

Exemplo:

```bash
curl -sSL "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh" | sudo bash -s -- --setup "https://s3.xxx.xxx.cloud.ovh.net/xxxx/LinuxAgentPackages.vspc_tenant_xxxx.sh?X-Amz-Algorithm=xxx&X-Amz-Credential=xxx&X-Amz-Date=2xxx&X-Amz-Expires=xxx&X-Amz-SignedHeaders=xxx&X-Amz-Signature=xxx" --script-url "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh"
```

#### Etapa 4 — Ecrã de boas-vindas

Leia a introdução e valide com **Enter** para iniciar a instalação.

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

#### Etapa 5 — Instalação em curso

Aguarde o final das etapas Veeam; o script instala em seguida o comando **`ovhbackupagent`**.

#### Etapa 6 — Resumo e estado dos agentes

Leia o **resumo** apresentado durante **15 segundos** e, em seguida, observe o ecrã **Agent status**. O **Backup Agent** pode aparecer após alguns minutos (implementação do lado da infraestrutura).

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

Após os 15 segundos, o ecrã **Agent status** é apresentado automaticamente:

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

Prima **Enter** para aceder ao **menu principal**.

### Reabrir o assistente

Para reabrir o assistente mais tarde:

```bash
sudo ovhbackupagent
```

Se o comando não for encontrado, tente `sudo /usr/local/bin/ovhbackupagent` ou verifique que `/usr/local/bin` está no seu `PATH`.

### Menu principal

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

A linha de estado no topo do menu indica **OK/KO** para os pacotes **Management** (`veeamma`) e **Backup** (`veeam`, `veeam-libs`), e um indicador relativo à última tarefa de cópia de segurança.

| Tecla | Ação |
|--------|------|
| **A** | Estado dos agentes (atualização automática). |
| **V** | Abrir a interface Veeam no servidor para controlar as suas cópias de segurança e restauros (se o Backup Agent estiver pronto). |
| **D** | Submenu **Diagnostic**: teste VSPC, arquivo para o suporte, análise dos registos, paragem forçada de uma cópia de segurança bloqueada. |
| **I** | Reinstalar o Management Agent a partir de um ficheiro ou de um URL (caso avançado). |
| **U** | **Uninstall Wizard**: desinstalação dos pacotes Veeam + opção para remover **`ovhbackupagent`**. |
| **H** | Ajuda / README integrado. |
| **Q** | Sair. |

### Resolução de problemas e diagnósticos

| Teclas | Ação |
|---------|--------|
| **`D`** e depois **`T`** | Teste de ligação ao gateway VSPC. |
| **`D`** e depois **`B`** | Geração de um **arquivo** (registos + informações do sistema) para enviar ao suporte. |
| **`D`** e depois **`I`** | **Análise** das mensagens conhecidas nos registos (`agent.log`, `veeaminstaller.log`, etc.). |
| **`D`** e depois **`J`** | Ferramenta de **paragem forçada** de uma sessão de cópia de segurança (a utilizar com prudência). |

Para aprofundar os seus diagnósticos, consulte o nosso [guia de diagnóstico e resolução de problemas Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting).

### Desinstalação — Uninstall Wizard (tecla **U**)

- Remoção do seu agente, de acordo com a sua família de SO (**yum/dnf**, **zypper**, **apt-get**).
- Pergunta opcional para remover **`/usr/local/bin/ovhbackupagent`** e o README associado.

> [!warning]
>
> Desinstalar os agentes **não rescinde** a sua oferta Backup Agent. O serviço permanece ativo do lado da OVHcloud enquanto não o tiver rescindido na **área de cliente**. Poderá **reinstalar** os agentes mais tarde a partir da sua interface de cópia de segurança.
>

## FAQ

**Posso executar o script sem `sudo`?**  
Não: são necessárias ações de sistema que requerem permissões de administrador (`sudo`).

**O menu fecha-se imediatamente após a instalação em pipe — o que fazer?**  
Reabra-o com `sudo ovhbackupagent`.

**Onde está o script depois de instalado como comando?**  
Em geral: **`/usr/local/bin/ovhbackupagent`**.

**Os agentes já estão instalados, como instalar apenas o assistente?**  
Utilize `sudo bash ovh-ba-install.sh --setup-local`.

**Voltei a descarregar o script, o que acontece se o executar sem argumento?**  
Um breve ecrã de boas-vindas verifica se **`ovhbackupagent`** ainda está presente e se o Backup Agent é detetado, propondo depois, se necessário, reinstalar apenas o atalho.

**Como apresentar a ajuda integrada?**  
Utilize `sudo bash ovh-ba-install.sh --readme`.

## Quer saber mais?

Depois de os seus agentes estarem operacionais, configure as suas cópias de segurança através da interface Veeam Agent no servidor (tecla **`V`** no assistente).

- [Configurar a sua primeira cópia de segurança](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)
- [Gerir as suas cópias de segurança e restauros](/pages/storage_and_backup/backup_agent/backup_agent_backup_restore)
- [Diagnóstico e resolução de problemas](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting)

Fale com a nossa [comunidade de utilizadores](/links/community).
