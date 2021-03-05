---
title: NAS - Perguntas Frequentes
slug: faq-nas
excerpt: Tem dúvidas sobre o NAS (Network Attached Storage)? Veja as repostas às perguntas mais frequentes
section: NAS
---

**Ultima atualização: 28/12/2017**

## Especificidades do Serviço

### O que significa a expressão HA quando contrata um serviço NAS?
A sigla HA (High Availability) significa que a OVH se compromete em garantir um nível muito elevado de disponibilidade do serviço. Este compromisso é reforçado pelas garantias SLA (Server Level Agreements) que obrigam a OVH a compensar os clientes no caso de uma avaria que resulte na indisponibilidade do serviço.

### Em que datacenter posso contratar um NAS-HA?
A oferta NAS está disponível em França (datacenters de Roubaix, Estrasburgo, Gravelines) e no Canadá (datacenter de Beauharnois). A seleção do datacenter é efetuada durante o processo de contratação. ATENÇÃO: depois de registado o pedido, o datacenter já não pode ser alterado.

### É possível obter o NAS-HA através da área de gestão do serviço?
Sim, esta ferramenta está disponível na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, secção `Cloud`{.action}, subsecção `Plataformas e serviços`{.action}.

### É possível aumentar a capacidade total do meu NAS?
Depois de registado o pedido, já não é possível aumentar a capacidade de armazenamento. Para aumentar a capacidade de armazenamento, terá que migrar os seus dados para um NAS com maior espaço de armazenamento.

### Quais as opções em termos de espaço de armazenamento?

- 1,2 TB (1,1 TB de espaço útil);
- 2,4 TB (2,4 TB de espaço útil);
- 3,6 TB (3,2 TB de espaço útil);
- 7,2 TB (6,4 TB de espaço útil);
- 13,2 TB (10 TB de espaço útil);
- 19,2 TB (17 TB de espaço útil);
- 26,4 TB (24 TB de espaço útil).

A capacidade de armazenamento é constituída a partir de discos dedicados de 1,2 TB.

### Os recursos NAS-HA são dedicados?
Os discos do NAS-HA são dedicados. Os outros recursos (RAM, CPU, Banda Larga) são partilhados.

**Exceção:** se subscrever a oferta de 26,4 TB, todos os recursos do servidor de alojamento são dedicados.

### Quais são os períodos de subscrição do NAS-HA?
O serviço pode ser contratado por 1, 3, 6 e 12 meses. Se não houver qualquer cancelamento, o serviço é renovado no final do período da subscrição. O cancelamento pode ser efetuado a qualquer momento, através da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

### O armazenamento anunciado corresponde ao espaço útil disponível?
À semelhança da maior parte das soluções de alojamento, a capacidade potencial difere ligeiramente da capacidade útil. O sistema precisa sempre de reservar uma parcela de espaço para poder operar o disco.

- Disco de 1,2 TB - 1,1 TB de espaço útil;
- Disco de 2,4 TB - 2,4 TB de espaço útil;
- Disco de 3,6 TB - 3,2 TB de espaço útil;
- Disco de 7,2 TB - 6,4 TB de espaço útil;
- Disco de 13,2 TB - 10 TB de espaço útil;
- Disco de 19,2 TB - 17 TB de espaço útil;
- Disco de 26,4 TB - 24 TB de espaço útil.

Atenção: estes dados são uma estimativa aproximada, podendo sofrer algumas variações.

## Utilização do serviço

