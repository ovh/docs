---
title: Otimizar a repartição das VMs pelos Hosts
excerpt: Como fazer repartição das VMs pelos Hosts de forma a otimizar o uso dos recursos?
updated: 2018-03-26
---

**Última atualização: 26/03/2018**

## Configuração proposta pela OVH
PRO, inclui Dynamic Optimization que permite repartir automaticamente a carga de um cluster entre os diferentes Hosts que fazem parte do mesmo.
A OVH propõe, de forma padrão, uma configuração PRO com as seguintes características:

![](images/img_1991.jpg){.thumbnail}
A cada 20 minutos, a "rotina" Dynamic Optimization vai ser executada e migrar automaticamente as VMs de um Host para outro para corresponder aos parâmetros definidos na imagem aqui apresentada.


## Excluir uma VM de PRO
Se desejar que uma VM não seja automaticamente migrada pela funcionalidade PRO, poderá excluí-la ao marcar a seguinte "casinha" nas propriedades da VM:

![](images/img_1992.jpg){.thumbnail}


## Regras Anti-afinidades
No painel VMM, é possível definir para cada VM regras de anti-afinidade e assim especificar que deseja que algumas VMs não estejam presentes no mesmo Host.

Para essa operação, é necessário aceder às propriedades das VMs, Hardware Configuration, Availability, Availability Sets:

![](images/img_1993.jpg){.thumbnail}
Crie uma propriedade e adicione-a na secção "Assigned Properties":

![](images/img_1994.jpg){.thumbnail}
Proceda da mesma forma em relação à outra ou outras VMs que deseja separar.

