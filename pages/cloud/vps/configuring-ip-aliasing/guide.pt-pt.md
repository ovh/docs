---
title: 'Configurar um endereço de IP alias'
slug: ip-aliasing-vps
excerpt: 'Saiba como adicionar endereços IP Failover à sua configuração VPS'
section: 'Rede e IP'
---

**Última atualização: 8 de abril de 2020**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O alias de IP (*IP aliasing* em inglês) é uma configuração especial da rede para os seus servidores OVHcloud, que lhe permite associar vários endereços IP numa única interface de rede.

**Este guia explica como adicionar endereços IP Failover à sua configuração de rede.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços que são da sua responsabilidade. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
>

## Requisitos

- um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- um endereço IP fail-over ou um bloco IP fail-over (RIPE)
- um acesso administrador (root) via SSH ou um remote desktop (Windows) no seu servidor


## Instruções

> [!primary]
>
Se pretender utilizar uma distribuição recente, o procedimento adequado para configurar a sua interface de rede pode necessitar de adaptações. Se encontrar dificuldades, recomendamos que consulte a documentação relativa ao seu sistema operativo. 
> 

Estas são as configurações para as distribuições e sistemas operativos principais.

### Debian 9

#### Etapa 1: desativar a configuração automática da rede

Primeiro, abra o seguinte ficheiro, como indicado abaixo:

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

De seguida, altere o ficheiro com a configuração abaixo. Isto impedirá que as alterações sejam feitas automaticamente na configuração da sua rede.

```sh
network: {config: disabled}
```

### Etapa 2: alterar o ficheiro de configuração de rede

Abra o ficheiro de configuração de rede para o modificar através do seguinte comando:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Altere o ficheiro com a seguinte configuração:

> [!primary]
>
Tenha em atenção que os nomes das interfaces de rede nos nossos exemplos podem diferir dos seus próprios nomes. Queira adaptar os nomes de interface apropriados.
>

```sh
auto 3
iface ens3 inet dhcp

automens3:0
iface ens3:0 inet static
address Failover IP 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address Failover IP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Cada endereço IP fail-over necessita da sua própria linha neste ficheiro. O ficheiro de configuração dos seus endereços IP fail-over deve ser denominado "50-cloud-init.yaml".

#### Etapa 1: criar o ficheiro de configuração

Ligue-se ao seu servidor através de SSH e execute o seguinte comando:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

De seguida, altere o ficheiro com o seguinte conteúdo:

```sh
network:
    version: 2
    ethernets:
        a_sua_interface_de rede:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: a_interface_rede
            addresses:
            - seu_ip_failover/32
```

Por fim, registe e feche o ficheiro.

De seguida, aplique a configuração:

```sh
# netplan apply
# netplan try
```

Repita este procedimento para cada endereço IP Failover.

### CentOS e Fedora (25 e versões anteriores)

#### Etapa 1: Fazer cópia do ficheiro de configuração (<i>source file</i>)

Em primeiro lugar, faça uma cópia do ficheiro de configuração para que o possa utilizar como template:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Etapa 2: Alterar o ficheiro de configuração

Agora pode alterar o ficheiro eth0:0 para substituir o endereço IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Em primeiro lugar, substitua o nome do "device" e substitua o endereço IP existente pelo endereço IP Failover que recebeu:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # Por CentOS, utilize "static"
IPADDR="IP_FAILOVER"
NETMASK="255.255.255.255"
BROADCAST="IP_FAILOVER"
```

#### Etapa 3: Reiniciar a interface de rede

Agora, reinicie a sua interface:

```sh
ifup eth0:0
```

### Windows Server 2012/2016

#### Etapa 1: verificar a configuração IP principal

Em primeiro lugar, temos de recuperar as informações do endereço IP principal:

![verificar a configuração IP principal](images/image1-1.png){.thumbnail}

#### Etapa 2: modificar as propriedades IPv4

É necessário modificar manualmente as propriedades de configuração IP de configuração "automática" em configuração "estática":

![alterar a configuração IP](images/image2.png){.thumbnail}

Pode agora definir as informações IP obtidas anteriormente:

![alterar a configuração IP](images/image3-3.png){.thumbnail}

#### Etapa 3: adicionar o endereço IP Failover na secção 'Configuração avançada'

![secção de configuração avançada](images/image4-4.png){.thumbnail}

Aqui, temos de definir as informações IP Failover e a máscara de sub-rede correspondente (normalmente, a máscara de sub-rede é 255.255.255.255).

![Configuração do IP Failover](images/image5-5.png){.thumbnail}

#### Etapa 4: reinicio da interface de rede

Em primeiro lugar, estamos a efetuar o processo de desativação.

![desativação da rede](images/image6.png){.thumbnail}

E depois o processo de ativação.

![ativação da rede](images/image7.png){.thumbnail}

#### Etapa 5: verificação da nova configuração de rede

Com a consola e o comando ___ipconfig___, podemos verificar a nova configuração de rede.

![verificar a configuração de rede atual](images/image8-8.png){.thumbnail}


### cPanel (em CentOS 6)

#### Etapa 1: Fazer cópia do ficheiro de configuração (<i>source file</i>)

Em primeiro lugar, faça uma cópia do ficheiro de configuração, para que possa voltar atrás a qualquer momento:

```sh
cp /etc/ips /etc/ips.bak
```

#### Etapa 2: Alterar o ficheiro de configuração

Deve modificar o ficheiro /etc/ips:

```sh
editor /etc/ips
```

A seguir, adicione o endereço IP Failover ao ficheiro:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

Adicione o endereço IP em /etc/ipaddrpool:

```bash
IP_FAILOVER
```

#### Etapa 3: Reiniciar a interface de rede

Agora, reinicie a sua interface:

```sh
/etc/init.d/ipaliases restart
```

### Plesk Onyx 17.x

#### Etapa 1: aceder à gestão dos endereços IP no painel de configuração

Aceda à secção ```Tools & Settings``` > ```IP Addresses``` :

![acesso à gestão dos endereços IP](images/pleskip1.png){.thumbnail}

#### Etapa 2: adicionar informações IP suplementares

Clique no botão `Add IP Address`{.action}:

![adicionar informações IP](images/pleskip2-2.png){.thumbnail}

Adicione as informações IP adicionais no formulário e clique em `OK`{.action}.

![adicionar informações IP](images/pleskip3-3.png){.thumbnail}

#### Etapa 3: verificar a configuração IP atual no painel de configuração Plesk

![configuração IP atual](images/pleskip4-4.png){.thumbnail}

### Reparação

Se não conseguir estabelecer uma ligação entre a rede pública e o endereço IP de alias e suspeitar de um problema de rede, reinicie o servidor em modo rescue e configure o alias diretamente no servidor.

Para isso, execute o seguinte comando depois de reiniciar o servidor em modo rescue:

```sh
ifconfig ens3:0 FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP up
```

Substitua FAILOVER_IP pelo endereço IP Failover real.

Depois, basta enviar um ping ao seu IPFO a partir do exterior. Se isto funcionar, isto provavelmente significa que um erro de configuração precisa de ser corrigido. Se, pelo contrário, o IP ainda não funcionar, queira informar as nossas equipas criando um pedido de suporte a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/manager/dedicated/#/support/tickets/new) para obter mais informações.
 
## Vá mais longe

[Ativar o modo rescue num VPS](../rescue/)

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
