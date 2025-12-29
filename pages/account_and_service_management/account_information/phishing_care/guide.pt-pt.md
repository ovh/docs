---
title: 'Phishing - Como identificar e-mails ou SMS fraudulentos?'
excerpt: 'Como identificar um e-mail de phishing e o que fazer se clicar num link fraudulento?'
updated: 2025-12-18
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

O phishing é uma técnica fraudulenta destinada a enganar o utilizador para que forneça dados pessoais (contas de acesso, palavras-passe, etc.) e/ou bancários, fingindo ser uma terceira parte ou um site de confiança.<br>
Na prática, trata-se frequentemente do envio de um e-mail ou SMS que o convida a clicar num link. Este link redireciona-o para um formulário que imita fraudulenta-mente as cores de uma marca e convida-o a introduzir os seus dados pessoais.

**Este guia explica-lhe como identificar um e-mail ou SMS de phishing e quais as medidas a tomar se tiver clicado num link fraudulento.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Instruções

### Recebi um e-mail ou SMS em nome da OVHcloud, como saber se é legítimo?

#### Identificar um e-mail de phishing

Em primeiro lugar, verifique se o e-mail que recebeu também está visível na sua [área de cliente OVHcloud](/links/manager). Faça login, clique no seu nome no canto superior direito e em seguida em `E-mails de serviço`{.action} (ou `As minhas comunicações`{.action}). Ali encontrará cópias dos e-mails oficiais enviados pela OVHcloud.

Além disso, aqui estão alguns elementos que o ajudarão a distinguir visualmente um e-mail autêntico da OVHcloud de uma tentativa de phishing.

Clique na imagem para ampliá-la. Encontre os detalhes e explicações na tabela abaixo.

![Diferença entre e-mail OVHcloud e e-mail de phishing](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
> 
> Os números da tabela correspondem aos visíveis na imagem acima.

|Número - Descrição|E-mail OVHcloud legítimo|E-mail de phishing fraudulento|
|---|---|---|
|1 - Remetente|Verifique se o endereço usado para enviar o e-mail termina com um nome de domínio (ou subdomínio, por exemplo `events.ovhcloud.com` ) pertencente à OVHcloud (consulte a lista abaixo)|O remetente do e-mail será provavelmente um endereço que não vem da OVHcloud.|
|2 - Assunto|Verifique se o seu identificador **(que começa normalmente pelas iniciais da pessoa que criou a conta OVHcloud)** e/ou o endereço de e-mail da sua conta aparecem no assunto da mensagem.|Muitas vezes, o e-mail será marcado como \[SPAM] e **o seu identificador não aparecerá ou será incorreto**.|
|3 - Link|**Sem clicar nele, passe o ponteiro do rato sobre o link ou botão** e verá diretamente o destino (abaixo ou no fundo do seu navegador). No nosso exemplo, o link leva corretamente para um endereço https://www.ovh.com/.|Num e-mail de phishing, o link não será o de uma página oficial da OVHcloud. **Não clique nele.**|
|4 - Cabeçalho e rodapé do e-mail|A OVHcloud envia e-mails nos formatos TXT e HTML. O cabeçalho conterá o logótipo da OVHcloud, o rodapé do e-mail conterá informações legais relacionadas com a OVHcloud|É possível que o cabeçalho ou o rodapé contenham links que nada têm a ver com a OVHcloud. **Não clique nesses links.**|

/// details | **Lista de nomes de domínios OVHcloud legítimos** (clique para exibir)

- ovhcloud.com
- ovh.com
- ovh.fr
- services.ovhcloud.com
- news.ovhcloud.com
- clientmanager.fr
- kimsufi.com
- soyoustart.com
- ovh.ca
- ovh.com.au
- ovh.co.uk
- ovh.ie
- ovh.de
- ovh.es
- ovh.it
- ovh.lt
- ovh-hosting.fi
- ovh.net
- ovh.nl
- ovh.pl
- ovh.pt
- ovh.sn
- ovh.us
- robot.ovh.net

Pode também receber e-mails da nossa parte a partir de subdomínios autênticos, tais como:

- events.ovhcloud.com
- news.soyoustart.com
- services.kimsufi.com

///

#### Identificar um SMS de phishing

A OVHcloud **nunca** enviará um link por SMS. Os SMS que enviamos estão normalmente relacionados com a [autenticação em dois fatores no seu espaço cliente](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

Abaixo encontrará 2 exemplos de SMS, o primeiro é legítimo e corresponde à autenticação em dois fatores. O segundo SMS é fraudulento.

![SMS fraudulento](images/sms-phishing.png){.thumbnail}

#### Como denunciar um e-mail de phishing?

Após realizar as verificações explicadas acima, se estiver certo de que recebeu um e-mail de phishing que usurpa a identidade da OVHcloud, pode enviar-nos o máximo de informações possível (pelo menos o conteúdo do e-mail) para o seguinte endereço de e-mail: **<fraude@ovh.com>**.

> [!primary]
> 
> Note que as informações que nos fornecer podem ser partilhadas com terceiros para que possamos combater estas ameaças.
> 

### Introduzi as minhas informações pessoais: o que fazer?

Clique nos títulos abaixo para ver as instruções.

/// details | **Se introduziu o número do seu cartão bancário num site fraudulento**

Contacte rapidamente o seu banco para bloquear o seu meio de pagamento. Indique-lhes a data e, se possível, a hora em que introduziu o número do seu cartão bancário.

**O seu banco é o único que pode cancelar as transações fraudulentas que poderiam ter sido realizadas sem o seu conhecimento.**

///

/// details | **Se introduziu a sua palavra-passe OVHcloud num site fraudulento**

Faça login na sua [área de cliente OVHcloud](/links/manager) e altere imediatamente a sua palavra-passe.<br>

Encontrará, no nosso guia « [Alterar a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password) », o método para alterar a sua palavra-passe a partir do seu espaço cliente, bem como as nossas recomendações para gerar uma palavra-passe eficaz e armazená-la num gestor de palavras-passe. 

Recomendamos fortemente que ative também a [autenticação em dois fatores](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) para assegurar de forma duradoura a sua conta.

> [!primary]
>
> Lembre-se, para assegurar eficazmente os seus dados, a sua palavra-passe deve :
>
> - ter pelo menos doze caracteres;
> - conter pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número;
> - conter caracteres especiais (por exemplo: `%`, `#`, `:`, `$`, `*`);
> - não ser tirada do dicionário;
> - não conter informações pessoais (o seu primeiro nome, sobrenome ou data de nascimento);
> - não ser utilizada para vários acessos de utilizador;
> - ser armazenada num cofre de palavras-passe;
> - ser alterada a cada três meses;
> - ser diferente das palavras-passe anteriores.
>

///

## Quer saber mais?

[Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Segurança da conta OVHcloud com autenticação em dois fatores](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Segurança da conta OVHcloud e gestão das suas informações pessoais](/pages/account_and_service_management/account_information/all_about_username)

Fale com a nossa [comunidade de utilizadores](/links/community).