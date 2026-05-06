---
title: "Comment chiffrer ETCD de Kubernetes avec OVHcloud KMS"
excerpt: "Découvrez comment configurer Kubernetes pour chiffrer le stockage ETCD avec l'interface KMIP d'OVHcloud KMS"
updated: 2026-02-13
---

## Objectif

Ce guide explique comment configurer le [fournisseur de chiffrement](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) du kube-apiserver permettant aux clusters Kubernetes de chiffrer et déchiffrer les données au repos en utilisant OVHcloud KMS via le protocole KMIP.

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Vous devez avoir [commandé un domaine OKMS](/pages/manage_and_operate/kms/quick-start).

## En pratique

### Installation du binaire

Le binaire peut être installé directement à partir des paquets Go.

```bash
go install github.com/ovh/okms-k8s-encryption-provider@latest
```

Ou vous pouvez le construire à partir des sources.

```bash
git clone https://github.com/ovh/okms-k8s-encryption-provider.git
cd okms-k8s-encryption-provider
go build -o okms-k8s-encryption-provider
```

### Configuration d'OVHcloud KMS (OKMS)

Pour utiliser OVHcloud KMS en tant que fournisseur de chiffrement pour Kubernetes, vous aurez besoin des éléments suivants :

- Un utilisateur OVHcloud et des droits pour gérer les clés OKMS KMIP.
- Un certificat d'accès pour votre domaine OKMS.
- Une clé KMIP AES dans votre OKMS.

#### Création de l'utilisateur et des droits d'accès

Créez un [utilisateur local IAM](/pages/account_and_service_management/account_information/ovhcloud-users-management) avec des droits d'accès sur votre domaine.

Si vous utilisez des [politiques IAM](/pages/account_and_service_management/account_information/iam-policy-ui) à la place, l'utilisateur doit avoir au moins les droits suivants sur le domaine OKMS :

- `okms:kmip:encrypt`
- `okms:kmip:decrypt`
- `okms:kmip:locate`

Autrement, l'utilisateur doit appartenir à un groupe doté du rôle ADMIN.

Sinon, il est possible de créer un utilisateur en utilisant [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) :

```bash
ovhcloud iam user create --login "etcd-encryption" --group ADMIN --description "A user created for ETCD encryption" --password "xxxxxxxxx" --email "xxxxx@mycompany.com"
```

#### Création du certificat d'accès

