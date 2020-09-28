---
title: 'Conseils suite au piratage de votre site WordPress'
slug: piratage-de-votre-site-wordpress-conseils-et-cas-dusages
legacy_guide_number: 1874
excerpt: 'Ce guide vous donne des conseils lorsque votre site WordPress s’est fait pirate'
section: 'Cas d'usage'
---

**Dernière mise à jour le 05/05/2020**

> [!warning]
>
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVHcloud avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation !
>
> Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVHcloud ne sera pas en mesure de vous fournir une assistance.
>

## Je me suis fait pirater &#58; que faire ?
Vous disposez d'un site Wordpress hébergé chez OVHcloud, et vous vous apercevez que votre site n'apparaît plus, ou qu'il est redirigé vers un autre site, ou encore votre site est rempli d'annonces intempestives.

OVHcloud n'assure pas de support sur l'utilisation du produit Wordpress, ni par courriel, ni par téléphone. Mais nous pouvons vous indiquer les démarches à suivre en cas de piratage.


### Pourquoi mon site Web s'est fait pirate ?
Pourquoi mon site Web s'est fait piraté? Qu'est-ce que vous êtes censé faire maintenant?

Le piratage d'un site a lieu en général par un manque de mise à jour du produit, une utilisation de plugins non officiels, des mots de passe trop simples...

Le risque 0 n'existe pas ! Il est néanmoins possible de limiter ce risque.

Il y a un certain nombre de mesures pratiques que vous pouvez prendre pour corriger le problème une fois qu'il est arrivé, et/ou de l'empêcher de se reproduire (effectuer régulièrement les mises à jour : version WordPress,thèmes,plugins...).

Ci-dessous, nous allons vous aider dans les différentes étapes pour remettre en ligne votre site.

Si OVHcloud a fermé votre site, vous pouvez retrouver un [guide généraliste](../site-ferme-pour-hack/){.ref}  sur les procédures de fermeture pour piratage (hack).


### Scannez votre poste
Le premier endroit où vous devez commencer est votre environnement local. Dans de nombreux cas, la source de l'attaque/infection commence localement (par exemple, ordinateur portable, ordinateur de bureau, etc ...).

Assurez-vous que vous exécutez un antivirus/malware sur votre machine locale. Certains virus peuvent ne pas être supprimés par certains logiciels anti-virus. Il peut être intéressant d'en utiliser plusieurs (local et en ligne). Ce conseil se prolonge à la fois pour Windows, Mac et Linux.


### Estimer la situation
Dès que vous vous rendez compte du piratage de votre site, il faut agir de suite. Dans un premier temps, il est nécessaire de savoir à quand remonte ce piratage pour valider si une restauration des données par OVHcloud est possible. Nous allons dans la suite de ce guide localiser l'intrusion, puis aborder les 2 cas possibles.


## Recherche et correction des failles de securite


> [!alert]
>
> Il est important de vérifier avant toute restauration, la date des dernières
> modification de vos fichiers web (FTP) afin de pouvoir réaliser : la recherche
> et correction des failles de sécurité.
> 

Il n'est pas possible de faire une procédure détaillée permettant de localiser à coup sûr l'origine de toute intrusion, mais voici comment procéder de façon générale, en s'appuyant sur le fait que l'attaque a pour origine une faille de script et donc que le pirate est passé par une requête HTTP.

