---
title: 'Transférer son nom de domaine en .pl vers OVHcloud'
slug: transferer-mon-domaine-pl
routes:
    canonical: 'https://docs.ovh.com/fr/domains/transferer-mon-domaine-generique/'
hidden: true
excerpt: "Découvrez comment réaliser le transfert d'un nom de domaine en .pl vers OVHcloud"
section: Transfert
order: 1
---

**Dernière mise à jour le 02/09/2022**

## Objectif

Votre nom de domaine en .pl est actuellement déposé dans un bureau d’enregistrement et vous souhaitez le basculer vers OVHcloud ? C'est possible, via une procédure de transfert.

En transférant votre nom de domaine, vous changerez de registre pour celui-ci. Vous pouvez transférer votre nom de domaine vers OVHcloud en créant une commande. Ce processus prend généralement entre un et dix jours.

**Découvrez comment transférer un nom de domaine générique vers OVHcloud.**

## Prérequis

- Le nom de domaine en .pl a été enregistré ou transféré auprès d'un autre bureau d'enregistrement depuis au moins 5 jours.
- L'état du nom de domaine est « OK » ou « Transférable ».
- Le nom de domaine n'est pas expiré et a une date d'expiration permettant de terminer le processus de transfert dans les temps (recommandé : plus de 60 jours).
- Être en mesure de déverrouiller le nom de domaine.
- Posséder le code de transfert ou être en mesure de le récupérer.
- Être habilité à demander le transfert du nom de domaine.
- Avoir prévenu le propriétaire du nom de domaine et/ou ses administrateurs de la demande de transfert.

## En pratique

La procédure de transfert comporte plusieurs étapes, impliquant la prise de contact avec plusieurs entités, dont votre registre actuel, OVHcloud et d'autres parties. Le tableau ci-dessous vous indique les personnes contactées et la durée estimée de chaque étape.

|Étapes|Description|Qui est impliqué ?|Où ?|Temps requis|
|---|---|---|---|---|
|1|Vérification des informations associées au nom de domaine|L'administrateur du domaine|Avec le bureau d'enregistrement actuel|Dépend de vos actions|
|2|Déverrouillage du domaine et récupération du code de transfert|L'administrateur du domaine, avec l'autorisation du propriétaire|Avec le bureau d'enregistrement actuel|Dépend de vos actions|
|3|Demande de transfert de nom de domaine|Toute personne possédant le code de transfert, également avec la permission du propriétaire|Avec le nouveau bureau d'enregistrement (par exemple OVHcloud)|Dépend de vos actions|
|4|Validation du transfert|Le propriétaire du nom de domaine doit valider le transfert à la demande du registre |Par e-mail|Cinq jours maximum|

### Étape 1 : vérifier les informations associées au nom de domaine

