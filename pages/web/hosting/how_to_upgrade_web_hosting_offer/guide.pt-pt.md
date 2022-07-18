---
title: "Fazer evoluir a sua oferta de alojamento web"
excerpt: "Saiba como alterar a fórmula de subscrição da sua oferta de alojamento OVHcloud"
slug: how_to_change_web_hosting_offer
section: Otimizar o meu site
order: 2
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/06/2022**

## Objetivo

A sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) permite-lhe aumentar as capacidades das suas [ofertas de alojamento Web](https://www.ovhcloud.com/pt/web-hosting/), de forma a dispor de um alojamento mais potente, de mais espaço de armazenamento, de bases de dados, de endereços de e-mail ou de funcionalidades suplementares como as [mailing-lists](https://docs.ovh.com/pt/emails/email_partilhado_guia_de_utilizacao_de_mailing-lists/) (a partir da [oferta Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/)) ou o [serviço SQL privado](https://www.ovhcloud.com/pt/web-hosting/options/private-sql/) (incluído com as ofertas da gama [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/)).

**Descubra como fazer evoluir a sua oferta de alojamento OVHcloud sem interrupção.**

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

> [!success]
> 
> **Precisa dar boost temporário ao seu alojamento?**
>
> Com a [opção Boost](https://www.ovhcloud.com/pt/web-hosting/options/boost/), disponível nas nossas ofertas *Performance*, pode fazer evoluir temporariamente os recursos do seu alojamento para absorver um aumento pontual do tráfego. Se este aumento se prolongar no tempo, poderá também migrar para uma solução superior para dispor de mais recursos de forma permanente.
>

### Importante - A faturação em caso de alteração da oferta

Ao alterar a sua fórmula durante a subscrição, a nova oferta será sujeita a um *adiamento*. Este adiamento corresponde ao período restante de subscrição da sua oferta atual.

**Exemplo:**<br>
Passou de uma oferta [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/) para uma oferta [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/), mas a subscrição em curso não está terminada.<br>
Por conseguinte, o período restante será automaticamente **adicionado** numa base pro rata temporis à sua nova subscrição **Pro**<br>
Por conseguinte, a renovação da autorização de introdução no mercado terá uma duração de **um pouco mais de um ano**, até à sua próxima renovação.

### Alterar a sua oferta de alojamento <a name="modify"></a>

> [!primary]
>
> A modificação da sua assinatura para uma oferta que emite menos recursos só é possível se se trata da oferta **imediatamente inferior**. 
> Por exemplo, não poderá passar de uma fórmula *Performance 2* para uma fórmula *Pro* numa única operação.
> Deverá **primeiro** fazer evoluir o seu alojamento a partir da fórmula *Performance 2* para a oferta *Performance 1* e **depois** para a oferta *Pro*.
>

> [!warning]
>
> **Antes**, qualquer alteração na sua subscrição para uma oferta inferior, verifique que a utilização da sua oferta atual é compatível com as características da sua próxima oferta [oferta de alojamento](https://www.ovhcloud.com/pt/web-hosting/).
>
> Para isso, siga [estas instruções](#checks), efetue a alteração da oferta e repita estas operações sempre que necessário.
>

Para alterar a subscrição, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), na secção `Web Cloud` {.action. Clique em `Alojamentos` {.action} e selecione o alojamento em causa.

No quadro `Subscrição`, clique no botão `...`{.action} à direita de `Oferta`, `Mudar de oferta` {.action}.

![change_plan](images/change_plan.png){.thumbnail}

De seguida, selecione a sua nova subscrição e a sua duração. Valide os contratos correspondentes e clique em `Enviar`{.action}.

> [!primary]
>
> **Caso particular**
>
> No âmbito de uma alteração da oferta [Start10M](https://docs.ovh.com/pt/hosting/ativar-start10m/), apenas [a oferta Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/) lhe será proposta. No entanto, após uma mudança para a oferta Perso, poderá fazer evoluir esta última para o conjunto das nossas ofertas de alojamento Web (https://www.ovhcloud.com/pt/web-hosting/).

### Verificar que o seu alojamento é compatível com uma oferta inferior <a name="checks"></a>

#### Número de sites

A oferta [Kimsufi Web](https://www.ovhcloud.com/pt/web-hosting/old-web-hosting-offers/) não permite ter mais do que um nome de domínio no [multisite](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/) do seu alojamento.

Antes de passar da oferta [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/) à oferta [Kimsufi Web](https://www.ovhcloud.com/pt/web-hosting/old-web-hosting-offers/), verifique que o seu alojamento inclui apenas um site.

#### Bases de dados Start SQL

Antes de passar o seu alojamento numa oferta inferior, certifique-se de que a nova oferta inclui suficientes [bases de dados](https://www.ovhcloud.com/pt/web-hosting/options/start-sql/). Verifique também que têm tamanhos suficientes.

Caso contrário, elimine as bases de dados não utilizadas e reduza, se necessário, a quantidade de dados que contêm. Esta quantidade não deve exceder o tamanho máximo das bases de dados da nova oferta (para qualquer pedido de assistência sobre as operações a efetuar, contacte os [parceiros da OVHcloud](https://partner.ovhcloud.com/pt/)).

No seguimento da eliminação de dados nas suas bases de dados, pense em recalcular a quota utilizada a partir do separador `Bases de dados`{.action} na parte `Alojamentos`{.action} do seu Espaço Cliente. Clique no botão `...`{.action} à direita da base em questão e depois `Recalcular o limite`{.action}.

![quota](images/quota.png){.thumbnail}

#### CloudDB

Se utiliza a oferta [CloudDB](https://docs.ovh.com/pt/hosting/comecar-com-clouddb/#ativacao-do-seu-servidor-clouddb-incluido-com-o-seu-plano-de-alojamento-web) incluída com o seu alojamento [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/) e deseja migrar o seu alojamento para uma oferta [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/), aceda à parte `Alojamentos`{.action} da sua Área de Cliente.<br>
Clique no botão `...`{.action} na parte `Bases de dados privada`{.action} depois `Desassociar`{.action}.

![clouddb](images/clouddb.png){.thumbnail}

Esta ação permitir-lhe-á encomendar uma oferta CloudDB independente da sua subscrição *Performance*. Os dados do seu servidor serão conservados.

Se não deseja conservar estes dados, pode também eliminar o seu SQL privado antes de passar para a oferta *Pro*: 

1. Faça o backup dos seus dados seguindo as instruções deste [guia](https://docs.ovh.com/pt/hosting/backup-exportacao-base-de-dados/).<br>
2. Elimine o seu servidor CloudDB através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Para isso, clique no canto superior direito no seu nome e depois em `Gestão dos serviços`{.action}. A seguir, clique no botão `...`{.action} à direita da linha em questão e depois `Eliminar o meu alojamento SQL privado`{.action}.

#### Espaço FTP

Antes de passar o seu alojamento numa oferta inferior, certifique-se de que a nova oferta tem espaço de [armazenamento FTP suficiente](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) para que os ficheiros do seu alojamento atual possam ser importados.

A quota utilizada no seu alojamento FTP está visível na secção `Alojamentos`{.action}, na Área de Cliente. Clique no separador `Informações gerais`{.action}, e encontrará a quota no `Espaço de disco`.

![ftp](images/ftp.png){.thumbnail}

#### Endereços de e-mail

Verifique também que a nova oferta inclui um número suficiente de endereços de e-mail disponíveis. Caso contrário, elimine endereços supérfluos, depois de os ter [guardado](https://docs.ovh.com/pt/emails/migrar-os-enderecos-email-manualmente/), se necessário.

Se pretender manter o mesmo número de caixas de correio antes de passar o seu alojamento numa oferta inferior, pode igualmente encomendar uma nova oferta de e-mail **MX Plan**. Na parte `E-mails` {.action}, clique na oferta em causa e, a seguir, no botão `...`{.action} à direita de `Oferta`. Finalmente, clique em `Mudar de oferta`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### Mailing lists

A funcionalidade [Mailing lists](https://docs.ovh.com/pt/emails/email_partilhado_guia_de_utilizacao_de_mailing-lists/) está disponível como opção nos alojamentos [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/) e [Kimsufi Web](https://www.ovhcloud.com/pt/web-hosting/old-web-hosting-offers/).

Para passar o seu alojamento numa oferta [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/), deverá eliminar as mailing lists ou encomendar uma oferta de e-mail que inclua esta funcionalidade (**MX Plan 100** ou **MX Plan Full**) a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

Na parte `E-mails`{.action}, selecione o serviço em causa e clique em `...`{.action} à direita de `Oferta`. Finalmente, clique em `Mudar de oferta`{.action}.

## Quer saber mais? <a name="gofurther"></a>

[Consultar as estatísticas e os logs do meu site alojado numa oferta partilhada](https://docs.ovh.com/pt/hosting/partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/)

[Otimizar o desempenho do seu site](https://docs.ovh.com/pt/hosting/partilhado_guia_de_otimizacao_das_performances_do_seu_site/)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
