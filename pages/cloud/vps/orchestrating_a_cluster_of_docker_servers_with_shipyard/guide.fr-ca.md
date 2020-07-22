---
title: Orchestrer un cluster de Docker serveurs avec Shipyard
slug: orchestrer_un_cluster_de_docker_serveurs_avec_shipyard
section: Utilisation avancée
---


## 
L'application Shipyard a été développée par la communauté d'utilisateur de Docker. Elle peut être une bonne alternative à Swarm et aussi comprends un GUI pour administrer un cluster de serveurs Dockers. Elle vous permet de commander des tâches et d'attribuer des ressources aux containers dans un ressource pool. Tout d'abord nous allons générer des clés et certificats qui nous permettrons à nous identifier dans nos serveurs et a utilisé TLS pour sécuriser les communications entre nos machines pour prévenir toutes utilisations non autorisées de nos nodes de contrôles. Seulement les serveurs avec un certificat pourront se connecter au Docker client sur nos serveurs à distances.
Pour cela, suivre les étapes sur le site officiel de la documentation de Docker: [https://docs.docker.com/articles/https/](https://docs.docker.com/articles/https/)
Une fois que vous avez généré vos certificats, continuons avec les serveurs client (nodes). Dans notre exemple, notre cluster contient 3 serveurs (IP: 1.1.1.1, 2.2.2.2 and 3.3.3.3).
Copier les clés et certificats générés dans le fichier /etc/docker/certs/ dans votre nodes avec la commande suivante:

```
scp ca.pem server-cert.pem server-key.pem user@1.1.1.1:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@2.2.2.2:/etc/docker/certs/
scp ca.pem server-cert.pem server-key.pem user@3.3.3.3:/etc/docker/certs/
```

Pour augmenter la sécurité au niveau du cluster, nous mettrons en place des règles au niveau de notre iptable sur le serveur maître et nos nodes. Ci-dessous, est un exemple de règles pour l'iptable qui peuvent être appliqué sur les nodes.

Pour installer les règles iptable:

```
# Keep established connections
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Authorise loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# SSH In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 22 -j ACCEPT

# /!\ ATTENTION: assurez-vous de bien renseigner l'adresse IP à ce niveau. L'adresse IP devrait être celle de connexion ou du serveur maître, par exemple.
Ce seront les seuls IPs capable de se connecter via SSH aux nodes.

# HTTP In
iptables -t filter -A INPUT -p tcp --dport 80 -j ACCEPT

# SSL In
iptables -t filter -A INPUT -p tcp --dport 443 -j ACCEPT

# Docker In
iptables -t filter -A INPUT -s 4.4.4.4 -p tcp --dport 2375 -j ACCEPT

# /!\ ATTENTION: assurez-vous de bien renseigner l'adresse IP à ce niveau. L'adresse IP devrait être celle du serveur maître, ce sera le seul IP capable de se connecter sur le port 2375.

# Prevent all incoming connections
iptables -P INPUT DROP
iptables -P FORWARD DROP
```

Une fois les règles définies, nous devons les sauvegarder pour qu'elles s'appliquent au démarrage:

```
apt-get install iptables-persistent
```

Choisir "yes" lorsqu'on demande de sauvegarder IPv4 iptables.

/!\ ATTENTION: Il est recommandé de vérifier que les règles fonctionnent correctement avant de sauvegarder. Si vous devez réinitialiser des règles non sauvegardées, redémarrer le serveur.

Vous pouvez ajouter des règles iptable à n'importe quel moment et les sauvegarder via:

```
iptables-persistent save
```

Sur le serveur maître:

Installer les règles iptable:

```
# Keep established connections
iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Authorise loopback
iptables -t filter -A INPUT -i lo -j ACCEPT

# ICMP (Ping)
iptables -t filter -A INPUT -p icmp -j ACCEPT

# Shipyard web In
iptables -t filter -A INPUT -s "The public IP of your connection or VPN" -p tcp --dport 8080 -j ACCEPT

# /!\ ATTENTION: make sure you enter the correct IP address at this level. It should be the IP of your connection of VPN, for example. These will be the only IPs which can connect to the Shipyard interface.

# SSH In
iptables -t filter -A INPUT -s "The public IP of your connection or VPN" -p tcp --dport 22 -j ACCEPT

# /!\ ATTENTION: make sure you enter the correct IP address at this level. It should be the IP of your connection of VPN, for example. These will be the only IPs which can connect via SSH to the master server.

# Prevent all incoming connections
iptables -t filter -P INPUT DROP
iptables -t filter -P FORWARD DROP
```


Une fois les règles définies, nous devons les sauvegarder pour qu'elles s'appliquent au démarrage:


```
apt-get install iptables-persistent
```


Choisir "yes" lorsqu'on demande de sauvegarder IPv4 iptables.

/!\ ATTENTION: Il est recommandé de vérifier que les règles fonctionnent correctement avant de sauvegarder. Si vous devez réinitialiser des règles non sauvegardées, redémarrer le serveur.

Vous pouvez ajouter des règles iptable à n'importe quel moment et les sauvegarder via:


```
iptables-persistent save
```


## 
Une fois que Docker est installé sur nos 3 serveurs (voir [ce guide](https://community.runabove.com/kb/en/instances/docker-in-5-minutes-on-runabove-with-docker-machine.html)). Nous allons lier le daemon Docker a un port, par ex. port 2375 - port officiel assigné par [IANA](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=docker), de cette façon ces serveurs peuvent communiquer avec le serveur maître. Commencez par arrêter Docker sur chacun des serveurs avec cette commande:
 
```
service docker stop
```

Ensuite, ouvrir le fichier qui contient les ceriticats:

```
cd /etc/docker/
```

Pour lancer Docker, nous allons communiquer sur le port 2375 avec le protocole TLS en exécutant la commande ci-dessous sur chacun de nos nodes.

```
docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node1

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node2

docker -d --tlsverify --tlscacert=/etc/docker/certs/ca.pem --tlscert=/etc/docker/certs/server-cert.pem --tlskey=/etc/docker/certs/server-key.pem -H=0.0.0.0:2375 --label name=node3
```


/!\ ATTENTION: Ce ne sont pas des options permanentes. Si le serveur redémarre, vous aurez à relancer Docker avec ces options. La meilleure chose à faire serait de les définir dans $DOCKER_OPTS. Dans Ubuntu, elles peuvent être définies dans /etc/default/docker.


Ici "--label name=node1" nous permet d'attribuer une label à chacun de nos nodes. Nous pourrons ensuite lancer un container Docker sur un node précis avec un ensemble de contraintes.

Nous pouvons maintenant installer Shipyard sur le serveur de management.

## 
Commençons par créer une instance volume de donnée RethinkDB.


```
docker run -it -d --name shipyard-rethinkdb-data --entrypoint /bin/bash shipyard/rethinkdb -l
```

Nous allons démarrer RethinkDB avec le volume créer précédemment.

```
docker run -it -P -d --name shipyard-rethinkdb --volumes-from shipyard-rethinkdb-data shipyard/rethinkdb
```


/!\ ATTENTION: Si votre serveur est accessible directement d'internet, notez que RethinkDB écoute les ports 49153 (instance local), 49154 (cluster) et 49155 (interface web).

Nous allons ensuite exécuter Shipyard en nous connectant à la base de données via (--link shipyard-rethinkdb:rethinkdb):

```
docker run -it -p 8080:8080 -d --name shipyard --link shipyard-rethinkdb:rethinkdb shipyard/shipyard
```


Shipyard créera un utilisateur "admin" automatiquement, le mot de passe par défaut sera "shipyard".

Avant de vous connecter a l'interface web, nous recommandons de changer le mot de passe Shipyard. Nous allons commencer par lancer un container qui nous permettra d'accéder au CLI de Shipyard.

```
docker run -it shipyard/shipyard-cli
```


Entrez:


```
shipyard cli> shipyard login
URL:http://<YOUR_SERVER>:8000
Username: admin
Password: shipyard
Then we will change the password
shipyard cli> shipyard change-password
Password: <YOUR_PASSWORD>
Confirm: <RE-ENTER_YOUR_PASSWORD>
```


Après avoir complété cette opération, nous utiliserons ctrl+d pour quitter le CLI.

Nous pouvons maintenant accéder à l'interface Shipyard via http://<your-host-ip>:8080 avec l'utilisateur "admin" et son mot de passe.

Une fois connectés, nous allons ajouter des engines (nodes) via l'interface web de Shipyard sous "Engines":
![](images/img_2612.jpg){.thumbnail}

N'oubliez pas de copier/coller les certificats de sécurité que vous avez générée dans les certificats SSL, clé SSL et la section certificat CA.
Vous devez faire ceci pour chacun des nodes (assurez-vous de donner un label unique a chaque node).
![](images/img_2613.jpg){.thumbnail}

Vous pouvez aussi ajouter des engines via le CLI. Premièrement, lancer le Shipyard CLI container.

```
docker run -it -v /etc/docker/certs/:/home/ shipyard/shipyard-cli
```


"-v /etc/docker/certs/:/home/" nous permettra de créer un repository entre l'host (serveur maître) et le container CLI Shipyard qui s'exécute sur le même serveur pour que notre container puisse accéder aux certificats générés précédemment.

Entrez:


```
shipyard cli> shipyard login
URL:http://<VOTRE_MACHINE>:8000
Username: admin
Password: votre_mot_de_passe
```


Ensuite, exécutez cette commande:

```
shipyard add-engine --id node1 --addr https://1.1.1.1:2375 --label node1 --ssl-cert /home/client-cert.pem --ssl-key /home/client-key.pem --ca-cert /home/ca.pem
```

Une fois l'opération complétée, utilisez crtl+d pour quitter le CLI.

## 
Nous pouvons maintenant voir et gérer tous les containers déployés sur nos différents nodes sous Containers:
![](images/img_2614.jpg){.thumbnail}

![](images/img_2615.jpg){.thumbnail}
Enfin, nous allons cliquer sur DEPLOY pour lancer les containers sur tous les nodes, ou sur des nodes spécifique (en sélectionnant le label du nodes).

![](images/img_2616.jpg){.thumbnail}

Vous avez maintenant un système d'orchestration de serveur Docker qui vous permet facilement et rapidement de provisionner des applications et containers dans votre cluster via un GUI.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
