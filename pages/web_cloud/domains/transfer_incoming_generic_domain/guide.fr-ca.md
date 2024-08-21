---
title: 'Transférer son nom de domaine vers OVHcloud'
excerpt: "Découvrez comment réaliser le transfert d'un nom de domaine vers OVHcloud"
updated: 2024-06-28
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mbyfj1JyK7w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Objectif

Votre nom de domaine est actuellement déposé dans un **bureau d’enregistrement** et vous souhaitez le confier à OVHcloud ? C'est possible, via une procédure de transfert.

En transférant votre nom de domaine, vous changerez de **bureau d'enregistrement** pour celui-ci. Vous pouvez transférer votre nom de domaine vers OVHcloud en créant une commande. Ce processus prend généralement entre un et dix jours.

**Découvrez comment transférer un nom de domaine générique vers OVHcloud.**

> [!warning]
>
> Le *bureau d'enregistrement* d'un nom de domaine représente l'organisation/fournisseur agréé auprès duquel le nom de domaine est enregistré/souscrit par un particulier, une association ou une organisation. C'est auprès de ce même *bureau d'enregistrement* que vous renouvelez la souscription de votre nom de domaine (généralement une fois par an).
>
> Si OVHcloud est déjà le *bureau d'enregistrement* de votre nom de domaine **avant** de démarrer la procédure qui va suivre, le *transfert entrant de domaine* n'est pas la procédure appropriée. La procédure de *transfert entrant de domaine* s’applique **uniquement** aux noms de domaine enregistrés dans un autre *bureau d'enregistrement* qu'OVHcloud.
>
> Pour transférer la gestion de votre nom de domaine vers un autre compte client OVHcloud, la méthode adéquate est un **changement de contacts**. La procédure est décrite dans [ce guide](/pages/account_and_service_management/account_information/managing_contacts).
>
> Si vous devez également changer le **propriétaire** du nom de domaine, vous devez le faire **avant** de changer les contacts du nom de domaine. Pour cela, suivez les instructions décrites dans notre documentation sur le [changement de propriétaire des noms de domaine](/pages/web_cloud/domains/trade_domain).
>
> Si, en plus du transfert de votre nom de domaine, vous souhaitez migrer les services qui lui sont associés (site web, e-mail, etc.), consultez d'abord notre guide « [Migrer son site web et ses services associés vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) » avant de poursuivre.
> Ce guide explique en détails comment migrer l'ensemble de vos services sans coupures.
>
> Si vous réalisez uniquement le transfert de votre nom de domaine sans déménager vos autres services, veillez à bien récupérer les serveur DNS actifs pour votre nom de domaine auprès de votre **bureau d'enregistrements** actuel pour les renseigner directement lors de l'étape 3 du présent guide.
> Cela vous évitera d'interrompre l'association entre votre nom de domaine et vos services externes associés.
>

## Prérequis

- Le nom de domaine est enregistré auprès d'un autre bureau d'enregistrement.
- Le nom de domaine existe depuis plus de 60 jours.
- Le nom de domaine n'a pas été transféré ou n'a pas changé de propriétaire au cours des 60 derniers jours.
- L'état du nom de domaine est « OK » ou « Transférable ».
- Le nom de domaine n'a pas expiré et a une date d'expiration permettant de terminer le processus de transfert dans les temps (recommandé : plus de 60 jours).
- Être en mesure de déverrouiller le nom de domaine.
- Posséder le code de transfert ou être en mesure de le récupérer.
- Être habilité à demander le transfert du nom de domaine.
- Avoir prévenu le propriétaire du nom de domaine et/ou ses administrateurs de la demande de transfert.

## En pratique

> [!success]
>
> Pour connaître les conditions tarifaires pour le transfert d'un nom de domaine en fonction de son extension, renseignez le domaine que vous souhaitez transférer sur notre page [www.ovhcloud.com/fr-ca/domains/tld/](/links/web/domains-tld) puis suivez les étapes de ce guide.
> 

La procédure de transfert comporte plusieurs étapes, impliquant la prise de contact avec plusieurs entités, dont votre registre actuel, OVHcloud et d'autres parties. Le tableau ci-dessous vous indique les personnes contactées et la durée estimée de chaque étape.

