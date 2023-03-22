---
title: "Criar uma cópia de segurança de um volume"
slug: volume-backup
excerpt: "Saiba como criar um backup do volume Block Storage a partir da Área de Cliente"
section: Armazenamento
order: 3
updated: 2023-03-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 21/03/2023**

## Objetivo

Se atribui importância aos dados armazenados nos seus volumes Block Storage, convém organizar o backup deles para limitar o impacto potencial de qualquer problema sobre esses dados, quer se trate de um erro humano ou de um incidente ao nível do cluster.

Um **Volume Snapshot** é um ponto de recuperação armazenado no mesmo cluster de armazenamento que o volume original. As operações de criação e de restauro são rápidas, mas em caso de incidente no cluster, o volume e o Volume Snapshot podem estar indisponíveis.<br>
A criação de um Volume Snapshot não requer que o volume seja desassociado da instância.

Um **Volume Backup** é uma imagem criada a partir do seu volume, que é armazenado no cluster Object Storage da localização do volume de origem.
Este nível de resiliência é ideal e permitir-lhe-á reagir rapidamente a qualquer incidente no seu volume, criando um outro volume a partir do backup.<br>
A criação de um backup de volume requer que o volume seja desassociado da instância.

O Volume Snapshot e o Volume Backup permitem-lhe:

- criar backups do seu volume em apenas alguns cliques e conservá-los durante o tempo necessário;
- utilizar os backups para restaurar o estado do seu volume;
- utilizar os backups como modelo para criar volumes idênticos.

**Este guia explica como criar um backup do volume Block Storage a partir da Área de Cliente OVHcloud.**

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Um volume [Block Storage](https://docs.ovh.com/pt/public-cloud/criar_e_configurar_um_disco_suplementar_numa_instancia/) criado no seu projeto [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/).

## Instruções

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa.

A seguir, abra o menu `Block Storage`{.action} na barra de navegação à esquerda, abaixo de **Storage**.

À direita do volume em questão, clique no botão `...`{.action} e em `Criar uma cópia de segurança`{.action}. Não é necessário desassociar primeiro o volume da sua instância. No entanto, se pretender desassociar o seu volume da sua instância, consulte esta [secção](https://docs.ovh.com/pt/public-cloud/criar_e_configurar_um_disco_suplementar_numa_instancia/#em-linux) do guia correspondente para Linux e esta [secção](https://docs.ovh.com/pt/public-cloud/criar_e_configurar_um_disco_suplementar_numa_instancia/#em-windows) para Windows.

![Volume Backup - criação](images/volumebackup01.png){.thumbnail}

Se é originário da secção Block Storage, o volume correspondente é indicado. Caso contrário, selecione o volume que pretende guardar.

De seguida, selecione o tipo de backup que deseja criar: **Volume Snapshot** ou **Volume Backup**.

- Ao escolher o **Volume Snapshot**, terá a possibilidade de modificar o nome do Volume Snapshot a criar antes de validar através do botão `Criar o backup`{.action}.
- Ao escolher o **Volume Backup**, ser-lhe-á pedido que desassocie o seu volume da instância para que possa continuar. Poderá então alterar o nome do Volume Snapshot a criar antes de validar através do botão `Criar a cópia de segurança`{.action}.

![Volume Backup ou Snapshot - criação](images/volumebackup02.png){.thumbnail}

O tempo de criação do backup, quer se trate de um Volume Snapshot ou de um Volume Backup, pode levar várias horas, em função da quantidade de dados presentes no volume, da utilização dos recursos da instância para o Volume Snapshot, assim como de outros fatores específicos ao host.

> [!primary]

> **Boas práticas:**
>
> - efetue os seus backups de volume fora das horas de produção;
> - evite criar snapshots nas horas de ponta (entre as 04h00 e as 22h00, hora de Paris);
> - instale o agente qemu se não o fez ou tente desativá-lo se necessário;
> - tente não "solicitar" demasiado o servidor durante a fase de criação da snapshot (limitação de I/O, consumo de RAM, etc.)
> - mesmo que não seja obrigatório, é preferível desassociar o seu volume aquando da criação de um Volume Snapshot;
> - verifique regularmente se pode recuperar os seus dados a partir do seu Volume Snapshot ou do seu Volume Backup.
>

Uma vez que um Volume Snapshot ou um Volume Backup é um clone do conjunto do disco, este terá o tamanho máximo do volume de origem, independentemente da atribuição real de espaço em disco.

Pode consultar a lista do Volume Snapshots na secção `Volume Snapshot`{.action} na barra à esquerda.
Quando o Volume Snapshot é criado, aparecerá nesta lista.

![Volume Snapshot - lista](images/volumebackup03.png){.thumbnail}

Pode consultar a lista do Volume Backups na secção `Volume Backup`{.action} na barra à esquerda.
Assim que a criação do Volume Backup for pedida, é adicionado à lista.

![Volume Backup - lista](images/volumebackup04.png){.thumbnail}

Clique no botão `...`{.action} para `Eliminar`{.action} ou `Criar um volume`{.action} a partir do Volume Snapshot ou do Volume Backup correspondente.

Para mais informações, consulte o [nosso manual sobre a criação de um volume a partir de um backup](https://docs.ovh.com/pt/public-cloud/create-volume-from-backup/).

![Criar um volume a partir de um backup](images/volumebackup05.png){.thumbnail}

## Saiba mais

[Criar um volume a partir de um backup](https://docs.ovh.com/pt/public-cloud/create-volume-from-backup/)

[Criar e configurar um disco adicional numa instância](https://docs.ovh.com/pt/public-cloud/criar_e_configurar_um_disco_suplementar_numa_instancia/)

[Aumentar o tamanho de um disco adicional](https://docs.ovh.com/pt/public-cloud/aumentar_o_tamanho_de_um_disco_suplementar/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
