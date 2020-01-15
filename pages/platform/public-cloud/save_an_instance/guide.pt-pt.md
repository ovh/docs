---
title: 'Criar uma cópia de segurança de uma instância'
excerpt: 'Saiba como criar uma cópia de segurança de uma instância Public Cloud em apenas alguns cliques'
slug: efetuar_backup_de_uma_instancia
legacy_guide_number: g1881
---

**Última atualização: 22/11/2019**

## Sumário

Na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, poderá criar um backup de uma instância a qualquer momento e utilizá-la para restaurar a sua instância numa configuração anterior ou criar uma nova instância.

**Efetue um backup de uma instância Public Cloud em apenas alguns cliques.**

## Requisitos

- [Ter criado uma instância Public Cloud a partir da sua conta](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_a_partir_do_espaco_cliente_ovh/).
- Estar ligado à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### Criar um backup de uma instância

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, selecione o separador Public Cloud e a secção `Instâncias`{.action}.

Clique então nas `...`{.action} do lado direito da instância escolhida e, por fim, em `Criar um backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Introduza um nome para este backup na página seguinte.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Depois de concluído o backup, este estará disponível na secção `Instance Backup`{.action}.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Criar um backup automatizado de uma instância

Na secção `Instâncias`{.action}, selecione `Criar um backup automatizado`{.action} nas ações disponíveis da instância a salvaguardar.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Deverá introduzir várias informações na página seguinte:

#### **O <i>workflow</i>** 

Existe atualmente um único <i>workflow </i>que fará uma backup da instância e do volume principal da mesma.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **O recurso**. 

Basta selecionar a instância a que o backup diz respeito.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **A ordenação** 

Trata-se de definir a frequência dos backups. Existem duas opções por defeito:

* Um backup diário, com um histórico de 7 dias no máximo.
* Um backup diário, com um histórico de 14 dias no máximo.

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

    
#### **A atribuição dos nomes** 

Trata-se simplesmente de dar um nome à tarefa de backup.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

Depois de criada, estará disponível na secção `Workflow Management`{.action}:

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Os backups estarão disponíveis na secção `Instance Backup`{.action} e serão faturados como tal.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
