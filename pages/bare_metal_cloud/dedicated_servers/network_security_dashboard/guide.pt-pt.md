---
title: "Monitorização dos ataques DDoS com o Network Security Dashboard"
excerpt: "Saiba como navegar no Dashboard de Segurança da Rede"
updated: 2025-10-31
---

## Objetivo

Este guia explica o Dashboard de Segurança de Rede e fornece uma visão geral das medidas de combate desencadeadas pela nossa infraestrutura de proteção DDoS quando uma atividade de rede maliciosa é detetada. Pode encontrar detalhes sobre o desencadeado pelas proteções adicionais a implementar para manter os serviços atualizados e a funcionar. Além disso, o painel de controlo disponibiliza gráficos de tráfego para a limpeza dos períodos de atividade do centro, a fim de melhor visualizar a situação.

## Requisitos

- Um serviço OVHcloud exposto num endereço IP público dedicado ([Servidor Dedicado](/links/bare-metal/bare-metal), [VPS](/links/bare-metal/vps), [Instância Public Cloud](/links/public-cloud/public-cloud), [Hosted Private Cloud](/links/hosted-private-cloud/hosted-private-cloud), [Additional IP](/links/network/additional-ip), etc.)
- Acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

### Segurança da rede 

A infraestrutura anti-DDoS da OVHcloud é um sistema de defesa distribuído de várias camadas para lutar contra ataques informáticos. Consiste em localizações de vários níveis e centros de depuração capazes de analisar e limpar tráfego malicioso. Juntamente com a [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) e a [proteção GAME DDoS](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos), esta solução oferece serviços de qualidade para vários casos.

A infraestrutura anti-DDoS analisa constantemente o tráfego de entrada (mecanismo de deteção) e acaba por reencaminhar esse tráfego para os nossos centros de depuração (também conhecidos como "mitigação") situados em datacenters de todo o mundo. O tráfego de entrada é então profundamente analisado e, por fim, filtrado por pacotes maliciosos antes de chegar ao seu servidor ou serviço.

#### O que acontece quando um ataque atinge o IP do meu serviço?

Sempre que é detetado um ataque em direção a qualquer IP do seu serviço, recebe uma notificação por e-mail a indicar que o tráfego foi reencaminhado através da infraestrutura Anti-DDoS. Também pode monitorizar estes períodos no Dashboard de Segurança da Rede com detalhes adicionais.

Durante um ataque, uma ação de mitigação ativa será indicada por um ícone de aviso na página de listagem de IPs (na secção `Gerir endereços IP`{.action} da Área de Cliente).

![ataque-linha-vermelha](images/forced_blur.png){.thumbnail}

> [!primary]
>
> Encontre mais informações sobre como a mitigação DDoS é alcançada na OVHcloud [aqui](/links/security/mitigation).
>

> [!warning]
>
> Tenha em conta que a lógica de proteção se baseia em endereços IP públicos associados a um servidor (ou serviço). Consequentemente, as estatísticas e os gráficos são apresentados ou calculados para cada IP.
> 

### Notificações de segurança da rede

![ataque-linha-vermelha](images/nsd_04_blur.PNG){.thumbnail}

Aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Network`{.action} no menu à esquerda do ecrã e, a seguir, em `Endereços IP Públicos`{.action}. Certifique-se de que o "Modo avançado" está ativado para consultar o estado da infraestrutura anti-DDoS e a configuração dos seus componentes.

As colunas correspondem ao estado de limpeza anti-DDoS (**Mitigação**), a Edge Network **Firewall** e a **GAME firewall** apresentam a disponibilidade e os estados.

- O estado **Mitigação** pode ser:
    - **Automático** - O centro de depuração está no modo **auto** e redireciona o tráfego para uma análise mais aprofundada, quando necessário.
    - **Forçado** - Indica que o centro de depuração está a decorrer **a efetuar uma ação** imediatamente.

- A coluna **Firewall** indica o estado da Firewall Edge Network que pode ser:
    - **Ativado** - A firewall está **ativado** para este IP.
    - **Desativado** - A firewall está **desativado** para este IP.
    - **(sem estado)** - A configuração da firewall não foi criada. Para configurar regras, clique no botão `...`{.action} e selecione `Criar Firewall`{.action}.

- O estado **GAME firewall** (apenas disponível para servidores dedicados [OVHcloud **Game*](https://www.ovhcloud.com/pt/bare-metal/prices/#filterType=range_element&filterValue=game)) pode ser:
    - **Ativado** - A proteção GAME DDoS é **ativado** para este IP.
    - **Desligado** - A firewall GAME está **disponível** mas **desativada** nesse IP.
    - **(sem estado)** - A firewall GAME não está disponível para este IP. Isto significa que o IP listado não está configurado numa gama de produtos suportada.

- A coluna **Alertas** pode indicar um centro de limpeza ativo com um ícone de aviso e a indicação adequada.

### Dashboard de Segurança da Rede

Aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Network`{.action} no menu à esquerda do ecrã e, a seguir, em `Network Security Dashboard`{.action}.

No separador **log** do centro de limpeza, pode obter todas as informações sobre ataques que foram detetados no passado (ou que estão em curso).

![ataque-linha-vermelha](images/nsd_main_blur.png){.thumbnail}

Na tabela, estão presentes as seguintes colunas: 

- **Hora de deteção** - Carimbo de data/hora da primeira deteção de ataque
- **Hora de fim** - Carimbo de data/hora a que o centro de depuração terminou a mitigação
- **IP de destino** - O IP que foi alvo do ataque
- **Vetores de ataque** - Fornece informações sobre tipos de ataque detetados, tais como ataques UDP ou TCP, etc.

