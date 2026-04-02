---
title: 'Gerir as suas instâncias Public Cloud'
excerpt: 'Saiba como gerir as suas instâncias Public Cloud na Área de Cliente OVHcloud'
updated: 2026-02-24
---

## Objetivo

Pode gerir as suas instâncias Public Cloud na sua [Área de Cliente OVHcloud](/links/manager).

**Este guia descreve as ações disponíveis na Área de Cliente OVHcloud para uma instância Public Cloud.**

## Requisitos

- Um [projeto Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud
- Uma [instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) no seu projeto

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Caminho de navegação:** `Public Cloud`{.action} > Selecione o seu projeto

---
<!-- CP-NAV-END:publiccloud-projects -->

## Instruções

### Utilizar a interface de gestão das instâncias

Clique em `Instâncias`{.action} no menu à esquerda.

Esta página lista o conjunto das suas instâncias Public Cloud e algumas das suas propriedades:

- o ID da instância, necessário para determinadas chamadas API;
- a localização do datacenter, ou seja, a região da instância;
- o modelo da instância;
- a imagem, ou seja, o SO instalado na instância;
- o endereço IPv4 da instância;
- o endereço privado atualmente associado à instância;
- os volumes (discos) adicionais atualmente associados à instância;
- o estado da instância, indicando se está no estado `Ativado`.

### Opções de gestão no painel de controlo da instância

Na página de gestão das instâncias, clique no nome da instância em causa.

Acederá à página `Informações gerais`, que centraliza os principais detalhes e o estado de funcionamento da sua instância (estado, recursos, rede, acesso e metadados).

Algumas destas operações também estão disponíveis na página de gestão das instâncias, através do botão `...`{.action} na tabela.

#### Editar a configuração de uma instância

Clique em `Alterar a imagem`{.action} ou `Alterar o modelo`{.action}.

Também pode abrir `Ações suplementares`{.action} e selecionar `Editar`{.action}.

A nova página apresenta uma versão modificada das opções [de criação de instância](/pages/public_cloud/compute/public-cloud-first-steps), na qual pode modificar os seguintes elementos:

- **Modificar o nome**: pode atribuir um nome à instância para facilitar a sua identificação.
- **Modificar a imagem**: pode escolher outro sistema operativo para a instância (tenha em conta que a reinstalação de uma instância eliminará todos os dados que contém).
- **Modificar o modelo**: pode alterar o modelo de instância. Consulte [este guia](/pages/public_cloud/compute/public-cloud-first-steps#model) para mais informações sobre as opções.
- **Modificar o período de faturação**: pode alterar o período de faturação da instância de uma faturação à hora para uma faturação mensal. Consulte [este guia](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing) para mais informações.

#### Criar um backup de uma instância

Clique em `Criar um backup`{.action}.

Consulte o guia [Guardar uma instância](/pages/public_cloud/compute/save_an_instance) para mais informações.

#### Eliminar uma instância

Clique em `Eliminar`{.action}.

Esta ação eliminará definitivamente a instância e todos os seus dados.

Confirme o pedido de eliminação na janela que aparece.

> [!warning]
> A eliminação de uma instância não elimina automaticamente todas as opções que lhe estão associadas (armazenamento, snapshot, backup, etc...). Certifique-se de que todas as outras opções associadas à instância são igualmente eliminadas para deixar de ser faturado.
>

#### Associar um volume

Clique em `Associar um volume`{.action}.

Selecione o volume a associar à instância e clique em `Confirmar`{.action}. Uma vez associado, o volume fica imediatamente disponível e pode ser montado a partir do sistema operativo da instância.

#### Alterar a reverse DNS

Clique em `⋮`{.action} e depois em `Alterar a reverse DNS`{.action}.

Consulte o guia [Configurar o DNS inverso de uma instância Public Cloud](/pages/public_cloud/compute/setup_instance_reverse) para mais informações.

#### Configurar a firewall

Clique em `⋮`{.action} e depois em `Configurar a firewall`{.action}.

Consulte o guia [Ativar e configurar o Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) para mais informações.

#### Gerir as redes privadas

Clique em `⋮`{.action} e depois em `Gerir as redes privadas`{.action}.

Consulte o guia [Criar uma rede privada com Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) para mais informações.

#### Associar uma rede

Clique em `⋮`{.action} e depois em `Associar uma rede`{.action}.

Selecione a rede desejada na lista pendente e clique em `Confirmar`{.action}.

#### Ações suplementares

Clique em `Ações suplementares`{.action}

##### Criar um backup automático de uma instância

Clique em `Criar um backup automatizado`{.action}.

Consulte o guia [Guardar uma instância](/pages/public_cloud/compute/save_an_instance#criar-um-backup-automatizado-de-uma-instancia) para mais informações.

##### Parar uma instância

Clique em `Parar`{.action}.

Isto colocará a instância no estado `Apagada`, mas continuará a ser-lhe cobrado o mesmo preço pela sua instância. Consulte o nosso guia [Suspender ou colocar em pausa uma instância](/pages/public_cloud/compute/suspend_or_pause_an_instance#parar-suspend-uma-instancia) para mais informações.

Clique em `Iniciar`{.action} para reativar a instância.

##### Utilizar o modo rescue

Clique em `Reiniciar em modo Rescue`{.action}.

Isto irá ativar o modo rescue da instância. Consulte o nosso guia [Como ativar o modo rescue numa instância Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) para obter informações detalhadas.

##### Reiniciar uma instância

> [!warning]
> A opção de reboot a quente (soft) não está atualmente disponível para as instâncias Metal.
>

- Clique em `Reboot a quente (soft)`{.action} para efetuar um reboot ao nível de software.
- Clique em `Reboot a frio (hard)`{.action} para lançar um reboot ao nível material.

Confirme o pedido de reboot na janela que aparece.

##### Suspender (*shelve*) uma instância

Clique em `Suspender`{.action}.

Isto colocará a instância no estado « *shelved* », apresentado aqui como `Suspensa`. Consulte o nosso guia [Suspender ou colocar em pausa uma instância](/pages/public_cloud/compute/suspend_or_pause_an_instance#suspender-shelve-uma-instancia) para mais informações sobre os diferentes estados de suspensão de uma instância.

Clique em `Reativar`{.action} para restaurar o estado `Ativada` da instância.

##### Reinstalar uma instância

Clique em `Reinstalar`{.action}.

Esta ação reinstalará a instância com o mesmo sistema operativo, desde que a imagem seja ainda suportada.

Tenha em atenção que a reinstalação **elimina todos os dados** atualmente armazenados na sua instância.

### Aceder à consola VNC <a name="accessvnc"></a>

Clique em `Instâncias`{.action} no menu à esquerda. Na página de gestão das instâncias, clique no nome da instância na tabela.

Clique no separador `Consola VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

A consola VNC fornece um acesso direto à sua instância. Para que este acesso funcione, primeiro deve configurar um nome de utilizador e uma palavra-passe na instância.

Consulte o nosso guia [Criação e conexão a uma primeira instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console) para mais informações.

## Quer saber mais?

[Criação e conexão a uma primeira instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Apresentação do Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).
