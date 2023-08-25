---
title: 'Alterar os servidores DNS de um nome de domínio OVHcloud'
excerpt: 'Saiba como alterar os servidores DNS do seu nome de domínio OVHcloud'
updated: 2021-02-18
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.

## Objetivo

### Compreender a noção de DNS 

A sigla DNS, que significa **D**omain **N**ame **S**ystem, é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um domínio a um endereço IP.

### Os servidores DNS 

Os **servidores DNS** contêm ficheiros de configuração DNS para nomes de domínio, denominados **zonas DNS**.

Uma zona DNS contém informações técnicas, chamadas *registos DNS*. A zona DNS é como um centro de comando.

Por exemplo, pode especificar:

- O endereço IP (registos DNS do tipo *A* e *AAAA*) do seu alojamento web para apresentar o seu website com o seu nome de domínio.
- Os servidores de e-mail (registos DNS do tipo *MX*) para os quais o seu domínio deve reencaminhar os e-mails que recebe. Isto permite-lhe consultá-los no(s) seu(s) endereço(s) de e-mail(s) personalizado(s) com o seu nome de domínio.
- Informações relacionadas com a segurança / autenticação dos seus serviços (alojamento web, servidor web, servidor de e-mail, etc.) associados ao seu nome de domínio (registos DNS do tipo *SPF*, *DKIM*, *DMARC*, etc.).

Para mais informações sobre as zonas DNS, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web/domínios/dns_zone_edit)".

Por este motivo, os **servidores DNS** devem ser declarados no domínio para utilizarem a zona DNS que alojam. 

![DNS](images/dnsserver.png){.thumbnail}

Os **servidores DNS** funcionam normalmente ao par:

- Um servidor DNS *principal* que reencaminha os fluxos de pedidos recebidos pelo nome de domínio para a zona DNS que aloja para este último. A zona DNS efetua assim a *resolução DNS* para reencaminhar os fluxos para os serviços corretos (servidores, website, e-mails, etc.) associados ao domínio.
- Um servidor DNS *secundário* diz *de reserva* que é utilizado se o servidor *principal* está saturado, indisponível ou responde menos rapidamente que o servidor *secundário*.

Por vezes, alguns fornecedores DNS propõem mais de 2 **servidores DNS** a declarar junto do seu domínio. Neste caso, indique todos os servidores DNS propostos pelo seu fornecedor DNS.

**Saiba como alterar os servidores DNS do seu domínio OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></ifra

## Requisitos

