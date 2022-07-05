---
title: 'CMS, instalar manualmente o Joomla'
excerpt: Como instalar manualmente o Joomla?
id: '1978'
slug: cms_instalar_manualmente_o_joomla
legacy_guide_number: g1978
---


## Parte 1: preparação da instalação

## Ferramentas necessárias
Para instalar a sua plataforma Joomla! no seu alojamento partilhado, sugerimos o uso do cliente FTP FileZilla (gratuito).

## Identificadores de acesso necessários para a instalação
Assegura-se que possui o Nichandle e a palavra-passe associada para poder ligar-se ao seu Espaço Cliente OVH, se necessário.


- Obtenha o seu identificador e palavra-passe de acesso FTP para se ligar ao espaço de armazenamento do seu serviço de alojamento partilhado OVH.
Um guia para obtenção dos dados de acesso FTP está à disposição:[]({legacy}1374)

- É necessário possuir um identificador e palavra-passe da base de dados SQL que lhe permita a ligação a uma base de dados.
Um guia para obtenção dos dados de acesso à base de dados está à disposição:[]({legacy}1374)


![joomla](images/3141.png){.thumbnail}


## Parte 2: recuperação dos ficheiros "fonte" da instalação

- Aceda ao site oficial do [Joomla](https://www.joomla.org/download.html).

 Aí encontrará, geralmente, o link para fazer o download da última versão estável do CMS para o seu computador.


O ficheiro que vai obter estará, geralmente, comprimido (em formato zip, certamente). Será necessário poder descomprimir esse ficheiro no seu computador. Encontrará na Internet vários tutoriais para ajuda com essa operação.

![joomla](images/3142.png){.thumbnail}


## Parte 3: colocação dos ficheiros no seu espaço de armazenamento através de FTP

## Descompressão da pasta de ficheiros
Abra a pasta na qual guardou o ficheiro comprimido.

Clique com o botão do lado direito do rato e escolha "Extrair tudo".

Indique um destino a fim de descomprimir os ficheiros para esse destino.

Vários tutoriais e softwares de descompressão estão disponíveis na Internet para o ajudar com estas ações:

A pasta terá o nome "Joomla"

![joomla](images/3143.png){.thumbnail}

## Ligação ao espaço de alojamento através de FTP
Para colocar os ficheiros de Joomla! no seu alojamento, deverá ligar-se ao mesmo.

Está à disposição um guia de ajuda à ligação FTP num alojamento partilhado OVH:[]({legacy}1374)

![joomla](images/3144.png){.thumbnail}

## Transferência dos ficheiros através de FTP
Siga estas etapas para colocar os seus ficheiros no espaço FTP.

## Etapa 1
Uma vez já ligado através de FileZilla:


- Na secção "Site local", que corresponde aos ficheiros presentes no seu computador local, abra a pasta que descomprimiu com o nome "Joomla!" e na qual estão presentes os ficheiros do CMS.


Na secção "Site Distante/remoto", que corresponde ao espaço de alojamento OVH, abra a pasta "www". É nessa pasta que deverão ser colocados todos os ficheiros do CMS.

Se a pasta não existir, terá  a possibilidade de a criar.

Os seus ficheiros devem estar obrigatoriamente na pasta "www". Se não o fizer, o procedimento de instalação não estará diretamente acessível através do seu nome de domínio.

![joomla](images/3145.png){.thumbnail}

## Etapa 2
Uma vez abertas as pastas:

Na secção "Site local" encontrará os ficheiros necessários à instalação do CMS Joomla!.

Para selecionar todos os ficheiros, use CTRL+A.

Arraste e largue, de seguida, os ficheiros na secção "Site Distante/Remoto" dentro da pasta "www".

É muito provável que a sua pasta "www" não esteja vazia. Vamos abordar esse assunto mais adiante neste guia.

![joomla](images/3146.png){.thumbnail}

## Etapa 3
A transferência de ficheiros está em curso.

Aguarde até que todos os ficheiros sejam colocados no servidor FTP. Isso poderá levar alguns minutos.

Uma vez que a transferência esteja concluída, assegure-se que todos os ficheiros e as pastas foram corretamente transferidos.

Esta operação é a última da parte consagrada à transferência de ficheiros para o espaço FTP.

![joomla](images/3147.png){.thumbnail}


## Parte 4: ligação com a base de dados

- Antes de continuar a instalação, limpe a cache do seu browser a fim de evitar eventuais erros.


Para estabelecer a ligação entre o Joomla! e a sua base de dados, devemos seguir as etapas de instalação do CMS.

## Etapa 1
Aceda ao seu nome de domínio. O assistente de instalação será executado.

Num primeiro tempo é necessário definir as informações de configuração do Joomla! :

Selecione a Linguagem: selecione a linguagem de instalação do Joomla!.

Nome do website: defina o nome do site, e este nome pode influenciar o referenciamento.

Descrição: defina a descrição do site, e esta descrição pode influenciar o referenciamento.

Site offline: permite bloquear o acesso do website ao público.

E-mail: introduza aqui um endereço de e-mail válido.

Login: escolha o login com o qual deseja efetuar login na consola de administração.

Password: defina a sua password para aceder à consola de administração do site.

Confirmar a password: valide a password introduza anteriormente.

Clique em "Seguinte" para para a etapa seguinte.

![joomla](images/3148.png){.thumbnail}

## Etapa 2
Muna-se dos identificadores da sua base de dados (ajuda no inicio deste guia).

Introduza as informações pedidas relativas à base de dados:

Tipo de base de dados: selecione o tipo de base MySQL.

Nome do servidor: introduza o nome do servidor da sua base de dados indicado no e-mail de instalação ou no seu Espaço Cliente.

Nome do utilizador: idêntico ao nome da base de dados, encontra-a no e-mail de instalação da base de dados.

Password: defina no seu Espaço Cliente.

Nome da base de dados: escolhida aquando da sua criação no seu Espaço Cliente.

Prefixo das tabelas: útil para efetuar várias instalações de Joomla! numa mesma base de dados. Neste caso deve introduzir um prefixo diferente para cada uma das instalações.

Instalação anterior: se já existem tabelas na base de dados e são do mesmo prefixo, elas serão renomeadas com o prefixo "bak_".

Clique em "Seguinte" para validar as informações solicitadas

![joomla](images/3149.png){.thumbnail}


## Finalização

## Finalização das etapas de instalação
A fim de terminar a instalação do Joomla!, continue as etapas de instalação

## Etapa 1
Será relembrado dos parâmetros selecionados anteriormente.

Serão solicitadas duas informações:


- Tipo de site:


Selecione "Simples página inicial em Português".


- Envio da configuração


Indique se deseja receber por e-mail informações úteis, tal como a password de acesso à consola de administração definida anteriormente.

Clique em "Instalar" para prosseguir.

![joomla](images/3150.png){.thumbnail}

## Etapa 2
Aguarde alguns instanates durante a instalação.

![joomla](images/3151.png){.thumbnail}

## Etapa 3
Por medidas de segurança, o Joomla!convida-o a eliminar a pasta de instalação.

Clique apenas em "Eliminar a pasta de instalação".

![joomla](images/3152.png){.thumbnail}

## Etapa 4
Aparecerá uma mensagem a confirmar a eliminação da pasta.

Poderá de seguida liga-se à parte de administração do Joomla!. Identifique-se na janela que é apresentada, onde poderá consultar a página padrão implementada pelo Joomla!.

![joomla](images/3153.png){.thumbnail}

## Visualização da parte de administração do Joomla!
Encontrará aqui uma pré-visualização do painel de administração Joomla!.

![joomla](images/3154.png){.thumbnail}


## Informações úteis
O suporte da OVH não está habilitado para responder às suas questões sobre configuração e utilização de Joomla!.
Está no entanto disponível um guia para o ajudar na utilização: []({legacy}2053)..

Poderá igualmente consultar os fóruns dedicados à solução Joomla!.


- Consulte o link para um [fórum Joomla!](http://forum.joomlapt.com/).



## Erro clássico: site em construção
Colocou os seus ficheiros, através de FTP mas, continua a ver "Página em construção" numa página padrão criada pela OVH aquando da instalação do seu alojamento.

Se colocar o seu conteúdo na pasta "www" sem ter eliminado o conteúdo padrão adicionado pela OVH, encontrará esse caso.

Para corrigir o problema:


- elimine ou altere o nome do ficheiro "index.html".


Poderá ser interessante apenas mudar o nome para que, caso necessário, possa mais tarde colocar o site em manutenção.

Outra informação útil: Os ficheiros do seu website deverão ser colocados na pasta "www" para que sejam tomados em conta.

![joomla](images/3155.png){.thumbnail}

## Erro Clássico: versão de PHP
Trata-se de um erro relativo à versão de PHP do seu servidor.

A causa é simples: a última versão de PHP não foi ativada.

Tem à sua disposição um guia para o ajudar a alterar a versão de PHP em uso no seu alojamento:[aqui]({legacy}1207)

![joomla](images/3156.png){.thumbnail}

## Erro clássico: Magic Quotes
Trata-se de uma variável mal definida que impede a instalação do Joomla!.

Magic Quotes deve estar como Off e, como tal, definido como 0 no seu ficheiro de configuração.

Nas novas ofertas 2014, se PHP-FPM está ativado, a variável Magic Quote está desativada de forma padrão. Para as antigas ofcertas partilhada é necessário desativar esta variável no ficheiro .htaccess.

Um guia está disponível para o ajudar na modificação da variável PHP na oferta de alojamento partilhado 2014:[Modificar a versão PHP do alojamento]({legacy}1207)

Um guia está disponível para o ajudar na modificação da variável PHP nas antigas ofertas:[Modificação da variável PHP nas antigas ofertas OVH]({legacy}1175)

![joomla](images/3157.png){.thumbnail}

