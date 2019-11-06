---
title: 'Publicar um site num alojamento web'
excerpt: 'Saiba como publicar um site no seu alojamento web da OVH'
section: Introdução
slug: partilhado_colocar_o_meu_website_online
legacy_guide_number: g1374
---

**Última atualização: 31/10/2019**

## Sumário

Na Internet, existem inúmeros sites. Quer seja para criar um blogue ou uma loja online, quer seja para partilhar uma paixão ou promover a sua atividade profissional, o seu [alojamento web da OVHcloud]({ovh_www}/hebergement-web/){.external} permite-lhe alojar o site que quiser, na medida em que seja compatível com a [configuração das nossas infraestruturas](http://pro.ovh.net/infos/){.external}.

**Saiba como publicar um site no alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud]({ovh_www}/hebergement-web/){.external}.

- Ter recebido o e-mail com a confirmação da instalação do alojamento web.
- Ter um [domínio]({ovh_www}/domaines/){.external} (endereço que permite identificar e aceder ao seu site).
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### 1 - Definir o projeto

É primordial que tenha uma visão clara do seu objetivo para conduzir o projeto a bom porto. O que é que pretende fazer com o seu site? Como quer publicá-lo? Tem ao seu dispor várias possibilidades para concretizar o seu projeto num alojamento web da OVHcloud.

