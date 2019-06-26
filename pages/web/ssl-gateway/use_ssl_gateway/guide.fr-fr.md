---
title: 'Utiliser le SSL Gateway'
slug: utiliser-le-ssl-gateway
legacy_guide_number: 2370
excerpt: 'Sécurisez les connexions vers votre site web'
section: Utilisation
---

## Objectif

Découvrez comment utiliser votre service SSL Gateway afin de sécuriser les connexions vers votre site web.

### Prérequis

- Disposer d’un service SSL Gateway.
- Être connecté à votre  [espace client OVH](https://www.ovh.com/manager){.external}, partie `Sunrise`{.action}.

## En pratique


### Configurer le service
Connectez-vous à votre [espace client OVH](https://www.ovh.com/manager){.external}.
Cliquez ensuite sur la section `Sunrise`{.action}.

![Bouton d'ouverture](images/4.PNG){.thumbnail}

Cliquez ensuite sur le bouton `SSL Gateway`{.action} pour afficher votre service.

![Bouton SSL Gateway](images/5.PNG){.thumbnail}

Sélectionnez la solution que vous souhaitez configurer.

![Page commerciale](images/6.PNG){.thumbnail}

La page qui s’affiche concerne la gestion de votre solution.

![Configuration globale](images/7.PNG){.thumbnail}


|Option|Description|
|---|---|
|IPv4|Adresse IPv4 de la passerelle OVH vers laquelle vous souhaitez pointer.|
|IPv6|Adresse IPv6 de la passerelle OVH vers laquelle vous souhaitez pointer.|
|Zone|Zone géographique de l’adresse IP de votre SSL Gateway.|
|IPv4 de sortie|Adresses IPv4 OVH qui se connecteront à votre serveur.|
|Offre|Type d'offre souscrite.|
|Documentation|Lien vers ce guide d'utilisation.|
|État|État de votre service SSL Gateway.|
|Date d'expiration|Date d'expiration de votre service SSL Gateway.|
|Résilier|Bouton de demande de résiliation de votre service SSL Gateway.|
|Migrer vers l'offre Advanced|Permet de migrer de l'offre Free vers l'offre Advanced.|
|Configuration|Bouton permettant de modifier la configuration de votre service SSL Gateway.|
|HSTS [[1]](#id5){.note-ref #id1}|Oblige le navigateur à effectuer ses prochaines connexions à votre site en HTTPS.|
|Reverse|Permet de mettre un nom d'hôte sur votre adresse IP SSL Gateway.|
|Redirection HTTPS [[2]](#id6){.note-ref #id2}|Redirige le visiteur vers la version HTTPS de votre site lorsqu'il y accède en HTTP.|
|Serveur HTTPS [[3]](#id7){.note-ref #id3}|Active le HTTPS entre le serveur SSL Gateway et le vôtre.|
|Restriction des IP source|Si ce champ est renseigné, seules les adresses IP ou les réseaux spécifiés pourront se connecter au SSL Gateway.|
|Configuration du chiffrement [[4]](#id8){.note-ref #id4}|Permet de choisir un niveau de sécurité pour votre certificat SSL/TLS.|

> [!primary]
>
> [[1]](#){.note-ref #id5} \- ([1](#id1){.fn-backref})
> <cite>Plus d'informations sur HSTS.</cite>
> 
> [[2]](#){.note-ref #id6} \- ([1](#id2){.fn-backref})
> <cite>Une fois que vous avez vérifié que votre site fonctionne correctement avec le protocole HTTPS, vous pouvez rediriger tout le trafic HTTP vers HTTPS. Nous vous recommandons d'attendre 24 heures après la redirection de votre domaine vers l’offre SSL Gateway avant d’effectuer celle-ci, afin que les visiteurs de votre site web disposent de la nouvelle configuration DNS fonctionnelle.</cite>
> 
> [[3]](#){.note-ref #id7} \- ([1](#id3){.fn-backref})
> <cite>Permet de sécuriser la connexion de bout en bout. Le serveur SSL Gateway se connectera à votre serveur sur le port 443 standard HTTPS. Veuillez noter que votre serveur doit disposer d’un certificat SSL/TLS pour pouvoir activer cette option. Sans cela, votre site internet ne fonctionnera pas. Toutefois, il n’est pas nécessaire que ce certificat soit renouvelé sur votre serveur.</cite>
> 
> [[4]](#){.note-ref #id8} \- ([1](#id4){.fn-backref})
> <cite>Le niveau le plus élevé offre la meilleure protection, mais il peut ne pas fonctionner sur les navigateurs plus anciens.</cite>
>

Pour plus d'informations sur le chiffrement, cliquez sur [ce lien](https://fr.wikipedia.org/wiki/Chiffre_(cryptologie)){.external}.

### Configurer le nom de domaine
Le bloc suivant comprend quatre onglets :

- noms de domaine ;
- 10 000 serveurs ;
- tâches ;
- graphiques ;

![Onglet domaines](images/10.PNG){.thumbnail}

L'onglet « Domaines » vous permet d'ajouter et de supprimer vos noms de domaine et sous-domaines connectés à votre SSL Gateway.

Cliquez sur ` + Domaine`{.action} pour ajouter un domaine ou un sous-domaine.

Si vous utilisez une version Free, vous ne pourrez posséder qu'un nom de domaine, ainsi que son sous-domaine « www » et un second sous-domaine de votre choix :

|Nom|URL|
|---|---|
|Nom de domaine|example.com|
|Sous-domaine|www.example.com|
|Sous-domaine de votre choix|blog.example.com|

> [!warning]
>
> - Seuls les domaines jusqu’à trois niveaux (www.example.org) sont autorisés pour la solution Free.
>

Faites votre choix, puis cliquez sur ` Ajouter`{.action} pour valider.

![Ajouter un domaine libre](images/11.PNG){.thumbnail}

Si vous utilisez une solution Advanced, vous pourrez ajouter n'importe quel nom de domaine ou sous-domaine actif.

> [!primary]
> 
> - Les noms de domaine de quatrième niveau (blog.france.example.org) et plus sont autorisés pour la solution Advanced.
> 

Faites votre choix, puis cliquez sur ` Ajouter`{.action} pour valider.

![Ajouter un nom de domaine avancé](images/12.PNG){.thumbnail}

> [!warning]
>
> Pour tout ajout de nom de domaine ou de sous-domaine, vous recevrez un e-mail vous invitant à faire pointer celui-ci vers l’adresse IP du SSL Gateway dans un délai de trois jours.
> Cette opération est nécessaire pour valider la création du certificat SSL/TLS.
> 

L'onglet « Serveurs » vous permet de gérer les adresses IP des serveurs hébergeant votre site internet.

Cliquez sur ` + Serveur`{.action} pour ajouter une adresse IP et le port correspondant au serveur hébergeant votre site.

![Onglet Serveurs](images/13.PNG){.thumbnail}

- Si vous utilisez une solution Free, vous ne pourrez utiliser qu'une seule adresse IP/PORT.

- Si vous utilisez une solution Advanced, vous pourrez ajouter jusqu'à trois adresses IP/PORT pour vos noms de domaines et sous-domaines.

> [!primary]
>
> Si vous indiquez plusieurs adresses IP/PORT, votre SSL Gateway distribuera la charge de trafic avec le système DNS Round-robin.
>

Faites votre choix, puis cliquez sur ` Ajouter`{.action} pour valider.

![Ajouter IP/PORT avancé (interne)](images/15.PNG){.thumbnail}

> [!warning]
>
> Il est actuellement impossible d'ajouter des adresses IPv6 à vos serveurs.
> Cependant, ce n'est pas un problème, car votre nom de domaine ou sous-domaine peut pointer vers votre SSL Gateway en IPv6.
> Votre SSL Gateway basculera alors le trafic IPv6 vers l'adresse IPv4 de votre serveur de manière transparente.
> 

L'onglet « Tâches » vous permet d'afficher les opérations en cours sur votre SSL Gateway.

![Onglet Tâches](images/13-bis.PNG){.thumbnail}

> [!warning]
>
> Si nous n'avons pas encore détecté le pointage de votre nom de domaine vers l'adresse IP du SSL Gateway, le certificat SSL/TLS n'est pas encore créé.
> Cependant, votre site internet sera toujours accessible en HTTP. Dans ce cas, une miniature HTTP apparaît dans l'onglet « Saisie ».
> 
> ![HTTP uniquement](images/14.PNG){.thumbnail}
>

L'onglet « Graphiques » vous permet de visualiser le nombre de connexions et de requêtes effectuées par minute sur votre SSL Gateway.

![Onglet Mesures](images/17.PNG){.thumbnail}

- Si vous utilisez une solution Free, vous pourrez consulter vos mesures sur une période de 24 heures.

- Si vous utilisez une solution Advanced, vous pourrez consulter vos mesures durant un mois.

## Renouveler votre certificat SSL

###  

Afin de renouveler le certificat Let’s Encrypt, le nom de domaine ou le sous-domaine devra pointer vers l’adresse IP de l’offre SSL Gateway.

- Si ce n'est pas le cas, et que nos robots détectent ce fait dans un délai de sept jours avant la date de renouvellement du certificat SSL/TLS, un e-mail vous sera envoyé, vous donnant trois jours pour effectuer cette opération.

- Si cette opération n'a pas été effectuée durant ce délai, le certificat ne sera pas renouvelé. Vous devrez le regénérer manuellement à l'aide de ce bouton :

![Regénérer le SSL](images/16.PNG){.thumbnail}

## Astuces

### Correction de l'adresse IP source dans les logs

#### Présentation

Lorsqu'un client visite votre site, il se connecte au SSL Gateway en HTTPS. Puis il suit la requête vers votre serveur après l'avoir décodée et filtrée. Toutes les requêtes adressées à votre serveur proviennent du SSL Gateway.

Afin de suivre l'adresse IP de votre visiteur, le SSL Gateway ajoute automatiquement ces en-têtes HTTP standard :

- « X-Forwarded-For et X-Remote-Ip » : adresse IP du client, telle que visualisée par le SSL Gateway ;
- « Port X-Forwarded et port X-Remote » : port source du client, tel que visualisé par le SSL Gateway.

Comme ces champs peuvent être falsifiés par un client malveillant, ils ne doivent être pris en compte que s’ils proviennent d'une source approuvée, comme le SSL Gateway. La liste des adresses IP source utilisées par le SSL Gateway se trouve dans :

- votre espace client OVH, section « Sunrise » ;
- la section « SSL Gateway » ;
- le champ « IPv4 de sortie ».

À la date de rédaction de ce guide, ces adresses sont « **213.32.4.0/24** » et « ** 144.217.9.0/24** ». D'autres adresses peuvent être ajoutées ultérieurement.

Si votre serveur le gère, il peut être configuré pour prendre en compte ces informations automatiquement à la place de l'adresse IP du SSL Gateway.

#### Apache
Créez le fichier ci-dessous :
« /etc/apache2/conf-available/remoteip.conf »
Insérez les lignes suivantes :

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up-to-date list
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```

Vous pouvez maintenant remplacer les variables \`%h\` par \`%a\` dans les directives LogFormat de la configuration Apache.

Une fois la configuration prête, il vous suffit de l'activer avec les commandes suivantes :

```bash
# Enable the module then the configuration
a2enmod remoteip
a2enconf remoteip

# Restart Apache to recognise the module (reload is sufficient for configuration)
service apache2 restart
```

Vous pourrez trouver plus d'informations à propos de cette fonctionnalité Apache dans la [ documentation officielle](https://httpd.apache.org/docs/current/fr/mod/mod_remoteip.html){.external}.

#### NGINX
Ouvrez le fichier de configuration correspondant au site internet à sécuriser. Il se trouve généralement dans le dossier :
« /etc/nginx/sites-enabled »
Insérez les lignes suivantes dans la section « Serveur » :

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up-to-date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```

Vous trouverez plus d'informations sur cette fonctionnalité Nginx dans la [documentation officielle](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external}.
