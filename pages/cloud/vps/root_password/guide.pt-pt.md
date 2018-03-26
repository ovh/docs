---
title: Como alterar a palavra-passe root de um VPS (Linux)
slug: root-password
excerpt: Aprenda a alterar a palavra-passe root do seu VPS
section: Diagnóstico e Modo Rescue
---

**Última atualização 03/01/2018**

## Sumário

Quando instalar um sistema operativo, irá receber uma palavra-passe de acesso root. Para maior segurança, sugerimos a alteração da mesma, conforme as indicações apresentadas no [Guia Proteger VPS](https://docs.ovh.com/pt/vps/como-proteger-vps/).  Quer alterar a palavra-passe e não consegue encontrá-la? O presente guia também inclui instruções para este tipo de casos (com ou sem acesso à password root).

## Requisitos

- Estar ligado ao VPS com protocolo SSH (acesso root)
- [Reiniciar o VPS em Modo Rescue](https://docs.ovh.com/pt/vps/rescue/)


## Instruções

### Alterar palavra-passe com dados de acesso root.

Se tiver a palavra-passe, o processo é mais simples. Aceda ao seu servidor e introduza este comando:

```sh
passwd
```

De seguida, deverá indicar a nova palavra-passe e confirmar a mesma. Após a introdução da nova palavra-passe, irá receber uma confirmação:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Com um sistema Linux, a palavra-passe escolhida **não será mostrada**.
> 

### Alterar palavra-passe em caso de perda da mesma

#### 1ª Etapa: identificar o ponto de montagem da partição

No VPS 2016, partição é montada automaticamente. Por isso convém identificar a localização da partição. Para tal, pode usar dois comandos:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

A imagem mostra que a partição está montada em **/mnt/vdb1**.


#### 2ª Etapa: permissões CHROOT

Para que as alterações tenham efeito no sistema, tem de alterar a pasta (diretório) root. Esta ação é efetuada através do comando `chroot`. Instruções:

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Para confirmar, use o comando `ls -l`. Este comando irá listar o conteúdo da pasta root do seu sistema.

```sh
root@rescue-pro:/# ls -l
```

#### 3ª Etapa: alterar palavra-passe root

Agora só falta alterar a palavra-passe root com o comando `passwd`:

```sh
passwd
```

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Para terminar, reinicie o VPS (modo normal) na Área de Cliente OVH.

## Quer saber mais?

[Introdução ao SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external}

[Modo Rescue para VPS](https://docs.ovh.com/pt/vps/rescue/){.external}

Fale com a nossa comunidade: <https://community.ovh.com/en/>.