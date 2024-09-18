---
title: "Alterar os servidores DNS de um nome de domínio OVHcloud"
excerpt: "Saiba como alterar os servidores DNS do seu domínio registado na OVHcloud"
updated: 2024-09-16
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A sigla **DNS** (**D**omain **N**ame **S**ystem), é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um domínio a um endereço IP.

Consulte os nossos manuais "[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" para mais informações.

**Saiba como alterar os servidores DNS do seu domínio OVHcloud em 3 etapas.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Ter um [nome de domínio](/links/web/domains) registado na OVHcloud.
- Ter as permissões [adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio a partir da [Área de Cliente OVHcloud](/links/manager).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

> [!primary]
>
> Um **agente de registo** é uma organização com permissão para vender domínios. A OVHcloud faz parte destes **agentes de registo**.
>
> Se o domínio não estiver registado na OVHcloud, terá de modificar os servidores DNS no **agente de registo**, onde está atualmente registado o seu domínio.
>

## Instruções

> [!alert]
>
> **Tenha cuidado ao alterar os servidores DNS de um nome de domínio.**
>
> Um erro de manipulação pode fazer com que o seu website fique inacessível ou impedir que os seus endereços de e-mail recebam novos e-mails. Compreender as consequências de tal modificação irá permitir-lhe compreender melhor as alterações que vai efetuar.

Ao alterar os servidores DNS do seu domínio, estará a alterar a sua configuração DNS. A nova configuração DNS substitui a anterior e é armazenada nos servidores DNS que definiu por último. Tecnicamente, o domínio utiliza uma nova zona DNS.

No entanto, é essencial ter em conta os seguintes pontos:

- Durante uma mudança de servidor DNS (por exemplo, um DNS externo por um DNS da OVHcloud), o conteúdo da antiga configuração / zona DNS não é automaticamente replicado na nova. Certifique-se de que a nova zona DNS contém todos os registos DNS necessários para que os serviços associados ao domínio funcionem corretamente (por exemplo, o website e os endereços de e-mail).
- Se não pretender alterar os servidores DNS, mas um ou vários registos da sua configuração / zona DNS atual, consulte o nosso guia: "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
- Certas organizações, os registos que gerem as extensões de domínios, têm exigências particulares relativamente aos servidores DNS (quantidade de servidores de nomes, valor dos registos, etc.). Em caso de dúvida, contacte o agente de registo responsável pelo domínio.

### Etapa 1 - Aceder à gestão dos servidores DNS da OVHcloud <a name="access-dns-servers"></a>

Para isso, efetue as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
4. Selecione o domínio em causa.
5. Na página que se abrir, clique no separador `Servidores DNS`{.action}.

Aparecerá uma tabela com os servidores DNS atualmente definidos pela OVHcloud para o seu domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.

> [!primary]
>
> Quando utiliza os servidores DNS da OVHcloud, os números presentes nos nomes dos servidores não têm qualquer ligação com o(s) serviço(s) que utiliza. Apenas a opção [DNS anycast](/links/web/domains-options) utiliza servidores DNS específicos (`ns200.anycast.me` e `dns200.anycast.me`). Uma vez subscritos, os direitos de autor são automaticamente atribuídos a si.

![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Etapa 2 - Alterar os servidores DNS <a name="modify-dns-servers"></a>

> [!primary]
>
> Todas as funcionalidades descritas abaixo são efetuadas no separador `Servidores DNS`{.action} mencionado no [etapa 1](#access-dns-servers) deste guia.
>

Para alterar os servidores DNS, clique no botão `Modificar os servidores DNS`{.action}, situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, os botões podem estar situados por baixo da tabela.

Surge uma nova página com três opções de edição.

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers.png){.thumbnail}

#### Opção 1 - Utilizar os DNS predefinidos da OVHcloud

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}

Esta opção permite aplicar automaticamente a configuração da zona DNS da OVHcloud existente ao seu domínio. Em primeiro lugar, certifique-se de que existe uma zona DNS na OVHcloud para o seu domínio.

> [!primary]
>
> Se necessário, consulte os manuais "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" e/ou "[Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create)" para verificar se existe uma zona DNS da OVHcloud para o seu domínio.

Para utilizar os servidores DNS predefinidos da OVHcloud, clique em `Aplicar configuração`{.action}. Surge a seguinte janela:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}

