---
title: "Backup Agent - Gerir as suas cópias de segurança e restaurações"
excerpt: "Descubra como fazer cópias de segurança e restaurar os seus dados nos seus servidores Bare Metal com Backup Agent"
updated: 2026-01-27
---

## Objetivo

Descubra como fazer cópias de segurança e restaurar os seus dados nos seus servidores Bare Metal com Backup Agent.

> [!primary]
> 
> Encontre mais informações sobre o produto Backup Agent em [esta página](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).



## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](/links/manager).
- Um servidor Bare Metal com o Backup Agent instalado. Consulte o nosso guia "[Como configurar a sua primeira cópia de segurança](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)" para mais informações.

## Instruções

### Cópia de segurança

Tem duas possibilidades para fazer cópias de segurança: automática e manual.

#### Cópia de segurança automática

A cópia de segurança automática está integrada na política de cópia de segurança que aplicamos ao seu Backup Agent.

Trata-se de uma cópia de segurança completa do seu servidor, que será enviada para o seu ponto de armazenamento remoto.

> [!warning]
> 
> Isto vai ser desencadeado entre as 22 horas e as 6 horas (no fuso horário CET para a Europa e no fuso horário EST para o Canadá e a Ásia).

> [!primary]
> 
> Não tem possibilidade de modificar ou desativar esta cópia de segurança automática.
> Neste momento, não pode modificar a política que salvaguarda todo o seu servidor. Estamos a trabalhar para melhorar esta configuração no futuro.

Poderá ver o sucesso desta cópia de segurança através de:

- O relatório diário das cópias de segurança.
- O painel de instrumentos "Backup Jobs" da consola Veeam Service Provider.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Cópia de segurança manual

Em caso de necessidade, pode desencadear uma cópia de segurança manual.

Esta também fará uma cópia de segurança completa do seu servidor, sempre enviada para o seu ponto de armazenamento remoto.

Para criar uma cópia de segurança manual, abra a aplicação "Veeam Agent" no servidor Bare Metal:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Clique no botão `Backup Now`{.action} para iniciar uma cópia de segurança:

![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}

### Restauração

Em caso de necessidade de restaurar dados, tem duas possibilidades:

- através do assistente de restauração de ficheiros;
- através da ISO Veeam Baremetal Recovery.

#### Assistente de restauração de ficheiros

Abra a aplicação "Veeam Agent" no seu servidor Baremetal:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Dirija-se ao menu e selecione `Restore File`{.action}:

![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}

Selecione o ponto de restauração desejado no assistente:

![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}

Depois, valide:

![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}

Por fim, procure o seu ficheiro e selecione uma opção:

![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}

- Restore - Overwrite: permite-lhe restaurar o ficheiro enquanto substitui o que está atualmente no servidor.
- Restore - Keep: permite-lhe restaurar o ficheiro enquanto mantém o que está atualmente no servidor.
- Copy To: permite-lhe copiar o ficheiro para um local do seu servidor.
- Explore: permite-lhe explorar a cópia de segurança.
- Properties: permite-lhe ver as propriedades do ficheiro.

Iniciar uma restauração permitirá-lhe ter uma última janela que mostrará a transferência:

![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}

### ISO Veeam Baremetal Recovery

Bare Metal Recovery é uma funcionalidade do Veeam que consiste em criar previamente um ISO personalizado, que pode depois ser utilizado para arrancar um sistema e restaurá-lo a partir de uma cópia de segurança armazenada num outro servidor.

Consulte este guia para mais informações: [Restaurar um servidor Bare Metal com Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Terá de adaptar o servidor e as credenciais com as que lhe fornecermos.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).