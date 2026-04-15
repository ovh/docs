---
title: 'Phishing - Como identificar e-mails fraudulentos?'
excerpt: 'Como identificar um e-mail de phishing e o que fazer se clicar num link fraudulento?'
updated: 2026-03-03
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

O phishing é uma técnica fraudulenta destinada a enganar o utilizador para que forneça dados pessoais (contas de acesso, palavras-passe, etc.) e/ou bancários, fazendo-se passar por uma entidade ou um site de confiança.<br>
Na prática, trata-se frequentemente do envio de um e-mail ou SMS que o convida a clicar num link. Este link redireciona-o para um formulário que imita fraudulentamente as cores de uma marca e convida-o a introduzir os seus dados pessoais.

**Este guia explica-lhe como identificar um e-mail ou SMS de phishing e quais as medidas a tomar se tiver clicado num link fraudulento.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Instruções

### Recebi um e-mail ou SMS em nome da OVHcloud, como saber se é legítimo?

#### Identificar um e-mail de phishing

<!-- CP-STEPS-START:check-messages -->
Em primeiro lugar, verifique se o e-mail que recebeu também está visível na página [As minhas mensagens](/links/control-panel/account-messages). Ali encontrará cópias dos e-mails oficiais enviados pela OVHcloud.
<!-- CP-STEPS-END:check-messages -->

Além disso, aqui estão alguns elementos que o ajudarão a distinguir visualmente um e-mail autêntico da OVHcloud de uma tentativa de phishing.

Clique na imagem para ampliá-la. Encontre os detalhes e explicações na tabela abaixo.

