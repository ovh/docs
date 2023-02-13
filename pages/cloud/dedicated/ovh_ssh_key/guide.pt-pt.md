---
title: Como instalar a chave SSH OVHcloud
slug: ovh-ssh-key
excerpt: Saiba como instalar e desativar uma chave SSH OVHcloud
section: SSH e chave SSH
updated: 2018-02-12
---

**Última atualização no dia 12/04/2021**

## Sumário

Em casos excecionais, a sua infraestrutura pode necessitar duma intervenção dos técnicos OVHcloud. 

**Este guia fornece as instruções para instalar uma chave SSH OVHcloud e para desativar a mesma. Esta chave permite o acesso e a intervenção dos administradores OVHcloud nos seus servidores.**


## Requisitos

- Estar [ligado ao servidor usando o protocolo SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external} (acesso root).

## Instruções

### 1 - Instalar a Chave

Depois de estabelecida a ligação SSH, deverá executar os comandos indicados abaixo.

- Comando para servidores alojados na OVHcloud Europa:

```sh
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- Comando para servidores alojados na OVHcloud Canada:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
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

**Para servidores OVHcloud em França**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Para servidores OVHcloud no Canada**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Verificar se a porta SSH predefinida foi alterada.

Se tiver reconfigurado a porta SSH, deverá indicar-nos a nova porta. Só assim o administrador OVHcloud poderá aceder ao seu servidor.
 

### 3 - Desativar a Chave SSH OVHcloud

Quando a intervenção do administrador estiver terminada, pode desativar a chave SSH. Para tal, basta alterar o ficheiro `authorized_keys2` colocando «em comentário» (com **#**) o excerto do código associado à chave, como indicado abaixo:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Quer saber mais?

Consulte o guia [Introdução ao SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external}.

Ou fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
