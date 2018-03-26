---
title: Eviter le freeze de VM avec l’option Veeam Backup
slug: eviter-le-freeze-de-vm-avec-l-option-veeam-backup
legacy_guide_number: '7766815'
space_key: VS
space_name: vSphere as a Service
section: Gestion des machines virtuelles
---





Problème rencontré
------------------

**Service** : [VEEAM backup managé sur Private Cloud](https://pccdocs.ovh.net/display/VS/Veeam+Backup+as+a+Service).

**

Dans le processus de sauvegarde, vous pouvez rencontrer un freeze (~30 secondes) ou un verrouillage du disque lors de la suppression du snapshot de la VM dans le datastore NFS.

Ce verrouillage du disque arrive car le snapshot du VMDK est monté sur le Backup Proxy qui fonctionne sur un hôte différent.

Ce problème n'arrive pas si la machine virtuelle et le Backup Proxy sont situés sur le même hôte.

Solution de contournement
-------------------------

Créer une règle DRS "Conserver les VMs ensemble" et ajouter les VMs qui doivent être sauvegardées, avec le Backup Proxy.

Vous pouvez également, créer plusieurs règles DRS, si vous avez un grand nombre de VMs à sauvegarder, et les relier avec plusieurs Backup Proxies.

Créer une autre règle DRS "Séparer les machines virtuelles" afin d'avoir les différents Backup Proxies sur différents ESXi.

L'algorithme d'OVH fera en sorte que le processus de sauvegarde de la machine virtuelle se fasse par le Backup Proxy, présent sur le même hôte ESXi que la VM.

*NB : L'ajout d'un nouveau Backup Proxy entraînera un coût supplémentaire.*

Limitation de cette solution
----------------------------

- Dans des environnements volumineux, la création de plusieurs règles DRS peut être fastidieux.
- L'utilisateur doit ajouter manuellement les nouvelle VM aux règles DRS.
- Les différentes VMs à sauvegarder mais ne faisant pas partie des règles DRS peuvent avoir la problématique des freezes.

Procédure
---------

Créer une règle DRS "Conserver les machines virtuelles ensemble" et ajouter les VMs avec un Backup Proxy.

*Pour la créer, faites un clic droit sur le cluster, puis aller dans modifier les paramêtres.*

*Dans la partie DRS, vous pourrez ajouter une règle en suivant les détails suivants.*

![](images/image0_7.png){.thumbnail}

Créer une autre règle DRS "Séparer les machines virtuelles", afin de garder les Backup Proxies sur différents hôtes.

![](images/image0_28.png){.thumbnail}

Créer un groupe de VM, entrer le nom du groupe, et ajouter l'hôte dans cette règle.

*![](images/image1_9.png){.thumbnail}*

En résumé, vous devez avoir une règle d'anti-affinité pour que les Backup Proxies ne soient jamais sur le même hôte.

Et autant de règles d'affinité que de Backup Proxies.
