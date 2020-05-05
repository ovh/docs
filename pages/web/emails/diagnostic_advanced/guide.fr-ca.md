---
title: 'Réagir en cas d'indisponibilité de vos e-mails'
slug: utilisation-avancee-des-e-mails
legacy_guide_number: 2117
excerpt: 'Vous trouverez dans ce guide differentes informations concernant les services e-mails chez OVHcloud.'
section: 'Diagnostic'
order: 9
---

**Dernière mise à jour le 23/01/2020**

## Les vérifications à réaliser

En cas d'indisponibilité sur les envois ou la réception de vos e-mails, voici quelques points possibles à vérifier :

- **Mon offre e-mail est-elle active ?**

Pour que vos e-mails soient fonctionnels, vous devez posséder une offre e-mail active. Si vous possédez des e-mails associés à une offre d'hébergement, vérifiez qu'elle ne soit pas expirée. Il vous est possible de voir cette information directement dans l'espace client. Au même titre votre nom de domaine doit lui aussi être actif.

- **Les e-mails sont-ils fonctionnels depuis le webmail ?** 

Afin de vous assurer que le souci n'est pas lié à une erreur de configuration, réalisez un test d'envoi et de réception directement via le webmail d'OVHcloud. Si tout fonctionne correctement, vérifiez la configuration de votre logiciel via les guides mis à votre disposition.

- **Vous ne pouvez pas vous connecter au webmail ?** 

Assurez-vous d'avoir le bon mot de passe, si nécessaire il vous est possible de le modifier. Pour cela, référez-vous à [ce guide](../modifier-mot-de-passe-adresse-email/){.external}.

- **Une tâche travaux est-elle en cours sur mon service ?**

