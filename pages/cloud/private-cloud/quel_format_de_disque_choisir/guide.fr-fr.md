---
title: Quel format de disque choisir
slug: quel-format-de-disque-choisir
legacy_guide_number: '1441955'
section: Gestion des machines virtuelles
---

Il existe 3 formats de disques possibles :

- thin provisioning
    - La place occupée par disk de la VM (vmdk) est de la taille de l'espace occupé par l'OS. On peut alors allouer un disque de 1To qui sera reconnu comme 1To par l'OS, mais n'occupera sur le datastore que l'espace occupé par le guest OS (par exemple 20Go). Ce qui veut dire qu'on pourrait allouer sur un datastore de 1.2To une capacité de 50 To (50 VM de 1To alloué) mais n'occuper que 1To (20Go occupé / VM dans notre exemple).
    - On ne peut pas réclamé l'espace qui a été occupé. Exemple : si on occupe 40 Go sur un disk thin de 100Go et que l'on supprime 20Go de données dans la VM, l'espace occupé sur le datastore sera toujours de 40Go et l'espace alloué de 100Go.
- thick provisioning
    - Le VMDK de la VM occupe sur le datastore tout l'espace alloué. Une VM de 100Go en thick alloué occupera 100Go d'espace sur le datastore.
        - Eager zero
            - Le VMDK est rempli de zéro à la création du disk sur le volume VMFS
        - Lazy zero
            - L'espace alloué est réservé au VMDK, mais les zéro sont écris au moment où la VM a besoin de l'espace disk.


Exemple pour des VMs de 100Go avec un Guest OS de 40Go :


|Type de disk|Espace alloué|Block zeroed|Espace occupé|
|---|---|---|---|
|Eager Zero|A la création de VM|A la création de VM|100Go|
|Lazy Zero|A la création de VM|Quand le block est écrit la première fois|100Go|
|Thin|Quand le block est écrit la première fois|Quand le block est écrit la première fois|40Go|