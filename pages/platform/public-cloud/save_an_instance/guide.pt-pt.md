---
title: 'Guardar uma instância'
excerpt: 'Saiba como efetuar o backup de uma instância Public Cloud a partir da Área de Cliente OVHcloud'
slug: efetuar_backup_de_uma_instancia
order: 1
section: Gestão a partir da Área de Cliente OVHcloud
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 17/11/2022**

## Objetivo

Pode criar um backup único de uma instância ou configurar um planeamento para automatizar os backups das suas instâncias. Os backups podem ser utilizados para restaurar a sua instância num estado anterior ou para criar uma nova instância idêntica.

**Este guia explica como criar backups manuais e automáticos de uma instância Public Cloud.**

## Requisitos

- Ter uma instância [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Criar um backup de uma instância

> [!warning]
> Esta opção só está disponível através de um **Cold Snapshot** para as instâncias Metal. A instância Metal passará para o modo rescue e, uma vez efetuado o backup, a instância será reiniciada em modo normal.
>

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e abra o seu projeto `Public Cloud`{.action}. A seguir, clique em `Instances`{.action} no menu à esquerda.

Clique no botão `...`{.action} à direita da instância e selecione `Criar um backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Introduza um nome para o backup na página seguinte. Consulte as informações tarifárias e clique em `Confirmar`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Uma vez terminado o backup, este estará disponível na secção `Instance Backup`{.action}.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Criar um backup automatizado de uma instância

Clique no botão `...`{.action} à direita da instância e selecione `Criar um backup automatizado`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Poderá configurar os seguintes parâmetros de backup:

#### **O workflow** 

Atualmente, existe apenas um workflow. Irá criar um backup para a instância e o seu volume principal.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **O recurso** 

Pode selecionar a instância a salvaguardar.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **O planeamento** 

Pode definir um planeamento de backup personalizado ou escolher uma das frequências predefinidas:

- Backup diário com retenção dos últimos 7 backups
- Backup diário com retenção dos últimos 14 backups

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **Nome** 

Introduza um nome para o planeamento do backup automático. Leia as informações de preços e crie o calendário ao clicar no botão `Criar`{.action}.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Gestão dos backups e dos planos

Os planos podem ser criados e eliminados na secção `Workflow Management`{.action} da Área de Cliente Public Cloud.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Os backups das suas instâncias são geridos na secção `Instance Backup`{.action} da sua Área de Cliente Public Cloud.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

Saiba como utilizar os backups para clonar ou restaurar instâncias neste [guia](https://docs.ovh.com/pt/public-cloud/criar_restaurar_um_servidor_virtual_a_partir_de_um_backup/).

## Quer saber mais?

[Criar/restaurar um servidor virtual a partir de um backup](https://docs.ovh.com/pt/public-cloud/criar_restaurar_um_servidor_virtual_a_partir_de_um_backup/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.