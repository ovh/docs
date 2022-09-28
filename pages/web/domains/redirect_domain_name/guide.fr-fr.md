---
title: "Rediriger un nom de domaine géré par OVHcloud"
slug: redirection-nom-de-domaine
excerpt: "Découvrez les différents types de redirections et comment en créer une pour un nom de domaine géré par OVHcloud"
section: "Tâches courantes"
order: 01
---

**Dernière mise à jour le 27/09/2022**

## Objectif

La redirection d'un nom de domaine consiste à rediriger celui-ci vers une nouvelle cible. Différents types de redirections existent, répondant chacun à un besoin spécifique.

**Découvrez différentes manières de rediriger votre nom de domaine**

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Être connecté à votre hébergement web (pour une redirection via un fichier [.htaccess](#htaccess_rewrite)).

## En pratique

### Comprendre la redirection d'un nom de domaine

Cette fonctionnalité permet de rediriger un domaine/sous-domaine vers :

- un autre domaine/sous-domaine déjà existant :
    - **Exemple** : `domain.tld`
- une URL (Uniform Resource Locator) de site internet :
    - **Exemples** : `http://www.domain.tld/welcome/` ou `https://www.domain.tld/welcome/` (si le domaine cible dispose d'un certificat SSL compatible).

Ces actions peuvent être réalisées de plusieurs manières :

- **Depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)** où un assistant de configuration permet de paramétrer votre redirection.
- **Via une méthode nécessitant de la programmation**. Vous devrez créer vous-même la redirection dans un fichier (généralement un [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> La mise en place d'une redirection peut avoir des conséquences sur le référencement de votre site internet. 
> Soyez vigilant quant aux manipulations que vous allez entreprendre ou contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) dans le référencement si nécessaire.
>
> Attention : une redirection créée depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ne permet pas de rediriger une URL en `https://` vers un autre domaine ou une autre URL. 
> Pour créer ce type de redirection, vous devrez obligatoirement passer par [une réécriture d'URL](https://docs.ovh.com/fr/hosting/htaccess-reecriture-url-mod-rewrite/) via un fichier « .htaccess » par exemple.
>

### Rediriger un nom de domaine depuis l'espace client

Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, rendez-vous dans la partie `Web Cloud`{.action}, sélectionnez le domaine à rediriger dans la section `Noms de domaine`{.action} puis cliquez sur l'onglet `Redirection`{.action}.

Le tableau affiche les redirections actives pour votre nom de domaine. Vous pouvez y gérer vos redirections existantes à l'aide du bouton `...`{.action} situé à droite de chaque ligne.

Cliquez sur le bouton `Ajouter une redirection`{.action}.

![Présentation du menu redirection](images/RedirectionPanel.png){.thumbnail}

Trois options de redirections sont disponibles depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et chacune d'entre elles se compose de **5 étapes** successives. 

> L'onglet `Redirection`{.action} présente une quatrième option permettant de faire pointer rapidement votre domaine vers les entrées DNS A, AAAA et CNAME.<br>
> Du fait qu'il ne s'agit pas là à proprement parler d'une « redirection », cette option ne sera pas détaillée dans ce guide.
>
> Pour plus d'informations sur les entrées DNS, consultez notre documentation sur les [enregistrements DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/#les-enregistrements-dns).
>

Retrouvez ci-dessous les trois types de redirections détaillés étape par étape.

> [!primary]
>
> Quelle que soit l'option de redirection choisie, la modification nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

#### Option 1 : redirection visible permanente vers une adresse web

Cette option permet, après la saisie du domaine redirigé, d'afficher le domaine cible dans la barre d'adresses de votre navigateur internet au lieu du domaine redirigé.

- **Exemple** : si vous redirigez `domain1.tld` vers `domain2.tld`, c'est `domain2.tld` qui s'affichera dans la barre d'adresses dans votre navigateur.

![Gif1](images/redirect1.gif){.thumbnail}

> Cette redirection « standard » retournera un code HTTP 301.

> [!success]
> Cliquez sur les onglets ci-dessous pour afficher successivement chacune des 5 étapes.

> [!tabs]
> **Etape 1**
>>
>> Dans la fenêtre, votre domaine à rediriger apparaît déjà. Renseignez le formulaire **uniquement** si vous souhaitez rediriger un *sous-domaine*.
>>
>> La case `Rediriger aussi`{.action} peut être cochée pour rediriger également votre sous-domaine en `www` vers la même cible que vous choisirez pour votre domaine/sous-domaine.
>>
>> ![Étape 1](images/Step1.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 2.
>>
> **Etape 2**
>>
>> Sélectionnez `Vers une adresse Web`{.action}.
>>
>> ![Étape 2](images/Step2.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 3.
>>
> **Etape 3**
>>
>> Sélectionnez `Avec une redirection visible`{.action} parmi les deux choix indiqués.
>>
>> ![Étape 3](images/Step3Visi.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 4.
>>
> **Etape 4**
>>
>> Sélectionnez `Permanente (301)`{.action} parmi les deux choix indiqués puis saisissez le domaine ou l'URL cible de votre redirection dans le formulaire `Adresse web`{.action} qui s'affiche.
>>
>> ![Étape 4](images/Step4VisiPerma.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 5.
>>
> **Etape 5**
>>
>> Dans cette dernière étape, assurez-vous que les informations affichées sont bien correctes.
>>
>> ![Étape 5](images/Step5VisiPerma.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider votre configuration.
>> 
>> > [!primary]
>> >
>> > Si le message « *Il existe des redirections à partir des domaines que vous souhaitez rediriger qui entrent en conflit avec les redirections que vous souhaitez ajouter* » s'affiche, vous pouvez cocher la case `Confirmer l'écrasement de la redirection existante`{.action} pour forcer l'application de votre redirection.
>> >
>> > Attention, l'ancienne configuration sera donc désactivée et supprimée.
>> >
>>

#### Option 2 : redirection visible temporaire vers une adresse web

Comme pour l'option 1, cette option permet d'afficher, après la saisie du domaine redirigé, le domaine cible dans la barre d'adresses de votre navigateur internet au lieu du domaine redirigé.

Toutefois, celle-ci est à utiliser ponctuellement, par exemple pour des événements éphémères.<br>
En effet, le positionnement sur les moteurs de recherche est moins performant qu'avec une redirection **visible permanente** de type 301 (code HTTP).

- **Exemple** : si vous redirigez `domain1.tld` vers `domain2.tld`, c'est `domain2.tld` qui s'affichera dans la barre d'adresses dans votre navigateur.

![Gif1](images/redirect1.gif){.thumbnail}

> Cette redirection retournera un code HTTP 302.

> [!success]
> Cliquez sur les onglets ci-dessous pour afficher successivement chacune des 5 étapes.

> [!tabs]
> **Etape 1**
>>
>> Dans la fenêtre, votre domaine à rediriger apparaît déjà. Renseignez le formulaire **uniquement** si vous souhaitez rediriger un *sous-domaine*.
>>
>> La case `Rediriger aussi`{.action} peut être cochée pour rediriger également votre sous-domaine en `www` vers la même cible que vous choisirez pour votre domaine/sous-domaine.
>>
>> ![Étape 1](images/Step1.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 2.
>>
> **Etape 2**
>>
>> Sélectionnez `Vers une adresse Web`{.action}.
>>
>> ![Étape 2](images/Step2.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 3.
>>
> **Etape 3**
>>
>> Sélectionnez `Avec une redirection visible`{.action} parmi les deux choix indiqués.
>>
>> ![Étape 3](images/Step3Visi.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 4.
>>
> **Etape 4**
>>
>> Sélectionnez `Temporaire (302)`{.action} parmi les deux choix indiqués puis saisissez le domaine ou l'URL cible de votre redirection dans le formulaire `Adresse web`{.action} qui s'affiche.
>>
>> ![Étape 4](images/Step4VisiTempo.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 5.
>>
> **Etape 5**
>>
>> Dans cette dernière étape, assurez-vous que les informations affichées sont bien correctes.
>>
>> ![Étape 5](images/Step5VisiTempo.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider votre configuration.
>> 
>> > [!primary]
>> >
>> > Si le message « *Il existe des redirections à partir des domaines que vous souhaitez rediriger qui entrent en conflit avec les redirections que vous souhaitez ajouter* » s'affiche, vous pouvez cocher la case `Confirmer l'écrasement de la redirection existante`{.action} pour forcer l'application de votre redirection.
>> >
>> > Attention, l'ancienne configuration sera donc désactivée et supprimée.
>> >
>>

#### Option 3 : redirection invisible vers une adresse web

Cette redirection permet, après la saisie du domaine redirigé, de le laisser affiché dans la barre d'adresses de votre navigateur internet au lieu de le remplacer par le domaine cible.<br>
**Attention, cette action n'est pas compatible avec tous les sites et affecte le référencement de votre site.**.

- **Exemple** : si vous redirigez `domain1.tld` vers `domain2.tld`, c'est `domain1.tld` qui s'affichera dans la barre d'adresses dans votre navigateur.

![Gif2](images/redirect2.gif){.thumbnail}

La redirection invisible fonctionne avec une balise HTML *iFrame*. Celle-ci permet à votre domaine redirigé d'intégrer dans sa propre page HTML le contenu de l'autre page correspondant au domaine cible.

Cette encapsulation permet d'empêcher les visiteurs de votre site de visualiser le domaine cible

> Cette option retournera un code HTTP 200.

> [!warning]
>
> Attention, les pages encapsulées avec une balise *iFrame* peuvent ne pas être lues sur les smartphones. Leur contenu n'est généralement pas pris en compte par les moteurs de recherche pour le référencement et l'indexation de votre site.
>

> [!success]
> Cliquez sur les onglets ci-dessous pour afficher successivement chacune des 5 étapes.
>

> [!tabs]
> **Etape 1**
>>
>> Dans la fenêtre, votre domaine à rediriger apparaît déjà. Renseignez le formulaire **uniquement** si vous souhaitez rediriger un *sous-domaine*.
>>
>> La case `Rediriger aussi`{.action} peut être cochée pour rediriger également votre sous-domaine en `www` vers la même cible que vous choisirez pour votre domaine/sous-domaine.
>>
>> ![Étape 1](images/Step1.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 2.
>>
> **Etape 2**
>>
>> Sélectionnez `Vers une adresse Web`{.action}.
>>
>> ![Étape 2](images/Step2.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 3.
>>
> **Etape 3**
>>
>> Sélectionnez `Avec une redirection invisible`{.action} parmi les deux choix indiqués.
>>
>> ![Étape 3](images/Step3Invi.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 4.
>>
> **Etape 4**
>>
>> Sélectionnez `Temporaire (iframe)`{.action} parmi les deux choix indiqués puis saisissez le domaine ou l'URL cible de votre redirection dans le formulaire `Adresse web`{.action} qui s'affiche.
>>
>> ![Étape 4](images/Step4Invi.png){.thumbnail}
>>
>> Trois paramètres optionnels sont mis à votre disposition à cette étape :
>>
>> - **Titre** : celui de votre site internet. Il s'affichera en tant que titre de page dans l'onglet des navigateurs internet.<br>
>> - **Mots clés** : ils peuvent être utilisés par les moteurs de recherche pour référencer partiellement la page.<br>
>> - **Description** : concerne votre site internet. Elle sera utilisée par les moteurs de recherche dans leurs résultats.
>>
>> Cliquez sur `Suivant`{.action} pour passer à l'étape 5.
>>
> **Etape 5**
>>
>> Dans cette dernière étape, assurez-vous que les informations affichées sont bien correctes.
>>
>> ![Étape 5](images/Step5Invi.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider votre configuration.
>> 
>> > [!primary]
>> >
>> > Si le message « *Il existe des redirections à partir des domaines que vous souhaitez rediriger qui entrent en conflit avec les redirections que vous souhaitez ajouter* » s'affiche, vous pouvez cocher la case `Confirmer l'écrasement de la redirection existante`{.action} pour forcer l'application de votre redirection.
>> >
>> > Attention, l'ancienne configuration sera donc désactivée et supprimée.
>> >
>>

### Rediriger un nom de domaine via un fichier « .htaccess » <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition cette partie du guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance sur les étapes documentées ci-dessous. Retrouvez plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Les fichiers « .htaccess » sont des fichiers de configuration dans lesquels des commandes peuvent être spécifiées. Lors de l’exécution du code de votre site internet par le serveur web (Apache), les commandes seront interprétées et ainsi exécutées.<br>
Parmi ces commandes, il est possible de créer des redirections.

Manipuler un fichier « .htaccess »  peut rendre votre site inaccessible. En cas de doute, contactez un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) .

Retrouvez l'ensemble de notre documentation sur le « .htaccess »  dans la section [« Aller plus loin »](#go-further) de ce guide.

> [!success]
>
> Nous vous conseillons de **réaliser une sauvegarde de votre fichier .htaccess** avant d'y effectuer des modifications. Vous pourrez ainsi rétablir la version antérieure du fichier en cas de mauvaise manipulation.
>

Vous trouverez ci-dessous 4 variables pour réaliser des redirections via le fichier « .htaccess ».

#### Variable 1 - « Redirect permanent »

Cette variable permet de rediriger un site dans son ensemble, ou seulement une partie d'un site, vers un autre site ou une autre partie d'un site. Les visiteurs sont alors automatiquement redirigés vers la bonne adresse/URL lorsqu'ils tentent d'accéder à votre site via l'adresse/URL historique.

> [!tabs]
> Code à placer dans le « .htaccess » 
>>
>> Pour rediriger un site en entier :
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Pour rediriger un répertoire vers un autre :
>>
>> ```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Pour rediriger un fichier vers un autre :
>>
>> ```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Code HTTP
>>
>> Le script renverra un code HTTP 301. Cela préviendra les robots des moteurs de recherche qu'il faut mettre à jour leurs liens vers la nouvelle adresse/URL.
>>

#### Variable 2 - « Redirect gone »

Cette variable est utile pour les fichiers supprimés. Elle remplace le message *404 document non trouvé* par un message plus explicite de type *410 le document n’existe plus*. Le visiteur de votre site est informé que le fichier qu'il tente d'appeler n'existe plus.

> [!tabs]
> Code à placer dans le « .htaccess » 
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Code HTTP
>>
>> Le script renverra un code HTTP 410.
>>

#### Variable 3 - « Redirect seeother »

Si vous changez l’extension d’un fichier, la variable *seeother* permet d'en modifier le type. Le visiteur qui tente d'accéder à l'ancien fichier sera automatiquement redirigé vers celui avec la bonne extension.

> [!tabs]
> Code à placer dans le « .htaccess » 
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Code HTTP
>>
>> Le script renverra un code HTTP 303.
>>

#### Variable 4 - « Redirect Temp » 

Cette variable peut être utilisée lorsque vous déplacez temporairement des fichiers sur un autre site. Les visiteurs qui tentent d'accéder à votre site via l'adresse/URL historique sont automatiquement redirigés vers la nouvelle adresse/URL temporaire.

> [!tabs]
> Code à placer dans le « .htaccess » 
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Code HTTP
>>
>> Le script renverra un code HTTP 302.
>>

## Aller plus loin <a name="go-further"></a>

[Bloquer l’accès à mon site pour certaines adresses IP via un fichier « .htaccess » ](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-bloquer-certaines-ip-au-niveau-de-mon-site/).

[Protéger l'interface d'administration de votre site via le « .htaccess » ](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/).

[Réécrire vos URLs grâce au « mod_rewrite »](https://docs.ovh.com/fr/hosting/htaccess-reecriture-url-mod-rewrite/).

[Effectuer d'autres opérations avec le fichier « .htaccess » ](https://docs.ovh.com/fr/hosting/mutualise-htaccess-les-autres-operations-realisables-avec-des-fichiers-htaccess/).

[Comment éditer ma zone DNS ?](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
