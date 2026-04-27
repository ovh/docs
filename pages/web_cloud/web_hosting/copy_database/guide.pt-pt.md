---
title: "Duplicar o conteúdo de uma base de dados em outra"
excerpt: "Saiba como copiar o conteúdo de uma base de dados OVHcloud para outra base de dados OVHcloud"
updated: 2026-03-31
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

A sua base de dados é um elemento central na construção do seu website dinâmico. Durante o ciclo de vida do seu website, e por razões práticas ou técnicas, pode ter de copiar o conteúdo da sua base de dados para outra das suas bases de dados [start SQL](/links/web/hosting-options-startsql) ou [Web Cloud Databases](/links/web/databases).

**Saiba como copiar o conteúdo de uma base de dados OVHcloud para outra base de dados OVHcloud.**

> [!primary]
>
> Com esta funcionalidade, as bases de dados não são movidas, mas sim copiadas. De facto, a base de dados original não é eliminada automaticamente, ao contrário de um processo de migração. Apenas o conteúdo da base de dados de origem é duplicado para ser copiado para a base de dados de destino.
>

## Requisitos

- Dispor de ofertas de bases de dados [start SQL](/links/web/hosting-options-startsql) e/ou [Web Cloud Databases](/links/web/databases). As duas bases de dados em causa devem ser previamente criadas para poderem utilizar a ferramenta de duplicação.
- Dispor de direitos suficientes sobre o conjunto dos serviços de base de dados em causa. Encontre mais informações no nosso guia [Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

Antes de começar, certifique-se de que:

- O seu **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL, etc.) é o mesmo para as suas duas bases de dados (origem e destino).
- A versão do seu DBMS é a mesma para as suas duas bases de dados (origem e destino). Embora a cópia possa funcionar com versões diferentes, é aconselhável usar as mesmas versões.
- O conteúdo da base de dados de origem não deve exceder a dimensão da base de dados de destino.

### Copiar o conteúdo de uma base de dados

Esta funcionalidade está disponível para cópia:

- de uma base de dados [Start SQL](/links/web/hosting-options-startsql) (incluída em alguns dos nossos [alojamentos web](/links/web/hosting) ou [encomendada em separado](/links/web/hosting-options-startsql));
- de uma base de dados presente num servidor [Web Cloud Databases](/links/web/databases) (incluída nos nossos [alojamentos Performance](/links/web/hosting-performance-offer) ou [encomendada em separado](/links/web/databases)).

Dependendo da sua situação, o caminho para aceder à base de dados de origem é diferente.

**Clique na situação correspondente para ver o conteúdo.**

<!-- CP-STEPS-START:copy-from-startsql -->
/// details | A partir de uma base de dados Start SQL

