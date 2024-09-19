---
title: Premiers pas avec un VPS
excerpt: "Apprenez à gérer un VPS dans votre espace client et découvrez les premières étapes de son utilisation, notamment les connexions à distance et les mesures de sécurité"
updated: 2024-09-19
---

## Objectif

Un serveur privé virtuel (VPS) est un serveur dédié virtualisé qui vous offre une grande flexibilité et un contrôle accru par rapport aux solutions d'hébergement web traditionnelles. Contrairement aux offres d’hébergement gérées par OVHcloud, où les tâches de gestion sont prises en charge, l'administration d'un VPS relève entièrement de votre responsabilité. En tant qu'administrateur système, vous êtes chargé de la configuration, de la maintenance et de la sécurisation du serveur pour garantir son bon fonctionnement et sa fiabilité.

**Découvrez les informations nécessaires pour vos premiers pas sur un VPS.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0JZ8Qe4otgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Disposer d'une offre [VPS](/links/bare-metal/vps) active dans votre espace client OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Sommaire

- [Tableau de bord](#controlpanel)
- [Fonctions VPS disponibles dans l’onglet « Accueil »](#hometab)
- [Connexion à votre VPS (OS GNU/Linux)](#connect)
- [Connexion à votre VPS Windows](#winconnect)
- [Sécuriser votre VPS](#secure)
- [Attacher un nom de domaine](#domain)

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

<a name="controlpanel"></a>

### Tableau de bord

L'onglet `Accueil`{.action} contient des informations importantes sur votre service et vous permet d'effectuer les opérations essentielles.

![VPS Home](images/vpshome.png){.thumbnail}

#### Votre VPS <a name="yourvps"></a>

Retrouvez ci-dessous les informations de base sur votre VPS et l’état du service. Cliquez sur les onglets ci-dessous pour afficher les détails.

> [!tabs]
> Nom
>>
>> Pour personnaliser le nom de votre VPS, cliquez sur le bouton `...`{.action}, puis sélectionnez `Changer le nom`{.action}. Cette fonctionnalité est utile pour faciliter la navigation dans l’espace client lorsque vous gérez plusieurs services VPS. Toutefois, le nom interne du service reste au format *vps-XXXXXXX.vps.ovh.net*.
>>
> Boot
>>
>> Le mode de démarrage indiqué est soit en **mode normal**, où le serveur charge le système d'exploitation installé (*LOCAL*), soit en **mode rescue**, fourni par OVHcloud en cas de dépannage. Utilisez le bouton `...`{.action} pour [redémarrer le VPS](#reboot-current-range) ou démarrez-le en mode rescue ci nécessaire.
>>
>> Si besoin, retrouvez plus d'informations dans notre guide sur le [mode rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> OS / Distribution
>>
>> Il s'agit du système d'exploitation actuellement installé. Utilisez le bouton `...`{.action} pour [réinstaller le même système d'exploitation ou en sélectionner un autre parmi les options disponibles](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Une réinstallation entrainera l'effacement de toutes les données actuellement hébergées sur le VPS (à l'exception des disques additionnels).
>>
>> > [!primary]
>> >
>> > Si vous avez commandé un VPS **Windows**, vous ne pouvez choisir qu’un OS Windows pour la réinstallation. De même, si Windows n’a pas été sélectionné lors de la commande, il ne pourra pas être installé après la livraison du VPS.
>>
>>
>> Une fois le système installé, il vous appartient d’implémenter les mises à jour de sécurité. Vous trouverez plus d'informations [ci-dessous](#reinstallvps) ainsi que dans notre guide « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) ».
>> 
> Zone / Localisation
>>
>> Ces sections fournissent des informations sur la localisation de votre VPS. Cela peut être utile pour identifier et évaluer les éventuels impacts sur votre service, comme ceux mentionnés dans les [rapports d'incidents ou de maintenance](https://bare-metal-servers.status-ovhcloud.com/).
>>
 
#### Votre configuration

Cliquez sur les onglets ci-dessous pour afficher les détails de cette section.

> [!tabs]
> Modèle
>>
>> Cet élément indique la référence commerciale identifiant le modèle de VPS correspondant aux [offres VPS sur notre site](https://www.ovhcloud.com/fr/vps).
>>
> vCores / Mémoire / Stockage
>> 
>> Les ressources actuelles de votre VPS sont affichées ici et peuvent être mises à jour séparément en cliquant sur le bouton correspondant. À noter que les mises à niveau sont limitées par le modèle de VPS choisi et peuvent uniquement être disponibles en passant à une [gamme supérieure](https://www.ovhcloud.com/fr/vps).
> Disques additionnels
>> 
>> Ajoutez des disques supplémentaires à votre VPS pour augmenter la capacité de stockage de votre serveur au-delà de celle incluse dans la configuration initiale. Vous pouvez par exemple y stocker des données de sauvegarde.

#### IP

Cliquez sur les onglets ci-dessous pour afficher les détails de cette section.

> [!tabs]
> IPv4
>>
>> L’adresse IPv4 publique principale du VPS est configurée automatiquement à l’installation. Retrouvez plus d'informations sur la gestion des IP dans [ce guide](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>>
> IPv6 / Gateway
>> 
>> Retrouvez ici l'adresse IPv6 publique et l'adresse de la passerelle associée. Celles-ci sont automatiquement attachées au VPS lors de l'installation. Retrouvez plus d'informations dans [ce guide](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>> 
> Secondary DNS
>>
>> Cette fonctionnalité est utile pour héberger des services DNS. Consultez notre guide « [Configurer le DNS secondaire d’OVHcloud sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps) » pour plus de détails à ce sujet.

#### Sauvegarde

Ces options se réfèrent à des services VPS supplémentaires qui peuvent être commandés dans l'espace client.

> [!tabs]
> Snapshot
>>
>> Un snapshot sur un VPS est une sauvegarde instantanée de l'état du serveur, qui permet de restaurer rapidement le système en cas de problème. L'option `Snapshot` permet de créer un snapshot manuel comme point de restauration unique.
>>
> Backup automatisé
>> 
>> L'option `Backup automatisé` permet de programmer des sauvegardes régulières de votre VPS. Contrairement aux snapshots manuels, cette fonctionnalité conserve plusieurs points de restauration dans le temps, vous offrant ainsi une protection continue et automatique de vos données (hors disques additionnels).

Retrouvez toutes les informations sur les solutions de sauvegarde disponibles pour votre service sur la [page produit VPS](https://www.ovhcloud.com/fr/vps/options/) et dans nos [guides respectifs](/products/bare-metal-cloud-virtual-private-servers-backups).

#### Abonnement

Ces sections présentent les informations les plus importantes concernant la facturation de votre service. Retrouvez toutes les informations sur ce sujet dans la [documentation correspondante](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Fonctions VPS disponibles dans l’onglet « Accueil »

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration et la gestion vous incombent. Il est donc de votre responsabilité de vous assurer de leur bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) ou de contacter [notre communauté](/links/community) si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en œuvre de services sur un serveur.
>

#### Réinstaller votre VPS <a name="reinstallvps"></a>

La réinstallation de votre VPS peut être effectuée depuis votre espace client. Cliquez sur le bouton `...`{.action} à droite de `OS / Distribution`{.action}, puis sur `Réinstaller mon VPS`{.action}.

![VPSnewreinstallation](images/2023panel_01.png){.thumbnail}

Dans la fenêtre qui apparaît, choisissez un système d'exploitation dans la liste déroulante. Les options proposées sont [des images compatibles avec un VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) et sont immédiatement fonctionnelles après l'installation.

Vous pouvez également sélectionner une **clé SSH** à installer sur le système, si vous en avez stocké une précédemment dans votre [espace client OVHcloud](/links/manager). Pour tout savoir sur ce sujet, consultez notre guide « [Créer et utiliser des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) ».
Si vous avez sélectionné une clé SSH et que vous n'avez pas besoin d'un identifiant et d'un mot de passe pour vous connecter, cochez la case `Je ne souhaite pas recevoir par e-mail les codes d'authentification de mon VPS.`.

> [!warning]
>
> La réinstallation va formater tous les disques du serveur. Il est fortement recommandé de créer un snapshot de votre VPS avant de poursuivre, afin de pouvoir revenir à l'état précédent en cas de problème.
>

> [!primary]
>
> **Licences**
>
> Certains systèmes d’exploitation ou plateformes propriétaires, comme Plesk ou cPanel, nécessitent des licences qui génèrent des frais supplémentaires. Les licences sont administrables depuis votre espace client : rendez-vous dans la section `Bare Metal Cloud`{.action}, puis cliquez sur `Licences`{.action} dans la barre de navigation à gauche.
>
> Pour avoir un système d’exploitation **Windows** fonctionnant sur un VPS, il faut l'avoir préalablement choisi **dans le processus de commande**. Un VPS avec un autre OS installé ne peut pas être réinstallé avec Windows via la méthode décrite ci-dessus.
>

Le processus de réinstallation peut prendre quelques minutes.

> [!warning]
>
> Pour des raisons de sécurité, lors de la première connexion à votre VPS, vous devez changer le mot de passe reçu par mail pour le remplacer par un mot de passe personnel et fort. Une fois la modification effectuée, reconnectez-vous avec votre nouveau mot de passe.
>

#### Redémarrer votre VPS <a name="reboot-current-range"></a>

Un redémarrage peut s'avérer nécessaire afin d'appliquer des configurations de mises à jour ou pour résoudre un dysfonctionnement. Dans la mesure du possible, effectuez un « redémarrage logiciel » à partir de l'interface graphique du serveur (Windows, Plesk, etc.) ou via la ligne de commande :

```bash
sudo reboot
```

Cependant, vous pouvez effectuer un redémarrage forcé à tout moment dans votre [espace client OVHcloud](/links/manager). Depuis l'onglet `Accueil`{.action}, cliquez sur le bouton `...`{.action} à côté de `Boot` dans la section **Votre VPS**. Sélectionnez `Redémarrer mon VPS`{.action} et cliquez sur `Valider`{.action} dans la fenêtre qui s'affiche.

![Reboot](images/reboot-vps01.png){.thumbnail}

<a name="connect"></a>

### Se connecter à votre VPS

> [!warning]
>
> Pour des raisons de sécurité, lors de la première connexion à votre VPS, vous devez changer le mot de passe reçu par mail pour le remplacer par un mot de passe personnel et fort. Une fois la modification effectuée, il est possible que l'interface que vous utilisez (Putty par exemple) se ferme automatiquement afin de procéder à la déconnexion. Reconnectez-vous avec votre nouveau mot de passe.
>

Lors de la première installation ou lors de la réinstallation à partir du Panneau de configuration, un utilisateur avec des autorisations élevées est créé automatiquement. Cet utilisateur sera nommé en fonction du système d'exploitation, par exemple « Ubuntu » ou « Rocky Linux ».

Vous recevrez alors un e-mail contenant le nom d'utilisateur et le mot de passe nécessaires pour vous connecter à votre VPS. Vous pouvez vous connecter en utilisant ces identifiants ou via SSH. SSH (**S**ecure **Sh**ell) est un protocole permettant de se connecter de manière sécurisée à un serveur distant, comme un VPS. Pour en savoir plus à ce sujet, consultez notre guide d'[introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

La plupart des systèmes d'exploitation de bureau actuels ont un client **Open SSH** installé par défaut. Cela signifie que vos identifiants d'accès vous permettent d'établir rapidement une connexion à votre VPS dans l'application de ligne de commande appropriée (« Terminal », « Invite de commande », « Powershell », etc.). Entrez la commande suivante :

```bash
ssh username@IPv4_VPS
```

Exemple :

```bash
ssh ubuntu@169.254.10.250
```

Vous pouvez également utiliser toute application tierce compatible avec **Open SSH**.

#### Distribution GNU/Linux

Une fois connecté, remplacez le mot de passe prédéfini de l'utilisateur actuel par un mot de passe fort en utilisant cette commande :

```bash
passwd
```

Sur une distribution GNU/Linux, lorsque vous entrez un mot de passe dans le terminal, celui-ci ne s'affiche pas à l'écran pour des raisons de sécurité. Vous ne verrez donc aucun caractère pendant que vous tapez votre mot de passe.

Tapez votre mot de passe actuel et appuyez sur `Enter`{.action}. Entrez le nouveau mot de passe dans l'invite suivante pour le confirmer.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Activation du compte utilisateur root**
>
> Il n'est pas nécessaire d'utiliser le compte utilisateur « root » pour débuter l'administration de votre serveur. Ce compte doit d'abord être activé dans le système d'exploitation du serveur pour pouvoir l'utiliser. De plus, par mesure de sécurité, les connexions SSH avec l'utilisateur « root » sont **désactivées** par défaut.
> 
> Sauf mention contraire, toutes les actions d'administration décrites dans notre documentation peuvent être accomplies par le compte utilisateur par défaut, c'est-à-dire en tapant `sudo` suivi de la commande correspondante. Apprenez-en plus sur ce sujet dans notre guide « [Configuration des comptes utilisateurs et de l'accès root sur un serveur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) ».
>

**Voici quelques étapes recommandées** :

- Familiarisez-vous avec les connexions SSH en consultant notre guide « [Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) ».
- Envisagez l'utilisation des clés SSH comme méthode avancée et plus pratique pour les connexions à distance à l'aide de notre guide « [Créer et utiliser des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) ».
- Utilisez notre guide « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) » pour protéger votre système contre les attaques automatisées *brute force* et autres menaces courantes.

> [!primary]
>
Veuillez noter que si vous avez sélectionné une **distribution avec application** (Plesk, cPanel, Docker), les mesures de sécurité génériques peuvent ne pas s'appliquer à votre système. Nous vous invitons à consulter nos guides « [Premiers pas avec les applications préinstallées](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) » et « [Déployer cPanel sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel) », ainsi que la documentation officielle de l’éditeur concerné.
>

<a name="winconnect"></a>

#### Distribution Windows

##### Étape 1 : finaliser l'installation de Windows

Une fois le système d'exploitation Windows installé, vous recevez un e-mail avec le nom de compte de l'utilisateur par défaut `Windows user`.

Vous devrez ensuite terminer le processus d'installation de Windows en définissant votre langue d'affichage, votre disposition du clavier et votre mot de passe administrateur.

Ceci se fait dans la console VPS KVM : cliquez sur le bouton `...`{.action} à côté du nom de votre VPS dans la section [Votre VPS](#yourvps) et sélectionnez `KVM`{.action}. Trouvez plus d'informations sur cet outil dans notre « [guide KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) ».

Pour finaliser la configuration initiale de votre VPS Windows, suivez les étapes ci-dessous en parcourant les onglets :

> [!tabs]
> 1. **Paramètres régionaux**
>>
>> Une fois la session KVM établie, terminez la configuration initiale de Windows en configurant votre **pays/région**, la **langue de Windows** préférée et votre **disposition de clavier**. Cliquez ensuite sur le bouton `Suivant`{.action} en bas à droite.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Mot de passe administrateur**
>>
>> Définissez un mot de passe pour votre compte Windows `Administrator` / `admin`, confirmez-le, puis cliquez sur `Terminer`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Ecran de connexion**
>>
>> Windows appliquera vos paramètres, puis affichera l'écran de connexion. Cliquez sur le bouton `Send CtrlAltDel`{.action} en haut à droite pour vous connecter.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login administrateur**
>>
>> Entrez le mot de passe `Administrator` que vous avez créé à l'étape précédente et cliquez sur la `flèche`.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}<br>
>>

##### Étape 2 : se connecter au serveur avec RDP

Sur votre équipement Windows local, vous pouvez utiliser l'application cliente « Connexion Bureau à distance » pour vous connecter au VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Renseignez l'adresse IPv4 de votre VPS, puis votre identifiant et votre mot de passe. Généralement, un message d'avertissement apparaît, vous demandant de confirmer la connexion en raison d'un certificat inconnu. Cliquez sur `Oui`{.action} pour vous connecter.

Vous pouvez également utiliser une autre application tierce compatible avec RDP. Cette condition est requise si Windows n'est pas installé sur votre périphérique local.

> [!primary]
>
Si vous rencontrez des difficultés avec cette procédure, vérifiez que les connexions à distance (RDP) sont autorisées sur votre appareil en vérifiant les paramètres système, les règles de pare-feu et les restrictions réseau possibles.
>

##### Activation des journaux de démarrage Windows (facultatif)

Les journaux de démarrage de Windows peuvent être utiles pour les diagnostics d'erreur de serveur.

Pour les activer, suivez les étapes ci-dessous en parcourant les onglets :

> [!tabs]
> 1. **Se connecter au serveur**
>>
>> Connectez-vous à votre serveur via un bureau à distance ou une session [KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).<br>
>>
> 2. **Ouvrir l'utilitaire « Exécuter »**
>>
>> Ouvrez le menu `Démarrer` de Windows et cliquez sur `Exécuter`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Ouvrir « msconfig »**
>>
>> Entrez « msconfig » et cliquez sur `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Activer les logs**
>>
>> Dans la nouvelle fenêtre, activez l'option logs à côté de `Boot log`. Cliquez sur `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Au prochain démarrage de votre serveur, les logs seront enregistrés dans un fichier `.txt`. Le chemin d'accès au fichier est : `C:\Windows\ntbtlog.txt`.

Pour accéder au fichier journal en mode rescue, suivez les instructions du guide du « [mode rescue du VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue) ».

<a name="secure"></a>

### Sécuriser votre VPS

En tant qu’administrateur de votre VPS, vous êtes responsable de la sécurité des applications et des données qui y sont hébergées.

Reportez-vous à notre guide « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) » pour connaître les conseils essentiels afin de protéger votre système.

> [!primary]
>
Veuillez noter que si vous avez sélectionné une **distribution avec application** (Plesk, cPanel, Docker), les mesures de sécurité génériques peuvent ne pas s'appliquer à votre système. Nous vous invitons à consulter nos guides « [Premiers pas avec les applications préinstallées](/pages/bare_metal_cloud/virtual_private_servers/apps_first_steps) » et « [Déployer cPanel sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/cpanel) », ainsi que la documentation officielle de l’éditeur concerné.
>

<a name="domain"></a>

### Lier un nom de domaine à votre VPS

Le passage de votre VPS sur le web passe généralement par l’attribution d’un nom de domaine ainsi que sa configuration DNS. Si vous gérez votre nom de domaine chez OVHcloud, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » pour obtenir des instructions.

#### Sécuriser un nom de domaine avec un certificat SSL

Une fois votre VPS configuré, nous vous recommendons de sécuriser votre nom de domaine ainsi que votre site web. Cela nécessite un certificat SSL, permettant l'accès à Internet de votre VPS via *HTTPS* au lieu de *HTTP* non sécurisé.

Ce certificat SSL peut être installé manuellement, directement sur le VPS. Reportez-vous à la documentation officielle de votre distribution VPS.

Pour un processus plus automatisé, OVHcloud propose également la solution « SSL Gateway ». Référez-vous à la [page produit](https://www.ovh.com/fr/ssl-gateway/) ou à notre [documentation](/products/web-cloud-ssl-gateway) pour plus d’informations.

## Allez plus loin

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
