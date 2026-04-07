---
title: 'Resolver um erro num nome de domínio'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232);
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

A criação, a transferência ou a alteração de titular de um nome de domínio podem gerar erros que requerem uma intervenção da sua parte.

**Saiba como agir quando ocorrer um erro num nome de domínio.**

## Requisitos

- Ser titular de um ou mais [nomes de domínio](/links/web/domains).
- Estar em dia com os [pagamentos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [renovações](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dos seus nomes de domínio.

<!-- CP-NAV-START:web-ongoing-operations -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Operações em curso](/links/control-panel/web-ongoing-operations)
- **Caminho de navegação:** `Web Cloud`{.action} > `Operações em curso`{.action} > Selecione o separador `Domínio`{.action} ou `DNS`{.action}.

---
<!-- CP-NAV-END:web-ongoing-operations -->

## Instruções

### Apresentação da interface de gestão das operações em curso

Clique nos separadores abaixo para ver cada um dos **2** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Operações em curso](/links/control-panel/web-ongoing-operations).
>>
> **Passo 2**
>>
>> Uma tabela lista todas as operações associadas aos nomes de domínio da sua Área de Cliente.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}
>>
>> - `Domínio` : Nome de domínio abrangido pela operação.
>> - `Operação` : Operação em curso no nome de domínio.
>> - `Comentário` : Detalhes sobre a operação em curso. Instruções.
>> - `Data de processamento` : Data de criação da operação.
>> - `Data de atualização` : Data de atualização da operação em curso.
>> - `Data de finalização` : Data de fim da operação.
>> - `Estado` : Estado atual da operação.

Nem todas as operações listadas nesta tabela requerem a sua intervenção para se desenrolarem normalmente.

Este guia aborda as operações **em erro** através de situações recorrentes.

### Situações

> [!primary]
>
> A lista de situações abaixo não é exaustiva. Se encontrar um erro que não é detalhado neste guia:
>
> - Verifique que está em dia com os [pagamentos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [renovações](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dos seus nomes de domínio.
> - Verifique se é possível agir consultando as opções disponíveis à direita da operação em causa.
> - Leia a mensagem descritiva e verifique se esta lhe permite resolver o erro.
>
> Se, apesar destas verificações, não conseguir resolver o erro, [abra um ticket de assistência](/links/support) a partir da sua Área de Cliente.

**Clique na situação pretendida para ver o conteúdo.**

/// details | Pedido de documentos

Certas extensões de nomes de domínio requerem que justifique a sua utilização fornecendo documentos. Nesse caso, deve transmitir os documentos a partir da sua Área de Cliente OVHcloud.

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Operações em curso](/links/control-panel/web-ongoing-operations).
>>
> **Passo 2**
>>
>> Localize a operação em erro na tabela.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}
>>
> **Passo 3**
>>
>> Clique no botão `...`{.action} à direita da operação em causa.
>>
> **Passo 4**
>>
>> Aparece a janela abaixo. A secção "Descrição" permite obter detalhes sobre o documento a fornecer, bem como um botão para carregar o seu documento.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

///

/// details | Informações em falta

Ao registar o seu nome de domínio, pode ser necessário completar os dados de "contacto". Se estes não corresponderem aos critérios do nome de domínio, poderá obter o erro abaixo.

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Operações em curso](/links/control-panel/web-ongoing-operations).
>>
> **Passo 2**
>>
>> Localize a operação em erro na tabela.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}
>>
> **Passo 3**
>>
>> Clique no botão `...`{.action} à direita da operação em causa.
>>
> **Passo 4**
>>
>> Aparece a janela abaixo. Preencha os campos com as informações do contacto em questão.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

///

/// details | Código de transferência errado

Ao transferir o seu nome de domínio para a OVHcloud, deve introduzir um código de transferência (**authInfo** / **AuthCode**) aquando da encomenda. Se este código estiver incorreto, a operação é suspensa. Pode relançá-la com o código correto.

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Operações em curso](/links/control-panel/web-ongoing-operations).
>>
> **Passo 2**
>>
>> Localize a operação em erro na tabela.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}
>>
> **Passo 3**
>>
>> Clique no botão `...`{.action} à direita da operação em causa.
>>
> **Passo 4**
>>
>> Aparece a janela abaixo. Introduza o código de transferência (**authInfo** / **AuthCode**) e relance a operação.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

///

/// details | Erro associado aos servidores DNS

Pode ocorrer um erro se os servidores DNS associados a um nome de domínio não funcionarem.
Na situação abaixo, o endereço IP do servidor DNS não responde.

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Operações em curso](/links/control-panel/web-ongoing-operations).
>>
> **Passo 2**
>>
>> Localize a operação em erro na tabela.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na secção `Nomes de domínio`{.action}, selecione o nome de domínio em causa e clique no separador `Servidores DNS`{.action}.
>>
> **Passo 4**
>>
>> A partir deste separador, [modifique os seus servidores DNS](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Erro num nome de domínio em .ie, .de ou .it após uma atualização DNS

Ao alterar os seus servidores DNS, o registry pode verificar os novos servidores DNS e a zona DNS associada e bloquear o nome de domínio se a configuração não estiver conforme.

> [!warning]
>
> Este tipo de bloqueio é iniciado pelo registry e não pela OVHcloud. Assim, mesmo que o nome de domínio esteja bloqueado pelo registry, os seus servidores DNS aparecem como `Ativos` na sua Área de Cliente OVHcloud.

Para verificar se o seu nome de domínio está sujeito a este bloqueio, clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Operações em curso](/links/control-panel/web-ongoing-operations).
>>
> **Passo 2**
>>
>> Localize a operação em erro na tabela.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}
>>
> **Passo 3**
>>
>> Para verificar o seu nome de domínio, recomendamos que utilize a ferramenta de verificação fornecida pelo registry:
>>
>> - Para um nome de domínio em **.de**: <https://nast.denic.de/>.
>> - Para um nome de domínio em **.it**: <https://dns-check.nic.it/>.
>>
>> > [!primary]
>> >
>> > Se o seu registry não fornecer uma ferramenta de verificação de servidores DNS, é possível consultar os seus novos servidores DNS através do comando `nslookup` numa "linha de comandos" Windows ou através do comando `dig` num "terminal" Linux ou macOS.
>> >
>> > Se os seus servidores DNS estiverem acessíveis, a ferramenta devolverá um endereço IP.
>> >
>> > Em qualquer caso, certifique-se, junto do administrador do servidor DNS, de que este está devidamente configurado para alojar a zona DNS do seu nome de domínio.
>>
> **Passo 4**
>>
>> Quando tiver identificado a origem do erro e o tiver corrigido, clique no botão `...`{.action} à direita da operação em causa e relance a operação de verificação DNS.

///

/// details | Erro interno OVHcloud

Pode encontrar um erro com os detalhes "erro interno".

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Operações em curso](/links/control-panel/web-ongoing-operations).
>>
> **Passo 2**
>>
>> Localize a operação em erro na tabela.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}
>>
> **Passo 3**
>>
>> Este erro não permite qualquer ação da sua parte a partir da Área de Cliente OVHcloud.
>>
>> Verifique primeiro se o seu nome de domínio e os seus servidores DNS estão ativos.
>>
>> Se constatar uma anomalia que não esteja relacionada com a configuração dos servidores DNS ou da zona DNS, [contacte o suporte OVHcloud](/links/support) para identificar a origem do problema.

///

## Quer saber mais?

[Transferir o nome de domínio para a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Transferir um nome de domínio para outro agente de registo](/pages/web_cloud/domains/transfer_outgoing_domain)

[Modificar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Para serviços especializados (SEO, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
