---
title: 'Public Cloud Instâncias - Conceitos-chave'
excerpt: 'Descubra os fundamentos do Public Cloud Compute: funcionamento das instâncias, famílias e tamanhos disponíveis, implantações multi-AZ, gestão de imagens, segurança SSH, mecanismos de backup, rede pública/privada e vantagens dos Savings Plans.'
updated: 2025-12-05
---

## Objetivo

Este guia visa dar-lhe uma compreensão clara dos conceitos fundamentais necessários para a criação, configuração e gestão das suas primeiras instâncias OVHcloud Public Cloud Compute. Irá aprender como funcionam as instâncias, como escolher o tipo certo de instância e como os elementos-chave, como imagens, zonas de disponibilidade, rede, segurança e backups, se articulam no ecossistema OVHcloud.

## O que é uma instância (Máquina Virtual)?

Uma instância, ou Máquina Virtual (VM), é um servidor totalmente isolado a executar-se na infraestrutura física partilhada da OVHcloud. Funciona como um servidor tradicional, mas oferece a flexibilidade e a escalabilidade do cloud. Pode escolher o sistema operativo, definir os recursos CPU, RAM e Armazenamento e implantar as suas aplicações, sites web ou ambientes de desenvolvimento.

As instâncias Public Cloud Compute oferecem:

- Criação sob demanda e dimensionamento flexível – Escalonar os recursos conforme as suas necessidades.
- Faturação por utilização – Faturado por hora ou por mês, consoante a utilização real.
- Integração transparente com os serviços OVHcloud – incluindo o armazenamento de objetos (*Object Storage*), rede, backups e muito mais.

As instâncias podem ser geridas através da área de cliente OVHcloud, da interface Horizon, dos pontos de acesso API, ou através de ferramentas de automação e orquestração como a CLI OVHcloud e o Terraform.

## Tipos de instâncias

A OVHcloud oferece várias famílias de instâncias concebidas para responder a diferentes necessidades de carga de trabalho. Cada família oferece uma gama de tamanhos (*flavors*) para corresponder precisamente às suas necessidades em termos de recursos.

| Tipos de instâncias  | Descrição                      | Casos de utilização típicos                                                                                                                                                        |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Geral           | Equilíbrio CPU e Memória         | Adequada para servidores de desenvolvimento, aplicações web e cargas de trabalho empresariais gerais. Fornecer um ratio equilibrado entre CPU e RAM.                                            |
| CPU otimizada      | Alta performance do processador     | Ideal para aplicações intensivas em cálculo, tarefas de processamento paralelo, pipelines CI/CD ou microserviços que necessitam de uma alta frequência CPU.                                     |
| Memória otimizada  | Capacidade de memória elevada          | Concebida para análise de dados, cargas de trabalho big data e cache de bases de dados. Apresenta altas taxas de memória/CPU e IOPS acelerados. Os núcleos virtuais são clockados a 2 GHz ou mais.       |
| Armazenamento otimizado | Alta performance IOPS           | Equipada com armazenamento NVMe para E/S de disco ultra rápidas, ideal para bases de dados e aplicações big data.                                                                     |
| GPU                | Gráficos acelerados com hardware      | Fornece uma performance de cálculo paralelo excepcional, até 1000 vezes mais rápida que a CPU para certas cargas de trabalho. Adequada para IA, aprendizagem profunda e renderização 3D.               |
| Descoberta         | Recursos partilhados, económica | Instâncias de entrada com recursos partilhados, oferecendo uma performance estável a um preço acessível. Ideal para ambientes de teste, formação ou projetos de prova de conceito. | 

Cada família de instâncias inclui vários tamanhos (flavors) para o ajudar a adaptar a instância às necessidades específicas das suas aplicações.

## Localização e zonas de disponibilidade

As instâncias Public Cloud da OVHcloud são implantadas em [vários centros de dados espalhados pelo mundo](/links/infrareg), assegurando uma alta disponibilidade e proximidade com os seus utilizadores. Exemplos de regiões:

- GRA – Gravelines, França
- BHS – Beauharnois, Canadá
- DE – Frankfurt, Alemanha

**Tipos de zonas de disponibilidade:**

| Tipos de zona                   | Descrição                                                                    | Utilização recomendada                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1-AZ (Single Availability Zone) | As instâncias são implantadas numa única zona.                                   | Ambientes simples, desenvolvimento, testes ou cargas de trabalho não críticas.                                  |
| 3-AZ (Triple Availability Zone) | As instâncias são distribuídas por três zonas redundantes dentro da mesma região. | Cargas de trabalho de produção que necessitam de alta disponibilidade e tolerância a falhas.                                  |
| Local Zones                     | Locais periféricos mais próximos dos utilizadores finais para reduzir a latência. | Aplicações sensíveis à latência tais como processamento de dados em tempo real, jogos online ou serviços web interativos. | 

> [!primary]
> 
> **Boa prática**: Para cargas de trabalho críticas, prefira uma [implantação multi-AZ](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture) para assegurar a resiliência e a continuidade do serviço.
>

## Imagens do sistema disponíveis

Ao criar uma instância, seleciona uma imagem que inclui o sistema operativo e, opcionalmente, aplicações pré-instaladas. A OVHcloud oferece uma variedade de imagens para responder a necessidades diversas:

