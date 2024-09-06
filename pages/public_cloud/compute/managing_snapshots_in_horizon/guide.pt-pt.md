---
title: Gestão de snapshots de uma instância na interface Horizon
excerpt: Como gerir as snapshots de uma instância na interface Horizon
updated: 2024-09-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Na sua atividade, terá certamente de efetuar o backup dos seus dados, das suas configurações e isto inclui as suas instâncias.<br>
Para tal, é possível que crie snapshots das suas instâncias, podendo utilizar estas instâncias para restaurar a sua instância para uma configuração anterior ou para criar uma cópia exata da mesma.

**Este guia explica-lhe como gerir estas snapshots a partir da interface OpenStack Horizon.**

## Requisitos

- Ter [criado uma instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) na sua conta OVHcloud
- [Ter acesso à interface Horizon](/pages/public_cloud/compute/introducing_horizon)

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

### Restauro de uma snapshot

É possível restaurar uma snapshot criando uma nova instância a partir desta.

Na interface Horizon, clique no menu `Compute`{.action} à esquerda e, a seguir, em `Images`{.action}.

Clique em `Launch`{.action} junto da snapshot selecionada.

![restore snapshot](images/restornapshot.png){.thumbnail}

Na janela pop-up, é necessário selecionar várias opções para concluir o restauro da snapshot.

> [!tabs]
> **Details**
>>
>> **Nome da instância (*Instance name*):** Indique o nome pretendido para a instância.<br>
>> **Count:** Selecione o número de instâncias a executar a partir da snapshot.<br><br>
>>![snapshot](images/restornapshot1.png){.thumbnail}<br>
>>
> **Flavor**
>>
>> Selecione o *flavor* desejado. Certifique-se de que seleciona uma versão com recursos iguais ou superiores ao tamanho da imagem (snapshot).<br><br>>
>>![network](images/restornapshot2.png){.thumbnail}<br>
>>
> **Rede (*Network*)**
>>
>> Selecione uma rede pública (Ext-Net) a associar à instância.<br><br>
>>![network](images/restornapshot3.png){.thumbnail}<br>
>>
> **Keypair**
>>
>> Selecione (3), crie (1) ou importe (2) um par de chaves.<br><br>>
>>![network](images/restornapshot4.png){.thumbnail}<br>
>>

Depois de fazer isso, clique em `Launch Instance`{.action} para iniciar a criação da sua instância.

### Eliminação de uma snapshot

No interface horizon, clique no menu `Compute`{.action} à esquerda e, a seguir, em `Images`{.action}.

A seguir, clique na seta pendente junto da snapshot a eliminar e clique em `Delete Image`{.action}. Confirme a eliminação da snapshot.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
