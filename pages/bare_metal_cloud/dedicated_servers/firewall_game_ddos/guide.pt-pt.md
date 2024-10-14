---
title: "Proteger um servidor de jogos com a firewall aplicacional"
excerpt: "Descubra como configurar o OVHcloud Game DDoS Protection firewall"
updated: 2024-10-24
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

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O objetivo deste guia é ajudá-lo a compreender melhor a nossa proteção Anti-DDoS Game (também conhecida como *Game firewall*) e a fornecer-lhe instruções sobre a forma de configurar uma proteção eficaz.

> [!primary]
> Encontre mais informações sobre a nossa [proteção anti-DDoS Game no nosso site](/links/security/ddos).
>

Os nossos servidores dedicados Bare Metal gaming incluem uma proteção suplementar contra os ataques de rede especialmente concebida para proteger as aplicações de jogos contra os ataques direcionados, garantindo assim a estabilidade e a acessibilidade aos jogadores. Esta solução de proteção dedicada é robusta e fácil de utilizar, permitindo-lhe concentrar-se no desenvolvimento da sua empresa sem ter de se defender contra o crime cibernético.

|![global-schema](images/global_schema_focus_game.png) |
|:—:|
Esquema dos serviços de infraestrutura e de proteção dos jogos anti-DDoS na OVHcloud |

## Requisitos

- Um [servidor dedicado **Game** da OVHcloud](/links/bare-metal/game)
- Acesso à [Área de Cliente OVHcloud](/links/manager)

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos servidores da [**gama Eco**](/links/bare-metal/eco-about).
>
> Consulte [página de comparação](/links/bare-metal/eco-compare) para obter mais informações.

## Instruções

### Introdução

A infraestrutura anti-DDoS, associada à firewall Edge Network, protege a rede contra ameaças comuns (principalmente centradas nas camadas ISO OSI 3 e 4). No entanto, o alojamento de aplicações de jogos pode revelar-se uma experiência difícil em termos de segurança de rede. **A Game DDoS Protection** está pronta para o ajudar: trata-se de uma firewall de camada 7 (aplicação) que se concentra na proteção de protocolos de jogo específicos. As suas principais vantagens são as seguintes:

- **Latência muito baixa**: Sabemos que a latência e a estabilidade são essenciais para os jogos online. Estas soluções são colocadas mais perto dos servidores e funcionam em conjunto com um material potente.
- **Bidirecional**: A plataforma analisa o tráfego de entrada e de saída para uma melhor compreensão da situação de cada jogador.
- **Instantâneo** : Permite distinguir os verdadeiros jogadores dos ataques nocivos num servidor desde os primeiros pacotes da rede.
- **Sempre ativo**: a capacidade de detetar e parar ataques garante uma experiência fluida para aplicações de jogos sensíveis, sem perturbações ou mudanças de latência.

### Ativação e configuração da proteção anti-DDoS Game

> [!primary]
> O *Firewall Game* protege o IP associado a um servidor. Por conseguinte, se possui um servidor com vários endereços IP (ex: [endereços Additional IPs](/links/network/additional-ip)), deve configurar cada um separadamente.
>

Para configurar as regras de proteção de jogos do seu servidor Bare Metal Game, aceda à Área de Cliente OVHcloud e siga estas etapas:

- Clique no separador "Bare Metal Cloud" {.action}.
- Aceda ao `Network`{.action} na barra lateral à esquerda.
- Abrir `IP`{.action}.

Pode filtrar os endereços IP utilizando o menu pendente `Todos os serviços`{.action}. Introduza o nome ou a categoria do servidor correspondente:

| ![configure-game-firewall](images/ip_listing.png) |
|:—:|
| Lista dos IP : encontre o endereço IP por serviço correspondente |

Aceda à configuração do *Firewall Game*:

| ![game-server](images/firewall_game_01_blur.png) |
|:—:|
| Clique no botão `...`{.action} junto do endereço IP do seu servidor Game. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:—:|
| Clique em `Configurar a firewall GAME`{.action}. |

Neste momento, já pode configurar regras de proteção de jogos para o endereço IP selecionado.

> [!primary]
> É importante notar que a proteção anti-DDoS Game não tomará nenhuma medida enquanto as regras de proteção do jogo não estiverem configuradas.
>

Para ativar a proteção anti-DDoS Game, basta definir as aplicações de jogo bem como o intervalo de portas de rede (ou porta única) que lhe está associada:

| ![add-rule-btn](images/firewall_game_03.png) |
|:—:|
| No ecrã seguinte, clique no botão ‘Adicionar uma regra‘ {.action} para adicionar uma regra ao *Firewall Game*. |


A proteção anti-DDoS Game permite-lhe configurar até **100 regras por endereço IP** que apontam para um servidor de jogo Bare Metal de 3ª geração (servidores comercializados em 2024 ou versão posterior), ou até **30 regras por endereço IP** para as antigas gamas de jogos Bare Metal (geralmente identificadas como RISE-GAME ou SYS-GAME).

