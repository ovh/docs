---
title: 'Criar / Restaurar um servidor virtual a partir de um backup'
excerpt: 'Criar / Restaurar um servidor virtual a partir de um backup'
legacy_guide_number: g1882
updated: 2021-03-19
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

A Área de Cliente OVHcloud permite-lhe criar [backups das suas instâncias](/pages/public_cloud/compute/save_an_instance) em apenas alguns cliques e automatizar este processo.
Pode querer restaurar a sua instância através de um backup, por exemplo, em caso de manipulação errada realizada na configuração da sua instância. Pode utilizar estes backups de instâncias por duas razões principais:

- Criar uma instância com base no backup, para duplicar a instância de origem. Por exemplo, se configurar uma infraestrutura de repartição de carga (load balancing).
- Restaurar uma instância a partir de um backup. Por exemplo, se alterações recentes quebraram configurações críticas na instância.

**Saiba como utilizar os seus backups para duplicar ou restaurar as suas instâncias.**

## Requisitos

- Ter um backup de uma instância Public Cloud. Para isso, consulte [o guia relativo à criação de um backup](/pages/public_cloud/compute/save_an_instance).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Criar uma instância a partir de um backup

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e selecione `Public Cloud`{.action}. A seguir, clique em `Instance backup`{.action} no menu à esquerda.

![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}

Clique então nas `...`{.action} do lado direito do backup escolhido e, por fim, em `Criar uma instância`{.action}.

Aparecerá uma versão abreviada da página de criação da instância, na qual poderá modificar determinadas opções.

![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}

Alguns elementos estão predefinidos:

- **Localização**: a sua instância será criada no mesmo datacenter que o seu backup.
- **Imagem**: corresponderá ao seu backup.
- **Modelo**: apenas os que podem acolher a sua imagem estarão disponíveis, em função da sua quota.

![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}

Defina o nome da nova instância, a chave SSH, o vRack e o período de faturação e clique no botão `Criar a instância`{.action}.

Para mais informações sobre a criação de uma instância, consulte [este guia](/pages/public_cloud/compute/public-cloud-first-steps#3o-passo-criacao-de-uma-instancia/).

> [!primary]
>
> Para criar uma instância num datacenter diferente do do backup, será necessário transferir o backup para a zona correspondente. Consulte então o [guia relativo ao backup de uma instância de um datacenter para outro](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>

### Restaurar uma instância a partir de um backup

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e selecione `Public Cloud`{.action}. A seguir, clique em `Instâncias`{.action} no menu à esquerda.

![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}

Clique no botão `...`{.action} à direita da instância que pretende restaurar e clique em `Editar`{.action}.

A página de edição de instância será então apresentada. Nela poderá alterar:

- O nome da instância.
- A imagem da instância.
- O modelo da instância.
- A faturação da instância (apenas do modelo "Horário" para o modelo "Mensal").

Faça as alterações necessárias e selecione o separador `Backups`{.action} na secção "Image".

![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}

Selecione um backup na lista de backups disponíveis. Clique em `Modificar a imagem`{.action} se tiver a certeza de que deseja substituir a imagem atual pelo backup.

A instância terá o estado de `Reinstalação` até que o processo esteja terminado. Pode ser necessário atualizar a página no browser para ver o estado atual.

> [!warning]
>
> Como indicado no quadro amarelo que lhe é então apresentado, os dados adicionados depois da criação deste backup não poderão ser recuperados.
>

## Saiba mais

[Criação e ligação a uma primeira instância Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Efetuar um backup de uma instância](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>
