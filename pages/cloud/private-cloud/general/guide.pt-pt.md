---
title: Generalidades
excerpt: ''
slug: generalidades
legacy_guide_number: g597
---


## 
A grande particularidade deste produto em relação aos outros, é que se instala diretamente na "camada hardware" (falamos de um hyperviser Bare Metal). Não é necessário instalar um Sistema Operativo "host" para instalar o VMware ESXi.
O VMWare ESXi é um hyperviser que permite uma gestão precisa dos recursos de cada máquina virtual e das suas performances.
Uma máquina virtual é um conjunto de vários ficheiros.
Esse sistema de ficheiros possui várias características, nomeadamente a possibilidade de gerir várias ligações ao mesmo tempo.
O ESXi possui igualmente de mecanismos precisos para a gestão da partilha de memória, a recuperação da memória inutilizada e também a duplicação e descompressão da memória.


## 
Esta ferramenta permite migrar uma máquina de um servidor Esxi para outro a "quente", ou seja, sem interrupção de serviço. Esta operação é possível porque os servidores hosts utilizam micro-processadores compatíveis (os hosts propostos pela OVH são compatíveis) e o espaço de armazenamento dos ficheiros das máquinas virtuais são partilhados numa SAN ou NAS.


## 
Esta ferramenta permite a repartição da carga entre vários servidores ESXi.
Estão disponíveis igualmente vários modos de funcionamento. Por exemplo, é possível deixar o DSR gerir automaticamente alocação dos recursos dos servidores ESXi no seio de um cluster. Pode ser igualmente criado regras de afinidade de forma a agrupar ou separar as VMs num ou em vários ESXi. (Ex: Um AD primário e secundário).


## 
Esta opção do vCenter cria um cluster de servidores ESXi em combinação.
A tecnologia « vLockStep », na qual recai o cluster FT, permite à VM do servidor secundário ser executada com a VM do servidor principal em paralelo. Apenas o servidor principal executa a escrita no disco e na rede: o servidor secundário executa a mesma VM, em paralelo, sem realizar escrita no disco.
Em caso de falha no servidor principal, o vCenter desativa-a explicitamente. Isto permite ao servidor secundário tomar a cargo a troca de dados de forma assegurar a continuidade da VM em funcionamento.

## ATENÇÃO!!!
Esta funcionalidades não é de momento suportada no Private Cloud.


## 
vCenter é uma ferramente de gestão que permite administrar de forma centralizada o conjunto de máquinas virtuais e de hosts físicos num ambiente virtual. Através desta interface, é igualmente possível gerir:

- alarmes de supervisão (CPU/RAM);
- os templates (/envelopes de Sistemas Operativos pré-configurados);
- a utilização das opções (HA, vMotion, DRS).



