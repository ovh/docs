---
title: Premiers pas avec un VPS
excerpt: "Découvrez comment gérer un VPS dans votre espace client OVHcloud et découvrez les premières étapes de son utilisation, notamment les connexions à distance et les mesures de sécurité"
updated: 2026-01-21
---

## Objectif

Un serveur privé virtuel (VPS) est un serveur que vous administrez entièrement.

Contrairement à un hébergement web géré, vous êtes responsable des éléments suivants :

- Configuration : gérer et paramétrer votre serveur.
- Sécurité : protéger votre VPS contre les attaques.
- Maintenance : garder le serveur à jour et opérationnel.
- Backups : tester régulièrement vos sauvegardes pour garantir la restauration des données.

## Prérequis

- Disposer d'une offre [VPS](/links/bare-metal/vps) active dans votre espace client OVHcloud.

<!-- CP-NAV-START:baremetal-vps -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Gestion VPS](/links/control-panel/baremetal-vps)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs Privés Virtuels`{.action} > Sélectionnez votre VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## En pratique

Pour comprendre l’interface de gestion de votre VPS et les actions disponibles dans l’espace client OVHcloud, consultez notre [guide dédié à la prise en main de l’espace client OVHcloud pour les VPS](/pages/bare_metal_cloud/virtual_private_servers/understand-vps-control-panel).

**Sommaire :**

- [Étape 1 : Connexion initiale](#initial-connection)
    - [Distribution GNU/Linux](#linuxconnect)
    - [Distribution Windows](#winconnect)
- [Étape 2 : Utilisation du compte root](#rootaccount)
- [Étape 3 : Sécuriser votre VPS](#secure)
- [Étape 4 : Lier un nom de domaine](#domain)

### Étape 1 : Connexion initiale <a name="initial-connection"></a>

#### Linux : <a name="linuxconnect"></a>

Lorsque vous vous connectez à votre VPS pour la première fois, notez que **le compte avec lequel vous vous connectez n’est pas root**.

Chez OVHcloud, pour des raisons de sécurité et pour protéger les services de nos clients, nous créons automatiquement un **nom d’utilisateur lié au système d’exploitation choisi** lors de votre commande.

Le nom d’utilisateur exact à utiliser pour la connexion est clairement indiqué dans votre e-mail de livraison du VPS.

Par exemple :

- Pour **Debian**, le nom d'utilisateur sera **debian**.
- Pour **Ubuntu**, le nom d'utilisateur sera **ubuntu**.
- Pour **Rocky Linux**, le nom d'utilisateur sera **rocky**.

Le mot de passe temporaire associé à ce compte vous est envoyé via un lien sécurisé dans votre e-mail de livraison.

> [!primary]
> **Note importante** : lors de votre **première connexion**, il vous sera demandé de **changer ce mot de passe temporaire**.
>
> Une fois le mot de passe modifié, **la session sera automatiquement fermée**. Il s’agit d’un comportement normal. Vous devrez alors **vous reconnecter avec votre nouveau mot de passe**.

```bash
ssh username@IPv4_VPS
```

- Remplacez "username" par l’utilisateur correspondant à votre OS.
- Remplacez "IPv4_de_votre_VPS" par l’adresse IP indiquée dans l’e-mail de livraison.

#### Windows : <a name="winconnect"></a>

##### Finaliser l'installation de Windows

Une fois le système d'exploitation Windows installé, vous recevez un e-mail avec le nom de compte de l'utilisateur par défaut `Windows user`.

Vous devrez ensuite terminer le processus d'installation de Windows en définissant votre langue d'affichage, votre disposition du clavier et votre mot de passe administrateur.

Ceci se fait dans la console VPS KVM : dans l'onglet `Accueil`{.action}, cliquez sur le bouton `...`{.action} à côté du nom de votre VPS dans la section **Votre VPS** et sélectionnez `KVM`{.action}.

Retrouvez plus d'informations sur cet outil dans notre « [guide KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) ».

Pour finaliser la configuration initiale de votre VPS Windows, suivez les étapes ci-dessous en parcourant les onglets :

> [!tabs]
> 1. **Paramètres régionaux**
>>
>> Une fois la session KVM établie, terminez la configuration initiale de Windows en configurant votre **pays/région**, la **langue de Windows** préférée et votre **disposition de clavier**. Cliquez ensuite sur le bouton `Suivant`{.action} en bas à droite.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}
>>
> 2. **Mot de passe administrateur**
>>
>> Définissez un mot de passe pour votre compte Windows `Administrator` / `admin`, confirmez-le, puis cliquez sur `Terminer`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}
>>
> 3. **Ecran de connexion**
>>
>> Windows appliquera vos paramètres, puis affichera l'écran de connexion. Cliquez sur le bouton `Send CtrlAltDel`{.action} en haut à droite pour vous connecter.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}
>>
> 4. **Login administrateur**
>>
>> Entrez le mot de passe `Administrator` que vous avez créé à l'étape précédente et cliquez sur la `flèche`.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### Se connecter au serveur avec RDP

Sur votre équipement Windows local, vous pouvez utiliser l'application cliente « Connexion Bureau à distance » pour vous connecter au VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Renseignez l'adresse IPv4 de votre VPS, puis votre identifiant et votre mot de passe. Généralement, un message d'avertissement apparaît, vous demandant de confirmer la connexion en raison d'un certificat inconnu. Cliquez sur `Oui`{.action} pour vous connecter.

Vous pouvez également utiliser une autre application tierce compatible avec RDP. Cette condition est requise si Windows n'est pas installé sur votre périphérique local.

> [!primary]
>
Si vous rencontrez des difficultés avec cette procédure, vérifiez que les connexions à distance (RDP) sont autorisées sur votre appareil en vérifiant les paramètres système, les règles de pare-feu et les restrictions réseau possibles.
>

Pour faciliter le diagnostic en cas de problème, nous vous recommandons **d’activer les logs de démarrage Windows** en suivant notre [guide dédié](/pages/bare_metal_cloud/virtual_private_servers/windows-boot-logs).

### Étape 2 : Utilisation du compte root (facultatif mais recommandé) <a name="rootaccount"></a>

L’utilisateur root est désactivé par défaut pour la sécurité de votre produit.

Pour les tâches d’administration, utilisez sudo depuis votre utilisateur principal :

```bash
sudo commande
```

Si vous souhaitez activer root :

```bash
sudo passwd root
```

### Étape 3 : Sécuriser votre VPS <a name="secure"></a>

Si vous souhaitez sécuriser votre VPS, nous vous invitons à suivre notre guide « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) ». Ce guide vous accompagne pas à pas et détaille notamment les actions suivantes :

- Mettre à jour le système.
- Modifier le port d'écoute SSH par defaut.
- Configurer le pare-feu interne.
- Installer fail2ban pour bloquer les tentatives de connexion répétées.
- Sauvegarder votre système et vos données.

### Étape 4 : Lier un nom de domaine (facultatif mais recommandé) <a name="domain"></a>

La mise en ligne de votre VPS passe généralement par l’utilisation et la configuration d’un nom de domaine. 

Pour cela, nous vous conseillons d'effectuer les actions suivantes :

- [Éditer la zone DNS](/pages/web_cloud/domains/dns_zone_edit) en ajoutant les entrées nécessaires pour faire pointer le domaine vers l'adresse IPv4 de votre VPS.
- [Activer un certificat SSL gratuit (Let's Encrypt)](/pages/bare_metal_cloud/virtual_private_servers/install-ssl-certificate) afin de sécuriser l'accès à vos sites web via HTTPS.

## Allez plus loin

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Comment récupérer l'accès au serveur en cas de perte du mot de passe de l'utilisateur](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Échangez avec notre [communauté d'utilisateurs](/links/community).