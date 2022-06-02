---
title: 'Editar uma zona DNS da OVHcloud'
slug: alojamento_partilhado_como_editar_a_minha_zona_dns
excerpt: 'Saiba como editar uma zona DNS da OVHcloud através da Área de Cliente'
legacy_guide_number: g1604
section: 'DNS e zona DNS'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.

**Última atualização: 01/06/2022**

## Objetivo

### Compreender a noção de DNS <a name="understanddns"></a>

A sigla DNS, que significa **D**Domain **N**ame **S**ystem, é um conjunto de elementos que permitem fazer corresponder um nome de domínio com um endereço IP.

Por exemplo, quando deseja aceder ao site _mydomain.ovh_, o seu pedido é inicialmente tratado por este conjunto DNS que o vai encaminhar para o endereço IP do servidor que aloja o site _mydomain.ovh_.

Tendo em conta as operações que terá de efetuar na Área de Cliente, é importante diferenciar os **servidores DNS** da **zona DNS**. De facto, é ao nível do **servidor DNS** que está configurada a **zona DNS**.

Encontre as informações relativas aos **servidores DNS** e a sua modificação no nosso guia "[Modificar os servidores DNS de um nome de domínio OVHcloud](../partilhado_generalidades_sobre_os_servidores_dns/)".

![DNS](images/dnsserver.png){.thumbnail}

Se retomarmos o exemplo acima, quando escrever _mydomain.ovh_, os **servidores DNS** associados a este domínio serão interrogados. Estes últimos contêm a **zona DNS** do nome de domínio _mydomain.ovh_ onde está indicado o endereço IP do alojamento de _mydomain.ovh_. Assim, o seu browser pode apresentar o site _mydomain.ovh_ contido no alojamento. Chamamos-lhe uma resolução DNS.

![DNS](images/dnssolve.gif){.thumbnail}

### Zona DNS

A zona DNS de um nome de domínio é um ficheiro de configuração composto por **registos**. Estes permitem fazer a ligação entre o seu nome de domínio e os servidores que alojam os seus serviços Internet, tais como websites (através do registo A) ou endereços de e-mail (registo MX).

![DNS](images/dnszone.png){.thumbnail}

**Saiba como editar a zona DNS da OVHcloud através da Área de Cliente.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Ter acesso à secção de gestão do domínio na Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Utilizar a configuração da OVHcloud (os seus servidores DNS) para o domínio em questão.

> [!warning]
>
> - Se o domínio não usar os servidores DNS da OVHcloud, a alteração deverá ser efetuada na interface do agente responsável pela configuração do domínio.
>
> - Se o domínio estiver registado na OVHcloud, pode verificar se este último utiliza a nossa configuração. Para isso, aceda à Área de [Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, separador `Servidores DNS`{.action} do domínio em questão.

## Instruções

### Aceder à gestão de uma zona DNS da OVHcloud

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}. Clique em `Domínios`{.action} e selecione o domínio correspondente. De seguida, clique no separador `Zona DNS`{.action}.

Aparecerá uma tabela com um registo DNS associado ao seu domínio na OVHcloud. Poderá filtrar o conteúdo por tipo de registo ou por nome de domínio.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Os registos DNS

**A alteração de uma zona DNS é uma operação delicada**: uma alteração inadequada poderia, por exemplo, impossibilitar o acesso ao seu website ou a receção de novos e-mails.

Compreender os diferentes registos irá permitir-lhe perceber as alterações que irá efetuar se editar a zona DNS do seu domínio. Sugerimos que consulte a lista abaixo. Deve indicar os objetivos e as especificidades de cada registo.

#### Registos de apontamento

**A**: Associe um domínio a um endereço IPv4. Por exemplo, o endereço IPv4 do servidor onde está alojado o seu website.

**AAAA**: Associe um domínio a um endereço IPv6. Por exemplo, o endereço IPv6 do servidor onde está alojado o seu website.

**CNAME**: Utiliza o endereço IP de outro domínio ao criar um link chamado alias. Por exemplo, se *www.mydomain.ovh* for um alias de _mydomain.ovh_, isso indica que *www.mydomain.ovh* utilizará o endereço IP de _mydomain.ovh_.

> [!alert]
>
> Um registo TXT que utilize o mesmo domínio ou subdomínio que um registo CNAME perturba o funcionamento deste último. O seu registo CNAME só funcionará parcialmente ou de todo.

