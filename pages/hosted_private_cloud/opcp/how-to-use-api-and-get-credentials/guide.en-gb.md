---
title: "OPCP - How to use the APIs and obtain the credentials"
excerpt: "Discover the steps required to configure Keycloak and the OpenStack CLI to allow authentication via Keycloak"
updated: 2025-11-07
---

## Objective

**OPCP** integrates a centralized authentication with **Keycloak**. It is therefore necessary to configure the **OpenStack CLI** so that it uses Keycloak as the identity provider (Identity Provider).

**This guide describes the steps required to configure Keycloak and the OpenStack CLI to allow authentication via Keycloak.**

## Requirements

- Be an administrator of the [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) infrastructure and have access to the administration interface (admin.dashboard).
- Have access to the Keyloack admin interface.
- Have a user with sufficient rights to log in to Horizon on the OPCP offer.

## Instructions

### Creating a Keycloak client for the OpenStack CLI

A **dedicated Keycloak client** is required to allow the OpenStack CLI to securely communicate with the Keycloak server.

#### Steps

1\. **Log in to the Keycloak administration interface**

- Log in to your Keycloak instance and select the *realm* in which the OpenStack users are defined.

2\. **Create a new client**

- Go to the `Clients` section and click on `Create a client`{.action}.  
- Enter a **Client ID**, for example:

```console
openstack-cli
```

- Click on `Next`{.action}.

3\. **Enable client authentication**

- Enable **Client Authentication** (set to **ON**).  
- Click on `Next`{.action}, then on `Save`{.action}.

4\. **Configure scopes (Client Scopes)**

- Open the `Client Scopes` tab.  
- Select the scope named:

```console
[your-client-id]-dedicated
```

- Click on `Configure a new mapper`{.action}.

5\. **Add a user group attribute mapper**

- Choose the mapper type **aggregated-user-group-attribute-mapper**.  
- Configure the following fields:

   | Field | Value |
   |--------|--------|
   | **Name** | `projects` |
   | **User Attribute** | `project` |
   | **Token Claim Name** | `projects` |

- Click on `Save`{.action}.

6\. **Retrieve the client credentials**

- Go to the `Credentials` tab of the client you just created.
- Copy and securely store the **Client Secret** — it will be needed when configuring the OpenStack CLI.

### Configuration of the OpenStack CLI

Once the Keycloak client is created, the OpenStack CLI must be configured to use this client as the OIDC (OpenID Connect) identity provider.

#### Steps

1\. **Install the OpenStack CLI tools**

If not already done:

```bash
sudo pip install python-openstackclient
```

2\. **Set environment variables for Keycloak authentication**

Example:

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

> **Tip**  
> You can use the following script to easily generate the openrc.sh configuration file:  

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

> **Tip: Proxy configuration**  
> If you are using a proxy to access your service, you must configure your environment variables to take this proxy into account.

To do this, add the following commands lines:  

```bash
export https_proxy=http://your-adress-ip:port/
export http_proxy=http://your-adress-ip:port/
```

### Configuration verification

You can test your configuration using a few simple commands:  

```bash
openstack token issue
openstack project list
openstack server list
```

If these commands return results, the **Keycloak ↔ OpenStack** integration is correctly configured.


### Troubleshooting

| Problem | Possible cause | Solution |
|-----------|----------------|-----------|
| `Invalid client credentials` | Wrong or missing `Client Secret` | Check the secret in the **Credentials** tab of the Keycloak client |
| `Unauthorized` | The user is not associated with the correct group or project | Check the `project` attributes of the user in Keycloak |
| `OIDC discovery failed` | Wrong URL in `DISCOVERY_ENDPOINT` | Make sure it points to the correct Keycloak *realm* |


### References

- [Keycloak Documentation – OpenID Connect](https://www.keycloak.org/docs/latest/server_admin/#_oidc)
- [OpenStack Keystone Documentation](https://docs.openstack.org/keystone/latest/)
- [OVHcloud OPCP Documentation](https://docs.opcp.ovh)

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
