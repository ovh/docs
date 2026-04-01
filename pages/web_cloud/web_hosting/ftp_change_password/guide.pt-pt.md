---
title: "Alterar a palavra-passe de um utilizador FTP"
excerpt: "Descubra como alterar a palavra-passe de um utilizador FTP criado num alojamento web da OVHcloud"
updated: 2026-03-31
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
<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### Alterar a palavra-passe de um utilizador FTP

> [!primary]
>
> Para mais informações sobre as boas práticas de gestão de palavras-passe, consulte o guia "[Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)".

Dependendo do seu plano de [alojamento web da OVHcloud](/links/web/hosting), a palavra-passe do seu utilizador FTP é alterada de duas formas diferentes.

**Clique no seu plano para ver o conteúdo.**

/// details | Planos Perso e Alojamento gratuito 100M (um único utilizador FTP)

Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Um quadro apresenta os *utilizadores FTP* criados no seu alojamento web. Clique no *pictograma em forma de lápis* na coluna `Palavra-passe`{.action}, introduza a nova palavra-passe **seguindo a política das palavras-passe** e confirme a alteração clicando no *botão verde* de validação.
>>
>> ![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

///

/// details | Planos Pro e Performance (vários utilizadores FTP)

Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Um quadro apresenta os *utilizadores FTP* criados no seu alojamento web. Clique no botão `...`{.action} à direita do utilizador FTP em questão e depois em `Alterar palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe pretendida **seguindo a política de palavras-passe**, confirme introduzindo-a uma segunda vez e clique no botão `Confirmar`{.action}.
>>
>> ![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

///

> [!primary]
>
> A sua nova palavra-passe deverá respeitar a seguinte **política das palavras-passe**:
>
> - Mínimo de 9 caracteres
> - Máximo de 30 caracteres
> - Pelo menos uma letra maiúscula
> - Pelo menos uma letra minúscula
> - Pelo menos um número
> - Ser composta unicamente por números e letras

Por fim, consulte o separador `Operações em curso`{.action} e atualize a página regularmente. A alteração demorará alguns minutos até ficar efetiva.

### Aceder ao espaço de armazenamento

Para aceder ao seu espaço de armazenamento FTP, consulte o nosso guia "[Aceder ao espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)".

## Quer saber mais? <a name="go-further"></a>

[Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Aceder ao espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)

[Publicar o seu site](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 