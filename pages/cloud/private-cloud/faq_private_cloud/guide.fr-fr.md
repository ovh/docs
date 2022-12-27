---
title: Questions fréquentes
slug: questions-frequentes
legacy_guide_number: '7766169'
section: FAQ
order: 020
---


Lors de la configuration de HA j’ai l’erreur : « Erreur HA : Impossible d’effectuer la configuration HA »
---------------------------------------------------------------------------------------------------------

Si cette erreur persiste, vous devez déconfigurer puis reconfigurer manuellement le cluster avec le HA. Pour cela, rendez-vous dans les propriétés de votre cluster, décochez l’option HA puis validez la modification. Une fois la tâche finalisée, vous pourrez retourner dans les propriétés, puis réactiver l’option HA. Une fois la tâche d’activation finalisée, l’option HA sera activée sur votre cluster.

Suite à une alarme, celle-ci reste indiquée sur le host (triangle rouge)
------------------------------------------------------------------------

Il vous faut valider cette alarme et la repasser en vert, dans l’onglet alarme de votre host. Procédez à un clic droit sur l’alarme restante.

J’ai une VM qui se retrouve en état Invalid
-------------------------------------------

Dans ce cas, supprimez votre VM de l’inventaire, en faisant un clic droit sur cette VM. ATTENTION : choisissez « supprimer de l’inventaire » et non « supprimer du disque ». Dans ce dernier cas, vous perdrez les données de votre VM. Ensuite, il vous suffit de rajouter la VM dans l’inventaire et de la démarrer.

Lors de l’accès à la console de ma VM, j’obtiens un écran noir
--------------------------------------------------------------

Dans ce type de cas, c’est l’OS de la VM qui a mis l’écran en veille. Appuyez sur une touche de votre clavier afin de la réactiver.
