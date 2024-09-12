---
title: "Configurer un routeur L3 pour acheminer des paquets entre différents réseaux/sous-réseaux"
excerpt: "Apprenez à configurer un routeur de niveau 3 (ou une instance Linux simulant cette fonctionnalité) pour router des paquets entre plusieurs réseaux ou sous-réseaux."
updated: 2024-09-12
---

## Objectif

**Découvrez comment configurer un routeur de niveau 3 (ou une instance Linux agissant en tant que tel) pour acheminer des paquets entre différents réseaux ou sous-réseaux.** Ce guide couvre l'activation du routage IP, la configuration des interfaces réseau, l'ajout de règles de pare-feu et la persistance de ces configurations.

## Prérequis

- Accès à une instance Linux avec des privilèges administratifs (`sudo`).
- Plusieurs interfaces réseau ou la capacité de configurer des interfaces virtuelles.
- `iptables` installé sur le système.

## En pratique

### Étape 1 : Activer le routage IP

Pour permettre à votre système de router des paquets entre différents réseaux, vous devez activer le transfert de paquets IP.

- Activez temporairement le routage IP.
  
    ```bash
  sudo sysctl -w net.ipv4.ip_forward=1
  ```
    
- Pour rendre cette configuration persistante après un redémarrage, ajoutez ou modifiez la ligne suivante dans `/etc/sysctl.conf` : `net.ipv4.ip_forward = 1`.

  ```bash
  net.ipv4.ip_forward = 1
  ```
    
- Appliquez immédiatement les modifications.

  ```bash
  sudo sysctl -p
  ```

### Étape 2 : Configurer les interfaces réseau

Si vous avez plusieurs interfaces réseau physiques, vous pouvez leur attribuer des adresses IP. Si vous n'avez qu'une seule interface, vous pouvez utiliser des interfaces virtuelles pour simuler plusieurs réseaux.

- Attribuez une adresse IP au premier sous-réseau sur `eth0`.

 ```bash
  sudo ip addr add 192.168.1.1/24 dev eth0
  ```

- Attribuez une adresse IP au deuxième sous-réseau en utilisant une interface virtuelle `eth0:1`.

   ```bash
  sudo ip addr add 192.168.2.1/24 dev eth0 label eth0:1
  ```
   
- Vérifiez la configuration des interfaces.

   ```bash
  ip addr show
  ```

### Étape 3 : Installer et configurer `iptables` pour autoriser le transfert de paquets

Vous devez vous assurer que les paquets peuvent être transférés entre les sous-réseaux.

- Installez `iptables` si ce n'est pas déjà fait.

  ```bash
  sudo dnf install iptables-services
  ```
  
- Ajoutez une règle pour autoriser le transfert de paquets entre les sous-réseaux.

  ```bash
  sudo iptables -A FORWARD -i eth0 -o eth0 -j ACCEPT
  ```
  
- Vérifiez les règles `iptables` pour confirmer l'ajout.

  ```bash
  sudo iptables -L
  ```

### Étape 4 : Tester la connectivité entre les sous-réseaux

Vous pouvez maintenant tester la configuration du routage en utilisant la commande `ping`.

- Testez la connectivité d'un sous-réseau à l'autre. Si le ping fonctionne, cela signifie que le routage est correctement configuré.

 ```bash
  ping 192.168.2.1
  ```

### Étape 5 : Sauvegarder les règles `iptables`

Pour garantir que les règles `iptables` persistent après un redémarrage, enregistrez-les.

  ```bash
  sudo service iptables save
  ```

- Sauvegardez les règles actuelles dans `/etc/sysconfig/iptables`. Elles seront automatiquement rechargées au démarrage.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
