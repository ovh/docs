---
title: Criar um Alerta
routes:
    canonical: 'https://docs.ovh.com/pt/private-cloud/criar_um_alerta/'
excerpt: Configure alertas no seu cliente vSphere
slug: criar-um-alerta
section: Gestão das máquinas virtuais
order: 09
updated: 2020-11-18
---

**Última atualização: 18/11/2020**

## Objetivo

É possível criar um alerta sobre todos os elementos do seu Managed Bare Metal: o próprio datacenter, os clusters, as VM, os datastores, a rede...

**Este manual explica como criar alertas.**

## Requisitos

- Ter um produto [Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/){.external}.
- Estar ligado à [interface vSphere](../instalar_o_vsphere_client/).

## Instruções

### Criar um alerta

Para criar um alerta, clique com o botão direito do rato no datacenter ou outro elemento que pretende vigiar, e a seguir clique em `Alarms`{.action} > `New Alarm Definition`{.action}.

![criação alerta](images/alarms01.png){.thumbnail}

### Definir um nome e um objetivo

O primeiro passo consiste em atribuir um nome ao alerta e definir o seu objetivo. Pode também adicionar uma descrição.

![nome e objetivo do alerta](images/alarms02.png){.thumbnail}

### Definir as regras do alerta

O segundo passo consiste em definir as regras do alerta e as consequentes ações.

O campo `IF` permite-lhe definir um desencadeador do alerta a partir de uma seleção de variáveis. Em função da variável escolhida, uma lista de argumento lhe será apresentada.

O campo `THEN` permite indicar que o alerta é ativado com um certo nível de criticidade e incorrerá em ações tais como o envio de um e-mail, a execução de um script ou a interrupção de uma VM.

![regras do alerta](images/alarms03.png){.thumbnail}

Assim, poderá monitorizar a RAM de um host, por exemplo, indicando um limite que não deve ser ultrapassado antes que o alerta seja ativado e receberá um e-mail de aviso.

> [!primary]
> Pode adicionar várias regras ao seu alerta clicando em `ADD ANOTHER RULE`{.action}.
>

### Interrupção do alerta

O terceiro passo permite-lhe definir os critérios de fim do alerta e ativar novas ações.

![interrupção do alerta](images/alarms04.png){.thumbnail}

### Resumo do alerta

O último passo apresenta-lhe um resumo das regras definidas. Pode ativar o alerta selecionando o cursor ou optando por o ativar mais tarde clicando com o botão direito do rato no elemento escolhido, e clicando em `Alarms`{.action} > `Enable Alarm Actions`{.action}.

![resumo do alerta](images/alarms05.png){.thumbnail}

Além disso, também poderá configurar neste passo a frequência de repetição dos alertas.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