**Campo NS**: Define os servidores DNS associados à sua zona DNS. Por exemplo, se os registos NS da sua zona DNS mostrarem os servidores _DNS19.ovh.net_ e _ns19.ovh.net_, deverá utilizar estes últimos no separador `Servidores DNS`{.action} da sua Área de Cliente. Para mais informações, consulte o nosso manual "[Modificar os servidores DNS de um domínio OVHcloud](../partilhado_generalidades_sobre_os_servidores_dns/)".

> [!warning]
>
> Não altere, através do botão `Alterar em modo de texto`{.action}, os registos NS da sua zona DNS em benefício de servidores DNS externos à OVHcloud. Esta zona DNS funciona **apenas** com servidores DNS da OVHcloud.

#### Registos de e-mail

**MX**: Associe um domínio a um servidor de e-mail. Por exemplo, o endereço _10 mx1.mail.ovh.net_ corresponde a um dos servidores de e-mail OVHcloud quando possui uma oferta de e-mail OVHcloud. É provável que o seu fornecedor de e-mail disponha de vários servidores de e-mail: assim, devem ser criados vários campos MX. Consulte o nosso manual "[Adicionar um campo MX à configuração do domínio](../e-mail-partilhado-manual-de-configuracao-mx-com-zona-dns-ovh/)".

**SPF** : Permite evitar potenciais usurpações de identidade nos endereços de e-mail que utilizam o seu nome de domínio (spoofing). Por exemplo, o registo _v=spf1 include:mx.ovh.com ~all_ indica que apenas os servidores de envio relacionados com a oferta de e-mail OVHcloud podem ser considerados legítimos pelo servidor de receção. É possível introduzir este registo sob a forma de um registo TXT ou através do nosso sistema de configuração automática. Para mais informações, consulte o nosso manual "[Adicionar um registo SPF à configuração do seu domínio](../partilhado_o_campo_spf/)".

**DKIM**: Permite verificar a autenticidade do nome de domínio do remetente e assegurar a integridade do e-mail enviado. O registo DKIM tem a forma de uma chave composta por vários caracteres. A chave DKIM é fornecida pelo seu prestador de e-mail. É possível que a introduza sob a forma de um campo TXT.

**DMARC**: Contribui para a autenticação dos e-mails em associação com os métodos SPF e/ou DKIM. Este valor ser-lhe-á dado pelo seu fornecedor de e-mail, e será no mínimo associado a um registo SPF ou DKIM.

#### Registos alargados

**TXT**: Permite adicionar o valor da sua escolha, em formato de texto, na zona DNS do seu domínio. Este registo é frequentemente utilizado no processo de verificação.

> [!warning]
>
> O registo TXT está limitado a 255 caracteres. No entanto, em alguns casos, o valor pode ser dividido em vários registos. Insira o seu fornecedor quando este lhe solicitar que indique um valor superior ao limite de 255 caracteres.

**SRV**: Permite indicar o endereço de um servidor que gere um serviço. Por exemplo, pode indicar o endereço de um servidor SIP ou de um servidor que permita a configuração automática de um software de mensagens.

**CAA**: Permite listar as autoridades de certificação autorizadas a serem entregues dos certificados SSL para um domínio.

**NAPTR**: Utilizado em telecomunicações para dirigir um pedido emitido por um terminal móvel para um servidor.

**LOC**: Utilizado para introduzir as informações de posição geográfica.

**SSHFP**: Utilizado para introduzir o vestígio de uma chave pública SSH.

**TLSA**: Utilizado para indicar o cunho de um certificado SSL/TLS.

### Editar a zona DNS da OVHcloud do seu domínio

Pode editar a zona DNS da OVHcloud do seu domínio adicionando, alterando ou eliminando um registo DNS. Para isso, tem duas possibilidades:

#### Modificar manualmente a zona em modo de texto

Apenas para utilizadores experientes.

No separador `Zona DNS`{.action}, clique em `Alterar em modo de texto`{.action} e siga as etapas que aparecem.

#### Utilizar os assistentes de configuração

A partir de agora, o manual apenas irá abordar a configuração realizada através de assistentes.

> [!primary]
>
> Tenha consigo as informações que pretende alterar na zona DNS da OVHcloud. Se efetuar esta modificação a pedido de um fornecedor de serviço, este deve comunicar-lhe a lista dos elementos a modificar.

