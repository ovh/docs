---
title: Mostrar os logs de boot no KVM
slug: visualizacao-bootlog-em-kvm
excerpt: 'Saiba como diagnosticar um VPS consultando os logs de início (boot logs)'
section: Diagnóstico e Modo Rescue
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 05/07/2021**

## Objetivo

Se o seu VPS não responder, deverá sempre poder aceder ao VPS a partir da Área de Cliente através do [KVM](../utilizar_o_kvm_para_um_servidor_vps/). A forma mais rápida de diagnosticar o problema é verificar os logs de arranque (boot logs) do servidor. No entanto, a configuração GRUB deve ser modificada para que estes logs apareçam. 

> [!primary]
>
> Tenha em conta que, em certos ambientes, o KVM não lhe fornecerá nenhuma informação útil pois a sequência de arranque aparece na porta de série onde o GRUB está configurado em modo silencioso.
>

**Este guia explica como ativar os logs de boot que o podem ajudar a ultrapassar um VPS.**

> [!warning]
> A OVHcloud fornece-lhe serviços pelos quais é responsável em termos de configuração e gestão. Assim, é responsável pelo seu bom funcionamento.
>
>Se encontrar dificuldades para efetuar estas ações, contacte um fornecedor de serviços especializado e/ou troque informações com a nossa comunidade de utilizadores <https://community.ovh.com/>. A OVHcloud não poderá fornecer-lhe assistência técnica a este respeito.
>

## Requisitos

- dispor de um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

> [!warning]
>
> Estas alterações irão alterar a configuração do GRUB. Antes de efetuar qualquer modificação, certifique-se de que a OVHcloud não pode ser responsabilizada pelo dano ou perda dos dados.
>

Se ainda tem acesso ao VPS via SSH, pode passar para [o passo 6](#step6).

### Etapa 1: reiniciar o VPS em modo rescue

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e lance um reboot ao servidor em modo rescue. Se necessário, consulte o nosso [guia sobre o modo rescue](../rescue/).

### Etapa 2: efetuar a verificação inicial

Nas antigas gamas de VPS, as suas partições serão automaticamente montadas em modo de rescue. Pode utilizar os seguintes comandos para verificar e identificar o local de montagem da sua partição:

#### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

#### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

O exemplo acima mostra que a partição do sistema está montada em **/mnt/sdb1**. (O disco principal é **sdb**. O disco rescue é **sda** e **sda1** é a partição principal em rescue montada sobre **/**).

Se o seu VPS pertencer às [**gamas VPS atuais**](https://www.ovhcloud.com/pt/vps/), não será efetuada nenhuma montagem automática e a coluna "MOUNTPOINT" deverá estar vazia. Nesse caso, passe [ao passo 4](#step4).

### Etapa 3: desmontar a partição (apenas para as antigas gamas VPS)

Num VPS pertencente às antigas gamas colocado em modo rescue, o disco principal já está montado. Por conseguinte, deve ser desmontado antes de passar à etapa 4:

```sh
~$ umount /dev/sdb1
```

### Etapa 4: montar a partição com os parâmetros apropriados <a name="step4"></a>

Se o seu VPS pertence às [**gamas VPS atuais**](https://www.ovhcloud.com/pt/vps/), verifique primeiro se a pasta de montagem foi criada:

```sh
~$ mkdir -p /mnt/sdb1
```

Introduza os seguintes comandos para montar a partição com os parâmetros apropriados:

```sh
~$ mount /dev/sdb1 /mnt/sdb1
~$ mount -t proc none /mnt/sdb1/proc
~$ mount -o bind /dev /mnt/sdb1/dev
~$ mount -t sysfs none /mnt/sdb1/sys/
```

A partição do sistema foi montada para ser utilizada com o comando `chroot`, de forma a executar ações que requerem o acesso aos diretórios `sys`, `dev` e `proc`.

### Etapa 5: utilizar o comando CHROOT para configurar os seus ficheiros de sistema

Agora tem de aceder aos ficheiros GRUB do seu sistema e alterá-los. Para isso, utilize o comando `chroot`:

```sh
~$ chroot /mnt/sdb1
```

A partir de agora, todos os comandos que introduzir serão aplicados no seu VPS em vez do ambiente temporário do modo rescue.

### Etapa 6: modificar a configuração GRUB <a name="step6"></a>

#### **Para Debian 8 ou superior e Ubuntu 18 ou superior**

Crie uma cópia de backup do ficheiro de configuração:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Para aceder aos logs de boot com a ajuda da consola KVM, certifique-se de que dispõe do seguinte valor no ficheiro `/etc/default/grub`:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

Se esta linha estiver omissa ou diferente, altere o ficheiro com um editor e registe-o.

De seguida, utilize o comando abaixo para regenerar o ficheiro de configuração GRUB (as modificações serão registadas para a próxima reinicialização):

```sh
~$ update-grub
```

#### **Para CentOS 7 ou superior (grub2)**

Crie uma cópia de backup do ficheiro de configuração:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Para aceder aos logs de boot com a ajuda da consola KVM, certifique-se de que dispõe dos seguintes valores no ficheiro `/etc/default/grub`:

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Se estas linhas estiverem em falta ou forem diferentes, altere o ficheiro com um editor e registe-o.

De seguida, utilize o seguinte comando para regenerar o ficheiro de configuração GRUB (os valores serão registados para a próxima reinicialização):

```sh
~$ grub2-mkconfig -o "$(readlink /etc/grub.cfg)"
```

Depois de efetuar as modificações, reinicie o seu VPS em modo "normal" a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Os logs de boot devem aparecer aquando da utilização da [consola KVM](../utilizar_o_kvm_para_um_servidor_vps/).

## Quer saber mais?

[Utilizar o KVM para os VPS](../utilizar_o_kvm_para_um_servidor_vps/)

[Ativar o modo rescue num VPS](../rescue/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