Os protocolos de jogo suportados (títulos e versões de jogos que podem ser protegidos) podem mudar com o tempo. Além disso, podem ser diferentes entre as antigas gamas de servidores Bare Metal Game e as mais recentes. A lista mais recente dos perfis de jogos suportados está disponível [aqui](/links/security/ddos).

| ![confirm-new-rule](images/firewall_game_04.png) |
|:—:|
| Configure as proteções do jogo selecionando um **Protocolo** na lista e definindo o **intervalo de portas** no qual a aplicação do jogo recebe as ligações (consulte a documentação de instalação do jogo). De seguida, clique no botão `Confirmar`{.action} para guardar. A configuração das regras da *firewall game* está terminada. |

As regras de proteção do *Firewall Game* não devem sobrepor-se em termos de portas definidas.

A opção **Outro** pode ser selecionada para aplicações alojadas em portas específicas (para as quais não existe proteção disponível), de modo a deixar passar o tráfego do cliente. Tenha em conta que não existe muita segurança suplementar para o tráfego correspondente à regra **Outro** e deve ser utilizado com prudência.

Além disso, recomendamos-lhe vivamente que defina a regra **"Default policy = DROP"** em cada IP que aponte para o seu servidor Game. Esta opção permitirá à proteção Anti-DDoS Game eliminar todo o tráfego que não corresponda às regras definidas, ou seja, todas as aplicações de jogo listadas serão protegidas e nenhuma outra ligação poderá chegar ao seu servidor.

