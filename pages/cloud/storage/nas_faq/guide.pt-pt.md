---
title: NAS - Perguntas Frequentes
slug: faq-nas
excerpt: Tem dúvidas sobre o NAS (Network Attached Storage)? Veja as repostas às perguntas mais frequentes
section: NAS
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 25/08/2022**

## Objetivo

**Veja as perguntas mais frequentes sobre a oferta NAS-HA da OVHcloud.**

## Questões gerais

### O que é a solução NAS-HA OVHcloud?

NAS-HA é um serviço de armazenamento de ficheiros partilhado e inteiramente gerido, baseado na tecnologia open-source OpenZFS.

### O que posso fazer com o NAS-HA?

NAS-HA permite centralizar os dados de diferentes cargas de trabalho Linux, mas também Windows para vários cenários:

- armazenamento partilhado e externalizado para aplicações IT (VM, DB..)
- gestão de conteúdos web
- partilha de ficheiros na rede, etc.

### É possível obter o NAS-HA através da área de gestão do serviço?

Sim, este espaço pode ser acedido a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), secção `Bare Metal Cloud`{.action} e depois `NAS e CDN`{.action}.

## Disponibilidade

### Qual é o SLA fornecido com o NAS-HA?

NAS-HA é fornecido com uma taxa de disponibilidade de 99,99%.

## Rede e segurança

### Que protocolos de transferência de ficheiros são atualmente suportados na solução NAS-HA?

NAS-HA suporta a transferência de ficheiros através de NFS (NFSv3) e CIFS (SMB).

### A partir de que serviços OVHcloud posso cultivar dados?

NAS-HA é um serviço que pode receber dados de todos os serviços existentes da OVHcloud: Bare Metal Cloud (VPS, Servidores Dedicados OVHcloud, So you Start, Kimsufi), Public Cloud, Hosted Private Cloud, etc.

### Como gerir os acessos ao NAS-HA?

A lista dos controlos de acesso (ACL) pode ser configurada a partir da Área de Cliente OVHcloud. Basta introduzir o endereço IP do serviço para o qual deseja autorizar o acesso ao NAS-HA.

### O serviço NAS-HA é compatível com outros servidores fora da OVHcloud?

Não, o NAS-HA só pode ser acedido através da rede OVHcloud.

### O NAS-HA é elegível para a oferta vRack?

Neste momento, o NAS não pode ser integrado na rede privada vRack. No entanto, a utilização do NAS-HA e do vRack não são incompatíveis, passando pelo caminho IP público do servidor ligado ao vRack.

## Capacidade e desempenho

### Quais as opções em termos de espaço de armazenamento?

O tamanho mínimo de um serviço é de 3 TB e o tamanho máximo é de 144 TB.<br>
Oferecemos as seguintes capacidades de armazenamento com base em discos de 3 TB:

- 3 TB
- 6 TB
- 9 TB
- 18 TB
- 36 TB

Oferecemos as seguintes capacidades de armazenamento com base em discos de 12 TB:

- 12 TB
- 24 TB
- 36 TB
- 72 TB
- 144 TB

As capacidades de armazenamento propostas são as capacidades utilizáveis.

### Os recursos NAS-HA são dedicados?

Os discos do NAS-HA são dedicados. Os outros recursos (RAM, CPU, Banda Larga) são partilhados.

**Caso específico:** se subscrever a oferta 144 TB, o conjunto dos recursos do servidor host são-lhe dedicados (RAM, CPU, Largura de banda).

### Quantos serviços NAS-HA posso criar a partir da minha conta de cliente?

Não há limite de número de serviços por conta de cliente.

### Qual é o número máximo de partições por serviço?

É possível criar tantas partições quantas desejar. O tamanho mínimo é de 10 GB e o tamanho máximo é definido pelo tamanho máximo do serviço.

### A taxa de transferência e a disponibilidade são garantidas?

- Transferência: a banda larga do serviço é partilhada. As taxas de transferência não podem ser garantidas pela OVHcloud.
- Disponibilidade: a disponibilidade do serviço é garantida e está abrangida por garantias SLA (Service Level Agreement). Os detalhes podem ser consultados nas nossas condições específicas de utilização.

## Utilização do serviço

### O NAS pode ser ligado a vários servidores ao mesmo tempo?

Sim. É possível fazer interagir simultaneamente o seu NAS com vários serviços da OVHcloud.

### Podemos instalar um sistema operativo num NAS?

Não, não é possível instalar um sistema operativo num NAS-HA.

