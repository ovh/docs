---
title: 'Habilitar e configurar o Edge Network Firewall'
excerpt: 'Saiba como configurar a Edge Network Firewall para os seus serviços'
updated: 2024-01-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Para proteger os serviços dos clientes expostos aos IPs públicos, a OVHcloud oferece uma firewall stateless que é configurada e integrada na **infraestrutura Anti-DDoS**: a Edge Network Firewall. Permite limitar a exposição do serviço a ataques DDoS, ao eliminar fluxos de rede específicos provenientes de fora da rede da OVHcloud.

**Este guia explica como configurar a Edge Network Firewall para os seus serviços.**

> [!primary]
>
> Encontrará mais informações sobre a nossa solução Anti-DDoS no nosso website: <https://www.ovhcloud.com/pt/security/anti-ddos/>.
> 

| ![global-schema](images/global_schema.png) | 
|:--:| 
| Esquema da infraestrutura Anti-DDoS e dos serviços de proteção de jogos da OVHcloud |

## Requisitos

- Um serviço OVHcloud exposto num endereço IP público dedicado ([Servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/), [VPS](https://www.ovhcloud.com/pt/vps/), [Instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), [IP adicional](https://www.ovhcloud.com/pt/network/additional-ip/), etc.)
- Acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

> [!warning]
> Esta funcionalidade poderá estar indisponível ou limitada nos servidores da linha de produto [**Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Visite a nossa [página de comparação](https://eco.ovhcloud.com/pt/compare/) para mais informações.

## Instruções

O Edge Network Firewall reduz a exposição a ataques DDoS na rede, permitindo que os utilizadores copiem algumas das regras de firewall do servidor para o limite da rede da OVHcloud. Isto bloqueia os ataques recebidos o mais próximo possível da sua origem, reduzindo o risco de saturação dos recursos do servidor ou das ligações de rack em caso de ataques graves.

### Ativação do Edge Network Firewall

> [!primary]
>
> O Edge Network Firewall protege um IP específico associado a um servidor (ou serviço). Assim, se tiver um servidor com vários endereços IP, cada IP deve ser configurado separadamente.
> 

Na Área de Cliente OVHcloud, clique na secção `Bare Metal Cloud`{.action}, clique no menu `Network`{.action} e abra `Endereços IP Públicos`{.action}. Pode utilizar o menu pendente situado por baixo de **"Os meus endereços IP públicos e os serviços associados"** para filtrar os seus serviços por categoria.

![filter service](images/selectservice_cut.png){.thumbnail}

Em seguida, clique no botão `...`{.action} à direita do IPv4 em questão e selecione previamente `Criar Firewall`{.action}.

![Ativação da Firewall de Rede](images/firewallcreation2022.png){.thumbnail}

Em seguida, ser-lhe-á pedido que confirme. A firewall vai ser criada e poderá configurar as regras.

> [!primary]
> O botão `Criar Firewall`{.action} só estará disponível para os IP que nunca configuraram uma firewall. Se não for a primeira vez que configurar a firewall, pode ignorar este passo. 
>

| ![Ativar a configuração](images/activationconfig.png) |
|:--:|
| Clique em `Configuração Edge Network Firewall`{.action} para iniciar a configuração. |

Nesta página, tem a possibilidade de **Ativar** ou **Desativar** a firewall, utilizando o botão Switch.
Também é possível fazê-lo de outra forma explicada abaixo.

Pode configurar até **20 regras por IP**.

> [!warning]
>
> O Edge Network Firewall é automaticamente ativado quando é detetado um ataque DDoS e não pode ser desativado até que o ataque termine. Consequentemente, todas as regras configuradas na firewall são aplicadas durante o ataque. Esta lógica permite que os nossos clientes transfiram as regras da firewall do servidor para o limite da rede da OVHcloud durante o ataque.
>
> Tenha em conta que deve configurar as suas próprias firewalls locais, mesmo que a Edge Network Firewall tenha sido configurada, uma vez que o seu principal papel é o tratamento do tráfego externo à rede da OVHcloud.
>
> Se configurou algumas regras, recomendamos que as verifique regularmente ou ao alterar o modo de funcionamento dos seus serviços. Como mencionado anteriormente, o Firewall Edge Network será automaticamente ativado em caso de ataque DDoS, mesmo quando desativado nas configurações de IP.
>

> [!primary]
>
> - A fragmentação UDP é bloqueada (DROP) por padrão. Ao ativar o Firewall da rede Edge, se você estiver usando uma VPN, lembre-se de configurar sua Unidade de transmissão máxima (MTU) corretamente. Por exemplo, com OpenVPN, pode selecionar "MTU test".
> - O Edge Network Firewall (ENF) integrado nos centros de depuração (VAC) apenas trata o tráfego de rede proveniente de fora da rede da OVHcloud.
>

### Configuração do Firewall Edge Network

> [!warning]
> Tenha em conta que o Edge Network Firewall da OVHcloud não pode ser utilizado para abrir portas num servidor. Para abrir portas num servidor, tem de passar pela firewall do sistema operativo instalado no servidor. 
>
> Para mais informações, consulte os seguintes guias: [Configurar a firewall no Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) e [Configurar a firewall no Linux com iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Para adicionar uma regra:**

|![add-rule-btn](images/enf_add_rule.png) |
|:--:|
| Clique em `Adicionar regra`{.action}. |

Para cada regra (excluindo TCP), deve escolher:

|![add-rule-btn](images/enf_add_rule_other_than_tcp.png) |
|:--|
| &bull; Uma prioridade (de 0 a 19, sendo 0 a primeira regra a ser aplicada, seguida das outras) <br>&bull; Uma ação (`Aceitar`{.action} ou `Negar`{.action}) <br>&bull; O protocolo <br>&bull; IP fonte (opcional) |

Para cada regra **TCP**, deve escolher:

|![add-rule-btn](images/enf_add_rule_tcp.png) | 
|:--| 
| &bull; Uma prioridade (de 0 a 19, sendo 0 a primeira regra a ser aplicada, seguida das outras) <br>&bull; Uma ação (`Aceitar`{.action} ou `Negar`{.action}) <br>&bull; O protocolo <br>&bull; IP fonte (opcional) <br>&bull; A porta fonte (opcional) <br>&bull; A porta de destino (opcional) <br>&bull; O estado TCP (opcional) <br>&bull; Fragmentos (opcional)|

> [!primary]
> Aconselhamos que autorize o protocolo TCP com uma opção `established` (para os pacotes que fazem parte de uma sessão previamente aberta/iniciada), os pacotes ICMP (para o ping e traceroute) e eventualmente as respostas DNS UDP dos servidores externos (se utilizar servidores DNS externos).
>
> **Exemplo de configuração:**
>
> - Prioridade 0: Autorizar TCP `established`
> - Prioridade 1: Autorizar UDP, porta source 53
> - Prioridade 2: Autorizar ICMP
> - Prioridade 19: Recusar o IPv4

> [!warning]
> As configurações de firewall apenas com regras do modo "Aceitar" não são eficazes. Deve ser fornecida uma instrução quanto ao tráfego que deve ser eliminado pela firewall. Verá um aviso, a menos que seja criada uma regra de "Negar".
> 

**Ativar firewall:**

| ![ativar-desativar](images/enf_enabled_button_01.png) |
|:--:|
| `Ligar`{.action} para ativar |

Após a confirmação, a firewall será ativada.

**Desativar firewall:**

| ![ativar-desativar](images/enf_enabled_button_04.png) |
|:--:|
| `Ligar`{.action} para ativar |

Após a confirmação, a firewall será desativada.

Note que as regras são desativadas até ao momento em que um ataque é detetado, e depois são ativadas. Esta lógica pode ser utilizada para as regras que estão apenas ativas quando um ataque repetido conhecido está a chegar.

### Exemplo de configuração

Para se certificar de que apenas as portas padrão para SSH (22), HTTP (80), HTTPS (443) e UDP (53) são deixadas em aberto aquando da autorização do ICMP, siga as regras abaixo:

![Exemplo de configuração](images/exemple.png){.thumbnail}

As regras são classificadas de 0 (primeira leitura) a 19 (última). A cadeia de regras pára assim que uma regra for aplicada ao pacote.

Por exemplo, um pacote para a porta TCP 80 será intercetado pela regra 2 e as regras a seguir não serão aplicadas. Um pacote para a porta TCP 25 só será capturado pela última regra (19), que o bloqueará porque a firewall não permite a comunicação na porta 25 nas regras anteriores.

> [!warning]
> A configuração acima é apenas um exemplo e só deve ser utilizada como referência se as regras não se aplicarem aos serviços alojados no seu servidor. É essencial que configure as regras da sua firewall para que correspondam aos serviços alojados no seu servidor. Uma configuração incorreta das regras da sua firewall poderá causar o bloqueio do tráfego legítimo e a inacessibilidade dos serviços do servidor.
> 

### Mitigação do ataque - limpeza da atividade do centro

A nossa infraestrutura Anti-DDoS (VAC) funciona de duas formas: **auto** e **permanente**. O processo de mitigação é efetuado através do centro de depuração automático. É aqui que a nossa tecnologia avançada analisa detalhadamente os pacotes e tenta eliminar o tráfego DDoS, permitindo a passagem de tráfego legítimo.

- **A mitigação automática** é a predefinição: Todos os IPs da OVHcloud estão sob mitigação automática. Geralmente, esta é a melhor escolha para os seus serviços. Caso seja detetado algum tráfego malicioso, o centro de depuração é ativado. Este estado é indicado pelo estado "Forçado" para um determinado endereço IP. Neste momento, a Firewall Edge Network também está ativa. A situação volta ao normal quando o ataque é mitigado e não se observa mais nenhuma atividade suspeita.

- ** O modo de mitigação permanente** pode ser ativado ou desativado a partir da Área de Cliente OVHcloud. Com a mitigação permanente, aplica de forma permanente o primeiro nível de filtragem, pelo que todo o tráfego passa sempre pelo sistema de mitigação antes de chegar ao servidor. Não recomendamos que ative esta opção por períodos mais longos, exceto se observar um certo nervosismo devido ao facto de o centro de limpeza redirecionar o tráfego com demasiada frequência.

Note que, quando comparado com o modo automático, o nível de proteção aumenta **não** quando o modo atual é ativado.

Para ativá-la, siga estes passos:

- Clique no menu `Bare Metal Cloud`{.action}.
- Aceder a `Network`{.action} na barra lateral esquerda.
- Aceda à secção `IP`{.action}.

| ![menu-ipv4](images/mitigation_menu.png) | 
|:--:| 
| Em seguida, clique no botão `...`{.action} à direita do IPv4 correspondente. |


| ![opção-mitigação](images/mitigation_menu_step_2.png) | 
|:--:| 
| Selecione `Mitigação: modo permanente`{.action}. |


> [!success]
> **Dicas**
>
> Pode criar regras de firewall apenas com ataques que só se aplicam depois de ser detetado um ataque. Para o fazer, as regras da Firewall de Rede Edge têm de ser criadas e desativadas.
>

> [!warning]
> Se a nossa infraestrutura Anti-DDoS mitiga um ataque, as regras Edge Network Firewall serão aplicadas, mesmo que tenha desativado a firewall. Se desativou a sua firewall, não se esqueça de eliminar também as suas regras.
> 
> Atenção: a nossa infraestrutura Anti-DDoS não pode ser desativada para um serviço. Todos os produtos da OVHcloud são entregues dentro do âmbito da proteção e isto não pode ser alterado.
>

## Network Security Dashboard

Para obter informações detalhadas sobre os ataques detetados e os resultados da atividade do centro de limpeza, recomendamos que explore o nosso [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Conclusão

Depois de ler este manual, deverá poder configurar a Edge Network Firewall para melhorar a segurança dos seus serviços OVHcloud.

## Quer saber mais?

- [Proteger um servidor de jogos com a firewall de aplicações](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
