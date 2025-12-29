---
title: Adicionar um domínio a uma plataforma de e-mail
excerpt: Saiba como adicionar um domínio à sua plataforma Exchange ou E-mail Pro
updated: 2025-04-28
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Objetivo

Adicionar um domínio a um serviço Exchange é indispensável para poder utilizar as suas contas incluídas neste último. Também é possível adicionar vários domínios a um serviço Exchange ou E-mail Pro.

**Saiba como adicionar um domínio à plataforma Exchange ou E-mail Pro.**

## Requisitos

- Dispor de uma solução [Exchange](/links/web/emails) ou [Email Pro](/links/web/email-pro).
- Dispor de um ou vários domínios.
- Ter a possibilidade de alterar a configuração do domínio [zona DNS](/pages/web_cloud/domains/dns_zone_edit).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Aceder à gestão do seu serviço

> [!tabs]
> **Exchange**
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
>> 1. Aceda à secção `Web Cloud`{.action}.
>> 1. Na rubrica `MICROSOFT`, clique em `Exchange`{.action}.
>> 1. Selecione a plataforma em causa.
>>
> **Email Pro**
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
>> 1. Clique no separador `Web Cloud`{.action}.
>> 1. Clique em `Email Pro`{.action}.
>> 1. Selecione a plataforma em causa.
>>

### Adicionar um domínio

1. Clique no separador `Domínios associados`{.action} da sua plataforma Exchange ou E-mail Pro.
1. Aparecerá uma tabela com os domínios atualmente associados ao serviço.
1. Clique no botão `Adicionar um domínio`{.action}.

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail .w-600}

> [!warning]
>
> Por predefinição, todas as contas de e-mail de uma plataforma estão interligadas. Todos os endereços criados no serviço de e-mail poderão ver todos os endereços desse serviço no diretório, incluindo aqueles que possuem um nome de domínio diferente. Para desassociar a apresentação dos domínios, é necessário encomendar outra plataforma [Exchange ou Email Pro](/links/web/emails) para o(s) domínio(s) em questão.
>

Na janela de adição de domínio:

- **selecionar um domínio da lista**: encontrará na lista os nomes de domínio que tem a gestão completa (ou, no mínimo, a gestão da zona DNS) na sua Área de Cliente OVHcloud.

- **introduzir um nome de domínio não gerido pela sua conta OVHcloud**: para que o serviço possa ser configurado, deverá poder modificar a configuração do domínio, mais precisamente a sua zona DNS.

Depois de escolher, clique no botão `Seguinte`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail .w-600}

A nova janela apresenta informações relativas à configuração dos modos.

- **Se escolheu um domínio gerido pela OVHcloud**, pode escolher entre as duas opções.
    - **Configuração recomendada**: a sua zona DNS será configurada automaticamente. Para usar os registos MX, SPF, DKIM e SRV, basta que não tenha uma configuração específica na sua zona DNS.
    - **Configuração personalizada**: apenas para usar se já configurou um serviço de e-mail no seu domínio. Pode escolher os elementos que lhe interessam.
        - Se pretender utilizar um serviço de e-mail privado ou externo na OVHcloud como complemento desta plataforma de e-mail, introduza o nome do host do servidor de e-mail no quadro `URL do servidor de e-mail de destino`.
        - *Configurar o registo MX automaticamente*: permite a introdução automática dos servidores de receção OVHcloud (aplica-se a todas as ofertas de e-mail OVHcloud).
       - *Configurar o registo SPF automaticamente*: permite uma introdução automática do registo SPF para que os servidores de envio de e-mails da OVHcloud possam reencaminhar os seus e-mails. Este registo é válido para o conjunto das ofertas de e-mail OVHcloud.
        - *Configurar o registo DKIM automaticamente*: permite a introdução automática dos registos necessários para autenticar os seus envios de e-mails.
        - *Configurar o registo SRV automaticamente*: permite ao software de correio eletrónico configurar automaticamente as contas Exchange no seu domínio.

![Add Domain](images/add_domain_exchange_step2-1b.png){.thumbnail .w-600}

