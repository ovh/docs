---
title: "Utilisation d'Hyper-V avec des IPs failover sur un vRack"
excerpt: "Découvrez comment configurer une machine virtuelle avec des IPs failover et Hyper-V sur un vRack"
slug: ipfo-vrack-hyperv
section: vRack 
---

**Dernière mise à jour le 18/06/2020**

## Objectif

Suivez le processus d'installation d'Hyper-V, l'association d'un switch virtuel et la configuration d'une machine virtuelle pour fonctionner avec les IPs Failover sur un vRack.

**Découvrez comment configurer une machine virtuel avec des IPs failover et Hyper-V sur un vRack.**

## Prérequis

- Un serveur dédié compatible vRack avec Windows Server installé.
- Un image ISO pour le système d'exploitation qui sera installé sur votre machine virtuelle. (CentOS 7 sera utilisé comme exemple dans ce guide)
- Un vRack livré à votre compte OVHcloud.
- Un Bloc IP  de 4 adresses IP ou plus.
- Accès à l'espace client OVHcloud

## En pratique

Ce guide suppose que vous avez déjà installé Windows Server, connecté via le Bureau à distance et que vous avez déjà affecté votre serveur dédié et votre bloc IP à un vRack. Pour plus d'informations sur ces étapes, reportez-vous aux étapes 1 à 4 de notre guide: [Configurer plusieurs serveurs dédiés dans le vRack](../configurer-plusieurs-serveurs-dedies-dans-le-vrack).

### Installation d'Hyper-V

La première étape consiste à installer Hyper-V.

Dans le Gestionnaire de serveur, cliquez sur 'Add roles and features'
 
![Installing hyper-v](images/add-roles-features.png){.thumbnail}

Dans l'Assistant, cliquez sur 'Next' pour passer à la page suivante.

![Installing hyper-v](images/add-roles-features-2.png){.thumbnail}

Vérifiez que l'option 'Role-Based or feature-based installation' est sélectionnée, puis cliquez sur "Next".

![Installing hyper-v](images/add-roles-features-3.png){.thumbnail}

Vérifiez que l'option 'Select a server from the server pool' est sélectionnée et ainsi que le serveur sur lequel vous travaillez dans la liste en dessous. Cliquez ensuite sur 'Next'.

![Installing hyper-v](images/add-roles-features-4.png){.thumbnail}

Cochez 'Hyper-V', puis cliquez sur 'Next'.

![Installing hyper-v](images/add-roles-features-5.png){.thumbnail}

Sur la page suivante, cliquez sur 'Next'

![Installing hyper-v](images/add-roles-features-9.png){.thumbnail}

Identifiez la connexion réseau de votre serveur que vous souhaitez utiliser pour le switch virtuel.

Ouvrez une Command Prompt ou PowerShell et exécutez la commande ipconfig /all.

Notez que dans notre exemple, Ethernet 2 est l'interface utilisée pour le vRack, il est possible que la carte réseau vRack utilise une interface différente. Utilisez une interface qui ne possède pas l'adresse IP principale du serveur ou utilisant une adresse IP 169.254.x.x auto-attribuée.

![check-interface](images/ipconfig.png){.thumbnail}

Une fois ces informations disponibles, revenez sur la fenêtre 'Add Roles and Features Wizard' et cliquez sur 'Next'.

![Installing hyper-v](images/add-roles-features-6.png){.thumbnail}

Sélectionnez l'adaptateur pour le vRack que vous avez identifié dans le Command Prompt ou PowerShell, puis cliquez sur 'Next'.

![Installing hyper-v](images/add-roles-features-7.png){.thumbnail}

Les 2 pages suivantes vous permettent de choisir les options de migration et de stockage. Vous pouvez les configurer comme vous le souhaitez.

Une fois que vous avez atteint la page de confirmation, cochez la case 'Restart the destination server automatically if required', cliquez sur 'Yes', puis sur 'Install'.

![Installing hyper-v](images/add-roles-features-8.png){.thumbnail}

Hyper-V va maintenant s'installer et le serveur devrait redémarrer.

### Création et configuration d'une machine virtuelle.

Une fois le serveur redémarré, connectez-vous et ouvrez le Hyper-V Manager.

Sélectionnez votre serveur sur la gauche, cliquez sur 'New' et sélectionnez 'Virtual Machine'

![create-vm](images/create-vm.png){.thumbnail}

Dans 'New Virtual Machine Wizard', configurez la machine virtuelle comme vous le souhaitez. Lorsque vous accédez à l'étape 'Configure Networking'. Veillez à sélectionner le switch virtuel. Une fois sélectionné, cliquez sur 'Next' pour continuer.

![create-vm](images/create-vm-2.png){.thumbnail}

Une fois que vous avez atteint la section 'Installation Options', veillez à ajouter l'image ISO pour le système d'exploitation que vous allez installer. Cliquez sur 'Next'  pour continuer.

![create-vm](images/create-vm-3.png){.thumbnail}

Lorsque vous accédez à la page 'Summary', vérifiez que les paramètres du switch virtuel et du système d'exploitation sont corrects, puis cliquez sur 'Finish'.

![create-vm](images/create-vm-4.png){.thumbnail}

### Installation et configuration de la machine virtuelle

Démarrez la machine virtuelle. L'installation du système d'exploitation doit se lancer automatiquement. Si ce n'est pas le cas, le message d'erreur suivant s'affiche:

"The unsigned image's hash is not allowed (DB)"

Dans ce cas, vous devez désactiver le Secure Boot.

Éteignez la machine virtuelle, puis cliquez sur "Settings"

![disable-secure-boot](images/disable-secure-boot.png){.thumbnail}

Cliquez sur 'Security', désélectionnez 'Enable Secure Boot', puis cliquez sur 'Apply'.

![disable-secure-boot](images/disable-secure-boot-2.png){.thumbnail}

Une fois terminé, redémarrez la machine virtuelle.

Configurez le système d'exploitation comme vous le souhaite.

Pour les paramètres réseau, définissez une adresse IP statique.

Dans notre exemple, le bloc IP assigné au vRack est 192.99.134.80/29. Voici la répartition du bloc:

<br>
192.99.134.80 -  Adresse réseau (Réservé - Inutilisable)<br>
192.99.134.81 -  Premier IP utilisable<br>
192.99.134.82<br>
192.99.134.83<br>
192.99.134.84<br>
192.99.134.85 - Dernière adresse IP utilisable<br>
192.99.134.86 - Passerelle par défaut (Réservée - Inutilisable)<br>
192.99.134.87 - Adresse de diffusion (Réservé - Inutilisable)<br>
<br>

Nous allons utiliser 192.99.134.81 dans notre exemple. La configuration doit se présenter comme ceci:

<br>
Address: 192.168.134.81<br>
Subnet Mask: 255.255.255.248<br>
Gateway: 192.99.134.86<br>
DNS: 213.186.33.99 (Vous pouvez mettre un autre DNS si vous le souhaitez)<br>
<br>

Une fois le système d'exploitation installé. Il devait déjà être connecté.

Vous verez comment le fichier ifcfg-eth0 doit apparaître.

![configured](images/configured.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
