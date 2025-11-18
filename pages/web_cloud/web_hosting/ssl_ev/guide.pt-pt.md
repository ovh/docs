---
title: "Alojamento web - Ativar um certificado SSL Sectigo EV"
excerpt: "Saiba como encomendar e instalar um certificado SSL Sectigo EV no seu alojamento Web OVHcloud"
updated: 2025-06-16
---

## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha "ouvir" claramente os pedidos enviados ou enviados com o seu website.

A OVHcloud propõe vários tipos de certificados SSL nas nossas ofertas de [alojamento partilhado OVHcloud](/links/web/hosting). Estes são apresentados no nosso guia "[Gerir um certificado SSL no seu alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Os certificados SSL são incontornáveis para a segurança do seu website.

Existem três tipos de certificados SSL:

- Domain Validation (DV)
- Organização de validação (OV)
- Extended Validação (EV)

Os níveis de encriptação SSL são idênticos entre estes três tipos de certificados.

A principal diferença reside no nível de controlos que será realizado pela Autoridade de Certificação (AC) que emite o certificado SSL e certifica a sua autenticidade.

Os certificados SSL EV são aqueles para os quais os níveis de verificação e de segurança são mais elevados. Geralmente, o certificado SSL EV é utilizado para grandes websites ou websites sensíveis. Este certificado fornecerá o mais alto nível de identificação disponível.

