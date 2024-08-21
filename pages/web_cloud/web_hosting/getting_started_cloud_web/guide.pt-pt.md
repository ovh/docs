---
title: "Alojamento Cloud Web: primeira utilização"
excerpt: "Saiba como começar num plano de alojamento Cloud Web"
updated: 2022-05-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A nossa oferta de alojamento [Cloud Web](/links/web/hosting-cloud-web-offer){.external} combina os nossos 20 anos de experiência no alojamento web e a robustez da nossa Public Cloud. Como nos alojamentos web clássicos, os seus sites são alojados num serviço gerido 24 horas por dia, mas com muitas mais funcionalidades, como o elevado desempenho dos nossos discos SSD.

**Saiba como começar num plano de alojamento Cloud Web.**

## Requisitos

- Ter um serviço de [alojamento Cloud Web](/links/web/hosting-cloud-web-offer){.external}.
- Ter recebido o e-mail com a confirmação da instalação do alojamento Cloud Web.
- Ter um [domínio](/links/web/domains){.external} (endereço que permite identificar e aceder ao seu site).
- Aceder à [Área de Cliente OVHcloud](/links/manager){.external}.

## Instruções

### 1 - Tipo de Projeto: Criar ou Transferir um Site.

De modo a adequar-se ao máximo ao seu projeto, o alojamento [Cloud Web](/links/web/hosting-cloud-web-offer){.external} oferece mais possibilidades de configuração do que um alojamento web clássico. É importante que tenha uma visão clara do seu objetivo, de forma a levá-lo a cabo o melhor possível. Para isso, aconselhamos o seguinte:

- **definir o que deseja instalar**: Pretende partilhar um hobby ou promover uma atividade profissional? Criar um blogue ou uma loja online? Defina claramente o seu projeto antes de começar;

- **reunir os pré-requisitos técnicos necessários à instalação**: é possível que o projeto que deseja instalar exija pré-requisitos técnicos particulares. Certifique-se de os conhecer previamente;

- **certificar-se da compatibilidade técnica do seu projeto com o alojamento Cloud Web**\: precisa de um motor de execução ou de um SQL em particular?  Se ainda não o fez, assegure-se de que este último se encontra disponível com o seu alojamento [Cloud Web](/links/web/hosting-cloud-web-offer){.external}.

Depois de ter avaliado as diferentes possibilidades ao seu dispor e de ter delimitado o seu projeto com precisão, já pode começar a pô-lo online.

### 2 - Escolher o motor de execução

A [Cloud Web](/links/web/hosting-cloud-web-offer){.external} disponibiliza-lhe múltiplas linguagens de desenvolvimento para construir o seu projeto. Se deseja utilizar outra linguagem que não PHP, que é a escolha padrão, deverá selecionar um «motor de execução» que corresponda à sua linguagem.

As linguagens atualmente disponíveis são:

- PHP
- Node.js
- Python
- Ruby

Para aceder aos motores de execução do seu alojamento [Cloud Web](/links/web/hosting-cloud-web-offer){.external} vá à [Área de Cliente OVHcloud](/links/manager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento Cloud Web em causa. Por fim, clique no separador `Motores de execução`{.action}.

Será automaticamente criado um motor durante a instalação do alojamento. É indicado como `Escolha padrão` no quadro que se apresenta. Para modificar um motor já parametrizado, clique nos três pontos à direita deste último e, a seguir, em `Modificar`{.action}. 

Também pode adicionar motores de execução suplementares consoante o seu serviço [Cloud Web](/links/web/hosting-cloud-web-offer){.external}. Para isso, basta clicar em `Ações`{.action} e, a seguir, em `Adicionar um motor de execução`{.action}. Repare que o número máximo de motores de execução depende do serviço [Cloud Web](/links/web/hosting-cloud-web-offer){.external} que subscreveu.

Assim, antes de prosseguir, certifique-se de que dispõe do ou dos motores de execução necessários ao seu projeto.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/edit-runtime.png){.thumbnail}

### 3 - Criar variáveis de ambiente (facultativo)

Quando deseja implementar várias vezes o seu projeto em ambientes diferentes (por exemplo: desenvolvimento, teste ou produção), deverá fornecer variáveis de modo que o código reaja em conformidade. Para isso, a [Cloud Web](/links/web/hosting-cloud-web-offer){.external} possibilita a definição de variáveis de ambiente acessíveis pelo código do seu site ou da sua aplicação web.

Por exemplo, desta forma pode deixar de fora um ficheiro «.env» no framework PHP Laravel, como indica a documentação do framework: <https://laravel.com/docs/5.6/configuration>.

Para adicionar uma variável de ambiente, e ainda posicionado no alojamento Cloud Web em causa, clique no separador `Variáveis de ambiente`{.action}. Um quadro exibirá as variáveis de ambiente criadas no seu serviço. Para adicionar uma nova, clique no botão `Ações`{.action} e depois em `Adicionar uma variável de ambiente`{.action}. Então, siga as indicações em função da variável que deseja criar:

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/environment-variables/add-an-environment-variable.png){.thumbnail}

