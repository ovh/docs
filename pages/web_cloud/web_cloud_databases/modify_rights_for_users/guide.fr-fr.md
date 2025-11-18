---
title: "Web Cloud Databases - Modifier les droits d'un utilisateur"
excerpt: "Découvrez comment modifier les droits d'un utilisateur sur votre solution Web Cloud Databases"
updated: 2025-06-23
---

## Objectif

La solution [Web Cloud Databases](/links/web/databases) peut contenir plusieurs bases de données. Elle permet de définir un ou plusieurs utilisateurs pour la gestion et l'utilisation de vos bases de données. Ces utilisateurs peuvent avoir des droits plus ou moins élevés en fonction de leurs rôles au niveau de vos bases de données.
Au cours de l'utilisation du produit, vous pouvez être amené à modifier les droits d'un utilisateur sur votre [Web Cloud Databases](/links/web/databases).

**Découvrez comment modifier les droits d'un utilisateur sur votre solution Web Cloud Databases.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer d'une solution [Web Cloud Databases](/links/web/databases) et d'un ou plusieurs utilisateurs.

## En pratique

> [!primary]
> Pour créer un nouvel utilisateur sur votre solution Web Cloud Databases, consultez la section **Créer un utilisateur** de notre guide « [Créer vos bases de données et vos utilisateurs sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) ».

Cliquez sur les onglets ci-dessous afin d'afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Web Cloud Databases`{.action}, puis choisissez la solution Web Cloud Databases concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Utilisateurs et droits`{.action}.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Étape 4**
>>
>> Dans le tableau apparaît, cliquez sur le bouton `...`{.action} situé à droite de l'utilisateur concerné, puis sur `Gérer les droits`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Étape 5**
>>
>> Sur la nouvelle page qui s'affiche, vous trouverez un tableau recensant toutes les bases de données présentes sur votre solution Web Cloud Databases. Vous visualiserez dans ce tableau l'ensemble des droits dont votre utilisateur dispose pour chacune des bases de données présentes sur votre solution Web Cloud Databases.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> C'est à cet endroit que vous pourrez modifier les droits de votre utilisateur pour chacune de vos bases de données. Pour cela et pour chacune des bases de données concernées, il vous suffit de cliquer sur les cercles vides correspondants aux droits que vous souhaitez redéfinir pour votre utilisateur. La modification est effective en quelques instants.

Retrouvez ci-dessous un tableau récapitulatif des types de requêtes possibles sur une base de données en fonction du droit attribué à l'utilisateur :

<table align="center">
<thead>
<tr>
<th><center>Droits</center></th>
<th><center>Administrateur</center></th>
<th><center>Lecture / Écriture</center></th>
<th><center>Lecture</center></th>
<th><center>Aucun</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).