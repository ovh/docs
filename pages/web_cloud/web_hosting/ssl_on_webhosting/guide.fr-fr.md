---
title: "Gérer un certificat SSL sur son hébergement web"
excerpt: "Apprenez à gérer un certificat SSL sur votre hébergement web OVHcloud"
updated: 2023-12-06
---

## Objectif

Votre hébergement web vous permet de gérer un certificat SSL. Vous pouvez commander celui-ci via OVHcloud ou en obtenir un par vos propres moyens et l'importer sur votre hébergement. Une fois configuré et installé, ce certificat fournit à un ou plusieurs de vos sites web une connexion SSL sécurisée, ce qui permet aux sites de fonctionner en HTTPS.

**Apprenez à gérer un certificat SSL sur hébergement web OVHcloud.**

## Prérequis

- Posséder un [hébergement web OVHcloud](/links/web/hosting){.external}.
- Avoir enregistré au moins un [nom de domaine](/links/web/domains){.external}.
- Avoir accès à votre [espace client OVHcloud](/links/manager){.external}, partie « Web ».

## En pratique

Plusieurs étapes sont nécessaires pour générer un certificat SSL sur votre hébergement web OVHcloud. Nous vous recommandons de suivre **dans l'ordre** les 3 étapes décrites ci-dessous.

