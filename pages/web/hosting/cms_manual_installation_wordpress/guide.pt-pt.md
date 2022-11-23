---
title: 'Tutorial - CMS, como instalar manualmente WordPress'
excerpt: Como instalar manualmente WordPress?
slug: cms_como_instalar_manualmente_wordpress
section: CMS
order: 04
---

**Última atualização: 16/11/2022**
  
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

## Requisitos

- Ter um plano de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) que contenha, pelo menos, uma base de dados.
- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}

## Instruções

### Etapa 1 - preparar a instalação <a name="step1"></a>

Para instalar o CMS **WordPress** na sua oferta de[alojamento web](https://www.ovhcloud.com/pt/web-hosting/), são necessários alguns preparativos.

#### 1.1 - Verificar a declaração do "dossier raiz"

A "pasta raiz" corresponde ao diretório no qual o seu futuro CMS será instalado no seu alojamento. Recomenda-se que escolha um diretório vazio para evitar conflitos com os seus outros potenciais multi-sites.

Para definir a pasta raiz a utilizar no WordPress, consulte o nosso manual que descreve [como adicionar um multisite ao seu alojamento web](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/).

> [!primary]
>
> Se definir um nome de "pasta raiz" que não existe no seu alojamento web, este será automaticamente criado no espaço de armazenamento FTP do seu alojamento web.
>

#### 1.2 - Verificar o "apontamento" do domínio

- Certifique-se de que o domínio que utiliza para aceder ao seu WordPress, assim como o seu subdomínio em "www", apontam para o endereço IP do seu serviço de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/).

Para obter o endereço IP da sua oferta de alojamento web, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) na parte `Web Cloud`{.action} e selecione a sua oferta de alojamento web na secção `Alojamentos`{.action}.<br>
Na caixa `Informações gerais`{.action} à direita, encontrará o endereço IP do seu alojamento web no formulário `IPv4`{.action}.

Se a zona DNS ativa do seu domínio for gerida no seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), compare o endereço IP do seu alojamento com o endereço IP presente na zona DNS do seu domínio, através da nossa documentação sobre as [zonas DNS da OVHcloud](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).