- **Se indicou um domínio não gerido pela sua conta OVHcloud**, isso significa que o domínio, em especial a sua zona DNS, não é gerido a partir da Área de Cliente OVHcloud. Também pode ser registado em outro agente de registo. Será então necessário proceder à configuração diretamente na sua interface de gestão, qualquer que seja a escolha que se faça a seguir.
    - **Configuração recomendada**: apenas para utilização com as ofertas de e-mail OVHcloud.<br><br>
    - **Configuração personalizada**: se pretender utilizar um serviço de e-mail privado ou externo à OVHcloud como complemento desta plataforma de e-mail, introduza o nome do host do servidor de e-mail no quadro `URL do servidor de e-mail de destino`.

![Add Domain](images/add_domain_exchange_step2-2.png){.thumbnail .w-600}

No final do processo, verifique as informações apresentadas e clique no botão `Confirmar`{.action} para validar a adição do domínio.

### Configurar o domínio (zona DNS)

Quando o domínio adicionado estiver associado ao serviço, verifique se a configuração está correta. Para tal, consulte a tabela apresentada em Domínios associados. Uma etiqueta verde indica que o domínio está devidamente configurado.<br>

No caso de a pastilha ser de cor vermelha:

- **Se optou por uma configuração automática quando adicionou o domínio**: a visualização na Área de Cliente OVHcloud pode levar alguns instantes para se atualizar.

- **Se indicou um domínio não gerido pela sua conta OVHcloud**:
    - Clique na etiqueta de cor vermelha `MX`, `SRV`, `SPF` e `DKIM` para ver as alterações que deve realizar. Se este domínio não utilizar a configuração da OVHcloud (ou seja, se não utilizar os seus servidores DNS), deverá realizar as modificações a partir da interface de gestão do seu domínio.
    - No âmbito de uma etiqueta `CNAME` vermelha, queira consultar o nosso guia explicando como [criar um registo CNAME ao adicionar um domínio associado](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname).

![exchange](images/add_domain_exchange_step4.png){.thumbnail .w-600}

> [!primary]
>
> A modificação da configuração de um domínio requer um tempo de propagação de 4 a 24 horas, no máximo, antes de ficar totalmente efetiva.
>

Para verificar se a configuração de um domínio está correta, aceda à tabela `Domínios associados`{.action} do seu serviço. A etiqueta verde indica que o domínio está configurado corretamente. Caso contrário, é possível que a propagação ainda não esteja concluída.

### Modificar o modo de um domínio associado

É possível modificar o modo de um domínio associado na sua plataforma. Em primeiro lugar, é necessário compreender a diferença de funcionamento entre os modos autoritário e não-autoritário.

> [!primary]
>
> **Autoritário / não-autoritário**
>
> - A escolha do modo **autoritário** na sua plataforma de e-mail (*Server A*) implica o alojamento de todos os endereços de e-mail do seu nome de domínio nesta plataforma.<br>Por exemplo, se enviarmos um e-mail para o endereço « *mary.johnson@mydomain.ovh* », o « *Server A* » envia uma mensagem de erro ao remetente porque esse endereço não existe no « *Server A* ».<br><br>
>
> - O modo **não-autoritário** na sua plataforma de e-mail (*Server A*) permite a repartição dos endereços de e-mail do seu domínio entre a sua plataforma de e-mail principal (*Server A*) e outro serviço de e-mail (*Server B*).<br>Por exemplo, se enviar um e-mail para o endereço « *mary.johnson@mydomain.ovh* », o « *Server A* » transmitirá o e-mail ao « *Server B* » para que este último o possa entregar.<br>
>
>![Authoritative](images/add_domain_exchange_authoritative.png){.thumbnail .w-600}

1. Clique no separador `Domínios associados`{.action}.
1. Clique no botão `...`{.action} na linha do domínio em questão.
1. Clique em `Configuração`{.action}.
1. Selecione o modo de sua escolha.

