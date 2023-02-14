---
title: "Eliminar a cópia de uma VM do local de recuperação Zerto"
slug: zerto-vm-replica-deletion
excerpt: Saiba como eliminar uma VM do site de recuperação quando é apagada do site original
section: Serviços e opções OVHcloud
updated: 2021-12-09
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 09/12/2021**

## Objetivo

Quando uma VM é voluntariamente eliminada do site de origem, a VPG Zerto faz uma pausa na sincronização e entra em erro.<br>
Os ficheiros da cópia da VM ainda estão no site de destino.<br>
Este documento mostra como apagar estes ficheiros e repor a VPG em funcionamento.

**Utilize a interface Zerto para eliminar uma cópia de VM do site alvo.**

## Requisitos

- Ter contacto com o administrador da infraestrutura [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), para poder receber os dados de acesso.
- Ter um identificador de utilizador ativo com os direitos específicos para Zerto (criado na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt))
- Ter implementado o [Zerto Virtual Replication](https://docs.ovh.com/pt/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/)

## Instruções

Na interface Zerto do site alvo, verifique os painéis de controlo `VPGs`{.action} e `VMs`{.action}.<br>
No nosso exemplo, o VPG1 contém duas VMs, vm1-zerto e vm2-zerto. O estado da sincronização do site está funcional.

![Dash](images/en01sync.png){.thumbnail}

Na interface vSphere do website source, a vm2-zerto é eliminada voluntariamente.<br>
A VM e os seus discos são apagados.

![VM](images/en02vmdelete.png){.thumbnail}

De volta à interface Zerto do site alvo, a VPG faz uma pausa na sincronização e entra em erro. A VM vm2-zerto está cinzenta.

![VM](images/en03vpgerror.png){.thumbnail}

No separador `VPGs`{.action}, selecione VPG1 e no menu `Actions`{.action}, clique em `Edit VPG`{.action}.

![VPG](images/en04vpgedit.png){.thumbnail}

Em `VMs`{.action}, retire vm2-zerto da secção `selected VMS` (selecione a VM e clique na seta virada para a esquerda).<br>
Clique em `Done`{.action}.

![VPG](images/en05vpgremove.png){.thumbnail}

Clique em `No`{.action} na linha de aviso. Normalmente, não é necessário guardar o disco de recuperação.

![VPG](images/en06warning.png){.thumbnail}

A VPG vai sincronizar-se de novo e tornar-se funcional com uma única VM dentro.

![DONE](images/en07green.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
