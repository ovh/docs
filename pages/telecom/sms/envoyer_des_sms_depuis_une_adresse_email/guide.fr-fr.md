---
title: 'Envoyer des SMS depuis une adresse e-mail'
slug: envoyer-sms-depuis-adresse-email
excerpt: 'Découvrez comment envoyer des SMS depuis une adresse email'
section: 'Envoyer des SMS'
---

**Dernière mise à jour le 13/11/2019**

## Objectif

Grâce à un compte SMS OVHcloud, vous pouvez envoyer des SMS depuis votre adresse e-mail, peu importe l'expéditeur.

## Prérequis

- Disposer d’un compte SMS OVHcloud avec des crédits SMS.
- Disposer d'une adresse e-mail, quel qu'en soit le fournisseur.


## En pratique

Tout webmail ou client de messagerie pourra être utilisé pour cette méthode.

L'adresse du destinataire de l'e-mail sera : email2sms@ovh.net

Le sujet contiendra l'identifiant de votre compte SMS, ainsi que les paramètres du SMS comme l'expéditeur et le(s) numéro(s) de téléphone destinataire(s).

Le corps du texte contiendra le message à envoyer par SMS. Il n’y a pas de limite du nombre de caractères. Toutefois, 1 SMS est limité à 160 caractères en encodage 7bit.

Si votre texte dépasse cette limite, le message sera découpé en plusieurs SMS :

- 1 SMS -> 160 caractères au total (160 par sms)
- 2 SMS -> 306 caractères au total (153 par sms)
- 3 SMS -> 459 caractères au total (153 par sms)

Assurez-vous que vous disposez d'un nombre suffisant de crédits SMS avant d'effectuer votre envoi.

> [!primary]
>
Si votre texte contient 2 sauts de ligne (double /n) ou si vous écrivez le paramètre "--end", tout ce qui se trouve ensuite ne sera pas pris en compte pour l'envoi.
Pour envoyer un SMS contenant ces éléments, il vous faudra le faire depuis l'espace client ou via les API.
>