Clique nos separadores abaixo para visualizar cada uma das **6** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action}. A tabela lista as bases de dados criadas no seu plano de alojamento web.
>>
>> ![Lista das BDD Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita da linha correspondente à base de dados cujo conteúdo pretende copiar e selecione `Copiar a base de dados`{.action}.
>>
>> ![CTA_copiar_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparecerá uma janela para escolher a sua base de dados de destino.
>>
>> ![Interface copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Se não tiver uma base de dados de destino, clique no link na janela para adquirir uma nova. Não se esqueça de a ativar:
>> >
>> > - Para uma base de dados Shared SQL: siga o nosso guia "[Criar uma base de dados no alojamento web](/pages/web_cloud/web_hosting/sql_create_database)".
>> > - Para uma base de dados num servidor Web Cloud Databases: siga o nosso guia "[Criar uma base de dados num servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>>
>> - **Escolha 1 - Copiar para uma base Start SQL**: selecione `Copiar para uma base de dados`{.action} e escolha a base de dados de destino na lista suspensa.
>> - **Escolha 2 - Copiar para um servidor Web Cloud Databases**: selecione `Copiar para um Web Cloud Databases`{.action}. Aparecem duas listas suspensas. Clique na primeira para selecionar a solução Web Cloud Databases e na segunda para escolher a base de dados de destino.
>>
> **Etapa 5**
>>
>> Clique em `Seguinte`{.action}. Surge a seguinte mensagem de confirmação:
>>
>> ![Mensagem de confirmação copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> Se não pretender substituir a base de dados de destino escolhida, clique em `Anterior`{.action} para alterar a sua escolha ou em `Cancelar`{.action} para cancelar tudo. Caso contrário, clique em `Confirmar`{.action} para confirmar a duplicação.
>>
> **Etapa 6**
>>
>> A cópia pode demorar alguns minutos. No separador `Operações em curso`{.action}, é apresentada uma nova linha para a cópia com um estado "planeado". Quando a operação for concluída, a linha desaparece.
>>
>> ![Operações em curso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///
<!-- CP-STEPS-END:copy-from-startsql -->

<!-- CP-STEPS-START:copy-from-wcdb -->
/// details | A partir de um servidor Web Cloud Databases

Clique nos separadores abaixo para visualizar cada uma das **6** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action}. A lista das bases de dados presentes no servidor Web Cloud Databases é apresentada.
>>
>> ![Lista das BDDs WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita da linha correspondente à base de dados cujo conteúdo pretende copiar e selecione `Copiar a base de dados`{.action}.
>>
>> ![CTA_copiar_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparecerá uma janela para escolher a sua base de dados de destino.
>>
>> ![Interface copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Se não tiver uma base de dados de destino, clique no link na janela para adquirir uma nova. Não se esqueça de a ativar:
>> >
>> > - Para uma base de dados Shared SQL: siga o nosso guia "[Criar uma base de dados no alojamento web](/pages/web_cloud/web_hosting/sql_create_database)".
>> > - Para uma base de dados num servidor Web Cloud Databases: siga o nosso guia "[Criar uma base de dados num servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>>
>> - **Escolha 1 - Copiar para uma base Start SQL**: selecione `Copiar para uma base de dados`{.action} e escolha a base de dados de destino na lista suspensa.
>> - **Escolha 2 - Copiar para um servidor Web Cloud Databases**: selecione `Copiar para um Web Cloud Databases`{.action}. Aparecem duas listas suspensas. Clique na primeira para selecionar a solução Web Cloud Databases e na segunda para escolher a base de dados de destino.
>>
> **Etapa 5**
>>
>> Clique em `Seguinte`{.action}. Surge a seguinte mensagem de confirmação:
>>
>> ![Mensagem de confirmação copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> Se não pretender substituir a base de dados de destino escolhida, clique em `Anterior`{.action} para alterar a sua escolha ou em `Cancelar`{.action} para cancelar tudo. Caso contrário, clique em `Confirmar`{.action} para confirmar a duplicação.
>>
> **Etapa 6**
>>
>> A cópia pode demorar alguns minutos. No separador `Operações em curso`{.action}, é apresentada uma nova linha para a cópia com um estado "planeado". Quando a operação for concluída, a linha desaparece.
>>
>> ![Operações em curso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///
<!-- CP-STEPS-END:copy-from-wcdb -->

### Configurar o seu website com a sua nova base de dados

Depois de efetuar a cópia da base de dados de origem, deverá realizar uma última ação se pretender utilizar a nova base de dados.

No separador `Operações em curso`{.action}, certifique-se de que a cópia foi concluída (a linha correspondente à sua cópia desapareceu).

Para ligar a nova base de dados ao seu website, edite o ficheiro de configuração do seu **C**ontent **M**anagement **S**ystem (**CMS**) e introduza as informações de ligação da nova base de dados.

> [!warning]
>
> Antes de o alterar, recomendamos que efetue uma cópia do ficheiro de configuração do seu website. Este é o seguro de poder substituir a nova versão do ficheiro com a antiga em caso de falha de configuração.

Por exemplo, se utilizar o WordPress, terá de modificar o ficheiro de configuração *wp-config.php* presente na raiz da pasta do seu WordPress, no espaço de armazenamento (FTP) do seu alojamento, e atualizar os seguintes campos:

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

Para obter mais informações ou se utilizar outro CMS, consulte o nosso guia [Alterar a palavra-passe da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> A cópia da sua base de dados não é uma migração. A base de dados original continua a existir até que a elimine. Assim, poderá sempre reconfigurar o seu website com a sua antiga base de dados.
>

### Casos de utilização

Durante o processo de cópia do conteúdo da base de dados, poderá encontrar dificuldades.

**Clique na situação correspondente para ver o conteúdo.**

/// details | Não aparece nenhuma base de dados na lista

Esta notificação significa que dispõe de apenas uma base de dados ativa. Para copiar a base de dados de origem, é também necessário uma base de dados de destino ativa. Para isso, pode:

- Configurar uma nova base de dados disponível no seu alojamento web.
- Configurar uma nova base de dados no seu servidor [Web Cloud Databases](/links/web/databases).
- Encomendar uma oferta [start SQL](/links/web/hosting-options-startsql) ou um servidor de bases de dados [Web Cloud Databases](/links/web/databases).

///

/// details | Já tem uma ação em curso

Esta mensagem significa que uma tarefa já está em curso na base de dados. Aceda ao separador `Operações em curso`{.action} e verifique que tem uma operação já em curso. Se for o caso, aguarde até que a operação esteja concluída para recomeçar a cópia da base de dados, se necessário.

///

/// details | A base de dados de destino não contém espaço suficiente

A sua base de dados de destino não contém espaço suficiente. Pode usufruir de duas soluções:

- Encomendar uma nova base de dados [start SQL](/links/web/hosting-options-startsql) com mais espaço.
- Se possui um servidor [Web Cloud Databases](/links/web/databases), mude para uma oferta Web Cloud Databases que dispõe de mais espaço de armazenamento.

///

/// details | As bases de dados de origem e de destino são incompatíveis

Esta notificação significa que o **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) da sua base de dados de origem não é o mesmo que o DBMS da sua base de dados de destino.

Por exemplo, este erro pode ocorrer quando utiliza MySQL para a sua base de dados de origem e PostgreSQL para a sua base de dados de destino.

///

## Quer saber mais?

[Aceder à Área de Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Fazer cópia de segurança e exportar uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurar e importar uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Obter a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export)

[Importar um backup para a base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
