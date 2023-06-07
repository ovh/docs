---
title: Object Storage - Activer HTTPS sur un site web S3 statique en utilisant un domaine personnalisé
excerpt: Découvrez comment configurer votre site web et le Load Balancer OVHcloud pour activer le HTTPS
updated: 2023-05-15
---

## Objectif

L’Object Storage OVHcloud vous permet d’héberger un site web statique à l’intérieur d’un bucket S3.

> [!primary]
> Un site web statique ne contient que du contenu statique (pages HTML, images, vidéos, scripts côté client), tandis qu'un site web dynamique repose sur un traitement côté serveur pour traiter les données et faciliter le rendu du contenu.

Par défaut, le protocole HTTPS n'est pas pris en charge sur un site web statique hébergé sur l'Object Storage S3 OVHcloud. Si vous souhaitez utiliser le HTTPS, vous pouvez utiliser le Load Balancer OVHcloud en parallèle d'un site web statique hébergé sur l'Object Storage S3 d'OVHcloud. Le Load Balancer agira en tant que passerelle SSL.

**Découvrez comment configurer votre site web et le Load Balancer OVHcloud pour activer le HTTPS.**

## Prérequis

Voici les prérequis à avoir pour activer le protocole HTTPS :

- Disposer d’un [Load Balancer OVHcloud](https://www.ovhcloud.com/fr/network/load-balancer/), qui jouera le rôle de passerelle SSL et pourra offrir une protection contre les attaques DDOS.
- Un [nom de domaine](https://www.ovhcloud.com/fr/domains/).
- Commander un certificat TLS associé à votre nom de domaine chez OVHcloud (facultatif si vous disposez déjà d’un certificat TLS de confiance associé à votre nom de domaine).
- Vous devez [activer l'hébergement sur votre bucket S3](/pages/cloud/storage/object_storage/s3_website).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1 - Configurer votre Load Balancer

#### Étape 1.1 - Ajouter votre certificat

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et cliquez sur `Load Balancer`{.action}.

Sélectionnez votre Load Balancer dans la liste, cliquez sur l'onglet `Certificats SSL`{.action} puis sur `Ajouter un certificat SSL`{.action}.

![Télécharger le certificat](images/cert-creation01.png){.thumbnail}

![Télécharger le certificat](images/cert-creation02.png){.thumbnail}

> [!primary]
> Vous pouvez également commander un certificat Let's Encrypt gratuit via le bouton `Commander un certificat SSL`{.action}.

#### Étape 1.2 - Configurer une ferme de serveurs

Vous devez maintenant configurer une ferme de serveurs et l'ajouter à votre Load Balancer. Une ferme de serveurs est un pool de machines backend permettant de gérer la charge de travail.

Toujours depuis la section Load Balancer de votre espace client, cliquez sur l'onglet `Ferme de serveurs`{.action} puis sur `Ajouter une ferme de serveurs`{.action} .

![configuration cluster du serveur](images/serv-cluster-01.png){.thumbnail}

Entrez la configuration de la nouvelle ferme de serveurs :

- Nom (facultatif)
- Protocole : HTTP
- Port : 80
- Datacenter : choisissez la région dans laquelle vous avez hébergé votre site web

![configuration cluster du serveur](images/serv-cluster-02.png){.thumbnail}

Vous devez à présent ajouter des serveurs à votre ferme de serveurs. Cliquez sur le bouton `Ajouter un serveur`{.action} .

![configuration cluster du serveur](images/serv-cluster-03.png){.thumbnail}

Renseignez les informations de configuration de votre serveur :

- Nom (facultatif)
- Adresse IPv4 : Entrez l'adresse IP publique associée à l'URL par défaut de votre site web statique sous la forme `{bucket}.s3-website.{region}.io.cloud.ovh.net`

*Vous pouvez récupérer cette adresse IP en effectuant une commande dig sur l'URL.*

**Exemple** :

```sh
lxxxx@LWI1XXXXXX:~$ dig s3-website.gra.io.cloud.ovh.net

; <<>> DiG 9.16.1-Ubuntu <<>> s3-website.gra.io.cloud.ovh.net
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 36134
;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1
 
;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;s3-website.gra.io.cloud.ovh.net. IN    A
 
;; AUTHORITY SECTION:
cloud.ovh.net.          33      IN      SOA     dns111.ovh.net. tech.ovh.net. 2023040507 86400 3600 3600000 60
 
;; Query time: 19 msec
;; SERVER: 10.15.25.129#53(10.15.25.129)
;; WHEN: Thu Apr 06 16:06:51 CEST 2023
;; MSG SIZE  rcvd: 108
```

![configuration cluster du serveur](images/serv-cluster-04.png){.thumbnail}

#### Étape 1.3 - Configurer vos frontends

L'étape suivante consiste à ajouter des frontends à votre Load Balancer. Un frontend sera l'élément Internet de votre Load Balancer et sera responsable du traitement et de l'acheminement des requêtes entrantes.

Dans la section Load Balancer de votre espace client, cliquez sur l'onglet `Frontends`{.action} puis sur `Ajouter un frontend`{.action}.

![configuration du frontend](images/front-01.png){.thumbnail}

Ajouter 2 frontends :

- Un frontend dont le seul but est de traiter toutes les requêtes HTTP entrantes et les rediriger vers votre nom de domaine en HTTPS
    - nom (facultatif)
    - protocole : HTTP
    - port : 80
    - datacenter : all
    - ferme par défaut : none
    - paramètres avancés > HTTP Redirection : `https://<nom_de_votre_domaine>`
- Un frontend qui va gérer toutes les requêtes HTTPS entrantes et jouer le rôle de passerelle SSL
    - nom (facultatif)
    - protocole : HTTPS
    - port : 443
    - datacenter : la région où se trouve votre bucket
    - ferme de serveurs par défaut : la ferme de serveurs créée au préalable
    - certificate: le certificat que vous avez créé
    - paramètres avancés > HTTP Header : Host `<default_website_url>` sous la forme `<bucket>.s3-website.<region>.io.cloud.ovh.net`

![configuration du frontend](images/front-2.PNG){.thumbnail}

#### Étape 1.4 - Appliquer les modifications

Une fois que vous avez créé et configuré toutes les ressources, n'oubliez pas de cliquer sur le bouton `Appliquer la configuration`{.action} pour appliquer toutes les modifications au Load Balancer.

![appliquer la configuration LB](images/LB-apply-conf.PNG){.thumbnail}

### Étape 2 - Configurez vos DNS

> [!warning]
> Cette section n'est pertinente que si votre nom de domaine est enregistré chez OVHcloud. Si vous disposez d'un nom de domaine externe, merci de vérifier auprès de votre prestataire.

Cliquez sur l'onglet `Web Cloud`{.action} de votre espace client OVHcloud et sélectionnez votre nom de domaine dans la section `Noms de domaine`{.action}.

Ouvrez l'onglet `Zone DNS`{.action}.

![Configuration DNS](images/DNS-01.png){.thumbnail}

Modifiez les deux enregistrements A pour ajouter l'adresse IP publique de votre Load Balancer.

![Configuration DNS](images/DNS-02.png){.thumbnail}

![Configuration DNS](images/DNS-03.png){.thumbnail}

![Configuration DNS](images/DNS-04.png){.thumbnail}

> [!primary]
> Vous pouvez retrouver l'adresse IP publique de votre Load Balancer sur la page d'accueil de votre `Load Balancer`{.action} depuis votre espace client.
>
> ![Configuration DNS](images/DNS-05.png){.thumbnail}

### Étape 3 - Testez votre site web

Vérifiez que le site web et la redirection fonctionnent correctement. Ouvrez votre navigateur internet en navigation privée pour vous assurer que le cache est vide et saisissez votre nom de domaine.

**Exemple** : vous pouvez vérifier le site [https://monkey-profile.xyz](https://monkey-profile.xyz) entièrement hébergé sur un bucket S3 avec HTTPS activé et un certificat **auto-signé**.

![Test du site web](images/test.PNG){.thumbnail}

## Aller plus loin

[Configuration de votre service Load Balancer OVHcloud](/pages/cloud/load_balancer/use_presentation)

[Configuration de votre zone DNS](/pages/web/domains/dns_zone_edit)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
