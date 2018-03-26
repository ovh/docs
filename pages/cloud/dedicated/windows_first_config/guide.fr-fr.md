---
title: Première configuration Windows Server (Pare-feu)
slug: windows-first-config
excerpt: Decouvrez ici comment activer la connexion au Bureau a distance via KVM si celle-ci est desactivee.
section: Diagnostic et mode Rescue
---


## Prérequis
Lors de l'installation d'un Windows Server 2012, 2012 R2 ou 2016 il est possible que la connexion au Bureau à distance soit désactivée, ainsi que la réponse au protocole ICMP. Si tel est le cas, ce guide vous indique où faire les modifications.

Pour cela, il vous sera nécessaire d'avoir :

- Un serveur installé sous Windows Server 2012, 2012 R2 ou 2016.
- Un accès à votre espace client OVH.


## Procedure

### Étape 1 &#58; Acceder au KVM
Afin d'accéder au KVM, vous devez accéder à votre `Espace client OVH`{.action}, vous rendre sur l'onglet `Dédié`{.action}, puis sur votre serveur.

Il vous faudra ensuite vous rendre sur la section `IPMI`{.action} en haut de votre espace client, puis lancer le KVM via l'application JAVA.


![KVM](images/windows1.png){.thumbnail}

Vous aurez alors un accès "clavier-souris virtuel" sur votre serveur.


### Étape 2 &#58; Premiers parametrages de Windows
Sur l'écran KVM, vous constaterez le démarrage de Windows. Il vous faudra alors configurer la langue du clavier Windows, ainsi que le mot de passe **Administrator**.


![Langue](images/windows2.png){.thumbnail}


![Mdp](images/windows3.png){.thumbnail}


### Étape 3 &#58; Modification du Pare-feu Windows
Une fois l'installation terminée, il faut aller dans `Outils d'Administration`{.action}, puis dans `Pare-feu Windows avec sécurité avancée`{.action}.


![Admin](images/windows4.png){.thumbnail}

Enfin, il vous sera nécessaire d'activer l'ICMP et la connexion au Bureau à distance. *(clic droit -> Autoriser la règle)*


![Active](images/windows5.png){.thumbnail}