Ela resume os nomes dos 2 servidores DNS que serão aplicados ao seu domínio. Devem ter uma das 3 seguintes formas:

- `nsXX.ovh.net` e `dnsXX.ovh.net` ou, `nsXXX.ovh.net` e `dnsXXX.ovh.net` (em que cada `X` representa um algarismo compreendido entre **0** e **9**)
- `nsXX.ovh.ca` e `dnsXX.ovh.ca` ou, `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (em que cada `X` representa um algarismo compreendido entre **0** e **9**)
- `ns200.anycast.me` e `dns200.anycast.me` (se subscreveu à opção [DNS anycast](/links/web/domains-options))

Se estes corresponderem aos que deseja aplicar, clique em `Aplicar`{.action}.

Desta forma, os 2 servidores DNS declarados (nos registos do tipo NS da zona DNS da OVHcloud) serão utilizados para o seu domínio.

Os antigos servidores DNS declarados e a configuração DNS que aplicavam serão desativados para o seu domínio. A zona DNS da OVHcloud tornar-se-á a zona DNS ativa para o seu domínio.

#### Opção 2 - Utilizar os meus próprios DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}

Esta opção permite declarar os servidores DNS de uma zona DNS não gerida a partir da Área de Cliente OVHcloud.

Este pode ser, por exemplo:

- os servidores DNS externos fornecidos por um dos nossos concorrentes;
- os seus próprios servidores DNS, se aloja a sua zona DNS num dos seus servidores. Estes servidores DNS podem também ser alojados numa infraestrutura OVHcloud (servidor dedicado, VPS, etc.).

> [!success]
>
> Antes de adicionar um servidor DNS, verifique se este último **está contactável** e contém uma zona DNS para o seu domínio. Certifique-se também de que esta zona DNS contém todos os registos do tipo "DNS" para todos os servidores DNS que irá declarar para o seu domínio.
>
> Por exemplo: deseja declarar os servidores DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* e *ns3.dns-server.tld* para o seu nome de domínio. Deverá verificar se os três registos do tipo "NS" seguintes estão presentes nas 3 zonas DNS alojadas nestes 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.
>

Para introduzir um dos seus próprios servidores DNS, preencha os 2 formulários da caixa, tal como indicado abaixo:

- `Servidor DNS`: nome do servidor DNS que deve aplicar ao seu domínio.
- `IP associado (facultativo)`: endereço IP (IPv4 ou IPv6) do servidor DNS indicado. Só pode introduzir **um único endereço IP** neste formulário.

> [!warning]
>
> Cada caixa de entrada (mostrada na captura de ecrã anterior) só pode incluir **um** servidor DNS de cada vez. Um servidor DNS corresponde a um quadro.
>
> Além disso, uma nota de informação sobre fundo azul, situada por cima da primeira caixa, indica o intervalo de servidores DNS que pode declarar para o seu domínio. Estes valores variam em função da extensão do domínio.

Depois de inserir as informações, clique no botão `+`{.action} à direita dos 2 formulários. Permite adicionar o servidor DNS e faz aparecer uma nova caixa de entrada abaixo da anterior.

Repita a operação as vezes que tiver de adicionar servidores DNS, respeitando os limites indicados na nota de informação.
Clique no botão `+`{.action} para cada servidor DNS para validar a sua introdução e adição.

Assim que tiverem sido adicionados todos os servidores DNS, clique em `Aplicar configuração`{.action}. Surge a seguinte janela:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}

Ela resume os nomes dos servidores DNS que serão aplicados ao seu nome de domínio.
Se estes corresponderem aos que deseja aplicar, clique em `Aplicar`{.action}.

Os antigos servidores DNS declarados e a configuração DNS que aplicavam serão desativados para o seu domínio. A zona DNS declarada nos seus próprios servidores DNS tornar-se-á a zona DNS ativa para o seu domínio.

#### Opção 3 - Utilizar os DNS da OVHcloud e os meus próprios DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}

Esta opção permite combinar a utilização dos seus próprios servidores DNS mantendo ativos os servidores DNS da OVHcloud para o seu domínio. Esta combinação permite, por exemplo, assegurar melhor o acesso aos diferentes serviços associados ao seu nome de domínio (alojamento web, servidores de e-mail, etc.). De facto, se um grupo de servidores DNS ficar indisponível durante alguns minutos, os outros servidores DNS declarados podem assumir o controlo.

No entanto, verifique se as configurações das zonas DNS presentes nos diferentes servidores DNS afetados estão corretamente configuradas para funcionarem em conjunto. Na maioria dos casos, todos os servidores DNS estarão operacionais. Todos eles serão capazes de responder às solicitações que lhes forem feitas aleatoriamente na rede DNS.

> [!warning]
>
> 1. Tenha atenção se decidir utilizar esta última opção. Esta funcionalidade exige conhecimentos avançados sobre o funcionamento da rede DNS, dos servidores DNS e das zonas DNS.<br>
> 2. A opção [DNSSEC](/pages/web_cloud/domains/dns_dnssec) deve ser desativada para combinar a utilização dos seus próprios servidores DNS com os DNS da OVHcloud.<br>
> 3. Tenha o cuidado de não misturar um grupo de servidores DNS da OVHcloud com outro grupo de servidores DNS da OVHcloud. Por exemplo, *dns19.ovh.net* e *ns19.ovh.net* correspondem a um grupo de servidores DNS da OVHcloud, andam de mãos dadas e são sincronizados. Na OVHcloud, os grupos de servidores DNS são identificáveis através do número presente nos nomes dos servidores. Dois servidores DNS da OVHcloud fazem parte de um mesmo grupo de servidores DNS quando partilham o mesmo número. Por exemplo, *dns19.ovh.net* e *ns19.ovh.net*.

> [!success]
>
> Antes de adicionar um servidor DNS, verifique se este último **está contactável** e contém uma zona DNS para o seu domínio. Certifique-se também de que esta zona DNS contém todos os registos do tipo "DNS" para todos os servidores DNS que irá declarar para o seu domínio.
>
> Por exemplo: deseja declarar os servidores DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* e *nsXX.ovh.net* para o seu nome de domínio. Deverá verificar se os três registos do tipo "NS" seguintes estão presentes nas 3 zonas DNS alojadas nestes 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.
>

Para inserir um dos seus próprios servidores DNS, preencha os 2 formulários da caixa como se segue:

- `Servidor DNS`: nome do servidor DNS que deve aplicar ao seu domínio.
- `IP associado (facultativo)`: endereço IP (IPv4 ou IPv6) do servidor DNS indicado. Só pode introduzir **um único endereço IP** neste formulário.

> [!warning]
>
> Cada caixa de entrada (mostrada na captura de ecrã anterior) só pode incluir **um** servidor DNS de cada vez. Um servidor DNS corresponde a um quadro.
>
> Além disso, uma nota de informação sobre fundo azul, situada por cima da primeira caixa, indica o intervalo de servidores DNS que pode declarar para o seu domínio. Estes valores variam em função da extensão do domínio.

Depois de inserir as informações, clique no botão `+`{.action} à direita dos 2 formulários. Permite adicionar o servidor DNS e faz aparecer uma nova caixa de entrada abaixo da anterior.

Repita a operação as vezes que tiver de adicionar servidores DNS, respeitando os limites indicados na nota de informação.
Clique no botão `+`{.action} para cada servidor DNS para validar a sua introdução e adição.

Assim que tiverem sido adicionados todos os servidores DNS, clique em `Aplicar a configuração`{.action}. Surge a seguinte janela:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}

Ela resume os nomes dos servidores DNS que serão aplicados ao seu nome de domínio.
Se estes corresponderem aos que deseja aplicar, clique em `Aplicar`{.action}.

Os antigos servidores DNS declarados e a configuração DNS que aplicavam serão desativados para o seu domínio. As zonas DNS presentes nos seus próprios servidores DNS e nos servidores DNS da OVHcloud tornar-se-ão as que estão ativas para o seu domínio.

### Etapa 3 - Ter em conta a modificação dos servidores DNS

Depois de efetuar as alterações, devem ser tidos em conta dois períodos sucessivos:

- O *registry* que gere a sua extensão de domínio (por exemplo, o registry das extensões em *.fr*) deve ser informado da modificação DNS efetuada do lado da OVHcloud. Acompanhe o progresso da operação no seu [Área de Cliente OVHcloud](/links/manager). Para isso, aceda à parte `Web Cloud`{.action}, aceda à secção `Nomes de domínio`{.action} na coluna à esquerda e clique em `Operações em curso`{.action}.
- Depois de atualizar as informações do *registry*, aguarde um máximo de **48 horas** para que as alterações sejam aplicadas de forma totalmente propagada e eficaz.

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).