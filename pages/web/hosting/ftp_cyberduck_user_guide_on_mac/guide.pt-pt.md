---
title: 'Partilhado: guia de utilização do Cyberduck (MAC)'
excerpt: 'Partilhado: guia de utilização do Cyberduck (MAC)'
slug: partilhado_guia_de_utilizacao_do_cyberduck_mac
section: FTP e SSH
order: 05
---


## Apresentação
Cyberduck é um software disponível para MAC.

Este último dá-lhe a possibilidade de colocar o seu website online ao ligar-se ao seu espaço de alojamento (FTP).

Para beneficiar o mesmo deverá aceder ao website oficial da aplicação


- Site oficial Cyberduck (site externo à OVH): [cyberduck.io](https://cyberduck.io/)



![cyberduck macOS](images/2344.png){.thumbnail}
Cyberduck é um software para os utilizadores que disponham de um MAC. Se possui uma máquina Windows deverá optar pela utilização do FileZilla: []({legacy}1380)


## Interface
Aquando da primeira ligação ser-lhe-á apresentada a seguinte janela.

- A zona superior permite-lhe estabelecer uma nova ligação rápida bem como aceder às diferentes ações após estar ligado ao seu espaço FTP (renomear, editar, etc.).

- A zona do meio permite-lhe consultar os marcadores que adicionou (as suas ligações FTP pré-registadas), e uma vez ligado, permite-lhe consultar o conteúdo do seu espaço de alojamento.

- A zona inferior permite-lhe consultar as informações sobre uma ação em curso (ligação ao servidor FTP) bem como alguns logs para adicionar um novo marcador, por exemplo.



![cyberduck macOS](images/2343.png){.thumbnail}
Personalizar a apresentação do Cyberduck
É possível personalizar a apresentação do Cyberduck para o tornar mais eficaz e pessoal.

Para efetuar essa manipulação clique em Apresentação e depois aceda a Personalizar a barra de ferramentas....

No quadro que aparece basta arrastar os elementos que deseja para a barra de ferramentas. Para validar as modificações clique em Terminar

![cyberduck macOS](images/2345.png){.thumbnail}


## Ligação FTP
Para se poder ligar ao seu espaço de alojamento (FTP), siga as etapas descritas em baixo:

1. Clique em Nova ligação no topo superior esquerdo

2. Introduza na nova janela as informações de ligação ao seu Espaço FTP:

- Servidor FTP
- Nome do utilizador
- Password
- Porta (21)

3. Selecione a opção Adicionar às chaves se desejar que o Cyberduck memorize a sua password

4. Clique em Ligação para estabelecer ligação ao seu espaço de alojamento (FTP)


![cyberduck macOS](images/2361.png){.thumbnail}

- Tem a possibilidade de registar a sua password no Cyberduck ao selecionar a opção Adicionar à chave de acesso. Esta opção não é obrigatória: ao não selecionar esta opção, deverá introduzir a sua password sempre que desejar estabelecer ligação ao seu espaço de alojamento.

- Se não conhece os seus identificadores FTP consulte o seguinte guia: [Obter os meus identificadores FTP](http://www.ovh.pt/g1374.mettre-mon-site-en-ligne#colocar_os_meus_ficheiros_no_ftp_obter_os_meus_identificadores_ftp).


Aparecerá uma mensagem de alerta informando-o que o servidor suporta ligações encriptadas (SSL).

- O nosso servidor não é compatível com o FTP-SSL, deverá selecionar Não mostrar e selecionar imperativamente a opção Continuar.

- Se desejar utilizar uma ligação segura deverá utilizar uma [ligação SFTP](#utiliser_cyberduck_connexion_sftp). No entanto, esta ligação apenas está disponível cdaso disponha de acesso SSH na sua oferta de alojamento Web.



![cyberduck macOS](images/2349.png){.thumbnail}

- Se não sabe se dispõe de acesso SSH na sua oferta aceda aoa [descritivo das nossas ofertas](http://www.ovh.pt/alojamento-partilhado/).

- Se não tem a certeza da sua escolha, prefira por padrão Continuar. O servidor irá recusar a ligação caso não disponha de acesso SSH na sua oferta.



- Aconselhamos que registe as informações de ligação num bookmark. Desta forma pode guardar em memória certas informações de ligação.

- Se necessário consulte a seguinte parte do guia: [O que é um bookmark?](#utiliser_cyberduck_quest-ce_quun_signet).




## Ligação SFTP
Se a sua oferta é compatível com um acesso SSH terá a possibilidade de se ligar via SFTP. É imperativo que beneficie do acesso SSH par que a ligação SFTP funcione.

- Se não sabe se dispõe de acesso SSH na sua oferta aceda aoa [descritivo das nossas ofertas](http://www.ovh.pt/alojamento-partilhado/).

- Se não tem a certeza da sua escolha, prefira uma [Ligação FTP](#utiliser_cyberduck_connexion_ftp) ao invés de SFTP. O servidor irá recusar a ligação caso não disponha de acesso SSH na sua oferta.


Para estabelecer ligação ao seu espaço de alojamento, siga as etapas descritas em baixo:

1. Clique em Nova ligação no topo suiperior esquerdo

2. Selecione no menu "drop-down" SFTP (Protocolo de transferência de ficheiros via SSH) (quadro laranja da imagem)

3. Introduza as suas informações de ligação ao seu espaço FTP:

- Servidor FTP
- Nome do utilizador
- Password
- Porta (21)

4. Selecione a opção Adicionar à chave de acesso se deseja que o Cyberduck memorize a sua password

5. Clique em Ligação para se ligar ao seu espaço de alojamento (FTP)


![cyberduck macOS](images/2362.png){.thumbnail}

- Tem a possibilidade de registar a sua password no Cyberduck ao selecionar a opção Adicionar à chave de acesso. Esta opção não é obrigatória: ao não selecionar esta opção, deverá introduzir a sua password sempre que desejar estabelecer ligação ao seu espaço de alojamento.

- Se não conhece os seus identificadores FTP consulte o seguinte guia: [Obter os meus identificadores FTP](http://www.ovh.pt/g1374.mettre-mon-site-en-ligne#colocar_os_meus_ficheiros_no_ftp_obter_os_meus_identificadores_ftp).


Aquando da sua primeira ligação ao seu espaço de alojamento irá aparecer uma janela O host é atualmente desconhecido do sistema.

- Selecione a opção Sempre e depois clique em Permitir. Esta opção permite certificar definitivamente o host de ligação (que é a OVH).



![cyberduck macOS](images/2363.png){.thumbnail}

- Aconselhamos que registe as informações de ligação num bookmark. Desta forma pode guardar em memória certas informações de ligação.

- Se necessário consulte a seguinte parte do guia: [O que é um bookmark?](#utiliser_cyberduck_quest-ce_quun_signet).




## Erros de ligação
Aquando de uma tentativa de ligação ao seu espaço de alojamento é possível que apareça um erro no Cyberduck. Encontrará em baixo os 2 erros mais frequentes que poderá encontrar.
Ocorreu uma falha aquando da ligação
Esta mensagem é igualmente acompanhada pela menção 530 Login authentification failed. Na maioria dos casos, este erro está associado aos identificadores introduzidos. Estes últimos estão certamente incorretos.


- Deve verificar as informações de ligação introduzidas

- Se necessário deverá igualmente modificar o bookmark criado (ao selecionar o mesmo e clicando no logo em forma de lápis)



![cyberduck macOS](images/2352.png){.thumbnail}

- Se não conhece os seus identificadores FTP consulte o seguinte guia: [Obter os meus identificadores FTP](http://www.ovh.pt/g1374.mettre-mon-site-en-ligne#colocar_os_meus_ficheiros_no_ftp_obter_os_meus_identificadores_ftp).


Falha na ligação
Esta mensagem é igualmente acompanhada pela menção Timed out waiting for initial connect reply. Significa, na maioria dos casos, que o host não está disponível: este último está incorreto ou não está disponível.


- Deve verificar as informações de ligação introduzidas

- Se necessário deverá igualmente modificar o bookmark criado (ao selecionar o mesmo e clicando no logo em forma de lápis)


Pode estar igualmente relacionado com uma firewall ou a rede local que esteja a bloquear a porta 21 ou 22 que são utilizadas para a ligação ao FTP. Deverá igualmente verificar a sua configuração pessoal.

![cyberduck macOS](images/2353.png){.thumbnail}

- Como lembrança, o host de ligação ao seu espaço de alojamento é ftp.oseu-dominio.tld (substitua pelo seu domínio) ou ftp.clusterXXX.ovh.net (substitua XXX pelo número do cluter).

- Se necessário aceda ao seguinte link:
[Obter os meus identificadores FTP](http://www.ovh.pt/g1374.mettre-mon-site-en-ligne#colocar_os_meus_ficheiros_no_ftp_obter_os_meus_identificadores_ftp).



## O que é um Bookmark?
Para facilitar o acesso ao seu espaço de alojamento (FTP) aconselhamos que utilize o sistema de Bookmarks. Esta função permite-lhe pré-registar as suasinformações de ligação.

Para efetuar essa adição:


- Estabeleça ligação ao seu espaço de alojamento (FTP ou SFTP)
- Aceda à apresentação dos Bookmarks (quadrado azul e depois quadrado verde da imagem)

 - Clique no logo em forma de [+] (quadrado laranja) à esquerda da janela.

![cyberduck macOS](images/2346.png){.thumbnail}
Irá aparecer uma nova janela que irá conter as suas informações de ligação. No próximo inicio do Cyberduck poderá efetuar duplo clique nesse bookmark para estabelecer ligação de forma mais rápida.


## Transferência de ficheiros
A transferência de ficheiros permite-lhe colocar no seu espaço de alojamento o seu website. Por defeito deverá colocar os seus ficheiros na diretoria (pasta)  www.

Poderá transferir os seus ficheiros de várias formas.
Através de um "drag and drop" (arrastar-largar)
Para transferir os seus ficheiros por FTP poderá simplesmente selecionar e realizar um copiar-colar na janela do dossier local (os ficheiros no seu computador) para a janela do Cyberduck (o seu espaço de alojamento).


- Após efetuar esta ação, os seus ficheiros serão automaticamente colocados na fila de espera para serem transferidos para o servidor. Irá, em consequência desta ação, aparecer uma nova janela.



![cyberduck macOS](images/2354.png){.thumbnail}
Através da interface Transferir
Têm a possibilidade de utilizar a interface Transferir que irá abrir uma janela e que lhe permitirá explorar os seus ficheiros. Deverá selecionar os ficheiros que pretende e depois clica em Transferir.


- Após efetuar esta ação, os seus ficheiros serão automaticamente colocados na fila de espera para serem transferidos para o servidor. Irá, em consequência desta ação, aparecer uma nova janela.



![cyberduck macOS](images/2355.png){.thumbnail}
Consultar as transferências em curso
Terá a possibilidade de consultar o histório das transferências para o seu espaço de alojamento. Poderá encontrar:


- os ficheiros em espera de serem transferidos para o alojamento mas que ainda estão na fila de espera (ou em curso de serem enviados)
- os ficheiros cuja transferência falhou
- os ficheiros cuja transferência foi realizada


Esta janela apresenta-se de duas formas diferentes:


- automaticamente aquando da inicialização de uma transferência
- ao clicar em Janela e depois Transferências



![cyberduck macOS](images/2356.png){.thumbnail}


## Ações que poderá efetuar num ficheiro/pasta
Ao selecionar um ficheiro ou uma pasta presente no seu espaço de alojamento (na janela do Cyberduck), terá a possibilidade de efetuar diversas Ações.

Estas últimas permitem-lhe:


- Ler as informações de um ficheiro ou pasta, e ainda de modificar os seus direitos (CHMOD)
- Editar o ficheiro com uma aplicação à escolha
- Renomear o ficheiro ou pasta
- Eliminar o ficheiro ou pasta
- Efetuar download ao(s) elemento(s) selecionado(s)
- Criar uma nova pasta ou ficheiro


A lista acima não é exaustiva, ou seja, existem outras ações possíveis.
Consulte a informação presente no website do Cyberduck se necessário.

![cyberduck macOS](images/2357.png){.thumbnail}


## Direitos dos ficheiros e pastas
Tem a possibilidade de modificar os direitos (CHMOD) dos seus ficheiros ou pastas presentes no alojamento

Estes últimos repartem-se em 3 famílias:


- Proprietário
- Grupo
- Públicos (outros).


Para que aceda a esta interface deve selecionar o(s) ficheiro(s) ou pasta(s) desejado(s) e clique em Ações, e depois em "Ler as informações".

Nessa nova janela clique em Permissões efetuando as modificações desejadas:


- Permissões UNIX: o valor irá ser atualizado automaticamente para as 3 famílias indicadas
- Selecione as opções desejadas: o valor será atualizado automaticamente4 unicamente para as permissões UNIX



![cyberduck macOS](images/2358.png){.thumbnail}


## Reabertura do site
Tem a possibilidade de efetuar a reabertura do seu site ao utilizar um comando personalizado.

Na maioria dos casos esta manipulação deve ser efetuada após o encerramento do seu alojamento por parte da OVH no seguimento de um hack.

Para utilizar um comando:


- Clique em Ir
- Clique em Enviar um comando...



![cyberduck macOS](images/2359.png){.thumbnail}
Na nova janela introduza o comando:


- CHMOD 705 /
- Clique em Enviar


Ao confirmar, irá aparecer a mensagem 200 Permissions changed on / deverá aparecer no quadro em baixo.


- Para verificar que a reabertura foi efetuada com sucesso, basta que aceda ao seu website a partir de um browser.



![cyberduck macOS](images/2360.png){.thumbnail}

- Este comando não funciona via SFTP. Para o efetuar, utilize uma [ligação FTP](#utiliser_cyberduck_connexion_ftp).

- Como lembrança queira testar a apresentação após um máximo de 3 horas. Os nossos robots passam a cada 3 horas para verificar as alterações dos estados. Em função do momento em que a manipulação efetuada, o restabelecimento poderá ser mais ou menos rápido.

- Se o prazo das 3 horas for ultrapassado e o seu website não está ainda online, queira contactar o nosso suporte.




## Conhecer o servidor de ligação
Em certos casos, o nosso suporte poderá pedir-lhe o servidor ao qual se liga o Cyberduck.

Esta verificação poderá ser necessária caso constate lentidão, ou ainda diversas anomalias com o seu espaço FTP.

Para tal, deverá previamente ativar o separador dos logs:


- Clique em Apresentação
- Clique em Apresentar/ocultar o separador dos logs


Deverá depois aparecer um quadro abaixo na janela do Cyberduck. De seguida:


- Ligue-se ao seu espaço FTP
- Vá até ao topo do separador dos logs
- Retenha o webmXXX



![cyberduck macOS](images/2364.png){.thumbnail}

