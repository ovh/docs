---
title: "Como ligar um domínio OVHcloud a um alojamento SquareSpace"
excerpt: "Prepare e configure a zona DNS do seu domínio OVHcloud para a ligar a um alojamento SquareSpace"
updated: 2024-05-13
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Tem um nome de domínio na OVHcloud e deseja ligá-lo a um alojamento SquareSpace. Neste guia, encontrará as etapas de preparação e de configuração da sua zona DNS da OVHcloud para permitir a configuração do seu alojamento SquareSpace.

**Saiba como conectar o seu domínio OVHcloud a um alojamento SquareSpace**

> [!warning]
>
> - O suporte SquareSpace não tem acesso aos parâmetros do seu domínio OVHcloud e, por isso, não pode aconselhá-lo sobre as informações que deve fornecer.
>
> - A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.<br><br> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção [Quer saber mais?](#go-further) deste guia.
>

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}.
- Ter um [nome de domínio](/links/web/domains){.external} registado na OVHcloud.
- Dispor das [autorizações adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio a partir da sua [Área de Cliente OVHcloud](/links/manager){.external}.
- Ter um alojamento na SquareSpace.
- Ter acesso à gestão deste alojamento na SquareSpace.

## Instruções

Antes de seguir as duas etapas deste manual, deve familiarizar-se com a configuração de uma zona DNS através do nosso manual "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> A sua zona DNS já se encontra potencialmente pré-configurada ou associada a um alojamento. Vamos ver como identificar cada registo DNS necessário para estabelecer ligação com o seu alojamento SquareSpace. Alguns terão de ser eliminados para evitar entrar em conflito com os registos DNS requeridos nesta configuração. Outros serão simplesmente modificados ou criados. Para uma melhor compreensão, utilizaremos o domínio "**mydomain.ovh**" como exemplo. Substitua-o pelo seu domínio durante a configuração.

### Configurar os registos DNS na sua conta OVHcloud

Aceda à [Área de Cliente OVHcloud](/links/manager){.external}, secção `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

Aparecerá uma tabela com a lista de todos os registos DNS do nome de domínio selecionado.

![dnszone](images/tab.png){.thumbnail}

Cada registo DNS pode ser alterado clicando no botão `...`{.action} à direita da linha da tabela em causa e, a seguir, clicando em `Modificar entrada`{.action}.

Siga as etapas em ordem nas seguintes guias:

> [!tabs]
> **Etapa 1**
>> **Registo A**<br><br>
>> Para identificar os registos "A" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `A`.<br>
>> ![dnszone](images/filter-a.png){.thumbnail}<br>
>> - Clique no botão `...`{.action} à direita da linha da tabela que corresponde ao seu nome de domínio apenas, sem um subdomínio (exemplo: `mydomain.ovh.`), e depois clique em `Modificar entrada`{.action}.<br>
>> - Se existir um registo para o subdomínio "www." (exemplo: `www.mydomain.ovh.`), deverá eliminá-lo para que não entre em conflito com o registo CNAME que vai introduzir no etapa 4. Clique no botão `...`{.action} à direita da linha correspondente ao seu nome de domínio apenas com o subdomínio "www." e clique em `Eliminar entrada`{.action}.<br>
>> - Se não possui um registo "A" existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o "Campo de apontamento" `A`{.action}<br><br>
>>> Deverá criar 4 registos do tipo "A" sucessivamente a fim de introduzir os 4 endereços IPv4 relativos ao SquareSpace.
>>> Deixe o campo **Subdomínio** vazio e insira o primeiro endereço IPv4 do SquareSpace `198.185.159.144` no campo **Destino**.
>>> Clique em `Seguinte`{.action}, valide o seu registo "A", repita a operação para os outros 3 endereços IPv4 `198.185.159.145`; `198.49.23.144`; `198.49.23.145` e passe à etapa 2.
> **Etapa 2**
>> **Registo AAAA**<br><br>
>>  Para identificar os registos "AAAA", clique no menu Filtros na parte superior da tabela de registos DNS e selecione `AAAA`.<br>
>> ![dnszone](images/filter-aaaa.png){.thumbnail}<br>