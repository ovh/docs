---
title: 'Exchange - Configurar seu endereço de e-mail no Thunderbird para Windows'
excerpt: 'Descubra como configurar seu endereço de e-mail Exchange no Thunderbird para Windows'
updated: 2025-09-19
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-400 {
  max-width:400px !important;
}
</style>

## Objetivo

As contas Exchange podem ser configuradas em diferentes softwares de e-mail compatíveis. Isso permite que você use seu endereço de e-mail a partir do dispositivo de sua escolha. O Thunderbird é um cliente de e-mail gratuito e de código aberto.

**Descubra como configurar seu endereço de e-mail Exchange no Thunderbird para Windows.**

## Requisitos

- Ter um endereço de e-mail [Hosted Exchange](/links/web/emails-hosted-exchange) ou [Private Exchange](/links/web/emails-private-exchange).
- Ter o software Thunderbird instalado no seu dispositivo com Windows.
- Possuir as credenciais relacionadas ao endereço de e-mail que deseja configurar.

/// details | Informações sobre a gestão e configuração dos serviços OVHcloud

Este guia mostra como usar soluções OVHcloud com ferramentas externas e as modificações necessárias em contextos específicos. Pode ser necessário adaptar as instruções de acordo com sua situação.

Se você tiver dificuldades ao executar estas operações, recomendamos que entre em contato com um [provedor de serviços especializado](/links/partner) e/ou discuta com nossa comunidade. A OVHcloud não pode fornecer suporte técnico sobre o uso de ferramentas externas. Mais informações na seção [Quer saber mais?](#gofurther) deste guia.

///

## Instruções

> [!primary]
>
> No nosso exemplo, usamos o nome do servidor: ex?.mail.ovh.net. Você deverá substituir o "?" pelo número que identifica o servidor do seu serviço Exchange.
>
> Para encontrar o nome do servidor:
>
> 1. Faça login no seu [Área de Cliente OVHcloud](/links/manager).
> 2. Acesse a seção `Web Cloud`{.action}.
> 3. Na seção `MICROSOFT`, clique em `Exchange`{.action}.
> 4. Selecione a plataforma desejada.
> 5. O nome do servidor está visível no quadro **Ligação** da aba `Informações gerais`{.action}.

### Adicionar a conta

- **Na primeira inicialização do aplicativo**: um assistente de configuração aparecerá e solicitará que você insira seu endereço de e-mail.

- **Se uma conta já estiver configurada no aplicativo**:

    1. Clique no menu `☰`{.action} na barra superior horizontal.
    2. Clique em `Nova Conta`{.action}.
    3. Clique em `Endereço de E-mail`{.action}.

![thunderbird](images/configuration-thunderbird-win-01.png){.thumbnail .w-600}

Siga as etapas de configuração clicando sucessivamente nos **5** abas abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Na janela que aparece, insira as seguintes informações:
>>
>>  - Seu nome completo (nome exibido).
>>  - O endereço de e-mail a ser configurado.
>>
>> Clique em `Continuar`{.action} para concluir as configurações.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-02.png){.thumbnail .w-600}
>>
> **Etapa 2**
>>
>> Quando o Thunderbird detectar um domínio OVHcloud, uma configuração automática relativa à oferta MX Plan será proposta. Clique em `MODIFICAR A CONFIGURAÇÃO`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Etapa 3**
>>
>> Configurações do servidor de recepção:
>>
>>  - **Protocolo** : IMAP
>>  - **Nome do host** : ex?.mail.ovh.net (substitua o "?" pelo número do seu servidor)
>>  - **Porta** : 993
>>  - **Segurança da conexão** : SSL/TLS
>>  - **Método de autenticação** : Senha normal
>>  - **Nome de usuário** : Seu endereço de e-mail completo
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-04.png){.thumbnail .w-600}
>>
> **Etapa 4**
>>
>> Configurações do servidor de envio:
>>
>>  - **Protocolo** : SMTP 
>>  - **Nome do host** : ex?.mail.ovh.net (substitua o "?" pelo número do seu servidor)
>>  - **Porta** : 587
>>  - **Segurança da conexão** : STARTTLS
>>  - **Método de autenticação** : Senha normal
>>  - **Nome de usuário** : Seu endereço de e-mail completo
>> 
>> 1. Clique em `Testar`{.action} para verificar as configurações inseridas.
>> 2. Clique em `Continuar`{.action} para confirmar estas configurações.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-05.png){.thumbnail .w-600}
>>
> **Etapa 5**
>>
>> Insira a senha associada ao endereço de e-mail, em seguida clique em `Continuar`{.action} para finalizar a configuração.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Configuração POP**
>
> Se desejar uma configuração POP para seu endereço de e-mail, substitua as configurações do **etapa 3** pelas seguintes:
>
> Configurações do servidor de recepção:
>
> - **Protocolo** : POP3
> - **Nome do host** : ex?.mail.ovh.net (substitua o "?" pelo número do seu servidor)
> - **Porta** : 995
> - **Segurança da conexão** : SSL/TLS
> - **Método de autenticação** : Senha normal
> - **Nome de usuário** : Seu endereço de e-mail completo

### Usar o endereço de e-mail

Após configurar seu endereço de e-mail, você pode começar a usá-lo! Você pode enviar e receber e-mails imediatamente.

A OVHcloud também oferece uma aplicação web que permite acessar seu endereço de e-mail a partir de um navegador. Para acessar o Webmail OVHcloud, clique [neste link](/links/web/email). Você pode se conectar usando as credenciais do seu endereço de e-mail.

### Recuperar um backup do seu endereço de e-mail

Se você precisar realizar uma operação que possa causar a perda de dados da sua conta de e-mail, recomendamos fazer um backup prévio da conta de e-mail afetada. Para isso, consulte o parágrafo "**Exportar**" na seção "**Thunderbird**" do nosso guia "[Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modificar as configurações existentes

Se sua conta de e-mail já estiver configurada e você precisar acessar as configurações da conta para modificá-las:

1. Clique no menu `☰`{.action} na barra superior horizontal.
2. Clique em `Configurações da conta`{.action}.

![Thunderbird](images/configuration-thunderbird-win-07.png){.thumbnail .w-600}

- Para modificar as configurações relacionadas à **recepção** de seus e-mails, clique em `Configurações do servidor`{.action} na coluna à esquerda sob seu endereço de e-mail.

![thunderbird](images/configuration-thunderbird-exchange-win-08.png){.thumbnail .w-600}

- Para modificar as configurações relacionadas ao **envio** de seus e-mails, clique em `Servidor de saída (SMTP)`{.action} no final da coluna à esquerda.
- Clique no endereço de e-mail desejado na lista, em seguida clique em `Editar`{.action}.

![thunderbird](images/configuration-thunderbird-exchange-win-09.png){.thumbnail .w-600}

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para mais informações sobre a configuração de um endereço de e-mail a partir do cliente de e-mail Thunderbird, consulte [o centro de ajuda da Mozilla](https://support.mozilla.org/products/thunderbird).

[Primeiros passos com o serviço Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Primeiros passos com um servidor Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).