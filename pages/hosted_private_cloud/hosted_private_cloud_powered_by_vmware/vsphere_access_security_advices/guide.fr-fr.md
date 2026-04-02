---
title: Bonnes pratiques de sécurité sur le client vSphere Web
excerpt: Découvrez comment sécuriser l'accès à votre client vSphere Web
updated: 2020-06-30
---

## Objectif

Pour assurer l'intégrité de votre infrastructure, il convient d'en restreindre l'accès. Pour cela, nous vous proposons différentes méthodes.

**Apprenez à sécuriser rapidement et facilement l'accès à votre client vSphere Web grâce à quelques conseils.**

## Prérequis

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Pour accéder à vos services :** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Sélectionnez votre service vSphere

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## En pratique

### Contrôler les accès par IP

Le premier conseil est lié à la restriction de l'accès par IP. Nous vous conseillons de toujours fonctionner avec un système d'inscription sur une liste blanche. Cette technique fonctionne sur l'interdiction de principe de toutes les adresses IP et d'ajout des adresses pouvant avoir accès à votre infrastructure.

Après avoir sélectionné votre service, rendez-vous dans l'onglet `Sécurité`{.action}. Un tableau s'affichera, sur lequel vous pourrez voir les adresses IP autorisées ou refusées. Pour en ajouter de nouvelles, cliquez à droite sur `Ajout des IP`{.action} :

![Ajout d'IP](images/adding_ip.png){.thumbnail}

### Créer des utilisateurs spécifiques

Nous vous conseillons fortement de créer un accès personnel pour chaque personne devant avoir accès à votre infrastructure. Dans l'onglet `Utilisateurs`{.action}, pour en ajouter de nouveaux, cliquez sur le bouton situé à droite : `Créer un utilisateur`{.action}.

![Utilisateurs](images/users.png){.thumbnail}

Lors de la création d'un utilisateur, un mot de passe est demandé.

> [!primary]
>
> Pour sécuriser parfaitement vos données, votre mot de passe doit suivre ces quelques recommandations :
>
> - comporter au minimum huit caractères ;
> - comporter au minimum trois types de caractères ;
> - ne pas être tiré du dictionnaire ;
> - ne pas comporter d’informations personnelles (votre prénom, nom ou date de naissance) ;
> - ne pas être utilisé pour plusieurs accès utilisateur ;
> - être stocké dans un coffre-fort de mots de passe ;
> - être changé tous les trois mois ;
> - être différent des mots de passe précédents.
>

Vous pourrez ensuite gérer les droits de chaque utilisateur en cliquant sur le bouton `...`{.action} à droite de chaque identifiant :

![Édition des paramètres des utilisateurs](images/users_edit.png){.thumbnail}

### Limiter les temps de session

En fin d'utilisation, il est conseillé de fermer la session de votre utilisateur. Pour limiter le temps de connexion, il est possible d'ajouter une durée d'expiration de session.

Dans l'onglet `Sécurité`{.action}, cliquez ensuite sur le bouton `Changer le délai d'expiration`{.action} situé sur la droite.

![Expiration de la session](images/security-expiration.png){.thumbnail}

Renseignez ensuite le nombre de minutes avant qu'une session expire.

![Expiration de la session](images/expiration.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
