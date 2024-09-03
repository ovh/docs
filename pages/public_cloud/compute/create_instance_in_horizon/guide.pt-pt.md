---
title: 'Criar uma instância a partir da interface Horizon'
excerpt: 'Saiba como criar uma instância a partir da interface Horizon'
updated: 2024-09-03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

Tem a possibilidade de criar instâncias diretamente a partir da interface Horizon. Isto permite-lhe, por exemplo, criar múltiplas instâncias ou ainda configurar um grupo de segurança e aplicá-lo às suas instâncias.

**Saiba como criar uma instância a partir da interface Horizon.**

## Requisitos

- Dispor de um [projeto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) na sua conta OVHcloud.
- [Ter acesso à interface Horizon](/pages/public_cloud/compute/introducing_horizon). 

## Instruções

### Criar uma rede privada

Como regra geral, recomendamos que crie uma rede privada antes de criar uma instância. Poderá mais tarde associar esta rede à sua instância.

Para começar, aceda à interface Horizon. Se precisar de ajuda para realizar esta operação, consulte o [nosso manual](/pages/public_cloud/compute/introducing_horizon).

A seguir, clique em `Network`{.action} no menu à esquerda e, a seguir, em `Networks`{.action}.

![network](images/create-network.png){.thumbnail}

Clique em `Create Network`{.action}

![network](images/create-network-1.png){.thumbnail}

> [!tabs]
> 1. **Network (Rede)**
>>
>> **Network Name:** Introduza um nome para a sua rede.<br>
>> **Enable Admin State:** Deixe esta opção selecionada para ativar a rede.<br>
>> **Create Subnet:** Deixe esta opção selecionada para criar a sub-rede.<br>
>> **Availability Zone Hints:** Deixe a opção predefinida.<br><br>
>>![network](images/network_information.png){.thumbnail}<br>
>>
> 2. **Subnet (Sub-rede)**
>>
>> **Subnet Name:** Introduza um nome para a sua sub-rede.<br>
>> **Network Address:** Escolha um intervalo da rede privada. Por exemplo: `192.168.0.0/24`.<br>
>> **IP Version:** Deixe este valor para IPv4.<br>
>> **Gateway IP:** Opcional. Se não estiver definido, um endereço Gateway IP é automaticamente selecionado.<br>
>> **Disable Gateway:** Deixe esta opção desativada.<br><br>
>>![subnet](images/subnet_information.png){.thumbnail}<br>
>>
> 3. **Subnet Details (Detalhes da sub-rede)**
>>
>> **Enable DHCP:** Deixe esta opção ativada.<br>
>> **Allocation Pools:** Opcional. Pode especificar o intervalo no qual os endereços IP são selecionados.<br>
>> **DNS Name Servers:** Opcional. Pode especificar qualquer servidor de nomes DNS.<br>
>> **Host Routes:** Opcional. Pode especificar qualquer rota de host.<br><br>
>>![KVM](images/subnetdetails_information.png){.thumbnail}<br>
>>

### Criar uma instância

Na interface Horizon, clique em `Compute`{.action} no menu à esquerda e, a seguir, em `Instances`{.action}.

![createinstance](images/create-instance-step1.png){.thumbnail}

A nova página que se abre permite visualizar as instâncias atualmente em curso de criação. Para criar uma nova, clique no botão `Launch Instance`{.action}.

![createinstance](images/create-instance-step2.png){.thumbnail}

Deverá preencher as diferentes informações. Caso seja necessário, consulte a tabela abaixo para obter ajuda ao preencher os campos. Lembre-se de que esta tabela não é exaustiva.

**Details**

![createinstance](images/create-instance-step3.png){.thumbnail}

|Informação|Detalhes|
|---|---|
|Instance name|Especifique o nome pretendido para a instância que será lançada.|
|Description|Opcional. Adicione uma descrição, se necessário.|
|Availability zone|Deixe « nova » (escolha predefinida).|
|Count|Especifique o número de instâncias a criar.|

**Source**

![createinstance](images/create-instance-step4.png){.thumbnail}

|Informações|Detalhes|
|---|---|
|Select Boot Source|Clique na seta pendente para selecionar a origem de lançamento de uma instância (por exemplo, « Image » ou « *Instance snapshot* (Instantâneo de instância) »).|
|Create New Volume|Pode selecionar esta opção se pretender criar um volume com a imagem do sistema operativo especificada a ser copiada.|
|Volume size (GB)|Se optou por criar um volume, deixe o sistema determinar o tamanho em seu lugar.|
|Delete Volume on Instance Delete|Pode conservar a opção predefinida **No**. Se **Yes** for selecionado, quando a instância for eliminada o volume também será eliminado.|
|Image name|Selecione a imagem da instância (apenas em caso de arranque a partir de uma imagem) clicando na seta para cima junto à imagem à sua escolha. No nosso exemplo, utilizamos uma seleção de CentOS 7.|
|Instance snapshot|Escolha um instantâneo de uma instância (apenas em caso de arranque a partir de uma snapshot) clicando na seta para cima ao lado da imagem de instantâneo de uma instância à sua escolha|.

