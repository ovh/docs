---
title: VMware DRS (Distributed Ressource Scheduler)
slug: vmware-drs-distributed-ressource-scheduler-new
routes:
    canonical: 'https://docs.ovh.com/pt/private-cloud/vmware-drs-distributed-ressource-scheduler-new/'
excerpt: Controlar a repartição de carga com a função DRS
section: Funcionalidades VMware vSphere
order: 03
updated: 2020-11-18
---

**Última atualização: 18/11/2020**

## Objetivo

A função **DRS** (Distributed Ressource Scheduler), disponível nos clusters **VMware**, permite equilibrar a carga dos hosts através da deslocação automática das máquinas virtuais (vMotion). As MV são repartidas pelos diferentes hosts do cluster em função da sua utilização e dos seus recursos.

**Este guia explica a configuração desta função.**

## Requisitos

- Ter um produto [Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/){.external}.
- Estar ligado à [interface vSphere](../instalar_o_vsphere_client/).

## Instruções

Como o seu objetivo é repartir melhor os recursos, o **DRS** vai proceder (ou aconselhá-lo a proceder) à deslocação das MV para um host ou para uma pool mais apropriados do cluster.

![Princípio do DRS](images/drs0.png){.thumbnail}

### Ativação

A função DRS encontra-se ativada de forma predefinida no cluster de base que a OVHcloud fornece aquando da entrega de uma Managed Bare Metal.

Na eventualidade de criação de um novo cluster, pode ativar a função DRS durante ou após essa criação.

Se a função DRS não estiver ativada no seu cluster, selecione este último e aceda ao separador `Configurar`{.action}.

Clique no menu `Serviços`{.action} e no submenu `vSphere DRS`{.action}.

Clique em `Editar`{.action} e ative o cursor `vSphere DRS`.

![Ativação do DRS](images/drs01.png){.thumbnail}

### Parâmetros 

Na mesma janela de edição dos parâmetros, encontrará quatro categorias de opções.

#### Automatização

Há três níveis distintos de automatização:

- No modo «Manual», o DRS não deslocará as MV, pelo que terá de gerir a deslocação e a repartição das suas MV de forma autónoma.

- No modo «Parcialmente automatizado», o DRS vai aconselhá-lo acerca das migrações das MV, mas só as realizará com a sua autorização.

- No modo «Inteiramente automatizado», o DRS deslocará as MV de forma automática, sem validação da sua parte, em função da carga presente nos hosts.

Também é possível definir um patamar de migração mais ou menos agressivo nos modos automatizados.

A opção «Predictive DRS», disponível a partir da versão 6.5 do VMware, permite realizar migrações em função das medidas prospetivas recebidas pelo vROps.
Este último é, por isso, indispensável ao funcionamento desta opção do DRS.

Por fim, a opção «Automatização de máquina virtual» permite configurar parâmetros DRS específicos de certas MV no submenu `Substituições de MV`, no separador `Configurar`. (Algumas MV poderão ter um modo de migração parcialmente automático enquanto o cluster se mantém em modo inteiramente automatizado.)

![Automatização DRS](images/drs02.png){.thumbnail}


#### Opções adicionais

Pode configurar três opções adicionais nos parâmetros DRS:

- Distribuição das MV: Para uma maior disponibilidade, distribua pelos hosts um número ainda mais homogéneo de MV. 

- Medidas de memória para o equilíbrio da carga: Equilíbrio de carga baseado mais na memória consumida pelas MV do que na memória ativa.
Este parâmetro só é recomendável para clusters nos quais a memória do host não se encontra em sobrecarga. 

- Sobrecarga da CPU: Limite a sobrecarga da CPU relativamente a todos os hosts do cluster. Este parâmetro vai criar uma CPU virtual num limite de rácio principal de CPU física (vCPU:pCPU), implementado em cada host ESXi. 

![Opções adicionais DRS](images/drs03.png){.thumbnail}

#### Gestão da alimentação

**Esta opção deve permanecer sempre desativada.**

A sua principal utilidade é desativar hosts que o DRS considere desnecessários ao funcionamento da infraestrutura, enquanto satisfaz o nível de fail-over exigido pelo HA.
O monitoramento da OVHcloud vai detectar essa extinção como anormal e dará origem a uma intervenção no datacenter.

#### Opções avançadas

O seu cluster DRS pode ser sujeito a vários parâmetros de configuração avançada.

Veja aqui alguns exemplos:

|Nome da opção avançada|Descrição|Valor predefinido|Valor mais agressivo|
|:---|:---|:---|:---|
|UseDownTime|Se, na análise dos custos, for preciso ter em conta o impacto, sobre a carga de trabalho, de eventuais interrupções de memória durante a migração.|1|0 (não tem em conta o impacto)|
|IgnoreDownTimeLessThan|Limite (em segundos) para ignorar, na análise dos custos, os tempos de interrupção de migração cumulativos. (Pode ser aumentado se a carga de trabalho das MV não for sensível às interrupções de memória durante a migração.)|1|Um número elevado (não tem em conta os tempos de interrupção)|
|MinImbalance|Utilizado para calcular o desequilíbrio-alvo.|50|0|
|MinGoodness|Melhoramento mínimo do desequilíbrio do cluster requerido para cada deslocação.|Adaptive|0 (são consideradas todas as deslocações)|
|MaxMovesPerHost|Número máximo de movimentos por host recomendado por invocação.|Adaptive|0 (sem limites)|

![Opções avançadas DRS](images/drs05.png){.thumbnail}

### Regras DRS

Encontrará no separador `Configurar` a gestão das regras relativas a MV/hosts.

![Regras DRS](images/drs06.png){.thumbnail}

- Manter as máquinas virtuais juntas: As MV ficam situadas no mesmo host.
- Separar as máquinas virtuais: As MV são distribuídas por hosts diferentes no seio de um mesmo cluster.
- Máquinas virtuais a hosts: As MV que pertençam ao grupo especificado devem ser executadas no grupo de hosts designado. É necessário criar grupos de MV e de hosts no separador `Grupos de MV/Hosts`.

A quarta regra, «Máquinas virtuais a máquinas virtuais», encontra-se explicada no guia sobre a [função HA](../vmware-ha-high-availability/).

![Criação de regras DRS](images/drs07.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
