---
title: "Alterar os servidores DNS de um nome de domínio OVHcloud"
excerpt: "Saiba como alterar os servidores DNS do seu nome de domínio registado na OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

A sigla **DNS** (**D**omain **N**ame **S**ystem), é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um nome de domínio a um endereço IP.

Consulte os nossos guias "[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" para mais informações.

**Saiba como alterar os servidores DNS do seu nome de domínio OVHcloud em 3 etapas.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Ser o titular de um [nome de domínio](/links/web/domains) registado na OVHcloud.
- Dispor das permissões [adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio.

<!-- CP-NAV-START:web-domains -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Nomes de domínio](/links/control-panel/web-domains)
- **Caminho de navegação:** `Web Cloud`{.action} > `Nomes de domínio`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Um **agente de registo** é uma organização autorizada a vender nomes de domínio. A OVHcloud faz parte destes **agentes de registo**.
>
> Se o seu nome de domínio não estiver registado na OVHcloud, terá de alterar os servidores DNS junto do **agente de registo** onde o seu nome de domínio está atualmente registado.
>

## Instruções

> [!alert]
>
> **Tenha cuidado ao alterar os servidores DNS de um nome de domínio.**
>
> Um erro de manipulação pode tornar o seu website inacessível ou impedir que os seus endereços de e-mail recebam novos e-mails. Compreender as consequências de tal alteração permitir-lhe-á perceber melhor as mudanças que vai efetuar.

Ao alterar os servidores DNS do seu nome de domínio, está a alterar a sua configuração DNS. A nova configuração DNS substitui a anterior e é armazenada nos servidores DNS recém-definidos. Tecnicamente, o nome de domínio passa a utilizar uma nova zona DNS.

No entanto, é essencial ter em conta os seguintes pontos:

- Durante uma mudança de servidor DNS (por exemplo, um DNS externo por um DNS da OVHcloud), o conteúdo da antiga configuração / zona DNS não é automaticamente replicado na nova. Certifique-se de que a nova zona DNS contém todos os registos DNS necessários para que os serviços associados ao seu nome de domínio funcionem corretamente (por exemplo, o website e os endereços de e-mail).
- Se não pretender alterar os servidores DNS, mas um ou vários registos da sua configuração / zona DNS atual, consulte o nosso guia: "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
- Certas organizações, os registos que gerem as extensões de nomes de domínio, têm exigências particulares relativamente aos servidores DNS (quantidade de servidores de nomes, valor dos registos, etc.). Em caso de dúvida, contacte o registo responsável pelo nome de domínio.

### 1 - Alterar os servidores DNS <a name="modify-dns-servers"></a>

Pode ter de alterar os servidores DNS do seu nome de domínio nas seguintes situações:

- Pretende utilizar os servidores DNS propostos pela OVHcloud.
- Pretende utilizar os seus próprios servidores DNS (ou os fornecidos por um fornecedor DNS externo).
- Pretende combinar os servidores DNS propostos pela OVHcloud com os seus próprios servidores DNS.

> [!primary]
>
> Quando utiliza os servidores DNS da OVHcloud, os números presentes nos nomes dos servidores não têm qualquer ligação com o(s) serviço(s) que utiliza. Apenas a opção [DNS anycast](/links/web/domains-options) utiliza servidores DNS específicos (`ns200.anycast.me` e `dns200.anycast.me`). Uma vez subscritos, são-lhe automaticamente atribuídos.

**Clique nas opções abaixo para ver o conteúdo.**

/// details | Opção 1 - Utilizar os DNS predefinidos da OVHcloud

Esta opção permite aplicar automaticamente a configuração da zona DNS da OVHcloud existente para o seu nome de domínio. Previamente, certifique-se de que existe uma zona DNS na OVHcloud para o seu nome de domínio.

