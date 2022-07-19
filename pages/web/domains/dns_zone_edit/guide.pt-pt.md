---
title: 'Editar uma zona DNS da OVHcloud'
slug: alojamento_partilhado_como_editar_a_minha_zona_dns
excerpt: 'Saiba como editar uma zona DNS da OVHcloud através da Área de Cliente'
order: 3
section: 'DNS e zona DNS'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.

**Última atualização: 07/07/2022**

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

- Ter acesso à secção de gestão do domínio na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Utilizar a configuração da OVHcloud (os seus servidores DNS) para o domínio em questão.

> [!warning]
>
> - Se o domínio não usar os servidores DNS da OVHcloud, a alteração deverá ser efetuada na interface do agente responsável pela configuração do domínio.
> 
> - Se o domínio estiver registado na OVHcloud, pode verificar se este último utiliza a nossa configuração. Para isso, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na janela `Servidores DNS`{.action} do domínio em questão.
> 
> Em ambos os casos acima, tenha cuidado ao efetuar as alterações dos servidores DNS. A configuração anterior que pode ser aplicada ao seu domínio não estará ativa se não tiver reconfigurado e personalizado previamente a nova zona DNS presente na OVHcloud.<br>
> Só pode ter uma zona DNS ativa por nome de domínio.
>

## Instruções

### Aceder à gestão de uma zona DNS da OVHcloud

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

Aparecerá uma tabela com um registo DNS associado ao seu domínio na OVHcloud. Poderá filtrar o conteúdo por tipo de registo ou por nome de domínio.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Os registos DNS

**A alteração de uma zona DNS é uma operação delicada**: uma alteração inadequada poderia, por exemplo, impossibilitar o acesso ao seu website ou a receção de novos e-mails.

Compreender os diferentes registos irá permitir-lhe perceber as alterações que irá efetuar se editar a zona DNS do seu domínio. Sugerimos que consulte a lista abaixo. Deve indicar os objetivos e as especificidades de cada registo.

#### Registos de apontamento

- **A** (**A**ddress): Liga um domínio a um endereço IPv4 `X.X.X.X` (em que os `X` são números entre `0` e `255`). Por exemplo, o endereço IPv4 do servidor onde está alojado o seu website.

- **AAAA** (4 letras **A**, pois este registo está codificado em quatro vezes mais bits que o registo histórico de apontamento **A**): Associe um domínio a um endereço IPv6. Por exemplo, o endereço IPv6 do servidor onde está alojado o seu website.

> [!primary]
> 
> Os endereços IPv6 são progressivamente implementados para compensar a falta de endereços IPv4 devido à expansão contínua das utilizações digitais. A codificação em 128 bits dos endereços IPv6 permite assim fornecer um maior número de endereços IP.
>
> No entanto, se o seu servidor já dispõe de um IPv4, recomendamos que privilegie a utilização deste ao seu IPv6.<br>
> De facto, os IPv6 não são ainda corretamente interpretados em toda a rede Internet, o que pode causar perturbações de afixação ou de acesso.
>

<a name="cname"></a>

- **CNAME** (**C**anonical **NAME**): Utiliza o endereço IP de outro domínio ao criar um link chamado alias. Por exemplo, se *www.mydomain.ovh* for um alias de *mydomain.ovh*, isso indica que *www.mydomain.ovh* utilizará o endereço IP de *mydomain.ovh*.

> [!alert]
>
> Um registo TXT que utilize o mesmo domínio ou subdomínio que um registo CNAME perturba o funcionamento deste último. O seu registo CNAME só funcionará parcialmente ou de todo.
> 

