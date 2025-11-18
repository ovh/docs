---
title: 'Proteger a sua infraestrutura OVHcloud com o Stormshield Network Security'
excerpt: 'Descubra como proteger a sua infraestrutura OVHcloud com o Stormshield Network Security implementado no Public Cloud'
updated: 2025-05-29
---

## Objetivo

No panorama digital em constante evolução, a segurança da infraestrutura cloud tornou-se uma prioridade absoluta para as organizações de todas as dimensões. Enquanto as empresas dependem cada vez mais das soluções cloud para as suas operações, assegurar a proteção dos dados sensíveis e manter a integridade da rede é uma tarefa crítica. O Stormshield SNS EVA (Stormshield Elastic Virtual Appliance) é uma solução de segurança completa, concebida para proteger os ambientes cloud contra uma vasta gama de ameaças.

Este guia fornece instruções passo a passo para implementar e configurar o SNS EVA no Public Cloud da OVHcloud com o vRack e o roteamento IP público, abrangendo funcionalidades chave como as firewalls de rede, as VPN IPSec e as VPN SSL/TLS. Ao seguir este guia, reforçará a segurança da sua infraestrutura Public Cloud da OVHcloud e assegurará a segurança das suas operações.

**Este guia explica como proteger a sua infraestrutura OVHcloud com o Stormshield Network Security implementado no Public Cloud.**

