---
title: "Hospedagem web - Como ativar o acesso SFTP"
excerpt: "Descubra como ativar o acesso SFTP na sua hospedagem web OVHcloud"
updated: 2026-02-04
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

As ofertas de hospedagem web OVHcloud dão acesso a um espaço de armazenamento que permite publicar os ficheiros dos seus sites ou aplicações. O acesso a este espaço pode ser feito através de um utilizador FTP ou SSH com as respetivas palavras-passe associadas.

Assim como o **F**ile **T**ransfer **P**rotocol (**FTP**), o **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) permite transferir dados do seu dispositivo para o espaço de armazenamento da sua hospedagem web.

A única diferença é que o SFTP utiliza um canal seguro para trocar dados. Os dados que transitam através deste protocolo são automaticamente encriptados.

**Descubra como ativar o acesso SFTP na sua hospedagem web OVHcloud.**

## Requisitos

- Ter uma oferta de [hospedagem web OVHcloud](/links/web/hosting).
- Estar conectado ao seu [área de cliente OVHcloud](/links/manager), parte `Web Cloud`{.action}.

## Instruções

### Ativar o acesso SFTP para um utilizador FTP da sua hospedagem web

**Clique numa das duas linhas abaixo, consoante a sua oferta de hospedagem web, para ver as explicações.**

/// details | Ativar o SFTP numa oferta de hospedagem web **gratuita 100M**, **Starter** ou **Perso**

Clique nos separadores abaixo para ver, sucessivamente, cada uma das **4** etapas.

> [!tabs]
> **Passo 1**
>>
>> Conecte-se ao seu [área de cliente OVHcloud](/links/manager), em seguida, vá à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hébergements`{.action}, em seguida, selecione a hospedagem web desejada.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Passo 4**
>>
>> Na tabela no fundo da página, marque a caixa presente na coluna **SFTP** do utilizador FTP desejado. A página atualizar-se-á automaticamente.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Uma vez a opção **SFTP** ativada, poderá utilizar o protocolo SFTP da sua hospedagem web com o utilizador FTP desejado.
>>

///

/// details | Ativar o SFTP numa oferta de hospedagem web **Pro** ou **Performance**

Clique nos separadores abaixo para ver, sucessivamente, cada uma das **5** etapas.

> [!tabs]
> **Passo 1**
>>
>> Conecte-se ao seu [área de cliente OVHcloud](/links/manager), em seguida, vá à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no menu `Hébergements`{.action}, em seguida, selecione a hospedagem web desejada.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Passo 4**
>>
>> Na tabela no fundo da página, verifique o estado presente na coluna **SFTP** do utilizador FTP desejado :
>>
>> - **Ativado** : o protocolo SFTP já está ativo para este utilizador.
>> - **Desativado** : clique no botão `...`{.action} à direita da linha respetiva, em seguida, em `Modificar`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Passo 5**
>>
>> Na janela que se abre, na secção **Protocoles de connexion**, selecione `FTP e SFTP`{.action} ou `FTP, SFTP e SSH`{.action} se também precisar ativar o protocolo SSH.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Em seguida, clique em `Suivant`{.action}, depois em `Valider`{.action} para concluir a ativação do SFTP para o utilizador desejado.

///

### Conectar-se em SFTP à sua hospedagem web

Para isso, consulte o nosso guia « [Conectar-se ao espaço de armazenamento FTP da sua hospedagem web](/pages/web_cloud/web_hosting/ftp_connection) ».

## Quer saber mais?

[Modificar a palavra-passe de um utilizador FTP](/pages/web_cloud/web_hosting/ftp_change_password)

[Utilizar uma ligação SSH numa hospedagem web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Utilizar PuTTY para se conectar em SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilizar FileZilla com a sua hospedagem web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizar Cyberduck com a sua hospedagem web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Para serviços especializados (referência, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se desejar beneficiar de assistência no uso e configuração das suas soluções OVHcloud, sugerimos que consulte as nossas diferentes [ofertas de apoio](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).