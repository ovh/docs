---
title: Utiliser le SSL Gateway
slug: utiliser-le-ssl-gateway
legacy_guide_number: 2370
excerpt: Sécurisez les connexions vers votre site web
section: Utilisation
---

## Généralites

### Prérequis


> [!primary]
>
> - Avoir commandé un service SSL Gateway <docs/web/ssl-gateway/order-ssl-gateway>.
> - Disposer d'un accès à votre espace client Sunrise.
>

## Utilisation
Nous allons voir maintenant comment utiliser votre service SSL Gateway


### Configuration du service
- Connectez-vous à [votre espace client](https://www.ovh.com/manager){.external}.
- Cliquez ensuite sur la rubrique "**Sunrise**".

![bouton sunrise](images/4.PNG){.thumbnail}

- Cliquez ensuite sur "**SSL Gateway**" afin de visualiser le service.

![bouton ssl gateway](images/5.PNG){.thumbnail}

- Sélectionnez l'offre que vous désirez configurer

![page commerciale](images/6.PNG){.thumbnail}

- Vous arrivez ensuite sur la page de gestion de votre offre

![config globale](images/7.PNG){.thumbnail}

- Description des informations

![partie infos](images/8.PNG){.thumbnail}

|Bouton|Description|
|---|---|
|IPv4|Adresse IPv4 de la passerelle OVH vers laquelle vous devez pointer|
|IPv6|Adresse IPv6 de la passerelle OVH vers laquelle vous devez pointer|
|Zone|Zone géographique de l'adresse IP de votre SSL Gateway|
|IPv4 de sortie|Adresses IPv4 OVH qui se connecteront sur votre serveur|
|Offre|Type d'offre souscrite|
|Documentation|Lien vers ce guide d'utilisation|
|État|État de votre service SSL Gateway|
|Date d'expiration|Date d'expiration de votre service SSL Gateway|
|Résilier|Bouton de demande de résiliation de votre service SSL Gateway|
|Migrer vers l'offre Advanced|Permet de migrer de l'offre Free vers l'offre Advanced|

- Description de la configuration

![partie conf](images/9.PNG){.thumbnail}

|Bouton|Description|
|---|---|
|Configuration|Bouton permettant de modifier la configuration de votre service SSL Gateway|
|HSTS [[1]]|Oblige le navigateur à effectuer ses prochaines connexions à votre site en HTTPS|
|Reverse|Permet de mettre un nom d'hôte sur votre adresse IP SSL Gateway|
|Redirection HTTPS [[2]]|Redirige le visiteur vers la version HTTPS de votre site lorsqu'il y accès en HTTP|
|Serveur HTTPS [[3]]|Active le HTTPS entre le serveur SSL Gateway et le vôtre|
|Restriction des IPs sources|Si ce champ est renseigné, seules les IPs ou réseaux spécifiés pourront se connecter au SSL Gateway|
|Configuration des ciphers [[4]]|Permet de choisir un niveau de sécurité pour votre certificat SSL/TLS|



> [!primary]
>
> [[1]] Plus d'informations sur HSTS
> 
> [[2]] Une fois que le bon fonctionnement de votre site avec le protocole HTTPS a été vérifié, il est possible de rediriger l'ensemble du trafic HTTP vers HTTPS. Il est par contre recommandé d'attendre 24h après avoir fait pointer votre domaine vers l'offre SSL Gateway avant d'effectuer cette redirection, afin que les visiteurs de votre site aient bien la nouvelle configuration DNS fonctionnelle.
> 
> [[3]] Permet de sécuriser de "bout en bout" la connexion. Le serveur SSL Gateway se connectera à votre serveur sur le port 443 standard de HTTPS. Attention, il est obligatoire de disposer d'un certificat SSL/TLS sur votre serveur pour activer cette option. Sans cela, votre site ne fonctionnera pas. Il n'est par contre pas nécessaire que ce certificat soit renouvelé sur votre serveur.
> 
> [[4]] Le niveau le plus élévé apportera les meilleurs protections mais pourra ne pas fonctionner avec les navigateurs les plus anciens.</cite>
>


### Configuration du domaine
Le bloc suivant comprend 4 onglets :


> [!primary]
>
> - Domaines
> - Serveurs
> - Tâches
> - Graphiques
>

![onglet Domaines](images/10.PNG){.thumbnail}

L'onglet **"Domaines"** permet d'ajouter et supprimer vos domaines et sous-domaines à votre SSL Gateway.

- Cliquez sur `+ Domaine`{.action} afin d'ajouter un domaine ou sous-domaine.

> [!faq]
>
> Vous disposez d'une offre **"Free"**
>> 
>> Il vous sera possible de disposer uniquement d'un **domaine**, ainsi que de son **sous-domaine "www"** et d'un deuxième **sous-domaine de votre choix** :
>> 
>> 
>> > [!primary]
>> >
>> > | nom | url |
>> > |---|---|
>> > | Domaine | example.com |
>> > | Sous-domaine www | www.example.com |
>> > | Sous-domaine de votre choix | blog.example.com |
>> > 
>> 
>> 
>> > [!warning]
>> >
>> > Offre Free :
>> > 
>> > Seuls les domaines jusqu’à 3 niveaux (www.example.org) sont autorisés.
>> > 
>> 
>> - Faites votre choix puis cliquez ensuite sur `Ajouter`{.action} afin de valider.
>> 
>> ![ajout domaine free](images/11.PNG){.thumbnail}
>>
>
> Vous disposez d'une offre **"Advanced"**
>> 
>> Il vous sera possible d'ajouter n'importe quel domaine ou sous-domaine actif.
>> 
>> 
>> > [!primary]
>> >
>> > Offre Advanced :
>> > 
>> > Les domaines de 4ème niveau (blog.france.example.org) et plus sont autorisés.
>> > 
>> 
>> Faites votre choix puis cliquez ensuite sur `Ajouter`{.action} afin de valider.
>> 
>> ![ajout domaine advanced](images/12.PNG){.thumbnail}
>>
>


> [!warning]
>
> Pour tout ajout de domaine ou sous-domaine, un e-mail vous sera envoyé afin de vous indiquer de faire pointer celui-ci vers l'IP du SSL Gateway dans un délai de 3 jours.
> Cette opération est nécessaire afin de valider la création du certificat SSL/TLS.
> 


L'onglet **"Serveurs"** permet de gérer la ou les adresses IP de votre ou vos serveurs hébergeant votre site.

- Cliquez sur `+ Serveur`{.action} afin d'ajouter une adresse IP et un port correspondant à votre serveur hébergeant votre site.

![onglet serveurs](images/13.PNG){.thumbnail}

> [!faq]
>
> Vous disposez d'une offre **"Free"**
>> 
>> Il vous sera possible de disposer d'une seule adresse IP/PORT.
>> 
>
> Vous disposez d'une offre **"Advanced"**
>> 
>> Il vous sera possible d'ajouter jusqu'à 3 adresses IP/PORT pour vos domaines et sous-domaines.
>> 
>> 
>> > [!primary]
>> >
>> > Si vous indiquez plusieurs adresses IP/PORT, votre SSL Gateway répartiera la charge de trafic avec le système Round Robin.
>> > Plus d'informations sur le DNS Round Robin
>> > 
>> 
>> Faites votre choix puis cliquez ensuite sur `Ajouter`{.action} afin de valider.
>> 
>> ![ajout IP/PORT advanced (interne)](images/15.PNG){.thumbnail}
>>
>


> [!warning]
>
> Il n'est actuellement pas possible d'ajouter des adresses IPv6 dans vos serveurs.
> Cela n'est néanmoins pas gênant, car votre domaine ou sous-domaine peut pointer vers votre SSL Gateway en IPv6.
> Votre SSL Gateway se chargera ensuite de basculer le trafic IPv6 vers l'adresse IPv4 de votre serveur de façon transparente.
> 


L'onglet **"Tâches"** permet de visualiser les opérations en cours sur votre SSL Gateway


![onglet tâches](images/13-bis.PNG){.thumbnail}



> [!warning]
>
> Si nous n'avons pas encore détecté le pointage de votre domaine ou sous-domaine vers l'IP SSL Gateway, le certificat SSL/TLS ne sera pas encore créé.
> L'accès sera cependant quand même possible en "HTTP". Une vignette "HTTP" sera présente dans ce cas dans l'onglet "Entrées".
> 
> ![http only](images/14.PNG){.thumbnail}
>

L'onglet **"Graphiques"** permet de visualiser le nombre de connexions et de requêtes par secondes effectuées sur votre SSL Gateway.

![onglet metriques](images/17.PNG){.thumbnail}

> [!faq]
>
> Vous disposez d'une offre **"Free"**
>> 
>> Il vous sera possible de visualiser vos métriques sur 24h.
>> 
>
> Vous disposez d'une offre **"Advanced"**
>> 
>> Il vous sera possible de visualiser vos métriques sur 1 mois.
>> 
>


## Renouvellement du certificat SSL

### Point important

> [!primary]
>
> Afin de pouvoir renouveler le certificat Let's Encrypt, il est nécessaire que le domaine ou sous-domaine pointe sur l'IP de l'offre SSL Gateway.
> - Si ce n'est pas le cas, et que nos robots constatent cela 7 jours avant la date de renouvellement du certificat SSL/TLS, un e-mail sera envoyé afin de laisser 3 jours pour effectuer cette opération.
> - Si ce n'est toujours pas fait après ces 3 jours, le certificat ne sera pas renouvelé, et il sera nécessaire de le régénérer manuellement à l'aide de ce bouton :
> 
> ![Regenerate SSL](images/16.PNG){.thumbnail}
>

## Astuces - Correction de l'IP source dans les Logs

### Présentation

Lorsqu'un client visite votre site, il se connecte sur la SSL Gateway en HTTPS puis la SSL Gateway fait suivre la requête vers votre serveur après l'avoir déchiffré et filtré les attaques. Toutes les requêtes vers votre serveur viennent donc de la SSL Gateway.

Afin de vous faire suivre l'adresse de votre visiteur, la SSL Gateway ajoute automatiquement ces entêtes HTTP standards :

- X-Forwarded-For et X-Remote-Ip : Adresse du client, tel que vue par la SSL Gateway.
- X-Forwarded-Port et X-Remote-Port : Port source du client, telle que vue par la SSL Gateway.

Ces champs pouvant être forgés par un client malicieux, ils ne doivent être pris en compte que s'ils viennent d'une source de confiance comme la SSL Gateway. La liste des IP sources utilisées par la SSL Gateway se trouve dans :

- Votre Espace client Sunrise
- Rubrique SSL Gateway
- Champ "IPv4 de sortie"

À l'heure de la rédaction de guide ces adresses sont **213.32.4.0/24** et **144.217.9.0/24**. D'autres adresses peuvent être ajoutées dans le futur.

Si votre serveur le gère, il peut être configuré pour prendre automatiquement en compte cette information à la place de l'IP de la SSL Gateway.


### Apache

- Créez le fichier ci-dessous :
/etc/apache2/conf-available/remoteip.conf
- Insérez les lignes suivantes :

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```


Vous pouvez maintenant remplacer les variables %h par %a dans les directives LogFormat de la configuration de Apache.

- Une fois la configuration prête, il ne reste plus qu'à l'activer avec les commandes suivantes :

```bash
# Active le module puis la configuration
a2enmod remoteip
a2enconf remoteip

# Redémarre Apache pour prendre en compte le module (reload est suffisant pour la configuration)
service apache2 restart
```

Vous pourrez trouver plus d'informations au sujet de cette fonctionnalité dans Apache sur la [documentation officielle](https://httpd.apache.org/docs/current/fr/mod/mod_remoteip.html){.external}.


### Nginx

- Ouvrez le fichier de configuration correspondant au site à sécuriser. Il se trouve généralement dans :
/etc/nginx/sites-enabled
- Insérez les lignes suivantes dans la section server :

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```


Vous pourrez trouver plus d'informations au sujet de cette fonctionnalité dans Nginx sur la [documentation officielle](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external} (en anglais).