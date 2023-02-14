---
title: "Criar uma snapshot de um volume"
slug: creating-volume-snapshot
excerpt: 'Saiba como criar uma snapshot de um disco adicional Public Cloud'
section: Armazenamento
order: 2
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 13/01/2023**

## Objetivo

Criar uma snapshot com um volume adicional corresponde geralmente a dois objetivos:

- efetuar backups em apenas alguns cliques e mantê-los durante o tempo necessário;
- utilizar a snapshot como modelo para volumes idênticos.

**Este manual explica-lhe como criar uma snapshot de um volume a partir da Área de Cliente OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Um volume [Block Storage](../criar_e_configurar_um_disco_suplementar_numa_instancia/) criado no seu projeto [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/)

## Instruções

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em questão. A seguir, clique em `Block Storage`{.action} na barra de navegação da esquerda, na **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

À direita do volume em questão, clique em `...`{.action} e depois em `Criar uma snapshot`{.action} (não é necessário desassociar primeiro o volume da sua instância.)

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

Na nova janela, pode atribuir um nome diferente à snapshot. Leia as informações tarifárias e clique em `Criar uma snapshot`{.action}.

O tempo de criação da snapshot depende da quantidade de dados presentes no volume, da utilização dos recursos da instância no momento da snapshot e de outros fatores específicos ao host.

Recomendamos que efetue as suas snapshots fora das horas de produção.

Eis algumas outras boas práticas:

- evite criar snapshots nas horas de ponta (entre as 04h00 e as 22h00, hora de Paris);
- instale o agente qemu se não o fez ou tente desativá-lo se necessário;
- tente não "solicitar" demasiado o servidor durante a fase de criação da snapshot (limitação de I/O, consumo de RAM, etc.).

Uma snapshot de volume é um clone do conjunto do disco, pelo que terá o tamanho máximo do volume de origem, independentemente da atribuição real de espaço em disco.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Abra a secção `Volume Snapshot`{.action} na barra à esquerda. Depois de criada a snapshot, esta será adicionada à tabela.

Clique no botão `...`{.action} para eliminar uma snapshot ou `Criar um volume`{.action} a partir da snapshot correspondente. Para mais informações, consulte [este guia](../create-volume-from-backup/).

## Quer saber mais?

[Criar um volume a partir de um backup](../create-volume-from-backup/)

[Criar e configurar um disco suplementar numa instância](../criar_e_configurar_um_disco_suplementar_numa_instancia/)

[Aumentar o tamanho de um disco suplementar](../aumentar_o_tamanho_de_um_disco_suplementar/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.