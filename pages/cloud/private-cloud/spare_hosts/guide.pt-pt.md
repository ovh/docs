---
title: Os hosts spare/suplentes
description: Gerir a disponibilização e fazer acompanhamento do estado dos hosts spare no serviço Dedicated Cloud?
excerpt: Gerir a disponibilização e fazer acompanhamento do estado dos hosts spare no serviço Dedicated Cloud?
slug: os_hosts_sparesuplentes
legacy_guide_number: g860
---


## 
Recebeu um email, relacionado com a criação automática de um ticket de incidente, que menciona a adição de um host spare à sua infraestrutura Dedicated Cloud.
Um host spare é, geralmente, associado à sua infraestrutura em caso de falha de um dos hosts que compõem essa infraestrutura. Esse host é gratuito. O ticket de incidente irá indicar-lhe qual o endereço IP do host cujo funcionamento foi interrompido.
Poderá ligar-se à sua interface vSphere Client para verificar o alerta relacionado com esse host inoperante.
Se configurou corretamente as funcionalidadesVMware HA e DRS, as suas VMs migrarão de forma automática para o host spare/suplente.
Se não ativou essas funcionalidades, deverá migrar manualmente as suas máquinas virtuais.


## 

## Atenção!
A OVH coloca à disposição o host spare para que possa fazer face a uma perda de recursos. Assim que o host com problemas for substituído por um novo, a OVH poderá "recuperar" o host spare.


## 
O host spare deve ser devolvido. Não é possível conservar um host spare, nem transformar esse host spare num host que é faturado. Se deseja substituir um host em falha, pode aceder ao guia [Substituir um host em falha]({legacy}861) para ter orientação quanto ao processo.


## 
Assim que situação voltar ao normal e que não tenha nenhum alerta no seu cliente vSphere, poderá devolver o host "spare".
Basta-lhe seguir o procedimento mencionado no parágrafo "Eliminação de um host" do guia [Como adicionar um host ?]({legacy}605).

