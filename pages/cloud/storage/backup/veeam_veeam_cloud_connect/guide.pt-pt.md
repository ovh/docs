---
title: Veeam Cloud Connect
slug: veeam/veeam-cloud-connect
excerpt: Apresentação da oferta Veeam Cloud Connect
section: Veeam
---

**Última atualização: 07/12/2021**

## Objetivo

O Veeam Cloud Connect é uma solução proposta pelo editor Veeam. Permite dispor de um backup fora do sítio, sem ter de gerir uma infraestrutura num segundo sítio. A ideia do Veeam Cloud Connect é fornecer um meio fácil e seguro de realizar backups e de restaurar os seus dados a partir da cloud.

**Saiba como configurar o seu Veeam Cloud Connect**

## Requisitos

- Ter subscrito a oferta [Veeam Cloud Connect](https://www.ovh.com/pt/storage-solutions/veeam-cloud-connect/){.external}.

> [!primary]
>
> As nossas ofertas Veeam não são compatíveis com a versão mais recente (11) proposta pela Veeam. A OVHcloud continuará a propor a versão 10 até indicação em contrário. Tenha em conta este ponto durante a configuração do Veeam para os seus serviços.
>

## Instruções

### Produtos compatíveis

A principal vantagem do Veeam Cloud Connect, para além da sua simplicidade, é que funciona independentemente de onde está alojada a sua infraestrutura. Esta pode estar alojada na OVHcloud (um Hosted Private Cloud ou um servidor dedicado no qual realiza a virtualização com um hipervisor VMware ou Microsoft), noutro fornecedor ou nas suas próprias instalações.

Lista de produtos OVHcloud compatíveis:

- [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/){.external}
- Máquinas virtuais alojadas nos nossos [servidores dedicados](https://www.ovh.com/pt/servidores_dedicados/){.external} e administradas via Microsoft Hyper-V ou VMware ESXi.


### Encomenda a oferta

A oferta pode ser encomendada através do site [OVH.com](https://www.ovh.com/pt/storage-solutions/veeam-cloud-connect/){.external}

Uma vez o pagamento efetuado, receberá um e-mail com:

- O endereço IP/nome do seu serviço.
- O utilizador e a palavra-passe.


### Área de Cliente OVHcloud

Na sua Área de Cliente OVHcloud, consulte a secção `Bare Metal Cloud` > `Plataformas e serviços`.

![veeam cloud connect](images/veeam-cloud-connect-manager-start.png){.thumbnail}

Aparecerá a seguinte página onde terá acesso à configuração do seu produto, a sua subscrição e à localização do armazenamento.

![veeam cloud connect](images/veeam-cloud-connect-manager.png){.thumbnail}

No segundo separador `Espaço de armazenamento`, verá o nome do seu espaço de armazenamento, a sua utilização, o limite e o datacenter de replicação.


![veeam cloud connect](images/veeam-cloud-connect-manager-espace.png){.thumbnail}

Ao fim desta linha, poderá ver um botão

que serve para aumentar ou diminuir a capacidade de armazenamento.


![veeam cloud connect](images/veeam-cloud-connect-manager-modif-espace.png){.thumbnail}

Depois de modificar o valor, aparecerá a seguinte mensagem:


![veeam cloud connect](images/veeam-cloud-connect-manager-modif-espace-ok.png){.thumbnail}


### Instalação

Para implementar o seu Veeam Cloud Connect, deve ter contratado previamente o seu próprio servidor de backup Veeam.

A ativação do Veeam Cloud Connect é realizada na mesma interface, na consola Veeam Backup & Replication, descarregável no site da [Veeam](https://www.veeam.com/){.external}.


> \[!success]
>
> Pode consultar a instalação nesta página.
> 

Primeiro, deve adicionar o serviço na sua consola, clicando em “ADD SERVICE PROVIDER”


![veeam cloud connect](images/veeam-cloud-connect-add-provider.png){.thumbnail}

Indique o IP/nome da sua oferta, que recebeu por e-mail.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-ip.png){.thumbnail}

Adicione o utilizador e a palavra-passe, e aplique para validar.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-login.png){.thumbnail}

Aparecerá o resumo dos recursos disponíveis nesta oferta.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-ressources.png){.thumbnail}

E terá acesso a um último resumo.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-recap.png){.thumbnail}

Ao clicar em `Finish`{.action}, aparecerá o seu serviço na consola.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-finish.png){.thumbnail}


### Configuração

Para realizar uma replicação de um dos seus backups, aceda ao separador `Backup & Replication` situado em baixo à esquerda da consola.

Poderá consultar as suas tarefas de backup e deverá clicar em `Backup Copy`{.action}, situado na barra de ação na parte superior da consola, para começar a configuração.


![veeam cloud connect](images/veeam-cloud-connect-replicat.png){.thumbnail}

Primeiro, deverá dar um nome a esta nova tarefa. Poderá também escolher a frequência desta última.


![veeam cloud connect](images/veeam-cloud-connect-replicat-name.png){.thumbnail}

Ao clicar no botão `Add`{.action}, terá três escolhas detalhadas nesta [página](https://helpcenter.veeam.com/docs/backup/vsphere/backup_copy_vms.html?ver=95){.external}.

Neste exemplo, iremos replicar um backup.


![veeam cloud connect](images/veeam-cloud-connect-replicat-select.png){.thumbnail}

A seguir, escolha o diretório de armazenamento visto anteriormente.


![veeam cloud connect](images/veeam-cloud-connect-replicat-target.png){.thumbnail}

Para transferir o seu backup do seu servidor para a nossa infraestrutura, através da solução Veeam Cloud Connect, pode selecionar o modo direto ou utilizar o serviço WAN accelerator.

Consulte esta página para saber mais sobre o funcionamento do [WAN accelerator](https://helpcenter.veeam.com/docs/backup/vsphere/wan_hiw.html?ver=95){.external}.


![veeam cloud connect](images/veeam-cloud-connect-replicat-data.png){.thumbnail}

Também poderá programar os períodos durante os quais esta tarefa será executada.


![veeam cloud connect](images/veeam-cloud-connect-replicat-schedule.png){.thumbnail}

Ser-lhe-á apresentado um resumo e só precisará de clicar em `Finish`{.action} para finalizar a adição desta tarefa.


![veeam cloud connect](images/veeam-cloud-connect-replicat-finish.png){.thumbnail}

Se as condições de agendamento forem cumpridas, a nova tarefa começará a funcionar imediatamente

e poderá revê-la na página inicial.


![veeam cloud connect](images/veeam-cloud-connect-replicat-cloud.png){.thumbnail}


### Restauro

Para restaurar o seu backup, só precisa de clicar com o botão direito do rato na tarefa.

Poderá optar por restaurar a máquina virtual total, ou só alguns ficheiros.


![veeam cloud connect](images/veeam-cloud-connect-restore.png){.thumbnail}

Escolha a VM e o backup que quer restaurar.


![veeam cloud connect](images/veeam-cloud-connect-restore-select.png){.thumbnail}

De seguida, escolha o local de restauro (inicial ou diferente).


![veeam cloud connect](images/veeam-cloud-connect-restore-mode.png){.thumbnail}

Poderá indicar uma razão se quiser, e um resumo da operação aparecerá.


![veeam cloud connect](images/veeam-cloud-connect-restore-resume.png){.thumbnail}

Uma janela aparecerá na sua consola Veeam, indicando as tarefas em curso.

Poderá verificar, no seu vSphere, diferentes operações no momento do restauro.


![veeam cloud connect](images/veeam-cloud-connect-restore-done.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/){.external}.