[1. Attribuer le certificat SSL à une entrée multisite](#multisite) : si votre solution ou votre certificat SSL vous le permettent, vous pouvez faire bénéficier plusieurs de vos multisites d'une connexion sécurisée SSL.

[2. Activer un certificat SSL sur un hébergement web](#enablessl) : vous aide à activer un certificat SSL sur votre hébergement web. Il peut s'agir d'un certificat gratuit ou payant commandé auprès d'OVHcloud. Vous pouvez également importer votre propre certificat SSL commandé auprès d'un autre fournisseur.

[3. Regénérer le certificat SSL sur un hébergement web](#regeneratessl) : vous permet de régénérer un certificat SSL Let's Encrypt sur votre hébergement web lorsque vous activez le SSL sur un ou plusieurs multisites.

Vous pouvez également [supprimer le certificat SSL sur un hébergement web](#deletessl). **Veuillez noter que cela peut présenter des risques si l'un de vos sites web utilise actuellement le certificat que vous avez l'intention de supprimer**.

### 1. Attribuer le certificat SSL à une entrée multisite <a name="multisite"></a>

Selon le [certificat SSL](/links/web/hosting-options-ssl){.external} que vous souhaitez commander, vous pouvez activer une connexion SSL sécurisée sur un ou plusieurs de vos multisites. Pour ce faire, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement web concerné. Positionnez-vous ensuite sur l'onglet `Multisite`{.action}.

Le tableau qui s'affiche contient tous les noms de domaine ajoutés à votre hébergement web. La colonne « SSL » vous montre l'état d'activation des connexions SSL sécurisées sur vos multisites.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

Trois états peuvent alors apparaître :

|État|Description|
|---|---|
|Activé|Un certificat SSL a déjà été activé pour ce multisite. Cependant, si votre site web n'est pas disponible en HTTPS, reportez-vous aux instructions répertoriées dans notre guide « [Passer son site en HTTPS grâce au SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website){.external} ».|
|À générer|Un certificat SSL a été activé pour ce multisite, mais celui-ci n'est toujours pas techniquement actif. Pour cela, vous devrez [le régénérer](#regeneratessl) afin qu'il inclue les nouveaux noms de domaine du multisite.|
|Désactivé|Aucun certificat SSL n'est activé pour ce multisite. Pour l'activer, suivez les étapes ci-dessous.|

Pour activer SSL sur un multisite, cliquez sur le bouton `...`{.action} à droite du multisite concerné, puis sur `Modifier le domaine`{.action}. Dans la fenêtre qui s'affiche, cochez la case `SSL`{.action}. Vous pouvez également activer l'option pour modifier le sous-domaine www en même temps que le nom de domaine associé. Suivez les étapes jusqu'à confirmer la modification.

> [!warning]
>
> L'attribution d'un certificat SSL à une entrée multisite via le tableau « multisite » ne peut se faire que si vous avez commandé le certificat SSL gratuit **Let's Encrypt** fourni par OVHcloud.
>
> Les certificats SSL payants **Sectigo** (DV et EV) ne sont valables que pour un seul nom de domaine (et son sous-domaine en *www*). La mention *Activé* ne pourra donc pas apparaître à droite des autres multisites déclarés sur l'hébergement web.
>
> Certains certificats SSL **Externes** peuvent être valables pour plusieurs noms de domaine à la fois. Si vous utilisez l'un d'eux, la mention *Activé* n'apparaîtra pas non plus pour tous vos noms de domaines déclarés dans le tableau « multisite ». Néanmoins, votre certificat SSL sera tout de même valable pour les noms de domaines qu'il *englobe*.
>

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Une fois que vous avez soumis la demande d'activation, le statut de la connexion sécurisée SSL pour le multisite concerné sera actualisé au bout de quelques secondes et remplacé par « À générer ». Répétez cette action si nécessaire si vous souhaitez activer SSL pour d'autres multisites.

> [!primary]
>
> Vous pouvez avoir deux situations dans cet état:
>
> - **Vous n'avez pas de certificat.**
> Poursuivez la lecture de ce guide à la section [Activer un certificat SSL sur votre hébergement web](#enablessl) et choisissez le « Certificat gratuit (Let's Encrypt) » qui prend en charge les sites multisites.
>
> - **Le certificat SSL est actif, mais vous avez activé le certificat SSL sur d'autres entrées multisites.**
> Poursuivez la lecture de ce guide à la section [Régénérer un certificat SSL sur un hébergement web](#regeneratessl) pour régénérer le certificat SSL pour les multisites restants.
>

### 2. Activer un certificat SSL sur un hébergement web <a name="enablessl"></a>

Avant de procéder à cette configuration, assurez-vous que l'étape précédente, « [activation d'un certificat SSL sur un site multisite](#multisite) », a été effectuée correctement. Au moins un domaine doit avoir l'option SSL `Activée` ou le statut `A générer` pour activer le certificat SSL.<br>
**Ces informations ne s'appliquent pas si vous sélectionnez `Certificat payant`{.action} ou `Import de votre certificat SSL`{.action}.**

> [!warning]
>
> Avant de poursuivre, assurez-vous également que le ou les entrées multisite pour lesquelles vous activez l'option SSL pointent vers l'adresse IP de l'hébergement web. Cette configuration vous est automatiquement proposée lorsque vous ajoutez ou modifiez une entrée multisite, mais doit être faite manuellement pour un nom de domaine qui n'est pas géré dans votre espace client.<br>
> - Retrouvez l'adresse IP de votre hébergement depuis l'onglet `Informations générales`{.action}, sous la mention `IPv4`.
>
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4.png){.thumbnail}
>
> - Configurez la zone DNS du nom de domaine déclaré en multisite, depuis la rubrique `Domaines`{.action}, onglet `Zone DNS`{.action}. Modifiez ou ajoutez un enregistrement de type `A` corespondant à votre entrée multisite et renseignez l'adresse IP de votre hébergement dans la `Cible`.
>
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-an-entry.png){.thumbnail}
>
> Pour plus de détails, n'hésitez pas à consulter nos guides [sur la configuration d'une entrée multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) ou sur [la configuration d'une zone DNS](/pages/web_cloud/domains/dns_zone_edit).

Votre hébergement web OVHcloud vous permet d'activer un [certificat SSL selon plusieurs solutions](/links/web/hosting-options-ssl){.external} :

- un certificat SSL gratuit Let's Encrypt [inclus avec une offre d'hébergement web compatible](/links/web/hosting-options-ssl){.external} ;
- un certificat SSL payant [en option avec un hébergement web compatible](/links/web/hosting-options-ssl){.external} ;
- l'importation d'un certificat SSL commandé auprès d'un autre fournisseur.

Pour activer votre certificat, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement concerné. Cliquez sur l'onglet `Informations générales`{.action}. Sous l'onglet « Certificat SSL », la mention « Non » devrait apparaître, indiquant qu'aucun certificat SSL n'a été configuré ni installé sur votre hébergement web.

Cliquez sur le bouton `...`{.action} à côté de « Certificat SSL », puis sur `Commander un certificat SSL`{.action}.

Si le mot « Oui » apparaît, cela signifie qu'un certificat SSL a déjà été installé et configuré sur l'hébergement web. Par conséquent, vous ne pourrez pas commander un autre certificat tant que le certificat existant est actif.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez le certificat SSL que vous souhaitez commander. Selon votre [offre d'hébergement web](/links/web/hosting){.external} et sa configuration, il se peut qu'aucune des solutions répertoriées ci-dessous ne soit disponible. Une fois que vous avez sélectionné une option, cliquez sur le bouton `Suivant`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

Selon la solution que vous avez sélectionnée, il peut y avoir des étapes supplémentaires :

- **si vous avez sélectionné un certificat SSL gratuit :** vous n'avez pas besoin d'effectuer d'autres actions, à moins qu'un élément technique empêche l'activation du certificat SSL (un message apparaîtra alors dans l'espace client OVHcloud répertoriant les éléments à vérifier) ou la validation de votre nom de domaine pour la délivrance du certificat SSL. Dans ce cas, vous serez prévenu et devrez suivre les instructions qui vous seront communiquées ;

- **si vous avez sélectionné un certificat SSL payant :** vous devrez terminer le processus de commande pour recevoir un certificat. Une validation spécifique peut être requise pour certains types de certificats SSL. Vous pouvez recevoir un ou plusieurs e-mails concernant cette validation. Si c'est le cas, lisez les informations contenues dans ces derniers et suivez les instructions fournies pour terminer la configuration ;

- **si vous avez choisi d'importer un certificat SSL :** vous devrez renseigner les détails du certificat dans les zones qui s'affichent. Consultez les informations envoyées par le fournisseur de services auprès duquel vous avez commandé le certificat. Généralement ils fournissent 3 fichiers : `certificate.crt`, `private.key` et `ca_bundle.crt`. Après avoir sélectionné `Importer votre certificat SSL`{.action} cliquez sur `Suivant`{.action}. Dans la première section « Copier le contenu de votre certificat (RSA uniquement) : » copiez le contenu du fichier « certificate.crt », dans la deuxième section « Copier le contenu de votre clé privée (non chiffrée) : » copiez le contenu du fichier « private.key » et dans la troisième section « Copier le contenu de votre chaîne de certificats : » copiez le contenu du fichier « ca_bundle.crt » et cliquez sur `Confirmer`{.action}.

La configuration du certificat peut prendre entre plusieurs minutes et plusieurs jours, selon le type de certificat choisi. Pour vérifier si le certificat SSL a été configuré sur votre hébergement web, accédez à l'onglet `Informations générales`{.action} de votre espace client OVHcloud. Le mot « Oui » doit alors apparaître sous « Certificat SSL ».

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

### 3. Regénérer un certificat SSL sur un hébergement web <a name="regeneratessl"></a>

> [!primary]
>
> Cette opération s'applique uniquement aux certificats SSL gratuit Let's Encrypt [inclus avec une offre d'hébergement web compatible](/links/web/hosting-options-ssl) permettant d'activer une connexion SSL sécurisée pour plusieurs multisites.
>

Une fois que vous avez activé une connexion SSL sécurisée sur un ou plusieurs de vos multisites, l'état indique alors « À générer ». Cette génération est essentielle pour pouvoir ajouter les noms de domaines concernés au certificat SSL sur votre hébergement web.

Pour ce faire, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement web concerné. Cliquez sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur le bouton `...`{.action} à côté de « Certificat SSL », puis sur`Regénérer le certificat SSL`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Prenez connaissance des informations affichées dans la fenêtre qui apparaît, puis cliquez sur le bouton `Valider`{.action}. Attendez ensuite que votre certificat SSL soit régénéré. Cette étape peut prendre plusieurs heures.

Veuillez noter que Let's Encrypt, l'autorité qui fournit le certificat SSL inclus avec votre hébergement web, impose une [limite de cinq régénérations par semaine](https://letsencrypt.org/docs/rate-limits/){.external}. Par conséquent, nous vous invitons à être vigilant sur les différentes régénérations que vous pourriez entreprendre à court terme  afin de ne pas être temporairement bloqué.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

### Supprimer un certificat SSL sur un hébergement web <a name="deletessl"></a>

Vous pouvez également supprimer un certificat SSL qui a été installé sur votre hébergement web. Avant de commencer à apporter des modifications, **nous vous conseillons vivement de vous assurer que la suppression du certificat ne rendra pas vos sites web inaccessibles**. N'oubliez pas que vos utilisateurs rencontreront une erreur de sécurité lorsqu'ils essaieront d'accéder à un site internet fonctionnant en HTTPS, mais ne disposant pas d'une connexion SSL sécurisée.

Cette vérification étant inhérente aux paramètres de votre ou vos sites internet, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés. Nous ne serons pas en mesure de vous fournir une assistance à ce propos.

Dès que vous êtes prêt à supprimer le certificat SSL, connectez-vous à votre [espace client OVHcloud](/links/manager){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action}, puis choisissez l'hébergement web concerné. Cliquez sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur le bouton `...`{.action} à côté de « Certificat SSL », puis sur `Supprimer le SSL`{.action}.

Sur la page qui apparaît, confirmez la suppression. Celle-ci sera effective sous quelques heures au maximum.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

> [!warning]
>
> La suppression d'un certificat SSL payant **Sectigo** (DV ou EV) est définitive, même si le certificat n'avait pas encore expiré. Aucun remboursement au prorata du temps restant ne pourra être effectué. Si vous souhaitez réinstaller un certificat SSL **Sectigo** (DV ou EV), vous devrez donc obligatoirement réaliser une nouvelle commande et payer l'intégralité du nouveau certificat SSL souscrit.
>

### Corriger les erreurs fréquemment rencontrées avec les certificats SSL proposés sur les hébergements web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Ce message indique que vous êtes déjà propriétaire d'un certificat SSL. Il n'est donc pas nécessaire d'activer un nouveau certificat SSL (Let's Encrypt) sur votre hébergement web.

Consultez la partie « [activation d'un certificat SSL sur un site multisite](#multisite) » du présent guide pour poursuivre vos actions.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Trois cas de figure peuvent expliquer cette notification.

- 1 : Le nom de domaine associé à votre site web pointe vers l'adresse IP du CDN de votre hébergement web, avec aucune option CDN active sur votre hébergement web :

Pour résoudre cette situation, via la zone DNS active de votre nom de domaine, assignez l'adresse IP de l'hébergement web sans CDN à votre nom de domaine.

Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

- 2 : Le nom de domaine associé à votre site web ne pointe pas vers l'adresse IP de votre hébergement web :

Pour résoudre cette situation, via la zone DNS active de votre nom de domaine, assignez l'adresse IP de l'hébergement web à votre nom de domaine.
Si vous avez activé une option CDN sur votre hébergement web, vous pouvez également utiliser l'adresse IP de l'hébergement web avec CDN.

Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

- 3 : Aucun des noms de domaines présent dans l'onglet « multisite » ne dispose d'une option SSL « active » :

Pour résoudre la situation, activez le certificat SSL pour le (les) nom(s) de domaine. Si besoin, consultez la partie « [activation d'un certificat SSL sur un site multisite](#multisite) » du présent guide pour poursuivre vos actions.

#### Le certificat SSL est actif sur votre hébergement web, mais vous rencontrez le message "Your connection is not private" sur votre site web

Ce message apparaît dans les cas suivants :

- 1 : La règle de redirection vers votre URL en « HTTPS » est mal configurée ou inexistante dans le fichier « .htaccess » :

Pour corriger cela, consultez notre tutoriel « [Réécrire l'URL d'accès à mon site grâce au mod_rewrite via le fichier .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite) » ou faites appel à un [prestataire spécialisé](/links/partner) si vous épprouvez des difficultés.

- 2 : Certains éléments de la page web ne sont pas correctement redirigés vers des éléments chiffrés en « HTTPS » :

Pour corriger cela, vous devez vous assurer que l'ensemble de votre site web est chiffré à l'aide du protocole « HTTPS ».
Si besoin, consultez notre tutoriel « [Hébergement web : passer son site web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website) » ou faites appel à un [prestataire spécialisé](/links/partner) si vous épprouvez des difficultés.

> [!success]
>
> Les éléments concernés sur la page web peuvent être vus directement à partir des informations SSL du navigateur internet, en consultant les *détails du Certificat*.
>

#### Vous avez commandé un SSL Sectigo EV en même temps que votre hébergement web, mais le certificat n'est pas encore actif et l'hébergement web ne fonctionne pas correctement

Cette situation est liée aux étapes que vous devez réaliser afin d'activer le SSL EV sur votre hébergement web.

Si besoin, consultez notre guide « [Utiliser un certificat SSL EV pour votre site Web](/pages/web_cloud/web_hosting/ssl_ev) » pour résoudre cette situation.

> [!primary]
>
> Si le certificat SSL EV n'est pas totalement actif, la commande ne sera jamais clôturée et ne générera jamais de facture. De ce fait, le service d'hébergement web ne fonctionnera pas correctement.
>

#### Après l'expiration du Certificat SSL Sectigo (DV ou EV), vous rencontrez l'erreur "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Cette erreur survient chaque fois que le Certificat SSL Sectigo (activé directement depuis l'hébergement web) expire et que l'adresse IP de l'hébergement web change. De ce fait, vous devez faire pointer votre nom de domaine vers la bonne adresse IP (enregistrement de type A), directement depuis la zone DNS active de votre nom de domaine.

Pour récupérer l'adresse IP de votre hébergement web, consultez notre guide « [Liste des adresses IP des clusters et hebergements web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».
Pour éditer la zone DNS active de votre nom de domaine, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).