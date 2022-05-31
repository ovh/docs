---
title: Restaurar backups através das API OVHcloud
slug: veeam-backup-restoration
routes:
    canonical: 'https://docs.ovh.com/pt/private-cloud/veeam-backup-restoration/'
excerpt: Saiba como restaurar backups Veeam Managed Backup através das API OVHcloud
section: Serviços e opções OVHcloud
order: 06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 29/03/2021**

## Objetivo

**Este manual explica-lhe como identificar e restaurar backups através das API OVHcloud**

## Requisitos

- Estar ligado às [API OVHcloud](https://api.ovh.com/)
- [Veeam Managed Backup ativado](https://docs.ovh.com/gb/en/managed-bare-metal/veeam-backup-as-a-service/) na sua oferta Hosted Private Cloud

## Instruções

Se não está habituado ao funcionamento das API OVHcloud, consulte o nosso guia [Primeiros passos com as API OVHcloud](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/).

### Etapa 1: gerar um relatório de backups

Num primeiro tempo, tem de visar os backups a restaurar.

Aceda a [https://api.ovh.com/](https://api.ovh.com/) e utilize a seguinte chamada:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport

Introduza as variáveis:

- serviceName: a referência do seu PCC sob a forma `pcc-XX-XX-XX-XX`
- datacenterId: ID do datacenter no qual é ativada a sua solução Veeam Managed Backup

Esta chamada vai gerar um relatório de backups. Será enviado por e-mail para o endereço referenciado na conta de administrador do serviço Hosted Private Cloud.
<br>O e-mail lista os seguintes elementos:

- Nome da VM
- Backups efetuados (BackupJobName)
- Tamanho de cada backup
- **Pasta de armazenamento (BackupRepository)**
- Último ponto de restauro

![email](images/backup-report-email2.png){.thumbnail}

Tome nota da pasta de armazenamento (BackupRepository), esta permite-lhe restaurar os backups na etapa seguinte.

### Etapa 2: restaurar os backups

> [!warning]
>
> Antes de lançar o restauro no seu datastore, certifique-se de que este dispõe de uma capacidade de armazenamento suficiente para alojar o conjunto dos dados a restaurar.
>
> Se não for o caso, será notificado por e-mail e a operação será anulada.

A chamada API vai restaurar os últimos pontos de restauro válidos de cada backup presente na pasta de armazenamento.

Aceda a [https://api.ovh.com/](https://api.ovh.com/) e utilize a seguinte chamada:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
>

Introduza as variáveis:

- serviceName: a referência do seu PCC sob a forma `pcc-XX-XX-XX-XX`
- datacenterId: ID do datacenter no qual é ativada a sua solução Veeam Managed Backup
- backupJobName (facultativo): o nome de um backup (obtido na etapa 1) sob a forma `pc-XXX-XXX-XXX-XXX_vm-XXX` se apenas pretender restaurar uma VM.
- backupRepositoryName: o nome do backupRepository obtido na etapa 1

Uma vez terminado o restauro, encontrará na sua interface vSphere as VM correspondentes aos backups restaurados.
<br>Para os identificar, os seus nomes contêm o sufixo *BatchRestore*, assim como um horário da restauração.
<br>As VM são restauradas desligadas. A sua carga de as ligar.

![vSphere](images/vcenter2.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
