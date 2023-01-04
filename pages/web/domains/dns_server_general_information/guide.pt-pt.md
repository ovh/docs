---
title: 'Alterar os servidores DNS de um nome de domínio OVHcloud'
slug: partilhado_generalidades_sobre_os_servidores_dns
excerpt: 'Saiba como alterar os servidores DNS do seu nome de domínio OVHcloud'
legacy_guide_number: g2015
section: DNS e zona DNS
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.

**Última atualização: 18 de fevereiro de 2021**

## Objetivo

### Compreender a noção de DNS

A sigla DNS, que significa **D**omain **N**ame **S**ystem, é um conjunto de elementos que permitem fazer corresponder um nome de domínio com um endereço IP.

Encontre a explicação completa no guia "[Editar uma zona DNS da OVHcloud](../alojamento_partilhado_como_editar_a_minha_zona_dns/#understanddns)".

### Os servidores DNS

Os **servidores DNS** contêm os ficheiros de configurações DNS dos nomes de domínio, denominados **zonas DNS**.

![DNS](images/dnsserver.png){.thumbnail}

Os servidores DNS são geralmente utilizados por grupos de dois (primário e secundário), com o objetivo de obter uma redundância em caso de falha de um dos servidores DNS.

**Saiba como alterar os servidores DNS do seu domínio OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Dispor de um [domínio](https://www.ovhcloud.com/pt/domains/) registado na OVHcloud.
- Ter as autorizações [adequadas para gerir](https://docs.ovh.com/pt/customer/gestao_dos_contactos/){.external} o domínio a partir da Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

> [!primary]
>
> Se o domínio não estiver registado na OVHcloud, deverá alterar os servidores DNS utilizando a interface fornecida pelo prestador de serviços que o gere.

## Instruções

> [!warning]
>
> **Recomendamos que tenha cuidado ao alterar os servidores DNS de um domínio.** Um erro de manipulação pode tornar o seu website inacessível ou impedir os seus endereços de e-mail de receber novos e-mails. Iremos explicar os impactos de uma alteração da configuração de um alojamento web para que compreenda as consequências.

Quando altera os servidores DNS do seu domínio, está a modificar a sua configuração DNS. A nova configuração DNS substitui a anterior e é armazenada nos servidores DNS recentemente definidos. Tecnicamente, o nome de domínio utiliza uma nova zona DNS.

No entanto, é importante notar que:

- Aquando da alteração do servidor DNS (e.g. DNS externo por DNS OVHcloud), o conteúdo da antiga configuração DNS não é automaticamente replicado na nova. Certifique-se de que a nova zona DNS inclui todos os registos DNS necessários para que os serviços associados ao seu nome de domínio funcionem corretamente (por exemplo, o seu website e os seus endereços de e-mail).

- Se pretender alterar um único elemento da sua configuração DNS atual (por exemplo, um registo DNS), recomendamos que siga as instruções para alterar a zona DNS: "[Editar uma zona DNS da OVHcloud](../alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}".

- Certas organizações, os registos, que gerem as extensões de nomes de domínio, têm exigências particulares relativamente aos servidores DNS (quantidade de servidores de nomes, valor dos registos..). Em caso de dúvida, verifique junto do registo responsável pelo domínio.

Certifique-se de que as alterações não irão afetar o acesso do seu domínio. Se não tiver a certeza, contacte a pessoa que solicita as alterações.

### Aceder à gestão dos servidores DNS da OVHcloud

Em primeiro lugar, aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e escolha o domínio em causa. De seguida, clique no separador `Servidores DNS`{.action}.

A tabela que aparecer apresenta os servidores DNS atualmente definidos pela OVHcloud para o seu domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.

> [!primary]
>
> Quando utiliza os servidores DNS da OVHcloud, os números dos servidores não têm ligação com o(s) serviço(s) que utiliza. Apenas a opção [DNS anycast](https://www.ovhcloud.com/pt/domains/options/dns-anycast/) utiliza servidores DNS específicos que lhe são automaticamente atribuídos.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Modificar os servidores DNS

Se pretender utilizar servidores DNS externos, deve substituí-los pelos servidores DNS da OVHcloud e não adicioná-los a estes últimos.

Clique em `Alterar os servidores DNS`{.action} à direita.

Nos campos de texto, **substitua** os valores atuais dos servidores DNS pelas informações relativas aos novos servidores que deseja definir. Para adicionar outros servidores à lista ativa, clique no botão `+`{.action} situado à direita da última linha da tabela. Aparecerá então uma linha adicional onde poderá preencher os campos.

> [!warning]
>
> Tenha o cuidado de não misturar um grupo de servidores DNS com outro.
> Por exemplo, _DNS19.ovh.net_ e _ns19.ovh.net_ correspondem a um grupo de servidores DNS da OVHcloud, são idênticos e sincronizados. Se adicionar servidores DNS externos à OVHcloud (ou de um grupo OVHcloud diferente), a resolução DNS será realizada de forma aleatória entre os servidores DNS da OVHcloud e os servidores DNS externos indicados.

Depois de introduzir estas informações, clique em `Aplicar configuração`{.action}. Os estados dos servidores DNS serão atualizados na tabela e as novas informações aparecerão.

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Reinicializar os servidores DNS

Ao clicar no botão `Reinicializar os servidores DNS`{.action}, pode reinicializar os servidores DNS atuais substituindo-os automaticamente pelos servidores DNS da OVHcloud de origem. Recomendamos que utilize esta opção apenas se pretender reutilizar os servidores DNS da OVHcloud.

![dnsserver](images/edit-dns-server-ovh-step3.png){.thumbnail}

Depois de realizar as alterações necessárias, deverá esperar que as alterações se propaguem. Deve ter em conta dois prazos diferentes:

- a alteração introduzida na OVHcloud deve ser tomada em conta pelo registry que gere a sua extensão de nome de domínio. Para seguir o progresso da operação, aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Domínios`{.action}, e `Operações em curso`{.action}.
- Depois de o organismo responsável pela gestão da sua extensão registar as alterações, a modificação poderá demorar até 48 horas para ficar efetiva.

## Saiba mais

[ Modificação de uma zona](../alojamento_partilhado_como_editar_a_minha_zona_dns/){.external} DNS da OVHcloud.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
