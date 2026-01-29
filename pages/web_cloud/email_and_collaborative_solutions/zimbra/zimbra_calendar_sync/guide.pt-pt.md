---
title: "Zimbra - Sincronizar um calendário CalDAV numa aplicação"
excerpt: "Saiba como adicionar um calendário Zimbra a uma aplicação através do protocolo CalDAV"
updated: 2026-01-29
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Objetivo

As contas de correio eletrónico Zimbra podem ser configuradas em diferentes softwares de correio compatíveis. Isto permite-lhe utilizar o seu endereço de correio eletrónico a partir do dispositivo da sua escolha. O Zimbra inclui a funcionalidade de calendário online, sincronizável a partir de um software compatível com o protocolo CalDAV.

**Saiba como adicionar um calendário Zimbra a uma aplicação através do protocolo CalDAV.**

## Requisitos

- Ter um endereço de e-mail Zimbra OVHcloud.
- Ter instalado uma aplicação que suporte o protocolo de calendário CalDAV.
- Dispor das credenciais relativas ao endereço de e-mail associado ao calendário que pretende configurar.

## Instruções

### O que é o protocolo CalDAV?

CalDAV é um protocolo de edição de calendário e tarefas online. Os endereços de correio eletrónico Zimbra dispõem de calendários que utilizam o protocolo CalDAV.

A configuração do calendário CalDAV é semelhante à de um endereço de e-mail e requer uma aplicação que suporte esse protocolo.

### Partilhar um calendário

> [!warning]
>
> Esta secção aplica-se apenas às ofertas [Zimbra Starter ou Pro](/links/web/emails) que dispõem da função de partilha de calendário.

#### Partilha pública no formato ICS

> [!primary]
>
> O formato de ficheiro ICS utilizado aqui é estático: a versão do ficheiro corresponde ao momento em que o utilizador gera o link. Isto significa que um evento adicionado após a geração do link para o ficheiro ICS não será presente no ficheiro nem no calendário em que é importado. Não há sincronização.

Para gerar um link de ficheiro ICS, siga os passos abaixo:

- Inicie sessão no seu endereço de correio eletrónico Zimbra através do [webmail](/links/web/email).
- Dirija-se ao separador `Calendário`{.action}.
- Clique com o botão direito no calendário em questão e clique em `Compartilhar...`{.action}.
- Clique no separador `Tornar público`{.action}.
- Marque a caixa `Gere um link público`{.action}, copie ou abra o link numa nova aba e descarregue o ficheiro ICS.

![zimbra_app](images/zimbra-calendar-webmail-01.png){.thumbnail .w-600 .h-600}

O ficheiro ICS que descarregou pode ser importado num calendário existente ou num novo.

#### Partilha por convite por correio eletrónico

Ao contrário da partilha de ficheiro ICS, a partilha por convite por correio eletrónico permite partilhar dinamicamente um calendário com outros endereços de correio eletrónico do mesmo nome de domínio. Os eventos e ações no calendário partilhado serão sincronizados.

> [!warning]
>
> Apenas os endereços de correio eletrónico do mesmo nome de domínio são capazes de receber este tipo de partilha.

Para iniciar uma partilha noutra conta de correio eletrónico:

- Inicie sessão no seu endereço de correio eletrónico Zimbra através do [webmail](/links/web/email).
- Dirija-se ao separador `Calendário`{.action}.
- Clique com o botão direito no calendário em questão e clique em `Compartilhar...`{.action}.
- Clique no separador `Convidar por email`{.action}.

![zimbra_app](images/zimbra-calendar-webmail-02.png){.thumbnail .w-600 .h-600}

Siga os passos seguintes para partilhar um calendário com uma ou mais contas de correio eletrónico:

