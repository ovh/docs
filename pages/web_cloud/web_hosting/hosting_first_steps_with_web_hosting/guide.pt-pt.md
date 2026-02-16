---
title: "Como começar bem com o seu alojamento web"
excerpt: 'Saiba como publicar um novo site através das nossas opções de "Módulos 1 clique", como criar um novo endereço de e-mail personalizado com o seu nome de domínio, tudo graças à nossa solução de alojamento web'
updated: 2025-04-07
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

Pretende criar um site para a sua empresa ou um blogue pessoal? Precisa de uma loja online para vender os seus produtos? Este guia dedicado aos primeiros passos com o alojamento web OVHcloud indicar-lhe-á as etapas chave para o configurar. Além disso, também encontrará explicações para criar endereços de e-mail profissionais associados ao seu domínio. Permite-lhe colocar online o seu projeto de forma fácil e rápida, a fim de comunicar com o seu público de forma eficaz.

> [!primary]
>
> - Deseja migrar um site já existente para fornecedor de alojamento? Consulte diretamente o nosso guia dedicado: [Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).
> - Deseja apenas uma página inicial simples para a sua atividade profissional? Consulte o nosso guia dedicado: [Alojamento web - Ativar alojamento gratuito 100M](/pages/web_cloud/web_hosting/activate_start10m).

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting) com, pelo menos, uma base de dados disponível (exceto a oferta de alojamento gratuita 100M).
- Ter recebido o e-mail com a confirmação da instalação do alojamento web.
- Dispor de um [nome de domínio](/links/web/domains) e de uma zona DNS associada na OVHcloud.
- Todos os serviços (Alojamento web, Nome de domínio, zona DNS) devem estar acessíveis a partir de uma única conta OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), secção `Web Cloud`{.action}.

## Instruções

### 1 - Associar o seu domínio ao alojamento web <a name="part-1"></a>

> [!success]
>
> Se subscreveu o seu nome de domínio e o seu alojamento web na mesma encomenda, estes dois serviços já estão associados. Passe diretamente para [Parte 2](#part-2) deste manual.

1. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
2. Selecione o separador `Multisite`{.action} quando posicionado no alojamento web em causa.
3. Na página que vai aparecer, clique no botão `Ações`{.action} situado por cima da tabela com os nomes de domínio já declarados no alojamento web. A seguir, clique em `Adicionar um domínio ou subdomínio`{.action}.
4. Na janela que se abrir, selecione e complete os elementos pedidos até à sua validação.

/// details | Clique aqui para mais informações.

Consulte os nossos guias detalhados:

- [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Alojamento web - Alterar um nome de domínio já associado a um alojamento](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

### 2 - Instalar um "módulo 1 clique" para o seu website <a name="part-2"></a>

Nos seus alojamentos web, a OVHcloud propõe instalar gratuitamente os CMS WordPress, Joomla!, PrestaShop e Drupal graças à opção "módulo 1 clique".

1. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
2. Selecione o separador `Módulos "1 clique"`{.action} quando posicionado no alojamento web em causa.
3. Na página que se abrir, clique no botão `Adicionar um módulo`{.action}.
4. Na nova janela, selecione o CMS que deseja instalar. De seguida, escolha o domínio no qual deseja instalar o módulo, selecionando o nome de domínio desejado **sem os "www"** à frente (por exemplo: `domain.tld` e não `www.domain.tld`), e clique diretamente em `Instalar`{.action}.

/// details | Clique aqui para mais informações.

Consulte os nossos guias detalhados:

- [Instalar o seu website com um 'módulo 1 clique' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).
- [Como gerir o seu módulo em 1 clique?](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

///

### 3 - Ativar os endereços de e-mail incluídos com o seu alojamento web <a name="part-3"></a>

> [!success]
>
> Se subscreveu o seu domínio e o seu alojamento web numa única encomenda, os endereços de e-mail incluídos com o alojamento web já estão associados ao seu domínio. Passe diretamente para [Secção 4](#part-4) deste manual.

1. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
2. Na página que se abrir, na caixa **Configuração**, clique no botão `...`{.action} à direita da menção `Endereços de e-mail`{.action}, e depois em `Ativar a minha oferta de e-mail`{.action}. Na nova página que surgir, selecione o domínio em causa na secção `(1)` e, em seguida, prossiga até à ativação dos endereços de e-mail.

/// details | Clique aqui para mais informações.

Consulte o nosso guia detalhado "[Alojamento web - Ativar os endereços de e-mail incluídos](/pages/web_cloud/web_hosting/activate-email-hosting)".

///

### 4 - Criar um endereço de e-mail personalizado com o seu nome de domínio <a name="part-4"></a>

1. Clique no menu `E-mails`{.action} (ou em `MX Plan`{.action} se utilizar a nova versão da Área de Cliente OVHcloud) e escolha o domínio em causa.
2. Na página que se abrir, clique no separador `E-mails`{.action}.
3. Na nova página que aparece, clique no botão `Criar um endereço de e-mail`{.action}.
4. Na nova janela, preencha os elementos solicitados até à sua validação.

Repita esta operação para cada endereço de e-mail que deseja criar (no limite da sua oferta de alojamento web).

/// details | Clique aqui para mais informações.

Consulte o nosso guia detalhado "[Criar um endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)".

///

### 5 - Opções adicionais disponíveis com o seu alojamento web <a name="part-5"></a>

O seu alojamento web não está limitado à instalação de um "módulo 1 clique". Pode alojar websites criados por si ou por um programador web (blogue, CMS, loja online, etc.). Se pretender saber mais sobre as possibilidades do seu alojamento web, não hesite em consultar o nosso guia mais pormenorizado "[Como criar um website - Realizar o seu projeto em 5 etapas](/pages/web_cloud/web_hosting/website-project)".

## Quer saber mais?

Encontre aqui uma seleção dos nossos guias que detalham as principais funcionalidades propostas nos nossos alojamentos web:

- [Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).
- [Guia de utilização do acelerador CDN num alojamento web](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
- [Alojamento web - Ambiente, versão PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting).
- [Alojamento web - Consultar as estatísticas e logs de um website](/pages/web_cloud/web_hosting/logs_and_statistics).
- [Alojamento partilhado Seguimento dos emails automatizados](/pages/web_cloud/web_hosting/mail_function_script_records).
- [Como geolocalizar um website num país específico?](/pages/web_cloud/web_hosting/multisites_geolocation).
- [Partilhado: ativação da firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
- [Configurar e utilizar o Git com o seu alojamento web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting).
- [Aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection).
- [Criar tarefas automatizadas (CRON) no seu alojamento Web](/pages/web_cloud/web_hosting/cron_tasks).
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).