Se não utiliza um framework de desenvolvimento que integre as variáveis de ambiente, ou se deseja simplesmente verificar o bom funcionamento das suas variáveis, pode criar um script para efetuar esta verificação. Encontrará abaixo dois exemplos que podem ser-lhe úteis, mas que não substituem a ajuda de um webmaster:

- **for PHP**:

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **for Node.js**:

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

Tenha o cuidado de substituir a informação genérica presentes nestes scripts «DB_DATABASE» pela variável de ambiente adequada.

### 4 - Configurar domínios adicionais enquanto Multisite (facultativo)

Agora que o ambiente técnico do seu alojamento [Cloud Web](/links/web/hosting-cloud-web-offer){.external} está pronto, pode configurar domínios adicionais enquanto Multisite. Isto permite-lhe partilhar o seu espaço, de forma a alojar nele vários sites, por exemplo. Se isto se adequa ao seu projeto, e ainda posicionado no alojamento Cloud Web em causa, clique no separador `Multisite`{.action}.

O quadro que vai aparecer contém os domínios adicionados ao seu alojamento. Alguns de entre eles foram criados automaticamente durante a instalação do alojamento. Para adicionar um novo, clique no botão `Adicionar um domínio ou subdomínio`{.action} e siga as instruções que surgirem. A manipulação pode ser diferente se o domínio em causa estiver registado junto da OVHcloud ou não. 

Por isso, sugerimos que tenha muita atenção durante a introdução das informações seguintes:

- **pasta raiz**: trata-se do repertório onde o domínio indicado deverá ser alojado no espaço de armazenamento do seu serviço de alojamento Cloud Web; 

- **motor de execução**: trata-se do motor de execução, previamente parametrizado, que será utilizado pelo Multisite em vias de ser configurado.

> [!warning]
>
> Se adicionou um domínio considerado externo, deverá parametrizar um campo TXT chamado **ovhcontrol** na sua configuração DNS. Ele permitirá que a OVHcloud confirme que a operação é legítima. Portanto, é um passo indispensável e, se não for realizado, a operação será anulada. 
>

Repita esta manipulação se deseja adicionar vários domínios ao seu alojamento Cloud Web. Para obter mais informação acerca da adição de um domínio enquanto Multisite, consulte o guia: [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external}.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/multisite/add-domain-or-subdomain.png){.thumbnail}

### 5 - Instalar o projeto no alojamento Cloud Web

Tem ao dispor duas formas de efetuar a instalação do seu projeto. Repita o processo mais adequado se deseja pôr online vários sites.

#### 1. Utilizar os nossos módulos em 1 clique

Esta solução permite-lhe beneficiar de uma estrutura de site pronta a usar ainda por personalizar (tema, textos, etc.). A OVHcloud disponibiliza quatro com os módulos em 1 clique, a descobrir na página [Criar um site com os módulos em 1 clique](/links/web/hosting-website){.external}.

Se optar pela utilização dos nossos módulos em 1 clique, e ainda posicionado no alojamento [Cloud Web](/links/web/hosting-cloud-web-offer){.external} em causa, clique no separador `Módulos em 1 clique`{.action} e, a seguir, em `Adicionar um módulo`{.action}. Então, poderá iniciar uma instalação em modo «simples» (não personalizável) ou em modo «avançado» (com a possibilidade de personalizar certos elementos).

Para mais informações sobre os módulos, consulte o guia: [Instalar um site com os módulos em 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}.

> [!primary]
>
> Para utilizar estes últimos, deve imperativamente usar o motor de execução PHP.
>

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/1-click-modules/add-a-module.png){.thumbnail}

#### 2. Instalar o seu projeto manualmente

Quer se trate de um novo site ou da migração de um site já existente, a instalação manual pode revelar-se mais técnica e deverá ser efetuada em função dos seus próprios conhecimentos. Por isso, recomendamos que recorra a um prestatário especializado e/ou que contacte o editor do serviço se encontrar dificuldades. 

Se optou pela instalação manual, deverá ter na sua posse o conjunto dos ficheiros do site ou da aplicação que deseja instalar, assim como (se for necessário para o seu bom funcionamento) as informações de uma base de dados criada previamente no seu alojamento Cloud Web. No quadro da migração de um site, assegure-se de ter uma cópia integral deste último.

Como os projetos podem variar muito entre si, não existe um processo universal a seguir, mas os nossos guias [Colocar o meu website online](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external} e [Como migrar um site e e-mails para a OVHcloud?](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external} podem ajudá-lo quanto às operações a realizar.

### 6 - Alterar a configuração do domínio

