---
title: Como instalar a chave SSH OVH
slug: ovh-ssh-key
excerpt: Saiba como instalar e desativar uma chave SSH OVH
section: SSH e chave SSH
---

**Última atualização no dia 17/01/2018**

## Sumário

Em casos excecionais, a sua infraestrutura pode necessitar duma intervenção dos técnicos OVH. 

**Este guia fornece as instruções para instalar uma chave SSH OVH e para desativar a mesma. Esta chave permite o acesso e a intervenção dos administradores OVH nos seus servidores.**


## Requisitos

- Estar [ligado ao servidor usando o protocolo SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external} (acesso root).

## Instruções

### 1 - Instalar a Chave

Depois de estabelecida a ligação SSH, deverá executar os comandos indicados abaixo.

- Comando para servidores alojados na OVH Europa:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- Comando para servidores alojados na OVH Canada:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cleCA.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

Se o comando for executado sem erros, será criado o ficheiro `authorized_keys2`. Este contém informações no seguinte formato:

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### 2 - Resolução de Problemas

A chave foi instalada corretamente, mas os administradores não conseguem aceder ao seu servidor. Neste caso, verifique os seguintes pontos:

#### Confirmar a existência do ficheiro */root/.ssh/authorized_keys2*.

Para efetuar esta verificação, execute o seguinte comando:

```sh
cat /root/.ssh/authorized_keys2
```

#### Verificar se o servidor SSH está configurado para aceitar acessos root

Para tal, verifique os seguintes parâmetros no ficheiro `/etc/ssh/sshd_config`:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

De seguida, reinicie o serviço SSH:

```sh
/etc/init.d/sshd restart
```

#### Verificar se o diretório principal do utilizador root é /root

Esta verificação pode ser efetuada usando`/etc/passwd`:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

O sexto elemento da linha (os elementos são separados por **:**) tem que ser /root.

#### Verificar se a *firewall* está a bloquear o acesso

Se usar uma *firewall*, deverá criar uma regra de autorização para as ligações que têm como origem (source) cache-ng.ovh.net (cache-ng.ovh.ca, para servidores do Canadá); e como destino a porta SSH (predefinida como 22). Exemplo duma regra (em francês) para a Firewall IPtables:

**Para servidores OVH em França**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Para servidores OVH no Canada**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Verificar se a porta SSH predefinida foi alterada.

Se tiver reconfigurado a porta SSH, deverá indicar-nos a nova porta. Só assim o administrador OVH poderá aceder ao seu servidor.
 

### 3 - Desativar a Chave SSH OVH

Quando a intervenção do administrador estiver terminada, pode desativar a chave SSH. Para tal, basta alterar o ficheiro `authorized_keys2` colocando «em comentário» (com **#**) o excerto do código associado à chave, como indicado abaixo:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Quer saber mais?

Consulte o guia [Introdução ao SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external}.

Ou fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.