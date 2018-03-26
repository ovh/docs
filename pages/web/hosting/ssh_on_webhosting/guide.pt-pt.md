---
title: 'Partilhado: O SSH nos alojamentos partilhados'
excerpt: 'Partilhado: O SSH nos alojamentos partilhados'
id: '1962'
slug: partilhado_o_ssh_nos_alojamentos_partilhados
legacy_guide_number: g1962
---


## O que é o SSH e quais os seus benefícios?
A utilização de SSH no seu alojamento é possível a partir da oferta Pro (nas [antigas ofertas](https://www.ovh.pt/alojamento-partilhado/antigas_ofertas_alojamento_partilhado.xml) a partir do alojamento da gama plan).

ATENÇÃO: Nas antigas ofertas somente poderá aceder com a conta FTP principal. Isto significa que os utilizadores FTP suplementares (os que criou com recurso ao Multi-FTP) não terão acesso SSH.

O SSH permite-lhe ligar-se ao seu alojamento e de manipular os ficheiros (como FTP).
Para mais informações sobre o protocolo SSH, [clique aqui](https://pt.wikipedia.org/wiki/SSH).


## Pré-requisitos

- A opção SSH deverá estar disponível:

Apenas para alojamentos a partir da [oferta PRO](https://www.ovh.pt/alojamento-partilhado/alojamento-partilhado-pro.xml).


- Um software que permite o acesso SSH (Putty por exemplo).

- A porta 22 aberta na sua Firewall e no seu router.




## Ativar/Desativar o SSH num utilizador
Poderá gerir os seus logins SSH no seu Espaço Cliente. Basta que clique no nome do seu alojamento por baixo da secção alojamento e aceda ao separador "FTP - SSH".

Ao criar novos utilizadores FTP, a ligação via SSH poderá ser ativada igualmente para esse mesmo utilizador.

![](images/img_3945.jpg){.thumbnail}
Poderá deesativar a ligação SSH num utilizador ao clicar na roda dentada à direita do seu login e depois clique em "Modificar".

Esta modificação será efetivada dentro de alguns minutos.

![](images/img_3946.jpg){.thumbnail}


## Abrir a linha de comandos ('prompt')
Em Linux :

- Em KDE: Aceda ao menu principal (de forma padrão no canto inferior esquerdo) e na barra de pesquisa introduza "konsole", clicando devendo clicar de seguida no primeiro resultado da pesquisa.

Em Mac :
- Clique no disco rígido e clique de seguida no diretorio de aplicações. Aceda depois ao diretorio de utilidades e abra a aplicação "Terminal"

Em Windows :


- Em Windows não existe nenhum cliente nativo de SSH, e como tal, é necessário efetuar o download de um.

O mais conhecido é sem dúvida o Putty. Pode efetuar o seu download [aqui](http://www.putty.org/).


## A ligação ao seu alojamento através de SSH
Em Linux e Mac:

- Para se ligar ao seu alojamento através de SSH abra uma linha de comandos e introduza:
SSH SeuLoginFtp@SeuServidorFtp


Poderá encontrar esses identificadores FTP graças a [este guia](https://www.ovh.com/fr/g1909.mutualise_gerer_et_acceder_a_ses_mots_de_passe#les_differents_mots_de_passe_lies_au_service_mutualise_dovh_la_connexion_ftp).

![](images/img_3093.jpg){.thumbnail}
Em Windows :

- Para Windows, o melhor é consultar o seguinte guia para [Putty](https://www.ovh.com/fr/g1964.mutualise_utilisation_de_putty_sur_windows).




## Lista dos principais comandos
Basta substituir o termo arg pelo nome da pasta ou ficheiro em que pretende efetuar o comando.

|Comando a introduzir|Tradução (em Inglês)|Explicação (Em Português)|
|pwd|print working directory|Apresenta a pasta em que estamos a trabalhar|
|cd arg|change directory|Altera a pasta de trabalho de; arg corresponde a nova pasta. O comando cd sem adicionar arg posiciona-nos na pasta home.|
|cd ..|change directory to ..|Altera a pasta de trabalho para um nível abaixo da árvore de pastas.|
|ls arg|list|Lista o conteúdo de arg se estiver numa pasta. Sem arg, ls lista o conteúdo da pasta em que estamos a trabalhar.|
|ll arg|long list|Apresenta as informações detalhadas sobre o ficheiro arg.|
|ls -a arg|list all|Apresenta todos os ficheiros de arg, mesmo os que começam por .., se estiver numa pasta. As opções de ls podem ser combinadas: ls -al.|
|chmod droit arg|change droits|Altera os direitos do ficheiro arg, conforme droit.|
|mkdir arg|make directory|Cria a pasta arg.|
|rmdir arg|remove directory|Elimina a pasta arg, se estiver vazia.|
|rm arg|remove|Elimina a referência arg.|
|rm -r arg|remove recursively|Elimina arg e todos os ficheiros que estiverem na pasta.|
|mv arg1 arg2|move|Renomeia ou move arg1 para arg2.|
|touch arg|touch|Cria um ficheiro vazio de nome arg se não existir, caso contrário atualiza-o com a data corrente, a sua data da última modificação.|




## Lançar um script com uma versão específica de PHP
Para executar os seus scripts a partir de um comando SSH e com recurso a uma versão específica de PHP; deverá utilizar os seguintes comandos.

|Commande|Version|
|php.ORIG.4 (cgi)|4.4.9|
|php.ORIG.5_2 (cgi)|5.2.17|
|php.ORIG.5_3 (cgi-fcgi)|5.3.29|
|/usr/local/php5.3/bin/php (cli)|5.3.29|
|php.ORIG.5_4 (cgi-fcgi)|5.4.38|
|/usr/local/php5.4/bin/php (cli)|5.4.38|
|/usr/local/php5.5/bin/php (cli)|5.5.22|
|/usr/local/php5.6/bin/php (cli)|5.6.6|


Por exemplo, para executar o script "meuScript.php" com a versão 5.3 de PHP, deverá lançar o seguinte comando:

```
php.ORIG.5_3 meuScript.php
```


Antes do nome do script é igualmente necessário indicar a sua localização.
Se o seu ficheiro "meuScript.php" se encontra na pasta "WWW", e se deseja executá-lo na versão PHP 5.3, é necessário lançar o seguinte comando:

```
php.ORIG.5_3 www/monScript.php
ou
php.ORIG.5_3 /www/monScript.php
```




## As nossas chaves públicas (a validar aquando da sua primeira ligação via SSH)
Será solicitado uma validação da chave pública aquando da primeira ligação no seu servidor.

