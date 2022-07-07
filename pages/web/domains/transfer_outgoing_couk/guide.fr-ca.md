---
title: "Transférer un nom de domaine .uk vers un autre bureau d'enregistrement"
legacy_guide_number: 2225
slug: transfert-sortant-dun-nom-de-domaine-couk
excerpt: "Découvrez comment effectuer le transfert sortant d’un nom de domaine UK vers un autre registrar"
section: Transfert
order: 5
---

**Dernière mise à jour le 12/07/2021**

## Objectif

Le processus de changement de bureau d'enregistrement (*registrar*) pour les domaines de premier niveau (*top-level domain*, ou **TLD**) de l'indicatif de pays **UK** (**.uk**) diffère de celui détaillé dans notre [guide de transfert des TLD génériques](../transfert-sortant-dun-nom-de-domaine-generique-ou-geographique/). Les instructions ci-dessous concernent les extensions suivantes :

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Ce guide vous explique comment initier un transfert sortant pour ces TLD depuis votre espace client OVHcloud.**

## Prérequis

- Disposer d'un [nom de domaine .uk](https://www.ovhcloud.com/fr-ca/domains/) enregistré chez OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et disposer des droits nécessaires pour gérer le nom de domaine (être administrateur du domaine)
- Le nom de domaine doit être toujours actif, c'est-à-dire qu'il ne doit pas avoir expiré ou être bloqué par OVHcloud
- Le nom de domaine ne doit pas faire l’objet d’un litige en cours auprès du [Registre Nominet](https://www.nominet.uk/)

## En pratique

Les TLD concernés disposent chacun d'une balise (*TAG*) correspondand à leur bureau d'enregistrement de noms de domaines actuel, tel qu’OVHcloud. Le transfert s'initie par la substitution du TAG par celui identifiant votre nouveau bureau d'enregistrement.

Si vous ne connaissez pas encore le TAG requis, vous pouvez en faire la demande chez votre nouveau prestataire ou consulter la [liste des bureaux d'enregistrement Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### Étape 1 : vérifier les informations nécessaires

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et sélectionnez `Web Cloud`{.action}. Cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné.

N'oubliez pas que vous devez être connecté en tant que contact administrateur.

Dans l'onglet `Informations générales`{.action}, vous pouvez vérifier que les conditions requises pour le processus de transfert sont remplies.


### Étape 2 : modifier le TAG de votre nom de domaine

Cliquez sur le lien `Tag de transfert sortant`{.action} dans la section intitulée **Sécurité**.

![transfert sortant](images/img_4267.jpg){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez le TAG de votre nouveau bureau d'enregistrement puis cliquez sur `Confirmer`{.action}.

![transfert sortant](images/img_4268.jpg){.thumbnail}

Si vous n'arrivez pas à modifier le TAG de votre nom de domaine depuis votre espace client, vous pouvez en demander la modification auprès du Registre Nominet. Retrouvez plus d’informations sur le [site officiel de Nominet](https://www.nominet.uk/domain-support/).

### Étape 3 : suivre le processus de transfert chez votre nouveau bureau d'enregistrement

La modification de la balise TAG active le processus de transfert.

Contactez dès lors votre nouveau fournisseur pour obtenir davantage de détails ainsi que pour toute question relative au suivi du transfert.

## Aller plus loin

[Transférer un nom de domaine vers un autre bureau d’enregistrement](../transfert-sortant-dun-nom-de-domaine-generique-ou-geographique/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
