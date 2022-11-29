---
title: "Enterprise File Storage - Gestão a partir da Área de Cliente OVHcloud"
excerpt: Saiba como gerir o serviço Enterprise File Storage a partir da Área de Cliente OVHcloud
slug: netapp/control-panel
section: Enterprise File Storage
order: 020
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 14/04/2022**

## Objetivo

Os serviços Enterprise File Storage podem ser geridos [através das API OVHcloud](https://docs.ovh.com/pt/storage/file-storage/netapp/quick-start/) ou a partir da Área de Cliente OVHcloud.

**Saiba como gerir os volumes e as snapshots de Enterprise File Storage na sua Área de Cliente.**

## Requisitos

- Ter um serviço Enterprise File Storage na sua conta OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções <a name="instructions"></a>

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione `Bare Metal Cloud`{.action} na barra de navegação superior. Abra o `Storage e o Backup`{.action}, depois o `Enterprise File Storage`{.action} no menu à esquerda e selecione o seu serviço na lista.

![Informações gerais](images/manage_enterprise01.png){.thumbnail}

O separador `Informações gerais`{.action} apresenta informações técnicas sobre o seu serviço, informações gerais sobre a subscrição e um atalho para [criar um volume](#create_volume).

> [!primary]
> Consulte a página [Conceitos](https://docs.ovh.com/pt/storage/file-storage/netapp/concepts/) para obter informações detalhadas sobre as propriedades técnicas da solução Enterprise File Storage.
>

### Gestão dos volumes <a name="manage_volume"></a>

Clique no separador `Volumes`{.action}. O quadro apresenta todos os volumes criados para o serviço selecionado. Pode clicar num identificador de volume para abrir a sua [página de gestão](#modify_volume). 

![Volumes](images/manage_enterprise02.png){.thumbnail}

Pode efetuar várias ações clicando no botão `...`{.action} em cada linha da tabela.

- **Modificar o volume**: Abre a secção "[Informações gerais](#modify_volume)" do volume.
- **Criar uma snapshot**: abra a secção "[Backups](#snapshots)" para efetuar uma snapshot manual do volume.
- **Gerir as snapshots**: abre a secção "[Backups](#snapshots)" do volume.
- **Gerir IP Access (ACL)**: Abre a secção "[ACL](#access_control)" que permite gerir o controlo de acesso ao volume.
- **Eliminar o volume**: permite eliminar este volume quando a ação for confirmada na janela que aparecer.

#### Criação de um volume <a name="create_volume"></a>

Clique no botão `Criar um volume`{.action}. Na nova janela, insira o nome e a descrição do volume. Determine o tamanho em GB e clique em `Criar um volume`{.action} para validar a criação.

![Volume de criação](images/manage_enterprise03.png){.thumbnail}

Pode eliminar um volume ao clicar no botão `...`{.action} na tabela e, a seguir, em `Eliminar o volume`{.action}.

#### Modificação de um volume <a name="modify_volume"></a>

Clique num ID de volume no quadro para abrir a página de gestão deste volume.

![Gestão dos volumes](images/manage_enterprise04.png){.thumbnail}

O separador `Informações gerais`{.action} apresenta os detalhes do seu volume, assim como instruções pormenorizadas sobre a ligação ao volume, incluindo os parâmetros individuais.

#### Criação e gestão das snapshots de um volume <a name="snapshots"></a>

O separador `Snapshots`{.action} regista todas as snapshots criadas para o volume selecionado.

![Snapshots](images/manage_enterprise05.png){.thumbnail}

Para adicionar manualmente uma nova snapshot do volume na sua forma atual, clique no botão `Ações`{.action} e depois em `Criar uma snapshot`{.action}.

Na nova janela que aparecerá, pode introduzir um nome e uma descrição. Clique no botão `Criar uma snapshot`{.action} para lançar a criação.

No mesmo separador, pode também apresentar todas as [políticas de snapshots](#snapshot_policy) criadas para o serviço e aplicá-las a este volume.

![Snapshots](images/manage_enterprise06.png){.thumbnail}

Clique na linha da regra em questão para consultar os detalhes do planeamento das snapshots. Selecione uma política através do botão de seleção dedicado e clique no botão `Aplicar a política`{.action} abaixo da tabela.

Para configurar as suas [políticas de snapshot](#snapshot_policy), volte à secção [Gestão dos volumes](#instructions) do seu serviço e abra o separador `Snapshot policiais`{.action}.

#### Lista e recuperação das snapshots <a name="access_snapshots"></a>

A Área de Cliente não permite consultar a lista das snapshots efetuadas nem restaurá-las.

Para ter acesso às snapshots a partir do seu ponto de montagem, pode utilizar os comandos propostos na documentação [NetApp](https://library.netapp.com/ecmdocs/ECMP1196991/html/GUID-36DC110C-C0FE-4313-BF53-1C12838F7BBD.html){.external}.

#### Gestão dos ACL de volumes <a name="access_control"></a>

O controlo de acesso aos volumes funciona através de restrições de endereços IP. Uma vez que não existem restrições configuradas por predefinição, a primeira etapa aquando da criação de volumes consiste em definir endereços IP ou intervalos a partir dos quais o acesso será autorizado.

No separador `Controlo de acesso (ACL)`{.action}, clique no botão `+ Adicionar um novo acesso`{.action}.

![ACL](images/manage_enterprise07.png){.thumbnail}

Esta ação cria uma nova linha na tabela na qual pode introduzir um endereço IP ou um bloco de endereço (CIDR). Selecione `Leitura isolada` ou `Leitura e escrita` como tipo de acesso no menu pendente e selecione esta entrada para a adicionar ao ACL.

Para eliminar um acesso ao volume, clique no ícone de lixo correspondente na tabela.

### Gestão das políticas de snapshots <a name="snapshot_policy"></a>

A adição de políticas permite-lhe planificar a criação de snapshots para todos os seus volumes.

Clique no separador `Snapshot policies`{.action}. O quadro apresenta todas as políticas criadas para o serviço selecionado.

Já existe uma política predefinida que não pode ser alterada. Para adicionar a sua, clique no botão `Criar uma nova Snapshot policy`{.action}.

![Snapshots](images/manage_enterprise08.png){.thumbnail}

Na página que aparecer, introduza um nome e uma descrição para a política. De seguida, utilize o botão `+ Adicionar uma nova regra`{.action} para adicionar uma ou mais regras à política.

![Snapshots](images/manage_enterprise09.png){.thumbnail}

Preencha os campos para indicar os critérios de periodicidade de criação da snapshot. Deve igualmente indicar um prefixo para as snapshots, necessário à sua denominação.

Encontrará mais informações sobre cada valor ao clicar no ícone que representa um ponto de interrogação (`?`{.action}). Ao desenvolver a secção `Exemplo`{.action}, pode visualizar dois conjuntos de regras de política com uma explicação do seu resultado.

Selecione a nova regra para a adicionar. Depois de adicionar todas as regras, clique em `Criar uma nova Snapshot policy`{.action}.

[Selecione um volume](#manage_volume) e aceda ao separador `Snapshots`{.action} para [aplicar as suas regras](#snapshots).

Para eliminar uma política, clique no ícone de lixo correspondente na tabela.

> [!primary]
>
> As snapshots utilizam a capacidade de armazenamento da sua solução Enterprise File Storage. 5% do tamanho de um volume está sempre reservado às snapshots.
>

### Primeiros passos <a name="firststeps"></a>

Se não está familiarizado com a utilização da solução Enterprise File Storage, pode seguir os passos abaixo:

- [Criar um volume](#create_volume)
- [Configurar o controlo de acesso](#access_control)
- [(Opcional) Configurar as políticas de snapshot](#snapshot_policy)
- [Aplicar regras de snapshot ao volume](#snapshots) (facultativo)
- [Listar e recuperar as snaphots](#access_snapshots) (facultativo)
- [Aceda ao volume seguindo as instruções da secção "Informações gerais"](#modify_volume)
- [Saiba como utilizar o Enterprise File Storage através da API ao consultar os nossos guias](#gofurther) (como opção)

## Quer saber mais? <a name="gofurther"></a>

[Enterprise File Storage - API Quickstart](https://docs.ovh.com/pt/storage/file-storage/netapp/quick-start/)

[Enterprise File Storage - Gestão de volumes](https://docs.ovh.com/pt/storage/file-storage/netapp/volumes/)

[Enterprise File Storage - Gestão dos ACL de volume](https://docs.ovh.com/pt/storage/file-storage/netapp/volume-acl/)

[Enterprise File Storage - Gestão das snapshots de volumes](https://docs.ovh.com/pt/storage/file-storage/netapp/volume-snapshots/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