#### Adicionar um novo registo DNS

Para adicionar um novo registo DNS, clique no separador `Zona DNS`{.action} do domínio e no botão `Adicionar uma entrada`{.action} à direita da tabela. Selecione o tipo de campo DNS e siga os passos.

Sugerimos que verifique previamente se este registo já existe e não aponta para um destino diferente. Para o fazer, filtre o conteúdo da tabela por tipo de registo ou por domínio. Se o registo já existir, sugerimos que o altere através da operação descrita abaixo.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

> Quando o alvo do seu registo for um URL, pense em pontuá-lo. Se não o fizer, o seu domínio será automaticamente adicionado no final do seu alvo.
>
> Exemplo: deseja criar um registo CNAME de _teste.mydomain.ovh_ para _mydomain.ovh_.
>
> A seguir, deverá ter como alvo _mydomain.ovh._ e não _mydomain.ovh_ sem o **.** no final.

#### Alterar um registo DNS existente

Para alterar um registo DNS, aceda ao separador `Zona DNS`{.action} da Área de Cliente e clique no ícone `...`{.action} no painel à direita da entrada selecionada. De seguida, clique em `Alterar entrada`{.action} e siga os passos que aparecem.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### Eliminar um registo DNS existente

Para eliminar um registo DNS, aceda ao separador `Zona DNS`{.action} da Área de Cliente e clique no ícone `...`{.action} no painel à direita da entrada selecionada. De seguida, clique em `Eliminar entrada`{.action} e siga os passos que aparecem.

Pode eliminar várias entradas de uma só vez, selecionando-as a partir da parte esquerda da tabela e clicando no botão `Eliminar`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

#### Reiniciar a zona DNS

Reinicializar a zona DNS permite-lhe:

- voltar a uma configuração mínima com as entradas OVHcloud predefinidas.
- voltar a uma zona DNS vazia (com exceção dos campos NS), para definir uma configuração manual posterior.

No separador `Zona DNS`{.action}, clique em `Reiniciar zona DNS`{.action} e siga os passos que aparecem.

![dnszone](images/edit-dns-zone-ovh-reset.png){.thumbnail}

Pode escolher entre:

- `Sim, quero reiniciar a minha zona DNS com o número mínimo de entradas`. Esta opção permite-lhe dirigir o seu nome de domínio e o seu serviço de e-mail para:
    - um dos serviços Web Cloud disponíveis na Área de Cliente OVHcloud.
    - o serviço de reencaminhamento OVHcloud, acessível através do separador `Reencaminhamento`{.action} do seu nome de domínio nas secções `Nomes de domínio`{.action} e `E-mails`{.action}.
    - a função `Personalizada`. Introduza o campo `A` e/ou `MX` à sua escolha.
- `Não, mas quero reiniciar a minha zona DNS`. A sua zona DNS estará vazia, com exceção das entradas NS que serão automaticamente associadas aos servidores DNS da OVHcloud da sua zona DNS.

> [!primary]
>
> Antes de reiniciar a zona DNS, certifique-se de que o domínio não está associado a serviços em utilização, tais como um website ou endereços de e-mail.
>

### Tempo de propagação

Depois de alterar a zona DNS do domínio, é necessário aguardar 24 horas até que as alterações sejam efetivas.

Se pretender reduzir este tempo de espera para as próximas edições da sua zona DNS da OVHcloud, poderá alterá-lo, em certa medida, ajustando o TTL (_Time To Live_) que será aplicado a todos os registos da zona DNS.
Para isso, aceda ao separador `Zona DNS`{.action} da Área de Cliente, clique no botão `TTL predefinido`{.action} e siga os passos que vão aparecer.

Também pode alterar o TTL de um registo DNS. No entanto, esta operação só pode ser efetuada num registo de cada vez, alterando-o ou adicionando-o.

## Saiba mais

[Alterar os servidores DNS de um nome de domínio OVHcloud](../partilhado_generalidades_sobre_os_servidores_dns/){.external}

[Como configurar o registo SPF de um domínio](../partilhado_o_campo_spf/){.external}

[Proteja o seu domínio contra o Cache Poisoning graças ao DNSSEC](../proteja_o_seu_dominio_com_dnssec/){.external}

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>
