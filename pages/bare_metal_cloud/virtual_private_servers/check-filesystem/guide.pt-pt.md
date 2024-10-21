---
title: Verificar o sistema de ficheiros num VPS
excerpt: Saiba como encontrar erros num sistema de ficheiros em modo rescue
updated: 2023-09-20
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

### VPS GNU/Linux

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e lance um reboot ao servidor em modo rescue. Caso seja necessário, consulte o nosso [manual sobre o modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

De seguida, poderá verificar a configuração dos discos:

```bash
lsblk
```

A partição correspondente ao modo rescue (`sda1`, neste exemplo) é montada no diretório `/` .Quanto a este, o disco do VPS é denominado `sdb` e não deve ter nenhum ponto de montagem.

Por exemplo:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part  
```

Se o seu resultado se assemelha ao exemplo acima e a coluna `MOUNTPOINT` está vazia na linha correspondente (`sdb1`), você pode passar para [a próxima etapa](#fscheck).

No entanto, se o seu resultado mostrar que existe um ponto de montagem para a partição VPS, esta deverá ser desmontada primeiro.

Por exemplo:

```console
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

No exemplo de saída acima, a partição `sdb1` é montada em `/mnt/`. Para verificar a partição, esta não deve estar montada.

Para desmontar a partição, execute o seguinte comando:

```bash
umount /dev/partition_name
```

Neste exemplo de configuração, o comando seria:

```bash
umount /dev/sdb1
```

<a name="fscheck"></a>

Agora pode verificar a partição com "fsck":

```bash
fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 filas, 849881/6525179 blocks
```

Se o resultado estiver vazio, isso geralmente significa que o sistema de ficheiros está limpo. No entanto, pode forçar uma verificação:

```bash
fsck /dev/sdb1 -f
```

### VPS Windows

As instruções acima não se aplicam normalmente a um VPS com Windows, pois a verificação do sistema de ficheiros não trata do NTFS. No entanto, pode efetuar uma verificação de coerência do NTFS nas partições.

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e lance um reboot ao servidor em modo rescue. Caso seja necessário, consulte o nosso [manual sobre o modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

De seguida, poderá verificar a configuração dos discos:

```bash
lsblk
```

A partição correspondente ao modo rescue (`sda1`, neste exemplo) é montada no diretório `/` .Quanto a este, o disco do VPS é denominado `sdb` e não deve ter nenhum ponto de montagem.

Por exemplo:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part 
├─sdb2   8:18   0 99.7G  0 part 
```

Se o seu resultado se assemelha ao exemplo acima e a coluna `MOUNTPOINT` está vazia na linha correspondente, você pode passar para [a próxima etapa](#fscheckwin).

No entanto, se o seu resultado mostrar que existe um ponto de montagem para a partição VPS, esta deverá ser desmontada primeiro.

Por exemplo:

```console
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

No exemplo de saída acima, a partição em causa `sdb2` é montada em `/mnt/`. Para verificar a partição, esta não deve estar montada.

Para desmontar a partição, execute o seguinte comando:

```bash
umount /dev/partition_name
```

Neste exemplo de configuração, o comando seria:

```bash
umount /dev/sdb2
```

<a name="fscheckwin"></a>

O comando seguinte verifica a coerência da partição e tenta resolver eventuais erros:

```bash
ntfsfix /dev/partition_name
```

Neste exemplo de configuração, o comando seria:

```bash
ntfsfix /dev/sdb2
```

## Quer saber mais?

[Ativar o modo rescue num VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
