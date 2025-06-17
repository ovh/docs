---
title: "Bare Metal 3-AZ Region - Apresentação da oferta"
excerpt: 'Descubra o serviço Bare Metal 3-AZ, que oferece uma alta disponibilidade e uma redundância inigualáveis entre três datacenters'
updated: 2025-06-04
---

## Objetivo

A OVHcloud propõe o seu serviço Bare Metal na [região 3-AZ](/links/bare-metal/regions), uma evolução significativa na estratégia de regionalização da empresa. Este serviço, disponível na região de Paris, constitui um novo standard do sector em matéria de fiabilidade e de desempenho dos servidores Bare Metal.

O Bare Metal da região 3-AZ responde às necessidades dos clientes que precisam de uma alta disponibilidade e de uma redundância nos seus planos de continuidade de atividade. Este serviço fornece servidores Bare Metal em três datacenters próximos de Paris, ligados por uma rede de baixa latência. Este serviço assegura uma segurança melhorada, um desempenho melhorado e funcionalidades ininterruptas mesmo em caso de incidente localizado.

> [!primary]
>
> **Informação importante - Evolução da oferta Bare Metal 3-AZ**
>
> A partir de maio de 2025, o modelo de entrega dos servidores Bare Metal na região Paris 3-AZ evolui significativamente. O anterior modelo de fornecimento obrigatório em clusters de 3 servidores (um em cada zona de disponibilidade) será abandonado.
>
> **Principais alterações:**
>
> - Os clientes terão a possibilidade de escolher livremente o número exato de servidores de que necessitam.
> - A repartição dos servidores pelas diferentes zonas de disponibilidade (AZ) será inteiramente personalizável.
> - Nenhuma obrigação de implementação nas três zonas em simultâneo.
>
> **Importante:** as informações apresentadas neste guia, nomeadamente no que diz respeito à implementação obrigatória do cluster e potencialmente à experiência do utilizador que reflete este modelo, aplicam-se principalmente aos clientes cujos servidores foram entregues *antes de maio de 2025* com o modelo de cluster anterior. As novas implementações a partir de maio de 2025 beneficiarão da flexibilidade do novo modelo e potencialmente de uma interface adaptada. Para qualquer questão relativa a esta evolução ou para adaptar a sua infraestrutura existente, contacte o seu gestor de conta ou o suporte da OVHcloud.
>

## Visão geral

### Objetivo do Serviço

O valor da região 3-AZ reside na oferta de três servidores idênticos repartidos por três zonas de disponibilidade no seio da mesma região. Esta configuração garante uma alta disponibilidade e uma redundância dos dados, mantendo a continuidade operacional e reduzindo o risco de perda de dados. A distribuição estratégica dos servidores minimiza a latência e melhora o desempenho das aplicações.

### A regionalização na OVHcloud

A OVHcloud está presente em todo o mundo, nomeadamente na Europa, nos Estados Unidos, no Canadá e na Ásia-Pacífico. A introdução do conceito de Região e o suporte das Zonas de Disponibilidade é uma iniciativa estratégica que visa fornecer aos clientes um desempenho e uma resiliência ótimos. A região parisiense é a primeira a adotar o modelo 3-AZ.

### Dicas de seleção de região

Para obter o máximo desempenho, é necessário que a seleção de uma região esteja mais próxima dos utilizadores. Para uma disponibilidade mundial, os serviços devem ser repartidos por várias regiões. A região 3-AZ é ideal para os clientes que procuram a maior resiliência e deve ser utilizada para criar projetos de aplicações multi-AZ.

Na [Área de Cliente OVHcloud](/links/manager), poderá consultar os seus clusters na lista de `Servidores dedicados`{.action} do menu `Bare Metal Cloud`{.action} ao passar para o separador `Clusters 3-AZ`{.action}.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters1.png){.thumbnail}

Clique no nome do cluster na tabela para ver os detalhes.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters2.png){.thumbnail}

Clique no separador `Nós`{.action} para abrir a lista de servidores do cluster.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters3.png){.thumbnail}

Ao clicar no nome de um servidor/nó desta lista, abre-se o separador `Informações gerais`{.action} do servidor. Pode encontrar mais informações na secção Área de Cliente no nosso manual:

[Como começar com um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)


## Quer saber mais? <a name="go-further"></a>

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
