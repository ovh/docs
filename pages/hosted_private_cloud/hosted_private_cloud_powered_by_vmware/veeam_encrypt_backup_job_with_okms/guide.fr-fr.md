---
title: "Chiffrement des tâches de sauvegarde avec Veeam et OKMS"
excerpt: "Découvrez comment configurer des tâches de sauvegarde chiffrées en utilisant Veeam et le service KMS d’OVHcloud (OKMS) pour renforcer la protection des données"
updated: 2025-04-22
---

## Objectif

Ce guide explique comment configurer des tâches de sauvegarde chiffrées en utilisant la solution de sauvegarde Veeam et le service KMS d’OVHcloud (OKMS).

## Prérequis

- Disposer d'une offre [VMware on OVHcloud](/links/hosted-private-cloud/vmware).
- Avoir lu les guides :
    - [Intégration d'un KMS pour VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_overall_vm-encrypt).
    - [Premiers pas avec OKMS](/pages/manage_and_operate/kms/quick-start).

## En pratique

### Étape 1 : Créer un certificat dans OKMS

Vous pouvez créer votre certificat d’accès dans OKMS en utilisant soit l’[API OVHcloud](/links/api), soit [l'espace client OVHcloud](/links/manager).

#### Option 1 : Utiliser l’API

1. Générez la clé privée avec l’API (sans CSR) :

    > [!api]
    >
    > @api {v1} /okms POST / /okms/resource/{okmsId}/credential

2. Récupérez le certificat avec une requête GET :

    > [!api]
    >
    > @api {v1} /okms GET /okms/resource/{okmsId}/credential

    > [!primary]
    > Cette méthode est équivalente au choix de l’option `I don't have a private key`{.action} dans [l'espace client OVHcloud](/links/manager).
    > Vous pouvez également soumettre un CSR si vous avez déjà votre propre clé privée.

3. Téléchargez la clé privée.

4. Téléchargez le certificat.

    > [!primary]
    > La clé privée téléchargée est utilisée pour générer le fichier `.pfx` à l’étape suivante.
    > Vous n’avez pas besoin de l’importer manuellement dans Veeam, mais elle est requise pour convertir le certificat dans un format compatible.
    > Veillez à la conserver en lieu sûr.

#### Option 2 : Utiliser [l'espace client OVHcloud](/links/manager).

1. Dans [l’espace client OVHcloud](/links/manager), cliquez sur `Hosted Private Cloud`{.action} puis sur `Identity, Security & Operations`{.action} et enfin sur `Key Management Service`{.action}. Sélectionnez votre KMS.

    ![Console Dashboard](images/console_1.png){.thumbnail}

2. Sélectionnez votre KMS.

    ![KMS List](images/console_2.png){.thumbnail}

3. Ouvrez l’onglet `Certificats d’accès`{.action}.

    ![Access certificates tab](images/veeam_okms_1.png){.thumbnail}

4. Cliquez sur `Générer un certificat d’accès`{.action}.

5. Renseignez les champs requis, puis sélectionnez `Je n’ai pas de clé privée`{.action}.

    ![Generate Access Certificate - No Private Key](images/veeam_okms_2.png){.thumbnail}

    > [!primary]
    > Cela revient à générer un certificat sans CSR, comme avec l’API.
    > Vous pouvez également choisir `J’ai déjà une clé privée` pour générer un certificat à partir de votre propre CSR.

6. Ajoutez des identifiants utilisateur au certificat :
    - Cliquez sur `Ajouter des identifiants`{.action}
    - Sélectionnez les utilisateurs autorisés
    - Validez l’association au certificat

    > [!primary]
    > Cette étape est indispensable pour que le certificat fonctionne avec Veeam.

7. Téléchargez la clé privée et le certificat.

    ![Download Certificate](images/veeam_okms_3.png){.thumbnail}

### Étape 2 : Conversion du certificat PEM au format PFX

Pour importer le certificat dans Veeam, vous devez le convertir au format `.pfx` en utilisant la commande suivante :

```bash
openssl pkcs12 -export -out cert.pfx -inkey privatekey.pem -in certificate.pem
```

### Étape 3 : Importation du certificat dans le Windows Certificate Store de Veeam

- Ouvrez le Windows Certificate Store sur votre serveur Veeam.
- Importez le fichier `.pfx` généré à l’étape précédente.
- Cochez l’option permettant de rendre le certificat exportable.

![Import Certificate - Exportable](images/veeam_okms_4.png){.thumbnail}

### Étape 4 : Enregistrement du KMS dans Veeam

- Ouvrez Veeam Backup & Replication et allez dans `Credentials & Passwords`{.action}, puis cliquez sur `Key Management Servers`{.action}.

![Veeam Key Management Servers](images/veeam_okms_5.png){.thumbnail}

- Cliquez sur `Add`{.action} pour ajouter un nouveau serveur KMS.

![Add KMS Server](images/veeam_okms_6.png){.thumbnail}

- Saisissez les informations suivantes :
    - Adresse du serveur : `eu-west-rbx.okms.ovh.net`
    - Port : `5696`
    - Certificat serveur : `*.okms.ovh.net`
    - Certificat client : le fichier `.pfx` que vous venez d'importer

![Add KMS Server Details](images/veeam_okms_7.png){.thumbnail}

### Étape 5 : Récupération du certificat serveur

Pour récupérer le certificat depuis le serveur OKMS, utilisez la commande suivante :

```bash
openssl s_client -connect eu-west-rbx.okms.ovh.net:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'
```

### Étape 6 : Configuration du chiffrement des tâches de sauvegarde

- Enregistrez le serveur KMS dans votre console Veeam Backup & Replication.
- Sélectionnez la tâche de sauvegarde souhaitée, puis configurez le chiffrement avec le KMS enregistré.

![Configure Backup Encryption](images/veeam_okms_8.png){.thumbnail}

- Une fois la sauvegarde exécutée, une icône de cadenas s'affiche à côté de son nom.

![Encrypted Backup](images/veeam_okms_9.png){.thumbnail}

- En cas d’erreur `Unsupported attribute: OPERATION_POLICY_NAME`, consultez la documentation ou contactez le support.

![Operation Policy Name Error](images/veeam_okms_10.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez vos questions, donnez votre avis et échangez directement avec l’équipe en charge des services Hosted Private Cloud sur notre canal [Discord](https://discord.gg/ovhcloud).

Échangez avec notre [communauté d'utilisateurs](/links/community).