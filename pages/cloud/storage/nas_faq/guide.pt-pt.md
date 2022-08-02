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

**Ultima atualização: 09/09/2021**

## Especificidades do Serviço

### É possível obter o NAS-HA através da área de gestão do serviço?

Sim, esta ferramenta está disponível na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, secção `Bare Metal Cloud`{.action} e depois `NAS e CDN`{.action}.

### É possível aumentar a capacidade total do meu NAS?

Depois de registado o pedido, já não é possível aumentar a capacidade de armazenamento. Para aumentar a capacidade de armazenamento, terá que migrar os seus dados para um NAS com maior espaço de armazenamento.

### Quais as opções em termos de espaço de armazenamento?

- 3 To
- 6 To
- 9 To
- 18 To
- 36 To

As capacidades de armazenamento propostas são as capacidades utilizáveis.

### Os recursos NAS-HA são dedicados?

Os discos do NAS-HA são dedicados. Os outros recursos (RAM, CPU, Banda Larga) são partilhados.

**Caso específico:** se subscrever à oferta 36 To, o conjunto dos recursos do servidor host são-lhe dedicados (RAM, CPU, Largura de banda).

### Quais são os períodos de subscrição do NAS-HA?

O serviço pode ser contratado por 1, 3, 6 e 12 meses. Se não houver qualquer cancelamento, o serviço é renovado no final do período da subscrição. O cancelamento pode ser efetuado a qualquer momento, através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Utilização do serviço

### O NAS pode ser ligado a vários servidores ao mesmo tempo?

Sim. O NAS pode ser configurado para interagir em simultâneo com vários serviços OVHcloud.

### Podemos instalar um sistema operativo num NAS?

Não, não é possível instalar um sistema operativo num NAS-HA.

### Quais são os protocolos compatíveis com a oferta NAS-HA?

O NAS-HA pode ser montado num servidor Windows ou Linux através dos protocolos CIFS (Samba) ou NFS.

### O espaço de armazenamento pode ser compartimentado?

Sim, para tal basta criar as partições adequadas ao tipo de utilização. A criação de partições é ilimitada.

## Compatibilidade do produto

### O NAS-HA é compatível com servidores de outros operadores?

Não, só é possível aceder ao NAS-HA através da rede OVHcloud.

### O NAS é compatível com que serviços?

O NAS está acessível a todos os produtos OVHcloud com um sistema operativo: servidores dedicados (OVHcloud, So you Start, Kimsufi), Hosted Private Cloud, Public Cloud e VPS.

### Como gerir os acessos ao NAS-HA?

A lista dos controlos de acesso (Access Control List / ACL) pode ser configurada através da Área de Cliente Para tal, basta introduzir o endereço IP do serviço ao qual será dada a autorização de acesso ao NAS-HA.

### O NAS é compatível com a oferta vRack?

Neste momento, o NAS não pode ser integrado na rede privada vRack. No entanto, as soluções NAS e vRack não são incompatíveis, se optar pelo roteamento IP do servidor ligado ao VRack.

## Taxa de transferência

### A taxa de transferência e a disponibilidade são garantidas?

- Transferência: a banda larga do serviço é partilhada. Por isso, a OVHcloud não podem garantir as taxas de transferência.
- Disponibilidade: a disponibilidade do serviço é garantida e está abrangida por garantias SLA (Service Level Agreement). A informação pode ser consultada nas condições particulares do serviço.

## Snapshots

### O que são Snapshots?

Snapshots são imagens instantâneas do disco e dos dados existentes num determinado momento. A configuração e a gestão das Snapshots são efetuadas a partir da Área de Cliente.

A função Snapshot é ativada automaticamente após a criação duma partição. A frequência das Snapshots está predefinida para ser executada de hora em hora.

### Qual é a frequência das Snapshots?

A frequência das Snapshots está predefinida para ser executada de hora em hora, mas pode ser redefinida a partir da Área de Cliente. A frequência das Snapshots pode ser definida de acordo com as seguintes opções:

- de hora em hora (predefinido);
- de 6 em 6 horas;
- diária;
- de 2 em 2 dias;
- de 3 em 3 dias;
- semanal.

Também pode criar Snapshots manuais a qualquer momento. Esta funcionalidade pode ser acedida através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou através da[API](https://api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

### Como funciona a gestão das Snapshots?

Pode configurar snapshots automáticas, de acordo com as opções disponíveis. Atenção: a Snapshot mais recente irá substituir a Snapshot anterior. Também pode criar e eliminar Snapshots personalizadas.

### Posso eliminar uma Snapshot?

As Snapshots criadas manualmente podem ser eliminadas manualmente (ver questão precedente, «Qual a frequência das Snapshots?»). As Snapshots com frequência automática são eliminadas automaticamente; não podem ser eliminadas manualmente.

### Quanto espaço ocupam as Snapshots na NAS?

O espaço usado por uma Snapshot varia em função das ações efetuadas durante o período de tempo compreendido ente cada Snapshot.

Quando efetua a Snaphot, todas as ações realizadas na partição serão guardadas nesta snapshot e irão aumentar a dimensão do ficheiro.

### Quantas Snapshots podem ser realizadas? Existe algum limite?

- Uma por partição, para as Snapshots automáticas.
- Dez por partição, para as Snapshots manuais.

### Como aceder às Snapshots?

Na partição em causa: pasta oculta chamada `.zfs` → pasta `snapshots`. Ficheiros disponíveis apenas em modo de leitura

### A OVHcloud também realiza backups dos meus dados?

Sim, o nosso sistema efetua um backup diário interno, que gera mais uma snapshot. Este backup não pode ser desativado pelo cliente

## Quer saber mais?

Troque impressões com a nossa comunidade em <https://community.ovh.com/en/>.