### Para que serve um NAS-HA?
Numa infraestrutura, um NAS-HA constitui um espaço de armazenamento que pode ser ligado a vários serviços: [servidores dedicados](https://www.ovh.pt/servidores_dedicados/), [soluções Private Cloud](https://www.ovh.pt/private-cloud/) ou [instâncias Public Cloud](https://www.ovh.pt/public-cloud/instances/).

As possibilidades de utilização são muitas, mas a alta disponibilidade dos NAS OVH é particularmente interessante para as seguintes utilizações:

- Armazenamento de dados acedidos com pouca frequência: dados que geram pouco tráfego, mas que necessitam de estar disponíveis em permanência (contratos, instruções de utilização);
- Armazenamento de dados «estáticos»: dados alterados com pouca frequência. Esta opção permite libertar espaço numa infraestrutura de alto desempenho, espaço esse que pode ser usado para armazenar dados alterados com frequência, ou que exigem capacidade de cálculo (bases de dados, aplicações de gestão, etc.)
- Solução Hot Backup: a alta disponibilidade do serviço NAS garante dados sempre disponíveis, podendo ser usada para garantir (ou redirecionar) o acesso a ficheiros indisponíveis ou corrompidos noutro local de armazenamento.

### Quando é que o NAS-HA é preferível ao Backup Storage?
O NAS-HA e o Backup Storage cobrem necessidades diferentes. O NAS é mais adequado para o armazenamento de dados estáticos que devem estar sempre disponíveis. Já o Backup Storage serve para guardar dados (backup) que são acedidos com pouca frequência.

Em termos técnicos, estas são as principais diferenças:

- No NAS-HA, os dados são alojados em discos dedicados. O Backup Storage disponibiliza um espaço de armazenamento partilhado.
- O NAS-HA é um espaço de armazenamento montado noutro servidor que usa os seguintes protocolos para a transferência de informação: NFS ou CIFS. O Backup Storage é um espaço autónomo, adicionável através de FTP.

### A solução NAS disponibiliza funções de sincronização (Type Synology)?
Não, o NAS-HA só pode ser montado num sistema de ficheiros associado a um sistema operativo. No entanto, o administrador do armazenamento pode realizar a atualização de um processo de sincronização.

### O NAS pode ser ligado a vários servidores ao mesmo tempo?
Sim. O NAS pode ser configurado para interagir em simultâneo com vários serviços OVH.

### Podemos instalar um sistema operativo num NAS?
Não, não é possível instalar um sistema operativo num NAS-HA.

### Quais são os protocolos compatíveis com a oferta NAS-HA?
O NAS-HA pode ser montado num servidor Windows ou Linux através dos protocolos CIFS (Samba) ou NFS.

### O NAS-HA é compatível com o protocolo FTP?
Não, a solução NAS-HA não é compatível com o protocolo FTP.

### O espaço de armazenamento pode ser compartimentado?
Sim, para tal basta criar as partições adequadas ao tipo de utilização. A criação de partições é ilimitada.

## Compatibilidade do produto

### O NAS-HA é compatível com servidores de outros operadores?
Não, só é possível aceder ao NAS-HA através da rede OVH.

### O NAS é compatível com que serviços?
O NAS está acessível a todos os produtos OVH com um sistema operativo: servidores dedicados (OVH, So you Start, Kimsufi), Dedicated Cloud, Public Cloud e VPS.

### Como gerir os acessos ao NAS-HA?
A lista dos controlos de acesso (Access Control List / ACL) pode ser configurada através da Área de Cliente Para tal, basta introduzir o endereço IP do serviço ao qual será dada a autorização de acesso ao NAS-HA.

### O NAS é compatível com a oferta vRack?
Neste momento, o NAS não pode ser integrado na rede privada vRack. No entanto, as soluções NAS e vRack não são incompatíveis, se optar pelo roteamento IP do servidor ligado ao VRack.

## Taxa de transferência

### A taxa de transferência e a disponibilidade são garantidas?

- Transferência: a banda larga do serviço é partilhada. Por isso, a OVH não podem garantir as taxas de transferência.
- Disponibilidade: a disponibilidade do serviço é garantida e está abrangida por garantias SLA (Service Level Agreement). A informação pode ser consultada nas condições particulares do serviço.

## Snapshots

### O que são Snapshots?
Snapshots são imagens instantâneas do disco e dos dados existentes num determinado momento. A configuração e a gestão das Snapshots são efetuadas a partir da Área de Cliente.

A função Snapshot é ativada automaticamente após a criação duma partição. A frequência das Snapshots está predefinida para ser executada de hora em hora.

### Qual é a frequência das Snapshots?

A frequência das Snapshots está predefinida para ser executada de hora em hora, mas pode ser redefinida a partir da Área de Cliente. A frequência das Snapshots pode ser definida de acordo com as seguintes opções: 

- de hora em hora;
- de 6 em 6 horas;
- diária;
- de 2 em 2 dias;
- de 3 em 3 dias;
- semanal. 


Também pode criar Snapshots manuais a qualquer momento. Esta funcionalidade pode ser acedida através da [Área de Cliente ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou através da[API](https://api.ovh.com/){.external}:

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

Quando efetua a Snaphot, todas as ações realizadas na partição serão guardadas nesta snapshot e irão aumentar a dimensão do ficheiro. Desta forma pode reverter a sua partição para um estado anterior (capturado por uma Snapshot). Com efeito, o espaço usado pelos ficheiros da Snapshot aumenta de acordo com o número de ações de eliminação e criação de dados.

### Quantas Snapshots podem ser realizadas? Existe algum limite?
- Uma por partição, para as Snapshots automáticas.
-  Dez por partição, para as Snapshots manuais.

### Como aceder às Snapshots?
Na partição em causa: pasta oculta chamada `.zfs` → pasta `snapshots`. Ficheiros disponíveis apenas em modo de leitura

### A OVH também realiza backups dos meus dados?
Sim, o nosso sistema efetua um backup diário interno, que gera mais uma snapshot. Este backup não pode ser desativado pelo cliente

## Quer saber mais?

Troque impressões com a nossa comunidade em <https://community.ovh.com>.