- **Distribuições Linux**: Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux e outras. Estas imagens estão prontas para uso em servidores web, ambientes de desenvolvimento e cargas de trabalho gerais.
- **Windows Server**: Versões com licenças integradas, permitindo um implantação imediata para aplicações baseadas em Microsoft e cargas de trabalho empresariais.
- **Aplicações pré-configuradas**: Imagens que incluem software como cPanel, Plesk, Docker ou NVIDIA GPU Cloud (NGC). Simplificam a implantação e aceleram a transição para a produção.
- **[Imagens personalizadas](/pages/public_cloud/compute/upload_own_image)**: Pode importar as suas próprias imagens nos formatos QCOW2 ou RAW, oferecendo um controlo total sobre o seu ambiente e permitindo migrações, modelos padronizados ou configurações especializadas.

**Ciclo de vida e suporte**: A OVHcloud atualiza regularmente o catálogo de imagens. Consulte sempre as anúncios sobre o ciclo de vida e o fim do suporte para assegurar que as suas imagens permaneçam seguras e suportadas. Veja [aqui](/pages/public_cloud/compute/image-life-cycle).

## Chaves SSH

As chaves SSH oferecem um meio seguro de aceder às suas instâncias sem utilizar palavras-passe. São compostas por dois elementos:

- **Chave pública**: Instalada na instância para permitir o acesso.
- **Chave privada**: Guardada com segurança na sua máquina local e utilizada para autenticar a ligação.

A autenticação SSH assegura um acesso encriptado e fiável aos seus servidores.

Boas práticas:

- Nunca partilhe a sua chave privada.
- Utilize uma chave única para cada utilizador.
- Armazene as suas chaves num gestor ou cofre seguro.

Para instruções detalhadas sobre a criação e utilização de chaves SSH, consulte o guia [OVHcloud sobre SSH](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Backups

Os backups protegem os seus dados e configurações contra perdas acidentais ou erros. A OVHcloud oferece vários mecanismos de backup para assegurar a segurança das suas instâncias e dados:

- **Tipos de backup:**
    - Backups manuais: Tire um instantâneo do seu disco a qualquer momento.
    - Backups automáticos: Backups programados criados em intervalos regulares.
    - Criação e restauração de instância: Implantar uma nova instância diretamente a partir de um backup existente.
- **Locais de backup:**
    - Backup local: Armazenado na mesma região que a sua instância.
    - Backup remoto: Cria automaticamente uma cópia do backup local numa região à sua escolha.

> [!primary]
>
> **Boa prática**: Os backups não substituem uma [arquitetura resiliente](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture). Para ambientes críticos, combine os backups com a replicação multi-AZ para assegurar uma proteção máxima dos dados e uma disponibilidade otimizada do serviço.
>

## Redes públicas e privadas

As instâncias Public Cloud da OVHcloud podem ser ligadas a diferentes tipos de redes consoante as suas necessidades de aplicação.

| Tipos de rede        | Descrição                                                                                   | Casos de utilização                                                                            |
| -----------------------| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Rede pública          | As instâncias estão ligadas à Internet através de um endereço IP público.                         | Alojamento de sites web, APIs ou fornecer acesso remoto aos seus servidores.                  |
| Rede privada (vRack)   | Uma interligação privada entre os seus recursos OVHcloud, isolada da Internet.                   | Ligação de bases de dados, serviços backend ou comunicação interna entre instâncias. | 

O vRack permite-lhe criar uma rede segura e isolada, mesmo através de diferentes regiões ou projetos.

**Exemplo**: Aloje a sua base de dados numa rede privada enquanto expõe apenas o seu servidor web na rede pública.

Para mais detalhes sobre a configuração das redes Public Cloud, consulte o guia oficial [OVHcloud sobre redes](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

## Savings Plans

Os Savings Plans permitem-lhe reduzir os seus custos Public Cloud Compute em troca de um compromisso de utilização constante durante um período definido, variando entre 1 mês e 3 anos.

**Vantagens-chave:**

- **Custos reduzidos**: Mais económico do que a faturação *pay-as-you-go*.
- **Aplicação automática**: As economias aplicam-se automaticamente a todas as instâncias compatíveis.
- **Flexível**: Pode alterar os tipos ou tamanhos de instâncias mantendo os benefícios do seu plano.

**Casos de utilização ideais:**

- Cargas de trabalho estáveis e previsíveis, tais como aplicações de produção ou servidores empresariais.
- Serviços com necessidades constantes de recursos que beneficiam da otimização dos custos.

Os Savings Plans ajudam-no a otimizar o seu orçamento enquanto mantém o desempenho e a fiabilidade do seu ambiente cloud. Para mais informações, consulte o guia oficial [OVHcloud sobre Savings Plans](/pages/public_cloud/public_cloud_cross_functional/savings_plans).

## Quer saber mais?

Assim que dominar os conceitos fundamentais do Public Cloud Compute da OVHcloud, pode explorar operações e tarefas de gestão mais avançadas.

- [Como criar uma instância Public Cloud e aceder a ela](/pages/public_cloud/compute/public-cloud-first-steps)
- [Gerir as suas instâncias Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)
- [Iniciar uma instância num volume inicializável](/pages/public_cloud/compute/start_instance_on_attached_volume)
- [Colocar uma instância em standby ou suspender](/pages/public_cloud/compute/suspend_or_pause_an_instance)
- [Primeiros passos com aplicações pré-instaladas](/pages/public_cloud/compute/apps_first_steps)
- [Adicionar créditos cloud](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project)

Fale com a nossa [comunidade de utilizadores](/links/community).