Pour plus d'informations sur les caractères autorisés en encodage 7bit, reportez-vous à [l'annexe](https://docs.ovh.com/fr/sms/envoyer-sms-depuis-adresse-email/#annexe_2) en bas de ce guide.

### Étape 1 : inclure les champs obligatoires dans votre e-mail

Ouvrez votre webmail ou client de messagerie puis créez un e-mail. 

Renseignez l'adresse suivante en tant que destinataire : email2sms@ovh.net

Votre sujet devra avoir la forme suivante : 


```
CompteSMS:UtilisateurSMS:MotDePasse:Expediteur:Destinataire
```



- CompteSMS = Compte SMS à utiliser (ex : sms-ab1234-1).

- UtilisateurSMS = Utilisateur SMS à utiliser sur le compte associé.

- MotDePasse = Mot de passe de l'utilisateur.

- Expediteur = Un des expéditeurs déclarés sur votre compte SMS.

- Destinataire = Numéro de téléphone du destinataire du message.

Vous devriez obtenir un résultat équivalent à l'image ci-dessous. Par défaut, une fois votre e-mail envoyé, le SMS est envoyé immédiatement.


![](images/send-sms-through-email1.png){.thumbnail}

> [!primary]
>**Uniquement pour les comptes OVHcloud en France :**
>
Si vous souhaitez utiliser un numéro court permettant la réponse, renseignez senderForResponse=1 en tant qu'expéditeur.
>

Vous pouvez consulter le guide suivant pour toute précision sur les utilisateurs SMS : [Tout savoir sur les utilisateurs SMS](https://docs.ovh.com/fr/sms/tout_savoir_sur_les_utilisateurs_sms/)


### Étape 2 : ajouter des champs facultatifs

Vous pouvez ajouter des champs supplémentaires dans le sujet, tels que :


```
CompteSMS:UtilisateurSMS:MotDePasse:Expediteur:Destinataire1,Destinataire2:DateEnvoi:ClasseSMS:smsCoding:NoStop
```



- Destinataire1 = Numéro de téléphone du destinataire du message, il est possible d'ajouter des destinataires à la suite, séparés par une virgule ",".

- DateEnvoi = Pour définir une date d'envoi différé, au format hhmmjjMMAAAA (ex : 183019112019 pour un envoi le 19/11/2019 à 18h30). 

- ClasseSMS = Type de classe Du SMS, au format N = 1 chiffre (voir la première note d'information ci-dessous).

- smsCoding = Encodage du SMS, au format N = 1 chiffre (voir la seconde note d'information ci-dessous).

- NoStop = Pour ne pas afficher "STOP au XXXXX" à la fin du message pour un SMS à caractère non publicitaire, au format N = 1 chiffre (ex : NoStop=1 pour ne pas l'afficher).

Voici un exemple d'e-mail comprenant des champs facultatifs :

![](images/send-sms-through-email3.png){.thumbnail}

Il est possible de déclarer les différents éléments constituant le sujet de deux manières différentes :

- Soit dans l'ordre établi ci-avant, avec les paramètres séparés par ":" ou ";" entre chaque élément.
- Soit dans n'importe quel ordre, mais en déclarant chaque élément, séparés entre eux par un ":" ou ";" : Account=; Login=; Password=; From=; To=; Deferred=; Class=.

> [!primary]
>
> **Détail des possibilités pour les *class***
> 
> *classe 0 :* Le message est directement affiché à l’utilisateur sur l’écran du mobile à la réception. Le message n’est enregistré ni dans la mémoire du téléphone, ni dans la carte SIM. Il est effacé dès que l’utilisateur a validé la visualisation.
> 
> *classe 1 :* Le message est enregistré dans la mémoire du téléphone et si cette mémoire est pleine, dans la carte SIM par défaut.
> 
> *classe 2 :* Le message est enregistré sur la carte SIM.
> 
> *classe 3 :* Le message est transféré sur un équipement externe connecté au mobile (PDA, PC portable…).
>

> [!primary]
>
> **Détail des possibilités pour le *smsCoding***
> 
> *1* pour l'encodage sur 7bit
> 
> *2* pour l'encodage Unicode
> 
>Si vous modifiez l’encodage pour l'encodage Unicode, votre SMS fera 70 caractères maximum contre 160 sur l'encodage 7bit.
>

### Étape 3 : gérer les destinataires du SMS

Le(s) destinataire(s) du message peut/peuvent être géré(s) de plusieurs manières.


- Soit comme vu précédemment, en le(s) écrivant au format international dans le sujet de l'email envoyé.

- Soit en ajoutant à l'e-mail, en tant que pièce jointe, un fichier texte (format txt) nommé "contact" qui contiendra le(s) numéro(s) de téléphone destinataire(s), au format international (exemple en France : +33xxxxxxxxx), à raison d'un numéro par ligne dans le fichier.



### Étape 4 : analyser le rapport d'envoi

Une fois votre envoi effectué, vous recevrez par e-mail un rapport d'envoi. Le rapport ci-dessous indique que l'envoi s'est effectué avec succès :

![](images/send-sms-through-email4.png){.thumbnail}

Si vous avez rencontrez une erreur lors de l'envoi, cette dernière sera notifiée dans le rapport, comme dans l'exemple ci-dessous :

![](images/send-sms-through-email5.png){.thumbnail}

## Annexe

La taille maximum d’un SMS est de 160 caractères (norme GSM 03.38).

Les deux tableaux ci-dessous listent les caractères autorisés en encodage 7bit. Les caractères du tableau "Extensions" comptent double. L’utilisation de caractères ne figurant pas dans ces tableaux provoquera le basculement de l’encodage en Unicode et réduit à 70 caractères la taille maximale d’un SMS.

![Liste des caractères SMS](images/smsauthorizedcharacters.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
