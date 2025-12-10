---
title: O que fazer em caso de página "Index of"?
excerpt: Descubra como repor o seu site online quando exibe uma página "Index of".
updated: 2025-12-11
---

## Objetivo

Uma página **"Index of"** aparece pelo menos num dos casos seguintes:

- A [configuração do seu nome de domínio com o seu site web](/pages/web_cloud/web_hosting/multisites_configure_multisite) não está corretamente configurada para o seu diretório alvo.
- A pasta alvo para a qual o seu nome de domínio aponta não contém ficheiros **"index.html"** ou **"index.php"**

![index_of](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**Descubra como corrigir a apresentação de uma página "Index of".**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#go-further)?
>

## Requisitos

- Dispor de um [nome de domínio](/links/web/domains)
- Ter um [serviço de alojamento web](/links/web/hosting)
- Estar ligado à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Compreender a origem da página "Index of"

O seu nome de domínio está declarado para aceder a um diretório de destino (um "`Pasta raiz`") no servidor [FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web partilhado. Isto através do separador [Meus sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) do seu alojamento web, disponível na sua [Área de Cliente OVHcloud](/links/manager).

A página **Index of** indica que o diretório-alvo em causa não contém ficheiros **index.php** ou **index.html**. Um ficheiro deste tipo constitui o "*ponto de entrada*" do seu website. O nome deste ficheiro está normalizado.

Para visualizar o seu site web, terá, a partir do separador `Meus sites`{.action} do seu alojamento web, de ligar o seu nome de domínio ao site web cujo `Pasta raiz` contenha este ficheiro **index.php** ou **index.html**.

> [!primary]
>
> Para associar temporariamente o seu nome de domínio a um `Pasta raiz` que não contém ficheiro **index.php** ou **index.html**, pode proibir a apresentação da lista de pastas do seu site seguindo este [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do). Pode também proteger o acesso às suas pastas com uma [palavra-passe](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Recomendamos que contacte um [provedor especializado](/links/partner) se tiver dificuldades em configurar esta configuração. De facto, as nossas equipas de apoio não poderão prestar assistência para qualquer modificação da programação interna do seu site.

### Resolver o caso mais comum de uma página "Index of"

Importou os ficheiros do seu site **domain.tld** para a pasta `www` do seu alojamento através de [FTP](/pages/web_cloud/web_hosting/ftp_connection). No entanto, o site web ao qual está associado o seu nome de domínio não está ligado a este diretório na coluna `Pasta raiz`.

![index_of_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

O `Pasta raiz` não é, atualmente, modificável uma vez que o site web foi criado.

Terá de desassociar o seu nome de domínio do site web existente a partir do separador `Meus sites`{.action} do seu alojamento web. Para isso, consulte o nosso guia "[Como desligar um domínio de um site web existente?](/pages/web_cloud/web_hosting/my_websites_detach_domain_existing_website)".

Poderá, em seguida, adicionar um novo site web com o seu nome de domínio com a ajuda do nosso guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)". Se o seu site web dispõe de uma configuração com Git, consulte previamente o nosso guia "[Configurar e utilizar o Git com o seu alojamento web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)" **antes** de `Desassociar o domínio`{.action}.

Por fim, verifique se o seu site está a aparecer corretamente. Caso contrário, reinicie o seu dispositivo e esvazie a cache do seu browser, caso seja necessário.

Certifique-se igualmente de que está presente no seu diretório um ficheiro **index.php** ou **index.html**.

## Quer saber mais? <a name="go-further"></a>

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolver o erro “Site não instalado”](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 