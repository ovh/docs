---
title: Verificar uma máquina virtual em caso de lentidão
excerpt: ''
slug: verificar_uma_maquina_virtual_em_caso_de_lentidao
legacy_guide_number: g601
---


## 
Aqui ficam os passos para efetuar um diagnóstico em caso de grande lentidão numa VM.

Deverá utilizar o cliente vSphere, quer seja ao aceder pelo seu próprio cliente local, quer seja ao utilizar a ligação RDP fornecida aquando da ativação do seu Private Cloud


## Verificação das VMs:
Num primeiro tempo, selecione a VM que apresenta um problema ao ir ao separador «performance». Obtém o resumo dos gráficos de utilização da nossa VM para o CPU, RAM, etc. Se constatamos uma utilização "importante" nesta janela, existem irregularidades certamente provenientes desta VM.
Nesse caso, deverá proceder ao aumento dos recursos da sua VM, após verificar que não existem limitações no separador "Recursos" dos parâmetros da VM (Clique direito na VM => Edit Settings => Ressources).


## Verificação Cluster/Pool de recursos
No cluster ou na pool de recursos, deverá ir ao separador Performances, e permitir-nos-á de ver os gráficos de performance e utilização dos recursos:

![](images/img_95.jpg){.thumbnail}
Na secção « Allocation de ressources », poderá ver em números o consumo global das suas VMs nos recursos disponíveis:

![](images/img_96.jpg){.thumbnail}
Poderá ocorrer dois casos:

- Se um host está muito sobrecarregado, poderá efetuar uma migração manual da sua VM para outro host ou efetuar uma migração a quente ao utilizar vMotion.

Se beneficia da licença Enterprise, poderá utilizar a função DRS que permite gerir automaticamente essa operação, mediante os recursos dos seus hosts.


- No caso do conjunto dos seus hosts apresentar uma carga importante, deverá adicionar um graças ao separador Private Cloud OVH, ou Armazenamento OVH.




## Verificação dos armazenamentos
Além dos recursos para as suas VMs, poderá igualmente vigiar os seus armazenamentos. Quando está na vista Datastore, selecione o seu NAS e depois o separador «Performance»:

![](images/img_97.jpg){.thumbnail}


## Verificação da Rede
Em último lugar, deverá verificar o estado da rede.
No seu Manager, poderá ver o débito utilizado, assim como as limitações que terá implementado na sua VLAN:


- Manager v5 -> Private Cloud -> Resumo



