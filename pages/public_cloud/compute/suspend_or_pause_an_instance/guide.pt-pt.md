---
title: Suspender ou colocar em pausa uma instância
updated: 2025-05-26
---

## Objetivo

No âmbito da configuração de uma infraestrutura de alta disponibilidade, é possível que tenha de reduzir o acesso às suas instâncias para efetuar alguns testes. OpenStack que suspenda, parar ou coloque em pausa as suas instâncias. Em cada caso, o seu endereço IP é mantido.

> [!warning]
> O nome destas opções na Área de Cliente OVHcloud é diferente do nome no Openstack/Horizon. Se efetuar esta operação através da Área de Cliente OVHcloud, certifique-se de que selecionou a opção adequada.
>

**Este guia explica como suspender, parar ou colocar em pausa sua instância.**

## Requisitos

- uma [instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) sobre faturação à **hora**
- acesso à [Área de Cliente OVHcloud](/links/manager) o à [interface Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)
- Conhecimento da [API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) e das [variáveis OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

## Instruções

> [!alert]
>
> Este guia só se aplica às instâncias com uma **faturação à hora**. Se as suas instâncias tiverem uma **faturação mensal**, a faturação clássica continuará a ser aplicada independentemente do estado do serviço.
>
> Estas manipulações não interrompem a faturação da instância, ela será faturada até que a **eliminada**.
>

A tabela abaixo permite-lhe diferenciar as opções disponíveis nas suas instâncias. Consulte este manual clicando na opção que preferir. Colocámos entre parênteses a terminologia utilizada na interface Horizon.

|Termo|Descrição|Faturação|
|---|---|---|
|[Suspender (*shelve*)](#shelve-instance)|Conserve o seu IP, bem como os recursos e os dados no seu disco, criando uma imagem instantânea; todos os outros recursos são libertados.|Só é faturado por snapshot.|
|[Parar (*suspend*)](#stop-suspend-instance)|Armazena o estado da máquina virtual no disco, os recursos dedicados à instância estão sempre reservados.|Será sempre faturado ao mesmo preço para a sua instância.|
|[Pausa](#pause-instance)|Armazena o estado da máquina virtual na memória RAM, uma instância suspensa torna se « gelada ».|Será sempre faturado ao mesmo preço para a sua instância.|

### Índice

- [Suspender (shelve) uma instância](#shelve-instance)
    - [Da Área de Cliente OVHcloud](#control-panel)
    - [Da interface Horizon](#horizon)
    - [Utilização das API OpenStack/Nova](#openstack-nova)
-[Reativar (unshelve) uma instância](#unshelve-instance)
    - [Da Área de Cliente OVHcloud](#control-panel-unshelve)
    - [Da interface Horizon](#horizon-unshelve)
    - [Utilização das API OpenStack/Nova](#openstack-nova-unshelve)
- [Parar (suspend) uma instância](#stop-suspend-instance)
    - [Da Área de Cliente OVHcloudl](#stop-control-panel)
    - [Da interface Horizon](#stop-horizon)
    - [Utilização das API OpenStack/Nova](#stop-openstack-nova)
- [Colocar em pausa uma instância (*pause*)](#pause-instance)
    - [Da interface Horizon](#pause-horizon)
    - [Utilização das API OpenStack/Nova](#pause-openstack-nova)

<a name="shelve-instance"></a>

### Suspender (shelve) uma instância

> [!alert]
> Tenha em atenção que a suspensão de uma instância IOPS ou T1/T2-180 resultará na perda de dados nas discos NVMe em passthrough.
>
> Suspender este tipo de instância leva à sua desativação do anfitrião e, por conseguinte, dos discos em passthrough.
>

Esta opção permite libertar os recursos dedicados à sua instância de Public Cloud, mas o endereço IP fica. Os dados do seu disco local serão armazenados numa imagem instantânea criada automaticamente após a instância estar reservada. Os dados armazenados na memória e noutros locais não serão conservados.

<a name="control-panel"></a>

#### Da Área de Cliente OVHcloud

Na Área de Cliente OVHcloud, clique no menu da secção `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique em `Instâncias`{.action} no menu à esquerda.

Clique então nas `...`{.action} à direita da instância a suspender, e clique em `Suspender`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

Na janela contextual, tome nota da mensagem e clique em `Confirmar`{.action}.

![confirm suspension](images/suspend_an_instance_2024.png){.thumbnail}

Uma vez terminado o processo, a instância parece *Suspensa*.

![suspended status](images/instance_suspended.png){.thumbnail}

O snapshot estará então disponível na secção `Instance Backup`{.action} do menu **Compute** à esquerda do espaço Public Cloud. Um snapshot chamado *xxxxx-shelved* estará então visível:

![snapshot tab](images/shelved_backup.png){.thumbnail}

<a name="horizon"></a>

#### Da interface Horizon

Para utilizar este método, é necessário [ligar à interface Horizon](https://horizon.cloud.ovh.net/auth/login/):

- Para se ligar com a autenticação única OVHcloud: utilize o link `Horizon`{.action} no menu à esquerda, sob « Management Interfaces » depois de ter aberto o seu projeto `Public Cloud`{.action} na sua [Área de Cliente OVHcloud](/links/manager).

- Para se ligar a um utilizador OpenStack específico: abra a página de ligação ao [Horizon](https://horizon.cloud.ovh.net/auth/login/) e introduza os [identificadores OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) previamente criados, depois clique em `Connect`{.action}.

Se criou instâncias em regiões diferentes, certifique-se de que se encontra na região apropriada. Pode verificá-lo no canto superior esquerdo da interface Horizon.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Shelve Instance`{.action} na lista pendente para a instância correspondente.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Uma vez terminado o processo, a sua instância aparece como *Shelved Offloaded* reservada.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

Para ver o snapshot, no menu `Compute`{.action}, clique em `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

<a name="openstack-nova"></a>

#### Utilização das API OpenStack/Nova

Antes de continuar, recomendamos que consulte os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Quando o ambiente estiver pronto, utilize o seguinte comando:

```bash
~$ openstack server shelve <UUID server>

=====================================

~$ nova shelve <UUID server> 
```

<a name="unshelve-instance"></a>

### Reativar (unshelve) uma instância

Esta opção permite-lhe reativar a sua instância para que a possa continuar a utilizar. Tenha em conta que, uma vez efetuada esta operação, a faturação será retomada normalmente.

> [!alert] **Ações no snapshot**
>
> Qualquer ação no snapshot que não a reativação *unshelve* pode ser muito perigosa para a sua infraestrutura em em caso de mau uso. Uma vez « reactivada » (*unshelved*) uma instância, a snapshot é automaticamente eliminada. Não é recomendado criar uma nova instância a partir de uma snapshot criada após a suspensão (*shelve*) de uma instância.
>
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. Como não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um [serviço especializado](/links/partner). Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”. 
>

<a name="control-panel-unshelve"></a>

#### Da Área de Cliente OVHcloud

Na Área de Cliente OVHcloud, clique no menu da secção `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique em `Instâncias`{.action} no menu à esquerda.

Clique então nas `...`{.action} à direita da instância, clique em `Reativar`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

Na janela contextual, tome nota da mensagem e clique em `Confirmar`{.action}.

Uma vez terminado o processo, a sua instância aparece como *Ativada*.

<a name="horizon-unshelve"></a>

#### Da interface Horizon

Na interface Horizon, clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Unshelve Instance`{.action} na lista pendente para a instância correspondente.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Uma vez terminado o processo, a sua instância aparecerá como *Active*.

<a name="openstack-nova-unshelve"></a>

#### Utilização das API OpenStack/Nova

Quando o ambiente estiver pronto, utilize o seguinte comando:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

<a name="stop-suspend-instance"></a>

### Parar (suspend) uma instância

Esta opção permite-lhe parar a sua instância e armazenar o estado da máquina virtual no disco. A memória será igualmente escrita no disco.

<a name="stop-control-panel"></a>

#### Da Área de Cliente OVHcloud

Na Área de Cliente OVHcloud, clique no menu da secção `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique em `Instâncias`{.action} no menu à esquerda.

Clique então nas `...`{.action} à direita da instância a parar, e clique em `Parar`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

Na janela contextual, tome nota da mensagem e clique em `Confirmar`{.action}.

Uma vez terminado o processo, a instância aparece como *Apagada*.

Para **reativar** a instância, efetue as mesmas etapas que as acima mencionadas. Clique então nas `...`{.action} à direita da instânciae selecione o `Iniciar`{.action}. Em alguns casos, poderá ter de efetuar uma Reboot a frio.

<a name="stop-horizon"></a>

#### Da interface Horizon 

Na interface Horizon, clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Suspend Instance`{.action} na lista pendente para a instância correspondente.

![instance suspension horizon](images/suspendinstancehorizon.png){.thumbnail}

Aparecerá a mensagem de confirmação indicando que a instância foi suspensa.

Para **reactivar** a instância, efetue as mesmas operações que as acima mencionadas. Na lista pendente da instância correspondente, selecione `Resume Instance`{.action}.

<a name="stop-openstack-nova"></a>

#### Utilização da API OpenStack/Nova

Quando o ambiente estiver pronto, utilize o seguinte comando

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Para **reactivar** a instância, utilize o seguinte comando

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

<a name="pause-instance"></a>

### Colocar em pausa uma instância (*pause*) 

Esta ação só é possível através da interface Horizon ou da API Openstack/Nova. A instância tem um estado de « gelado » ou de « espera »

<a name="pause-horizon"></a>

#### Da interface Horizon 

Na interface Horizon, clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Pause Instance`{.action} na lista pendente para a instância correspondente.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

Aparecerá a mensagem de confirmação indicando que a instância foi pausada.

Para **reactivar** a instância, efetue as mesmas etapas que as mencionadas acima. Na lista pendente da instância correspondente, selecione `Resume Instance`{.action}.

<a name="pause-openstack-nova"></a>

#### Utilização das API OpenStack/Nova

Quando o ambiente estiver pronto, utilize o seguinte comando:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Para **reactivar** a instância, utilize o seguinte comando:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Quer saber mais?

[Documentação OpenStack](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html){.external}.

Fale com a nossa [comunidade de utilizadores](/links/community).