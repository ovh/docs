---
title: "Installer un contrôleur OPCP"
excerpt: "Découvrez comment installer un contrôleur OPCP à partir de l'image Debian fournie par OVHcloud"
updated: 2026-05-22
---

## Objectif

Ce guide explique comment installer un contrôleur **OPCP** à partir de l'image d'installation Debian fournie par OVHcloud. Il couvre la préparation du support d'installation, le câblage du serveur, la sélection des disques pour le RAID 1, la configuration du réseau d'accès du contrôleur et les ajustements à effectuer après le premier démarrage.

> [!primary]
>
> Dans ce guide, le réseau **OOB** correspond au réseau d'accès du contrôleur. Il s'agit de la première interface réseau physique du serveur, connectée à votre réseau.
>
> Ce réseau n'est pas le port d'administration dédié du serveur (IPMI, iDRAC, iLO, etc.), qui peut uniquement servir à monter l'ISO ou à ouvrir une console distante.

> [!warning]
>
> L'installation efface toutes les données présentes sur les disques sélectionnés.
>
> OVHcloud met à votre disposition des services dont vous êtes responsable. Vous devez donc vous assurer de leur bon fonctionnement après l'installation.

## Prérequis

- Un serveur physique destiné à héberger le contrôleur OPCP
- Un accès en lecture seule au bucket S3 de livraison OPCP, avec l'endpoint S3, le nom du bucket, la région et la version OPCP à récupérer
- Une access key et une secret key S3 dédiées, limitées en lecture à ce bucket et à son préfixe de livraison
- Une clé USB, un média virtuel ou tout autre support de démarrage
- Un accès à la console locale ou à la console distante du serveur (IPMI, iDRAC, iLO, etc.)
- Au moins deux disques physiques de taille comparable pour l'installation en RAID 1
- Un câble réseau branché sur la première interface réseau du serveur et raccordé à votre réseau
- L'adresse IP, le masque, la passerelle et les serveurs DNS du réseau d'accès du contrôleur

## En pratique

### 1. Télécharger et vérifier l'image d'installation

Avant d'écrire l'image sur votre support de démarrage, téléchargez l'ISO et son checksum SHA-256 depuis le bucket S3 en lecture seule qui vous a été communiqué.

> [!primary]
>
> Les artefacts sont publiés dans le bucket de livraison sous le préfixe `opcp-controller-debian-image/<version>/`.
>
> Utilisez une paire de credentials dédiée, limitée en lecture à ce bucket et à ce préfixe. Chargez-la uniquement dans votre shell courant ou depuis votre gestionnaire de secrets, puis supprimez-la après le téléchargement.
> Les endpoints de base peuvent par exemple être `s3.sbg.io.cloud.ovh.net` ou `s3.gra.io.cloud.ovh.net`.

Renseignez d'abord les variables de votre environnement :

```bash
export S3_ENDPOINT="<s3-endpoint>"
export S3_BUCKET="<s3-bucket>"
export S3_REGION="<s3-region>"
export OPCP_VERSION="<opcp-release-version>"
export S3_PREFIX="opcp-controller-debian-image/${OPCP_VERSION}"
export S3_ACCESS_KEY="<read-only-access-key>"
export S3_SECRET_KEY="<read-only-secret-key>"
```

Téléchargez ensuite les fichiers avec `s3cmd` (méthode recommandée pour un accès S3 authentifié) :

```bash
sudo apt-get update
sudo apt-get install -y s3cmd

s3cfg=$(mktemp)
chmod 600 "$s3cfg"

cat >"$s3cfg" <<EOF
[default]
access_key = ${S3_ACCESS_KEY}
secret_key = ${S3_SECRET_KEY}
host_base = ${S3_ENDPOINT}
host_bucket = %(bucket).${S3_ENDPOINT}
bucket_location = ${S3_REGION}
EOF

for artifact in \
	live-image-amd64.hybrid.iso \
	live-image-amd64.hybrid.iso.sha256; do
	s3cmd -c "$s3cfg" get \
		"s3://${S3_BUCKET}/${S3_PREFIX}/${artifact}" \
		"${artifact}"
done

rm -f "$s3cfg"
```

Si votre environnement standardise déjà les téléchargements avec `curl`, vous pouvez utiliser une requête HTTPS signée en SigV4 :

