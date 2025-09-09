---
title: 'Criar um endereço de e-mail com a oferta MX Plan'
excerpt: 'Saiba como criar um endereço de e-mail com a oferta MX Plan'
updated: 2025-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Objetivo

Adquiriu um serviço de e-mail MX Plan. que lhe permite beneficiar de endereços de e-mail associados a um domínio.

**Saiba como criar um endereço de e-mail com a oferta MX Plan.**

## Requisitos

- Dispor de uma oferta MX Plan. Esta última está disponível através de:
    - Uma oferta de [alojamento web](/links/web/hosting).
    - Um [alojamento gratuito 100M](/links/web/domains-free-hosting) incluído com um nome de domínio (ativado anteriormente).
    - Uma oferta MX Plan encomendada separadamente.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager), na secção `Web Cloud`{.action}.

> [!primary]
>
> **Casos especiais**
>
> - Relativamente ao alojamento gratuito 100M: é obrigatório ativá-lo antes para poder criar um endereço de e-mail. Pode efetuar esta operação a partir da [Área de Cliente OVHcloud](/links/manager), posicionando-se no domínio em questão.
> - No âmbito de um [alojamento web](/links/web/hosting), é necessário ativar a oferta MX Plan incluída antes de continuar a ler este manual. Para isso, consulte o nosso manual "[Ativar os endereços de e-mail incluídos no seu alojamento web](/pages/web_cloud/web_hosting/activate-email-hosting)".

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
> - No separador `Informações gerais`{.action}, leia a tecnologia utilizada com a menção **Webmail** presente na caixa `Subscrição`{.action} em `Webmail`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-400}

### OWA e Zimbra

Esta secção documenta as ofertas MX Plan que utilizam a tecnologia webamil **OWA** e **Zimbra**.

#### Criar uma conta de e-mail

Para obter um novo endereço de e-mail, aceda a `Contas de e-mail`{.action}. Poderá consultar as contas de e-mail disponíveis e adicionar novas contas. Para isso, clique no botão `Adicionar uma conta`{.action}.

![email](images/mxplan-creation-new-step2.png){.thumbnail .w-400}

Na nova janela que aparecerá, preencha as informações necessárias:

- **Conta de e-mail**: Um nome temporário já está pré-preenchido na zona de texto. Substitua-o pela que deseja para o seu endereço de e-mail (o seu nome.apelido, por exemplo). O domínio que fará parte do endereço de e-mail aparecerá pré-selecionado na lista.

> [!warning]
>
> A escolha do nome do seu endereço de e-mail deve respeitar as seguintes condições:
>
> - Mínimo de 2 caracteres
> - Máximo de 32 caracteres
> - Nenhum caráter acentuado
> - Sem caracteres especiais, com exceção dos seguintes caracteres: `.`, `,`, `-` e `_`

- **Nome**: Introduza um nome.
- **Nome**: Introduza um sobrenome.
- **Nome a apresentar**: Insira o nome que pretende que figure como remetente quando envia e-mails a partir deste endereço.
- **Password**: Indique uma palavra-passe e introduza-a novamente para confirmar. Por razões de segurança, recomendamos que não utilize duas vezes a mesma palavra-passe. Escolha uma palavra-passe que não possa ser relacionada com as suas informações pessoais (evite qualquer referência ao seu sobrenome, nome ou data de nascimento, por exemplo) e renove-a regularmente.

> [!warning]
>
> A escolha da palavra-passe deve respeitar as seguintes condições:
>
> - Mínimo de 9 caracteres
> - Máximo de 30 caracteres
> - Nenhum caráter acentuado

Depois de preencher os campos, clique em `Seguinte`{.action}. 

![email](images/mxplan-creation-new-step3.png){.thumbnail .w-400}

De seguida, verifique as informações apresentadas no resumo. Se estiverem corretas, clique novamente em `Validar`{.action}. A conta adicionada por último deverá aparecer na tabela. Aguarde alguns instantes até a conta ficar disponível.

Repita este passo sempre que necessário, de acordo com o número de contas disponíveis.

#### Consultar os e-mails

Aceda à página “[Ligação ao webmail](/links/web/email)” e introduza o seu endereço de e-mail e respetiva palavra-passe. De seguida, clique no botão `Ligação`{.action}.

Selecione o separador correspondente à tecnologia de e-mail da oferta MX Plan:

> [!tabs]
> **Zimbra**
>>
>> Quando estiver conectado ao webmail Zimbra, obterá a interface abaixo. Para mais informações sobre a utilização do webmail Zimbra, consulte o guia "[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
>>
>> ![Zimbra - interface](images/zimbra-01.png){.thumbnail .w-400}
>>
> **OWA**
>>
>> Ao aceder pela primeira vez ao webmail, deverá definir o idioma da interface e o fuso horário no qual se encontra. A seguir, poderá consultar a sua caixa de entrada. Para obter mais informações, consulte o nosso manual "[Utilizar um endereço de e-mail a partir do Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".
>>
>> ![email](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

Para consultar os seus e-mails a partir de um software de correio eletrónico, consulte a rubrica "[Consultar uma conta de e-mail a partir de um dispositivo](#configdevices)".

#### Eliminar uma conta de e-mail

A partir da nova versão MX Plan, fala-se de *reinicialização de conta* quando tem de a eliminar.

> [!warning]
>
> Antes de eliminar as contas de e-mail, certifique-se de que estas não são utilizadas. Pode ser necessário um backup destas contas. Se necessário, consulte o guia [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), que lhe descreverá como exportar os dados de uma conta a partir da Área de Cliente ou a partir de um software de correio eletrónico.

No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} à direita da conta a eliminar e, a seguir, em `Reinicializar esta conta`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail .w-400}

