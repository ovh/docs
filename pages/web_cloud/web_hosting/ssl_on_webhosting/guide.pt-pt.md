---
title: "Gerir um certificado SSL num alojamento web"
excerpt: "Saiba como gerir um certificado SSL no alojamento web da OVHcloud"
updated: 2023-12-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

O seu alojamento web permite-lhe gerir um certificado SSL. Podem encomendá-lo através da OVHcloud ou comprar um e importá-lo para o seu alojamento. Depois de configurado e instalado, este certificado fornece a um ou vários dos seus websites uma ligação SSL segura, o que permite que os websites funcionem em HTTPS.

**Saiba como gerir um certificado SSL num alojamento web da OVHcloud.**

## Requisitos

- Dispor de um [alojamento web da OVHcloud](/links/web/hosting){.external}.
- Ter registado, pelo menos, um [nome de domínio](/links/web/domains){.external}.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}, na secção “Web”.

## Instruções

São necessários vários passos para gerar um certificado SSL no seu alojamento web da OVHcloud. Recomendamos que siga *por esta ordem* os 3 passos descritos abaixo.

[1. Ativar um certificado SSL num multi-site](#multisite): se a sua solução ou o seu certificado SSL o permitirem, poderá fazer beneficiar vários dos seus multi-sites de uma ligação protegida SSL.

[2. Ativar um certificado SSL no seu alojamento web](#enablessl): ajuda-o a ativar um certificado SSL no seu alojamento web. Pode tratar-se de um certificado gratuito ou pago encomendado junto da OVHcloud. Também pode importar o seu próprio certificado SSL encomendado junto de outro fornecedor.

[3. Gerar um certificado SSL num alojamento web](#regeneratessl): permite-lhe gerar um certificado SSL Let's Encrypt no seu alojamento web quando ativar o SSL num ou vários multi-sites.

Também pode [eliminar o certificado SSL num alojamento web](#deletessl). **Tenha em conta que isto pode apresentar riscos se um dos seus websites utiliza atualmente o certificado que pretende eliminar**.

### 1. Ativar um certificado SSL num multisite <a name="multisite"></a>

Em função do [certificado SSL](/links/web/hosting-options-ssl){.external} que pretende encomendar, pode ativar uma ligação SSL segura num ou vários dos seus multi-sites. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e selecione a `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e escolha o alojamento correspondente. Por fim, clique no separador `Multisite`{.action}.

Aparecerá uma tabela com todos os domínios adicionados ao seu alojamento web. A coluna "SSL" mostra-lhe o estado de ativação das ligações SSL seguras nos seus multi-sites.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

Neste caso, podem surgir três estados:

|Estados|Descrição|
|---|---|
|Ativado|Um certificado SSL já foi ativado para este multisite. No entanto, se o seu website não estiver disponível em HTTPS, consulte as instruções indicadas no nosso manual “[Ativar o HTTPS num website com certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website){.external}”.|
|A gerar / atualizar|Um certificado SSL foi ativado para este multisite, mas ainda não está ativo a nível técnico. Para isso, deverá regenerá-lo para que inclua os novos domínios do multisite.|
|Desativado|Não foi ativado nenhum certificado SSL para este multisite. Para o ativar, siga os passo abaixo.|

Para ativar o SSL num multi-site, clique no botão `...`{.action} à direita do multi-site em causa e, a seguir, em `Alterar o domínio`{.action}. Na nova janela, selecione a caixa `SSL`{.action}. Também pode ativar a opção para modificar o subdomínio www ao mesmo tempo que o nome de domínio associado. Siga os passos para confirmar a alteração.

> [!warning]
>
> A atribuição de um certificado SSL a uma entrada multisite através da tabela "multisite" só pode ser efetuada se encomendou o certificado SSL gratuito **Let's Encrypt** fornecido pela OVHcloud.
>
> Os certificados SSL pagos **Sectigo** (DV e EV) só são válidos para um único domínio (e o seu subdomínio em *www*). Por isso, a menção *Ativado* não poderá aparecer à direita dos outros multi-sites declarados no alojamento web.
>
> Alguns certificados SSL **Externos** podem ser válidos para vários domínios de uma só vez. Se utilizar um destes, o texto *Ativado* também não será apresentado para todos os domínios declarados na tabela "multisite". No entanto, o seu certificado SSL será válido para os nomes de domínios que ele *engloba*.
>

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Uma vez que tenha submetido o pedido de ativação, o estado da ligação protegida SSL para o multi-site em causa deve ser atualizado ao fim de alguns segundos, sendo o estado substituído por "A gerar / atualizar". Repita este processo se pretender ativar um certificado SSL para outros multisites.

> [!primary]
>
> Pode ter duas situações neste estado:
>
> - **Não possui certificados.**
> Consulte este guia na secção [Ativar um certificado SSL no alojamento web](#enablessl) e escolha o "Certificado gratuito (Let's Encrypt)" que trata dos sites multi-sites.
>
> - **O certificado SSL está ativo, mas adicionou outros sites multi-site.**
> Consulte este manual na secção [Gerar um certificado SSL num alojamento Web](#regeneratessl) para regenerar o certificado SSL para os multi-sites restantes.
>

### 2. Ativar um certificado SSL no alojamento web <a name="enablessl"></a>

Antes de realizar esta configuração, certifique-se de que a etapa anterior de [ativação de um certificado SSL num website multisite](#multisite) foi realizada corretamente. Pelo menos um domínio deve ter a opção SSL `Ativado` ou o estado `A gerar / atualizar` para ativar o certificado SSL.<br>
**Estas informações não se aplicam se selecionar `Certificado pago`{.action} ou `Importar do seu certificado SSL`{.action}.**

> [!warning]
>
> Antes de continuar, certifique-se de que as entradas multisite para as quais ativou a opção SSL apontam para o endereço IP do alojamento web. Esta configuração é-lhe automaticamente proposta quando adiciona ou modifica uma entrada multi-site, mas deve ser feita manualmente para um nome de domínio que não é gerido na sua Área de Cliente.<br>
> - Encontre o endereço IP do seu alojamento a partir do separador `Informações gerais`{.action}, na menção `IPv4`.
> ![managessl](images/find-ipv4.png){.thumbnail}
> - Configure a zona DNS do domínio declarado em multi-site, a partir da rubrica `Domínio`{.action}, onglet `Zona DNS`{.action}. Altere ou adicione um registo de tipo `A` para a sua entrada multisite e indique o endereço IP do seu alojamento na `Alvo`.
> ![managessl](images/modify-an-entry.png){.thumbnail}
>
> Para mais informações, consulte os nossos manuais [sobre a configuração de uma entrada multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) ou sobre [a configuração de uma zona DNS](/pages/web_cloud/domains/dns_zone_edit).

O alojamento web da OVHcloud permite-lhe ativar um [certificado SSL graças a várias soluções](/links/web/hosting-options-ssl){.external}:

- um certificado SSL gratuito Let's Encrypt, [incluído num plano de alojamento web compatível](/links/web/hosting-options-ssl){.external};
- um certificado SSL pago, [como opção num plano de alojamento web compatível](/links/web/hosting-options-ssl){.external};
- a importação de um certificado SSL encomendado junto de outro fornecedor.

Para ativar o certificado, aceda à [Área de Cliente OVHcloud](/links/manager){.external}e selecione a opção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e escolha o nome do alojamento em causa. Clique no separador `Informações gerais`{.action}. Na secção “Certificado SSL”, deve surgir a menção “Não”, o que indica que não há nenhum certificado instalado no alojamento web. 

Clique no botão `...`{.action} junto de “Certificado SSL” e, a seguir, em `Encomendar um certificado SSL`{.action}.

Por outro lado, se vir a menção “Sim”, isto significa que um certificado SSL já foi instalado e configurado no alojamento web. Por consequente, não poderá encomendar outro certificado enquanto já tiver um instalado.

![managessl](images/order-an-ssl-certificate.png){.thumbnail}

Na janela que aparecer, selecione o certificado SSL que pretende encomendar. Em função da sua [oferta de alojamento web](/links/web/hosting){.external} e da respetiva configuração, é possível que nenhuma das soluções apresentadas abaixo esteja disponível. Uma vez selecionada uma opção, clique no botão `Seguinte`{.action}.

![managessl](images/order-an-ssl-certificate-step-1-le.png){.thumbnail}

Em função da solução que selecionou, poderá ter de realizar alguns passos adicionais:

- **Se selecionou um certificado SSL gratuito**: não deverá ser necessária nenhuma ação adicional, exceto se um elemento técnico impedir a ativação do certificado SSL (nesse caso, surgirá um aviso na Área de Cliente a indicar-lhe os elementos que deve verificar) ou a validação do domínio para a atribuição do certificado SSL. Nesse caso, será notificado e deverá seguir as instruções que receberá;

- **Se selecionou um certificado SSL pago:** deverá concluir o processo de encomenda para receber um certificado. Pode ser necessária uma validação específica para certos tipos de certificados SSL. Poderá receber um ou vários e-mails sobre este assunto. Se tal for o caso, leia as informações enviadas e siga as instruções fornecidas para concluir a configuração;

- **Se optou por importar um certificado SSL:** deverá inserir os detalhes do certificado nas zonas apresentadas. Consulte as informações enviadas pelo fornecedor junto do qual adquiriu o certificado. Normalmente, eles fornecem 3 arquivos: `certificate.crt`, `private.key` e `ca_bundle.crt`. Após selecionar `Importar certificado SSL`{.action}, clique em `Seguinte`{.action}. Na primeira secção "Copiar o conteúdo do seu certificado (apenas RSA):" copie o conteúdo do ficheiro "certificate.crt", na segunda secção "Copiar o conteúdo da sua chave privada (não encriptada):" copie o conteúdo do ficheiro "private.key" e na terceira secção "Copiar o conteúdo da sua cadeia de certificados:" copie o conteúdo do ficheiro "ca_bundle.crt" e clique em `Confirmar`{.action}.

A configuração do certificado pode demorar alguns minutos ou vários dias, dependendo no tipo de certificado selecionado. Para verificar se o certificado SSL já está configurado no alojamento web, aceda à Área de Cliente OVHcloud e clique no separador `Informações gerais`{.action}. A menção “Sim” deve aparecer junto de “Certificado SSL”.

![managessl](images/tab-ssl-le.png){.thumbnail}

### 3. Regenerar um certificado SSL do alojamento web <a name="regeneratessl"></a>

> [!primary]
>
> Esta operação aplica-se apenas aos certificados SSL gratuitos Let's Encrypt [incluído num plano de alojamento web compatível](/links/web/hosting-options-ssl) que permitem ativar uma ligação SSL segura para vários multi-sites.
>

Depois de ativar uma ligação SSL segura num ou vários dos seus multisites, o estado indica “A gerar / atualizar”. Esta geração é essencial para poder adicionar ao certificado SSL do seu alojamento web.

Para isso, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e selecione a `Web Cloud`{.action}. Clique em `Alojamentos` e escolha o nome do alojamento correspondente. Clique no separador `Informações gerais`{.action}. A seguir, clique nos três pontos junto de “Certificado SSL” e selecione `Gerar / atualizar certificado SSL`{.action}.

![managessl](images/regenerate-ssl-certificate.png){.thumbnail}

Na janela que surgir, leia as informações apresentadas e clique no botão `Validar`{.action}. A seguir, aguarde até que o certificado SSL seja gerado. Este passo pode demorar algumas horas.

Tenha em conta que a Let's Encrypt, a autoridade que fornece o certificado SSL incluído no seu alojamento web, impõe um [limite de cinco regenerações por semana](https://letsencrypt.org/docs/rate-limits/){.external}. Assim, fique atento às diferentes regenerações que possa realizar a curto prazo, de modo a evitar um bloqueio temporário.

![managessl](images/ssl-regeneration.png){.thumbnail}

### Eliminar um certificado SSL do alojamento web

Se pretender, também pode eliminar o certificado SSL atualmente instalado no seu alojamento web. Antes de começar a realizar as alterações, **recomendamos vivamente que se certifique de que a eliminação do certificado não irá afetar a disponibilidade dos seus websites**. Tenha em consideração que os visitantes irão ver um erro de segurança caso acedam a um website que funciona em HTTPS, mas que não beneficia de uma ligação SSL segura.

Como esta verificação se realiza diretamente na configuração do website, recomendamos que recorra a um fornecedor especializado se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica.

Quando estiver preparado para eliminar o certificado SSL, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e selecione a `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e escolha o alojamento web em causa. Certifique-se de que está no separador `Informações gerais`{.action}. Clique nos três pontos junto de “Certificado SSL” e selecione a opção `Eliminar o certificado SSL`{.action}.

Na página que aparecer, valide a eliminação. Esta última será concluída em algumas horas.

![managessl](images/delete-ssl.png){.thumbnail}

> [!warning]
>
> A eliminação de um certificado SSL pago **Sectigo** (DV ou EV) é definitiva, mesmo que o certificado ainda não tenha expirado. Não poderá ser efetuado qualquer reembolso proporcional ao tempo restante. Se pretender reinstalar um certificado SSL **Sectigo** (DV ou EV), deverá obrigatoriamente realizar uma nova encomenda e pagar a integralidade do novo certificado SSL subscrito.
>

### Corrigir os erros frequentemente encontrados nos certificados SSL dos alojamentos web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Esta mensagem indica que já é proprietário de um certificado SSL. Por isso, não é necessário ativar um novo certificado SSL (Let's Encrypt) no seu alojamento web.

Consulte a secção "[ativação de um certificado SSL num site multisite](#multisite)" deste guia para continuar as suas ações.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Existem três casos que podem explicar esta notificação.

- 1 : O nome de domínio associado ao seu website aponta para o endereço IP do CDN do seu alojamento web, sem nenhuma opção CDN ativa no seu alojamento web:

Para resolver esta situação, através da zona DNS ativa do seu domínio, atribua o endereço IP do alojamento web sem CDN ao seu domínio.

Para obter o endereço IP do alojamento web, consulte o guia "[Lista de endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar a zona DNS ativa do seu domínio, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 2 : O nome de domínio associado ao seu website não aponta para o endereço IP do seu alojamento web:

Para resolver esta situação, através da zona DNS ativa do seu domínio, atribua o endereço IP do alojamento web ao seu domínio.
Se ativou uma opção CDN no seu alojamento web, pode igualmente utilizar o endereço IP do alojamento web com CDN.

Para obter o endereço IP do alojamento web, consulte o guia "[Lista de endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar a zona DNS ativa do seu domínio, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 3 : Nenhum dos nomes de domínios presentes no separador "multi-site" dispõe de uma opção SSL "ativa" :

Para resolver a situação, ative o certificado SSL para o(s) nome(s) de domínio. Se necessário, consulte a secção "[ativar um certificado SSL num site multisite](#multisite)" deste guia para continuar as suas ações.

#### O certificado SSL está ativo no seu alojamento web, mas encontrará a mensagem "Your connection is not private" no seu website

Esta mensagem é apresentada nos seguintes casos:

- 1: A regra de reencaminhamento para o seu URL em "HTTPS" está mal configurada ou não existe no ficheiro ".htaccess":

Para corrigir isto, consulte o nosso tutorial "[Reescrever o URL de acesso ao meu site graças ao mod_rewrite através do ficheiro .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" ou recorra a um [fornecedor especializado](/links/partner) se encontrar dificuldades.

- 2 : Alguns elementos da página web não são corretamente reencaminhados para elementos encriptados em "HTTPS":

Para corrigir isto, deve certificar-se de que o conjunto do seu website está encriptado com o protocolo "HTTPS".
Se necessário, consulte o nosso tutorial "[Alojamento web: transformar o seu website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)" ou recorra a um [fornecedor especializado](/links/partner) se encontrar dificuldades.

> [!success]
>
> Os elementos da página web podem ser vistos diretamente a partir das informações SSL do browser, consultando os *detalhes do Certificado*.
>

#### Encomendou o SSL Sectigo EV juntamente com o seu alojamento web, mas o certificado ainda não está ativo e o alojamento web não está a funcionar corretamente

Esta situação está ligada aos passos que deve realizar a fim de ativar o SSL EV no seu alojamento web.

Caso seja necessário, consulte o guia "[Utilizar um certificado SSL EV para o seu website](/pages/web_cloud/web_hosting/ssl_ev)" para resolver esta situação.

> [!primary]
>
> Se o certificado SSL EV não estiver totalmente ativo, a encomenda nunca será encerrada e nunca irá gerar uma fatura. Por este motivo, o serviço de alojamento web não funciona corretamente.
>

#### Após a expiração do Certificado SSL Sectigo (DV ou EV), encontrará o erro "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Este erro ocorre sempre que o Certificado SSL Sectigo (ativado diretamente a partir do alojamento web) expira e o endereço IP do alojamento web muda. Como tal, deve apontar o seu domínio para o endereço IP correto (registo do tipo A), diretamente a partir da zona DNS ativa do seu domínio.

Para obter o endereço IP do alojamento web, consulte o guia "[Lista de endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar a zona DNS ativa do seu domínio, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).