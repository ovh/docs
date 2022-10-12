---
title: Primeiros passos com um NAS-HA
slug: nas/get-started
excerpt: Saiba como gerir um NAS-HA a partir da Área de Cliente OVHcloud
section: NAS
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 16/09/2021**

## Objetivo

O NAS (Network Attached Storage) é um servidor de ficheiros ligado a uma rede cuja principal função é o armazenamento de dados num volume centralizado para clientes de rede heterogéneos.

## Requisitos

- Dispor de um endereço IP associado a um serviço OVHcloud (Hosted Private Cloud, Servidor Dedicado, VPS, Instância Public Cloud, etc...)
- Dispor de um [NAS-HA](https://www.ovh.pt/nas/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

A gestão do NAS-HA é realizada através da Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

Uma vez ligado, clique em `Bare Metal Cloud`{.action} e, a seguir, em `NAS e CDN`{.action} no menu à esquerda. Clique no serviço para aceder ao menu de administração.

![acesso ao NAS](images/nas2021-01.png){.thumbnail}

### Criar partição

Para adicionar uma nova partição, clique em `Criar uma partição`{.action}.

![criar uma partição](images/nas2021-02.png){.thumbnail}

Basta introduzir o **nome da sua partição**, o **tamanho** desta, bem como o **protocolo autorizado** (NFS ou CIFS).

![atributos da partição](images/nas2021-03.png){.thumbnail}

### Modificar o tamanho de uma partição

Para alterar o tamanho de uma partição, clique no botão `(...)`{.action} situado à direita da partição em causa e, a seguir, em `Alterar o tamanho`{.action}.

![modificar o tamanho de uma partição](images/nas2021-04.png){.thumbnail}

Indique o novo tamanho e valide.

### Alterar a frequência das snapshots

De forma padrão, uma snapshot do conteúdo do NAS será realizada de hora em hora e será registada no NAS.

No entanto, é possível criar até 3 snapshots suplementares com frequências diferentes, caso seja necessário, que serão também registadas no seu NAS.

Para isso, clique no botão `(...)`{.action} situado à direita da partição em causa e, a seguir, em `Frequência dos snapshots`{.action}.

![alterar a frequência das snapshots](images/nas2021-05.png){.thumbnail}

Escolha a nova frequência e valide.

### Criar uma snapshot instantânea

Para além das snapshots realizadas automaticamente, pode a qualquer momento criar uma snapshot instantânea de uma partição, clicando no botão `(...)`{.action} situado à direita da partição e, a seguir, no `Snapshot instantâneo`{.action}.

![snapshot](images/nas2021-10.png){.thumbnail}

Dê um nome à snapshot e clique em `Adicionar`{.action}

### Adicionar um acesso

Para poder aceder à partição que criou anteriormente, deve configurar um acesso.

> [!primary]
>
> Apenas os endereços IP dos serviços OVHcloud podem aceder ao seu NAS (ex: um servidor dedicado, um VPS, uma instância Public Cloud, etc..)
>

Para autorizar um IP a aceder ao NAS, clique no botão `(...)`{.action} situado à direita da partição existente e, a seguir, em `Gerir os acessos`{.action}.

![gerir os acessos](images/nas2021-06.png){.thumbnail}

A seguir, clique em `Adicionar acesso`{.action} e selecione o endereço IP do seu produto OVHcloud.
<br>Deve igualmente definir se o acesso autorizado para este endereço IP está disponível apenas em leitura (*Read-only*) ou em leitura/escrita (*Read/Write*)

![adicionar um acesso](images/nas2021-07.png){.thumbnail}

#### Eliminar um acesso

Para eliminar um acesso a uma partição, clique no botão `(...)`{.action} situado à direita do endereço IP em causa e, a seguir, em `Eliminar`{.action}.

![createaccess](images/nas2021-09.png){.thumbnail}

### Parâmetros Z File System (ZFS)

> [!warning]
>
> Todos os parâmetros ZFS predefinidos são otimizados. Embora desaconselhemos a modificação destes parâmetros, este menu permite ajustar o ZFS utilizado pelo NAS-HA.
>

Para modificar os parâmetros ZFS de uma partição, clique no botão `(...)`{.action} à direita da partição em causa e, a seguir, em `Parâmetros Z File System (ZFS)`{.action}.

![zfs](images/nas2021-13.png){.thumbnail}

- **Desativar a atualização dos tempos de acesso (*atime*)**: A desativação do *atime* significa que o kernel não atualizará o horário do sistema de ficheiros a cada acesso a um ficheiro. Isto pode ser útil para acelerar as operações de leitura frequentes, por exemplo em páginas web estáticas. No entanto, esta desativação não é aconselhada para aplicações críticas em termos de coerência, tais como bases de dados.
- **ZFS recordsize**: Esta propriedade altera o tamanho do bloco máximo no sistema de ficheiros ZFS. Note que ZFS utilizará sempre um tamanho de bloco inferior se o ficheiro for inferior ao tamanho máximo. Por exemplo, um ficheiro de 16 KB utilizará um bloco de 16 KB (mais os metadados) para não desperdiçar espaço de armazenamento. De forma geral, desaconselhamos a alteração do ZFS *recordsize*.
- **Sinc**: Este parâmetro altera o comportamento das transações do sistema de ficheiros ZFS no que diz respeito à colocação em memória tampão dos dados RAM e à escrita dos dados no disco. A menos que haja uma razão específica, não aconselhamos a alteração da propriedade.

### Eliminar partição

> [!alert]
>
> A eliminação de uma partição implica a eliminação total e definitiva de todos os dados nela contidos.
>

Para eliminar uma partição, clique no botão `(...)`{.action} situado à direita da partição existente e, a seguir, em `Eliminar`{.action}.

![eliminar uma partição](images/nas2021-08.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
