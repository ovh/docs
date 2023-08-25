---
title: 'Evitar o bloqueio da máquina virtual com a opção Veeam Managed Backup'
excerpt: 'Saiba como implementar uma solução para evitar o bloqueio através do mecanismo VMware DRS'
updated: 2022-02-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Sumário

Durante o processo de backup que se realiza ao eliminar-se um snapshot de uma máquina virtual num datastore NFS, é possível que a VM fique bloqueada durante cerca de 30 segundos, ou então que o disco se bloqueie.
Isto deve-se ao facto de o snapshot da VM estar instalado no backup proxy, que funciona num host diferente. Se o proxy e a VM se encontrarem no mesmo host, este problema não acontecerá.

**Este manual explica como implementar uma solução para evitar o bloqueio através do mecanismo VMware DRS.**

## Requisitos

- Ter contacto com o administrador da infraestrutura [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), a fim de receber dados de acesso.
- Ter um identificador de utilizador ativo (criado na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt))
- Ativar a opção [Veeam Backup Managed](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/veeam-backup-managed/){.external}.

## Instruções

> [!primary]
>
> Antes de dar início ao processo, tenha em conta o seguinte:
>
> - em ambientes de grande dimensão, a criação de várias regras DRS pode levar muito tempo;
> - o utilizador deve adicionar manualmente as novas máquinas virtuais às regras DRS;
> - qualquer máquina virtual que deva ser objeto de backup, mas que não faça parte das regras DRS pode sempre sofrer bloqueios.
>

Para implementar esta solução, clique no cluster apropriado, aceda ao separador `Configure`{.action} e depois à secção `VM/Host Rules`{.action}.

![vSphere](images/en01add.png){.thumbnail}

Crie uma regra DRS para **manter as máquinas virtuais juntas** e adicione-as com um backup proxy. Se tiver um grande número de máquinas virtuais para realizar o backup, pode criar várias regras DRS e associá-las a vários backups proxy. O algoritmo da OVH garante-lhe que o processo de backup da máquina virtual é efetuado pelo backup proxy presente no mesmo host ESXi que a máquina virtual.

> [!warning]
>
> A adição de um novo backup proxy terá um custo adicional.
>

![proxy](images/en02proxy.png){.thumbnail}

Crie outra regra DRS para **separar as máquinas virtuais**, de modo a conservar os backups proxy em diferentes hosts:

![proxy](images/en03proxy2.png){.thumbnail}

Tenha em atenção que deve ter implementado uma regra anti afinidade para que os backups proxy nunca se encontrem no mesmo host, e tantas regras de afinidade como backups proxy.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
