---
title: "Alterar o titular de um nome de domínio"
excerpt: "Neste guia, encontrará várias informações sobre a alteração de titular de um nome de domínio."
updated: 2024-05-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Para além da [gestão dos contactos](/pages/account_and_service_management/account_information/managing_contacts), o registo de um nome de domínio precisa da indicação das informações relativas ao titular do mesmo. O **proprietário** neste contexto diz respeito a uma pessoa ou empresa que detenha os direitos sobre esse nome de domínio. **A mudança de proprietário** refere - se à transferência de direitos de propriedade de uma pessoa ou empresa para outra, as informações do **proprietário** têm valor jurídico. Por exemplo, este processo é obrigatório se uma sociedade mudar de nome.

> [!primary]
>Esta operação não transfere o seu domínio para outra conta de cliente OVHcloud.
>
>Para isso, deve [modificar os contactos](/pages/account_and_service_management/account_information/managing_contacts) do nome de domínio.
>
> Se necessitar de fazer uma mudança de titular e uma mudança de contacto para o mesmo nome de domínio, não existe ordem de preferência. No entanto, é o contato do administrador quem pode iniciar essas operações. Essas duas alterações são, portanto, feitas na área do cliente do contato do administrador do nome de domínio.
>
> As informações relativas ao proprietário de um domínio têm apenas um valor administrativo e são totalmente independentes das informações que podem ser associadas a um identificador de cliente OVHcloud. Por conseguinte, um particular ou uma organização (sociedade, associação, etc.) apenas declarado proprietário de um domínio não tem acesso à Área de Cliente OVHcloud.
>

**Fique a saber como alterar o titular de um nome de domínio**

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](/links/manager){.external}
- Ter um nome de domínio registado na OVHcloud e para o qual não está em curso nenhuma operação (mudança de proprietário, transferência, criação). Se uma operação foi finalizada recentemente no seu domínio, é necessário aguardar pelo menos 60 dias de calendário antes de realizar uma nova operação.
- Ser o [contacto administrador](/pages/account_and_service_management/account_information/managing_contacts) do respetivo nome de domínio.
- Ter o consentimento do titular atual do nome de domínio para realizar a alteração de titular.

## Instruções

