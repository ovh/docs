---
title: "Tutorial - Instalar manualmente um CMS no meu alojamento"
excerpt: "Descubra como instalar manualmente um CMS no seu alojamento"
updated: 2023-04-06
---

**Última atualização: 06/04/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este tutorial tem como objetivo ajudá-lo a instalar manualmente um CMS (Content Management System) como WordPress, Joomla!, Drupal ou PrestaShop em algumas etapas.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se precisar de ajuda, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) ou ao editor do CMS. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste tutorial.
>
> Para contactar os diferentes editores dos CMS acima mencionados, consulte as ligações às respetivas páginas oficiais:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}
>

> [!success]
>
> Para instalar o seu CMS **automaticamente** a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), consulte o nosso manual sobre a [instalação de um módulo "num clique"](/pages/web/hosting/cms_install_1_click_modules).
>

**Descubra como configurar o seu website instalando manualmente um CMS.**

## Requisitos

- Ter um plano de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) que contenha, pelo menos, uma base de dados.
- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}

## Instruções

### Apresentação dos CMS

Para o ajudar a escolher o seu CMS, descubra em baixo uma breve descrição para cada um dos 4 CMS mencionados anteriormente.

#### WordPress

**WordPress** é geralmente utilizado para criar um website ou um blogue. Baseia-se na tecnologia PHP e inclui uma gama variada de ferramentas como um corretor ortográfico, assim como plugins para o e-commerce, o SEO ou ainda a segurança do seu website.

