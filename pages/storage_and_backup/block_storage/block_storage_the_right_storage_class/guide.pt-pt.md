---
title: Escolher a classe correta de Block Storage
excerpt: Descubra como escolher a classe correta de Block Storage OVHcloud. Compare desempenho, custos e casos de utilização para otimizar o seu armazenamento em termos de preço e eficiência.
updated: 2025-12-15
---

## Objetivo

Este guia ajuda-o a compreender as diferentes classes de Block Storage OVHcloud e a escolher a que melhor corresponde às suas necessidades. Descubra os níveis de desempenho, as considerações de custo e os casos de utilização recomendados para tomar decisões informadas sobre o armazenamento.

## Visão geral do Block Storage

O Block Storage é uma solução de armazenamento performante, flexível e fiável, concebida para cargas de trabalho críticas. Pode ligar volumes diretamente às suas instâncias, aumentar a capacidade de 10 Go a 12 To e escolher a classe adequada: Regional Classic, Classic ou High Speed, consoante as suas necessidades em termos de desempenho e disponibilidade.

Esta solução é ideal para bases de dados, máquinas virtuais e aplicações contêinerizadas, com funcionalidades como snapshots, cópias de segurança e encriptação.

## Classes de Block Storage

As nossas classes de Block Storage são concebidas para responder aos diferentes requisitos das suas cargas de trabalho em termos de desempenho, disponibilidade e resiliência. Escolha a classe adequada para otimizar a velocidade, a redundância e o custo.

### Regional Classic Volume

A classe **Regional Classic Volume** oferece uma elevada disponibilidade ao replicar automaticamente os dados em três zonas de disponibilidade dentro de uma região (3-AZ). Os volumes são suportados por armazenamento NVMe over Fabric para acesso rápido, consistente e fiável.

Para garantir a continuidade do serviço mesmo em caso de falha de uma zona de disponibilidade, esta classe também suporta [Multi-Attach](/pages/public_cloud/compute/classic_block_multi_az_limitations). Isto permite que várias instâncias localizadas em diferentes zonas de disponibilidade se liguem simultaneamente e utilizem o mesmo volume.

Esta classe é adequada para cargas de trabalho que exigem elevada disponibilidade e forte resiliência, como bases de dados críticas e aplicações distribuídas.

### Classic Volume

A classe **Classic Volume** é ideal para necessidades de aplicações quotidianas, tais como bases de dados, máquinas virtuais e cópias de segurança. Os dados são replicados dentro de uma única zona de disponibilidade (1-AZ) ou de uma Local Zone, com desempenho NVMe garantido.

Esta classe é adequada para cargas de trabalho padrão onde a baixa latência e a fiabilidade são importantes, mas onde a replicação multi-zona não é necessária.

### High Speed Volume

A classe **High Speed Volume** é proposta em duas gerações, oferecendo perfis de desempenho diferentes:

- Gen 1: Até 3 000 IOPS e 128 Mo/s – adequada para cargas de trabalho padrão que exigem velocidade elevada.
- Gen 2: 30 IOPS/Go (até 20 000 IOPS) e 0,5 Mo/s por Go (até 512 Mo/s) – recomendada para aplicações intensivas que exigem um máximo de I/O e de débito.

Escolha Gen 1 para cargas de trabalho de alta velocidade clássicas, e Gen 2 para cargas de trabalho pesadas tais como análise, grandes bases de dados ou cálculo de alta performance.

### Tabela comparativa

| Classe de armazenamento | Caso de utilização | Desempenho | Regiões disponíveis | SLA de disponibilidade | Replicação | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| **High Speed Volume** | Cargas de trabalho de alto desempenho, análise, grandes bases de dados | **Gen 1**: até 3 000 IOPS, 128 Mo/s <br><br> **Gen 2**: 30 IOPS/Go (até 20 000 IOPS), 0,5 Mo/s por Go (até 512 Mo/s) | 3-AZ, 1-AZ, Local Zones | 99,9 % | Zonal | NVMe otimizado, desempenho escalável |
| **Regional Classic Volume** | Aplicações críticas, sistemas distribuídos | 500 IOPS garantidos, 64 Mo/s | 3-AZ | 99,99 % | Multi-zona | NVMe over Fabric, alta disponibilidade |
| **Classic Volume** | Cargas de trabalho quotidianas, máquinas virtuais, cópias de segurança | 500 IOPS garantidos, 64 Mo/s | 1-AZ, Local Zones | 99,9 % | Zonal | NVMe over Fabric, desempenho padrão |

