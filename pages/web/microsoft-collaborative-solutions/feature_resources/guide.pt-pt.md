---
title: 'Utilização das contas de recurso'
excerpt: Insert Here A Short Desc
slug: exchange_20132016_utilizacao_das_contas_de_recurso
legacy_guide_number: g1325
order: 04
---

**Última atualização: 22 de dezembro de 2020**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Esta função colaborativa do Exchange permite criar endereços de e-mail dedicados aos recursos da sua organização, tais como salas de conferência e equipamentos partilhados. A utilização destas contas de recursos permite otimizar a organização de eventos num ambiente de trabalho colaborativo, ao fornecer controlos de disponibilidade e ao integrar os recursos de forma transparente nos seus calendários Exchange.

**Este guia explica a gestão dos recursos com a ajuda da Área de Cliente OVHcloud e da aplicação Outlook Web App (OWA).**

## Requisitos

- Dispor de uma [solução Exchange OVHcloud](https://www.ovhcloud.com/pt/emails/hosted-exchange/) já configurada
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Dispor de dados de acesso para a(s) conta(s) de e-mail com acesso ao recurso.

## Instruções

Ligue-se à sua Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione `Web Cloud`{.action} na barra de navegação superior. Clique em `Microsoft`{.action} e, a seguir, em `Exchange`{.action}. De seguida, selecione o serviço Exchange em causa. Clique no separador `Plus +`{.action} e, a seguir, em `Recursos`{.action}.

### 1 - criar um recurso

![criar](images/exchange-resources-step1.png){.thumbnail}

Clique no botão `Adicionar uma conta de recurso`{.action} para criar o seu primeiro recurso. Na nova janela, introduza os seguintes campos:

![criar](images/exchange-resources-step2.png){.thumbnail}

|Nome|Descrição|
|---|---|
|E-mail do recurso|Introduza o endereço do recurso. Tenha em atenção que não pode escolher um endereço de e-mail existente.|
|Nome do recurso|Nome completo que aparece na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e [no webmail OVHcloud](https://www.ovh.pt/mail/) (OWA).|
|Capacidade|Pode definir a dimensão máxima de um recurso (especificando, por exemplo, o número de lugares sentados de uma peça ou os lugares sentados de um veículo de empresa partilhada).|
|Permitir conflitos|Se esta opção for selecionada, poderá criar eventos de calendário que se sobreponham e envolvam o mesmo recurso.|
|Tipo de recurso|Escolha o tipo de recurso: "Equipamento" ou "Sala".|

Clique em `Seguinte`{.action} para passar ao resumo e confirme a tarefa clicando em `Criar`{.action}.


### Etapa 2: utilizar recursos

Os seus recursos podem ser geridos a partir da tabela do separador "Recursos". Clique em `...`{.action} para modificar ou eliminar um recurso. A opção `Configurar as delegações`{.action} também será apresentada. Com esta opção, poderá delegar o acesso da mesma forma que para uma conta Exchange. Consulte os detalhes [neste guia](../exchange_3013_atribuir_permissoes_full_access_a_uma_conta/).

![utilizar](images/exchange-resources-step3.png){.thumbnail}

### Adicionar um calendário de recursos à OWA

> [!primary]
>
Consulte também o nosso manual sobre [Partilha de calendários a partir da interface OWA](../exchange_2016_partilhar_um_calendario_atraves_do_webmail_owa/).
>

Ligue-se à sua conta Exchange através do [webmail OVHcloud](https://www.ovh.pt/mail/). Migre para a interface "Calendário" clicando no "aplicador" no canto superior esquerdo e selecionando o ícone `Calendário`{.action}.

![adicionar](images/exchange-calendars-step1.png){.thumbnail}

Na barra de navegação superior, clique em `Adicionar um calendário`{.action} e depois em `A partir do anuário`{.action}.

![selecionar recurso](images/exchange-resources-step4.png){.thumbnail}

Introduza texto para apresentar as sugestões dos seus contactos, introduza um endereço eletrónico completo ou utilize a opção de pesquisa via `A partir do anuário`{.action}. No entanto, o endereço de e-mail do recurso deve ser sugerido nesta fase, uma vez que foi automaticamente acrescentado à lista de endereços global (GAL) aquando da sua criação. Clique em `Abrir`{.action} para adicionar o calendário deste recurso à vista de conjunto do seu calendário.

### Criar um evento no OWA

Para planear um evento, clique em `Novo`{.action} na barra de menu superior e selecione `Evento de calendário`{.action}. Na nova janela, pode definir os detalhes do evento e adicionar o equipamento necessário e a localização adicionando os recursos correspondentes.

![planeamento](images/exchange-resources-step5_1.png){.thumbnail}

O gestor de eventos é composto por três componentes:

#### Detalhes

- (1) Adicionar um título para o evento: isto será apresentado nos calendários.
- (2) Adicionar um espaço ou uma sala: pode escolher entre as suas contas de recursos.
- (3) Início/Fim: defina a duração do evento.
- (4) Repetir: se necessário, selecione um ciclo de repetição (diário, no mesmo dia todos os meses, etc.).
- (5) Lembrete: A OWA exibe uma janela de chamada à hora especificada.
- (6) Apresentar como: escolha um estado para o seu calendário de disponibilidade.
- (7) Acrescentar uma carta de insistência: uma opção que permita enviar alertas por e-mail a si ou a todos os participantes.

Introduza a sua mensagem de convite no editor (8) e continue a adicionar participantes ao seu evento.

Se tentar adicionar um recurso já reservado ("ocupado"), aparecerá uma mensagem que sugere a utilização do [Assistente de Planeamento](./#planificacao) (9), que fornece uma visão mais ampla do calendário do período escolhido.

#### Contactos

Uma vez que uma conta de recursos é também um contacto, pode adicionar salas e equipamentos neste domínio, tal como para os outros participantes (10). Comece a escrever para apresentar as sugestões dos seus contactos, introduza um e-mail completo ou utilize a opção de pesquisa (um clique em `+`{.action} abrirá os seus contactos).

Depois de finalizar o planeamento, clicando em `Enviar`{.action} para a barra de menus superior, a conta de recursos envia-lhe uma mensagem para confirmar que está reservada para o seu evento. Selecione a opção "Pedir respostas" se precisar de uma confirmação ativa por parte dos convidados para atualizar automaticamente o seu calendário.

#### Planificação

Um excerto de calendário dos seus próprios eventos, intitulado **Planificar**, aparece à direita assim que adiciona um recurso ou uma pessoa ao evento. Apresenta um resumo gráfico da disponibilidade dos recursos no dia escolhido; pode definir a hora e a duração do evento diretamente clicando com o rato e selecionando o menu no canto superior direito.

Se necessário, clique em `Assistente Planificação`{.action} na vertente **Contacts** para abrir uma vista de conjunto ainda mais detalhada. Este assistente é útil para eventos mais importantes ou para gerir conflitos, pois visualiza todo o processo de planeamento. Pode verificar a disponibilidade e ajustar o seu planeamento selecionando localizações e contactos, sem sair desta interface.

![assistente](images/exchange-resources-step6.png){.thumbnail}

### Mensagens de resposta do recurso

Depois de criar o evento (ao clicar em `Enviar`{.action} para a barra de menu superior), Exchange enviará automaticamente mensagens:

- Os participantes receberão convites (para atualizar os calendários em causa ou apenas os deles, dependendo da sua escolha de "Pedir respostas" anteriormente).

- Receberá um e-mail de confirmação proveniente de cada conta de recurso selecionada (se o recurso está disponível ou se está reservado mas que **assinalou** "Permitir conflitos" aquando da criação).

![mensagem de aceitação](images/exchange-resources-step7.png){.thumbnail}

- Receberá um e-mail de recusa proveniente de cada conta de recurso selecionada (se o recurso não está disponível e **não assinalou** "Permitir conflitos" aquando da criação).

![mensagem de recusa](images/exchange-resources-step8.png){.thumbnail}

## Quer saber mais?

[Consultar a sua conta Exchange a partir da interface OWA](../exchange_2016_guia_de_utilizacao_do_outlook_web_app/)

[Partilhar um calendário a partir da interface OWA](../exchange_2016_partilhar_um_calendario_atraves_do_webmail_owa/)

[Partilhar uma pasta a partir da interface OWA](../exchange_2016_partilhar_uma_pasta_atraves_do_webmail_owa/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
