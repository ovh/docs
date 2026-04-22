---
title: "Configurar o servidor de bases de dados"
excerpt: "Descubra como configurar e otimizar o servidor de bases de dados"
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

Os servidores de bases de dados Web Cloud Databases permitem-lhe modificar os parâmetros globais do seu servidor. Também pode visualizar a atividade do seu servidor.

**Descubra como configurar e otimizar o servidor de bases de dados.**

## Requisitos

- Dispor de uma [instância Web Cloud Databases](/links/web/databases) (incluída numa oferta de [alojamento web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Caminho de navegação:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Selecione o seu serviço de base de dados

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instruções

### Visualizar as informações gerais do servidor de bases de dados

<!-- CP-STEPS-START:visualizar-informacoes-gerais -->
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
>> Certifique-se de que está no separador `Informações gerais`{.action}.
>>
>> Pode consultar as informações importantes relativas à sua instância SQL. Verifique se as informações apresentadas estão corretas ou se correspondem às indicações descritas abaixo.
>>
>> |Informação|Detalhes|
>> |---|---|
>> |Estado do serviço|Indica se a instância foi iniciada, está a ser reiniciada ou está suspensa. A sua instância deve estar iniciada para poder realizar ações sobre a mesma.|
>> |Tipo|Indica o sistema de base de dados utilizado pelo servidor. Se não tem a certeza de que o tipo utilizado é correto, saiba que o mais comum é "MySQL", mas que existem outros (PostgreSQL, MariaDB). Por exemplo, se o seu site é um WordPress, o sistema MySQL é perfeitamente adequado.|
>> |Versão|Indica a versão do sistema de base de dados utilizada pelo servidor. Verifique a compatibilidade do seu site com a versão escolhida.|
>> |Saturação CPU|Apresenta o tempo de CPU passado em saturação nas últimas 24 horas.|
>> |RAM|Apresenta a memória RAM disponível para a sua instância, bem como eventuais ultrapassagens de memória. O servidor de bases de dados dispõe de recursos dedicados e garantidos: a sua memória RAM. Se necessário, pode aumentá-la e ser avisado caso esteja a consumir todos os recursos de memória da sua instância.|
>> |Infraestrutura|Indica a infraestrutura utilizada pela sua instância. Trata-se de uma informação inerente à infraestrutura da OVHcloud.|
>> |Datacenter|Indica o datacenter onde a instância foi criada. Certifique-se de que o datacenter da sua instância é o mesmo do alojamento web OVHcloud onde o seu site se encontra, ou irá encontrar, alojado.|
>> |Host|Indica o servidor OVHcloud no qual a sua instância foi criada. Trata-se de uma informação inerente à infraestrutura da OVHcloud e pode ser utilizada nas nossas comunicações relativas aos [incidentes OVHcloud](https://web-cloud.status-ovhcloud.com/).|
>>
>> ![Informações gerais](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}
<!-- CP-STEPS-END:visualizar-informacoes-gerais -->

### Gerir os seus acessos

O seu Web Cloud Databases está acessível a partir dos seus alojamentos web OVHcloud e/ou a partir da rede pública.

**Clique em cada título para ver o seu conteúdo.**

/// details | Autorizar um endereço IP

Para aceder à sua instância Web Cloud Databases, deve indicar os endereços IP ou intervalos de IP autorizados a ligarem-se às suas bases de dados.

<!-- CP-STEPS-START:autorizar-endereco-ip -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Endereços IP autorizados`{.action} e, em seguida, no botão `Adicionar um endereço IP / máscara`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na janela que aparece, indique o endereço IP ou a máscara que pretende autorizar em `IP / máscara`{.action} e, se desejar, adicione uma descrição. Decida se pretende conceder acesso apenas às bases de dados ou também ao SFTP. Por fim, clique em `Validar`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:autorizar-endereco-ip -->

///

/// details | Autorizar as ligações aos alojamentos web OVHcloud

<!-- CP-STEPS-START:autorizar-ligacoes-alojamentos -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Endereços IP autorizados`{.action}.
>>
> **Etapa 3**
>>
>> Selecione `Autorizar o acesso dos alojamentos web da OVHcloud à base de dados`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}
<!-- CP-STEPS-END:autorizar-ligacoes-alojamentos -->

///

### Alterar a sua oferta Web Cloud Databases <a name="modify-ram-web-cloud-db"></a>

> [!warning]
>
> Se a sua oferta Web Cloud Databases está associada a uma oferta de alojamento web **Performance**, deverá obrigatoriamente e previamente desassociar a oferta Web Cloud Databases do seu alojamento **Performance** para migrar para uma oferta superior.
>
> Para desassociar uma oferta Web Cloud Databases de um alojamento web **Performance**, consulte o nosso guia "[Desassociar a minha solução Web Cloud Databases de um alojamento web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>
> **Esta ação é irreversível e a oferta Web Cloud Databases será depois faturada independentemente do seu alojamento web Performance.**
>

<!-- CP-STEPS-START:alterar-oferta-wcdb -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador **Informações gerais** apresentado por predefinição, clique em `...`{.action} à direita da menção "RAM" e, em seguida, em `Alterar quantidade de RAM`{.action} para aceder à encomenda desta alteração.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Escolha a quantidade de RAM pretendida e clique em `Seguinte`{.action}. Poderá então escolher a duração pretendida.
>>
>> > [!primary]
>> >
>> > Um adiamento proporcional será efetuado se lhe faltarem alguns meses antes da expiração. Este pro rata será baseado na data de expiração da sua instância Web Cloud Databases e não na da nota de encomenda.
>>
>> Após a validação dos contratos, será redirecionado para a nota de encomenda a fim de pagar pela alteração. Esta última produzirá efeitos em algumas horas.
>>
>> > [!warning]
>> >
>> > Se dispõe atualmente de um Web Cloud Databases gratuito graças ao seu alojamento Performance, a alteração da oferta fará com que perca a sua gratuidade.
<!-- CP-STEPS-END:alterar-oferta-wcdb -->

### Alterar a configuração do servidor de bases de dados

**Clique em cada título para ver o seu conteúdo.**

/// details | Instância MySQL e MariaDB

<!-- CP-STEPS-START:configurar-mysql-mariadb -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Configuração`{.action}.
>>
> **Etapa 3**
>>
>> No quadro **Configuração geral de MySQL**, encontrará a configuração atualmente definida para a sua base de dados. Pode modificá-la diretamente e clicar em `Aplicar`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}
>>
>> - **MaxAllowedPacket**: Tamanho máximo dos pacotes.
>> - **Max_user_connections**: Número de ligações simultâneas autorizadas por utilizador.
>> - **AutoCommit**: Define se os pedidos são automaticamente validados (committed) ou não.
>> - **Interactive_timeout**: Tempo (em segundos) durante o qual o servidor aguarda atividade numa ligação interativa antes de a fechar.
>> - **InnodbBufferPoolSize**: Escolha da dimensão da memória tampão.
>> - **MaxConnections:** Número de ligações simultâneas autorizadas no servidor de bases de dados.
>> - **Wait_timeout**: Tempo (em segundos) durante o qual o servidor aguarda atividade numa ligação não interativa antes de a fechar.
>> - **Event_scheduler**: Permite acionar a execução de pedidos programados diretamente no servidor MySQL.
>> - **sql_mode**: A opção **sql_mode** afeta a sintaxe SQL suportada e as verificações de validação de dados efetuadas por MySQL/MariaDB.
>>
>> > [!primary]
>> > Quando encontra um erro no seu site a indicar **"Too many connections"**, isso deve-se à ultrapassagem do número de ligações simultâneas no servidor de bases de dados. Pode então aumentar a variável **"MaxConnections"** se esta não estiver no máximo.
>>
>> > [!primary]
>> >
>> > <b>sql_mode</b>:
>> >
>> > &emsp;&emsp;Modo predefinido de MariaDB 10.1:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
>> >
>> > &emsp;&emsp;Modo predefinido de MariaDB 10.2 e superior:
>> > <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Modo predefinido de MySQL 5.6:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Modo predefinido de MySQL 5.7 e superior:
>> > <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > Recomendamos que utilize sempre o modo predefinido, exceto se a sua base de dados tiver sido atualizada a partir de uma versão com um modo predefinido diferente da versão atual.
>>
>> Efetue as modificações necessárias e clique em `Validar`{.action}.
<!-- CP-STEPS-END:configurar-mysql-mariadb -->

> [!warning]
>
> Qualquer alteração requer o reinício do servidor de bases de dados.
>

///

/// details | Instância PostgreSQL

<!-- CP-STEPS-START:configurar-postgresql -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Configuração`{.action}.
>>
> **Etapa 3**
>>
>> No quadro **Configuração geral de PostgreSQL**, encontrará a configuração atualmente definida para a sua base de dados. Pode modificá-la diretamente e clicar em `Aplicar`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}
>>
>> - **log_min_messages**: Controla os níveis das mensagens a registar nos logs do servidor. Os níveis disponíveis para uma solução Web Cloud Databases são os seguintes:
>>     - **"WARNING"**: Fornece mensagens de alerta sobre potenciais problemas.
>>     - **"ERROR"**: Envia o erro que provocou a anulação de um comando em curso.
>>     - **"LOG"**: Regista as informações destinadas aos administradores do servidor.
>>     - **"FATAL"**: Envia o erro que provocou o fim da sessão em curso.
>>     - **"PANIC"**: Envia o erro que provocou o fim do conjunto das sessões.
>>
>> Cada um dos níveis inclui todos os níveis que se seguem. Quanto mais alto for o nível, menos mensagens serão registadas nos logs do servidor.
>>
>> Por predefinição, o valor definido é **"WARNING"**, uma vez que inclui os valores **"ERROR"**, **"LOG"**, **"FATAL"** e **"PANIC"**.
>>
>> Também pode ativar extensões nas suas bases de dados. Para isso, clique no separador `Bases de dados`{.action} e, em seguida, no ícone da tabela junto à sua base de dados, na coluna **"Extensões"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}
<!-- CP-STEPS-END:configurar-postgresql -->

