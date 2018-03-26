---
title: Reception de-mails en double ou en triple lorsque vous synchronisez votre messagerie
slug: e-mails-en-doubles-ou-triples
section: Diagnostic
---

Vous nous contactez parfois pour nous indiquer recevoir des e-mails en double ou en triple dans votre logiciel de messagerie. Cela n’est pas un souci dû à notre infrastructure, pour le vérifier il vous suffit de vous [connecter au webmail](https://mail.ovh.net/){.external} et vous constaterez que vos e-mails ne sont présents qu’en un seul exemplaire.


## Dou provient le probleme ?
Votre client de messagerie est configuré pour relever votre courrier toutes les minutes, mais finalement en 1 minute, une session n’a pas assez de temps pour s’ouvrir et se fermer (cela dépend du nombre de messages, du débit Internet, de la puissance de l'ordinateur, etc ...).


## Comment le resoudre ?

### Dans Outlook 2007 et 2010
- Dans le menu Fichier (Outlook 2010) ou Outils (Outlook 2007) cliquez sur `Paramètres du compte`{.action}
- Sélectionnez votre adresse e-mail et cliquez sur `Modifier`{.action} (au-dessus du tableau)
- Une fenêtre s’ouvre, en bas et à droite du bloc, cliquez sur `Paramètres Supplémentaires`{.action}
- Cliquez sur l’onglet `Options avancées`{.action}
- Augmentez le paramètre `Délais du serveur`{.action} au maximum


### Dans Outlook 2002 et 2003
- Dans le menu Outils, cliquez sur `Comptes de messagerie`{.action}
- Cliquez sur `Afficher ou modifier les comptes de messagerie existants`{.action}, puis sur `Suivant`{.action}
- Sélectionnez votre compte, puis cliquez sur `Modifier`{.action}
- Une fenêtre s’ouvre, en bas et à droite du bloc, cliquez sur `Paramètres Supplémentaires`{.action}
- Cliquez sur l’onglet `Options avancées`{.action}
- Augmentez le paramètre `Délais du serveur`{.action} au maximum


### Dans Outlook Express 5.x et 6.0
- Dans le menu Outils, cliquez sur `Comptes`{.action}
- Cliquez sur l’onglet `Courrier`{.action}
- Sélectionnez votre compte, puis cliquez sur `Propriétés`{.action}
- Cliquez sur l’onglet `Options avancées`{.action}
- Augmentez le paramètre `Délais du serveur`{.action} au maximum


### Dans Thunderbird
- Rendez-vous dans le menu `Outils`{.action}, et sélectionnez `Paramètres des comptes`{.action}
- Dans les réglages `Paramètres serveur`{.action} de votre adresse e-mail, augmentez le paramètre `Délais du serveur`{.action} au maximum


## Notions
Comme l’explique l’un des responsables Outlook sur Microsoft Technet, *"la messagerie (e-mail) n’est pas de la messagerie instantanée. Les utilisateurs ont pris l’habitude de recevoir de plus en plus rapidement leurs e-mails, mais c’est une erreur, et surtout le protocole n’est pas fait pour.*