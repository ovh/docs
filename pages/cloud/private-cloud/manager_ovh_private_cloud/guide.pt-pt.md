---
title: Apresentação da Área de Cliente Private Cloud OVHcloud
slug: manager-ovh-private-cloud
excerpt: Descubra as possibilidades da sua Área de Cliente Private Cloud
section: Introdução
order: 1
---

**Última atualização: 24/07/2020**

## Objetivo

A Área de Cliente OVHcloud oferece-lhe várias opções de personalização da sua infraestrutura Private Cloud.

**Este guia dá-lhe a conhecer as múltiplas possibilidades.**

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e aceder à secção `Hosted Private Cloud`{.action} e, depois, `Private Cloud`{.action}.
- Ter um produto [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/){.external}.


## Instruções

### Separador geral

Depois de aceder à secção  `Hosted Private Cloud`{.action} e `Private Cloud`{.action} da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, visualizará um panorama geral da sua Private Cloud:

![Informações gerais](images/controlpanel1.png){.thumbnail}

Ao cimo da página, `1 na imagem`, encontrará o nome e a descrição da sua Private Cloud. Não hesite em personalizá-la, o que lhe será de grande utilidade se possuir várias infraestruturas. 

À esquerda,  `2 na imagem`, encontrará a(s) sua(s) Private Cloud(s), bem como o(s) datacenter(s) virtual/ais que a compõem.


#### Informações gerais

No quadro à esquerda, encontrará informações gerais a respeito da sua Private Cloud.

![Informações gerais](images/controlpanel2.png){.thumbnail}


- A descrição da sua Private Cloud (com a possibilidade de lhe alterar o nome).
- A versão da sua Private Cloud.
- A respetiva referência comercial OVHcloud.
- O datacenter e, mais precisamente, a zona na qual a sua infraestrutura se encontra instalada.
- As regras de acesso à sua infraestrutura (`Aberta` ou `Restrita`), com as restrições por IP fonte.
- O número de datacenters virtuais na sua infraestrutura.
- O número de blocos de endereços IP (com a possibilidade de encomendar blocos suplementares).


#### Opções e conformidade

No quadro central, terá um panorama relativo ao estado de ativação das opções da sua Private Cloud.

![Opções](images/controlpanel3.png){.thumbnail}

#### Gestão do serviço

No quadro à direita, poderá gerir a sua subscrição à lista de difusão Private Cloud da OVHcloud.

Nele também está indicada a próxima renovação do seu serviço Private Cloud. À direita desta data, o botão `...`{.action} permite-lhe encomendar uma licença ou suprimir o serviço Private Cloud.

![Opções](images/controlpanel4.png){.thumbnail}

