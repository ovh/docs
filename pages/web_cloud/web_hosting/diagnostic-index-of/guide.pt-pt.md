---
title: O que fazer em caso de página "Index of"?
excerpt: Descubra como repor o seu site online quando exibe uma página "Index of".
updated: 2026-05-04
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
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção "[Quer saber mais?](#go-further)" deste guia.
>

## Requisitos

- Dispor de um [nome de domínio](/links/web/domains)
- Ter um [serviço de alojamento web](/links/web/hosting)

## Instruções

### Compreender a origem da página "Index of"

O seu nome de domínio está declarado para aceder a um diretório de destino (um "`Pasta raiz`") no servidor [FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web partilhado. Para mais informações sobre a associação de um nome de domínio com um alojamento, consulte o nosso guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

A página **Index of** indica que o diretório-alvo em causa não contém ficheiros **index.php** ou **index.html**. Um ficheiro deste tipo constitui o "*ponto de entrada*" do seu website. O nome deste ficheiro está normalizado.

Para visualizar o seu site web, terá de se assegurar de que a `Pasta raiz` para a qual o seu nome de domínio está declarado contém um ficheiro **index.php** ou **index.html**.

> [!primary]
>
> Para associar temporariamente o seu nome de domínio a um `Pasta raiz` que não contém ficheiro **index.php** ou **index.html**, pode proibir a apresentação da lista de pastas do seu site seguindo este [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do). Pode também proteger o acesso às suas pastas com uma [palavra-passe](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Recomendamos que contacte um [provedor especializado](/links/partner) se tiver dificuldades em configurar esta configuração. De facto, as nossas equipas de apoio não poderão prestar assistência para qualquer modificação da programação interna do seu site.

### Resolver o caso mais comum de uma página "Index of"

Importou os ficheiros do seu site **domain.tld** para a pasta `www` do seu alojamento através de [FTP](/pages/web_cloud/web_hosting/ftp_connection). No entanto, o site web ao qual está associado o seu nome de domínio não está ligado a este diretório na coluna `Pasta raiz`.

Terá de modificar a `Pasta raiz` inicialmente declarada para o seu site a partir da sua [Área de Cliente OVHcloud](/links/control-panel/web-hosting). Para isso, consulte o nosso guia "[Como modificar a pasta raiz de um site existente?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

Se o seu site tiver uma configuração com Git, consulte previamente o nosso guia "[Configurar e utilizar o Git com o seu alojamento web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)" para eliminar a ligação com Git **antes** de continuar. De facto, a modificação da pasta raiz declarada para um site não está disponível se o seu site estiver configurado com Git.

Por fim, verifique se o seu site está a aparecer corretamente. Caso contrário, reinicie o seu dispositivo e esvazie a cache do seu browser, caso seja necessário.

Certifique-se igualmente de que está presente no seu diretório um ficheiro **index.php** ou **index.html**.

## Quer saber mais? <a name="go-further"></a>

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolver o erro “Site não instalado”](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 
