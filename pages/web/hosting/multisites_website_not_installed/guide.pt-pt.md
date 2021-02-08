---
title: 'Resolver o erro “Site não instalado”'
excerpt: 'Saiba como resolver o erro da página “Site não instalado”'
slug: alojamento_web_erro_de_site_nao_instalado
section: 'Configuração do alojamento'
order: 2
---

**Última atualização: 14/09/2018**

## Sumário

A página “Site não instalado” aparece quando a configuração DNS do seu nome de domínio está incorreta ou quando o nome de domínio utilizado pelo seu site está mal configurado no seu alojamento web da OVH.

**Este manual explica como resolver o erro “Site não instalado”.**

## Requisitos

- Ter um serviço de [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external}.
- Poder gerir o [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external} no qual está alojado o site em questão.
- Poder gerir a configuração do nome de domínio afetado (ou seja, a sua zona DNS).
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

A página “Site não instalado” só aparece em dois casos específicos:

- o nome de domínio utilizado pelo seu site foi adicionado incorretamente enquanto **Multi-site** à configuração do seu alojamento web da OVH;
- o nome de domínio utilizado pelo seu site não foi corretamente associado ao seu alojamento web da OVH, porque o endereço de IP utilizado na sua configuração DNS não é correto.

A seguir, explicamos-lhe como verificar as duas configurações para resolver o erro “Site não instalado”.

![sitenotinstalled](images/site-not-installed-webpage.png){.thumbnail}

### 1 - Verificar a configuração do alojamento web (Multi-site)

Para verificar se o nome de domínio foi adicionado corretamente enquanto multi-site no alojamento web, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e clique em `Alojamentos`{.action} na barra à esquerda. Na lista, selecione o alojamento onde está alojado o site que apresenta a página “Site não instalado”. Por fim, clique no separador `Multi-site`{.action}.

A tabela que vai aparecer contém todos os domínios adicionados ao seu alojamento enquanto multi-site. A barra de pesquisa pode ajudá-lo a encontrar o domínio afetado.

Procure o domínio na tabela. A seguir, podem ocorrer várias situações:

|Situações possíveis|Medidas a adotar|
|---|---|
|O domínio aparece na tabela|O domínio foi corretamente adicionado enquanto multi-site no seu alojamento web. Se o adicionou há menos de 15 minutos, aguarde até que a página “Site não instalado” desapareça. Se esta página continuar a aparecer, consulte o passo [2 - Verificar a configuração DNS do domínio](https://docs.ovh.com/pt/hosting/alojamento_web_erro_de_site_nao_instalado/#2-verificar-a-configuracao-dns-do-dominio){.external}.|
|O domínio desapareceu da tabela|Se adicionou o domínio, mas este não aparece na tabela, é possível que não tenha seguido todos os passos para adicionar o domínio ao seu alojamento web ou que o tenha eliminado por engano. Sugerimos que siga os passos descritos no manual [“Partilhar o alojamento entre vários sites”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/){.external} para adicionar novamente o domínio.|
|O domínio não aparece na tabela.|Todavia, ainda não adicionou o domínio enquanto multi-site ao seu alojamento web da OVH. Para o adicionar, siga os passos descritos no manual [“Partilhar o alojamento entre vários sites”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/){.external}.|

Se, apesar disto, a página “Site não instalado” continuar a aparecer no seu site, consulte o passo [2 - Verificar a configuração DNS do domínio](https://docs.ovh.com/pt/hosting/alojamento_web_erro_de_site_nao_instalado/#2-verificar-a-configuracao-dns-do-dominio){.external}.

### 2 - Verificar a configuração DNS do domínio

Em primeiro lugar, deve reunir a informação correspondente à configuração OVH que deve utilizar. Para isso, na janela `Informações gerais`{.action}, consulte os endereços que aparecem abaixo de **IPv4** e **IPv6**.

![sitenotinstalled](images/site-not-installed-know-a-records.png){.thumbnail}

Esta informação irá permitir-lhe verificar a configuração DNS do seu domínio. Para realizar a verificação, aceda à interface do responsável pela gestão desta configuração.

> [!primary]
>
> Se o domínio estiver registado na OVH, pode verificar se este último utiliza a nossa configuração. Inicie sessão na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Domínios`{.action} na barra à esquerda e, em seguida, no domínio em questão. Por fim, clique no separador `Servidores DNS`{.action}.
>

Dependendo da configuração utilizada pelo seu domínio, poderá realizar a verificação de duas formas:

- **o seu domínio não utiliza a configuração da OVH**: deverá efetuar a verificação (descrita acima) através da interface do agente responsável pela configuração do seu domínio;

- **o seu domínio utiliza a configuração da OVH**: a verificação é efetuada através da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Aceda à janela `Zona DNS`{.action} do domínio correspondente. A configuração DNS aparece numa tabela onde cada linha representa um registo DNS específico. Poderá filtrar o conteúdo por tipo de registo ou por nome de domínio.

![sitenotinstalled](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

A seguir, certifique-se de que os registos DNS do domínio ao qual corresponde a página “Site não instalado” estão corretamente configurados.

|Registo|Destino|
|---|---|
|A|O destino deve corresponder ao endereço **IPv4** que aparecia na janela  **Informações gerais** do seu domínio.|
|AAAA|O destino deve corresponder ao endereço **IPv6** que aparecia na janela  **Informações gerais** do seu domínio.|

A partir daqui, duas situações são possíveis:

|Situações possíveis|Medidas a adotar|
|---|---|
|Os destinos são corretos|Isto indica que a configuração do seu domínio está correta. Se alterou a sua configuração DNS há menos de 24 horas, deixe passar esse período de tempo para que a alteração seja corretamente registada.|
|Os destinos são incorretos|A configuração do domínio deve ser alterada. Se utiliza a configuração da OVH, sugerimos que siga os passos do manual [“Editing an OVH DNS zone”](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external} (versão em inglês - Editar uma zona DNS da OVH). Caso contrário, siga as indicações descritas na interface do seu prestador de serviços. Depois de efetuar a alteração, será necessário aguardar um tempo máximo de 24 horas para que a modificação seja efetiva.|

Se realizou as operações dos passos 1 e 2 e esperou o tempo necessário, a página “Site não instalado” deveria desaparecer.

## Quer saber mais? 

[Partilhar o alojamento entre vários sites](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/){.external}

[Editing an OVH DNS zone](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external} (versão inglesa - Editar uma zona DNS OVH)

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}