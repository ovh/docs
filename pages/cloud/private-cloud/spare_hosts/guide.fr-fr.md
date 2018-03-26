---
title: Hôte de spare
slug: hote-de-spare
legacy_guide_number: '2883590'
section: Fonctionnalités OVH
---


Livraison d’un hôte de spare
----------------------------

Si l’un de vos hôtes est victime d’une panne, afin d’assurer la continuité de service, nous vous livrons automatiquement un hôte de remplacement gratuit dans votre infrastructure en moins de 15 minutes. Dès que ce hôte est livré, vous recevez un email vous indiquant toutes les informations concernant cet hôte ainsi que son adresse IP vous permettant de le retrouver facilement dans votre interface vSphere.

Par défaut, HA ([High Availability]({legacy}2163279)) de VMware est activé sur votre cluster. Si vous l’avez laissé activé, vos machines virtuelles vont redémarrer automatiquement. Si DRS ([Distributed Ressources Scheduler](#)) est activé et configuré en mode “Entièrement Automatisé”, la répartition de charge sur les hôtes de votre cluster sera également effectuée automatiquement.

Que faire après avoir reçu le hôte de spare
-------------------------------------------

Une fois que le hôte original est de retour (une fois réparé), vous pouvez nous rendre l’un des deux hôtes (le hôte de spare ou le hôte original).

Nous vous recommandons de nous rendre le hôte original afin que nous puissions lui faire subir une batterie de tests suite à cet incident (pour éviter d’éventuelles pannes futures). Vous pourrez alors conserver le hôte de spare. Pour cela vous pouvez suivre le guide [suppression d’un hôte]({legacy}1442308)

OVH pourra récupérer automatiquement le hôte original dès que celui-ci sera de retour.
