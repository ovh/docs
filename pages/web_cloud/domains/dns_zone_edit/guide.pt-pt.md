---
title: 'Editar uma zona DNS da OVHcloud'
excerpt: 'Saiba como editar uma zona DNS da OVHcloud através da Área de Cliente'
updated: 2024-06-17
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A sigla **DNS**, que significa **D**omain **N**ame **S**ystem, é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um domínio a um endereço IP.

Para mais explicações, consulte os nossos manuais "[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" e "[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Saiba como editar a zona DNS da OVHcloud através da Área de Cliente.**

## Requisitos

- Ter acesso à secção de gestão do domínio na [Área de Cliente OVHcloud](/links/manager){.external}.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}.
- Utilizar a configuração da OVHcloud (os seus servidores DNS) para o domínio em questão.

> [!warning]
>
> - Se o domínio não usar os servidores DNS da OVHcloud, a alteração deverá ser efetuada na interface do agente responsável pela configuração do domínio.
> 
> - Se o domínio estiver registado na OVHcloud, pode verificar se este último utiliza a nossa configuração. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) no separador `Servidores DNS`{.action} do domínio em causa. Se necessário, consulte o guia "[Alterar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
> 
> Em ambos os casos acima, tenha cuidado ao efetuar as alterações dos servidores DNS. A configuração anterior que pode ser aplicada ao seu domínio não estará ativa se não tiver reconfigurado e personalizado previamente a nova zona DNS presente na OVHcloud.<br>
> Só pode ter uma zona DNS ativa por nome de domínio.
>

## Instruções

### Aceder à gestão de uma zona DNS da OVHcloud

> [!primary]
>
> Ao contrário do nome de domínio, para uma zona DNS não existe uma noção de proprietário, mas sim uma gestão de contactos para uma zona DNS da OVHcloud. Se desejar mudar a gestão da sua zona DNS para outra conta OVHcloud, siga o nosso guia [Como gerir os contactos (gestores) dos serviços OVHcloud](/pages/account_and_service_management/account_information/managing_contacts).

Para aceder à gestão de uma zona DNS da OVHcloud, efetue as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
4. Selecione o domínio ou a zona DNS em causa.
5. Na página que se abrir, clique no separador `Zona DNS`{.action}.

A tabela que aparecer apresenta para cada linha um registo DNS associado ao seu domínio na OVHcloud. Poderá filtrar o conteúdo por tipo de registo ou por domínio.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}

### Editar a zona DNS da OVHcloud do seu domínio

**A alteração de uma zona DNS é uma operação sensível** : uma alteração inadequada poderia, por exemplo, tornar indisponível o acesso ao seu website ou a receção de novos e-mails.

Compreender os diferentes registos irá permitir-lhe perceber as alterações que irá efetuar se editar a zona DNS do seu domínio.

> [!success]
>
> Consulte o nosso guia sobre [registos DNS](/pages/web_cloud/domains/dns_zone_records) para conhecer melhor as operações DNS.
>
> Consulte também o guia relativo aos [subdomínios](/pages/web_cloud/domains/domain_create_subdomains) para mais informações sobre este assumpto.
>

Pode editar a zona DNS da OVHcloud do seu domínio adicionando, alterando ou eliminando um registo DNS.<br>
Para isso, pode alterar manualmente a zona em modo de texto ou utilizar os nossos assistentes de configuração.

#### Modificar manualmente a zona em modo de texto <a name="txtmod"></a>

> [!warning]
> 
> Apenas para utilizadores experientes. Esteja também muito atento à sintaxe aquando das suas modificações.
> 

Para editar uma zona DNS da OVHcloud em modo de texto, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
4. Selecione o domínio ou a zona DNS em causa.
5. Na página que se abrir, clique no separador `Zona DNS`{.action}.
6. À direita ou abaixo da tabela, clique em `Alterar em modo de texto`{.action} e siga as etapas que aparecem.

> [!warning]
>
> Não altere, através do botão `Alterar em modo de texto`{.action}, os registos DNS da sua zona DNS em benefício de servidores DNS externos à OVHcloud. De facto, esta zona DNS **só** funciona com servidores DNS da OVHcloud.

#### Utilizar os assistentes de configuração

A partir de agora, o manual apenas irá abordar a configuração realizada através de assistentes.

> [!primary]
>
> Tenha consigo as informações que pretende alterar na zona DNS da OVHcloud. Se efetuar esta modificação a pedido de um fornecedor de serviço, este deve comunicar-lhe a lista dos elementos a modificar.
>