- Ter um [nome de domínio](https://www.ovhcloud.com/pt/domains/) registado na OVHcloud.
- Dispor das autorizações [adequadas para gerir](/pages/account/customer/managing_contact) o nome de domínio a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

> [!primary]
>
> Um *registrar* é uma organização autorizada a vender nomes de domínio. A OVHcloud faz parte destes *registrars*.
>
> Se o domínio não estiver registado na OVHcloud, terá de alterar os servidores DNS no *registrar*, onde o seu domínio está registado.
>

## Instruções

> [!warning]
>
> **Tenha cuidado ao alterar os servidores DNS de um domínio.** Um erro de manipulação pode tornar o seu website inacessível ou impedir que os seus endereços de e-mail recebam novos e-mails. Compreender as consequências de uma tal modificação permitir-lhe-á compreender melhor a mudança que vai efetuar.
>

Ao alterar os servidores DNS do seu domínio, estará a alterar a sua configuração DNS. A nova configuração DNS substitui a anterior e é armazenada nos servidores DNS que definiu por último. Tecnicamente, o domínio utiliza uma nova zona DNS.

No entanto, é essencial notar que:

- Aquando de uma mudança de servidor DNS (e.g. DNS externo por DNS OVHcloud), o conteúdo da antiga configuração/zona DNS não é automaticamente replicado na nova. Certifique-se de que a nova zona DNS contém todos os registos DNS necessários para que os serviços associados ao domínio funcionem corretamente (por exemplo, o website e os endereços de e-mail).

- Se pretender alterar, não os servidores DNS, mas um ou vários registos da sua configuração/zona DNS atual, consulte o nosso guia: "[Editar uma zona DNS da OVHcloud](/pages/web/domínios/dns_zone_edit)".

- Certas organizações, os registos que gerem as extensões de domínios, têm exigências particulares relativamente aos servidores DNS (quantidade de servidores de nomes, valor dos registos, etc.). Em caso de dúvida, contacte o agente de registo responsável pelo domínio.

Certifique-se de que as modificações não irão afetar a disponibilidade do seu domínio. Se não tiver a certeza, contacte a pessoa que lhe pede para realizar estas alterações.


### Aceder à gestão dos servidores DNS da OVHcloud

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e escolha o domínio em causa. Por fim, selecione o separador `Servidores DNS`{.action}.

Aparecerá uma tabela com os servidores DNS atualmente definidos pela OVHcloud para o seu domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.

> [!primary]
>
> Quando utiliza os servidores DNS da OVHcloud, os números presentes nos nomes dos servidores não têm qualquer ligação com o(s) serviço(s) que utiliza. Apenas a opção [DNS anycast](https://www.ovhcloud.com/pt/domains/options/) utiliza servidores DNS específicos que lhe são automaticamente atribuídos. 

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Modificar os servidores DNS

Se pretender utilizar servidores DNS externos, deve substituí-los pelos servidores DNS da OVHcloud, e não adicioná-los a estes.

Clique em `Modificar os servidores DNS`{.action} à direita.

Nos formulários de introdução, **substitua** os valores atuais dos servidores DNS pelas informações relativas aos novos servidores DNS que deseja definir. Para adicionar outros servidores à lista ativa, clique no botão `+`{.action} situado à direita da última linha da tabela. Aparecerá uma linha adicional na tabela que poderá preencher.

> [!warning]
>
> Tenha o cuidado de não misturar um grupo de servidores DNS com outro. 
>
> Por exemplo, *dns19.ovh.net* e *ns19.ovh.net* correspondem a um grupo de servidores DNS da OVHcloud, andam de mãos dadas e são sincronizados. Se adicionar servidores DNS externos à OVHcloud (ou a um grupo diferente da OVHcloud), a resolução DNS será efetuada de forma aleatória entre os servidores DNS da OVHcloud e os servidores DNS externos indicados.
>
> Na OVHcloud, os grupos de servidores DNS são identificáveis através do número presente nos nomes dos servidores. Dois servidores DNS da OVHcloud fazem parte de um mesmo grupo de servidores sempre que partilham o mesmo número. Por exemplo, *dns19.ovh.net* e *ns19.ovh.net*.
>

Depois de introduzir estas informações, clique em `Aplicar configuração`{.action}. Os estados dos servidores DNS serão atualizados na tabela e as novas informações aparecerão.

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

> [!success]
>
> A modificação dos servidores DNS associados a um domínio leva a um atraso de propagação de **24** a **48** horas no máximo para que esta última seja efetiva.
>

#### Casos particulares: Reiniciar os servidores DNS 

O botão `Reiniciar os servidores DNS`{.action} permite reiniciar os servidores DNS atuais, substituindo-os automaticamente pelos servidores DNS da OVHcloud de origem. Utilize esta opção **apenas** se pretender reutilizar os servidores DNS da OVHcloud (e a zona DNS da OVHcloud associada aos seus servidores DNS). 

![dnsserver](images/edit-dns-server-ovh-step3.png){.thumbnail}

Depois de realizar as alterações necessárias, deverá esperar que as alterações se propaguem. Devem ser tidos em conta dois períodos sucessivos:

- A modificação efetuada no lado da OVHcloud deve ser tida em conta pelo *registrar* que gere a sua extensão de domínio (por exemplo, o registry das extensões em *.pt*). Pode seguir o progresso da operação na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
Para isso, aceda à parte `Web Cloud`{.action}, aceda à secção `Nomes de domínio`{.action} na coluna à esquerda e clique em `Operações em curso`{.action};
- Depois de a organização responsável pela gestão da sua extensão registar as alterações, a modificação poderá demorar até **48 horas** para que as alterações efetuadas possam ser propagadas.

## Quer saber mais?

[Modificação de uma zona DNS da OVHcloud](/pages/web/domains/dns_zone_edit).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 