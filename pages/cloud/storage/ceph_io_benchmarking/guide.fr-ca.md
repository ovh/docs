---
title: 'Storage Benchmarking'
slug: ceph-io-benchmarking
excerpt: 'Apprenez à évaluer les performances de votre Cloud Disk Array'
section: 'Stockage et sauvegarde'
---

**Dernière mise à jour le 23/05/2019**

## Avant de commencer
Avant de commencer les tests d'évaluation, familiarisez-vous avec votre environnement. Même les petits détails manqués peuvent invalider votre benchmark. Par exemple, il est inutile de tester les performances de votre Cloud Disk Array d'un datacenter différent. Les latences entre les datacenters sont trop élevées durant le fonctionnement pour une telle évaluation.

Il est également très important de sélectionner les métriques appropriées à votre cas. Si vous prévoyez d'analyser une base de données, le nombre total d'E/S par seconde (IOPS) disponibles de 8 Ko par bloc sera probablement plus important que la bande passante totale avec de grandes E/S. Si vous envisagez d'utiliser Hadoop, les besoins en stockage seront totalement différents.

Dans notre cas, nous essayons de trouver un équilibre entre différentes charges de travail. Nous utilisons **Fio** — un outil d'évaluation très populaire. Il fournit de nombreuses options réglables pour simuler la charge de travail souhaitée et fournit des statistiques détaillées sur le comportement du stockage sous charge. Il est également disponible gratuitement sur un large éventail de systèmes d'exploitation.

**Ce guide vous apprend à effectuer une évaluation de votre Cloud Disk Array.**

## Premier banc d'essai
Assurez-vous que le client utilisé pour le test a accès à votre Cloud Disk Array. Vous pouvez vérifier cela en exécutant la commande suivante :

```bash
$ ceph -s
cluster 3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 intégrité_OK
 monmap e1: 3 mons à {mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.x:6789/0,mon-02-3eb69d65-fec7-4e00 5-91c0-7fe07b6fed1a=10..a.b.y:6789/0,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.z:6 789/0}
        election epoch 50, quorum 0,1,2 mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 osdmap e52: 3 émissions: 3 en haut, 3 en haut
  pgmap v2709: 64 pages, 1 pool, 8 3255 Mo de données, 1 300 objets
        261 Go utilisés, 1 6401 Go/1 662 Go disponibles
              64 actifs+propres
```

Si vous obtenez un résultat similaire à celui ci-dessus, vous pouvez commencer à préparer l'image pour le test grâce à cette commande :


```bash
rbd -p rbd create --size 1024 --image-format 2 test-image
```

Vous pouvez tester les performances dans trois situations différentes :

- utiliser directement RBD ;
- mapper l'image vers le périphérique `/dev/rbd` ;
- exécuter un banc d'essai à l'intérieur d'une machine virtuelle exécutée sur une image RBD.

L'utilisation de la première méthode exécute Fio comme dans l'exemple ci-dessous :

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

Lors de l'exécution d'un benchmark sur un périphérique `/dev/rbd\` ou à partir d'une machine virtuelle interne, certains facteurs peuvent affecter les performances :

- le cache du système d'exploitation : il peut donner l'impression que votre système est très rapide pendant un certain temps, puis ralentit. Utilisez les E/S directes pour éviter cela ;
- la prise en charge des demandes FLUSH/FUA dans la pile de stockage utilisée pour les tests ;
- l'hyperviseur et/ou le pilote (virtio/scsi) utilisés pour la virtualisation ;
- « réchauffer » votre stockage avant de lancer ou d'exécuter plusieurs fois un benchmark.


## Benchmark réel

Selon la taille de votre cluster, vous pouvez tester un plus grand nombre d'images ou utiliser différents paramètres. Généralement, vous pouvez modifier le nombre d'images, leur taille, la taille de la file d'attente, le nombre de *FIO workers*, le type de charge de travail (lecture/écriture/aléatoire/séquentiel), la durée du test, etc.


### Lecture/écriture aléatoire mixte avec une taille de bloc de 4 Ko

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Lectures séquentielles avec taille de bloc de 1 Mo

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=read --bs=1M --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Écritures aléatoires avec une taille de bloc de 4 000 tr/min
Ce test générera quatre processus de Fio, chacun s'écrivant sur une image distincte à l'aide de deux threads.


```bash
fio —runtime=600 —time_based —group_reporting \
    --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image-1 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-2 --ioengine=rbd --pool=rbd --rbdname=test-image-2 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-3 --ioengine=rbd --pool=rbd --rbdname=test-image-3 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-4 --ioengine=rbd --pool=rbd --rbdname=test-image-4 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32
```


### Lecture/écriture mixte avec différentes tailles de blocs

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 \
    --bssplit=64k/47:4k/22:16k/12:8k/6:512/5:32k/4:12k/3:256k/1,8k/89:4k/11 \
    --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


## Mesurer les performances des baies de disques virtuels

Pour mesurer les performances d'une baie de disques virtuels, nous effectuons des tests sur 32 images, chacune d'une taille de 32 Go, ce pendant quelques heures. L'utilisation de jeux de données volumineux pendant les tests nous garantit que les performances resteront à un niveau spécifié.