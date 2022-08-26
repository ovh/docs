---
title: Primeiros passos com um NAS-HA OVHcloud
slug: nas/primeiros-passos
excerpt: Saiba como gerir um NAS-HA a partir da Área de Cliente OVHcloud
section: NAS
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/08/2022**

## Objetivo

A Network Attached Storage (NAS) é um servidor de ficheiros ligado a uma rede cuja função principal é o armazenamento de dados num volume centralizado para clientes de rede heterogéneos.
Pode gerir o seu serviço NAS-HA através da [API OVHcloud](https://docs.ovh.com/pt/storage/nas/nas-quickapi/) ou a partir da Área de Cliente.

**Este guia explica como gerir as partições e as snapshots NAS-HA na Área de Cliente OVHcloud.**

## Requisitos

- Dispor de um [NAS-HA OVHcloud](https://www.ovh.pt/nas/)
- Dispor de um endereço IP associado a um serviço OVHcloud (Hosted Private Cloud, Servidor Dedicado, VPS, Instância Public Cloud, etc...)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

Ligue-se ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), vá à secção `Bare Metal Cloud`{.action} e abra `NAS e CDN`{.action}.<br>
Clique no seu serviço para aceder ao separador `Informações gerais` {.action}.

![Informações gerais](images/nas-ha01.png){.thumbnail}

O separador `Informações gerais`{.action} apresenta informações técnicas, a `Limite` do serviço, os detalhes da subscrição e um atalho para [criar uma partição](#create_partition).

> [!primary]
> Aceda à página [FAQ](https://docs.ovh.com/pt/storage/faq-nas/) para descobrir as propriedades técnicas do serviço NAS-HA.
>

### Gestão das partições <a name="manage_partition"></a>

Passe para o separador `Partições`{.action}. A tabela apresenta todas as partições que criou para o serviço selecionado. Pode clicar no nome de uma partição para abrir a sua página de gestão. 

![Partições](images/nas-ha02.png){.thumbnail}

A secção **Métricas gerais** indica a quantidade de espaço em disco disponível utilizada pelos dados e snapshots (`Capacidade total`). A percentagem de espaço ocupado atualmente pelas snapshots está indicada em amarelo. Por predefinição, realiza-se uma snapshot de hora em hora.

O seu serviço NAS-HA dispõe de espaço suficiente para armazenar as snapshots. Este espaço corresponde a 20% do tamanho inicial do volume. Se ultrapassar este limite, as snapshots seguintes irão utilizar o seu espaço de armazenamento principal.

Pode ativar a opção `Aviso de utilização`{.action} para receber alertas por e-mail quando uma quota de utilização de 90% for atingida.

Pode efetuar algumas ações clicando no botão `...`{.action} em cada linha da tabela.

- **Editar/Consultar** : Abre a secção "Informações gerais" da partição.
- **Gerir as snapshots**: Abra a secção [Políticas de snapshots](#snapshots) da partição.
- **Gerir os acessos**: Abra a secção [Controlo de acesso (ACL)](#access_control) na qual pode gerir os direitos de acesso dos endereços IP para a partição.
- **Alterar dimensão**: Abra uma janela para [modificar o tamanho](#modify_partition) da partição.
- **Parâmetros Z File System (ZFS)**: Abre uma janela que permite [modificar os parâmetros do sistema ZFS](#zfs).
- **Eliminar**: Abra uma janela para [eliminar esta partição](#deletion).


#### Criação de uma partição <a name="create_partition"></a>

Para adicionar uma nova partição, clique no botão `+ Criar partição`{.action} por cima da tabela.

![Partições](images/nas-ha03.png){.thumbnail}

Introduza um **nome** para a partição, determine o seu **tamanho** em GB e selecione os **protocolos** de acesso (NFS, CIFS ou ambos) a autorizar.

Descreva se necessário e clique em `Criar partição`{.action}.

#### Modificar o tamanho de uma partição <a name="modify_partition"></a>

Para alterar o tamanho de uma partição, clique no botão `...`{.action} à direita da partição em causa e selecione `Alterar dimensão`{.action}.

![Partições](images/nas-ha04.png){.thumbnail}

Introduza o novo tamanho e depois clique em `Alterar dimensão`{.action}.

#### Criação e gestão de snapshots <a name="snapshots"></a>

Clique no botão `...`{.action} à direita da partição em causa e selecione `Gerir as snapshots`{.action}.

Por predefinição, realiza-se uma snapshot dos seus dados a cada hora e é guardado no seu NAS-HA. Esta regra aparece na tabela do separador `Políticas de snapshots`{.action}.

![Snapshots](images/nas-ha05.png){.thumbnail}

Pode ativar outras regras de snapshots que irão criar snapshots com frequências predefinidas clicando no botão pendente em `Opções`. Selecione as frequências e clique no botão `Selecionar`{.action} à direita.

![Snapshots](images/nas-ha06.png){.thumbnail}

Na nova janela, aguarde até que o processo esteja finalizado e clique em `Fechar`{.action}. As snapshots suplementares serão também conservadas no seu NAS-HA.

##### **Criar uma snapshot manual**

Além das snapshots efetuadas automaticamente, é possível criar uma snapshot manual de uma partição a qualquer momento. Clique no botão `Criar uma Snapshot manual`{.action} por cima da tabela.

![Snapshots](images/nas-ha07.png){.thumbnail}

A snapshot vai ser adicionada à mesa. Indique um nome da snapshot após o prefixo e clique no botão `Assinalar`{.action} à direita.

##### **Listing e restauro de snapshots**

A Área de Cliente não inclui as funcionalidades de acesso e de restauro das suas snapshots. Elas são armazenadas em leitura apenas na partição.

Para aceder às snapshots a partir do seu ponto de montagem, deve aceder ao diretório `.zfs/snapshot` da sua partição.

Por exemplo, no seu serviço com ID `zpool-123456`, existe uma partição chamada `partition1`, da qual criou uma snapshot chamada `snap-snapshot01`. Pode encontrar a snapshot com este comando:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Para restaurar a sua snapshot, copie-a a partir do caminho de acesso do ficheiro `.zfs` para o novo diretório onde pretende restaurar a snapshot. Pode utilizar uma ferramenta como o *rsync*, que lhe permite efetuar restauros.

Para mais informações, aceda à secção [Quer saber mais?](#gofurther).

#### Gestão dos ACL de partição <a name="access_control"></a>

O controlo de acesso às partições funciona através de restrições de endereços IP. Uma vez que não existem restrições configuradas de forma padrão, a primeira etapa de configuração para cada partição é definir endereços IP ou intervalos a partir dos quais o acesso será autorizado.

> [!primary]
>
> Apenas os endereços IP associados aos serviços OVHcloud podem aceder ao seu NAS-HA (ex: Servidor Dedicado, VPS, instância Public Cloud, etc.).
>

##### **Adicionar acesso**

Clique no botão `+ Adicionar um novo acesso`{.action}.

![Access](images/nas-ha08.png){.thumbnail}

Isto cria uma nova linha na tabela na qual pode selecionar um endereço IP ou um bloco de endereço (CIDR). Escolha `Leitura` (RO) ou `Leitura e escrita` (RW) como tipo de acesso no menu pendente e clique no botão `Assinalar`{.action} para adicionar esta entrada ao ACL.

Na nova janela, aguarde até que o processo esteja finalizado e clique em `Fechar`{.action}.

##### **Eliminar acesso**

Para eliminar um acesso a uma partição, clique no ícone de `caixote do lixo`{.action} correspondente.

![Access](images/nas-ha09.png){.thumbnail}

Na nova janela, valide clicando em `Eliminar acesso`{.action} e aguarde até que o processo termine. Clique em `Fechar`{.action}.

### Parâmetros ZFS <a name="zfs"></a>

> [!warning]
>
> Todos os parâmetros predefinidos do sistema de ficheiros Z são otimizados. Embora desaconselhemos a modificação destes parâmetros, este menu permite-lhe ajustar o ZFS utilizado pelo NAS-HA.
>

Para modificar os parâmetros ZFS de uma partição, clique no botão `...`{.action} à direita da partição em causa e selecione `Parâmetros Z File System (ZFS)`{.action}. 

![zfs](images/nas-ha10.png){.thumbnail}

- **Desativar a atualização dos tempos de acesso (*atime*)**: A desativação do *atime* significa que o kernel não atualizará o horário do sistema de ficheiros a cada acesso a um ficheiro. Isto pode ser útil para acelerar as operações de leitura frequentes, por exemplo em páginas web estáticas. No entanto, esta desativação não é aconselhada para aplicações críticas em termos de coerência, tais como bases de dados.
- **ZFS recordsize**: Esta propriedade altera o tamanho do bloco máximo no sistema de ficheiros ZFS. Note que ZFS utilizará sempre um tamanho de bloco inferior se o ficheiro for inferior ao tamanho máximo. Por exemplo, um ficheiro de 16 KB utilizará um bloco de 16 KB (mais os metadados) para não desperdiçar espaço de armazenamento. De forma geral, desaconselhamos a alteração do ZFS *recordsize*.
- **Sinc**: Este parâmetro altera o comportamento das transações do sistema de ficheiros ZFS no que diz respeito à colocação em memória tampão dos dados RAM e à escrita dos dados no disco. A menos que haja uma razão específica, não aconselhamos a alteração da propriedade.

### Eliminação de uma partição <a name="deletion"></a>

> [!warning]
>
> A eliminação de uma partição apaga definitivamente todos os dados que contém.
>

Para eliminar uma partição, clique no botão `...`{.action} à direita da partição em causa e escolha `Eliminar`{.action}.

![Supressão](images/nas-ha11.png){.thumbnail}

Confirme a ação na janela que aparecer ao clicar em `Eliminar partição`{.action}. Aguarde até que o processo termine e clique em `Fechar`{.action}.

## Quer saber mais? <a name="gofurther"></a>

[Gestão das partições por API](https://docs.ovh.com/pt/storage/nas/nas-partitions-api/)

[Gestão dos ACL de partição através da API](https://docs.ovh.com/pt/storage/nas/nas-manage-acls/)

[Gestão das snapshots através da API](https://docs.ovh.com/pt/storage/nas/nas-snapshots-api/)

[Montar um NAS através de NFS](https://docs.ovh.com/pt/storage/nas-nfs/)

[Montar o seu NAS no Windows Server através do CIFS](../nas-cifs/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
