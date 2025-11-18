---
title: Enterprise File Storage - Concepts de performances
excerpt: "Découvrez les concepts liés au provisionnement, au suivi ainsi qu'au test des performances de la solution Enterprise File Storage"
updated: 2025-09-12
---

## Objectif

Découvrez les concepts liés au provisionnement, au suivi ainsi qu'au test des performances de la solution [Enterprise File Storage](/links/storage/enterprise-file-storage).

## En pratique

### Suivi des performances

La notion de « niveau de service » est un élément important dans l’offre Enterprise File Storage. Elle définit les niveaux de performances atteignables pour chaque service provisionné. Les performances d’un système de fichiers sont généralement définies par plusieurs éléments : 

- le débit ; 
- les IOPS (ou nombre d’opération d’entrée-sortie par seconde) ;
- la taille de bloc ;
- le modèle d’accès séquentiel ou aléatoire.

A ce jour, Enterprise File Storage fournit et garantit des objectifs de performances de **64 MB/s par TB ou 4000 IOPS par TB selon le type d'I/O**.  Les capacités provisionnées des services ont donc un impact direct sur les performances disponibles pour votre service.

Cette information est importante lorsque vous concevez votre architecture de stockage. Prenons trois exemples pour l’illustrer :

- **Exemple n°1** : votre application nécessite un débit théorique d’environ **430 MB/s**. Pour cela, vous devez provisionner au moins **7 TB** de stockage. En effet, un rapide calcul (**430/64 = 6,72**) permet d’estimer la capacité minimale nécessaire pour atteindre ce débit.

- **Exemple n°2** : votre infrastructure nécessite **4500 IOPS** et un volume de données de **1 TB**. Pour cela, vous devez provisionner **2 TB** pour obtenir les **4500 IOPS nécessaires**. Plus spécifiquement dans ce cas, vous bénéficierez de **8000 IOPS** sur la capacité provisionnée. Il s’agit donc de sur-provisionner votre service afin d’assurer le niveau de performances souhaité.

- **Exemple n°3** : votre application ne nécessite pas de performance en particulier mais un volume de stockage de plus de **60 TB**. Dans ce cas, il est préférable de s’orienter vers le service de stockage [NAS-HA](/links/storage/nas-ha), plus économique et permettant d’atteindre des capacités supérieures à 58 TB par service.

### Volumes et qualité de services (QoS)

Pour rappel, un volume est une partition du service (aussi appelée « pool » ou « pool de capacité »). Lors de votre commande, vous provisionnez une capacité pour votre service. Une fois le service livré, vous serez amené à créer vos volumes en mettant à disposition un quota allant de 100 GB à 29 TB par volume. 

Retrouvez ci-dessous la hiérarchie d’un service de stockage Enterprise File Storage :

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png){.thumbnail}

Enterprise File Storage ne permet pas encore la modification de la QoS de manière manuelle. En effet, la QoS est définie au niveau du service (pool).

### Comment maximiser les performances de votre système de fichiers

Afin de maximiser les performances de votre Enterprise File Storage, certains éléments sont importants à prendre en considération :

- Pensez à réserver votre Enterprise File Storage dans le même datacenter que vos charges de travail. Les latences entre les datacenters peuvent être élevées et affecter les performances globales de votre application.
- Pour une meilleure fiabilité et une bande passante maximisée, favorisez les serveurs de dernières générations car ils disposent des nouvelles interfaces réseau.
- Identifiez la bande passante publique disponible sur les serveurs clients, afin de vous assurer de la compatibilité avec les performances provisionnées et ainsi maximiser les débits.

### Test des performances

Afin d’effectuer vos propres tests de performances et pour vous familiariser avec les niveaux de service d’Enterprise File Storage, nous recommandons l’utilisation d’outils comme [FIO](https://github.com/axboe/fio), un outil d’évaluation très populaire. Il fournit de nombreuses options réglables pour simuler la charge de travail souhaitée et fournit des statistiques détaillées sur le comportement du stockage sous charge. Il est également disponible gratuitement sur un large éventail de systèmes d’exploitation.

Il est important de tester les performances de votre Enterprise File Storage dans le même datacenter que vos charges de travail. Les latences entre les datacenters sont trop élevées durant le fonctionnement normal pour qu'une telle évaluation soit pertinente.

Avant de démarrer le test, vérifiez que le client utilisé pour ce benchmark a accès à votre service Enterprise File Storage et à un volume de test. Si ce n’est pas encore fait, vous pouvez suivre le guide de [gestion depuis l’espace client OVHcloud](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_control_panel).

#### Banc de test

L’outil [FIO](https://github.com/axboe/fio) vous permet de tester plusieurs scénarios et de modifier de nombreux paramètres de test : 

- le nombre d’images ; 
- la taille des images ;
- la taille de bloc ;
- la durée du test ; 
- le nombre de FIO workers ;
- le modèle d’accès (lecture/écriture/séquentiel/aléatoire), etc.

Retrouvez ci-dessous quelques exemples de commandes fio permettant de valider que le nombre d'IOPS maximum (4000) ou la bande passante maximale (64MB/s) peuvent être atteints pour un service EFS de 1TB :

**Lecture aléatoire - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=8k -size=1G -time_based -runtime=60 -name=test1 -directory=/share-nfs
```
**Ecriture aléatoire - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=8k -size=1G -time_based -runtime=60 -name=test2 -directory=/share-nfs
```
**Lecture aléatoire - Bande passante max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=64k -size=1G -time_based -runtime=60 -name=test3 -directory=/share-nfs
```
**Ecriture aléatoire - Bande passante max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=64k -size=1G -time_based -runtime=60 -name=test4 -directory=/share-nfs
``` 
**Lecture séquentielle - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=read -bs=8k -size=1G -time_based -runtime=60 -name=test5 -directory=/share-nfs
``` 
**Ecriture séquentielle - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=write -bs=8k -size=1G -time_based -runtime=60 -name=test6 -directory=/share-nfs
```
**Lecture séquentielle - Bande passante max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=read -bs=64k -size=1G -time_based -runtime=60 -name=test7 -directory=/share-nfs
``` 
**Ecriture séquentielle - Bande passante max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=write -bs=64k -size=1G -time_based -runtime=60 -name=test8 -directory=/share-nfs
```

Retrouvez plus d'informations sur [la documentation de FIO](https://fio.readthedocs.io/en/latest/index.html).

**Vous avez aussi la possibilité d'utiliser d'autres outils open-source comme :**

- [nfsiostat](https://man7.org/linux/man-pages/man8/nfsiostat.8.html)
- [NFStest](https://wiki.linux-nfs.org/wiki/index.php/NFStest)
- [nfstrace](https://github.com/epam/nfstrace)

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.


Échangez avec notre communauté d’utilisateurs sur Discord : <https://discord.gg/ovhcloud>
