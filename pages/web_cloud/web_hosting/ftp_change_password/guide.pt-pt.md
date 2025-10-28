---
title: "Alterar a palavra-passe de um utilizador FTP"
excerpt: "Descubra como alterar a palavra-passe de um utilizador FTP criado num alojamento web da OVHcloud"
updated: 2025-10-14
---

## Objetivo

As ofertas de alojamento web da OVHcloud dão acesso a um espaço de armazenamento de ficheiros online utilizável através do protocolo **FTP**: o espaço de armazenamento FTP.

O acesso a este espaço é possível com a ajuda de um **utilizador FTP** e da respetiva palavra-passe.

Este acesso permite nomeadamente [publicar o seu site](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Descubra como alterar a palavra-passe de um utilizador FTP criado no seu alojamento web da OVHcloud.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner), não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais"](#go-further)?
>

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](/links/web/hosting).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### 1 - Aceder à gestão dos utilizadores FTP

Clique nas janelas abaixo para visualizar cada uma das etapas **4**.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Um quadro apresenta os *utilizadores FTP* criados no seu alojamento web. Estes utilizadores permitem-lhe aceder ao seu espaço de armazenamento FTP para que possa publicar os ficheiros do seu website. Um utilizador é automaticamente criado durante a instalação do alojamento web.

### 2 - Alterar a palavra-passe de um utilizador FTP

> [!primary]
>
> Para mais informações sobre as boas práticas de gestão de palavras-passe, siga as instruções deste [guia](/pages/account_and_service_management/account_information/manage-ovh-password).
>

Dependendo do seu plano de [alojamento web da OVHcloud](/links/web/hosting), a alteração da palavra-passe do utilizador FTP através do separador `FTP - SSH`{.action} poderá ser efetuada de duas formas:

- **para as ofertas que não permitem criar um segundo utilizador FTP** (ofertas *Alojamento gratuito 100M* e *Perso*): clique no *pictograma em forma de lápis* na coluna `Palavra-passe`{.action} do quadro que aparece, introduza a nova palavra-passe **seguindo a política das palavras-passe** e confirme a alteração clicando no *botão verde* de validação.

![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

- **para as ofertas que permitem criar vários utilizadores FTP** (ofertas *Pro* e *Performance*): clique nos três pontos à direita do utilizador FTP em causa e, a seguir, em `Alterar palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe pretendida, confirme introduzindo-a uma segunda vez e clique no botão `Validar`{.action}.

clique no botão `...`{.action} à direita do utilizador FTP em questão, depois por `Alterar a palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe desejada *** seguindo a política de palavras-passe**, confirme introduzindo-a novamente e clique no botão `Validar`{.action}.

![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

> [!primary]
>
> A sua nova password deverá respeitar a **política das palavras-passe** seguinte :
>
>- Mínimo de 9 caracteres;
>- Máximo de 30 caracteres;
>- Pelo menos uma letra maiúscula;
>- Pelo menos uma letra minúscula;
>- Pelo menos um número;
>- Ser composto unicamente por números e letras.

Por fim, consulte o separador `Operações em curso`{.action} e atualize a página regularmente. A alteração demorará alguns minutos até ficar efetiva.

### 3 - Aceder ao espaço de armazenamento

Para aceder ao seu espaço de armazenamento FTP, consulte o nosso guia "[Aceder ao espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)".

## Quer saber mais? <a name="go-further"></a>

[Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Aceder ao espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)

[Publicar o seu site](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 