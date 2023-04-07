---
title: "Tutorial - Instalar manualmente o Joomla!"
excerpt: "Descubra como instalar manualmente o seu CMS Joomla!"
slug: cms_instalar_manualmente_o_joomla
section: CMS
order: 05
updated: 2023-04-07
---

**Última atualização: 07/04/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>
  
## Objetivo

Aqui, poderá encontrar todos os elementos para instalar manualmente o CMS (Content Management System) Joomla! em apenas alguns passos.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/) ou [editor do CMS Joomla!](https://www.joomla.org/){.external}. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste tutorial.
>

> [!success]
>
> Para instalar o Joomla! **automaticamente** a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), consulte o nosso manual sobre a [instalação de um módulo num clique](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/).
>
> Para instalar **manualmente um outro CMS** (WordPress, Drupal, PrestaShop), consulte o nosso manual sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/).
>

**Descubra como instalar manualmente o seu CMS Joomla!**

## Requisitos

- Ter um plano de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) que contenha, pelo menos, uma base de dados.
- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
  
## Instruções

### Etapa 1 - preparar a instalação <a name="step1"></a>

Para instalar o CMS **Joomla!** na sua oferta de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/), são necessários alguns preparativos.

Siga os **etapas indicados** no nosso manual sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/) antes de avançar com o passo 2 abaixo.

### Etapa 2 - finalizar a instalação manual <a name="step2"></a>

> [!success]
>
> Antes de continuar a instalação, esvazie a cache do seu browser para evitar qualquer erro.
>

#### 2.1 - Aceder ao seu site Joomla! através do seu browser

Introduza o seu domínio na barra de pesquisa do seu browser.

Se os ficheiros são do Joomla! foram corretamente colocados na sua pasta raiz, a página de seleção da língua para o Joomla! aparece:

![Joomla instalação step 1](images/Joomla-install-select-language-1.png){.thumbnail}

Selecione o idioma, introduza o nome do seu website e clique em `Setup Login Data`{.action}.

#### 2.2 - Configurar os dados de ligação ao seu Joomla!

Defina os acessos ao seu espaço de administração (*Back Office*) Joomla! :

![Joomla instalação step 2](images/Joomla-install-define-admin-2.png){.thumbnail}

> [!primary]
>
> O termo "Super User" designa a pessoa que administra o CMS.

- *Enter the real name of your Super User*: introduza o seu nome real.
- *Set the username for your Super User account*: escolha um nome de utilizador que lhe permitirá aceder ao seu espaço de administração Joomla!
- *Set password for your Super User account*: escolha uma palavra-passe com um mínimo de **12 caracteres**.
- *Enter the email address of the website Super User*: introduza um endereço de e-mail válido. Este servirá para receber as notificações enviadas pelo Joomla!

Verifique os elementos inseridos e clique em `Setup Database Connection`{.action}.

#### 2.3 - Associar a sua base de dados ao seu Joomla!

Insira as informações solicitadas relativas à base de dados:

![Joomla instalação step 3](images/Joomla-install-db-connect-3.png){.thumbnail}

Para preencher os campos abaixo, consulte o **etapa 1.4** do tutorial para a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/), e consulte as seguintes informações:

- *Select the database type*: selecione o tipo da sua base de dados entre os tipos disponíveis para o Joomla! Se utiliza uma base de dados partilhada OVHcloud, pode deixar por defeito o valor **MySQLi**.

- *Enter the host name, usually "localhost" or a name provided by your host*: indique o nome do servidor da base de dados, presente no e-mail de instalação ou na Área de Cliente OVHcloud.

> [!primary]
> 
> - O nome do servidor de uma base de dados incluída no serviço de alojamento web tem esta forma: `NameOfYourDatabase.mysql.db`. 
>
> - O nome do servidor de uma base de dados Web Cloud Databases começa pelo seu identificador de cliente OVHcloud e tem a seguinte forma: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa00000"** corresponde ao seu identificador OVHcloud sem o **"-ovh"** e os **"X"** devem ser substituídos pelo resto da referência do seu serviço Web Cloud Databases.
>

- *Either a username you created or a username provided by your host*: é idêntico ao nome da base de dados se utiliza uma base de dados incluída no seu alojamento web.
Para as bases de dados criadas numa Web Cloud Databases, consulte as informações indicadas o **etapa 1.4** do guia sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/).

- *Either a password you created or a password provided by your host*: definiu-o durante a criação da sua base de dados. Também é possível que a tenha modificado entretanto, sugerimos que o verifique.

- *Enter the database name*: este nome foi definido durante a criação da base de dados na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Se utiliza uma base de dados incluída no alojamento web, o nome de utilizador da base de dados é idêntico.

- *Enter a table prefix or use the randomly generated one*: se a instalação for efetuada com uma nova base de dados, insira o "prefixo" à sua escolha. Se utilizar uma base de dados já utilizada por outro website, consulte o **etapa 1.4** do guia sobre a [instalação manual de um CMS](https://docs.ovh.com/pt/hosting/partilhado_instalar_manualmente_o_meu_cms/) para não introduzir um "prefixo" de tabela já utilizado na sua base de dados.

- **Connection Encryption**: deixe o valor **Default**.

Clique em `Install Joomla`{.action}.

Surge a seguinte mensagem:

![Joomla instalação step 3-1](images/Joomla-install-db-connect-3-1.png){.thumbnail}

Uma vez que utiliza uma base de dados presente fora de um alojamento local, deverá eliminar o * token* gerado automaticamente aquando da instalação do seu Joomla!

Este ficheiro a eliminar encontra-se no seu [espaço de armazenamento FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/).

Uma vez ligado, aceda à pasta **instalação** do seu Joomla! e elimine apenas o * token* indicado pela mensagem de alerta. Está presente sob a forma de um ficheiro **.txt**.

De seguida, volte ao seu browser e clique novamente em `Install Joomla`{.action}.

#### 2.4 - Terminar a instalação

Uma vez terminada a instalação, surgirá a seguinte página:

![Joomla instalação step 4](images/Joomla-install-ending-4.png){.thumbnail}

A instalação está terminada, mas pode adicionar línguas adicionais ao seu CMS caso seja necessário.

>[!success]
>
> Parabéns, o seu Joomla! está pronto para ser utilizado e administrado.
>
  
## Quer saber mais? <a name="go-further"></a>

[Site oficial Joomla!](https://joomla.org){.external}
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).
 
Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
