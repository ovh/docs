---
title: "Configurar um DNS dinâmico (DynHost/DynDNS) para o seu nome de domínio"
excerpt: "Saiba como configurar um registo DNS dinâmico para o seu nome de domínio OVHcloud"
updated: 2024-07-12
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A zona **D**omain **N**ame **S**ystem (**DNS**) de um nome de domínio constitui o ficheiro de configuração deste último. É composta por informações técnicas, designadas *registos DNS*. A zona DNS é, de certa forma, como um centro de agulhas. 

Para mais explicações, consulte os seguintes guias:

- [Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

A atualização "dinâmica" de um registo DNS pode evitar uma interrupção prolongada de um dos seus serviços se não dispõe de um endereço IP dito "fixo" (que não se altera).

Por exemplo, o **DynHost** pode ser utilizado se *autoidentificar* (nas instalações da sua empresa ou no seu domicílio, passando pela *box* do seu **I**nternet **S**ervice **P**rovider (**ISP**)) um servidor de jogos de vídeo sem beneficiar de um endereço IP "fixo".

> [!primary]
>
> Qualquer registo "A" ou "AAAA" com um TTL (**T**ime **T**o **L**ive) de 60 segundos é considerado como DynHost. O TTL é um valor que indica o período de tempo durante o qual um registo DNS é colocado em cache pelos servidores DNS antes de ser atualizado.
>

**Descubra como configurar um registo DNS dinâmico (DynHost) para o seu nome de domínio OVHcloud.**

## Requisitos

- Ter acesso à secção de gestão do domínio na [Área de Cliente OVHcloud](/links/manager){.external}
- Utilizar a configuração da OVHcloud (os servidores DNS) para o domínio em questão.
- O registo DynHost que está prestes a criar não deve já existir na zona DNS da OVHcloud do seu nome de domínio enquanto registo "A" ou "AAAA".

> [!warning]
>
> - Se o domínio não usar os servidores DNS da OVHcloud, contacte o fornecedor responsável pela configuração DNS para saber como proceder.
> 
> - Se o domínio estiver registado na OVHcloud, pode verificar se este último utiliza a nossa configuração. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) {.external} e aceda à secção `Web cloud`{.action}. Na coluna da esquerda, clique no separador `Noms de domínio`{.action} e selecione o domínio em causa. Na página que aparece, clique no separador `Servidores DNS`{.action} para apresentar os servidores DNS utilizados pelo seu domínio. 
>
> Para saber se utiliza ou não os servidores DNS da OVHcloud, estes têm a seguinte forma: 
>
> - **dnsXX.ovh.net.** e **nsXX.ovh.net.** (em que os "**X**" são números a substituir pelos relativos aos servidores do seu domínio) se não utilizar a opção *DNS Anycast*
> - **NS200.anycast.me.** e **ns200.anycast.me** se utilizar a opção *DNS Anycast*
> 
> Para mais informações, consulte o nosso guia sobre [servidores DNS](/pages/web_cloud/domains/dns_server_general_information).
>

## Instruções

### Etapa 1 - Criar um utilizador DynHost <a name="step1"></a>

Para criar um utilizador DynHost, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e aceda à secção `Web cloud`{.action}. Na coluna da esquerda, clique no separador `Nomes de domínio`{.action} e selecione o domínio em causa. Na página que aparece, clique no separador `DynHost`{.action}.

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}

A seguir, clique no botão `Gerir os acessos`{.action} e, a seguir, em `Criar um identificador`{.action}. Na nova janela, preencha as informações necessárias:

|Informações|Descrição|
|---|---|
|Sufixo do identificador|Defina um sufixo ao identificador DynHost que está a criar.|
|Subdomínio|Especifique o subdomínio afetado pela criação do registo DNS dinâmico. Se pretender gerir o conjunto dos subdomínios com um único identificador, indique apenas `*` no formulário de introdução de dados.|
|Palavra-passe|Defina uma palavra-passe para o identificador DynHost e confirme-a.|

> [!success]
>
> Para configurar um DynHost diretamente para o seu domínio, introduza apenas `*` no formulário de introdução intitulado `Subdomínio`{.action}.
>

