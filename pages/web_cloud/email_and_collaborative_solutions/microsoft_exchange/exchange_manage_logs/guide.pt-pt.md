---
title: Exchange - Como gerir os logs
excerpt: Saiba como visualizar e gerir os logs na sua oferta Private Exchange ou Trusted Exchange
updated: 2025-10-28
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objetivo 

Os logs correspondem aos eventos ocorridos num sistema informático (servidor, computador, aplicação, site web, base de dados, rede informática, etc.). Por exemplo, os logs podem registar e conter um ou mais elementos dos seguintes:

- A marcação temporal (data, hora, minuto, segundo) do evento.
- A natureza do evento (ligação, desligação, erro, download, upload, alerta, etc.).
- Informações complementares sobre o evento (páginas ou ficheiros consultados, aplicações iniciadas, servidores remotos chamados, nome de um ficheiro carregado ou transferido, etc.).
- A origem do evento (identificador do utilizador, endereço IP de origem, programa de origem, etc.).
- O estado do sistema no momento do evento (recursos disponíveis, memória restante, utilização da CPU, etc.).

Geralmente, os logs são gerados diretamente pelos sistemas informáticos nos quais os eventos ocorrem. Eles são armazenados e arquivados em ficheiros de texto também chamados ficheiros de logs.

Os ficheiros de logs permitem realizar as seguintes ações:

- Analisar o comportamento do sistema informático que gera os logs.
- Identificar os erros ocorridos no sistema informático.
- Resolver os erros encontrados no sistema informático.
- Otimizar o funcionamento e as prestações do sistema informático.

A sua oferta Private Exchange ou Trusted Exchange gera, portanto, os seus próprios logs. Pode ser levado a consultar/recuperar os logs para analisar os acessos às suas caixas de correio ou seguir os fluxos de correio eletrónico.

**Saiba como visualizar e gerir os logs na sua oferta Private Exchange ou Trusted Exchange**

## Requisitos

- Ter adquirido uma oferta [Private Exchange](/links/web/emails-hosted-exchange) ou [Trusted Exchange](/links/web/emails-trusted-exchange).
- Uma conta Logs Data Platform (LDP) com pelo menos um *Stream* ativo configurado. Este guia vai guiá-lo em todas as etapas necessárias: [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
    - Se não conhecer todas as possibilidades de configuração de um *Stream* LDP, basta criar um novo com as opções por defeito (indexação & websocket ativados, armazenamento de longa duração desativado) para seguir este guia.
- Estar ligado à sua [área de cliente OVHcloud](/links/manager).

## Instruções

### Visualizar os logs da sua plataforma Exchange em tempo real

Para aceder aos logs em tempo real na sua oferta Private ou Trusted Exchange, siga as instruções seguintes:

1. Conecte-se à sua [área de cliente OVHcloud](/links/manager).
1. Dirija-se à secção `Web Cloud`{.action}.
1. Na rubrica `MICROSOFT`, clique em `Exchange`{.action}.
1. Selecione a plataforma em questão.
1. À direita da série de separadores, clique no separador `Mais +`{.action} e depois em `Registos`{.action}.

![exchange - logs](images/exchange-logs01.png){.thumbnail}

> [!warning]
>
> Como se trata de uma consola em tempo real, os logs só aparecem quando está no separador `Registos`{.action}. Se sair do separador `Registos`{.action} e voltar, o histórico anterior terá desaparecido.

Os serviços Exchange oferecem 2 tipos de logs:

- **Access** : Permite consultar a atividade das ligações ao seu serviço Exchange.
- **Messagetracking** : Permite consultar os logs detalhados do fluxo de correio eletrónico que atravessa o seu serviço Exchange. Encontrará as seguintes informações:
    - o estado de entrega de correios nos seus contos Exchange;
    - o estado de envio de correios a partir do seu serviço Exchange;
    - o tamanho dos correios transmitidos;
    - etc.

### Integrar os logs da sua solução Exchange na Logs Data Platform

A solução Logs Data Platform pode ser útil se tiver uma infraestrutura importante ou se os seus serviços geram uma grande quantidade de logs. De fato, esta plataforma foi concebida para facilitar a agregação e a gestão dos logs.

Funciona ao recuperar os logs gerados pela sua infraestrutura, sites web ou aplicações, por exemplo:

- para os armazenar;
- para os exibir em painéis de instrumentos em tempo real;
- para permitir aos utilizadores efetuarem consultas complexas;
- para os filtrar por data, aplicação, tipo ou conteúdo.

> [!primary]
>
> Para mais detalhes sobre Logs Data Platform, consulte o nosso guia de introdução a [Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

As soluções Exchange são compatíveis com diversos serviços tais como alojamento partilhado, VPS e servidores dedicados. Podem também ser complementadas por fluxos de dados na Logs Data Platform, em complemento dos logs em tempo real já disponíveis.

Para subscrever os logs da sua solução Exchange a um fluxo de dados na Logs Data Platform, realize as seguintes ações:

1. Conecte-se à sua [área de cliente OVHcloud](/links/manager).
1. Dirija-se à secção `Web Cloud`{.action}.
1. Na rubrica `MICROSOFT`, clique em `Exchange`{.action}.
1. Selecione a plataforma em questão.
1. À direita da série de separadores, clique no separador `Mais +`{.action} e depois em `Logs`{.action}.
1. À direita do quadro onde aparecem os seus logs em tempo real, clique no botão `Subscrever`{.action}.

![exchange - logs](images/exchange-logs02.png){.thumbnail}

A partir da página que aparece, selecione a conta Logs Data Platform desejada no menu pendente situado acima da tabela.

![exchange - logs](images/exchange-logs03.png){.thumbnail}

Dois casos são possíveis para subscrever a sua solução Exchange:

> [!tabs]
> **Caso n.º 1**
>> **Subscrever a um fluxo já existente na sua solução Logs Data Platform**
>>
>> Se o fluxo em questão já existir, aparece sob a forma de uma linha na tabela. Neste caso específico e para subscrever a sua solução Exchange a este fluxo existente, basta clicar no botão `Subscrever`{.action} situado à direita da linha correspondente ao fluxo em questão.
>>
>> Após alguns instantes e se permanecer na mesma página, aparece uma mensagem na sua área de cliente para lhe indicar que a subscrição foi criada com sucesso.
>>
> **Caso n.º 2**
>> **Subscrever a um novo fluxo de dados na sua solução Logs Data Platform**
>>
>> Se o fluxo em questão ainda não existir, clique no botão `Adicionar fluxo de dados`{.action}. Será então redirecionado para uma nova página da sua área de cliente OVHcloud, onde poderá criar um novo fluxo de dados na sua solução Logs Data Platform.
>>
>> Consulte os nossos guias [Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) e [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) para realizar esta ação.
>>
>> Após preencher o formulário, clique no botão `Guardar`{.action}.
>>
>> ![exchange - logs](images/exchange-logs04.png){.thumbnail}
>>
>> Será então redirecionado para o separador `Fluxo de dados`{.action} da sua solução Logs Data Platform.
>>
>> Pode agora subscrever a sua solução Exchange ao seu novo fluxo Logs Data Platform seguindo as instruções no início do capítulo.

## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (indexação, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

[Primeiros passos com o serviço Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

[Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Se desejar beneficiar de uma assistência no uso e configuração das suas soluções OVHcloud, sugerimos que consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).