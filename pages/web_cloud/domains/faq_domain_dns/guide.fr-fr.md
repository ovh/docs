---
title: "FAQ sur les noms de domaine & DNS"
excerpt: "Retrouvez les principales questions posées sur les noms de domaine, les serveurs DNS et les zones DNS"
updated: 2025-12-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

**Cliquez sur les questions ci-dessous pour afficher les explications.**

## Souscription d'un nom de domaine

/// details | Comment puis-je souscrire à un nom de domaine chez OVHcloud ?

Suivez ces étapes :

1. Rendez-vous sur notre site web [OVHcloud](/links/website).
2. Sur la page qui s'affiche et dans le champ prévu à cet effet, saisissez le nom de domaine que vous souhaitez réserver (par exemple : `domain.tld`), puis cliquez sur le bouton `Rechercher`{.action}.
3. Sur la nouvelle page qui s'affiche, notre interface vous précisera si le nom de domaine choisi est disponible ou non à l'achat. S'il est déjà réservé avec la syntaxe que vous avez saisie, modifiez-le et relancez une nouvelle recherche de disponibilité.
4. Une fois que vous avez trouvé un nom de domaine disponible, cliquez sur le bouton `Acheter`{.action}, puis sur le bouton `Poursuivre la commande`{.action} dans la colonne de droite.
5. Sélectionnez les éventuelles options ou services auxquels vous souhaitez souscrire en complément de votre nom de domaine, puis cliquez sur `Suivant`{.action} jusqu'à ce que le tunnel de commande vous invite à vous authentifier ou à créer un compte client OVHcloud.
6. Dès que vous êtes authentifié avec votre compte client OVHcloud, vous pourrez personnaliser les informations des contacts (propriétaire/titulaire, administrateur, technique) pour votre nom de domaine. Cliquez ensuite sur le bouton `Continuer`{.action} pour accéder au récapitulatif de votre commande.
7. Sur la page `Récapitulatif de votre commande` et si nécessaire, vous pourrez modifier la configuration DNS qui s'appliquera à votre nom de domaine en cliquant sur le lien intitulé `Modifier la configuration`{.action}. Dès que vos modifications sont terminées, cliquez sur le bouton `Payer`{.action} pour accéder à la dernière étape de votre commande.

Payez ensuite votre commande pour initier la réservation de votre nom de domaine ainsi que l’installation des services et options auxquels vous avez souscrit en complément.

Quelques instants plus tard, vous recevrez un e-mail de confirmation pour votre commande.
Vous pourrez ensuite administrer votre nom de domaine en vous connectant à votre [espace client OVHcloud](/links/manager).

N'hésitez pas à créer un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) si besoin.

///

/// details | Comment puis-je acheter un nom de domaine sur le marché secondaire ?

L'achat d'un nom de domaine sur le marché secondaire se passe de la même manière que la souscription d'un même nom de domaine.

Suivez ces étapes :

1. Rendez-vous sur notre site web [OVHcloud](/links/website).
2. Sur la page qui s'affiche et dans le champ prévu à cet effet, saisissez le nom de domaine que vous souhaitez réserver (par exemple : `domain.tld`), puis cliquez sur le bouton `Rechercher`{.action}.
3. Sur la nouvelle page qui s'affiche, notre interface vous précisera si le nom de domaine choisi est disponible ou non à l'achat. S'il est déjà réservé avec la syntaxe que vous avez saisie, modifiez-le et relancez une nouvelle recherche de disponibilité.
4. Une fois que vous avez trouvé un nom de domaine disponible, cliquez sur le bouton `Acheter`{.action}, puis sur le bouton `Poursuivre la commande`{.action} dans la colonne de droite.
5. Sélectionnez les éventuelles options ou services auxquels vous souhaitez souscrire en complément de votre nom de domaine, puis cliquez sur `Suivant`{.action} jusqu'à ce que le tunnel de commande vous invite à vous authentifier ou à créer un compte client OVHcloud.
6. Dès que vous êtes authentifié avec votre compte client OVHcloud, vous pourrez personnaliser les informations des contacts (propriétaire/titulaire, administrateur, technique) pour votre nom de domaine. Cliquez ensuite sur le bouton `Continuer`{.action} pour accéder au récapitulatif de votre commande.
7. Sur la page `Récapitulatif de votre commande` et si nécessaire, vous pourrez modifier la configuration DNS qui s'appliquera à votre nom de domaine en cliquant sur le lien intitulé `Modifier la configuration`{.action}. Dès que vos modifications sont terminées, cliquez sur le bouton `Payer`{.action} pour accéder à la dernière étape de votre commande.

Payez ensuite votre commande pour initier la réservation de votre nom de domaine ainsi que l’installation des services et options auxquels vous avez souscrit en complément.

Quelques instants plus tard, vous recevrez un e-mail de confirmation pour votre commande.
Vous pourrez ensuite administrer votre nom de domaine en vous connectant à votre [espace client OVHcloud](/links/manager).

N'hésitez pas à créer un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) si besoin.

///

## Gestion d'un nom de domaine

/// details | Comment savoir si mon nom de domaine est enregistré chez OVHcloud ?

Pour cela, vous pouvez effectuer une requête [WHOIS](/links/web/domains-whois) pour savoir où est enregistré votre nom de domaine et pour vérifier que vous êtes bien déclaré en tant que titulaire du nom de domaine.

Chaque bureau d'enregistrement (tel qu'OVHcloud) a la possibilité de choisir comment afficher les informations relatives à un nom de domaine dans le WHOIS.

Une fois la requête WHOIS effectuée, recherchez dans le résultat au moins l'une des lignes suivantes :

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Si vous observez au moins l'une de ces lignes dans le résultat, votre nom de domaine est bien enregistré chez OVHcloud.

Dans le cas contraire, votre nom de domaine est enregistré auprès d'un autre bureau d'enregistrement. Recherchez alors les lignes relatives au `Registrar` pour identifier le bureau d'enregistrement où votre nom de domaine est enregistré.

///

/// details | Comment connaître la date d'expiration d'un nom de domaine ?

