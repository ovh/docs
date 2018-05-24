---
title: 'Les bases des sites web'
slug: day01
excerpt: 'Présentation et retour sur les fondamentaux d’un site web'
section: 'Cas d''usage'
---

> [!warning]
>
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation !
>
> Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVH ne sera pas en mesure de vous fournir une assistance.
>

## Comment fonctionne un site web ?
Naviguer sur Internet est une activité quotidienne pour la plupart des gens, mais le fonctionnement des sites web reste une science obscure pour beaucoup. Afin que votre ordinateur ou que votre tablette puisse naviguer sur un site web, trois éléments sont nécessaires : un navigateur web, un serveur contenant le site web et une connexion à Internet pour faire le lien entre les deux.

### Le navigateur web
Le navigateur web (browser en anglais) est la partie la plus connue : il s’agit du logiciel qui permet de naviguer sur les sites web. Les plus connus sont Firefox, Chrome, Safari ou bien encore Internet Explorer. Ils sont presque toujours préinstallés sur les appareils. Le navigateur web permet de renseigner une “URL” (l'adresse du site), qui permet d’accéder à une page web précise. Cette URL est composée d’un nom de domaine, qui permet au réseau Internet de diriger la requête vers un serveur bien précis. Mais nous reparlerons plus précisément des noms de domaines demain.

Lorsque le navigateur demande une page d’un site à un serveur, il reçoit des contenus sous différentes formes : images, vidéos, sons, mais aussi HTML/CSS et JavaScript. Le HTML/CSS permet au navigateur de reconstruire la page à partir d’un ensemble de règles (exemple : le texte de la partie centrale sera bleu) et d’une structuration du contenu. Le JavaScript permet d’ajouter des éléments dynamiques dans la page web. Il permet, par exemple, de charger de nouveaux contenus sans que la page ne doive être rechargée (Facebook utilise cette technique pour vous afficher les nouveaux messages sans devoir rafraîchir la page), ou de vérifier le contenu d’un champ e-mail afin d’avertir l’utilisateur d’une probable erreur de saisie avant même que le serveur n’ait répondu.

Il n’est pas obligatoire de connaître ces langages pour créer un site web : de nombreux logiciels existent déjà pour les personnes ne connaissant pas HTML/CSS. Il s’agit d’interfaces d’administration sans programmation. Ce calendrier de l’avent n’explorera que très peu les langages de programmation. Si vous souhaitez en savoir plus, il existe de nombreux cours en ligne (MOOC) qui permettent de les découvrir en profondeur.

Pour terminer, la navigation sur les sites web utilise un modèle d’échange de données nommé “client-serveur”, le navigateur étant le client.

### La connexion a Internet
La connexion à Internet est assurée, soit par votre fournisseur d’accès à internet (FAI), soit par votre opérateur mobile (qui est, en tant qu’opérateur de 3 ou 4 G, un FAI également). Cette connexion permet d’acheminer la requête depuis le navigateur de votre équipement jusqu’au serveur contenant le site web. Elle n’a ici qu’un rôle de transitaire, son rôle étant de trouver le bon chemin pour transporter la requête de l’internaute vers le bon serveur.

### Le serveur
Le serveur est une machine qui « sert » (d’où le nom de serveur) les pages demandées par le navigateur. Il peut s’agir de n’importe quelle machine configurée pour cet usage : un ordinateur personnel, connecté à Internet, peut suffire pour servir des pages à un navigateur.

Mais en réalité, ce n’est pas si simple : pour répondre présent lorsqu’un visiteur débarque sur votre site web, en plein milieu de la nuit, ou avec sa bande de copains, mieux vaut ne pas utiliser un ordinateur chez vous. Que se passe-t-il en cas de coupure de courant ? Comptez-vous laisser votre ordinateur allumé 24h/24 ? Que faites-vous en cas de panne matérielle ? Sans compter que les connexions à Internet domestiques sont bien souvent insuffisantes pour permettre la connexion de plus de 5 utilisateurs en simultané…

C’est pour ces raisons qu’OVH propose des offres d’hébergement web. Nous gérons des milliers de serveurs dédiés, reliés au cœur de réseau d’Internet. Ces milliers de serveurs sont monitorés 24h/24. C’est-à-dire qu’en cas de soucis, des équipes interviennent dans nos datacenters, même s’il est 2 h du matin ou que vous êtes à l’autre bout du monde.

Nous fournissons aussi des outils au sein de notre espace client afin d’évacuer la partie technique que représente la configuration des serveurs. En fait, vous n’avez pas besoin de savoir comment fonctionne un serveur pour créer votre site web chez OVH : nous le configurons pour vous, de manière transparente et automatique. Et tout cela, pour un prix inférieur à celui d’une machine entreposée chez vous et de l’électricité qu’elle consomme.

## Un peu de pratique
Maintenant, quittons la théorie et passons au cas pratique qui va constituer notre fil rouge tout au long du mois.

Notre site web fictif est une plateforme de petites annonces développée en PHP par nos soins. Il permet de soumettre et visualiser des annonces. Ce type de plateforme est parfois désignée comme une “application web”, car elle propose la même expérience que les applications des smartphones. Bien entendu, cette application est accessible depuis tous les appareils bénéficiant d’un navigateur et d’une connexion à Internet (smartphone, tablette, ordinateur…) puisqu’il s’agit d’un site web. Une version de démonstration est disponible sur [https://mypersonaldomain.ovh](https://mypersonaldomain.ovh){.external} et est réinitialisée chaque jour. Vous pouvez bien entendu vous inscrire et l’utiliser afin de découvrir toutes ses fonctionnalités.

Cet exemple, nous en reparlerons plus précisément demain en évoquant le choix et [la configuration du nom de domaine](../day02/guide.fr-fr.md){.ref}.

Notez que les conseils que vous allons vous délivrer sont valables pour n’importe quel type de site, qu’il s’agisse d’un blog, d’un site vitrine ou d’un site e-commerce.

À demain !

| Article précédent | Article suivant |
|---|---|
| - | [Choisir et configurer un nom de domaine](https://docs.ovh.com/fr/hosting/24-days/day02/) |