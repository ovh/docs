---
title: "Como criar um subdomínio?"
excerpt: "Saiba a definição de um subdomínio e como criá-lo na OVHcloud"
updated: 2024-03-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo <a name="goal"></a>

A Internet é composta por servidores e dispositivos que interagem entre si através de uma rede global. Quando estes servidores e os seus dispositivos estão ligados à rede Internet, é-lhes atribuído um **endereço IP público** (equivalente a um endereço postal). Este endereço IP permite ligar remotamente um servidor ou dispositivo, permitindo assim que um utilizador veja um website introduzindo esse endereço IP através do browser instalado no computador do utilizador.

Os **domínios** foram criados para facilitar o acesso de utilizadores da Internet a um website. De facto, é mais fácil reter um nome composto por uma cadeia de caracteres selecionada (exemplo: ovhcloud.com) do que uma sequência de números composto por um endereço IP (exemplo: 54.39.46.56).

Um **nome de domínio** é composto por níveis. Estes níveis são geralmente separados por um `.` (com exceção de algumas **extensões** do *primeiro nível* como o *.co.uk*, *.gouv.fr* ou ainda *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): representa os domínios de *primeiro nível*. São mais conhecidos como **extensões**. Existem atualmente 4 tipos de domínio de primeiro nível: 

    - Os **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): compostos de dois caracteres que correspondem aos diferentes países do globo. Por exemplo, as extensões *.pt*, *.es*, *.it* ou ainda *.pl* são ccTLDs;
    - Os **g**eneric **T**op **L**evel **D**omains (**gTLDs**): compostos de, pelo menos, três caracteres que representam temas ou sectores de atividade mais gerais. Por exemplo, as extensões *.com*, *.net*, *.org* ou ainda *.info* são gTLDs;
    - Os **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    novas extensões criadas a partir de 2012 pelo **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) a fim de responder ao forte aumento dos pedidos de criação de nomes de domínio. Podem corresponder a temas genéricos, marcas, regiões ou cidades. Por exemplo, as extensões *.love*, *.ovh* ou ainda *.paris* são novas extensões gTLDs;
    - Os **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): trata-se, na realidade, de uma subcategoria dos new GTLDs. A pedido do **ICANN**, as empresas ou organizações podem pedir a criação do seu próprio TLD. Por exemplo, a extensão *.ovh* é uma CorpTLD criada pela OVHcloud há alguns anos.

- **S**econd **L**evel **D**omain (**SLD**): representa os domínios de *segundo nível*. É mais comum chamarmos-lhes **labels**. Quando encomenda um domínio, pode definir livremente o **label** (desde que este não tenha já sido registado por outro utilizador na mesma extensão e com o limite de 63 caracteres). Por exemplo, *ovhcloud* corresponde ao logótipo do nome de domínio *ovhcloud.com*.

- Third Level Domain (**subdomain**): é a partir deste terceiro nível que se fala de **subdomínio**. Neste manual, iremos explicar de forma mais pormenorizada a sua definição e como implementá-las com os seus diferentes serviços.

![URL content](/pages/assets/schemas/domains/url-composition.png){.thumbnail}
  
**Saiba os subdomínios e como os criar na OVHcloud.**

## Requisitos

- Dispor de, pelo menos, um [nome de domínio](/links/web/domains);
- Ter uma zona DNS ativa para o seu domínio. Se necessário, consulte o guia "[Criar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)";
- Ter acesso à [Área de Cliente OVHcloud](/links/manager);
- Dispor de direitos suficientes sobre o conjunto dos serviços em causa. Encontre mais informações no nosso guia [Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts).
  
## Instruções

### Definição de um subdomínio

Um [nome de domínio](/links/web/domains) pode estar associado a vários tipos de serviços (e-mail, website, etc.).

No entanto, um domínio só pode ser associado a um website de cada vez.

No entanto, alguns utilizadores ou organizações precisam de segmentar os seus websites ou serviços de e-mail ao mesmo tempo que mantêm o mesmo domínio.

Os subdomínios (por vezes denominados **prefixos**) respondem à necessidade de segmentar um nome de domínio. Eles oferecem a possibilidade ao proprietário de declinar em várias subcategorias os serviços web associados ao seu nome de domínio, sem ter de subscrever um novo domínio.

Por outras palavras, os subdomínios permitem estruturar facilmente o conjunto dos serviços web (servidores DNS, web site, intranet, e-mail, etc.) associados ao mesmo domínio.

