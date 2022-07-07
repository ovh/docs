---
title: 'Passo 3 - Criar uma primeira frota de ambientes de trabalho virtuais (ou pool)'
slug: como-criar-pool
excerpt: 'Saiba como criar uma primeira pool a partir do VMware Horizon 7.1'
section: Preparação
order: 3
---

**Última atualização: 17/05/2018**

## Sumário

Já sabe como [conectar-se ao VMware Horizon - EN](https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/horizon-7-platform/){.external} e o seu [modelo de pool - EN](https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/create-pool/){.external} está pronto. Chegou o momento de criar a sua primeira pool.

**Este guia explica-lhe como efetuar essa criação a partir do VMware Horizon 7.1.**



## Requisitos

- Estar conectado ao VMware Horizon 7.1


## Instruções

Depois de se ter autenticado no VMware Horizon, realize os procedimentos seguintes:

- em `Catalog`{.action} e `Desktop Pool`{.action}, clique em `Add`{.action} para executar o formulário de criação da pool;

![criação de uma pool](images/1200.png){.thumbnail}

- a seguir, escolha `tipo de pool` (*Automático* neste exemplo).


> [!primary]
>
> Existem três tipos principais de pools de ambientes de trabalho: *automatizadas*, *manuais* e *RDS*.
>
> - As pools de ambientes de trabalho *automatizadas* são criadas a partir de um mesmo modelo ou de um snapshot de modelo de máquina virtual (VM).
>
> - As pools de ambientes de trabalho *manuais* são uma coleção de VM, de computadores físicos ou de VM de terceiros. Nas pools *automatizadas* e *manuais*, cada máquina está disponível para um único acesso de utilizador remoto de cada vez.
>
> - As pools de ambientes de trabalho *RDS* não são uma coleção de máquinas. Em vez disso, fornecem sessões de ambientes de trabalho em hosts RDS. Vários utilizadores podem ter várias sessões de ambiente de trabalho em simultâneo num host RDS.
>


![criação de uma pool](images/1201.png){.thumbnail}

- Escolha o `tipo de User Assignment` dos ambientes de trabalho virtuais:

 - *Dedicated*: os ambientes de trabalho virtuais serão atribuídos a um único utilizador;
 - *Floating*: os ambientes de trabalho serão distribuídos aos utilizadores em função da disponibilidade no momento de cada conexão.

![criação de uma pool](images/1202.png){.thumbnail}

- Escolha o tipo de clone a realizar para aprovisionar a pool:

 - *Full virtual machines*: será realizado um clone completo da VM modelo;
 - *View Composer linked clones*: será efetuado um clone ligado ao snapshot de referência; isto reduz o espaço ocupado nos datastores, poupa recursos e melhora a rapidez de execução, sem deixar de manter uma ligação forte entre a VM modelo e a VM do ambiente de trabalho virtual em execução.

![criação de uma pool](images/1203.png){.thumbnail}

- Escolha o nome da pool (o *display name* poderá ser editado mais tarde, mas não o ID).

![criação de uma pool](images/1204.png){.thumbnail}

- Escolha a configuração da pool (ative o *HTML access* se necessário).


> [!primary]
>
> Aconselhamos que utilize o protocolo **Blast**, pois este garante uma melhor fluidez (independentemente da largura de banda da sua conexão), uma maior proteção e, para as utilizações em dispositivos móveis, uma importante economia da bateria. Para mais informações relativamente a este protocolo, clique [aqui](https://docs.vmware.com/fr/VMware-Horizon-7/7.2/com.vmware.horizon-view.installation.doc/GUID-F64BAD49-78A0-44FE-97EA-76A56FD022D6.html){.external}.
>

![criação de uma pool](images/1205.png){.thumbnail}

- Agora tem a possibilidade de selecionar a forma como os ambientes de trabalho virtuais serão nomeados, bem como o número de VM a executar.

![criação de uma pool](images/1206.png){.thumbnail}

- O ecrã seguinte permite escolher se os perfis de utilizador ficarão num disco persistente e se é necessário um disco separado para os ficheiros temporários do Windows.

![criação de uma pool](images/1207.png){.thumbnail}

- De seguida é possível selecionar a política de armazenamento, nomeadamente se deseja a separação dos discos OS e persistentes.

![criação de uma pool](images/1208.png){.thumbnail}

- No próximo ecrã, escolha o *modelo de VM* que deseja executar.

> [!primary]
>
> Se a VM não surgir, selecione `Show all parent VMs`{.action} para saber a razão.
>

![criação de uma pool](images/1209.png){.thumbnail}

- Escolha o *snapshot de referência* (é possível ter vários, para necessidades de gestão de versões, de testes ou de produção em pools diferentes).

![criação de uma pool](images/1210.png){.thumbnail}

- Selecione a *pasta de destino* da pool (para a organização vSphere); nela será criada uma subpasta com o nome da pool para armazenar as VM utilizadas.

![criação de uma pool](images/1211.png){.thumbnail}

- Escolha os *datastores* usados para o armazenamento das VM.

![criação de uma pool](images/1212.png){.thumbnail}

- O próximo ecrã permite escolher opções avançadas associadas ao armazenamento dos ambientes de trabalho virtuais.

![criação de uma pool](images/1213.png){.thumbnail}

- Agora pode escolher as opções de execução ligadas ao Active Directory e à personalização das VM (selecione uma personalização sysprep entre as que se encontram [criadas na sua Private Cloud](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-sysprep/){.external}.

![criação de uma pool](images/1214.png){.thumbnail}

- Também pode optar por associar diretamente utilizadores a esta pool de ambientes de trabalho virtuais ou concluir a criação e associá-los mais tarde.

A criação da pool pode levar algum tempo, pois depende do modelo utilizado. Em caso de erro, a secção `Inventory` da pool dá informações acerca da criação de cada uma das VM e permite compreender a origem do problema.

Agora que a pool foi criada, saiba como [atribuir ambientes de trabalho virtuais aos utilizadores](https://docs.ovh.com/fr/cloud-desktop-infrastructure/howto-create-pool/){.external}.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.