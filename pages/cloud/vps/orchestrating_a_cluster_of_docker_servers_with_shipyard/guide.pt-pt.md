---
title: Administração de um cluster de servidores Docker através de Shipyard
excerpt: ''
slug: administracao_de_um_cluster_de_servidores_docker_atraves_de_shipyard
legacy_guide_number: g1762
hidden: true
---


## 
Shipyard é uma aplicação desenvolvida pela comunidade de utilizadores de Docker. Ela pode ser uma boa alternativa a Swarm e dispõe de uma interface gráfica para a gestão de um cluster de máquinas Docker, permitindo a sequencialização das tarefas bem como a alocação de recursos por container dentro de uma pool de recursos físicos.
vamos, num primeiro tempo, ocupar-nos da máquina master e de gerar as chaves e certificados que os permitirão autenticar nas diferentes máquinas e, além disso, poder ter trocas de dados seguras para evitar que os nodes possa, ser controlados por uma pessoa indesejada (apenas a ou as máquinas que disponham de certificados se poderão ligar aos clientes Docker das nossas máquinas remotas).

Para atingir este objetivo, pode ler a documentação oficial:

[https://docs.docker.com/articles/https/](https://docs.docker.com/articles/https/)

Uma vez gerados os certificados, vamos passar às máquinas cliente (nodes).
No nosso exemplo, o nosso cluster serão composto por 3 maquinas (IP : 1.1.1.1, 2.2.2.2 e 3.3.3.3) .

Vamos copiar as chaves e os certificados para a pasta /etc/docker/certs/ de cada um dos nossos nodes, através do seguinte comando:


```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```


Para maior segurança, dentro do cluster, vamos implementar regras no IPtables da máquina master e nos nodes.
Encontrará um exemplo das regras IPtables que é possível aplicar


em cada um dos nodes :

Adicionamos as seguintes regras IPtables :


```
# Manter as ligações estabelecidas
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT 

# Autorizar loopback 
iptables -t filter -A INPUT -i lo -j ACCEPT 

# ICMP (Ping) 
iptables -t filter -A INPUT -p icmp -j ACCEPT 

# SSH In 
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT 

# /!\ ATENÇÃO: verifique se o endereço IP introduzido corresponde ao endereço IP da máquina master, por exemplo, pois será a única que deverá poder ligar-se por SSH aos nodes.

# HTTP In 
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT 

# SSL In
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Docker In 
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT 

# /!\ ATENÇÃO: verifique se o endereço IP introduzido corresponde ao endereço IP da máquina master, pois será a única que deverá poder ligar-se à porta 2375.

# Impedir todas as ligações de entrada
iptables -P INPUT DROP 
iptables -P FORWARD DROP
```


Uma ve definidas as regras, será necessário gravá-las para que se executem sempre que há um reboot através do seguinte comando:


```
apt-get install iptables-persistent
```


E vamos selecionar "sim" quando for perguntado se é necessário registar as regras IPtables IPv4.


/!\ ATENÇÃO:  aconselhamos que verifique o bom funcionamento das suas regras antes de as gravar. Em caso de problema, um simples reboot das suas máquinas permitirá efetuar um reset, se as regras não foram previamente gravadas e apenas foram aplicadas..

A qualquer momento será possível adicionar regras IP tables e gravá-las com o comando:


```
iptables-persistent save
```




No servidor "master" :

Vamos adicionar as regras IPTABLES :


```
# Conservar as ligações estabelecidas
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT 

# Autorizar loopback 
iptables -t filter -A INPUT -i lo -j ACCEPT 

# ICMP (Ping) 
iptables -t filter -A INPUT -p icmp -j ACCEPT 

# Shipyard web In 
iptables -t filter -A INPUT -s « IP público da sua ligação ou da sua VPN » -p tcp --dport 8080 -j ACCEPT 

# /!\ ATENÇÃO: verifique que o endereço IP introduzido é realmente o da sua ligação á Internet ou da sua VPN, pois serão os únicos a poder ligar-se à interface de Shipyard.

# SSH In 
iptables -t filter -A INPUT -s « IP público da sua ligação ou da sua VPN » -p tcp --dport 22 -j ACCEPT 

# /!\ ATENÇÃO: verifique que o endereço IP introduzido é realmente o endereço IP da sua ligação ou da sua VPN, pois será o único a poder ligar-se através de SSH ao servidor "Master".

# Impedir todas as ligações de "entrada"
iptables -t filter -P INPUT DROP 
iptables -t filter -P FORWARD DROP
```


Uma vez definidas das regras, vamos gravá-las para que sejam sempre "carregadas" quando se faz um reboot ao servidor:


```
apt-get install iptables-persistent
```


E vamos selecionar "sim/yes" quando nos for perguntado se é necessário gravas as regras IPTables IPv4.


/!\ ATENÇÃO: aconselhamos vivamente a que faça uma verificação prévia do funcionamento das regras antes da gravação Assim, em caso de problema, basta fazer um reboot ao servidor para que seja efetuado o "re-set" das regras.

A qualquer momento poderá adicionar regras IPtables e gravá-las através do seguinte comando:


```
iptables-persistent save
```




## 

Para esse fim, vamos começar por parar a execução de Docker em cada uma das máquinas através do seguinte comando:


```
service docker stop
```


De seguida vamos para a diretoria onde estão os nossos certificados:


```
cd /etc/docker/
```


E depois vamos iniciar a execução de Docker utilizando a comunicação na porta 2375 com autenticação TLS executando o seguinte comando em cada um dos nodes:


```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1 

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2 

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```



/!\ ATENÇÃO: estas opções não são persistentes: se a máquina for alvo de reboor será necessário executar novamente Docker com estas opções. O ideal será definir estas opções na variável de ambiente $DOCKER_OPTS. Em Ubuntu, podemos facilmente fazer a configuração em /etc/default/docker


Notaremos a presença de « --label name=node1 », o que nos vai permitir atribuir um nome a cada um dos nodes com uma "label" única (que será útil para iniciar a execução de um container Docker num node em particular através de regras pré-definidas).

Vamos, de seguida, passar à instalação de Shipyard na máquina "master".


## 
Começamos por iniciar uma instância data volume RethinkDB


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```



Vamos iniciar RethinkDB utilizando o data volume previamente criado:


```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```



/!\ ATENÇÃO: se o su servidor é diretamente acessível através da Internet, tenha em consideração que RethinkDB vai ficar à escuta na portas 49153 (instância local), 49154 (cluster) e 49155 (interface web).

Vamos, de seguida, iniciar o controlador Shipyard, ligando-o à base de dados (através de --link shipyard-rethinkdb:rethinkdb):


```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```



Shipyard irá, de forma padrão, criar um utilizador "admin" que terá a palavra-passe "shipyard".

Antes de aceder à interface web, é aconselhável proceder à alteração da palavra-passe de acesso a Shipyard.
Começamos por criar um container que nos permitirá acesso à CLI de Shipyard:


```
docker run -it shipyard/shipyard-cli
```


E depois autenticamo-nos :


```
shipyard cli> shipyard login
URL:http://<VOTRE_MACHINE>:8000
Username: admin
Password: shipyard
Puis on change le mot de passe
shipyard cli> shipyard change-password
Password: <VOTRE_MOT_DE_PASSE>
Confirm: <ENCORE>
```


Uma vez realizada esta operação, será necessário utilizar ctrl-d para sair da CLI.

Poderá agora aceder à interface de Shipyard através de `http://<your-host-ip>:8080` , indicando o utilizador "admin" e a palavra-passe que definiu.

Uma vez autenticado no sistema, irá poder proceder ao registo dos motores (os nodes) através da interface web de Shipyard. Isso faz-se na secção "engines":

![](images/img_2612.jpg){.thumbnail}
Não se esqueça de efetuar uma operação de copiar/colar dos seus certificados de segurança gerados previamente (preencha "SSL certificate", "SSL key" e "CA certificate" ). Deve ser efetuada a operação para cada um dos seus nodes (defina uma label única para cada um dos nodes)

![](images/img_2613.jpg){.thumbnail}
É igualmente possível adicionar engines através da CLI. Para o fazer, é necessário executar o container CLI de Shipyard:


```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```



A parte "-v /etc/docker/certs/:/home/" vai permitir criar uma diretoria comum entre a nossa máquina host (a máquina master) e o container CLI de Shipyard que está em execução nesta máquina para que o container possa aceder aos certificados gerados previamente.

Vamo-nos autenticar e estabelecer ligação:


```
shipyard cli> shipyard login
URL:http://<VOTRE_MACHINE>:8000
Username: admin
Password: votre_mot_de_passe
```


E executar de seguida:


```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```


Quando esta operação tiver sido efetuada, vamos utilizar ctrl+d para sair da CLI.


## 
Na secção "containers" iremos poder agora visualizar e gerir todos os containers criados nos diferentes nodes:

![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Ao clicar em "deploy" vamos poder iniciar a execução de containers em todos os nodes ou em apenas alguns nodes em particular (selecionando a label que corresponde aos nodes nos quais desejamos executar o container):

![](images/img_2616.jpg){.thumbnail}
