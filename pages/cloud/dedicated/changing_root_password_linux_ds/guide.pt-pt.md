---
title: 'Alterar a palavra-passe root num servidor dedicado Linux'
slug: alterar-palavra-passe-root-linux-num-servidor-dedicado
excerpt: 'Saiba como alterar a palavra-passe root num servidor dedicado Linux'
section: 'Diagnóstico e Modo Rescue'
---

**Última atualização: 08/11/2018**

## Sumário

Ao instalar ou reinstalar uma distribuição ou um sistema operativo, irá receber uma palavra-passe de acesso root. Para maior segurança, sugerimos a alteração da mesma, conforme as indicações apresentadas no manual “[Proteger um servidor dedicado](https://docs.ovh.com/pt/dedicated/proteger-um-servidor-dedicado/){.external}”. Também é possível que precise de a alterar porque a perdeu.

**Este manual apresenta-lhe estas duas situações e explica-lhe como alterar a palavra-passe root do seu servidor.**


## Requisitos

* Possuir um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external} com uma distribuição Linux instalada.
* Ter acesso root ao servidor via SSH.
* Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.


## Instruções

### Alterar a palavra-passe para o acesso root

Se estabeleceu uma ligação por root com a sua palavra-passe atual e pretende alterá-la, aceda ao servidor por SSH em linha de comandos e introduza o seguinte comando:

```sh
passwd
```

A seguir, deverá indicar a sua nova palavra-passe duas vezes, tal como indicado abaixo:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Nas distribuições Linux, a palavra-passe **não será mostrada** à medida que a introduz.
>

### Como alterar uma palavra-passe perdida ou esquecida

#### 1 - Identificar a partição do sistema

Depois de ativar o [modo Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external} no seu servidor, deve identificar a partição do sistema. Para isso, pode usar o seguinte comando:

```sh
fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

No exemplo acima, a partição do sistema é `/dev/hda1`. 

> [!primary]
>
> Caso o seu servidor possua uma configuração com um RAID por software, deverá montar o seu volume RAID (geralmente, `/dev/mdX`). 
>

#### 2 - Montar a partição do sistema

Uma vez a partição identificada, pode montá-la através do seguinte comando:

```sh
mount /dev/hda1 /mnt/
```

#### 3 - Alterar a partição root

Por predefinição, não é possível editar a partição do sistema. Para a editar, aceda à mesma em modo de escrita através do seguinte comando:

```sh
chroot /mnt
```

#### 4 - Alterar a palavra-passe root

O último passo consiste em alterar a palavra-passe utilizando o seguinte comando:

```sh
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Uma vez alterada a palavra-passe, modifique o modo de arranque no seu servidor para `Fazer boot no disco rígido`{.action} e reinicie-o. A sua palavra-passe root foi alterada com sucesso.


## Quer saber mais?

[Ativar e utilizar o modo Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external}

[Alterar a palavra-passe de um administrador num servidor dedicado Windows](https://docs.ovh.com/pt/dedicated/alterar-palavra-passe-admin-windows/){.external}

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}