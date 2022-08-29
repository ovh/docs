---
title: Ativação da encriptação das máquinas virtuais (VM Encryption)
slug: vm-encrypt
excerpt: Saiba como ativar a encriptação das suas máquinas virtuais
section: Funcionalidades VMware vSphere
order: 08
---

**Última atualização: 18/08/2020**

## Objetivo

Este guia explica como proceder à ativação do VM Encryption no serviço Private Cloud da OVHcloud, através de uma estratégia de armazenamento com recurso a um KMS (*Key Management Server*) externo.

**Saiba como ativar a encriptação das suas máquinas virtuais com o VM Encryption.**

## Requisitos

- Dispor do serviço [Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/){.external}.
- Dispor de um KMS externo compatível com **[KMIP](https://en.wikipedia.org/wiki/Key_Management_Interoperability_Protocol_(KMIP)){.external} 1.1** e presente na [matriz de compatibilidade](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=kms&details=1&feature=293&page=1&display_interval=500&sortColumn=Partner&sortOrder=Asc){.external} VMware.
- Aceder à interface de gestão vSphere.
- Dispor de máquinas virtuais com uma versão hardware 13 (mínimo).

## Instruções

### Obter o thumbprint do certificado do Key Management Server (KMS)

Em função do KMS, pode ligar-se ao servidor através do seu browser. De seguida, clique em `View Certificate`{.action} e em `Thumbprint`{.action}.

![Thumbprint do certificado](images/certificate_thumbprints_01.png){.thumbnail}

![Thumbprint do certificado](images/certificate_thumbprints_02.png){.thumbnail}

Então extraia o valor da linha `SHA1 Fingerprint`.

Apresentamos abaixo outro método com OpenSSL:

```shell
openssl s_client -connect 192.0.2.1:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
```

Aqui, trata-se do valor à direita do sinal de igual:


```shell
> SHA1 Fingerprint=7B:D9:46:BE:0C:1E:B0:27:CE:33:B5:2E:22:0F:00:84:F9:18:C6:61
```

### Registar o seu KMS

#### Através da Área de Cliente da OVHcloud

Na Área de Cliente, aceda à secção `Hosted Private Cloud`. Clique em `Private Cloud`{.action} na barra de serviços à esquerda e selecione o serviço Private Cloud correspondente.

Na página principal do serviço, clique em `Segurança`{.action}.

![Área de Cliente OVHcloud](images/vm-encrypt_nupanel_01.png){.thumbnail}

Mais abaixo na página, encontrará a secção «**Virtual Machine Encryption Key Management Servers**». Clique no botão `Adicionar um novo servidor KMS`{.action}.

![server KMS](images/vm-encrypt_manager_03.png){.thumbnail}

Na nova janela que se abrir, introduza as seguintes informações:

* o endereço IP do KMS;
* o SSLThumbprint do KMS obtido anteriormente.

Clique na caixa para validar esta documentação e, então, em `Avançar`{.action}. 

![server KMS](images/vm-encrypt_manager_04.png){.thumbnail}

Uma janela vai exibir a progressão da tarefa.

#### Com a API OVHcloud

As funções de encriptação podem ser ativadas por meio da API OVHcloud.

De modo a obter o seu «serviceName», utilize o comando seguinte:

> [!api]
>
> @api {GET} /dedicatedCloud
>

Para verificar se a encriptação ainda não foi ativada, utilize este comando:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/vmEncryption
>

```shell
>     "state": "disabled"
```


A seguir, efetue o registo do KMS:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/kms
>

A fim de realizar esta operação, precisará das seguintes informações:

* o «serviceName» obtido anteriormente;
* o endereço IP do KMS;
* o SSLThumbprint do KMS obtido anteriormente.

### Adicionar o KMS ao vCenter

#### Sobre esta secção

**O vCenter Server cria um cluster KMS quando é adicionada a primeira instância KMS.** 

- Quando adicionar o KMS, será convidado a definir este cluster como predefinido. No entanto, poderá modificá-lo mais tarde. 
- Depois de o vCenter ter criado o primeiro cluster, poderá adicionar novas instâncias KMS do mesmo fornecedor. 
- Poderá configurar o cluster com uma única instância KMS.
- Se o seu ambiente é compatível com as soluções KMS de diferentes fornecedores, poderá adicionar vários clusters KMS. 
- Se o seu ambiente contém vários clusters KMS e o cluster predefinido for eliminado, terá de definir outro. Ver «Definir o cluster KMS predefinido».

#### Procedimento

Comece por se ligar à sua Private Cloud através do vSphere Web Client. Percorra a lista de inventário e selecione o vCenter em causa. Clique em «Gerir» e em «Key Management Servers». Clique em `Adicionar KMS`{.action}, especifique os dados KMS no assistente que se abrir e clique em `OK`{.action}.
Valide o certificado clicando em `Confiar`{.action}.

![Adicionar KMS](images/vm-encrypt_01.png){.thumbnail}

Escolha as opções seguintes:

|Nome da opção|Descrição|
|---|---|
|«KMS cluster»|Selecione «Criar novo cluster» para obter um novo. Se já existir um cluster, poderá escolhê-lo.|
|«Cluster name»|Nome do cluster KMS. Poderá precisar deste nome para se ligar ao KMS caso o vCenter se encontre indisponível. O nome do cluster é muito importante por ser único e conter uma nota a esse respeito.|
|«Server alias»|Alias do KMS. Poderá precisar deste alias para se ligar ao KMS caso o vCenter se encontre indisponível.|
|«Server address»|Endereço IP ou FQDN do KMS.|
|«Server port»|Porta pela qual o servidor vCenter se liga ao KMS. A porta KMIP padrão é 5696. Pode ser diferente se o KMS de outro fornecedor estiver configurado numa porta específica.|
|«Proxy address»|Deixar este campo vazio.|
|«Proxy port»|Deixar este campo vazio.|
|«User name»|Certos fornecedores de KMS permitem que os utilizadores isolem as chaves de encriptação utilizadas por diferentes utilizadores ou grupos. Para isso, especificam um nome de utilizador e uma palavra-passe. Só especifique um nome de utilizador se o seu KMS suportar esta funcionalidade e se pretender utilizá-la futuramente.|
|«Password»|Certos fornecedores de KMS permitem que os utilizadores isolem as chaves de encriptação utilizadas por diferentes utilizadores ou grupos. Para isso, especificam um nome de utilizador e uma palavra-passe. Só especifique uma palavra-passe se o seu KMS suportar esta funcionalidade e se pretender utilizá-la futuramente.|


#### Importação do certificado KMS

A maioria dos fornecedores de KMS precisam de um certificado para [estabelecer uma ligação segura](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.security.doc/GUID-0212CEF2-7871-4E00-ADF2-0C71401D5E1A.html){.external} com o vCenter.

A partir do vCenter onde adicionou o servidor KMS, selecione este último. Em «Todas as opções», clique em `Estabelecer uma relação de confiança com o KMS`{.action}.

> [!warning]
>
> Assegure-se de que o certificado não está encriptado com uma palavra-passe quando o descarregar a partir do KMS. Por exemplo: se criar um utilizador, crie-o sem palavra-passe e descarregue o certificado para o utilizador KMS.
> 

![Importação do certificado KMS](images/vm-encrypt_02.png){.thumbnail}

#### Verificar se o KMS está configurado

Verifique se o «**Connection Status**» correspondente ao KMS se encontra no modo «Normal».

![Verificar o estado da ligação](images/vm-encrypt_03.png){.thumbnail}

#### Modificar a política de armazenamento do «VM Encryption Storage»

Crie uma máquina virtual. A seguir, faça clique com o botão direito sobre ela. Clique em `VM Policies`{.action} e em `Edit VM Storage Policies`{.action}.

![VM Encryption Storage](images/vm-encrypt_04.png){.thumbnail}

Selecione os ficheiros da máquina virtual e os outros discos rígidos a serem encriptados.

![VM Encryption Storage](images/vm-encrypt_05.png){.thumbnail}

Certifique-se de que as tarefas foram realizadas sem erros.

> [!primary]
>
> Se o KMS não estiver configurado corretamente e houver falhas na troca de chaves entre o vCenter e o KMS, ocorrerá um erro «RuntimeFault» na tarefa e surgirá a mensagem «Cannot generate key».
>

#### Encriptação do vMotion

No que diz respeito ao vMotion, a encriptação ocorre ao nível da máquina virtual. São utilizadas chaves de encriptação de 256 bits para a sincronização.

A encriptação do tráfego vMotion ocorre ao nível do núcleo da máquina virtual, com o algoritmo amplamente utilizado AES-GCM (Advanced Encryption Standard-Galois Counter Mode).

De seguida, modifique a máquina virtual e clique em `VM Options`{.action}.

Deve selecionar as opções caso o vMotion tenha de ser encriptado. Há três políticas para um vMotion encriptado:

|Estado|Descrição|
|---|---|
|Disabled|Desativado.|
|Opportunistic|Só há encriptação se for compatível com o host-fonte e o host-alvo ESXi. Caso contrário, o vMotion não será encriptado.|
|Required|Será utilizada a encriptação.|

![Encriptação do vMotion](images/vm-encrypt_06.png){.thumbnail}

A deslocação das máquinas entre os hosts é efetuada por meio da troca de chaves únicas, que são geradas e servidas pelo servidor vCenter, em vez do KMS.

#### Verificação da configuração

![Verificação da configuração ](images/vm-encrypt_07.png){.thumbnail}

![Verificação da configuração ](images/vm-encrypt_08.png){.thumbnail}

![Verificação da configuração ](images/vm-encrypt_09.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
