---
title: Gestão de snapshots de uma instância na interface Horizon
excerpt: Como gerir as snapshots de uma instância na interface Horizon
slug: gestao_de_snapshots_de_uma_instancia_na_interface_horizon
legacy_guide_number: g1770
section: Gestão a partir do Horizon
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 02/02/2022**

## Objetivo

Na sua atividade, terá certamente de efetuar o backup dos seus dados, das suas configurações e isto inclui as suas instâncias.<br>
Para tal, é possível que crie snapshots das suas instâncias, podendo utilizar estas instâncias para restaurar a sua instância para uma configuração anterior ou para criar uma cópia exata da mesma.

**Este guia explica-lhe como gerir estas snapshots a partir da interface OpenStack Horizon.**

## Requisitos

- Ter [criado uma instância Public Cloud](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#3o-passo-criacao-de-uma-instancia) na sua conta OVHcloud
- [Ter acesso à interface Horizon](../horizon/)

## Instruções

### Criação da snapshot

Ligue-se à interface Horizon e certifique-se de que está na região certa. Podem verificá-lo no canto superior esquerdo. 

![Seleção da região](images/region2021.png){.thumbnail}

Clique no menu `Compute`{.action} à esquerda e, a seguir, em `Instances`{.action}. Clique em `Create Snapshot`{.action} na linha da instância correspondente.

![Snapshot](images/createsnapshot.png){.thumbnail}

Na nova janela, introduza as informações necessárias:

* Snapshot Name: defina um nome para a snapshot e clique em `Create Snapshot`{.action}.

![Snapshot](images/createsnapshot2.png){.thumbnail}

A snapshot será depois listada na secção `Images`{.action}. Por isso, é aconselhável atribuir um nome explícito a cada snapshot. 

### Eliminação de uma snapshot

No interface horizon, clique no menu `Compute`{.action} à esquerda e, a seguir, em `Images`{.action}.

A seguir, clique na seta pendente junto da snapshot a eliminar e clique em `Delete Image`{.action}. Confirme a eliminação da snapshot.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>