> [!warning]
>
> As seguintes instruções descrevem a forma mais comum de modificar o proprietário de um nome de domínio. São válidas para a maior parte dos domínios de nível superior, vulgarmente designados **T**op **L**evel **D**omain (**TLD**). 
>Os **TLD** designam o fim do seu nome de domínio, como por exemplo o *.com*, *.net*, *.fr*, etc.
>
> As regras específicas dos processos relativos aos nomes de domínio **TLD** são definidas unicamente pela autoridade de atribuição adequada, ou seja, o **registo**. Um agente de registo (ou registar) como a OVHcloud deve respeitar estas regras e não tem qualquer influência sobre as decisões de registo.
>
> Existem principalmente dois tipos de **TLD**: Os **ccTLD** e os **gTLD**. Os **ccTLD** correspondem a **TLD** relativos a uma região ou a um país (*.fr*, *.be*, *.uk*, *.de*, *.paris*, etc.). Os **gTLD** correspondentes a **TLD** mais genéricos (*.net*, *.com*, *.info*, *.org*, etc.).
>
> O procedimento exato para a mudança de proprietário de um nome de domínio pode assim variar, em particular para certos **ccTLD** (*.lu*, *.hk*, *.ro*, *.be*, *.lt*, *.dk*, *.at*, *.fi*, etc.) e para alguns **TLD** especiais (*.am*, *.fm*, etc.). Para alguns deles, uma mudança de proprietário é uma operação paga. A mudança de proprietário pode igualmente ser suspensa por várias razões, por exemplo, por falta de pagamento, abuso ou bloqueio por parte do registo. 
>
> Em caso de dúvida, recomendamos que consulte os seguintes recursos:
>
> - o sítio Web do registo **TLD** correspondente;
> - a [lista dos TLD disponíveis na OVHcloud](/links/web/domains-tld);
> - atualizações do estado do domínio. Para verificar isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Nomes de domínio`{.action} e, a seguir, em `Operações em curso`{.action}.
>

### 1 - selecionar o domínio

Aceda à [Área de Cliente OVHcloud](/links/manager), na secção `Web Cloud`{.action}. Clique em `Nomes de Domínio`{.action}, selecione o nome de domínio genérico (gTLD) do qual deseja modificar o proprietário.

### Etapa 2: iniciar o procedimento de alteração de proprietário

No separador `Informações gerais`{.action}, aceda à secção **Subscrição** no canto inferior direito. Clique em `...`{.action} à frente de **Contactos** e, a seguir, em `Mudar de proprietário`{.action}.

![alteração do proprietário](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/change-domain-name-holder.png){.thumbnail}

> [!warning]
>
> Qualquer alteração do nome, apelido, organização, estatuto legal e endereço de e-mail do proprietário é considerada como uma mudança de proprietário.
>
> Se alterar apenas os detalhes de titular que não os mencionados anteriormente, consulte a secção [Atualização das informações de proprietário](#updateownerinformation) abaixo.
>

Irá surgir uma nova janela do seu browser com todos os domínios elegíveis para a mudança de proprietário. Selecione um domínio na lista selecionando a opção situada à esquerda. Esta etapa pode igualmente ser utilizada para lançar uma operação agrupada: é possível iniciar uma mudança de proprietário para vários nomes de domínio de cada vez, por exemplo para mudar o proprietário de todos os domínios *.ovh*. Depois de fazer as suas escolhas, clique em `Continuar`{.action}.

![alteração do proprietário](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/available-domains.png){.thumbnail}

No formulário dos detalhes do proprietário, queira introduzir informações válidas em todos os campos obrigatórios. Tenha cuidado com os erros de introdução e, sempre que possível, utilize [caracteres ASCII](http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm). Tenha em conta que qualquer informação incorreta ou falsa pode provocar um erro técnico e, por conseguinte, um atraso no conjunto do processo de intercâmbio.

Uma vez confirmado o seu pedido de troca de dados, ser-lhe-ão enviados dois e-mails para confirmar ou anular este pedido:

- um e-mail enviado ao atual proprietário;
- um e-mail enviado ao futuro proprietário.

Se o endereço de e-mail não for alterado devido à mudança de proprietário, o endereço de e-mail de referência receberá os dois e-mails, mas cada um deles deve ser confirmado.
<br>Uma vez que os dois destinatários confirmaram o pedido por e-mail, a alteração do proprietário do nome de domínio terá efeito.

> [!warning]
>
> - O procedimento deve ser validado por ambas as partes no prazo de 14 dias a contar do pedido. **Po tym terminie zabieg zostaje anulowany**.
>
> - Se uma das partes recusar a alteração, o pedido será anulado.
>
> - Se o endereço de e-mail do atual proprietário estiver obsoleto ou inacessível, pode, **neste caso preciso**, contactar diretamente o suporte através da criação de um ticket de assistência a partir do seu [centro de ajuda OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help).
>
> - Se o proprietário do nome de domínio tiver sido modificado, o nome de domínio não poderá ser [transferido para outro agente de registo](/pages/web_cloud/domains/transfer_outgoing_domain) durante um período de 60 dias.

### Atualização das informações do proprietário <a name="updateownerinformation"></a>

Se precisar de atualizar algumas informações secundárias como o número de telefone, o endereço, etc., não precisa de iniciar um procedimento comercial. Estas informações podem ser alteradas diretamente na [Área de Cliente OVHcloud](/links/manager).

Na secção **Subscrição** do separador `Informações gerais`{.action}, clique em `...`{.action} em **Contactos** e, a seguir, em `Atualizar as informações do proprietário`{.action}.

![alteração do proprietário](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/refresh-owner-information.png){.thumbnail}

Para esta operação, não precisa de confirmar as modificações por e-mail.

## Saiba mais

[Como gerir os contactos (gestores) dos serviços OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 
