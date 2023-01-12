---
title: Suspender ou colocar em pausa uma instância
slug: suspender_ou_colocar_em_pausa_uma_instancia
legacy_guide_number: g1781
section: Gestão do projeto
order: 3
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 01/10/2021**

## Objetivo

 No âmbito da configuração de uma infraestrutura de alta disponibilidade, é possível que tenha de reduzir o acesso às suas instâncias para efetuar alguns testes. OpenStack que suspenda, parar ou coloque em pausa as suas instâncias. Em cada caso, o seu endereço IP é mantido.

> [!warning]
> O nome destas opções na Área de Cliente OVHcloud é diferente do nome no Openstack/Horizon. Se efetuar esta operação através da Área de Cliente OVHcloud, certifique-se de que selecionou a opção adequada.
>

**Este guia explica como suspender, parar ou colocar em pausa sua instância.**

## Requisitos

- uma [instância Public Cloud](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#3o-passo-criacao-de-uma-instancia) sobre faturação à **hora**
- acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} o à [interface Horizon](https://docs.ovh.com/pt/public-cloud/horizon/)
- Conhecimento da [API OpenStack](https://docs.ovh.com/pt/public-cloud/prepare_the_environment_for_using_the_openstack_api/) e das [variáveis OpenStack](https://docs.ovh.com/pt/public-cloud/set-openstack-environment-variables/)

## Instruções

> [!alert]
>
> Estas manipulações não interrompem a faturação da instância, ela será faturada até que a **eliminada**.
>

A tabela abaixo permite-lhe diferenciar as opções disponíveis nas suas instâncias. Consulte este manual clicando na opção que preferir.

|Termo|Descrição|Faturação|
|---|---|---|
|[Suspender (*shelve*)](#shelve-instance)|Conserve os recursos e os dados do seu disco criando um snapshot. Todos os outros recursos são libertados.|Só é faturado por snapshot.|
|[Parar (*suspend*)](#stop-suspend-instance)|Armazena o estado da máquina virtual no disco, os recursos dedicados à instância estão sempre reservados.|Será sempre faturado ao mesmo preço para a sua instância.|
|[Pausa](#pause-instance)|Armazena o estado da máquina virtual na memória RAM, uma instância suspensa torna se « gelada ».|Será sempre faturado ao mesmo preço para a sua instância.|

### Suspender (shelve) uma instância <a name="shelve-instance"></a>

Esta opção permite libertar os recursos dedicados à sua instância de Public Cloud, mas o endereço IP fica. Os dados do seu disco local serão armazenados numa imagem instantânea criada automaticamente após a instância estar reservada. Os dados armazenados na memória e noutros locais não serão conservados.

#### Da Área de Cliente OVHcloud

Na Área de Cliente OVHcloud, clique no menu da secção `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique em `Instances`{.action} no menu à esquerda.

Clique então nas `...`{.action} à direita da instância a suspender, e clique em `Suspender`{.action}.

![suspend instance](images/suspend_an_instance.png){.thumbnail}

Na janela contextual, tome nota da mensagem e clique em `Confirmar`{.action}.

![confirm suspension](images/confirm_suspension.png){.thumbnail}

Uma vez terminado o processo, a instância parece *Suspensa*.

![suspended status](images/instance_suspended.png){.thumbnail}

Para apresentar a snapshot, aceda ao menu à esquerda e clique em `Instance Backup`{.action}. Uma snapshot chamado *xxxxx-shelved* está agora visível:

![snapshot tab](images/shelved_backup.png){.thumbnail}

#### Da interface Horizon

Para continuar, deve [criar um acesso à interface Horizon](../horizon/) e se [ligar à interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

Se criou instâncias em regiões diferentes, certifique-se de que se encontra na região apropriada. Pode verificá-lo no canto superior esquerdo da interface Horizon.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Shelve Instance`{.action} na lista pendente para a instância correspondente.

![shelve instance](images/shelveinstancehorizon.png){.thumbnail}

Uma vez terminado o processo, a sua instância aparece como *Shelved Offloaded* reservada.

![shelved instance](images/newinstancestatushorizon.png){.thumbnail}

Para ver o snapshot, no menu `Compute`{.action}, clique em `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

#### Utilização das API OpenStack/Nova

Antes de continuar, recomendamos que consulte os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/set-openstack-environment-variables/)

Quando o ambiente estiver pronto, utilize o seguinte comando:

```bash
openstack server shelve <UUID server>
 
=====================================

nova shelve <UUID server> 
```

###  Reativar (unshelve) uma instância

Esta opção permite-lhe reativar a sua instância para que a possa continuar a utilizar. Tenha em conta que, uma vez efetuada esta operação, a faturação será retomada normalmente.

> [!alert] **Ações no snapshot**
>
> Qualquer ação no snapshot que não a reativação *unshelve* pode ser muito perigosa para a sua infraestrutura em em caso de mau uso. Uma vez « reactivada » (*unshelved*) uma instância, a snapshot é automaticamente eliminada. Não é recomendado criar uma nova instância a partir de uma snapshot criada após a suspensão (*shelve*) de uma instância.
>
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. Como não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”. 
>

#### Da Área de Cliente OVHcloud

Na Área de Cliente OVHcloud, clique no menu da secção `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique em `Instances`{.action} no menu à esquerda.

Clique então nas `...`{.action} à direita da instância, clique em `Reativar`{.action}.

![reactivate instance](images/reactivate_instancePanel.png){.thumbnail}

Na janela contextual, tome nota da mensagem e clique em `Confirmar`{.action}.

Uma vez terminado o processo, a sua instância aparece como *Ativada*.

#### Da interface Horizon

Na interface Horizon, clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Unshelve Instance`{.action} na lista pendente para a instância correspondente.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Uma vez terminado o processo, a sua instância aparecerá como *Active*.

#### Utilização das API OpenStack/Nova

Quando o ambiente estiver pronto, utilize o seguinte comando:

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

### Parar (suspend) uma instância <a name="stop-suspend-instance"></a>

Esta opção permite-lhe parar a sua instância e armazenar o estado da máquina virtual no disco. A memória será igualmente escrita no disco.

#### Da Área de Cliente OVHcloud

Na Área de Cliente OVHcloud, clique no menu da secção `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique em `Instances`{.action} no menu à esquerda.

Clique então nas `...`{.action} à direita da instância a parar, e clique em `Parar`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

Na janela contextual, tome nota da mensagem e clique em `Confirmar`{.action}.

Uma vez terminado o processo, a instância aparece como *Apagada*.

Para reativar a instância, efetue as mesmas etapas que as acima mencionadas. Clique então nas `...`{.action} à direita da instânciae selecione o `Iniciar`{.action}. Em alguns casos, poderá ter de efetuar uma Reboot a frio.

#### Da interface Horizon 

Na interface Horizon, clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Suspend Instance`{.action} na lista pendente para a instância correspondente.

![instance suspension horizon](images/suspendinstancehorizon.png){.thumbnail}

Aparecerá a mensagem de confirmação indicando que a instância foi suspensa.

Para reactivar a instância, efetue as mesmas operações que as acima mencionadas. Na lista pendente da instância correspondente, selecione `Resume Instance`{.action}.

#### Utilização da API OpenStack/Nova

Quando o ambiente estiver pronto, utilize o seguinte comando

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Para anular a suspensão da instância, utilize o seguinte comando

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

### Colocar em pausa uma instância (*pause*) <a name="pause-instance"></a>

Esta ação só é possível através da interface Horizon ou da API Openstack/Nova. A instância tem um estado de « gelado » ou de « espera »

#### Da interface Horizon 

Na interface Horizon, clique no menu `Compute`{.action} no lado esquerdo e selecione `Instances`{.action}. Selecione `Pause Instance`{.action} na lista pendente para a instância correspondente.

![Pause instance](images/pauseinstancehorizon.png){.thumbnail}

Aparecerá a mensagem de confirmação indicando que a instância foi pausada.

Para reactivar a instância, efetue as mesmas etapas que as mencionadas acima. Na lista pendente da instância correspondente, selecione `Resume Instance`{.action}.

#### Utilização das API OpenStack/Nova

Quando o ambiente estiver pronto, utilize o seguinte comando:

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Para reactivar a instância, utilize o seguinte comando:

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Quer saber mais?

[Documentação OpenStack](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.