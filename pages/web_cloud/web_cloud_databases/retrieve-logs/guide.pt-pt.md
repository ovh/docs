---
title: 'Web Cloud Databases - Como gerir os logs?'
excerpt: 'Saiba como gerir os logs das suas bases de dados alojadas no seu servidor Web Cloud Databases'
updated: 2026-03-24
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

Um log corresponde a um evento ocorrido num sistema informático (servidor, computador, aplicação, website, base de dados, rede informática, etc.).
Por exemplo, um log pode registar e conter um ou vários dos seguintes elementos:

- O carimbo temporal (data, hora, minuto, segundo, etc.) do evento.
- A natureza do evento (ligação, desligamento, erro, download, upload, alerta, etc.).
- Informações adicionais sobre o evento (página ou ficheiro consultado, aplicação lançada, servidor remoto contactado, nome de um ficheiro carregado ou descarregado, etc.)
- A origem do evento (identificador do utilizador, endereço IP de origem, programa de origem, etc.).
- O estado do sistema onde o evento ocorre (recursos disponíveis, memória restante, utilização do CPU, etc.).

Na maioria dos casos, os logs são gerados diretamente pelos sistemas informáticos onde os eventos ocorrem.
São armazenados em ficheiros de texto, também designados por ficheiros de logs.

Os ficheiros de logs permitem realizar as seguintes ações:

- Analisar o comportamento do sistema informático que gera os logs.
- Identificar os erros ocorridos no sistema informático.
- Resolver os erros encontrados no sistema informático.
- Otimizar e melhorar o desempenho do sistema informático.

A sua solução [Web Cloud Databases](/links/web/databases) gera os seus próprios logs.

Em determinadas situações, pode precisar de consultar ou recuperar os logs:

- Do seu servidor Web Cloud Databases.
- De uma das bases de dados alojadas no seu servidor Web Cloud Databases.

**Saiba como visualizar e gerir os logs da sua solução Web Cloud Databases.**

## Requisitos

