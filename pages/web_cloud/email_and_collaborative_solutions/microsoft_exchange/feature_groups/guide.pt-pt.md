---
title: 'Utilização de grupos de difusão (mailing lists)'
excerpt: 'Saiba como gerir grupos de difusão (mailing lists) no Exchange'
updated: 2020-02-26
---

## Sumário

Os grupos Exchange permitem que vários participantes comuniquem ao enviarem emails para um endereço coletivo único. Graças a esta característica colaborativa, é possível criar e gerir grupos de difusão (mailing lists) que incluem tanto utilizadores Exchange quanto contactos externos.

**Este guia explica como usar os grupos Exchange através da Área de Cliente OVHcloud e do Outlook Web App (OWA).**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Dispor de uma [solução Exchange OVHcloud](https://www.ovhcloud.com/pt/emails/hosted-exchange/).

## Instruções

### Passo 1: Criar um novo grupo

Antes de mais, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique na secção `Webcloud`{.action} e selecione o serviço Exchange na coluna sob `Microsoft`{.action} `Exchange`{.action} à esquerda. De seguida clique em `Grupos`{.action}, no menu horizontal.

![contactgroups](images/exchange-groups-step1.png){.thumbnail}

Ao clicar em `Criar um grupo de contacto`{.action}, aparecerá uma janela onde poderá definir as características do grupo:

![contactgroups](images/exchange-groups-step2.png){.thumbnail}

|Nome|Descrição|
|---|---|
|Endereço de e-mail|Novo endereço que enviará mensagens ao grupo de difusão. Atenção: não pode introduzir um endereço de email já existente.|
|Nome do grupo|Nome de exibição na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e no [webmail OVHcloud](https://www.ovh.pt/mail/) (OWA).|
|Tamanho máx. entrada / saída|Pode especificar o tamanho máximo dos emails recebidos e enviados.|
|Ocultar no Outlook|Se selecionar esta opção, o endereço de grupo não vai aparecer na lista de endereços do serviço Exchange.|
|Autenticação necessária|Se selecionar esta opção, apenas os membros do grupo poderão enviar mensagens através do endereço coletivo.|

> [!primary]
>
Atenção: as opções «Gerir subscrições» e «Gerir cancelamentos» foram desativadas pelos nossos administradores por razões de segurança. Lamentamos qualquer inconveniência.
>

Clique `Seguinte`{.action} para continuar.

Na segunda página, defina os membros do grupo e escolha os «Administradores». As escolhas só abrangerão endereços de email e contactos externos que já existam no serviço.

![contactgroups](images/exchange-groups-step3.png){.thumbnail}

Atenção: os Administradores também têm de ser definidos como «Contactos» de modo a receber emails coletivos.
Clique em `Seguinte`{.action} para continuar e conclua o processo de escolha clicando em `Confirmar`{.action}.

### Passo 2: Gerir grupos

Os grupos recém-criados ficarão operacionais dentro de poucos minutos. Pode ajustar as opções descritas acima a partir da lista de difusão. Para isso, clique em `...`{.action} e selecione-as no menu. 

![contactgroups](images/exchange-groups-step4.png){.thumbnail}

Terá igualmente acesso à opção `Gerir permissões`{.action}. Ela permite-lhe atribuir acesso tal como para uma conta Exchange. Mais informações [neste guia](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation).

![contactgroups](images/exchange-groups-step5.png){.thumbnail}

> [!primary]
>
Atenção: as alterações feitas podem levar alguns minutos a entrar em vigor. Se desejar consultar o estado da maioria das operações, selecione `Mais+`{.action} e `Tarefas recentes`{.action} no menu horizontal.
>

### Passo 3: Enviar um email coletivo em OWA

Já pode testar a sua lista de difusão (mailing list) através do [webmail OVHcloud](https://www.ovh.pt/mail/) (OWA). Para isso, basta enviar um email para o endereço coletivo.

![contactgroups](images/exchange-groups-step6.png){.thumbnail}

## Saiba mais

[Atribuir permissões a uma conta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[Guia de utilização do Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Partilhar calendários em OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.