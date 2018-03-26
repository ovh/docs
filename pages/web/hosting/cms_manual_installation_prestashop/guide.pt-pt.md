---
title: 'CMS, como instalar manualmente Prestashop'
excerpt: Como instalar manualmente o Prestashop?
slug: cms_como_instalar_manualmente_prestashop
legacy_guide_number: g1979
---


## Parte 1: preparação da instalação

## Ferramentas necessárias
Para instalar a sua plataforma PrestaShop no seu alojamento partilhado, sugerimos o uso do cliente FTP FileZilla (gratuito).

## Identificadores de acesso necessários para a instalação
Assegura-se que possui o Nichandle e a palavra-passe associada para poder ligar-se ao seu Espaço Cliente OVH, se necessário.


- Obtenha o seu identificador e palavra-passe de acesso FTP para se ligar ao espaço de armazenamento do seu serviço de alojamento partilhado OVH.
Um guia para obtenção dos dados de acesso FTP está à disposição:[]({legacy}1374)

- É necessário possuir um identificador e palavra-passe da base de dados SQL que lhe permita a ligação a uma base de dados.
Um guia para obtenção dos dados de acesso à base de dados está à disposição:[]({legacy}1374)


![](images/img_3158.jpg){.thumbnail}


## Parte 2: recuperação dos ficheiros "fonte" da instalação

