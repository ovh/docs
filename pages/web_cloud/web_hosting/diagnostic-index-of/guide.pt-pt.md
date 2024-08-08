---
title: O que fazer em caso de página "Index of"?
excerpt: Descubra como repor o seu site online quando exibe uma página "Index of".
updated: 2023-05-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Uma página **"Index of"** aparece pelo menos num dos casos seguintes:

- A configuração [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) do seu nome de domínio não está corretamente configurada para o seu diretório alvo
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

O seu nome de domínio é declarado para aceder a um diretório alvo (um "`Pasta raiz`") no servidor [FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web partilhado. Isto no separador [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) do seu alojamento web presente no seu [Área de Cliente OVHcloud](/links/manager).

A página **Index of** indica que o diretório-alvo em causa não contém ficheiros **index.php** ou **index.html**. Um ficheiro deste tipo constitui o "*ponto de entrada*" do seu website. O nome deste ficheiro está normalizado.

Para apresentar o seu website, deverá ligar o seu domínio ao `Pasta raiz` que contém o ficheiro **index.php** ou **index.html**.

> [!primary]
>
> Para associar temporariamente o seu domínio a um `Pasta raiz` que não contém ficheiro **index.php** ou **index.html**, pode proibir a apresentação da lista de pastas do seu site seguindo este [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do). Pode também proteger o acesso às suas pastas com uma [palavra-passe](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).

>
> Se precisar de ajuda, recomendamos que recorra a um [prestador de serviços especializado](/links/partner). As nossas equipas de suporte não poderão fornecer-lhe assistência relativamente a qualquer alteração da programação interna do seu site.

### Resolver o caso mais comum de uma página "Index of"

Importou os ficheiros do seu site **mydomain.ovh** para a pasta `www` do seu alojamento por [FTP](/pages/web_cloud/web_hosting/ftp_connection). Se o domínio não estiver associado a esta pasta, consulte a coluna `Pasta raiz` do `Multisite`{.action}.

![index_of_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

Altere a `Pasta raiz` clicando no botão `...`{.action} à direita da tabela e depois em `Modificar o domínio`{.action}:

![modify_domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain.png){.thumbnail}

Na nova janela:

* Selecione a opção `Modificar também o subdomínio www.mydomain.ovh`{.action} (1);
* Indique o diretório que contém o ficheiro **index.php** ou **index.html** do seu site como `Pasta raiz` (2);
* Clique em `Seguinte` (3).

![change_root_folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/change-root-folder-step-1.png){.thumbnail}

> [!primary]
>
> A utilização do diretório `www` como `Pasta raiz` não é, em caso algum, obrigatória. Pode instalar o seu site noutra pasta do seu [servidor FTP](/pages/web_cloud/web_hosting/ftp_connection).
>

Na janela seguinte, clique em `Validar`{.action}.

![modify_root_folder_confirm](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/change-root-folder-step-2.png){.thumbnail}

Dentro de alguns minutos (refrescando o seu browser), obterá o seguinte resultado:

![multisite_modified](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-full-www.png){.thumbnail}

Por fim, verifique se o seu site está a aparecer corretamente. Caso contrário, reinicie o seu dispositivo e esvazie a cache do seu browser, caso seja necessário.

Certifique-se igualmente de que está presente no seu diretório um ficheiro **index.php** ou **index.html**.

## Quer saber mais? <a name="go-further"></a>

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolver o erro “Site não instalado”](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 