**O período de retenção de dados para os registos do centro de filtragem é de 1 ano.**

> [!warning]
>
> Tenha em conta que os endereços IP de origem dos eventos detetados não são apresentados porque são normalmente alvo de spoofing (os ataques DDoS podem apontar para outras fontes que não aquelas de onde realmente provêm) e tal informação seria enganosa ou não seria utilizável.
> 

No separador **Gráfico de tráfego**, pode ver um gráfico que mostra o tráfego para o seu endereço IP (bps ou pps).

![ataque-linha-vermelha](images/nsd_graph_tab_blur.png){.thumbnail}

Apresenta tráfego malicioso que foi eliminado (**em vermelho**) e tráfego limpo enviado para o seu endereço IP (**em verde**). Também são apresentadas estatísticas básicas de mitigação, ou seja: o número de ataques detetados para um IP selecionado, o volume de tráfego (ou pacotes) limpo durante os ataques ou o número de vezes que os centros de limpeza efetuaram uma ação para inspecionar o tráfego (número de eventos) num período de tempo selecionado.

**O período de retenção de dados para o gráfico de tráfego é de 2 meses.**

## FAQ

### Porque não vejo todos os ataques no Network Security Dashboard?

Dependendo da natureza do ataque, poderão ser tomadas diferentes medidas para melhor eliminar a ameaça. Em ambos os casos, a melhor forma de atenuar os ataques é fazendo-os o mais próximo possível da origem:

- Em caso de ataque que entra na rede da OVHcloud (**external**), o tráfego é reencaminhado para os centros de depuração Anti-DDoS para as limpezas (visíveis no painel de controlo).
- Tenha em conta que os ataques com origem na rede da OVHcloud (**internal**) são geridos pelas nossas equipas de segurança. A mitigação concentra-se no bloqueio da origem do ataque e não será comunicada pelos sistemas de infraestrutura anti-DDoS.

### Nenhum dado apresentado nos logs do centro de limpeza. Isso é normal?

Sim, isso significa que nenhum ataque suspeito terá como alvo os seus endereços IP públicos.

### Nenhum gráfico de tráfego ou dados são apresentados para um endereço IP que introduzo.

Estes dados só estão disponíveis para os endereços IP públicos durante os eventos de deteção automáticos da infraestrutura anti-DDoS (quando o tráfego é reencaminhado através do centro de depuração).

### O gráfico de tráfego para algumas posições nos logs do centro de limpeza não está disponível.

Os dados do gráfico de tráfego estão disponíveis apenas para os últimos dois meses, enquanto as entradas de registo podem ser revistas durante o último ano.

### Um ataque ao meu serviço persiste, como posso proteger melhor o meu servidor?

Alguns tipos de ataque podem ser tão específicos que a nossa infraestrutura Anti-DDoS não será capaz de detetar e limpar automaticamente. Nestes casos, a firewall configurada no seu servidor é a melhor opção. Também recomendamos que descarregue algumas das regras da firewall do servidor para o limite da nossa rede, utilizando a Firewall de rede Edge.

Para mais informações sobre como configurar as regras do Edge Network Firewall, consulte o nosso guia [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

### O meu serviço é atacado e encontro problemas no meu servidor. O que mais eu posso fazer?

A infraestrutura anti-DDoS é uma solução concebida para assegurar a melhor eficiência e uma vasta gama de serviços a proteger. Em alguns casos específicos, pode requerer ajustes adicionais (por exemplo, para especificidade ou tamanho da aplicação). Para o solicitar, visite o nosso [Centro de Ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) e procure a ação adequada na categoria "Ataques de rede e/ou Anti-DDoS".

Para podermos compreender melhor o seu caso e podermos ajudá-lo, forneça-nos alguns detalhes adicionais:

### Passo 1 - Capturar tráfego

Para lhe oferecer a melhor solução, em primeiro lugar, teremos de analisar uma amostra de tráfego.

Para nos fornecer essa captura, execute este comando em Linux:

```bash
tcpdump -w capture-ovh -c 100000 port not ssh
```

> [!primary]
>
> Se estiver a utilizar o Windows, utilize o [Wireshark](https://www.wireshark.org/) e capture 100.000 pacotes.
>

Quando o comando terminar de ser executado, o arquivo de captura é criado. Pode anexar o ficheiro criado ao ticket de suporte ou carregá-lo na nossa solução de partilha de ficheiros utilizando [este guia](/pages/account_and_service_management/account_information/use-plik).

Certifique-se de que partilha a ligação do ficheiro carregado com o suporte do seu ticket.

### Etapa 2 - Fornecer informações à OVHcloud

Em todos os casos em que seja necessário um ajuste do nosso sistema Anti-DDoS, deverá fornecer-nos as seguintes informações específicas:

- Serviço alojado no servidor afetado
- Data e hora do início do ataque
- Data e hora em que o ataque terminou
- IP(s) afetado(s)
- Serviço, protocolo e porta utilizados pelo serviço afetado
- Dimensão do serviço (XS: 1-10, S: 10-100, M: 100-1k, L: 1-10k, XL: 10-100k, XXL: 100k+ clientes ligados)
- Outros serviços alojados no servidor
- Outras portas em utilização no servidor
- Existem outros serviços em IP separados: Sim/Não
- Em caso afirmativo, que endereços IP são esses
- Está a ser eliminado tráfego legítimo: SIM/NÃO
- A ligação ao servidor foi perdida: SIM/NÃO
- Que tipo de tráfego legítimo está a ser eliminado

## Quer saber mais?

[Ativação e configuração da Firewall de rede Edge](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

[Proteger um servidor GAME com a firewall de aplicações](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Fale com a nossa [comunidade de utilizadores](/links/community).