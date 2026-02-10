---
title: "Zimbra - Configurar uma pasta WebDAV no seu computador"
excerpt: "Configure o acesso WebDAV à Maleta Zimbra no seu computador para gerir e partilhar os seus ficheiros diretamente a partir do seu sistema"
updated: 2026-02-10
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objetivo

As contas de e-mail Zimbra Pro dispõem de um espaço de armazenamento, chamado **Maleta**, que pode ser utilizado para trocar ficheiros através da função WebDAV. Esta função está disponível através do Webmail Zimbra e também pode ser configurada no seu computador para fazer aparecer a Maleta como um volume de armazenamento.

**Descubra como montar uma pasta WebDAV Zimbra no seu computador.**

## Requisitos

- Ter um endereço de e-mail [Zimbra Pro](/links/web/emails) OVHcloud.
- Ter um computador Windows ou macOS.
- Possuir as credenciais relativas ao endereço de e-mail associado à conta Zimbra Pro em questão.

## Instruções

WebDAV (Web-based Distributed Authoring and Versioning) é uma extensão do protocolo HTTP que permite gerir à distância ficheiros num servidor e modificá-los como se estivessem em local.

O espaço de armazenamento atribuído à sua conta de e-mail Zimbra é partilhado entre os seus e-mails e os ficheiros presentes na Maleta. Cada ficheiro carregado na Maleta Zimbra não pode ultrapassar 100 Mo.

Nesta documentação, iremos utilizar o endereço de e-mail de exemplo `john.smith@mydomain.ovh` e a pasta da Maleta que iremos montar será a pasta `Briefcase`, que está presente por defeito.

### Montar uma pasta a partir de Windows

Antes de poder ligar-se à sua pasta WebDAV a partir do explorador Windows, é necessário ativar e configurar os serviços relacionados com a ligação a um volume WebDAV.

#### 1. Ativar o serviço WebClient

> [!tabs]
> **Passo 1**
>>
>> - Abra `Serviços`{.action} a partir do menu Iniciar do Windows.
>>
>> ![MX plan](images/windows-services-01.png){.thumbnail .w-600}
>>
> **Passo 2**
>>
>> 1. Identifique o serviço **WebClient** na lista.
>> 2. Clique com o botão direito no **WebClient**, depois clique em `Propriedades`{.action}.
>> 3. Altere o *Tipo de arranque* para **Automático**.
>> 4. Clique em `Iniciar`{.action} para iniciar o serviço, depois clique em `OK`{.action} para validar as alterações.
>>
>> ![MX plan](images/windows-services-02.png){.thumbnail .w-600}

#### 2. Modificar a chave de registo WebClient

> [!tabs]
> **Passo 1**
>>
>> - Abra o `Editor do Registo`{.action} a partir do menu Iniciar do Windows.
>>
>> ![MX plan](images/windows-regedit-01.png){.thumbnail .w-600}
>>
> **Passo 2**
>>
>> 1. Identifique o serviço **WebClient** na árvore `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters\BasicAuthLevel`.
>> 2. Clique duas vezes na chave de registo `BasicAuthLevel`.
>> 3. Altere a *Dados do valor*: por defeito definida para `1`, substitua-a pelo valor `2` e clique em `OK`{.action} para validar as alterações.
>>
>> ![MX plan](images/windows-regedit-02.png){.thumbnail .w-600}

#### 3. Importar o certificado SSL do servidor Zimbra

