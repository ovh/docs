---
title: Implementação de uma máquina virtual
slug: implementacao-de-uma-maquina-virtual
routes:
    canonical: 'https://docs.ovh.com/pt/private-cloud/implementacao-de-uma-maquina-virtual/'
excerpt: Saiba como implementar uma máquina virtual através da interface vSphere
section: Gestão das máquinas virtuais
order: 0
---

**Última atualização: 18/11/2020**

## Objetivo

A partir da interface vSphere, pode implementar máquinas virtuais de várias formas. 

**Saiba como implementar uma máquina virtual a partir de um ficheiro ISO.**

## Requisitos

- Ter um produto [Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/){.external}.
- Estar ligado à [interface vSphere](../instalar_o_vsphere_client/).

## Instruções

### Implementar a máquina virtual

A implementação da nova máquina virtual é realizada através do cliente vSphere, na secção `ClusterCDI`.

Clique com o botão direito do rato no cluster à sua escolha e clique em `New Virtual Machine`{.action}.

![deploy a vm](images/vm01.png){.thumbnail}

Tem várias possibilidades no momento de criação de uma máquina virtual:

- A criação a partir de um ISO, que estará no seu datastore e que poderá ter importado seguindo [o manual de ligação em SFTP](../ligacao_por_sftp/).
- Também é possível implementar uma máquina virtual a partir de um template seu ou de um [template OVHcloud](../usar-template-ovhcloud/).
- Pode clonar uma máquina virtual já existente (tenha em conta o risco de conflito de endereços IP).
- É possível clonar uma máquina virtual em template, para uma implementação mais rápida das suas próximas máquinas virtuais.
- É possível clonar um template noutro template para, por exemplo, ter o template em diferentes datastores e não sofrer diminuições de desempenhos aquando de uma implementação massiva.
- É possível converter um template em máquina virtual, o que provocará a perda do template mas que poderá ser útil se pretender alterá-lo.

![escolha de criações](images/vm02.png){.thumbnail}

Aqui, iremos abordar como implementar uma máquina virtual a partir de um ficheiro ISO.

A etapa seguinte permite-lhe definir o nome da sua máquina e escolher a sua localização. Se não escolher qualquer pasta, esta será criada na raiz do datacenter.

![localização da máquina virtual](images/vm03.png){.thumbnail}

De seguida, pode escolher o cluster, o host, [o pool de recursos](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external-link}, ou [a vApp](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-E6E9D2A9-D358-4996-9BC7-F8D9D9645290.html){.external-link} onde a quer colocar.

Neste caso, a máquina virtual será implementada segundo as regras DRS configuradas, e será colocada na raiz do cluster.

![escolha de recursos](images/vm04.png){.thumbnail}

De seguida, deverá escolher o banco de dados no qual armazenar os ficheiros de configuração e de disco.

Desaconselhamos que coloque a sua máquina virtual num “storageLocal”, que corresponde ao armazenamento local do seu host. Em caso de falha do host, a sua máquina virtual não poderá reiniciar e não será acessível.

![escolha de armazenamento](images/vm05.png){.thumbnail}

De seguida, escolha a compatibilidade entre a sua máquina virtual e o host. Salvo em caso particular, recomenda-se ter em conta o mais recente.

![escolha da compatibilidade](images/vm06.png){.thumbnail}

Escolha um sistema operativo convidado. O “Guest OS” não instala o sistema operativo, mas o vSphere configura a máquina virtual de forma automática (número de CPU/RAM, tipo de placa de rede, instalação das ferramentas VMware).

![escolha de guest OS](images/vm07.png){.thumbnail}

### Configurar a máquina virtual

As seguintes etapas permitem-lhe configurar os recursos da sua máquina virtual.

A linha `New Network` permite adicionar uma placa de rede:

- O “VM Network” servirá para a rede pública e o acesso direto à Internet.
- As VLAN permitirão utilizar a rede privada entre as suas máquinas virtuais (e com outros serviços OVHcloud através do vRack).

![escolha da rede](images/vm08.png){.thumbnail}

Na linha `New CD/DVD Drive`, poderá escolher “Datastore ISO File”.

Uma nova janela aparecerá onde poderá escolher o seu ficheiro ISO. Este poderá também ser adicionado após a criação da máquina virtual.

![escolha do ficheiro ISO](images/vm09.png){.thumbnail}

Uma vez o ficheiro selecionado, este aparecerá tal como está abaixo. Não se esqueça de o ligar selecionando a opção `Datastore ISO File`{.action}.

![Ligar ISO](images/vm10.png){.thumbnail}

Ser-lhe-á apresentado um resumo da criação da máquina virtual. Se pretender modificar a sua configuração, clique diretamente numa das etapas da esquerda.

Clique em `FINISH`{.action} para terminar a implementação.

![Resumo VM](images/vm11.png){.thumbnail}

Uma vez a máquina presente no seu inventário, poderá iniciá-la clicando com o botão direito do rato na mesma e em clicando sucessivamente em `Power`{.action} > `Power on`{.action}. 

Finalmente, clique em `Open Remote Console`{.action} para ter acesso ao “ecrã” da VM e começar a instalação do sistema operativo.

![Arranque VM](images/vm12.png){.thumbnail}

A consola abrir-se-á num novo separador e, uma vez completada a instalação, poderá utilizar a sua máquina virtual.

![Consola VM](images/vm13.png){.thumbnail}

> [!primary]
> Uma vez a sua máquina virtual instalada, recomenda-se que desligue o ISO nos parâmetros. Caso contrário, não poderá mover a máquina virtual.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
