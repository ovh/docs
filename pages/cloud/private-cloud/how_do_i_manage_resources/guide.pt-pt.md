---
title: Como gerir os meus recursos
excerpt: ''
slug: como_gerir_os_meus_recursos
legacy_guide_number: g602
---


## 
Veremos aqui como vigiar os recursos do seu Private Cloud.
Deverá utilizar o cliente vSphere, quer seja ao aceder pelo seu próprio cliente local, quer seja ao utilizar a ligação RDP fornecida aquando da ativação do seu Private Cloud


## Nos hosts
Poderá obter uma visão global dos seus recursos hosts ao ir no seu PCC ao separador host:

![](images/img_98.jpg){.thumbnail}


## Num cluster ou numa pool de recursos
É possível visualizar o conjunto das informações de recursos para o seu PCC ao ir ao separador «Ressource Allocation» do mesmo.
Aí encontrará o conjunto dos recursos disponíveis: RAM, CPU, espaço de armazenamento. Esta via permite-lhe isolar uma eventual carga normal ocasionada por uma VM dos hosts ou num dos datacenters virtuais. Poderá ainda implementar as limitações de acesso ao disco (I/O) para os seus armazenamentos. Poderá igualmente fornecer prioridades a cada uma das VMs, mas também gerir os recursos para as VMs, de forma a evitar a monopolização dos recursos para determinadas VMs que possam vir a degradar as suas performances. É possível ainda de gerir os recursos para uma pool de VMs.

![](images/img_96.jpg){.thumbnail}


## Gráficos de recursos para os seus clusters ou para os seus hosts
No separador «Performance» encontrará os gráficos de utiização do seu cluster ou do seu host:

![](images/img_95.jpg){.thumbnail}
Poderá utilizar o botão «Advanced» e depois «Chart Option... » de forma a personalizar o conjunto dos gráficos.
Poderá selecionar a "praia" de tempos a mostrar, ou ainda no tipo de gráficos, de forma a proceder a uma análise precisa dos seus dados:

![](images/img_100.jpg){.thumbnail}
A personalização dos gráficos:

![](images/img_101.jpg){.thumbnail}


## Nos seus armazenamentos
Ao ir à secção de Datacenter, e depois no separador Datastore (Banco de dados), verá o conjunto dos seus armazenamentos. Poderá ainda vigiar o espaço utilizado no conjunto da sua infraestrutura.

![](images/img_102.jpg){.thumbnail}

