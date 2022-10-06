---
title: O que fazer em caso de página « Index of »?
excerpt: Saiba como repor o seu site online quando exibe uma página « Index of ».
slug: diagnostico-index-of
section: Diagnóstico
Order: 07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 10/05/2022**

## Objetivo

Se uma configuração `Multisite` não estiver corretamente configurada, é possível que o seu site apresente uma página **"Index of"**.

![index_of](images/index_of.png){.thumbnail}

**Saiba como corrigir a apresentação de uma página "Index of".**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#gofurther)?
>

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/)
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Compreender a origem da página "Index of"

O seu nome de domínio está ligado através da parte `Multisite`{.action} do seu alojamento a um diretório (um "`Pasta raiz`") no seu servidor [FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/).

A página **Index of** indica que o diretório em causa não contém nenhum ficheiro **index.php** ou **index.html**. Um ficheiro deste tipo constitui o "*ponto de entrada*" do seu site.

Para apresentar o seu website, deverá, a partir da parte `Multisite`{.action} do seu alojamento, associar o seu domínio ao `Pasta raiz` que contém este ficheiro **index.php** ou **index.html**.

> [!primary]
>
> Se pretender associar temporariamente o seu domínio a uma `Pasta raiz` que não contém um ficheiro **index.php** ou **index.html**, pode proibir a apresentação da lista de pastas do seu site seguindo este [guia](https://docs.ovh.com/gb/en/hosting/what_else_can_you_do_with_the_htaccess_file/). Pode também proteger o acesso às suas pastas com uma [palavra-passe](https://docs.ovh.com/pt/hosting/partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao/).
>
> Se precisar de ajuda, recomendamos que recorra a um [[prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/)](https://partner.ovhcloud.com/pt/directory/). As nossas equipas de suporte não poderão fornecer-lhe assistência relativamente a qualquer alteração da programação interna do seu site.

### Resolver o caso mais comum de uma página "Index of"

Importou os ficheiros do seu site **mydomain.ovh** para a pasta `www` do seu alojamento por [FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/). Se o domínio não estiver associado a esta pasta, consulte a coluna `Pasta raiz` do `Multisite`{.action}.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Altere a `Pasta raiz` clicando no botão `...`{.action} à direita da tabela e depois em `Modificar o domínio`{.action}:

![modify_domain](images/modify_domain.png){.thumbnail}

Na nova janela:

* Selecione a opção `Modificar também o subdomínio www.mydomain.ovh`{.action} (1);
* Indique o diretório que contém o ficheiro **index.php** ou **index.html** do seu site como `Pasta raiz` (2);
* Clique em `Seguinte` (3).

![change_root_folder](images/change_root_folder01.png){.thumbnail}

> [!primary]
>
> A utilização do diretório `www` como `Pasta raiz` não é, em caso algum, obrigatória. Pode instalar o seu site noutra pasta do seu [servidor FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/).
>

Na janela seguinte, clique em `Validar`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

Dentro de alguns minutos (pense em refrescar o seu browser), obterá o seguinte resultado:

![multisite_modified](images/multisite_modified.png){.thumbnail}

Por fim, verifique se o seu site está a aparecer corretamente. Caso contrário, reinicie o seu dispositivo e esvazie a cache do seu browser, caso seja necessário.

## Quer saber mais? <a name="gofurther"></a>

[Resolver os erros mais frequentes associados aos módulos 1 clique](https://docs.ovh.com/pt/hosting/erros-frequentes-modulos-em-1-clique/)

[Resolver o erro “Site não instalado”](https://docs.ovh.com/pt/hosting/alojamento_web_erro_de_site_nao_instalado/)

[Partilhar o alojamento entre vários sites](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>