> [!warning]
>
> Se receber a mensagem "**authoritative domain detected***" ao adicionar o seu domínio à sua plataforma de e-mail, isso significa que o domínio foi declarado em modo **autoritário** noutra plataforma de e-mail. Deverá alterá-lo para o modo **não-autoritário** em ambas as plataformas para que possam co-existir.

### Configurar e utilizar as contas

Agora que adicionou os nomes de domínio desejados ao seu serviço, pode configurar as suas contas de e-mail com estes últimos. Esta operação é realizada no separador `Contas de e-mail`{.action}. Se necessário, pode encomendar contas suplementares graças ao botão `Action`{.action}/`Encomendar contas`{.action} ou `Adicionar uma conta`{.action}.

Relembramos que todos os endereços criados no serviço poderão ver no diretório o resto resto dos endereços associados ao serviço, incluindo aqueles que possuem um domínio diferente.

Depois de configurar as contas, pode começar a utilizá-las. Para isso, a OVHcloud disponibiliza-lhe o **webmail**, acessível [aqui](/links/web/email). Para uma utilização ótima do seu endereço num software, certifique-se de que é compatível com o serviço.

Se pretender configurar o seu endereço de e-mail num software de mensagens ou num dispositivo como um smartphone ou um tablet, ou obter ajuda relativamente às funcionalidades do seu serviço de e-mail, consulte a nossa documentação, acessível a partir das páginas [Exchange](/links/web/emails) e [E-mail Pro](/links/web/email-pro).

Pode adquirir licenças Outlook na [Área de Cliente OVHcloud](/links/manager) e licenças Office 365 na página [Microsoft 365](/links/web/ms365). Caso pretenda usufruir do software de correio eletrónico Outlook ou de outros programas da suite Office, recomendamos uma destas soluções.

### Eliminar um domínio de uma plataforma

Se pretender retirar um domínio associado ao seu serviço Exchange ou E-mail Pro, deve certificar-se de que este não está associado a contas de e-mail, alias, recursos, contas partilhadas (apenas em Exchange), grupos, contactos externos ou rodapés sempre configurados. Neste caso, será necessário associar **as contas a outro domínio** na sua plataforma ou **eliminar**.

> [!warning]
>
> Antes de eliminar contas de correio eletrónico, certifique-se de que estas não estão a ser utilizadas. Poderá ser necessário efetuar o backup destas contas. Se necessário, consulte o guia [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), que lhe descreverá como exportar os dados de uma conta a partir da sua Área de Cliente ou de um programa de mensagens.

Aceda ao separador `Domínios associados`{.action} da plataforma. A partir da tabela, a coluna `Contas` indica-lhe o número de contas associadas aos nomes de domínio da sua lista.

Se houver contas de e-mail associadas ao nome de domínio que pretende desassociar, tem duas possibilidades:

**Associar as contas a outro domínio**:

1. Aceda ao separador `Contas de e-mail`{.action}.
1. À direita das contas a modificar, clique no botão `...`{.action}.
1. Clique em `Alterar`{.action}.

![exchange](images/add_domain_exchange_step8.png){.thumbnail .w-600}

4\. A partir da janela de edição, pode modificar o nome de domínio associado à conta através do menu pendente.

![exchange](images/add_domain_exchange_step9.png){.thumbnail .w-600}

**Eliminar as contas da sua plataforma**:

1. Aceda ao separador `Contas de e-mail`{.action}.
1. À direita da conta a eliminar, clique no botão `...`{.action}.
1. Clique em `Reiniciar esta conta`{.action} ou em `Reiniciar`{.action}.

![exchange](images/add_domain_exchange_step7.png){.thumbnail .w-600}

Depois de efetuar a reatribuição das contas a outro domínio, ou após a reinicialização das contas, é possível proceder à eliminação do nome de domínio.

No separador `Domínios associados`{.action} da sua plataforma, clique no botão `...`{.action} à direita do nome de domínio em causa e, a seguir, em `Eliminar este domínio`{.action}.

![exchange](images/add_domain_exchange_step10.png){.thumbnail .w-600}

## Quer saber mais?

[Criar um registo CNAME para adicionar um domínio associado](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support)

Fale com nossa [comunidade de utilizadores](/links/community).
