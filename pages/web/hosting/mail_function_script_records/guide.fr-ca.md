---
title: "Suivre et gérer les e-mails automatisés de son hébergement web"
slug: suivi-emails-automatises
excerpt: "Découvrez comment suivre et gérer les e-mails automatisés envoyés depuis votre hébergement web OVHcloud"
section: Diagnostic
order: 01
---

**Dernière mise à jour le 12/10/2022**

## Objectif

Les e-mails automatisés sont des messages envoyés via des scripts. Généralement à l'aide de la fonction « mail() » de PHP. Ils sont par exemple utilisés pour le formulaire de contact de votre site web et permettent à vos visiteurs de vous envoyer des messages.

> [!primary]
>
> Ce guide concerne principalement les e-mails envoyés depuis des scripts situés sur votre [hébergement web OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/) à l'aide de la fonction « mail() » de PHP.
>
> Si vous souhaitez gérer les adresses e-mail comprises dans votre offre MX Plan ou dans votre offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/){.external}, consultez notre documentation sur les [E-mails mutualisés - MX Plan](https://docs.ovh.com/ca/fr/emails/).
>

> [!success]
>
> Même si nous recommandons vivement d'utiliser la fonction « mail() » de PHP, vous pouvez également envoyer des mails depuis votre hébergement mutualisé en passant par un script utilisant le [protocole SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Découvrez comment suivre et gérer les e-mails automatisés envoyés depuis votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

Le suivi et la gestion des e-mails automatisés de votre hébergement web OVHcloud s'effectuent depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Une fois connecté, rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement concerné dans la liste. Cliquez ensuite sur l'onglet `Plus`{.action}, puis sur `Scripts emails`{.action}.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

La page qui s'affiche alors vous permet de suivre et de gérer les e-mails automatisés envoyés depuis votre [hébergement web OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/).

### Présentation de la partie « Scripts emails »

![hosting](images/Interface.png){.thumbnail}

La page affiche plusieurs informations vous permettant de visualiser l'activité des envois d'e-mails automatisés générés depuis vos scripts :

- **État du service** : état actuel du service réalisant les envois d'e-mails automatisés de votre hébergement web :
    - S'il est vert (*« Activé »* ou *« Force »*), cela signifie que les envois sont opérationnels. 
    - S'il est rouge (*« Désactivé »*, *« Bounce »* ou *« SPAM »*), les envois ne s'effectuent plus. <br>

    Selon cet état, la gestion des envois sera différente.

- **Rapport d'erreurs à** : recevez-le quotidiennement sur l'adresse e-mail de votre choix. Définissez-la grâce au bouton `Changer le destinataire`{.action}. Ce rapport comporte les e-mails envoyés depuis votre hébergement web revenus en erreur chez OVHcloud. Un bouton `Emails en erreur`{.action} permet également de consulter ces rapports à tout moment sur la droite de la page `Scripts emails`{.action}.
- **Total des e-mails envoyés** : nombre total des e-mails automatisés envoyés depuis la création de votre hébergement web OVHcloud.
- **E-mails envoyés aujourd'hui** : nombre total des e-mails automatisés envoyés aujourd'hui uniquement.
- **Total des e-mails en erreur** : nombre total des e-mails automatisés envoyés depuis la création de votre hébergement web qui sont revenus en erreur chez OVHcloud.
- **Historique des e-mails envoyés** : graphique représentant l'historique des e-mails envoyés depuis votre hébergement web sur les jours précédents.

Sur la droite, plusieurs boutons permettent de gérer les envois d'e-mails automatisés depuis votre hébergement web. Selon l'état du service, certains peuvent ne pas être disponibles.

- **Bloquer l'envoi** : bloque la distribution des envois d'e-mails automatisés de votre hébergement web. Les e-mails générés par vos scripts après le blocage ne seront pas envoyés, mais conservés dans une file d'attente pendant 72 heures maximum.
- **Débloquer l'envoi** : débloque l'envoi des e-mails automatisés de votre hébergement web. Les e-mails présents dans la file d'attente seront également remis en distribution.
- **Purger les e-mails** : efface les e-mails présents dans la file d'attente et débloque l'envoi de mails.

Pour réaliser l'action souhaitée, cliquez sur le bouton correspondant puis sur `Valider`{.action}. Dans certains cas, l'action souhaitée peut nécessiter plusieurs dizaines de minutes pour être pleinement effective.

> [!primary]
>
> Afin d'éviter une utilisation non souhaitée des e-mails automatisés de votre hébergement web, nous vous recommandons vivement de mettre en place un système de sécurité, comme un « captcha » dans les formulaires de votre site web réalisant des envois d'e-mails (un formulaire de contact par exemple).
>

Si vous constatez que les e-mails générés depuis vos scripts ne sont plus envoyés alors que l'état du service permet toujours les envois (*« Activé »* ou *« Force »*), nous vous conseillons de :

- **vérifier les scripts réalisant les envois** : les scripts peuvent ne pas réussir l'envoi des e-mails à cause d'une erreur de syntaxe. Vérifiez le contenu de vos scripts, corrigez-les si nécessaire, puis effectuez un nouvel essai.

- **tester l'envoi d'un e-mail via un script de test** : créez un script de test réalisant l'émission d'un e-mail vers votre adresse personnelle à l'aide du code suivant :

```bash
<?php
$to = "RecipientEmail@adress.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

Pour le `$headers`, renseignez deux fois la même adresse e-mail émettrice.

Si vous recevez correctement le message *The email has been sent successfully!* sur l'adresse e-mail que vous avez définie à la ligne `$to`, cela indique que les scripts effectuant vos envois comportent des erreurs.

- **Assurez-vous que vos envois n'utilisent pas de serveur SMTP** : ne spécifiez pas de serveur SMTP dans les paramètres de vos scripts lorsque vous utilisez la fonction « mail() » de PHP. Si vous disposez d'une interface pour administrer les envois d'e-mails depuis votre site web, modifiez ce paramètre dans la configuration de ce dernier.

- **Vérifiez la taille totale de votre e-mail** : L'e-mail evoyé ne doit pas dépasser la taille totale de **10 Mo** (encapsulation et en-tête inclus). Le contenu même de votre e-mail ne devra donc pas excéder les **7/8 Mo**.

### Gérer les états « Désactivé », « Bounce » et « SPAM »

#### L'état « Désactivé »

Cet état survient lorsque :

- trop d'e-mails ont été émis très rapidement ;
- trop d'e-mails sont retournés en erreur ;
- vous avez vous-même désactivé la fonctionnalité depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

Pour débloquer la situation, rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement concerné dans la liste. Cliquez ensuite sur l'onglet `Plus`{.action}, puis sur `Scripts emails`{.action}.

Cliquez enfin sur `Débloquer l'envoi`{.action} puis patientez quelques minutes le temps que le service d'envoi soit de nouveau actif.

#### L'état « Bounce »

Cet état survient lorsqu'un certain pourcentage de vos e-mails envoyés automatiquement est revenu en erreur.

Pour débloquer la situation, rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement concerné dans la liste. Cliquez ensuite sur l'onglet `Plus`{.action}, puis sur `Scripts emails`{.action}.

Deux options sont possibles :

- Si vous cliquez sur `Débloquer l'envoi`{.action}, l'état du service passera en *« Force »*. Le ratio **e-mails retournés en erreur / nombre total d'envoi d'e-mails envoyés** autorisé avant un blocage sera doublé. L'envoi sera de nouveau opérationnel quelques minutes après le déblocage.
- Si vous cliquez sur `Purger les e-mails`{.action}, cela effacera tous les e-mails de la file d'attente et l'état du service repassera en *« Activé »* sans doubler le ratio.

#### L'état « SPAM »

Cet état survient lorsque des mails considérés comme du SPAM ont été émis depuis votre hébergement.

Généralement, ce blocage est accompagné par l'envoi d'un e-mail intitulé **« Abus avec votre hébergement domain.tld »** généré automatiquement par nos robots de sécurité :

![hosting](images/AbuseMail.png){.thumbnail}

Trois cas de figure sont possibles par rapport à cette situation :

- **Cas n°1 : exploitation d'un formulaire de contact par un robot** :

Pour corriger cette situation, vous devez sécuriser l'ensemble des scripts en capacité d'émettre des e-mails depuis votre hébergement, à l'aide d'un système de type « Captcha ».

Rendez-vous ensuite dans la partie `Web cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement concerné dans la liste. Cliquez ensuite sur l'onglet `Plus`{.action} puis sur `Scripts emails`{.action}.

Cliquez alors sur `Purger les e-mails`{.action}, cela effacera tous les e-mails de la file d'attente et l'état du service repassera en *« Activé »*.

Une purge est obligatoire dans ce cas pour effacer les SPAM en attente d'envoi.

- **Cas n°2 : injection de fichiers malveillants dans votre hébergement** :

Pour corriger cette situation, vous devez effectuer au moins les actions suivantes :

- Analysez les [logs de votre hébergement](https://docs.ovh.com/ca/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/) pour identifier les failles de sécurité et les fichiers infectés.
- Supprimez ou corrigez le(s) fichier(s)/module(s) malveillant(s).
- Pour les CMS (Wordpress, Joomla, Prestashop, Drupal, ...), mettez à jour le CMS, le(s) plugin(s) et le thème associés.
- Sécurisez vos formulaires de contact avec un « captcha ».

Si vous utilisez un CMS, privilégiez l'utilisation de plugin(s)/thème(s) « officiel(s) ».
Mettez à jour le CMS, les plugins et le thème associés le plus régulièrement possible pour éviter que cela se reproduise.

Une fois votre hébergement sécurisé, rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement concerné dans la liste. Cliquez ensuite sur l'onglet `Plus`{.action} puis sur `Scripts emails`{.action}.

Cliquez alors sur `Purger les e-mails`{.action}, cela effacera tous les e-mails de la file d'attente et l'état du service repassera en *« Activé »*.

Une purge est obligatoire dans ce cas pour effacer les SPAM en attente d'envoi.

- **Cas n°3 : Envoi d'e-mails légitimes considérés comme du SPAM** :

Si vous êtes à l'origine des e-mails ayant engendré le blocage, vous trouverez ci-dessous quelques exemples d’**usages à éviter** lors de l'envoi d'un e-mail (pour qu'il ne soit pas considéré trop « facilement » comme un SPAM) :

- 3 mots ou plus en majuscules dans le sujet/objet de l'e-mail.
- Pas de sujet/texte renseigné dans l'e-mail.
- L'e-mail contient juste une image de taille supérieure à 1 Mo et quelques mots.
- Le sujet de l'e-mail commence par : Hi, FREE, BUY, BUYING,....
- L'e-mail contient plus de 70 % de blanc (abus sur la touche « ESPACE » ou « ENTRÉE » du clavier).
- La police d’écriture utilisée pour la rédaction de l'e-mail est extrêmement grande.
- La couleur d'écriture et la couleur de fond sont identiques pour rédiger l'e-mail.
- L'adresse IP publique (IP de votre point d'accès internet par exemple) est listée chez des organismes de réputation.
- L'entête de l'e-mail envoyé ne respecte pas les RFC « e-mails » (normes ou standards e-mails).
- Le ou les liens présents dans l'e-mail sont incorrects.
- Une URL dans l'e-mail est non sécurisée (exemple: déclarée en `https://` alors que l'URL n'existe qu'en `http://`)
- L'e-mail contient des termes à caractère pornographique ou s’en rapprochant.
- L'e-mail contient un exécutable (EXE, BAT, PIF, XML, XLSX ou des documents avec des « macros »), même s'il est « zippé ».

Si malgré cela l'état du service repasse en état *« SPAM »*, répondez à l'e-mail automatique que vous avez reçu en précisant que vous avez fait le nécessaire.

Notre service anti-spam analysera la situation et notre support reviendra vers vous pour vous expliquer la procédure de déblocage.

### Envoi d'e-mails à l'aide d'un script « SMTP » <a name="SMTP"></a>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition la partie qui va suivre afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Même si nous vous recommandons vivement de privilégier l'utilisation de la fonction « mail() » de PHP, les hébergements mutualisés permettent d'envoyer des e-mails en passant par un script utilisant le protocole SMTP (Simple Mail Transfer Protocol). La taille totale de votre e-mail ne pourra pas dépasser les **10 Mo** (soit **7/8 Mo hors encapsulation**).

> [!warning]
> 
> Les e-mails émis avec un script utilisant une configuration SMTP ne pourront pas être gérés et suivis depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
> 

Pour cela, vous pouvez utiliser le script suivant en remplaçant uniquement les valeurs `Host`, `Username` et `Password` par vos propres paramètres SMTP :

```bash
$mail->Host = "your.smtp.server";
$mail->SMTPAuth = true; 
$mail->SMTPSecure = "ssl";
$mail->Port = 465; 
$mail->Username = "e-mail@adress.tld"; 
$mail->Password = "YourEmailPassword"; 
```

> [!primary]
>
> Si vous utilisez une adresse mail OVHcloud et uniquement dans ce cas, vous pouvez également utiliser le `SMTPSecure` *"starttls"* ou *"tls"* avec le `Port` **587**. Toutefois, le `SMTPSecure` *"ssl"* avec le `Port` **465** restent à privilégier.
> 

## Aller plus loin <a name="go-further"></a>

[Consulter les logs de votre hébergement](https://docs.ovh.com/ca/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/)

[Corriger la page « 403 Forbidden » qui s'affiche sur votre site](https://docs.ovh.com/ca/fr/hosting/diagnostic-403-forbidden/)

[Restaurer l'espace de stockage FTP de votre hébergement](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.