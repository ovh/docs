---
title: "Restaurer l'espace de stockage de son hébergement web"
slug: restauration-ftp-filezilla-espace-client
excerpt: "Apprenez à restaurer un fichier ou l'intégralité de l'espace de stockage de votre hébergement web"
section: 'FTP et SSH'
order: 06
---

**Dernière mise à jour le 12/01/2023**

## Objectif

Votre offre d'hébergement web OVHcloud vous donne accès à un espace de stockage sur lequel vous pouvez héberger vos sites internet. Pour diverses raisons, comme la suppression ou la modification d'un fichier rendant inaccessible un site, vous pouvez être amené à devoir restaurer l'ensemble des données de votre espace de stockage, ou simplement un fichier stocké dans celui-ci.

> [!primary]
> 
> Les sauvegardes proposées par OVHcloud pour les hébergements mutualisés sont non-contractuelles. Nous vous les proposons en complément de vos services afin de vous aider dans les situations urgentes. Nous vous recommandons d'effectuer régulièrement vos propres sauvegardes de sécurité pour pallier aux éventuelles pertes de données.
> 
> Lorsque vous effectuez une sauvegarde de sécurité pour votre site et que vous utilisez une base de données, faites également une sauvegarde de votre base de données. N'hésitez pas à consultez notre guide pour [récupérer une sauvegarde de votre (vos) base(s) de données](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/).
> 

**Apprenez à restaurer un fichier ou l'intégralité de l'espace de stockage de votre hébergement web.**

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external} (ne fonctionne pas avec un [hébergement Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/)).
- Selon la méthode utilisée, disposer d’un accès à la gestion de l’offre d’hébergement web depuis l’[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} ou du mot de passe de l'utilisateur FTP vous permettant d'accéder à votre espace de stockage. 

## En pratique

Avant de débuter, assurez-vous que les dates de restauration proposées peuvent vous permettre de restaurer l'espace de stockage de votre hébergement web à la date souhaitée :

- le jour même, à 00 h 01 du matin ;
- la veille, à 00 h 01 du matin ;
- l’avant-veille, à 00 h 01 du matin ;
- le dimanche précédent, à 01 h 00 du matin ;
- le dimanche, deux semaines avant, à 01h00 du matin.

Si vous souhaitiez bénéficier d'une sauvegarde plus ancienne, OVHcloud ne sera pas en mesure de vous la fournir. Reportez-vous à une éventuelle sauvegarde personnelle de votre site que vous auriez pu effectuer par le passé. 

Définissez également la méthode de restauration que vous allez utiliser :

|Méthode de restauration|Description|
|---|---|
|Restauration depuis l'espace client OVHcloud|Restaure intégralement le contenu de l'espace de stockage. Le contenu actuel sera entièrement remplacé par celui de la sauvegarde sélectionnée.|
|Restauration depuis un logiciel ou une interface|Permet de vous connecter en lecture seule à une sauvegarde de l'espace de stockage. Bien qu'un peu plus technique, cette méthode vous permet de récupérer un ou plusieurs fichiers à une date antérieure, sans avoir à écraser intégralement le contenu de l'espace de stockage.|

> [!warning]
>
> Concernant la méthode de **restauration depuis l'espace client OVHcloud**, vérifiez qu'au moins **la moitié de l'espace de stockage FTP total** compris avec votre offre d'hébergement est encore disponible. Par exemple, si vous disposez d'une offre d'hébergement **Performance**, 250 Go/500 Go doivent encore être disponibles.
>
> Effectivement, nos robots installent la sauvegarde sur votre hébergement avant de supprimer le contenu FTP qui sera remplacé par la restauration.
>
> Pour visualiser le quota utilisé avec votre hébergement web, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Rendez-vous dans la partie `Web Cloud`{.action} puis cliquez sur `Hébergements`{.action}. Choisissez alors le nom de l’hébergement concerné. 
>
>Le quota utilisé apparaît sur la page qui s'affiche :
>
> ![ftp quota](images/check-ftp-quota.png){.thumbnail}
>
> Si l'espace de stockage FTP utilisé est supérieur à la moitié de l'espace de stockage FTP total de votre offre d'hébergement, récupérez en local certains éléments volumineux de votre site web à l'aide de [Filezilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/). Ensuite, supprimez-les de votre espace de stockage FTP. Cela diminuera la taille de l'espace de stockage FTP que vous utilisez et vous pourrez ensuite lancer votre restauration depuis l'espace client OVHcloud.
>

Une fois prêt, poursuivez la lecture de cette documentation en fonction de la méthode de restauration choisie.

