---
title: "OPCP - Comment utiliser les API et obtenir les informations d'identification"
excerpt: "Découvrez les étapes nécessaires pour configurer Keycloak et le CLI OpenStack afin de permettre l’authentification via Keycloak"
updated: 2025-11-07
---

## Objectif

**OPCP** intègre une authentification centralisée avec **Keycloak**. Il est donc nécessaire de configurer la **CLI OpenStack** afin qu’il utilise Keycloak comme fournisseur d’identité (Identity Provider).

**Ce guide décrit les étapes nécessaires pour configurer Keycloak et la CLI OpenStack afin de permettre l’authentification via Keycloak.**

## Prérequis

- Être administrateur de l'infrastructure [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) et avoir accès à l'interface d'administration (admin.dashboard).
- Avoir accès à l'interface d'administration Keyloack admin.
- Avoir un utilisateur avec les droits suffisants pour se connecter à [Horizon](https://horizon.cloud.ovh.net/auth/login/) sur l'offre OPCP.

## En pratique

### Création d’un client Keycloak pour la CLI OpenStack

Un client **Keycloak dédié** est nécessaire pour permettre à la CLI OpenStack de communiquer de manière sécurisée avec le serveur Keycloak.

#### Étapes

1\. **Connexion à l’interface d’administration Keycloak**

- Connectez-vous à votre instance Keycloak et sélectionnez le *realm* dans lequel les utilisateurs OpenStack sont définis.

2\. **Création d’un nouveau client**

- Allez dans la section `Clients` et cliquez sur `Créer un client`{.action}.  
- Renseignez un **Client ID**, par exemple :

   ```console
   openstack-cli
   ```

- Cliquez sur `Suivant`{.action}.

3\. **Activation de l’authentification du client**

- Activez le **Client Authentication** (mettre sur **ON**).  
- Cliquez sur `Suivant`{.action}, puis sur `Enregistrer`{.action}.

4\. **Configuration des portées (Client Scopes)**

- Ouvrez l’onglet `Client Scopes`.  
- Sélectionnez la portée nommée :

```console
[votre-client-id]-dedicated
```

- Cliquez sur `Configurer un nouveau mapper`{.action}.

5\. **Ajout d’un mapper d’attributs de groupe utilisateur**

- Choisissez le type de mapper **aggregated-user-group-attribute-mapper**.  
- Configurez les champs suivants :

   | Champ | Valeur |
   |--------|--------|
   | **Name** | `projects` |
   | **User Attribute** | `project` |
   | **Token Claim Name** | `projects` |

- Cliquez sur `Enregistrer`{.action}.

6\. **Récupération des identifiants du client**

- Allez dans l’onglet `Credentials` du client que vous venez de créer.
- Copiez et conservez de manière sécurisée la **Client Secret** — il sera nécessaire lors de la configuration du CLI OpenStack.
  

### Configuration de la CLI OpenStack

Une fois le client Keycloak créé, la CLI OpenStack doit être configurée pour utiliser ce client comme fournisseur d'identité OIDC (OpenID Connect).

#### Étapes

1\. **Installer les outils CLI OpenStack**

Si ce n’est pas déjà fait :

```bash
sudo pip install python-openstackclient
```

2\. **Définir les variables d’environnement pour l’authentification Keycloak**

Exemple :

```bash
export OS_INTERFACE=public
export OS_IDENTITY_API_VERSION=3
export OS_AUTH_URL="https://keystone.domain.ovh"
export OS_AUTH_TYPE="v3oidcpassword"
export OS_PROTOCOL="openid"
export OS_IDENTITY_PROVIDER="keycloak-admin"
export OS_CLIENT_ID="keycloak-client-id"
export OS_CLIENT_SECRET="keycloak-client-credentials"
export OS_DISCOVERY_ENDPOINT="https://admin.keycloak.domain.ovh/realms/master/.well-known/openid-configuration"
export OS_USERNAME="keycloak-user-username"
export OS_PASSWORD="keycloak-user-password"
export OS_PROJECT_ID="project-id"
```

> **Tips 1**
> Vous pouvez utiliser le script suivant afin de générer le fichier de configuration openrc.sh facilement :  

```bash
 #!/usr/bin/env bash

read -p "Your environment's base FQDN (e.g. example.bmp.ovhgoldorack.ovh): " FQDN_ENV

read -p 'master or pod realm ? (master/pod): ' REALM
if [ "$REALM" != "master" ] && [ "$REALM" != "pod" ]; then
    echo "Invalid input. Please enter either 'master' or 'pod'."
    exit 1
fi

read -p 'Keycloak client ID: ' KC_CLIENT_ID
read -srp 'Keycloak client secret: ' KC_CLIENT_SECRET && echo

read -p 'Keycloak username: ' KC_USERNAME_INPUT
read -srp 'Keycloak password: ' KC_PASSWORD_INPUT && echo

read -p 'Openstack Project ID (not the name): ' PROJECT_ID

printf "\n\nHere is your configuration, paste it to your shell or use the generate openrc.sh file\n\n"
cat << EOM
export OS_INTERFACE=public
export OS_IDENTITY_API_VERSION=3
export OS_AUTH_URL="https://keystone.${FQDN_ENV}"
export OS_AUTH_TYPE="v3oidcpassword"
export OS_PROTOCOL="openid"
export OS_IDENTITY_PROVIDER=$([ "$REALM" = "master" ] && echo "keycloak-admin" || echo "keycloak")
export OS_CLIENT_ID="$KC_CLIENT_ID"
export OS_CLIENT_SECRET="$KC_CLIENT_SECRET"
export OS_DISCOVERY_ENDPOINT="https://$([ "$REALM" = "master" ] && echo "admin.keycloak" || echo "keycloak").${FQDN_ENV}/realms/$REALM/.well-known/openid-configuration"
export OS_USERNAME="$KC_USERNAME_INPUT"
export OS_PASSWORD="$KC_PASSWORD_INPUT"
export OS_PROJECT_ID="$PROJECT_ID"
EOM

echo "#!/usr/bin/env bash

export OS_INTERFACE=public
export OS_IDENTITY_API_VERSION=3
export OS_AUTH_URL="https://keystone.${FQDN_ENV}"
export OS_AUTH_TYPE="v3oidcpassword"
export OS_PROTOCOL="openid"
export OS_IDENTITY_PROVIDER=$([ "$REALM" = "master" ] && echo "keycloak-admin" || echo "keycloak")
export OS_CLIENT_ID="$KC_CLIENT_ID"
export OS_CLIENT_SECRET="$KC_CLIENT_SECRET"
export OS_DISCOVERY_ENDPOINT="https://$([ "$REALM" = "master" ] && echo "admin.keycloak" || echo "keycloak").${FQDN_ENV}/realms/$REALM/.well-known/openid-configuration"
export OS_USERNAME="$KC_USERNAME_INPUT"
export OS_PASSWORD="$KC_PASSWORD_INPUT"
export OS_PROJECT_ID="$PROJECT_ID > $PROJECT_ID."-openrc.sh"
```

> **Tips: Configuration d'un proxy**  
> Si vous utilisez un proxy pour accéder a votre service, vous devez configurer vos variables d'environnement pour prendre en compte ce proxy.

Pour ce faire, ajoutez les lignes de commande suivantes :

```bash
export https_proxy=http://your-adress-ip:port/
export http_proxy=http://your-adress-ip:port/
```

### Vérification de la configuration

Vous pouvez tester votre configuration à l’aide de quelques commandes simples :

```bash
openstack token issue
openstack project list
openstack server list
```

Si ces commandes retournent des résultats, l’intégration **Keycloak ↔ OpenStack** est correctement configurée.


### Dépannage (Troubleshooting)

| Problème | Cause possible | Solution |
|-----------|----------------|-----------|
| `Invalid client credentials` | Mauvais ou manquant `Client Secret` | Vérifiez le secret dans l’onglet **Credentials** du client Keycloak |
| `Unauthorized` | L’utilisateur n’est pas associé au bon groupe ou projet | Vérifiez les attributs `project` de l’utilisateur dans Keycloak |
| `OIDC discovery failed` | Mauvaise URL dans `DISCOVERY_ENDPOINT` | Assurez-vous qu’elle pointe bien vers le *realm* correct de Keycloak |


### Références

- [Documentation Keycloak – OpenID Connect](https://www.keycloak.org/docs/latest/server_admin/#_oidc)
- [Documentation OpenStack Keystone](https://docs.openstack.org/keystone/latest/)
- [Documentation OVHcloud OPCP](https://docs.opcp.ovh)
