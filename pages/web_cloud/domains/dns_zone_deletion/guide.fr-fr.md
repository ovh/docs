---
title: "Comment supprimer une zone DNS ?"
excerpt: "Découvrez comment supprimer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client OVHcloud"
updated: 2024-02-13
---

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage.

Vous pouvez, par exemple, y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit. Cela vous permet de les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.)  associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Si besoin, consultez notre documentation sur [les enregistrements DNS et l'édition d'une zone DNS](/pages/web_cloud/domains/dns_zone_edit) depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Une zone DNS est hébergée / enregistrée sur des **serveurs DNS**. Ce sont les **serveurs DNS** qui doivent être déclarés auprès du nom de domaine pour utiliser la zone DNS qu'ils hébergent. 

Les **serveurs DNS** fonctionnent généralement par paire :

- Un serveur DNS *principal* : il redirige les flux de requêtes reçus par le nom de domaine vers la zone DNS qu'il héberge pour ce dernier. Cela permet d'effectuer la *résolution DNS* pour rediriger les flux vers les bons services (serveurs, site web, e-mails, etc.) associés au nom de domaine.
- Un serveur DNS *secondaire* : ce serveur de *secours* est utilisé si le serveur *principal* est saturé de requetes, est indisponible ou répond moins rapidement que le serveur *secondaire*.

Certains fournisseurs DNS proposent 3 **serveurs DNS** ou plus à déclarer auprès de votre nom de domaine, pour activer la zone DNS qu'ils hébergent pour ce dernier.

Pour plus de détails sur les **serveurs DNS**, consultez notre [guide](/pages/web_cloud/domains/dns_server_general_information) sur le sujet.

Pour diverses raisons, vous pouvez être amené à supprimer une zone DNS pour votre nom de domaine chez OVHcloud.
  
**Découvrez comment supprimer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client OVHcloud.**
  
## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Avoir une zone DNS dans votre espace client OVHcloud.
- Disposer des droits suffisants sur la zone DNS à supprimer. Retrouvez plus d'informations sur notre guide [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts).
  
## En pratique

> [!warning]
>
> Avant de poursuivre, vérifier que la zone DNS que vous souhaitez supprimer n'est plus utilisée par votre nom de domaine.
>
> En effet, si vous supprimez la zone DNS active pour votre nom de domaine, cela engendrera une interruption de vos services en ligne (site web, adresses e-mail, etc.).
>
> Effectuez un [WHOIS](https://www.ovhcloud.com/fr/domains/whois/) de votre nom de domaine pour savoir si la zone DNS active de votre nom de domaine est celle présente chez OVHcloud ou non. 
>
> Si la zone DNS active pour votre nom de domaine est celle présente chez OVHcloud et que vous souhaitez remplacer celle-ci par une zone DNS hébergée ailleurs, consultez notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_general_information) » avant d'effectuer une quelconque suppression de zone DNS.
>
  
### Étape 1 - Initier la suppression d'une zone DNS OVHcloud

Pour initier la suppression d'une zone DNS OVHcloud, effectuez les actions suivantes : 

- Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ;
- Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action} ;
- Dans la colonne de gauche, cliquez sur le menu déroulant `Noms de domaine`{.action} ;
- Sélectionnez le nom de domaine ou la zone DNS concernée ;
- Sur la page qui s'affiche, cliquez sur l'onglet `Zone DNS`{.action} pour accéder au tableau listant toutes les entrées DNS de la zone DNS ;
- Sur la partie droite, cliquez sur le bouton `Supprimer la zone DNS`{.action}.

![dnszonecreate](images/delete-a-dns-zone.png){.thumbnail}

  
### Étape 2 :
  
## Aller plus loin
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.