> [!warning]
>
> Se ativou as opções `CDN`{.action} ou `IP do país`{.action} com o seu domínio, utilize o endereço IP adaptado através da nossa documentação que regista [o conjunto dos endereços IP dos nossos alojamentos partilhados](https://docs.ovh.com/pt/hosting/lista-dos-enderecos-ip-dos-clusters-e-alojamentos-web/).
>

Se não conseguir realizar estas verificações, contacte o alojador da sua zona DNS ativa para atualizar o apontamento do seu nome de domínio.

> [!warning]
>
> Todas as modificações efetuadas na sua zona DNS indicam um prazo de propagação de 4 a 24 horas.
>

- Obtenha [as informações necessárias para se ligar ao espaço FTP do seu alojamento web](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/#1-recuperar-as-informacoes-de-acesso).
- Obtenha os acessos à base de dados do alojamento web, caso já exista, ou crie um através da nossa [documentação](https://docs.ovh.com/pt/hosting/criar-base-de-dados/).

#### 1.3 - Instalar o cliente FTP gratuito "FileZilla"

Encontre o link de download gratuito, assim como um tutorial sobre a sua utilização na nossa documentação sobre a[utilização do FileZilla com o seu plano de alojamento OVHcloud](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/).

#### 1.4 - Preparar uma base de dados <a name="step1-4"></a>

Os CMS precisam de uma base de dados para funcionarem. As nossas ofertas de[alojamento web](https://www.ovhcloud.com/pt/web-hosting/) contêm, com exceção de [alojamento gratuito Start 10M](https://www.ovhcloud.com/pt/domains/free-web-hosting/).

Utilize o nosso manual para [criar uma base de dados a partir do seu alojamento web](https://docs.ovh.com/pt/hosting/criar-base-de-dados/).

Se tiver à sua disposição uma oferta CloudDB em MySQL ou MariaDB e pretender utilizá-la para instalar manualmente o seu WordPress, consulte o nosso manual sobre a [criação de uma base de dados num CloudDB](https://docs.ovh.com/pt/clouddb/criar-bases-de-dados-e-utilizadores/#criar-uma-base-de-dados).

Depois de criar a base de dados, recupere os parâmetros de ligação (servidor, nome da base de dados, nome de utilizador e palavra-passe) e guarde-os para [etapa 3](#step3) deste guia.

> [!primary]
>
> Se deseja instalar o seu CMS WordPress com uma base de dados já existente, recupere os seus parâmetros de ligação à sua base de dados diretamente nos ficheiros do site ligados a esta.
>
> Se se tratar também de um CMS como o que deve instalar, pode utilizar [este guia](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-base-de-dados/#etapa-3-alterar-a-palavra-passe-da-base-de-dados-do-seu-site-no-seu-ficheiro-de-configuracao) para identificar os ficheiros de configuração no seu [espaço de armazenamento FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/).
>
> Aceda à sua base de dados para identificar os "prefixos" das tabelas já presentes no seu interior. Isto para não escolher um "prefixo" de mesa já utilizado por outro dos seus websites.
>
> - Para aceder à base de dados associada ao alojamento web, consulte o [guia](https://docs.ovh.com/pt/hosting/criar-base-de-dados/#aceder-a-interface-phpmyadmin).
> - Para se ligar a uma base de dados presente num Cloud DB, consulte [este guia](https://docs.ovh.com/pt/clouddb/conexao-base-de-dados-servidor-bdd/).
>

### Etapa 2 - iniciar a instalação manual

#### 2.1 - Recuperar os ficheiros fonte de WordPress

Aceda ao site do editor [WordPress](https://wordpress.org/download/#download-install){.external} para descarregar os ficheiros de origem do CMS.

![hosting](images/downloadWP.png){.thumbnail}

> [!primary]
>
> Na página de download, tome nota da versão PHP e da versão MySQL ou MariaDB necessárias para fazer funcionar o seu WordPress.
>
> Configure a versão de PHP no seu alojamento web com a ajuda do nosso manual sobre a [alteração da versão PHP de um alojamento web](https://docs.ovh.com/pt/hosting/configurar_o_php_num_alojamento_web_alojamentos_2014_ovh/).
>
> Se já utiliza uma versão de PHP igual ou superior à requerida, não é necessário efetuar qualquer alteração.
>

> [!warning]
>
> Se tiver outros sites alojados no seu alojamento web, verifique que estes são compatíveis com a versão de PHP que escolher para o seu WordPress.
>

#### 2.2 - Descomprimir os ficheiros de origem descarregados para uma nova pasta

O ficheiro descarregado está no formato **compressado** (zippé). Crie uma pasta intitulada "**WordPress**" no seu computador e **descomprima** o conteúdo do ficheiro carregado no interior da pasta "**WordPress**".

Para isso, abra a pasta onde carregou o ficheiro comprimido, clique no ficheiro em questão e selecione "Extrair tudo...". 


Indique a pasta "**WordPress**" em destino para extrair os seus ficheiros desta pasta.

#### 2.3 - Migrar os ficheiros de origem do processo "WordPress" para a pasta raiz do seu alojamento web

Depois de descomprimir os ficheiros na pasta "**WordPress**", [ligue-se ao espaço de armazenamento através de FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) com o auxílio do [cliente FTP FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/), e depois copie os ficheiros na pasta "**WordPress**" para a pasta raiz que definiu no seu alojamento durante a[etapa 1](#step1) deste guia.

![hosting](images/wpfl2.png){.thumbnail}

>[!warning]
>
> Recomendamos vivamente que utilize uma "pasta raiz" vazia para evitar qualquer conflito com outro site. Verifique que a pasta de destino não contém nenhum elemento antes de mover os ficheiros.
>

>[!primary]
>
> Se a pasta raiz que definiu não tiver sido criada automaticamente durante as ações descritas na[etapa 1](#step1), pode criá-la através do FileZilla.
>
> O depósito dos ficheiros no seu alojamento pode levar alguns minutos.
>
> Uma vez concluída a transferência, verifique que todos os elementos presentes na pasta local "**WordPress**" foram corretamente transferidos para a pasta raiz presente no seu alojamento web.
>

**Caso Especial**: Se dispõe de um débito Internet limitado e/ou de uma oferta de alojamento **Pro** ou superior, pode utilizar a ligação em **SSH** para colocar os ficheiros fonte do WordPress no espaço de armazenamento do seu alojamento web. 

Para se ligar em SSH ao seu alojamento, consulte o nosso guia sobre a [ligação em SSH a partir de um alojamento partilhado OVHcloud](https://docs.ovh.com/pt/hosting/partilhado_o_ssh_nos_alojamentos_partilhados/).

Uma vez ligado em **SSH**, execute os seguintes comandos:

- Aceda à pasta raiz na qual deseja instalar o seu WordPress no seu alojamento web:

```bash
cd NameOfYourTargetFolder
```

- Obtenha os ficheiros de origem do WordPress diretamente a partir da pasta raiz:

```bash
wget http://wordpress.org/latest.tar.gz
```

- Descomprima os ficheiros de origem do WordPress na sua pasta raiz:

```bash
tar xvf latest.tar.gz
```

- A pasta "**wordpress**" é criada na sua "pasta raiz". Mova o seu conteúdo para a base da sua "pasta raiz":

```bash
mv wordpress/* ./
```

- Elimine a pasta "**wordpress**" agora vazia:

```bash
substituição ./wordpress/
```

- Elimine o ficheiro comprimido "**latest.tar.gz**":

```bash
rm -f latest.tar.gz
```

### Etapa 3 - finalizar a instalação manual <a name="step3"></a>

> [!success]
>
> Antes de continuar a instalação, esvazie a cache do seu browser para evitar qualquer erro.
>

#### 3.1 - Aceder ao seu site WordPress através do seu browser

Introduza o seu domínio na barra de pesquisa do seu browser.

Se os ficheiros de origem do WordPress foram corretamente colocados na sua pasta raiz, a página WordPress permite selecionar o idioma:

![hosting](images/WPselectlangue.png){.thumbnail}

Selecione a língua do website e clique em `Continuer`{.action}.

#### 3.2 - Associar o seu WordPress e a sua base de dados

O WordPress vai pedir-lhe que obtenha os dados de acesso à sua base de dados:

![hosting](images/WPstart.png){.thumbnail}

Tenha consigo as credenciais da sua base de dados (caso seja necessário, consulte [o Etapa 1.4](#step1-4) deste guia e clique em `É partido!`{.action} para continuar.

Surge a seguinte página:

![hosting](images/WPdb.png){.thumbnail}

Insira as informações solicitadas relativas à base de dados:

- Nome da base de dados: este nome foi definido durante a criação da base de dados na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

- Identificador: é idêntico ao nome da base de dados se utiliza uma base de dados incluída no seu alojamento web.
Para as bases de dados criadas num CloudDB, consulte as informações indicadas no [Etapa 1.4](#step1-4) deste manual.

- Palavra-passe: foi-lhe enviado por e-mail aquando da criação da base de dados. É possível que a tenha modificado entretanto.

- Endereço da base de dados: indique o nome do servidor da base de dados, presente no e-mail de instalação ou na Área de Cliente OVHcloud. 

> [!primary]
> 
> - O nome do servidor de uma base de dados incluída no serviço de alojamento web tem esta forma: `NameOfYourDatabase.mysql.db`. 
>
> - O nome do servidor de uma base de dados CloudDB começa pelo seu identificador de cliente OVHcloud e tem a seguinte forma: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` onde os **"X"** devem ser substituídos pela referência do seu serviço CloudDB.
>

- Prefixo das tabelas: se a instalação for efetuada com uma nova base de dados, insira o "prefixo" à sua escolha. Se utilizar uma base de dados já utilizada por outro website, consulte o [Etapa 1.4](#step1-4) deste manual para não indicar um "prefixo" de tabela já utilizado na sua base de dados.

Clique em `Soumet`{.action} para validar as informações de ligação à base de dados.

Se tudo correr bem, aparecerá a seguinte página:

![hosting](images/WPafterDB.png){.thumbnail}

Clique em `para Lançar a instalação`{.action}.

#### 3.3 - Definir o acesso Administrador ao "back-office" do seu WordPress e o seu e-mail de contacto

Uma vez concluída a instalação, o WordPress irá pedir-lhe informações sobre o seu futuro site, entre as quais a criação do seu ID de administrador WordPress.

Este último permitir-lhe-á aceder ao espaço de administração, comummente denominado "Back-office", do seu CMS WordPress.

![hosting](images/WPafterDB2.png){.thumbnail}

Insira as informações solicitadas:

- Título do sítio: introduza o título do seu site.
- Identificador: defina o identificador Administrador do seu CMS.
- Palavra-passe: defina uma palavra-passe para este identificador Administrador.
- O seu endereço de e-mail: introduza um endereço de e-mail válido.
- Privacidade: selecione esta opção para que os motores de busca referenciem o seu WordPress.

Clique em `Instalar WordPress`{.action} logo que as informações estiverem corretas.

#### 3.4 - Finalizar a instalação manual e testar o acesso "Administrador"

A instalação terminará se aparecer a seguinte página:

![hosting](images/WPend.png){.thumbnail}

Só precisa de clicar no botão `Se connecter`{.action} para testar o acesso ao "Back-office" do novo CMS WordPress através dos identificadores de administrador previamente criados na etapa 3.3 imediatamente anterior.

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

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 