---
title: "Alojamento web: como fazer evoluir a sua oferta?"
excerpt: "Saiba como alterar a forma de subscrição do seu plano de alojamento web da OVHcloud"
updated: 2024-10-03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A sua [Área de Cliente OVHcloud](/links/manager) permite aumentar as capacidades dos seus [planos de alojamento web](/links/web/hosting). Assim, pode dispor de:

- de um alojamento mais potente;
- mais espaço de armazenamento FTP;
- de bases de dados suplementares; 
- endereços de e-mail adicionais;
- de funcionalidades suplementares como as [mailing-lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) (a partir de [a oferta Pro](/links/web/hosting-professional-offer)) ou o [serviço Web Cloud Databases](/links/web/databases){.external} (incluído em [oferta Performance](/links/web/hosting-performance-offer).

**Saiba como fazer evoluir a sua oferta de alojamento OVHcloud, sem interrupção de serviço.**

## Requisitos

- Dispor de um [plano de alojamento web](/links/web/hosting)
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)
- Ser, no mínimo, o contacto « [Administrador](/pages/account_and_service_management/account_information/managing_contacts) » dos serviços para os quais pretende alterar a subscrição.

## Instruções

> [!warning]
>
> **Antes** de efetuar qualquer alteração na subscrição atual, verifique se alguma das seguintes questões se aplica a si:
>
> - [Como fazer evoluir o meu alojamento gratuito 100M para uma oferta de alojamento web?](#100m)
> - [Como beneficiar de um ganho temporário de desempenho na minha oferta de alojamento Performance?](#boost)
> - [Vou perder o tempo restante na minha oferta de alojamento atual quando mudar para outro serviço?](#billing)
> - [É possível alterar a minha oferta atual para uma oferta inferior?](#checks)
>

### Alterar a oferta de alojamento web <a name="modify"></a>

Para alterar a sua subscrição, aceda à [Área de Cliente OVHcloud](/links/manager) na parte `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o alojamento correspondente.

No quadro `Subscrição`, clique no botão `...`{.action} à direita de `Oferta` e, a seguir, em `Mudar de oferta`{.action}.

![change_plan](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/pro-change-plan.png){.thumbnail}

De seguida, selecione a nova subscrição e a respetiva duração. Valide os contratos correspondentes e clique em `Enviar`{.action}.

### Verifique se o seu alojamento web é compatível com uma oferta da gama inferior <a name="checks"></a>

> [!warning]
>
> A alteração da subscrição para uma oferta da gama baixa só é possível se for a oferta **imediatamente inferior**.
> Por exemplo, não pode passar de uma fórmula *Performance 2* para uma fórmula *Pro* numa única operação.
> **Deverá** fazer evoluir o seu alojamento web a partir da fórmula *Performance 2* para a oferta *Performance 1** e depois** para a oferta *Pro*.

**Antes de alterar para uma gama inferior**, verifique as 6 seguintes opções:

#### 1 - Bases de dados Start SQL

Certifique-se de que a nova oferta inclui suficientes [bases de dados](/links/web/hosting-options-startsql). Verifique também se o tamanho é suficiente.

Caso contrário, elimine as bases de dados não utilizadas e, se necessário, reduza a quantidade de dados nelas contida. Esta quantidade não deverá ultrapassar a dimensão máxima das bases de dados da nova oferta. Para qualquer pedido de assistência sobre as manipulações a efetuar, contacte os [parceiros OVHcloud](/links/partner).

Após a eliminação dos dados das suas bases de dados, recalcule o limite utilizado. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamento web`{.action} e selecione o alojamento web em causa. Na página que se abrir, aceda ao separador `Bases de dados`{.action} e clique no botão `...`{.action} à direita da base de dados em causa e, a seguir, em `Recalcular o limite`{.action}.

![quota](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/recalculate-quota.png){.thumbnail}

> [!primary]
>
> Recalcular o limite da sua base de dados pode levar até **15 minutos**. Não hesite em recarregar a página a partir do seu browser Internet se o limite recalculado não for apresentado espontaneamente.
>

#### 2 - Web Cloud Databases

Se utilizar a oferta [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) incluída com o seu alojamento web [Performance](/links/web/hosting-performance-offer) e pretender colocar o seu alojamento web numa oferta [Pro](/links/web/hosting-professional-offer), deverá primeiro dissociar a oferta Web Cloud Databases do seu alojamento web.<br>
Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamento web`{.action} e selecione o alojamento web em causa. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}. Na coluna central `Configuração`, clique no botão `...`{.action} à direita da menção `Web Cloud Databases`{.action} e, a seguir, em `Desassociar`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/wcdb-detach.png){.thumbnail}

Esta ação permitir-lhe-á encomendar uma oferta Web Cloud Databases independente da sua subscrição *Performance*. Os dados do seu servidor serão conservados.

Se não deseja conservar estes dados, pode igualmente eliminar o seu serviço Web Cloud Databases antes de passar para a oferta *Pro* : 

1. Efetue o backup dos seus dados conforme indicado neste [guia](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).<br>
2. Elimine o seu servidor Web Cloud Databases através da [Área de Cliente OVHcloud](/links/manager). Para isso, aceda à [Área de Cliente OVHcloud](/links/manager), clique no canto superior direito do rato sobre o seu nome e, a seguir, clique no ícone `Produtos e serviços`{.action}. Clique então no botão `...`{.action} à direita da linha da oferta Web Cloud Databases/SQL Privado em causa e depois em `Eliminar o meu alojamento SQL Privado`{.action}.

#### 3 - Espaço de armazenamento FTP

Certifique-se de que a nova oferta oferece um espaço de armazenamento [FTP](/pages/web_cloud/web_hosting/ftp_connection) suficiente para que seja possível a importação dos ficheiros do seu alojamento atual.

Para verificar a quota de espaço de armazenamento FTP utilizado no seu alojamento web, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página `Informações gerais`{.action} que é apresentada, encontre a quota sob a menção `Espaço de disco`.

![ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}

#### 4 - Endereços de e-mail

Certifique-se de que a nova oferta inclui endereços de correio eletrónico suficientes disponíveis. Caso contrário, remova os endereços de e-mail não utilizados após [copiar](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) os respetivos conteúdos, se necessário.

Se pretender conservar o mesmo número de caixas de correio e **antes de passar o seu alojamento web para uma oferta inferior**, é igualmente possível encomendar uma nova oferta de correio eletrónico **MX Plan**. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `E-mails`{.action} e selecione o serviço de e-mail em causa. Na página que se abrir, na caixa `Subscrição`{.action} e à direita da menção `Oferta`{.action}, clique no botão `...`{.action} e, a seguir, em `Mudar de oferta`{.action}.

![mxplan](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/change-solution.png){.thumbnail}

>[!primary]
>
> Se o botão `...`{.action} estiver indisponível no seu serviço de e-mail, pode desassociar o serviço de e-mail do seu alojamento web. Para isso, fique ligado à [Área de Cliente OVHcloud](/links/manager) na parte `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página `Informações gerais`{.action} que se abrir, e na caixa `Configuração`{.action}, clique no botão `...`{.action} à direita da menção `Endereços de e-mail`{.action} e, a seguir, em `Desassociar a minha opção de e-mail`{.action}.
>

#### 5 - Mailing lists

A funcionalidade [Mailing lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) é opcional nos alojamentos [Perso](/links/web/hosting-personal-offer).

Para passar o seu alojamento web para uma oferta [Perso](/links/web/hosting-personal-offer), deverá em primeiro lugar eliminar as mailing lists ou encomendar uma oferta de correio eletrónico que inclua esta funcionalidade (**MX Plan 100** ou **MX Plan Full**) a partir da sua [Área de Cliente OVHcloud](/links/manager).

Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `E-mails`{.action} e selecione o serviço de e-mail em causa. Na página que se abrir, na caixa `Subscrição`{.action} e à direita da menção `Oferta`{.action}, clique no botão `...`{.action} e, a seguir, em `Mudar de oferta`{.action}.

>[!primary]
>
> Se o botão `...`{.action} estiver indisponível no seu serviço de e-mail, pode desassociar o serviço de e-mail do seu alojamento web. Para isso, fique ligado à [Área de Cliente OVHcloud](/links/manager) na parte `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página `Informações gerais`{.action} que se abrir, e na caixa `Configuração`{.action}, clique no botão `...`{.action} à direita da menção `Endereços de e-mail`{.action} e, a seguir, em `Desassociar a minha opção de e-mail`{.action}.
>

#### 6 - Utilizadores FTP

Certifique-se de que a nova oferta oferece utilizadores FTP em número suficiente.

O número de utilizadores FTP pode ser consultado na Área de Cliente OVHcloud. Uma vez ligado, aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página que se abrir, clique no separador `FTP-SSH`{.action}.

Na parte inferior da página que aparece, há uma tabela que lista todos os utilizadores FTP criados para o seu alojamento web.

Para eliminar utilizadores FTP, clique no botão `...`{.action} à direita do utilizador FTP que pretende eliminar e, a seguir, em `Eliminar`{.action}.

![user FTP deletion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-ftp-user-2.png){.thumbnail} 

#### Finalização

Depois de verificar estes 6 pontos, pode realizar o seu [alteração da oferta](#modify).

### Casos particulares

#### Possui uma oferta de alojamento gratuito 100M <a name="100m"></a>

Se efetuar uma alteração a partir de uma oferta de [alojamento gratuito 100M](/pages/web_cloud/web_hosting/activate_start10m), apenas [a oferta Perso](/links/web/hosting-personal-offer) lhe será proposta. No entanto, após uma alteração para a oferta Perso, poderá fazer evoluir esta última para o conjunto dos nossos [alojamentos web](/links/web/hosting).

Siga [estas instruções](#modify) para realizar a sua alteração de oferta.

#### Boost temporariamente ao seu alojamento Performance <a name="boost"></a>

Com a [opção Boost](/links/web/hosting-options-boost), disponível nas nossas ofertas *Performance*, pode aumentar temporariamente os recursos de CPU e RAM do seu alojamento web para absorver um aumento pontual do tráfego. Se este aumento se prolongar no tempo, pode igualmente [migrar para a oferta Performance de nível superior](#modify) de forma a dispor destes recursos de forma permanente.

> [!warning]
>
> Quando decide ativar a opção Boost, esta continua ativa e faturada **enquanto não a desativar**.

Se a opção **Boost** for adequada às suas necessidades, encontrará abaixo as instruções para **ativar** ou **desativar** esta opção no seu alojamento.

> [!tabs]
> **Ativar a opção Boost**
>>>
>>> Para ativar a opção Boost, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e selecione o alojamento web em causa. No quadro "Informações gerais" da página que se abrir, clique no botão `...`{.action} à direita de `Boost` e, a seguir, em `Aplicar opção boost ao serviço`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/boost-my-hosting-plan.png){.thumbnail}<br>
>>>
> **Desativar a opção Boost**
>>>
>>> Para desativar a opção Boost, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Na coluna da esquerda, clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página que se abrir, aceda ao separador `Mais` e clique em `Aplicar opção boost ao serviço`{.action}.<br>
>>> Aparece o quadro de utilização da opção Boost, clique em `Desativar a opção boost`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/boost-my-hosting-plan/deactivate-the-boost-plan.png){.thumbnail}<br>

#### A faturação em caso de alteração da oferta <a name="billing"></a>

Quando altera a sua oferta inicial para uma oferta superior, é aplicado um cálculo *pro rata temporis* até à próxima data de renovação dessa subscrição inicial.
Este cálculo corresponde à diferença de preço entre a sua oferta inicial e a sua nova oferta.

> **Exemplo:**<br>
>
> Subscreveu a subscrição [Perso](/links/web/hosting-personal-offer) em 1 de janeiro de 2024.
>
> Em 31 de outubro de 2024, a renovação desta oferta **Perso** passa para uma subscrição da oferta [Pro](/links/web/hosting-professional-offer).<br>
>
> Por conseguinte, o montante correspondente à duração restante da subscrição **Perso** (2 meses, de 1 de novembro de 2024 a 1 de janeiro de 2025) é automaticamente subtraído do custo da nova subscrição **Pro* até 1 de janeiro de 2025. Você só pagará a diferença.
> A partir de 1 de janeiro de 2025, a subscrição **Pro** é faturada ao preço atual.

Siga [estas instruções](#modify) para realizar a sua alteração de oferta.

## Quer saber mais? <a name="go-further"></a>

[Consultar as estatísticas e os logs de um site alojado numa oferta partilhada](/pages/web_cloud/web_hosting/logs_and_statistics)

[Otimização das performances do seu site](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).