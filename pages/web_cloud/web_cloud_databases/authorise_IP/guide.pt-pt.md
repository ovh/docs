---
title: "Web Cloud Databases - Como autorizar um endereço IP?"
excerpt: "Saiba como autorizar um ou vários endereços IP a aceder à sua solução Web Cloud Databases"
updated: 2025-07-10
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

As soluções [Web Cloud Databases](/links/web/databases) podem ser utilizadas com serviços da OVHcloud ou externas à OVHcloud.

Por predefinição e por razões de segurança, nestas soluções:

- Apenas os endereços IP associados à nossa infraestrutura de alojamentos partilhados são autorizados a aceder ao conteúdo das bases de dados.
- O acesso aos logs da solução não é restrito em função dos endereços IP. Isto permite que um utilizador aceda à Internet através de um computador, por exemplo.

Precisa de alterar estas permissões/restrições?

**Saiba como autorizar um ou vários endereços IP a aceder à sua solução Web Cloud Databases.**

## Requisitos

- Dispor de uma solução [Web Cloud Databases](/links/web/databases).
- Conhecer o endereço IP (ou o intervalo de endereços IP) a autorizar na sua solução.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Autorizar um endereço IP ou um intervalo de endereços IP

> [!primary]
>
> Lembrete: se acabou de ativar a sua solução [Web Cloud Databases](/links/web/databases) e pretende utilizá-la com uma oferta de [alojamento web OVHcloud](/links/web/hosting), os endereços IP dessas ofertas já são autorizados por predefinição.

Clique nas guias abaixo para exibir sucessivamente cada um dos **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Web Cloud Databases`{.action} e escolha a solução Web Cloud Databases correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `Endereços IP autorizados`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na página que aparece, clique no botão `Adicionar um endereço IP / máscara`{.action} situado por cima da tabela.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Se pretender alterar um endereço IP ou um intervalo de endereços IP já autorizados, clique diretamente na tabela no botão `...`{.action} situado à direita da linha correspondente ao endereço IP ou ao intervalo de endereços IP a alterar e, a seguir, em `Editar whitelist`{.action}.
>>
> **Etapa 5**
>>
>> Na janela que se abre, vários campos devem ser preenchidos:
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP / máscara *`{.action}: Introduza aqui o endereço IP (por exemplo: `203.0.113.44`) ou o intervalo de endereços IP (por exemplo: `203.0.113.0/24` que representa todos os endereços IP de `203.0.113.0` a `203.0.113.255`) que deseja autorizar para a sua solução Web Cloud Databases.
>> - `Descrição`{.action} (facultativo): Pode, por exemplo, adicionar informações sobre a função do endereço IP ou do intervalo de endereços IP em causa.
>> - `Base de dados`{.action}: Selecione esta opção para que o endereço IP ou o intervalo de endereços IP possam aceder às bases de dados presentes na sua solução Web Cloud Databases.
>> - `SFTP`{.action}: Selecione esta opção para que o endereço IP ou o intervalo de endereços IP possam aceder aos logs da sua solução Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > É fortemente desaconselhado selecionar a opção `Base de dados`{.action} para autorizar o intervalo de endereços IP `0.0.0.0/0` a aceder às suas bases de dados.
>> >
>> > Isto permitirá autorizar o acesso às suas bases de dados de todos os endereços IPv4 existentes.
>>
>> Depois de inserir as informações, clique no botão `Validar`{.action}.

## Casos particulares

**Clique nos casos abaixo para ver as respetivas informações.**

/// details | Intervalo de endereços IP 0.0.0.0/0

Aquando da ativação da sua solução Web Cloud Databases, já está presente por predefinição uma linha para o intervalo de endereços IP `0.0.0.0/0` para autorizar o acesso em **SFTP** à solução.

Esta autorização é voluntariamente implementada para lhe permitir aceder aos ficheiros de logs da sua solução Web Cloud Databases sem ter de declarar o endereço IP do seu ponto de acesso à Internet.

Este endereço IP pode ser alterado periodicamente em função dos Fornecedores de Serviços Internet.

Além disso, recomendamos que **não** altere esta autorização e que não autorize o acesso às bases de dados presentes na sua solução Web Cloud Databases.

Efetivamente, isto permitiria autorizar o acesso às suas bases de dados a todos os endereços IPv4 existentes, o que representa um risco para a segurança dos seus dados.

///


/// details | A autorização de acesso aos alojamentos web da OVHcloud

Aquando da ativação da sua solução Web Cloud Databases, a autorização de acesso aos alojamentos web da OVHcloud é ativada por predefinição.

Se deseja desativar esta autorização pois não utiliza um alojamento web com a sua solução Web Cloud Databases, siga sucessivamente as etapas **4** abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Web Cloud Databases`{.action} e escolha a solução Web Cloud Databases correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `Endereços IP autorizados`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na página que aparece, desmarque a caixa de verificação antes da menção `Autorizar o acesso dos alojamentos web da OVHcloud à base de dados`{.action}.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}

///

## Quer saber mais?
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).