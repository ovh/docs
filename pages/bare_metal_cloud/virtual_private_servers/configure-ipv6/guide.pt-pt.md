---
title: "Configurar o IPv6 num VPS"
excerpt: "Saiba como configurar o IPv6 num VPS da OVHcloud"
updated: 2024-09-11
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O IPv6 é a versão mais recente do *Internet Protocol* (IP). Cada servidor VPS da OVHcloud é entregue com um endereço IPv4 e um endereço IPv6. Por predefinição, apenas o IPv4 é configurado. Se tiver de configurar o IPv6, deverá fazê-lo manualmente no seu sistema.

**Saiba como configurar o IPv6 no servidor VPS da OVHcloud através de vários métodos.**

> [!warning]
>
> A utilização e a gestão dos serviços da OVHcloud são da responsabilidade do cliente. A OVHcloud não tem permissões de acesso aos VPS e o cliente é o único responsável pela gestão e pela segurança do serviço. Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
> 

## Requisitos

- Dispor de um [servidor VPS da OVHcloud](https://www.ovhcloud.com/pt/vps/){.external}.
- Ter acesso ao VPS através de SSH (acesso root) ou de um ambiente de trabalho remoto (Windows).
- Ter conhecimentos básciso de rede.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external} ou à [API OVHcloud](https://api.ovh.com/).

## Instruções

As secções seguintes contêm configurações para as distribuições que disponibilizamos atualmente, bem como para os sistemas operativos/distribuições mais utilizados. O primeiro passo consiste sempre em aceder ao servidor através de SSH ou de uma sessão de ligação GUI (RDP para um VPS Windows).

> [!warning]
>
> Tenha em conta que nos sistemas operativos Linux recentes que disponibilizamos para VPS, o endereço IPv6 está configurado por predefinição. Neste caso, não é necessário configurar o. Verifique o ficheiro de configuração do sistema operativo antes de realizar qualquer alteração.
>

A configuração do IPv6 no servidor VPS é realizada em várias etapas Será regularmente convidado a utilizar comandos ou a personalizar a configuração do seu servidor. 

Antes de começar, e com o objetivo de utilizar a mesma terminologia durante as operações, consulte a tabela abaixo. Estes são os termos que iremos utilizar ao longo deste manual:

|Termo|Descrição|Exemplo|
|---|---|---|
|YOUR_IPV6|Trata-se do endereço IPv6 associado ao seu serviço|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Trata-se do prefixo (ou *netmask*) do seu bloco IPv6, geralmente de 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Trata-se da gateway do bloco IPv6|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Etapa 1: Obter as informações de rede necessárias

A primeira etapa consiste em recuperar o endereço IPV6 e a gateway IPv6 associados ao servidor. Existem dois métodos possíveis. Opte pelo método que pretende utilizar.

- [Obter as informações de rede através da Área de Cliente OVHcloud](#viacontrolpanel).
- [Obter as informações de rede através das API](#viaapi).

#### Através da Área de Cliente <a name="viacontrolpanel"></a>

Ligue-se à sua [Área de Cliente OVHcloud](/links/manager), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidor privado virtual`{.action}.

O endereço IPv6 e a gateway IPv6 associados ao servidor aparecem na secção `IP`. Consulte-os e siga para a etapa n.º 2 “[Aplicar a configuração IPv6](#applyipv6)”.

![configureipv6](images/vps_ipv6_information.png){.thumbnail}

#### Através das API OVHcloud <a name="viaapi"></a>

Aceda ao site <https://api.ovh.com/console/> e ligue-se ao mesmo com o seu ID OVHcloud. A seguir, utilize as duas API abaixo.

A primeira permite-lhe obter o endereço IPv6 associado ao seu servidor.

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips
>

A segunda serve para obter a gateway IPv6 associada ao seu servidor.

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips/{ipAddress}
>

Depois de obter os endereços, consulte o passo 2 "[Aplicar a configuração IPv6](#applyipv6)".

### Etapa 2: aplicar a configuração IPv6 <a name="applyipv6"></a>

Depois de obter as informações necessárias para a configuração IPv6, aceda ao seu VPS através de SSH. Caso seja necessário, consulte o nosso manual “[Introdução ao SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction){.external}” para obter mais informações.

Existem vários métodos para aplicar a configuração IPv6. Escolha a que pretende utilizar consoante a sua situação e as suas necessidades.

- [Aplicação não persistente](#nonpersistent).
- [Aplicação persistente em Debian e derivados (Ubuntu, Crunchbang, SteamOS, etc.)](#persistentdebian).
- [Aplicação persistente em Redhat e derivados (CentOS, Rocky Linux, Alma Linux, etc.)](#persistentredhat).
- [Aplicação persistente em fedora](#persistentfedora)
- [Aplicação persistente em Windows Server](#persistentwindows).

#### Aplicação não persistente <a name="nonpersistent"></a>

> [!warning]
>
> Depois de reiniciar o servidor VPS, perderá esta configuração (configuração não persistente). 
> 

Aceda ao seu VPS através de SSH utilizando os seguintes comandos. Certifique-se de que os personaliza para:

- os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) graças às informações que consultou anteriormente;
- a interface de rede se não estiver a utilizar **eth0**.

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Aplicação persistente em Debian e derivados (Ubuntu, Crunchbang, SteamOS, etc.) <a name="persistentdebian"></a>

> [!warning]
>
> Antes de alterar um ficheiro de configuração, crie sempre uma cópia de segurança do original em caso de problema.
>

Existem dois métodos para configurar a sua rede de acordo com o sistema operativo instalado no seu servidor:

- **Para Debian 10 e 11**: utilize o [método baseado no ficheiro de *interfaces*](#interfaces);

- **Para Debian 12, Ubuntu 20.04 e versões posteriores**: utilize o [método baseado na função *Netplan*](#netplan).

Em certos casos, o método a utilizar pode não ser o acima especificado. Navegue no seu sistema para verificar o método ativo no seu caso.  Visite o site <https://netplan.io/> para mais informações, caso seja necessário.

> [!primary]
>
> Esteja atento, os nomes exatos de ficheiros podem variar.
>

##### Configuração dos ficheiros *interfaces* <a name="interfaces"></a>

Por predefinição, os ficheiros de configuração estão localizados em `/etc/network/interfaces.d/`.

O método mais recomendado é criar um ficheiro de configuração no diretório `/etc/network/interfaces.d/`.

No nosso exemplo, o nosso ficheiro é nomeado `51-cloud-init-ipv6`:

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Isto permite-lhe separar a configuração IPv6 e restaurar facilmente as modificações em caso de erro.

Adicione as seguintes linhas ao ficheiro. Substitua os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) e a interface de rede (se o seu servidor não utilizar **eth0**) pelos seus valores personalizados.

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Eis um exemplo concreto:

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

A seguir, reinicie o seu serviço de rede com um dos seguintes comandos:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

Também pode adicionar a configuração acima a um dos seguintes ficheiros (com os privilégios *sudo*), conforme a geração do sistema operativo instalado no servidor:

- ficheiro `/etc/network/interfaces`
- o ficheiro `/etc/network/interfaces.d/50-cloud-init.cfg`

Recomendamos que guarde o ficheiro de configuração adequado. Por exemplo, utilize o seguinte comando:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

Poderá então anular as alterações com os seguintes comandos:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

##### Configuração com o auxílio de Netplan <a name="netplan"></a>

Os ficheiros de configuração de rede estão localizados no diretório `/etc/netplan/`. Por predefinição, o ficheiro de configuração principal chama-se `50-cloud-init.yaml`. Antes de executar qualquer uma das etapas a seguir, verifique primeiro se o endereço IPv6 já foi configurado. Se for o caso, não é necessário configurar o endereço IPv6 novamente, pois só tem um endereço IPv6 com o servidor VPS.

Se o endereço IPv6 não estiver configurado, a melhor abordagem é criar um ficheiro de configuração separado para configurar o endereço IPv6 no diretório `/etc/netplan/`. Desta forma, poderá facilmente reverter as alterações em caso de erro.

Além disso, recomendamos que ajuste as permissões para o ficheiro recém-criado. Para mais informações sobre as permissões dos ficheiros, consulte a [documentação oficial do ubuntu](https://help.ubuntu.com/community/FilePermissions){.external}.

No nosso exemplo, o nosso ficheiro é nomeado `51-cloud-init-ipv6.yaml`:

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

De seguida, modifique o ficheiro `51-cloud-init-ipv6.yaml` adicionando as seguintes linhas para a configuração IPv6. Substitua os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) bem como a interface de rede (se o seu servidor não utilizar **eth0**) pelos seus valores específicos.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: false
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
# If IPV6_PREFIX is 128 then add link route to gateway
#              - to: IPv6_GATEWAY
#                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

Eis um exemplo concreto (com o prefixo /128):

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: false
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: 2607:5300:201:abcd::1
                scope: link
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> É importante respeitar o alinhamento de cada elemento deste ficheiro tal como representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento. Apenas a tecla de espaço é necessária.
>

Pode testar a sua configuração através do seguinte comando:

```bash
sudo netplan try
```

Se a configuração estiver correta, execute-a através do seguinte comando:

```bash
sudo netplan apply
```

#### Aplicação persistente em Red Hat e seus derivados (CentOS, Rocky Linux, Alma Linux, etc.) <a name="persistentredhat"></a>

Os ficheiros de configuração de rede encontram-se no diretório `/etc/sysconfig/network-scripts/`. Recomendamos que comece por realizar uma cópia de segurança do ficheiro de configuração adequado. Por exemplo, copie o ficheiro `ifcfg-eth0` utilizando os seguintes comandos: Não se esqueça de substituir **eth0** pela sua interface real, caso seja necessário.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Poderá então anular as alterações com os seguintes comandos:

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

De seguida, altere o ficheiro `ifcfg-eth0` adicionando a configuração IPv6 do seu servidor. Substitua os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) pelos seus valores personalizados.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Eis um exemplo concreto:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

**Em CentOS 7, deve criar um ficheiro de roteamento para além dos passos acima indicados:**

- Crie um ficheiro (com privilégios *sudo*), indicando os itinerários IPv6 por defeito:

```bash
sudo touch /etc/sysconfig/network-scripts/route6-eth0
```

- Altere o ficheiro e adicione as linhas abaixo. Substitua os elementos genéricos (*IPV6_GATEWAY* e **eth0**, se necessário) pelos valores personalizados.

```console
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Eis um exemplo concreto:

```console
2607:5300:201:abcd::1 dev eth0
default via 2607:5300:201:abcd::1
```

Por fim, reinicie o seu serviço de rede para permitir que o sistema aplique a nova configuração com um dos seguintes comandos:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Aplicação persistente no Fedora 37 e versões posteriores <a name="persistentfedora"></a>

O ficheiro de configuração de rede está em `/etc/NetworkManager/system-connections/`. Recomendamos começar por realizar uma cópia de segurança do ficheiro de configuração correspondente. No nosso exemplo, o nosso ficheiro chama-se `cloud-init-eth0.nmconnection`, pelo que copiamos o ficheiro `cloud-init-eth0.nmconnection` utilizando os seguintes comandos. Se necessário, substitua **eth0** pela sua interface atual.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

A seguir, editamos o ficheiro `cloud-init-eth0.nmconnection` ao adicionar apenas as linhas para a configuração IPv6 do servidor. Substitua os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) pelos seus valores específicos.

Se assumirmos que a sua interface é **eth0**, a configuração deverá ser a seguinte:

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

#### Aplicação persistente no Windows Server <a name="persistentwindows"></a>

Por predefinição, o IPv6 não está configurado nos servidores Windows. Para o ativar, abra o `Painel de configuração`{.action} e clique em `Mostrar o estado e as tarefas da rede`{.action} e, a seguir, em `Alterar os parâmetros da placa`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Clique em `Ethernet`{.action} para abrir os parâmetros e clique no botão `Propriedades`{.action} para mostrar `Propriedades Ethernet`.

Selecione `Protocol Internet version 6 (TCP/IPv6)`{.action} e clique no botão `Propriedades`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

Na janela Propriedades IPv6, selecione `Utilizar o seguinte` endereço IPv6. Introduza os endereços IP que recuperou na primeira etapa.

Também pode introduzir as resoluções DNS IPv6 à sua escolha `Utilizar o seguinte` endereço de servidor DNS. Isto não é obrigatório se os resolvers DNS da configuração IPv4 já estiverem funcionais.

Finalmente, selecione a opção `Validar os parâmetros ao sair` e clique no botão `OK`{.action} para validar as suas modificações. Pode surgir uma mensagem de erro se a gateway especificada não estiver na mesma sub-rede IPv6 (/128 e /64, por exemplo). Pode ignorar esta mensagem e passar à etapa seguinte.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### Etapa 3: Verificar a configuração e testar a ligação.

Para verificar se a configuração está funcional, existem vários comandos possíveis, consoante o sistema operativo.

- **Para um sistema GNU/Linux**, eis dois exemplos para a interface **eth0** (a adaptar se necessário):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2607:5300:201:abcd::7c5/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 2607:5300:201:abcd::7c5/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Para testar a ligação, pode utilizar o seguinte comando:

```bash
ping6 proof.ovh.net
```

- **Para um sistema Windows**, utilize o seguinte comando:

```powershell
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::7c5/128
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2607:5300:201:abcd::1
                                       51.xxx.xxx.y
```

Para testar a ligação, pode utilizar o seguinte comando:

```powershell
ping -6 proof.ovh.net
```

Também pode testar a ligação a outro servidor remoto. No entanto, é necessário que o IPv6 esteja ativo no servidor remoto para que esta operação funcione.

> [!primary]
>
> Se, apesar destas modificações, o IPv6 não aparenta estar a funcionar no seu servidor, é possível (em casos raros) que tenha de efetuar modificações adicionais. Nesse caso, efetue as seguintes operações:
>
> - Em função do sistema operativo, tente substituir o prefixo (ou *netmask*) do seu endereço IP por /128 e /64. Esta opção inclui a gateway IPv6 na sua sub-rede.
>
> - Além de reiniciar o serviço de rede, é possível que seja necessário reiniciar o seu servidor para finalizar a configuração IPv6.
> 
> - No Windows, verifique se a firewall autoriza os pedidos ICMP para IPv6.

### Etapa 4: Desativar a gestão da rede Cloud-init (como opção)

> [!primary]
>
> Este passo não é aplicável para os sistemas baseados em Windows.
>

Cloud-init é um pacote instalado por predefinição nas instâncias VPS. Trata-se de uma framework que permite executar um script que indicar ao criar ou ao reiniciar o seu VPS. A sua mecânica é simples e permite que a infraestrutura OpenStack injete scripts no ambiente cloud-Init e, portanto, na configuração do VPS.

Dependendo do sistema operativo, cloud-init pode gerir a rede, o hostname, o ficheiro resolv.conf ou o particionamento automático do disco rígido em caso de upgrade.

No caso das distribuições mais recentes (como CentOS, Debian 9, Ubuntu 16.x e versões posteriores), a configuração predefinida do cloud.init pode, por vezes, reinicializar automaticamente a configuração de rede aquando do arranque do servidor.

Em certos casos de utilização específica, recomenda-se evitar a reinicialização desativando a gestão automática da rede no Cloud-init. Para o fazer, utilize o seguinte comando para criar um ficheiro `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` com o valor `network: {config: disabled}`:

```bash
sudo echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Reinicie o seu servidor para que a operação seja tomada em conta. 
>

Para que o cloud-init volte a gerir a rede de forma automática, elimine o ficheiro recentemente criado e mova-o para outro diretório.

## Saiba mais

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.