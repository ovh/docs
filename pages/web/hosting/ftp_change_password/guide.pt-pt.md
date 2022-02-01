---
title: "Alterar a palavra-passe de um utilizador FTP"
slug: alterar-palavra-passe-utilizador-ftp
excerpt: "Saiba como alterar a palavra-passe de um utilizador FTP criado no seu alojamento web da OVHcloud"
section: 'FTP e SSH'
order: 2
---

**Última atualização: 14/01/2022**

## Objetivo

As ofertas de alojamento web da OVHcloud dão acesso a um espaço de armazenamento de ficheiros online utilizável através do protocolo **FTP**.<br>O acesso a este espaço é possível através de um utilizador FTP e da respetiva palavra-passe.
<br>Este acesso permitir-lhe-á [publicar o seu site](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/#etape-2-mise-en-ligne-des-fichiers-du-site-sur-lespace-de-stockage).

**Saiba como alterar a palavra-passe de um utilizador FTP criado no seu alojamento web da OVHcloud.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#aller-plus-loin)?
>

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## Instruções

### 1 - Aceder à gestão dos utilizadores FTP

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `FTP-SSH`{.action}.

Um quadro mostra os utilizadores FTP criados no seu alojamento. Estes utilizadores permitem-lhe aceder ao seu espaço de armazenamento FTP para que possa publicar os ficheiros do seu website. Um utilizador será automaticamente criado durante a instalação do alojamento.

### 2 - Alterar a palavra-passe de um utilizador FTP

> [!primary]
>
> Para mais informações sobre as boas práticas de gestão de palavras-passe, siga as instruções deste [guia](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).
>

Dependendo do seu plano de [alojamento web da OVHcloud](https://www.ovhcloud.com/fr/web-hosting/), a alteração da palavra-passe do utilizador FTP através do separador `FTP-SSH`{.action} poderá ser efetuada de duas formas:

- **para as ofertas que não permitem criar um segundo utilizador FTP** (ofertas Start 10M, Kimsufi Web e Perso): clique no ícone em forma de lápis na coluna `Palavra-passe`{.action}, introduza a nova palavra-passe e confirme a alteração clicando no botão verde.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **para as ofertas que permitem criar vários utilizadores FTP** (ofertas Pro e Performance): clique nos três pontos à direita do utilizador FTP em causa e, a seguir, em `Alterar a palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe pretendida, confirme introduzindo-a uma segunda vez e clique no botão `Validar`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Escolha a nova palavra-passe da sua base de dados e anote-a. Deverá, em ambos os casos, respeitar as seguintes condições:

- Mínimo de 8 caracteres;
- Máximo de 30 caracteres;
- Pelo menos uma letra maiúscula;
- Pelo menos uma letra minúscula;
- Pelo menos um número;
- Ser composto unicamente por números e letras.

Por fim, consulte o separador `Tarefas em curso`{.action} e atualize a página regularmente. A alteração demorará alguns minutos até ficar efetiva.

### 3 - Aceder ao espaço de armazenamento

A ligação ao espaço de alojamento dos seus ficheiros pode ser realizada de várias formas:

- **FTP Explorer**\: este programa está disponível na Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Para o utilizar, no separador `FTP-SSH`{.action}, clique no botão Explorador `FTP`{.action};

- **um software FTP**\: terá de instalar no seu computador um programa compatível com o protocolo FTP (por exemplo, [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/));

- **um acesso SSH** (apenas nas ofertas Pro e Performance): consulte o guia "[Utilizar o acesso SSH do seu alojamento web](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/)" para utilizar este protocolo de ligação.

> [!primary]
>
> Para mais informações, consulte o guia ["Aceder ao espaço de armazenamento do alojamento web"](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>

## Quer saber mais? <a name="aller-plus-loin"></a>

[Os conselhos de cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/){.external}

[Utilização do software FileZilla com o seu alojamento](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)

[O SSH nos alojamentos web](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/fr/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/>.