Para os alojamentos partilhados da OVHcloud, a autoridade de certificação que emite os certificados SSL EV é [Sectigo](https://sectigostore.com).

> [!warning]
>
> Os certificados SSL EV não estão disponíveis para toda a gente. Verifique se é elegível para a sua subscrição **antes** de encomendar este último, com a ajuda dos elementos indicados nos [Requisitos](#requirements) deste guia.
>
> Tenha em conta que, uma vez a encomenda iniciada e transmitida ao nosso fornecedor de certificados/autoridade de certificação Sectigo, **nenhum reembolso será possível**.
>

**Descubra como encomendar e instalar um certificado SSL Sectigo EV no seu alojamento Web OVHcloud**
    
## Requisitos <a name="requirements"></a>

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Encomendar ou dispor de um [alojamento partilhado OVHcloud](/links/web/hosting) no qual nenhum certificado SSL já está instalado.
- Encomendar ou dispor de um [nome de domínio](/links/web/domains) e dispor dos direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.
- ser uma organização (empresa, agência governamental, etc.) registada num registo oficial.
- Ter a autorização da sua organização para encomendar um certificado SSL Sectigo EV.
- estar em condições de justificar com exatidão as informações e os dados relativos à sua organização.

Para verificar se é elegível para a subscrição de um certificado SSL Sectigo EV, aceda a [este link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-).
  
## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). De facto, não poderemos prestar-lhe assistência **para todas as etapas de verificação diretamente realizadas com a autoridade de certificação Sectigo**. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.
>

### Etapa 1: encomendar o certificado SSL Sectigo EV

Os certificados SSL Sectigo EV propostos na OVHcloud só são válidos para um dos dois casos seguintes no seu alojamento web:

- um único domínio + o seu subdomínio em "www" (exemplo: `domain.tld` e `www.domain.tld`);
- um único subdomínio (exemplo: `sub.domain.tld`).

Isto significa que se tiver outros domínios/subdomínios declarados em multi-site no seu alojamento web, estes não poderão beneficiar de um certificado SSL.

De facto, só é possível instalar um único certificado SSL por alojamento web.

Se precisar de ativar um certificado SSL para vários domínios/subdomínios declarados no seu alojamento web, favoreça a instalação de um [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) ou instale o seu próprio [certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

#### 1.1 - Para um domínio e um alojamento já existentes na OVHcloud

> [!warning]
>
> **Antes de continuar**, verifique se **o nome de domínio e/ou subdomínio** relacionado com o seu futuro certificado SSL Sectigo EV:
>
> - aponta para o endereço IP do seu alojamento web;
> - está declarado em multi-site no seu alojamento web.
>
> Para mais informações, consulte os nossos manuais:
>
> - [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>
> Se pretender subscrever a um certificado SSL Sectigo EV para um domínio (exemplo: `domain.tld`), verifique se o seu subdomínio em "www" (exemplo: `www.domain.tld`) aponta também para o endereço IP do seu alojamento web e está corretamente declarado em multi-site.
>
> Sim, se aplicável, e se encomendar o certificado SSL Sectigo EV sem verificar os pontos anteriores, deverá efetuar uma correção a posteriori. Deverá eliminar o certificado SSL Sectigo EV que subscreveu anteriormente **sem poder beneficiar de um reembolso**, e depois encomendar um novo certificado. O objetivo é que o novo certificado SSL Sectigo EV englobe o seu domínio `domain.tld` e o seu subdomínio em "www" `www.domain.tld`.
>
> Lembrete: se subscrever a um certificado SSL Sectigo EV diretamente para um subdomínio (exemplo: `sub.domain.tld`), não é afetado por esta situação.

> [!primary]
>
> **Informações sobre a migração para a nova interface de gestão de certificados SSL:**
>
> O restante da parte 1.1 destina-se aos clientes cujos serviços de alojamento web ainda não migraram para a nova interface de gestão dos certificados SSL.
> Para detetar se esta migração foi efetuada, aceda ao seu alojamento web na Área de Cliente OVHcloud e verifique a presença do separador `Certificados SSL`.
> Se estiver presente o separador `Certificados SSL`, o seu serviço já migrou para a nova interface de gestão. Neste caso, consulte diretamente [este manual](/pages/web_cloud/web_hosting/ssl_management) para gerir o seu certificado SSL.
>
> Por razões técnicas, nem todos os serviços de alojamento web de todos os nossos clientes podem ser migrados de uma só vez. Esta migração é, por isso, repartida durante algumas semanas e é realizada de forma automática, sem qualquer incidência no funcionamento dos seus serviços de alojamento web, e sem qualquer intervenção ou ação necessária da sua parte.
>
> A prazo, todos os serviços de alojamento web funcionarão com a nova interface de gestão dos certificados SSL.

Para encomendar o certificado SSL Sectigo EV, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}.
6. Aceda à caixa chamada `Configuração`.
7. À direita da menção `Certificado SSL`, clique no botão `...`{.action} e, a seguir, em `Encomendar um certificado SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Na janela que surgir, selecione `Certificado pago`{.action} entre a lista das opções possíveis.

De seguida, selecione o domínio/subdomínio em causa na lista pendente apresentada e clique em `Seguinte`{.action}.

Na nova janela que se abrir, clique em `Validar`{.action} para ser reencaminhado para a nota de encomenda do seu certificado SSL Sectigo EV.

Selecione o **Certificado SSL Sectigo EV** uma vez chegado o túnel de encomenda e prossiga a encomenda.


Insira com exatidão as informações solicitadas por **Sectigo** antes que lhe seja emitido o certificado SSL Sectigo EV. 

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Clique em `Continuer`{.action} depois de **todos os elementos** estarem corretamente inseridos.

Continue a encomenda até ao pagamento para validar o pedido de criação do certificado SSL.

> [!alert]
>
> Uma vez validada a encomenda, o pedido de certificado SSL Sectigo EV é enviado à autoridade de certificação **Sectigo**.
>
> Certifique-se imperativamente de que é elegível para a subscrição de um certificado SSL Sectigo EV **antes de pagar o certificado**.
>
> Com efeito, não será possível qualquer reembolso do SSL Sectigo EV, **mesmo que o processo de verificação junto do Sectigo não seja bem sucedido**.
>

#### 1.2 - Para um novo nome de domínio e um novo alojamento

Se ainda não encomendou o seu nome de domínio e o alojamento associado, aceda à nossa [página inicial da OVHcloud](/links/website), introduza um nome de domínio no **formulário de pesquisa previsto para este efeito** e clique em `Pesquisar`{.action} para iniciar a sua encomenda.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

De seguida, selecione o seu nome de domínio, escolha o seu alojamento e as suas opções até ao passo `Configure o seu alojamento web`.

Selecione as suas escolhas de instalação de `módulo em 1 clique`{.action} e `CDN`{.action}, e desça no final da página até à secção `Torne o seu website seguro com os nossos certificados SSL`{.action}.
 
![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Escolha `Sectigo EV SSL`{.action} e depois clique em `Seguinte`{.action}.

Na nova página que aparece, introduza com exatidão as informações solicitadas por **Sectigo** antes que lhe seja emitido o certificado SSL Sectigo EV:

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Clique em `Seguinte`{.action} depois de **todos os elementos** estarem corretamente inseridos.

Continue a encomenda até o pagamento ser efetuado para iniciar a instalação dos seus serviços.

> [!alert]
>
> Uma vez validada a encomenda, o pedido de certificado SSL Sectigo EV é enviado à autoridade de certificação **Sectigo**. 
>
> Certifique-se imperativamente de que é elegível para a subscrição de um certificado SSL Sectigo EV **antes de pagar o certificado**.
>
> Com efeito, não será possível qualquer reembolso do SSL Sectigo EV, **mesmo que o processo de verificação junto do Sectigo não seja bem sucedido**.
>

### Etapa 2 : verificações com a Autoridade de Certificação (AC) Sectigo

Todas as ações descritas nesta etapa podem ser realizadas durante vários dias. Os prazos **dependem** das verificações realizadas por Sectigo.

> [!warning]
>
> Nesta etapa, todo o processo depende do fornecedor do certificado **Sectigo** e das informações introduzidas aquando da encomenda do certificado SSL Sectigo EV. 
>
> Apenas **Sectigo** poderá intervir nesta etapa e a OVHcloud não poderá agir a este nível.
>
> De facto, o papel do AC Sectigo é certificar, de forma independente e imparcial, as informações da sua organização para as integrar no certificado SSL Sectigo EV.
>
> É **Sectigo** que decide emitir um certificado SSL Sectigo EV e de forma alguma a OVHcloud. Sectigo é, por definição, o único com autoridade em matéria de certificação.
>

#### 2.1 - Receção do e-mail de confirmação por Sectigo

Depois de efetuar a encomenda, o Sectigo enviar-lhe-á um e-mail com um link de validação e um procedimento a seguir.
Verifique as suas informações e valide o seu pedido seguindo as indicações presentes neste e-mail. 

Para garantir que a troca de e-mail com Sectigo é efetuada corretamente, verifique também a validade do endereço de e-mail indicado no formulário aquando da encomenda do SSL Sectigo EV, bem como o endereço de e-mail associado ao seu [Área de Cliente OVHcloud](/links/manager).

> [!primary]
>
> Em paralelo e para certificar a propriedade do seu domínio junto do Sectigo, é automaticamente implementado um ficheiro em formato *.txt* no espaço FTP do seu alojamento web. Este será eliminado quando deixar de ser necessário para Sectigo.
>
> Tenha em conta que algumas restrições aplicadas pelo seu lado (como num ficheiro ".htaccess", por exemplo) podem impedir esta verificação.
> Se as autorizações de acesso FTP "CHMOD" forem também limitadas ou insuficientes, a verificação pode igualmente ser bloqueada.
>
> Também recomendamos que **não** ative ou deixe ativo o [firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), disponível com os nossos alojamentos web, durante toda a duração da instalação do seu certificado SSL Sectigo EV.
>

#### 2.2 - Verificações feitas pela Autoridade de Certificação Sectigo

Sectigo vai depois verificar que a sua organização existe e está bem registada nos registos oficiais.

> [!primary]
>
> Sectigo pode não estar em condições de verificar todas as informações junto dos registos oficiais. Os serviços de Sectigo podem contactá-lo por telefone através do número que indicou durante a encomenda ou através do número de telefone oficial da sua organização.
>

Sectigo vai depois verificar se tem a exclusividade/autoridade sobre a propriedade e a utilização do domínio com o qual vai utilizar o certificado SSL Sectigo EV.

#### 2.3 - Últimas verificações por telefone com Sectigo

Depois de realizar as verificações por Sectigo, os seus serviços serão contactados por telefone para finalizar a subscrição do seu certificado SSL Sectigo EV.

> [!success]
>
> Para mais informações sobre as operações descritas na **etapa 2**, consulte a [documentação oficial de Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-) sobre o assumpto.
>

### Etapa 3 : instalação do certificado SSL Sectigo EV com o seu domínio e o seu alojamento OVHcloud

Depois de Sectigo ter procedido a todas as verificações, os seus serviços geram o certificado SSL Sectigo EV e transmitem-nos os elementos necessários à sua instalação no seu alojamento.

Só precisa de [atualizar o seu website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website) para utilizar plenamente o seu certificado SSL Sectigo EV.

## Quer saber mais? <a name="go-further"></a>

[Site oficial Sectigo](https://sectigostore.com)

[Descrição das verificações efetuadas pela Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-)

[Gerir um certificado SSL no alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Passar o seu website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 