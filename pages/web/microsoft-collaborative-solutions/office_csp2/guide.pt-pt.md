---
title: Gerir um grupo de licenças Office 365 Revendedores (CSP2) OVHcloud
slug: encomendar_e_gerir_um_grupo_de_licencas_office_365_revendedor_csp2_ovh
excerpt: Saiba como subscrever e administrar um serviço Office 365 Revendedores (CSP2) na OVHcloud
section: Office
order: 03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 17/01/2023**

## Objetivo

O Office 365 Revendedores (CSP2) é um serviço que lhe permite beneficiar de diferentes tipos de licenças Microsoft 365 a preços preferenciais, para que possa revendê-las junto dos seus clientes.

**Saiba como subscrever e administrar um serviço Office 365 Revendedores (CSP2) na OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Dispor de um [MPN ID](https://learn.microsoft.com/partner-center/mpn-create-a-partner-center-account) (Microsoft Partner Network IDentifier) 
- Estar inscrito no programa CSP (Cloud Solution Provider) da Microsoft enquanto revendedor indireto na região em que exerce a sua atividade (por exemplo: "UE" para a Europa)

> [!warning]
>
> A partir de 01/07/2022, todos os serviços Office 365 revendedores (CSP2) que não dispõem de um MPN ID inscrito no programa "CSP revendedor indireto" são desativados pela Microsoft.
>
> Para qualquer nova subscrição, é agora obrigatório dispor de um MPN ID.
>

Se ainda não dispõe de um MPN ID, pode criar um (se é elegível para as condições Microsoft) seguindo a documentação oficial da Microsoft ["O que é o Microsoft Cloud Partner Program? "](https://docs.microsoft.com/partner-center/mpn-create-a-partner-center-account){.external}.

Para se inscrever como revendedor indireto, convidamo-lo a consultar a documentação Microsoft ["Inscrever-se no programa Fornecedor de soluções Cloud"](https://docs.microsoft.com/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

O MPN ID permite-lhe obter um backup das subscrições que encomendará através da Área de Cliente OVHcloud. Este cashback está sujeito a regras definidas pela Microsoft, em função dos volumes de subscrições que gerará.

## Instruções

### Encomendar um serviço Office 365 Revendedores

Para encomendar um serviço Office 365 Revendedores, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Depois de conectar, selecione `Sunrise`{.action} no painel superior e clique em `Office 365 Revendedores`{.action}.

- *Facultativo*: pode definir um **subdomínio personalizado** durante a criação de uma nova plataforma, selecionando a opção prevista para o efeito (sob reserva dos nomes disponíveis).
- Introduza o seu MPN ID previamente criado junto da Microsoft.
- Complete as informações de contacto do cliente final, estas são solicitadas para definir o gestor do grupo de licenças (*Tenant*) que vai criar.
- Na lista abaixo, adicione as licenças que deseja integrar ao seu grupo.
- Clique em `Encomendar`{.action} para finalizar.

> [!warning]
> Certifique-se da validade do endereço de e-mail indicado aquando da criação do seu grupo de licenças, pois este servirá para receber as informações de identificação para a plataforma Microsoft.
>

![office365](images/csp2-01.png){.thumbnail}

> [!warning]
> No que diz respeito aos produtos sujeitos a licenças, não é possível migrar um *Tenant* Office 365 revendedores de um identificador de cliente OVHcloud para outro. É necessário parar a subscrição na conta OVHcloud original e subscrever este tipo de licença na nova conta OVHcloud.
>

![office365](images/csp2-01.png){.thumbnail}

### Gerir o serviço Office 365 Revendedor

Depois de criado e disponível o serviço Office 365, poderá geri-lo a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

Para isso, aceda à secção `Sunrise`{.action}. No menu à esquerda, escolha o `Office 365 Revendedores`{.action} e selecione o serviço.

Surgem as seguintes informações:

- **Nome interno do serviço**: indica o nome do seu serviço. Isto só é visível a partir da Área de Cliente. Corresponde também ao *Tenant* (que contém o seu grupo de licenças) na Microsoft.
- **Nome de apresentação do serviço**: permite personalizar o nome de visualização do serviço na sua Área de Cliente.
- **Criado a**: indica a data de criação do serviço.
- **Portal de administração Microsoft**: ligação do portal Office que permite administrar as suas subscrições.
- A gestão da password do administrador do seu *Tenant* Microsoft faz-se diretamente a partir da interface de administração Microsoft. Não hesite em consultar [a documentação da Microsoft](https://support.microsoft.com/account-billing/reset-a-forgotten-microsoft-account-password-eff4f067-5042-c1a3-fe72-b04d60556c37).
- A gestão de domínios adicionais faz-se igualmente a partir da interface de administração da Microsoft. Consulte [a documentação da Microsoft](https://support.microsoft.com/office/connect-your-domain-to-office-365-cd74b4fa-6d34-4669-9937-ed178ac84515).

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Gerir as suas subscrições

A gestão das suas subscrições permite-lhe aumentar ou anular as licenças associadas ao seu grupo de subscrições. Pode visualizar os detalhes através de uma tabela:

- **ID**: cada tipo de licença comandada dispõe de um identificador (ID) único.
- **Estado**: corresponde ao estado da sua licença.
- **Nome da licença**: indica o tipo de licença subscrita.
- **Número de licenças**: indicar o número de licenças disponíveis.
- **Data de criação**: indicar a data de criação da assinatura do tipo de licença selecionado.
- **Última atualização**: indicar a data da última atualização (por exemplo, adição de uma licença) da assinatura.

O ícone <i class="icons-pen"></i>  permite modificar o número total de licenças da assinatura. O ícone <i class="icons-bin"></i>  permite cancelar a assinatura e todas as licenças.

> [!primary]
>
> Devem ser respeitadas condições particulares de utilização fornecidas pela Microsoft para as licenças Educação. Pode encontrar estes documentos oficiais em função da sua língua e região [aqui](https://www.microsoft.com/licensing/docs){.external}.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Gerir os utilizadores

Agora que dispõe de um número de licenças suficiente, deve gerir os utilizadores que as utilizarão. Esta parte efetua-se diretamente a partir do [portal de administração Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Para se conectar, deve introduzir o seu ID de utilizador bem como a palavra-passe enviada para o e-mail OVHcloud, confirmando a instalação do seu grupo de licenças. Estas informações devem ser enviadas para o endereço indicado aquando da criação do grupo de licenças.

## Saiba mais

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
