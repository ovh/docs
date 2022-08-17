---
title: Alterar a palavra-passe de um utilizador FTP
slug: alterar-palavra-passe-utilizador-ftp
excerpt: Saiba como alterar a palavra-passe de um utilizador FTP criado num alojamento web da OVH
section: FTP e SSH
order: 2
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 24/01/2022**

## Objetivo

As ofertas de alojamento web da OVHcloud dão acesso a um espaço de armazenamento de ficheiros online utilizável através do protocolo **FTP**.<br>O acesso a este espaço é possível através de um utilizador FTP e da respetiva palavra-passe.
<br>Este acesso permitir-lhe-á [publicar o seu site](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/#23-carregar-os-ficheiros-para-o-espaco-de-armazenamento).

**Descubra como alterar a palavra-passe de um utilizador FTP criado no seu alojamento web da OVHcloud.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#gofurther)?
>

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Etapa 1: Aceder à gestão dos utilizadores FTP

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Selecione o separador `FTP-SSH`{.action}.

Um quadro mostra os utilizadores FTP criados no seu alojamento. Estes utilizadores permitem-lhe aceder ao seu espaço de armazenamento FTP para que possa publicar os ficheiros do seu website. Um utilizador será automaticamente criado durante a instalação do alojamento.

### Etapa 2: Alterar a palavra-passe de um utilizador FTP

> [!primary]
>
> Para mais informações sobre as boas práticas de gestão de palavras-passe, siga as instruções deste [guia](https://docs.ovh.com/pt/customer/gerir-a-palavra-passe/).
>

Dependendo do seu plano de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/), a alteração da palavra-passe do utilizador FTP através do separador `FTP-SSH`{.action} poderá ser efetuada de duas formas:

- **para as ofertas que não permitem criar um segundo utilizador FTP** (ofertas Start 10M e Perso): clique no ícone em forma de lápis na coluna `Palavra-passe`{.action}, introduza a nova palavra-passe e confirme a alteração clicando no botão verde.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **para as ofertas que permitem criar vários utilizadores FTP** (ofertas Pro e Performance): clique nos três pontos à direita do utilizador FTP em causa e, a seguir, em `Alterar palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe pretendida, confirme introduzindo-a uma segunda vez e clique no botão `Validar`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Escolha a nova palavra-passe da sua base de dados e anote-a. Deverá, em ambos os casos, respeitar as seguintes condições:

- Mínimo de 8 caracteres;
- Máximo de 30 caracteres;
- Pelo menos uma letra maiúscula;
- Pelo menos uma letra minúscula;
- Pelo menos um número;
- Ser composto unicamente por números e letras.

Por fim, consulte o separador `Operações em curso`{.action} e atualize a página regularmente. A alteração demorará alguns minutos até ficar efetiva.

### Etapa 3: Aceder ao espaço de armazenamento

A ligação ao espaço de alojamento dos seus ficheiros pode ser realizada de várias formas:

- **FTP Explorer**: este programa está disponível na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Para o utilizar, no separador `FTP-SSH`{.action}, clique no botão `Explorador FTP`{.action};

> [!warning]
>
> FTP Explorer não está disponível para a oferta Cloud Web. Será necessário utilizar um dos dois métodos seguintes.

- **Software FTP**: terá de instalar no seu computador um programa compatível com o protocolo FTP (por exemplo, [FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/));

- **Acesso SSH** (apenas nas ofertas Pro e Performance): consulte o guia "[Utilizar o acesso SSH do seu alojamento web](https://docs.ovh.com/pt/hosting/partilhado_o_ssh_nos_alojamentos_partilhados/)" para utilizar este protocolo de ligação.

> [!primary]
>
> Para mais informações, consulte o guia "[Aceder ao espaço de armazenamento do alojamento web](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/)".
>

## Quer saber mais? <a name="gofurther"></a>

[Definir e gerir a palavra-passe da sua conta](https://docs.ovh.com/pt/customer/gerir-a-palavra-passe/)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
