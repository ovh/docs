---
title: VMware vMotion
slug: vmware-vmotion-new
excerpt: Migrar a quente uma máquina virtual para um host diferente
legacy_guide_number: '7767025'
section: Funcionalidades VMware vSphere
order: 04
updated: 2020-07-10
---

**Última atualização: 24/08/2020**

## Objetivo

O **vMotion** é uma migração a **quente** de uma máquina virtual (em execução) desde um host para outro host, recurso de pools ou Vapp, no mesmo **cluster**.

**Este manual mostra como realizar esta operação.**

## Instruções

### Mover uma máquina virtual

Quando receber um token por SMS, deverá indicá-lo na interface segura para que a tarefa em espera possa ser executada
noutro recurso.

Para mover uma máquina virtual para outro recurso, basta clicar com o botão direito do rato na máquina virtual em execução e selecionar o menu `Migrate...`{.action}.

![mover máquina virtual](images/Vmotion1.png){.thumbnail}

## Escolha do tipo de vMotion

O menu oferece várias opções de vMotion. No nosso exemplo iremos apenas migrar a máquina virtual para outro host, por isso será necessário selecionar a opção “Change compute resource only”.

A opção “Change storage only” permite migrar a máquina virtual para outro datastore. Esta operação, chamada **Storage vMotion**, é descrita [neste manual](../vmware_storage_vmortion/).

![escolha do tipo de vMotion](images/Vmotion2.png){.thumbnail}

### Escolha do recurso

Escolher o recurso para o qual a máquina virtual será migrada. É possível migrar a máquina virtual para um host, cluster, pool de recursos ou Vapp.

No nosso exemplo, iremos migrá-la para o host .50.

![escolha do recurso](images/Vmotion3.png){.thumbnail}

### Escolha da rede

Neste passo, é possível escolher a rede atribuída à máquina virtual. No nosso exemplo, deixámos a máquina virtual na VLAN de origem.

![escolha da rede](images/Vmotion4.png){.thumbnail}

### Escolha da prioridade

Recomendamos que efetue a migração em prioridade alta. Para isso, selecione a opção “Schedule vMotion with high priority”.

![escolha da prioridade](images/Vmotion5.png){.thumbnail}

### Finalizar o vMotion

Clique em `Finish`{.action} para lançar o procedimento de migração.

![finalizar vMotion](images/Vmotion6.png){.thumbnail}

## Seguimento do vMotion

Nas tarefas recentes, poderá acompanhar o estado da migração, que demorará algum tempo dependendo da RAM atribuída, da carga na máquina virtual e da largura de banda utilizada.

![seguimento do vMotion](images/Vmotion7.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
