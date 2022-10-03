---
title: 'Piratagem do seu website WordPress: conselhos e casos práticos'
excerpt: ''
slug: piratagem_do_seu_website_wordpress_conselhos_e_casos_praticos
section: Casos de uso
order: 01
---


## 
Dispõe de um website WordPress alojado na OVH e apercebeu-se que o seu website deixou de ser apresentado ou é reencaminhado para um outro website, ou ainda o seu website apresenta inúmeros anúncios.

A OVH não assegura o suporte sobre a utilização de WordPress, nem por correio nem por telefone, mas poderemos indicar-lhe o que poderá fazer no seguimento de ter sido alvo de um ataque.


## Porque foi o meu Website alvo de pirataria?
Porque foi o meu Website alvo de pirataria? Quais os passos que devo efetuar a seguir?

Ser alvo de pirataria está geralmente associado a uma não atualização do produto, à utilização de plugins não oficiais, passwords demasiado simples...

O risco 0 não existe! É no entanto possível minimizar este risco.

Existem numerosas medidas práticas que pode tomar para corrigir o problema quando ele ocorre, e/ou impedir que volte a ocorrer (efetuar atualizações regularmente: versão WordPress, temas, plugins..).

Iremos neste guia ajudá-lo nas diferentes etapas a ter em conta para colocar novamente o seu website a funcionar.

