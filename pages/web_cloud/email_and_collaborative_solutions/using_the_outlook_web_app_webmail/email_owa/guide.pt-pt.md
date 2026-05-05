---
title: 'Utilizar o endereço de e-mail a partir do webmail Outlook Web App (OWA)'
excerpt: 'Saiba como utilizar o seu endereço de e-mail a partir do webmail OWA'
updated: 2026-05-04
---

## Objetivo

Com as soluções de e-mail OVHcloud, pode enviar e receber os seus e-mails a partir de um dispositivo e de um cliente à sua escolha. A OVHcloud disponibiliza um serviço de mensagens online denominado Outlook Web App (OWA) que permite, através de um browser, aceder a uma conta a partir de qualquer local. Todas as contas de e-mail ativas no MX Plan, E-mail Pro e Hosted Exchange têm um único ponto de acesso à interface OWA correspondente: a nossa página de [acesso ao webmail](/links/web/email).

**Saiba como executar ações comuns com o seu endereço de e-mail a partir da interface OWA.**

## Requisitos

- Dispor de uma solução de e-mail OVHcloud previamente configurada, entre as ofertas seguintes:
    - [**MX Plan**](/links/web/hosting), proposto com as nossas ofertas de alojamento web, incluído no [alojamento gratuito 100M](/links/web/domains-free-hosting) ou encomendado como solução autónoma;
    - [**Hosted Exchange**](/links/web/emails-hosted-exchange);
    - [**E-mail Pro**](/links/web/email-pro).
- Conhecer as credenciais de acesso do endereço de e-mail a utilizar.

## Instruções

Este guia permite-lhe compreender melhor as tarefas habituais disponíveis numa conta de e-mail no OWA. No entanto, dado que esta interface não foi originalmente criada pela OVHcloud, não podemos disponibilizar instruções específicas sobre parâmetros não abordados neste guia.