Encontre mais informações na nossa página sobre o [módulo WordPress](https://www.ovhcloud.com/pt/web-hosting/uc-wordpress-website/)

- Site oficial da [WordPress](https://https://wordpress.com/){.external}

#### Joomla!

**Joomla!** é um CMS que permite criar sites e aplicações web com boa performance.

A comunidade **Joomla!** é de grande dimensão e pode prestar assistência e serviços em todos os domínios relacionados com este CMS (ajuda, documentação, assistência técnica, temas, etc.)

Encontre mais informações na nossa página sobre o [módulo Joomla!](https://www.ovhcloud.com/pt/web-hosting/uc-joomla-website/)

- Site oficial de [Joomla!](https://www.joomla.org/){.external}

#### Drupal

**Drupal** é uma plataforma open source sob PHP criada em 2000. **Drupal** permite criar rapidamente websites dinâmicos.

Encontre mais informações na nossa página sobre o [módulo Drupal](https://www.ovhcloud.com/pt/web-hosting/uc-drupal-website/)

- Site oficial de [Drupal](https://www.drupal.org/){.external}

#### PrestaShop

CMS criado em 2005 e dedicado à realização de websites de e-commerce. Para além das funcionalidades comuns das lojas online, este software também pode ser personalizado com módulos, temas e modelos. 

Encontre mais informações na nossa página sobre o [módulo PrestaShop](https://www.ovhcloud.com/pt/web-hosting/uc-prestashop-website/)

- Site oficial de [PrestaShop](https://www.prestashop.com/){.external}

> [!warning]
>
> Independentemente do CMS que escolher, lembramos que a OVHcloud não fornece nenhuma assistência na utilização destes CMS. Se precisar de ajuda, contacte diretamente o editor do CMS que escolheu através dos links indicados neste tutorial.
>

### Etapa 1 - preparar a instalação <a name="step1"></a>

Para instalar um CMS na sua oferta de[alojamento web](https://www.ovhcloud.com/pt/web-hosting/), é necessário efetuar alguns preparativos.

#### 1.1 - Verificar a declaração do "dossier raiz"

A "pasta raiz" corresponde ao diretório no qual o seu futuro CMS será instalado no seu alojamento. Recomenda-se que escolha um diretório vazio para evitar conflitos com os seus outros potenciais multi-sites.

Consulte o nosso manual que descreve [como adicionar um multi-site ao seu alojamento web](/pages/web/hosting/multisites_configure_multisite) para definir a pasta raiz a utilizar com o seu CMS.

> [!primary]
>
> Se definir um nome de "pasta raiz" que não existe no seu alojamento web, este será automaticamente criado no espaço de armazenamento FTP do seu alojamento web.
>

#### 1.2 - Verificar o "apontamento" do domínio

- Certifique-se de que o domínio que utiliza para aceder ao seu CMS, bem como o subdomínio "www" apontam para o endereço IP do seu serviço de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/).

Para obter o endereço IP da sua oferta de alojamento web, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) na parte `Web Cloud`{.action} e selecione a sua oferta de alojamento web na secção `Alojamentos`{.action}.<br>
Na caixa `Informações gerais`{.action} à direita, encontrará o endereço IP do seu alojamento web no formulário `IPv4`{.action}.

Se a zona DNS ativa do seu domínio for gerida no seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), compare o endereço IP do seu alojamento com o endereço IP presente na zona DNS do seu domínio, através da nossa documentação sobre as [zonas DNS da OVHcloud](/pages/web/domains/dns_zone_edit).

> [!warning]
>
> Se ativou as opções `CDN`{.action} ou `IP do país`{.action} com o seu domínio, utilize o endereço IP adaptado através da nossa documentação que regista [o conjunto dos endereços IP dos nossos alojamentos partilhados](/pages/web/hosting/clusters_and_shared_hosting_IP).
>

Se não conseguir realizar estas verificações, contacte o alojador da sua zona DNS ativa para atualizar o apontamento do seu nome de domínio.

> [!warning]
>
> Todas as modificações efetuadas na sua zona DNS indicam um prazo de propagação de 4 a 24 horas.
>

- Obtenha [as informações necessárias para se ligar ao espaço FTP do seu alojamento web](/pages/web/hosting/ftp_connection#1-recuperar-as-informacoes-de-acesso).
- Obtenha os acessos à base de dados do alojamento web, caso já exista, ou crie um através da nossa [documentação](/pages/web/hosting/sql_create_database).

#### 1.3 - Instalar o cliente FTP gratuito "FileZilla"

Se ainda não utilizar um cliente FTP, pode utilizar o Filezilla. Encontre o link de download gratuito, assim como um tutorial sobre a sua utilização na nossa documentação sobre a [utilização do FileZilla com o seu plano de alojamento OVHcloud](/pages/web/hosting/ftp_filezilla_user_guide).

#### 1.4 - Preparar uma base de dados <a name="step1-4"></a>

Os CMS precisam de uma base de dados para funcionarem. As nossas ofertas de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) incluem-no, com exceção de [alojamento gratuito Start 10M](https://www.ovhcloud.com/pt/domains/free-web-hosting/).

Utilize o nosso manual para [criar uma base de dados a partir do seu alojamento web](/pages/web/hosting/sql_create_database).

Se tiver à sua disposição uma oferta Web Cloud Databases em MySQL ou MariaDB e pretender utilizá-la para instalar manualmente o seu CMS, consulte o nosso manual sobre a [criação de uma base de dados num serviço Web Cloud Databases](/pages/web/clouddb/create-db-and-user-on-db-server#criar-uma-base-de-dados).

Depois de criar a base de dados, recupere os parâmetros de ligação (servidor, nome da base de dados, nome de utilizador e palavra-passe) e guarde-os para [etapa 3](#step3) deste guia.

> [!primary]
>
> Se deseja instalar o seu CMS com uma base de dados já existente, recupere os seus parâmetros de ligação à sua base de dados diretamente nos ficheiros do site ligados a esta.
>
> Se for também um CMS idêntico ao que deve instalar, pode utilizar [este guia](/pages/web/hosting/sql_change_password#etapa-3-alterar-a-palavra-passe-da-base-de-dados-do-seu-site-no-seu-ficheiro-de-configuracao) para identificar os ficheiros de configuração no seu [espaço de armazenamento FTP](/pages/web/hosting/ftp_connection).
>
> Aceda à sua base de dados para identificar os "prefixos" das tabelas já presentes no seu interior. Isto para não escolher um "prefixo" de mesa já utilizado por outro dos seus websites.
>
> - Para aceder à base de dados associada ao alojamento web, consulte o [guia](/pages/web/hosting/sql_create_database#aceder-a-interface-phpmyadmin).
> - Para aceder a uma base de dados presente numa Web Cloud Databases, consulte [este guia](/pages/web/clouddb/connecting-to-database-on-database-server).
>

### Etapa 2 - iniciar a instalação manual

#### 2.1 - Recuperar os ficheiros de origem do seu CMS

Aceda ao site do editor do CMS que escolheu para descarregar os ficheiros de origem.

Encontre aqui os links para as páginas de download dos CMS evocadas no presente tutorial:

- [WordPress](https://wordpress.org/download/#download-install){.external}
- [Joomla!](https://downloads.joomla.org/){.external}
- [Drupal](https://www.drupal.org/download){.external}
- [Prestashop](https://www.prestashop.com/en/download){.external}

> [!primary]
>
> Obtenha a versão PHP e a versão MySQL ou MariaDB necessárias para fazer funcionar o seu CMS.
>
> Para isso, consulte o link para a página oficial do CMS que deseja instalar:
>
> - [WordPress](https://wordpress.org/about/requirements/){.external}
> - [Joomla!](https://downloads.joomla.org/technical-requirements){.external}
> - [Drupal](https://www.drupal.org/docs/getting-started/system-requirements/php-requirements){.external}
> - [Prestashop](https://www.prestashop.com/en/system-requirements){.external}
>
> Configure a versão de PHP no seu alojamento web com a ajuda do nosso manual sobre a [alteração da versão PHP de um alojamento web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014).
>
> Se já utiliza uma versão de PHP igual ou superior à requerida, não é necessário efetuar qualquer alteração.
>

Siga as instruções indicadas pelo editor do seu CMS até que os ficheiros de origem sejam descarregados no seu computador e continue a ler este tutorial.

> [!warning]
>
> Se tiver outros sites alojados no seu alojamento web, verifique que estes são compatíveis com a versão de PHP que escolher para o seu novo CMS.
>

#### 2.2 - Descomprimir os ficheiros de origem descarregados para uma nova pasta

>[!primary
>
> Para maior facilidade, neste passo, substitua o nome da pasta "**CMS**" pelo nome do CMS que escolheu para maior facilidade. (**WordPress**, **Joomla!**, **Drupal**, **PrestaShop**).
>

O ficheiro descarregado está no formato **compressado** (*zipped*). Crie uma pasta intitulada "**CMS**" no seu computador e **descomprima** o conteúdo do ficheiro carregado no interior da pasta "**CMS**".

Para isso, abra a pasta onde carregou o ficheiro comprimido, clique com o botão direito do rato no ficheiro em questão e selecione "Extrair tudo... ".

Indique a pasta "**CMS**" no destino para extrair os seus ficheiros desta pasta.

#### 2.3 - Migrar os ficheiros de origem do dossier "CMS" para o "dossier raiz" no seu alojamento web

Depois de descomprimir os ficheiros na pasta "**CMS**", [ligue-se ao espaço de armazenamento com FTP](/pages/web/hosting/ftp_connection) através do [cliente FTP FileZilla](/pages/web/hosting/ftp_filezilla_user_guide), e depois copie os ficheiros na pasta "**CMS**" para a pasta raiz que definiu no seu alojamento durante a [etapa 1](#step1)) deste guia.

Abaixo, um exemplo com o CMS *WordPress*:

![hosting](images/wpfl2.png){.thumbnail}

> [!warning]
>
> Recomendamos vivamente que utilize uma "pasta raiz" vazia para evitar qualquer conflito com outro website. Verifique que a pasta de destino não contém nenhum elemento antes de mover os ficheiros.
>

> [!primary]
>
> Se a pasta raiz que definiu não tiver sido criada automaticamente durante as ações descritas na [etapa 1](#step1), pode criá-la através do FileZilla.
>
> O depósito dos ficheiros no seu alojamento pode levar alguns minutos.
>
> Uma vez concluída a transferência, verifique que todos os elementos incluídos na pasta local "**CMS**" foram corretamente transferidos para a pasta raiz presente no seu alojamento web.
>

**Caso Especial**: Se dispõe de um débito Internet limitado e/ou de uma oferta de alojamento **Pro** ou superior, pode utilizar a ligação em **SSH** para colocar os ficheiros de origem do seu CMS no espaço de armazenamento do seu alojamento web. 

Para se ligar em SSH ao seu alojamento, consulte o nosso guia sobre a [ligação em SSH a partir de um alojamento partilhado OVHcloud](/pages/web/hosting/ssh_on_webhosting).

Uma vez ligado em **SSH**, execute os seguintes comandos:

- Aceda à pasta raiz na qual pretende instalar o CMS no seu alojamento web:

```bash
cd NameOfYourTargetFolder
```

- Obtenha os ficheiros de origem do seu CMS diretamente a partir da pasta raiz através do comando correspondente ao CMS que escolheu:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> wget http://wordpress.org/latest.tar.gz
>> ```
>>
>> **latest** permite instalar automaticamente a última versão do CMS.
>>
> **Joomla!**
>>
>> ```bash
>> wget https://downloads.joomla.org/cms/joomla4/4-2-8/Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
>> **Joomla4** e **4-2-8** correspondem, à data, à última versão do Joomla! disponível.
>> Substitua estes valores pelos valores que deseja instalar.
>> 
> **Drupal**
>> 
>> ```bash
>> wget https://ftp.drupal.org/files/projects/admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
>> **8.x-2.4** corresponde, na data, à última versão de Drupal disponível.
>> Substitua este valor pela que deseja instalar.
>> 
> **PrestaShop**
>> 
>> ```bash
>> wget https://github.com/PrestaShop/PrestaShop/archive/1.7.8.8.tar.gz
>> ```
>> 
>> **1.7.8.8** corresponde, na data, à última versão do PrestaShop disponível. Substitua este valor pela que deseja instalar.
>> 

- Descomprima os ficheiros de origem do seu CMS para a pasta raiz através do comando correspondente ao CMS que escolheu:

> [!tabs]
> **WordPress**
>> 
>> ```bash
>> tar xvf latest.tar.gz
>> ```
>> 
> **Joomla!**
>> 
>> ```bash
>> tar xvf Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> 
>> ```bash
>> tar xvf admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> 
>> ```bash
>> tar xvf 1.7.8.8.tar.gz
>> ```
>> 

- A pasta "**CMS**" é criada na pasta raiz do seu site. Mova o seu conteúdo para a base da sua "pasta raiz":

```bash
mv CMS/* ./
```

- Elimine a pasta "**CMS**" agora vazia:

```bash
rmdir ./CMS/
```

- Elimine o ficheiro comprimido correspondente ao CMS que escolheu:

> [!tabs]
> **WordPress**
>> ```bash
>> rm -f latest.tar.gz
>> ```
>> 
> **Joomla!**
>> ```bash
>> rm -f Joomla_4-2-8-Stable-Full_Package.tar.gz
>> ```
>> 
> **Drupal**
>> ```bash
>> rm -f admin_toolbar-8.x-2.4.tar.gz
>> ```
>> 
> **PrestaShop**
>> ```bash
>> rm -f 1.7.8.8.tar.gz
>> ```
>> 

### Etapa 3 - finalizar a instalação manual <a name="step3"></a>

> [!success]
>
> Antes de continuar a instalação, esvazie a cache do seu browser para evitar qualquer erro.
>

A partir desta etapa, o procedimento difere em função do CMS que escolheu anteriormente.

Para prosseguir com a instalação, clique no guia correspondente ao seu CMS:

- [Finalizar a instalação do Wordpress](/pages/web/hosting/cms_manual_installation_wordpress)
- [Finalizar a instalação do Joomla!](/pages/web/hosting/cms_manual_installation_joomla)
- [Finalizar a instalação de Drupal](/pages/web/hosting/cms_manual_installation_drupal)
- [Finalizar a instalação do PrestaShop](/pages/web/hosting/cms_manual_installation_prestashop)

## Quer saber mais? <a name="go-further"></a>

[Migração do seu website e dos seus e-mails para a OVHcloud](/pages/web/hosting/hosting_migrating_to_ovh)

[Publicar um website no alojamento web](/pages/web/hosting/hosting_how_to_get_my_website_online)

[Partilhar o alojamento entre vários sites](/pages/web/hosting/multisites_configure_multisite)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as [nossas diferentes ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.