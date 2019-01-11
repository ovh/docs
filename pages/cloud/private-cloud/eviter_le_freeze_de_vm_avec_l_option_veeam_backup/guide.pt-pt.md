---
title: 'Evitar o bloqueio da máquina virtual com a opção Veeam Managed Backup'
slug: evitar-o-bloqueio-da-maquina-virtual-com-opcao-veeam-backup
excerpt: 'Saiba como implementar uma solução para evitar o bloqueio através do mecanismo VMware DRS'
section: 'Gestão das máquinas virtuais'
---

**Última atualização: 11/01/2019**

## Sumário

Durante o processo de backup que se realiza ao eliminar-se um snapshot de uma máquina virtual num datastore NFS, é possível que a VM fique bloqueada durante cerca de 30 segundos, ou então que o disco se bloqueie.
Isto deve-se ao facto de o snapshot da VM estar instalado no backup proxy, que funciona num host diferente. Se o proxy e a VM se encontrarem no mesmo host, este problema não acontecerá.

**Este manual explica como implementar uma solução para evitar o bloqueio através do mecanismo VMware DRS.**

## Requisitos

- Dispor do serviço [Private Cloud](https://www.ovh.com/pt/private-cloud/){.external}.
- Ter ativado a opção [Veeam Backup Managed](https://www.ovh.com/pt/private-cloud/opcoes/veeam.xml){.external}.
- Aceder à interface de gestão vSphere.

## Instruções

### Procedimento

> [!primary]
>
> Antes de dar início ao processo, tenha em conta o seguinte:
>
> - em ambientes de grande dimensão, a criação de várias regras DRS pode levar muito tempo;
> - o utilizador deve adicionar manualmente as novas máquinas virtuais às regras DRS;
> - qualquer máquina virtual que deva ser objeto de backup, mas que não faça parte das regras DRS pode sempre sofrer bloqueios.
>


Para implementar esta solução, clique com o botão direito do rato sobre o cluster adequado e modifique as respetivas configurações.

Crie uma regra DRS para **manter as máquinas virtuais juntas** e adicione-as com um backup proxy. Se tiver um grande número de máquinas virtuais para realizar o backup, pode criar várias regras DRS e associá-las a vários backups proxy. O algoritmo da OVH garante-lhe que o processo de backup da máquina virtual é efetuado pelo backup proxy presente no mesmo host ESXi que a máquina virtual.

> [!warning]
>
> A adição de um novo backup proxy terá um custo adicional.
>

Na secção DRS, pode adicionar uma regra como a seguinte:

![](images/image0_7.png){.thumbnail}

Crie outra regra DRS para **separar as máquinas virtuais**, de modo a conservar os backups proxy em diferentes hosts:

![](images/image0_28.png){.thumbnail}

Crie um grupo de máquinas virtuais, introduza o nome do grupo e adicione o host a esta regra:

![](images/image1_9.png){.thumbnail}

Tenha em atenção que deve ter implementado uma regra anti afinidade para que os backups proxy nunca se encontrem no mesmo host, e tantas regras de afinidade como backups proxy.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}