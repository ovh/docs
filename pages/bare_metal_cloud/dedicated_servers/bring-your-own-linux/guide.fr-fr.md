---
title: "Déployer des images Linux personnalisées via Bring Your Own Linux (BYOLinux) sur un serveur dédié"
excerpt: "Déployez vos propres images Linux personnalisées sur un serveur dédié OVHcloud grâce à la fonctionnalité Bring Your Own Linux (BYOLinux)"
updated: 2026-03-16
---

## Objectif

La fonctionnalité Bring Your Own Linux (BYOLinux) vous permet de déployer des images Linux *cloudready* directement sur votre serveur dédié. Vous pouvez ainsi utiliser le service bare metal comme ressource pour vos déploiements.

**Que signifie *cloudready* ?**

La norme *cloudready* signifie généralement être agnostique de l’infrastructure sur laquelle l’image est déployée.
En plus des prérequis et limitations mentionnés ci-dessous, vous devez vous assurer que l'image (téléchargée ou générée) répond correctement à la définition des attentes techniques d'une image cloudready.

**Ce guide vous explique comment utiliser Bring Your Own Linux (BYOLinux) sur votre serveur dédié OVHcloud.**

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) dans votre compte OVHcloud
- Avoir accès à l'[API OVHcloud](/pages/manage_and_operate/api/first-steps) (pour la méthode de [déploiement via l'API](#viaapi) de ce guide)
- Votre image doit être inférieure à la RAM du serveur moins 3 Gio
- Un script `/root/.ovh/make_image_bootable.sh` exécutable, qui installera ou configurera le bootloader, [par exemple GRUB](https://github.com/ovh/bringyourownlinux/blob/e20c9474e1a0/example_build/files/make_image_bootable.sh). Ce script ne doit pas modifier l'ordre de boot NVRAM (par exemple, utilisez `grub-install --no-nvram`). Pour plus d'informations, consultez notre guide « [Comprendre le processus de démarrage des serveurs dédiés](/pages/bare_metal_cloud/dedicated_servers/boot-process) ».

> [!primary]
>
> Pour appliquer les personnalisations OVHcloud au premier démarrage, votre image doit inclure [cloud-init](https://cloud-init.io/) ou une alternative compatible (par exemple [`nuageinit`](https://cgit.freebsd.org/src/tree/libexec/nuageinit/) sur FreeBSD).
>

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

> [!warning]
>
> Tout comme une installation OS classique, une nouvelle installation par BYOLinux effacera l'intégralité des données présentes sur le serveur.
>

## En pratique

**Limites techniques :**

Certaines limites techniques sont liées à l’utilisation de produits physiques comme les serveurs dédiés. Voici une liste non exhaustive à garder à l'esprit lors de la préparation de votre déploiement :

- Type de démarrage : **UEFI** ou **legacy** (en fonction du type de démarrage de votre serveur)
- Format de l'image : **qcow2**
- Une seule partition dans l'image qcow2
- Système de fichiers de la partition : **ext4**, **XFS** ou **BTRFS** (sans sous-volumes)

**Méthodes de déploiement :**

- [Déploiement via l'espace client](#viacontrolpanel) : vous permet de déployer simplement votre image depuis l'espace client OVHcloud.
- [Déploiement via API](#viaapi) : vous pouvez utiliser l’API OVHcloud pour intégrer des images dans vos propres scripts afin d’automatiser les déploiements.

### Déploiement de votre image via l’espace client <a name="viacontrolpanel"></a>

Dans l'onglet `Informations générales`{.action}, cliquez sur le bouton `...`{.action} à côté de « Système (OS) » puis cliquez sur `Installer`{.action}.

![Bouton d'installation Bring Your Own Linux dans l'espace client](images/byolinux-controlpanel01.png){.thumbnail}

À l'étape suivante, sélectionnez `Personnalisé` dans le menu puis `Bring Your Own Linux - byolinux` et cliquez sur `Suivant`{.action}.

![Sélection d'image personnalisee Bring Your Own Linux dans l'espace client](images/byolinux-controlpanel03.png){.thumbnail}

Vous allez être redirigé vers la page de configuration. Assurez-vous que l'URL de votre image est au bon format. Remplissez le reste des champs obligatoires de cette page. Une fois que vous avez confirmé que les informations sont correctes, cliquez sur `Confirmer`{.action}.

Vous trouverez plus de détails sur les options dans la section « [options de déploiement](#options) » ci-dessous.

![Page de configuration Bring Your Own Linux dans l'espace client](images/byolinux-controlpanel04.png){.thumbnail}

### Déploiement de votre image via l'API <a name="viaapi"></a>

Connectez-vous sur [https://api.ovh.com/](/links/api) puis rendez-vous dans la section `/dedicated/server`{.action}.

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/reinstall
>

Le contenu de la requête API de Bring Your Own Linux (BYOLinux) doit être similaire au fichier JSON suivant :

> [!warning]
>
> Dans la section `customizations`, seul le champ `imageURL` est obligatoire.
>

```json
{
  "operatingSystem": "byolinux_64",
  "customizations": {
    "hostname": "mon-tux",
    "imageURL": "https://github.com/ashmonger/akution_test/releases/latest/download/deb11k6.qcow2",
    "efiBootloaderPath": "\\efi\\debian\\grubx64.efi",
    "imageCheckSum": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "httpHeaders": {
      "Authorization": "Basic bG9naW46cGFzc3dvcmQ="
    },
    "imageCheckSumType": "sha512",
    "configDriveUserData": "I2Nsb3VkLWNvbmZpZwpzc2hfYXV0aG9yaXplZF9rZXlzOgogIC0gc3NoLWVkMjU1MTkgQUFBQUMzTnphQzFsWkRJMU5URTVBQUFBSUFiY0QgbXlzZWxmQG15ZG9tYWluLm5ldAoKdXNlcnM6CiAgLSBuYW1lOiBwYXRpZW50MAogICAgc3VkbzogQUxMPShBTEwpIE5PUEFTU1dEOkFMTAogICAgZ3JvdXBzOiB1c2Vycywgc3VkbwogICAgc2hlbGw6IC9iaW4vYmFzaAogICAgbG9ja19wYXNzd2Q6IGZhbHNlCiAgICBzc2hfYXV0aG9yaXplZF9rZXlzOgogICAgICAtIHNzaC1lZDI1NTE5IEFBQUFDM056YUMxbFpESTFOVEU1QUFBQUlBYmNEIG15c2VsZkBteWRvbWFpbi5uZXQKZGlzYWJsZV9yb290OiBmYWxzZQpwYWNrYWdlczoKICAtIHZpbQogIC0gdHJlZQpydW5jbWQ6CiAgLSBlY2hvICJjb3Vjb3UgcnVuY21kIiA+IC9vcHQvY291Y291CiAgLSBjYXQgL2V0Yy9tYWNoaW5lLWlkID4+IC9vcHQvY291Y291CiAgLSBkYXRlICIrJVktJW0tJWQgJUg6JU06JVMiIC0tdXRjID4+IC9vcHQvY291Y291CmZpbmFsX21lc3NhZ2U6IFRoZSBzeXN0ZW0gaXMgZmluYWxseSB1cCwgYWZ0ZXIgJFVQVElNRSBzZWNvbmRzCg=="
  }
}
```

> [!warning]
>
> Dans l'exemple ci-dessus, la valeur de `imageCheckSum` a été masquée, car elle change régulièrement à chaque reconstruction de l’image cible.
>

Même si `configDriveUserData` peut être envoyé à l'API directement en clair en échappant les bons caractères, il est recommandé d'envoyer à l'API le script encodé en base64 en utilisant par exemple la commande UNIX/Linux suivante :

```bash
cat my-data.yaml | base64 -w0
```

Voici la version en clair de `configDriveUserData` de l'exemple ci-dessus :

```yaml
#cloud-config
ssh_authorized_keys:
  - ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAbcD myself@mydomain.net

users:
  - name: patient0
    sudo: ALL=(ALL) NOPASSWD:ALL
    groups: users, sudo
    shell: /bin/bash
    lock_passwd: false
    ssh_authorized_keys:
      - ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAbcD myself@mydomain.net
disable_root: false
packages:
  - vim
  - tree
runcmd:
  - echo "coucou runcmd" > /opt/coucou
  - cat /etc/machine-id >> /opt/coucou
  - date "+%Y-%m-%d %H:%M:%S" --utc >> /opt/coucou
final_message: The system is finally up, after $UPTIME seconds
```

Une fois les champs complétés, démarrez le déploiement en cliquant sur `Execute`{.action}.

#### Options de déploiement <a name="options"></a>

| Champ | Description | Obligatoire |
|-|-|-|
| customizations/hostname | Le hostname | ❌ |
| customizations/sshKey | La clé publique SSH | ❌ |
| customizations/imageURL | L'URL de l'image Linux | ✅ |
| customizations/imageCheckSum | Checksum de l'image | ❌ |
| customizations/imageCheckSumType | Type de checksum de l'image (md5, sha1, sha256, sha512) | ❌ (sauf si checksum fourni) |
| customizations/configDriveUserData | Données utilisateur (user-data) cloud-init¹ | ❌ |
| customizations/configDriveMetadata | Métadonnées cloud-init personnalisées, exposées sous la clé `meta` de `meta_data.json`⁴ | ❌ |
| customizations/httpHeaders?Key | Clé des en-têtes HTTP | ❌² |
| customizations/httpHeaders?Value | Valeur des en-têtes HTTP | ❌² |
| userMetadata/efiBootloaderPath | Le chemin du bootloader EFI | ✅³ |

¹ [Données utilisateur](https://cloudinit.readthedocs.io/en/latest/explanation/format.html) cloud-init standard — généralement un document `#cloud-config` ou un script (voir les [exemples officiels de cloud-init](https://docs.cloud-init.io/en/latest/reference/examples.html)). Équivalent à `server create --user-data <fichier>` chez OpenStack. Sa représentation JSON doit être sur une seule ligne avec `\n` pour les retours à la ligne, car les chaînes JSON ne peuvent pas contenir de retours à la ligne littéraux.<br />
² À utiliser uniquement si vous avez besoin d'en-têtes HTTP, tels que `Basic Auth`<br />
³ Le chemin du bootloader EFI est utilisé par iPXE pour démarrer votre système d'exploitation. Pour plus d'informations, consultez notre guide « [Comprendre le processus de démarrage des serveurs dédiés](/pages/bare_metal_cloud/dedicated_servers/boot-process) ». Exemples :

> [!primary]
>
> Les chemins ci-dessous utilisent l'échappement JSON : `\\` représente un seul antislash. Par exemple, `\\efi\\debian\\grubx64.efi` correspond au chemin `\efi\debian\grubx64.efi`.
>

| Système d'exploitation | efiBootloaderPath |
|-|-|
| Debian | `\\efi\\debian\\grubx64.efi` |
| Ubuntu | `\\efi\\ubuntu\\grubx64.efi` |
| Windows | `\\efi\\microsoft\\boot\\bootmgfw.efi` |
| FreeBSD | `\\efi\\FreeBSD\\loader.efi` |
| Alma | `\\efi\\almalinux\\shimx64.efi` |
| Arch Linux | `\\efi\\arch\\grubx64.efi` |
| Gentoo | `\\efi\\boot\\bootx64.efi` |

⁴ Objet JSON de couples clé/valeur arbitraires, équivalent à `server create --property cle=valeur` chez OpenStack. Les couples sont écrits dans le `meta_data.json` du config drive sous la clé `meta`, où cloud-init peut les lire. Exemple : `"configDriveMetadata": {"role": "webserver", "env": "prod"}` devient `"meta": {"role": "webserver", "env": "prod"}` dans `meta_data.json`. Voir la [documentation du service de métadonnées OpenStack](https://docs.openstack.org/nova/latest/user/metadata.html#openstack-format-metadata) pour le schéma complet.

> [!primary]
>
> Lors de l'installation, OVHcloud ajoute une petite partition de [config drive](https://docs.cloud-init.io/en/latest/reference/datasources/configdrive.html) sur votre serveur. Cloud-init la lit au premier démarrage pour appliquer la configuration de base d'OVHcloud. Renseignez `configDriveUserData` pour ajouter vos propres données utilisateur (user-data) cloud-init par-dessus.
>

> [!warning]
>
> Contrairement aux templates OS standard OVHcloud (par exemple Debian 12, Windows Server), BYOLinux ne prend pas en charge l'option `postInstallationScript`. Pour exécuter des commandes ou des scripts après l'installation, utilisez `configDriveUserData` avec une directive cloud-init [`runcmd`](https://cloudinit.readthedocs.io/en/latest/reference/modules.html#runcmd) comme dans l'exemple ci-dessus.
>

#### Les erreurs clients fréquentes <a name="errors"></a>

Le tableau suivant donne un aperçu des erreurs clients les plus connues et de la manière de les corriger.

|Message d'erreur|Détails|Solution(s)|
|---|---|---|
|Please provide checkSum AND checkSumType or none of them|Vous avez précisé l'un des 2 champs parmi : `imageCheckSum` et `imageCheckSumType`.|Précisez les 2 valeurs ou aucune d'entre elles.|
|image provided format is `x` which does not match expected qcow2 format|Peu importe l'extension du fichier, son format réel doit être qcow2.|Convertissez votre image au format qcow2.|
|image provided has a size of `n` bytes which is larger than `device` of `m` bytes|L'image spécifiée a une taille supérieure à celle du disque choisi pour l'installation.|- Si votre serveur possède plusieurs grappes de disques, vous pouvez réessayer une installation sur une autre grappe de disques à l'aide de l'argument `diskgroupid`.<br />- Vous devez réduire la taille de votre image.|
|Could not download, qcow2 image is too big to download in memory.|Il n'y a pas assez d'espace en RAM pour télécharger l'image.|Réduisez la taille de votre image.|
|Could not download image: `<message d'erreur>`|Impossible de télécharger l'image depuis `imageURL`.|Vérifiez qu'un téléchargement avec `curl` depuis votre serveur en rescue fonctionne. Si des en-têtes HTTP sont requis, vous devez les spécifier à l'aide des paramètres `httpHeaders`.|
|Bad `checkSumType` for downloaded file, got : `n` while expecting `m`.|Le checksum est incorrect.|- Assurez-vous de spécifier le bon checksum<br />- Vérifiez qu'un téléchargement avec `curl` depuis votre serveur en rescue fonctionne.|

Voir la section « [erreurs clients fréquentes](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh#errors) » de la page API OVHcloud et Stockage pour les erreurs spécifiques au partitionnement.

## Aller plus loin

[BYOLinux sur GitHub - Exemples et documentation approfondie](https://github.com/ovh/bringyourownlinux)

[API OVHcloud et installation d'un OS](/pages/bare_metal_cloud/dedicated_servers/api-os-installation)

[API OVHcloud et Stockage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Bring Your Own Image (BYOI)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)

[Comparaison entre Bring Your Own Image (BYOI) et Bring Your Own Linux (BYOLinux)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image-versus-bring-your-own-linux)

[Comprendre le processus de démarrage des serveurs dédiés](/pages/bare_metal_cloud/dedicated_servers/boot-process)

Échangez avec notre [communauté d'utilisateurs](/links/community).