### MX Plan Roundcube

Esta secção é dedicada às ofertas MX Plan que utilizam a tecnologia webmail **Roundcube**.

#### Criar uma conta de e-mail

Para obter um novo endereço de e-mail, aceda a `E-mails`{.action}. Aparecerá uma tabela com todas as contas de e-mail criadas com a oferta MX Plan. De seguida, clique no botão `Criar um endereço de e-mail`{.action}.

![email](images/mxplan-creation-legacy-step2.png){.thumbnail .w-400}

Na nova janela que aparecerá, preencha as informações necessárias:

- **Nome da conta**: Indique o nome que deseja para o seu endereço de e-mail (por exemplo, o seu nome.apelido). O domínio em questão já está completado por predefinição.|  
- **Descrição da conta**: Insira uma breve descrição que lhe permita reconhecer esta conta entre as outras presentes na sua Área de Cliente OVHcloud.|  
- **Tamanho da conta**: Selecione o tamanho da conta que pretende. Trata-se do espaço de que beneficiará o seu endereço para armazenar as mensagens.|  
- **Password**: Indique uma palavra-passe e introduza-a novamente para confirmar. Por razões de segurança, recomendamos que não utilize duas vezes a mesma palavra-passe, selecione uma palavra-passe que não tenha qualquer relação com as suas informações pessoais (evite as referências ao seu sobrenome, nome e data de nascimento, por exemplo) e que a renove regularmente.|

Depois de preencher os campos, clique em `Seguinte`{.action}. 

![email](images/mxplan-creation-legacy-step3.png){.thumbnail .w-400}

De seguida, verifique as informações apresentadas no resumo. Se estiverem corretas, clique novamente em `Seguinte`{.action}. Finalmente, clique em `Validar`{.action} para lançar a criação do endereço de e-mail. Aguarde alguns instantes até a conta ficar disponível.

Repita este passo sempre que necessário, de acordo com o número de contas disponíveis.

#### Consultar os e-mails 

Aceda à página “[Ligação ao webmail](/links/web/email)” e introduza o seu endereço de e-mail e respetiva palavra-passe. De seguida, clique no botão `Ligação`{.action}.

A seguir, poderá consultar a sua caixa de entrada. Para obter mais informações, consulte o nosso manual “[Guia de utilização do Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)”.

![email](images/mxplan-creation-legacy-step4.png){.thumbnail .w-400}

Para consultar os seus e-mails a partir de um software de correio, consulte a rubrica [Consultar uma conta de e-mail a partir de um dispositivo](#configdevices)

#### Eliminar uma conta de e-mail

> [!warning]
>
> Antes de eliminar as contas de e-mail, certifique-se de que estas não são utilizadas. Pode ser necessário um backup destas contas. Se necessário, consulte o guia [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), que lhe descreverá como exportar os dados de uma conta a partir da Área de Cliente ou a partir de um software de correio eletrónico.

No separador `Contas de e-mail`{.action}, clique no botão `...`{.action} à direita da conta a eliminar e, a seguir, em `Eliminar a conta`{.action}

![email](images/mxplan-legacy-reset.png){.thumbnail .w-400}

### Consultar uma conta de e-mail a partir de um dispositivo <a name="configdevices"></a>

Pode configurar o seu endereço de e-mail no dispositivo que desejar (smartphone ou tablet, por exemplo). Para isso, pode consultar os nossos manuais:

> [!tabs]
> **Windows**
>>
>> - [Correio no Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)(EN)
>> - [Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Mail para iPhone ou iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)(EN)
>>
> **Outro**
>>
>> - [Interface Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)(EN)
>>

Se pretender obter mais informações sobre os elementos necessários para configurar o seu endereço de e-mail, consulte as configurações que deverá utilizar.

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
>> - **Servidor EUROPE (de entrada)**: imap.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Tipo de segurança**: SSL/TLS.
>>
> **Configuração POP**
>>
>> - **Nome de utilizador**: Introduza o endereço de e-mail **completo**.
>> - **Palavra-passe**: Insira a palavra-passe do endereço de e-mail.
>> - **Servidor EUROPE (de entrada)**: pop.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Tipo de segurança**: SSL/TLS.

##### Configurações de envio SMTP <a name="smtp"></a>

Para o envio dos e-mails, encontre abaixo os parâmetros **SMTP** a utilizar:

**Configuração SMTP**

- **Nome de utilizador**: Insira o endereço de e-mail **completo**.
- **Palavra-passe**: Insira a palavra-passe do e-mail.
- **Servidor EUROPE (de saída)**: smtp.mail.ovh.net **ou** ssl0.ovh.net.
- **Servidor AMÉRICA/ÁSIA-PACÍFICO (de saída)**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Tipo de segurança**: SSL/TLS.

### Casos de utilização

**Utilizou todos os endereços incluídos na sua oferta?**

- Consulte as perguntas da [nossa FAQ e-mail](pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
- Consulte o conjunto das nossas ofertas e-mail [Zimbra](/links/web/emails-zimbra) ou [Exchange](/links/web/emails) para completar a sua oferta MX Plan no mesmo domínio.

## Quer saber mais? <a name="go-further"></a>

[Utilizar o webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utilizar o webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).