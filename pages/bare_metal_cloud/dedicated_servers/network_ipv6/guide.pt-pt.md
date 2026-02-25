---
title: 'Configurar IPv6 em servidores dedicados'
excerpt: 'Saiba como configurar endereços IPv6 na nossa infraestrutura'
updated: 2025-12-09
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

O IPv6 é a versão mais recente do Internet Protocol (IP). Foi concebido para solucionar a já esperada exaustão do seu antecessor, o IPv4, através do recurso a endereços de 128 bits em vez de endereços de 32 bits. A maior parte dos servidores dedicados OVHcloud são entregues com um bloco IPv6 /64, à exceção dos servidores High Grade e Scale que são entregues com um bloco IPv6 /56. Isto representa mais de 18 quintiliões de endereços IP ao seu dispor.

**Este guia explica como configurar endereços IPv6 no seu servidor por meio de vários exemplos.**

> [!primary]
>
> Este artigo fornece detalhes sobre a configuração de um endereço IP principal. Nos servidores que são compatíveis com o vRack, pode também configurar endereços Additional IP num vRack em vez da interface pública do servidor. Consulte as instruções correspondentes nos seguintes artigos:
>
> - IPv4: [Configurar um bloco de endereços IP no vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
> - IPv6: [Configuring an IPv6 block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

> [!warning]
> A OVHcloud presta-lhe serviços cuja configuração e gestão é da sua inteira responsabilidade, cabendo-lhe a si assegurar o seu correto funcionamento. 
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar dificuldades ou dúvidas relativamente à administração, à utilização ou à segurança de um servidor, deverá contactar um [fornecedor especializado](/links/partner). Para mais informações, consulte a secção [«Quer saiba mais»](#go-further) neste guia.
>

## Requisitos

- Um [servidor dedicado](/links/bare-metal/bare-metal) na sua conta OVHcloud.
- Todos os seus dados IPv6 (prefixo, gateway, etc.).
- Ter conhecimentos básicos de [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) e redes.

> [!warning]
> Tenha em conta que os servidores Kimsufi são fornecidos com um único bloco IPv6 (/128). O IPv6 será configurado automaticamente aquando da instalação do sistema operativo.
>

## Instruções

As secções seguintes contêm as configurações das distribuições que disponibilizamos atualmente e as distribuições/sistemas operativos mais utilizados. O primeiro passo consiste sempre em estabelecer a ligação ao servidor em SSH ou através de uma sessão de ligação GUI (RDP para um servidor Windows).

Nos servidores dedicados, o primeiro IPv6 é declarado como 2607:5300:xxxx:xxxx::/64. Por exemplo, se atribuímos ao seu servidor o intervalo IPv6: `2607:5300:abcd:efgh::/64`, o primeiro IPv6 do seu servidor é: `2607:5300:abcd:efgh::`.

Por predefinição, o primeiro IPv6 está configurado na maioria das distribuições Linux recentes que propomos aquando da instalação, pelo que a gateway já está incluída no ficheiro de configuração. Na maioria dos casos, não será necessário adicioná-la manualmente.

Antes de começar, e a fim de utilizar a mesma terminologia durante as operações, consulte a tabela abaixo. Estes são os termos que iremos utilizar ao longo deste manual:

Termo|Descrição|Exemplo|
|---|---|---|
|YOUR_IPV6|Trata-se de um endereço IPv6 do bloco IPv6 atribuído ao seu servidor|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Trata-se do prefixo (ou *netmask*) do seu bloco IPv6, geralmente de 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Trata-se da gateway do seu bloco IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff:ff ou fe80::1|

Nos nossos exemplos, utilizaremos o editor de texto `nano`. Pode, evidentemente, utilizar o editor de texto que preferir.

### Gateway predefinido (Gateway)

O primeiro passo consiste em recuperar a gateway (gateway) IPv6 associada ao seu servidor.

> [!tabs]
> **Através da Área de Cliente**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção 'Servidor dedicado`{.action}.
>>
>> A gateway IPv6 associada ao seu servidor é apresentada na secção "Rede" do separador `Informações gerais`{.action}. Uma vez copiado, continue para a aplicação de configuração IPv6.
>>
>> ![configureipv6](images/ipv6_information.png){.thumbnail}
>>
> Através das API OVHcloud <a name="viaapi"></a>
>>
>> Outra forma de recuperar as informações de rede do seu servidor é [utilizar a API OVHcloud](/pages/manage_and_operate/api/first-steps).
>>
>> Efetue a seguinte chamada de API, indicando o nome interno do servidor (exemplo: `ns3956771.ip-169-254-10.eu`):
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>>

Tenha em conta que os "0" de cabeça podem ser eliminados num gateway IPv6.

Exemplo:

IPv6_GATEWAY: `2607:5300:60:62FF:00FF:00FF:00FF:00FF:00FF` também pode ser escrito como `2607:5300:60:62FF:FF:FF:FF:FF:FF:FF`.

> [!warning]
> 
> Antes de alterar um ficheiro de configuração, crie sempre uma cópia de segurança do original para que possa voltar a ela em caso de problema. 
>

> [!primary]
> Alguns sistemas operativos exigem que as rotas IPv6 estáticas sejam adicionadas ao ficheiro de configuração original por predefinição. Se for esse o caso, basta adicionar a sua configuração para IPv6 como indicado no guia, não modificando nenhuma linha do ficheiro original.
>

> [!tabs]
> **Debian e seus derivados (exceto Debian 12)**
>>
>> O exemplo de configuração abaixo é baseado em Debian 11 (Bullseye).
>>
>> > [!warning]
>> >
>> > Antes de seguir os próximos passos, recomendamos que desative a autoconfiguração de IPv6 e o router advertising para evitar certos problemas. Pode fazê-lo acrescentando as seguintes linhas ao ficheiro `sysctl.conf`, localizado em /etc/sysctl.conf:
>> >
>> > `net.ipv6.conf.all.autoconf=0`
>> > 
>> > `net.ipv6.conf.all.accept_ra=0`
>> > 
>> > Uma vez realizada esta ação, pode aplicar estas regras executando o comando: `sudo sysctl -p`.
>> >
>>
>> **Passo 1: Usar o SSH para se conectar ao servidor**
>>
>> ```sh
>> ssh user@serverIP
>> ```
>>
>> **Passo 2: Criar um backup**
>>
>> O ficheiro de configuração de rede do seu servidor está situado em `/etc/network/interfaces.d`. No nosso exemplo, ele é chamado de `50-cloud-init`. Antes de continuar, crie uma cópia de segurança do seu ficheiro utilizando o seguinte comando:
>>
>> ```sh
>> sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bakà
>> ```
>>
>> **Passo 3: Alterar o ficheiro de configuração de rede**
>>
>> Não edite as linhas existentes no arquivo de configuração. Adicione as linhas para a sua configuração IPv6, substituindo `YOUR_IPv6` e `IPv6_PREFIX` pelos seus próprios valores. Neste exemplo, a interface de rede é chamada `eth0`. A interface do seu servidor pode ser diferente.
>>
>> ```console
>> auto eth0
>> iface eth0 inet dhcp
>>     accept_ra 0
>>
>> iface eth0 inet6 static
>>     address YOUR_IPv6
>>     netmask IPv6_PREFIX
>>
>> # control-alias eth0
>> iface eth0 inet6 static
>>     address 2607:5300:xxxx:xxxx::/xx
>>     dns-nameservers 2001:41d0:3:163::1
>>     gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
>> ```
>>
>> **Debian 10**
>>
>> ```console
>> iface eth0 inet6 static 
>>     address YOUR_IPv6 
>>     netmask 64
>>
>> post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0
>> post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY
>> pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
>> pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
>> ```
>>
>> Podem ser adicionados endereços IPv6 adicionais com as seguintes linhas no ficheiro de configuração: `up ip -6 addr add ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`, `up ip -6 addr add ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`, etc.
>>
>> Para garantir que o IPv6 está ativado ou desativado quando a interface eth0 está ativada ou desativada, adicione a seguinte linha à configuração:
>>
>> `down ip -6 addr del ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`<br>
>> `down ip -6 addr del ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`
>>
>> /// details | **Exemplo de configuração:**
>>
>> ```console
>> auto eth0
>> iface eth0 inet dhcp
>>     accept_ra 0
>>
>> iface eth0 inet6 static
>>     address 2607:5300:adce:f2cd::1
>>     netmask 64
>>
>> # control-alias eth0
>> iface eth0 inet6 static
>>     address 2607:5300:xxxx:xxxx::/xx
>>     dns-nameservers 2001:41d0:3:163::1
>>     gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
>> ```
>>
>> - Adicionar endereços IPv6 adicionais:
>>
>> ```console
>> auto eth0
>> iface eth0 inet dhcp
>>     accept_ra 0
>>
>> iface eth0 inet6 static
>>     address 2607:5300:adce:f2cd::1
>>     netmask 64
>>     up ip -6 addr add 2607:5300:adce:f2cd::2/64 dev eth0
>>     up ip -6 addr add 2607:5300:adce:f2cd::3/64 dev eth0
>>     down ip -6 addr del 2607:5300:adce:f2cd::2/64 dev eth0
>>     down ip -6 addr del 2607:5300:adce:f2cd::3/64 dev eth0
>>
>> # control-alias eth0
>> iface eth0 inet6 static
>>     address 2607:5300:xxxx:xxxx::/xx
>>     dns-nameservers 2001:41d0:3:163::1
>>     gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
>> ```
>> ///
>>
>> **Passo 4: alve o arquivo e aplique as alterações**
>>
>> Guarde as alterações efetuadas no ficheiro e, em seguida, reinicie a rede ou o servidor para aplicar as alterações.
>>
>> ```sh
>> sudo /etc/init.d/networking restart
>> ```
>>
> **Fedora 42+, AlmaLinux & Rocky Linux (10)**
>>
>> O exemplo de configuração abaixo é baseado no Fedora 42.
>>
>> O Fedora utiliza agora ficheiros principais (*keyfiles*).
>> O Fedora utilizava anteriormente perfis de rede armazenados pelo NetworkManager no formato ifcfg no diretório `/etc/sysconfig/network-scripts/`.<br>
>> O ficheiro está em imparidade. Por predefinição, o NetworkManager não cria novos perfis neste formato. O ficheiro de configuração encontra-se agora em `/etc/NetworkManager/system-connections/`.
>>
>> Neste exemplo, o nosso ficheiro chama-se `cloud-init-eno1.nmconnection`.
>>
>> **Passo 1: Usar o SSH para se conectar ao servidor**
>>
>> ```sh
>> ssh user@serverIP
>> ```
>>
>> **Passo 2: Criar um backup**
>>
>> > [!primary]
>> >
>> > Atenção: o nome do ficheiro de rede no nosso exemplo pode ser diferente do seu. Substitua-o pelo nome do seu ficheiro.
>> >
>>
>> Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial:
>>
>> ```sh
>> sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
>> ```
>>
>> **Passo 3: Alterar o ficheiro de configuração de rede**
>>
>> Edite o arquivo com as seguintes linhas, sem alterar nada no arquivo original. Substitua os elementos genéricos (ou seja, `YOUR_IPV6` e `IPv6_PREFIX`) pelos seus valores específicos. Também omitimos a configuração IPv4 para evitar confusões, mas a configuração IPv6 é feita no mesmo arquivo de configuração.
>>
>> ```console
>> [ipv6]
>> method=manual
>> may-fail=false
>> address1=2607:5300:xxxx:xxxx::/xx
>> address2=YOUR_IPV6/IPv6_PREFIX
>> gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff:ff
>> ```
>>
>> Se precisar de configurar mais endereços IPv6, a sua configuração deverá ser a seguinte:
>>
>> ```console
>> [ipv6]
>> method=manual
>> may-fail=false
>> address1=2607:5300:xxxx:xxxx::/xx
>> address2=ADDITIONAL_IPV6_1/IPv6_PREFIX
>> address3=ADDITIONAL_IPV6_2/IPv6_PREFIX
>> gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff:ff
>> ```
>>
>> /// details | **Exemplo de configuração:**
>>
>> ```sh
>> sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
>> ```
>>
>> ```console
>> [ipv6]
>> method=manual
>> may-fail=false
>> address1=2607:5300:xxxx:xxxx::/xx
>> address2=2607:5300:adce:f2cd::1/64
>> gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff:ff
>> ```
>>
>> - Adicionar endereços IPv6 adicionais:
>>
>> ```console
>> [ipv6]
>> method=manual
>> may-fail=false
>> address1=2607:5300:xxxx:xxxx::/xx
>> address2=2607:5300:adce:f2cd::1/64
>> address3=2607:5300:adce:f2cd::2/64
>> gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff:ff
>> ```
>> ///
>>
>> **Passo 4: Salve o arquivo e aplique as alterações**
>>
>> Guarde as alterações efetuadas no ficheiro e, em seguida, reinicie a rede ou o servidor para aplicar as alterações.
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Debian 12, Ubuntu 22.04 e posteriores**
>>
>> O exemplo de configuração abaixo é baseado em Ubuntu 22.04 (Jammy Jellyfish).
>>
>> Os ficheiros de configuração de rede estão localizados no diretório `/etc/netplan/`. Por predefinição, o ficheiro de configuração principal chama-se `50-cloud-init.yaml`.
>>
>> **Passo 1: Utilize SSH para se ligar ao seu servidor**
>>
>> ```sh
>> ssh user@serverIP
>> ```
>>
>> **Passo 2: Criar o ficheiro de configuração de rede**
>>
>> A melhor abordagem é criar um ficheiro de configuração separado com uma extensão .yaml para configurar os endereços IPv6 no diretório `/etc/netplan/`. Desta forma, poderá facilmente reverter as alterações em caso de erro.
>>
>> No nosso exemplo, o nosso ficheiro é nomeado `51-cloud-init-ipv6.yaml`:
>>
>> ```sh
>> sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
>> ```
>>
>> **Passo 3: Alterar o ficheiro de configuração de rede**
>>
>> Usando um editor de texto, altere o arquivo `51-cloud-init-ipv6.yaml` adicionando as seguintes linhas ao arquivo, como mostrado no exemplo abaixo.
>>
>> Substitua os elementos genéricos (ou seja, `YOUR_IPV6` e `IPV6_PREFIX`), assim como a interface de rede (se o seu servidor não utilizar **eno3**), pelos seus valores específicos.
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>          eno3:
>>             dhcp6: no
>>             match:
>>               name: eno3
>>             addresses:
>>               - YOUR_IPV6/IPV6_PREFIX
>> ```
>>
>> Se tiver de configurar vários endereços IPv6, a configuração deve ser semelhante a esta:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno3:
>>             dhcp6: no
>>             match:
>>               name: eno3
>>             addresses:
>>               - YOUR_IPV6/IPv6_PREFIX
>>               - ADDITIONAL_IPV6_1/IPv6_PREFIX
>>               - ADDITIONAL_IPV6_2/IPv6_PREFIX
>> ```
>>
>> > [!warning]
>> >
>> > É importante respeitar o alinhamento de cada elemento deste ficheiro tal como é representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento. Apenas é necessário tecla de espaço.
>> >
>>
>> /// details | **Exemplo de configuração:**
>>
>> ```sh
>> sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>           eno3:
>>             dhcp6: no
>>             match:
>>               name: eno3
>>             addresses:
>>               - 2607:5300:adce:f2cd::1/64
>> ```
>>
>> - Para vários endereços IPV6:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno3:
>>             dhcp6: no
>>             match:
>>               name: eno3
>>             addresses:
>>               - 2607:5300:adce:f2cd::1/64
>>               - 2607:5300:adce:f2cd::2/64
>>               - 2607:5300:adce:f2cd::3/64
>> ```
>> ///
>>
>> **Passo 4: Testar e aplicar a configuração**
>>
>> Para testar a sua configuração, utilize o seguinte comando:
>>
>> ```sh
>> sudo netplan
>> ```
>>
>> Se estiver correta, aplique-a através do seguinte comando:
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
> **AlmaLinux (8/9) e Rocky Linux (8/9)**
>>
>> O exemplo de configuração abaixo é baseado em AlmaLinux 9.
>>
>> O ficheiro de configuração de rede está localizado no diretório `/etc/sysconfig/network-scripts`. No nosso exemplo, chama-se `ifcfg-eth0`.
>>
>> **Passo 1: Utilizar SSH para se ligar ao seu servidor**
>>
>> ```sh
>> ssh user@serverIP
>> ```
>>
>> **Passo 2: Criar um backup**
>>
>> > [!primary]
>> >
>> > Atenção: o nome do ficheiro de rede no nosso exemplo pode ser diferente do seu. Adapte-o ao seu nome de ficheiro.
>> >
>>
>> Em primeiro lugar, faça uma cópia do ficheiro de configuração para que possa voltar atrás a qualquer momento:
>>
>> ```sh
>> sudo cp -r /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
>> ```
>>
>> **Passo 3: Alterar o ficheiro de configuração da rede**
>>
>> No arquivo de configuração aberto, adicione as seguintes linhas se faltarem. Substitua os elementos genéricos (ou seja, `YOUR_IPv6`, `IPV6_GATEWAY` e `IPV6_PREFIX`) pelos seus valores específicos. Por outro lado, omitimos a configuração IPv4 para evitar qualquer confusão, mas a configuração IPv6 faz-se no mesmo ficheiro de configuração.
>>
>> ```console
>> IPV6INIT=yes
>> IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
>> IPV6_DEFAULTGW=IPV6_GATEWAY
>> ```
>>
>> O conteúdo do ficheiro de configuração pode ser diferente do indicado acima, caso em que basta adicionar os elementos em falta. Não substitua nada no arquivo original.
>>
>> Se precisar de mais endereços IPv6 na máquina, adicione-os na linha `IPV6ADDR_SECONDARIES`, separados por um espaço em branco. 
>>
>> ```console
>> IPV6ADDR_SECONDARIES="ADDITIONAL_IPV6_1/ IPV6_PREFIX ADDITIONAL_IPV6_2/IPV6_PREFIX etc..."
>> ```
>>
>> /// details | **Exemplo de configuração:**
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
>> ```
>>
>> ```console
>> IPV6INIT=yes
>> IPV6ADDR=2607:5300:adce:f2cd::/64
>> IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff:ff
>> ```
>>
>> - Para vários endereços IPV6:
>>
>> ```console
>> IPV6INIT=yes
>> IPV6ADDR=2607:5300:adce:f2cd::
>> IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff:ff
>> IPV6ADDR_SECONDARIES="2607:5300:adce:f2cd::1/64 2607:5300:adce:f2cd::2/64"
>> ```
>> ///
>>
>> **Passo 4: Salve o arquivo e aplique as alterações**
>>
>> Guarde as alterações no ficheiro e, em seguida, reinicie a rede utilizando um dos seguintes comandos:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
>> **CentOS 7**
>>
>> ```sh
>> sudo systemctl restart network
>> ```
>>
>> Você também pode reiniciar o seu servidor para aplicar as alterações.
>>
> **Windows Server 2019 e versões posteriores**
>>
>> **Passo 1: Usar o RDP para se conectar ao servidor**
>>
>> [Encontre mais informações neste guia.](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#ligar-se-ao-servidor)
>>
>> **Passo 2: Abrir a configuração da rede do servidor**
>>
>> Em primeiro lugar, faça clique com o botão direito no ícone de rede situado na área de notificações. Aceda ao `Network and Sharing Center`{.action}.
>>
>> ![Network and Sharing Center](images/ipv6_network_sharing_center.png){.thumbnail}
>>
>> Clique em `Change adapter settings`{.action}.
>>
>> ![Change adapter settings](images/ipv6_change_adapter_settings.png){.thumbnail}
>>
>> Faça clique com o botão direito sobre o seu adaptador de rede e, de seguida, clique em `Properties`{.action}.
>>
>> ![Network Adapter Properties](images/ipv6_network_adapter_properties.png){.thumbnail}
>>
>> Selecione `Internet Protocol Version 6`{.action} e clique em `Properties`{.action}.
>>
>> ![Properties](images/ipv6_properties.png){.thumbnail}
>>
>> **Passo 3: Corrigir a configuração de rede**
>>
>> Introduza a sua configuração IPv6 (`IPv6 address` e `Default Gateway`), marque a caixa `Validar os parâmetros ao sair` e clique no botão `OK`{.action} para validar as suas alterações.
>>
>> ![Properties](images/ipv6_configuration.png){.thumbnail}
>>

### Verificar a configuração e testar a ligação.

Para verificar se a configuração está funcional, existem vários comandos possíveis, consoante o sistema operativo.

- **Para um sistema GNU/Linux**, eis dois exemplos para a interface **eth0** (a adaptar se necessário):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    altname enxa8a1598c6836
    inet6 2607:5300:201:abcd::/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 2607:5300:201:abcd::1/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2607:5300:201:abcd::/64
          Scope:Global
          inet6 addr: 2607:5300:201:abcd::1/64
          Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Para testar a ligação, pode utilizar o seguinte comando:

```bash
ping6 -c 4 proof.ovh.net
```

- **Para um sistema Windows**, utilize o seguinte comando:

```powershell
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::/64
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::1/64
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2607:5300:201:abcd:ff:ff:ff:ff:ff
                                       51.xxx.xxx.y
```

Para testar a ligação, pode utilizar o seguinte comando:

```powershell
ping -6 proof.ovh.net
```

Também pode testar a ligação a outro servidor remoto. No entanto, é necessário que o IPv6 esteja ativo no servidor remoto para que esta operação funcione.

### Diagnóstico

Configurou o IPv6 mas nada funciona?

Existe uma operação simples para determinar se a falha está relacionada com a configuração realizada ou a rede da OVHcloud.

Num primeiro tempo, [coloque o seu servidor em modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

De seguida, utilize os comandos abaixo para configurar o IPv6 de forma não persistente, substituindo « YOUR_IPV6 », « IPV6_PREFIX » e « IPV6_GATEWAY » pelas suas próprias informações:

```sh
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Teste novamente a sua rede através de um ping6, por exemplo:

```sh
ping6 ipv6.google.com
```

Se o seu servidor responde, é provável que uma das etapas da sua configuração inicial não tenha sido realizada corretamente.

De qualquer forma, não hesite em [contactar a nossa equipa de suporte](https://help.ovhcloud.com/csm?id=csm_get_help) para pedir para examinar as suas configurações. Será necessário fornecer:

- O nome do sistema operativo e a versão em uso no servidor.
- O nome e o diretório do ficheiro de configuração de rede.
- O conteúdo desse ficheiro. 

## Quer saber mais? <a name="go-further"></a>

Fale com a nossa [comunidade de utilizadores](/links/community).