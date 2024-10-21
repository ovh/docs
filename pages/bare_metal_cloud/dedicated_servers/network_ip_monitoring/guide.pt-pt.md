---
title: Quais são os endereços IP do monitoring OVHcloud?
excerpt: Encontre aqui os endereços IP a introduzir aquando da implementação de uma firewall, para que o sistema de monitorização OVHcloud continue a funcionar no seu servidor.
updated: 2023-09-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O serviço de monitoring permite seguir o estado da sua máquina e ativar automaticamente a intervenção de um técnico no datacenter.

Todos os servidores dos nossos clientes, bem como o conjunto da rede, são vigiados 24h/24 e 7d/7 pelas equipas técnicas da OVHcloud.

A OVHcloud intervém a partir do lançamento de um alerta (não resposta aos pings) de forma a limitar ao máximo o tempo de indisponibilidade dos servidores e da rede.

Para implementar uma firewall restritiva, nomeadamente no ICMP, e continuar a beneficiar do monitoring OVHcloud, é necessário autorizar os endereços IP que encontrar abaixo.

## Requisitos

- Um produto OVHcloud no qual instalou uma Firewall.
- Ter acesso às regras da Firewall.

## Instruções

### Endereços IP a autorizar

|Reverse|IP|Protocolo|
|---|---|---|
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra-probe|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|---|---|---|
||xxx.xxx.xxx.250 (xxx.xxx.xxx.aaa sendo o IP do servidor)|icmp|
||xxx.xxx.xxx.251 (xxx.xxx.xxx.aaa sendo o IP do servidor)|icmp + porta vigiada pelo serviço monitoring|

**A comunicação entre o serviço RTM e o seu servidor requer igualmente que autorize as ligações de entrada e de saída nas portas UDP 6100 a 6200.**

> [!primary]
>
> Se o seu servidor está situado em Roubaix 3, deverá recuperar o último IP através do tcpdump:
> <pre class="highlight language-console"><code class="language-console">tcpdump host server_ip | grep ICMP</code></pre>

### Ativar ou desativar o monitoring

Em primeiro lugar, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e selecione o separador `Bare Metal Cloud`{.action}. Selecione o servidor em causa no menu pendente dos `Servidores Dedicados`{.action}.

Pode ativar ou desativar o monitoring de um servidor dedicado a partir do separador `Informações gerais`{.action}. A opção situa - se na secção `Estado dos serviços`.

![Monitoring](images/monitoring-server.png){.thumbnail}

Clique no botão `Configurar`{.action}. Na janela que aparece, tem três opções para o comportamento de vigilância:

- **Desativado**: Esta opção interrompe as mensagens de alerta e as intervenções da OVHcloud. Escolha esta opção se executar ações de administração pertinentes no servidor que impedem uma resposta ICMP.
- **Ativado com intervenção proactiva**: Se o servidor deixar de responder, ser-lhe-á enviado um e-mail de alerta e o servidor será verificado por um técnico.
- **Ativado sem intervenção proactiva**: No caso de o servidor deixar de responder, receberá uma mensagem de alerta por e-mail. Para dar início a uma intervenção, é necessário criar um pedido de assistência.

![Monitoring](images/monitoring-server2.png){.thumbnail}

Clique em `Confirmar`{.action} para atualizar a sua configuração de vigilância.

## Quer saber mais?

[Configurar a Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
