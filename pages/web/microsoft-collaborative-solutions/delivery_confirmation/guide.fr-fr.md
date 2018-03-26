---
title: Notification des etats de remises
legacy_guide_number: 2198
slug: exchange-notification-des-etats-de-remises
excerpt: Vous trouverez ci-dessous une liste non exhaustive des differents retours d’erreurs possibles, leurs causes et une explication sur leurs resolutions.
section: Exchange Divers
---


## Introduction
Les rapports de non-remise (aussi appelés  **NDR**  ou  **Bounce** ) sont des messages qui indiquent l'état de remise d'un e-mail à l'expéditeur.

Les notifications d'état de remise décrivent trois types de situations :

- Succès (codes 2 .X.X)
- Défaillance temporaire (codes 4 .X.X)
- Défaillances permanentes (codes 5 .X.X)

Le serveur qui rapporte le problème est indiqué avant le code numérique. Il arrive que le serveur qui fait état du problème ne soit pas le serveur qui rencontre le problème.


## Les defaillances temporaires (codes 4.X.X)
||Nom de l'erreur|Cause possible|Explication|
|---|---|---|---|
|4.3.1|Insufficient system resources|Une erreur de mémoire insuffisante s'est produite. Un problème de ressource, tel qu'un disque plein, peut être à l'origine du problème.|Il faut vérifier que le serveur de destination dispose d'un espace disque/mémoire suffisant|
|4.3.2|System not accepting network messages|Cette notification d'échec de remise est générée lorsqu'une file d'attente est gelée|Il est possible de résoudre le problème en libérant la file d'attente|
|4.4.1|Connection timed out|L'hôte ne répond pas|Cette erreur peut être provoquée par des conditions de réseau temporaires. Exchange tente automatiquement de remettre le message électronique. Si la remise échoue encore, un rapport de non-remise due à un échec permanent est généré|
|4.4.2|Connection dropped|La connexion a été interrompue entre les serveurs|Ce message d'erreur peut être provoqué par des problèmes de réseau temporaires ou par des serveurs hors service. Le serveur tente de remettre le message pendant un temps donné, puis il génère d'autres rapports d'état|
|4.4.7|Message expired|Le message dans la file d'attente a expiré. Le serveur d'envoi a essayé de remettre le message, mais l'action n'a pas été effectuée avant l'expiration du message|Ce code indique un problème sur le serveur de réception. Vérifiez la validité de l'adresse du destinataire et la configuration du serveur de réception|


## Les defaillances permanentes (codes 5.X.X)
||Nom de l'erreur|Cause possible|Explication|
|---|---|---|---|
|5.1.0|Sender denied|Le destinataire à bloqué l'expéditeur|Supprimer le blocage depuis le webmail : Options > bloquer ou autoriser|
|5.1.1|Bad destination mailbox address|L'adresse de messagerie du destinataire est incorrecte ou la boîte aux lettres du destinataire a été déplacée et le cache de destinataires Microsoft Office Outlook de l'expéditeur n'a pas été mis à jour|Vérifiez l'adresse du destinataire, puis renvoyez le message. Cette erreur peut également se produire si l'adresse de messagerie du destinataire était correcte dans le passé mais a été modifiée ou supprimée du système de messagerie de destination|
|5.2.2|Mailbox full|Le quota de stockage de la boîte aux lettres du destinataire étant dépassé, celle-ci ne peut plus accepter de nouveaux messages|Cette erreur se produit en cas de dépassement du quota de stockage de la boîte du destinataire. Pour que la remise réussisse, le destinataire doit réduire la taille de sa boîte ou l'administrateur doit augmenter le quota de stockage|
|5.2.3|Message too large|Le message est trop volumineux et le quota est dépassé. Par exemple, il se peut qu'une restriction de taille maximale de message entrant soit appliquée à l'utilisateur distant|Renvoyez le message sans pièce jointe ou contacter l'administrateur du serveur distant|
|5.4.4|Invalid arguments|Cette notification d'échec de remise survient s'il n'y a aucun itinéraire pour la remise des messages|Vérifiez que le nom de domaine spécifié est valide et que l'enregistrement de serveur de messagerie (MX) existe|
|5.5.3|Too many recipients|Le total combiné des destinataires dans les lignes À, Cc et Cci du message dépasse le nombre total de destinataires autorisé par message|L'expéditeur doit réduire le nombre d'adresses de destinataire dans le message|

ExplicationSource : Microsoft