---
title: "Alterar a palavra-passe de um utilizador FTP"
excerpt: "Descubra como alterar a palavra-passe de um utilizador FTP criado num alojamento web da OVHcloud"
updated: 2023-05-29
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 29/05/2023**

## Objetivo

As ofertas de alojamento web da OVHcloud dão acesso a um espaço de armazenamento de ficheiros online utilizável através do protocolo **FTP**: o espaço de armazenamento FTP.

O acesso a este espaço é possível com a ajuda de um **utilizador FTP** e da respetiva palavra-passe.

Este acesso permite nomeadamente [publicar o seu site](/pages/web/hosting/hosting_how_to_get_my_website_online/).

**Descubra como alterar a palavra-passe de um utilizador FTP criado no seu alojamento web da OVHcloud.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/), não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais"](#gofurther)?
>

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Etapa 1: Aceder à gestão dos utilizadores FTP

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `FTP-SSH`{.action}.

Um quadro apresenta os *utilizadores FTP* criados no seu alojamento web. Estes utilizadores permitem-lhe aceder ao seu espaço de armazenamento FTP para que possa publicar os ficheiros do seu website. Um utilizador é automaticamente criado durante a instalação do alojamento web.

### Etapa 2: Alterar a palavra-passe de um utilizador FTP

> [!primary]
>
> Para mais informações sobre as boas práticas de gestão de palavras-passe, siga as instruções deste [guia](/pages/account/customer/manage-ovh-password/).
>

A sua nova password deverá respeitar a **política das palavras-passe** seguinte :

- Mínimo de 8 caracteres;
- Máximo de 30 caracteres;
- Pelo menos uma letra maiúscula;
- Pelo menos uma letra minúscula;
- Pelo menos um número;
- Ser composto unicamente por números e letras.

Dependendo do seu plano de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/), a alteração da palavra-passe do utilizador FTP através do separador `FTP-SSH`{.action} poderá ser efetuada de duas formas:

- **para as ofertas que não permitem criar um segundo utilizador FTP** (ofertas *Alojamento gratuito 100M* e *Perso*): clique no *pictograma em forma de lápis* na coluna `Palavra-passe`{.action} do quadro que aparece, introduza a nova palavra-passe **seguindo a política das palavras-passe** e confirme a alteração clicando no *botão verde* de validação.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **para as ofertas que permitem criar vários utilizadores FTP** (ofertas *Pro* e *Performance*): clique nos três pontos à direita do utilizador FTP em causa e, a seguir, em `Alterar palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe pretendida, confirme introduzindo-a uma segunda vez e clique no botão `Validar`{.action}.

clique no botão `...`{.action} à direita do utilizador FTP em questão, depois por `Alterar a palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe desejada *** seguindo a política de palavras-passe**, confirme introduzindo-a novamente e clique no botão `Validar`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Por fim, consulte o separador `Operações em curso`{.action} e atualize a página regularmente. A alteração demorará alguns minutos até ficar efetiva.

### Etapa 3: Aceder ao espaço de armazenamento

Para aceder ao seu espaço de armazenamento FTP, consulte o nosso guia "[Aceder ao espaço de armazenamento do alojamento web](/pages/web/hosting/ftp_connection/)".

## Quer saber mais? <a name="go-further"></a>

[Definir e gerir a palavra-passe da sua conta](/pages/account/customer/manage-ovh-password/)

[Aceder ao espaço de armazenamento do alojamento web](/pages/web/hosting/ftp_connection/)

[Publicar o seu site](/pages/web/hosting/hosting_how_to_get_my_website_online/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 