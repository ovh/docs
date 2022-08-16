---
title: Criar um volume a partir de um backup
slug: create-volume-from-backup
excerpt: Saiba como criar discos adicionais a partir de um backup de um disco suplementar
section: 'Armazenamento'
order: 4
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 02/04/2021**

## Objetivo

Pode criar discos suplementares para as suas instâncias Public Cloud a partir da cópia de segurança de um disco suplementar.

Tal pode ser útil nos seguintes casos:

- Se deseja restaurar os dados do disco suplementares.
- Se deseja dispor de um espaço de armazenamento de alta disponibilidade e de alta performance com os seus dados.
- Se pretender mover os seus dados para outra instância.

**Saiba como criar e configurar um disco adicional numa das suas instâncias a partir da cópia de segurança de um disco.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} na sua conta OVHcloud.
- Ter um backup de disco na mesma região OpenStack.
- Ter acesso à instância via SSH enquanto administrador (root).

## Instruções

### Criar o disco a partir de um backup

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em questão. A seguir, clique em `Volume Snapshot`{.action} na barra de navegação da esquerda, na `secção Storage`.

À direita do backup à sua escolha, clique no botão `...`{.action} e em `Criar um volume`{.action}.

![criar](images/volume01.png){.thumbnail}

Defina o nome e a capacidade deste novo disco e clique em `Criar o volume`{.action}.

![criar](images/volume02.png){.thumbnail}

A criação do disco pode levar alguns minutos, dependendo do seu tamanho.

### Associar o disco a uma instância

Depois de criar o disco, pode decidir associá-lo a uma instância. Para isso, clique em `Block Storage`{.action} na barra de navegação à esquerda, abaixo de `Storage`.

À direita do volume à sua escolha, clique no botão `...`{.action} e em `Associar a instância`{.action}.

![associar volume](images/volume03.png){.thumbnail}

Selecione a instância e clique em `Confirmar`{.action} para associar o disco.

![associar volume](images/volume04.png){.thumbnail}

O processo de conexão do disco à sua instância vai então começar e pode levar alguns minutos.

![associar volume](images/volume05.png){.thumbnail}

> [!warning]
Deve evitar a navegação fora do separador em curso durante a conexão do disco. Isto pode interromper o processo.
>

Uma vez efetuada a associação, pode seguir os passos indicados [em Linux](../criar_e_configurar_um_disco_suplementar_numa_instancia/#utilizando-o-linux) ou [em Windows](../criar_e_configurar_um_disco_suplementar_numa_instancia/#utilizando-o-windows).

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
