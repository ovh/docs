---
title: "Alojamento web - Consultar as estatísticas e logs de um website"
excerpt: "Saiba como consultar as estatísticas e os logs do seu website graças à sua oferta de alojamento web"
updated: 2025-10-09
---

## Objetivo

O acesso aos logs e às estatísticas do seu website está incluído na sua oferta de alojamento web, acessível a partir da Área de Cliente OVHcloud.

**Saiba como consultar as estatísticas e os logs do seu website graças à sua oferta de alojamento web.**

## Requisitos

- Ter um serviço de [alojamento web](/links/web/hosting) compatível.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

Para aceder aos diferentes dados estatísticos e logs do seu alojamento web, clique nas janelas abaixo para visualizar cada uma das etapas **4**.

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
>> Na página que se abrir, clique no separador `Estatísticas e logs`{.action}.
>>
>> ![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}
>>
> **Etapa 4**
>>
>> O ecrã que vai aparecer é composto por 4 secções:
>>
>> - [Estatísticas das visitas](#website-stats): Apresenta numerosas estatísticas relativas ao seu alojamento web.
>> - [Logs do website](#website-logs): Apresenta os logs brutos do seu alojamento web.
>> - [Estatísticas da infraestrutura](#infra-stats): Apresenta estatísticas gráficas (pedidos HTTP e SQL, comandos FTP, utilização de CPU, ligações de saída, etc.).
>> - [Administração dos utilizadores](#admin-user): Mostra os utilizadores autorizados a aceder às estatísticas.
>>
>> ![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

### Estatísticas das visitas <a name="website-stats"></a>

Para melhor seguir e controlar o tráfego dos seus websites, dispõe de **OVHcloud Web Statistics**, uma ferramenta de estatísticas de visitas e de medição de audiência dos seus websites alojados na sua oferta de alojamento web.

![ows dashboard](/pages/assets/screens/other/web-tools/logs/ows-presentation.gif){.thumbnail}

O painel de controlo de **OVHcloud Web Statistics** apresenta 7 secções:

- **Dashboard** : visualização do tráfego nos websites do seu alojamento web.
- **Browsers** : classificação dos browsers mais utilizados para consultar os seus websites.
- **Geolocalization**: percentagem de visitantes em função da sua localização.
- **Requests** : classificação das páginas mais consultadas nos seus websites.
- **Robots** : visualização dos robôs que passam pelos seus websites.
- **Status** : estatísticas de fracassos e sucessos encontrados em função dos códigos HTTP devolvidos.
- **FAQ**: Secção dedicada às questões mais frequentes. Também explica os termos técnicos que você pode encontrar na ferramenta.

O campo "Period selection", no canto superior direito, permite selecionar um período preciso.

### Logs do website <a name="website-logs"></a>

> [!primary]
>
> Não poderemos acompanhá-lo na interpretação dos logs do seu alojamento web, uma vez que se trata apenas de um desenvolvimento web e não de um alojamento web.
>
> Contacte um [fornecedor especializado](/links/partner) se precisar de ajuda.
>

Pode visualizar os logs brutos do seu website com um diferimento de cerca de 5 minutos.

![osl statistiques dashboard](/pages/assets/screens/other/web-tools/logs/osl-statistics-board.png){.thumbnail}

Tem à sua disposição diferentes tipos de logs:

- **Logs Web** : contém os diferentes logs de consulta do seu website, bem como as diferentes ações realizadas a partir do seu website. Isto permite-lhe, por exemplo, detetar tentativas de ações maliciosas.
- **Logs FTP**: as diferentes ligações / comandos em FTP serão registados e conservados nestes logs.
- **Logs erro** : encontre aqui os diferentes erros gerados pelo seu website.
- **Logs CGI** : as várias chamadas para os scripts cgi.bin que foram efetuadas são guardadas nestes logs.
- **Logs out** : contém o histórico dos diferentes pedidos externos (ligações de saída TCP) realizados a partir do seu alojamento web em infraestruturas remotas.
- **Logs SSH** : estes logs indicam as diferentes ligações/comandos realizados com o protocolo SSH.
- **Logs CRON** : encontre aqui os resultados da execução das suas tarefas planificadas [(CRON)](/pages/web_cloud/web_hosting/cron_tasks) no seu alojamento web.

> [!success]
>
> Para consultar as estatísticas e/ou os logs do CDN, consulte o nosso guia dedicado: "[Alojamento Web - Consultar as estatísticas e logs CDN](/pages/web_cloud/web_hosting/cdn_statistics_and_logs)".

### Estatísticas da infraestrutura <a name="infra-stats"></a>

Encontre nesta secção a atividade da infraestrutura do seu alojamento web, de forma a visualizar o consumo dos recursos colocados à sua disposição.

![infrastructure statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

Pode visualizar diferentes tipos de gráficos a partir do menu suspenso em cima, à esquerda:

- **Comandos FTP** : indica os comandos principais (upload, download, login, delete) realizados utilizando o protocolo FTP no seu alojamento web.
- **Pedidos HTTP** : indica o número e o código de retorno dos pedidos HTTP executados no seu alojamento web. Tudo isto distinguindo os diferentes códigos HTTP (2xx/3xx, 4xx e 5xx). Se necessário, pode encontrar a lista dos códigos HTTP e o seu significado efetuando diretamente uma pesquisa através de um motor de pesquisa (Google, Yahoo!, bing, etc.).
- **Ligações de saída** : pedidos emitidos do seu website para um website externo.
- **Utilização do CPU** : nível de consumo do processador na sua instância de alojamento web.
- **Plafond de recursos ultrapassado**: indica os momentos em que o seu alojamento web ultrapassa a sua quota de recursos.
- **Pedidos SQL**: quantidade de pedidos para as bases de dados do seu alojamento web.
- **Tempos de resposta SQL**: tempos de resposta dos pedidos emitidos para as bases de dados do seu alojamento web.

### Administração dos utilizadores <a name="admin-user"></a>

A criação de um utilizador permitirá a uma pessoa aceder às estatísticas do seu alojamento web sem ter acesso à sua Área de Cliente OVHcloud.

Na secção `Administração dos utilizadores`{.action}, clique em `Criar um novo utilizador`{.action} e siga as instruções para finalizar a criação de um novo utilizador.

![create a new user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}

Para aceder às estatísticas do seu website com um utilizador que criou, deve introduzir o endereço seguinte substituindo `000` pelo número do cluster do seu alojamento web e `domain.tld` pelo nome do domínio do seu website (sem os `www`):

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

Pode igualmente recuperar o link de acesso às estatísticas/logs diretamente a partir da sua Área de Cliente:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, clique no separador `Estatísticas e logs`{.action}.
6. Aceda à secção `Estatísticas das visitas`{.action}.
7. Clique no botão `Ver estatísticas`{.action}.

![website visit statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}

Na nova página, obtenha o URL existente na barra de endereço do browser.

> [!warning]
>
> Se ativou os logs separados num [entrada multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite), os utilizadores criados aqui não podem aceder às estatísticas dessa entrada multisite específica.
>

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).