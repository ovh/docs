---
title: 'Réagir en cas de désactivation pour sécurité d''un hébergement'
slug: site-ferme-pour-hack
excerpt: 'Appréhendez certaines pratiques liées à la sécurité et découvrez comment réagir en cas de désactivation de votre hébergement'
section: Diagnostic
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Votre hébergement web vous permet de mettre en ligne un ou plusieurs sites internet. Vous avez pu recevoir un message provenant d'OVHcloud, vous informant qu'une action liée à la sécurité venait d'être entreprise sur votre service. Ceci a pu rendre inaccessible vos sites internet ou limiter certaines de leurs fonctionnalités. Cependant, cette action est réalisée uniquement dans le cas où une activité suspecte, et généralement malveillante, a eu lieu sur votre hébergement web. 

**Appréhendez certaines pratiques liées à la sécurité et découvrez comment réagir en cas de désactivation de votre hébergement.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external}.
- Être en possession des identifiants permettant de se connecter à l'espace de stockage de votre hébergement.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

Il existe aujourd'hui une multitude de sites internet. Qu'ils soient basés sur une solution clefs en main (comme un CMS tel que WordPress) ou sur une structure que vous avez personnalisée (codée par vous-même ou par quelqu'un d'autre), les technologies utilisées dans ces derniers évoluent avec le temps. 

Ainsi, **un site internet doit se mettre à jour**, manipulation qui a pour effet de modifier le code de celui-ci. Ces évolutions peuvent contenir des nouvelles fonctionnalités, des améliorations de stabilité, mais aussi des correctifs de sécurité afin de combler des failles potentielles.

Un site internet peut donc comporter une faille de sécurité, voire plusieurs. Les possibilités sont malheureusement nombreuses. Ces brèches ne permettent pas de s'introduire sur nos serveurs, mais elles peuvent compromettre les données que vous hébergez et, par effet boule de neige, compromettre la stabilité de notre infrastructure en cas d'exploitation massive.

Lorsque cela arrive, une personne malintentionnée peut ainsi utiliser votre hébergement à des fins malveillantes, comme pour envoyer un grand nombre d'e-mails de spam ou pour y héberger un site frauduleux. Même si ces actions ne sont pas souhaitées de votre part, elles peuvent avoir lieu si votre site internet comporte une faille de sécurité. 

En ce sens, pour votre sécurité et celle de tous nos clients, votre hébergement ou certaines de ses fonctionnalités peuvent alors être temporairement désactivées. Lorsque cela arrive, plusieurs manipulations doivent être entreprises afin de résoudre cette situation. Même s'il n'existe pas de marche à suivre universelle, nous mettons à disposition cette documentation afin de vous aiguiller dans cette démarche. 

> [!warning]
>
> Cette documentation ne se substitue pas à l'aide d'un professionnel tel qu'un webmaster. Nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l’éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance.
>

### Étape 1 : estimer la situation

Avant de commencer à modifier quoi que ce soit sur votre site internet, débutez par comprendre ce qu'il s'est passé. Pour cela, vous trouverez ci-dessous plusieurs pistes pour vous aider dans votre analyse. 

#### 1.1 Prenez connaissance du message d'OVHcloud

Vous devriez avoir reçu un message de la part d'OVHcloud vous informant qu'une action liée à la sécurité de votre hébergement a été entreprise. Prenez alors connaissance des informations mentionnées dans celui-ci. Son contenu étant différent selon les cas rencontrés, il n'est pas possible de tous les référencer dans la présente documentation. Cependant, ces éléments vous permettront de :

- connaître le moment précis où la désactivation a eu lieu ;
- la raison pour laquelle la désactivation a été entreprise.

Ces informations pourront vous aider lors de vos recherches et manipulations futures.

#### 1.2 Estimer la sécurité de votre site

Que vous utilisiez un site internet basé sur une solution clefs en main ou sur une structure que vous avez personnalisée, **celui-ci doit être régulièrement mis à jour**. 

