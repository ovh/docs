---
title: "Zimbra Pro - Configurar a sua conta de e-mail através do AtiveSync no Outlook para Windows"
excerpt: "Saiba como configurar o seu endereço de e-mail Zimbra Pro no Outlook para Windows através do protocolo AtiveSync"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Objetivo

> [!primary]
> Este guia destina-se aos clientes que possuem um serviço de e-mail [Zimbra Pro](/links/web/emails-zimbra). Este serviço estará disponível em beta a partir de julho de 2025.

As contas Zimbra Pro podem ser configuradas no Windows utilizando o protocolo AtiveSync, o que lhe permite configurar todas as funcionalidades colaborativas do seu endereço de e-mail de uma só vez. A aplicação Outlook para Windows permite a consulta da sua conta de e-mail Zimbra Pro através do protocolo AtiveSync.

**Saiba como configurar o endereço de e-mail Zimbra Pro no Outlook para Windows através do protocolo AtiveSync.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. É da sua responsabilidade assegurar o bom funcionamento destes serviços.
>
> Este manual foi concebido para o ajudar a realizar tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [parceiro especializado](https://marketplace.ovhcloud.com/c/support-collaboration) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte "[Quer saber mais?](#go-further)" deste guia.

## Requisitos

- Ter um endereço de e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Ter a aplicação [Outlook clássico](https://support.microsoft.com/pt-pt/office/instalar-ou-reinstalar-o-outlook-cl%C3%A1ssico-num-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) em Windows.
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

## Instruções

> [!warning]
>
> Antes de iniciar a sua configuração, é importante notar que a aplicação Outlook incluída gratuitamente no Windows 11 é incompatível com o protocolo AtiveSync, necessário à configuração de uma conta Zimbra Pro. Terá de utilizar a versão **Outlook clássico** para beneficiar do suporte do protocolo AtiveSync.
>
> Para instalar o Outlook clássico no seu computador Windows, transfira-o a partir da página Microsoft "[Instalar ou reinstalar o Outlook clássico num PC Windows](https://support.microsoft.com/pt-pt/office/instalar-ou-reinstalar-o-outlook-cl%C3%A1ssico-num-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)", e instale-o.
>
> Quando a instalação for concluída, para distinguir as duas versões quando instaladas, digite "Outlook" na barra de pesquisa do Windows. Poderá verificar a diferença como se mostra a seguir.
>
>![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Adicionar a conta <a name="add-account"></a>

Para adicionar uma conta Zimbra Pro no Outlook clássico, siga os passos abaixo clicando sucessivamente nos **7** separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> 1. Aceda ao **painel de controlo** do Windows.
>> 2. Clique em `Contas de utilizadores`{.action}.
>> 3. Clique em `Mail`{.action}.
>> 4. Clique em `Contas de e-mail...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step01.png){.thumbnail .h-500}
>>
> **Etapa 2**
>>
>> - A partir da janela **Definições da conta**, no separador `Mensagens`, clique em `Novo...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step02.png){.thumbnail .h-500}
>>
> **Etapa 3**
>>
>> - A partir da janela **Adicionar uma conta**, selecione `Configuração manual ou tipos de servidores suplementares`{.action}.
>> - Clique em `Seguinte`{.action} para continuar.
>>
>> ![outlook Windows](images/outlook-windows-add-step03.png){.thumbnail .h-500}
>>
> **Etapa 4**
>>
>> - Selecione `Exchange AtiveSync`{.action}.
>> - Clique em `Seguinte`{.action} para continuar.
>>
>> ![outlook Windows](images/outlook-windows-add-step04.png){.thumbnail .h-500}
>>
> **Etapa 5**
>>
>> Introduza as informações de ligação à sua conta:
>>
>> - **O seu nome**: Defina um nome para ser apresentado.
>> - **Endereço de correio eletrónico**: Introduza o endereço de correio eletrónico completo.
>> - **Servidor de correio**: Introduza "zimbra1.mail.ovh.net".
>> - **Nome de utilizador**: Introduza o seu endereço de e-mail completo.
>> - **Palavra-passe**: Introduza a palavra-passe associada ao seu endereço de e-mail.
>>
>> Clique em `Seguinte`{.action} para finalizar a adição da conta.
>>
>> ![outlook Windows](images/outlook-windows-add-step05.png){.thumbnail .h-500}
>>
> **Etapa 6**
>>
>> O seu endereço de e-mail já está configurado para Outlook. Para beneficiar de uma plena sincronização das funcionalidades da sua conta Zimbra Pro, **transfira e instale** o módulo "[Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/)".
>>
>> ![outlook Windows](images/outlook-windows-add-step06.png){.thumbnail .h-500}
>>
> **Etapa 7**
>>
>> Depois de instalar o módulo "[Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/)", execute o Outlook clássico.
>> Aparece a janela de configuração **Zimbra Server configuration Settings**. Preencha as seguintes informações:
>>
>> - **Nome do servidor**: Introduza "zimbra1.mail.ovh.net".
>> - **Endereço de correio eletrónico**: Introduza o endereço de correio eletrónico completo.
>> - **Palavra-passe**: Introduza a palavra-passe associada ao seu endereço de e-mail.
>>
>> Não é necessário alterar as outras definições. Clique em `Aplicar`{.action} para validar os parâmetros e certificar-se de que estes estão em conformidade. Por fim, clique em `OK`{.action} para aceder ao Outlook e começar a utilizar o seu endereço de e-mail.
>>
>> ![outlook Windows](images/outlook-windows-add-step-07.png){.thumbnail .h-500}

> [!warning]
>
> Se, depois de seguir os passos de configuração acima indicados, não enviar ou receber os dados corretos, consulte a secção "[Alterar definições existentes](#modify-settings)" deste manual.

### Utilizar o endereço de e-mail

Depois de configurar um endereço de e-mail, pode começar a utilizá-lo! Já pode enviar e receber mensagens e gerir os calendários e as tarefas.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Pode ligar a [webmail OVHcloud](/links/web/email) com as credenciais do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o guia "[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Como alterar os parâmetros existentes? <a name="modify-settings"></a>

Para alterar os parâmetros de uma conta de e-mail já configurada, siga as instruções seguintes:

1. Navegue até à Área de Cliente **Painel de Controlo** do Windows.
1. Clique em `Contas de utilizadores`{.action}.
1. Clique em `Mail`{.action}.
1. Clique em `Contas de serviço de mensagens...`{.action}.
1. Selecione a conta de e-mail em causa na lista e clique em `Modificar...`{.action}.

![outlook ios](images/outlook-windows-modify-01.png){.thumbnail .h-500}

Consulte os parâmetros para **etapa 7** no capítulo "[Adicionar conta](#add-account)".

### Como eliminar uma conta de e-mail? <a name="delete-account"></a>

Para eliminar a sua conta de e-mail, siga as instruções seguintes:

1. Navegue até à Área de Cliente **Painel de Controlo** do Windows.
1. Clique em `Contas de utilizadores`{.action}.
1. Clique em `Mail`{.action}.
1. Clique em `Contas de serviço de mensagens...`{.action}.
1. Selecione a conta de e-mail em causa na lista e clique em `Eliminar`{.action}.

![outlook ios](images/outlook-windows-delete-01.png){.thumbnail .h-500}

> [!warning]
>
> Para poder eliminar a sua conta de e-mail, esta não deve ser a conta de e-mail predefinida.

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Outlook no Windows, consulte o [Centro de Ajuda da Microsoft](https://support.microsoft.com/pt-pt/office/adicionar-uma-conta-de-e-mail-ao-outlook-para-windows-6e27792a-9267-4aa4-8bb6-c84ef146101b?ocmsassetID=&CorrelationId=778d1d8d-9ac2-4449b-96292924_4b).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).