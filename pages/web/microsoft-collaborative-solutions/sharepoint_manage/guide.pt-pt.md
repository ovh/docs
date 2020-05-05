---
title: 'Ativação e gestão do seu SharePoint OVHcloud'
slug: ativacao_e_gestao_do_seu_sharepoint_ovh
legacy_guide_number: 2249
excerpt: 'Saiba como subscrever e configurar uma plataforma SharePoint.'
section: Sharepoint
order: 1
---

**Última atualização: 30/04/2020**

## Sumário

As ofertas SharePoint disponibilizam um espaço de armazenamento partilhado ao seu trabalho colaborativo.

**Saiba como encomendar e configurar uma plataforma SharePoint.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Ter previamente subscrito uma plataforma [Hosted Exchange](https://www.ovh.pt/emails/hosted-exchange/){.external} para encomendar uma plataforma SharePoint associada.

## Instruções

### 1.ª etapa: Encomendar uma plataforma SharePoint

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), secção «Web». Na barra à esquerda, clique em `Encomendar`{.action} e depois em `Sharepoint`{.action}.

Vão ser-lhe propostos dois tipos de plataformas:

| Sharepoint associado                                                                                                                      	| Sharepoint standalone                                                                                                                                                                       	|
|-----------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| ![sharepoint](images/order-manage-sharepoint-02.png){.thumbnail}                                                                        	| ![sharepoint](images/order-manage-sharepoint-03.png){.thumbnail}                                                                                                                            	|
| Se dispõe de uma plataforma Hosted Exchange na Área de Cliente, pode associar as suas contas a uma plataforma SharePoint. Assinale as contas às quais deseja associar uma licença SharePoint. 	| Se não dispõe de uma plataforma Hosted Exchange na OVHcloud, ou se deseja uma plataforma SharePoint independente, subscreva uma plataforma SharePoint standalone. <br>Defina o número de licenças que pretende, em função do número de utilizadores.	|

De seguida, clique em `Subscrever o serviço`{.action} para finalizar a encomenda.

### 2.ª etapa: Ativar a plataforma SharePoint

Depois de validar e pagar a encomenda, receberá no seu endereço de e-mail principal uma mensagem de confirmação a indicar que a plataforma se encontra preparada para a configuração.

Para consultar a mensagem, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), clique no seu perfil (no topo da página, à direita) e, a seguir, nas suas iniciais. Clique no separador `E-mails recebidos`{.action} e procure o e-mail com o assunto:

> **\[xx-11111-ovh] Configurar o serviço Microsoft SharePoint!**

Para dar início à configuração, aceda à secção `Web` da Área de Cliente. Na barra à esquerda, clique em `Microsoft`{.action} e em `SharePoint`{.action}. Por fim, selecione a plataforma SharePoint em questão.

Defina o nome da plataforma no campo «URL do SharePoint» e clique em `Validar o URL`{.action}.

![sharepoint](images/order-manage-sharepoint-04.png){.thumbnail}  

> [!warning]
>
> Uma vez validado, o nome da plataforma não pode ser alterado.

### 3.ª etapa: Configuração da plataforma SharePoint

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) e dirija-se à secção `Web`. Na barra à esquerda, clique em `Microsoft`{.action} e em `SharePoint`{.action}. Por fim, selecione a plataforma SharePoint em questão.

#### **SharePoint standalone**

Esta plataforma é independente. Assim, é preciso associar-lhe um domínio antes de se proceder à configuração dos utilizadores.

##### ***Adicionar um domínio***

Clique no separador `Domínios` e em `Adicionar um domínio`{.action}. Selecione um domínio que já possua na Área de Cliente ou introduza um domínio externo gerido por si. 

- Se optar por um domínio presente na Área de Cliente, ele será validado de forma automática, pelo que só restará configurar os utilizadores.
 
- Se optar por um domínio externo, terá de adicionar um registo CNAME na zona DNS do domínio, a fim de o validar na plataforma SharePoint. Para indicar o registo CNAME, clique no ícone de informação junto à menção «Validação de domínio em curso», como ilustrado abaixo.


![sharepoint](images/order-manage-sharepoint-05.png){.thumbnail}

##### ***Configurar um utilizador***

Aceda ao separador `Utilizador`. À direita da conta, clique em `...`{.action} e, de seguida, em `Modificar a conta`{.action}.

![sharepoint](images/order-manage-sharepoint-06.png){.thumbnail} 

Na janela que se abrir, introduza as informações do utilizador e clique em `Validar`{.action}.

Para obter direitos de administrador na plataforma SharePoint, clique novamente em `...`{.action} à direita da conta e, depois, em `Ativar os direitos de administrador`{.action}.

#### **Sharepoint associado**

Como o nome indica, esta plataforma está associada à plataforma Exchange que escolheu aquando da encomenda. Por isso, não precisa de lhe associar um domínio.

##### ***Configurar um utilizador***

Aceda ao separador `Utilizadores` da plataforma, de modo a visualizar o conjunto das contas Exchange que podem beneficiar de uma licença SharePoint.

![sharepoint](images/order-manage-sharepoint-07.png){.thumbnail} 

A coluna `Conta ativada` indica se a conta da plataforma Exchange beneficia de uma licença SharePoint. 

> [!primary]
>
> Se deseja ativar uma licença numa conta, clique em `...`{.action} à direta da conta e, a seguir, em `Ativar SharePoint`{.action}.

Uma conta que beneficie de uma licença não dispõe, de forma predefinida, de direitos de administrador. Para os ativar, clique em `...`{.action} à direita da conta e, depois, em `Ativar os direitos de administrador`{.action}.

![sharepoint](images/order-manage-sharepoint-08.png){.thumbnail} 

#### **Restabelecer os direitos de administrador**

Nos dois tipos de plataformas SharePoint, encontrará o botão `Restabelecer os direitos de administrador`{.action} no separador `Utilizador`. Esse botão permite a aplicação dos direitos de administrador em caso de má manipulação a partir da interface SharePoint.

![sharepoint](images/order-manage-sharepoint-09.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.