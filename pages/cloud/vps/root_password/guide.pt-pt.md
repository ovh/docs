---
title: Como alterar a palavra-passe root de um VPS (Linux)
slug: root-password
excerpt: Aprenda a alterar a palavra-passe root do seu VPS
section: Diagnóstico e Modo Rescue
---

**Última atualização: 27/04/2021**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Pode ser necessário alterar a palavra-passe root do sistema operativo Linux. Existem dois cenários possíveis:

- Pode sempre ligar-se através de SSH
- Não pode ligar-se através de SSH porque perdeu a palavra-passe

**Este guia explica como alterar a sua palavra-passe de administrador em função destas duas situações.**

## Requisitos

- Ter o seu [VPS OVHcloud](https://www.ovhcloud.com/pt/vps/){.external} já configurado
- Ter dados de acesso recebidos por e-mail após a instalação (se ainda estiverem válidos)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} (para utilizar o modo rescue)

> [!warning]
>
> A utilização e a gestão dos serviços da OVHcloud são da responsabilidade do cliente. A OVH não tem permissões de acesso aos VPS e o cliente é o único responsável pela gestão e pela segurança do serviço. Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção “Quer saber mais?” deste manual.
>

## Instruções

### Modificação da password se tem sempre um acesso (sudo ou root)

> [!primary]
>
> Para mais informações sobre a ligação ao seu VPS, consulte o nosso guia [Começar com um VPS](../instalar-gerir-vps/).
>

Ligue-se ao seu VPS através de SSH. Migre para o utilizador root, se necessário:

```sh
~$ sudo su -
~#
```

Altere a palavra-passe do utilizador atual:

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Numa distribuição Linux, a palavra-passe que escreve **não** irá aparecer.
>

Se pretender autorizar a ligação como utilizador root, siga os passos [indicados](./#ativar-a-password-root_1).

### Modificação da password se a perdeu

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Etapa 1: Reinicie o VPS em modo rescue

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e reinicie o VPS em modo rescue. Se precisar de mais instruções sobre a utilização do modo rescue com um VPS, consulte o [guia do modo rescue](../rescue/).

#### Etapa 2: Identificar o ponto de montagem

Nas antigas gamas de VPS, as suas partições serão automaticamente montadas em modo de rescue. Pode utilizar os seguintes comandos para identificar o ponto de montagem da sua partição:

##### **df -h**

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

##### **lsblk**

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

O exemplo acima mostra que a partição do sistema está montada em **/mnt/sdb1**.

Se o seu VPS for recente, a coluna `MOUNTPOINT` deve estar vazia. Neste caso, primeiro suba a partição:

```sh
~$ mkdir -p /mnt/sdb1
~$ mount /dev/sdb1 /mnt/sdb1
```

#### Etapa 3: autorizações CHROOT

Agora tem de alterar a pasta raiz para aplicar as alterações ao sistema. Para isso, utilize o comando `chroot`:

```sh
~$ chroot /mnt/sdb1/
```

Pode efetuar uma verificação introduzindo o comando `ls -l`, que regista o conteúdo armazenado no diretório corrente do seu sistema:

```sh
~$ ls -l
```

#### Etapa4: Alterar a palavra-passe (root)

Na última etapa, altere a sua palavra-passe através do comando `passwd`.

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

Se o VPS for de última geração (o seu nome é: *vps-XXXXXXX.vps.ovh.net*), recebeu inicialmente dados de acesso para um utilizador com direitos importantes, em vez da conta "root" predefinida. Além disso, o serviço SSH não aceita os pedidos de ligação como root.

É necessário introduzir o nome de utilizador que utiliza para se ligar após a `passwd`:

```sh
~# passwd <username>
New password:
Retype new password:
passwd: password updated successfully
```

Assim, poderá voltar a ligar-se com este nome de utilizador após o reboot, caso a ligação root esteja desativada.

Por fim, reinicie o seu VPS no seu disco a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).


### Ativar a password root

Se o VPS for de última geração (o seu nome é: *vps-XXXXXXX.vps.ovh.net*), recebeu dados de acesso para um utilizador com direitos importantes, em vez da conta "root" predefinida. Além disso, o serviço SSH não aceita os pedidos de ligação como root.

> [!warning]
>
> Ativar a palavra-passe root é geralmente considerada uma vulnerabilidade de segurança, pelo que não é recomendado.
>
> Recomendamos que tome primeiro medidas para proteger o seu VPS. Consulte o nosso manual sobre a [segurança de um VPS](../como-proteger-vps/).
>

#### Etapa 1: Modificar o ficheiro sshd_config

Utilize um editor de texto tal que vim ou nano para alterar este ficheiro de configuração:

```sh
~$ nano /etc/ssh/sshd_config
```

Adicione a seguinte linha.

```sh
PermitRootLogin yes
```

Procure esta linha e certifique-se de que ela é comentada:

```sh
#PermitRootLogin prohibit-password
```

Registe o ficheiro e saia do editor.

#### Etapa 2: Reiniciar o serviço SSH

```sh
~$ systemctl restart sshd
```

Tal deverá ser suficiente para aplicar as alterações. Também pode reiniciar o VPS (```~$ reboot```).

### Falha

Se tiver problemas de arranque depois de alterar a sua palavra-passe e iniciar a reinicialização:

- Consulte o KVM para saber por que o VPS não pode iniciar. Consulte o [guia KVM](../utilizar_o_kvm_para_um_servidor_vps/) para obter ajuda na utilização desta funcionalidade na Área de Cliente OVHcloud.
- Se o KVM mostrar o arranque do VPS ou se este não conseguir encontrar o disco, certifique-se de que o [bootlog está ativado](../visualizacao-bootlog-em-kvm/). Transmita os logs pertinentes às nossas equipas de suporte criando um pedido de suporte na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) para mais informações.

## Vá mais longe

[Consulte o manual Introdução ao SSH.](../../dedicated/ssh-introducao/)

[Como proteger um VPS](../como-proteger-vps/)

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
