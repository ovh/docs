---
title: 'Passer root et definir un mot de passe'
slug: passer-root-et-definir-un-mot-de-passe
legacy_guide_number: 1786
section: Tutoriels
---

## Preambule

Pour effectuer certaines actions, vous aurez parfois besoin de passer root, ou d'effectuer des opérations en tant que root, notamment:

- L'installation de packages
- La définition de mot de passe pour un utilisateur ou pour root (indispensable pour accéder au KVM)
- Pour effectuer certaines tâches d'administration

### Prérequis

- Créer une instance dans l'espace client OVH
- Y être connecté en SSH avec l'utilisateur par défaut ( admin ou le nom de la distribution pour les images les plus récentes )

> [!success]
>
> Ce guide est réalisé sur le principe que l'utilisateur par défaut se nomme
> admin .
> 

## Effectuer une operation en tant que root - sudo

### Definir un mot de passe

- Définir un mot de passe pour l'utilisateur admin (Le mot de passe n'est pas affiché en clair pour des raisons de sécurité) :
- Définir un mot de passe pour l'utilisateur root (Le mot de passe n'est pas affiché en clair pour des raisons de sécurité) :

### Autres exemples

- Mettre à jour le cache des paquets (Debian / Ubuntu)
- Mettre à jour le système (CentOS / Fedora)
- Editer un fichier de configuration:

## Operations a effectuer en root

- Passer root
- Définir un mot de passe pour root (après être passé root):
- Définit un mot de passe pour l'utilisateur admin