Il vous est possible de vérifier les différentes tâches travaux actuellement en cours sur [cette page](http://travaux.ovh.net/){.external} .


- **Le pointage de mon nom de domaine est-il correct ?**

Vérifiez que votre nom de domaine utilise correctement les serveurs e-mail (Enregistrement de type MX) de l'offre e-mail d'OVHcloud. Référez-vous à [ce guide](../../domains/mail-mutualise-guide-de-configuration-mx-avec-zone-dns-ovh/){.external}.

## Les codes de reponse d’un serveur SMTP

Les commandes SMTP sont utilisées pour le transfert de courrier électronique. Afin d'interroger un serveur SMTP, il est nécessaire de dialoguer avec lui en lui envoyant des "Commandes". Une fois que le serveur a reçu une commande, une réponse SMTP sera retournée.

Les réponses aux commandes SMTP servent à assurer la synchronisation des requêtes et des actions dans le processus de transfert de courrier, afin de garantir que le client SMTP connaisse toujours l'état du serveur SMTP. Chaque commande doit générer une réponse.

Une réponse SMTP est constituée d'un nombre à trois chiffres suivis d'un texte. Le nombre est destiné à être utilisé par les serveurs pour déterminer la prochaine étape. Le texte est utile uniquement pour l'utilisateur humain.

Les trois chiffres de la réponse ont chacun une signification particulière :

- le premier chiffre indique si la réponse est bonne, mauvaise ou incomplète. Un client SMTP sera capable de déterminer sa prochaine action par l'examen de ce premier chiffre ;
- Le second et le troisième chiffre fournissent des informations complémentaires.

Il y a quatre valeurs possibles pour le premier chiffre du code de réponse :

|Code|Description|  
|---|---|  
|2 xx|Réponse positive : l'action demandée a été effectuée avec succès. Une nouvelle demande peut être initiée.| 
|3 xx|Réponse positive temporaire : la commande a été acceptée, mais l'action demandée est en attente de réception de plus amples informations. le client SMTP devrait envoyer une autre commande spécifiant cette information.| 
|4 xx|Réponse négative d'achèvement transitoire : la commande n'a pas été acceptée et l'action demandée n'a pas pu se produire. Toutefois, la condition de l'erreur est temporaire, et l'action peut être demandée à nouveau.| 
|5 xx|Réponse négative : la commande n'a pas été acceptée et l'action demandée n'a pas pu se produire. Le client SMTP ne devrait pas répéter la même demande.| 

Vous trouverez ci-dessous la majorité des codes de réponse SMTP utilisés par les serveurs :

|Codes réponse|Détails|Actions|
|---|---|---|
|211|Message d'état du système ou réponse d'aide|Le message est suivi de plus d'informations|
|214|Message d'aide|Contient des informations sur votre serveur, et redirige normalement vers une page de FAQ|
|220|Le serveur est prêt|Il s'agit d'un message indiquant que le serveur est prêt|
|221|Canal de transmission fermé|Cela signifie que le serveur ferme la connexion suite à la communication réussie|
|250|Transmission du message terminée|Votre mail a bien été transmis|
|251|Utilisateur final non présent sur ce serveur, mais il va être transmis|Cela signifie que le message sera transmis sur un autre serveur (redirection, autre serveur MX, ...)|
|252|Le serveur ne peut pas vérifier l'utilisateur final, mais va essayer de transmettre le message|L'utilisateur final n'est pas vérifiable pour le moment, mais il sera très probablement transmis plus tard|
|354|Le serveur a bien reçu les adresses d'expédition et de réception|Cela veut simplement dire qu'il attend à présent de recevoir le contenu du mail pour le transmettre|
|420|Délai dépassé, problème de connexion|Ce message d'erreur est retourné uniquement par les serveurs mail GroupWise. Contactez l'administrateur du serveur de messagerie de destination|
|421|Service non disponible, canal de transmission en cours de fermeture|Provenance de l'erreur indéterminée, assurez-vous que l'envoi vers un autre domaine fonctionne. Si oui, veuillez réessayer l'envoi initial plus tard|
|432|Réception du mail sur le serveur Exchange stoppé|Ce message d'erreur est retourne uniquement par les serveurs mail Microsoft Exchange. Contactez l'administrateur du serveur de messagerie de destination|
|449|Une erreur de routage|Ce message d'erreur est retourne uniquement par les serveurs mail Microsoft Exchange. Microsoft recommande d'effectuer un diagnostique avec leur outil [WinRoute](https://support.microsoft.com/fr-fr/kb/281382){.external}|
|450|Action de messagerie demandée non effectuée : boîte mail indisponible (par exemple, boîte mail occupée ou temporairement bloquée pour des raisons de sécurité ou de blacklistage)|Vérifiez si votre adresse IP du serveur de messagerie n'est pas blacklistée ([SpamHaus](https://www.spamhaus.org/lookup/){.external}), et vérifiez également si votre mail ne comporte pas des mots se référant à du SPAM.|
|451|Action requise abandonnée : Erreur de traitement local|Cela peut être dû à une surcharge momentanée, ou à une vérification du SPF du domaine émetteur incorrecte. Référez-vous au message complémentaire fourni par le serveur, ou contactez l'administrateur de celui-ci si cela persiste|
|452|Action demandée non effectuée : système de stockage insuffisant|Votre serveur de messagerie est « surchargé ». Cela pourrait également être causé par un trop grand nombre de messages qui tentent d'être envoyé à la fois. Veuillez vérifier votre boîte d'envoi puis réessayez|
|455|Serveur incapable de recevoir les paramètres|Patientez quelque temps puis effectuez une nouvelle tentative. En cas d'échec, contactez l'administrateur du serveur de messagerie du destinataire|
|500|Erreur de syntaxe, commande non reconnue (Cela peut inclure des erreurs comme une ligne de commande trop longue)|Cela est souvent causer par l'antivirus ou le firewall de l'expéditeur. Vérifiez cela puis essayez à nouveau|
|501|Erreur de syntaxe dans les paramètres ou les arguments|Cela est souvent causé par une adresse e-mail de destinataire erronée ou un problème d'antivirus ou firewall côté expéditeur. Veuillez vérifier l'adresse de destination ainsi que votre antivirus ou firewall|
|502|Commande non implémentée|Les paramètres ou les options utilisées lors de l'envoi de l'e-mail avec votre serveur SMTP sont reconnus mais désactivés dans sa configuration. Veuillez contacter votre fournisseur de service|
|503|Le serveur à rencontré une mauvaise séquence de commandes|Cela est généralement dû un problème d'authentification, assurez-vous d'être bien authentifié sur le serveur SMTP au niveau de la configuration de votre logiciel de messagerie|
|504|Paramètre de commande non implémentée|Les paramètres ou les options utilisées lors de l'envoi de l'e-mail avec votre serveur SMTP sont reconnus mais désactivés dans sa configuration. Veuillez contacter votre fournisseur de service|
|550|Action demandée non effectuée : boîte aux lettres indisponible|Le serveur de messagerie de destination n'a pas pu vérifier l'adresse e-mail utilisée. Ceci est le plus souvent causé par une adresse e-mail de destination invalide, mais peut également signifier que le serveur de messagerie de destination a des problèmes de pare-feu ou de connectivité. Vérifier l'adresse e-mail du destinataire, et/ou réessayez à nouveau|
|551|Utilisateur non local|Ceci est en général utilisé comme une stratégie de prévention contre le spam. Il est indiqué que le relais de courrier n'est pas autorisé pour une raison quelconque à relayer votre message vers un autre serveur que le vôtre. Veuillez contacter votre fournisseur de service|
|552|Action de messagerie demandée interrompue : espace de stockage dépassé|L'utilisateur que vous avez essayé de contacter n'a plus d'espace disponible pour recevoir des messages. Malheureusement, la seule solution est de contacter le destinataire via une autre méthode|
|553|Action demandée non effectuée : adresse e-mail non autorisé|Cela est en général causé par une adresse e-mail de destination incorrecte. Veuillez vérifier que l'adresse e-mail en question est bien correcte|
|554|Transaction échouée, "Aucun service SMTP ici")|Il s'agit en général d'un problème de blacklist. Vérifiez si votre adresse IP du serveur de messagerie n'est pas blacklistée ([SpamHaus](https://www.spamhaus.org/lookup/){.external})|
|555|MAIL FROM / RCPT TO, paramètres non reconnus ou non mis en oeuvre|Le serveur SMTP sortant n'enregistre pas correctement l'adresse e-mail utilisée soit dans vos paramètres "De" ou "A". Veuillez vérifier que les adresses e-mail indiquées sont correctes, et vérifiez également que vous n'avez pas dépassé la limite définie par OVHcloud : 200 mails /heure /compte et 300 mails /heure /ip|
