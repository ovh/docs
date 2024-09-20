---
title: "Partilhado: ativação da firewall"
excerpt: "Partilhado: ativação da firewall"
updated: 2024-09-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

*O ModSecurity* é um módulo Apache complementar que filtro todos os pedidos de acesso ao seu servidor Web. Aumenta a segurança contra vulnerabilidades conhecidas, intercetando e filtrando pedidos antes que sejam tratados com scripts.

O conjunto pré-configurado de regras de base, o "Core Rule Set" (CRS), do nosso *ModSecurity* protege os seus websites contra os ataques mais comuns, por exemplo:

- Trojans,
- Injeções de e-mails,
- Falha dos ficheiros PDF,
- Injeção de ficheiros no seu alojamento,
- injeção do tipo SQL ou XSS,
- etc.

**Este guia explica-lhe como ativar a firewall de aplicação a partir da Área de Cliente OVHcloud, de forma a obter uma proteção melhorada.**

> [!primary]
>
> Uma vez que o seu alojamento web está presente numa infraestrutura partilhada, a alteração dos parâmetros de configuração da firewall não está disponível.
>

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](/links/web/hosting){.external}.
- Dispor de, pelo menos, um [domínio](/links/web/domains){.external} associado ao alojamento.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}.

## Instruções

Ligue-se à sua [Área de Cliente OVHcloud](/links/manager){.external} e selecione `Web Cloud`{.action}. Na barra à esquerda, clique em `Alojamentos`{.action} e, a seguir, no alojamento correspondente.

### Ativar a firewall aplicativa na configuração PHP

Clique no separador `Informações gerais`{.action}. A `versão global de PHP` é apresentada na zona **Configuração**. Clique no botão `...`{.action} e selecione `Alterar configuração`{.action}. Na nova janela, selecione o elemento `Alterar configuração atual`{.action} e clique no botão `Seguinte`{.action}.

![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}

Na nova janela, certifique-se de que a **Aplicação Firewall** está definida em `Ativado`{.action}. Para confirmar a configuração, clique no botão `Confirmar`{.action}.

### Ativar a firewall de aplicação para os nomes de domínio individuais num multi-site

Clique no separador `Multisite`{.action} da sua oferta de alojamento. Clique no botão `...`{.action} à direita do nome de domínio em causa e selecione a opção `Alterar o domínio`{.action}.

![managemultisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Na janela de configuração, selecione a caixa `Ativar a firewall`{.action}. Também pode incluir o subdomínio `www` nesta configuração, selecionando a opção no topo.

Clique em `Seguinte`{.action} e, a seguir, em `Confirmar`{.action} para modificar os parâmetros multisite.

![modifydomain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}

### Verificar o estado da tarefa de ativação

![gestão em curso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/firewall-planned.png){.thumbnail}

As tarefas de atualização da sua configuração multi-site serão listadas no separador `Operações em curso`{.action} (o estado inicial é "Planificado"). A firewall estará ativa assim que a sua tarefa de atualização deixar de aparecer na lista.

### Verificação dos nomes de domínio para os quais a firewall está ativada

O separador `Multisite`{.action} da sua oferta de alojamento fornece informações sobre os domínios para os quais a opção de firewall está ativa.

![gerageenabled](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/firewall-enabled.png){.thumbnail}

A tabela apresentada contém todos os domínios adicionados ao alojamento web. Na coluna "Firewall", apresenta-se o estado de ativação de cada nome de domínio.

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).