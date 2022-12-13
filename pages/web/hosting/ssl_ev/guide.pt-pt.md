---
title: "Utilizar um certificado SSL EV para o seu website"
slug: ssl-ev
excerpt: "Saiba como encomendar e instalar um certificado SSL EV no seu alojamento Web OVHcloud"
section: SSL
order: 03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 13/12/2022**
  
## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha "ouvir" claramente os pedidos enviados ou enviados com o seu website.

A OVHcloud propõe vários tipos de certificados SSL nas nossas ofertas de[alojamento partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/). Estes são apresentados no nosso guia "[Gerir um certificado SSL no seu alojamento web](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/)". Os certificados SSL são incontornáveis para a segurança do seu website.

Existem três tipos de certificados SSL:

- Domain Validation (DV)
- Organização de validação (OV)
- Extended Validação (EV)

Os níveis de encriptação SSL são idênticos entre estes três tipos de certificados.

A principal diferença reside no nível de controlos que será realizado pela Autoridade de Certificação (AC) que emite o certificado SSL e certifica a sua autenticidade.

Os certificados SSL EV são aqueles para os quais os níveis de verificação e de segurança são mais elevados. Geralmente, o certificado SSL EV é utilizado para grandes websites ou websites sensíveis. Este certificado fornecerá o mais alto nível de identificação disponível.

