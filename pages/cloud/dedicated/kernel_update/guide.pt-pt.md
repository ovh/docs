---
title: 'Como atualizar o kernel num servidor dedicado'
excerpt: 'Saiba como atualizar o kernel de um sistema operativo utilizando um núcleo OVH'
slug: atualizar-kernel-servidor-dedicado
section: 'Uso avançado'
---

**Última atualização: 12/09/2018**

## Sumário

A OVH permite-lhe atualizar o kernel de um sistema Linux de forma fácil com o *netboot*, um método de arranque através da rede. No entanto, recomendamos fortemente que atualize no disco o sistema operativo (SO) a que se encontra ligado o kernel.

**Este manual explica como atualizar o kernel de um sistema operativo que utilize um núcleo OVH.**

Por predefinição, o conjunto das imagens de sistema oferecidas pelos servidores dedicados da OVH utiliza um núcleo OVH otimizado. Sugerimos que os utilizadores que substituíram estas imagens pelo seu próprio sistema operativo consultem a documentação oficial deste último.


> [!warning]
>
> A utilização e a gestão dos serviços OVH são da responsabilidade do cliente. A OVH não tem permissões de acesso aos servidores. O cliente é o único responsável pela segurança do serviço.
> 
> Este manual explica como implementar algumas medidas para otimizar a performance e a segurança do seu sistema. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado.
>


## Requisitos

- Ter um [servidor dedicado OVH](https://www.ovh.pt/servidores_dedicados/){.external}.
- Ter acesso root ao servidor via SSH \[Linux].
- Fazer um backup dos dados (consulte a informação oficial do seu sistema operativo).


## Instruções

### Identificar a versão do kernel

Para identificar a versão do kernel, execute o seguinte comando:

```sh
uname -r
```

Por exemplo:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

Neste caso, a versão do kernel é **4.09.76-xxxx-std-ipv6-64**.

### Atualizar o kernel utilizando os pacotes OVH

Nos sistemas operativos baseados em Debian e RedHat, o kernel é atualizado por meio do gestor de pacotes.


#### 1 - Atualizar o kernel

Nos sistemas baseados em Debian, a atualização do kernel é feita através do seguinte comando:

```sh
apt-get update && apt-get dist-upgrade
```

Nos sistemas baseados em RedHat, a atualização do kernel é feita através do seguinte comando:

```sh
yum update
```

#### 2 - Reiniciar o servidor

Para que as modificações sejam aplicadas, é preciso reiniciar o servidor:

```sh
reboot
```


### Atualizar o kernel sem utilizar os pacotes OVH

#### 1 - Utilizar o diretório correto

A imagem do kernel deve ser colocada no seguinte diretório (pasta):

```sh
cd /boot
```

#### 2 - Aceder à imagem

Sem recompilar o kernel, transfira a versão bzImage pretendida, de preferência a última versão. As imagens estão disponíveis no seguinte endereço: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Os kernel são monolíticos, ou seja, não têm em conta os módulos  CEPH, NBD, ZFS, etc.

Retomemos o exemplo, cuja versão do kernel era: **4.09.76-xxxx-std-ipv6-64**.

Aqui, seria necessário transferir a imagem abaixo através do comando:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### 3 - Atualizar o programa de arranque (GRUB)

Agora, execute o comando abaixo para atualizar o programa de arranque (GRUB):

```sh
update-grub
```

O sistema irá devolver a seguinte resposta:

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Certifique-se de que a configuração inclui este ficheiro (necessário à atualização): `06_OVHkernel`. Pode realizar esta verificação com o seguinte comando:
>
> `ls /etc/grub.d/`
>

#### 4 - Reiniciar o servidor

Para que as alterações sejam implementadas, tem de reiniciar o servidor:

```sh
reboot
```

### Reverter a alteração

Em caso de erro, pode reverter o servidor para as definições anteriores. Para isso, convém pôr o servidor em [Modo Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external}. De seguida, é necessário montar o sistema usando o comando abaixo:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> Neste exemplo, o nome da raiz (ou do slash `/`) é *md1*. Atenção: o nome pode ser diferente. Para verificar o nome do diretório raiz, insira o seguinte comando:
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

Em seguida, aceda ao diretório `/boot` e elimine os últimos ficheiros instalados com o comando `rm`. Exemplo:

```sh
rm bzImage-4.09.76-xxxx-std-ipv6-64
```

De seguida, atualize novamente o sistema de arranque:

```sh
update-grub
```

Por fim, saia do Modo Rescue (reinicie o servidor a partir do disco) e efetue um reboot de software com o comando:

```sh
reboot
```

### Verificar se a atualização foi corretamente aplicada

Depois da atualização, confirme a versão kernel através do comando:

```sh
uname –r
```

> [!primary]
>
> Devido aos riscos associados às vulnerabilidades Meltdown e Spectre, sugerimos que consulte o site do seu sistema operativo para verificar se a última versão do kernel está protegida contra essas vulnerabilidades.
>
> Caso seja necessário, pode usar algumas ferramentas (<https://github.com/speed47/spectre-meltdown-checker>) para saber se o kernel é vulnerável aos riscos Meltdown e Spectre.
>
> **A OVH não garante a fiabilidade do software de terceiros. O uso deste software é da inteira responsabilidade do cliente**.
>

## Quer saber mais?

[Modo Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external}

[“Information about Meltdown and Spectre vulnerability fixes”](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external} (versão inglesa - Vulnerabilidades Meltdown e Spectre)

[“Find your patch for Meltdown and Spectre”](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external} (versão inglesa - Vulnerabilidades Meltdown e Spectre: atualizações dos sistemas operativos)

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}