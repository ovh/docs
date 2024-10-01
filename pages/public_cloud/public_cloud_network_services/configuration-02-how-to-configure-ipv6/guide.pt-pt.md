---
title: "Configurar o IPv6 numa instância Public Cloud"
excerpt: "Saiba como configurar o protocolo IPv6 numa instância Public Cloud"
updated: 2024-03-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

“Internet Protocol version 6” (IPv6) é a última versão do Internet Protocol (IP). Foi concebido para resolver o esgotamento antecipado dos endereços IPv4 utilizando os endereços compostos por 128 bits em vez dos tradicionais 32 bits do IPv4.

Todas as instâncias Public Cloud são entregues com um endereço IPv4 e um endereço IPv6.

Por predefinição, apenas o endereço IPv4 é configurado.

**Neste tutorial, iremos explicar como configurar um endereço IPv6 numa instância Public Cloud.**

> [!primary]
> 
> Atualmente, as ofertas Floating IP e Gateway não tomam a cargo o IPv6. O IPv6 só pode ser utilizado com as instâncias em [modo público](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts#publicmode).
>

## Requisitos

* Uma instância Public Cloud (qualquer modelo)
* Dispor de um acesso administrativo (sudo) via SSH ou ambiente de trabalho remoto (Windows) ao seu servidor.
* Ter conhecimentos básicos de rede.
* Ter acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

As secções seguintes contêm as configurações das distribuições que disponibilizamos atualmente, bem como as distribuições/sistemas operativos mais utilizados. O primeiro passo consiste sempre em estabelecer a ligação ao servidor em SSH ou através de uma sessão de ligação GUI (RDP para uma instância Windows).

> [!warning]
>
> Tenha em conta que, nas versões recentes dos sistemas operativos Linux, o endereço IPv6 está configurado de forma predefinida nas instâncias Public Cloud. Neste caso, não é necessário configurar o. Verifique o ficheiro de configuração do sistema operativo antes de realizar qualquer alteração.
>

### Léxico

Aqui tem um breve léxico dos termos utilizados neste tutorial:

|Léxico|Descrição|
|---|---|
|YOUR_IPV6|O endereço IPv6 associado ao seu serviço|
|IPV6_PREFIX|O prefixo do bloco IPv6 (por ex.: 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPV6_GATEWAY|A gateway do bloco IPv6|

### Obter as informações de rede

Aceda à Área de Cliente, clique no menu da secção `Public Cloud`{.action}, selecione o seu projeto Public Cloud e clique em `Instances`{.action} no menu à esquerda. Depois clique no `...`{.action} ao lado da instância correspendente e clique em `Detalhes da instância`{.action}.

![public-cloud ipv6](images/pci2022.png){.thumbnail}

Todas as informações necessárias serão visíveis na secção **Redes**.

![public-cloud ipv6](images/pci2022.1.png){.thumbnail}

### Exemplos de configurações persistentes

> [!primary] 
> **Exemplos**
> 
>As informações fornecidas abaixo são exemplos.
>
>Enquanto administrador dos seus serviços, é responsável por adaptá-los à sua distribuição.
>

> [!warning]
>
> Antes de alterar um ficheiro de configuração, crie sempre uma cópia de segurança do original em caso de problema.
>

<br>Em primeiro lugar, aceda à sua instância em SSH.

#### Debian (exceto Debian 12)

Por predefinição, os ficheiros de configuração estão localizados no diretório `/etc/network/interfaces.d/`.

A melhor prática é criar um ficheiro de configuração separado no diretório `/etc/network/interfaces.d/` para configurar o IPV6. No nosso exemplo, o nosso ficheiro chama-se `51-cloud-init-ipv6`:

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Isto permite-lhe separar a configuração IPv6 e voltar facilmente às alterações em caso de erro.

Adicione as seguintes linhas ao ficheiro. Substitua os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) bem como a interface de rede (se o seu servidor não utilizar **eth0**) pelos seus valores específicos:

```console
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Eis um exemplo concreto:

```console
iface eth0 inet6 static
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

A seguir, reinicie o serviço de rede com um dos seguintes comandos:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Ubuntu e Debian 12

Os ficheiros de configuração de rede estão localizados no diretório `/etc/netplan/`.

A melhor prática é criar um ficheiro de configuração separado no diretório `/etc/netplan/` para configurar o IPV6. No nosso exemplo, o nosso ficheiro chama-se `51-cloud-init-ipv6.yaml`:

```bash
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

Isto permite-lhe separar a configuração IPv6 e voltar facilmente às alterações em caso de erro.

Adicione as seguintes linhas ao ficheiro. Substitua os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) bem como a interface de rede (se o seu servidor não utilizar **eth0**) pelos seus valores específicos:

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

Eis um exemplo concreto:

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> É importante respeitar o alinhamento de cada elemento deste ficheiro tal como representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento. Apenas a tecla de espaço é necessária.
>

Pode testar a sua configuração através do seguinte comando:

```bash
sudo nano netplan try
```

Se a configuração estiver correta, execute-a através do seguinte comando:

```bash
sudo nano netplan apply
```

#### RedHat / CentOS / Rocky Linux / Alma Linux

Os ficheiros de configuração de rede estão localizados no diretório `/etc/sysconfig/network-scripts/`. Recomendamos que comece por realizar uma cópia de segurança do ficheiro de configuração em questão.

No nosso exemplo, o nosso ficheiro chama-se `ifcfg-eth0`, pelo que fazemos uma cópia de segurança do ficheiro `ifcfg-eth0` utilizando os seguintes comandos. Não se esqueça de substituir **eth0** pela sua interface real se necessário.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Poderá então voltar atrás com as modificações utilizando os comandos abaixo:

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

A seguir, editamos o ficheiro `ifcfg-eth0`, adicionando apenas as linhas para a configuração IPv6 do servidor. Substitua os genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) pelos seus valores específicos.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Esquecemos a configuração IPv4 para evitar confusões, mas a configuração IPv6 faz-se no mesmo ficheiro de configuração.

Eis um exemplo concreto:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

Reinicie o serviço de rede para permitir que o sistema aplique a nova configuração utilizando um dos seguintes comandos:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Fedora

O ficheiro de configuração de rede está no diretório `/etc/NetworkManager/system-connections/`. Recomendamos que comece por realizar uma cópia de segurança do ficheiro de configuração em questão.

No nosso exemplo, o nosso ficheiro chama-se `cloud-init-eth0.nmconnection`, pelo que fazemos uma cópia do ficheiro `cloud-init-eth0.nmconnection` utilizando os seguintes comandos. Não se esqueça de substituir **eth0** pela sua interface real se necessário.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

A seguir, editamos o ficheiro `cloud-init-eth0.nmconnection`, adicionando apenas as linhas para a configuração IPv6 do servidor. Substitua os genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) pelos seus valores específicos.

```console
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/IPV6_PREFIX
route1=::/0,IPV6_GATEWAY
```

Esquecemos a configuração IPv4 para evitar confusões, mas a configuração IPv6 faz-se no mesmo ficheiro de configuração.

Eis um exemplo concreto:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:201:abcd::7c5/128
route1=::/0,2607:5300:201:abcd::1
```

Reinicie a interface de rede com o seguinte comando:

```bash
sudo systemctl restart NetworkManager
```

#### Windows

Por predefinição, o IPv6 não está configurado nos servidores Windows. Para o ativar, efetue os seguintes passos:

Aceda à secção `Ligações de rede`{.action} do seu Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

Em seguida, clique com o botão direito do rato no seu adaptador de rede para aceder a `Propriedades`{.action}.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

A seguir, clique em `Internet Protocol Version 6 (TCP/IPv6)`{.action} e, a seguir, no botão `Propriedades`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Finalmente, insira as informações relativas ao IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

Uma vez terminado, selecione a opção `Validar os parâmetros à saída` e clique no botão `OK`{.action} para validar as suas alterações.

### Diagnóstico

Configurou o IPv6 mas nada mudou? 

Existe uma operação simples para determinar se a falha está relacionada com a configuração realizada ou a rede da OVHcloud.

Primeiro, [passe a sua instância para o modo Rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

De seguida, utilize os comandos abaixo para configurar o seu IP de forma não persistente:

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Teste novamente a sua rede através de um ping6, por exemplo:

```bash
ping6 ipv6.google.com
```

Se a sua instância responder, é provável que uma das etapas da sua configuração inicial não tenha sido realizada corretamente.

De qualquer forma, não hesite em contactar o suporte com os elementos testados acima para receber uma análise da nossa parte.

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.