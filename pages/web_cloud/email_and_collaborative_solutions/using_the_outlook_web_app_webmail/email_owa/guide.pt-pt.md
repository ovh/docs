---
title: 'Utilizar o endereço de e-mail a partir do webmail Outlook Web App (OWA)'
excerpt: 'Saiba como utilizar o seu endereço de e-mail a partir do webmail OWA'
updated: 2024-09-03
---

## Sumário

Com as soluções de e-mail OVHcloud pode enviar e receber e-mails utilizando um dispositivo e um cliente à sua escolha. Para aceder a uma conta a partir de qualquer local através do seu browser, a OVHcloud disponibiliza-lhe um cliente de e-mail online denominado Outlook Web App (OWA). A nossa [página de login](/links/web/email) é o único ponto de acesso à interface OWA para todas as contas de e-mail ativas no MX Plan, Email Pro e Hosted Exchange.

**Este guia explica-lhe como desempenhar ações comuns com o seu endereço de e-mail na interface OWA.**

## Requisitos

- uma solução de e-mail OVHcloud já configurada (**MX Plan**, disponível como parte dos nossos [planos Web Hosting](/links/web/hosting), incluída num [Alojamento gratuito 100M](/links/web/domains-free-hosting) ou encomendada separadamente como solução autónoma; [**Hosted Exchange**](/links/web/emails-hosted-exchange) ou [**E-mail Pro**](/links/web/email-pro))
- credenciais de login para o endereço de e-mail que deseja configurar

## Instruções

