---
title: "Configurar a Edge Network Firewall para servidores dedicados"
excerpt: "Ative e configure a Edge Network Firewall para filtrar o tráfego de entrada para o seu servidor dedicado OVHcloud."
updated: 2026-03-10
---

## Objetivo

Para proteger os serviços dos clientes expostos em endereços IP públicos, a OVHcloud oferece uma firewall sem estado (*stateless*) que é configurada e integrada na **Infraestrutura Anti-DDoS**: o Edge Network Firewall. Permite limitar a exposição dos serviços a ataques DDoS, eliminando fluxos de rede específicos que podem provir do exterior da rede OVHcloud.

**Este guia explica como configurar o Edge Network Firewall para os seus serviços.**

> [!primary]
>
> Para mais informações sobre a nossa solução Anti-DDoS, [clique aqui](/links/security/antiddos).
>

| Infraestrutura Anti-DDoS e Proteção DDoS Game na OVHcloud |
|:--:|
| ![global-schema](images/global_schema_2025.png){.thumbnail} |

## Requisitos

- Um serviço OVHcloud exposto num endereço IP público dedicado ([Servidor dedicado](/links/bare-metal/bare-metal), [VPS](/links/bare-metal/vps), [Instância Public Cloud](/links/public-cloud/public-cloud), [Hosted Private Cloud](/links/hosted-private-cloud/vmware), [Additional IP](/links/network/additional-ip), etc.)

<!-- CP-NAV-START:network-public-ip -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public IP](/links/control-panel/network-public-ip)
- **Caminho de navegação:** `Network`{.action} > `Endereços IP Públicos`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Consulte a nossa [página de comparação](/links/bare-metal/eco-compare) para mais informações.

> [!warning]
> O Edge Network Firewall não suporta o protocolo QUIC.

## Instruções

O Edge Network Firewall reduz a exposição a ataques DDoS na rede, permitindo que os utilizadores repliquem determinadas regras de firewall do servidor na periferia da rede OVHcloud. Isto bloqueia os ataques recebidos o mais perto possível da sua origem, reduzindo assim o risco de sobrecarga dos recursos do servidor em caso de ataque significativo.

### Configurar o Edge Network Firewall

O Edge Network Firewall pode ser ativado ou desativado pelo utilizador a qualquer momento, com uma exceção: é **automaticamente ativado** quando um ataque DDoS é detetado e **não pode ser desativado** até que o ataque termine. Por conseguinte, todas as regras configuradas na firewall são aplicadas durante a duração do ataque. Esta lógica permite que os nossos clientes transfiram as regras de firewall do servidor para a periferia da rede OVHcloud durante a duração do ataque.

#### Aceder à página de configuração do Edge Network Firewall

> [!primary]
>
> Até à data, esta funcionalidade só está disponível para endereços IPv4.

> [!primary]
>
> O Edge Network Firewall protege um IP específico associado a um servidor (ou serviço). Por conseguinte, se tiver um servidor com vários endereços IP, deve configurar cada IP separadamente.
>

Pode utilizar o menu suspenso em **Os meus endereços IP públicos e serviços associados** para filtrar os seus serviços por categoria, ou escrever diretamente o endereço IP pretendido na barra de pesquisa.

![filtrar os serviços](images/selectservice_cut_new.png){.thumbnail}

De seguida, clique no botão `⁝`{.action} à direita do IPv4 em questão e selecione `Configurar o Edge Network Firewall`{.action} (ou clique no ícone de estado na coluna **Edge Firewall**).

![Ativação do Edge Network Firewall](images/firewall_config_new.png){.thumbnail}

Será direcionado para a página de configuração da firewall.

> [!primary]
>
> - A fragmentação UDP é bloqueada (*DROP*) por predefinição. Ao ativar o Edge Network Firewall, se utilizar uma VPN, não se esqueça de configurar corretamente a sua unidade de transmissão máxima (MTU). Por exemplo, com OpenVPN, pode verificá-la através de `MTU test`.
> - O Edge Network Firewall (ENF), integrado nos centros de depuração (VAC), trata apenas o tráfego de rede proveniente do exterior da rede OVHcloud.
>

> [!warning]
> Tenha em conta que deve configurar as suas próprias firewalls locais mesmo que o Edge Network Firewall tenha sido configurado, uma vez que o seu principal papel é gerir o tráfego fora da rede OVHcloud.
>
> Se configurou regras, recomendamos que as verifique regularmente ou ao alterar o funcionamento dos seus serviços. Como mencionado anteriormente, o Edge Network Firewall será automaticamente ativado em caso de ataque DDoS, mesmo que esteja desativado nos seus parâmetros IP.
>