La solution la plus rapide est d'effectuer une requête [WHOIS](/links/web/domains-whois) sur le nom de domaine. Une fois la requête effectuée, recherchez dans le résultat la ligne correspondant à la date d'expiration (par exemple : `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, etc.).

Si votre nom de domaine est enregistré chez OVHcloud, vous pouvez également suivre ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur votre nom dans le coin supérieur droit puis choisissez `Mes offres & services`{.action}.
3. Dans le tableau qui apparaît, recherchez la ligne correspondant à votre nom de domaine, puis repérez la date présente dans la colonne `Date d'effet`. Cette date correspond à la date d'expiration de votre nom de domaine.

///

/// details | Comment changer la date annuelle d'expiration d'un nom de domaine ?

La date annuelle d'expiration d'un nom de domaine (par exemple : le 24 septembre) est pré-établie en fonction de la date d'enregistrement (création) du nom de domaine.

Généralement, la date annuelle d'expiration d'un nom de domaine est la même que la date à laquelle vous avez enregistré le nom de domaine.

Par conséquent, il n'est pas possible de changer la date annuelle d'expiration d'un nom de domaine.

///

<br>

/// details | Comment puis-je corriger une faute de frappe dans mon nom de domaine ?

Dès lors qu'un nom de domaine est souscrit, celui-ci est enregistré à partir des caractères que vous lui avez définis lors de sa commande. L'enregistrement s'effectue auprès du registre de l'extension de votre nom de domaine (par exemple : le registre des *.com*) et des frais de réservation s'appliquent du côté du bureau d'enregistrement (tel qu'OVHcloud).

Un nom de domaine est une adresse unique sur Internet, par exemple : `ovhcloud.com`.
Chaque changement dans ce nom, que ce soit un caractère ou une extension (.com, .fr, .net, etc.) en fait un nom de domaine complètement différent.

Par conséquent, si vous avez fait une erreur de saisie lors de votre commande, celle-ci ne pourra pas être modifiée ou corrigée. Vous devrez commander un nouveau nom de domaine indépendamment du précédent (sous réserve que la nouvelle orthographe désirée ne soit pas déjà réservée par quelqu'un d'autre).

Les noms de domaine sont considérés comme des produits personnalisés, car ils sont enregistrés spécifiquement pour un titulaire et bloqués pour les autres dès la commande. C’est pourquoi, une fois enregistrés, ils ne peuvent être remboursés.

///

/// details | Comment modifier un nom de domaine déjà souscrit ?

Dès lors qu'un nom de domaine est souscrit, celui-ci est enregistré à partir des caractères que vous lui avez définis lors de sa commande. L'enregistrement s'effectue auprès du registre de l'extension de votre nom de domaine (par exemple : le registre des *.com*) et des frais de réservation s'appliquent du côté du bureau d'enregistrement (tel qu'OVHcloud).

Un nom de domaine est une adresse unique sur Internet, par exemple : `ovhcloud.com`.
Chaque changement dans ce nom, que ce soit un caractère ou une extension (.com, .fr, .net, etc.) en fait un nom de domaine complètement différent.

Par conséquent, si vous avez fait une erreur de saisie lors de votre commande, celle-ci ne pourra pas être modifiée ou corrigée. Vous devrez commander un nouveau nom de domaine indépendamment du précédent (sous réserve que la nouvelle orthographe désirée ne soit pas déjà réservée par quelqu'un d'autre).

Les noms de domaine sont considérés comme des produits personnalisés, car ils sont enregistrés spécifiquement pour un titulaire et bloqués pour les autres dès la commande. C’est pourquoi, une fois enregistrés, ils ne peuvent être remboursés.

///

/// details | Comment supprimer un nom de domaine ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur votre nom dans le coin supérieur droit puis choisissez `Mes offres & services`{.action}.
3. Dans le tableau qui apparaît, recherchez la ligne correspondant à votre nom de domaine, cliquez sur le bouton `...`{.action} à droite, puis sur `Résilier mon service`{.action}.
4. Sur la page qui s'affiche, sélectionnez le mode de résiliation (immédiatement ou à la date d'expiration du service) puis cliquez en bas sur le bouton `Oui, résilier`{.action}.

Votre nom de domaine sera alors suspendu à la date d'expiration, puis, à compter de cette date, il sera supprimé **définitivement** dans un délai maximum de 60 jours. Ce délai est défini par l'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) afin qu'un nom de domaine soit totalement supprimé et de nouveau disponible à l'enregistrement pour un autre propriétaire/titulaire.

> [!primary]
>
> Une fois la résiliation demandée, vous pouvez accélérer la suppression en créant un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help). Des documents justificatifs seront à fournir pour accélérer cette suppression.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Comment résilier mes services OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services) ».

///

/// details | J'ai reçu un e-mail concernant la validation des informations du titulaire associée à mon nom de domaine, que faire ?

Tout d'abord, si vous avez un doute sur la légitimité de l'e-mail reçu, consultez notre guide « [Phishing - Comment reconnaître des e-mails ou SMS frauduleux ?](/pages/account_and_service_management/account_information/phishing_care) ».

Conformément à une directive de l'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) du 01/09/2014, les bureaux d'enregistrement (par exemple : OVHcloud) sont tenus de vérifier la validité des coordonnées des titulaires/propriétaires de noms de domaine. OVHcloud envoie alors un e-mail aux titulaires/propriétaires du nom de domaine enregistré à l'adresse e-mail de contact déclarée chez OVHcloud.

Vous recevrez cet e-mail lorsque vous effectuerez l'une des actions suivantes :

- Enregistrement d'un nouveau nom de domaine.
- Transfert d'un nom de domaine.
- Modification des coordonnées associées à votre nom de domaine.

Cet e-mail contient un lien permettant de vérifier rapidement vos coordonnées en tant que propriétaire/titulaire légal du nom de domaine.

Attention : Cette vérification doit être faite dans un délai de 15 jours. Passé ce délai, le nom de domaine sera suspendu techniquement. Il restera contractuellement à votre nom mais il ne sera plus accessible sur Internet. Un message d'erreur s'affichera pour les visiteurs de votre site web.

Vous pouvez recevoir les e-mails suivants durant les 15 premiers jours :

- **Jour 0** : Immédiatement après avoir commandé le nom de domaine ou modifié ses coordonnées, vous (ou la personne enregistrée en tant que propriétaire/titulaire du nom de domaine) recevrez le premier e-mail avec un lien de vérification.
- **Jours 4, 9 et 13 (e-mails de relance)** : Si vous n'avez pas encore vérifié le nom de domaine, vous recevrez à nouveau l'e-mail.
- **Jour 14** : Si vous n'avez toujours pas vérifié le nom de domaine, l'e-mail est envoyé une nouvelle fois. De plus, un e-mail est également envoyé à l'adresse e-mail de l'administrateur/titulaire du nom de domaine pour l'informer que les coordonnées de ce dernier n'ont pas été confirmées.
- **Jour 15** : Si le propriétaire/titulaire du nom de domaine n'a pas encore répondu, nous envoyons un e-mail l'administrateur du nom de domaine pour l'informer de la situation et de la désactivation du nom de domaine.

