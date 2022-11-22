---
title: 'Configurar a Network Firewall'
excerpt: 'Saiba como configurar a Network Firewall'
slug: firewall-network
section: 'Redes & IP'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 07/11/2022**

## Sumário

Para proteger a sua infraestrutura geral e os servidores dos seus clientes, a OVHcloud propõe uma firewall com várias opções de configuração integrada na solução **Anti-DDoS**: a Network Firewall. Esta opção permite limitar a exposição dos serviços aos ataques provenientes da rede pública.

**Este manual explica como configurar a Network Firewall.**


> [!primary]
>
> Para obter mais informações sobre a nossa solução Anti-DDoS, consulte a página: <https://www.ovhcloud.com/pt/security/anti-ddos/>.
> 

![ Tudo sobre o sistema VAC](images/vac-inside.png){.thumbnail}


## Requisitos

- Dispor de um serviço OVHcloud com Network Firewall incluída: [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/){.external}, [VPS](https://www.ovhcloud.com/pt/vps/){.external}, [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external}, [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/){.external}, [Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/){.external}, etc.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

## Instruções

### Ativar a Network Firewall

> [!primary]
>
> A Network Firewall foi concebida para proteger os endereços de IP associados a uma máquina. Cada IP deverá ser configurado de forma independente. Não é possível realizar uma configuração simultânea dos IP do servidor.
> 

Depois de aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda ao menu `Bare Metal Cloud`{.action} e abra na secção `IP`{.action}. Clique em `...`{.action} para ativar a firewall no IPv4 pretendido.

![Ativação da Network Firewall](images/firewall_creation2022.png){.thumbnail}

É-lhe solicitada uma confirmação.

![Validação](images/creationvalid.png){.thumbnail}

Em seguida, clique em `Ativar a firewall`{.action} (1) e selecione a opção `Configurar a Firewall`{.action} (2) para iniciar a configuração.

![Ativação da configuração ](images/activationconfig.png){.thumbnail}

Pode definir até **20 regras para cada IP**.

> [!warning]
>
> A firewall é ativada automaticamente sempre que houver um ataque DDoS, só podendo ser desativada depois de o ataque ter terminado. Por isso, é necessário manter as definições da firewall sempre atualizadas.
> Por predefinição, o serviço não tem qualquer regra definida, por isso todas as ligações são permitidas.
> Se possuir alguma, verifique-as regularmente mesmo se desativar a firewall.
> 


> [!primary]
>
> - A fragmentação UDP está bloqueada por predefinição (DROP). Após a ativação da Network Firewall, e se usar uma VPN, deverá configurar corretamente a maximum transmission unit (MTU). Por exemplo, em OpenVPN, pode selecionar `MTU test`{.action}.
> - A Network Firewall não produz efeitos dentro da rede OVHcloud. Ou seja, as regras implementadas não irão afetar as ligações dentro da rede OVHcloud.
>


### Configurar a Network Firewall

> [!warning]
> Tenha em conta que a Network Firewall da OVHcloud não pode ser utilizada para abrir portas num servidor. Para abrir portas num servidor, deve passar pela firewall do sistema operativo instalado no servidor.<br>
> Para mais informações, consulte os seguintes guias: [Configurar a firewall em Windows](https://docs.ovh.com/pt/dedicated/firewall-windows/) e [Configurar a firewall em Linux com Iptables](https://docs.ovh.com/pt/dedicated/firewall-iptables/).
>

Adicione uma regra através da opção  `Adicionar uma regra`{.action}.

![Adicionar uma regra](images/ajoutregle1.png){.thumbnail}

Para cada regra, deve selecionar:

- o nível de prioridade (de 0 a 19, sendo que é aplicada a primeira regra);
- uma ação (`Autorizar`{.action} ou `Recusar`{.action});
- o protocolo;
- um IP (opcional);
- a porta de origem (apenas TCP);
- a porta de destino (apenas TCP);
- as opções TCP (apenas TCP).

![Como adicionar uma regra](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Prioridade 0: é aconselhável autorizar o protocolo TCP para todos os IP com uma opção `established`{.action}. Esta opção permite verificar se o pacote faz parte de uma sessão já iniciada. Se não der autorização, o servidor não irá receber as respostas do protocolo TCP aos pedidos de ligação (requests) SYN/ACK.
> - Prioridade 19: se não tiver sido definida nenhuma regra com prioridade inferior a 19 (a última possível), os protocolos para IPv4 serão todos recusados.
> 

### Exemplo de configuração

Para garantir que só ficarão abertas as portas SSH (22), HTTP (80), HTTPS (443) e UDP (10000) ao autorizar o ICMP, é necessário seguir as seguintes regras:

![Exemplo de configuração](images/exemple.png){.thumbnail}

As regras são ordenadas sequencialmente de 0 (primeira regra lida) a 19 (última regra lida). A sequência de leitura é interrompida a partir do momento em que uma regra é aplicada ao pacote recebido.

Por exemplo, um pacote destinado à porta 80/TCP é identificado pela regra 2 e esta é executada. As regras seguintes já não serão acionadas. Um pacote destinado à porta 25/TCP só poderá ser identificado pela última regra (19), e será bloqueado. Nas regras precedentes, a OVHcloud não autoriza qualquer comunicação na porta 25.

> [!warning]
> Como indicado, a configuração acima é apenas um exemplo e deve ser utilizada como referência se as regras não se aplicam aos serviços alojados no seu servidor. É absolutamente necessário configurar as regras da sua firewall em função dos serviços alojados no seu servidor. Uma má configuração das suas regras de firewall pode levar ao bloqueio do tráfego legítimo e à inacessibilidade dos serviços do servidor.
>

### Mitigação

Existem três modos de mitigação: automático, permanente ou forçado.

**Mitigação automático**: Com este modo, o tráfego só passa pelo sistema de mitigação se for detetado como "pouco habitual" em relação ao tráfego normal geralmente recebido pelo servidor.

**Mitigação permanente**: Ao ativar a mitigação permanente, aplica um primeiro nível de filtragem constante através do nosso Shield hardware.<br>
Todo o tráfego passa de forma permanente pelo sistema de mitigação antes de atingir o servidor. Recomendamos este modo para os serviços que são alvo de ataques frequentes.<br>
Tenha em conta que a Network Firewall não deve ser criada/ativada para ativar a mitigação permanente no seu IP.

Para o ativar, clique no menu `Bare Metal Cloud`{.action} e abra o `IP`{.action}. De seguida, clique nas `...`{.action} à direita do IPv4 em causa e selecione `Mitigação: modo permanente`{.action}.

**Mitigação forçada**: Este modo é ativado automaticamente assim que um ataque é detetado no servidor. Uma vez ativado, este modo não pode ser desativado. De forma a proteger a nossa infraestrutura, a proteção será ativada durante todo o período do ataque, até que seja totalmente mitigada.

> [!warning]
>
> Em caso de ativação da mitigação Anti-DDoS, as regras da Network Firewall serão ativadas, mesmo tendo sido desativadas anteriormente. Se optar  pela desativação, não se esqueça de eliminar as regras.
> 
> Tenha em conta que a atenuação anti-DDoS não pode ser desativada.

### Configurar a firewall Armor (Firewall Game)

> [!primary]
> Por predefinição, a firewall Armor está pré-configurada com certas regras que a OVHcloud determinou funcionar com os jogos mais comuns. No entanto, para os clientes que disponham de um servidor dedicado Game, permitimos-lhe ir mais longe e configurar igualmente regras para as portas.
>

Para configurar as regras das suas portas no Armor, primeiro tem de aceder à Área de Cliente OVHcloud.<br>
De seguida, aceda ao menu `Bare Metal Cloud`{.action} e abra na secção `IP`{.action}. Clique em `...`{.action} junto do endereço IP do seu servidor de jogo e, a seguir, em `Configurar a Firewall Game`{.action}.

![Game_wall](images/GAMEwall2021.png){.thumbnail}

No ecrã seguinte, clique no botão `Adicionar uma regra`{.action} para adicionar uma regra ao Armor.

Pode definir até **30 regras para cada IP**.

![Configura_Armor](images/ConfigureArmor2021.png){.thumbnail}

Ative as portas conforme as suas necessidades no ecrã seguinte e clique no botão `Confirmar`{.action} quando acabou de adicionar as suas regras. A firewall Armor foi configurada com sucesso.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.