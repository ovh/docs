---
title: 'Reparar o bootloader GRUB'
excerpt: Guia de reparação do bootloader GRUB numa instância
updated: 2020-11-23
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/11/2020**

## Objetivo

É possível que tenha de reparar o bootloader GRUB. Este guia vai permitir-lhe corrigir facilmente o bootloader e restabelecer o funcionamento da sua instância.

## Requisitos

- A instância deve estar em modo rescue (Consulte o guia [Passar uma instância em modo rescue](/pages/platform/public-cloud/put_an_instance_in_rescue_mode))

## Instruções

Ligue-se à instância através do VNC da Área [de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) ou através do SSH.

Introduza os seguintes comandos para montar o sistema de ficheiros distante e iniciar a reparação do GRUB:

```sh
mount /dev/sdb1 /mnt
mount -o bind /proc /mnt/proc
mount -o bind /sys /mnt/sys
mount -o bind /dev /mnt/dev
clroot /mnt /bin/bash
```

### Atualizar GRUB (ou GRUB2)

Atualizar GRUB:

```sh
grub-install /dev/sdb
update-grub
```

Atualizar o GRUB2:

```sh
grub2-install /dev/sdb
grub2-mkconfig -o /boot/grub2/grub.cfg
```

Agora pode retirar a instância do modo rescue. (Ver o guia [Passar uma instância em modo rescue](/pages/platform/public-cloud/put_an_instance_in_rescue_mode))

## Saiba mais

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.