### Detalhes adicionais

#### Duração mínima de armazenamento

Para o Block Storage, não existe uma duração mínima de armazenamento: pode ligar ou eliminar volumes a qualquer momento sem custos adicionais. É faturado apenas pela utilização efetiva do volume durante o período em que existe.

#### Custos de snapshots e cópias de segurança

Embora a utilização padrão dos volumes seja faturada por Go/mês, os [snapshots](/pages/public_cloud/compute/creating_a_volume_snapshot) armazenados em **Block Storage** e as [cópias de segurança](/pages/public_cloud/compute/volume-backup) armazenadas em **Object Storage** podem gerar custos adicionais. Os snapshots permitem capturar o estado de um volume num determinado momento, e as cópias de segurança asseguram a proteção e a recuperação dos dados.

#### Gestão do ciclo de vida e redimensionamento

Os volumes Block Storage são totalmente flexíveis: pode [aumentar o seu tamanho](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk) a qualquer momento, estender as partições e ligar os volumes a diferentes instâncias. Estas operações são geridas ao nível do volume, permitindo-lhe otimizar a capacidade e o desempenho sem interrupções.

#### Volumes encriptados

Cada tipo de volume Block Storage também está disponível em versão encriptada (LUKS), consoante a região. Estas variantes encriptadas garantem a confidencialidade dos dados sem impacto no desempenho.

> [!primary]
> Note que a classe Regional Classic Volume e os volumes nas Local Zones não suportam a encriptação LUKS.

Os volumes encriptados podem ser criados diretamente a partir da área de cliente OVHcloud ou através das ferramentas CLI/API, especificando o tipo de volume com o sufixo `-luks` (por exemplo: classic-luks ou highspeed-luks). Isto permite proteger facilmente os dados sensíveis, mantendo as mesmas performances e funcionalidades dos volumes padrão.

> [!primary]
> Os volumes encriptados não têm qualquer impacto no desempenho.

## Casos de utilização

O Block Storage suporta uma grande variedade de cargas de trabalho graças às suas performances, flexibilidade e resiliência. Os casos de utilização comuns incluem:

- **Bases de dados**: MySQL, PostgreSQL e outras bases relacionais beneficiam de um acesso rápido com baixa latência e elevado débito.
- **Máquinas virtuais e aplicações contêinerizadas**: Armazenamento persistente para VM e contêineres com elevada fiabilidade e acesso rápido.
- **Análise e cargas de trabalho de IA**: Os volumes High Speed oferecem um máximo de IOPS e de débito para aplicações intensivas em dados.
- **Cópias de segurança e recuperação após desastre**: Crie facilmente snapshots e cópias de segurança para os seus dados críticos, para garantir uma recuperação rápida e segura.

## Considerações relativas às zonas e regiões

Os volumes Block Storage podem ser implantados com diferentes opções de disponibilidade consoante as suas necessidades:

- **Regional Classic Volume (3-AZ)**: Os dados são replicados em três zonas de disponibilidade dentro da mesma região, oferecendo uma elevada resiliência e um SLA de 99,99 %. Ideal para aplicações críticas que exigem alta disponibilidade. Para mais informações, consulte o nosso guia "[Uso adequado e limitações do Classic Multi Attach Block Storage em regiões 3AZ (EN)](/pages/public_cloud/compute/classic_block_multi_az_limitations)".
- **Classic & High Speed Volume (1-AZ ou Local Zone)**: Os dados são replicados numa única zona. Estas opções oferecem acesso com baixa latência e elevado desempenho, e são adequadas para cargas de trabalho que não necessitam de redundância multi-zona.
- **Local Zones**: Para aplicações que exigem uma latência ultra-baixa numa localização geográfica específica, as Local Zones permitem manter o armazenamento próximo dos recursos de cálculo.

> [!success]
> Escolher a opção correta de implantação garante desempenho otimizado, redundância eficaz e controlo dos custos, consoante a sua carga de trabalho e restrições geográficas.

## Quer saber mais?

[Criar e configurar um disco suplementar numa instância](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Modificar um Volume Block Storage](/pages/public_cloud/compute/switch_volume_type)

Se precisar de formação ou de assistência técnica para a implementação das nossas soluções, contacte o seu representante comercial ou clique [neste link](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto pela nossa equipa de Professional Services.

Fale com a nossa [comunidade de utilizadores](/links/community).