> [!warning]
> A proteção anti-DDoS Game produz efeitos após as regras definidas no [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Para que os dois funcionem corretamente, a Edge Firewall Network não pode ser demasiado rigorosa e deve passar o tráfego para a proteção anti-DDoS Game.
>

### Menções específicas para certos jogos

#### Ark Survival Evolved

- **Ark Survival Evolved** : Motor principal de proteção.
- **Ark Survival Evolved v.311.78** : Motor de proteção atualizado, adicionado na 3ª geração de servidores Bare Metal Game (versão 2024).

#### Counter Strike 2

- **Counter Strike 2**: Novo motor de proteção adicionado na 3ª geração de servidores Bare Metal Game (versão 2024).

#### FiveM

- **FiveM** é um modo multiplayer Grand Theft Auto V da Cfx.re, agora reconhecido pelo editor de jogos da Rockstar. Nós adicionámos o suporte de FiveM na 3ª geração de servidores Bare Metal Game (versão 2024).

### Rust

- **Rust** é suportado com um perfil de proteção dedicado em todas as gerações de servidores Bare Metal Game. Tenha em conta que atualizámos este perfil de proteção (ou seja, adicionámos o suporte de cookies RakNet) para a 3ª geração de servidores Bare Metal Game (versão 2024).
Pode saber mais sobre o alojamento Rust nos servidores OVHcloud [aqui](/links/bare-metal/bare-metal/game-rust).

#### Minecraft

Minecraft é bem suportado pelos seguintes perfis:

- **Java Minecraft**: Deve ser a melhor solução para todas as versões de Java Minecraft. Protege o protocolo Minecraft Query e está configurado para o tráfego TCP. Foi adicionado em 2024, mas também está disponível para as gerações anteriores de servidores Bare Metal Game. Atenção: se houver outros jogos UDP alojados no mesmo IP.
- **Minecraft Query** : Proteção geral do protocolo Minecraft Query.
- **Minecraft Bedrock**: Proteção Minecraft Bedrock (com suporte para cookies RakNet), adicionada na 3ª geração de servidores Bare Metal Game (versão 2024).
- **Minecraft Pocket Edition** : Proteção PE/Bedrock Minecraft.

#### Valheim

- **Valheim** : Novo motor de proteção, adicionado na 3ª geração de servidores Bare Metal Game (versão 2024).

> [!primary]
> Se aloja um serviço de maior envergadura com um dos jogos suportados, mas observa falsos positivos provenientes dos sistemas de infraestrutura anti-DDoS, contacte a nossa assistência através do [Centro de Ajuda](https://help.ovhcloud.com/csm?id=csm_get_help) com todos os detalhes necessários para melhorar o perfil da aplicação.
>

### Utilização de endereços Additional IP com servidores dedicados Game

Os endereços Additional IP oferecem uma forma flexível de gerir as suas aplicações em vários servidores ou serviços alojados. Elas trazem um valor acrescentado à sua infraestrutura de alojamento de jogos, permitindo-lhe gerir a escalabilidade ou as ações de failover sem que isso afete os endereços IP públicos. Os Additional IP permitem-lhe igualmente definir diferentes localizações geográficas de IP ou ainda explorar o seu próprio bloco de IP (utilizando o serviço BYOIP) para os servidores Game da OVHcloud.

Embora os Additional IP permitam alguma flexibilidade, algumas situações requerem uma atenção suplementar.

#### Configuração por IP específico para a geração de um servidor Game

Para oferecer a maior flexibilidade de configuração, diferentes regras de proteção do jogo podem ser definidas em diferentes endereços Additional IP que apontam para o mesmo servidor Bare Metal Game.  
O número máximo de regras e os parâmetros de proteção disponíveis são definidos numa base por endereço IP, mas são específicos da geração de servidores Bare Metal Game específicos por trás da firewall.

Existem diferenças entre os servidores Game mais recentes (3ª geração de servidores Game Bare Metal, saída em 2024) e os servidores Game mais antigos (gerações anteriores, geralmente identificados como RISE-GAME ou SYS-GAME).

##### Verificando proteções de jogos suportadas

Todos os protocolos de proteção anti-DDoS Game suportados para um servidor específico estão visíveis na página de configuração `GAME firewall`{.action} para qualquer endereço IP que aponte para esse servidor, no menu pendente `Game protocol`{.action} :

| ![control-panel-game-protocols](images/game_protocols_list.png) |
|:—:|
| Lista de protocolos de proteção suportados |

Se preferir a automatização, os detalhes do protocolo podem ser recuperados através de [APIv6 OVHcloud](/pages/manage_and_operate/api/first-steps) :

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/game/{ipOnGame}
>

Exemplo de resposta API:

```python
{
    ipOnGame: "1.2.3.4"
    maxRules: 30
    state: "ok"
    firewallModeEnabled: true
  - supportedProtocols: [
        "arkSurvivalEvolved"
        "arma"
        "gtaMultiTheftAutoSanAndreas"
        "gtaSanAndreasMultiplayerMod"
        "hl2Source"
        "minecraftPocketEdition"
        "minecraftQuery"
        "mumble"
        "other"
        "rust"
        "teamspeak2"
        "teamspeak3"
        "trackmaniaShootmania"
    ]
}
```


#### Migração de um Additional IP entre servidores

Embora uma configuração do conjunto de regras estática possa ser explícita, as ações de migração de endereços Additional IP podem exigir alguns comentários.

- **Migração de um IP de uma antiga geração para uma nova geração de servidores Bare Metal Game:**
    - O processo é transparente e todas as regras de proteção e os parâmetros IP serão conservados.

- **Migração de um IP de uma nova geração para uma antiga geração de servidores Bare Metal Game:**
    - Se o servidor de destino suportar menos regras de proteção do que as do servidor original, será apresentado um erro e a ação será interrompida.
    - Caso contrário:
        - As regras de compatibilidade descendente são conservadas (o nome do perfil de proteção deve ser igual).
        - As regras não suportadas no servidor de destino serão eliminadas.

- **Migração de um IP de um servidor Bare Metal Game para outros servidores ou serviços:**
    - Todas as regras de proteção anti-DDoS Game aplicadas ao IP serão eliminadas, pois não são suportadas fora dos servidores Bare Metal Game.


## FAQ

/// details | **Posso utilizar a proteção anti-DDoS Game noutras gamas que não os servidores Bare Metal Game?**

Não, a proteção anti-DDoS Game só está disponível para os nossos servidores dedicados Bare Metal Game.

///

/// details | **Como posso assegurar que a automatização funciona para um Additional IP entre uma nova e uma antiga geração de servidores Bare Metal Game?**

Poderá limitar as suas regras de proteção a 30 por IP ou configurar os seus scripts de automatização para que possam eliminar e adicionar regras antes e depois de migrar um IP para outro servidor. Recomendamos que utilize a última geração de servidores Bare Metal Game, pois estes são entregues com numerosas melhorias.

///

/// details | **Posso desativar a proteção anti-DDoS Game?**

É possível, mas não recomendado. Você pode fazer isso removendo todas as regras de protocolo de jogo da configuração e desativando a entrada `Default policy: DROP`.

///

/// details | **O meu jogo não consta da lista de protocolos suportados. O que posso fazer?**

Pode propor as suas necessidades no nosso [roadmap das soluções de infraestrutura no GitHub](https://github.com/orgs/ovh/projects/16/views/14). Isso nos ajudará a decidir a prioridade das próximas funcionalidades a serem desenvolvidas.

///

/// details | **Depois de configurar o meu jogo com as portas adequadas e a política predefinida para eliminar, continuo a receber ataques que afetam o meu servidor Game. O que fazer?**

Deverá partilhar os dumps pertinentes do tráfego de rede a título de exemplos de tais ataques (ficheiro *.pcap*) de forma a pedir o ajuste da proteção do seu perfil. Para isso, aceda ao nosso [Centro de Ajuda](https://help.ovhcloud.com/csm?id=csm_get_help).

///

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa [comunidade de utilizadores](/links/community).