Se a OVH encerrar o seu website, poderá encomendar um[guia generalista](https://www.ovh.pt/g1392.procedimento-encerramento-devido-a-hack-ovh) sobre os procedimentos de encerramento por pirataria (hack).


## Faça um scan ao seu computador
A primeira localização pela qual deve começar é pelo seu computador local.
Em numerosos casos, a causa do ataque/infecção começa localmente (por exemplo, o seu computador portátil, o computador do trabalho, etc...).

Execute um anti-vírus/malware no seu computador local. Alguns vírus podem não ser eliminados por certos softwares anti-vírus, sugerimos que utilize vários (localmente e online). Este conselho é dado para sistemas Windows, Linux e Mac.


## Avaliar a situação
Quando verifica que o seu website foi alvo de pirataria, é necessário agir em consequência.
Num primeiro tempo é necessário saber quando é que a pirataria teve inicio para verificar se o restauro dos dados feito pelo sistema da OVH é possível.
No seguimento deste guia iremos localizar a intrusão, e abordaremos 2 casos possíveis.


## 
Antes de qualquer restauro é importante verificar a data das últimas modificações dos seus ficheiros web (FTP) para efetuar a procura e a correção das falhas de segurança.
Não nos é possível efetuar um procedimento detalhado quer permita localizar a origem de todas as intrusões, mas veja como poderá proceder de forma geral, ao termos em conta que o ataque teve origem numa falha num script e que o ataque foi efetuado por intermédio de um pedido HTTP.

Todos os pedidos HTTP estão disponíveis nos seus logs (https://logs.cluster0XX.hosting.ovh.net/seu_dominio).
Substitua "seu_dominio" pelo seu nome de domínio e a respetiva extensão. ex: ovh.com.

- 1 Recupere a data e a hora que lhe aparece no e-mail que recebeu*
- 2 Consulte os logs partindo deste horário, alargando de seguida as pesquisas progressivamente para outros horários até que descubra uma entrada incorreta (algo estranho, diferente das outras, etc). Esta operação pode requerer um pouco mais de prática ou conhecimento do formato dos pedidos consoante os casos. Tome especial atenção aos pedidos do tipo POST, que são a principal fonte de hack;
- 3 Recupere o script atacado por esse pedido;
- 4 Estude o script para localizar a falha;
- 5 Corrige a falha.


* o envio de e-mail apenas ocorre se o seu alojamento foi bloqueado. Se não foi bloqueado deverá procurar a data das últimas modificações no seu espaço FTP (data dos ficheiros).

Eliminar apenas o código malicioso do hacker não é suficiente, é necessário corrigir por completo a falha de segurança.
Em nenhum caso o nosso suporte poderá assisti-lo neste tipo de pedidos.


## Restauro do website
O WordPress é composto por ficheiros e uma base de dados. É possível restaurar os seus ficheiros para uma data anterior. A OVH propõe-lhe um histórico de 2 semanas no que aos ficheiros diz respeito. Relativamente à base de dados é possível recuperar um backup de há 7 dias.
O restauro não corrige falhas de segurança, é necessário procurar a falha e corrigir a mesma.
O restauro elimina todo o conteúdo presente no seu alojamento pelo conteúdo do backup.


## Restauro dos ficheiros via FTP
Através do Manager é possível restaurar a totalidade do espaço FTP mas pode ser complicado se possui domínios associados ao mesmo alojamento.

É então preferível restaurar somente a pasta caso tenha vários websites num mesmo alojamento: consulte o seguinte  [guia](https://www.ovh.pt/g1593.recuperacao-backup-inteiro-ou-de-um-ficheiro-especifico-via-ftp-via-filezilla)


## Restauração de base de dados SQL
Deixamos 2 guias que explicam como efetuar [exportação](https://www.ovh.pt/g1394.exportacao-de-base-de-dados) da base de dados e como efetuar uma [limportação](https://www.ovh.pt/g1393.importacao-de-base-de-dados-mysql).

Após ter efetuado o backup da base de dados (dump), é necessário eliminar o conjunto das tabelas a partir do [phpMyAdmin](https://docs.ovh.com/pt/hosting/conexao-base-de-dados-servidor-bdd/) a fim de poder importar o seu backup.


## Seguimento do restauro
Após ter efetuado um restauro deve verificar se existe alguma atualizações do WordPress, do tema ou dos plugins.

É igualmente aconselhado que desative plugins não utilizados, embora a desativação poderá não ser suficiente se houver alguma falha presente.

Se o acto de pirataria é mais antigo e o restauro não resolve o problema veja como poderá voltar a recolocar o seu WordPress a funcionar:

## Não se consegue ligar ao painel de administrador WordPress
Deve, nesse caso, modificar a sua [password do administrador](https://codex.wordpress.org/) ao seguir o guia oficial do WordPress.

Se verifica que é complicado, é igualmente necessário atualizar o seu endereço de e-mail a partir do [phpMyAdmin](https://docs.ovh.com/pt/hosting/conexao-base-de-dados-servidor-bdd/) na tabela user e ao voltar à página de ligação clique em Perdeu a password?, e aguarde por um e-mail.


## Substitua os ficheiros WordPress com os de um WordPress "virgem"
A substituição de todos os seus ficheiros de base assegura-lhe que os ficheiros não são deixados no estado de pirateados.

- aceda ao website oficial do [WordPress](https://pt.wordpress.org/).


Encontrará neste website um link que permitirá o download da última versão estável do WordPress para o seu computador.

O ficheiro que recuperar está normalmente comprimido (zipado), e é necessário descomprimi-lo (extrai-lo) para o seu computador. Encontrará na Internet inúmeras ajudas para o ajudar com a descompressão do ficheiro.

Depois de o ter descomprimido, é necessário transferir os ficheiros para o seu espaço FTP, e têm à sua disposição um [guia](https://www.ovh.pt/g1374.colocar-o-meu-site-online).

Caso tenha no seu alojamento vários websites, a transferência dos dados deverá ser efetuada para a pasta do website em questão.

É depois necessário modificar o ficheiro wp-config.php para que a ligação à base de dados fique a funcionar.

Sugerimos que consulte o e-mail que lhe foi enviado no seguimento da criação da base de dados, podendo encontrar este e-mail no seu Espaço Cliente na sua conta => Histórico dos e-mails, com exceção da password pois essa somente você a conhece.

Se não se lembra da password da base de dados, é necessário que a modifique no seu Espaço Cliente. Essa manipulação é explicada no seguinte [guia](https://www.ovh.pt/g1374.colocar-o-meu-site-online).
É importante que verifique depois na interface de administração do WordPress as atualizações.


## Informações úteis
No caso dos plugins aconselhamos a exclusiva utilização oficial do WordPress. Os plugins não oficiais não são forçosamente utilizados pelo programador, e podem ainda conter código malicioso.

