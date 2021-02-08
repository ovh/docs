---
title: 'Editar uma zona DNS da OVH'
slug: alojamento_partilhado_como_editar_a_minha_zona_dns
excerpt: 'Saiba como editar uma zona DNS da OVH através da Área de Cliente'
legacy_guide_number: g1604
---

**Última atualização: 13/02/2019**

## Sumário

A zona Domain Name System (DNS) constitui o ficheiro de configuração de um domínio. É composta por informações técnicas, conhecidas como registos. Numa utilização clássica, estes registos permitem fazer a ligação entre o seu nome de domínio e os servidores que alojam o seu website e os seus endereços de e-mail.

**Saiba como editar facilmente uma zona DNS OVH através da Área de Cliente.**

## Requisitos

- Ter acesso à secção de gestão do domínio na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Utilizar a configuração da OVH (os servidores DNS) para o domínio em questão.

> [!warning]
>
> - Se o domínio não usar os servidores DNS da OVH, a alteração deverá ser efetuada na interface do fornecedor responsável pela configuração do seu domínio.
> - Se o domínio estiver registado na OVH, pode verificar se este último utiliza a nossa configuração. Para isso, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em “Domínios” e selecione o domínio em questão. A seguir, clique no separador `Servidores DNS`{.action}.
>

## Instruções

**A alteração de uma zona DNS é uma operação delicada**: uma alteração inadequada poderia, por exemplo, impossibilitar o acesso ao seu website ou a receção de novos e-mails.

Compreender os diferentes registos irá permitir-lhe perceber as alterações que irá efetuar se editar a zona DNS do seu domínio. Recomendamos vivamente que consulte a tabela abaixo, uma vez que apresenta as especificidades de cada registo.

|Tipo de registo|Descrição|  
|---|---|
|A|Permite associar um domínio a um endereço de IP (IPv4). Por exemplo, o endereço de IP do servidor onde está alojado o seu website.|
|AAAA|Permite associar um domínio a um endereço de IP (IPv6). Por exemplo, o endereço de IP do servidor onde está alojado o seu website.|
|CNAME|Permite que um domínio utilize o(s) endereço(s) de IP de outro domínio associando-os um ao outro, em função do princípio do alias. Por exemplo, se *www.mypersonaldomain.ovh* é um alias de *mypersonaldomain.ovh*, isto significa que *www.mypersonaldomain.ovh* irá utilizar o(s) endereço(s) de IP de *mypersonaldomain.ovh*.|
|MX|Permite associar um domínio a um servidor de e-mail. Por exemplo, o endereço do servidor onde está alojado a sua solução de e-mail. É provável que o fornecedor disponha de vários servidores de e-mail e, por isso, é necessário criar vários campos MX.|
|SRV|Permite indicar o endereço de um servidor que gere um serviço. Por exemplo, este registo pode indicar o endereço de um servidor SIP ou de um servidor que permite a configuração automática de um software de correio, em função do princípio do autodiscover.|
|TXT|Permite adicionar um valor à sua escolha (em formato texto) às configurações DNS do seu domínio. Este registo é frequentemente utilizado no processo de verificação.|
|SPF|Permite evitar possíveis usurpações de identidade com os endereços de e-mail que utilizam o seu nome de domínio. Por exemplo, este registo pode indicar que o único servidor do seu fornecedor de soluções de e-mail deve ser identificado como fonte legítima de envio. Para saber mais, consulte a [documentação sobre o registo SPF](https://docs.ovh.com/pt/domains/partilhado_o_campo_spf/){.external}.|
|CAA|Permite listar as autoridades de certificação autorizadas a serem entregues dos certificados SSL para um domínio.|

### 1 - Aceder à gestão da zona DNS da OVH do seu domínio

Para iniciar esta operação, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Domínios`{.action} na barra à esquerda e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

Na tabela, pode ver a configuração do seu domínio na OVH. Esta tabela inclui vários registos DNS (um por cada linha). Poderá filtrar o conteúdo por tipo de registo ou por nome de domínio.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### 2 - Editar a zona DNS da OVH do domínio

Pode editar a zona DNS da OVH do seu domínio adicionando, alterando ou eliminando um registo DNS. Para isso, tem duas possibilidades:

- **Alterar manualmente a zona em modo de texto**: para utilizadores experientes apenas. No separador `Zona DNS`{.action}, clique em `Editar em modo de texto`{.action} e siga as instruções que aparecem.

- **Utilizar os assistentes de configuração da OVH**.

A partir de agora, o manual apenas irá abordar a configuração realizada através de assistentes.

> [!primary]
>
> Tenha consigo as informações que pretende alterar na zona DNS da OVH. Se efetuar esta alteração a pedido de um fornecedor de serviços, este deve lhe ter indicado a lista dos elementos que deve alterar.
>

- **Adicionar um novo registo DNS**

Para adicionar um novo registo DNS, aceda sempre ao separador `Zona DNS`{.action} na Área de Cliente e clique no botão `Adicionar uma entrada`{.action} à direita da tabela. Selecione o tipo de campo DNS e siga as instruções.

Contudo, recomendamos que verifique se este registo já existe e se não está a apontar para um destino diferente. Para o fazer, filtre o conteúdo da tabela por tipo de registo ou por domínio. Se este já existir, sugerimos que o altere através da operação descrita abaixo.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Alterar um registo DNS existente**

Para alterar um registo DNS, aceda sempre ao separador `Zona DNS`{.action} da Área de Cliente e clique no ícone de três pontos à direita do registo pretendido. De seguida, clique em `Modificar entrada`{.action} e siga os passos que aparecem.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Eliminar um registo DNS existente**

Para eliminar um registo DNS, aceda sempre ao separador `Zona DNS`{.action} da Área de Cliente e clique no ícone de três pontos à direita do registo pretendido. De seguida, clique em `Eliminar entrada`{.action} e siga as etapas que aparecem.

Pode eliminar várias entradas de uma só vez selecionando-as nos quadrados à esquerda da tabela e, a seguir, clicando em `Eliminar`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### 3 - Aguardar o tempo de propagação

Uma vez modificada a zona DNS da OVH do domínio, é necessário um tempo máximo de propagação de 24 horas até as alterações serem efetivas.

Se pretender reduzir esse tempo de espera para as suas próximas alterações da zona DNS da OVH, pode alterá-lo, de certa forma, ajustando o TTL (*Time To Live*) que será aplicado a todos os registos da zona DNS.
Para isso, aceda ao separador `Zona DNS`{.action} na Área de Cliente, clique no botão `Modificar o TTL por predefinição`{.action} e siga as etapas que aparecem.  

Além disso, também é possível alterar o TTL de um registo DNS. No entanto, esta operação só pode ser efetuada de registo para registo, alterando-os ou efetuando uma adição.

## Quer saber mais?

[Alterar os servidores DNS de um nome de domínio OVH](https://docs.ovh.com/pt/domains/partilhado_generalidades_sobre_os_servidores_dns/){.external}

[Como configurar o registo SPF de um domínio](https://docs.ovh.com/pt/domains/partilhado_o_campo_spf/){.external}

[Proteja o seu domínio contra o Cache Poisoning graças ao DNSSEC](https://www.ovh.pt/dominios/servico_dnssec.xml){.external}

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}