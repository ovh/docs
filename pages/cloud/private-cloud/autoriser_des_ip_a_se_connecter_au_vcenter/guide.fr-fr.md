---
title: Autoriser des IP à se connecter au vCenter
slug: autoriser-des-ip-a-se-connecter-au-vcenter
legacy_guide_number: '1442255'
space_key: VS
space_name: vSphere as a Service
section: Fonctionnalités OVH
---

Lorsque [la politique d'accès au vCenter est restreinte]({legacy}1442246), il est nécessaire d'ajouter les IPs qui seront autorisé à se connecter au service.

L'opération se réalise dans [l'espace client (Manager)](https://www.ovh.com/manager){.external-link}, section **"Dédié"** puis **"Private Cloud"**. Sélectionner l'infrastructure puis rendez-vous dans l'onglet "**Sécurité"**et enfin****cliquer sur "**Ajout des IP".**

![](images/restrictIP.JPG){.thumbnail}

Rajouter ici l'IP concernée et éventuellement une description pour la retrouver facilement dans la liste plus tard.

Il ne reste plus qu'a valider en cliquant sur "Suivant" et une fois que l'IP est bien marquée comme **"Autorisée et mise en place"**, la connexion au vSphere sera possible depuis l'IP en question.

![](images/restrictIP2.JPG){.thumbnail}