- « [Restaurer l'espace de stockage depuis l'espace client OVHcloud](#viacontrolpanel) ».
- « [Restaurer un fichier depuis un logiciel ou une interface](#viainterface) ».

### Restaurer l'espace de stockage depuis l'espace client OVHcloud <a name="viacontrolpanel"></a>

> [!warning]
>
> Cette méthode de restauration est indisponible si votre hébergement a été placé en mode « maintenance » par nos administrateurs ou s'il ne dispose pas des droits d'accès FTP (droits `chmod`) suite à une action de votre part.
>
> En effet, les droits `chmod` à la racine de votre hébergement doivent être obligatoirement en `705` pour que cette méthode fonctionne.
>

> [!primary]
> **Site en mode « maintenance »**
> 
> Pour déterminer si votre site a été placé en mode « maintenance », référez-vous à notre guide [Que faire en cas de page « 403 forbidden » ?](https://docs.ovh.com/fr/hosting/diagnostic-403-forbidden/). 
> 
> Dans ce cas de figure :
>
> - Un e-mail est envoyé au [contact administrateur](https://docs.ovh.com/fr/customer/gestion-des-contacts/#acceder-a-la-gestion-des-contacts) de l'hébergement par nos équipes. 
> - Le statut « maintenance » apparaît dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Dans la partie `Web Cloud`{.action}, cliquez sur votre service dans la section `Hébergement`{.action} puis sur l'onglet `Informations générales`{.action}.
> - Le(s) site(s) hébergé(s) affiche(nt) une page « 403 Forbidden ».
>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur `Hébergements`{.action}, puis choisissez le nom de l'hébergement concerné. Positionnez-vous sur l'onglet `FTP - SSH`{.action} et cliquez sur le bouton `Restaurer une sauvegarde`{.action}.

![backupftp](images/backupftp-step1.png){.thumbnail}

Dans la fenêtre qui s'affiche, sélectionnez la date de restauration souhaitée dans le menu déroulant en vous aidant des informations ci-dessous :

|Date affichée|Date technique de la sauvegarde|
|---|---|
|J-1|Le jour même, à 00 h 01 du matin.|
|J-2|La veille, à 00 h 01 du matin.|
|J-3|L’avant-veille, à 00 h 01 du matin.|
|1 semaine|Le dimanche précédent, à 01 h 00 du matin.|
|2 semaines|Le dimanche, deux semaines avant, à 01 h 00 du matin.|

Une fois la date sélectionnée, cliquez sur le bouton `Suivant`{.action}. 

![backupftp](images/backupftp-step2.png){.thumbnail}

Prenez quelques instants afin de vous assurer qu'aucun fichier ne sera perdu suite à la restauration, comme un fichier que vous auriez placé sur votre espace de stockage après la date de restauration choisie. Comme précisé, la restauration va en effet écraser l'ensemble des données actuelles afin de les remplacer par celles de la sauvegarde.

Dès que vous êtes prêt à initier la sauvegarde, cliquez sur le bouton `Valider`{.action}.

> [!primary]
>
> La restauration automatique peut prendre de quelques minutes à quelques heures. Si elle dure **plus de 24 heures**, contactez [le support d'OVHcloud](https://www.ovhcloud.com/fr/support-levels/).
>

### Restaurer un fichier depuis un logiciel ou une interface <a name="viainterface"></a>

La manipulation s’effectue en plusieurs étapes. Assurez-vous d'être en possession du mot de passe de l'utilisateur FTP vous permettant d'accéder à votre espace de stockage. 

> [!warning]
>
> Cette solution requiert des connaissances à propos du logiciel ou de l'interface que vous allez utiliser. Nous vous proposons quelques informations sur la manière de procéder ci-dessous. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de vous rapprocher de l’éditeur du logiciel ou de l’interface si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance.
>

#### Étape 1 : définir le logiciel ou l'interface à utiliser

Dans un premier temps, définissez le logiciel ou l'interface que vous allez utiliser pour vous connecter à la sauvegarde de votre espace de stockage. Si vous le connaissez déjà, passez tout de suite à l'étape 2. Dans le cas contraire, nous vous recommandons d'utiliser l'une des trois solutions suivantes :

- **utiliser le logiciel FileZilla** : vous devrez télécharger au préalable ce logiciel depuis le site de son éditeur. OVHcloud met à votre disposition la documentation [« Utiliser le logiciel FileZilla avec son hébergement web »](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/){.external}, vous permettant de découvrir comment l'utiliser. Attention cependant, celle-ci ne se substitue pas à la documentation officielle de l'éditeur.

- **utiliser le logiciel Cyberduck** : vous devrez télécharger au préalable ce logiciel depuis le site de son éditeur. OVHcloud met à votre disposition la documentation [« Utiliser le logiciel Cyberduck avec son hébergement web »](https://docs.ovh.com/fr/hosting/utilisation-cyberduck-mac/){.external}, vous permettant de découvrir comment l'utiliser. Attention cependant, celle-ci ne se substitue pas à la documentation officielle de l'éditeur.

- **utiliser l'interface du FTP Explorer** : vous devrez au préalable accéder à cette dernière via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Une fois connecté, cliquez sur `Hébergements`{.action}, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `FTP - SSH`{.action} et cliquez sur le bouton `FTP Explorer`{.action}.

Dès que vous êtes prêt à poursuivre la manipulation, continuez vers l'étape suivante.

![backupftp](images/backupftp-step3.png){.thumbnail}

#### Étape 2 : se connecter à la sauvegarde

Depuis l'interface ou le logiciel sélectionné, vous allez devoir vous connecter à votre espace de stockage pour accéder aux données de la sauvegarde que vous voulez récupérer. Pour cela, vous devrez être en possession du nom d'utilisateur FTP, de son mot de passe et du nom d'hôte de votre serveur FTP.

Vous pouvez retrouver ces informations dans l'onglet `FTP - SSH`{.action} de votre hébergement. Si vous n’êtes plus en possession du mot de passe de l'utilisateur FTP, reportez-vous aux instructions décrites dans notre documentation [« Modifier le mot de passe d’un utilisateur FTP »](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-utilisateur-ftp/){.external}.

![backupftp](images/backupftp-step4.png){.thumbnail}

Vous devrez compléter votre nom d'utilisateur (ou « login ») FTP principal d'un suffixe déterminant la sauvegarde à laquelle vous vous connecterez. Aidez-vous des indications ci-dessous pour savoir comment accéder à la sauvegarde souhaitée :

|Date de la sauvegarde|Suffixe à ajouter|Exemple de nom d'utilisateur complété|
|---|---|---|
|Le jour même, à 00 h 01 du matin.|-snap0|utilisateurftp**-snap0**|
|La veille, à 00 h 01 du matin.|-snap1|utilisateurftp**-snap1**|
|L’avant-veille, à 00 h 01 du matin.|-snap2|utilisateurftp**-snap2**|
|Le dimanche précédent, à 01 h 00 du matin.|-snap3|utilisateurftp**-snap3**|
|Le dimanche deux semaines avant, à 01 h 00 du matin.|-snap4|utilisateurftp**-snap4**|

Prenez soin de remplacer l’information générique « utilisateurftp » par votre propre nom d'utilisateur FTP principal. Conservez cependant le suffixe définissant la date de sauvegarde à laquelle vous souhaitez accéder.

La méthode pour vous connecter à votre espace de stockage diffère selon l'interface ou le logiciel utilisé. Vous trouverez ci-dessous une image présentant la connexion depuis l'interface de FTP Explorer.

![backupftp](images/backupftp-step5.png){.thumbnail}

#### Étape 3 : récupérer le ou les fichiers souhaités

Une fois connecté, récupérez le ou les fichiers que vous souhaitez restaurer. Pour cela, explorez le contenu de votre espace de stockage jusqu'à ces derniers, puis récupérez-les. La manipulation diffère selon le logiciel ou l'interface que vous utilisez.

Avant de passer à l'étape suivante, assurez-vous d'avoir récupéré tous les fichiers que vous souhaitez restaurer, puis déconnectez-vous de votre espace de stockage.

#### Étape 4 : restaurer le ou les fichiers souhaités

Une fois le ou les fichiers en votre possession, connectez-vous de nouveau à votre espace de stockage. Cependant, n'ajoutez pas de suffixe à votre utilisateur FTP pour vous connecter. En ne renseignant pas ce suffixe, vous vous connecterez au contenu actuel de votre espace de stockage et non à une sauvegarde antérieure.

Une fois connecté, il ne vous reste plus qu'à restaurer le ou les fichiers souhaités. Pour cela, explorez le contenu de votre espace de stockage jusqu'à ces derniers, puis téléchargez-les en remplaçant les anciens fichiers.

## Aller plus loin

[Utiliser le logiciel FileZilla avec son hébergement web](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/){.external}.

[Utiliser le logiciel Cyberduck avec son hébergement web](https://docs.ovh.com/fr/hosting/utilisation-cyberduck-mac/){.external}.

[Récupérer la sauvegarde de la base de données d’un hébergement web](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/){.external}.

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.