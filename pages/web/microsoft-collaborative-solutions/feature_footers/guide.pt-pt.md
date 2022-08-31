---
title: 'Criar assinaturas automáticas'
excerpt: 'Saiba como criar assinaturas automáticas nas suas contas de e-mail'
slug: exchange_20132016_assinatura_automatica_-_disclaimer
section: 'Características da conta Exchange'
order: 3
---


**Última atualização: 01/09/2020**


## Sumário

Na Área de Cliente OVHcloud, pode criar assinaturas universais (footers) para endereços de e-mail que usem o mesmo domínio (assinaturas «empresariais»). Elas serão adicionadas de forma automática a todos os e-mails que enviar.

**Este guia explica como criar assinaturas automáticas através da Área de Cliente OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Dispor de um serviço [OVHcloud Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/) ou [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/) já configurado.


## Instruções


Para efetuar esta operação, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}:

- **Exchange**: Clique em `Microsoft`{.action} na barra à esquerda e, a seguir, em `Exchange`{.action}.. 
- **Email Pro**: Clique em `Email Pro`{.action}.

A seguir, clique no nome do serviço de e-mail no qual se encontra a conta em que se encontra a criação da delegação. No menu horizontal, clique em `More+`{.action} e selecione `Footers`{.action}.

![exchangesig](images/exchange-footer-step1.png){.thumbnail}

Nesta secção, vai encontrar os seus domínios associados. Poderá criar uma assinatura para cada um deles. Clique em `...`{.action} e, a seguir, em `Configuration`{.action} para abrir o editor HTML.

![exchangesig](images/exchange-footer-step2.png){.thumbnail}

O editor oferece uma série de variáveis correspondentes aos dados do utilizador na sua configuração de conta. É possível, por exemplo, compor uma mensagem de remate genérica e acrescentar um fecho adequado ou informações de contacto por baixo. Clique na seta para escolher uma variável e, a seguir, em `Insert a variable`{.action} para a acrescentar ao painel de edição.

![exchangesig](images/exchange-footer-step3aag.gif){.thumbnail}

A assinatura é criada por meio de tags HTML, o que oferece algumas opções de formatação. Use a barra de ferramentas em cima para personalizar a assinatura. Também pode verificar o código HTML ao clicar em `Source`{.action}.
 
![exchangesig](images/exchange-footer-step4.png){.thumbnail}

Selecione a caixa «Enable the signature for outgoing mail only» para evitar que a assinatura seja adicionada a e-mails enviados a utilizadores do mesmo domínio. Clique em `Confirm`{.action} quando tiver concluído a operação. Agora, a assinatura será adicionada a todos os e-mails enviados a partir das contas associadas a este domínio. Depois de criadas, as assinaturas podem ser editadas ou eliminadas na Área de Cliente OVHcloud.

Antes de criar assinaturas, tenha em consideração o seguinte:

- Além de «Nome», «Sobrenome» e «Nome de exibição», as informações de conta não podem ser editadas a partir da Área de Cliente: elas têm de ser especificadas no OWA do utilizador («Options», «General», «My account»).

![exchangesig](images/exchange-footer-step5.png){.thumbnail}

- A assinatura será adicionada ao corpo do e-mail sem quebras, pelo que aconselhamos que a comece com pelo menos uma linha em branco.
- No OWA não se indica se o domínio tem uma assinatura ativa e **não há sincronização**. Se os utilizadores acrescentarem uma [assinatura própria](../exchange_2016_guia_de_utilizacao_do_outlook_web_app/#adicionar-assinatura), os e-mails vão incluir tanto a assinatura individual quanto a assinatura associada ao domínio.
- O editor permite formatação HTML, hiperligações, imagens, etc. Contudo, as assinaturas não deverão contar demasiado com estas opções. Os destinatários podem usar clientes de e-mail incompatíveis com HTML e imagens integradas, ou então as assinaturas podem ser exibidas de forma distorcida. Tenha em conta que as tags HTML serão removidas por completo se a mensagem for enviada como «Texto simples» a partir do OWA.
- O serviço não conta com a opção «Initials». Se introduzir esta variável, não verificará nenhum efeito.

## Saiba mais

[Guia de utilização do Outlook Web App](../exchange_2016_guia_de_utilizacao_do_outlook_web_app/)

[Atribuir permissões a uma conta de e-mail](../exchange_3013_atribuir_permissoes_full_access_a_uma_conta/)

[Partilha de calendários em OWA](../exchange_2016_partilhar_um_calendario_atraves_do_webmail_owa/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
