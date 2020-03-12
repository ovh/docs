---
title: 'Configurar o IPv6 num servidor VPS'
slug: configurar-ipv6
excerpt: 'Saiba como configurar o IPv6 num servidor VPS da OVH'
section: 'Rede e IP'
order: 1
---

**Última atualização: 12/03/2020**

## Sumário

O IPv6 é a versão mais recente do _Internet Protocol_ (IP). Cada servidor VPS da OVH inclui um endereço IPv4 e um endereço IPv6. Por predefinição, apenas o IPv4 é configurado. Por várias razões, também pode querer configurar o IPv6.

**Saiba como configurar o IPv6 no servidor VPS da OVH.**

> [!warning]
>
> A utilização e a gestão dos serviços da OVH são da responsabilidade do cliente. A OVH não tem permissões de acesso aos VPS e o cliente é o único responsável pela gestão e pela segurança do serviço. Este manual fornece as instruções necessárias para realizar as operações mais comuns. Se encontrar alguma dificuldade ou tiver dúvidas relativamente à administração, à utilização ou à segurança de um servidor, deverá contactar um fornecedor especializado. Para mais informações, aceda à secção “Quer saber mais?” deste manual.
> 

## Requisitos

- Dispor de um [servidor VPS da OVH]({ovh_www}/vps/){.external}.
- Ter acesso ao VPS através do protocolo SSH (acesso root).
- Ter conhecimentos básicos de rede.
- Aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Cloud`{.action}.

## Instruções

A configuração do IPv6 no servidor VPS é realizada em várias etapas e deverá utilizar comandos ou personalizar a configuração do seu servidor. 

Antes de começar, e com o objetivo de utilizar a mesma terminologia durante as operações, consulte a tabela abaixo. Estes são os termos que iremos utilizar ao longo deste manual:

|Termo|Descrição|Exemplo|
|---|---|---|
|YOUR_IPV6|Trata-se do endereço IPv6 associado ao seu serviço|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Trata-se do prefixo (ou *netmask*) do bloco IPv6. Geralmente, é 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Trata-se da gateway do bloco IPv6|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### 1 - Obter as informações de rede necessárias

A primeira etapa consiste em recuperar o endereço IPv6 e a gateway IPv6 associados ao servidor. Existem dois métodos possíveis. Opte pelo método que pretende utilizar.

- [Obter as informações de rede através da Área de Cliente](./#atraves-da-area-de-cliente).
- [Obter as informações de rede através das API](./#atraves-das-api-da-ovh).

#### Através da Área de Cliente

Aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Cloud`{.action}. Clique em `Servidores`{.action} na barra à esquerda e selecione o nome do servidor VPS correspondente. Certifique-se de que está no separador `Página Inicial`{.action}.

