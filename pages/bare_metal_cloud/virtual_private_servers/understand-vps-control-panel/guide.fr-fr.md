---
title: "VPS - Gestion depuis l'espace client OVHcloud"
excerpt: "Découvrez comment utiliser l'espace client OVHcloud pour gérer votre VPS : tableau de bord, réinstallation, redémarrage, sauvegardes et configuration du service"
updated: 2026-01-21
---

## Objectif

- Comprendre l'interface de gestion des VPS.
- Identifier les informations essentielles.
- Savoir où effectuer les principales actions.

## Prérequis

- Disposer d'une offre [VPS](/links/bare-metal/vps) active dans votre espace client OVHcloud.

> [!warning]
> Certaines fonctionnalités VPS mentionnées sur cette page ne sont pas disponibles dans les Local Zones OVHcloud.
>
> Veuillez visiter notre [page Web des Local Zones](/links/bare-metal/vps-lz) pour obtenir plus d'informations.

<!-- CP-NAV-START:baremetal-vps -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Gestion VPS](/links/control-panel/baremetal-vps)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs Privés Virtuels`{.action} > Sélectionnez votre VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## En pratique

Ce guide vous aide à **comprendre l'interface de gestion de votre VPS dans l'espace client OVHcloud**, à identifier les informations essentielles et à utiliser les principales actions disponibles (réinstallation, redémarrage, sauvegarde, configuration).

**Sommaire :**

- [Tableau de bord](#controlpanel)
- [Votre VPS](#myvps)
- [Votre configuration](#myconf)
- [IP](#ip)
- [Sauvegarde](#save)
- [Mon offre](#myoffer)
- [Redémarrer votre VPS](#rebootvps)
- [Réinstaller votre VPS](#reinstallvps)

### Tableau de bord <a name="controlpanel"></a>

L'onglet `Accueil`{.action} constitue le **tableau de bord principal** de votre VPS.

Il centralise les **informations clés sur le service** et donne accès aux **actions essentielles de gestion**.

![VPS Home](images/vpshome.png){.thumbnail}

#### Votre VPS <a name="myvps"></a>

Retrouvez ci-dessous les informations de base sur votre VPS et l'état du service. Cliquez sur les onglets ci-dessous pour afficher les détails.

> [!tabs]
> Nom
>>
>> Pour personnaliser le nom de votre VPS, cliquez sur le bouton `...`{.action} et sélectionnez `Modifier le nom`{.action}. Cette fonctionnalité est utile pour faciliter la navigation dans l'espace client lorsque vous gérez plusieurs services VPS. Toutefois, le nom interne du service reste au format *vps-XXXXXXX.vps.ovh.net*.
>>
> Boot
>>
>> Le mode de démarrage indiqué est soit :
>>
>> - en **mode normal** (*LOCAL*), où le serveur charge le système d'exploitation installé.
>> - en **mode rescue**, fourni par OVHcloud en cas de dépannage.
>>
>> Utilisez le bouton `...`{.action} pour [redémarrer le VPS](#rebootvps) ou démarrez-le en mode rescue si nécessaire.
>>
>> Si besoin, retrouvez plus d'informations dans notre guide sur le [mode rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> OS / Distribution
>>
>> Il s'agit du système d'exploitation actuellement installé. Utilisez le bouton `...`{.action} pour [réinstaller le même système d'exploitation ou en sélectionner un autre parmi les options disponibles](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Une réinstallation entraînera l'effacement de toutes les données actuellement hébergées sur le VPS (à l'exception des disques additionnels).
>>
>> > [!primary]
>> >
>> > Si vous avez commandé un VPS **Windows**, vous ne pouvez choisir qu'un OS Windows pour la réinstallation. De même, si Windows n'a pas été sélectionné lors de la commande, il ne pourra pas être installé après la livraison du VPS.
>>
>> Une fois le système installé, vous êtes responsable de l'application des mises à jour de sécurité du système d'exploitation. Vous trouverez plus d'informations dans la partie « [Réinstaller votre VPS](#reinstallvps) » ainsi que dans notre guide « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) ».
>> 
> Zone / Localisation
>>
>> Ces sections fournissent des informations sur la localisation de votre VPS. Cela peut être utile pour identifier et évaluer les éventuels impacts sur votre service, comme ceux mentionnés dans les [rapports d'incidents ou de maintenance](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### Votre configuration <a name="myconf"></a>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BbyE52W7aBo?si=mmgSmaqIxx0zzGz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Cliquez sur les onglets ci-dessous pour afficher les détails de cette section.

> [!tabs]
> Modèle
>>
>> Cet élément indique la référence commerciale identifiant le modèle de VPS, correspondant aux [offres VPS sur notre site](/links/bare-metal/vps).
>>
> vCores / Mémoire / Stockage
>> 
>> Les ressources actuelles de votre VPS sont affichées ici et peuvent être mises à jour séparément en cliquant sur le lien correspondant. À noter que les mises à niveau sont limitées par le modèle de VPS choisi et peuvent uniquement être disponibles en passant à une [gamme supérieure](/links/bare-metal/vps).
>>
> Disques additionnels
>> 
>> Ajoutez des disques supplémentaires à votre VPS pour augmenter la capacité de stockage de votre serveur au-delà de celle incluse dans la configuration initiale. Vous pouvez par exemple y stocker des données de sauvegarde.

#### IP <a name="ip"></a>

Cliquez sur les onglets ci-dessous pour afficher les détails de cette section.

> [!tabs]
> IPv4
>>
>> L'adresse IPv4 publique principale du VPS est configurée automatiquement à l'installation. Retrouvez plus d'informations sur la gestion des IP dans notre guide « [Configurer une adresse IP en alias](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing) ».
>>
> IPv6 / Gateway
>> 
>> Retrouvez ici l'adresse IPv6 publique et l'adresse de la passerelle associée. Celles-ci sont automatiquement attachées au VPS lors de l'installation. Retrouvez plus d'informations dans notre guide « [Configurer l'IPv6 sur un serveur VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6) ».
>> 
> Secondary DNS
>>
>> Cette fonctionnalité est utile pour héberger des services DNS. Consultez notre guide « [Configurer un DNS secondaire OVHcloud sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps) » pour plus de détails à ce sujet.

#### Sauvegarde <a name="save"></a>

Ces options font référence à des services VPS supplémentaires pour les sauvegardes et la restauration de votre système.

> [!tabs]
> Snapshot
>>
>> Un snapshot sur un VPS est une sauvegarde instantanée de l'état du serveur, qui permet de restaurer rapidement le système en cas de problème. L'option `Snapshot` permet de créer un snapshot manuel comme point de restauration unique.
>>
> Backup automatisé
>>
>> Une sauvegarde quotidienne du système (hors disques additionnels) est réalisée automatiquement et conservée durant 24 heures (applicable uniquement aux services commandés à partir du 7 août 2025). En passant à l'option « **Sauvegarde automatique Premium** », vous disposerez des 7 dernières sauvegardes quotidiennes de votre VPS, que vous pourrez utiliser pour des montages et des restaurations.  
>> Par rapport aux snapshots manuels, cette fonctionnalité augmente la sécurité des données en créant plusieurs points de restauration à intervalles réguliers.
>>

Retrouvez toutes les informations sur les solutions de sauvegarde disponibles pour votre service sur la [page produit VPS](/links/bare-metal/vps-options) et dans [nos guides respectifs](/products/bare-metal-cloud-virtual-private-servers-configuration).

#### Mon offre <a name="myoffer"></a>

Cette section présente les informations les plus importantes concernant la facturation de votre service. Retrouvez toutes les informations sur ce sujet dans [nos guides respectifs](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Fonctions VPS disponibles dans l'onglet « Accueil »

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration et la gestion vous incombent. Il est donc de votre responsabilité de vous assurer de leur bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) ou de contacter [notre communauté](/links/community) si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en œuvre de services sur un serveur.
>

#### Redémarrer votre VPS <a name="rebootvps"></a>

Un redémarrage peut s'avérer nécessaire afin d'appliquer des mises à jour de configuration ou pour résoudre un dysfonctionnement. Dans la mesure du possible, effectuez un « redémarrage logiciel » à partir de l'interface graphique du serveur (Windows, Plesk, etc.) ou via la ligne de commande ci-dessous :

```bash
sudo reboot
```

Cependant, vous pouvez effectuer un redémarrage forcé à tout moment dans votre [espace client OVHcloud](/links/manager). Depuis l'onglet `Accueil`{.action}, cliquez sur le bouton `...`{.action} à côté de `Boot` dans la section **Votre VPS**. Sélectionnez `Redémarrer mon VPS`{.action} et cliquez sur `Confirmer`{.action} dans la fenêtre qui s'affiche.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

#### Réinstaller votre VPS <a name="reinstallvps"></a>

La réinstallation de votre VPS peut être effectuée depuis votre espace client. Cette opération est généralement utilisée en cas de problème système, de changement d'environnement ou pour repartir d'une installation propre.

Cliquez sur le bouton `...`{.action} à droite de `OS / Distribution`{.action}, puis sur `Réinstaller mon VPS`{.action}.

![Reinstall](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reinst.png){.thumbnail}

Dans la fenêtre qui apparaît, choisissez un système d'exploitation dans la liste déroulante. Les options proposées sont [des images compatibles avec un VPS OVHcloud](/pages/public_cloud/compute/image-life-cycle) et sont immédiatement fonctionnelles après l'installation.

Si vous avez sélectionné un système d'exploitation compatible, vous pouvez fournir une **clé publique** à installer automatiquement. Deux possibilités s'offrent à vous :

- Copiez manuellement la chaîne de clé et collez-la dans le champ `Votre clé SSH Publique`.
- Si vous avez précédemment [stocké une clé publique](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel) dans votre [espace client OVHcloud](/links/manager), sélectionnez la clé souhaitée dans le menu déroulant `Clé SSH à pré-installer`.

![VPSnewreinstallation](images/reinstall.png){.thumbnail}

Pour en savoir plus sur ce sujet, consultez nos guides :

- [Comment créer et utiliser des clés d'authentification pour les connexions SSH aux serveurs OVHcloud](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutoriel - Comment utiliser PuTTY pour les connexions SSH et l'authentification](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Si vous avez sélectionné une clé SSH et que vous n'avez pas besoin de mot de passe pour vous connecter, activez l'option `Je ne souhaite pas recevoir par e-mail les codes d'authentification de mon VPS`.

> [!warning]
>
> La réinstallation va formater tous les disques du serveur. Il est fortement recommandé de créer un snapshot de votre VPS avant de poursuivre, afin de pouvoir revenir à l'état précédent en cas de problème.
>

> [!primary]
>
> **Licences**
>
> Certains systèmes d'exploitation ou plateformes propriétaires, comme Plesk ou cPanel, nécessitent des licences qui génèrent des frais supplémentaires. Les licences sont administrables depuis votre espace client : rendez-vous dans la section `Bare Metal Cloud`{.action}, puis cliquez sur `Licences`{.action} dans la barre de navigation à gauche.
>
> Pour avoir un système d'exploitation **Windows** fonctionnant sur un VPS, il faut l'avoir préalablement choisi **dans le processus de commande**. Un VPS avec un autre OS installé ne peut pas être réinstallé avec Windows via la méthode décrite ci-dessus.
>

Le processus de réinstallation peut prendre quelques minutes.

## Allez plus loin

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Comment récupérer l'accès au serveur en cas de perte du mot de passe de l'utilisateur](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Échangez avec notre [communauté d'utilisateurs](/links/community).