### Configurar regras de firewall

Pode implementar até **20 regras por endereço IP**.

> [!primary]
> Desde março de 2026, o Edge Network Firewall suporta regras aplicáveis a intervalos de portas, para além das regras habituais de porta única.
>
> A utilização de intervalos de portas permite proteger com uma única regra as aplicações que necessitam de várias portas em sequência. Isto garante que a sua configuração respeita o limite das 20 regras, sem ter de criar uma regra distinta para cada porta utilizada.

> [!warning]
> Tenha em conta que o Edge Network Firewall da OVHcloud não pode ser utilizado para abrir portas num servidor. Para abrir portas num servidor, deve passar pela firewall do sistema operativo instalado no servidor.
>
> Para mais informações, consulte os seguintes guias: [Configuração da firewall no Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) e [Configuração da firewall no Linux com iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Para adicionar uma regra**, clique no botão `+ Adicionar uma regra`{.action}, no canto superior esquerdo da página.

| ![add-rule-btn](images/enf_add_rule_new.png) |
|:--:|
| Clique em `+ Adicionar uma regra`{.action}. |

Para cada regra (exceto TCP), deve escolher:

| ![add-rule-btn](images/enf_add_rule_no_tcp_new.png){.thumbnail} |
|:--|
| - Uma prioridade (de 0 a 19, sendo 0 a primeira regra a aplicar, seguida das outras) <br> - Uma ação (`Aceitar`{.action} ou `Recusar`{.action}) <br> - O protocolo <br> - O endereço IP de origem (facultativo) |

Para cada regra **TCP**, deve escolher:

| ![add-rule-btn](images/enf_add_rule_tcp_new.png){.thumbnail} |
|:--|
| - Uma prioridade (de 0 a 19, sendo 0 a primeira regra a aplicar, seguida das outras) <br> - Uma ação (`Aceitar`{.action} ou `Recusar`{.action}) <br> - O protocolo <br> - O endereço IP de origem (facultativo) <br> - Porta ou intervalo de portas de origem (facultativo) <br> - Porta ou intervalo de portas de destino (facultativo) <br> - O estado TCP (facultativo) <br> - Fragmentos (facultativo) |

Quando configura uma regra TCP ou UDP com uma porta ou um intervalo de portas, verifique que os campos `porta de origem` e `porta de destino` contêm um número único entre 1 e 65535 (inclusive), ou um intervalo de portas (dois números separados por um hífen, por exemplo: 8887-8888).

> [!primary]
> Aconselhamos que autorize o protocolo TCP com uma opção `established` (para os pacotes que fazem parte de uma sessão previamente aberta/iniciada), os pacotes ICMP (para o ping e traceroute) e, eventualmente, as respostas DNS UDP dos servidores externos (se utilizar servidores DNS externos).
>
> **Exemplo de configuração:**
>
> - Prioridade 0: Autorizar TCP `established`
> - Prioridade 1: Autorizar UDP, porta de origem 53
> - Prioridade 2: Autorizar ICMP
> - Prioridade 19: Recusar o IPv4

> [!warning]
> As configurações de firewall apenas com regras do modo "Aceitar" não são de todo eficazes. Deve existir uma instrução que indique o que deve ser eliminado pela firewall. Receberá um aviso, a menos que seja criada uma regra "Recusar".
>

**Ativar/desativar a firewall:**

| ![ativar-desativar](images/enf_enable_disable_new.png) |
|:--:|
| Utilize o botão de alternância para ativar ou desativar a firewall. |

Após a validação, a firewall será ativada ou desativada.

Tenha em conta que as regras são desativadas até ao momento em que um ataque é detetado, sendo depois ativadas. Esta lógica pode ser utilizada para regras que apenas ficam ativas quando um ataque repetido conhecido está a chegar.

### Erros comuns e boas práticas

#### Definir simultaneamente as portas de origem e de destino numa mesma regra

Ao criar regras de firewall, definir tanto a porta de origem como a porta de destino é geralmente um erro de configuração. Com efeito, as portas de origem são, na maioria dos casos, atribuídas aleatoriamente pelo sistema operativo do cliente (portas efémeras).

Se definir uma regra sobre uma porta de origem específica, o tráfego legítimo será provavelmente bloqueado assim que a porta do cliente mudar na sessão seguinte. Para garantir a continuidade da ligação, deve especificar apenas a porta de destino (a porta do seu serviço).

**Boa prática:** Deixe a porta de origem vazia, exceto se estiver a filtrar tráfego proveniente de um sistema especializado com uma configuração de saída estática.

#### Intervalos de portas demasiado extensos

Criar regras que autorizam o tráfego em intervalos de portas muito amplos pode constituir um risco de segurança, pois aumenta consideravelmente a superfície de ataque do seu servidor. Isto pode causar vários problemas:

- Pode expor inadvertidamente serviços de segundo plano que não devem ser públicos, arriscando fugas de informações sobre o seu sistema e permitindo que agentes maliciosos sondem o seu servidor à procura de vulnerabilidades.
- A auditoria e a resolução de problemas tornam-se muito mais complexas, uma vez que é mais difícil verificar quais as aplicações que estão realmente a comunicar, o que pode ocultar erros de configuração ou intrusões.
- Os intervalos UDP abertos e extensos são frequentemente alvo de ataques por amplificação e reflexão, pois a probabilidade de encontrar serviços expostos é mais elevada. Os atacantes podem usurpar um endereço IP alvo para enviar pequenas solicitações aos serviços nesse intervalo, os quais respondem com pacotes muito mais volumosos. Desta forma, utilizam o seu servidor para lançar ataques DDoS, saturando potencialmente a sua própria largura de banda.

**Boa prática:** Utilize apenas intervalos restritos para as portas sequenciais exigidas por uma aplicação específica (ex.: 5000-5100).

### Exemplo de configuração

Para se certificar de que apenas as portas SSH (22), HTTP (80), HTTPS (443) e UDP (53) ficam abertas ao autorizar o ICMP, siga as regras abaixo:

![Exemplo de configuração](images/exemple.png){.thumbnail}

As regras são ordenadas de 0 (a primeira regra lida) a 19 (a última). A cadeia deixa de ser analisada assim que uma regra é aplicada ao pacote.

Por exemplo, um pacote para a porta TCP 80 será intercetado pela regra 2 e as regras seguintes não serão aplicadas. Um pacote para a porta TCP 25 só será capturado pela última regra (19), que o bloqueará porque a firewall não autoriza a comunicação na porta 25 nas regras anteriores.

> [!warning]
> A configuração acima é apenas um exemplo e só deve ser utilizada como referência se as regras não se aplicarem aos serviços alojados no seu servidor. É indispensável configurar as regras da sua firewall para que correspondam aos serviços alojados no seu servidor. Uma configuração incorreta das regras da sua firewall pode causar o bloqueio do tráfego legítimo e a inacessibilidade dos serviços do servidor.
>

### Mitigação de ataques - Atividade do centro de depuração (Scrubbing Center)

A nossa Infraestrutura Anti-DDoS (VAC) funciona automaticamente. O processo de mitigação é efetuado através de um centro de depuração (**Scrubbing Center**) automatizado. É aqui que a nossa tecnologia avançada analisa em profundidade os pacotes e tenta eliminar o tráfego DDoS, permitindo a passagem do tráfego legítimo.

Todos os endereços IP OVHcloud estão em mitigação automática. Se for detetado tráfego malicioso, o **Scrubbing Center** é ativado. Este estado é então representado por um estado "Forçado" para um determinado endereço IP. O Edge Network Firewall também fica ativo. A situação volta ao normal quando o ataque é mitigado e não é observada qualquer outra atividade suspeita.

> [!success]
> **Dicas**
>
> Pode criar regras de firewall dedicadas a ataques que só se aplicam após a deteção de um ataque. Para tal, as regras Edge Network Firewall devem ser criadas mas desativadas.
>

> [!warning]
> Se a nossa Infraestrutura Anti-DDoS tratar um ataque, as regras do seu Edge Network Firewall acabarão por ser aplicadas, mesmo que tenha desativado a firewall. Se desativou a sua firewall, não se esqueça de eliminar também as suas regras.
>
> Tenha em conta que a Infraestrutura Anti-DDoS não pode ser desativada num serviço. Todos os produtos OVHcloud são entregues com esta proteção e isso não pode ser alterado.
>

## Network Security Dashboard

Para uma visão detalhada dos ataques detetados e dos resultados das atividades do Scrubbing Center, convidamo-lo a consultar o nosso guia sobre o [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Conclusão

Após a leitura deste tutorial, deverá conseguir configurar o Edge Network Firewall para melhorar a segurança dos seus serviços OVHcloud.

## Quer saber mais?

- [Proteger um servidor GAME com a firewall aplicacional](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Fale com a nossa [comunidade de utilizadores](/links/community).