O endereço IPv6 e a gateway IPv6 associados ao servidor aparecem na secção `IP`. Consulte-os e siga para a etapa “[2 - Aplicar a configuração IPv6](./#2-aplicar-a-configuracao-ipv6_1){.external}”.

![configureipv6](images/configure-ipv6-step1.png){.thumbnail}

#### Através das API da OVH

Aceda ao site <https://api.ovh.com/console/> e ligue-se com o seu ID de cliente da OVH. A seguir, utilize as duas API abaixo.

A primeira permite-lhe obter o endereço IPv6 associado ao seu servidor.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips
>

A segunda serve para obter a gateway IPv6 associada ao seu servidor.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips/{ipAddress}
>

Consulte-os e siga para a etapa “[2 - Aplicar a configuração IPv6](./#2-aplicar-a-configuracao-ipv6_1){.external}”.

### 2 - Aplicar a configuração IPv6

Depois de obter as informações necessárias para a configuração IPv6, aceda ao seu VPS através de SSH. Caso seja necessário, consulte o nosso manual “[Introdução ao SSH](https://docs.ovh.com/pt/dedicated/ssh-introducao/){.external}” para obter mais informações.

Existem vários métodos para aplicar a configuração IPv6. Escolha a que pretende utilizar consoante a sua situação e as suas necessidades.

- [Aplicação não persistente](./#aplicacao-nao-persistente).
- [Aplicação persistente em Debian e derivados (Ubuntu, Crunchbang, SteamOS…)](./#aplicacao-persistente-em-debian-e-derivados-ubuntu-crunchbang-steamos).
- [Aplicação persistente em Redhat e derivados (CentOS, ClearOS, etc.)](./#aplicacao-persistente-em-redhat-e-derivados-centos-clearos-etc_1).
- [Aplicação persistente no Windows Server](./#aplicacao-persistente-no-windows-server).

#### Aplicação não persistente

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

#### Aplicação persistente em Debian e derivados (Ubuntu, Crunchbang, SteamOS…)

Existem dois métodos para configurar a sua rede consoante o sistema operativo instalado no seu servidor:

- **para Debian 8 e inferior, Ubuntu 16.04 e inferior**: utilize o método baseado no ficheiro "interfaces";

- **para Debian 9, Ubuntu 17.04 e versões posteriores**: utilize o método baseado na função "Netplan".

Em certos casos (Debian 9, mais especificamente), é possível que o método que deve utilizar não esteja especificado acima. Navegue no seu sistema para saber qual é o mais adequado para o seu caso. Caso seja necessário, aceda ao site <https://netplan.io/> para obter mais informações.

> [!warning]
>
> Antes de alterar um ficheiro de configuração, efetue uma cópia de segurança do mesmo. Em caso de erro, poderá facilmente reverter a alteração.
> 

Selecione o método que corresponde ao seu caso.

- [Configuração do ficheiro “interfaces”](./#configuracao-do-ficheiro-interfaces)
- [Configuração através da função Netplan](./#configuracao-atraves-da-funcao-netplan)

#####  Configuração do ficheiro “interfaces”

Dependendo da geração do sistema operativo instalado no servidor, a alteração deverá ser realizada com os privilégios *sudo*:

- o ficheiro `/etc/network/interfaces`
- ou o ficheiro `/etc/network/interfaces.d/50-cloud-init.cfg`

Recomendamos que comece por realizar uma cópia de segurança do ficheiro de configuração em questão. Por exemplo, utilize o comando:

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Assim, poderá reverter a operação através dos seguintes comandos:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.back /etc/network/interfaces
```

Assim que estiver pronto para realizar a configuração, adicione as seguintes linhas ao ficheiro de configuração. Tenha o cuidado de personalizar os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*), assim como a interface de rede se a que utilizar não for **eth0**.

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

De seguida, volte a executar o seu serviço de rede:

```bash
service networking restart
```

#####  Configuração através da função Netplan

Os ficheiros de configuração de rede estão localizados no diretório `/etc/netplan/`. Recomendamos que comece por realizar uma cópia de segurança do ficheiro de configuração em questão. Neste caso, copie o ficheiro `50-cloud-init.yaml` através dos seguintes comandos:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Assim, poderá reverter a operação através dos seguintes comandos:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Assim que estiver pronto para realizar a configuração, crie uma cópia do ficheiro IPv4 para o personalizar à sua maneira. 

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

De seguida, edite o ficheiro `51-cloud-init-ipv6.yaml` para que inclua a configuração IPv6 do seu servidor. Tenha o cuidado de personalizar os elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*), assim como a interface de rede se a que utilizar não for **eth0**.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
```

> [!warning]
>
> No momento da escrita do seu ficheiro, é fundamental respeitar o alinhamento dos argumentos tal como no exemplo acima. Não utilize a tecla de tabulação para inserir espaços. Utilize apenas a tecla de espaço.
>

A seguir, teste a sua configuração utilizando o comando:

```bash
netplan try
```

Se a configuração estiver correta, aplique-a com o seguinte comando:

```bash
netplan apply
```

#### Aplicação persistente em Redhat e derivados (CentOS, ClearOS, etc.)

Os ficheiros de configuração de rede estão localizados no diretório `/etc/sysconfig/network-scripts/`. Recomendamos que comece por realizar uma cópia de segurança do ficheiro de configuração em questão. Por exemplo, copie o ficheiro `ifcfg-eth0` com os seguintes comandos **(personalize a interface de rede se não estiver a utilizar eth0)**:

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Assim, poderá reverter a operação através dos seguintes comandos:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Quando estiver pronto, edite o ficheiro de configuração atualmente utilizado para adicionar as seguintes linhas (não se esqueça de substituir os valores genéricos *YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY* pela informação correspondente):

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

De seguida, deverá criar um ficheiro (com privilégios sudo) indicando as rotas predefinidas.

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

Edite-o (personalizando o valor *IPV6_GATEWAY* e a interface **eth0**, se necessário). 

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Depois de fazer isto, reinicie o seu serviço de rede para aplicar a nova configuração:

```bash
service network restart
```

#### Aplicação persistente no Windows Server

Por predefinição, o IPv6 não está configurado no Windows Server. Para o ativar, abra o `Painel de configuração`, clique em `Ver o estado e as tarefas de rede`{.action} e em `Alterar os parâmetros do adaptador`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Abra o estado da ligação `Ethernet` e clique em `Propriedades`{.action}. Na nova janela, clique em `Protocolo de internet versão 6 (TCP/IPv6)` e, quando estiver selecionado, clique no botão `Propriedades`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

Nesta nova janela, selecione a opção “Utilizar o seguinte endereço iPv6”. Preencha os campos acima com as informações obtidas no primeiro passo. 

Abaixo da opção “Utilizar o seguinte endereço de servidor DNS”, pode indicar os <i>resolvers </i>DNS IPv6 à sua escolha nos respetivos campos. Isto não é necessário se os <i>resolvers </i>indicados na configuração iPv4 já realizarem esta tarefa.

Depois de copiar os elementos, selecione a opção `Validar os parâmetros ao sair` e clique em `OK`{.action} para validar as modificações. É possível que apareça uma mensagem de erro no caso de a gateway indicada não estar na mesma sub-rede IPv6 (/128 e /64, por exemplo). Se este for o caso, deve poder seguir para o passo seguinte ignorando esta mensagem.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### 3 - Verificar a configuração e testar a ligação

Para verificar que a configuração funciona, existem vários comandos consoante o sistema operativo. 

- **Para um sistema baseado em Linux**, pode utilizar um destes dois exemplos (adapte a interface se a que estiver a utilizar não for **eth0**): 

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Para testar a ligação, utilize o seguinte comando: 

```bash
ping6 proof.ovh.net
```

- **Para um sistema baseado em Windows**, utilize os seguintes comandos:

```
ipconfig
 
Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2001:xxxx:xxxx:xxxx::zzzz
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2001:xxxx:xxxx:xxxx::y
                                       51.xxx.xxx.y
```

Para testar a ligação, utilize o seguinte comando: 

```
ping -6 proof.ovh.net
```

Além disso, também pode testar a ligação para outro servidor remoto, mas é necessário que o IPv6 esteja ativo neste último. 

> [!primary]
>
> Se, apesar das operações anteriores, o IPv6 não funciona no seu servidor, existe a possibilidade de ter de realizar algumas ações adicionais. Se for o caso, faça o seguinte:
>
> - Dependendo do sistema operativo, tente modificar o prefixo (ou *netmask*) do seu IP de /128 para /64 de forma a incluir a gateway IPv6 na sua sub-rede.
>
> - Além de reiniciar o serviço de rede, é possível que tenha de reiniciar também o seu servidor para concluir a configuração IPv6.
>

### 4 - Desativar a gestão da rede por cloud-init

> [!primary]
>
> Este passo não é aplicável para os sistemas baseados em Windows.
>

Cloud-init é um pacote instalado por predefinição nas instâncias VPS. Trata-se de uma framework que permite executar um script que indicar ao criar ou ao reiniciar o seu VPS. A sua mecânica é simples e permite que a infraestrutura OpenStack injete scripts no ambiente cloud-init e, portanto, na configuração do VPS.

Dependendo do sistema operativo, cloud-init pode gerir a rede, o hostname, o ficheiro resolv.conf ou o particionamento automático do disco rígido em caso de upgrade.

No caso das distribuições mais recentes (como CentOS, Debian 9, Ubuntu 16.x e versões posteriores), a configuração predefinida do cloud-init reinicia automaticamente a configuração da rede ao reiniciar o servidor.

Para manter o controlo sobre a mesma, deve desativar a gestão automática da rede no **cloud-init**. Para o fazer, utilize o seguinte comando para criar um ficheiro `/etc/cloud/cloud.cfg.d/98-disable-network-config.cf` com o valor `network: {config: disabled}`:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

Depois de fazer isto, reinicie o servidor para que as alterações sejam aplicadas. 

Para que o cloud-init volte a gerir a rede de forma automática, elimine o ficheiro recentemente criado e mova-o para outro diretório.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}