### O espaço atribuído é particionável?

Sim, para tal basta criar as partições adequadas ao tipo de utilização. A criação de partições é ilimitada.

## Snapshots

### O que são Snapshots?

Snapshots são imagens instantâneas do disco e dos dados existentes num determinado momento. Eles permitem propor um primeiro nível de backup. A configuração e a gestão das snapshots podem ser realizadas a partir da Área de Cliente OVHcloud.

Por predefinição, a função snapshot é ativada aquando da criação da sua partição, a frequência é pré-regulada para "todas as horas".

### Qual é a política de backup associada ao NAS-HA?

Os utilizadores são responsáveis pela gestão dos seus backups (ferramentas e regras) dentro e fora do serviço, bem como pelos seus planos de continuidade de atividade e de retoma de atividade. No entanto, por razões de segurança e resiliência da infraestrutura, a OVHcloud pode efetuar snapshots do serviço num servidor distante, sem qualquer obrigação.

Em caso de avaria ou de ataque, se a OVHcloud tiver efetuado uma snapshot num servidor remoto, poderemos restaurar os dados da última snapshot disponível. No entanto, note que esta ação é realizada a pedido e constitui um serviço opcional faturado.

### Qual é a frequência das snapshots? <a name="frequency"></a>

A frequência das snapshots pode ser administrada a partir da Área de Cliente OVHcloud. A frequência das Snapshots pode ser definida de acordo com as seguintes opções:

- todas as horas (predefinido);
- de 6 em 6 horas;
- diária;
- de 2 em 2 dias;
- de 3 em 3 dias;
- semanal.

Também pode criar Snapshots manuais a qualquer momento. Esta funcionalidade está disponível no seio do seu [Espaço Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou através da [API](https://api.ovh.com/) seguinte:

> [!api]
>
> @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

> [!primary]
> Consulte o nosso guia "[Primeiros passos com as API OVHcloud](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/)" para se familiarizar com a utilização das API OVHcloud.
>

### Como funciona a gestão das Snapshots?

Pode configurar snapshots automáticas, de acordo com as opções disponíveis. Atenção: a Snapshot mais recente irá substituir a Snapshot anterior. Também pode criar e eliminar Snapshots personalizadas.

### Posso eliminar uma Snapshot?

Apenas as snapshots criadas "a pedido" podem ser eliminadas (ver a pergunta anterior "[Qual a frequência das snapshots?](#frequency)").<br>
As Snapshots com frequência automática são eliminadas automaticamente; não podem ser eliminadas manualmente.

### As snapshots estão incluídas na capacidade de um serviço?

Um espaço adicional no mesmo suporte físico é-lhe atribuído para assegurar o armazenamento das suas snapshots. Este espaço corresponde a pelo menos 15 % do volume principal. Caso o ultrapasse, as snapshots serão armazenadas no seu espaço de armazenamento principal. O espaço adicional não pode ser utilizado para outra utilização que não o armazenamento das suas snapshots.

Por exemplo, para um serviço de 3 TB, são reservados 450 GB adicionais para as snapshots.

### Quantas Snapshots podem ser realizadas? Existe algum limite?

- Uma por partição, para as Snapshots automáticas.
- Para as snapshots manuais: dez por partição

### Onde estão armazenadas as snapshots?

As snapshots são armazenadas ao mesmo nível que o seu serviço. As snapshots são replicadas em dois servidores diferentes em dois racks diferentes. Além disso, a OVHcloud efetua uma snapshot diária num site remoto.

### Como aceder às Snapshots?

Na partição em causa, poderá encontrar um diretório oculto chamado `.zfs` que contém um diretório `snapshots`. Os ficheiros estão disponíveis apenas em modo de leitura.

### Quantas políticas de snapshots posso criar por volume?

1

## Preços

### Que tipo de preços está associado ao serviço?

NAS-HA é um serviço faturado mensalmente ao volume (de 3 a 144 TB por patamares).

### Quais são os períodos de subscrição do NAS-HA?

O serviço pode ser contratado por 1, 12, 24 e 36 meses. No final do período de compromisso, a sua subscrição será renovada tacitamente se não tiver sido formulado qualquer [pedido de cancelamento](https://docs.ovh.com/pt/billing/how-to-cancel-your-services/). Esta pode ser efetuada durante toda a duração da subscrição através da Área de Cliente OVHcloud.

## Quer saber mais?

Troque impressões com a nossa comunidade em <https://community.ovh.com/en/>.
