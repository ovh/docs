---
title: 'CMS, instalar manualmente Drupal'
excerpt: Como instalar manualmente Drupal?
slug: cms_instalar_manualmente_drupal
section: CMS
order: 04
---


## Parte 1: preparação de instalação
Ferramentas necessárias

Para instalar o CMS Drupal no seu alojamento partilhado, aconselhamos a utilização de um cliente FTP como FileZilla (gratuito)

## Dados de autenticação necessários para a instalação
Assegure-se que possui o seu identificador de cliente (NIC-Handle) e a sua palavra-passe para poder estabelecer ligação ao seu [Espaço Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), se necessário.


- Obtenha o seu identificador e a palavra-passe FTP que lhe permite estabelecer ligação ao seu servidor de armazenamento dos seus ficheiros.

- É também necessário ter os dados de ligação SQL que permitem estabelecer ligação à base de dados.
Está à disposição um guia de ajuda na obtenção dos dados de ligação SQL :[]({legacy}1909)



## Parte 2: recuperação dos ficheiros fonte de instalação

- Aceda ao site oficial de [Drupal](http://drupalfr.org/).



![drupal](images/3234.png){.thumbnail}
Encontrará aí, geralmente, um link para poder fazer o download da mais recente versão estável do CMS para o seu computador.
No nosso exemplo, usamos a versão 7.41.
O ficheiro que vai obter estará, geralmente, comprimido (em formato zip, comummente). Será necessário poder descomprimir esse ficheiro no seu computador. Encontrará na Internet vários tutoriais para ajuda com essa operação.


## Parte 3: colocação dos ficheiros no seu espaço de armazenamento através de FTP
Descompressão da pasta de ficheiros

Abra a pasta na qual guardou o ficheiro comprimido.

Clique com o botão do lado direito do rato e escolha "Extrair tudo" ou "Extrair aqui".

Indique um destino a fim de descomprimir os ficheiros para esse destino.

Vários tutoriais e softwares de descompressão estão disponíveis na Internet para o ajudar com estas ações.

A pasta terá o nome "Drupal-xxx" ("xxx" corresponde à versão de Drupal)

![drupal](images/3233.png){.thumbnail}
Ligação ao espaço de alojamento através de FTP


Para colocar os ficheiros de WordPress no seu alojamento, deverá ligar-se ao mesmo.

Está à disposição um guia de ajuda à ligação FTP num alojamento partilhado OVH:[]({legacy}1374)
Transferência dos ficheiros através de FTP

Siga estas etapas para colocar os seus ficheiros no espaço FTP.

## Etapa 1
Uma vez já ligado através de FileZilla:


- Na secção "Site local", que corresponde aos ficheiros presentes no seu computador local, abra a pasta que descomprimiu com o nome "Drupal-xxx" e na qual estão presentes os ficheiros do CMS.


Na secção "Site Distante/remoto", que corresponde ao espaço de alojamento OVH, abra a pasta "Drupal-xxx". É nessa pasta que deverão ser colocados todos os ficheiros do CMS.
Se a pasta não existir, terá  a possibilidade de a criar
Os seus ficheiros devem estar obrigatoriamente na pasta "www". Se não o fizer, o procedimento de instalação não estará diretamente acessível através do seu nome de domínio.

## Etapa 2
Uma vez abertas as pastas:


Na secção "Site local" encontrará os ficheiros necessários à instalação do CMS Drupal.

Para selecionar todos os ficheiros, use CTRL+A.

Arraste e largue, de seguida, os ficheiros na secção "Site Distante/Remoto" dentro da pasta "www".

![drupal](images/3199.png){.thumbnail}
É muito provável que a sua pasta "www" não esteja vazia. Vamos abordar esse assunto mais adiante neste guia.

## Etapa 3
A transferência de ficheiros está em curso.

Aguarde até que todos os ficheiros sejam colocados no servidor FTP. Isso poderá levar alguns minutos.

Uma vez que a transferência esteja concluída, assegure-se que todos os ficheiros e as pastas foram corretamente transferidos.

Esta operação é a última da parte consagrada à transferência de ficheiros para o espaço FTP.

![drupal](images/3200.png){.thumbnail}


## Etapa 1 - Instalação de Drupal
Aceda ao seu nome de domínio através de um browser.

Esta página aparecerá.

Selecione "Standard
Install with commonly used features pre-configured." e, depois, clique em "Save and continue"para continuar.

![drupal](images/3219.png){.thumbnail}


## Etapa 2 - Escolha do idioma
Selecione o idioma que deseja para a instalação e clique em "Save and continue".

![drupal](images/3218.png){.thumbnail}


## Estapa 3 - Ligação à base de dados
Muna-se dos seus dados de autenticação no servidor de base de dados.
Está à disposição ajuda relativa a essa tarefa no seguinte guia: []({legacy}1374))