|Étapes|Description|Qui est impliqué ?|Où ?|Temps requis|
|---|---|---|---|---|
|[1](#step1)|[Vérification des informations associées au nom de domaine](#step1)|L'administrateur du domaine|Avec le bureau d'enregistrement actuel|Dépend de vos actions|
|[2](#step2)|[Déverrouillage du domaine et récupération du code de transfert](#step2)|L'administrateur du domaine, avec l'autorisation du propriétaire|Avec le bureau d'enregistrement actuel|Dépend de vos actions|
|[3](#step3)|[Demande de transfert de nom de domaine](#step3)|Toute personne possédant le code de transfert, également avec la permission du propriétaire|Avec le nouveau bureau d'enregistrement (par exemple OVHcloud)|Dépend de vos actions|
|[4](#step4)|[Validation du transfert](#step4)|Le bureau d'enregistrement actuel|À la demande de l'organisation gérant l'extension de nom de domaine|Cinq jours maximum|

> [!warning]
>
> La procédure exacte de transfert de domaine peut varier, en particulier dans le cas de certains **TLD** de code de pays (**ccTLD**, tels que .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, etc.) et de quelques **TLD** spéciaux (.am, .fm, etc.). Selon l'extension de votre nom de domaine, des prérequis supplémentaires peuvent être nécessaires. Nous vous recommandons de vérifier d'abord les informations affichées pour l'extension concernée, sur notre site Web: <https://www.ovhcloud.com/fr-ca/domains/tld/>.
>

### Étape 1 : vérifier les informations associées au nom de domaine <a name="step1"></a>

**Pour commencer, il est important de vous assurer que les informations associées au nom de domaine sont à jour.** Depuis la mise en place du RGPD, les données visibles dans le [« Whois »](/links/web/domains-whois) sont devenues très limitées. Nous vous recommandons de vérifier les informations associées à votre nom de domaine via le bureau d'enregistrement actuel de votre nom de domaine.

- **Si les informations sont correctes :** passez à l'étape suivante de ce guide.

- **Si les informations sont incorrectes ou invisibles :** contactez le bureau d'enregistrement actuel du nom de domaine pour vérifier et/ou modifier ce dernier.

> [!primary]
>
> Si vous ne savez pas quel bureau d'enregistrement est responsable de votre nom de domaine, les lignes « Registrar », qui apparaîtront dans le résultat de la recherche de l'[outil Whois](/links/web/domains-whois){.external}, peuvent vous fournir des informations sur son identité.
>

### Étape 2 : déverrouiller son nom de domaine et récupérer le code de transfert <a name="step2"></a>

Après avoir vérifié ces informations, vous devrez déverrouiller votre nom de domaine. Vous ne pouvez effectuer cette opération que via le bureau d'enregistrement du nom de domaine actuel. Contactez-le pour en savoir plus à propos de leur procédure.

Une fois que vous avez déverrouillé votre nom de domaine, votre bureau d'enregistrement doit vous envoyer le code de transfert correspondant. Ce code est parfois référencé sous différents noms, tels que : « code de transfert », « CodeAuth » , « InfosAuth » ou « Code EPP ».

Veuillez noter qu'OVHcloud n'étant pas le bureau d'enregistrement de votre nom de domaine au moment où vous initiez la procédure de transfert, nous ne pouvons donc pas déverrouiller celui-ci ou vous fournir le code de transfert.

> [!warning]
>
> Une fois votre nom de domaine déverrouillé, vous aurez sept (7) jours pour effectuer le transfert vers OVHcloud. Après cette période, votre nom de domaine sera verrouillé automatiquement si vous ne soumettez pas de demande de modification de bureau d'enregistrement de nom de domaine.
>

### Étape 3 : demander un transfert de nom de domaine vers OVHcloud <a name="step3"></a>

Une fois le déverrouillage de votre nom de domaine effectué et votre code obtenu, vous pouvez commander son transfert vers OVHcloud depuis [notre site](/links/web/domains){.external}. Entrez votre nom de domaine, puis suivez la procédure de commande.

![domain](/pages/assets/screens/website/order/domain-transfer-order.png){.thumbnail}

Lorsque vous êtes invité à fournir votre code de transfert, entrez-le dans la zone en face de votre nom de domaine. Si vous ne disposez pas encore du code de transfert, vous pouvez cocher la case intitulée `Entrer le code de transfert ultérieurement`{.action}. Toutefois, nous vous conseillons vivement de vous assurer que vous disposez du code à remettre avant de continuer. N'oubliez pas que le transfert ne démarrera pas tant qu'un code valide n'aura pas été fourni.

![domain](/pages/assets/screens/website/order/step_authinfo_add.png){.thumbnail}

Vous pouvez également terminer votre commande avec un [hébergement web](/links/web/hosting){.external} et d'autres solutions OVHcloud. Cela peut vous intéresser si vous souhaitez également migrer vos services vers OVHcloud. Notre guide intitulé « [Migrer mon site chez OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external} » vous fournira des instructions sur la façon de procéder.

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

- Si vous continuez sans effectuer cette opération, le nom de domaine sera fourni avec une nouvelle zone DNS sur les serveurs DNS OVHcloud. Une [modification manuelle de la zone DNS](/pages/web_cloud/domains/dns_zone_edit) peut alors devenir nécessaire.

- Dans certains cas, le processus de transfert peut nécessiter des informations supplémentaires concernant le propriétaire du nom de domaine. Pour ajouter ces informations, cliquez sur l'option `Gérer les contacts/le propriétaire`{.action}.

![domaine](/pages/assets/screens/website/order/order-summary.png){.thumbnail}

#### Suivi du transfert après la commande

Une fois la commande validée, vous recevrez un bon de commande. Le processus de transfert ne démarrera qu'après réception du paiement. Une fois cette opération effectuée, vous pouvez suivre la progression du transfert via [l'espace client OVHcloud](/links/manager){.external}. Pour suivre la progression, cliquez sur `Noms de domaine`{.action}, puis `Opérations en cours`{.action}.

> [!primary]
>
> Si le code de transfert n'a pas été saisi lors de la commande, vous pourrez le renseigner depuis la fenêtre `Opérations en cours`{.action} et ainsi valider le transfert.

### Étape 4 : validation du transfert par le bureau d'enregistrement actuel <a name="step4"></a>

Une fois la commande et le code de transfert validés, le bureau d'enregistrement du nom de domaine actuel (qui n'est toujours pas OVHcloud) recevra une demande de validation. À ce stade, plusieurs résultats sont possibles, selon les actions entreprises.

|Action|Résultat|
|---|---|
|Validation du bureau d'enregistrement actuel.|Le transfert est effectué dans les **24 heures**.|
|Aucune réponse reçue du bureau d'enregistrement actuel.|Le transfert est terminé après une période de **5 jours**.|
|Un refus émis par le bureau d'enregistrement actuel.|Le processus de transfert est **annulé** dès qu'un refus est émis.|

Si un refus est émis par le bureau d'enregistrement actuel, contactez le pour savoir pourquoi il l'a refusée.

Le processus de transfert peut être redémarré à partir de [l'espace client OVHcloud](/links/manager){.external}. Sélectionnez `Web Cloud`{.action} et accédez à la section `Noms de domaine`{.action}, puis cliquez sur `Opérations en cours`{.action}.

> [!primary]
>
> Le transfert d'un domaine avec l'extension ".fr" diffère légèrement du processus décrit ci-dessus. Vous devez déverrouiller votre nom de domaine et récupérer son code de transfert auprès du bureau d'enregistrement actuel.
> Initiez la commande du transfert et renseignez le code de transfert comme décrit précédemment.
>
> Une fois le transfert initié, le délai total du **transfert d'un nom de domaine en ".fr" prend minimum 8 jours incompressibles.**
>
> En cas d'**opposition au transfert par le bureau d'enregistrement actuel**, le transfert **s'effectuera tout de même** mais il prendra un **minimum de 22 jours incompressibles** pour être finalisé.
>

### Étape 5 : gérer son nom de domaine avec OVHcloud

Une fois la procédure de transfert terminée, vous pouvez gérer votre nom de domaine à partir de l'[espace client OVHcloud](/links/manager){.external}. Pour ce faire, sélectionnez `Web Cloud`{.action}, cliquez sur `Noms de domaine`{.action}, puis cliquez sur le nom de domaine concerné.

> [!warning]
>
> Pour les noms de domaine avec une extension *générique* (les **gTLD** tels que les *.com*, *.net*, *.info*, *.org*, etc.), la date d'expiration initiale du nom de domaine est conservée. OVHcloud incrémente gratuitement une année supplémentaire de souscription en plus du transfert réalisé.
> Par exemple, nous sommes le 04/06/2023 et votre nom de domaine avec une extension *générique* expire le 29/09/2023 **avant** le transfert. Une fois transféré chez OVHcloud, votre nom de domaine expirera désormais le 29/09/2024.
>
> Pour les noms de domaine avec une extension *locale* ou *régionale* (les **ccTLD** tels que les *.fr*, *.be*, *.de*, *.es*, etc.), cela dépend des extensions et des règles mises en place par le **registre** de l'extension en question.
> Une fois le transfert terminé, vérifiez bien la date d'expiration de votre nom de domaine directement depuis votre espace client OVHcloud.
>
> Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Noms de domaine`{.action} puis sélectionnez le nom de domaine concerné. Sur la page qui s'affiche et juste en dessous de votre nom de domaine sur la partie haute de la page, vous retrouverez la date de renouvellement prévue avec le **mois** et **l'année** d'échéance.
>
> En fonction de la situation et de la nouvelle date d'expiration de votre nom de domaine, un renouvellement du domaine sera peut être nécessaire juste après le transfert.
>

## Aller plus loin

[Migration de votre site Web et de vos e-mails vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).