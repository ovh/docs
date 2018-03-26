---
title: Alojamento partilhado Utilizar SVN
excerpt: Subversion (SVN, abreviado) é um sistema de gestão de versões. Este guia mostra-nos como usar o acesso svn através de ssh com a chave pública e privada. (Deve aceder através de SSH). O seguinte guia assume que está ligado por SSH à raiz do seu alojamento.
slug: alojamento_partilhado_utilizar_svn
legacy_guide_number: g1961
---


## 

- Possuir um alojamento que permita ligação SSH
- Saber utilizar uma ligação por SSH (para ajuda, pode recorrer a este [guia](https://www.ovh.pt/g1962.partilhado))




## 
Uma vez conectado por SSH ao seu alojamento, deve criar o diretório raiz do repositório SVN e depois depositá-lo.

Basta escrever o seguinte comando:


```
mkdir svn
```


e


```
svnadmin create svn/depot_test
```


Poerá, de seguida, verificar que as pastas foram criadas com este comando:


```
ls -la
```




## 
Deve obter os directórios como mostrado na figura abaixo:

![](images/img_3078.jpg){.thumbnail}


## Linux, com openSSH
Esta parte faz-se no seu computador local que irá ligar-se ao repositório (com o cliente SVN). é necessário cruar um par de chaves dsa. Para essa tarefa, faça o aeguinte comando:


```
ssh-keygen -t dsa
```


e obtenha a linha que está no ficheiro .ssh/id_dsa.pub . Para editar o ficheiro basta usar o editor 'vi' ou 'vim'.


```
vi .ssh/id_dsa.pub
```


Encontrará a chave que está divivida em 3 cadeias de caracteres: o tipo de chave, a chave e um comentário.


## Windows, com putty
Esta parte tem lugar no computador através do qual se conecta ao repositório SVN (svn cliente). Deve fazer o download e instalação da ferramenta 'Putty'.
Deve criar um par chave de RSA. Para iniciar este PuTTYGen, gerar uma par de chaves e salvar:

![](images/img_3079.jpg){.thumbnail}


## 
Após ter recebido a chave deve adicioná-la no seu alojamento em .ssh/authorized_keys2. Simplesmente insira a linha de comando abaixo:


```
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```


Uma vez que o ficheiro está aberto deverá inserir a seguinte linha:


```
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```


E a seguir introduza a chave que criou anteriormente, tudo na mesma linha!
NB : Substitua "/homez.XXX/loginFTP" e "marc" pelos valores corretos! Para saber quais os valores de 'homez' e 'login FTP', basta no alojamento efetuar o seguinte comando:

pwd

![](images/img_3080.jpg){.thumbnail}
O utilizador pode, assim, obter o conteúdo do repositório, sem necessariamente ser capaz de se conectar diretamente por SSH à sua máquina.
Atenção: uma mesma chave não pode ser utilizada para SVN e SSH em linha de comandos


## Linux
Pode fazer um teste através do computador conectado para o repositório svn, ao digitar esta linha:


```
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```




## Windows (com TortoiseSVN)

- Faça o download e instale TortoiseSVN ([http://tortoisesvn.net/downloads](http://tortoisesvn.net/downloads))
- Faça duplo click na chave privada. Um ícone aparecerá na parte inferior direita, chave é carregada no agente de autenticação
- Crie uma directoria, clique com o botão direito do rato e seleccione "SVN Checkout". Insira depois:

```
svn+ssh://loginFTP@clusterXXX/depot_test
```



no campo "URL of repository" e clique OK:

![](images/img_3081.jpg){.thumbnail}
Está à disposição uma boa documentação em Inglês relativa a Subversion no seguinte endereço: 

[http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html)


## Criar várias contas
Basta criar várias chaves ssh.
De seguida adicionar a chave pública ao alojamento:


```
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```


Deve modificar o seguinte parâmetro e adicionar vários utilizadores: 


```
--tunnel-user
```


de notar que é ainda possível dar apenas acesso de leitura ao adicionar o seguinte parâmetro: 


```
--read-only.
```




## Verificação local no servidor
Assim que desejar fazer checkout local, os exemplos fornecidos não irão funcionar.
Necessitará utilizar:


```
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```



