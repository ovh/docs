---
title: Création d’une personnalisation Windows
slug: create-sysprep
excerpt: Afin de deployer des VMs Windows, il est necessaire d’appliquer a celles-ci une personnalisation (appelee sysprep). Celle-ci est creee cote DedicatedCloud et selectionnee lors de la creation du pool dans l’administration Horizon
section: Tutoriels
---


## Exemple de creation
- Connectez-vous au DedicatedCloud livré avec l'infrastructure Horizon puis rendez vous dans **"Home"**, **"Management"**, et enfin **"Customization specifications manager"**
- Cliquez sur **"New"** puis renseignez un type (Windows), un nom et éventuellement une description

![Créer un sysprep](images/1200.png){.thumbnail}

- Renseignez le nom du **Propriétaire** et l'**Organisation**

![Créer un sysprep](images/1201.png){.thumbnail}

- Sélectionnez **"Use the virtual machine name"**

![Créer un sysprep](images/1202.png){.thumbnail}

- (facultatif) Si nécessaire, renseignez une clé de licence. Si vous utilisez une méthode d'activation SPLA ou un template windows fournit par OVH, cette étape peut ne pas être nécessaire
- Renseignez le mot de passe **"Administrator"** local à appliquer

![Créer un sysprep](images/1203.png){.thumbnail}

- (facultatif) Dans **"Run once"**, il est possible de renseigner des commandes à effectuer lors de la personnalisation du futur bureau virtuel.
- Dans le choix de l'adressage réseau : sélectionnez **"Typical settings"**

![Créer un sysprep](images/1204.png){.thumbnail}

- Dans le choix du domaine ou du workgroup, laissez le choix par défaut : **"Workgroup: WORKGROUP"**

![Créer un sysprep](images/1205.png){.thumbnail}

- Cochez **"Generate New Security ID (SID)"**

![Créer un sysprep](images/1206.png){.thumbnail}

- Validez le formulaire pour créer le template de personnalisation, votre Sysprep est prêt

![Créer un sysprep](images/1207.png){.thumbnail}