---
title: "Exportar o seu website"
excerpt: "Descubra como exportar o seu website OVHcloud"
updated: 2026-05-04
---

## Objetivo

Este guia mostra-lhe as etapas para exportar todos os elementos do seu website para o formato padrão, a partir de um [alojamento web OVHcloud.](/links/web/hosting).

**Descubra como exportar o seu website OVHcloud.**

## Requisitos

- Ter um [plano de alojamento web OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### 1 - Recuperação dos ficheiros do seu espaço de armazenamento FTP

#### 1.1 Aceder ao espaço de armazenamento

Para se ligar ao seu espaço de armazenamento, deve dispor dos seguintes elementos:

- o nome de utilizador FTP ou SSH ativo;
- a palavra-passe associada ao nome de utilizador FTP ou SSH;
- o endereço do servidor;
- a porta de ligação ao servidor.

Estes elementos foram-lhe enviados no e-mail enviado após a instalação do seu alojamento web.

Se não possuir estas informações, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
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
>> Aparecerá a informação relativa ao seu espaço de armazenamento e terá a possibilidade de encontrar os elementos necessários para aceder mesmo.
>>
>> ![FTP -SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Caso seja necessário, consulte o nosso manual: [“Aceder ao espaço de armazenamento do alojamento web”](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Caso tenha perdido a palavra-passe, consulte o manual ["Modificar a palavra-passe de um utilizador FTP"](/pages/web_cloud/web_hosting/ftp_change_password).

Quando tiver obtido todos os elementos, a recuperação dos seus ficheiros no espaço de armazenamento pode ser realizado de duas formas:

- **Utilizar um programa compatível com o protocolo FTP ou SFTP**: terá de instalar no seu computador um programa compatível, como o [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Sugerimos que contacte o editor do programa instalado caso deseje obter ajuda na sua utilização, OVHcloud não criou esse programa;

- **Utilizar um acesso SSH**: terá de utilizar comandos a partir de um terminal para interagir com o seu espaço de armazenamento. Este tipo de acesso requer conhecimentos mais avançados, bem como um [plano de alojamento web da OVHcloud](/links/web/hosting) específica. Para mais informações, pode consultar o nosso guia  ["Utilizar o acesso SSH do seu alojamento web"](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 1.2 Transferir os ficheiros a partir do seu espaço de armazenamento

Uma vez ligado ao seu espaço de armazenamento e consoante os seus sítios web alojados, vários diretórios podem aparecer.

Se necessário, identifique previamente no seu alojamento web o nome do diretório principal em que o seu sítio web está armazenado. Para isso, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na tabela que aparece, para o sítio web desejado, veja o `Pasta raiz`{.action} que aparece.
>>
>> ![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

Ainda ligado ao seu espaço de armazenamento, basta descarregar os ficheiros do seu sítio web ao aceder à pasta raiz identificada anteriormente.

### 2 - Recuperar o backup da sua base de dados (opcional) 

> [!primary]
>
> Esta etapa é opcional se o seu website não utiliza uma base de dados.
>

Para recuperar um backup da sua base de dados, consulte o nosso guia:
["Recuperar o backup da base de dados de um alojamento web"](/pages/web_cloud/web_hosting/sql_database_export).

Se utiliza uma base de dados **Web Cloud Databases** para o seu website, consulte a secção dedicada ao backup no nosso guia:
[Backup e exportação de uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).

### 3 - Recuperar os logs do seu alojamento OVHcloud

Consulte o nosso guia dedicado: [Alojamento web - Consultar as estatísticas e os logs de um site](/pages/web_cloud/web_hosting/logs_and_statistics).

## Quer saber mais?

[Aceder ao espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)

[Alterar a palavra-passe de um utilizador FTP](/pages/web_cloud/web_hosting/ftp_change_password)

[Utilização do programa FileZilla com o seu alojamento](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizar o acesso SSH do seu alojamento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Recuperar o backup da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export)

[Web Cloud Databases - primeira utilização](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 
