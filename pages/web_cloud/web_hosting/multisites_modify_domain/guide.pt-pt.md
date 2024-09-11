---
title: "Alojamento web - Alterar um nome de domínio já associado a um alojamento"
excerpt: "Saiba como alterar as configurações de associação de um domínio/subdomínio já declarado na sua oferta de alojamento web"
updated: 2024-09-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Ao utilizar o seu alojamento web ou ao atualizar o seu website, poderá ter de alterar as definições do seu domínio ou subdomínio já associado ao seu alojamento web.

> [!primary]
>
> Este guia explica unicamente como alterar um domínio ou um subdomínio já declarado num alojamento web da OVHcloud. Se pretender associar um novo domínio/subdomínio ao seu alojamento web, consulte o guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

**Saiba como alterar as definições de associação de um domínio/subdomínio já registado na sua oferta de alojamento web.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter um plano [de alojamento web OVHcloud](/links/web/hosting).
- Dispor de um ou vários [nomes de domínio](/links/web/domains).
- Dispor de direitos suficientes sobre o conjunto dos serviços em causa. Encontre mais informações no nosso guia "[Como gerir os contactos (gestores) dos serviços OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

## Instruções

> [!warning]
>
> A modificação das configurações de associação de um domínio ou de um subdomínio pode, em caso de má manipulação, levar a uma interrupção do acesso aos seus serviços (o seu website). Se não tiver a certeza quanto às alterações a realizar, não hesite em contactar um fornecedor especializado
>

Para alterar as configurações de associação de um domínio ou subdomínio já declarado na sua oferta de alojamento web, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que se abrir, clique no separador `Multisite`{.action}.
6. Na tabela que se abrir abaixo do separador e à direita do domínio/subdomínio em questão, clique no botão `...`{.action} e, a seguir em `Modificar o domínio`{.action}.

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Aparecerá a seguinte janela:

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}

No resto deste guia, encontrará uma descrição de cada um dos parâmetros disponíveis na janela acima. Depois de ler as diferentes descrições abaixo e depois de fazer as suas modificações, clique no botão `Seguinte`{.action} situado no canto inferior direito da janela e, em seguida, passe para a [etapa 2](#step2).

### Etapa 1 - Descrição dos parâmetros alteráveis <a name="step1"></a>

> [!primary]
>
> O formulário `Domínio`{.action} não pode ser alterado, pois trata-se de uma alteração dos parâmetros do nome de domínio associado ao alojamento web. Se a ação desejada consiste em associar um novo domínio/subdomínio ao seu alojamento web, consulte o guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

#### Modificar a "pasta raiz"

> [!warning]
> **Caso particular: configuração com Git**
>
> Para modificar o `Pasta raiz`{.action} declarado para o seu domínio e se existir uma configuração com Git para o mesmo domínio, deverá eliminar primeiro esta configuração.
>
> Se houver uma configuração com o Git, uma mensagem aparecerá logo abaixo do formulário:
>
> ![Modify domain associed with git](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled-git-message.png){.thumbnail}
>
> Para eliminar a configuração Git de um domínio/subdomínio associado ao seu alojamento, consulte o guia "[Configurar e utilizar o Git com o seu alojamento web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)".
>

O formulário `Pasta raiz`{.action} indica o nome da pasta que contém os elementos apresentados com o domínio. Por exemplo, pode ser uma pasta que contém os ficheiros do seu website.

Durante a utilização dos seus serviços, poderá ser necessário alterar a `Pasta raiz`{.action} declarada para o seu domínio. Isto pode ocorrer quando, por exemplo:

- Desenvolveu um novo website numa nova pasta presente no espaço de armazenamento FTP do seu alojamento web.
- Deseja reencaminhar o seu domínio para uma pasta vazia para depois colocar um novo website.
- etc.

É neste formulário que deverá substituir o nome da pasta pré-preenchida pelo nome da nova pasta pretendida.

> [!success]
>
> Se indicar um nome de pasta inexistente no espaço de armazenamento FTP do seu alojamento web, este será automaticamente criado pelos nossos robôs no seu espaço de armazenamento FTP.
>

#### Outras opções disponíveis

##### A opção "SSL"

Selecione/desmarque esta caixa unicamente se deseja ativar/desativar o SSL gratuito **Let's Encrypt** para o seu nome de domínio/subdomínio. Não é necessário selecionar esta opção para as outras ofertas SSL disponibilizadas na OVHcloud.

Encontre mais informações sobre as opções/ofertas SSL disponíveis na nossa documentação dedicada "[Gerir um certificado SSL num alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

##### A opção "Ativar o CDN"

Para poder utilizar esta opção, deve ter previamente subscrito uma oferta CDN da OVHcloud ou dispor de um serviço de alojamento web Performance.

Selecione/desmarque esta caixa de verificação para ativar/desativar a opção CDN para o seu nome de domínio ou subdomínio.

Encontre mais informações sobre as opções/ofertas CDN disponíveis na nossa documentação dedicada "[Guia de utilização do acelerador CDN num alojamento web](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

##### A opção "IP do país"

Esta opção é utilizada principalmente para os websites cujo público-alvo esteja situado no estrangeiro. Isto permite um melhor referenciamento SEO do website no país escolhido.

Encontre mais informações sobre esta opção na nossa documentação dedicada "[Geolocalizar o seu website num país específico](/pages/web_cloud/web_hosting/multisites_geolocation)".

##### A opção "Ativar a firewall"

Esta opção permite filtrar os pedidos recebidos para proteger o seu alojamento web contra os ataques mais comuns.

Encontre mais informações sobre esta opção na nossa documentação dedicada "[Partilhado: ativação da firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

##### A opção "Logs separados"

Selecione/desmarque esta opção unicamente se deseja separar os logs do seu nome de domínio dos outros nomes de domínios declarados em paralelo no seu alojamento web.

Para saber mais sobre esta opção, consulte a nossa [página sobre estatísticas detalhadas](/links/web/hosting-traffic-analysis).

Depois de efetuar as alterações, clique no botão `Seguinte`{.action} no canto inferior direito da janela para passar à [etapa 2](#step2).

### Etapa 2 - Resumo das alterações <a name="step2"></a>

Após ter clicado no botão `Seguinte`{.action}, encontrará um resumo dos parâmetros que está prestes a aplicar ao seu domínio:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Se o conjunto dos parâmetros estiver configurado de acordo com os seus desejos, clique no botão `Validar`{.action}.

Dependendo das opções selecionadas, as alterações podem levar de alguns minutos ou algumas horas para serem aplicadas.

Se, para as opções **SSL**, **CDN**, **IP do país** e **logs separados**, as modificações não forem aplicadas após 24 horas, consulte os respetivos manuais (e páginas) indicados para o conjunto das opções descritas no [etapa 1](#step1), a fim de verificar que todas as condições exigidas foram corretamente respeitadas e realizadas.

## Quer saber mais?

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gerir um certificado SSL num alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Guia de utilização do acelerador CDN num alojamento web](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolocalizar o seu website num país específico](/pages/web_cloud/web_hosting/multisites_geolocation).

[Partilhado: ativação da firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).