Como indicado na secção "[Objetivo](#goal)", os subdomínios correspondem ao terceiro nível (*Third Level Domain*) de um domínio. O subdomínio mais conhecido dos internautas é, até à data, o **W**orld **W**ide **W**eb (**www**). De facto, muitos websites ainda utilizam este subdomínio para acederem à Internet.

Assim, *www.ovhcloud.com* é um subdomínio do nome de domínio *ovhcloud.com*.

Pode criar infinitos subdomínios a partir de um único domínio.

Se, por exemplo, tiver o nome de domínio *example.com*, pode criar os seguintes subdomínios:

- *dns1.example.com* e *dns2.example.com* para personalizar os seus servidores DNS através dos [GLUE records](/pages/web_cloud/domains/glue_registry);
- *www.example.com* para apresentar o seu website;
- *preprod.example.com* para testar o seu website em novas versões. sem cortar o acesso do seu website atual aos seus utilizadores;
- *intranet.example.com* para que os seus colaboradores possam trocar informações no seu website interno;
- *forum.example.com* ou *community.example.com* para que a sua comunidade de utilizadores possa trocar e partilhar a sua experiência;
- *app.example.com* para aceder à sua aplicação online ou para a descarregar diretamente;
- *recruitment.example.com* para permitir que os candidatos à procura de emprego se candidatem na sua própria interface de recrutamento;
- *sav.example.com*, *sales.example.com*, *legal.example.com* para permitir que os seus clientes contactem diferentes estruturas internas da sua empresa ou ainda para hierarquizar os seus colaboradores em função dos serviços internos a que pertencem;
- etc.

Para além do terceiro nível de domínio, considera-se que se trata igualmente de **subdomínios**. Para citar um dos exemplos acima, pode criar o subdomínio *preprod.app.example.com* para testar a nova versão da sua aplicação web. Isto sem cortar o acesso à versão atual da sua aplicação em *app.example.com*.

### Criar um subdomínio

Os [nomes de domínio](/links/web/domains) precisam todos de uma **zona DNS** para funcionarem. A zona DNS é composta por informações técnicas, chamadas *registos DNS*. É, de certa forma, como um centro de comando.

Para mais informações sobre as zonas DNS, consulte o guia "[Criar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_create)" e "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

**Todos os subdomínios são configurados na zona DNS ativa do domínio. Adicionando registos DNS**

#### 1 - Identificar a localização da zona DNS ativa do seu domínio

Existem dois casos possíveis:

- A zona DNS ativa do seu domínio está presente na OVHcloud;
- A zona DNS ativa do seu domínio está alojada noutro local.

> [!warning]
>
> A zona DNS ativa do seu domínio não é obrigatoriamente gerida junto do mesmo fornecedor do seu domínio.
>
> 1: Para identificar a localização da zona DNS ativa de um domínio registado na OVHcloud, pode consultar o nosso guia "[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>
> 2: Se o domínio não estiver registado na OVHcloud, contacte o *agente de registo* atual do seu domínio para saber onde está alojada a sua zona DNS ativa. Tenha em conta que pode utilizar o nosso guia "[Transferir o seu nome de domínio para OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)" se deseja realizar esta ação.
>

Se os servidores DNS declarados para o seu nome de domínio tiverem uma das duas formas seguintes:

- `dnsXX.ovh.net` e `nsXX.ovh.net` (em que cada um dos "X" representa um algarismo);
- `dns200.anycast.me` e `ns200.anycast.me`.

Isto significa que a zona DNS ativa do seu domínio está ativa na OVHcloud.

Caso contrário, contacte o seu fornecedor DNS para criar subdomínios com o seu domínio.

#### 2 - Criar os registos DNS para os seus subdomínios

Para adicionar subdomínios na zona DNS ativa do seu domínio, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

Por exemplo, poderá adicionar:

- O endereço IP (registos DNS do tipo *A* e *AAAA*) do seu alojamento web para apresentar um dos seus websites com um subdomínio.
- Os servidores de e-mail (registos DNS do tipo *MX*) para os quais o subdomínio deve reencaminhar os e-mails que recebe. Isto permite-lhe consultá-los no(s) seu(s) endereço(s) de e-mail(s) personalizado(s) com o seu subdomínio.
- Informações relacionadas com a segurança / autenticação dos seus serviços (alojamento web, servidor web, e-mail, etc.) associados a um dos seus subdomínios (registos DNS do tipo *SPF*, *DKIM*, *DMARC*, etc.).