- Aceda ao site oficial [PrestaShop](http://www.prestashop.com/).

 Aí encontrará, geralmente, o link para fazer o download da última versão estável do CMS para o seu computador.


O ficheiro que vai obter estará, geralmente, comprimido (em formato zip, certamente). Será necessário poder descomprimir esse ficheiro no seu computador. Encontrará na Internet vários tutoriais para ajuda com essa operação.

![](images/img_3159.jpg){.thumbnail}


## Parte 3: colocação dos ficheiros no seu espaço de armazenamento através de FTP

## Descompressão da pasta de ficheiros
Abra a pasta na qual guardou o ficheiro comprimido.

Clique com o botão do lado direito do rato e escolha "Extrair tudo".

Indique um destino a fim de descomprimir os ficheiros para esse destino.

Vários tutoriais e softwares de descompressão estão disponíveis na Internet para o ajudar com estas ações:

A pasta terá o nome "prestashop"

![](images/img_3160.jpg){.thumbnail}

## Ligação ao espaço de alojamento através de FTP
Para colocar os ficheiros de PrestaShop no seu alojamento, deverá ligar-se ao mesmo.

Está à disposição um guia de ajuda à ligação FTP num alojamento partilhado OVH:[]({legacy}1374)

![](images/img_3161.jpg){.thumbnail}

## Transferência dos ficheiros através de FTP
Siga estas etapas para colocar os seus ficheiros no espaço FTP.

## Etapa 1
Uma vez já ligado através de FileZilla:


- Na secção "Site local", que corresponde aos ficheiros presentes no seu computador local, abra a pasta que descomprimiu com o nome "prestashop" e na qual estão presentes os ficheiros do CMS.


Na secção "Site Distante/remoto", que corresponde ao espaço de alojamento OVH, abra a pasta "www". É nessa pasta que deverão ser colocados todos os ficheiros do CMS.

Se a pasta não existir, terá  a possibilidade de a criar.

Os seus ficheiros devem estar obrigatoriamente na pasta "www". Se não o fizer, o procedimento de instalação não estará diretamente acessível através do seu nome de domínio.

![](images/img_3162.jpg){.thumbnail}

## Etapa 2
Uma vez abertas as pastas:

Na secção "Site local" encontrará os ficheiros necessários à instalação do CMS Joomla!.

Para selecionar todos os ficheiros, use CTRL+A.

Arraste e largue, de seguida, os ficheiros na secção "Site Distante/Remoto" dentro da pasta "www".

É muito provável que a sua pasta "www" não esteja vazia. Vamos abordar esse assunto mais adiante neste guia.

![](images/img_3163.jpg){.thumbnail}

## Etapa 3
A transferência de ficheiros está em curso.

Aguarde até que todos os ficheiros sejam colocados no servidor FTP. Isso poderá levar alguns minutos.

Uma vez que a transferência esteja concluída, assegure-se que todos os ficheiros e as pastas foram corretamente transferidos.

Esta operação é a última da parte consagrada à transferência de ficheiros para o espaço FTP.

![](images/img_3164.jpg){.thumbnail}


## Parte 4: ligação com a base de dados

## - Antes de continuar a instalação, limpe a cache do seu browser a fim de evitar eventuais erros.
Para estabelecer a ligação entre o PrestaShop e a sua base de dados, devemos seguir as etapas de instalação do CMS.

## Etapa 1
Aceda ao seu domínio.

Selecione a linguagem "Português" para a instalação da sua loja PrestaShop.

Clique em "Seguinte" para continuar.

![](images/img_3165.jpg){.thumbnail}

## Etapa 2
Marque a opção "Eu aceito os termos e condições do contrato".

Clique de seguida em "Seguinte" para aceder à etapa seguinte.

![](images/img_3166.jpg){.thumbnail}

## Etapa 3
Serão pedidas informações complementares sobre a loja no ponto em que a está a criar.
Introduza os seguintes campos:

Nome da sua loja: o nome desejado para a loja, pode influenciar o referenciamento.

Atividade principal: a atividade predominante da loja.

País: selecione o país da sua loja.

Nome: o nome do administrador.

Apelido: o apelido do administrador.

Endereço de e-mail: introduza um endereço de e-mail válido para o acesso à administração da loja.

Password: introduza a password para aceder a administração da loja (mínimo 8 caracteres).

Confirmação da password: volte a introduzir a password.

Inscrever-se na newsledtter da PrestaShop: "marque a casa" se desejar receber as newsletter provenientes da equipa do PrestaShop.

Clique em "Seguinte" para validar as informações relativas à loja PrestaShop.

![](images/img_3167.jpg){.thumbnail}

## Etapa 4
Muna-se dos identificadores da sua base de dados (ajuda no inicio deste guia).

Introduza as informações pedidas relativas à base de dados:

Nome do servidor: introduza o nome do servidor da sua base de dados indicado no e-mail de instalação ou no seu Espaço Cliente.

Nome da base de dados: escolhida aquando da sua criação no seu Espaço Cliente.

Nome do utilizador: idêntico ao nome da base de dados, encontra-a no e-mail de instalação da base de dados.

Password: defina no seu Espaço Cliente.

Prefixo das tabelas: útil para efetuar várias instalações de PrestaShop numa mesma base de dados. Neste caso deve introduzir um prefixo diferente para cada uma das instalações.

Importante: os identificadores da base de dados não são enviados aquando da instalação do alojamento. Para os receber deve ativar a base de dados no seu Espaço Cliente.

Após todas as informações terem sido preenchidas, deve testar a ligação à base de dados.

Clique em "Seguinte" para validar as informações de ligação.


- Estas etapas terminam a criação do link da sua base de dados e do PrestaShop. Somente resta a finalização da instalação propriamente dita.



![](images/img_3168.jpg){.thumbnail}


## Finalização

## Finalização das etapas de instalação
A fim de terminar a instalação do PrestaShop, continue as etapas de instalação

## Etapa 1
Deixar que a instalação termine. Após estar a 100% será apresentada uma nova janela.

![](images/img_3169.jpg){.thumbnail}

## Etapa 2
A instalação da loja PrestaShop está terminada!

Poderá desde já identificar-se e começar a trabalhar na sua loja ao clicar em "Gerir a minha loja". 


- Atenção: Por razões de segurança deverá eliminar manualmente a pasta "install" presente no alojamento na pasta "www" para se poder ligar.



![](images/img_3170.jpg){.thumbnail}

## Visualização da parte de administração do PrestaShop
Encontrará aqui uma pré-visualização do painel de administração PrestaShop.

![](images/img_3171.jpg){.thumbnail}


## Informações úteis
O suporte da OVH não está habilitado para responder às suas questões sobre configuração e utilização de PrestaShop.
Está no entanto disponível um guia para o ajudar na utilização: []({legacy}2053)..

Convidamo-lo a consultar o [fórum do PrestaShop](https://www.prestashop.com/forums/forum/202-forum-em-portugues/).

## Erro clássico: site em construção
Colocou os seus ficheiros, através de FTP mas, continua a ver "Página em construção" numa página padrão criada pela OVH aquando da instalação do seu alojamento.

Se colocar o seu conteúdo na pasta "www" sem ter eliminado o conteúdo padrão adicionado pela OVH, encontrará esse caso.

Para corrigir o problema:


- elimine ou altere o nome do ficheiro "index.html".


Poderá ser interessante apenas mudar o nome para que, caso necessário, possa mais tarde colocar o site em manutenção.

Outra informação útil: Os ficheiros do seu website deverão ser colocados na pasta "www" para que sejam tomados em conta.

![](images/img_3172.jpg){.thumbnail}

## Erro clássico: esqueceu-se de eliminar a pasta "install"

- Atenção: Por razões de segurança deverá eliminar manualmente a pasta "install" presente no alojamento na pasta "www" para se poder ligar.



![](images/img_3173.jpg){.thumbnail}