Por esta altura, o seu site está alojado nos serviços da OVHcloud e os endereços de e-mail estão criados. Se estes últimos ainda não estiverem operacionais, é possível que a configuração do domínio não esteja correta. Se for esse o caso, ou se não tiver a certeza, siga as instruções abaixo.

Contudo, repare que, se está a migrar os seus serviços para a OVHcloud, as manipulações ligadas aos DNS podem provocar uma indisponibilidade dos serviços se elas não foram efetuadas num momento adequado. Como tal, deverá seguir as instruções indicadas no guia [Transferir o meu site para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external}, e modificar os servidores DNS do seu domínio no final do processo.

#### 6.1. Consultar registos DNS do alojamento OVHcloud 

Há vários registos DNS inerentes à OVHcloud. Vamos referir-nos a dois deles em particular: aqueles que permitem garantir a acessibilidade do seu site e a receção de mensagens de e-mail. Siga as indicações abaixo para saber onde os encontrar:

|Registo DNS|Serviço associado|Onde encontrá-lo?|
|---|---|---|
|A|Para o site|Na sua [Área de Cliente OVHcloud](/links/manager){.external}, posicionado na secção `Alojamentos`{.action}, no alojamento Cloud Web em causa. De seguida, em `Informações gerais`{.action}, tome nota do endereço IP indicado para «IPv4».|
|MX|Para os e-mails|Na sua [Área de Cliente OVHcloud](/links/manager){.external}, posicionado na secção `E-mails`{.action}, no domínio em causa. De seguida, clique em `Informações gerais`{.action} e tome nota das informações indicadas para os «Campos MX».|

#### 6.2. Verificar e/ou alterar os registos DNS

Agora que conhece os registos DNS inerentes ao seu alojamento [Cloud Web](/links/web/hosting-cloud-web-offer){.external} e ao seu serviço de e-mail OVHcloud, deve verificar se estes últimos estão bem configurados e fazer alterações se necessário. É imperativo que estas duas manipulações sejam feitas junto do prestatário que gere a configuração DNS (a zona DNS) do seu domínio.

> [!warning]
>
> - Se o domínio não usar a configuração DNS da OVHcloud, a configuração deverá ser efetuada no sistema do agente responsável pela gestão do seu domínio.
> 
> - Se o domínio estiver registado na OVHcloud, pode verificar se este último utiliza a nossa configuração DNS. Para isso, vá à [Área de Cliente](/links/manager){.external}, clique no separador`Servidores DNS`{.action} e posicione-se sobre o domínio em questão.
>

Siga as indicações abaixo para saber onde efetuar estas manipulações:

|Configuração DNS utilizada|Onde realizar as manipulações?|
|---|---|
|OVHcloud|Na [Área de Cliente OVHcloud](/links/manager){.external}, posicionado na secção `Domínios`{.action}, no domínio em causa. No separador `Zona DNS`{.action}, verifique e altere as informações necessárias. Se necessário, pode recorrer ao guia [Alojamento Partilhado: como editar a minha zona DNS?](/pages/web_cloud/domains/dns_zone_edit){.external}.|
|Outra|No sistema do agente responsável pela gestão do seu domínio. Sugerimos que o contacte se sentir dificuldades durante as manipulações.|

Uma vez modificada a configuração DNS do domínio, é necessário um tempo máximo de propagação de 24 horas até as alterações serem efetivas. Se adicionou vários domínios ao seu alojamento Cloud Web enquanto Multisite, deverá realizar estas duas manipulações para cada um deles. 

### 7 - Personalizar o site

Esta etapa pode ser facultativa se fez a migração de um site já existente e que se encontre personalizado! No entanto, se, por exemplo, acabou de instalar um novo site através dos nossos módulos, pode personalizá-lo mudando o tema e publicando os primeiros conteúdos.

Caso precise de ajuda relativamente às funcionalidades do seu site, pedimos-lhe que se informe junto do site do editor do seu site, aí, encontrará documentação para o acompanhar no seu projeto.

### 8 - Usar o serviço de e-mail

Os seus endereços de e-mail podem ser usados com o Roundcube, um serviço de webmail incluído na oferta de alojamento OVHcloud. Para isso, a OVHcloud disponibiliza uma aplicação online (webmail): RoundCube. Aceda a <https://www.ovh.pt/mail/> e preencha os dados associados ao endereço de e-mail criado através do sistema OVHcloud.

Para saber mais sobre o RoundCube, consulte o guia: [Utilização do RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube){.external} Se desejar associar o seu endereço de e-mail a um software (cliente) de correio eletrónico no computador, smartphone ou um tablet, consulte a página: </products/web-cloud-email-collaborative-solutions-mx-plan>.

## Quer saber mais?

[Transferir o meu site para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external} (Versão PT disponível em breve)

[Colocar o meu site online](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external}

[Instalar um CMS com os Módulos 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external}

[Como criar um endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation){.external}

[Utilização do RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube){.external}

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).