> [!warning]
>
> Por convenção, os campos CNAME não podem ser diretamente utilizados por um domínio na sua própria zona DNS. Com efeito, o domínio só deve apontar obrigatória e diretamente para um endereço IP com um campo de tipo A (ou AAAA, se se tratar de um IPv6).
> 
> Para seguir o exemplo acima, não poderá criar um campo CNAME para o domínio *mydomain.ovh* na zona DNS que criou para este domínio.
> No entanto, poderá criar campos CNAME com todos os subdomínios (exemplos: *subdomain.mydomain.ovh* ou *www.mydomain.ovh*) do domínio *mydomain.ovh* na zona DNS criada para *mydomain.ovh*.
>
> Se pretender ir mais longe do ponto de vista técnico sobre este assumpto, poderá encontrar, no final desta página, [um caso particular de uso relativo aos CNAME e às zonas DNS criadas para subdomínios](#techusecase).
>

- **DNAME** (**D**elegation **NAME**): Permite gerar um "alias" para o conjunto dos subdomínios de um domínio. Este registo evita criar uma multitude de registos CNAME. De facto, um registo CNAME redireciona de forma independente apenas um subdomínio para um único alvo.

Exemplo: ao criar um registo DNAME de *mydomain.ovh* para *ovh.com*, todos os sub-domínios de *mydomain.ovh* (como *dname.mydomain.ovh* e *xxx.mydomain.ovh*) serão reencaminhados respetivamente para os subdomínios de *ovh.com* (tais como o *dname.ovh.com* e *xxx.ovh.com*).

Por outras palavras, o registo DNAME indica que *dname.mydomain.ovh* e *xxx.mydomain.ovh* devem apresentar, respetivamente, os resultados de *dname.ovh.com* e *xxx.ovh.com*.

> [!warning]
> 
> Por outro lado, *mydomain.ovh*, enquanto domínio, não mostrará o destino do domínio *ovh.com*, pois o registo DNAME só é válido para os subdomínios dos domínios definidos no registo DNAME.
>
> Além disso, se pegar num dos exemplos acima, se o subdomínio alvo *xxx.ovh.com* não apontar para lado nenhum, o registo DNAME também não mostrará nada para *xxx.mydomain.ovh*.
> 

> [!success]
> 
> O registo DNAME é geralmente utilizado para uma alteração do nome da empresa. Também pode ser implementado quando um utilizador dispõe de várias extensões de domínios (.fr,.net, .com, .info, ...) para os reencaminhar facilmente entre si.
>

- **NS** (**N**ame **S**erver): Define os servidores DNS associados à sua zona DNS. Por exemplo, se os registos NS da sua zona DNS mostrarem os servidores *DNS19.ovh.net* e *ns19.ovh.net*, deverá utilizar estes últimos no separador `Servidores DNS`{.action} da sua Área de Cliente OVHcloud. Para mais informações, consulte o nosso manual "[Modificar os servidores DNS de um domínio OVHcloud](../partilhado_generalidades_sobre_os_servidores_dns/)".

> [!warning]
>
> Não altere, através do botão `Alterar em modo de texto`{.action}, os registos NS da sua zona DNS em benefício de servidores DNS externos à OVHcloud. Esta zona DNS funciona **apenas** com servidores DNS da OVHcloud.
>

#### Registos de e-mail

- **MX** (**M**ail e**X**changer): Associe um domínio a um servidor de e-mail. Por exemplo, o endereço *10 mx1.mail.ovh.net* corresponde a um dos servidores de e-mail OVHcloud quando possui uma oferta de e-mail OVHcloud. É provável que o seu fornecedor de e-mail disponha de vários servidores de e-mail: assim, devem ser criados vários campos MX. Consulte o nosso manual "[Adicionar um campo MX à configuração do domínio](../e-mail-partilhado-manual-de-configuracao-mx-com-zona-dns-ovh/)".

> [!warning]
>
> De forma geral, recomendamos que na zona DNS utilize apenas um ou vários servidores do mesmo fornecedor de e-mail.
> Se já dispõe de serviços de e-mail noutro fornecedor de e-mail e adicionou em paralelo (sem substituir) os servidores de e-mail do seu novo fornecedor de e-mail, corre o risco de receber aleatoriamente os seus e-mails num dos seus dois fornecedores.
> 

- **SPF** (**S**ender **P**olicy **F**ramework): Permite evitar potenciais usurpações de identidade nos endereços de e-mail que utilizam o seu nome de domínio (*spoofing*). Por exemplo, o registo `v=spf1 include:mx.ovh.com ~all` indica que apenas os servidores de envio relacionados com a oferta de e-mail OVHcloud podem ser considerados legítimos pelo servidor de receção. Pode introduzir este registo sob a forma de um registo TXT ou através do nosso sistema de configuração automática. Para mais informações, consulte o nosso manual "[Adicionar um registo SPF à configuração do seu domínio](../partilhado_o_campo_spf/)".

- **DKIM** (**D**omain**K**eys **I**dentified **M**ail): Permite verificar a autenticidade do nome de domínio do remetente e assegurar a integridade do e-mail enviado. O registo DKIM tem a forma de uma chave composta por vários caracteres. A chave DKIM é fornecida pelo seu prestador de serviços de e-mail (se esta funcionalidade for proposta por este), é possível que a introduza sob a forma de um campo TXT.

- **DMARC** (**D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance): Contribui para a autenticação dos e-mails em associação com os métodos SPF e/ou DKIM. Este valor ser-lhe-á dado pelo seu fornecedor de e-mail (se esta funcionalidade for proposta por este último), e será no mínimo associado a um registo SPF ou DKIM.

#### Registos alargados

- **TXT** (**T**e**XT**): Permite adicionar o valor da sua escolha, em formato de texto, na zona DNS do seu domínio. Este registo é frequentemente utilizado em processos de verificação/validação ou de segurança.

> [!warning]
> 
> O registo TXT está limitado a 255 caracteres. No entanto, em alguns casos, o valor pode ser dividido em vários registos. Insira o seu fornecedor quando este lhe solicitar que indique um valor superior ao limite de 255 caracteres.
> 
> No entanto, este limite não existe se passar pela funcionalidade "Alterar em modo de texto" [descrita abaixo](#txtmod) neste guia (para utilizadores experientes).
> 

- **SRV** (**S**e**RV**ice resource): Permite indicar o endereço de um servidor que gere um serviço. Por exemplo, pode indicar o endereço de um servidor SIP ou de um servidor que permita a configuração automática de um software de mensagens.

- **CAA** (**C**ertification **A**uthority **A**uthorisation):: Permite listar as autoridades de certificação autorizadas a serem entregues dos certificados SSL para um domínio.

> [!warning]
> 
> Se utiliza um certificado SSL Let's Encrypt com o seu domínio num alojamento partilhado OVHcloud e utiliza um registo CAA, este último impedirá a regeneração do certificado SSL Let's Encrypt.
> 


- **NAPTR** (**N**ame **A**uthority **P**oint**T**e**R**): Utilizado em telecomunicações para dirigir um pedido emitido por um terminal móvel para um servidor. Um registo SRV pode ser associado para gerar de forma dinâmica URIs (Uniform Resource Identifier) alvos.

- **LOC** (**LOC**ation): Utilizado para indicar as informações de posição geográfica (nomeadamente com latitude, longitude e altitude).

- **SSHFP** (**S**ecure **SH**ell **F**inger**P**rint): Utilizado para introduzir o vestígio de uma chave pública SSH.

- **TLSA** (**T**ransport **L**ayer **S**ecurity **A**uthentication): Utilizado para indicar o cunho de um certificado SSL/TLS.

### Editar a zona DNS da OVHcloud do seu domínio

Pode editar a zona DNS da OVHcloud do seu domínio adicionando, alterando ou eliminando um registo DNS. Para isso, tem duas possibilidades:

#### Modificar manualmente a zona em modo de texto <a name="txtmod"></a>

> [!warning]
> 
> Apenas para utilizadores experientes. Esteja também muito atento à sintaxe aquando das suas modificações.
> 

No separador `Zona DNS`{.action}, clique em `Alterar em modo de texto`{.action} e siga as etapas que aparecem.

#### Utilizar os assistentes de configuração

A partir de agora, o manual apenas irá abordar a configuração realizada através de assistentes.

> [!primary]
>
> Tenha consigo as informações que pretende alterar na zona DNS da OVHcloud. Se efetuar esta modificação a pedido de um fornecedor de serviço, este deve comunicar-lhe a lista dos elementos a modificar.
>

#### Adicionar um novo registo DNS

Para adicionar um novo registo DNS, clique no separador `Zona DNS`{.action} do domínio e no botão `Adicionar uma entrada`{.action} à direita da tabela. Selecione o tipo de campo DNS e siga os passos.

Sugerimos que verifique previamente se este registo já existe e não aponta para um destino diferente. Para o fazer, filtre o conteúdo da tabela por tipo de registo ou por domínio. Se o registo já existir, sugerimos que o altere através da operação descrita abaixo.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

> Quando o alvo do seu registo for um URL, pense em pontuá-lo. Se não o fizer, o seu domínio será automaticamente adicionado no final do seu alvo.
>
> Exemplo: deseja criar um registo CNAME de *teste.mydomain.ovh* para *mydomain.ovh*.
>
> A seguir, deverá ter como alvo *mydomain.ovh.* e não *mydomain.ovh* sem o "." no final.

#### Alterar um registo DNS existente 

Para alterar um registo DNS, aceda ao separador `Zona DNS`{.action} da Área de Cliente e clique no ícone `...`{.action} no painel à direita da entrada selecionada. De seguida, clique em `Alterar entrada`{.action} e siga os passos que aparecem.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### Eliminar um registo DNS existente

Para eliminar um registo DNS, aceda ao separador `Zona DNS`{.action} da Área de Cliente e clique no ícone `...`{.action} no painel à direita da entrada selecionada. De seguida, clique em `Eliminar entrada`{.action} e siga os passos que aparecem.

Pode eliminar várias entradas de uma só vez, selecionando-as a partir da parte esquerda da tabela e clicando no botão `Eliminar`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

#### Reiniciar a zona DNS

Reinicializar a zona DNS permite-lhe:

- ou voltar a uma configuração mínima com as entradas OVHcloud predefinidas.
- voltar a uma zona DNS vazia (exceto os campos NS), para definir uma configuração manual posterior.

No separador `Zona DNS`{.action}, clique em `Reiniciar a minha zona DNS`{.action} e siga os passos que aparecem.

![dnszone](images/edit-dns-zone-ovh-reset.png){.thumbnail}

Pode escolher entre:

- `Sim, quero reiniciar a minha zona DNS com o número mínimo` de entradas. Esta opção permite-lhe dirigir o seu nome de domínio e o seu serviço de e-mail para:
    - um dos serviços Web Cloud disponíveis na Área de Cliente OVHcloud.
    - o serviço de reencaminhamento OVHcloud, acessível através do separador `Reencaminhamento`{.action} do seu nome de domínio nas secções `Nomes de domínio`{.action} e `Emails`{.action}.
    - a função `Personalizada`. Introduza o campo `A` e/ou `MX` à sua escolha.
- `Não, mas quero reiniciar a minha zona DNS`. A sua zona DNS estará vazia, com exceção das entradas NS que serão automaticamente associadas aos servidores DNS da OVHcloud da sua zona DNS.

> [!primary]
>
> Antes de reiniciar a zona DNS, certifique-se de que o domínio não está associado a serviços em utilização, tais como um website ou endereços de e-mail.
>

### Tempo de propagação

Depois de alterar a zona DNS do domínio, é necessário aguardar 24 horas até que as alterações sejam efetivas.

Se pretender reduzir este tempo de espera para as próximas edições da sua zona DNS da OVHcloud, poderá alterá-lo, em certa medida, ajustando o TTL (*Time To Live*) que será aplicado a todos os registos da zona DNS.
Para isso, aceda ao separador `Zona DNS`{.action} da Área de Cliente, clique no botão `TL predefinido`{.action} e siga os passos que vão aparecer. 

Também pode alterar o TTL de um registo DNS. No entanto, esta operação só pode ser efetuada num registo de cada vez, alterando-o ou adicionando-o.

### Caso especial de uso: a utilização dos registos CNAME <a name="techusecase"></a>

Alguns utilizadores criam zonas DNS diretamente para o subdomínio de um domínio (por exemplo, *subdomínio-com-a-própria-zona-DNS.mydomain.ovh*). Neste caso, aplica-se também a regra [acima](#cname) especificada neste guia. 

Uma vez que a zona DNS foi criada para o subdomínio (no nosso exemplo *subdomínio-com-a-própria-zona-DNS.mydomain.ovh*), este é considerado como um domínio de pleno direito na sua zona DNS.

Assim e neste caso específico, não poderá criar um campo CNAME para o *subdomínio-com-a-própria-zona-DNS.mydomain.ovh* na zona DNS que criou para este. No entanto, poderá criar campos CNAME tais como o *subdomínio.subdomain-com-a-própria-zona-DNS.mydomain.ovh* ou *xxx.subdominio-com-a-própria-zona-DNS.mydomain.ovh*.

## Quer saber mais?

[Alterar os servidores DNS de um nome de domínio OVHcloud](../partilhado_generalidades_sobre_os_servidores_dns/){.external}

[Como configurar o registo SPF de um domínio](../partilhado_o_campo_spf/){.external}

[Proteja o seu domínio contra o Cache Poisoning graças ao DNSSEC](../proteja_o_seu_dominio_com_dnssec/){.external}

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
