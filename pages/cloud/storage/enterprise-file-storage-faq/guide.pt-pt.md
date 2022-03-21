---
title: Enterprise File Storage - FAQ
excerpt: 'FAQ sobre a solução Entreprise File Storage'
slug: netapp-faq
section: Enterprise File Storage
order: 7
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 21/03/2022**

## Objetivo

Veja as perguntas mais frequentes sobre a oferta Enterprise File Storage da OVHcloud.

## Questões gerais

### O que é a solução Enterprise File Storage da OVHcloud?

Enterprise File Storage da OVHcloud é uma solução de armazenamento de ficheiros de alta performance e de alta disponibilidade. Baseia-se na solução de armazenamento software-defined ONTAP Select da NetApp&#174; e é inteiramente gerida pela OVHcloud.

### O que posso fazer com o Enterprise File Storage?

Enterprise File Storage permite responder a inúmeros casos práticos para modernizar a sua infraestrutura de armazenamento de dados da empresa, graças nomeadamente à integração do protocolo NFS.<br>
Permite, por exemplo, externalizar o armazenamento partilhado das suas máquinas virtuais ou servidores baseados em Linux para várias cargas de trabalho (aplicações críticas, bases de dados de empresas, CRM, ERP...) de forma a aumentar a resiliência global da sua infraestrutura e a qualidade de serviço (QoS).<br>
Enterprise File Storage permite responder aos casos de uso simples de servidores de ficheiros partilhados para os quais o serviço deve oferecer um desempenho elevado, uma alta disponibilidade e uma largura de banda garantida e incluída.

Esta solução permite igualmente responder a casos práticos mais complexos, quer seja os casos de sobrecarga de trabalho on-premise ou de migração para a cloud. Mas também os exemplos de backups de dados na cloud no âmbito de planos de resiliência, como uma boa prática do mercado para a gestão e a perenidade dos dados, mas também para otimizar os custos operacionais (dados quentes on-premise e dados fracos/frios na cloud).

### Posso gerir o Enterprise File Storage a partir da Área de Cliente?

Sim, este serviço está diretamente acessível a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), na secção `Bare Metal Cloud`{.action} e depois `Armazenamento e Backup`{.action}.

## Disponibilidade

### Qual o nível de fiabilidade e de redundância que posso atingir com o Enterprise File Storage?

Enterprise File Storage é um serviço de armazenamento altamente disponível, redundado pela sua conceção. A sua arquitetura ativa/ativa torna segura esta redundância ao alimentar dois servidores de ficheiros diferentes em dois racks num mesmo datacenter. Em caso de falha do primeiro, o serviço replica automaticamente os seus dados nos dois servidores. A migração ocorre geralmente em caso de falha do servidor ativo ou durante uma manutenção planificada.

### Qual é o SLA fornecido com o Enterprise File Storage?

O Enterprise File Storage é fornecido com uma taxa de disponibilidade de 99,99%.

## Rede e segurança

### Que protocolos de transferência de ficheiros são atualmente suportados pela solução Enterprise File Storage?

Enterprise File Storage suporta a transferência de ficheiros através de NFS (NFSv3).

### A partir de que serviços OVHcloud posso cultivar dados?

Enterprise File Storage é um serviço que pode receber dados de todos os serviços existentes da OVHcloud: Bare-Metal, Public Cloud, Hosted Private Cloud (Dedicated server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/ADSL).

### O serviço pode ser ligado a um Microsoft Ative Diretory (AD)?

Não.

### Quais são as certificações associadas ao Enterprise File Storage?

A nossa solução Enterprise File Storage cumpre várias normas de ponta do sector, entre as quais ISO27001, o RGPD e as políticas de vários países em matéria de dados de saúde.

### É possível aceder ao Enterprise File Storage a partir de uma rede privada do tipo vRack?

Não de momento, mas esta funcionalidade estará brevemente disponível (vRack endpoint).

## Acesso on-*premises*

### É possível aceder ao Enterprise File Storage a partir do exterior da rede OVHcloud?

Por definição, o Enterprise File Storage só está disponível na rede da OVHcloud.<br>
No entanto, é possível criar uma arquitetura que permita uma ligação com uma infraestrutura exterior a esta rede.<br>
Junte o nosso serviço comercial ou suporte técnico para conceber uma infraestrutura adaptada ao seu ecossistema e à sua solução. 

## Capacidade e Desempenho

### Quais as opções em termos de espaço de armazenamento?

O tamanho mínimo de um serviço é de 1TiB e o tamanho máximo é de 58TiB. A granularidade é de 1TiB.

### Quantos serviços Enterprise File Storage posso criar a partir da minha conta de cliente?

Não há limite de número de serviços por conta de cliente.

### Qual é o número máximo de volumes por serviço?

É possível criar até 10 volumes máximos por serviço. O tamanho mínimo é de 100 GiB e o tamanho máximo é de 29 TiB.

### Qual o nível de desempenho disponível com o Enterprise File Storage?

A empresa File Storage é fornecida com um débito garantido de 64MB/s por TiB e de 4000 IOPS por TiB.

Por exemplo, aquando da entrega de uma pool de 10 TiB, poderá usufruir de uma largura de banda de 640MB/s e de 40000 IOPS.

## Snapshots e backups

### Como podemos restaurar os ficheiros de uma versão anterior?

As snapshots estão disponíveis num diretório especial (.snapshots).

### Qual é a política de backup associada ao Enterprise File Storage?

Os utilizadores são responsáveis pela gestão dos seus backups (ferramentas e regras). No entanto, por razões de segurança e de resiliência da infraestrutura, a OVHcloud opera um backup diário do serviço num servidor distante. Em caso de avaria ou de ataque, a OVHcloud pode restaurar os dados do dia anterior. Esta ação efetua-se a pedido e é um serviço opcional faturado.

### As snapshots estão incluídas na capacidade de uma serviço?

Um mínimo de 5% do espaço de armazenamento é atribuído às snapshots. Por exemplo, num serviço de 5TiB, 250GiB são reservados para as snapshots.

### Qual é o número máximo de snapshots por serviço?

200

### Qual é o número máximo de snapshots por volume?

200

### Quantas políticas de snapshot posso criar por volume?

1

### Quantas regras posso criar por política de snapshot?

4

### Onde estão armazenadas as snapshots?

As suas snapshots são armazenadas ao mesmo nível que o seu serviço. As snapshots são replicadas em dois servidores diferentes, em dois racks diferentes. Paralelamente, a OVHcloud efetua uma snapshot diária num site remoto.

### Como seguir a utilização dos pools e dos volumes?

Não existem ainda métricas integradas para monitorizar a utilização dos pools e dos volumes. 

## Preços

### Que tipo de preços está associado ao serviço?

Enterprise File Storage é um serviço faturado mensalmente ao volume (de 1 a 58 TiB por etapas de 1 TiB). Também é possível, opcionalmente, comprometer-se com uma duração de utilização do serviço (12, 24 ou 36 meses).

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