Depois de preencher os campos, clique no botão `Validar`{.action}. O identificador aparece no quadro presente na página atual. Repita este passo sempre que necessário se precisar de dados DynHost adicionais.

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}

### Etapa 2: criar o registo DNS dinâmico (DynHost) <a name="step2"></a>

A segunda etapa consiste em criar o registo DNS que deverá ser atualizado de forma dinâmica. Relembramos que este não deve já existir na zona DNS da OVHcloud do seu nome de domínio enquanto registo "A" ou "AAAA". Para o verificar e, se necessário, eliminá-lo, consulte o nosso manual "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}".

Quando estiver pronto para criar o registo DynHost, clique no separador `DynHost`{.action} e, em seguida, no botão `Adicionar um DynHost`{.action}. Na nova janela, preencha as informações necessárias:

|Informações|Descrição|
|---|---|
|Subdomínio|Indique o subdomínio cujo registo DNS deverá ser atualizado de forma dinâmica. Este subdomínio deve corresponder ao domínio indicado durante a criação do utilizador DynHost. **Se desejar implementar um DynHost diretamente para o seu domínio, deixe este formulário em branco**|
|IP de destino|Introduza o endereço IP (apenas IPv4 ou IPv6) que deve ser atualmente utilizado pelo registo DNS. Trata-se geralmente do endereço IP público do seu *box* Internet ou do seu servidor alojado automaticamente. De acordo com o princípio do DynHost, esta será atualizada automaticamente.|

> [!warning]
>
> Para a implementação de um registo DNS dinâmico (DynHost), a utilização de um *wildcard* (colocando apenas o caráter `*`) no formulário `Subdomínio`{.action} está indisponível.
>

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}

Depois de preencher os campos, clique no botão `Validar`{.action}. O registo DynHost aparece no quadro presente na página atual. Repita este passo sempre que necessário se precisar de mais registos DynHost.

### Etapa 3: automatizar a alteração do DynHost

Depois de criar o[utilizador](#step1) e o[registo DynHost](#step2), é necessário automatizar a atualização do registo DNS de forma a que o registo seja realizado de forma dinâmica. Para isso, deverá utilizar um software/cliente que se encarregará de verificar regularmente se o endereço IP de destino mudou de forma a que o atualize automaticamente.

> [!warning]
>
> A instalação e a configuração do software/cliente devem ser realizadas de acordo com os seus conhecimentos. Apresentamos a seguir algumas informações sobre como proceder. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. 
> Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.
>

Existem várias possibilidades relativamente ao software/cliente: 

- pode ser instalado no seu servidor ou no seu computador;
- já pode estar disponível na interface do seu routeur/*box* Internet, se este for compatível. Se tiver dificuldades em realizar esta configuração, contacte o suporte da sua solução **ISP** para efetuar a configuração.

Depois de escolher e instalar o cliente, deverá configurá-lo através das informações do utilizador DynHost criado anteriormente na Área de Cliente OVHcloud.

Consoante o cliente utilizado, pode ser necessário um endereço URL de atualização para além dos elementos do utilizador DynHost e do subdomínio em causa. Se for este o caso, utilize o seguinte endereço URL para substituir as informações genéricas:

```bash
https://dns.eu.ovhapis.com/nic/update?system=dyndns&hostname=$HOSTNAME&myip=$IP
```

|Informações|Substituir por|
|---|---|
|$HOSTNAME|O subdomínio abrangido pela alteração.|
|$IP|O novo endereço IPv4 ou IPv6 de destino.|

Pode verificar se o endereço IP de destino foi atualizado. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e aceda à secção `Web cloud`{.action}. Na coluna da esquerda, clique no separador `Nomes de domínio`{.action} e selecione o domínio em causa. Na página que aparece, clique no separador `DynHost`{.action}. Verifique o endereço de IP que aparece na coluna `Alvo`{.action}.

> [!warning]
>
> Qualquer alteração na zona DNS ativa de um domínio através do DynDNS pode provocar um atraso de propagação da atualização de vários minutos.
>

![dynhost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}

## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 