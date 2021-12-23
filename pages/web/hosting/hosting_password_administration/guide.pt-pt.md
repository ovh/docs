---
title: 'Partilhado: Gerir e aceder às minhas passwords'
excerpt: 'Partilhado: Gerir e aceder às minhas passwords'
id: '1909'
slug: partilhado_gerir_e_aceder_as_minhas_passwords
legacy_guide_number: g1909
---


## O acesso ao Espaço Cliente da OVH
Trata-se da password associada ao seu identificador* OVH. O seu identificador está na forma "ab12345-ovh". Este identificador é gerado automaticamente quando cria a sua conta no website da [OVH](http://www.ovh.pt).

* O identificador OVH é igualmente denominado como nichandle o nic.
É você quem define a password associada a este identificador. Esta password não é transmitida por e-mail por razões de segurança, na medida em que é no Espaço Cliente que gere o conjunto dos seus serviços (criação, eliminação, modificação).
Se não se lembra da password para acede ao seu [espaço cliente](http://www.ovh.com/manager/web),
poderá modificá-la na página inicial do Espaço Cliente OVH.

![](images/img_2847.jpg){.thumbnail}
Será convidada a introduzir o seu identificador de cliente (ex:"ab12345-ovh") e basta clicar depois em "Submit".

![](images/img_2848.jpg){.thumbnail}
Receberá de seguida um e-mail no endereço de e-mail utilizado na criação da sua ficha de cliente. Ele é primordial para a alteração da password. Caso não tenha acesso ao mesmo é necessário efeutar um procedimento de [modificação do endereço de e-mail](https://www.ovh.pt/cgi-bin/pt/procedure/procedureChangeEmail.cgi) antes de poder modificar a password.
Se não possui o seu identificador ou o endereço de e-mail de contacto deixou de ser válido queira contactar o nosso suporte. Solicitaremos 3 pontos de identificação, e se nos confirmar esses 3 pontos, comunicar-lhe-emos o seu identificador.


## A ligação FTP
Deverá possuir uma oferta de alojamento partilhado para poder utilizar o protocolo FTP (File Tansfert Protocol).
No seguimento da instalação do seu alojamento partilhado, receberá um e-mail com todos os elementos necessários, onde incluiremos o identificador FTP (login) e a respetiva password.

Encontrará este e-mail a qualquer momento no seu Espaço Cliente na secção "Assistência" e depois "histórico dos e-mails".

![](images/img_2849.jpg){.thumbnail}
Todos os e-mails transmitidos pela OVH serão aí armazenamentos sem limite de duração.
Se personalizou a sua password, somente você a conhece. Não será então possível encontrá-la no seu Espaço Cliente na medida em que a OVH não a armazena. É então necessário que proceda à sua alteração no seu Espaço Cliente. O procedimento é o descrito no seguinte [guia](https://www.ovh.pt/g1374.colocar-o-meu-site-online#colocar_os_meus_ficheiros_no_ftp_obter_os_meus_identificadores_ftp).


## A password SQL (base de dados)
O alojamento gratuito Start10M não dispõe de nenhuma base de dados.
A base de dados não é criada aquando da encomenda de um alojamento partilhado. É necessário solicitar a sua criação após o alojamento partilhado estar instalado.
O procedimento de criação de uma base de dados está descrito no seguinte [guia](https://www.ovh.pt/g1374.colocar-o-meu-site-online#importar_-_exportar_a_minha_base_de_dados_criar).
A password é personalizada aquando da criação da base de dados e não é transmitida quando enviamos o e-mail que confirma a correta instalação da base de dados.

Se não se lembra da password da sua base de dados:


- o seu website está online e utiliza a base de dados: a password da base de dados é mencionada num ficheiro presente no seu espaço FTP (ex: para o Wordpress o ficheiro é denominado como "wp-config.php".

- os seus websites não utilizam a base de dados ou deseja modificar a password da base de dados: neste caso deve solicitar a modificação da password a partir do seu Espaço Cliente. O procedimento de alteração da password da base de dados está descrito no seguinte [guide](https://www.ovh.pt/g1374.colocar-o-meu-site-online#importar_-_exportar_a_minha_base_de_dados_recuperar_os_meus_identificadores_sql).


Atenção: modificar a password da base de dados requer alguns cuidados, esta alteração poderá levar ao corte do website ou dos serviços que utilizam esta base de dados.

Lembre-se de atualizar o ficheiro de configuração do seu website para que ele se ligue à base de dados com a nova password se o seu website está presente no alojamento aquando da modificação.


## Ligação ao Webmail
Quando cria um endereço de e-mail personaliza o password. A ligação ao [webmail](https://ssl0.ovh.net) requer o endereço de e-mail completo e a respetiva password.
Se não se lembra da password do seu e-mail poderá modificá-la diretamente a partir do seu Espaço Cliente. O procedimento de alteração da password está descrito no seguinte [guia](https://www.ovh.pt/g1343.criacao-endereco-email#ajuda_como_posso_modificar_a_password_dos_meus_endrecos_de_e-mail)
A modificação da password de um endereço de e-mail requer que a atualize nos seus softwares de e-mail.


## A ligação SSH
Ligar-se via SSH (Secure Shell) necessita que possuia uma oferta partilhada PRO ou superior. A ligação efetua-se com os mesmos dados de acesso que para a ligação FTP.

Para obter uma oferta que permita o acesso via SSH consulte as [nossas ofertas](https://www.ovhcloud.com/pt/web-hosting/)


## Os módulos em 1 clique
Aquando da instalação de um módulo em 1 clique personaliza você mesmo a password do administrador. Esta não será transmitida por e-mail.
Se perdeu a password poderá gerar uma nova a partir da página de ligação ao seu módulo. Está lá presente um link que permitirá a alteração da password.

Deixamos um exemplo para o módulo WordPress:

![](images/img_2851.jpg){.thumbnail}
Se o módulo foi instalado a partir do novo Espaço Cliente é igualmetne possível solicitar a alteração da password a partir dele.

Depois de ter efetuado a ligação ao seu Espaço Cliente deve selecionar o respetivo alojamento na secção Alojamentos.

![](images/img_2855.jpg){.thumbnail}
Deverá de seguida aceder à secção Módulos em 1 clique e depois deverá clicar na roda dentada à direita do módulo, bastando de seguida clicar em Modificar a password

![](images/img_2854.jpg){.thumbnail}