> [!primary]
>
> Se necessário, consulte os guias "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" e/ou "[Criar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_create)" para verificar se existe uma zona DNS da OVHcloud para o seu nome de domínio.

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} quando posicionado no domínio em questão.
>>
> **Passo 3**
>>
>> A tabela que aparece contém os servidores DNS atualmente definidos pela OVHcloud para o seu nome de domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.
>>
>> ![Servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, o botão pode encontrar-se abaixo da tabela.
>>
> **Passo 4**
>>
>> ![Alteração dos servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}
>>
>> Para utilizar os servidores DNS predefinidos da OVHcloud, clique em `Aplicar a configuração`{.action}. Aparece a seguinte janela:
>>
>> ![Alteração dos servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}
>>
>> Ela resume o nome dos 2 servidores DNS que serão aplicados ao seu nome de domínio. Devem ter uma das 3 formas seguintes:
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` ou `nsXXX.ovh.net` e `dnsXXX.ovh.net` (em que cada `X` representa um algarismo compreendido entre **0** e **9**)
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` ou `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (em que cada `X` representa um algarismo compreendido entre **0** e **9**)
>> - `ns200.anycast.me` e `dns200.anycast.me` (se subscreveu a opção [DNS anycast](/links/web/domains-options))
>>
>> Se corresponderem aos que pretende aplicar, clique em `Aplicar`{.action}.
>>
>> Desta forma, os 2 servidores DNS declarados (nos registos do tipo NS da zona DNS da OVHcloud) serão utilizados para o seu nome de domínio.

Os antigos servidores DNS declarados e a configuração DNS que aplicavam serão desativados para o seu nome de domínio. A zona DNS da OVHcloud tornar-se-á a zona DNS ativa para o seu nome de domínio.

///

/// details | Opção 2 - Utilizar os meus próprios DNS

Esta opção permite declarar os servidores DNS de uma zona DNS não gerida a partir da Área de Cliente OVHcloud.

Este pode ser, por exemplo:

- os servidores DNS externos fornecidos por um dos nossos concorrentes;
- os seus próprios servidores DNS, se alojar a sua zona DNS num dos seus servidores. Estes servidores DNS podem também estar alojados numa infraestrutura OVHcloud (servidor dedicado, VPS, etc.).

> [!success]
>
> Antes de adicionar um servidor DNS, verifique se este último **está contactável** e contém uma zona DNS para o seu nome de domínio. Certifique-se igualmente de que esta zona DNS contém todos os registos do tipo "NS" para todos os servidores DNS que irá declarar para o seu nome de domínio.
>
> Por exemplo: pretende declarar os servidores DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* e *ns3.dns-server.tld* para o seu nome de domínio. Deverá verificar se os três registos do tipo "NS" seguintes estão presentes nas 3 zonas DNS alojadas nestes 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.

Clique nos separadores abaixo para ver cada um dos **5** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} quando posicionado no domínio em questão.
>>
> **Passo 3**
>>
>> A tabela que aparece contém os servidores DNS atualmente definidos pela OVHcloud para o seu nome de domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.
>>
>> ![Servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, o botão pode encontrar-se abaixo da tabela.
>>
> **Passo 4**
>>
>> ![Alteração dos servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}
>>
>> Para indicar um dos seus próprios servidores DNS, preencha os 2 formulários da caixa como indicado abaixo:
>>
>> - `Servidor DNS`: nome do servidor DNS a aplicar ao seu nome de domínio.
>> - `IP associado (facultativo)`: endereço IP (IPv4 ou IPv6) do servidor DNS indicado. Só pode introduzir **um único endereço IP** neste formulário.
>>
>> > [!warning]
>> >
>> > Cada caixa de entrada (visível na captura de ecrã anterior) só pode conter **um único** servidor DNS de cada vez. Um servidor DNS corresponde a uma caixa.
>> >
>> > Além disso, uma nota de informação sobre fundo azul, situada acima da primeira caixa, indica o intervalo de servidores DNS que pode declarar para o seu nome de domínio. Estes valores variam consoante a extensão do nome de domínio.
>>
> **Passo 5**
>>
>> Depois de inserir as informações, clique no botão `+`{.action} situado à direita dos 2 formulários. Permite adicionar o servidor DNS e faz aparecer uma nova caixa de entrada abaixo da anterior.
>>
>> Repita a operação tantas vezes quantos servidores DNS tiver de adicionar, respeitando os limites indicados na nota de informação.
>> Clique no botão `+`{.action} para cada servidor DNS, de modo a validar a sua introdução e adição.
>>
>> Assim que todos os seus servidores DNS estiverem adicionados, clique em `Aplicar a configuração`{.action}. Aparece a seguinte janela:
>>
>> ![Alteração dos servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}
>>
>> Ela resume os nomes dos servidores DNS que serão aplicados ao seu nome de domínio.
>> Se corresponderem aos que pretende aplicar, clique em `Aplicar`{.action}.

Os antigos servidores DNS declarados e a configuração DNS que aplicavam serão desativados para o seu nome de domínio. A zona DNS declarada nos seus próprios servidores DNS tornar-se-á a zona DNS ativa para o seu nome de domínio.

///

/// details | Opção 3 - Utilizar os DNS da OVHcloud e os meus próprios DNS

Esta opção permite combinar a utilização dos seus próprios servidores DNS mantendo ativos os servidores DNS da OVHcloud para o seu nome de domínio. Esta combinação permite, por exemplo, assegurar melhor o acesso aos diferentes serviços associados ao seu nome de domínio (alojamento web, servidores de e-mail, etc.). De facto, se um grupo de servidores DNS ficar indisponível durante alguns minutos, os outros servidores DNS declarados podem assumir o controlo.

No entanto, verifique se as configurações das zonas DNS presentes nos diferentes servidores DNS envolvidos estão corretamente configuradas para funcionarem em conjunto. Na maioria dos casos, todos os servidores DNS estarão operacionais. Todos eles serão capazes de responder às solicitações que lhes forem feitas aleatoriamente na rede DNS.

> [!warning]
>
> 1. Tenha cuidado se decidir utilizar esta última opção. Esta funcionalidade exige conhecimentos avançados sobre o funcionamento da rede DNS, dos servidores DNS e das zonas DNS.
> 2. A opção [DNSSEC](/pages/web_cloud/domains/dns_dnssec) deve ser desativada para combinar a utilização dos seus próprios servidores DNS com os DNS da OVHcloud.
> 3. Tenha o cuidado de não misturar um grupo de servidores DNS da OVHcloud com outro grupo de servidores DNS da OVHcloud. Por exemplo, *dns19.ovh.net* e *ns19.ovh.net* correspondem a um grupo de servidores DNS da OVHcloud, andam de mãos dadas e são sincronizados. Na OVHcloud, os grupos de servidores DNS são identificáveis através do número presente nos nomes dos servidores. Dois servidores DNS da OVHcloud fazem parte de um mesmo grupo de servidores DNS quando partilham o mesmo número. Por exemplo, *dns19.ovh.net* e *ns19.ovh.net*.

> [!success]
>
> Antes de adicionar um servidor DNS, verifique se este último **está contactável** e contém uma zona DNS para o seu nome de domínio. Certifique-se igualmente de que esta zona DNS contém todos os registos do tipo "NS" para todos os servidores DNS que irá declarar para o seu nome de domínio.
>
> Por exemplo: pretende declarar os servidores DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* e *nsXX.ovh.net* para o seu nome de domínio. Deverá verificar se os três registos do tipo "NS" seguintes estão presentes nas 3 zonas DNS alojadas nestes 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.

Clique nos separadores abaixo para ver cada um dos **5** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Selecione o separador `Servidores DNS`{.action} quando posicionado no domínio em questão.
>>
> **Passo 3**
>>
>> A tabela que aparece contém os servidores DNS atualmente definidos pela OVHcloud para o seu nome de domínio. Vários servidores DNS podem estar listados, sendo que cada um deles possui a sua própria linha na tabela.
>>
>> ![Servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Clique no botão `Modificar os servidores DNS`{.action} situado à direita da tabela "servidores DNS". Dependendo da resolução do seu ecrã, o botão pode encontrar-se abaixo da tabela.
>>
>> ![Alteração dos servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}
>>
> **Passo 4**
>>
>> Para indicar um dos seus próprios servidores DNS, preencha os 2 formulários da caixa como indicado abaixo:
>>
>> - `Servidor DNS`: nome do servidor DNS a aplicar ao seu nome de domínio.
>> - `IP associado (facultativo)`: endereço IP (IPv4 ou IPv6) do servidor DNS indicado. Só pode introduzir **um único endereço IP** neste formulário.
>>
>> > [!warning]
>> >
>> > Cada caixa de entrada (visível na captura de ecrã anterior) só pode conter **um único** servidor DNS de cada vez. Um servidor DNS corresponde a uma caixa.
>> >
>> > Além disso, uma nota de informação sobre fundo azul, situada acima da primeira caixa, indica o intervalo de servidores DNS que pode declarar para o seu nome de domínio. Estes valores variam consoante a extensão do nome de domínio.
>>
>> Depois de inserir as informações, clique no botão `+`{.action} situado à direita dos 2 formulários. Permite adicionar o servidor DNS e faz aparecer uma nova caixa de entrada abaixo da anterior.
>>
>> Repita a operação tantas vezes quantos servidores DNS tiver de adicionar, respeitando os limites indicados na nota de informação.
>> Clique no botão `+`{.action} para cada servidor DNS, de modo a validar a sua introdução e adição.
>>
> **Passo 5**
>>
>> Assim que todos os seus servidores DNS estiverem adicionados, clique em `Aplicar a configuração`{.action}. Aparece a seguinte janela:
>>
>> ![Alteração dos servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}
>>
>> Ela resume os nomes dos servidores DNS que serão aplicados ao seu nome de domínio.
>> Se corresponderem aos que pretende aplicar, clique em `Aplicar`{.action}.

Os antigos servidores DNS declarados e a configuração DNS que aplicavam serão desativados para o seu nome de domínio. As zonas DNS presentes nos seus próprios servidores DNS e nos servidores DNS da OVHcloud tornar-se-ão as zonas DNS ativas para o seu nome de domínio.

///

### 2 - Consideração sobre a alteração dos servidores DNS

Depois de efetuar as alterações, dois períodos sucessivos devem ser tidos em conta:

- O *registo* que gere a sua extensão de nome de domínio (por exemplo, o registo das extensões em *.fr*) deve ser informado da alteração DNS efetuada do lado da OVHcloud. Acompanhe o progresso desta operação na página [Operações em curso](/links/control-panel/web-ongoing-operations).
- Depois de atualizar as informações do *registo*, aguarde um máximo de **48 horas** para que as alterações sejam totalmente propagadas e efetivas.

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender beneficiar de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
