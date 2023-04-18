---
title: "Tutorial - Instalar manualmente o PrestaShop"
excerpt: "Descubra como instalar manualmente o CMS PrestaShop"
slug: cms_como_instalar_manualmente_prestashop
section: CMS
order: 07
updated: 2023-04-07
---

**Última atualização: 07/04/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>
  
## Objetivo

Aqui, poderá encontrar todos os elementos para instalar manualmente o CMS (Content Management System) PrestaShop em algumas etapas.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) ou [editor do CMS PrestaShop](https://www.prestashop.com/en/support){.external}. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

> [!success
>
> Para instalar o PrestaShop **automaticamente** a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), consulte o nosso manual sobre a [instalação de um módulo "num clique"](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/).
>
> Para instalar **manualmente um outro CMS** (WordPress, Joomla!, Drupal), consulte o nosso manual sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/).
>

**Descubra como instalar manualmente o seu CMS PrestaShop**
  
## Requisitos

- Ter um plano de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) que contenha, pelo menos, uma base de dados.
- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
  
## Instruções

### Etapa 1 - preparar a instalação <a name="step1"></a>

Para instalar o CMS **PrestaShop** na sua oferta de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/), são necessários alguns preparativos.

Siga **os passos indicados** no nosso manual sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/) e siga o passo 2 abaixo.

### Etapa 2 - finalizar a instalação manual <a name="step2"></a>

> [!success]
>
> Antes de continuar a instalação, esvazie a cache do seu browser para evitar qualquer erro.
>

Se não descarregou a última versão disponível do PrestaShop, aparecerá a seguinte página:

![PrestaShop installation step 1](images/Prestashop-install-update-version.png){.thumbnail}

Clique em `No thanks`{.action} se deseja conservar a versão do PrestaShop que acabou de descarregar ou em `Yes please!`{.action} se deseja utilizar a versão mais recente do CMS.

#### 2.1 - Aceder ao seu site PrestaShop através do seu browser

Introduza o seu domínio na barra de pesquisa do seu browser.

Se os ficheiros de origem do seu PrestaShop foram corretamente colocados na sua pasta raiz, a página do PrestaShop que permite selecionar o idioma aparece:

![PrestaShop installation step 2](images/Prestashop-install-select-language.png){.thumbnail}

Selecione a língua do site e clique em `Next`{.action}.

#### 2.2 - Validar as condições de utilização

Leia atentamente as condições de utilização, selecione a opção `I agree to the above terms and conditions`{.action} e clique em `Next`{.action}.

![PrestaShop installation step 3](images/Prestashop-install-licence-agreement-3.png){.thumbnail}

#### 2.3 - Insira as informações da sua loja online

O PrestaShop irá pedir-lhe uma série de informações sobre a sua futura loja online:

![PrestaShop instalação step 4](images/Prestashop-install-store-infos-4.png){.thumbnail}

**Informações sobre a sua loja**

- *Shop name*: Introduza o nome da sua loja online
- *Main activity*: Selecione o seu sector de atividade entre as propostas do menu pendente
- *Country*: Selecione o seu país
- *Enable SSL*: Assinale **Yes** para forçar a reescrita do seu URL em "https://". Deve dispor previamente de um certificado SSL ativo no seu alojamento ou domínio. Para mais informações, consulte o nosso guia sobre [gestão de um certificado SSL no seu alojamento web da OVHcloud](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/).

**A sua conta**

- *First name*: Introduza o seu nome
- *Last name*: Introduza o seu nome
- *E-mail address*: Introduza o seu endereço de e-mail
- *Shop password*: Escolha uma palavra-passe para aceder ao espaço de administração da sua loja online (backoffice)
- *Re-type to confirm*: Introduza novamente a password

Verifique as informações introduzidas e clique em `Next`{.action}.

#### 2.4 - Instalar o conteúdo predefinido para a sua loja

O PrestaShop propõe-lhe instalar conteúdos e módulos para o seu futuro site de E-commerce:

![PrestaShop instalação step 5](images/Prestashop-install-store-content-5.png){.thumbnail}

Faça as suas escolhas e clique em `Next`{.action}.

#### 2.5 - Associar o seu PrestaShop com a sua base de dados OVHcloud

![PrestaShop instalação step 6](images/Prestashop-install-db-config-6.png){.thumbnail}

Tenha consigo os dados de acesso à sua base de dados (se necessário, consulte **a etapa 1.4** do guia sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/)).

Insira as informações solicitadas relativas à base de dados:

- *Database server address*: indique o nome do servidor da base de dados, presente no e-mail de instalação ou na Área de Cliente OVHcloud. 

> [!primary]
> 
> - O nome do servidor de uma base de dados incluída no serviço de alojamento web tem esta forma: `NameOfYourDatabase.mysql.db`. 
>
> - O nome do servidor de uma base de dados Web Cloud Databases começa pelo seu identificador de cliente OVHcloud e tem a seguinte forma: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa00000"** corresponde ao seu identificador OVHcloud sem o **"-ovh"** e os **"X"** devem ser substituídos pelo resto da referência do seu serviço Web Cloud Databases.
>

- *Database name*: este nome foi definido durante a criação da base de dados na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

- *Database login*: é idêntico ao nome da base de dados se utiliza uma base de dados incluída no seu alojamento web.
Para as bases de dados criadas num serviço Web Cloud Databases, consulte as informações mencionadas no **etapa 1.4** do nosso guia sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/).

- *Database password*: definiu-o durante a criação da sua base de dados. É possível que a tenha modificado entretanto.

- *Tables prefix* : se a instalação for efetuada com uma nova base de dados, insira o "prefixo" à sua escolha. Se utilizar uma base de dados já utilizada por outro website, consulte o **etapa 1.4** do nosso guia sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/) para não introduzir um "prefixo" de tabela já utilizado na sua base de dados.

- *Drop existing tables*: **Desmarque esta caixa se já utiliza a sua base de dados com outro website**.

> [!alert]
>
> Se deixar a opção selecionada **Drop existing tables**, eliminará todas as tabelas já existentes na sua base de dados.
>

Clique em `Test your database connection now!`{.action} para verificar os parâmetros introduzidos:

![PrestaShop instalação step 6-1](images/Prestashop-install-db-config-6-1.png){.thumbnail}

Se aparecer a mensagem "A sua base de dados está ligada", clique em `Next`{.action}. Caso contrário, verifique os parâmetros que introduziu até que a ligação funcione. Caso seja necessário, consulte o **etapa 1.4** do tutorial para a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/).

#### 2.6 - Terminar a instalação do PrestaShop

A última etapa corresponde a um resumo da instalação que acabou de realizar:

![PrestaShop instalação step 7](images/Prestashop-install-resume-7.png){.thumbnail}

Obtenha as credenciais de acesso do PrestaShop antes de sair da página.

>[!warning]
>
> ** Por razões de segurança, recomendamos que elimine a pasta de instalação presente no seu espaço FTP.**
>
> Para realizar esta ação, consulte o nosso guia ["como aceder ao espaço de armazenamento FTP do alojamento web da OVHcloud"](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) e apoie-se no [fórum PrestaShop](https://www.prestashop.com/forums/){.external} para garantir que elimina os ficheiros corretos.
>

> [!success]
>
> Pode desde já iniciar a criação do conteúdo do seu site PrestaShop!
>
  
## Quer saber mais? <a name="go-further"></a>

[Sítio oficial PrestaShop](https://prestashop.com)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).
 
Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.