C'est d'autant plus vrai pour les CMS (comme WordPress), puisque ceux-ci sont grandement personnalisables grâce à des thèmes et des modules complémentaires (ou plugins). Ces derniers, même s'ils ont un côté pratique, peuvent modifier ou ajouter du code à votre site ; code dont vous ne connaissez ni la provenance, ni son niveau de sécurité.

Ainsi, posez-vous les questions suivantes : 

- **Avez-vous réalisé récemment une mise à jour de votre site internet ?** 

Ceci peut concerner la mise à jour du site lui-même (par vous-même ou votre webmaster), d'un thème ou d'un module complémentaire. Si ce n'est pas le cas, il se peut que votre site comporte une faille de sécurité, qui pourrait déjà être comblée dans une mise à jour que vous n'avez pas encore installée. 

En ce sens, il sera intéressant de vérifier lors de la prochaine étape si votre site et les éléments complémentaires installés sur celui-ci sont à jour ; et, si ce n'est pas le cas, de les mettre à niveau.

- **Avez-vous récemment ajouté un nouveau thème ou module complémentaire à votre site internet ?**

Si tel est le cas, il est possible que celui-ci comporte une faille de sécurité connue, malheureusement déjà exploitée par des personnes malveillantes. Attention, il s'agit simplement d'une éventualité, la cause ne provient pas forcément de cet élément nouvellement installé.

Il sera intéressant de vous assurer, lors de la prochaine étape, que les différents éléments complémentaires présents sur votre site sont sécurisés ou disposent d'une bonne réputation globale en ligne.

#### 1.3 Consulter l'activité et les logs de l'hébergement

Ceci vous permet d'avoir une visibilité sur l'activité de votre service et de votre site. Le but étant d'analyser ce qu'il s'est passé au moment où la désactivation de votre hébergement a eu lieu.

Pour consulter l'activité et les logs de l'hébergement, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} partie `Web`{.action}. Cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement concerné. Dès lors, il existe deux possibilités selon les informations que vous souhaitez recueillir.

- **Consulter l'activité de votre hébergement**

Vous pouvez y constater l'évolution de l'activité de votre service au fil des jours, semaines ou mois. Ceci peut vous permettre de voir si une activité inhabituelle a débuté avant qu'OVHcloud ne la détecte et désactive votre hébergement. 

Pour y accéder, assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action} puis descendez en bas de la page jusqu'à la section `Activités de l’hébergement`.

![hostingdeactivation](images/hosting-deactivation-step1.png){.thumbnail}

- **Consulter les logs de votre hébergement**

Vous avez la possibilité d'accéder aux logs détaillés de votre service, et notamment à toutes les requêtes web initiées sur ce dernier. Cette action peut vous permettre de retrouver le ou les fichiers ayant permis à une personne malintentionnée d'utiliser votre hébergement à des fins malveillantes. L'analyse se révèle souvent très ardue, puisque très technique. Faites-vous assister d'un webmaster en cas de nécessité.

Pour accéder aux logs, cliquez sur l'onglet `Plus +`{.action} puis sur `Statistiques et logs`{.action}. Utilisez les informations qui s'affichent pour vous connecter au site des logs de votre hébergement. 

![hostingdeactivation](images/hosting-deactivation-step2.png){.thumbnail}

