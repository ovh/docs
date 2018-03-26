---
title: Sécurité - Antispam - Antivirus pour Exchange
slug: exchange-securite-antispam-antivirus-vaderetro
excerpt: Retrouvez ici la procedure de mise en place de l’antispam sur votre service Exchange
section: Configuration de l’offre Exchange
---

## Options de sécurité

### Configuration

Votre protection sera fonctionnelle si ces prérequis sont respectés :

- Le nom de domaine déclaré sur votre plate-forme Exchange est configuré en type "Autoritatif" ou "Non autoritatif" . C'est à dire que votre service mail est soit complètement géré par le serveur Exchange ou avec une cohabitation entre des comptes e-mails pop/imap fournit par OVH (mxplan) et votre service Exchange..
- Le nom de domaine déclaré sur votre plate-forme Exchange utilise les serveurs MX suivants :
mx0.mail.ovh.net en priorité 1
mx1.mail.ovh.net en priorité 5
mx2.mail.ovh.net en priorité 50
mx3.mail.ovh.net en priorité 100

Sous 4 à 24H, vérifiez la couleur du bouton de diagnostic MX dans l'onglet `Domaines`{.action} de votre plate-forme Exchange. Si celle-ci est verte, la configuration est correcte.


![emails](images/4134.png){.thumbnail}

Les mails considérés comme  **[SPAM]**  porteront cette mention dans l'objet du mail et seront délivrés par défaut dans le dossier courrier indésirable du compte Exchange.


### Informations supplementaires

Il est probable que tous les mails considérés comme [SPAM] ne soient pas détectés. Cette situation est rare mais si vous faites ce constat, n'hésitez surtout pas à contacter notre support client par mail ou par téléphone afin de nous avertir. Nous pourrons ainsi rapidement mettre à jour la base de données.

Certains mails que vous considérez comme du spam correspondent à des listes de diffusion pour lesquelles un lien de désinscription est obligatoirement présent (imposé par la loi). Ce lien apparaît généralement en bas du mail concerné. Utilisez celui-ci afin de retirer votre adresse mail de la base de données de l'émetteur.