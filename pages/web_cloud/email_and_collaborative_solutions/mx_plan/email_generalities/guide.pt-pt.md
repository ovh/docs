---
title: 'Introdução à oferta MX Plan'
excerpt: 'Saiba como começar a usar a oferta MX Plan'
updated: 2025-06-26
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
.w-500 {
  max-width:500px !important;
}
</style>

## Objetivo

Adquiriu um serviço MX Plan, que lhe permite beneficiar de endereços de e-mail, com os quais poderá enviar e receber mensagens no dispositivo que preferir.

**Saiba como começar a usar a oferta MX Plan.**

## Requisitos

- Dispor de uma oferta MX Plan Está disponível através de: uma oferta de [alojamento web](/links/web/hosting), o [Alojamento gratuito 100M](/links/web/domains-free-hosting) ou a oferta MX Plan sozinha.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções <a name="instructions"></a>

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Web Cloud`{.action}.
1. Clique em `MX Plan`{.action}.
1. Selecione o domínio em questão.
1. **Continuar com base na tecnologia de e-mail utilizada pelo serviço MX Plan**.

> [!primary]
>
> **Identificar a tecnologia de e-mail da oferta MX Plan.**
>
> Em função da data de ativação da sua oferta MX Plan ou de uma migração recente, a tecnologia de e-mail associada pode diferir. Esta versão é caracterizada pela interface do seu webmail. Para identificá-lo:
>
> - No separador `Informações gerais`{.action}, consulte a tecnologia utilizada sob a menção **Webmail** presente na caixa `Subscrição`{.action} ou `Ligação`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

**Índice**

- [Criar um endereço de e-mail](#create-email)
- [Utilizar os endereços de e-mail](#consult-emails)
    - [Utilizar o Webmail](#consult-emails-webmail)
    - [Utilizar cliente de e-mail](#consult-emails-client)
        - [Parâmetros de receção IMAP e POP](#imap-pop)
        - [Definições de envio de SMTP](#smtp)
- [Reencaminhamentos e alias](#redirection-alias)
- [Resposta automática](#autoreply)

### Criar um endereço de e-mail <a name="create-email"></a>

Para saber como criar um endereço de e-mail, clique no separador correspondente à tecnologia de e-mail utilizada pelo serviço MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Para criar um endereço de e-mail, aceda ao separador `E-mails`{.action}. A janela que aparece lista as contas já criadas. Para adicionar uma nova conta de e-mail, clique no botão `Adicionar uma conta`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Na nova janela que aparecerá, preencha as informações necessárias:
>>
>> - **Nome da conta**: Indique o seu novo endereço de e-mail (por exemplo, o seu nome.apelido). O domínio que compõe o endereço de e-mail já está pré-selecionado na lista.
>> - **Descrição da conta**: Informação sobre o endereço de e-mail, visível apenas no quadro do separador `E-mails`{.action} do seu serviço de e-mail.
>> - **Tamanho da conta**: Determine o tamanho que pretende atribuir à conta de e-mail.
>> - **Palavra-passe**: [Defina uma palavra-passe](/pages/account_and_service_management/account_information/manage-ovh-password) e confirme-a. Por razões de segurança, recomendamos que não utilize duas vezes a mesma palavra-passe. Escolha uma palavra-passe que não possa ser relacionada com as suas informações pessoais (evite qualquer referência ao seu sobrenome, nome ou data de nascimento) e renove-a regularmente.
>>
>> Depois de preencher os campos, clique em `Seguinte`{.action} e verifique as informações apresentadas no resumo. Se as informações estiverem corretas, clique em `Validar`{.action}. Repita este passo sempre que necessário, de acordo com o número de contas disponíveis.
>>
>> ![email](images/mxplan-creation-new-step3-roundcube.png){.thumbnail .w-500}
>>
> **Zimbra e OWA**
>>
>> Para criar um endereço de e-mail, aceda ao separador `Contas de e-mail`{.action}. A janela que aparece lista as contas já disponíveis, bem como as que ainda pode criar. Para adicionar uma nova conta de e-mail, clique no botão `Adicionar uma conta`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Na nova janela que aparecerá, preencha as informações necessárias:
>>
>> - **Conta de e-mail**: Um nome temporário já se encontra pré-preenchido na caixa de texto: elimine-o e indique o seu novo endereço de e-mail (por exemplo, o seu nome.apelido). O domínio que compõe o endereço de e-mail já está pré-selecionado na lista.
>> - **Nome Próprio**: Introduza um Nome.
>> - **Nome**: Introduza um nome.
>> - **Nome a visualizar**: Indique o nome que pretende apresentar como remetente quando enviar mensagens de correio eletrónico para este endereço.
>> - **Palavra-passe**: [Defina uma palavra-passe](/pages/account_and_service_management/account_information/manage-ovh-password) e confirme-a. Por razões de segurança, recomendamos que não utilize duas vezes a mesma palavra-passe. Escolha uma palavra-passe que não possa ser relacionada com as suas informações pessoais (evite qualquer referência ao seu sobrenome, nome ou data de nascimento) e renove-a regularmente.
>> - **Quota**: Determine o tamanho que pretende atribuir à conta de e-mail.
>>
>> Depois de preencher os campos, clique em `Seguinte`{.action} e verifique as informações apresentadas no resumo. Se as informações estiverem corretas, clique em `Validar`{.action}. Repita este passo sempre que necessário, de acordo com o número de contas disponíveis.
>>
>> ![email](images/mxplan-starter-new-step3.png){.thumbnail .w-500}
>>

### Utilizar os endereços de e-mail <a name="consult-emails"></a>

Depois de criar os endereços de e-mail, pode começar a utilizá-los. Para isso, dispõe de duas possibilidades: utilizar o webmail a partir de um browser ou utilizar um software de mensagens.

#### Utilizar o Webmail <a name="consult-emails-webmail"></a>

Aceda à página de «[Ligação ao webmail](/links/web/email)» e introduza o endereço de e-mail e a respetiva palavra-passe. De seguida, clique no botão `Ligação`{.action}.

Selecione o separador correspondente à tecnologia de e-mail da oferta MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Você deve obter uma interface semelhante à imagem abaixo com a menção «Rouncube» no canto superior esquerdo.
>> Para descobrir a interface Roundcube e a sua utilização, consulte o guia «[Utilizar o seu endereço de e-mail a partir do webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)».
>>
>> ![email](images/mxplan-webmail-roundcube01.png){.thumbnail .w-500}
>>
> **Zimbra**
>>
>> Como na imagem abaixo, aparece uma janela com a menção «Zimbra» no canto superior esquerdo.
>> Para saber como utilizar o seu endereço de e-mail a partir do webmail Zimbra, consulte o guia «[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».
>>
>> ![email](images/mxplan-webmail-zimbra01.png){.thumbnail .w-500}
>>
> **OWA**
>>
>> Ao aceder pela primeira vez ao webmail, deverá definir o idioma da interface e o fuso horário no qual se encontra. A seguir, poderá consultar a sua caixa de entrada.
>>
>> Para saber como utilizar o seu endereço de e-mail a partir do webmail OWA, consulte o nosso guia «[Utilizar o endereço de e-mail a partir do webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)».
>>
>> ![email](images/mxplan-webmail-owa01.png){.thumbnail .w-500}
>>

#### Utilizar um cliente de correio eletrónico <a name="consult-emails-client"></a>

É possível configurar a sua conta de e-mail num programa de mensagens como Outlook, Thunderbird, Mail de Mac, etc.

Aceda aos links dos manuais de configuração para o seu tipo de dispositivo:

> [!tabs]
> **Computador com Windows**
>>
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).<br>
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).<br>
>> - [Correio para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
> **Computador Apple Mac**
>>
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).<br>
>> - [Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).<br>
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
> **iPhone ou iPad**
>>
>> - [Mail para o iPhone e o iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
> **Smartphone ou tablet Android**
>>
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>

Se pretender obter os elementos necessários para configurar o seu endereço de e-mail, consulte as configurações que deverá utilizar a seguir.

##### Configurações de receção IMAP e POP <a name="imap-pop"></a>

Para a receção dos e-mails, ao escolher o tipo de conta, recomendamos uma utilização em **IMAP**. No entanto, pode selecionar **POP**.

> [!warning]
>
> É necessário anotar o valor correspondente à sua localização (**EUROPE** ou **AMÉRICA/ÁSIA-PACÍFICO**).

Selecione o separador correspondente ao tipo de configuração:

> [!tabs]
> **Configuração IMAP**
>>
>> - **Nome de utilizador**: Introduza o endereço de e-mail **completo**.
>> - **Palavra-passe**: Insira a palavra-passe do endereço de e-mail.
>> - **Servidor Europe (de entrada)**: imap.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Tipo de segurança**: SSL/TLS.
>>
> **Configuração POP**
>>
>> - **Nome de utilizador**: Introduza o endereço de e-mail **completo**.
>> - **Palavra-passe**: Insira a palavra-passe do endereço de e-mail.
>> - **Servidor Europe (de entrada)**: pop.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Tipo de segurança**: SSL/TLS.

##### Configurações de envio SMTP <a name="smtp"></a>

Para o envio dos e-mails, encontre abaixo os parâmetros **SMTP** a utilizar:

**Configuração SMTP**

- **Nome de utilizador**: Insira o endereço de e-mail **completo**.
- **Palavra-passe**: Insira a palavra-passe do e-mail.
- **Servidor Europe (de saída)**: smtp.mail.ovh.net **ou** ssl0.ovh.net.
- **Servidor AMÉRICA/ÁSIA-PACÍFICO (de saída)**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Tipo de segurança**: SSL/TLS.

### Reencaminhamentos e alias <a name="redirection-alias"></a>

Pretende reencaminhar os seus e-mails para outro destinatário, criar um alias ou, ainda, copiar sistematicamente outro endereço de e-mail?

Para isso, clique no separador correspondente à sua tecnologia de e-mail:

> [!tabs]
> **Roundcube**
>>
>> Para adicionar um reencaminhamento ou um alias, clique no separador `E-mails`{.action} do seu serviço MX Plan e, a seguir, clique no botão `Gestão dos reencaminhamentos`{.action} à direita.
>> Aparecerá o quadro dos reencaminhamentos ativos. À direita, clique no botão `Adicionar um reencaminhamento`{.action} para lançar a criação do seu reencaminhamento ou alias.
>>
>> - `Do endereço`: Introduza aqui o endereço de e-mail que deseja reencaminhar.<br>
>> - `Para o endereço`: Introduza aqui o endereço de destino do seu reencaminhamento. Pode ser um dos seus endereços de e-mail OVHcloud ou um endereço de e-mail externo.<br>
>> - `Escolha um modo de cópia`: Defina se deseja conservar uma cópia do e-mail recebido no endereço de e-mail visado (`Do endereço`) ou diretamente enviar para o endereço de reencaminhamento (`Para o endereço`) sem conservar uma cópia.
>>
>> Para compreender a utilização dos reencaminhamentos e alias no serviço MX Plan, consulte o nosso guia completo: «[Utilizar os reencaminhamentos de e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)».
>>
> **OWA e Zimbra**
>>
>> Quando se trata de uma tecnologia **OWA** ou **Zimbra**, pode fazê-lo de duas formas:
>>
>> 1. **Criar um reencaminhamento a partir do webmail**: Através de regras da caixa de entrada ou filtros. Estas regras, que se aplicam aquando da receção de um e-mail, permitem a transferência ou o reencaminhamento de um e-mail. Para isso, recomendamos que siga o nosso guia «[Regras da caixa de receção a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)» ou que consulte o capítulo «Filtros » do nosso guia «[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».
>>
>> 2. **Criar o seu reencaminhamento e alias a partir da Área de Cliente OVHcloud**: Para adicionar um reencaminhamento ou um alias, clique no separador `Reencaminhamentos`{.action}. Aparecerá o quadro dos reencaminhamentos ativos. À direita, clique no botão `Adicionar um reencaminhamento`{.action}.
>>
>> - `Do endereço`: Introduza aqui o endereço de e-mail que deseja reencaminhar.<br>
>> - `Para o endereço`: Introduza aqui o endereço de destino do seu reencaminhamento. Pode ser um dos seus endereços de e-mail OVHcloud ou um endereço de e-mail externo.<br>
>> - `Escolha um modo de cópia`: Defina se deseja conservar uma cópia do e-mail recebido no endereço de e-mail visado (`Do endereço`) ou diretamente enviar para o endereço de reencaminhamento (`Para o endereço`) sem conservar uma cópia.
>>
>> Para compreender a utilização dos reencaminhamentos e alias no seu serviço MX Plan, consulte o nosso guia completo: «[Utilizar os reencaminhamentos de e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)».

### Resposta automática <a name="autoreply"></a>

Quando precisa de se ausentar, é importante que possa ativar uma resposta automática para indicar que não pode consultar ou tratar as suas mensagens.

Selecione o separador correspondente à tecnologia de e-mail da oferta MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Para adicionar uma resposta automática a um dos seus endereços de e-mail, clique no separador `E-mails`{.action} do serviço MX Plan e, a seguir, clique no botão `Gestão das respostas automáticas`{.action} à direita.
>> Aparecerá uma tabela com as respostas automáticas já ativas. À direita, clique no botão `Adicionar uma resposta automática`{.action} para lançar a criação do seu reencaminhamento ou alias.
>>
>> Para obter mais informações sobre a implementação de uma resposta automática a partir do serviço MX Plan na sua Área de Cliente OVHcloud, consulte o guia «[MX Plan - Criar uma resposta automática num endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)».
>>
> **Zimbra**
>>
>> A implementação de uma resposta automática é realizada diretamente através da ligação ao endereço de e-mail a partir do Webmail. Para obter os detalhes, consulte o guia «[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)», selecione «Respostas automáticas/Atendedor» no índice.
>>
> **OWA**
>>
>> A implementação de uma resposta automática é realizada diretamente através da ligação ao endereço de e-mail a partir do Webmail. Para obter os detalhes, consulte o nosso guia «[Utilizar o seu endereço de e-mail a partir do webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)», vá diretamente ao capítulo «Adicionar a resposta automática».
>>

## Quer saber mais? <a name="go-further"></a>

[Utilizar o webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utilizar o webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Utilizar os reencaminhamentos de e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[MX Plan - Criar uma resposta automática num endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)

[Utilizar os reencaminhamentos de e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).