> [!warning]
> Este tutorial explica como utilizar uma ou várias soluções da OVHcloud com ferramentas externas e descreve as ações a realizar num contexto específico. Poderá ser necessário adaptar as instruções à sua situação específica.
>
> Se tiver problemas na aplicação destas instruções, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que discuta o problema com a nossa comunidade. Para mais informações, consulte [Quer saber mais](#gofurther) deste tutorial.
>

## Requisitos

- Um [projeto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) na sua conta OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Um [utilizador OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (facultativo).
- Conhecimentos básicos em rede.
- Uma conta Stormshield criada através do [site Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm).
- Assegurar que o vRack está ativado e configurado para permitir uma comunicação segura entre os componentes da infraestrutura.
- Um bloco de endereços [Additional IP](/links/network/additional-ip) (/29) para permitir o failover e a configuração de alta disponibilidade.
- Uma licença Stormshield Elastic Virtual Appliance BYOL (**B**ring **Y**our **O**wn **L**icence), obtida junto de [parceiros ou revendedores terceiros](https://www.stormshield.com/partner/partner-finder/), que deverá fornecer aquando da instalação e da configuração.

## Instruções

Além da instalação e da configuração do Stormshield Network Security, este tutorial apresenta diferentes casos de uso em função das suas necessidades:

- [Instalar e configurar o Stormshield Network Security no seu ambiente Public Cloud](#step1)
- [Caso de utilização 1: configurar o Stormshield Network Security para uso como gateway](#step2)
- [Caso de utilização 2: configurar um NAT (**N**etwork **A**ddress **T**translation) para aceder a um serviço HTTP privado do exterior](#step3)
- [Caso de utilização 3: túnel IPsec (site a site)](#step4)
- [Caso de utilização 4: VPN SSL/TLS (cliente a site)](#step5)

### Instalar e configurar o Stormshield Network Security no seu ambiente Public Cloud <a name="step1"></a>

> [!primary]
> Neste tutorial, a instalação e a configuração do Stormshield SNS EVA são efetuadas principalmente através da linha de comandos. Abra um terminal para executar as instruções.
>
> Tenha em conta que todos os tópicos relativos à « Alta disponibilidade » ou « Stormshield-2 » são facultativos, assim como a utilização da rede vRack com Additional IP. Eles estão incluídos para mostrar como implementar o sistema com duas instâncias em modo ativo/passivo para uma alta disponibilidade. Numa versão mínima, também pode funcionar com uma única instância se isso for suficiente para as suas necessidades.

> [!primary]
> Neste cenário, iremos utilizar duas máquinas virtuais configuradas para a aplicação de segurança para conseguirmos uma elevada disponibilidade (**H**igh **A**vailability ou HA), bem como uma máquina virtual adicional para gerir e gerir a aplicação de segurança. Esta configuração garante a proteção contra avarias e a disponibilidade contínua do serviço. Para mais exemplos e conselhos detalhados sobre as opções de escalabilidade, consulte a [documentação do Stormshield](https://documentation.stormshield.eu/HOME/Content/Website_Topics/Root-HomePage-EN.htm).

#### Configurar o vRack

Neste passo, configuramos o vRack, uma rede virtual privada fornecida pela OVHcloud. O vRack permite-lhe interligar várias instâncias ou servidores no seio de um ambiente Public Cloud, assegurando assim a isolação da rede mantendo uma comunicação segura. Ao adicionar o seu projeto Public Cloud e o seu bloco Additional IP ao mesmo vRack, pode permitir às suas instâncias SNS EVA comunicar de maneira segura, conservando o controlo total da gestão dos endereços IP. A rede privada vRack permite-lhe igualmente proteger servidores Bare Metal Cloud ou VMs Private Cloud com aplicações de segurança implementadas no Public Cloud.

**Adicionar o seu projeto Public Cloud e o seu bloco Additional IP ao mesmo vRack.**

Para fins de exemplo para este manual, o bloco IP é `147.135.161.152/29`.<br>
Utilizamos o primeiro IP utilizável `147.135.161.153` para a primeira instância de SNS EVA e utilizamos temporariamente o segundo IP utilizável `147.135.161.154` para o segundo SNS EVA.<br>
O endereço da gateway é `147.135.161.158`.

Consulte o guia « [Configurar um bloco de endereços IP no vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) » para mais informações.

Eis abaixo a arquitetura que vamos implementar.

![SNS EVA vrack](images/stormshield-ha-vrack.png){.thumbnail}

#### Configurar a rede OpenStack

Crie a rede privada para as interfaces externas SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 0 --disable-port-security stormshield-ext
```

```bash
openstack subnet create --network stormshield-ext --subnet-range 192.168.1.0/29 --dhcp stormshield-ext
```

Crie a rede privada para as interfaces internas do SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 200 --disable-port-security stormshield-vlan200
```

```bash
openstack subnet create --network stormshield-vlan200 --subnet-range 10.200.0.0/16 --dhcp --dns-nameserver <dns_address_ip> stormshield-vlan200
```

Crie a rede privada para as interfaces SNS EVA HA (**H**igh **A**vailability):

```bash
openstack network create --provider-network-type vrack --provider-segment 199 --disable-port-security stormshield-ha
```

```bash
openstack subnet create --network stormshield-ha --subnet-range 192.168.2.0/29 --dhcp --gateway none stormshield-ha
```

#### Implementar as instâncias SNS EVA

Go to the `download` section of the [official Stormshield website](https://documentation.stormshield.eu/SNS/v4/en/Content/PAYG_Deployment_Guide/Downloading_installation_file.htm). Conecte-se à sua conta Stormshield e siga as instruções para descarregar a imagem Stormshield OpenStack.

Aceda à pasta onde descarregou a sua imagem SNS EVA OpenStack e importe a imagem (para este tutorial, utilizamos a imagem `utm-SNS-EVA-4.8.3-openstack.qcow2`):

```bash
openstack image create --disk-format raw --container-format bare --file ./utm-SNS-EVA-4.8.3-openstack.qcow2 stormshield-SNS-EVA-4.8.3
```

Crie as instâncias SNS EVA (neste exemplo, chamamos `stormshield-1` e `stormshield-2`):

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-1
```

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-2
```

> [!primary]
> Por razões de desempenho, sugerimos que utilize as versões de máquinas virtuais listadas para os tipos de licenças SNS EVA concedidas:
>
> - EVA1: B3-8 / B3-16
> - EVA2: B3-16 / B3-32
> - EVA3: B3-32 / B3-64
> - EVA4: B3-64 / B3-128
> - EVAU: B3-128 / B3-256
>

#### Configure the SNS EVA instances

#### Configurar as instâncias SNS EVA

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa. No menu à esquerda, clique em `Instâncias`{.action} no separador **Compute** e encontre as suas duas instâncias SNS EVA.

Aceda à consola VNC para as duas instâncias SNS EVA e configure a disposição do teclado e a palavra-passe.

Configure a gateway predefinida para o primeiro SNS EVA com o nosso gateway de blocos IP:

```console
vi /usr/Firewall/ConfigFiles/object

[Host]
Firewall_out_router=147.135.161.158,resolve=static
...
```

Configure a interface de rede externa no primeiro SNS EVA com o primeiro endereço IP utilizável do nosso bloco IP e a interface de rede interna com o endereço IP `10.200.0.1`:

```console
vi /usr/Firewall/ConfigFiles/network

...
[ethernet0]
...
Address=147.135.161.153
Mask=255.255.255.248

[ethernet1]
...
Address=10.200.0.1
Mask=255.255.0.0
...
```

Aplique a nova configuração de rede:

```bash
ennetwork
```

Efetue a mesma configuração para o segundo SNS EVA mas com o segundo endereço IP `147.135.161.154` do nosso bloco IP para a interface externa em vez de `147.135.161.153`.

Adicione uma licença diferente nas duas instâncias SNS EVA seguindo a [documentação oficial](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm).

Crie uma regra de firewall semelhante a esta em ambos os DNS EVA na interface gráfica da Web:

![SNS EVA vrack](images/ha-filter.png){.thumbnail}

No primeiro SNS EVA, crie um grupo de firewall (`Configuration` > `System` > `High Availability`). Relativamente ao endereço IP, verifique qual o IP atribuído à interface HA pelo DHCP OpenStack.

![SNS EVA vrack](images/ha-1.png){.thumbnail}

![SNS EVA vrack](images/ha-2.png){.thumbnail}

Quando a configuração da HA estiver terminada no primeiro DNS EVA, junte-se ao grupo Firewall no segundo :

![SNS EVA vrack](images/ha-3.png){.thumbnail}

![SNS EVA vrack](images/ha-4.png){.thumbnail}

A segunda interface externa do SNS EVA utilizará a partir de agora o mesmo endereço IP que a primeira. Por conseguinte, o endereço IP `147.135.161.154` pode doravante ser utilizado para outros fins.

Se tudo estiver configurado corretamente, após reiniciar o segundo SNS EVA, você deve ver algo semelhante nos indicadores de integridade do link HA:

![SNS EVA vrack](images/ha-5.png){.thumbnail}

#### Configure and secure the SNS EVA management

#### Configurar e proteger a gestão do DNS EVA

> [!tabs]
> **1**
>>
>> Obtenha o seu endereço IP público:
>>
>> ```console
>> curl ipinfo.io/ip
>> <ip_address>
>> ```
>>
> **2**
>>
>> Crie um objeto host para o seu endereço IP público:
>>
>>![SNS EVA vrack](images/configure-management-1.png){.thumbnail}
>>
> **3**
>>
>> Limite o acesso à interface gráfica ao seu endereço IP público e ative o SSH:
>>
>>![SNS EVA vrack](images/configure-management-2.png){.thumbnail}
>>
> **4**
>>
>> Limite o acesso ao SSH ao seu endereço IP público:
>>
>>![SNS EVA vrack](images/configure-management-3.png){.thumbnail}

#### Resincronizar a configuração HA

A sincronização entre as duas instâncias SNS EVA é crucial para garantir que as duas firewalls estão sempre atualizadas com a mesma configuração. Isto pode ser feito através da linha de comandos SSH ou diretamente através da interface gráfica do utilizador (GUI).

> [!primary]
> Para este exemplo, utilizamos a solução em linha de comandos SSH. Se preferir utilizar a interface gráfica do utilizador para a sincronização, consulte a secção « Ecrã de Alta Disponibilidade » da [documentação do Stormshield SNS EVA](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/High_Availability/High_availability_screen.htm) para obter informações detalhadas sobre os passos a utilizar.

Nesta fase, as duas instâncias SNS EVA não devem ser sincronizadas, pois configurámos um grande número de parâmetros na primeira instância, da qual a segunda não tem conhecimento.

Conecte-se em SSH à instância SNS EVA ativa:

```bash
ssh admin@<ip_address>
```

Sincronize os dois SNS EVA:

```bash
hasync
```

Esta operação é necessária a cada atualização da configuração.

### Configurações de casos de utilização

Depois de implementar a firewall DNS EVA, pode ser utilizado em vários cenários de segurança avançados, como VPN IPsec, VPN SSL/TLS, gateways de rede (IN ou OUT), conforme descrito abaixo.
Graças à rede privada vRack, as VLAN listadas também podem ser utilizadas fora do ambiente Public Cloud: nos produtos Bare Metal ou Private Cloud.

#### Casos de utilização n°1: configurar o Stormshield Network Security para utilizar como gateway <a name="step2"></a>

Neste exemplo, a firewall virtual funcionará como um gateway seguro para as instâncias privadas (ou qualquer outro servidor) no seio do VLAN200 da rede vRack específica. Este tipo de tráfego pode ser filtrado através de URLs na firewall.

![SNS EVA vrack](images/stormshield-gateway.png){.thumbnail}

- Crie um objeto de rede para o VLAN200 seguindo [esta parte da documentação oficial do Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm).

- [Crie uma nova regra de filtragem](https://documentation.stormshield.com/SNS/v4/en/Content/HowTo_-_IPSec_VPN_-_Authentication_by_certificate/Setup-Main-Site-30-Creating-Filtering-policy.htm) semelhante a esta para permitir o tráfego proveniente do VLAN200 de sair:

![SNS EVA vrack](images/gateway-2.png){.thumbnail}

- [Crie uma regra NAT](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Filtering_and_NAT/NAT_tab.htm) semelhante a esta:

![SNS EVA vrack](images/gateway-3.png){.thumbnail}

Sincronize as duas instâncias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### Verificar se uma instância pode aceder à Internet a partir do VLAN200

[Importar a sua chave pública SSH](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/keypair.html):

```bash
openstack keypair create --public-key ~/.ssh/id_rsa.pub <name>
```

Crie uma instância no VLAN200:

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network stormshield-vlan200 --key-name <name> ubuntu-webserver
```

Conecte-se à instância SNS EVA em SSH:

```bash
ssh -A admin@<instance_ip>
```

A partir da instância SNS EVA, ligue-se ao servidor web Ubuntu em SSH. Verifique qual o endereço IP atribuído à sua instância de servidor web Ubuntu pelo DHCP OpenStack:

```bash
ssh ubuntu@<ip_address>
```

Teste se pode aceder a um website público:

```bash
curl -I https://www.ovh.com/manager/
HTTP/2 200
```

#### Casos de utilização n°2: configurar um NAT (**N**etwork **A**ddress **T**translation) para aceder a um serviço HTTP privado a partir do exterior <a name="step3"></a>

Neste exemplo, a Internet deve ser capaz de chegar ao servidor web privado instalado no VLAN200. O objetivo desta configuração é proteger o servidor web com uma firewall de rede.

![SNS EVA vrack](images/stormshield-nat-http.png){.thumbnail}

> [!tabs]
> **1**
>>
>> Instale Nginx na instância ubuntu-webserver:
>>
>> ```bash
>> sudo apt-get update
>> sudo apt-get install -y nginx
>> ```
>>
> **2**
>>
>> Crie um objeto host para a instância ubuntu-webserver:
>>
>>![SNS EVA vrack](images/nat-1.png){.thumbnail}
>>
> **3**
>>
>> Crie uma regra NAT semelhante a esta:
>>
>> ![SNS EVA vrack](images/nat-2.png){.thumbnail}
>>
> **4**
>>
>> Crie uma regra de filtragem semelhante a esta:
>>
>> ![SNS EVA vrack](images/nat-3.png){.thumbnail}
>>

Teste o acesso ao website a partir do exterior:

```bash
curl -I http://<ip_address>
HTTP/1.1 200 OK
```

Sincronize as duas instâncias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

#### Casos de utilização n°3: túnel IPsec (de site para site) <a name="step4"></a>

Neste exemplo, o túnel IPsec é configurado para interligar duas regiões PCI diferentes: SBG7 (rede VLAN200) e GRA11 (rede VLAN201), mas cada um destes sites pode ser um site remoto, como um escritório ou um datacenter.

![SNS EVA vrack](images/stormshield-ipsec.png){.thumbnail}

Repita todas as etapas numa outra região utilizando a VLAN 201 em vez da VLAN 200 e intervalos de endereços IP diferentes para as sub-redes Stormshield-ext e Stormshield-ha.;

##### **Configurar o primeiro site**

- [Adicione um objeto host](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm) para o SNS EVA remoto e adicione um objeto de rede para a rede privada remota VLAN201.

- [Crie um túnel de site para site standard](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/IPSec_VPN/Encryption_policy-Tunnels_tab-Site_to_Site-Creating.htm).

> [!tabs]
> **1**
>>
>> Adicione a rede privada local e a rede privada remota:
>>
>>![SNS EVA vrack](images/ipsec-3.png){.thumbnail}
>>
> **2**
>>
>> Crie a gateway remota:
>>
>>![SNS EVA vrack](images/ipsec-4.png){.thumbnail}
>>
> **3**
>>
>> Escolha uma chave pré-partilhada:
>>
>>![SNS EVA vrack](images/ipsec-5.png){.thumbnail}
>>
> **4**
>>
>> Crie e ative o túnel:
>>
>>![SNS EVA vrack](images/ipsec-7.png){.thumbnail}
>>
> **5**
>>
>> Adicione uma regra de filtragem como esta para permitir o tráfego através do túnel:
>>
>>![SNS EVA vrack](images/ipsec-8.png){.thumbnail}
>>

Sincronize as duas instâncias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### **Configurar o segundo site**

Proceda da mesma forma que para o primeiro site, mas utilize VLAN200 para a rede privada remota e o endereço IP apropriado para OVH_REMOTE_FW.

###### **Teste o túnel VPN IPsec**

Desde a primeira instância de um servidor web privado do site :

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address>(<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=15.2 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=14.0 ms
```

A partir da segunda instância de um servidor web privado do site:

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=16.9 ms
64 bytes from <ip_address>: icmp_seq=3 ttl=64 time=16.4 ms
```

#### Casos de utilização n°4: VPN SSL/TLS (de cliente a site) <a name="step5"></a>

Neste exemplo, um cliente OpenVPN remoto irá ligar-se à rede privada dentro do VLAN200.

![SNS EVA vrack](images/stormshield-ssl-vpn.png){.thumbnail}

##### **Configuração do diretório LDAP**

- [Crie um diretório LDAP interno](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Directory_configuration/Creating_an_internal_LDAP.htm) para gerir utilizadores VPN.

Num cenário de produção, este LDAP/AD tem de ser remoto, não local.

![SNS EVA vrack](images/ssl-vpn-1.png){.thumbnail}

- Criar o diretório de utilizadores:

![SNS EVA vrack](images/ssl-vpn-2.png){.thumbnail}

- Adicione um utilizador ao nosso diretório local:

![SNS EVA vrack](images/ssl-vpn-3.png){.thumbnail}

- Escolha uma palavra-passe para o novo utilizador:

![SNS EVA vrack](images/ssl-vpn-4.png){.thumbnail}

##### **Configuração dos objetos de rede VPN**

Crie dois objetos de rede para o cliente VPN SSL.

Rede de Cliente UDP:

![SNS EVA vrack](images/ssl-vpn-5.png){.thumbnail}

Rede de cliente TCP:

![SNS EVA vrack](images/ssl-vpn-6.png){.thumbnail}

##### **Configuração do servidor VPN SSL**

Configure o servidor VPN SSL:

![SNS EVA vrack](images/ssl-vpn-7.png){.thumbnail}

##### **Gestão dos direitos de utilizador**

Adicione ao seu utilizador a autorização para utilizar o servidor VPN SSL (`Configuration` > `Users` > `Access privileges` > `Detailed Access` > `Add`)

Procure o seu utilizador:

![SNS EVA vrack](images/ssl-vpn-8.png){.thumbnail}

Autorize VPN SSL :

![SNS EVA vrack](images/ssl-vpn-9.png){.thumbnail}

##### **Configuração das regras de filtragem**

Adicione uma regra de filtragem como esta para permitir que o cliente VPN aceda ao VLAN200:

![SNS EVA vrack](images/ssl-vpn-10.png){.thumbnail}

##### **Sincronização das instâncias SNS**

Sincronize as duas instâncias HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### **Testar a VPN SSL/TLS**

> [!primary]
> Para testar a conectividade SSL/TLS, use qualquer dispositivo com o OpenVPN instalado. Este exemplo inclui o teste de um cliente OpenVPN sobre uma instância OpenStack numa outra região.
>
> Neste exemplo, utilizamos o cliente OpenVPN, mas pode igualmente utilizar a [versão em pacote por Stormshield](https://vpn.stormshield.eu/).

Faça o download do ficheiro de configuração VPN (`Configuration` > `VPN` > `SSL VPN` > `Advanced configuration` > `Export the configuration file`).

Crie uma instância de cliente OpenVPN pública na região à sua escolha:

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network Ext-Net --key-name sguyenne ubuntu-vpn-client
```

Verifique o endereço IP atribuído à instância e copie o ficheiro de configuração para ele:

```bash
scp ~/Download/openvpn_mobile_client.ovpn ubuntu@<ip_address>:~
```

Ligue-se à instância:

```bash
ssh ubuntu@<ip_address>
```

Instale o cliente OpenVPN:

```bash
sudo apt-get update
sudo apt-get install -y openvpn
```

Aceder à VPN:

```bash
sudo openvpn --config openvpn_mobile_client.ovpn 
Enter Auth Username: address@stormshield.ovh
🔐 Enter Auth Password: ******************
```

Teste de ping da instância privada do servidor web:

```console
ssh ubuntu@<ip_address>
ping <ip_address>

PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=14.1 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=13.1 ms
```

## Quer saber mais? <a name="gofurther"></a>

Se necessitar de formação ou de assistência técnica para a implementação das nossas soluções, contacte o seu representante de vendas ou clique em [este link](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto aos nossos peritos da equipa Professional Services.

Fale com a nossa [comunidade de utilizadores](/links/community).