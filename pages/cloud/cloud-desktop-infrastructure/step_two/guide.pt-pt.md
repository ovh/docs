---
title: 'Passo 2 - criar um modelo de frota de ambientes de trabalho virtuais (ou pool)'
slug: criar-pool
excerpt: 'Saiba como criar modelos de pools com o VMware Horizon 7.1'
section: Preparação
order: 2
---

**Última atualização: 14/05/2018**

## Sumário

Chegou o momento de começar a utilizar a oferta [Cloud Desktop Infrastructure](https://www.ovh.pt/cloud/cloud-desktop/infrastructure/){.external}.

**Este guia indicará como mobilizar um pool automático de máquinas Linked Clones.**


## Requisitos

- Utilizar um sistema de exploração (OS) compatível: [sistemas de exploração compatíveis com o Horizon Agent](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external}.
- Instalar os programas a executar no pool.
- Configurar o endereçamento da placa de rede em DHCP.
- Associar o modelo de máquina virtual (VM) à rede de destino do pool (portgroup ou VLAN).
- Ter concluído a instalação do agente VMware Horizon 7.1.
- Criar um snapshot (com a máquina virtual desligada) para servir de ponto de referência imutável.  
- Ter [criado um template de personalização](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-sysprep/){.external}. 


## Instruções

### Importar um modelo de máquina virtual (VM)


É possível criar ou importar modelos de VM, completa ou parcialmente configurados na Private Cloud associada à infraestrutura VMware Horizon 7.1.


### Associar o modelo à rede de destino do pool

De modo que os ambientes de trabalho virtuais sejam criados corretamente e estejam acessíveis aos utilizadores, é importante configurar o modelo de VM na rede virtual adequada. Esta rede é indicada no e-mail de entrega (**DHCP Network**) e é representada por um `dvportgroup` na interface vSphere.

Para associar o modelo de VM à rede do pool:

- faça clique com o botão direito do rato sobre a VM e depois escolha `Edit settings`{.action};
- selecione o periférico correspondente à interface de rede;
- na parte `Network Connexion`{.action}, selecione o `Network label`{.action} indicado no e-mail de entrega **DHCP Network** (ver imagem abaixo).

![DHCP Network](images/1200.png){.thumbnail}

Se se revelar necessária uma rede suplementar, isolada da existente, é possível criar um novo ponto de acesso com uma rede dedicada: [criação de um novo ponto de acesso - EN](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-access-point/).


### Instalar o agente VMware Horizon 7.1

> [!primary]
>
> Disponibilizamos aos utilizadores da oferta HaaS os ficheiros de instalação do agente Horizon: <https://files.horizonaas.com/>.
> 

Clique duas vezes sobre o ficheiro do programa de instalação do Horizon Agent. Depois siga o processo de instalação:

- aceite o termo de licença VMware;
- selecione`Instalar VMware Horizon Agent`{.action} no `modo Posto de trabalho`{.action};
- escolha o protocolo IPv4;
- selecione as opções de instalação (as que se apresentam por defeito constituem um bom ponto de partida);
- não ative o RDP quando isso lhe for pedido;
- aceite ou modifique a pasta de destino;
- conclua a instalação.

Se deseja obter mais pormenores sobre a instalação do agente Horizon 7.1 numa máquina virtual: [instalar Horizon Agent numa máquina virtual](http://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.desktops.doc%2FGUID-1F2D0C6E-6379-4B52-A7EA-C1EF09CE2F9B.html){.external}


### Criar o snapshot de referência

De modo a poder basear-se num estado imutável da máquina virtual que serve de modelo ao pool, o VMware Horizon recorre a um snapshot. Portanto, as operações que podem ser realizadas posteriormente sobre o modelo não afetarão diretamente o conteúdo dos ambientes de trabalho virtuais.

- Na interface do vSphere Client (aqui a versão web), selecione a VM modelo e, depois, o menu `ação`{.action}. Por fim, clique em `Criar um snapshot`{.action}:

![Criar um snapshot](images/1201.png){.thumbnail}

- Introduza um nome para o snapshot (aqui um número de versão) e uma descrição:

![Nome do snapshot](images/1202.png){.thumbnail}

Agora que o modelo foi criado, saiba como[criar um pool - EN](https://docs.ovh.com/fr/cloud-desktop-infrastructure/howto-create-pool/).

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.