Au-delà de ces 15 jours, le système envoie des e-mails supplémentaires (jusqu'à 9 e-mails) avant de supprimer votre nom de domaine. Cette suppression sera effectuée après 60 jours à compter du jour 0.

> [!warning]
>
> En fonction de l'extension du nom de domaine (par exemple : *.com*, *.net*, etc.) certains délais mentionnés ci-dessus peuvent différer. Nous vous recommandons vivement de vérifier, auprès du registre de l'extension de votre nom de domaine, le processus de vérification du contrôle des contacts.

///

/// details | Je n'ai pas reçu l'e-mail de validation des informations du titulaire associé à mon nom de domaine et celui-ci est suspendu, que faire ?

Si vous n'avez pas reçu l'e-mail de validation du propriétaire de votre nom de domaine, vérifiez les points ci-dessous :

1. L'adresse e-mail déclarée pour le titulaire du nom de domaine est valide et opérationnelle.
2. L'e-mail de validation ne se trouve pas dans les courriers indésirables.

Après avoir vérifié et confirmé les deux points ci-dessus, si vous ne parvenez toujours pas à récupérer l'e-mail de validation du titulaire, nous vous invitons à ouvrir un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) pour demander le renvoi de cet e-mail.

///

/// details | Qu'est-ce qu'un nom de domaine au format IDN ?

Initialement, les noms de domaine pouvaient contenir uniquement des caractères **ASCII** bien spécifiques (dont les 26 lettres de l'alphabet latin). Un **I**nternationalized **D**omain **N**ame (**IDN**) permet notamment de pouvoir utiliser des caractères spéciaux ou accentués, voire même d'autres alphabets (comme le *cyrillique*).

Chez OVHcloud, il est tout à fait possible de commander des IDN et de les utiliser comme un nom de domaine à part entière avec nos autres services proposés (hébergement web, zone DNS, etc.<sup>1</sup>).

Une fois souscrits, les IDN apparaissent dans votre [espace client OVHcloud](/links/manager) au format **xn--**.

Même si votre domaine s'affiche en [notation internationalisée (IDN)](https://fr.wikipedia.org/wiki/Nom_de_domaine_internationalisé) dans votre [espace client OVHcloud](/links/manager), il fonctionnera et s'affichera de façon tout à fait normale ailleurs. L'adresse de votre site web s'affichera telle que vous l'avez demandée. Vos adresses e-mail s'afficheront également comme vous le souhaitez chez vos correspondants.

> [!alert]
>
> <sup>1</sup> : Il est déconseillé d'utiliser une adresse e-mail avec un nom de domaine IDN depuis un client de messagerie (Outlook, Mail de macOS, etc.). En effet, certains clients de messagerie n'interprètent pas encore les noms de domaine avec des caractères accentués, ce qui bloque la transmission des e-mails. Lorsqu'un expéditeur vous envoie un e-mail, il reçoit alors un message automatique indiquant que votre adresse e-mail n'existe pas.
>
> **Il est recommandé de réserver en complément de votre nom de domaine avec caractères accentués, le même nom de domaine sans ces accents, afin d'éviter toute incompatibilité au niveau des échanges d'e-mails.**

///

/// details | Comment corriger un nom de domaine au format IDN ?

Tout comme les noms de domaine « classiques », dès lors où un nom de domaine ou un IDN est souscrit, celui-ci est enregistré à partir des caractères que vous lui avez définis lors de sa commande.

Par conséquent, si vous avez fait une erreur de saisie lors de votre commande, celle-ci ne pourra pas être corrigée. Vous devrez commander un nouveau nom de domaine indépendamment du précédent (sous réserve que la nouvelle orthographe désirée ne soit pas déjà réservée par quelqu'un d'autre).

///

/// details | Comment renouveler un seul nom de domaine présent dans un pack Alldom ?

Pour cela, vous devez être à minima déclaré en tant que [contact « Facturation »](/pages/account_and_service_management/account_information/managing_contacts) du nom de domaine concerné. Vous devrez ensuite modifier le mode de renouvellement du nom de domaine pour le passer en **renouvellement automatique**.

Pour cela, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur votre nom dans le coin supérieur droit puis choisissez `Mes offres & services`{.action}.
3. Dans le tableau qui apparaît et à droite du nom de domaine concerné, cliquez sur le bouton `...`{.action} dans la colonne `Actions`, puis sur `Configurer le renouvellement`{.action}. Vous pourrez ensuite configurer le renouvellement de ce nom de domaine en **renouvellement automatique**.

> [!primary]
>
> Si vous disposez d'une ancienne offre d'hébergement web incluant un nom de domaine gratuit et si vous modifiez cette offre d'hébergement, cela peut dans certains cas annuler la gratuité du nom de domaine.
>
> En cas de doute, nous vous invitons à ouvrir un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) en y précisant le nom de domaine et l'hébergement web concerné.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Comment renouveler mes services OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal) ».

///

## Transfert d'un nom de domaine

/// details | Est-ce que mon nom de domaine est transférable après un changement de propriétaire ?

L'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) a mis en place des mesures de sécurité pour prévenir les transferts ou les changements de propriétaires non autorisés ou abusifs des noms de domaine.

L'ICANN a notamment défini un délai incompressible de **60** jours entre chaque opération pouvant survenir sur un nom de domaine (création, changement de propriétaire, transfert).

Les règles définies par l'ICANN doivent obligatoirement être respectées par les bureaux d'enregistrement (tel qu'OVHcloud).

Vous n'aurez donc pas d'autre choix que de patienter jusqu'à la fin du délai de 60 jours pour pouvoir transférer votre nom de domaine après avoir changé son propriétaire.

///

/// details | Mon nom de domaine est bloqué contre le transfert pendant 60 jours, que faire ?

L'**I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) a mis en place des mesures de sécurité pour prévenir les transferts ou les changements de propriétaires non autorisés ou abusifs des noms de domaine.

L'ICANN a notamment défini un délai incompressible de **60** jours entre chaque opération pouvant survenir sur un nom de domaine (création, changement de propriétaire, transfert).

Les règles définies par l'ICANN doivent obligatoirement être respectées par les bureaux d'enregistrement (tel qu'OVHcloud).

Vous n'aurez donc pas d'autre choix que de patienter jusqu'à la fin du délai de 60 jours pour réaliser une nouvelle opération (changement de propriétaire ou transfert) sur votre nom de domaine.

///

/// details | Je ne retrouve pas mon nom de domaine dans mon espace client, que faire ?

Tout d'abord, effectuez une requête [WHOIS](/links/web/domains-whois) pour savoir où est enregistré votre nom de domaine et pour vérifier que vous êtes bien déclaré en tant que titulaire du nom de domaine.

Cas n°1.A - Votre nom de domaine est enregistré chez OVHcloud et vous êtes bien déclaré en tant que titulaire du nom de domaine :

Effectuez une [procédure de récupération des contacts](/links/transversal/procedure-contact-change) pour que votre nom de domaine soit entièrement géré dans votre [espace client OVHcloud](/links/manager). Ainsi, vous n'aurez plus besoin de contacter la personne qui gérait auparavant votre nom de domaine.

Cas n°1.B - Votre nom de domaine est enregistré chez OVHcloud et vous n'êtes pas déclaré en tant que titulaire du nom de domaine :

Conformément au **R**èglement **G**énéral sur la **P**rotection des **D**onnées (**RGPD**), OVHcloud ne pourra pas fournir d'informations relatives à la personne ou à l'organisation qui gère le nom de domaine chez OVHcloud.

Cependant, vous pouvez tenter de contacter la personne ou organisation qui le gère en suivant les instructions de [ce formulaire](/links/web/contact-domain-owner).

Cas n°2 - Votre nom de domaine n'est pas enregistré chez OVHcloud :

Contactez directement le bureau d'enregistrement (précisé dans les lignes qui commencent par le terme `Registrar`) de votre nom de domaine pour poursuivre vos recherches. En effet, si le nom de domaine n'est pas enregistré chez OVHcloud, nous ne serons pas en mesure de vous accompagner sur ce sujet.

///

/// details | Je ne parviens pas à contacter la personne qui gère mon nom de domaine, que faire ?

Tout d'abord, effectuez une requête [WHOIS](/links/web/domains-whois) pour vérifier que vous êtes bien déclaré en tant que titulaire du nom de domaine.

Cas n°1 - Vous êtes bien déclaré en tant que titulaire du nom de domaine :

Effectuez une [procédure de récupération des contacts](/links/transversal/procedure-contact-change) pour que votre nom de domaine soit entièrement géré dans votre [espace client OVHcloud](/links/manager). Ainsi, vous n'aurez plus besoin de contacter la personne qui gérait auparavant votre nom de domaine.

Cas n°2 - Vous n'êtes pas déclaré en tant que titulaire du nom de domaine :

Conformément au **R**èglement **G**énéral sur la **P**rotection des **D**onnées (**RGPD**), OVHcloud ne pourra pas fournir d'informations relatives à la personne ou à l'organisation qui gère le nom de domaine chez OVHcloud.

Cependant, vous pouvez tenter de contacter la personne ou organisation qui le gère en suivant les instructions de [ce formulaire](/links/web/contact-domain-owner).

///

/// details | Puis-je vendre mon nom de domaine ?

Actuellement, OVHcloud ne prend pas directement en charge le processus de vente des noms de domaine déjà enregistrés. Nous ne proposons pas ce type de service.

Cependant, si vous souhaitez mettre en vente votre nom de domaine sur un marché secondaire, contactez l'un de nos partenaires suivants :

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Si vous souhaitez vendre votre nom de domaine, vous pouvez l'ajouter à ces plateformes. Une fois ajouté, les fournisseurs autorisés proposeront votre nom de domaine au prix que vous aurez défini sur l'une des plateformes ci-dessus.

///

## Zone DNS

> [!primary]
>
> La modification d'une zone DNS est une manipulation sensible et peut engendrer une interruption des services associés à votre nom de domaine (hébergement web, e-mail, etc.). En cas de doute, n'hésitez pas à contacter un [prestataire spécialisé](/links/partner).

/// details | Qu'est-ce qu'une zone DNS ?

La zone DNS d’un nom de domaine contient une configuration applicable à ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS fonctionne comme un centre d’aiguillage, dirigeant le trafic vers les bons services associés au domaine.

Vous pouvez par exemple y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.) associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Une zone DNS est hébergée / enregistrée sur des **serveurs DNS**. Ces **serveurs DNS** doivent être déclarés auprès du bureau d'enregistrement du nom de domaine pour utiliser la zone DNS qu'ils hébergent.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information) ».

///

/// details | Qu'est-ce qu'un enregistrement DNS ?

Les enregistrements DNS sont utilisés, par exemple pour :

- Associer un nom de domaine à une adresse IP, ce qui permet aux utilisateurs d'accéder à un site web ou à un serveur distant.
- Associer un nom de domaine à d'autres ressources en ligne en utilisant un nom de domaine (plus facilement mémorisable) au lieu d'une adresse IP.
- Valider des configurations d'association ou de sécurité, notamment pour les services e-mail et les hébergements mutualisés.

De nombreux enregistrements DNS existent. Ils ont tous un but spécifique dans la résolution DNS. Chez OVHcloud, ils sont distingués en trois parties : 

- **Champs de pointage** : `A`, `AAAA`, `NS`, `CNAME` et `DNAME`.
- **Champs étendus** : `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` et `HTTPS`.
- **Champs mail** : `MX`, `SPF`, `DKIM` et `DMARC`.

> [!success]
>
> Retrouvez plus de détails dans les guides suivants :
>
> - Informations générales :
>     - [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)
> - Enregistrements DNS de pointage :
>     - [Ajouter un enregistrement DNS de type A pour un nom de domaine](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Ajouter un enregistrement DNS de type AAAA pour un nom de domaine](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Ajouter un enregistrement DNS de type CNAME pour un nom de domaine](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Enregistrements DNS étendus :
>     - [Ajouter un enregistrement DNS de type TXT pour un nom de domaine](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Enregistrements DNS e-mails :
>     - [Configurer un enregistrement MX pour la gestion des emails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Améliorer la sécurité des e-mails via un enregistrement SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Améliorer la sécurité des e-mails via un enregistrement DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Améliorer la sécurité des e-mails via un enregistrement DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Quels sont les enregistrements DNS disponibles dans une zone DNS OVHcloud ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Ajouter une entrée`{.action}.

À cet endroit, vous visualiserez l'ensemble des enregistrements DNS que vous pourrez ajouter via l'assistant de configuration OVHcloud.

Grâce à cet assistant de configuration, vous pourrez ajouter les types d'enregistrements DNS suivants :

- **Champs de pointage** : `A`, `AAAA`, `NS`, `CNAME` et `DNAME`.
- **Champs étendus** : `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` et `HTTPS`.
- **Champs mail** : `MX`, `SPF`, `DKIM` et `DMARC`.

> [!primary]
>
> Si vous souhaitez ajouter un enregistrement DNS qui n'est pas présent dans la liste, fermez la fenêtre qui s'est ouverte après avoir cliqué sur le bouton `Ajouter une entrée`{.action} et cliquez sur le bouton `Modifier en mode textuel`{.action} situé sur la droite ou en dessous du tableau.
>
> Vous pourrez ainsi ajouter manuellement l'enregistrement DNS de votre choix.

> [!success]
>
> Retrouvez plus de détails dans les guides suivants :
>
> - Informations générales :
>     - [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)
> - Enregistrements DNS de pointage :
>     - [Ajouter un enregistrement DNS de type A pour un nom de domaine](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Ajouter un enregistrement DNS de type AAAA pour un nom de domaine](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Ajouter un enregistrement DNS de type CNAME pour un nom de domaine](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Enregistrements DNS étendus :
>     - [Ajouter un enregistrement DNS de type TXT pour un nom de domaine](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Enregistrements DNS e-mails :
>     - [Configurer un enregistrement MX pour la gestion des emails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Améliorer la sécurité des e-mails via un enregistrement SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Améliorer la sécurité des e-mails via un enregistrement DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Améliorer la sécurité des e-mails via un enregistrement DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Puis-je changer les serveurs DNS déclarés dans ma zone DNS chez OVHcloud ?

La modification manuelle des enregistrements DNS de type NS d’un nom de domaine dans une zone DNS OVHcloud n'est pas recommandée car cela empêcherait la résolution DNS de la zone DNS correspondante.

Si vous souhaitez modifier la configuration des enregistrements DNS de type NS de votre nom de domaine, c'est probablement parce que vous souhaitez changer les serveurs DNS déclarés pour ce dernier.

> [!primary]
>
> Pour changer les serveurs DNS de votre nom de domaine chez OVHcloud, une zone DNS doit déjà exister sur les nouveaux serveurs DNS désirés.
> De plus, vous devrez vérifier dans cette même zone DNS que les enregistrements DNS de type NS correspondent bien aux serveurs DNS correspondants.

Pour cela, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
3. Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le nom de domaine concerné.
4. Pour modifier les serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.

Vous pourrez modifier les serveurs DNS pour votre nom de domaine sur la page qui apparaît.

> [!primary]
>
> La propagation de la modification des serveurs DNS déclarés pour un nom de domaine peut prendre jusqu'à **48** heures.

En cas d'erreur, nous vous invitons à ouvrir un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) en y précisant les informations suivantes :

- Les noms des serveurs DNS que vous souhaitez paramétrer.
- Le message d'erreur rencontré.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | Quelle est la différence entre un enregistrement DNS de type A (IPv4) et AAAA (IPv6) ?

Le réseau Internet fonctionne depuis le début des années 1990 en suivant la norme IPv4. Cette norme permet de fournir une adresse IP X.X.X.X (où chaque « X » est un nombre compris entre 0 et 255) à chacune des machines reliées au réseau Internet (serveurs, ordinateurs, smartphones, tablettes, etc.). Cependant, cette norme limite à environ 4 milliards le nombre d'appareils connectés au réseau Internet.

Suite à cela, le protocole IPv6 a été introduit pour permettre de connecter au réseau Internet jusqu'à 340 sextillions d'appareils.

Les adresses IPv4 étant désormais moins disponibles, il est plus difficile d'ajouter de nouvelles machines sur le réseau Internet avec la norme IPv4. Toutefois, les connexions avec une adresse IPv6 sont utiles uniquement si, par exemple, votre site web est aussi disponible avec ce même protocole.

Les enregistrements DNS de type A et AAAA sont deux types d’enregistrements de ressources utilisés pour associer un nom de domaine à une adresse IP.

Leurs principales différences résident dans le type d'adresse IP qu'ils utilisent :

- **Enregistrement A** (également appelé « enregistrement hôte ») : Associe un nom de domaine vers une adresse IPv4 (par exemple, 213.0.113.0). Les adresses IPv4 sont des adresses 32 bits, généralement écrites en notation décimale pointillée.
- **Enregistrement AAAA** (également appelé « quadruple enregistrement A ») : Associe un nom de domaine à une adresse IPv6 (par exemple, 2001:db8:1:1b00:213:0:113:0). Les adresses IPv6 sont des adresses 128 bits, généralement écrites en notation hexadécimale.

En d'autres termes, les enregistrements A sont utilisés pour les adresses IPv4, tandis que les enregistrements AAAA sont utilisés pour les adresses IPv6. Les deux types d'enregistrements sont utilisés pour diriger le trafic vers une adresse IP spécifique, mais ils sont utilisés pour différentes versions du protocole Internet.

À noter qu'un domaine peut avoir à la fois des champs A et AAAA, ce qui lui permet d'être accessible sur les réseaux IPv4 et IPv6. C’est ce que l’on appelle le « double empilement », une pratique courante pour les sites web et les services qui souhaitent être accessibles aux utilisateurs sur les réseaux IPv4 et IPv6.

> [!success]
>
> Retrouvez plus de détails dans les guides suivants :
>
> - [Ajouter un enregistrement DNS de type A pour un nom de domaine](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Ajouter un enregistrement DNS de type AAAA pour un nom de domaine](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configurez une adresse IPv6 pour votre site web](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Comment configurer un enregistrement PTR pour mon adresse IP externe à OVHcloud ?

Chez OVHcloud, les configurations **P**oin**T**er **R**ecord (**PTR**) ne peuvent pas être gérées directement au sein de nos zones DNS.

Pour configurer un enregistrement reverse/PTR pour une adresse IP externe, contactez votre **F**ournisseur d'**A**ccès à **I**nternet (**FAI**) car il est responsable de la gestion des enregistrements DNS inversés des adresses IP qu'il alloue.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records) ».

///

/// details | Comment changer le TTL par défaut dans ma zone DNS OVHcloud ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Modifier le TTL par défaut`{.action}.
4. Dans la fenêtre qui s'ouvre, ajustez la valeur sous la mention `TTL par défaut` en fonction de vos besoins, puis cliquez sur `Modifier`{.action}.

> [!primary]
>
> La propagation de la modification d'une zone DNS peut prendre jusqu'à **24** heures.

///

/// details | Qu'est-ce qu'un enregistrement DNS de type SOA ?

L'enregistrement DNS de type **S**tart **O**f **A**uthority (**SOA**) fournit un ensemble d'éléments concernant la configuration DNS d'un nom de domaine.

Retrouvez ci-après le résultat d'une requête SOA pour le nom de domaine `domain.tld`.

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

|Élement dans le résultat|Description|Correspondance dans l'exemple ci-dessus|
|---|---|---|
|**NS (Name Server)**|Serveur DNS principal déclaré pour le nom de domaine `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Adresse e-mail du responsable de la zone DNS.|`tech.ovh.net` (le point entre les termes `tech` et `ovh` doit être remplacé par un `@`).|
|**Serial number**|Numéro de série unique qui s'incrémente à chaque modification de la zone DNS.<br>Il est généralement composé de la date de mise à jour au format `YYYYMMDD` suivi du nombre de mises à jour réalisé dans la journée.|`2025091801` : Ici 2 mises à jour (`00` pour 1, `01` pour 2, etc.) ont été faites le 18/09/2025.|
|**Refresh time**|Intervalle (en secondes) entre chaque actualisation des serveurs DNS secondaires (composant le réseau DNS) avec le serveur DNS principal.|`86400` (24 heures).|
|**Retry time**|Intervalle (en secondes) entre chaque tentative de réactualisation des paramètres des serveurs DNS secondaires (composant le réseau DNS) avec le serveur DNS principal si celui-ci ne répond pas ou est indisponible.|`3600` (1 heure).|
|**Expire time**|Délai (en secondes) après lequel les serveurs DNS secondaires (composant le réseau DNS) cessent de répondre aux requêtes DNS si le serveur DNS principal ne s'actualise plus avec eux.|`3600000` (1000 heures, 41,67 jours).|
|**Minimum TTL**|Durée de vie minimale (en secondes) durant laquelle les enregistrements DNS de la zone DNS sont mis en cache sur les serveurs DNS secondaires (composant le réseau DNS).|`300` (5 minutes).|

///

<br>

/// details | Comment vérifier la configuration de ma zone DNS ?

Voici différentes solutions pour vérifier la configuration d'une zone DNS :

- **Un outil de vérification en ligne** : Plusieurs outils en ligne permettent de vérifier la configuration de votre zone DNS. Retrouvez-les directement grâce à un navigateur Internet (Chrome, Edge, Firefox, Safari, etc.) en saisissant les mots-clés adéquats (par exemple : « vérifier propagation DNS ») dans un moteur de recherche.

- **La commande « dig »** : Si vous avez accès à un *terminal* depuis un système d'exploitation Linux ou macOS, vous pouvez utiliser la commande `dig` pour vérifier la configuration de votre zone DNS sur le réseau DNS.

- **La commande « nslookup »** : La commande `nslookup` est disponible sur la plupart des systèmes d'exploitation et permet également de vérifier la configuration de votre zone DNS.

- **Depuis votre espace client OVHcloud** : Pour cela, suivez ces étapes (si la zone DNS active de votre nom de domaine est gérée chez OVHcloud) :
    1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
    2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
    3. Dans le tableau de la page qui s'affiche, vous visualiserez l'ensemble des enregistrements DNS déclarés pour votre nom de domaine.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

/// details | Comment vérifier la propagation des modifications effectuées dans ma zone DNS ?

> [!primary]
>
> Avant de poursuivre, sachez que :
>
> - La propagation d'une modification réalisée dans une zone DNS peut prendre jusqu'à **24** heures.
> - La propagation d'une modification de serveurs DNS pour un nom de domaine peut prendre jusqu'à **48** heures.

Vous pouvez cependant vérifier que la propagation DNS s'effectue correctement à l'aide de l'enregistrement DNS de type **S**tart **O**f **A**uthority (**SOA**).

Dans un premier temps, ouvrez un terminal compatible sur votre ordinateur, puis exécutez la ligne de commande suivante (remplacez `domain.tld` par votre propre nom de domaine) :

```bash
dig domain.tld soa
```

> [!primary]
>
> Les systèmes d'exploitation Linux et macOS disposent nativement d'un terminal compatible pour exécuter ce type de commande. Si vous utilisez un autre système d'exploitation, tel que Windows par exemple, vous devrez installer au préalable un terminal compatible pour exécuter la commande.
>
> Par ailleurs, sachez qu'il existe aussi des outils disponibles sur Internet pour vérifier la propagation DNS.

Une fois la commande exécutée, vous obtenez un résultat similaire à celui-ci :

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

Dans ce résultat, récupérez le **numéro de série** (dans notre exemple : `2025091801`).

Il a la forme suivante `YYYYMMDDRR` où :

- `YYYYMMDD` : Représente la date (l'année, le mois et le jour) de la dernière mise à jour DNS propagée pour le nom de domaine.
- `RR` : Représente le nombre de mises à jour qui ont été réalisées à la date indiquée. Par exemple, si une seule mise à jour a été effectuée sur une journée, il aura la valeur `00`. Si 2 mises à jour ont été effectuées sur la même journée, il aura alors la valeur `01` et ainsi de suite.

Une fois le numéro de série récupéré, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Modifier en mode textuel`{.action}.
4. Dans la fenêtre qui s'ouvre, repérez la deuxième ligne qui, pour reprendre notre exemple, serait équivalente à celle-ci : `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
5. Comparez le numéro de série récupéré via le terminal avec celui qui s'affiche dans votre espace client OVHcloud.

Cas n°1 - Les deux numéros de série correspondent :

Cela signifie que la propagation DNS s'effectue correctement. Vous n'avez rien d'autre à faire.

Cas n°2 - Les deux numéros de série sont différents : 

Cela signifie que soit :

- La propagation DNS de vos modifications n'est pas totalement terminée (vous êtes encore dans les délais standards de propagation DNS). Dans ce cas, patientez le temps que la propagation DNS soit totalement terminée (**24** heures pour une modification de zone DNS et **48** heures pour une modification des serveurs DNS), puis réitérez l'opération.
- La propagation DNS ne s'effectue pas correctement. Dans ce cas, depuis la fenêtre `Modifier en mode textuel`{.action} qui s'est ouverte à l'étape **4**, cliquez directement **sans effectuer de modifications** sur le bouton `Suivant`{.action}, puis sur `Valider`{.action}. Une nouvelle propagation DNS sera alors initiée.

///

/// details | Comment restaurer une zone DNS ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Voir l'historique de ma zone DNS`{.action}.
4. Dans le tableau de la page qui s'affiche, identifiez la ligne correspondant à la sauvegarde de la zone DNS de votre choix, puis cliquez sur l'icône présente dans la colonne `Restaurer`{.action}. La configuration actuelle de la zone DNS sera remplacée par la sauvegarde choisie.

> [!primary]
>
> La propagation de la modification d'une zone DNS peut prendre jusqu'à **24** heures.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Gérer l’historique d'une zone DNS](/pages/web_cloud/domains/dns_zone_history) ».

///

/// details | Comment récupérer une copie de ma zone DNS ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Voir l'historique de ma zone DNS`{.action}.
4. Dans le tableau de la page qui s'affiche, identifiez la ligne correspondant à la sauvegarde de la zone DNS de votre choix, puis cliquez sur l'icône présente dans la colonne `Télécharger`{.action}. La copie de la zone DNS sera téléchargée au format *.txt*.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Gérer l’historique d'une zone DNS](/pages/web_cloud/domains/dns_zone_history) ».

///

/// details | Puis-je créer une zone DNS pour un sous-domaine ?

Vous pouvez créer une zone DNS pour un sous-domaine.

Pour ce faire, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis cliquez sur le bouton `Commander`{.action} en haut à droite du tableau qui s'affiche.
3. Sur la page qui apparaît, renseignez le sous-domaine (par exemple : *www.domain.tld*) pour lequel vous souhaitez créer une zone DNS OVHcloud. Patientez quelques instants le temps que l'outil effectue des vérifications concernant le sous-domaine.
4. Dès que la vérification aboutit, choisissez d'activer ou non les entrées minimales pour la zone DNS que vous allez créer. Ce choix n'est pas définitif puisque vous pourrez toujours [éditer les enregistrements de la zone DNS](/pages/web_cloud/domains/dns_zone_edit) par la suite.
5. Une fois votre choix effectué, poursuivez les étapes jusqu'à la création de la zone DNS.

Cette zone DNS va être installée sur 2 serveurs DNS OVHcloud. Vous devrez déclarer les noms de ces deux serveurs dans la zone DNS active du nom de domaine de votre sous-domaine (par exemple, *www.domain.tld* est un sous-domaine du nom de domaine *domain.tld*).

Pour récupérer les noms des 2 serveurs DNS, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le sous-domaine concerné.
3. En haut à gauche de la page qui s'affiche, récupérez les 2 noms des serveurs DNS présents sous la mention `Name Servers`. Ces derniers ont l'une des 2 formes suivantes :

- `dnsXXX.ovh.net` et `nsXXX.ovh.net` **ou** `dnsXXX.ovh.ca` et `nsXXX.ovh.ca` (où chaque `X` représente un chiffre compris entre `0` et `9`).
- `dns200.ovh.me` et `ns200.anycast.me`.

Une fois les 2 serveurs DNS en votre possession, déclarez-les à l'aide de deux enregistrements de type NS dans la zone DNS active du nom de domaine dont provient votre sous-domaine.

Cas n°1 - La zone DNS active du nom de domaine dont provient votre sous-domaine est chez OVHcloud :

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Ajouter une entrée`{.action}, puis sélectionnez le type d'enregistrement DNS de type `NS`{.action} pour déclarer un serveur DNS.
4. Dans la fenêtre qui s'ouvre, renseignez le sous-domaine concerné dans le champ `Sous-domaine *`{.action} (par exemple, écrivez **uniquement** *www* si votre nom de domaine est *domain.tld* et que votre sous-domaine complet est *www.domain.tld*). Dans le champ `Cible *`{.action}, renseignez **un seul** des 2 serveurs DNS.
5. Cliquez sur `Suivant`{.action}, puis sur `Valider`{.action}.

Réitérez l'opération pour le second serveur DNS restant à déclarer.

Cas n°2 - La zone DNS active du nom de domaine dont provient votre sous-domaine n'est pas chez OVHcloud :

Vous devrez alors déclarer les 2 serveurs DNS pour votre sous-domaine directement auprès du fournisseur DNS de votre nom de domaine (dont provient votre sous-domaine).

> [!primary]
>
> Dans les 2 cas, la propagation de la modification d'une zone DNS peut prendre jusqu'à **24** heures.

> [!success]
>
> Retrouvez plus de détails dans les guides suivants :
>
> - [Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create)
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Comment rediriger tous les sous-domaines d'un même nom de domaine vers la même adresse IP ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Ajouter une entrée`{.action}, puis sélectionnez le type d'enregistrement DNS de type `A`{.action} pour une IPv4 (par exemple : `203.0.113.0`) ou de type `AAAA`{.action} pour une IPv6 (par exemple : `2001:db8:1:1b00:203:0:113:0`).
4. Dans la fenêtre qui s'ouvre et dans le champ de saisie intitulé `Sous-domaine *`{.action}, renseignez la valeur `*`. L'astérisque `*` représentera l'ensemble des sous-domaines (par exemple : `www.domain.tld` ou encore `ovhcloud.domain.tld`) de votre nom de domaine. Complétez le champ `Cible *`{.action} par l'adresse IP désirée.
5. Cliquez sur `Suivant`{.action}, puis sur `Valider`{.action}.

> [!primary]
>
> La propagation de la modification d'une zone DNS peut prendre jusqu'à **24** heures.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

/// details | Puis-je mettre en place un wildcard dans ma zone DNS ?

Il est possible de mettre en place un wildcard dans une zone DNS OVHcloud.

Pour cela, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
3. Sur la droite ou en dessous du tableau, cliquez sur `Ajouter une entrée`{.action}, puis sélectionnez le type d'enregistrement DNS pour lequel vous souhaitez mettre en place un wildcard.
4. Dans la fenêtre qui s'ouvre et dans le champ de saisie intitulé `Sous-domaine *`{.action}, renseignez la valeur `*`. L'astérisque `*` représentera l'ensemble des sous-domaines (par exemple : `www.domain.tld` ou encore `ovhcloud.domain.tld`) de votre nom de domaine. Complétez les autres champs par les valeurs désirées.
5. Cliquez sur `Suivant`{.action}, puis sur `Valider`{.action}.

> [!primary]
>
> La propagation de la modification d'une zone DNS peut prendre jusqu'à **24** heures.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

<br>

/// details | J'ai supprimé accidentellement ma zone DNS et je souhaite la restaurer, que faire ?

OVHcloud envoie un e-mail contenant une copie de la zone DNS au format texte une fois votre zone DNS supprimée, afin que vous puissiez la restaurer ultérieurement si besoin.
Cet e-mail est envoyé à l'adresse e-mail associée à votre compte client OVHcloud.

> [!success]
>
> Si vous n'avez pas reçu cet e-mail, vérifiez dans vos courriers indésirables ou suivez ces étapes :
>
> 1. Connectez-vous à votre [espace client OVHcloud](/links/manager), cliquez sur votre nom en haut à droite, puis sur `Mon Compte`{.action}.
> 2. Sur la page qui s'affiche, cliquez sur l'onglet `Emails reçus`{.action}.
> 3. Dans le tableau qui apparaît et parmi la liste des e-mails reçus, cliquez sur l'email concerné pour en afficher le contenu.

Pour restaurer votre zone DNS, suivez ces étapes :

1. Téléchargez le fichier contenant la zone DNS depuis l'e-mail reçu.
2. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
3. Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
4. Sélectionnez l'onglet `Zone DNS`{.action} une fois positionné sur le nom de domaine concerné. **Si la zone DNS est inactive, activez-la depuis cet onglet.**
5. Sur la droite ou en dessous du tableau, cliquez sur `Modifier en mode textuel`{.action}.
6. Dans la fenêtre qui s'ouvre, remplacez tout le contenu qui s'affiche par la copie de la zone DNS supprimée. Cliquez ensuite sur `Suivant`{.action}, puis sur `Valider`{.action}.

> [!primary]
>
> La propagation de la modification d'une zone DNS peut prendre jusqu'à **24** heures.

> [!success]
>
> Retrouvez plus de détails dans les guides suivants :
>
> - [Créer une zone DNS OVHcloud pour un nom de domaine](/pages/web_cloud/domains/dns_zone_create)
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Gérer l’historique d'une zone DNS](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Comment annuler une demande de suppression de ma zone DNS ?

Pour chaque demande de suppression d'un service, un e-mail demandant la confirmation de suppression est envoyé à l'adresse e-mail associée à votre compte client OVHcloud.

Si vous n'avez pas cliqué sur le lien de confirmation présent dans cet e-mail, rassurez-vous, votre zone DNS ne sera pas supprimée.

Dans le cas contraire, la suppression est initiée et ne peut plus être annulée. L'opération de suppression peut prendre jusqu'à 3 jours avant que vous puissiez recréer une zone DNS OVHcloud pour votre nom de domaine.

///

/// details | Je ne parviens pas à activer une zone DNS pour mon nom de domaine, que faire ?

Cette situation survient lorsqu'une zone DNS existe déjà pour votre nom de domaine chez OVHcloud.

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Zones DNS`{.action}, puis vérifiez si le nom de domaine concerné apparaît.

Cas n°1 - Le nom de domaine concerné apparaît dans la liste :

Cela signifie que la zone DNS du nom de domaine existe déjà dans votre [espace client OVHcloud](/links/manager). Vous pourrez la gérer directement à cet endroit.

Cas n°2 - Le nom de domaine concerné n'apparaît pas dans la liste :

Cela signifie que la zone DNS du nom de domaine est gérée par un autre identifiant client OVHcloud que le vôtre.

Conformément au **R**èglement **G**énéral sur la **P**rotection des **D**onnées (**RGPD**), l'identifiant client sur lequel se trouve la zone DNS restera confidentiel.

Dans cette situation et si vous ne connaissez pas cet autre identifiant client, nous vous invitons à ouvrir un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) pour récupérer la gestion de la zone DNS.

///

/// details | Pourquoi je ne retrouve pas l'onglet « GLUE » dans mon espace client OVHcloud ?

La fonctionnalité n'est pas disponible avec toutes les extensions de noms de domaine.
Si l'onglet n'apparaît pas dans votre [espace client OVHcloud](/links/manager), c'est que l'option « GLUE » est indisponible pour votre nom de domaine.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Personnaliser les serveurs DNS d'un nom de domaine (Glue records)](/pages/web_cloud/domains/glue_registry) ».

///

## Serveurs DNS

> [!primary]
>
> La modification des serveurs DNS est une manipulation sensible et peut engendrer une interruption des services associés à votre nom de domaine (hébergement web, e-mail, etc.). En cas de doute, n'hésitez pas à contacter un [prestataire spécialisé](/links/partner).

/// details | Comment modifier mes serveurs DNS ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
3. Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le nom de domaine concerné.
4. Pour modifier les serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.

Vous pourrez modifier les serveurs DNS pour votre nom de domaine sur la page qui apparaît.

> [!primary]
>
> La propagation de la modification des serveurs DNS déclarés pour un nom de domaine peut prendre jusqu'à **48** heures.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | Comment personnaliser mes serveurs DNS ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
3. Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le nom de domaine concerné.
4. Pour modifier les serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.

Vous pourrez personnaliser les serveurs DNS pour votre nom de domaine sur la page qui apparaît.

> [!primary]
>
> La propagation de la modification des serveurs DNS déclarés pour un nom de domaine peut prendre jusqu'à **48** heures.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | Comment remplacer mes serveurs DNS par ceux d'OVHcloud ?

Suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.
3. Sélectionnez l'onglet `Serveurs DNS`{.action} une fois positionné sur le nom de domaine concerné.
4. Pour modifier les serveurs DNS, cliquez sur le bouton `Modifier les serveurs DNS`{.action} situé à droite du tableau « serveurs DNS ». En fonction de la résolution de votre écran, le bouton peut se trouver en dessous du tableau.

Vous pourrez remplacer les serveurs DNS pour votre nom de domaine par ceux d'OVHcloud sur la page qui apparaît.

> [!primary]
>
> La propagation de la modification des serveurs DNS déclarés pour un nom de domaine peut prendre jusqu'à **48** heures.

> [!success]
>
> Retrouvez tous les détails dans notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | Dans mon espace client, j'ai un message d'erreur m'indiquant que je n'utilise pas les serveurs DNS d'OVHcloud pour mon nom de domaine, que faire ?

Dans votre [espace client OVHcloud](/links/manager), ce message indique uniquement que la zone DNS créée pour votre nom de domaine n'est pas sa zone DNS active.

En d'autres termes, cela signifie que la configuration présente dans cette zone DNS n'est pas celle qui est actuellement appliquée à votre nom de domaine.

Toutefois, vérifiez que les serveurs DNS mentionnés dans le message d'erreur correspondent bien aux serveurs DNS que vous souhaitez appliquer à votre nom de domaine. Vérifiez ensuite la configuration de la zone DNS déclarée sur ces mêmes serveurs DNS auprès de votre fournisseur DNS.

Si vous souhaitez utiliser les serveurs DNS d'OVHcloud pour votre nom de domaine, vous pourrez préparer la configuration DNS de la zone DNS présente chez OVHcloud pour que celle-ci corresponde à vos besoins, puis l'activer pour votre nom de domaine.

> [!success]
>
> Retrouvez plus de détails dans les guides suivants :
>
> - [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Je ne parviens pas à modifier les serveurs DNS d'un nom de domaine depuis mon espace client OVHcloud, que faire ?

Cela signifie que vous ne disposez que de la gestion de la zone DNS du nom de domaine mais pas celle du nom de domaine en lui-même.

Pour le vérifier, suivez ces étapes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
2. Cliquez sur le menu `Noms de domaine`{.action}, puis vérifiez si le nom de domaine concerné apparaît.

Cas n°1 - Le nom de domaine n'apparaît pas dans la liste :

Cela signifie que le nom de domaine n'est pas géré depuis votre [espace client OVHcloud](/links/manager). Effectuez une requête [WHOIS](/links/web/domains-whois) avec ce dernier pour connaître l'endroit où il est enregistré.

Vous pourrez ensuite faire l'une des actions suivantes (si vous êtes le titulaire déclaré sur le WHOIS du nom de domaine): 

- Le nom de domaine est enregistré chez OVHcloud : Vous pourrez effectuer une [procédure de récupération des contacts](/links/transversal/procedure-contact-change) pour que votre nom de domaine soit géré dans votre [espace client OVHcloud](/links/manager).
- Le nom de domaine n'est pas enregistré chez OVHcloud : Vous pourrez réaliser une opération de [transfert entrant](/pages/web_cloud/domains/transfer_incoming_generic_domain) vers OVHcloud pour que votre nom de domaine soit géré dans votre [espace client OVHcloud](/links/manager).

Cas n°2 - Le nom de domaine apparaît dans la liste :

Cela signifie que vous ne disposez pas des droits suffisants pour gérer le nom de domaine depuis votre [espace client OVHcloud](/links/manager). Effectuez une requête [WHOIS](/links/web/domains-whois) pour vérifier que vous êtes bien déclaré en tant que titulaire du nom de domaine.

Vous pourrez ensuite effectuer une [procédure de récupération des contacts](/links/transversal/procedure-contact-change) pour que votre nom de domaine soit entièrement géré dans votre [espace client OVHcloud](/links/manager).

///

## Aller plus loin <a name="go-further"></a>

[FAQ e-mails OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Hébergement Web - FAQ](/pages/web_cloud/web_hosting/faq-web_hosting)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).