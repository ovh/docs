--- 
title: Enterprise File Storage - Faça a gestão das suas políticas de snapshots
excerpt: "Descubra como criar uma política de snapshot, aplicá-la no seu volume, alterá-la e eliminá-la a partir da Área de Cliente"
updated: 2023-08-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Neste guia, vamos dar-lhe uma visão geral da gestão das suas políticas de snapshots para os volumes Enterprise File Storage da OVHcloud.

**Saiba como criar uma política de snapshots, aplicá-la no seu volume, modificá-la e eliminá-la a partir da Área de Cliente.**

## Requisitos

- Um serviço Enterprise File Storage da OVHcloud com um volume disponível
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Princípios básicos

Uma snapshot de volume é uma cópia pontual apenas de leitura de um volume.
As snapshots são criadas a partir de um volume operacional existente. Eles não podem existir sem isso. 
Uma política de snapshot permite automatizar a criação de snapshots graças a diferentes parâmetros. A política pode ser modificada e eliminada se já não precisar dela.

## Instruções

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione o separador `Bare Metal Cloud`{.action} na barra de navegação superior. Abra o `Armazenamento e backup`{.action} e depois o `Enterprise File Storage`{.action} no menu à esquerda e selecione o seu serviço na lista.

### Criar a política de snapshot

Uma política de snapshots permite automatizar as snapshots, definindo a frequência de criação em minutos, horas, dias, semanas ou meses. 
Também é necessário especificar o número de cópias que pretende conservar.

1\. Clique no separador `Políticas de snapshots`{.action}.

![SnapshotPolicy](images/Snapshot_Policy_1.png){.thumbnail}

2\. Defina o nome da política de snapshot, uma descrição para a mesma e utilize o botão `+ Adicionar uma nova regra`{.action} para adicionar uma ou várias regras à política.

![SnapshotPolicy](images/Snapshot_Policy_2.png){.thumbnail}

3\. Preencha os campos para especificar a hora, os dias do mês, os dias da semana e os meses para a criação da snapshot. Deverá igualmente introduzir um prefixo para as snapshots, necessário à sua denominação.

Pode encontrar informações mais detalhadas para cada valor clicando no ponto de interrogação. Ao desenvolver a secção `Exemplo`{.action}, poderá apresentar dois conjuntos de regras com uma explicação do seu resultado.

Clique na marca de verificação para adicionar a nova regra. Depois de adicionar todas as regras, clique em `Criar uma nova política de snapshots`{.action}.

> [!primary]
> Deve especificar um prefixo e uma duração em minutos. Como opção, pode introduzir as horas, dias e meses de execução para melhorar o seu planeamento.
>

Não é possível alterar a política de snapshots depois de a ter criado. Se necessitar de aplicar novos parâmetros de frequência, terá de eliminar a política de snapshot atual e criar uma nova.

### Aplicar uma política de snapshot 

Uma vez criada a política de snapshots, pode aplicá-la num volume.

1\. Aceda ao separador `Volumes`{.action} do pool de capacidade.

![ApplySnapshotPolicy](images/Snapshot_Policy_3.png){.thumbnail}

2\. Selecione o volume a que deve ser aplicada a política de snapshots na lista.
3\. Aceda à secção `Snapshots`{.action}" e à secção `Gerir a política de snapshots`{.action}, selecione a política que pretende aplicar. 
4\. Clique no botão `Aplicar a política`{.action}.

![ApplySnapshotPolicy](images/Snapshot_Policy_4.png){.thumbnail}

### Eliminar uma política de snapshot

> [!warning]
>
> Uma política de snapshots associada a um volume não pode ser eliminada. Se pretender eliminar uma política de snapshot associada a um ou vários volumes, deve primeiro dissociar essa política associando outra política de snapshot a esses volumes.
>

Para eliminar uma política de snapshots:

1\. Aceda ao separador `Políticas de snapshots`{.action} do pool de capacidade.

![DeleteSnapshotPolicy](images/Snapshot_Policy_5.png){.thumbnail}

2\. Selecione a política que pretende eliminar.
3\. Clique no botão de eliminação representado por uma `lixeira`{.action}.

![DeleteSnapshotPolicy](images/Snapshot_Policy_6.png){.thumbnail}

## Quer saber mais? <a name="go-further"></a>

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.