Toutes les requêtes HTTP sont disponibles dans vos logs ([https://logs.ovh.net/votre_domaine](https://logs.ovh.net/){.external}). Remplacez "votre_domaine" par votre nom de domaine et son extension. ex: ovh.com.

- 1 Relevez la date et l'heure apparaissant dans l'horodatage (contenu du mail que vous avez reçu)*
- 2 Consultez vos logs en partant de cet horaire et en élargissant progressivement le champ de recherche sur des horaires antérieurs jusqu'à repérer une entrée incorrecte (étrange, différente des autres, etc.). Cela peut demander un peu de pratique ou de connaissance du format des requêtes suivant les cas. Prêtez plutôt attention aux requêtes de type POST, qui sont la principale source de hack ;
- 3 Relevez le script attaqué par cette requête ;
- 4 Étudiez le script pour y localiser la faille ;
- 5 Corrigez la faille.

*l'envoi de mail n'est présent que si votre hébergement a été bloqué. Si celui-ci n'a pas été bloqué, il faut vérifier la date des dernières modification depuis l'espace FTP (date des fichiers).*

**Supprimer simplement le code malicieux ajouté par un hacker n'est pas suffisant, il faut corriger totalement la faille de sécurité** .

Nous vous conseillons de demander l'assistance d'un [webmaster](https://partners.ovh.com){.external} confirmé pour ce type de manipulation et/ou de vous aider du forum officiel wordpress.



> [!alert]
>
> En aucun cas le support ne pourra directement vous assister pour ce type de
> demande.
> 


## Cas 1: le piratage a lieu dans le delai de restauration possible (sauvegarde OVHcloud)

### Restauration du site
Wordpress est composé de fichiers et d¹une base de données. Il est possible de restaurer vos fichiers à une date antérieure. OVHcloud propose un historique de 3 semaines concernant les fichiers présents sur votre hébergement. Concernant la base de données, il est possible de remonter à 7 jours.



> [!alert]
>
> La restauration ne corrige pas les failles de sécurité, il faut ensuite rechercher la faille et la corriger.
> La restauration écrase les données présentes par celle contenu dans la sauvegarde.
> 


### Restauration des fichiers via FTP
Concernant la restauration des fichiers :

Via le manager il est possible de restaurer la totalité de votre espace FTP mais cela peut être compliqué si vous avez des domaines attachés au même hébergement.

Il est préférable de ne restaurer que le répertoire concerné dans le cas où plusieurs sites cohabitent sur le même hébergement : un guide est disponible  [Restaurer l’espace de stockage de son hébergement web](../restauration-ftp-filezilla-espace-client/){.external}.


### Restauration base de donnees SQL
Voici 2 guides expliquant comment réaliser un [export](../exportation-bases-donnees/){.external} de la base de données et comment réaliser [l'import](../mutualise-guide-importation-dune-base-de-donnees-mysql/){.external}.

Une fois la sauvegarde de la base (dump) réalisée, il sera nécessaire de supprimer l'ensemble des tables depuis [phpMyAdmin](https://phpmyadmin.ovh.net){.external} afin de pouvoir importer votre sauvegarde.


### Suite a la restauration
Une fois la restauration terminée, vous devez vérifier si des mises à jour de WordPress, du thème et des plugins sont disponibles et les réaliser.

Il faut aussi désinstaller les plugins non utilisés, la désactivation n'est pas suffisante car cela peut laisser une faille présente.


## Cas 2 : le piratage est plus ancien, la restauration non fonctionnelle

### Vous ne pouvez pas vous connecter a votre panneau administrateur WordPress
Il faut dans ce cas modifier votre [mot de passe administrateur](https://codex.wordpress.org/fr:R%C3%A9initialisation_de_votre_mot_de_passe){.external} en suivant le guide officiel de Wordpress.

Si vous trouvez cela trop compliqué, il est possible de mettre à jour votre e-mail depuis [phpMyAdmin](https://phpmyadmin.ovh.net){.external} dans la table user et revenir à la page de connexion, cliquez sur Mot de passe oublié, et d'attendre que l'e-mail vous soit envoyé.


### Remplacez les fichiers de WordPress avec ceux d'un WordPress fraichement telecharge.
Un remplacement de tous vos fichiers de base permettra d'assurer qu'ils ne sont plus laissés dans un état piraté.

- rendez-vous sur le site officiel de [WordPress](https://fr.wordpress.org){.external} .

Vous y trouverez généralement un lien vous permettant de télécharger la dernière version stable du CMS sur votre ordinateur.

Le fichier que vous allez récupérer est généralement compressé (zippé), il faudra être en mesure de le décompresser (extraire) sur votre ordinateur. Vous trouverez sur Internet différentes aides à ce sujet.

Une fois décompressé, il faut transférer les fichiers vers votre espace FTP, un guide est disponible [ici](../connexion-espace-stockage-ftp-hebergement-web/){.external}.

Dans le cas où plusieurs sites cohabitent sur le même hébergement, le transfert des fichiers doit être réalisé dans le répertoire concerné.

Il sera nécessaire de modifier le fichier  **wp-config.php**  afin que le lien avec la base de données soit opérationnel.

Il faut pour cela vous munir du mail reçu suite à la création de votre base de données, vous pouvez retrouver les informations depuis votre espace client dans la section assistance > Historique des e-mails sauf le mot de passe que vous seul connaissez.

Si vous ne vous rappelez plus du mot de passe de votre base de données, il est possible de le modifier depuis votre espace client. Cette manipulation est expliquée dans ce [guide](../modifier-mot-de-passe-base-de-donnees/){.ref}



> [!success]
>
> Il est important ensuite depuis l'interface administrateur WorpdPress de
> vérifier les mises à jour possibles.
> 


### Informations utiles
Nous vous conseillons concernant les plugins, de n'utiliser que des plugins officiels WordPress. Les plugins non officiels ne sont pas forcément maintenus à jour par l'éditeur. Ils peuvent aussi contenir du code intrusif.
