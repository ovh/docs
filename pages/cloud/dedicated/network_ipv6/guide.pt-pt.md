---
title: 'Configurar IPv6 em servidores dedicados'
slug: rede-ipv6
excerpt: 'Saiba como configurar endereços IPv6 na nossa infraestrutura'
section: 'Gestão de Rede'
---

**Última atualização: 16/06/2020**

## Sumário

O IPv6 é a versão mais recente do Internet Protocol (IP). Foi concebido para solucionar a já esperada exaustão do seu antecessor, o IPv4, através do recurso a endereços de 128 bits em vez de endereços de 32 bits. Cada servidor dedicado da OVHcloud inclui um bloco IPv6 /64. Isto representa mais de 18 quintiliões de endereços IP ao seu dispor.

**Este guia explica como configurar endereços IPv6 no seu servidor por meio de vários exemplos.**

> [!warning]
>A OVHcloud presta-lhe serviços cuja configuração e gestão é da sua inteira responsabilidade, cabendo-lhe a si assegurar o seu correto funcionamento. 
>
>Este guia foi concebido para o ajudar, tanto quanto possível, nas tarefas mais comuns. No entanto, caso tenha alguma dificuldade, recomendamos que contacte um fornecedor especializado e/ou o editor do software do serviço, uma vez que não poderemos assisti-lo pessoalmente. Para mais informações, consulte a secção «Saiba mais» neste guia.
>

## Requisitos

