---
title: Verificar o sistema de ficheiros num VPS
excerpt: Saiba como encontrar erros num sistema de ficheiros em modo rescue
updated: 2021-04-20
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

**Saiba como diagnosticar os sistemas de ficheiros nos VPS da OVHcloud utilizando o modo rescue.**

> [!warning]
>A OVHcloud fornece-lhe serviços pelos quais é responsável em termos de configuração e gestão. Assim, é responsável pelo seu bom funcionamento.
>
>Se encontrar dificuldades para efetuar estas ações, contacte um fornecedor de serviços especializado e/ou troque informações com a nossa comunidade de utilizadores <https://community.ovh.com/en/>. A OVHcloud não poderá fornecer-lhe assistência técnica a este respeito.
>

## Requisitos

- um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

#### VPS GNU/Linux

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e lance um reboot ao servidor em modo rescue. Caso seja necessário, consulte o nosso [manual sobre o modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Nas antigas gamas de VPS, as suas partições serão automaticamente montadas em modo de rescue. Para o verificar, utilize o seguinte comando:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

O exemplo acima mostra um ponto de montagem existente. Isto significa que a partição a verificar deve primeiro ser desmontada:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Se o seu VPS for recente, a coluna `MOUNTPOINT` deve estar vazia e poderá ignorar a etapa anterior.

Agora pode verificar a partição com "fsck":

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 filas, 849881/6525179 blocks
```

Se o resultado estiver vazio, isso geralmente significa que o sistema de ficheiros está limpo. No entanto, pode forçar uma verificação:

```bash
$ fsck /dev/sdb1 -f
```

### VPS Windows

As instruções acima não se aplicam normalmente a um VPS com Windows, pois a verificação do sistema de ficheiros não trata do NTFS. No entanto, pode efetuar uma verificação de coerência do NTFS nas partições.

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e lance um reboot ao servidor em modo rescue. Caso seja necessário, consulte o nosso [manual sobre o modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Nas antigas gamas de VPS, as suas partições serão automaticamente montadas em modo de rescue. Para o verificar, utilize o seguinte comando:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

O exemplo acima mostra os pontos de montagem existentes. Isto significa que a partição a verificar deve primeiro ser desmontada:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Se o seu VPS for recente, a coluna `MOUNTPOINT` deve estar vazia e poderá ignorar a etapa anterior.

O comando seguinte verifica a coerência da partição e tenta resolver eventuais erros:

```bash
$ ntfsfix /dev/sdb1
```

## Saiba mais

[Ativar o modo rescue num VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