Para os alojamentos partilhados da OVHcloud, a autoridade de certificação que emite os certificados SSL EV é [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Os certificados SSL EV não estão disponíveis para toda a gente. Verifique se é elegível para a sua subscrição **antes** de encomendar este último, com a ajuda dos elementos indicados nos [Requisitos](#requirements) deste guia.
>
> Tenha em conta que, uma vez a encomenda iniciada e transmitida ao nosso fornecedor de certificados/autoridade de certificação Sectigo, **nenhum reembolso será possível**.
>

**Descubra como encomendar e instalar um certificado SSL EV no seu alojamento Web OVHcloud**
    
## Requisitos <a name="requirements"></a>

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Encomendar ou dispor de um [alojamento partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) no qual nenhum certificado SSL já está instalado.
- Encomendar ou dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/) e dispor dos direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.
- ser uma organização (empresa, agência governamental, ...) registada num registo oficial.
- Ter a autorização da sua organização para encomendar um certificado SSL EV.
- estar em condições de justificar com exatidão as informações e os dados relativos à sua organização.

Para verificar se é elegível para a subscrição de um certificado SSL EV, aceda a [este link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
  
## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). De facto, não poderemos prestar-lhe assistência **para todas as etapas de verificação diretamente realizadas com a autoridade de certificação Sectigo**. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.
>

### Etapa 1: encomendar o certificado SSL EV

#### 1.1 - Para um domínio e um alojamento já existentes na OVHcloud

Consulte o nosso guia sobre como [gerir um certificado SSL no alojamento web](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/) e selecione o **Certificado SSL EV** uma vez chegado ao túnel de comando.

Insira com exatidão as informações solicitadas por **Sectigo** antes que lhe seja emitido o certificado SSL EV. 

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Clique em 'Continuer {.action} depois de **todos os elementos** estarem corretamente inseridos.

Continue a encomenda até ao pagamento para validar o pedido de criação do certificado SSL.

> [!alert]
>
> Uma vez validada a encomenda, o pedido de certificado SSL EV é enviado à autoridade de certificação **Sectigo**.
>
> Certifique-se imperativamente de que é elegível para a subscrição de um certificado SSL EV **antes de pagar o certificado**.
>
> Com efeito, não será possível qualquer reembolso do SSL EV, **mesmo que o processo de verificação junto do Sectigo não seja bem sucedido**.
>

#### 1.2 - Para um novo nome de domínio e um novo alojamento

Se ainda não encomendou o seu nome de domínio e o alojamento associado, aceda à nossa [página inicial da OVHcloud](https://www.ovhcloud.com/pt/), introduza um nome de domínio no **formulário de pesquisa previsto para este efeito** e clique em `Pesquisar`{.action} para iniciar a sua encomenda.

![SSL EV select domain](images/ssl_ev_order_1.png){.thumbnail}

De seguida, selecione o seu nome de domínio, escolha o seu alojamento e as suas opções até ao passo `Configure o seu alojamento web`.

Selecione as suas escolhas de instalação de `módulo em 1 clique`{.action} e `CDN`{.action}, e desça no final da página até à secção `Torne o seu website seguro com os nossos certificados SSL`{.action}.

![SSL EV order](images/ssl_ev_order.png){.thumbnail}

Escolha `Sectigo EV SSL`{.action} e depois clique em `Seguinte`{.action}.

Na nova página que aparece, introduza com exatidão as informações solicitadas por **Sectigo** antes que lhe seja emitido o certificado SSL EV:

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Clique em `Seguinte`{.action} depois de **todos os elementos** estarem corretamente inseridos.

Continue a encomenda até o pagamento ser efetuado para iniciar a instalação dos seus serviços.

> [!alert]
>
> Uma vez validada a encomenda, o pedido de certificado SSL EV é enviado à autoridade de certificação **Sectigo**. 
>
> Certifique-se imperativamente de que é elegível para a subscrição de um certificado SSL EV **antes de pagar o certificado**.
>
> Com efeito, não será possível qualquer reembolso do SSL EV, **mesmo que o processo de verificação junto do Sectigo não seja bem sucedido**.
>

### Etapa 2 : verificações com a Autoridade de Certificação (AC) Sectigo

Todas as ações descritas nesta etapa podem ser realizadas durante vários dias. Os prazos **dependem** das verificações realizadas por Sectigo.

> [!warning]
>
> Nesta etapa, todo o processo depende do fornecedor do certificado **Sectigo** e das informações introduzidas aquando da encomenda do certificado SSL EV. 
>
> Apenas **Sectigo** poderá intervir nesta etapa e a OVHcloud não poderá agir a este nível.
>
> De facto, o papel do AC Sectigo é certificar, de forma independente e imparcial, as informações da sua organização para as integrar no certificado SSL EV.
>
> É **Sectigo** que decide emitir um certificado SSL EV e de forma alguma a OVHcloud. Sectigo é, por definição, o único com autoridade em matéria de certificação.
>

#### 2.1 - Receção do e-mail de confirmação por Sectigo

Depois de efetuar a encomenda, o Sectigo enviar-lhe-á um e-mail com um link de validação e um procedimento a seguir.
Verifique as suas informações e valide o seu pedido seguindo as indicações presentes neste e-mail. 

Para garantir que a troca de e-mail com Sectigo é efetuada corretamente, verifique também a validade do endereço de e-mail indicado no formulário aquando da encomenda do SSL EV, bem como o endereço de e-mail associado ao seu [Espaço Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

#### 2.2 - Verificações feitas pela Autoridade de Certificação Sectigo

Sectigo vai depois verificar que a sua organização existe e está bem registada nos registos oficiais.

> [!primary]
>
> Sectigo pode não estar em condições de verificar todas as informações junto dos registos oficiais. Os serviços de Sectigo podem contactá-lo por telefone através do número que indicou durante a encomenda ou através do número de telefone oficial da sua organização.
>

Sectigo vai depois verificar se tem a exclusividade/autoridade sobre a propriedade e a utilização do domínio com o qual vai utilizar o certificado SSL EV.

#### 2.3 - Últimas verificações por telefone com Sectigo

Depois de realizar as verificações por Sectigo, os seus serviços serão contactados por telefone para finalizar a subscrição do seu certificado SSL EV.

> [!success]
>
> Para mais informações sobre as operações descritas na **etapa 2**, consulte a [documentação oficial de Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} sobre o assumpto.
>

### Etapa 3 : instalação do certificado SSL EV com o seu domínio e o seu alojamento OVHcloud

Depois de Sectigo ter procedido a todas as verificações, os seus serviços geram o certificado SSL EV e transmitem-nos os elementos necessários à sua instalação no seu alojamento.

Só precisa de [atualizar o seu website em HTTPS](https://docs.ovh.com/pt/hosting/ativar-https-website-certificado-ssl/) para utilizar plenamente o seu certificado SSL EV.

## Quer saber mais? <a name="go-further"></a>

[Site oficial Sectigo](https://sectigostore.com){.external}

[Descrição das verificações efetuadas pela Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[Gerir um certificado SSL no alojamento web](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/)

[Passar o seu website em HTTPS](https://docs.ovh.com/pt/hosting/ativar-https-website-certificado-ssl/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 