> [!tabs]
> **Passo 1**
>>
>> Introduza o endereço de correio eletrónico com o qual deseja partilhar o calendário.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-03.png){.thumbnail .w-600 .h-600}
>>
> **Passo 2**
>>
>> Defina as permissões da conta de correio eletrónico no calendário, depois clique em `Adicionar`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-04.png){.thumbnail .w-600 .h-600}
>>
> **Passo 3**
>>
>> Repita os passos 1 e 2 para partilhar o mesmo calendário com outras contas de correio eletrónico do mesmo nome de domínio, depois clique em `Guardar`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-05.png){.thumbnail .w-600 .h-600}
>>
> **Passo 4**
>>
>> Um correio eletrónico é enviado para cada destinatário da partilha e permite aceitar ou recusar o calendário partilhado. Indica também os direitos atribuídos a este calendário.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-06.png){.thumbnail .w-600 .h-600}

> [!primary]
>
> Se partilhar o seu calendário com uma conta de correio eletrónico do mesmo nome de domínio que utiliza o webmail Roundcube (oferta MX Plan) ou OWA (ofertas E-mail Pro e Exchange), o destinatário do correio eletrónico recebe um link de acesso ao webmail Zimbra, permitindo criar uma conta "convidado" para consultar o calendário.
>
> ![zimbra_app](images/zimbra-calendar-webmail-07.png){.thumbnail .w-600 .h-600}

### Configurar o calendário CalDAV num software compatível

Selecionámos aplicações estáveis e compatíveis com o protocolo CalDAV.

