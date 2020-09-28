---
title: 'Eliminar um servidor host'
slug: eliminacao-servidor-host
excerpt: 'Saiba como eliminar um servidor host de uma infraestrutura Private Cloud'
legacy_guide_number: '1442308'
section: 'Funcionalidades da OVH'
---

**Última atualização: 24/07/2020**

## Sumário

Em certas situações, pode ser útil eliminar um servidor host do seu cluster, por exemplo, para devolver um _spare_ não utilizado ou para migrar para uma gama superior.

**Este manual explica como remover, com toda a segurança, um servidor host da sua infraestrutura Private Cloud.**

## Requisitos

* Dispor do serviço [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/){.external}.
* Aceder à interface de gestão vSphere.


## Instruções

A eliminação de um servidor host passa por duas etapas: em primeiro lugar, deve pôr este recurso em modo de manutenção para, posteriormente, proceder à eliminação.

### Ativar o modo de manutenção

Uma vez ligado ao vSphere, aceda ao inventário da sua plataforma na janela `Hosts and Clusters`{.action} na coluna à esquerda. Clique com o botão direito no servidor host correspondente e selecione `Maintenance Mode`{.action} e, de seguida, `Enter Maintenance Mode`{.action}. Se houver máquinas virtuais (VM) em funcionamento neste servidor host, estas serão automaticamente registadas noutro servidor host presente no cluster (os modos HA e DRS devem estar ativados).

![Ativação do modo de manutenção](images/removehost01.png){.thumbnail}

Na caixa de diálogo, confirme a ativação do modo de manutenção clicando em `OK`{.action}.

![Confirmação do modo de manutenção](images/removehost02.png){.thumbnail}


Poderá seguir o progresso da operação na secção `Recent Tasks`.

![Progresso da ativação do modo de manutenção](images/removehost03.png){.thumbnail}


### Eliminar o servidor host

Uma vez que o servidor host estiver em modo de manutenção, clique com o botão direito e selecione `OVHcloud`{.action} e, a seguir, `Remove this host`{.action}.

![Remover o host](images/removehost04.png){.thumbnail}

Na nova janela que aparecerá, confirme que pretende eliminar o servidor host clicando no botão `Next`{.action}.

![Confirmação da eliminação](images/removehost05.png){.thumbnail}

O pedido de eliminação é imediatamente processado.

![Validação da eliminação](images/removehost06.png){.thumbnail}

Poderá seguir o progresso da operação na secção `Recent Tasks`.

![Progresso da eliminação do host](images/removehost07.png){.thumbnail}

O servidor host será eliminado em poucos minutos e deixará de aparecer no inventário. 


> [!primary]
>
> Se adicionar algum ficheiro ou diretório que não estava inicialmente presente no armazenamento local do servidor host, ocorrerá um erro que irá impedir a eliminação do servidor. Apenas os diretórios de base e os ficheiros de vSwap não bloqueiam a operação de eliminação.
> 


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