///

### Alterar a versão MySQL, PostgreSQL ou MariaDB do servidor de bases de dados

<!-- CP-STEPS-START:alterar-versao -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador **Informações gerais**, a versão atual aparece na linha **Versão**.
>>
> **Etapa 3**
>>
>> Para modificar esta versão, clique em `Alterar versão`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}
<!-- CP-STEPS-END:alterar-versao -->

/// details | Como saber a versão exata de PostgreSQL que utilizo?

Introduza este comando no phpPgAdmin, clicando na sua **base de dados**, na secção **"SQL"**, e depois clique em `Lançar`{.action}:

```sql
select version();
```

///

/// details | Como saber a versão exata de MySQL ou MariaDB que utilizo?

Introduza este comando no phpMyAdmin, na secção **"SQL"**, e depois clique em `Executar`{.action}:

```sql
show variables like "version";
```

///

> [!primary]
>
> - Antes de migrar para uma versão superior, certifique-se de que a sua base de dados é compatível com a versão escolhida.
> - A alteração será efetiva em alguns minutos.
>

> [!warning]
>
> Não é possível passar diretamente de uma versão antiga para a mais recente.
> A passagem por todas as versões intermédias é obrigatória.
>

### Logs e métricas

**Clique em cada título para ver o seu conteúdo.**

