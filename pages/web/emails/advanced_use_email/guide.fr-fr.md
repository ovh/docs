---
title: Utilisation avancee des e-mails
slug: utilisation-avancee-des-e-mails
legacy_guide_number: 2117
excerpt: Vous trouverez dans ce guide differentes informations concernant les services e-mails chez OVH.
section: Utilisation avancée
order: 1
---


## Questions frequentes

### Comment modifier le mot de passe de mes adresses e-mail ?
- Pour cela dans un premier temps, sélectionnez votre plateforme, rendez-vous dans " e-mail " -- " Changer le mot de passe " en cliquant sur l'engrenage a coté de l'e-mail que vous souhaitez modifier.


![hosting](images/img_3916.jpg){.thumbnail}

- Renseignez le nouveau mot de passe, et confirmez-le.

*L'ancien mot de passe n'est pas nécessaire.*

Attention le mot de passe doit respecter certaines conditions :

- Minimum 9 caractères.
- Maximum 30 caractères.
- Aucun caractère accentué.

Cliquez sur "Valider" pour terminer la modification de votre mot de passe.

*La modification de votre mot de passe peut prendre quelques minutes avant d'être effective.*


### Comment configurer mes adresses e-mail ?
Plusieurs guides sont à votre disposition pour vous aider à configurer votre adresse e-mail, sur vos différents logiciels de messagerie. Vous pouvez les consulter via ce lien :

- [Guides configuration e-mail]({legacy}1474){.ref} .


### Comment configurer les listes de diffusion (mailing-lists) ?
Une liste de diffusion ou mailing-list est une adresse e-mail qui renvoie les messages reçus à une liste d'adresses e-mail, qui peuvent être chez OVH ou chez un autre prestataire.

Le fonctionnement d'une mailing-list est un peu plus complexe que celui des autres types d'adresses e-mail.

Pour savoir comment administrer une mailing-list :

[Un guide est disponible ici]({legacy}1596){.ref} .


### Comment consulter les messages d'un compte ?
Vous avez deux possibilités :