- Dispor de uma [instância Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Caminho de navegação:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Selecione o seu serviço de base de dados

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instruções

> [!warning]
>
> Disponibilizamos este tutorial para o ajudar nas tarefas mais habituais. No entanto, recomendamos que contacte um [fornecedor especializado](/links/partner) se encontrar dificuldades. Não poderemos prestar-lhe assistência na interpretação dos logs disponíveis com a sua solução Web Cloud Databases. Encontre mais informações na secção [Quer saber mais?](#go-further) deste guia.
>

### Visualizar os logs em tempo real do seu Web Cloud Databases

Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Logs`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}
>>
>> Nesta consola integrada, encontrará em tempo real os logs da sua solução Web Cloud Databases.
>>
>> > [!primary]
>> >
>> > Os logs só estão disponíveis aqui em tempo real. Só aparecerão se forem gerados enquanto estiver no separador `Logs`{.action}.
>> >
>> > Se sair do separador `Logs`{.action} e voltar mais tarde, o histórico apresentado anteriormente terá desaparecido.

### Recuperar o histórico de logs da sua solução Web Cloud Databases

Para recuperar o histórico de logs da sua solução Web Cloud Databases, deve ligar-se através de SFTP.

> [!warning]
>
> Antes de se ligar, verifique que o endereço IP público do equipamento que está a utilizar está autorizado no seu servidor Web Cloud Databases com a opção `SFTP` ativada.
>
> Para verificar, obtenha o endereço IP público do seu ponto de acesso à Internet e consulte a secção **Autorizar um endereço IP** [deste guia](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Para obter as informações de ligação SFTP da sua solução Web Cloud Databases, clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador `Informações gerais`{.action}, localize a secção **Informações de ligação**. Abaixo de `SFTP`{.action}, encontrará as informações necessárias para se ligar por SFTP.
>>
>> > [!primary]
>> >
>> > Se não conhece a `Palavra-passe do servidor`, clique no botão `...`{.action} à direita para a alterar.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Depois de obter as credenciais de acesso SFTP, ligue-se através de um cliente FTP (FileZilla, Cyberduck, WinSCP, etc.).

No FileZilla, aceda ao menu `Ficheiro`{.action} no canto superior esquerdo e clique em `Gestor de sites`{.action}.

Clique em `Novo site`{.action} e introduza os parâmetros obtidos anteriormente.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

O ficheiro de logs, denominado `stdout.log`, encontra-se na raiz.

Descarregue-o para o seu computador para o consultar.

> [!primary]
>
> Um ficheiro de logs adicional denominado `slow-query.log` pode aparecer na raiz SFTP do seu servidor Web Cloud Databases.
> Este ficheiro contém o histórico das consultas lentas executadas no seu servidor Web Cloud Databases.
>
> Por predefinição, o valor está definido para 1 segundo nas soluções Web Cloud Databases na variável **long_query_time**.
>
> Graças a este ficheiro, pode otimizar os seus scripts e o conteúdo da(s) sua(s) base(s) de dados para melhorar o desempenho dos seus diferentes serviços associados.
>

### Subscrever os logs da sua solução Web Cloud Databases no Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) é uma plataforma de gestão dos seus logs. Facilita a agregação e a gestão dos logs, nomeadamente para infraestruturas que geram um grande volume de logs.

Funciona ao recuperar os logs gerados pela sua infraestrutura, websites ou aplicações, por exemplo para:

- os armazenar;
- os apresentar em dashboards em tempo real;
- permitir aos utilizadores executar consultas complexas;
- os filtrar por data, aplicação, tipo ou conteúdo.

Para mais informações sobre o Logs Data Platform, consulte o nosso guia [Introdução ao Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Uma vez que as soluções [Web Cloud Databases](/links/web/databases) podem ser utilizadas com numerosos serviços (alojamentos partilhados, VPS, servidores dedicados, etc.), estas podem, além dos logs em tempo real já disponíveis, ser subscritas por fluxo de dados no Logs Data Platform.

Para subscrever a sua solução Web Cloud Databases a um fluxo de dados no Logs Data Platform, podem ocorrer duas situações.

**Clique em cada caso para ver o conteúdo.**

<a name="wcdb-ldp-case1"></a>

/// details | Caso 1 - Subscrever um fluxo de dados existente na sua solução Logs Data Platform

Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Logs`{.action} e depois no botão `Subscrever`{.action} situado à direita da secção de logs em tempo real.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se dispuser de várias soluções Logs Data Platform, selecione a referência pretendida na lista pendente situada abaixo do botão `Adicionar um fluxo de dados`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Etapa 4**
>>
>> O fluxo existente aparece na tabela na parte inferior da página. Clique no botão `Subscrever`{.action} situado à direita da linha correspondente.
>>
>> Após alguns segundos, uma mensagem confirma que a subscrição foi criada com sucesso.

///

/// details | Caso 2 - Subscrever um novo fluxo de dados na sua solução Logs Data Platform

Clique nos separadores abaixo para visualizar cada uma das **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Logs`{.action} e depois no botão `Subscrever`{.action} situado à direita da secção de logs em tempo real.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se dispuser de várias soluções Logs Data Platform, selecione a referência pretendida na lista pendente situada abaixo do botão `Adicionar um fluxo de dados`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Uma vez que o fluxo de dados ainda não existe, clique no botão `Adicionar um fluxo de dados`{.action}. Será redirecionado para uma página que lhe permitirá criar um novo fluxo de dados na sua solução Logs Data Platform.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}
>>
>> Se necessário, consulte os nossos guias "[Introdução ao Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) e "[Iniciar rapidamente com o Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN).
>>
> **Etapa 5**
>>
>> Depois de preencher os formulários, clique em `Guardar`{.action}. Será redirecionado para o separador `Fluxo de dados` da sua solução Logs Data Platform.
>>
>> Para subscrever a sua solução Web Cloud Databases a este novo fluxo, volte ao separador `Logs`{.action} da sua solução Web Cloud Databases e siga o [Caso 1](#wcdb-ldp-case1) descrito acima.

///

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com o seu Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Introdução ao Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Iniciar rapidamente com o Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Fale com nossa [comunidade de utilizadores](/links/community).
