---
title: 'Alterar a palavra-passe root num servidor dedicado'
excerpt: 'Saiba como alterar a palavra-passe root do seu servidor dedicado'
updated: 2021-02-16
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 16/02/2021**

## Objetivo

Pode ser necessário alterar a palavra-passe root (ou a do utilizador admin/sudo) no seu sistema operativo GNU/Linux.
<br>Existem dois cenários possíveis:

- Pode sempre ligar-se através de SSH
- Não pode ligar-se através de SSH porque perdeu a palavra-passe

**Saiba como alterar a sua palavra-passe de administrador em função da situação inicial.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/){.external}.
- Ter dados de acesso recebidos por e-mail após a instalação (se estes ainda estiverem válidos)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} (para utilizar o modo rescue).

> [!warning]
>A OVHcloud fornece-lhe serviços pelos quais é responsável em termos de configuração e gestão. Assim, é responsável pelo seu bom funcionamento.
>
>Este guia foi concebido para o ajudar o mais possível nas tarefas mais comuns. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação dos serviços num servidor, recomendamos que contacte um fornecedor especializado.
>

## Instruções

### Alterar a palavra-passe se ainda tem acesso (utilizador sudo ou root)

Ligue-se ao seu servidor através de SSH. Migre para o utilizador root, se necessário:

```
~$ sudo su -
~#
```

Para alterar a palavra-passe do utilizador atual, introduza a `palavra-passe`. A seguir, deverá indicar a sua nova palavra-passe duas vezes, tal como indicado abaixo:

```
~# passwd

New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Tenha em conta que numa distribuição GNU/Linux, os caracteres da sua palavra-passe **não** aparecem à medida que os escreve.
>

### Alterar a palavra-passe se a perdeu

#### Etapa 1: Identificar a partição do sistema

Depois de reiniciar o servidor em [modo rescue](/pages/cloud/dedicated/rescue_mode), deve identificar a partição do sistema. Para isso, execute o seguinte comando:

```
# fdisk -l

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

No exemplo acima, a partição do sistema é /dev/hda1.

> [!primary]
>
> Se o seu servidor dispõe de uma configuração RAID, deve montar o seu volume raid:
>
> - com um RAID por software, a sua partição raiz será `/dev/mdX`;
> - com um RAID por hardware, a sua partição raiz será `/dev/sdX`.
>

#### Etapa 2: Montar a partição do sistema

Uma vez a partição identificada, pode montá-la através do seguinte comando:

```
# mount /dev/hda1 /mnt/
```

#### Etapa 3: Alterar a partição root

Por predefinição, a partição do sistema está bloqueada para a edição. Por isso, deve abri-la para um acesso de escrita através do seguinte comando:

```
# chroot /mnt
```

#### Etapa 4: alterar a palavra-passe root

A última etapa consiste em alterar a sua palavra-passe, com o seguinte comando:

```
# passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Depois de realizar esta etapa, altere o modo de arranque no seu servidor para `Fazer boot no disco rígido`{.action} e reinicie-o. A sua palavra-passe root foi alterada.

## Quer saber mais?

[Ativar e utilizar o modo rescue](/pages/cloud/dedicated/rescue_mode)

[Proteger um servidor dedicado](/pages/cloud/dedicated/securing-a-dedicated-server)

[Alterar a palavra-passe administrador num servidor dedicado Windows](/pages/cloud/dedicated/changing-admin-password-on-windows)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.