**Pour commencer, il est important de vous assurer que les informations associées au nom de domaine sont à jour.** Depuis la mise en place du RGPD, les données visibles dans le [« Whois »](https://www.ovh.com/fr/support/outils/check_whois.pl) sont devenues très limitées. Nous vous recommandons de vérifier les informations associées à votre nom de domaine via le bureau d'enregistrement actuel de votre nom de domaine.

- **Si les informations sont correctes : passez à l'étape suivante de ce guide.**

- **Si les informations sont incorrectes ou invisibles : contactez le bureau d'enregistrement actuel du nom de domaine pour vérifier et/ou modifier ce dernier.**

> [!primary]
>
> Si vous ne savez pas quel bureau d'enregistrement est responsable de votre nom de domaine, les lignes « Registrar », qui apparaîtront dans le résultat de la recherche de l'[outil Whois](https://www.ovh.com/fr/cgi-bin/whois.pl){.external}, peuvent vous fournir des informations sur son identité.
>

### Étape 2 : déverrouiller son nom de domaine et récupérer le code de transfert

Après avoir vérifié ces informations, vous devrez déverrouiller votre nom de domaine. Vous ne pouvez effectuer cette opération que via le bureau d'enregistrement du nom de domaine actuel. Contactez-le pour en savoir plus à propos de leur procédure.

Une fois que vous avez déverrouillé votre nom de domaine, votre bureau d'enregistrement doit vous envoyer le code de transfert correspondant. Ce code est parfois référencé sous différents noms, tels que : « code de transfert », « CodeAuth » , « InfosAuth » ou « Code EPP ».

Veuillez noter qu'OVHcloud n'étant pas le bureau d'enregistrement de votre nom de domaine au moment où vous initiez la procédure de transfert, nous ne pouvons donc pas déverrouiller celui-ci ou vous fournir le code de transfert.

> [!warning]
>
> Une fois votre nom de domaine déverrouillé, vous aurez sept (7) jours pour effectuer le transfert vers OVHcloud. Après cette période, votre nom de domaine sera verrouillé automatiquement si vous ne soumettez pas de demande de modification de bureau d'enregistrement de nom de domaine.
>

### Étape 3 : demander un transfert de nom de domaine vers OVHcloud <a name="step3"></a>

Une fois le déverrouillage de votre nom de domaine effectué et votre code obtenu, vous pouvez commander son transfert vers OVHcloud depuis [notre site](https://www.ovhcloud.com/fr/domains/){.external}. Entrez votre nom de domaine, puis suivez la procédure de commande.

Lorsque vous êtes invité à fournir votre code de transfert, entrez-le dans la zone en face de votre nom de domaine. Si vous ne disposez pas encore du code de transfert, vous pouvez cocher la case intitulée `Entrer le code de transfert ultérieurement`{.action}. Toutefois, nous vous conseillons vivement de vous assurer que vous disposez du code à remettre avant de continuer. N'oubliez pas que le transfert ne démarrera pas tant qu'un code valide n'aura pas été fourni.

Vous pouvez également terminer votre commande avec un [hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external} et d'autres solutions OVHcloud. Cela peut vous intéresser si vous souhaitez également migrer vos services vers OVHcloud. Notre guide intitulé « [Migrer mon site chez OVHcloud](../../hosting/migrer-mon-site-chez-ovh/) » vous fournira des instructions sur la façon de procéder.

> [!warning]
>
> Tout au long du processus de commande, nous vous conseillons de prendre en compte les points suivants :
>
> - **données sur le propriétaire du nom de domaine.** Particulièrement depuis l'entrée en vigueur du RGPD, il est essentiel de vous assurer que les informations sur le propriétaire du nom de domaine correspondent à celles stockées par votre bureau d'enregistrement actuel. Cela vous évitera d'être soupçonné de vol de nom de domaine ;
>
> - **saisie des serveurs DNS pour votre nom de domaine.** Si vous utilisez actuellement votre nom de domaine pour maintenir un site internet ou un service de messagerie en ligne, vous devrez spécifier leurs serveurs DNS afin d'éviter toute interruption de service.
>

#### Gestion du propriétaire et détails des serveurs DNS

- En cliquant sur `Modifier la configuration`{.action} dans cette étape, vous pouvez entrer les noms des serveurs DNS que le nom de domaine utilise actuellement. De cette manière, le nom de domaine sera déjà associé à ces serveurs DNS dans la configuration OVHcloud.

- Si vous continuez sans effectuer cette opération, le nom de domaine sera fourni avec une nouvelle zone DNS sur les serveurs DNS OVHcloud. Une [modification manuelle de la zone DNS](../editer-ma-zone-dns/) peut alors devenir nécessaire.

- Dans certains cas, le processus de transfert peut nécessiter des informations supplémentaires concernant le propriétaire du nom de domaine. Pour ajouter ces informations, cliquez sur l'option `Gérer les contacts/le propriétaire`{.action}.

![domaine](images/Order_summary.png){.thumbnail}

Une fois la commande validée, vous recevrez un bon de commande gratuit. Le processus de transfert ne démarrera qu'après validation de ce bon de commande gratuit. Une fois cette opération effectuée, vous pouvez suivre la progression du transfert via [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Pour suivre la progression, cliquez sur `Noms de domaine`{.action}, puis `Opérations en cours`{.action}.

### Étape 4 : Validation du transfert

La procédure de transfert de nom de domaine implique une validation par e-mail. Cette étape peut être effectuée dès le début du transfert, mais peut prendre jusqu'à cinq jours.

- Le propriétaire du nom de domaine reçoit un e-mail sur l'adresse qu'il a renseignée, présente dans le Whois (si elle est n'est pas masquée).
- Cet e-mail provient du registre des noms de domaine « .pl », depuis l'adresse « automat@dns.pl» .
- Cliquez sur le lien de validation présent dans cet e-mail pour finaliser le transfert.
- Une fois la validation effectuée, le domaine sera accessible depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans les 24 heures.

> [!warning]
>
> La validation du transfert via le lien doit être effectuée dans les 5 jours suivant la demande. Au-delà, le transfert sera annulé.
>

#### Que faire si vous n'avez pas reçu l'e-mail de validation du transfert ?

Vérifiez l'adresse e-mail du propriétaire du domaine chez votre fournisseur de domaine actuel, y compris et en priorité les dossiers « SPAM » / « courrier indésirable ».

Si l'e-mail de validation reste introuvable, contactez le support OVHcloud via la création d'un ticket d'assistance. Nos services pourront alors annuler le transfert. Une fois l'annulation effectuée, modifiez l'adresse e-mail du propriétaire du nom de domaine, en privilégiant un autre fournisseur e-mail (tel que, par exemple, Gmail, Yahoo, Onet, wp.pl, etc.).<br>
Une fois l'adresse e-mail modifiée, effectuez une [nouvelle demande de transfert](#step3).

### Étape 5 : gérer son nom de domaine avec OVHcloud

Une fois la procédure de transfert terminée, vous pouvez gérer votre nom de domaine à partir de l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Pour ce faire, sélectionnez `Web Cloud`{.action}, cliquez sur `Noms de domaine`{.action}, puis cliquez sur le nom de domaine concerné.

## Aller plus loin

[Migration de votre site Web et de vos e-mails vers OVHcloud](../../hosting/migrer-mon-site-chez-ovh/)

Rejoignez notre communauté d'utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.
