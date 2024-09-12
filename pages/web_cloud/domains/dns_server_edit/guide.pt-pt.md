---
title: 'Alterar os servidores DNS de um nome de domínio OVHcloud'
excerpt: 'Saiba como alterar os servidores DNS do seu nome de domínio OVHcloud'
updated: 2024-09-16
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.

## Objetivo

A sigla DNS, que significa **D**omain **N**ame **S**ystem, é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um domínio a um endereço IP.

Consulte os nossos manuais "[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" para mais informações.

**Saiba como alterar os servidores DNS do seu domínio OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Ter um [nome de domínio](/links/web/domains) registado na OVHcloud.
- Dispor das autorizações [adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio a partir do seu [Área de Cliente OVHcloud](/links/manager){.external}.
Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}.

> [!primary]
>
> Um **registrar** é uma organização autorizada a vender nomes de domínio. A OVHcloud faz parte destes **registrars**.
>
> Se o domínio não estiver registado na OVHcloud, terá de alterar os servidores DNS no **registrar**, onde o seu domínio está registado.
>

## Instruções

> [!warning]
>
> **Tenha cuidado ao alterar os servidores DNS de um domínio.** Um erro de manipulação pode tornar o seu website inacessível ou impedir que os seus endereços de e-mail recebam novos e-mails. Compreender as consequências de uma tal modificação permitir-lhe-á compreender melhor a mudança que vai efetuar.
>

Ao alterar os servidores DNS do seu domínio, estará a alterar a sua configuração DNS. A nova configuração DNS substitui a anterior e é armazenada nos servidores DNS que definiu por último. Tecnicamente, o domínio utiliza uma nova zona DNS.

No entanto, é essencial notar que:

- Aquando de uma mudança de servidor DNS (e.g. DNS externo por DNS OVHcloud), o conteúdo da antiga configuração/zona DNS não é automaticamente replicado na nova. Certifique-se de que a nova zona DNS contém todos os registos DNS necessários para que os serviços associados ao domínio funcionem corretamente (por exemplo, o website e os endereços de e-mail).

- Se pretender alterar, não os servidores DNS, mas um ou vários registos da sua configuração/zona DNS atual, consulte o nosso guia: "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- Certas organizações, os registos que gerem as extensões de domínios, têm exigências particulares relativamente aos servidores DNS (quantidade de servidores de nomes, valor dos registos, etc.). Em caso de dúvida, contacte o agente de registo responsável pelo domínio.

Certifique-se de que as modificações não irão afetar a disponibilidade do seu domínio. Se não tiver a certeza, contacte a pessoa que lhe pede para realizar estas alterações.

### Aceder à gestão dos servidores DNS da OVHcloud

Aceda à [Área de Cliente OVHcloud](/links/manager){.external} e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e escolha o domínio em causa. Por fim, selecione o separador `Servidores DNS`{.action}.

Aparecerá uma tabela com os servidores DNS atualmente definidos pela OVHcloud para o seu domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.

> [!primary]
>
> Quando utiliza os servidores DNS da OVHcloud, os números presentes nos nomes dos servidores não têm qualquer ligação com o(s) serviço(s) que utiliza. Apenas a opção [DNS anycast](/links/web/domains-options) utiliza servidores DNS específicos que lhe são automaticamente atribuídos.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Modificar os servidores DNS

Se pretender utilizar servidores DNS externos, deve substituir os servidores DNS da OVHcloud por esses servidores DNS externos e não adicioná-los.

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

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/edit-dns-servers.png){.thumbnail}

> [!success]
>
> A modificação dos servidores DNS associados a um domínio leva a um atraso de propagação de **24** a **48** horas no máximo para que esta última seja efetiva.
>

#### Casos particulares: Reiniciar os servidores DNS 

O botão `Reiniciar os servidores DNS`{.action} permite reiniciar os servidores DNS atuais, substituindo-os automaticamente pelos servidores DNS da OVHcloud de origem. Utilize esta opção **apenas** se pretender reutilizar os servidores DNS da OVHcloud (e a zona DNS da OVHcloud associada aos seus servidores DNS). 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/reset-the-dns-servers.png){.thumbnail}

Depois de realizar as alterações necessárias, deverá esperar que as alterações se propaguem. Devem ser tidos em conta dois períodos sucessivos:

- A modificação efetuada no lado da OVHcloud deve ser tida em conta pelo *registrar* que gere a sua extensão de domínio (por exemplo, o registry das extensões em *.pt*). Pode seguir o progresso da operação na sua [Área de Cliente OVHcloud](/links/manager){.external}. Para isso, aceda à parte `Web Cloud`{.action}, aceda à secção `Nomes de domínio`{.action} na coluna à esquerda e clique em `Operações em curso`{.action}.
- Depois de a organização responsável pela gestão da sua extensão registar as alterações, a modificação poderá demorar até **48 horas** para que as alterações efetuadas possam ser propagadas.

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Modificação de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).