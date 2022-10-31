---
title: 'Commander un SSL Gateway'
slug: commander-un-ssl-gateway
excerpt: 'Sécurisez les connexions vers votre site web'
section: Général
order: 01
---

## Généralites

### Prérequis

> [!primary]
>
> - Disposer d'un domaine ou sous-domaine actif.
> - Disposer d'un accès à la zone DNS de celui-ci.
> 

## En pratique

### Commande
- Afin de commander notre offre SSL Gateway, [cliquez ici](https://www.ovhcloud.com/fr/web-hosting/options/ssl/){.external}.
- Choisissez votre offre, et cliquez ensuite sur `Activer maintenant`{.action} ou `Commander`{.action}.

![page commerciale](images/1.PNG){.thumbnail}

- Indiquez votre domaine ou sous-domaine actif, puis cliquez sur `Suivant`{.action}.

![commande free](images/2.PNG){.thumbnail}



> [!warning]
>
> Offre Free :
>
> Seuls les domaines jusqu’à 3 niveaux (www.example.org) sont autorisés.
>

> [!warning]
>
> Offres Advanced et Enterprise :
> 
> Les domaines de 4ème niveau (blog.france.example.org) et plus sont autorisés.
> 


Notre système va ensuite détecter automatiquement la ou les adresses IP de votre site configurées sur votre domaine ou sous-domaine.

- Si vous disposez de plusieurs IPs, sélectionnez en une.
- Choisissez la zone géographique de votre service SSL Gateway
- Si la zone DNS de ce domaine ou sous-domaine est géré par votre compte OVH, cochez la case correspondante afin que nous modifions automatiquement la configuration de celui-ci pour pointer vers votre SSL Gateway.
- Cliquez sur `Commander`{.action}.


![commande free](images/3.PNG){.thumbnail}


> [!primary]
>
> Si vous disposez de plusieurs adresses IP pour votre site, il vous faudra en choisir une seule à la commande.
> Vous pourrez par la suite ajouter jusqu'à 2 IPs supplémentaires dans votre espace client si vous disposez de l'offre Advanced.
> 

- Laissez-vous guider et validez votre bon de commande.


### Configuration de votre zone DNS
Une fois votre bon de commande validé, si vous n'avez pas coché la case de modification automatique, un e-mail vous sera envoyé afin de vous demander de faire pointer votre domaine ou sous-domaine vers l'infrastructure OVH dans un délai de 3 jours.


> [!warning]
>
> Sans modification de votre zone DNS dans un délai de 3 jours, votre commande sera annulée.
> 


> [!faq]
>
> Cas 1 : votre zone DNS est gérée par les serveurs DNS mutualisés OVH.
>> 
>> - Si votre identifiant est contact administrateur ou technique de cette zone DNS, une modification de celle-ci sera nécessaire dans votre espace client.
>> - Si vous n'êtes pas contact de cette zone DNS, il vous faudra contacter la personne en charge de celle-ci afin de la modifier.
>> 
>> Reportez-vous aux instructions du guide « [Créer une zone DNS OVH pour un nom de domaine](https://docs.ovh.com/fr/domains/creer-une-zone-dns-pour-un-domaine-externe/){.external} » si nécessaire.
>> 
>
> Cas 2 : votre zone DNS n'est pas gérée par les serveurs DNS mutualisés OVH.
>> 
>> - Dans ce cas il vous suffit de modifier l'IP dans votre zone DNS en vous rendant sur l'interface de votre prestataire ou de votre serveur dédié.
>>
>

Une fois votre modification prise en compte par notre infrastructure, vous recevrez un e-mail de confirmation.


> [!warning]
>
> Toute modification de votre zone DNS peut prendre jusqu'à 24h avant de fonctionner, en raison du cache présent chez les fournisseurs d'accès internet.
> 

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>