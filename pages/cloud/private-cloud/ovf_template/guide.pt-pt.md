---
title: 'Usar um template OVF Windows e SQL Server'
excerpt: 'Saiba como usar um template Windows e SQL Server'
updated: 2020-10-12
---

**Última atualização: 02/07/2018**

## Sumário

A OVH disponibiliza templates Windows e SQL server (em formato OVF) que pode usar diretamente a partir do seu vSphere thick client (versão 5.5 e 6.0) ou do web client (Flash e HTML 5 na versão 6.5).

**Este guia explica onde encontrar os recursos e como proceder à utilização.**

> [!primary]
> 
> Encontre nesta [página](https://www.ovh.pt/private-cloud/opcoes/imagens-licencas.xml){.external} os preços das imagens disponibilizadas pela OVH.
>

## Requisitos

- Ter acesso ao web client ou ao thick client, consoante a versão utilizada.
- [Ter ativado as licenças Windows](/pages/cloud/private-cloud/manager_ovh_private_cloud#windows-licence){.external} na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} (separador `Licença Windows`{.action} do datacenter). 

## Instruções

### Obter o URL do template OVF

No browser, vá á página inicial da sua Private Cloud e clique em `OVH Template`{.action}.

![Nome da imagem](images/gatewayssl.png){.thumbnail}

No ecrã `OVH Templates`, pode aceder às informações relativas aos templates Windows e SQL disponíveis. 

Depois de escolher o template desejado, vai abrir-se uma janela com ligações a que poderá recorrer para usar o template, em função da sua versão do vSphere.

![Nome da imagem](images/copylink.png){.thumbnail}

### Usar o template OVF

Quando estiver conectado ao web client vSphere, vá à página `Hosts and clusters`{.action}. Clique com o botão direito do rato sobre o seu datacenter e clique em `Deploy OVF template...`{.action}:

![Nome da imagem](images/selectdeploy.png){.thumbnail}

Quando o menu de contexto se abrir, pode dar início à configuração do template. Na primeira etapa, é preciso adicionar a ligação que obteve anteriormente:

![Nome da imagem](images/puturl.png){.thumbnail}

A etapa seguinte permite-lhe escolher o datacenter:

![Nome da imagem](images/selectdatacenter.png){.thumbnail}

De seguida, selecione o cluster no qual a máquina virtual vai ser implementada:

![Nome da imagem](images/selectcluster.png){.thumbnail}

Esta página apresenta todos os pormenores do template, nomeadamente a palavra-passe definida de forma padrão.
 Por razões de segurança, é importante que a altere assim que fizer a primeira conexão:

![Nome da imagem](images/detailstemplate.png){.thumbnail}

Escolha o datastore no qual a máquina virtual vai ser armazenada, bem como o formato do disco:

![Nome da imagem](images/selectdatastore.png){.thumbnail}

Agora deve escolher a rede que será utilizada.

![Nome da imagem](images/selectnetwork.png){.thumbnail}

A configuração está quase concluída. Agora tem acesso a um resumo da configuração desejada:

![Nome da imagem](images/resume.png){.thumbnail}

Depois de ter clicado em `Finish`{.action}, é criada uma tarefa que lhe permite acompanhar a implantação:

![Nome da imagem](images/startdeploy.png){.thumbnail}

Quando a operação for concluída, pode fechar a janela.

Agora vai encontrar a nova máquina virtual no seu inventário.

![Nome da imagem](images/inventory.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.