Créez un [certificat d'accès OKMS](/pages/manage_and_operate/kms/okms-certificate-management) et liez l'utilisateur précédemment créé.

Sauvegardez le certificat `cert.pem` et la clé privée `key.pem` générés, car ils seront nécessaires pour la configuration du fournisseur de chiffrement.

#### Création de la clé KMIP AES

Pour créer une clé KMIP AES, vous pouvez utiliser la [CLI OKMS](https://github.com/ovh/okms-cli) :

Commencez par télécharger le binaire de la dernière version ou compilez-le à partir des sources.

Ensuite, vous pouvez créer une clé en utilisant :

```bash
okms-cli kmip create symmetric --alg aes --size 256
```

Conservez l'ID de la clé générée. Pour le reste du guide, nous allons utiliser l'ID **70001308-5674-43fe-93dd-6270ecac0710** comme exemple.

Pour plus de détails sur l'utilisation de okms-cli, veuillez vous référer au dépôt GitHub.

### Configuration du fournisseur de chiffrement

Le fournisseur de chiffrement peut être exécuté directement sur les hôtes kube-apiserver avec la commande suivante :

```bash
./okms-k8s-encryption-provider \
  --client-cert "~/.ovh-kms/cert.pem" \
  --client-key "~/.ovh-kms/key.pem" \
  --kmip-addr "eu-west-par.okms.ovh.net:5696" \
  --kmip-key-id "70001308-5674-43fe-93dd-6270ecac0710"
```

Le fournisseur de chiffrement prend en charge les options suivantes :

| Option          | Description                                                                                                                                                 | Par défaut                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `--client-cert` | Chemin vers le fichier de certificat client pour l'authentification sur OVHcloud KMS.                                                                       | `""` (obligatoire)               |
| `--client-key`  | Chemin vers le fichier de clé privée associé au certificat client.                                                                                          | `""` (obligatoire)               |
| `--kmip-addr`   | Adresse du serveur KMIP. Disponible dans le [dashboard de votre domaine OKMS](/links/control-panel/security-kms). (par exemple : `eu-west-rbx.okms.ovh.net:5696`). | `""` (obligatoire)               |
| `--kmip-key-id` | Identifiant de la clé de chiffrement à utiliser sur le serveur KMIP.                                                                                        | `""` (obligatoire)               |
| `--sock`        | Chemin vers le socket Unix sur lequel le fournisseur écoutera. Doit être monté à l'intérieur du serveur Kubernetes apiserver.                                | `/var/run/okms_etcd_plugin.sock` |
| `--timeout`     | Délai d'attente pour les opérations du serveur gRPC.                                                                                                        | `10s`                            |
| `--debug`       | Activer les traces de débogage.                                                                                                                             | `false`                          |

### Configuration de Kubernetes

Sur la base du [guide officiel Kubernetes pour chiffrer les données avec un fournisseur KMS](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/#encrypting-your-data-with-the-kms-provider), ajoutez les options suivantes à votre kube-apiserver :

```bash
  --encryption-provider-config=<path/to>/encryption-config.yaml
  # Optionnel : recharge le fichier s'il est mis à jour
  --encryption-provider-config-automatic-reload=true
```

Assuez-vous de monter le répertoire contenant le socket Unix sur lequel le serveur KMS écoute dans le kube-apiserver.

Un exemple de `encryption-config.yaml` :

```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
    - secrets
    providers:
    - kms:
        name: okms-encryption-provider
        endpoint: unix:///var/run/okms_etcd_plugin.sock
        cachesize: 1000
        timeout: 3s
    - identity: {}
```

### Validation de la configuration

Créez un secret avec `kubectl create secret generic okms-test-secret -n default --from-literal=mykey=mydata`, puis vérifiez le contenu du secret dans le stockage ETCD en exécutant la commande suivante :

```bash
ETCDCTL_API=3 etcdctl \
    --key /rootfs/etc/kubernetes/pki/kube-apiserver/etcd-client.key \
    --cert  /rootfs/etc/kubernetes/pki/kube-apiserver/etcd-client.crt \
    --cacert /rootfs/etc/kubernetes/pki/kube-apiserver/etcd-ca.crt  \
    --endpoints "https://etcd-a.internal.${CLUSTER}:4001" get /registry/secrets/default/okms-test-secret
```

La sortie devrait être illisible :

```bash
0m`�He.0�cryption-provider:�1x��%�B���#JP��J���*ȝ���΂@\n�96�^��ۦ�~0| *�H��
                    `q�*�J�.P��;&~��o#�O�8m��->8L��0�C3���A7�����~���f�V�ܬ���X��_��`�H#�D��z)+�81��qW��y��`�q��}1<LF, ��N��p����i*�aC#E�߸�s������s��l�?�a
�AźR������.��8H�4�O
```

### Mise en place de la rotation de clé

Pour faire tourner votre clé, vous devrez exécuter deux fournisseurs de chiffrement, chacun écoutant sur un socket Unix différent.

Voici un exemple de fichier de configuration de chiffrement pour tous les serveurs API avant d'utiliser la nouvelle clé :

```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
    - secrets
    providers:
    # fournisseur utilisant l'ancienne clé
    - kms:
        name: okms-encryption-provider
        endpoint: unix:///var/run/kmsplugin/socket.sock
        cachesize: 1000
        timeout: 3s
    # fournisseur utilisant la nouvelle clé
    - kms:
        name: okms-encryption-provider-2
        endpoint: unix:///var/run/kmsplugin/socket2.sock
        cachesize: 1000
        timeout: 3s
    - identity: {}
```

Une fois que tous les serveurs API ont été redémarrés et sont capables de déchiffrer en utilisant la nouvelle clé, placez le fournisseur avec la nouvelle clé en haut.

Une fois que tous les secrets ont été réchiffrés avec la nouvelle clé, vous pouvez supprimer l'ancien fournisseur de chiffrement.

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).

Découvrez comment utiliser [Kubernetes External Secrets Operator avec Secret Manager](/pages/manage_and_operate/secret_manager/external-secret-operator).