```bash
download_with_curl() {
	local artifact="$1"
	local curl_config
	curl_config=$(mktemp)
	chmod 600 "$curl_config"

	cat >"$curl_config" <<EOF
url = "https://${S3_BUCKET}.${S3_ENDPOINT}/${S3_PREFIX}/${artifact}"
user = "${S3_ACCESS_KEY}:${S3_SECRET_KEY}"
aws-sigv4 = "aws:amz:${S3_REGION}:s3"
output = "${artifact}"
fail
silent
show-error
EOF

	curl --config "$curl_config"
	rm -f "$curl_config"
}

for artifact in \
	live-image-amd64.hybrid.iso \
	live-image-amd64.hybrid.iso.sha256; do
	download_with_curl "$artifact"
done
```

Si votre version de `curl` ne prend pas en charge SigV4, utilisez la méthode `s3cmd`.

Vérifiez ensuite le checksum avant d'écrire l'ISO :

```bash
sha256sum -c live-image-amd64.hybrid.iso.sha256

unset S3_ACCESS_KEY S3_SECRET_KEY

sudo dd if=live-image-amd64.hybrid.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Remplacez `/dev/sdX` par le périphérique correspondant à votre support d'installation.

### 2. Câbler le serveur

Avant de démarrer l'installation :

- connectez la première interface réseau du serveur à votre réseau
- si le serveur dispose de plusieurs interfaces réseau, utilisez la première pour faciliter son identification pendant l'installation, et n'en connectez aucune autre

### 3. Démarrer l'installeur

Démarrez le serveur sur le support d'installation puis suivez l'installeur interactif.

Dans le menu GRUB, sélectionnez l'entrée `Auto Install` pour lancer l'installation.

Pendant l'installation, l'image :

- détecte les disques physiques disponibles
- vous demande de sélectionner les disques à utiliser pour le RAID 1
- configure automatiquement le système sur les disques sélectionnés
- vous demande de choisir l'interface réseau utilisée pour l'accès au contrôleur
- active l'accès SSH `root` sur le contrôleur au premier démarrage

### 4. Sélectionner les disques d'installation

Lorsque l'installeur vous le demande, sélectionnez au moins deux disques physiques pour le contrôleur.

Utilisez de préférence des disques identiques, ou aussi proches que possible en taille et en performances, afin de permettre la création correcte du RAID 1.

L'installeur crée automatiquement la configuration RAID 1 et la structure LVM du système sur les disques retenus.

### 5. Configurer le réseau d'accès du contrôleur

Lorsque l'installeur affiche la liste des interfaces réseau physiques :

1. Sélectionnez l'interface connectée à votre réseau.
2. Choisissez `Static` pour saisir la configuration manuellement.
3. En mode statique, renseignez l'adresse IP, le masque, la passerelle et les serveurs DNS demandés.
4. Validez le récapitulatif avant l'écriture de la configuration réseau.

À la fin de l'installation de base, cette configuration est appliquée au système installé afin de permettre un premier accès SSH au contrôleur.

### 6. Vérifier l'accès après le premier démarrage

Après le redémarrage du serveur :

1. Connectez-vous depuis le réseau relié à la première interface réseau du serveur.
2. Vérifiez que l'adresse IP configurée pour le contrôleur répond bien en SSH.
3. Vérifiez que le contrôleur peut joindre les ressources réseau nécessaires dans votre environnement.

Si l'interface ou les paramètres réseau ne sont pas corrects, relancez l'installation et sélectionnez les valeurs attendues.

### 7. Ajuster la taille des volumes logiques

Après le premier démarrage, connectez-vous au contrôleur puis adaptez la taille des volumes logiques en fonction de la capacité réelle des disques et de vos besoins.

> [!warning]
>
> Les tailles ci-dessous sont des exemples de destination sur des disques de 900 Go. Vérifiez l'espace réellement utilisé et disponible avant toute réduction de volume, puis ajustez les valeurs selon la capacité de vos disques.

Commencez par réduire le volume `spare`, puis réallouez l'espace libéré aux volumes utiles :

```bash
lvreduce -r -L 100G -v /dev/mapper/vg-spare
lvresize -r -L100G -v /dev/mapper/vg-home
lvresize -r -L100G -v /dev/mapper/vg-root
lvresize -r -L30G -v /dev/mapper/vg-tmp
lvresize -r -L200G -v /dev/mapper/vg-var
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
