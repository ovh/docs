---
title: 'Comment configurer votre NIC pour la fonctionnalité OVHcloud Link Aggregation sur Debian 9'
slug: ola-debian9
excerpt: 'Activer OVHcloud Link Aggregation sur votre Debian 9'
section: 'Utilisation avancée'
---

**Dernière mise à jour le 24 octobre 2019**

## Objectif

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible. 

Découvrez comment regrouper vos NIC (Network Interface Controller) pour les utiliser avec le service OLA sur Debian 9.  

## Prérequis

- [Comment configurer votre NIC pour la fonctionnalité OVHcloud Link Aggregation depuis l’espace client d’OVHcloud](https://docs.ovh.com/fr/dedicated/ola-manager){.external}

> [!warning]
>
> Vous devez télécharger le paquet ifenslave sur votre serveur avant d’activer la fonctionnalité OLA sur l’API ou l’espace client OVHcloud. Pour ce faire, utilisez la commande suivante :
>
> ```
> apt install ifenslave
> ```
>

## En pratique

Étant donné que nous avons une configuration privée-privée pour nos NIC sur OLA, il est impossible de se connecter en SSH au serveur. Par conséquent, vous devrez utiliser l’outil IPMI pour accéder au serveur. Pour cela, vous devez d'abord vous connecter à [l’espace client d’OVHcloud](https://www.ovh.com/manager/){.external}.  Sélectionnez ensuite le serveur que vous souhaitez configurer dans la barre latérale gauche et cliquez sur l’onglet `IPMI`{.action}.

![remote kvm](images/remote_kvm.png){.thumbnail}

Cliquez ensuite sur le bouton `Depuis un applet Java (KVM)`{.action}. Un logiciel JNLP sera téléchargé. Lancez le logiciel pour accéder à l’IPMI. Connectez-vous en utilisant les informations d’identification associées au serveur.

Par défaut, en utilisant un modèle d’OVHcloud, les NIC seront nommés soit *ethX*, soit *enoX*. Si vous n’utilisez pas un modèle OVHcloud, vous pouvez retrouver les noms de vos interfaces en utilisant la commande suivante :

```bash
ip a
```

> [!primary]
>
> Cette commande retournera plusieurs «interfaces». Si vous avez du mal à identifier vos NIC physiques, la première interface aura toujours l’adresse IP publique du serveur assignée par défaut.
>

Une fois les noms de vos deux NIC identifiés, il faut à présent créer le NIC bonding ou agrégation de lien sur le système d’exploitation. Pour ce faire, créez le fichier d’interfaces sur un éditeur de texte de votre choix à l’aide de la commande suivante :

```bash
vi /etc/network/interfaces
```

Ceci ouvrira un fichier texte vide. Pour configurer l’interface d’agrégation, insérez les lignes suivantes au bout du fichier texte :

```bash
auto bond0
  iface bond0 inet static
  address 10.0.0.1/24
  bond-mode 802.3ad
  bond-slaves eno1 eno2
  bond-miimon 100
  bond-downdelay 200
  bond-lacp-rate 1
  bond-xmit_hash_policy layer3+4

  up ip -6 addr add fc10:0000:0000:0001::/64 dev bond0
```

> [!primary]
>
> Il vous suffit d’ajouter la dernière ligne à ce fichier si vous envisagez de configurer un réseau privé via IPv6. 
>

Pour finir, il faudra redémarrer le service réseau à l’aide de la commande suivante :

```bash
systemctl restart networking
```

Ce redémarrage peut prendre quelques minutes puisqu’il permet de mettre en place l’interface d’agrégation.  Pour vérifier que cette agrégation fonctionne, effectuez un ping vers un autre serveur sur le même vRack. Si cela fonctionne, vous avez configuré la connexion correctement. Si ce n’est pas le cas, vérifiez vos configurations ou essayez de redémarrer le serveur.

## Conclusion

OVHcloud vous offre la liberté et la flexibilité nécessaires pour utiliser votre matériel de la manière la plus adaptée à vos besoins. Maintenant que vous avez lu cet article, vous devriez pouvoir configurer OLA (OVHcloud Link Aggregation) sur Debian 9 afin d’utiliser vos deux NIC comme interfaces privées agrégées. 