Este guia fornece-lhe informações mais detalhadas sobre as habituais tarefas associadas à sua conta de e-mail disponível no webmail OWA. No entanto, uma vez que esta interface não foi criada pela OVHcloud, não temos capacidade de disponibilizar instruções específicas sobre quaisquer configurações não mencionadas neste guia. Relativamente às funcionalidades Exchange, preparámos alguns guias adicionais que pode encontrar mais abaixo, na secção [**Vá mais longe**](./#saiba-mais_1).

> [!primary]
>
> Após as duas primeiras etapas, as instruções não têm de ser consideradas de acordo com uma ordem particular
>

### 1. Aceder ao webmail OWA

Para entrar no webmail OWA através do seu endereço de e-mail, aceda à [página de login](/links/web/email) geral. Introduza o seu endereço de e-mail e palavra-passe e clique no botão `Login`{.action}.

![useowa](images/use-owa-step1.png){.thumbnail}

> [!warning]
> 
> Se for redirecionado para uma interface **Roundcube**, isso significa que está na versão antiga da oferta MX Plan. Para mais informações sobre a sua oferta MX Plan, consulte a nossa página [Primeiros passos com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Para se familiarizar com a interface **Roundcube**, consulte o nosso guia [Webmail: Guia de utilização do Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

Se for a primeira vez que acede ao OWA com este endereço de e-mail, ser-lhe-á pedido que defina o idioma da interface e o fuso horário. Em seguida, clique em ‘Guardar‘ {.action} para continuar.

> [!primary]
>
> Os fusos horários estão listados de acordo com [a norma UTC (tempo universal coordenado)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#/media/File:World_Time_Zones_Map.png), e não por ordem alfabética das cidades.
>
> **Exemplo** : Para a Europa Ocidental, trata-se de UTC +1 (Bruxelas, Copenhaga, Madrid, Paris).

![useowa](images/use-owa-step2.png){.thumbnail}

A partir de agora, a sua caixa de correio irá aparecer por defeito sempre que iniciar a sessão.

![useowa](images/use-owa-step3.png){.thumbnail}

### 2. Compreender a estrutura OWA

Existem várias secções na interface OWA. Para as conhecer melhor, consulte o quadro e a imagem que se seguem.

|Componentes|Descrição|  
|---|---|  
|Secção superior (1)|Contém duas barras de separadores: a primeira permite o acesso às configurações gerais (tais como [a secção de opções](./#aceder-a-seccao-de-opcoes)), e a segunda pode ser utilizada para realizar ações específicas com o seu endereço (como enviar ou responder a e-mails).|  
|Lado esquerdo (2)|Exibe a lista de pastas relativas ao seu endereço de e-mail. Estas são visualizadas numa estrutura em árvore que se pode expandir ou ocultar.|
|Segmento central (3)|Exibe a lista de mensagens (lidas e não lidas) da pasta selecionada no menu à esquerda. Esta secção pode igualmente exibir os resultados de pesquisa.|
|Lado direito (4)|Exibe o painel de leitura quando um e-mail foi selecionado.|

![useowa](images/use-owa-step4.png){.thumbnail}

Tenha em atenção que pode alterar o tamanho das secções verticais clicando e arrastando as suas linhas de contorno.

### Visualizar e-mails

Para visualizar os seus e-mails, selecione uma pasta do lado esquerdo. Os e-mails que chegarem à sua caixa de correio e não forem tratados pelas regras inbox entrarão na pasta “inbox”. Para ver se recebeu novos e-mails, verifique se aparece um número junto à respetiva pasta.

![useowa](images/use-owa-step5.png){.thumbnail}

Para ler um e-mail, selecione a sua pasta se necessário. De seguida, clique no e-mail para abrir o seu conteúdo na secção de leitura. As mensagens não lidas aparecerão com outra cor para as diferenciar das que já foram lidas.

![useowa](images/use-owa-step6.png){.thumbnail}

### Enviar e responder

**Para enviar um novo e-mail**, clique no botão `Novo`{.action} situado na parte superior da interface de webmail. O painel de edição irá surgir no lado direito. Preencha os campos necessários (destinatários, assunto, corpo da mensagem, anexos). Quando terminar, clique no botão `Enviar`{.action}.

![useowa](images/use-owa-step7.png){.thumbnail}

**Para responder a um e-mail**, [clique nele primeiro](./#visualizar-e-mails) para exibir o respetivo conteúdo. De seguida, clique no botão `Responder a todos`{.action}. Use a seta para baixo se quiser apenas responder ao remetente do e-mail (deixando de fora qualquer outro destinatário incluído).

![useowa](images/use-owa-step8.png){.thumbnail}

Ao escolher responder, aparecerá um editor de resposta rápida sobre o e-mail. Escreva a sua mensagem e, quando estiver pronto para enviar o seu e-mail, clique em `Enviar`{.action}. Note que, para aceder a todas as opções de resposta (como adicionar uma assinatura), o editor deve ser primeiro alargado, clicando no símbolo de seta dupla.

![useowa](images/use-owa-step9.png){.thumbnail}

### Organizar a sua caixa de entrada

O OWA disponibiliza várias formas de organizar a sua caixa de entrada (inbox). Pode:

- [criar pastas e subpastas](./#criar-uma-pasta)
- [mover e-mails](./#mover-e-mails)
- [configurar regras](./#criar-regras-inbox) para que algumas ações sejam realizadas automaticamente quando um novo e-mail é recebido

#### Criar uma pasta

Para criar uma pasta, clique com o botão direito do rato no seu endereço de e-mail na árvore de pastas e, de seguida, selecione `Criar nova pasta`{.action}. Pode ainda criar subpastas dentro das pastas existentes selecionando (`Criar nova subpasta`{.action}). 

![useowa](images/use-owa-step10.png){.thumbnail}

#### Mover e-mails

**Para mover um e-mail**, basta arrastá-lo e largá-lo na pasta pretendida ou clicar nele com o botão direito do rato e selecionar `Mover`{.action}.
**Para mover vários e-mails** de uma vez, selecione-os e clique em `Mover`{.action} (do lado direito) ou em `Mover para`{.action} (na secção superior). Por fim, escolha a pasta de destino.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Criar regras inbox

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/msmUN7cLSNI?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Para gerir as regras, clique no ícone de engrenagem na parte superior e, de seguida, em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Na nova página exibida, clique em `Regras inbox e varrimento`{.action} no menu situado à esquerda. Na vista de árvore do menu “Opções”, pode encontrá-lo clicando em “Mail” e, de seguida, em “Processamento automático”. A partir daqui, pode criar, editar, apagar e mover regras da lista. 

Para adicionar uma nova regra, clique no botão `+`{.action}. 

![useowa](images/use-owa-step13.png){.thumbnail}

Preencha a informação solicitada consoante a regra que pretende que seja executada. De seguida, clique em `OK`{.action}. 

![useowa](images/use-owa-step14.png){.thumbnail}

Para instruções mais detalhadas sobre como criar regras inbox, consulte o nosso guia: [Criar regras inbox no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Bloquear um remetente

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/UeNdpFwdXm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Clique no ícone de engrenagem no canto superior direito e depois em `Opções`{.action}. Na coluna da esquerda, siga a árvore "Mail" em "Contas" e, a seguir, "Bloquear ou autorizar".

Na secção "**Remetentes bloqueados**", introduza um endereço de e-mail ou um domínio a bloquear e clique no botão `+`{.action} para o adicionar na lista.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Gerir uma lista de contactos

Para gerir os seus contactos, clique no botão azul “iniciador de aplicações” situado na parte superior e, de seguida, em `Contactos`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

Nesta nova página, pode adicionar um novo contacto, criar uma lista de contactos e remover os contactos existentes.

**Para adicionar um novo contacto**, clique em `Novo`{.action} e introduza os detalhes do contacto que deseja adicionar. Quando terminar, clique em `Guardar`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

**Para criar uma lista de contactos**, clique no botão com a seta para baixo, situado junto a “Novo” e, de seguida, em `Lista de contactos`{.action}. Dê um nome à lista, adicione os contactos e, por fim, clique em `Guardar`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Alterar a palavra-passe

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/msmUN7cLSNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Pode alterar a palavra-passe da sua conta quando tiver iniciado uma sessão no OWA. Para o fazer, clique no ícone de engrenagem situado na parte superior e, de seguida, em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Na nova página, expanda o separador “Geral” na árvore situada do lado esquerdo e, de seguida, clique em `A minha conta`{.action}. Por fim, clique em `Alterar palavra-passe`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

Na janela seguinte, introduza a sua palavra-passe atual. De seguida, introduza a sua nova palavra-passe, voltando a reintroduzi-la para confirmar. Clique no botão `Guardar`{.action} para guardar a nova palavra-passe.

> [!primary]
>
> Lembre-se também de voltar a introduzir a sua nova palavra-passe em qualquer dispositivo que use para aceder a esta conta. Caso tenha algum problema com a sua palavra-passe, contacte o administrador responsável pelo seu serviço.
>

![useowa](images/use-owa-step19.png){.thumbnail}

### Adicionar uma resposta automática

Na interface OWA, pode criar uma resposta automática para o seu endereço de e-mail, de forma a não deixar qualquer e-mail sem resposta durante a sua ausência. Para o fazer, clique no ícone de engrenagem situado na parte superior e, de seguida, em `Resposta automática`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

Na janela exibida, selecione a opção "Enviar respostas automáticas". Pode então configurar o sistema de resposta automática para obedecer a alguns critérios:

- enviar e-mails de resposta automática durante um período de tempo predefinido, ou de uma forma contínua até que seja manualmente desativado
- definir que remetentes irão receber os e-mails de resposta automática (apenas os remetentes internos ou incluir os remetentes externos)

Preencha a informação solicitada dependendo da ação que deseja ver concluída. Quando terminar, clique em `OK`{.action}.

![useowa](images/use-owa-step21.png){.thumbnail}

Para instruções mais detalhadas sobre como criar respostas automáticas, consulte o nosso guia: [Criar respostas automáticas no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Adicionar assinatura

Para adicionar uma assinatura ao seu e-mail, clique no ícone de engrenagem situado na parte superior e, de seguida, em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

No lado esquerdo da nova página, clique em `Assinatura e-mail`{.action}. Na árvore de opções, encontrará esta opção selecionando “Mail” e depois “Estrutura”. A partir daqui, pode gerir, desativar e editar a assinatura.

![useowa](images/use-owa-step22.png){.thumbnail}

Componha a sua assinatura eletrónica no editor de texto. Pode especificar se deseja incluir a assinatura por defeito apenas nos novos e-mails ou também nas respostas e reencaminhamentos efetuados. Quando terminar, clique em `Guardar`{.action} para confirmar.

Para mais instruções sobre como criar assinaturas automáticas através da utilização de modelos padronizados, consulte o nosso guia: [Criar assinaturas automáticas](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Aceder à secção de opções

Para aceder a todas as suas configurações, clique no ícone de engrenagem situado na parte superior e, de seguida, em `Opções`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Depois aceda à vista de árvore do menu “Opções” situado do lado esquerdo da página. Aqui poderá fazer mais ajustes à estrutura e ao comportamento da sua conta de e-mail. Tenha em atenção que algumas opções da conta podem ser desativadas por nós por razões de segurança.

![useowa](images/use-owa-step23.png){.thumbnail}

### Gestão dos cookies

O webmail que é utilizado para as nossas ofertas de e-mail está baseado no software Microsoft Outlook Web App. Portanto, é suscetível de trocar metadados com os servidores da Microsoft, sob a forma de cookies designados `appsforoffice.microsoft.com`.

Se pretender desativar esta troca de informações, pode utilizar no seu browser uma extensão do tipo de bloqueador de conteúdos (como o uBlock Origin ou Ghostery).
A desativação destes cookies pode afetar a estabilidade do webmail.

## Saiba mais

[Criar respostas automáticas no OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Partilhar uma pasta através do webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Partilhar calendários em OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Utilização de grupos de difusão (mailing lists)](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.