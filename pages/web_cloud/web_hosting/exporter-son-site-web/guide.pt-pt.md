---
title: "Exportar o seu website"
excerpt: "Descubra como exportar o seu website OVHcloud"
updated: 2025-10-28
---

## Objetivo

Este guia mostra-lhe as etapas para exportar todos os elementos do seu website para o formato padrão, a partir de um [alojamento web OVHcloud.](/links/web/hosting).

**Descubra como exportar o seu website OVHcloud.**

## Requisitos

- Ter um [plano de alojamento web OVHcloud](/links/web/hosting).
- Estar ligado à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### 1 - Recuperação dos ficheiros do seu espaço de armazenamento FTP

#### 1.1 Aceder ao espaço de armazenamento

Para se ligar ao seu espaço de armazenamento, deve dispor dos seguintes elementos:

- o nome de utilizador FTP ou SSH ativo;
- a palavra-passe associada ao nome de utilizador FTP ou SSH;
- o endereço do servidor;
- a porta de ligação ao servidor.

Estes elementos foram-lhe enviados no e-mail enviado após a instalação do seu alojamento web.

Se não possuir estas informações, clique nas janelas abaixo para visualizar cada uma das etapas **4**.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
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

Uma vez ligado ao seu espaço de armazenamento, resta-lhe apenas transferir os ficheiros do seu site. **Recomendamos que seja especialmente atento ao diretório em que instalou o seu site**. Num cenário de utilização comum, o site deve ser transferido para a pasta « www ». No entanto, se estiver a utilizar o seu alojamento para alojar vários sítios Web, certamente declarou vários sítios Web.

Para verificar a pasta em que o seu site está armazenado, posicione-se no separador `Multisite`{.action} a partir da sua Área de cliente OVHcloud. No quadro que aparece, para o domínio pretendido, consulte o `Pasta raiz`{.action} que aparece.

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

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

Se deseja guardar o histórico dos logs do seu website, pode aceder aos logs no seu alojamento.

Clique em `Alojamentos`{.action} e selecione o plano correspondente. Clique no separador `Estatísticas e logs`{.action}.

![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}

A seguir, clique na ligação sob a menção `Consultar os logs`{.action}:

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-logs.png){.thumbnail}

Aparece uma janela com os diferentes tipos de logs disponíveis.  Estão classificados por mês:

| Tipo  	| Descrição                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Encontre aqui os diferentes logs de consulta do seu site, assim como as diferentes ações realizadas a partir do seu site. Isto permite, por exemplo, detetar tentativas de pirataria. 	|
| FTP   	| as várias ligações FTP serão guardadas e armazenadas nestes logs.                                                                                                                     	|
| Error 	| os vários erros gerados pelo seu site.                                                                                                                                                    	|
| CGI   	| as várias chamadas para os scripts do cgi.bin que foram feitas.                                                                                                                                     	|
| out   	| as estatísticas do seu alojamento sobre as várias chamadas externas efetuadas.                                                                                                                  	|
| ssh   	| estes logs indicam as diferentes ligações feitas com o protocolo SSH.                                                                                                                      	|
| cron  	| o resultado da execução das suas tarefas planeadas.                                                                                                                                                	|

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs-general.png){.thumbnail}

Quando seleciona o tipo de logs para o mês que mais lhe interessa, estes são arquivados por dia:

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs.png){.thumbnail}

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