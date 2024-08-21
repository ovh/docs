---
title: "Migrar o seu website Xara para a OVHcloud"
excerpt: "Descubra como migrar o seu website Xara e os seus serviços associados para a OVHcloud"
updated: 2024-07-29
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este tutorial explica passo a passo como migrar o seu website Xara e todos os seus serviços associados para a OVHcloud.

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Nós disponibilizamos-lhe este tutorial a fim de o acompanhar nas tarefas mais comuns. Contudo, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) ou a [site oficial do Xara Web designer](https://www.xara.com/webdesigner-plus/){.external}. Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção ["Quer saber mais?"](#go-further) deste tutorial.
>

**Descubra como migrar o seu website Xara e os seus serviços associados para a OVHcloud.**

## Requisitos

- Estar ligado à interface de administração do Xara

## Instruções

### Etapa 1 - Guardar os ficheiros e a base de dados do website Xara

O primeiro passo é recuperar todos os arquivos relativos ao seu site Xara. Isto inclui os ficheiros Xara, bem como a sua base de dados se tiver alguma. Para mais pormenores, consulte a página "[Exportar para Website](https://webdesigner.xara.com/bhavtest/test1/xara_desktop/product_support/web_features/exporting_website.html?rhhlterm=website){.external}" ou ainda a etapa 3 do guia "[Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

### Etapa 2: transferir o seu website Xara para a OVHcloud

Depois de fazer o backup dos ficheiros e da base de dados do seu website Xara, transfira-os para o alojamento web da OVHcloud. Se ainda não possuir um alojamento web OVHcloud, siga a etapa 1 do guia "[Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

#### Etapa 2.1: transferir os ficheiros do seu website Xara

> [!primary]
>
> Recomendamos que utilize o software [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) para transferir os seus ficheiros Xara para o seu alojamento web.
>

Para transferir os ficheiros relativos ao seu website Xara, aceda em primeiro lugar a [o espaço de armazenamento FTP do seu alojamento web OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).

Depois de aceder ao espaço de armazenamento FTP do alojamento web OVHcloud, navegue para o diretório raiz "www" (ou para outra pasta raiz que tenha criado anteriormente). Se os seus ficheiros de backup estiverem comprimidos (zipados), descomprima-os numa pasta vazia no seu computador antes de os transferir para o diretório raiz do seu alojamento web da OVHcloud.

#### Etapa 2.2: importar a base de dados do seu website Xara

Se ainda não tiver nenhum, [crie uma nova base de dados](/pages/web_cloud/web_hosting/sql_create_database) e, em seguida, [importe a cópia de segurança para a nova base de dados](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> A OVHcloud propõe servidores de bases de dados Web Cloud Databases. Se pretender utilizar esta oferta com o seu website, encontre o conjunto da nossa documentação sobre este produto na nossa [página dedicada](/links/web/databases).
>

### Etapa 3: atualizar as informações da base de dados

Agora você deve associar seu site Xara para sua base de dados. As modificações devem ser efetuadas no ficheiro de configuração. Encontre o conjunto das ações a efetuar seguindo as etapas do guia "[Alterar a palavra-passe da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_change_password)".

### Migrar outros serviços associados ao seu website Xara

Acaba de migrar os seus ficheiros e a sua base de dados Xara. Se pretender migrar outros serviços como os seus emails, o seu nome de domínio ou ainda as suas zonas DNS, siga as etapas do guia "[Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" referindo-se às etapas que dizem respeito aos serviços que deseja migrar. Com efeito, várias das etapas já terão sido efetuadas neste guia.

## Quer saber mais? <a name="go-further"></a>

[Generalidades sobre os e-mails partilhados](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Migrar o site e os serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[Importar uma base de dados MySQL](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Criar uma base de dados no alojamento web](/pages/web_cloud/web_hosting/sql_create_database).
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).