Relativamente às funcionalidades específicas do Exchange, encontrará alguns guias adicionais na secção [Quer saber mais?](./#quer-saber-mais) no final deste guia.

> [!primary]
>
> Após o acesso e a familiarização com a interface, não é necessário seguir as instruções pela ordem indicada.

### Aceder ao OWA

Para aceder ao OWA com o seu endereço de e-mail, abra a página de [acesso ao webmail](/links/web/email). Introduza por completo o seu endereço de e-mail e a sua palavra-passe. Em seguida, clique em `Iniciar sessão`{.action}.

![useowa](images/use-owa-step1.png){.thumbnail}

> [!warning]
>
> Se for redirecionado para uma interface **Roundcube**, isso significa que está na versão antiga da oferta MX Plan. Para mais informações sobre a sua oferta MX Plan, consulte a nossa página [Primeiros passos com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Para se familiarizar com a interface **Roundcube**, consulte o nosso guia [Utilizar o endereço de e-mail a partir do webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

Se for a primeira vez que acede ao OWA com este endereço de e-mail, ser-lhe-á pedido que defina o idioma da interface, bem como o fuso horário. Em seguida, clique em `Guardar`{.action} para continuar.

> [!primary]
>
> Os fusos horários estão listados de acordo com [a norma UTC (tempo universal coordenado)](https://pt.wikipedia.org/wiki/Tempo_Universal_Coordenado), e não por ordem alfabética das cidades.
>
> **Exemplo**: Para a Europa Ocidental, trata-se de UTC +1 (Bruxelas, Copenhaga, Madrid, Paris).

![useowa](images/use-owa-step2.png){.thumbnail}

A partir de agora, a sua caixa de entrada será apresentada por defeito sempre que iniciar sessão.

![useowa](images/use-owa-step3.png){.thumbnail}

### Compreender a apresentação do OWA

A interface OWA contém várias secções. Consulte o quadro e a imagem abaixo para se familiarizar com a mesma.

|Componentes|Descrição|
|---|---|
|Secção superior (1)|Dispõe de duas barras de separadores: a primeira permite aceder aos parâmetros gerais (tais como a [secção Opções](./#aceder-a-seccao-opcoes)). A segunda barra pode ser utilizada para ações específicas com o seu endereço (tais como o envio ou a resposta a e-mails).|
|Lado esquerdo (2)|Apresenta a lista de pastas do seu endereço de e-mail. Estas pastas apresentam-se sob a forma de uma árvore que pode expandir ou ocultar.|
|Segmento central (3)|Apresenta a lista de mensagens (lidas e não lidas) da pasta selecionada no menu da esquerda. Esta secção pode também apresentar os resultados de pesquisa.|
|Lado direito (4)|Apresenta o painel de leitura quando um e-mail foi selecionado.|

![useowa](images/use-owa-step4.png){.thumbnail}

Tenha em atenção que pode alterar o tamanho das secções verticais clicando e arrastando as suas linhas de contorno.

### Visualizar os e-mails

Para consultar os seus e-mails, selecione uma pasta no lado esquerdo. Os e-mails recebidos que não sejam tratados pelas regras de mensagens serão apresentados na pasta "Caixa de entrada". Para saber se recebeu novos e-mails, verifique se aparece um número junto à pasta correspondente.

![useowa](images/use-owa-step5.png){.thumbnail}

Para ler um e-mail, selecione a respetiva pasta se necessário. Em seguida, clique no e-mail para apresentar o seu conteúdo no painel de leitura. As mensagens não lidas aparecem a negrito para as distinguir das mensagens lidas.

![useowa](images/use-owa-step6.png){.thumbnail}

### Ordenar e filtrar os e-mails

Na parte superior direita da lista de mensagens, o botão `Filtro`{.action} abre um menu que reúne todas as opções de apresentação da pasta selecionada.

- **Filtrar por categoria**: selecione uma entrada para apresentar apenas uma seleção de e-mails entre `Tudo`{.action}, `Não lidas`{.action}, `Para mim`{.action} (e-mails enviados diretamente para o seu endereço), `Com sinalizador`{.action} (e-mails sinalizados para acompanhamento) ou `Menções`{.action} (e-mails nos quais o seu endereço é mencionado).

- **Ordenar por**: passe o cursor sobre a entrada `Ordenar por`{.action} para escolher o critério de ordenação dos e-mails: **Data**, **De**, **Para**, **Assunto**, **Anexos**, **Importância** ou **Tamanho**. A seta à esquerda do critério indica a ordem atual; clique novamente no mesmo critério para a inverter.

- **Apresentar como**: passe o cursor sobre a entrada `Apresentar como`{.action} para alternar entre a visualização **Mensagens** (um e-mail por linha) ou **Conversações** (e-mails agrupados por fio de discussão).

### Enviar e responder

Para **enviar uma nova mensagem**, clique no ícone `Novo`{.action} na parte superior da interface OWA. O painel de edição será apresentado no lado direito. Preencha os campos do seu e-mail (destinatários, assunto, corpo da mensagem, anexos). Clique em `Enviar`{.action} quando o seu e-mail estiver redigido.

![useowa](images/use-owa-step7.png){.thumbnail}

Para **responder a uma mensagem**, clique primeiro nela para a apresentar. Em seguida, clique em `Responder a todos`{.action} para responder ao conjunto dos destinatários. Utilize o botão de seta para baixo se pretender apenas responder ao remetente do e-mail (excluindo qualquer destinatário em cópia) e clique em `Responder`{.action}.

![useowa](images/use-owa-step8.png){.thumbnail}

Quando opta por responder, o editor de resposta rápida aparece por cima do e-mail. Introduza aí a sua resposta e, assim que estiver pronto para enviar a mensagem, clique em `Enviar`{.action}. Tenha em atenção que, para cada opção de resposta (como adicionar uma assinatura), deve primeiro alargá-la a todo o painel de edição clicando no símbolo de seta dupla.

![useowa](images/use-owa-step9.png){.thumbnail}

### Organizar a sua caixa de correio

O OWA propõe várias formas de organizar a sua caixa de correio. Pode:

- [criar pastas e subpastas](./#criar-uma-pasta),
- [mover e-mails](./#mover-e-mails),
- [definir regras](./#criar-regras-de-gestao-da-caixa-de-correio) para executar automaticamente ações ao receber um novo e-mail,
- [bloquear um remetente](./#bloquear-um-remetente) para deixar de receber as suas mensagens.

#### Criar uma pasta

Para criar uma nova pasta, clique com o botão direito do rato sobre o nome do seu endereço de e-mail na árvore de pastas e, em seguida, escolha `Criar nova pasta`{.action}. Pode criar uma subpasta dentro de pastas existentes da mesma forma, clicando em `Criar nova subpasta`{.action}.

![useowa](images/use-owa-step10.png){.thumbnail}

#### Mover e-mails

Para **mover um e-mail**, basta arrastá-lo e largá-lo na pasta de destino ou clicar com o botão direito do rato e selecionar `Mover`{.action}.
Para **mover vários e-mails** simultaneamente, selecione-os todos através da respetiva caixa de seleção. Em seguida, clique em `Mover`{.action} (no lado direito) ou em `Mover para`{.action} (na secção superior). Escolha depois a pasta de destino.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Criar regras de gestão da caixa de correio

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Para criar e gerir regras, clique primeiro no ícone de engrenagem na parte superior e, em seguida, em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Na nova página apresentada, clique em `Regras de caixa de entrada e de organização`{.action} no menu da esquerda. Na árvore "Opções", pode encontrar esta funcionalidade em "Mail", em "Processamento automático". Aqui, pode criar, modificar e deslocar regras da lista.

Para adicionar uma nova regra, clique no botão `+`{.action}.

![useowa](images/use-owa-step13.png){.thumbnail}

Preencha as informações solicitadas em função da tarefa que pretende executar com esta regra. Em seguida, clique em `OK`{.action}.

![useowa](images/use-owa-step14.png){.thumbnail}

Para instruções mais detalhadas sobre a criação de regras de gestão da caixa de correio, consulte o nosso guia: [Criação de regras de gestão da caixa de correio no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Bloquear um remetente

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Clique no ícone de engrenagem no canto superior direito e, em seguida, clique em `Opções`{.action}. Sempre na coluna da esquerda, percorra a árvore "Mail" em "Contas" e, em seguida, "Bloquear ou autorizar".

Na secção "**Remetentes bloqueados**", introduza um endereço de e-mail ou um nome de domínio a bloquear e clique no botão `+`{.action} para o adicionar à lista.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Gerir os seus contactos

Para gerir os seus contactos, clique primeiro no botão azul do iniciador de aplicações no canto superior esquerdo da página (que dá igualmente acesso ao calendário, às tarefas e a outros módulos) e, em seguida, em `Contactos`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

Na nova página, pode adicionar um novo contacto, criar uma lista de contactos e eliminar contactos existentes.

#### Adicionar um contacto

Clique em `Novo`{.action} e introduza os dados do contacto a adicionar. Quando terminar, clique em `Guardar`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

#### Criar uma lista de contactos

Clique na seta para baixo junto a `Novo`{.action} e, em seguida, em `Lista de contactos`{.action}. Atribua-lhe um nome, adicione contactos e clique em `Guardar`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Alterar a palavra-passe

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Pode alterar a palavra-passe da sua conta quando tiver iniciado sessão no OWA. Para o fazer, clique no ícone de engrenagem na parte superior e, em seguida, clique em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Na nova página, expanda o separador "Geral" na árvore da esquerda e, em seguida, clique em `A minha conta`{.action}. Por fim, clique em `Alterar a sua palavra-passe`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

Na nova janela apresentada, introduza a sua palavra-passe atual. Em seguida, introduza uma nova palavra-passe e confirme-a, voltando a introduzi-la. Clique em `Guardar`{.action} para guardar a nova palavra-passe.

> [!primary]
>
> Não se esqueça de introduzir a sua nova palavra-passe em todos os dispositivos utilizados para aceder a esta conta (por exemplo, no software de cliente de e-mail). Em caso de dificuldades com a sua palavra-passe, contacte o administrador de serviços.

![useowa](images/use-owa-step19.png){.thumbnail}

### Adicionar resposta automática

No OWA, pode criar um sistema de resposta automática na sua caixa de correio para não deixar e-mails sem resposta durante as suas ausências. Para o fazer, clique no ícone de engrenagem na parte superior e, em seguida, clique em `Respostas automáticas`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

Na janela apresentada, selecione a opção "Enviar respostas automáticas". Pode então configurar a resposta automática para responder a vários critérios, tais como:

- enviar e-mails de resposta automática durante um intervalo de tempo fixo, ou continuamente até ser desativada manualmente
- definir os remetentes que receberão os e-mails de resposta automática (apenas remetentes internos, ou incluir os remetentes externos)

Preencha as informações solicitadas em função da tarefa que pretende executar com esta regra. Quando terminar, clique em `OK`{.action}.

![useowa](images/use-owa-step21.png){.thumbnail}

Para instruções mais detalhadas sobre a criação de respostas automáticas, consulte o nosso guia: [Criar respostas automáticas no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Adicionar uma assinatura

Para adicionar uma assinatura eletrónica, clique no ícone de engrenagem na parte superior e, em seguida, clique em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

No lado esquerdo da nova página, clique em `Assinatura de e-mail`{.action}. Nas opções da árvore, este elemento encontra-se em "Mail" e "Esquema". A partir daqui, pode ativar, desativar e modificar a assinatura.

![useowa](images/use-owa-step22.png){.thumbnail}

Componha a sua assinatura eletrónica na caixa de edição. Pode especificar se pretende incluir a assinatura por defeito apenas nos novos e-mails ou também nas respostas e nos e-mails reencaminhados. Quando terminar, clique em `Guardar`{.action} para confirmar.

Para obter instruções sobre a criação de assinaturas automáticas utilizando modelos para todo o domínio, consulte o nosso guia: [Criar assinaturas automáticas](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Aceder à secção Opções

Para aceder a todos os seus parâmetros, clique no ícone de engrenagem na parte superior e, em seguida, clique em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Pode em seguida navegar na árvore "Opções" no lado esquerdo da página. Outros ajustes da apresentação e do comportamento da sua conta de e-mail podem ser efetuados a partir desta página. Tenha em atenção que, por motivos de segurança, algumas opções da conta podem ser desativadas pela OVHcloud.

![useowa](images/use-owa-step23.png){.thumbnail}

### Gestão dos cookies

O webmail utilizado para as nossas ofertas de e-mail baseia-se no software Microsoft Outlook Web App. É, portanto, suscetível de trocar metadados com os servidores da Microsoft, sob a forma de cookies denominados `appsforoffice.microsoft.com`.

Se pretender desativar estas trocas, pode utilizar no seu browser uma extensão do tipo bloqueador de conteúdos (como o uBlock Origin ou o Ghostery).
A desativação destes cookies pode, no entanto, afetar a estabilidade do seu webmail.

## Quer saber mais?

[Criação de respostas automáticas no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Partilhar uma pasta a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Partilhar calendários através da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Criar um grupo de contactos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Fale com a nossa [comunidade de utilizadores](/links/community).