> [!primary]
>
> A modificação de uma zona DNS associada a um nome de domínio implica um prazo de propagação de **4** a **24** para que esta última seja efetiva.
>
> Como tal, a criação de um registo DNS para um subdomínio, por si só, não é suficiente para executar o serviço "destino" que definiu no registo DNS. 
>
> De facto, por razões de segurança, deverá também autorizar que o subdomínio tenha acesso ao serviço "alvo" (alojamento web, e-mail, etc.).
>

Na parte seguinte, descubra como autorizar um subdomínio a poder aceder aos diferentes serviços do universo "Web Cloud" (alojamento web, servidor Exchange, etc.) propostos pela OVHcloud.

> [!warning]
>
> Se pretender configurar um subdomínio para um serviço alojado fora da OVHcloud, não poderemos fornecer-lhe assistência técnica. Sugerimos que contacte o fornecedor do serviço externo para continuar a configuração. 
>

### Associar, autorizar e configurar o seu subdomínio com um serviço OVHcloud

Vários serviços do universo "Web Cloud" podem ser utilizados com um subdomínio. Os procedimentos de associação são semelhantes aos que deve executar com um domínio. Vamos apenas expor os casos mais comuns.

Para serviços que não sejam indicados, consulte a documentação do serviço. Isto a fim de identificar se este último pode ser utilizado com um subdomínio.

#### Casos 1: Ver um website presente no meu alojamento web da OVHcloud com um subdomínio

Tal como para um domínio e para autorizar um subdomínio a apresentar o conteúdo de uma pasta *de destino* presente num alojamento web, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e selecione `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda, selecione o serviço em causa onde se encontra o seu website e escolha o separador `Multisite`{.action}.

É aqui que autoriza o acesso do seu subdomínio ao seu alojamento web onde se encontra o seu website.

Para mais informações sobre a configuração de um domínio ou subdomínio num alojamento web, consulte o guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)". Quer se trate de um nome de domínio ou de um subdomínio, o procedimento é o mesmo.

> [!warning]
>
> A adição multisite de um domínio ou de um subdomínio pode exigir a implementação de um token de validação. Para um subdomínio, este mesmo token não é tido em conta e deve ser adicionado não para o subdomínio mas para o nome de domínio. Neste caso, adicionar adicionalmente o token sob a forma de um registo DNS de tipo TXT para o nome de domínio na zona DNS ativa do seu domínio.
>

#### Casos 2 - Criar endereços de e-mail Exchange com um subdomínio

Para desbloquear a criação de endereços de e-mail Exchange personalizados com um subdomínio, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e selecione `Web Cloud`{.action}. Clique em `Microsoft`{.action} na coluna da esquerda e, a seguir, em `Exchange`{.action}. De seguida, selecione a plataforma Exchange que deseja utilizar com o seu subdomínio. Na página que se abrir, aceda ao separador `Domínios associados`{.action} e clique no botão `Adicionar domínio`{.action} à direita.

Assim, poderá declarar o seu subdomínio na sua plataforma Exchange.

Para obter mais detalhes sobre a configuração de uma plataforma Exchange, consulte os seguintes guias:

- [Primeiros passos com o serviço Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)
- [Adicionar um domínio a uma plataforma de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Adicionar um registo CNAME para validar o seu domínio na sua oferta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

#### Casos 3 - Criar endereços E-mail Pro com um subdomínio

Para desbloquear a criação de endereços E-mail Pro personalizados com um subdomínio, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e selecione `Web Cloud`{.action}. Clique em `E-mails Pro`{.action} e selecione a plataforma E-mail Pro que pretende utilizar com o seu subdomínio. Na página que se abrir, aceda ao separador `Domínios associados`{.action} e clique no botão `Adicionar domínio`{.action} à direita.

Assim, poderá declarar o seu subdomínio na sua plataforma E-mail Pro.

Para obter mais informações sobre a configuração de uma plataforma E-mail Pro, consulte os seguintes manuais:

- [Primeiros passos com a solução E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)
- [Adicionar um domínio a uma plataforma de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Adicionar um registo CNAME para validar o seu domínio na sua oferta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

## Quer saber mais? <a name="go-further"></a>

[Criar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Primeiros passos com o serviço Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Primeiros passos com a solução E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Adicionar um domínio a uma plataforma de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

[Adicionar um registo CNAME para validar o seu domínio na sua oferta de e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).