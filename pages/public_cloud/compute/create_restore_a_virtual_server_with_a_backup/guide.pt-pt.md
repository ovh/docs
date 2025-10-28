---
title: 'Criar / Restaurar um servidor virtual a partir de um backup'
excerpt: 'Saiba como criar ou restaurar o backup de uma instância'
updated: 2025-10-15
---

## Objetivo

A Área de Cliente OVHcloud permite-lhe criar [backups das suas instâncias](/pages/public_cloud/compute/save_an_instance) em apenas alguns cliques e automatizar este processo.
Pode querer restaurar a sua instância através de um backup, por exemplo, em caso de manipulação errada realizada na configuração da sua instância. Pode utilizar estes backups de instâncias por duas razões principais:

- Criar uma instância com base no backup, para duplicar a instância de origem. Por exemplo, se configurar uma infraestrutura de repartição de carga (load balancing).
- Restaurar uma instância a partir de um backup. Por exemplo, se alterações recentes quebraram configurações críticas na instância.

**Saiba como utilizar os seus backups para duplicar ou restaurar as suas instâncias.**

## Requisitos

- Ter um backup de uma [instância Public Cloud](/links/public-cloud/instance-backup). Para isso, consulte [o guia relativo à criação de um backup](/pages/public_cloud/compute/save_an_instance).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Criar uma instância a partir de um backup

> [!tabs]
> Via a área de cliente OVHcloud
>> Conecte-se a sua [área de cliente OVHcloud](/links/manager), acesse a seção `Public Cloud`{.action} e selecione o projeto Public Cloud desejado.<br>
>> Clique em seguida em `Instance backup`{.action} na barra de navegação à esquerda sob **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}
>>
>> Clique nos `...`{.action} à direita do backup selecionado e, por fim, em `Criar uma instância`{.action}.
>>
>> Uma versão simplificada da página de criação de instância será exibida, permitindo personalizar algumas opções.
>>
>> ![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}
>>
>> Alguns elementos são pré-definidos:
>>
>> - **Localização**: Sua instância será criada no mesmo datacenter que seu backup.
>> - **Imagem**: A imagem corresponderá ao seu backup.
>> - **Modelo**: Apenas os modelos capazes de acomodar sua imagem estarão disponíveis, dependendo do seu quota.
>>
>> ![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}
>>
>> Defina o nome da nova instância, a chave SSH, o vRack e o período de faturamento, em seguida clique no botão `Criar a instância`{.action}.
>>
>> Para mais informações sobre a criação de uma instância, consulte [este guia](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>> > [!primary]
>> >
>> > Para criar uma instância em um datacenter diferente do backup, será necessário transferi-lo para a zona correspondente. Consulte então o [guia sobre a transferência de backup de instância entre datacenters](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>> >
>>
> Via a CLI OpenStack
>>
>> Para criar uma instância a partir de seu backup, utilize o ID do backup como imagem com este comando:
>>
>> ```bash
>> $ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
>> ```
>>
> Via Horizon
>> Na interface Horizon, clique em `Compute`{.action} no menu à esquerda, depois em `Images`{.action}. Procure a imagem desejada e clique no botão `Launch`{.action} à direita da linha da sua imagem.
>>
>> ![public-cloud-instance-backup-horizon](images/restorebackuphorizon1.png){.thumbnail}
>>
>> Nomeie sua instância no campo dedicado e determine o número de instâncias a criar. Em seguida, clique na aba `Flavor`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-2](images/restorebackuphorizon2.png){.thumbnail}
>>
>> Escolha o modelo de instância desejado, depois clique na aba `Networks`{.action}.
>>
>> > [!warning]
>> >
>> > Se sua instância for um servidor Windows, você deverá selecionar uma flavor do tipo win-xx-xx (por exemplo, win-b2-15) e possuir uma interface pública na rede Ext-Net. Sem essas condições, a autenticação no KMS OVHcloud não será possível, e seu servidor permanecerá com uma [licença não ativada](/pages/public_cloud/compute/activate-windows-license-private-mode). Isso pode resultar em limitações, incluindo a falta de atualizações. Atenção: não é possível redimensionar uma instância Linux (por exemplo, b2-15) para uma instância Windows (como win-b2-15). Para realizar essa transição, será necessário criar uma nova instância.
>> >
>>
>> ![public-cloud-instance-backup-horizon-3](images/restorebackuphorizon3.png){.thumbnail}
>>
>> Escolha a rede que deseja atribuir, depois clique no botão `Launch Instance`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-4](images/restorebackuphorizon4.png){.thumbnail}
>>
>> Você pode verificar o status da sua nova instância em `Compute`{.action} no menu à esquerda, depois em `Instances`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-5](images/restorebackuphorizon5.png){.thumbnail}
>>
> Via API OVHcloud <a name="createinstanceviaapi"></a>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance
>> >
>>
>> Preencha as variáveis:
>>
>> - **serviceName**: O ID do projeto OVHcloud.
>> - **regionName**: O nome da região onde a instância será criada.
>>
>> Exemplo de corpo da requisição:
>>
>> ```json
>> {
>>   "billingPeriod": "hourly",
>>   "bootFrom": {
>>     "imageId": "5cb8ea68-****-****-****-820be8346***"
>>   },
>>   "flavor": {
>>     "id": "e81b46f8-****-****-****-cad655e65***"
>>   },
>>   "name": "newInstance",
>>   "network": {
>>     "public": true
>>   },
>>   "sshKey": {
>>     "name": "MySSHKey"
>>   }
>> }
>> ```
>>

### Restaurar uma instância a partir de um backup

> [!tabs]
> Via a área de cliente OVHcloud
>> Conecte-se a sua [área de cliente OVHcloud](/links/manager), acesse a seção `Public Cloud`{.action} e selecione o projeto Public Cloud desejado.<br>
>> Clique em seguida em `Instâncias`{.action} na barra de navegação à esquerda sob **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}
>>
>> Clique no botão `...`{.action} à direita da instância que deseja restaurar e clique em `Editar`{.action}.
>>
>> A página de edição da instância será exibida. Você poderá modificar:
>>
>> - o nome da instância;
>> - a imagem da instância;
>> - o modelo da instância;
>> - o faturamento da instância (apenas do modelo « Hora » para o modelo « Mensal »).
>>
>> Faça as modificações necessárias e selecione a aba `Backups`{.action} na seção « Imagem ».
>>
>> ![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}
>>
>> Selecione um backup na lista de backups disponíveis. Clique em `Alterar a imagem`{.action} se estiver certo de querer substituir a imagem atual pelo backup.
>>
>> A instância terá o status `Reinstalação` até que o processo seja concluído. Pode ser necessário atualizar a página no navegador para ver o estado atual.
>>
>> > [!warning]
>> >
>> > Como indicado no quadro amarelo mencionado, nenhuma dados adicionados após a criação deste backup poderá ser recuperado.
>> >
>>
> Via API OVHcloud
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/reinstall
>> >
>>
>> Preencha as variáveis:
>>
>> - **serviceName**: O ID do projeto OVHcloud.
>> - **regionName**: O nome da região onde a instância de origem está localizada.
>> - **instanceId**: O ID único da instância.
>>
>> Exemplo de corpo da requisição:
>>
>> ```json
>> {
>>   "imageId": "5cb8ea68-****-****-****-820be8346***",
>>   "imageRegionName": "GRA11"
>> }
>> ```
>>

## Quer saber mais?

[Criação e ligação a uma primeira instância Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Efetuar um backup de uma instância](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

Fale com a nossa [comunidade de utilizadores](/links/community).