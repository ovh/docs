---
title: API SMS Cookbook
excerpt: Ce guide présente quelques combinaisons possible avec l'API pour utiliser la plateforme SMS d'OVH.
updated: 2018-03-26
---

**Dernière mise à jour le 26/03/2018**

## 
L’envoi de SMS au fil de l’eau correspond à un appel webservice pour envoyer régulièrement un à un des SMS. Pour chaque SMS à envoyer nous allons donc réaliser un appel Webservice en POST à la méthode [/sms/{serviceName}/jobs](https://eu.api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

ServiceName correspondant à votre compte SMS. Vous pouvez le récupérer soit dans votre manager, soit en réalisant un appel GET à la méthode [/sms](https://api.ovh.com/console/#/sms#GET). 
Voici un exemple : /sms/sms-XXXXXX-1/jobs

Paramètres obligatoires :

- ServiceName
- Message (votre message, attention à prendre en compte sa longueur et en fonction aussi de l’ajout du STOP, du coding et des caractères spéciaux qui peuvent qui consommer plus de crédit SMS)


Destinataires :

- Receivers (liste de numéros, pour des sms au fil de l’eau c’est le paramètre recommandé avec un numéro)
- receiversDocumentUrl (url pointant vers un fichier csv contenant les numéros des destinataires)
- receiversSlotId (id pointant vers un fichier csv pré-chargé)


Emetteur

- sender (sélection du nom d’émetteur afin que vous soyez identifié tout de suite comme émetteur du sms)
- senderForResponse (utilisation d’un numéro court permettant le SMS réponse 2 way)


Autres 

- charset
- class (type de sms envoyé)
- coding (encode sur 7 ou 8 bit, cela impact le nombre de caractère disponible par crédit SMS)
- differedPeriod (planification de l’envoi)
- noStopClause (permet d’indiquer que c’est un sms non commercial, la mention est retirée du message)
- priority (indication de priorité)
- tag (marquage du tag pour le catégoriser)
- validityPeriod (Durée d’expiration du message en cas de problème pour le délivrer)




## 
Pour envoyer un même message vers un nombre important de destinataires, nous allons réutiliser la méthode POST [/sms/{serviceName}/jobs](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST) mais en utilisant cette fois ci l’import d’un fichier csv via une url.
Deux méthodes :

- POST [/sms/{serviceName}/jobs](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST) avec le paramètre receiversDocumentUrl (url pointant vers un fichier csv contenant les numéros des destinataires)
- POST [/sms/{serviceName}/receivers](https://api.ovh.com/console/#/sms/{serviceName}/receivers#POST) , avec comme paramètres : serviceName, csvUrl, description, slotId.
- Une fois le fichier chargé, il suffit d’appeler POST [/sms/{serviceName}/jobs](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST) avec le paramètre receiversSlotId en indiquant le bon SlotId.




## 
L’envoi de masse avec publipostage s’appuie sur l’envoi de masse et la construction d’un fichier contact csv particulier en lien avec un message.
Les messages vont pouvoir incorporer des champs variables. En appelant le nom d’une colonne, voici ci dessous un exemple pour illustrer ce cas d’usage :

Fichier contacts.csv
Numero ;nom ;prenom ;adresse
0662000000 ;Durant ;Pierre ;xx rue montaigne Paris
0662000001 ;Dupont ;Jean ;xx rue montaigne Paris
...

Le message :
Bonjour #prenom# #nom#, votre commande va être livrée à l’adresse : #adresse# . Cordialement.


## 
Lors de la création d’un envoi via la méthode POST [/sms/{serviceName}/jobs](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST) vous pouvez renseigner une valeur pour la paramètre « tag ». Ce paramètre va vous permettre ensuite de tracer les messages envoyés avec ce tag.

Via la méthode GET [/sms/{serviceName}/outgoing](https://api.ovh.com/console/#/sms/{serviceName}/outgoing#GET) et en renseignant le paramètre tag en filtre de la requête, vous récupérez tous les identifiants de messages sortants.
Avec la méthode GET [/sms/{serviceName}/outgoing/{id}](https://api.ovh.com/console/#/sms/{serviceName}/outgoing/{id}#GET) , vous récupérez tous les détails de chaque message.
Avec ces informations, vous pouvez tracez des rapports de synthèse pour chaque campagne, voici quelques exemples d’informations :
Taux de messages distribués, taux d’erreurs, temps de diffusion du message, ...

Avec la méthode GET [/sms/{serviceName}/blacklists](https://api.ovh.com/console/#/sms/{serviceName}/blacklists#GET) vous pouvez suivre l’évolution de vos STOP SMS, et ainsi réagir si une campagne SMS génère un fort taux de désinscription.


## 
Pour profiter du SMS réponses, vous aurez besoin d’envoyer vos SMS avec un numéro court en utilisant le paramètre « senderForResponse ».
Via la méthode PUT [/sms/{serviceName}](https://api.ovh.com/console/#/sms/{serviceName}#PUT) vous allez pouvoir mettre en place un appel Callback à chaque réponse reçu, vous serez notifié en temps réel des réponses.
En approche « Pull », vous pouvez choisir de consulter les réponses reçues en appelant la méthode GET [/sms/{serviceName}/incoming](https://api.ovh.com/console/#/sms/{serviceName}/incoming#GET)


## 
Vous pouvez générer automatiquement des bons de commande de SMS en appelant la méthode POST [/order/sms/{serviceName}/credits](https://api.ovh.com/console/#/order/order/sms/{serviceName}/credits#POST) avec en paramètre le compte SMS à créditer et le montant de crédits que vous souhaitez acheter. Vous aurez en retour toutes les informations de prix, hors taxe, toute taxe, les remises ainsi que les contrats et le lien vers le bon de commande afin de réaliser le paiement.
Préalablement vous pouvez obtenir les prix en fonction de la quantité désirée avec la méthode GET [/order/sms/{serviceName}/credits](https://api.ovh.com/console/#/order/sms/{serviceName}/credits#GET).


## 
Pour chaque compte SMS, vous avez la possibilité de créer des utilisateurs qui pourront avoir leurs propres envois ainsi que différentes règles de gestion permettant notamment d’appliquer des quotas d’envois.
La première étape est de créer un utilisateur : POST [/sms/{serviceName}/users](https://api.ovh.com/console/#/sms/{serviceName}/users#POST)
Puis de paramétrer ses réglages (callback,quota, IP...) : PUT [/sms/{serviceName}/users/{login}](https://api.ovh.com/console/#/sms/{serviceName}/users/{login}#PUT)
Enfin vous pouvez consulter l’état de consommation d’un utilisateur : GET [/sms/{serviceName}/users/{login}](https://api.ovh.com/console/#/sms/{serviceName}/users/{login}#GET) vous pouvez aussi tracer la consommation en utilisant un tag campagne ou l'identité d'un sender via une requête GET [/sms/{serviceName}/outgoing](https://api.ovh.com/console/#/sms/{serviceName}/outgoing#GET), vous pourrez aussi spécifier une période par exemple pour refacturer la consommation de mois en mois.


## 
Si vous gérez plusieurs comptes SMS (serviceName : sms-XXXX-1, sms-XXXXX-2 ...) vous pouvez transférer des crédits entre vos différents comptes.
Pour cela utilisez la méthode POST [/sms/{serviceName}/transferCredits](https://api.ovh.com/console/#/sms/{serviceName}/transferCredits#POST) en indiquant le compte SMS à débiter, celui à créditer et enfin le montant de crédits à transférer.

Ce mécanisme est très intéressant pour gérer plusieurs comptes SMS de façon indépendante notamment pour de la revente à différents acteurs. Pour isoler les comptes vous devez mettre en place des Tokens distincts afin d’isoler les droits. Cette opération se réalise au moment de créer vos Tokens d’application, dans les droits vous aurez à spécifier explicitement que telle application n’a des droits que sur un ServiceName spécifié dans les url autorisées.
