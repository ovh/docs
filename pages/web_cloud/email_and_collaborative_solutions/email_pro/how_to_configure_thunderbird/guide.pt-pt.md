---
title: 'E-mail Pro - Configurar seu endereço de e-mail no Thunderbird para Windows'
excerpt: 'Saiba como configurar seu endereço E-mail Pro no Thunderbird para Windows'
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
.w-600 {
  max-width:600px !important;
}
</style>

## Objetivo

As contas E-mail Pro podem ser configuradas em diferentes softwares de e-mail compatíveis. Isso permite que você utilize seu endereço de e-mail a partir do dispositivo de sua escolha. O Thunderbird é um cliente de e-mail gratuito e de código aberto.

**Saiba como configurar seu endereço E-mail Pro no Thunderbird para Windows.**

## Requisitos

- Ter um endereço [E-mail Pro](/links/web/email-pro).
- Ter o software Thunderbird instalado no seu dispositivo Windows.
- Possuir as credenciais relacionadas ao endereço de e-mail que deseja configurar.

/// details | Informações sobre a gestão e configuração dos serviços OVHcloud

Este guia mostra como utilizar soluções OVHcloud com ferramentas externas e as modificações necessárias em contextos específicos. Pode ser necessário adaptar as instruções de acordo com sua situação.

Se você tiver dificuldades ao executar estas operações, recomendamos que entre em contato com um [fornecedor de serviços especializado](/links/partner) e/ou discuta com nossa comunidade. A OVHcloud não pode fornecer suporte técnico sobre o uso de ferramentas externas. Mais informações na seção [Quer saber mais?](#gofurther) deste guia.

///

## Instruções

> [!warning]
>
> No nosso exemplo, utilizamos a referência do servidor: pro?.mail.ovh.net. Você deverá substituir o "?" pelo número que identifica o servidor do seu serviço E-mail Pro.
>
> 1. Conecte-se ao seu [Área de Cliente OVHcloud](/links/manager).
> 1. Acesse a seção `Web Cloud`{.action}.
> 1. Clique em `E-mail Pro`{.action}.
> 1. Selecione a plataforma desejada.
> 1. O nome do servidor está visível na seção **Ligação** da aba `Informações gerais`{.action}.

### Adicionar a conta

- **Na primeira inicialização do aplicativo**: um assistente de configuração será exibido e solicitará que você insira seu endereço de e-mail.

- **Se uma conta já estiver configurada no aplicativo**:

    1. Clique no menu `☰`{.action} na barra superior horizontal.
    2. Clique em `Nova Conta`{.action}.
    3. Clique em `Endereço de E-mail`{.action}.

![thunderbird](images/configuration-thunderbird-win-01.png){.thumbnail .w-600}

Siga as etapas de configuração clicando sucessivamente nas seguintes **5** abas:

> [!tabs]
> **Etapa 1**
>>
>> Na janela exibida, insira as seguintes 2 informações:
>>
>>  - Seu nome completo (nome exibido).
>>  - O endereço de e-mail a ser configurado.
>>
>> Clique em `Avançar`{.action} para concluir as configurações.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-02.png){.thumbnail .w-600}
>>
> **Etapa 2**
>>
>> Quando o Thunderbird detectar um nome de domínio OVHcloud, uma configuração automática relativa à oferta MX Plan será proposta. Clique em `ALTERAR CONFIGURAÇÃO`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Etapa 3**
>>
>> Configurações do servidor de recepção:
>>
>>  - **Protocolo**: IMAP
>>  - **Nome do host**: pro?.mail.ovh.net (substitua o "?" pelo número do seu servidor)
>>  - **Porta**: 993
>>  - **Segurança da conexão**: SSL/TLS
>>  - **Método de autenticação**: Senha normal
>>  - **Nome de usuário**: Seu endereço de e-mail completo
>>
>> ![thunderbird](images/configuration-thunderbird-emp-04.png){.thumbnail .w-600}
>>
> **Etapa 4**
>>
>> Configurações do servidor de envio:
>>
>>  - **Protocolo**: SMTP 
>>  - **Nome do host**: pro?.mail.ovh.net (substitua o "?" pelo número do seu servidor)
>>  - **Porta**: 587
>>  - **Segurança da conexão**: STARTTLS
>>  - **Método de autenticação**: Senha normal
>>  - **Nome de usuário**: Seu endereço de e-mail completo
>> 
>> 1. Clique em `Testar`{.action} para verificar as configurações inseridas.
>> 2. Clique em `Avançar`{.action} para confirmar estas configurações.
>>
>> ![thunderbird](images/configuration-thunderbird-emp-05.png){.thumbnail .w-600}
>>
> **Etapa 5**
>>
>> Insira a senha associada ao endereço de e-mail e clique em `Avançar`{.action} para finalizar a configuração.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Configuração POP**
>
> Se desejar uma configuração POP para seu endereço de e-mail, substitua as configurações da **etapa 3** pelas seguintes:
>
> Configurações do servidor de recepção:
>
> - **Protocolo**: POP3
> - **Nome do host**: pro?.mail.ovh.net (substitua o "?" pelo número do seu servidor)
> - **Porta**: 995
> - **Segurança da conexão**: SSL/TLS
> - **Método de autenticação**: Senha normal
> - **Nome de usuário**: Seu endereço de e-mail completo

### Usar o endereço de e-mail

Assim que seu endereço de e-mail estiver configurado, você poderá começar a utilizá-lo! Agora você pode enviar e receber e-mails.

A OVHcloud também oferece uma aplicação web para acessar seu endereço de e-mail a partir de um navegador. Para acessar o Webmail OVHcloud, clique [neste link](/links/web/email). Você pode se conectar usando as credenciais de seu endereço de e-mail.

### Criar um backup de seu endereço de e-mail

Se você precisar realizar uma operação que possa causar a perda de dados de sua conta de e-mail, recomendamos que crie um backup prévio da conta de e-mail afetada. Para isso, consulte a seção "**Exportar**" na parte "**Thunderbird**" de nosso guia "[Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modificar as configurações existentes

Se sua conta de e-mail já estiver configurada e você precisar acessar as configurações da conta para modificá-las:

1. Clique no menu `☰`{.action} na barra superior horizontal.
2. Clique em `Configurações da conta`{.action}.

![Thunderbird](images/configuration-thunderbird-win-07.png){.thumbnail .w-600}

- Para modificar as configurações relacionadas à **recepção** de seus e-mails, clique em `Configurações do servidor`{.action} na coluna esquerda sob seu endereço de e-mail.

![thunderbird](images/configuration-thunderbird-emp-win-08.png){.thumbnail .w-600}

- Para modificar as configurações relacionadas ao **envio** de seus e-mails, clique em `Servidor de saída (SMTP)`{.action} no final da coluna esquerda.
- Clique no endereço de e-mail desejado na lista e depois em `Editar`{.action}.

![thunderbird](images/configuration-thunderbird-emp-win-09.png){.thumbnail .w-600}

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para mais informações sobre a configuração de um endereço de e-mail a partir do cliente de e-mail Thunderbird, consulte o [centro de ajuda da Mozilla](https://support.mozilla.org/products/thunderbird).

[Primeiros passos com a solução E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).