Consultez alors les logs « web » à la date que vous jugez la plus pertinente (soit celle où la désactivation a eu lieu, soit celle où l'activité inhabituelle a débuté).

Partez de l'heure choisie, puis élargissez ensuite progressivement le champ de recherche sur des horaires antérieurs. Le but étant de trouver des activités étranges ou différentes des autres, qui proviennent généralement de requêtes « POST ». Une nouvelle fois, cette analyse peut se révéler très ardue de par sa complexité. Faites-vous assister d'un webmaster en cas de nécessité.

### Étape 2 : intervenir sur votre site internet

Une fois que vous disposez de plus d'éléments sur ce qu'il s'est passé, vous devriez être en mesure d'intervenir sur votre site internet ou, au minimum, d'avoir une idée plus précise des opérations à entreprendre. 

Cette étape regroupe deux grandes manipulations qui sont complémentaires.

- **La correction de la ou des failles de sécurité**. Ainsi, vous empêcherez quiconque de pouvoir les exploiter de nouveau.

- **La suppression de tout code malveillant**. Une personne malintentionnée a pu, par le biais d'une faille de sécurité, déposer du code sur votre site internet à votre insu, comme une porte dérobée. Cela lui confère un accès masqué à votre site ainsi qu'à votre hébergement. Vous devez donc vérifier si du code malveillant a été ajouté, puis le supprimer le cas échéant.

> [!warning]
>
> Les deux manipulations sont complémentaires.
> 
> Si vous corrigez la faille de sécurité sans pour autant supprimer le code malveillant déposé sur votre hébergement, la personne malintentionnée disposera toujours d'un accès masqué à celui-ci. Elle pourrait donc toujours l'exploiter à de mauvaises fins.
>
> Si vous supprimez le code malveillant sans pour autant corriger la faille de sécurité, la personne malintentionnée pourrait de nouveau l'exploiter afin de redéposer du code malveillant sur votre hébergement. Elle aurait même la possibilité d'y créer une nouvelle porte dérobée.
>

Pour réaliser ces manipulations, il n'existe pas de marche à suivre universelle tant les cas sont différents. Vous trouverez ainsi ci-dessous plusieurs pistes pouvant vous aider dans ces démarches : adaptez-les ou utilisez-les selon votre situation personnelle. Pour rappel, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l’éditeur du service si vous éprouvez des difficultés. 

#### 2.1 Restaurer votre site internet à une date antérieure

La restauration permet de remettre en l'état votre site tel qu'il était au moment d'une sauvegarde, avant son altération. Vous devez donc être en possession d'une sauvegarde ne comportant pas déjà de code malveillant ; auquel cas la manipulation serait obsolète. 

> [!warning]
>
> La restauration permet uniquement de supprimer tout code malveillant déposé sur votre hébergement à votre insu. **Cependant, ceci ne corrige pas la ou les failles de sécurité.**
>

Plusieurs possibilités existent pour réaliser une restauration de votre site.

- **Vous disposez d'une copie personnelle de votre site internet** : 

Il ne vous reste plus qu'à la restaurer sur votre hébergement, en remplaçant le contenu de l'espace de stockage et de la base de données par celui de la sauvegarde. Notre documentation « [Importer une sauvegarde dans la base de données d’un hébergement web](../mutualise-guide-importation-dune-base-de-donnees-mysql/){.external} » peut vous accompagner dans cette démarche.

- **OVHcloud dispose d'une copie de votre site internet (espace de stockage et base de données)** :

Selon la date à laquelle vous souhaitez restaurer votre site, il se peut qu'OVHcloud puisse vous fournir une sauvegarde. Reportez-vous alors aux instructions de nos documentations « [Restaurer l’espace de stockage de son hébergement web](../restauration-ftp-filezilla-espace-client/){.external} », « [Récupérer la sauvegarde de la base de données d’un hébergement web](../exportation-bases-donnees/){.external} » et « [Importer une sauvegarde dans la base de données d’un hébergement web](../mutualise-guide-importation-dune-base-de-donnees-mysql/){.external} » pour vous aider dans l'accomplissement de cette démarche. Assurez-vous aussi, dans la mesure du possible, de faire coïncider les dates des sauvegardes sélectionnées.

- **Ni vous, ni OVHcloud, ne dispose d'une copie de votre site internet** : 

Vous devrez dans ce cas [intervenir manuellement dans le code de votre site](../site-ferme-pour-hack/#23-corriger-manuellement-le-code-de-votre-site){.external} pour y apporter les corrections nécessaires. 

#### 2.2 Mettre à jour votre site internet

Cette manipulation peut paraître simple, mais quelques éléments techniques sont à considérer. Avant de réaliser une quelconque mise à jour, assurez-vous de disposer d'un accès à votre site internet. 

> [!primary]
>
> Si l'action réalisée par OVHcloud a rendu inaccessible votre site, vous ne pourrez pas de suite le mettre à jour. Si tel est le cas, réalisez d'abord l'étape 3 « [réactiver votre hébergement web](../site-ferme-pour-hack/#etape-3-reactiver-votre-hebergement-web_1){.external} » afin de retrouver un accès à votre site. Une fois fait, vous pourrez réaliser la mise à jour.
>

Connectez-vous à l'interface d'administration de votre site internet (il ne s'agit pas de l'interface d'OVHcloud). Recherchez alors dans celle-ci si :

- votre site est correctement à jour ;
- tous les thèmes et modules complémentaires (ou plugins) installés sont à jour.

Si ce n'est pas le cas, vous devrez les mettre à jour. Pour cela, suivez les instructions s'affichant dans l'interface d'administration de votre site. 

> [!warning]
>
> **Avant d'entamer cette démarche, nous vous suggérons fortement de prendre connaissance de toute éventuelle recommandation concernant la mise à jour que vous vous apprêtez à faire.** Ces recommandations proviennent directement de l'éditeur et/ou créateur du site internet, des thèmes et des modules complémentaires que vous utilisez.
>

Ces dernières peuvent porter à votre attention des éléments qui pourraient bloquer la mise à jour que vous vous apprêtez à réaliser. Par exemple :

- assurez-vous que la nouvelle version de votre CMS (comme WordPress) est bien compatible avec la version de PHP paramétrée sur votre hébergement. Si vous deviez changer cette dernière, reportez-vous à notre documentation « [Changer la version de PHP de son hébergement web](../configurer-le-php-sur-son-hebergement-web-mutu-2014/){.external} » ;
- assurez-vous que vos thèmes et modules complémentaires sont bien compatibles avec la nouvelle version de votre CMS. Si ce n'est pas le cas, vous ne serez plus en mesure de les utiliser et vous devrez trouver une solution alternative.

#### 2.3 Corriger manuellement le code de votre site

Si vous n'utilisez pas un site basé sur une solution clefs en main (comme un CMS tel que WordPress) ou si vous ne disposez pas d'une copie permettant de le restaurer, vous devrez réaliser les corrections nécessaires manuellement. **Cette manipulation étant extrêmement technique, nous vous recommandons de vous faire assister d'une personne disposant des connaissances requises.** 

Il n'existe pas de marche à suivre universelle tant les cas sont différents. Vous pouvez cependant vous aider des logs de votre hébergement afin de localiser plus facilement le ou les fichiers infectés sur lesquels vous devrez intervenir.

### Étape 3 : réactiver votre hébergement web

La réactivation de votre hébergement web s'effectue par le biais d'une manipulation à réaliser sur votre espace de stockage. Pour cela, vous devez modifier les permissions (ou droits) pour « 705 » de la racine (considéré comme étant le « / ») de votre espace de stockage.

> [!primary]
>
> Si le message que vous avez reçu de la part d'OVHcloud précise explicitement que vous n'avez pas la possibilité de réactiver vous-même votre hébergement, suivez alors les indications précisées dans celui-ci.
>

Si vous avez la possibilité de réactiver vous-même votre hébergement web, munissez-vous des informations vous permettant de vous connecter à votre espace de stockage (c'est-à-dire le serveur FTP, l'utilisateur FTP et son mot de passe).

Pour les récupérer, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, puis cliquez sur `Hébergements`{.action} dans la barre de services à gauche. Choisissez le nom de l’hébergement concerné et positionnez-vous enfin sur l’onglet `FTP - SSH`{.action}. Vous pourrez depuis cette même page [modifier le mot de passe de l'utilisateur FTP](../modifier-mot-de-passe-utilisateur-ftp/){.external} si cela est nécessaire.

![hostingdeactivation](images/hosting-deactivation-step3.png){.thumbnail}

Dès que vous êtes en possession des informations requises, plusieurs possibilités s'offrent à vous selon le logiciel ou l'interface web que vous souhaitez utiliser.

#### 3.1 Rouvrir son hébergement avec FileZilla

Ouvrez votre logiciel FileZilla puis connectez-vous à votre espace de stockage. Cliquez ensuite sur `Serveur`{.action} dans la barre de menu, puis sur `Entrer une commande FTP`{.action} (l'intitulé peut être légèrement différent suivant la version de FileZilla que vous utilisez). Dans la fenêtre qui s'affiche, renseignez la commande ci-dessous puis validez-la.

```
SITE CHMOD 705 /
```

Une réponse « ok » devrait vous confirmer que la manipulation s'est bien effectuée. Pour le vérifier, essayez d'accéder à votre site internet. Si vous deviez réaliser la mise à jour de celui-ci, retournez à présent à la partie « [2.2 Mettre à jour votre site internet](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet){.external} » de cette documentation.

![hostingdeactivation](images/hosting-deactivation-step4.png){.thumbnail}

#### 3.2 Rouvrir son hébergement avec le FTP Explorer « net2ftp »

Toujours depuis l'onglet `FTP - SSH`{.action} de votre espace client OVHcloud, cliquez sur le bouton `FTP Explorer`{.action} et connectez-vous à votre espace de stockage. Cliquez ensuite sur le bouton `Avancé`{.action}, puis sur le bouton `Go`{.action} à côté de « Envoyer des commandes FTP arbitraires au serveur FTP ».

![hostingdeactivation](images/hosting-deactivation-step5.png){.thumbnail}

Dans la partie supérieure de la page, renseignez la commande ci-dessous puis cliquez sur le bouton représentant un « v » vert. 

```
SITE CHMOD 705 /
```

Une réponse devrait vous confirmer que la manipulation s'est bien effectuée. Pour le vérifier, essayez d'accéder à votre site internet. Si vous deviez réaliser la mise à jour de celui-ci, retournez à présent à la partie « [2.2 Mettre à jour votre site internet](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet){.external} » de cette documentation.

![hostingdeactivation](images/hosting-deactivation-step6.png){.thumbnail}

#### 3.3 Rouvrir son hébergement en SSH

Connectez-vous à votre espace de stockage par le biais d'une connexion SSH. Utilisez ensuite la commande ci-dessous, puis validez-la.

```
chmod 705 .
```

Vous pouvez vérifier que les droits sont à présent corrects grâce à la commande :

```
ls -la
```

Vous avez également la possibilité d'essayer d'accéder à votre site internet. Si vous deviez réaliser la mise à jour de celui-ci, retournez à présent à la partie « [2.2 Mettre à jour votre site internet](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet){.external} » de cette documentation.

### Étape 4 : veiller à la sécurité de votre site

À présent que votre site internet ne comporte plus de faille de sécurité ni de code malveillant, il reste important de continuer à veiller à sa sécurité. Pour cela, nous vous conseillons :

- de mettre à jour votre site régulièrement (en incluant les thèmes et modules complémentaires) ;
- d'installer du contenu de confiance : plus vous personnalisez un site en installant des thèmes et des modules complémentaires, plus vous modifiez ou ajoutez du code à ce dernier. Soyez attentif à un éventuel système de notation ou de réputation, qui pourrait vous aiguiller grâce à des retours d'utilisateurs.

En définitive, le but n'est pas de voir le mal partout, mais d'être plus vigilant quant à ce que vous installez sur votre site et de penser régulièrement à le mettre à jour.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