- um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/) na sua conta OVHcloud;
- todos os seus dados IPv6 (prefixo, gateway, etc.);
- ter conhecimentos básicos de [SSH](https://pt.wikipedia.org/wiki/Secure_Shell) e redes.

## Instruções

Se está a usar um template Linux fornecido pela OVHcloud para instalar o servidor, vai verificar que o primeiro IPv6 (principal) já se encontra configurado.


> [!primary]
>
> O gateway pré-definido para o seu bloco IPv6 (IPV6_GATEWAY) é xxxx.xxxx.xxxx.xxFF:FF:FF:FF:FF. 
>
> por exemplo,
> 
> - O endereço IPv6 do servidor é 2607:5300:60:62ac::/64. Logo, o IPv6_GATEWAY vai ser 2607:5300:60:62FF:FF:FF:FF:FF.
> - O endereço IPv6 do servidor é 2001:41D0:1:46e::/64. Logo, o IPv6_GATEWAY vai ser 2001:41D0:1:4FF:FF:FF:FF:FF.
>

### Distribuições Debian e baseadas em Debian

> [!warning]
>
> Antes de seguir os próximos passos, recomendamos que desative a autoconfiguração de IPv6 e o router advertising para evitar certos problemas. Pode fazê-lo acrescentando as seguintes linhas ao ficheiro `sysctl.conf`, localizado em /etc/sysctl.conf:
> 
> `net.IPv6.conf.all.autoconf=0`
> 
> `net.IPv6.conf.all.accept_ra=0`
> 
> Uma vez realizada esta ação, pode aplicar estas regras executando o comando: `sh sysctl -p`.
> 

#### Passo 1: Usar o SSH para se conectar ao servidor

[Encontre mais informações neste guia.](../primeiros-passos-servidor-dedicado/#ligar-se-ao-servidor/)

#### Passo 2: Abrir o ficheiro de configuração da rede do servidor

O ficheiro de configuração da rede do seu servidor encontra-se em `/etc/network/interfaces`. Use a linha de comandos para localizar o ficheiro, abri-lo e editá-lo. Antes disso, pense em fazer um backup.

#### Passo 3: Corrigir o ficheiro de configuração de rede

Corrija o ficheiro de modo a ficar como o exemplo abaixo. Neste exemplo, o nome da interface de rede é `eth0`. A interface do seu servidor pode ser diferente.

```sh
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 128

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```
Pode adicionar mais endereços IPv6 acrescentando ao ficheiro esta linha: `up /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64`.

#### Passo 4: Guardar o ficheiro e aplicar as alterações

Guarde as alterações feitas ao ficheiro e reinicie a rede ou o servidor de modo a aplicar as alterações.

#### Passo 5: Testar a conetividade IPv6

Pode testar a conetividade IPv6 introduzindo os comandos seguintes:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```


Se não conseguir que este endereço IPv6 faça ping, verifique a configuração e tente novamente. Além disso, assegure-se de que a máquina a partir da qual está a fazer o teste está conectada por IPv6. Se mesmo assim não for bem-sucedido, teste a configuração em [modo Rescue](../rescue_mode/).

### Fedora 26 e superiores

> [!warning]
>
> Este exemplo baseia-se em CentOS 7.0. Os resultados podem diferir em caso de uso de outros derivados Red Hat.
>

#### Passo 1: Usar o SSH para se conectar ao servidor

[Encontre mais informações neste guia.](../primeiros-passos-servidor-dedicado/#ligar-se-ao-servidor)


#### Passo 2: Abrir o ficheiro de configuração da rede do servidor

O ficheiro de configuração da rede do seu servidor encontra-se em /etc/sysconfig/network-scripts/ifcfg-eth0. Use a linha de comandos para localizar o ficheiro, abri-lo e editá-lo.

#### Passo 3: Corrigir o ficheiro de configuração de rede

Corrija o ficheiro de modo a ficar como o exemplo abaixo. Neste exemplo, o nome da interface de rede é eth0. A interface do seu servidor pode ser diferente. Além disso, omitimos a configuração do IPv4 Failover de modo a evitar confusão, mas o IPv6 é configurado no mesmo ficheiro.

```sh
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=YOUR_IPv6/64
IPV6ADDR_SECONDARIES=YOUR_2nd_IPv6/64 YOUR_3rd_IPv6/64
IPV6_DEFAULTGW=IPv6_GATEWAY
```
Se precisar de mais endereços IPv6 na máquina, adicione-os na linha `IPV6ADDR_SECONDARIES`, separados por um espaço em branco. 

#### Passo 4: Guardar o ficheiro e aplicar as alterações

Guarde as alterações feitas ao ficheiro e reinicie a rede ou o servidor de modo a aplicar as alterações.

#### Passo 5: Testar a conetividade IPv6

Pode testar a conetividade IPv6 introduzindo os comandos seguintes:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Se não conseguir que este endereço IPv6 faça ping, verifique a configuração e tente novamente. Além disso, assegure-se de que a máquina a partir da qual está a fazer o teste está conectada por IPv6. Se mesmo assim não for bem-sucedido, teste a configuração em [modo Rescue](../rescue_mode/).

### FreeBSD

#### Passo 1: Usar o SSH para se conectar ao servidor

[Encontre mais informações neste guia.](../primeiros-passos-servidor-dedicado/#ligar-se-ao-servidor)


#### Passo 2: Abrir o ficheiro de configuração da rede do servidor

O ficheiro de configuração da rede do seu servidor encontra-se em`/etc/rc.conf`. Use a linha de comandos para localizar o ficheiro, abri-lo e editá-lo.

#### Passo 3: Corrigir o ficheiro de configuração de rede

Corrija o ficheiro de modo a ficar como o exemplo abaixo. Neste exemplo, o nome da interface de rede é em0. A interface do seu servidor pode ser diferente.

```sh
IPv6_activate_all_interfaces="YES" 
IPv6_defaultrouter="IPv6_GATEWAY" 
ifconfig_em0_IPv6="inet6 IPv6_Address prefixlen 64"
ifconfig_em0_alias0="inet6 IPv6_Address_2 prefixlen 64"
ifconfig_em0_alias1="inet6 IPv6_Address_3 prefixlen 64"
```

#### Passo 4: Guardar o ficheiro e reiniciar o servidor

Guarde as alterações feitas ao ficheiro e reinicie a rede ou o servidor de modo a aplicar as alterações.

#### Passo 5: Testar a conetividade IPv6

Pode testar a conetividade IPv6 introduzindo os comandos seguintes:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Se não conseguir que este endereço IPv6 faça ping, verifique a configuração e tente novamente. Além disso, assegure-se de que a máquina a partir da qual está a fazer o teste está conectada por IPv6. Se mesmo assim não for bem-sucedido, teste a configuração em [modo Rescue](../rescue_mode/).

### Ubuntu 18.04

#### Passo 1: Usar o SSH para se conectar ao servidor

[Encontre mais informações neste guia.](../primeiros-passos-servidor-dedicado/#ligar-se-ao-servidor)

#### Passo 2: Abrir o ficheiro de configuração da rede do servidor

Abra o ficheiro de configuração de rede situado em /etc/systemd/network. Para efeitos de exemplificação, o nosso ficheiro chama-se 50-default.network.

#### Passo 3: Corrigir o ficheiro de configuração de rede

Usando um editor de texto, corrija o ficheiro acrescentando as seguintes linhas nas secções relevantes, como mostramos no exemplo abaixo:

```sh
[Network]
Destination=Gateway_Address

[Address]
Address=IPv6_Address/64

[Route]
Destination=Gateway_Address
Scope=link
```
Para adicionar múltiplos endereços IPv6, adicione múltiplas secções  \[Address].
```sh
[Address]
Address=IPv6_Address_2/64

[Address]
Address=IPv6_Address_3/64
```
#### Passo 4: Guardar o ficheiro e reiniciar o servidor

Guarde as alterações feitas ao ficheiro e reinicie a rede ou o servidor de modo a aplicar as alterações.

#### Passo 5: Testar a conetividade IPv6

Pode testar a conetividade IPv6 introduzindo os comandos seguintes:

```
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 4 packets transmitted, 4 received, 0% packet loss, time 3003ms
>>> rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### Windows Server 2012

#### Passo 1: Usar o RDP para se conectar ao servidor

[Encontre mais informações neste guia.](../primeiros-passos-servidor-dedicado/#ligar-se-ao-servidor)


#### Passo 2: Abrir a configuração da rede do servidor
Em primeiro lugar, faça clique com o botão direito no ícone de rede situado na área de notificações. Aceda ao `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/ipv6_network_sharing_center.png){.thumbnail}

Clique em `Change adapter settings`{.action}.

![Change adapter settings](images/ipv6_change_adapter_settings.png){.thumbnail}

Faça clique com o botão direito sobre o seu adaptador de rede e, de seguida, clique em `Properties`{.action}.

![Network Adapter Properties](images/ipv6_network_adapter_properties.png){.thumbnail}

Selecione `Internet Protocol Version 6`{.action} e clique em `Properties`{.action}.

![Properties](images/ipv6_properties.png){.thumbnail}
#### Passo 3: Corrigir a configuração de rede 

Introduza a sua configuração IPv6 (` IPv6 address` e `Default Gateway`) e clique em `OK`{.action}.

![Properties](images/ipv6_configuration.png){.thumbnail}

### Resolução de problemas

Se depois de testar a sua ligação continuar a experienciar problemas, crie um pedido de apoio a fim de rever as suas configurações. Será necessário fornecer:

- o nome do sistema operativo e a versão em uso no servidor;
- o nome e o diretório do ficheiro de configuração de rede; 
- o conteúdo desse ficheiro. 


## Saiba mais

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
