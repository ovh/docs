---
title: "Anúncios de fim de venda/vida de base de dados SQL"
excerpt: "Anúncios de fim de venda/vida de base de dados SQL"
updated: 2024-09-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

Os produtos abrangidos por estes anúncios de fim de venda e de fim de vida são os serviços de base de dados SQL Web Hosting, acessíveis através da rede Web Hosting. Consulte [política de fim de vida das bases de dados geridas](/pages/web_cloud/web_cloud_databases/eol-policy) para obter mais informações.

|Versão do SGBD|Anúncio de fim de vida|Fim de vida|Fim do suporte|
|---|---|---|---|
|MySQL 5.7|2023-11-16|2024-02-16|2024-05-17|
|MySQL 8.0|A definir|A definir|A definir|

> [!primary]
>
> Neste momento e ao seu nível, os serviços de base de dados SQL incluídos com os alojamentos Web OVHcloud não podem ser atualizados diretamente a partir da Área de Cliente OVHcloud ou através da base de dados em fim de venda/vida.
>

Se pretender antecipar este fim de venda/vida ou efetuar as ações manualmente, deve obrigatoriamente realizar as seguintes ações:

- Caso nº 1: dispõe de uma única base de dados incluída na sua oferta de alojamento Web:
- Verifique que o conteúdo da base de dados é compatível com um SGBD mais recente.
- [Exporte o conteúdo da base de dados](/pages/web_cloud/web_hosting/sql_database_export).
- Elimine a base de dados antiga.
- [Crie uma nova base de dados](/pages/web_cloud/web_hosting/sql_create_database) numa versão mais recente do SGBD.
- [Importe o conteúdo da base de dados antiga para a nova](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
- Associe a nova base de dados ao seu website.

- Caso n°2: dispõe de várias bases de dados incluídas com a sua oferta de alojamento Web:
- Verifique que o conteúdo da base de dados é compatível com um SGBD mais recente.
- Por precaução, [exporte o conteúdo da base de dados](/pages/web_cloud/web_hosting/sql_database_export).
- [Crie uma nova base de dados](/pages/web_cloud/web_hosting/sql_create_database) numa versão mais recente do SGBD.
- [Duplique o conteúdo da base de dados antiga na nova](/pages/web_cloud/web_hosting/copy_database).
- Associe a nova base de dados ao seu website.
- Elimine a base de dados antiga.

## Quer saber mais?

[Aceder à Área de Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login).

[Criar uma base de dados num alojamento web](/pages/web_cloud/web_hosting/sql_create_database).

[Recuperar a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export).

[Duplicar o conteúdo de uma base de dados em outra](/pages/web_cloud/web_hosting/copy_database).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).