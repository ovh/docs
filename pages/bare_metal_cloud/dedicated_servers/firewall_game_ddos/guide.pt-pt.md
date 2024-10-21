---
title: "Proteger um servidor de jogos com a firewall aplicacional"
excerpt: "Saiba como configurar a firewall GAME DDoS da OVHcloud"
updated: 2023-12-19
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O objetivo deste guia é ajudá-lo a compreender melhor a nossa proteção GAME DDoS (firewall GAME) e fornecer instruções sobre como configurar uma proteção eficaz para os servidores que a suportam.

> [!primary]
> Mais informações sobre a proteção GAME DDoS no nosso website: <https://www.ovhcloud.com/pt/security/game-ddos-protection/>.
> 

Os nossos servidores dedicados para jogos Bare Metal incluem uma proteção DDoS concebida especificamente para proteger as aplicações de jogos contra ataques específicos, garantindo estabilidade e acessibilidade para os jogadores. Esta solução de proteção dedicada é robusta e simples de utilizar, permitindo-lhe concentrar-se no desenvolvimento da sua empresa sem a distração de se defender contra o cibercrime.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Esquema da infraestrutura Anti-DDoS e dos serviços de proteção de jogos da OVHcloud |

## Requisitos

- Um [servidor dedicado **Game** da OVHcloud](https://www.ovhcloud.com/pt/bare-metal/prices/#filterType=range_element&filterValue=game)
- Acesso à [Área de Cliente OVHcloud](/links/manager)

> [!warning]
> Esta funcionalidade poderá estar indisponível ou limitada nos servidores da linha de produto [**Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Visite a nossa [página de comparação](https://eco.ovhcloud.com/pt/compare/) para mais informações.

## Instruções

### Introdução

A infraestrutura anti-DDoS, em conjunto com a firewall Edge Network, protege a rede contra as ameaças mais comuns (principalmente centrada nas camadas 3 e 4 ISO OSI). Por outro lado, alojar aplicações de gaming pode ser uma experiência desafiadora em termos de segurança de rede. A proteção GAME DDoS está aqui para o ajudar: é uma firewall Layer 7 (aplicação) dedicada à proteção de protocolos específicos para jogos (geralmente utilizando UDP). As suas principais vantagens são:

- **Distância**: Sabemos que a latência e a sua estabilidade são essenciais para o gaming. Estas soluções são postas o mais perto possível dos servidores e funcionam em conjunto com hardware dedicado.
- **2-way**: A plataforma analisa o tráfego de entrada e de saída para uma melhor compreensão da situação de cada jogador.
- **Instant**: Ele consegue distinguir os verdadeiros jogadores dos ataques nocivos num servidor, desde os primeiros pacotes de rede.
- **Sempre ativo**: A capacidade de detetar e parar ataques garante uma experiência fluida para aplicações de jogos sensíveis sem quaisquer interrupções e alterações de latência.

### Ativação da proteção GAME DDoS

> [!primary]
> A firewall GAME protege os endereços IP associados aos servidores. Assim, se tiver um servidor com vários endereços IP (por exemplo endereços IP adicionais), terá de configurar cada um deles separadamente.
>

Para configurar as regras de jogo na firewall GAME, inicie sessão na Área de Cliente OVHcloud e siga estes passos:

- Clique no separador `Bare Metal Cloud`{.action}.
- Aceder a `Network`{.action} na barra lateral esquerda.
- Abrir `IP`{.action}.

| ![servidor-jogo](images/firewall_game_01_blur.png) |
|:--:|
| Clique no botão `...`{.action} junto ao endereço IP do seu servidor de jogos. |

| ![configuracao-game-firewall](images/firewall_game_02.png) |
|:--:|
| Clique em `Configurar a firewall GAME`{.action}. |


|![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| No ecrã seguinte, clique no botão `Adicionar uma regra`{.action} para adicionar uma regra à firewall GAME. |

Pode configurar até **30 regras por IP** para proteger um ou vários jogos alojados no seu servidor por detrás da firewall GAME. A lista de perfis de jogos suportados pode ser vista [aqui](https://www.ovhcloud.com/pt/security/game-ddos-protection/).

> [!primary]
> Por predefinição, a firewall GAME está pré-configurada com certas regras que a OVHcloud determinou serem compatíveis com os jogos mais populares. No entanto, para os clientes que disponham de um servidor dedicado GAME, permitimos ir mais longe e configurar igualmente as regras para as portas.
> 

| ![confirmar-nova-regra](images/firewall_game_04.png) |
|:--:|
| Ative as portas conforme necessário no ecrã seguinte e clique no botão `Confirmar`{.action} quando terminar de adicionar as regras. As regras da firewall game foram agora configuradas com sucesso. |

> [!primary]
> É importante ter em conta que a proteção GAME DDoS não efetuará nenhuma ação a menos que as regras sejam configuradas.
>
> Além disso, para obter a melhor proteção, recomendamos vivamente a definição de "Default policy = DROP", a qual eliminará todo o tráfego que não corresponda às regras definidas. Desta forma, a aplicação listada será protegida, não sendo possível que mais nada chegue ao seu servidor.
> 

> [!warning]
> A proteção GAME DDoS entra em vigor após a [Edge Network firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Para funcionar corretamente, a proteção Edge Network não pode ser demasiado restrita e necessita de passar tráfego para a proteção GAME DDoS. Seria ideal dispor de uma regra na firewall Edge Network que permita todo o tráfego UDP, e deixar que a proteção GAME DDoS filtre as portas UDP específicas.
>

### Avisos importantes

#### FiveM

FiveM é um mod do GTA V. Atualmente não é totalmente reconhecido pela Rockstar (editora de jogos).

Devido a isso, não planeamos lançar um perfil de firewall público CincoMS GAME para proteção de camada 7.

#### Rust

A firewall GAME suporta Rust com um perfil detalhado. Pode ler mais sobre o alojamento Rust em servidores OVHcloud [aqui](https://www.ovhcloud.com/pt/bare-metal/game/rust-server/).

#### Minecraft

Minecraft é bem suportado nas seguintes versões:

- Minecraft Java edition 
- Minecraft Pocket Edition
- Minecraft Query

> [!primary]
> Por enquanto, a edição Java de Minecraft está protegida em modo "default" e nenhuma configuração adicional é exposta. Se aloja servidores Minecraft maiores, ou com requisitos específicos, contacte o nosso suporte através do [Centro de Ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) com todos os detalhes para otimizar o perfil da aplicação.
>

## FAQ

### Posso utilizar a firewall GAME noutras gamas que não os servidores Bare Metal?

Não, a firewall GAME está disponível apenas para os nossos servidores dedicados Bare Metal.

### Posso desativar a proteção por firewall GAME?

Isto é possível, caso não seja recomendado. Pode fazê-lo eliminando todas as regras do protocolo de jogo da configuração e desativando a política `Default policy: Drop`.

### O meu jogo não está na lista dos protocolos suportados, o que fazer?

Pode declarar as suas necessidades a partir do nosso site [infrastructure solutions roadmap on GitHub](https://github.com/orgs/ovh/projects/16/views/14). Isto ajudar-nos-á a decidir sobre a prioridade entre as próximas funcionalidades a desenvolver.

### Após ter configurado o meu jogo com as portas apropriadas e a política predefinida a eliminar, continuo a receber ataques que estão a afetar o meu servidor de jogos. O que fazer?

Para isso, terá de partilhar os dumps de tráfego de rede relevantes, como exemplos de tais ataques (ficheiro *.pcap*) e pedir a otimização da proteção do seu perfil. Isto pode ser feito através do nosso [Centro de Ajuda](https://help.ovhcloud.com/csm?id=csm_get_help).

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.