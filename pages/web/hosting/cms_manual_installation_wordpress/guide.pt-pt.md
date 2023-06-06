---
title: "Tutorial - Instalar manualmente WordPress"
excerpt: "Descubra como instalar manualmente o CMS WordPress"
slug: cms_como_instalar_manualmente_wordpress
section: CMS
order: 04
updated: 2023-04-06
---

**Última atualização: 06/04/2023**
  
> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este tutorial tem como objetivo ajudá-lo a instalar manualmente o CMS (Content Management System) WordPress em apenas alguns Etapas.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se precisar de ajuda, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/) ou [editor do CMS WordPress](https://wordpress.com/support/){.external}. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

> [!success]
>
> Para instalar o WordPress **automaticamente** a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), consulte o nosso manual sobre a [instalação de um módulo "num clique"](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/).
>
> Para instalar **manualmente outro CMS** (Joomla!, Drupal, PrestaShop), consulte o nosso manual sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/).
>

**Descubra como instalar manualmente o CMS WordPress.**

## Requisitos

- Ter um plano de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) que contenha, pelo menos, uma base de dados.
- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}

## Instruções

### Etapa 1 - preparar a instalação <a name="step1"></a>

Para instalar o CMS **WordPress** na sua oferta de[alojamento web](https://www.ovhcloud.com/pt/web-hosting/), são necessários alguns preparativos.

Siga os **passos indicados** no nosso manual sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/) antes de avançar com o passo 2 abaixo.

### Etapa 2 - finalizar a instalação manual <a name="step3"></a>

> [!success]
>
> Antes de continuar a instalação, esvazie a cache do seu browser para evitar qualquer erro.
>

#### 2.1 - Aceder ao seu site WordPress através do seu browser

Introduza o seu domínio na barra de pesquisa do seu browser.

Se os ficheiros de origem do WordPress foram corretamente colocados na sua pasta raiz, a página WordPress permite selecionar o idioma:

![hosting](images/WPselectlangue.png){.thumbnail}

Selecione a língua do website e clique em `Continue`{.action}.

#### 2.2 - Associar o seu WordPress e a sua base de dados

O WordPress vai pedir-lhe que obtenha os dados de acesso à sua base de dados:

![hosting](images/WPstart.png){.thumbnail}

Tenha consigo as credenciais da sua base de dados (se necessário, consulte ***a etapa 1.4** do tutorial para a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/). Depois clique em `Let's go !`{.action} para continuar.


Surge a seguinte página:

![hosting](images/WPdb.png){.thumbnail}

Insira as informações solicitadas relativas à base de dados:

- *Database Name*: este nome foi definido durante a criação da base de dados na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

- *Username*: é idêntico ao nome da base de dados se utiliza uma base de dados incluída no seu alojamento web.
Para as bases de dados criadas numa Web Cloud Databases, consulte as informações indicadas a **etapa 1.4** do tutorial para a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/).

- *Password*: foi-lhe enviado por e-mail aquando da criação da base de dados. É possível que a tenha modificado entretanto.

- *Database Host*: indique o nome do servidor da base de dados, presente no e-mail de instalação ou na Área de Cliente OVHcloud. 

> [!primary]
> 
> - O nome do servidor de uma base de dados incluída no serviço de alojamento web tem esta forma: `NameOfYourDatabase.mysql.db`. 
>
> - O nome do servidor de uma base de dados Web Cloud Databases começa pelo seu identificador de cliente OVHcloud e tem a seguinte forma: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` onde os **"X"** devem ser substituídos pela referência do seu serviço Web Cloud Databases.
>

- *Table Prefix*: se a instalação for efetuada com uma nova base de dados, insira o "prefixo" à sua escolha. Se utilizar uma base de dados já utilizada por outro website, consulte o **passo 1.4** do tutorial para a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/) para não indicar um "prefixo" de tabela já utilizado na sua base de dados.

Clique em `Submit`{.action} para validar as informações de ligação à base de dados.

Se tudo correr bem, aparecerá a seguinte página:

![hosting](images/WPafterDB.png){.thumbnail}

Clique em `Run the installation`{.action}.

#### 2.3 - Definir o acesso Administrador ao "back-office" do seu WordPress e o seu e-mail de contacto

Uma vez concluída a instalação, o WordPress irá pedir-lhe informações sobre o seu futuro site, entre as quais a criação do seu ID de administrador WordPress.

Este último permitir-lhe-á aceder ao espaço de administração, comummente denominado "Back-office", do seu CMS WordPress.

![hosting](images/WPafterDB2.png){.thumbnail}

Insira as informações solicitadas:

- *Site Title*: introduza o título do seu site.
- *Username*: defina o identificador Administrador do seu CMS.
- *Password*: defina uma palavra-passe para este identificador Administrador.
- *Your Email*: introduza um endereço de e-mail válido.
- *Search Engine Visibility*: desmarque esta caixa para que os motores de pesquisa referenciem o seu WordPress.

Clique em `Install WordPress`{.action} logo que as informações estiverem corretas.

#### 2.4 - Finalizar a instalação manual e testar o acesso "Administrador"

A instalação terminará se aparecer a seguinte página:

![hosting](images/WPend.png){.thumbnail}

Só precisa de clicar no botão `Log in`{.action} para testar o acesso ao "Back-office" do novo CMS WordPress através dos identificadores de administrador previamente criados na etapa 3.3 imediatamente anterior.

> [!primary]
>
> As equipas da OVHcloud não asseguram o suporte de soluções de terceiros como o WordPress, pelo que não o podem acompanhar durante a utilização ou a configuração do seu CMS WordPress.
>
> Para um acompanhamento deste tipo, convidamo-lo a utilizar os fóruns dedicados à solução WordPress.
>

Uma vez ligado, surge a seguinte página:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Pode desde já iniciar a criação do conteúdo do seu site WordPress!
>

## Quer saber mais? <a name="go-further"></a>

[Site oficial WordPress](https://wordpress.org)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 