**Flavor**

![createinstance](images/create-instance-step5.png){.thumbnail}

Estão disponíveis *flavors* pré-construídos para si, selecione o *flavor* à sua escolha no separador `Available`.

**Networks**

![createinstance](images/create-instance-step6.png){.thumbnail}

|Informações|Detalhes|
|---|---|
|Network|Selecione a(s) rede(s) na lista de redes disponíveis para a instância que pretende criar |
|Ext-Net|Representa a rede pública.|
|Mynewnetwork|Representa a rede privada criada no início deste manual.|

**Security Groups (Grupos de segurança)**

![createinstance](images/create-instance-step7.png){.thumbnail}

Para obter mais informações, consulte [este manual](/pages/public_cloud/compute/setup_security_group).

**Key Pairs (Par de chaves)**

> [!warning]
> 
> Embora o campo "Key Pair" não seja obrigatório na interface Horizon aquando da criação de uma instância, o registo de uma chave SSH é absolutamente necessário para poder ligar-se a uma instância. Sem chave SSH, será obrigado a reiniciar a instância em modo rescue para poder criar uma palavra-passe ou adicionar uma chave SSH ao ficheiro adequado (para mais informações, consulte o guia [Alterar a chave SSH em caso de perda](/pages/public_cloud/compute/replacing_lost_ssh_key#instrucoes)).
>

![createinstance](images/create-instance-step8.png){.thumbnail}

Nesta secção, você pode criar um par de chaves, importar um par de chaves ou usar um par de chaves existente.

Para mais informações sobre a criação de uma chave SSH, consulte [este manual](/pages/public_cloud/compute/public-cloud-first-steps#create-ssh).


> [!tabs]
> **+ Create Key Pair**
>>
>> Para criar um par de chaves, clique no botão `+ Create Key Pair`{.action}. Tenha em conta que, com esta opção, devem ser tomadas etapas adicionais antes de se poder ligar à instância, sobretudo se utilizar o software Putty para se ligar à sua instância. Consulte [esta secção](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) no respetivo guia.
>>
>> **Key Pair Name:** Introduza um nome para a sua chave.<br>
>> **Key Type:** Clique na `seta suspensa`{.action} e selecione `SSH Key`{.action}.<br>
>> De seguida, clique em `Create Keypair`{.action} para iniciar a criação da chave.<br>
>>
>> Depois de criado o par de chaves, clique em `Copy Private Key to Clipboard`{.action} e, a seguir, em `Done`{.action}.<br><br>
>>![create ssh key](images/create-ssh-key-1.png){.thumbnail}<br>
>>
>> Depois de fazer isso, a chave recém-criada será automaticamente selecionada. Clique em `Launch Instance`{.action} para iniciar a criação da sua instância.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>
>>
> **Import Key Pair (Importar um par de chaves)**
>>
>> Se preferir importar uma chave SSH criada anteriormente, clique no botão "Importação de Chave Pair"{.action}.
>>
>> **Key Pair Name:** Introduza um nome para a sua chave.<br>
>> **Key Type (Tipo de chave):** Clique na `seta suspensa`{.action} e selecione `SSH Key`{.action}.<br>
>> **Load Public Key from a file (Carregar chave pública de um ficheiro):** Clique em `Browse`{.action} para especificar a localização da chave pública no seu computador.<br>
>> **Chave pública:** Copie e cole a sua chave pública aqui.<br>
>> Clique em ‘Importação Chave Pair`{.action} para importar a chave.<br><br>
>>![import key pair](images/import-ssh-key.png){.thumbnail}<br>
>>
>> Quando a operação for concluída, a chave importada será automaticamente selecionada. Clique em `Launch Instance`{.action} para iniciar a criação da sua instância.<br><br>
>>
>>![create instance](images/launch-instance.png){.thumbnail}<br>

**Outras opções**

Atenção: estas opções não são obrigatórias para a criação de uma instância de base. Se pretender explorar ainda mais estas opções, consulte a [documentação OpenStack oficial](https://docs.openstack.org/horizon/latest/user/launch-instance.html){.external}.

|Informações|Detalhes|
|---|---|
|Custom script source|Especifique a origem entre uma « direct entry » ou um « file ».|
|Script data|Introduza o código de script no campo de entrada (máximo de 16KB).|
|Script file|Clique em `Browse`{.action} para selecionar o script de pós-instalação.|
|Disk partitioning|Escolha entre « automatic » e « manual ».|
|Configuration disk|Configure o OpenStack para escrever metadados num disco de configuração específico que ficará associado à Instância de lançamento.|

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.