> [!tabs]
> **Adicionar um novo registo DNS**
>>
>> Para adicionar um novo registo DNS, efetue as seguintes ações:
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
>> 2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
>> 3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
>> 4. Selecione o domínio ou a zona DNS em causa.
>> 5. Na página que se abrir, clique no separador `Zona DNS`{.action}.
>> 6. À direita ou abaixo da tabela, clique em `Adicionar uma entrada`{.action} e siga as etapas que aparecem.
>>
>> Sugerimos que verifique previamente se este registo já existe e não aponta para um destino diferente. Para o fazer, filtre o conteúdo da tabela por tipo de registo ou por domínio. Se o registo já existir, sugerimos que o altere através da operação descrita abaixo.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
>> > Quando o destino do seu registo for um URL, não se esqueça de apontar para o URL. De facto, se não o fizer, o seu nome de domínio será automaticamente adicionado no final do seu destino.
>> >
>> > **Exemplo** : deseja criar um registo CNAME de `test.mydomain.ovh` para `mydomain.ovh`.
>> >
>> > Deverá ter como alvo `mydomain.ovh.` e não `mydomain.ovh` sem o **.** no final.
>>
> **Alterar um registo DNS existente**
>>
>> Para alterar um registo DNS, efetue as seguintes ações:
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
>> 2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
>> 3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
>> 4. Selecione o domínio ou a zona DNS em causa.
>> 5. Na página que se abrir, clique no separador `Zona DNS`{.action}.
>> 6. Na tabela que aparece, clique no pictograma `...`{.action} à direita da entrada em causa.
>> 7. De seguida, clique em `Modificar entrada`{.action} e siga as etapas que aparecem.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-record.png){.thumbnail}
>>
> **Eliminar um registo DNS existente**
>>
>> Para eliminar um registo DNS, efetue as seguintes ações:
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
>> 2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
>> 3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
>> 4. Selecione o domínio ou a zona DNS em causa.
>> 5. Na página que se abrir, clique no separador `Zona DNS`{.action}.
>> 6. Na tabela que aparece, clique no pictograma `...`{.action} à direita da entrada em causa.
>> 7. De seguida, clique em `Eliminar entrada`{.action} e siga as etapas que aparecem.
>>
>> Pode eliminar várias entradas de uma só vez, selecionando-as a partir da parte esquerda da tabela e clicando no botão `Eliminar`{.action}.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-record.png){.thumbnail}
>>
> **Reiniciar a zona DNS**
>>
>> Reiniciar a zona DNS permite voltar a uma configuração mínima, com as entradas da OVHcloud predefinidas ou as dos seus serviços. Também pode apontar o domínio para serviços de alojamento web e de correio eletrónico personalizados
>>
>> > [!alert]
>> >
>> > Antes de reiniciar a zona DNS, certifique-se de que o seu domínio não está associado a serviços em curso de utilização, tais como um website ou endereços de e-mail.
>> >
>>
>> Para reiniciar a zona DNS, efetue as seguintes ações:
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
>> 2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
>> 3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
>> 4. Selecione o domínio ou a zona DNS em causa.
>> 5. Na página que se abrir, clique no separador `Zona DNS`{.action}.
>> 6. À direita ou abaixo da tabela, clique em `Reiniciar a minha zona DNS`{.action}" e siga os 2 passos que se apresentarem.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
>> **Etapa 1**
>>
>> Responda à pergunta `Deseja ativar o número mínimo de entradas quando a zona DNS for reiniciada?`` Definir entradas mínimas numa zona DNS permite evitar que um pedido para o domínio não acarrete um erro.
>>
>> - `Sim, pretendo reiniciar a minha zona DNS com as entradas mínimas`
>> - `Não, mas pretendo reiniciar a minha zona DNS`
>>
>> **Etapa 2**
>>
>> Qualquer que seja a sua escolha no passo 1, é necessário definir uma resposta quando se interroga o seu nome de domínio para evitar uma resposta DNS em erro.
>>
>> Selecione as duas opções clicando nos separadores seguintes.
>>
>> **Endereço IP do seu alojamento**
>>
>> - `Reencaminhamento`: o seu domínio apontará para o servidor de reencaminhamento OVHcloud. Isto permite apresentar uma página inicial da OVHcloud e evitar um erro DNS.<br>
>> - `Alojamento Web OVHcloud`: O seu domínio ficará associado ao endereço IP do alojamento web associado ao domínio <br>
>> - `Personalizado`: defina o valor IPv4 ([registo A](/pages/web_cloud/domains/dns_zone_records#pointer-records)) do alojamento web que deseja apontar. <br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-01.png){.thumbnail}
>>
>> **Endereço do servidor de e-mail**
>>
>> - `Reencaminhamento`: o seu domínio irá apontar para os servidores de reencaminhamento de e-mail. Esta escolha. É particularmente útil se não tiver nenhuma oferta de e-mail mas pretender reenviar os e-mails para um ou vários endereços de e-mail fora do seu domínio.<br>
>> - `Servidor de e-mail OVHcloud`: defina-se quando dispõe de um serviço de e-mail partilhado.<br>
>> - `Personalizado`: defina o URL e a prioridade do servidor de e-mail ([registo MX](/pages/web_cloud/domains/dns_zone_records#mail-records)) que pretende apontar.<br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-02.png){.thumbnail}
>>

### Tempo de propagação

Depois de alterar a zona DNS do domínio, é necessário aguardar 24 horas até que as alterações sejam efetivas.

Se pretender reduzir esse tempo de espera para as suas próximas alterações da zona DNS da OVHcloud, pode fazê-lo, de certa forma, ajustando o TTL (*Time To Live*) que será aplicado a todos os registos da zona DNS. Efetue as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Nomes de domínio`{.action}.
4. Selecione o domínio ou a zona DNS em causa.
5. Na página que se abrir, clique no separador `Zona DNS`{.action}.
6. À direita ou abaixo da tabela, clique no botão `Modificar o TTL por predefinição`{.action}e siga as etapas que aparecem.

Também pode alterar o TTL de um registo DNS. No entanto, esta operação só pode ser efetuada num registo de cada vez, alterando-o ou adicionando-o.

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Como configurar o registo SPF de um domínio](/pages/web_cloud/domains/dns_zone_spf)

[Proteja o seu domínio contra o Cache Poisoning graças ao DNSSEC](/pages/web_cloud/domains/dns_dnssec)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).