Para mais informações sobre o cancelamento de um serviço Private Cloud, consulte [este guia](https://docs.ovh.com/gb/en/private-cloud/how-to-cancel-private-cloud/).

#### Datacenters

Encontrará neste separador um curto resumo dos datacenters virtuais presentes no seu serviço Private Cloud:

![Datacenters](images/controlpanel5.png){.thumbnail}

Mais abaixo neste guia, encontrará uma visão mais pormenorizada dos datacenters virtuais.

> [!primary]
>
> Pode adicionar outro datacenter a partir desta página, operação que não acarretará nenhum custo suplementar.
> 



#### Utilizadores

Todos os utilizadores aptos a aceder ao vSphere estarão presentes nesta secção:

![Utilizadores](images/controlpanel6.png){.thumbnail}

Pode criar um utilizador clicando no botão  `Criar um utilizador`{.action}, à esquerda.

Para cada utilizador, encontrará diferentes informações, bem como as permissões aplicadas ao conjunto da Private Cloud:

- ID de utilizador.
- Nome (facultativo).
- Sobrenome (facultativo).
- Endereço de e-mail (facultativo).
- Número de telefone (facultativo).
- A permissão *Token validator*, que permite validar operações sensíveis nas Private Clouds com a opção HDS ou PCI-DSS.
- A permissão *IP*, que permite aceder ao plugin OVH Network.
- A permissão *IP Fail-Over*, que permite gerir os IPs Fail-Over associados à sua Private Cloud.
- A permissão *Interface NSX*, que permite aceder à interface NSX se a opção se encontrar ativada na sua Private Cloud.
- O estado (Diagnóstico), que permite ver se o utilizador foi de facto criado.

Ao clicar no botão `...`{.action} à direita do quadro, serão apresentadas várias hipóteses:

- Alterar as entradas deste quadro (modificação das permissões vistas anteriormente, acrescento de um endereço de e-mail ou de um número de telefone).
- Ver e alterar as permissões deste utilizador por datacenter.
- Alterar a palavra-passe do utilizador.
- Eliminar este utilizador.

Vejamos mais pormenorizadamente a alteração de permissões por datacenter:

![Permissões do utilizador por datacenter](images/controlpanel7.png){.thumbnail}

- `Acesso vSphere`{.action} \- trata-se das permissões globais do utilizador no vSphere:

|Permissões|Descrição|
|---|---|
|Nenhuma|Sem acesso|
|Apenas leitura|Acesso só de leitura|
|Leitura/Escrita|Acesso em leitura e escrita|
|Operador|Acesso reservado aos administradores OVHcloud|

- `Acesso ao VM Network`{.action} \- trata-se da gestão das permissões na secção Rede Pública (chamada `VM Network` na interface vSphere):

|Permissões|Descrição|
|---|---|
|Nenhuma|Sem acesso|
|Apenas leitura|Acesso só de leitura|
|Operador|Permite configurar máquinas virtuais (MV) na rede pública.|

- `Acesso ao V(X)LAN`{.action} \-  trata-se da gestão das permissões na secção Rede Privada (VXLAN na gama Hosted Private Cloud ou VLAN na gama SDDC):

|Permissões|Descrição|
|---|---|
|Nenhuma|Sem acesso|
|Apenas leitura|Acesso só de leitura|
|Operador|Permite configurar máquinas virtuais (MV) na rede privada.|
|Administrador|Permite gerir os port groups do switch virtual (criação, alteração, eliminação...).|

- `Adicionar recursos`{.action} \- este botão permite dar ou não permissão ao acrescento de recursos suplementares através do plugin OVHcloud no cliente vSphere.


#### Segurança

As regras de acesso ao seu vCenter são parametrizáveis neste separador:

![Parâmetros de segurança](images/controlpanel8.png){.thumbnail}

Pode configurar os elementos por cima e no interior do quadro, através dos botões disponíveis à direita deste último. É possível configurar:

- O prazo de expiração de uma sessão.

- O número de ligações simultâneas permitidas.

- As regras de acesso, restritas ou não, com uma permissão por IP fonte. Os IPs estarão presentes no quadro.
É possível alterar ou eliminar o IP ou o intervalo de IPs clicando no botão `...`{.action}, à direita deste quadro.

> [!warning]
>
> Se optar por regras de acesso restritas e não informar nenhum IP, nenhum utilizador poderá ligar-se ao cliente vSphere. No entanto, as máquinas virtuais permanecerão acessíveis.
> 


- A política de desconexão consiste em desconectar o primeiro ou o último utilizador conectado.
Neste exemplo, se estiverem conectados 50 utilizadores e um 51.º se conectar, o primeiro a ter estabelecido a conexão será desconectado.

Está disponível um segundo quadro relativamente à opção *VM encryption*.

Encontrará mais informações sobre essa opção [neste guia](https://docs.ovh.com/gb/en/private-cloud/vm-encrypt/).

#### Operações

Neste separador, encontrará as operações em curso na sua infraestrutura:

![Operações](images/controlpanel9.png){.thumbnail}

Pode verificar se uma operação encontrou problemas, se está planificada uma manutenção...

Pode alterar a data de uma manutenção clicando no botão `...`{.action}, à direita deste quadro.

> [!primary]
>
> Se não conseguir aceder ao cliente vSphere, é possível que esteja em curso uma manutenção. Este separador permite verificar isso.
>


#### Licence Windows

O separador `Licença Windows`{.action} permite ativar as licenças SPLA Windows na sua Private Cloud. Para isso, clique no botão situado à direita:

![Licença SPLA Windows](images/controlpanel10.png){.thumbnail}

Encontrará a página das tarifas [aqui](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/images-licenses/){.external}.



### Panorama datacenter

Numa Private Cloud, pode dispor de vários datacenters. Vai encontrá-los se clicar na sua Private Cloud:

![Panorama Datacenter](images/controlpanel11.png){.thumbnail}

Pode personalizar o nome do seu datacenter ao clicar no lápis, bem como acrescentar uma descrição personalizada.

Encontrará as principais informações sobre o datacenter, a gama, o número de hosts e de datastores.
É possível beneficiar de vários datacenters num mesmo serviço Private Cloud, desde que se trate das gamas Hosted Private Cloud e Software Defined Datacenter.


#### Hosts

Aqui estão presentes os hosts do seu datacenter:

![Hosts](images/controlpanel12.png){.thumbnail}

Nesta secção, vai encontrar:

- Os nomes dos hosts.
- Os seus perfis (M, L, L+...).
- O modo de faturação: se a faturação do seu host for à hora, pode optar por uma faturação mensal se clicar no botão à direita do quadro.
- O estado do host.
- O número de horas utilizadas (apenas no âmbito de um recurso horário).

Em cima e à esquerda deste quadro, pode encomendar um novo host num modo de pagamento mensal.


#### Datastores

O quadro dos datastores é semelhante ao dos hosts:

![Datastores](images/controlpanel13.png){.thumbnail}

Nesta secção, vai encontrar:

- Os nomes dos datastores.
- Os seus perfis.
- Os seus tipos (Hybrid ou Full SSD).
- As suas dimensões.
- O modo de faturação.
- O estado do datastore, de modo a saber se ele se encontra instalado corretamente.
- O número de horas utilizadas (apenas no âmbito de um recurso horário).

Em cima e à esquerda deste quadro, pode encomendar um novo datastore num modo de pagamento mensal.


#### Backup

O separador Backup permite-lhe ativar a solução `Veeam Backup`.

![Backup](images/controlpanel14.png){.thumbnail}

Para mais informações acerca desta opção, consulte [este guia](https://docs.ovh.com/gb/en/private-cloud/veeam-backup-as-a-service/){.external}.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