/// details | Acesso aos logs

Para aceder aos logs da sua solução Web Cloud Databases, consulte o nosso guia "[Web Cloud Databases - Como recuperar os logs](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

///

/// details | Acompanhar a RAM consumida

<!-- CP-STEPS-START:acompanhar-ram -->
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
>> Clique no separador `Métricas`{.action}. Encontrará o gráfico **"Estatísticas de memória RAM utilizada"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}
<!-- CP-STEPS-END:acompanhar-ram -->

///

/// details | Acompanhar o número de ligações por minuto

Este gráfico permite acompanhar, nas últimas 24 horas, o volume de ligações por minuto no servidor de bases de dados.

<!-- CP-STEPS-START:acompanhar-ligacoes-minuto -->
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
>> Clique no separador `Métricas`{.action}. Encontrará o gráfico **"Estatísticas do total de ligações por minuto"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}
<!-- CP-STEPS-END:acompanhar-ligacoes-minuto -->

///

### Otimizar as suas bases de dados

Faça a manutenção da sua base de dados para que o seu desempenho permaneça elevado e devolva rapidamente as informações aos scripts. Para tal, é necessário uma base de dados estruturada e otimizada.

**Clique em cada título para ver o seu conteúdo.**

/// details | Indexar a base de dados

Para aumentar a rapidez das pesquisas durante um pedido, é necessário indexar os campos utilizados nas cláusulas WHERE.

Exemplo: costuma fazer pesquisas de pessoas relativamente à cidade. Indexe o campo "cidade" com o seguinte pedido:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

///

/// details | Limpar a base de dados

Já não consulta alguns dos seus dados? Se os arquivar, as tabelas ficarão menos cheias e as pesquisas serão mais rápidas.

///

/// details | Limite de exibição

Limite a exibição dos registos a um número fixo (por exemplo, 10 por página) através da parte LIMIT do pedido SQL.

///

/// details | Agrupamento dos pedidos

Agrupe os pedidos no início do script da seguinte forma:

```bash
open_connection
request1
request2
...
close_connection
Display...
Process data
Loop through data...
Display...
...
```

///

/// details | Obter apenas dados úteis

Nos seus pedidos SQL, verifique se seleciona apenas aquilo de que precisa e, sobretudo, se não se esqueceu das ligações entre as tabelas.

Exemplo:

```sql
(where table1.champs = table2.champs2)
```

///

/// details | Evitar as opções que consomem demasiados recursos

Evite utilizar **"HAVING"**, por exemplo. Isto torna os pedidos mais pesados. Da mesma forma, evite utilizar **"GROUP BY"**, exceto em caso de verdadeira necessidade.

///

## Quer saber mais?

[Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
