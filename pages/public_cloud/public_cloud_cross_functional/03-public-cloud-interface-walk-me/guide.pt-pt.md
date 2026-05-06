---
title: "Familiarizar-se com a interface Public Cloud"
excerpt: "Visita guiada da interface Public Cloud para descobrir as diferentes secções"
updated: 2026-04-07
---

## Objetivo

Acaba de criar o seu projeto Public Cloud e deseja saber um pouco mais sobre a interface de utilizador no seio da na Área de Cliente OVHcloud.

**Descubra as principais secções da interface Public Cloud na Área de Cliente OVHcloud.**

## Requisitos

- Ter criado um [primeiro projeto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Caminho de navegação:** `Public Cloud`{.action} > Selecione o seu projeto

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instruções

Depois de criar o seu primeiro projeto Public Cloud, será redirecionado para a interface Public Cloud principal.

### O acesso às suas informações de conta OVHcloud

Os parâmetros da sua conta OVHcloud ficam acessíveis a qualquer momento, assim como as notificações ou a alteração de língua na área de cliente.

### O seu projeto Public Cloud

Uma vez que é possível gerir vários projetos de acordo com as suas quotas, o nome e o ID de cada projeto permanecem sempre visíveis, independentemente do ecrã que consultar. Esta informação permite-lhe saber em permanência em que ambiente está a trabalhar. Pode encontrá-la a qualquer momento no menu da esquerda.

A ID pode ser necessária aquando da utilização da CLI, de certos pedidos de suporte ou outros. Pode copiá-lo clicando no ícone à direita.

Pode alterar o nome do projeto através do separador `Parâmetros`{.action}. Introduza um novo nome e clique em `Atualizar`{.action}.

### O menu principal Public Cloud

|Secção|Descrição das opções|
|---|---|
|**Compute**|Esta secção permite-lhe iniciar instâncias, ou seja, servidores cloud disponíveis a pedido.|
|**Storage & backup**|Aqui encontrará diversas soluções de armazenamento e bases de dados, cada uma adaptada a necessidades específicas.|
|**Network**|Esta secção permite ligar os seus recursos Public Cloud entre si e com outros produtos da OVHcloud.|
|**Containers & Orchestration**|Esta secção oferece ferramentas para automatizar as suas arquiteturas e ganhar em flexibilidade.|
|**Databases & Analytics**|Estes serviços ajudam a gerir as suas problemáticas de Big Data e análise de dados.|
|**AI & Machine Learning**|Aqui encontrará as ferramentas da OVHcloud dedicadas à inteligência artificial.|
|**Quantum**|Esta secção agrupa os serviços relacionados com a computação quântica.|
|**Management Interfaces**|Uma única ligação à interface Horizon.|
|**Parâmetros**|Esta secção permite configurar e gerir os aspetos do projeto.|

### Atalhos

O centro do ecrã propõe-lhe atalhos que permitem aceder rapidamente aos assistentes de configuração e aos guias mais úteis.

#### Auxílios à criação de recursos

Para cada recurso que deseja criar, será acompanhado por um assistente de configuração que, etapa após etapa, lhe permite parametrizar o recurso de acordo com as suas necessidades.

Na maioria dos casos, deverá escolher a localização do recurso, o modelo, alguns parâmetros personalizáveis e, em certos casos, o modo de faturação.

### Ferramentas de gestão

No seu projeto Public Cloud, estão disponíveis várias ferramentas de gestão para configurar os seus recursos, utilizadores e parâmetros. Pode aceder-lhes a partir do menu da esquerda, na parte inferior. As ferramentas estão agrupadas em duas secções principais: **Management Interfaces**, que contém a ligação à interface Horizon, e **Parâmetros**, que agrupa todas as opções de configuração do projeto (utilizadores, quotas, SSH, faturação, contactos, etc.).

|Entrada do menu|Descrição|
|---|---|
|**Horizon**|Esta é a [interface gráfica](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) geralmente disponível no OpenStack. Não é alterada, o que permite aos utilizadores habituados a esta interface encontrar os seus reflexos.|
|**Utilizadores e funções**|Permite [criar utilizadores](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) e atribuir-lhes um papel. Estes utilizadores permitem, nomeadamente, aceder diretamente às API ou à interface Horizon. Por exemplo, pode criar um utilizador para as suas operações de manutenção clássicas e um utilizador para as suas ferramentas de automatização, como por exemplo o Terraform.|
|**Limite e regiões**|Esta ferramenta permite-lhe controlar as localizações e os limites de recursos disponíveis no seu projeto.<br><br>**Limites**: De acordo com certos critérios (número de faturas já pagas, utilização de outros produtos da OVHcloud), o nosso sistema implementa quotas (limites) no número de recursos que pode criar, com o objetivo de evitar qualquer problema de pagamentos em atraso. Por predefinição, o sistema aumenta os seus limites automaticamente quando determinados critérios são atingidos. No entanto, pode [aumentar manualmente uma quota](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota#aumentando-manualmente-a-cota-de-recursos) a partir desta ferramenta.<br><br>**Localizações**: O Public Cloud está disponível em várias localizações em todo o mundo. Além disso, cada localização pode incluir várias "regiões" (conceito específico de OpenStack). Por exemplo, para um cliente europeu, a zona APAC (Ásia-Pacífico) é desativada por predefinição. Se isso corresponder às suas necessidades, pode ativar novas regiões a partir deste menu.|
|**Chaves SSH**|Uma ferramenta que lhe permite [gerir as suas chaves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) de forma centralizada.|
|**Faturação**|Uma vez que o Public Cloud baseia-se na faturação *pay as you go*, ou seja, as faturas são editadas no final do mês. [Neste menu](/pages/public_cloud/public_cloud_cross_functional/analyze_billing), poderá seguir o seu consumo atual, ver uma previsão da próxima fatura e, claro, encontrar as suas faturas anteriores.|
|**Créditos e Vouchers**|Este menu permite-lhe consultar o consumo de um cupão, adicionar um ou [adicionar crédito](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project) diretamente no seu projeto Public Cloud.|
|**Savings Plan**| Este é um modelo de preços que oferece descontos em recursos específicos quando opta por períodos de compromisso até 36 meses.|
|**Contactos e direitos**|Além da possibilidade de alterar o contacto técnico ou o contacto de faturação do seu projeto, terá a possibilidade de [adicionar outros contactos](/pages/public_cloud/compute/change_project_contacts) (conta OVHcloud) para administrar tecnicamente o seu projeto. Também pode adicionar utilizadores apenas em consulta *read-only*.|
|**Parâmetros do projeto**|Esta última ferramenta permite-lhe configurar os parâmetros gerais do projeto como o seu nome, a sua configuração enquanto "projeto predefinido da conta", a compatibilidade HDS, ou ainda [eliminar o seu projeto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/delete_a_project).|

### Gestão dos serviços

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2mHcXQC6mTM?si=8_0aQCfBtmumGRbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> [!primary]
>
> Nesta secção, apresentamos uma visão geral das diferentes opções de gestão dos serviços propostas pela OVHcloud, através de três ferramentas principais: a Área de Cliente OVHcloud, o Horizon e a API OpenStack. Cada uma destas ferramentas foi concebida para responder a necessidades específicas em função do seu nível de especialização, das suas preferências em termos de gestão, bem como das suas exigências de desempenho e de personalização.
>
> A matriz abaixo compara as principais características de cada ferramenta para o ajudar a escolher a solução que melhor se adapta às suas necessidades. Quer seja um utilizador principiante, intermediário ou especialista em automatização, esta comparação permitir-lhe-á compreender melhor as vantagens, a facilidade de utilização, os níveis de competência necessários e a escalabilidade de cada ferramenta.
>

| Critérios/Caraterísticas                    | Spazio Cliente OVHcloud | Horizon | OpenStack API |
| ------------------------------------------- | ---------------------- | ------- | ------------- |
| Principais benefícios                        | Interface intuitiva, ideal para uma utilização rápida. | Proporciona um maior controlo para os utilizadores experientes com uma visualização de definições avançada. | Automatização completa, com integração fluida com outras ferramentas.|
| Nível de competência necessário                 | Acessível a todos, ideal para iniciantes ou necessidades simples | Intermediário, requer uma certa perícia (administradores de sistemas, engenheiros de Cloud...) | Avançado, requer competências em scripting/API (Arquitetos Cloud, Engenheiros DevOps, Peritos em Automatização) |
| Facilidade de utilização                      | Intuitiva e acessível | Avançada, mas visual | Técnico |
| Personalização                            Baixo - Ideal para configurações standard e rápidas com controlo avançado limitado. | Média - Interface gráfica que oferece configurações avançadas (rede, armazenamento, etc.), embora limitadas pela interface do utilizador. | Altíssima - Personalização quase completa através da API, com a possibilidade de criar scripts, fluxos de trabalho automatizados e arquiteturas à medida. |
| Desempenho e escalabilidade                 | Desempenho limitado e escalabilidade básica. Adequado para implementações pequenas e não críticas. A escalabilidade é geralmente manual e mais lenta. Ideal para ambientes estáticos ou pequenos projetos. | Média de desempenho com escalabilidade melhorada através da GUI. Escalabilidade mais rápida que com a Área de Cliente OVHcloud, mas limitada pela interface. Adequado para projetos de média dimensão ou que requerem alguma escalabilidade. | Excelente desempenho e escalabilidade completa. Permite implementações massivas, automatizadas e rápidas através de scripts ou ferramentas de terceiros. Ideal para infraestruturas dinâmicas, cargas pesadas e ambientes que requerem uma elevada elasticidade. Recomendado para arquiteturas críticas. |
| Perímetros de utilização (Compute)          | - Criação e gestão simplificada das máquinas virtuais (VM).<br> - Redimensionamento das VM após criação (modificação do modelo "flavor" a quente ou a frio, consoante os recursos disponíveis).<br> - Seleção de configurações standard para as VM (RAM, CPU, armazenamento).<br> - Gestão das ações essenciais: arranque, paragem e eliminação das VM.<br> - Acesso às snapshots para backups rápidos e restauros simplificados.<br> - Atribuição e gestão dos endereços Floating IP.<br> - Criação e administração básica de discos adicionais.<br> - Supervisão dos recursos com um sistema de monitorização essencial (CPU, memória, armazenamento). | - Gestão avançada de acessos: suporte de controlo de acessos baseado em funções (RBAC) para uma gestão multiutilizador segura.<br> - Administração avançada da rede: criação e gestão de redes privadas complexas associadas a VM (redes internas, sub-redes).<br> - Implementação de VM com configurações de rede específicas, incluindo a gestão de várias interfaces de rede.<br> - Utilização de imagens personalizadas para a criação de VM, em alternativa às imagens standard disponibilizadas pela OVHcloud.<br> - Integração de fluxos de trabalho pré-configurados via Horizon para automatizar as implementações e configurações. | - Automatização completa: todas as ações disponíveis na Área de Cliente OVHcloud e Horizon são realizáveis através da API, com a possibilidade de as automatizar e de as scriptar.<br> - Implementação de infraestruturas no modo Infrastructure as Code (IaC) graças a ferramentas como Terraform, Ansible ou scripts personalizados.<br> - Integração com pipelines CI/CD para implementações automatizadas (por exemplo, integração com GitLab CI).<br> - Gestão avançada de quotas de recursos (número de CPUs, RAM total, etc.).<br> - Escalabilidade dinâmica: ajuste automático das instâncias em função da carga através da API ou de scripts.<br> - Monitorização e recolha de métricas personalizadas através da API, oferecendo mais granularidade do que a interface Horizon ou a Área de Cliente OVHcloud. |
| Perímetros de utilização (Network)          | - Criação e gestão de redes privadas (Private Networks).<br> - Associação de endereços Floating IP e de endereços Additional IP.<br> - Configuração de roteamento de base (Basic Routing). | - Gestão avançada de regras de segurança através dos grupos de segurança (Security Groups).<br> - Visualizar topologias de rede para gestão simplificada.<br> - Suporte completo das sub-redes IPv6 para uma conectividade moderna.<br> - Configuração das políticas de QoS (Quality of Service) para priorizar os recursos de rede. | - Acesso a todas as funcionalidades disponíveis na interface Horizon e na Área de Cliente OVHcloud.<br> - Criação de rotas personalizadas para uma gestão de rede mais flexível.<br> - Configuração precisa das políticas QoS (Quality of Service).<br> - Gestão avançada de VRRP (Virtual Router Redundancy Protocol) para assegurar a redundância dos routers.<br> - Automatização das ações de rede graças a scripts (Infrastructure as Code).<br> - Integração com soluções SDN (Software-Defined Networking) para uma gestão ágil da rede. |
| Perímetros de utilização (Storage & Backup) | - Criação e gestão dos volumes de armazenamento: Object Storage, Block Storage e File Storage.<br> - Backup automático básico (snapshots) dos volumes, com possibilidade de restauro.<br> - Associação dos volumes de armazenamento às instâncias para um acesso simplificado.<br> - Gestão dos containers Object Storage (Swift) para organizar os dados.<br> - Visualização do estado dos volumes e do espaço de armazenamento utilizado.<br> - Adicionar e gerir ficheiros num Object Storage. | - Gestão avançada de snapshots: retenção, duplicação e outras opções para um controlo preciso dos backups.<br> - Gestão detalhada de partilhas de volumes (multi-attach) para uma flexibilidade acrescida.<br> - Criação e gestão de backups agendados com políticas de backup personalizáveis.<br> - Monitorização da utilização das quotas de armazenamento para um controlo ótimo do espaço disponível. | - Funcionalidades acessíveis através do Horizon e da Área de Cliente OVHcloud.<br> - Integração e automatização através de scripts (Infrastructure as Code) para uma gestão fluída.<br> - Configuração avançada de partilhas de rede (NFS, CIFS) para uma flexibilidade acrescida na organização dos ficheiros.<br> - Gestão precisa dos metadados dos objetos no Object Storage para um controlo ideal dos dados.<br> - Configuração avançada da replicação e da versão de objetos para uma alta disponibilidade e uma gestão de versões completa.<br> - Acesso direto à API Swift para uma integração fluída com ferramentas de terceiros.<br> - Criação de fluxos de trabalho personalizados para automatizar e gerir eficazmente os processos de cópia de segurança. |

## Quer saber mais?

[Criação e conexão a uma primeira instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa [comunidade de utilizadores](/links/community).