- **Usar um site chave-na-mão graças aos módulos 1 clique da OVHcloud**: esta solução permite-lhe beneficiar de uma estrutura de site pronta a usar que poderá personalizar (tema, textos, etc.). A OVHcloud disponibiliza quatro com os módulos 1 clique, a descobrir na página [“Criar um site com os módulos 1 clique”](https://www.ovh.pt/alojamento-partilhado/website/){.external}.

- **Usar um site chave-na-mão de instalação manual**: esta solução permite beneficiar de uma estrutura de site pronta a ser usada e personalizável (tema, textos, etc.), que deverá instalar no seu alojamento web da OVHcloud.

- **Criar o seu próprio site**: esta solução é mais técnica e requer competências de programação, mas oferece a possibilidade de criar um projeto à medida.

- **Migrar um site já existente para a OVHcloud**: esta solução pode revelar-se sensível se não desejar que se interrompa o acesso ao site. Se precisar de ajuda para o seu site, pode consultar o manual [“Como migrar um site e e-mails para a OVHcloud?”](https://docs.ovh.com/pt/hosting/migrar-site-para-ovh/){.external}.


Depois de ter avaliado as diferentes possibilidades descritas acima, pode escolher entre duas opções:

- **Pretende utilizar os módulos 1 clique**: siga as instruções do manual[”Como instalar um CMS para criar um site”](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}.

- **Não pretende utilizar os módulos 1 clique**: terá de efetuar manualmente a instalação do site no alojamento. As informações presentes neste manual poderão ser úteis. No entanto, se precisar de ajuda, pode contactar um webmaster.
 
> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção “Quer saber mais?” deste manual.
>

### 2 - Colocar os ficheiros do site no espaço de armazenamento

Publicar um site manualmente num alojamento exige várias operações. Algumas delas podem ser facultativas, consoante o site que instalar, e podem existir várias formas de as realizar. No entanto, na maioria dos projetos atuais, podemos distinguir duas grandes etapas ao publicar um site. A primeira delas consiste em descarregar os ficheiros do site para o espaço de armazenamento.

Para isso, deve realizar as seguintes ações:

#### 2.1. Obter os ficheiros do site

Certifique-se de que possui os ficheiros do site que deseja publicar. Se estiver a migrar um site já existente, obtenha os ficheiros junto do seu prestador anterior.

#### 2.2. Aceder ao espaço de armazenamento

Para se ligar ao espaço de armazenamento, deve dispor dos seguintes elementos:

- um nome de utilizador FTP ou SSH ativo;
- a palavra-passe associada ao nome de utilizador FTP ou SSH;
- o endereço deste servidor;
- a porta de ligação ao servidor.

Estes elementos foram-lhe enviados por e-mail após a instalação do seu alojamento web. Se não possuir estas informações, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção “Web”, e clique em `Alojamentos`{.action} na barra à esquerda. De seguida, selecione o nome do alojamento correspondente e aceda à janela `FTP - SSH`{.action}. 

![siteinstallation](images/get-website-online-step1.png){.thumbnail}

Aparecerá a informação relativa ao seu espaço de armazenamento e terá a possibilidade de encontrar os elementos necessários para aceder mesmo. Caso seja necessário, consulte o nosso manual: [“Aceder ao espaço de armazenamento do alojamento web”](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/){.external}. Caso tenha perdido a palavra-passe, consulte o manual [“Alterar a palavra-passe de um utilizador FTP”](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-utilizador-ftp/){.external}.

Quando tiver obtido todos os elementos, o acesso ao espaço de armazenamento pode ser realizado de três formas:

- **Utilizar o FTP Explorer da OVHcloud**: permite-lhe aceder ao espaço de armazenamento a partir do navegador. Para o utilizar, ainda no separador `FTP - SSH`{.action}, clique no botão `Explorador FTP`{.action}.

- **Utilizar um programa compatível com o protocolo FTP ou SFTP**: terá de instalar no seu computador um programa compatível como o FileZilla. Sugerimos que contacte o editor do programa instalado caso deseje obter ajuda na sua utilização.

- **Utilizar um acesso SSH**: terá de executar comandos a partir de um terminal para interagir com o seu espaço de armazenamento. Este tipo de acesso requer conhecimentos técnicos avançados. Por outro lado, nem todos os planos de [alojamento web da OVHcloud]({ovh_www}/hebergement-web/){.external} são compatíveis.

#### 2.3. Carregar os ficheiros para o espaço de armazenamento

Depois de aceder ao espaço de armazenamento, apenas precisará de publicar os ficheiros no site. **Preste especial atenção ao repertório no qual vai colocar os ficheiros.** Num caso de utilização clássica, o site deve ser carregado para a pasta “www”. No entanto, se utiliza o seu alojamento web para alojar vários sites, tedeverá utilizar a opção **Multi-site**.

Para verificar a pasta onde deve colocar o site, clique no separador `Multi-site`{.action} a partir da Área de Cliente OVHcloud. Aparecerá uma tabela onde poderá consultar a `Pasta raiz`{.action} do domínio correspondente. Esse é o diretório no qual deve colocar os ficheiros do site.

É possível que encontre no espaço de armazenamento um ficheiro intitulado “index.html”. Este pode ter sido criado pela OVHcloud durante a instalação do alojamento web para exibir uma página de forma padrão no seu site. Se for esse o caso, não se esqueça de o eliminar quando publicar os seus ficheiros.

![siteinstallation](images/get-website-online-step2.png){.thumbnail}

### 3 - Associar o site a uma base de dados

> [!primary]
>
> Esta parte é opcional se o seu website não estiver associado a uma base de dados.
>

Hoje em dia, praticamente todos os sistemas de gestão de conteúdos (CMS), como o WordPress e o Joomla!, usam uma base de dados para armazenar elementos ditos dinâmicos, como os comentários ou os artigos. Portanto, é indispensável uma ligação entre os ficheiros do site e a base de dados, de forma a que o site possa funcionar corretamente. Nesse sentido, existe um ficheiro de configuração que dispõe das informações da base e que permite essa ligação.

Em função do site utilizado, esta associação deve ser realizada manualmente ou através de uma interface de gestão própria do site. São precisas diferentes sub-etapas, algumas das quais são facultativas.

#### 3.1. Obter a base de dados existente (facultativo)

Se estiver a migrar um site já existente, obtenha a base de dados junto do antigo fornecedor de alojamento. Se se trata de um novo site, prossiga para a etapa seguinte.

#### 3.2. Criar a base de dados na OVHcloud (facultativo)

Se já dispõe de uma base de dados que pretende utilizar (associada a um plano de [alojamento web OVHcloud](https://www.ovh.pt/alojamento-partilhado/){.external} ou a uma solução [SQL Privado](https://www.ovh.pt/alojamento-partilhado/opcoes-sql.xml){.external} ou [Cloud DB](https://www.ovh.pt/cloud-databases/){.external}), obtenha o nome de utilizador, a respetiva palavra-passe, o nome da base de dados e o endereço do servidor. Passe para a etapa seguinte.

Se pretende criar uma nova base de dados na OVHcloud, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e clique em `Alojamentos`{.action} na barra à esquerda. De seguida, selecione o nome do alojamento correspondente e clique no separador `Base de dados`{.action}.

Clique em `Criar uma base de dados`{.action} ou, se este botão não aparecer, em `Ações`{.action} e `Criar uma base de dados`{.action}. Siga as indicações que surgirem.

![siteinstallation](images/get-website-online-step3.png){.thumbnail}


#### 3.3. Importar a base de dados existente (facultativo)

Se estiver a migrar um site, importe a base de dados existente para a que acabou de criar. Se se trata de um novo site, prossiga para a etapa seguinte.

A importação pode ser feita de várias formas. A OVHcloud sugere-lhe fazê-lo a partir da Área de Cliente. Quando tiver acedido à lista das bases de dados criadas no serviço, clique nos três pontos à direita da base de dados recém-criada e, a seguir, em `Importar ficheiro`{.action}. Siga as indicações que surgirem.

![siteinstallation](images/get-website-online-step4.png){.thumbnail}

#### 3.4. Associar o site à base de dados

Quando a base de dados estiver disponível e os ficheiros tiverem sido carregados para o espaço de armazenamento, já só precisa de os associar. Certifique-se de que possui a informação necessária para se ligar à base de dados: o nome de utilizador, a respetiva palavra-passe, o nome da base de dados e o endereço do servidor.

Criar esta associação depende do site a ser publicado. A associação é inerente à configuração do site, e não à OVHcloud. Portanto, recomendamos que contacte o editor do seu site ou um profissional, como um fornecedor especializado, caso necessite de ajuda para realizar estas operações.

### 4 - Aceder ao site

Uma vez os ficheiros descarregados para o espaço de armazenamento e a base de dados associada a este último (se o site utilizar alguma), já pode aceder ao seu site. Este último deverá apresentar-se corretamente no seu navegador.

Se constatar algum problema, sugerimos que:

- **verifique a configuração do domínio**: é possível que a configuração DNS do domínio não esteja a permitir que este último apresente o site que acabou de descarregar para o alojamento web da OVHcloud. Certifique-se de que o registo A atualmente configurado na zona DNS do domínio corresponde ao endereço IP do seu alojamento web da OVHcloud;

- **confirme se não há nenhum ficheiro em falta**: é possível que, durante o carregamento dos ficheiros para o alojamento web OVHcloud, se tenha esquecido de algum ou que tenha ocorrido um erro. Tenha cuidado durante as operações que realizar para não desfazer a associação entre os ficheiros do site e a base de dados (se utilizar alguma).

- **verifique se o código do site não contém erros**: esta verificação é seguramente a mais técnica, mas é possível que os ficheiros que carregou tenham erros e não permitam que o servidor apresente corretamente uma parte ou a integralidade do seu site.

Relembramos que, se encontrar dificuldades durante a publicação do site, será melhor recorrer a um fornecedor especializado e/ou contactar o editor do serviço (do CMS instalado, por exemplo).

## Quer saber mais?

[Como migrar um site e e-mails para a OVH?](https://docs.ovh.com/pt/hosting/migrar-site-para-ovh/){.external}.

[Como instalar um CMS para criar um site](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}.

[Aceder ao espaço de armazenamento do alojamento web](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/){.external}.

[Alterar a palavra-passe de um utilizador FTP](http://docs.uxci.ovh/pt-pt/web/hosting/alterar-palavra-passe-utilizador-ftp/){.external}.

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}