> [!primary]
>
> Para exportar o certificado SSL, utilizámos o navegador [Mozilla Firefox](https://www.firefox.com/).

> [!tabs]
> **Passo 1**
>>
>> 1. Abra o seu navegador Internet, carregue a página https://zimbra1.mail.ovh.net/, depois clique na ícone do cadeado na barra de endereços.
>> 2. Clique em `Ligação segura`{.action}.
>> 3. Clique em `Mais informações`{.action}.
>>
>> ![MX plan](images/windows-ssl-01.png){.thumbnail .w-600}
>>
> **Passo 2**
>>
>> 1. Clique em `Ver certificado`{.action}.
>> 2. A partir da janela que aparece, fique no separador `zimbra1.mail.ovh.net` e clique em `PEM (cert)`{.action} para transferir o certificado SSL.
>>
>> ![MX plan](images/windows-ssl-02.png){.thumbnail .w-600}
>>
> **Passo 3**
>>
>> - Altere a extensão do ficheiro de `.pem` para `.cer`.
>>
>> ![MX plan](images/windows-ssl-03.png){.thumbnail .w-600}
>>
> **Passo 4**
>>
>> 1. Abra o ficheiro `zimbra1-mail-ovh-net.cer`, depois clique em `Instalar certificado…`{.action}.
>> 2. Clique em `Computador local`{.action}, depois clique em `Seguinte`{.action}.
>> 3. Marque `Colocar todos os certificados no seguinte armazenamento`, depois clique em `Procurar…`{.action}.
>> 4. Selecione a pasta `Autoridades de certificação raiz confiáveis`, depois clique em `OK`{.action}.
>>
>> ![MX plan](images/windows-ssl-04.png){.thumbnail .w-600}

#### 4. Montar o volume

No nosso exemplo, utilizamos o endereço de e-mail da conta Zimbra `john.smith@mydomain.ovh` e a pasta `Briefcase`, criada por defeito no espaço de armazenamento do Zimbra.

1. Abra o explorador de ficheiros do Windows e clique em `Este Computador`{.action}.
2. Na barra superior, clique no botão `…`{.action}, depois em `Mapear unidade de rede`{.action}.
3. Na janela que aparece, introduza o caminho de acesso à pasta. Segundo o nosso exemplo, o caminho é `\\zimbra1.mail.ovh.net@SSL\dav\john.smith@mydomain.ovh\Briefcase`. Clique em `Terminar`{.action}.
4. Uma janela de autenticação abre-se, introduza o `Nome de utilizador` que corresponde ao endereço de e-mail completo e a `Palavra-passe` associada a este. Clique em `OK`{.action}.

![MX plan](images/windows-mount-01.png){.thumbnail .w-600}

O seu volume de rede aparece agora. Pode depositar os seus ficheiros, até 100 Mo por ficheiro.

![MX plan](images/windows-mount-02.png){.thumbnail .w-600}

### Montar uma pasta a partir de macOS

No macOS, não é necessário ativar um serviço ou registar o certificado SSL, basta montar o volume diretamente a partir do **Finder**.

> [!tabs]
> **Passo 1**
>>
>> - Abra o **Finder**.
>> - Na barra superior, clique no menu `Ir`{.action}.
>> - Clique em `Ligar ao servidor`{.action} (`⌘ + K`).
>>
>> ![MX plan](images/macos-mount-01.png){.thumbnail .w-600}
>>
> **Passo 2**
>>
>> > [!warning]
>> >
>> > É importante substituir o `@` do seu endereço de e-mail por `%40` na introdução do caminho de acesso.
>>
>> - A partir da janela que aparece, introduza o caminho de ligação adequado ao seu endereço de e-mail e à pasta que deseja ligar. Segundo o nosso exemplo, o caminho é `https://zimbra1.mail.ovh.net/dav/john.smith%40mydomain.ovh/Briefcase`.
>> - Clique em `Ligar`{.action}.
>>
>> ![MX plan](images/macos-mount-02.png){.thumbnail .w-600}
>> 
> **Passo 3**
>>
>> 1. Uma janela de validação do servidor `zimbra1.mail.ovh.net` aparece, clique em `Ligar`{.action}.
>> 2. Uma nova janela pede-lhe para introduzir o `Nome` que corresponde ao seu endereço de e-mail completo e a `Palavra-passe` associada a este. Marque `Manter esta palavra-passe no meu cofre` se desejar guardá-la para uma próxima ligação a outra pasta. Clique em `Ligar`{.action} para montar o volume.
>>
>> ![MX plan](images/macos-mount-03.png){.thumbnail .w-600}

Tem agora acesso ao espaço de armazenamento da sua Maleta Zimbra. Pode depositar qualquer tipo de ficheiro que não ultrapasse 100 Mo.

![MX plan](images/macos-mount-04.png){.thumbnail .w-600}

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar o seu endereço de e-mail Zimbra num software de correio](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre a solução Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para serviços especializados (referência, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se desejar beneficiar de uma assistência no uso e configuração das suas soluções OVHcloud, sugerimos que consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).