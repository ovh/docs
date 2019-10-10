---
title: 'Configuration de VLAN'
keywords: VLAN
description: 'Configuration de VLAN'
slug: configuration-de-vlan
excerpt: 'Nous allons vous présenter comment créer un vlan, par exemple vlan 666'
section: 'Configurations techniques complexes'
---

## Sur OverTheBox Plus (switch Ethernet intégré)
- Rendez-vous dans  **Network**  >  **Switch**  >  **go to expert mode**
- Cliquez sur **Add** puis inscrivez l'ID **666** sur la ligne venant d'apparaitre.
- Cliquez sur " **Save & Apply** "
- 

## Autre solution
Rendez-vous dans  **Network**  >  **Interfaces**  > puis cliquez " **Add new interface** ” en bas à gauche de la page.

Ensuite, nommez la nouvelle interface, par exemple : “ **vlan666** ”

- Cochez **" custom interface "** et écrivez **“ eth0.666 ”**, ensuite validez.



> [!alert]
>
> Dans cet exemple, nous avons choisi la valeur 666. Cette valeur doit
> obligatoirement être comprise en  2  et  4094
> 

- Veuillez ensuite vous rendre dans l'onglet **"General Setup"** si vous souhaitez configurer les informations de ce VLAN en statiques
- Cliquez sur " **Save & Apply** "