---
title: VMware Storage vMotion
slug: vmware_storage_vmortion
excerpt: Migrar a quente uma máquina virtual para um host diferente
legacy_guide_number: g687
section: Funcionalidades VMware vSphere
order: 05
---


**Última atualização: 20/08/2020**

## Objetivo

O **Storage vMotion** permite alterar a localização de armazenamento dos ficheiros da máquina virtual, conservando a máquina virtual em execução. É possível mover a máquina virtual por completo ou disco por disco.

**Este manual mostra como realizar esta operação.**

## Instruções

### Migrar o disco de uma máquina virtual

Para mover os ficheiros de uma máquina virtual para outro datastore, basta clicar com o botão direito do rato na máquina virtual em execução e selecionar o menu `Migrate...`.

![migrar disco](images/VmotionStorage1.png){.thumbnail}

### Escolha do tipo de vMotion

O menu propõe várias opções de **vMotion**. No nosso exemplo, iremos apenas migrar a máquina virtual para outro datastore. Assim, deve selecionar a opção “Change storage only”.

A opção “Change compute resource only” permite migrar a máquina virtual para outro host.  

Esta operação, chamada **vMotion**, é descrita [neste manual](../vmware-vmotion-new/).

![escolha vMotion](images/VmotionStorage2.png){.thumbnail}

### Escolha do datastore

Escolha o armazenamento para o qual pretende migrar os dados.

Também é possível alterar a política de armazenamento durante esta operação.

Assim, poderá aplicar as políticas de armazenamento criadas se dispuser de um [armazenamento vSAN](../vmware-vsan/) ou da opção [VMencryption](https://docs.ovh.com/gb/en/private-cloud/vm-encrypt/).

![escolha datastore](images/VmotionStorage3.png){.thumbnail}

Caso tenha vários discos virtuais na mesma máquina, é possível migrar apenas um disco da VM utilizando o botão `Advanced`{.action}.

Poderá ver a seguinte visualização:

![datastore vMotion](images/VmotionStorage6.png){.thumbnail}

### Finalizar o vMotion

Clique em `Finish`{.action} para lançar o procedimento de migração.

![finalizar vMotion](images/VmotionStorage4.png){.thumbnail}

### Seguimento do vMotion

Nas tarefas recentes, poderá acompanhar o estado da migração, que demorará algum tempo dependendo do tamanho da VM, dos acessos IO e da largura de banda utilizada.

![seguimento vMotion](images/VmotionStorage5.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
