---
title: Installer la clé SSH OVH
slug: ovh-ssh-key
excerpt: Ce guide vous décrit l'installation d'une clé SSH OVH pour permettre l'intervention de nos administrateurs, puis sa désactivation
section: SSH et clé SSH
---

**Dernière mise à jour le 22/11/2017**

## Objectif

Dans certains cas, l'intervention d'un administrateur OVH peut être nécessaire sur votre infrastructure dédiée. 

** Ce guide vous décrit l'installation d'une clé SSH OVH pour permettre l'intervention de nos administrateurs, puis sa désactivation. **

## Prérequis

- Être [connecté en SSH](https://docs.ovh.com/fr/dedicated/ssh-introduction/) (accès root).

## En pratique

### Étape 1 : installer la clé

Une fois connecté en SSH, voici la commande à effectuer :

- Si votre serveur est hébergé chez OVH Europe :

```sh
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- Si votre serveur est hébergé chez OVH Canada :

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
```

Si l'opération s'est bien déroulée, le fichier `authorized_keys2` a été créé. Il contient des informations sous cette forme :

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Étape 2 : résolution des défauts

Même si la clé est correctement installée, il est possible que nos administrateurs ne puissent pas se connecter sur votre serveur. Veuillez alors vérifier les points suivants :

#### Vérifier que le fichier `/root/.ssh/authorized_keys2` existe

Pour vous assurer de la présence de ce fichier, vous devez entrer la commande suivante :

```sh
cat /root/.ssh/authorized_keys2
```

#### Vérifier que le serveur SSH est configuré de sorte à accepter les connexions provenant de root

Pour cela, vous devez vérifier les paramètres suivants dans le fichier `/etc/ssh/sshd_config` :

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Ensuite, redémarrez le service SSH :

```sh
/etc/init.d/sshd restart
```

#### Vérifier que le répertoire de base de l'utilisateur root est bien /root

Vous pouvez utiliser `/etc/passwd` pour vérifier cela :

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Le 6e élément de la ligne (les éléments sont séparés par des **:**) doit être /root.

#### Vérifier que le pare-feu logiciel ne bloquera pas l'accès

En cas d'utilisation d'un pare-feu logiciel, il faudra ajouter une règle d'autorisation pour la source cache-ng.ovh.net (cache-ng.ovh.ca pour un serveur au Canada) avec comme port de destination votre port SSH (par défaut, le 22  ). Voici un exemple de règle iptables :

**Pour un serveur en France**

```sh
iptables -t filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables -t filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Pour un serveur au Canada**

```sh
iptables -t filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables -t filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Vérifier que le port SSH n'est pas personnalisé

Si vous avez personnalisé votre port SSH, nous vous invitons à nous le préciser afin que l'administrateur puisse se connecter.
 

### Étape 3 : désactiver la clé

Une fois l'intervention de l'administrateur terminée, vous pouvez désactiver la clé SSH. Pour cela, vous avez seulement besoin de modifier le fichier `authorized_keys2` et de le commenter (avec **#**) comme indiqué ci dessous :

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Aller plus loin

[Introduction au SSH](https://docs.ovh.com/fr/dedicated/ssh-introduction/).

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.
