---
title: 'Ativar a dupla autenticação com chave de segurança'
slug: ativar-a-dupla-autenticacao-com-chave-de-seguranca
excerpt: 'Descubra como proteger a sua área de cliente OVHcloud, permitindo a autenticação dupla com chave de segurança U2F'
section: Segurança
hidden: true
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 08/07/2022**

## Objetivo

A dupla autenticação com chave de segurança Universal Second Factor (U2F) é um dos métodos propostos pela OVHcloud para lhe permitir um acesso seguro à sua conta. Esta técnica de proteção com uma pen USB, cada vez mais utilizada para dupla autenticação em muitos domínios, pertence à FIDO Alliance.

**Este guia permitirá ativar a autenticação dupla com chave de segurança U2F e entender como utilizá-la para os seus próximos acessos à sua área de cliente.**

## Requisitos

- Estar familiarizado com os [diferentes métodos de autenticação dupla oferecidos pela OVHcloud](https://docs.ovh.com/pt/customer/proteger-a-sua-conta-com-uma-2FA/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Dispor de uma chave de segurança U2F.
- Dispor de uma entrada USB no seu computador.

## Instruções

> [!warning]
> **Adição de uma nova chave U2F nas versões recentes de Chrome/Chromium**
>
> A adição de uma nova chave U2F já não é possível nas versões recentes do browser Chrome (a partir de Chrome v98) e seus derivados como Chromium.<br>
> A utilização de uma chave U2F já adicionada e funcional é sempre possível nestas versões recentes do browser, apenas a adição de uma nova chave U2F é impossível.
>
> As nossas equipas [trabalham para resolver este problema](https://customer-service.status-ovhcloud.com/incidents/wl6txzgvrym8). Enquanto aguardamos uma resolução definitiva, convidamo-lo a seguir um destes dois métodos de contornar:
>
> - Utilize outro browser (como o Firefox) para adicionar a sua nova chave U2F e, a seguir, utilize o seu browser Crome/Chromium habitual para se ligar à Área de Cliente OVHcloud da forma habitual.
> - Reative o suporte da funcionalidade U2F no seu browser Chrome/Chromium. Para isso, como na imagem abaixo, copie este valor `chrome://flags/#u2f-security-key-api` para a barra de endereços do browser, selecione Enabled` no menu pendente à direita e reinicie o seu browser.
>
>![2FA securitykey - Chrome](images/chrome-u2f-support.png){.thumbnail}

### Etapa 1: ativar a dupla autenticação

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique no seu nome no canto superior direito (1) e clique em suas iniciais (2). A seguir, clique em `Segurança`{.action} (3) e por fim em `Ativar a dupla autenticação`{.action} (4).

![2FA securitykey](images/hub2FA.png){.thumbnail}

### Etapa 2: Escolher o método com chave de segurança

Escolha o método com chave de segurança e valide.

![2FA securitykey](images/2fakey1edit.png){.thumbnail}

### Etapa 3: validar a dupla autenticação

Ligue a sua chave de segurança quando isso lhe for pedido. Se estiver equipada com um botão, prima o botão. 

![2FA securitykey](images/2fakey2.png){.thumbnail}

Quando a chave for reconhecida, pode também adicionar uma descrição. Isto pode ser útil para identificar pessoas que possam usar este método de autenticação na sua conta.

![2FA securitykey](images/2fakey3.png){.thumbnail}

### Etapa 4: guardar os códigos de segurança

A primeira vez que adicionar um método de segurança de autenticação dupla, os códigos de segurança ser-lhe-ão comunicados. Devem ser guardados preciosamente. Aconselhamo-lo a guardá-los num gestor de palavras-passe.

![2FA securitykey](images/2facodes.png){.thumbnail}

Poderá eliminá-los ou gerá-los novamente na sua área de cliente:

![2FA securitykey](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> Lembramos que é essencial guardar esses códigos de segurança e garantir que eles sejam válidos. Se o(s) método(s) de segurança selecionado(s) não estiver(em) disponível(eis) (furto ou perda do seu telefone ou da chave de segurança), o acesso à sua área de cliente pode ser bloqueado
> 

### Etapa 5: aceder à área de cliente com a dupla autenticação

Quando a autenticação com dois fatores estiver ativada, o ecrã de acesso apresentará um dos seus métodos de segurança.
 Se deseja utilizar outro método, clique no botão `Experimentar outro método`{.action}.

![2FA securitykey](images/2fakeylogin.png){.thumbnail}

Todas as escolhas que ativou aparecerão então:

![2FA securitykey](images/2faloginchoice.png){.thumbnail}

## Quer saber mais?

O site oficial da [FIDO Alliance](https://fidoalliance.org/){.external}.

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.