![Diferença entre e-mail OVHcloud e e-mail de phishing](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
>
> Os números da tabela correspondem aos visíveis na imagem acima.

|Número - Descrição|E-mail OVHcloud legítimo|E-mail de phishing fraudulento|
|---|---|---|
|1 - Remetente|Verifique se o endereço utilizado para enviar o e-mail termina com um nome de domínio (ou subdomínio, por exemplo `events.ovhcloud.com`) pertencente à OVHcloud (consulte a lista abaixo)|O remetente do e-mail será muito provavelmente um endereço que não provém da OVHcloud.|
|2 - Assunto|Verifique se o seu identificador **(que começa normalmente pelas iniciais da pessoa que criou a conta OVHcloud)** e/ou o endereço de e-mail da sua conta aparecem no assunto da mensagem.|Muitas vezes, o e-mail será marcado como \[SPAM] e **o seu identificador não aparecerá ou estará incorreto**.|
|3 - Link|**Sem clicar nele, passe o ponteiro do rato sobre o link ou botão** e verá diretamente o destino (logo abaixo ou no fundo do seu navegador). No nosso exemplo, o link aponta corretamente para um endereço https://www.ovh.com/. Quando clicar num link, verifique sempre o endereço no navegador. A OVHcloud utiliza um conjunto de nomes de domínio reconhecíveis, geralmente ovhcloud.com ou ovh.com (consulte abaixo a lista de domínios legítimos e as dicas para verificar um link suspeito).|Num e-mail de phishing, o link não será o de uma página oficial da OVHcloud. **Não clique nele.**|
|4 - Cabeçalho e rodapé do e-mail|A OVHcloud envia e-mails nos formatos TXT e HTML. O cabeçalho conterá o logótipo da OVHcloud, o rodapé do e-mail conterá informações legais relacionadas com a OVHcloud.|É possível que o cabeçalho ou o rodapé contenham links que nada têm a ver com a OVHcloud. **Não clique nesses links.**|

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

Pode também receber e-mails de subdomínios autênticos:

- events.ovhcloud.com
- news.soyoustart.com
- services.kimsufi.com

///

/// details | **Dicas para verificar um link suspeito** (clique para exibir)

**Ler o URL da direita para a esquerda**

O verdadeiro nome de domínio encontra-se logo antes da primeira `/` no endereço. Os URL de phishing adicionam frequentemente palavras antes do domínio para o tornar credível:

- `https://www.ovhcloud.com/account/login` — o verdadeiro domínio é **ovhcloud.com** ✓
- `https://ovhcloud.com.login-secure.xyz/account` — o verdadeiro domínio é **login-secure.xyz** ✗

Para encontrar o verdadeiro domínio, observe a barra de endereços e leia **desde a primeira `/` para a esquerda** — as duas últimas partes antes dessa barra oblíqua são o domínio real.

**Atenção aos caracteres semelhantes**

Os burlões substituem por vezes letras por caracteres visualmente semelhantes para criar endereços enganosos:

- `ovhcIoud.com` (I maiúsculo no lugar do L minúsculo)
- `0vhcloud.com` (zero no lugar da letra O)
- `ovhclould.com` (letra adicional)

Se algo lhe parecer invulgar, não clique. Digite `ovhcloud.com` manualmente no seu navegador.

**Os encurtadores de URL são um sinal de alerta**

Os links curtos como `bit.ly/xxx`, `tinyurl.com/xxx` ou `t.co/xxx` escondem o destino real. A OVHcloud **nunca** utiliza encurtadores de URL nos seus e-mails oficiais.

**No telemóvel: pressão longa em vez de passar o rato**

Num telemóvel ou tablet, não é possível passar o rato sobre um link. Em vez disso, efetue uma **pressão longa** (mantenha o dedo sobre o link sem o largar). Será apresentada uma pré-visualização do URL completo. Se o domínio lhe for desconhecido, não abra o link.

**Em caso de dúvida, aceda diretamente ao site**

O reflexo mais seguro: **nunca clique num link de um e-mail para aceder à sua conta**. Abra o seu navegador e digite `www.ovhcloud.com` manualmente, e depois faça login a partir do site. Se a OVHcloud necessitar de uma ação da sua parte, verá a notificação na sua área de cliente.

///

#### Identificar um SMS de phishing

A OVHcloud **nunca** enviará um link por SMS. Os SMS que enviamos estão normalmente relacionados com a [autenticação de dois fatores na sua área de cliente](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

Abaixo encontrará 2 exemplos de SMS, o primeiro é legítimo e corresponde à autenticação de dois fatores. O segundo SMS é fraudulento.

![SMS fraudulento](images/sms-phishing.png){.thumbnail}

#### Como denunciar um e-mail de phishing?

Após realizar as verificações explicadas acima, se tiver a certeza de que recebeu um e-mail de phishing que usurpa a identidade da OVHcloud, pode denunciá-lo guardando o e-mail como ficheiro (`.eml` ou `.msg`) e enviando-o em **anexo** de uma nova mensagem para o endereço **<fraude@ovh.com>**.

Estes formatos de ficheiro conservam as informações técnicas ocultas (chamadas "cabeçalhos") de que as nossas equipas necessitam para rastrear a origem da fraude e agir.

> [!warning]
>
> **Não reencaminhe diretamente o e-mail de phishing.** Ao reencaminhá-lo, é a sua própria caixa de e-mail que envia o conteúdo fraudulento, o que pode levar ao bloqueio do seu endereço de e-mail considerado como emissor de spam. Em vez disso, guarde o e-mail como ficheiro e anexe-o a uma **nova** mensagem.

**Como guardar um e-mail como ficheiro:**

Clique no título correspondente à aplicação de e-mail que utiliza.

**Software de e-mail (desktop)**

/// details | **Outlook para Windows**

Existem duas versões do Outlook para Windows: **Outlook clássico** e o **novo Outlook**. Para os distinguir, escreva "Outlook" na barra de pesquisa do Windows. A versão clássica apresenta a menção *"(clássico)"*, enquanto o novo Outlook não tem menção especial.

![Outlook Windows - identificar a versão](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Outlook clássico:**

1. Selecione o e-mail de phishing na sua caixa de entrada (não o abra).
2. Clique em `Ficheiro`{.action} na barra de menus e depois em `Guardar como`{.action}.
3. No menu pendente "Tipo de ficheiro", selecione **Formato de mensagem do Outlook - Unicode (.msg)**.
4. Escolha uma localização no seu computador (por exemplo, o Ambiente de Trabalho) e clique em `Guardar`{.action}.

Também pode **arrastar e largar** o e-mail da sua caixa de entrada diretamente para o Ambiente de Trabalho. Isto criará um ficheiro `.msg` que poderá anexar à sua denúncia.

**Novo Outlook:**

1. Na lista de mensagens, clique com o **botão direito do rato** no e-mail de phishing.
2. Selecione `Guardar como`{.action} e depois escolha `Guardar como ficheiro EML`{.action}.
3. Escolha uma localização no seu computador e clique em `Guardar`{.action}.

///

/// details | **Thunderbird**

1. Clique com o botão direito do rato no e-mail de phishing na sua caixa de entrada.
2. Selecione `Guardar como`{.action}.
3. O e-mail será guardado como ficheiro `.eml`. Escolha uma localização no seu computador e clique em `Guardar`{.action}.

///

/// details | **Apple Mail (macOS)**

1. Selecione o e-mail de phishing na sua caixa de entrada.
2. Na barra de menus, clique em `Ficheiro`{.action} > `Guardar como`{.action}.
3. Escolha o formato **Código fonte da mensagem**, selecione uma localização no seu computador e clique em `Guardar`{.action}.

///

**Webmail (navegador)**

/// details | **OWA - Outlook Web Application**

1. Abra o e-mail de phishing.
2. Clique nos **três pontos horizontais** (...) no canto superior direito do e-mail.
3. Selecione `Ver`{.action} > `Ver origem da mensagem`{.action}.
4. Selecione todo o texto (`Ctrl+A` ou `Cmd+A`), copie-o (`Ctrl+C` ou `Cmd+C`), cole-o num editor de texto simples (por exemplo, o Bloco de notas ou TextEdit) e guarde o ficheiro com a extensão `.eml`.

///

/// details | **Roundcube (Webmail OVHcloud)**

1. Selecione o e-mail de phishing na sua caixa de entrada.
2. Clique em `Mais`{.action} (ou no ícone **...**) na barra de ferramentas.
3. Selecione `Transferir (.eml)`{.action}.
4. O ficheiro será guardado na sua pasta de Transferências.

///

/// details | **Zimbra (Webmail OVHcloud)**

1. Selecione o e-mail de phishing na sua caixa de entrada.
2. Clique em `Mais`{.action} na barra de ferramentas.
3. Selecione `Ver original`{.action}. O conteúdo em bruto do e-mail será aberto num novo separador do navegador.
4. Neste novo separador, utilize `Ctrl+S` (ou `Cmd+S` no macOS) para guardar a página. Guarde o ficheiro com a extensão `.eml` (se o seu navegador propuser `.txt`, renomeie o ficheiro após a gravação).

///

/// details | **Gmail**

1. Abra o e-mail de phishing.
2. Clique nos **três pontos verticais** (...) no canto superior direito do e-mail.
3. Selecione `Transferir mensagem`{.action}.
4. Um ficheiro `.eml` será guardado na sua pasta de Transferências.

///

Uma vez guardado o ficheiro, crie um **novo e-mail** para **<fraude@ovh.com>** e anexe o ficheiro.

> [!primary]
>
> Tenha em atenção que as informações que nos fornecer poderão ser partilhadas com terceiros para nos permitir combater estas ameaças.
>

### Introduzi as minhas informações pessoais: o que fazer?

Clique nos títulos abaixo para ver as instruções.

/// details | **Se introduziu o número do seu cartão bancário num site fraudulento**

Contacte rapidamente o seu banco para bloquear o seu meio de pagamento. Indique-lhes a data e, se possível, a hora a que introduziu o número do seu cartão bancário.

**O seu banco é o único que pode cancelar as transações fraudulentas que possam ter sido realizadas sem o seu conhecimento.**

///

/// details | **Se introduziu a sua palavra-passe OVHcloud num site fraudulento**

<!-- CP-STEPS-START:change-password-security -->
Aceda à página [Segurança](/links/control-panel/account-security) e altere imediatamente a sua palavra-passe.<br>
<!-- CP-STEPS-END:change-password-security -->

Encontrará, no nosso guia "[Alterar a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)", o método para alterar a sua palavra-passe a partir da sua área de cliente, bem como as nossas recomendações para gerar uma palavra-passe eficaz e armazená-la num gestor de palavras-passe.

Recomendamos fortemente que ative também a [autenticação de dois fatores](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) para proteger de forma duradoura a sua conta.

> [!primary]
>
> Para sua informação, de modo a proteger eficazmente os seus dados, a sua palavra-passe deve:
>
> - ter pelo menos doze caracteres;
> - conter pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número;
> - conter caracteres especiais (por exemplo: `%`, `#`, `:`, `$`, `*`);
> - não ser retirada do dicionário;
> - não conter informações pessoais (o seu primeiro nome, apelido ou data de nascimento);
> - não ser utilizada para vários acessos de utilizador;
> - ser armazenada num cofre de palavras-passe;
> - ser alterada a cada três meses;
> - ser diferente das palavras-passe anteriores.
>

///

## Quer saber mais?

[Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteger a conta OVHcloud com a autenticação de dois fatores](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Proteger a minha conta OVHcloud e gerir as minhas informações pessoais](/pages/account_and_service_management/account_information/all_about_username)

Fale com a nossa [comunidade de utilizadores](/links/community).