Introduza as informações solicitadas para a base de dados:

Marque a opção "MySQL, MariaDB ou equivalente"

Nome da base de dados: O que escolheu no seu Espaço Cliente aquando da criação da base de dados que vai usar para o seu site Drupal;

Nome de utilizador: igual ao nome da base de dados;

Palavra-passe: se não a modificou, é a que definiu no seu Espaço Cliente quando criou a base de dados;


- Clique de seguida em "OPÇÕES AVANÇADAS".



![drupal](images/3202.png){.thumbnail}

- Endereço do servidor de base de dados: Introduza o nome do servidor de base de dados que vê no seu Espaço Cliente ou no email de instalação da base de dados;


Prefixo das tabelas: útil para realizar várias instalações de Drupal na mesma base dados. Nesses casos, será necessário criar um prefixo diferente para cada uma das instalações.

Em caso de dúvida, deixe esse campo vazio.

![drupal](images/3203.png){.thumbnail}
Importante: os dados de acesso da base de dados não são enviados de forma automática após a criação do alojamento. Para os receber, tem de criar uma base de dados a partir da sua área de cliente.
Clique em "Gravar e continuar" para prosseguir e validar as informações de ligação à base de dados.


## Etapa 4 - Progressão
Se introduziu corretamente as diferentes informações necessárias para a base de dados, a instalação irá ser iniciada.
Senão, será necessário refazer a etapa. introduzindo os dados corretos.


- Basta aguardar algum tempo e a instalação seja concluída.



![drupal](images/3190.png){.thumbnail}


## Etapa 5 - Configuração do utilizador "Administrador" de Drupal
Introduza as informações solicitadas em relação à administração do seu site Drupal. A descrição das informações é sugestiva:

Nome do site : Indique o seu nome de domínio;

Nome de utilizador: O nome do utilizador que administrará o seu site;

Endereço de email: Introduza o email do administrador. Deve ser um email válido e existente;


- Palavra-passe: Indique a palavra-passe que vai ser usada pelo administrador do site;
- Confirmar a palavra-passe : A mesma coisa que o campo anterior;


Desça um pouco mais até ao fundo da página

![drupal](images/3206.png){.thumbnail}

- País, definição padrão: Escolha o país/idioma do site.
- Fuso horário, definição padrão: Escolha o fuso horário do seu site.

- Atualizações automáticas & envio de notificação por email: Aconselhamos a ativação destas opções com vista a aumentar a estabilidade e a segurança do seu site.



Clique em "Gravar e continuar" para prosseguir.

![drupal](images/3207.png){.thumbnail}


## Etapa 6 - Finalização
O seu CMS Drupal está agora instalado.

Clique em "Visite o seu novo site".

![drupal](images/3208.png){.thumbnail}
Apenas tem agora de utilizar Drupal e construir o seu site.

![drupal](images/3209.png){.thumbnail}


## Suporte Drupal
Convidamo-lo a consultar o site dedicado à [ferramenta Drupal](https://www.drupal.org/support/). se necessitar de ajuda na sua utilização.
O suporte da OVH não está habilitado para responder às suas questões sobre configuração e utilização de Drupal.
Está no entanto disponível um guia para o ajudar na utilização: []({legacy}2053).


## Erros Clássicos
Erro clássico: site em construção


Colocou os seus ficheiros, através de FTP mas, continua a ver "Página em construção" numa página padrão criada pela OVH aquando da instalação do seu alojamento.


Se colocar o seu conteúdo na pasta "www" sem ter eliminado o conteúdo padrão adicionado pela OVH, encontrará esse caso.

Para corrigir o problema:


- elimine ou altere o nome do ficheiro "index.html".

Poderá ser interessante apenas mudar o nome para que, caso necessário, possa mais tarde colocar o site em manutenção.


Outra informação útil: os ficheiros sdo seu site devem ser colocados na pasta 'www' a fim de poderem ser tidos em consideração.

![drupal](images/3217.png){.thumbnail}
Erro Clássico: versão de PHP

Trata-se de um erro relativo à versão de PHP do seu servidor.

A causa é simples: a última versão de PHP não foi ativada.


Tem à sua disposição um guia para o ajudar a alterar a versão de PHP em uso no seu alojamento:[aqui]({legacy}1207)

