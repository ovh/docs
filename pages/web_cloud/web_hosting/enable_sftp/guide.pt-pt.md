---
title: "Alojamento web - Como ativar o acesso SFTP"
excerpt: "Saiba como ativar o acesso SFTP na sua alojamento web OVHcloud"
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

As ofertas de alojamento web OVHcloud dão acesso a um espaço de armazenamento que permite publicar os ficheiros dos seus sites ou aplicações. O acesso a este espaço pode ser feito através de um utilizador FTP ou SSH com as respetivas palavras-passe associadas.

Assim como o **F**ile **T**ransfer **P**rotocol (**FTP**), o **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) permite transferir dados do seu dispositivo para o espaço de armazenamento da sua alojamento web.

A única diferença é que o SFTP utiliza um canal seguro para trocar dados. Os dados que transitam através deste protocolo são automaticamente encriptados.

**Saiba como ativar o acesso SFTP na sua alojamento web OVHcloud.**

## Requisitos

- Ter uma oferta de [alojamento web OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Hosting plans](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### Ativar o acesso SFTP para um utilizador FTP da sua alojamento web

**Clique numa das duas linhas abaixo, consoante a sua oferta de alojamento web, para ver as explicações.**

/// details | Ativar o SFTP numa oferta de alojamento web **gratuita 100M**, **Starter** ou **Perso**

Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Hosting plans](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela no fundo da página, marque a caixa presente na coluna **SFTP** do utilizador FTP desejado. A página atualizar-se-á automaticamente.
>>
>> ![FTP - SSH Perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}
>>
>> Uma vez a opção **SFTP** ativada, poderá utilizar o protocolo SFTP da sua alojamento web com o utilizador FTP desejado.
>>

///

/// details | Ativar o SFTP numa oferta de alojamento web **Pro** ou **Performance**

Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Hosting plans](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela no fundo da página, verifique o estado presente na coluna **SFTP** do utilizador FTP desejado :
>>
>> - **Ativado** : o protocolo SFTP já está ativo para este utilizador.
>> - **Desativado** : clique no botão `...`{.action} à direita da linha respetiva, em seguida, em `Alterar`{.action}.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/sftp-enabled-pro.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na janela que se abre, na secção **Protocolos de ligação**, selecione `FTP e SFTP`{.action} ou `FTP, SFTP e SSH`{.action} se também precisar ativar o protocolo SSH.
>>
>> ![FTP - SSH Pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-user-step-1-connexion-protocols.png){.thumbnail}
>>
>> Em seguida, clique em `Seguinte`{.action}, depois em `Validar`{.action} para concluir a ativação do SFTP para o utilizador desejado.

///

### Conectar-se em SFTP à sua alojamento web

Para isso, consulte o nosso guia « [Aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection) ».

## Quer saber mais?

[Modificar a palavra-passe de um utilizador FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utilizar uma ligação SSH num alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting).

[Utilizar PuTTY para se ligar em SSH](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Utilize o FileZilla com o seu alojamento web](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilize o Cyberduck com o seu alojamento web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).