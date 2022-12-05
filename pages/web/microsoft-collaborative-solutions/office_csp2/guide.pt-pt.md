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

**Última atualização: 17/06/2022**

## Objetivo

O Office 365 Revendedores (CSP2) é um serviço que lhe permite beneficiar de diferentes tipos de licenças Microsoft 365 a preços preferenciais, para que possa revendê-las junto dos seus clientes.

**Saiba como subscrever e administrar um serviço Office 365 Revendedores (CSP2) na OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- Dispor de um MPN ID (Microsoft Partner Network Identifier)
- Estar inscrito no programa CSP (Cloud Solution Provider) da Microsoft enquanto revendedor indireto na região em que exerce a sua atividade (por exemplo: "UE" para a Europa)

> [!warning]
>
> A partir de 01/07/2022, todos os serviços Office 365 revendedores (CSP2) que não disponham de um MPN ID inscrito no programa "CSP revendedor indireto" serão desativados pela Microsoft.
>
> Dispor de um MPN ID é agora obrigatório para qualquer nova subscrição.
>

Se ainda não dispõe de um MPN ID, pode criar um (se é elegível para as condições da Microsoft) seguindo a [documentação oficial da Microsoft](https://docs.microsoft.com/pt-pt/partner-center/mpn-create-a-partner-center-account) {.external}.

Para se inscrever como revendedor indireto, convidamo-lo a consultar esta outra [documentação oficial da Microsoft](https://docs.microsoft.com/pt-pt/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller) {.external}.

> [!success]
>
> O "MPN ID" permite-lhe obter um backup das subscrições que encomendará através da Área de Cliente OVHcloud. Este cashback está sujeito a regras definidas pela Microsoft, em função dos volumes de subscrições que gerará.
>

## Instruções

### Encomendar um serviço Office 365 Revendedores

Para encomendar um serviço Office 365 Revendedores, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Depois de conectar, selecione `Sunrise`{.action} no painel superior e clique em `Office 365 Revendedores`{.action}.

- Introduza o seu MPN ID previamente criado junto da Microsoft.
- Complete as informações de contacto do cliente final, estas são solicitadas para definir o gestor do grupo de licenças (Tenant) que vai criar.

> [!primary]
>
>  Também pode definir um **subdomínio personalizado** aquando da criação de uma nova plataforma, selecionando a pequena casa prevista para este efeito (sob reserva dos nomes disponíveis).
>

- Na lista abaixo, indique as licenças que deseja adicionar ao seu grupo.
- Clique em `Encomendar`{.action} para finalizar a sua encomenda.

> [!warning]
>
> Certifique-se da validade do endereço de e-mail indicado aquando da criação do seu grupo de licenças, pois esta receberá as informações de identificação na plataforma Microsoft.
>

![office365](images/csp2-01.png){.thumbnail}

#### Caso específico das delegações

- Se já dispõe de um serviço Office 365 CSP2 na Microsoft, tem a possibilidade de delegar a sua administração na OVHcloud. Assim, poderá adicionar subscrições suplementares diretamente a partir da sua Área de Cliente OVHcloud. Aquando da encomenda de um novo grupo de licenças, deverá escolher "Delegação de uma plataforma criada previamente na Microsoft`" e especificar com exatidão o **Tenant Office 365 existente** que poderá encontrar no seu portal Microsoft, bem como o seu MPN ID.

- Se já passou por um outro fornecedor que não a OVHcloud para o seu Office 365 revendedores, poderá igualmente delegar a administração à OVHcloud, mas deverá quebrar previamente a ligação com o seu antigo fornecedor.

- Será necessária uma dupla validação para finalizar o aparecimento da associação na sua Área de Cliente OVHcloud.

- Uma vez subscritas as licenças no endereço delegado, estas estarão disponíveis no seu [portal de administração Microsoft](https://portal.office.com/Admin/Default.aspx){.external}. Deverá então substituir as suas antigas licenças no seu [portal de administração Microsoft](https://portal.office.com/Admin/Default.aspx){.external} pelas licenças OVHcloud, e rescindir as suas antigas licenças para não continuar a pagá-las em duplicado.

- Tranquilize-se, se dispõe de licenças indisponíveis para compra na OVHcloud, poderá perfeitamente conservar estas licenças ativas na Microsoft.

> [!warning]
> Como se trata de produtos licenciados, não é possível migrar um "Tenant" Office 365 revendedores de um identificador de cliente OVHcloud para outro.
>

### Gerir o serviço Office 365 Revendedor

Depois de criado e disponível o serviço Office 365, poderá geri-lo a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

Para isso, aceda à secção `Sunrise`{.action}. No menu à esquerda, escolha o `Office 365 Revendedores`{.action} e selecione o serviço.

Surgem as seguintes informações:

- **Nome interno do serviço**: indica o nome do seu serviço. Isto só é visível a partir da Área de Cliente. Corresponde também ao *Tenant* (que contém o seu grupo de licenças) na Microsoft.
- **Nome de apresentação do serviço**: permite personalizar o nome de visualização do serviço na sua Área de Cliente.
- **Criado a**: indica a data de criação do serviço.
- **Portal de administração Microsoft**: ligação do portal Office que permite administrar as suas subscrições.
- **Reinicializar a password administrador**: permite alterar a palavra-passe de ligação ao portal de administração Microsoft.

![office365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Configurar automaticamente um domínio alojado na OVHcloud

A OVHcloud disponibiliza uma ferramenta que facilita a configuração da zona DNS do seu domínio. Pode configurar automaticamente os seus nomes de domínio que utilizam a zona DNS da OVHcloud para que possam funcionar com as seguintes soluções:

- Exchange Online;
- Skype;
- Intune.

Para realizar esta operação, deve escolher o domínio em questão na lista pendente e selecionar as soluções desejadas. Criaremos então os campos DNS adequados na zona DNS da OVHcloud do domínio.

> [!warning]
> Para que a configuração seja funcional, deve assegurar-se de que utiliza corretamente os servidores DNS da OVHcloud para os nomes de domínio em causa. Não hesite em consultar o nosso guia [Alterar os servidores DNS de um nome de domínio OVHcloud](https://docs.ovh.com/pt/domains/partilhado_generalidades_sobre_os_servidores_dns/).
>

![office365](images/sunrise_office365_CSP2_automatic_domain_configuration.png){.thumbnail}

### Gerir as suas subscrições

A gestão das suas subscrições permite-lhe aumentar ou anular as licenças associadas ao seu grupo de subscrições. Pode visualizar os detalhes através de uma tabela:

- **ID**: cada tipo de licença comandada dispõe de um identificador (ID) único.
- **Estado**: corresponde ao estado da sua licença.
- **Nome da licença**: indica o tipo de licença subscrita.
- **Número de licenças**: indicar o número de licenças disponíveis.
- **Data de criação**: indicar a data de criação da assinatura do tipo de licença selecionado.
- **Última atualização**: indicar a data da última atualização (por exemplo, adição de uma licença) da assinatura.

`O ícone em forma de lápis` permite modificar o número total de licenças da assinatura. `O ícone em forma de caixote do lixo` permite cancelar a assinatura e todas as licenças.

> [!primary]
>
> Devem ser respeitadas condições particulares de utilização fornecidas pela Microsoft para as licenças Educação. Pode encontrar estes documentos oficiais em função da sua língua e região [aqui](http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=2&Keyword=AcademicQualEdUserDef){.external}.
>

![office365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Gerir os utilizadores

Agora que dispõe de um número de licenças suficiente, deve gerir os utilizadores que as utilizarão. Esta parte efetua-se diretamente a partir do [portal de administração Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Para se conectar, deve introduzir o seu ID de utilizador bem como a palavra-passe enviada para o e-mail OVHcloud, confirmando a instalação do seu grupo de licenças. Estas informações devem ser enviadas para o endereço indicado aquando da criação do grupo de licenças.

## Saiba mais

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
