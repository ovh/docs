---
title: 'Criar / Restaurar um servidor virtual a partir de um backup'
excerpt: 'Criar / Restaurar um servidor virtual a partir de um backup'
slug: criar_restaurar_um_servidor_virtual_a_partir_de_um_backup
legacy_guide_number: g1882
---

**Última atualização: 22/11/2019**

## Sumário
Pode querer restaurar a sua instância através de um backup, por exemplo, em caso de manipulação errada realizada na configuração da sua instância. 

Este backup pode também servir para criar uma nova instância, para duplicar a primeira e efetuar a repartição de carga, ou ainda para beneficiar da elevada disponibilidade.

Este guia explica-lhe como usar os seus backups para recriar, duplicar ou restaurar as suas instâncias.

## Requisitos
- Ter um backup de uma instância Public Cloud. Para isso, consulte [o guia relativo à criação de um backup](https://docs.ovh.com/pt/public-cloud/efetuar_backup_de_uma_instancia/).
- Estar ligado à Área de Cliente OVHcloud.

## Instruções

### Criar uma instância a partir de um backup

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e selecione `Public Cloud`{.action}. Selecione então a secção `Instance backup`{.action}.

Clique então nas `...`{.action} do lado direito do backup escolhido e, por fim, em `Criar uma instância`{.action}.

![public-cloud-instance-backup](images/restorebackup1.png){.thumbnail}

A página de criação de instância é apresentada.

![public-cloud-instance-backup](images/restorebackup2.png){.thumbnail}

Alguns elementos estão predefinidos:

* A localização: a sua instância será criada no mesmo datacenter do que o seu backup.
* A imagem: corresponderá ao seu backup.
* Os modelos: só os que podem acolher a sua imagem estarão disponíveis, em função da sua quota.

Para mais informações sobre a criação de uma instância, consulte [este guia](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_a_partir_do_espaco_cliente_ovh/).

Para criar uma instância num datacenter diferente do do backup, será necessário transferir o backup para a zona correspondente. Consulte então o [guia relativo ao backup de uma instância de um datacenter para outro](https://docs.ovh.com/pt/public-cloud/transferir-a-copia-de-seguranca-de-uma-instancia-de-um-datacenter-para-outro/).

### Restaurar uma instância a partir de um backup

Para restaurar uma instância a partir de um backup, selecione o menu `Instância`{.action}, clique no botão `...`{.action} do lado direito da instância que pretende restaurar e, por fim, em `Editar`{.action}.

![public-cloud-instance-backup](images/restorebackup3.png){.thumbnail}

A página de edição de instância será então apresentada. Nela poderá alterar:

* O nome da instância.
* A imagem da instância.
* O modelo da instância.
* A faturação da instância (apenas do modelo "Horário" para o modelo "Mensal").

Escolha, então, na secção `Imagem`{.action}, a imagem do backup a restaurar.

![public-cloud-instance-backup](images/restorebackup4.png){.thumbnail}


> [!alert]
>
>Como indicado no quadro amarelo que lhe é então apresentado, os dados adicionados depois da criação deste backup não poderão ser recuperados.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>

