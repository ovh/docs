---
title: Como atualizar o kernel num servidor dedicado
excerpt: Saiba como atualizar o kernel de uma distribuição linux, usando o kernell OVH
slug: atualizar-kernel-servidor-dedicado
section: Uso avançado
---

**Última atualização: 26/03/2018**

## Sumário

O serviço OVH permite atualizar o kernel de um sistema Linux de forma fácil com o *netboot*, um método de arranque através da rede. Se achar mais conveniente, pode atualizar o Kernel localmente (no disco onde o sistema operativo está instalado).

**Este guia explica como atualizar o kernel de um sistema operativo linux**

> [!warning]
>
> A utilização e a gestão dos serviços OVH são da responsabilidade do cliente. A OVH não tem permissões de acesso aos servidores. O cliente é o único responsável pela segurança do serviço. Este guia explica como implementar algumas medidas para otimizar a performance e a segurança do seu sistema. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado.
>

## Requisitos

- Ter acesso root ao servidor (via SSH).
- Fazer um backup dos dados (consulte a informação oficial do seu sistema operativo).

## Instruções

### Identificar a versão do kernel

Para identificar a versão do kernel, execute o seguinte comando:

```sh
uname -r
```

Exemplo:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

Neste caso, a versão do kernel é *4.09.76-xxxx-std-ipv6-64*\*.

### Atualizar o Kernel

#### 1 - Usar o diretório correto

A imagem do Kernel deve ser colocada no seguinte diretório (pasta):

```sh
cd /boot
```

#### 2 - Aceder à imagem

Sem recompilar o kernel, transfira a versão bzImage pretendida, de preferência a última versão. As imagens estão disponíveis no seguinte endereço: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Os kernel são monolíticos, ou seja, não têm em conta os módulos Kernel Ceph, NBD, ZFS, etc.

No nosso exemplo, a versão kernel é:  **4.9.118-xxxx-std-ipv6-64**.

Como tal, é necessário transferir imagem abaixo através do comando:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### 3 -Atualizar o programa de arranque (GRUB)

Agora, execute o comando abaixo para atualizar o programa de arranque (GRUB):

```sh
update-grub
```

O sistema irá devolver a seguinte resposta:

```sh
Generating grub configuration file ... done
```

> [!primary]
>
> Verifique se a configuração inclui este ficheiro (necessário à atualização): `06_OVHkernel`. Para tal, execute o comando:
>
> `ls /etc/grub.d/`
>

#### 4 - Reiniciar o servidor

Para que as alterações sejam implementadas, tem que reinicie o servidor:

```sh
reboot
```

### Reverter alteração

Em caso de erro pode reverter o servidor para as definições anteriores. Para tal, convém aceder aos servidor em [Mode Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external}. De seguida, é necessário montar o sistema usando este comando:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> Neste exemplo, o nome da raiz, ou da root, `/`) é *md1*. Atencão: o nome pode ser diferente. Para verificar o nome do diretório root, insira o seguinte comando:
>
> `fdisk`ou `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Agora aceda ao diretório `/boot` e elimine os últimos ficheiros instalados com o comando `rm`. Exemplo:

```sh
rm bzImage-4.14.13-xxxx-std-ipv6-64
```

De seguida, atualize novamente o sistema de arranque:

```sh
update-grub
```

Por fim, saia do Modo Rescue (reinicie o sevidor a partir do disco) e efetue um reboot de software com o comando:

```sh
reboot
```

### Verificar se a atualização foi feita de forma correta

Depois da atualização, confirme a versão kernel através do comando:

```sh
uname –r
```

> [!primary]
>
> Devido aos riscos associados às vulnerabilidades Meltdown e Spectre, sugerimos que consulte o site do seu sistema operativo para verificar se a a última versão do kernel foi corrigida e está protegida contra aquelas vulnerabilidades.
>
> Em caso de necessidade, pode usar algumas ferramentas (e.g. <https://github.com/speed47/spectre-meltdown-checker>) para saber se o kernel é vulnerável aos riscos Meltdown e Spectre.
>
> **A OVH não garante a fiabilidade do software de terceiros. O uso deste software é da inteira responsabilidade do cliente**.
>

## Quer saber mais?

[Mode Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external}.

[Vulnerabildiades Meltdown e Spectre: Informação -EN-](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}.

[Vulnerabilidades Meltdown e Spectre: atualizações dos sistemas operativos -EN-](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}.

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.