- Passer par nos interfaces webmail. Pour cela, allez sur le [Webmail](https://mail.ovh.net/){.external} , choisissez l'interface RoundCube, entrez votre adresse e-mail complète et votre mot de passe (voici un [guide concernant RoundCube]({legacy}1302){.ref} pour vous aider).
- Utiliser un logiciel de messagerie. Pour savoir comment configurer votre logiciel de messagerie :

[Un guide est disponible ici]({legacy}1474){.ref} .


### Comment créer une redirection e-mail ?
Vous désirez rediriger vos adresses e-mail vers une autre ?

Voici un guide qui vous aide à mettre en place ce type de redirection :

[Un guide est disponible ici]({legacy}2001){.ref} .


### Comment mettre en place ou supprimer un repondeur ?
Vous désirez créer un répondeur pour vos adresses e-mail ?

Voici un guide pour vous aider à le réaliser :

[Un guide est disponible ici](http://guides.ovh.com/CréerRepondeur){.external} .


### Comment configurer des filtres e-mail ?
Vous désirez créer des filtres pour vos adresses e-mail ?

Voici un guide pour vous aider à le réaliser :

[Un guide est disponible ici]({legacy}1973){.ref} .


### Comment gerer mon enregistrement SPF ?
Vous désirez gérer vos enregistrements SPF pour vos adresses e-mail ?

Voici un guide pour vous aider à le réaliser :

[Un guide est disponible ici]({legacy}2028){.ref} .


### Comment recuperer une sauvegarde de mes e-mails effaces par erreur ?
Suivez [le guide de récupération de vos e-mails perdus](../outil_time_machine_-_recuperer_un_mail_supprime/guide.fr-fr.md){.ref}.


## Diagnostic

### Que verifier dans le cas d'un souci d'e-mail ?
En cas de souci sur les envois ou la réception de vos e-mails, voici quelques points possibles à vérifier :

- Mon offre e-mail est-elle active ? Pour que vos e-mails soient fonctionnels, vous devez posséder une offre e-mail active. Si vous possédez des e-mails associés à une offre d'hébergement, vérifiez qu'elle ne soit pas expirée. Il vous est possible de voir cette information directement dans l'espace client. Au même titre votre nom de domaine doit lui aussi être actif.
- Les e-mails sont-ils fonctionnels depuis le webmail ? Afin de vous assurer que le souci n'est pas lié à une erreur de configuration, réalisez un test d'envoi et de réception directement via le webmail d'OVH. Si tout fonctionne correctement, vérifiez la configuration de votre logiciel via les guides mis à votre disposition.
- Vous ne pouvez pas vous connecter au webmail ? Assurez-vous d'avoir le bon mot de passe, si nécessaire il vous est possible de le modifier. Pour cela reportez-vous aux questions précédentes de ce guide.
- Une tâche travaux est-elle en cours sur mon service ? Il vous est possible de vérifier les différentes tâches travaux actuellement en cours sur [cette page](http://travaux.ovh.net/){.external} .
- Le pointage de mon nom de domaine est-il correct ? Vérifiez que votre nom de domaine utilise correctement les serveurs e-mail (Enregistrement de type MX) de l'offre e-mail d'OVH. Référez-vous à [ce guide]({legacy}2003){.ref} .


### Gestion du spam OVH
A savoir : Il est possible que vous receviez directement dans votre boîte de réception du spam. Dans ce cas, pensez à vérifier ces différents points :

- Les serveurs e-mail de mon nom de domaine sont-ils [configurés avec l'antispam](#enregistrement_mx){.external} ?
- Les e-mails sont-ils tagués en tant que spam ?

*Si vos e-mails ont dans leur titre [spam] alors ils sont correctement tagués par notre anti-spam, il vous appartient de créer une règle afin de les rediriger vers un dossier courrier indésirable par exemple. Même tagués en tant que spam ou virus, vos e-mails ne sont pas automatiquement supprimés de nos serveurs, dans le but d'éviter les faux positifs (e-mail tagué en spam alors qu'il est légitime selon vos critères).*


## Enregistrement MX

### Valeurs
Si vous utilisez l'offre e-mail comprise dans votre offre hébergement, ou via l'offre MxPlan, vous devez utiliser les enregistrements MX d'OVH.

Pour cela configurez votre zone DNS avec :

- mx1.mail.ovh.net
- mx2.mail.ovh.net
- mx3.mail.ovh.net

Vous devrez donc modifier ces enregistrements dans votre Zone DNS.

- Si les serveurs DNS utilisés sont les serveurs DNS d'OVH, dans ce cas il vous est possible de les modifier dans votre espace client, section **Domaines**.
- Si vos serveurs DNS sont gérés par un prestataire externe, nous vous invitons à le contacter afin d'effectuer la modification de ces champs.


## Limitation de l'offre

### Généralités
*Ces différentes limites peuvent être dépassées pour **des besoins professionnels** grâce à* [l'offre Exchange 2013](https://www.ovh.com/fr/emails/hosted-exchange-2013/){.external} *.*

Limites d'envoi

**200** *e-mails / heure / compte et* **300** *e-mails / heure / IP.*

Quota des boites e-mail

*Chaque adresse e-mail à un quota limite de* **5** *Go.*

Taille maximum des pièces jointes

*Les pièces jointes à vos e-mails auront une taille maximum de* **20 Mo** *avec le webmail,* **100 Mo** *via un client lourd de messagerie.*

Maximum de personnes en copie d'un e-mail

*Chaque e-mail envoyé pourra avoir en destinataire maximum* **100** *adresses e-mail. Un e-mail envoyé avec 100 destinataires en copie comptera au total pour 100 e-mails envoyés.*

**A savoir**

- En souscrivant à l'offre MxPlan, vous ne bénéficiez pas d'un ajout de comptes e-mail, mais d'une substitution de comptes.
- Tout MxPlan est livré avec une adresse " postmaster@ ". Cette adresse ne peut être modifiée, et n'est pas comptabilisée dans le nombre de compte e-mail.


## Aide

### Offre MxPlan ?
*Un guide est disponible concernant l'offre MxPlan* : []({legacy}1864){.ref}


### Comment augmenter le quota de mon adresse e-mail ?
*Pour tout hébergement mutualisé, ou pour les offres MxPlan, vous pouvez augmenter la taille de vos comptes e-mail de 25 Mo à 5Go.*

Il vous est possible dans votre [espace client](https://www.ovh.com/manager/web/){.external} d'augmenter le quota de votre adresse e-mail.

- Pour cela dans un premier temps, sélectionnez votre plateforme, rendez-vous dans " e-mail " -- " Modifier le compte " en cliquant sur l'engrenage a coté de l'e-mail que vous souhaitez modifier.


![hosting](images/img_3915.jpg){.thumbnail}

- Sélectionnez le quota souhaité pour le compte e-mail concerné.
- Cliquez sur " Valider " pour confirmer votre demande.


![hosting](images/img_3914.jpg){.thumbnail}

*Une notification va apparaitre afin de vous indiquer que la modification est actuellement en cours :*

*L'opération peut prendre de 5 à 10 minutes.* **Qu'est-ce que c'est le quota ?** *Votre compte e-mail dispose d'un espace d'une taille spécifique. Quand nous parlons de quota, il s'agit donc de cet espace alloué à votre compte e-mail sur notre serveur e-mail.*

**Où voir le quota ?** *Directement sur le serveur e-mail, par exemple via le* [webmail](https://mail.ovh.net/){.external} *. Cette interface vous donne directement accès au serveur, vous pouvez voir votre quota. Lorsque vous consultez votre courrier, votre logiciel de messagerie retire les mails du serveur, et les stocke sur votre machine. Les personnes qui utilisent exclusivement des logiciels de courrier comme Outlook ont rarement un overquota, à moins d'avoir activé l'option "**laisser une copie du message sur le serveur**".*

**C'est quoi un overquota ?** *Lorsque vous dépassez la taille allouée à votre compte, le serveur e-mail n'est plus dans la capacité de recevoir votre courrier. Il refuse donc le nouveau courrier entrant et ajoute la mention d'information : "**user is over quota**" pour l'expéditeur.*

**Comment faire descendre mon quota ?** *Supprimer : Il suffit de supprimer des fichiers que vous stockez sur votre serveur e-mail via le* [webmail](https://mail.ovh.net/){.external} *. Si vous le faites via l'interface du webmail, il ne faut pas oublier de vider la poubelle aussi, dans laquelle les messages supprimés sont une dernière fois retenus, au cas où vous auriez supprimé un mauvais message.*