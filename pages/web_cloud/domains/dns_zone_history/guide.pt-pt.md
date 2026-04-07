---
title: "Gerir o histórico de uma zona DNS"
excerpt: "Saiba como consultar, comparar, descarregar e restaurar os backups da zona DNS"
updated: 2026-03-27
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

A zona **D**omain **N**ame **S**ystem (**DNS**) de um domínio constitui o ficheiro de configuração deste último. É composta por informações técnicas, chamadas *registos DNS*. A zona DNS é, de certa forma, um centro de encaminhamento.

Para mais informações, consulte os nossos guias:

- [Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

Por várias razões, poderá ter de aplicar uma configuração DNS anterior ao seu domínio.

A gestão dos DNS é facilitada graças ao histórico das zonas DNS.

**Saiba como consultar, comparar, descarregar e restaurar os backups da zona DNS**

## Requisitos

- Ter acesso à gestão do domínio em questão

<!-- CP-NAV-START:web-dns-zone -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Caminho de navegação:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-dns-zone -->

## Instruções

> [!primary]
>
> Os backups da sua zona DNS estão sujeitos às seguintes limitações:
>
> - Conservamos no máximo 200 backups para a mesma zona DNS.
> - Quando um backup tem mais de 31 dias, é automaticamente eliminado, à exceção dos **5 backups mais recentes** efetuados.

**Clique na ação pretendida para ver o conteúdo.**

/// details | Visualizar uma zona DNS

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> A tabela que aparece representa a zona DNS do seu domínio. Contém a lista dos registos DNS presentes. À direita da tabela, vários botões permitem-lhe efetuar ações na sua zona DNS.
>>
>> ![Ferramenta de histórico DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clique em `Ver o histórico da minha zona DNS`{.action}.
>>
> **Passo 3**
>>
>> Na nova página que aparece, uma tabela apresenta o histórico dos backups da sua zona DNS, do mais recente ao mais antigo. No topo desta tabela encontra-se a versão atual da sua zona DNS.
>>
>> Para visualizar a zona DNS pretendida, identifique a linha correspondente na tabela e clique no ícone presente na coluna `Ver`{.action}.
>>
>> ![Visualizar uma zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}
>>
> **Passo 4**
>>
>> Os dados da zona DNS selecionada são apresentados.
>>
>> ![Detalhe de uma zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}
>>
>> Clique em `Fechar`{.action} para regressar à página principal "Histórico da zona DNS".

///

/// details | Descarregar uma zona DNS

Clique nos separadores abaixo para ver cada um dos **3** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> A tabela que aparece representa a zona DNS do seu domínio. Contém a lista dos registos DNS presentes. À direita da tabela, vários botões permitem-lhe efetuar ações na sua zona DNS.
>>
>> ![Ferramenta de histórico DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clique em `Ver o histórico da minha zona DNS`{.action}.
>>
> **Passo 3**
>>
>> Na nova página que aparece, uma tabela apresenta o histórico dos backups da sua zona DNS, do mais recente ao mais antigo. No topo desta tabela encontra-se a versão atual da sua zona DNS.
>>
>> Para descarregar a zona DNS pretendida, identifique a linha correspondente na tabela e clique no ícone presente na coluna `Descarregar`{.action}.
>>
>> ![Descarregar uma zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}
>>
>> A zona DNS é descarregada em formato .txt.

///

/// details | Restaurar uma zona DNS

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> A tabela que aparece representa a zona DNS do seu domínio. Contém a lista dos registos DNS presentes. À direita da tabela, vários botões permitem-lhe efetuar ações na sua zona DNS.
>>
>> ![Ferramenta de histórico DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clique em `Ver o histórico da minha zona DNS`{.action}.
>>
> **Passo 3**
>>
>> Na nova página que aparece, uma tabela apresenta o histórico dos backups da sua zona DNS, do mais recente ao mais antigo. No topo desta tabela encontra-se a versão atual da sua zona DNS.
>>
>> Se pretender substituir a sua zona DNS atual por outra, basta restaurar uma zona DNS mais antiga. Na tabela com o histórico das zonas DNS, identifique a linha correspondente à zona DNS que pretende restaurar (verifique a data à esquerda da linha) e clique no ícone presente na coluna `Restaurar`{.action}.
>>
>> ![Restaurar uma zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}
>>
> **Passo 4**
>>
>> Aparece a janela seguinte.
>>
>> ![Confirmação do restauro da zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}
>>
>> Verifique se a data indicada na mensagem corresponde à zona DNS que pretende restaurar. Como indica a faixa amarela, tenha em conta que a zona DNS atual (no topo da lista do histórico das zonas DNS) será eliminada e substituída pela zona DNS que pretende restaurar.
>>
>> Clique em `Restaurar`{.action} para confirmar o restauro ou em `Anular`{.action}.

> [!primary]
>
> A modificação ou o restauro de uma zona DNS implica um prazo de propagação de **4** a **24** horas para ser totalmente aplicada na rede DNS.

///

/// details | Comparar duas zonas DNS

Clique nos separadores abaixo para ver cada um dos **4** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 2**
>>
>> A tabela que aparece representa a zona DNS do seu domínio. Contém a lista dos registos DNS presentes. À direita da tabela, vários botões permitem-lhe efetuar ações na sua zona DNS.
>>
>> ![Ferramenta de histórico DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clique em `Ver o histórico da minha zona DNS`{.action}.
>>
> **Passo 3**
>>
>> Na nova página que aparece, uma tabela apresenta o histórico dos backups da sua zona DNS, do mais recente ao mais antigo. No topo desta tabela encontra-se a versão atual da sua zona DNS.
>>
>> Pode comparar o conteúdo de duas zonas DNS. Na tabela com o histórico da sua zona DNS, identifique as duas linhas correspondentes às duas zonas DNS que deseja comparar (verifique a data à esquerda de cada linha) e selecione-as. Para comparar estas duas versões de zona DNS, clique no canto superior esquerdo em `Comparar as versões`{.action}.
>>
>> ![Comparar duas zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}
>>
> **Passo 4**
>>
>> Aparece uma nova página com o conteúdo das duas zonas DNS. Acima de cada versão é apresentada a data correspondente. Por predefinição, a versão mais recente da zona DNS encontra-se à esquerda e a mais antiga à direita. Um código de cores permite identificar as diferenças de conteúdo.
>>
>> À esquerda, o conteúdo realçado a vermelho foi alterado ou eliminado na versão mais recente.
>>
>> À direita, o conteúdo realçado a verde foi alterado ou adicionado em comparação com a versão mais antiga.
>>
>> Pode igualmente atualizar as datas das versões que pretende comparar através das duas listas pendentes.
>>
>> ![Detalhes comparação duas zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

///

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Aceder à Área de Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Criar uma zona DNS na OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
