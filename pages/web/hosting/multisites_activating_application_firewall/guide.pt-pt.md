---
title: 'Partilhado: ativação da firewall'
excerpt: 'Partilhado: ativação da firewall'
slug: partilhado_ativacao_da_firewall
section: Configuração do alojamento
order: 04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 26/04/2021**

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

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Dispor de, pelo menos, um [domínio](https://www.ovhcloud.com/pt/domains/){.external} associado ao alojamento.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e selecione `Web Cloud`{.action}. Na barra à esquerda, clique em `Alojamentos`{.action} e, a seguir, no alojamento correspondente.

### Ativar a firewall aplicativa na configuração PHP

Clique no separador `Informações gerais`{.action}. A `versão global de PHP` é apresentada na zona **Configuração**. Clique no botão `...`{.action} e selecione `Alterar configuração`{.action}. Na nova janela, selecione o elemento `Alterar configuração atual`{.action} e clique no botão `Seguinte`{.action}.

![managephpconfig](images/manage-php-config.png){.thumbnail}

Na nova janela, certifique-se de que a **Aplicação Firewall** está definida em `Ativado`{.action}. Para confirmar a configuração, clique no botão `Confirmar`{.action}.

### Ativar a firewall de aplicação para os nomes de domínio individuais num multi-site

Clique no separador `Multisite`{.action} da sua oferta de alojamento. Clique no botão `...`{.action} à direita do nome de domínio em causa e selecione a opção `Alterar o domínio`{.action}.

![managemultisite](images/firewall-modify-multisite.png){.thumbnail}

Na janela de configuração, selecione a caixa `Ativar a firewall`{.action}. Também pode incluir o subdomínio `www` nesta configuração, selecionando a opção no topo.

Clique em `Seguinte`{.action} e, a seguir, em `Confirmar`{.action} para modificar os parâmetros multisite.

![modifydomain](images/firewall-modify-domain.png){.thumbnail}

### Verificar o estado da tarefa de ativação

![gestão em curso](images/firewal-ongoing-jobs.png){.thumbnail}

As tarefas de atualização da sua configuração multi-site serão listadas no separador `Operações em curso`{.action} (o estado inicial é "Planificado"). A firewall estará ativa assim que a sua tarefa de atualização deixar de aparecer na lista.

### Verificação dos nomes de domínio para os quais a firewall está ativada

O separador `Multisite`{.action} da sua oferta de alojamento fornece informações sobre os domínios para os quais a opção de firewall está ativa.

![gerageenabled](images/firewall-enabled-multisite.png){.thumbnail}

A tabela apresentada contém todos os domínios adicionados ao alojamento web. Na coluna "Firewall", apresenta-se o estado de ativação de cada nome de domínio.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