- **Para Windows**: Siga o capítulo [Adicionar um calendário ao Thunderbird](#thunderbird)
- **Para macOS**: Siga o capítulo [Adicionar um calendário no macOS](#apple-macos) ou [Adicionar um calendário no Thunderbird](#thunderbird)
- **Para Linux**: Siga o capítulo [Adicionar um calendário ao Thunderbird](#thunderbird)
- **Para iPhone e iPad**: Siga o capítulo [Adicionar um calendário para iOS e ipadOS](#apple-ios)
- **Para Android**: Convidamo-lo a seguir o guia [Zimbra - Configurar a sua conta de e-mail na aplicação móvel Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios).

> [!warning]
>
> Atualmente, os dispositivos Android não oferecem suporte nativo ao protocolo CalDAV. Também não encontrámos uma aplicação de terceiros estável que possa sincronizar os calendários Zimbra das nossas ofertas.
>
> Apenas a aplicação Zimbra, baseada no seu Webmail, é capaz de consultar os calendários online num dispositivo Android.

#### Definições gerais para um calendário CalDAV Zimbra <a name="general-settings"></a>

Se utilizar uma aplicação compatível com o protocolo CalDAV, deverá utilizar os seguintes parâmetros gerais para configurar um calendário CalDAV Zimbra:

- **Servidor / Endereço / URL**: introduza o valor `zimbra1.mail.ovh.net`. Para alguns softwares, é necessário adicionar o protocolo "https" no endereço, introduza então o valor `https://zimbra1.mail.ovh.net`.
- **Nome de utilizador**: introduza o endereço de correio eletrónico completo associado ao calendário.
- **Palavra-passe**: introduza a palavra-passe do endereço de e-mail associado ao calendário.

#### Adicionar um calendário no Thunderbird <a name="thunderbird"></a>

> [!primary]
>
> [Mozilla Thunderbird](https://www.thunderbird.net/) está disponível em Windows, macOS e Linux. As etapas de instalação seguintes foram realizadas a partir do macOS, mas aplicam-se da mesma forma no Windows e no Linux.

Abra o Thunderbird e clique no ícone "Agenda" na coluna à esquerda.

Siga as etapas de instalação, clicando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> - Clique em `Novo calendário`{.action} na parte inferior da coluna do calendário ou clique com o botão direito do rato num calendário existente e selecione `Novo calendário`{.action} no menu pendente que se abrir.
>> - Selecione `Na rede` e depois clique em `Seguinte`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird01.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 2**
>>
>> Digite as credenciais de login no calendário:
>>
>> - **Nome de utilizador**: introduza o endereço de correio eletrónico completo associado ao calendário.
>> - **Endereço**: introduza o valor `zimbra1.mail.ovh.net`.
>> - **Este endereço não pede um identificador de ligação**: deixe esta caixa de verificação desmarcada e ser-lhe-á pedido que introduza a palavra-passe associada ao endereço de e-mail indicado acima.
>> - **Suporte do modo offline**: pode deixar esta opção selecionada.
>>
>> Clique em `Procurar agendas`{.action} para iniciar a sincronização do calendário. Introduza a palavra-passe do endereço de e-mail associado ao nome de utilizador na janela que surgir e valide a sua introdução.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird02.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 3**
>>
>> Aparecerá a janela abaixo com os elementos CalDAV presentes numa conta de e-mail Zimbra. Assinale os elementos que pretende apresentar no calendário Thunderbird e clique em `Ligar`{.action} para concluir a configuração.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird03.png){.thumbnail .w-600 .h-600}
>>

#### Adicionar um calendário para iOS e ipadOS <a name="apple-ios"></a>

> [!warning]
>
> A configuração abaixo foi realizada a partir de um iPhone. No entanto, a operação continua a ser a mesma a partir de um iPad.

Para adicionar um calendário CalDAV no aplicativo Apple `Calendar` do seu iPhone ou iPad, siga as etapas de instalação, clicando nas guias abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Dirija-se às `Definições`{.action} do seu iPhone ou iPad. Encontre a secção `Calendário`{.action} ao percorrer o menu ou ao introduzir "calendário" na barra de pesquisa das configurações.
>>
>> ![zimbra_app](images/zimbra-calendar-ios01.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 2**
>>
>> Dirija-se a `Contas Calendário`{.action} e selecione `Adicionar uma conta`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-ios02.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 3**
>>
>> Escolha `Outro`{.action} e selecione `Adicionar uma conta CalDAV`{.action} na secção "CALENDÁRIO".
>>
>> ![zimbra_app](images/zimbra-calendar-ios03.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 4**
>>
>> Digite as credenciais de login no calendário:
>>
>> - **Servidor**: introduza o valor `zimbra1.mail.ovh.net`.
>> - **Nome de utilizador**: introduza o endereço de correio eletrónico completo associado ao calendário.
>> - **Palavra-passe**: introduza a palavra-passe do endereço de e-mail.
>> - **Description**: adicione uma descrição ao calendário.
>>
>> Valide com o botão `Seguinte`{.action}.
>>
>> Escolha as aplicações `Calendário` e `Lembrete` que utilizarão as informações do calendário Zimbra.
>>
>> ![zimbra_app](images/zimbra-calendar-ios04.png){.thumbnail .w-600 .h-600}
>>

#### Adicionar um calendário no macOS <a name="apple-macos"></a>

Para adicionar um calendário CalDAV no aplicativo Apple `Calendar` do seu Mac, inicie o aplicativo e siga as etapas de instalação, clicando nas guias abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Clique em `Calendário`{.action} na barra de menu superior e, a seguir, em `Adicionar uma conta`{.action}. Selecione `Adicione uma conta CalDAV` e clique em `Continuar`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-macos01.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 2**
>>
>> A partir da janela de configuração, preencha as seguintes informações:
>>
>> - **Tipo de conta**: escolha `Manual`" no menu pendente.
>> - **Nome de utilizador**: introduza o endereço de correio eletrónico completo associado ao calendário.
>> - **Palavra-passe**: introduza a palavra-passe do endereço de e-mail.
>> - **Endereço do servidor**: introduza o valor `zimbra1.mail.ovh.net`.
>>
>> Clique em `Ligar`{.action} para finalizar.
>>
>> ![zimbra_app](images/zimbra-calendar-macos02.png){.thumbnail .w-600 .h-600}
>>

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar o endereço de correio eletrónico do Zimbra num software de correio eletrónico](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre a solução Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).