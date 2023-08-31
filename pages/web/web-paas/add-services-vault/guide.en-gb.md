---
title: Vault key management service
slug: add-services-vault
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

The Vault key management service (KMS) provides key management and access control for your secrets.
The {{< vendor/name >}} Vault KMS offers the [transit secrets engine](https://developer.hashicorp.com/vault/docs/secrets/transit)
to sign, verify, encrypt, decrypt, and rewrap information. 

Vault doesn't store the data sent to the transit secrets engine,
so it can be viewed as encryption as a service.
To store secrets such as API keys, create sensitive [environment variables](../development/variables/_index.md).

## Supported versions

{{% major-minor-versions-note configMinor="true" %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 1.12 |

## Add Vault

{{% endpoint-description type="vault-kms" noApp=true %}}

- {{< variable "SERVICE_NAME" >}} is the name you choose to identify the service.

- {{< variable "VERSION" >}} is a supported version of the service.

- {{< variable "ENDPOINT_ID" >}} is an identifier you choose for the endpoint.

- {{< variable "KEY_NAME" >}} is the name of the key to be stored in the Vault KMS.

- {{< variable "POLICY" >}} is one of the available [policies](#policies) based on what you want to accomplish.

- The `type` is one of:


  - `sign`: for signing payloads, with the type `ecdsa-p256`
  - `encrypt` (for encrypt`chacha20-poly1305`).

  The `type` can't be changed after creation.

You can create multiple endpoints, such as to have key management separate from key use.

512 MB is the minimum required disk space for the Vault KMS service.

{{% /endpoint-description %}}

## Use Vault KMS

To connect your app to the Vault KMS, use a token that's defined in the `PLATFORM_RELATIONSHIPS` environment variable.
With this token for authentication,
you can use any of the policies you [defined in your `{{< vendor/configfile "services" >}}` file](#1-configure-the-service).

{{% service-values-change %}}

The following examples use cURL as an example, which you could do in a hook or after accessing your app with SSH.
Adapt the examples for your app's language.

### Get the token

To make any calls to the Vault KMS, you need your token. Get it from the `PLATFORM_RELATIONSHIPS` environment variable:

```bash
echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".{{< variable "SERVICE_NAME" >}}[0].password"
```

`{{< variable "SERVICE_NAME" >}}` is the name you [defined in your `{{< vendor/configfile "app" >}}` file](#2-add-the-relationship).

The `-r` flag returns the string itself, not wrapped in quotes.

You can also store this as a variable:

```bash
VAULT_TOKEN=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".{{< variable "SERVICE_NAME" >}}[0].password")
```

A given token is valid for one year from its creation.

### Get the right URL

The `PLATFORM_RELATIONSHIPS` environment variable also contains the information you need to construct a URL for contacting the Vault KMS: the `host` and `port`.

Assign it to a variable as follows:

```bash
VAULT_URL=$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".{{< variable "SERVICE_NAME" >}}[0].host"):$(echo $PLATFORM_RELATIONSHIPS | base64 --decode | jq -r ".{{< variable "SERVICE_NAME" >}}[0].port")
```

`{{< variable "SERVICE_NAME" >}}` is the name you [defined in your `{{< vendor/configfile "app" >}}` file](#2-add-the-relationship).

### Manage your keys

Your key names are [defined in your `{{< vendor/configfile "services" >}}` file](#1-configure-the-service). You can manage them if you've set an [admin policy](#policies) for them.

To get information on a key, such as its expiration date, run the following command:

```bash
curl \
  --header "X-Vault-Token: $VAULT_TOKEN" \
  http://"$VAULT_URL"/v1/transit/keys/"$KEY_NAME" | jq .
```

`$KEY_NAME` is the name in your `{{< vendor/configfile "services" >}}` file.

To rotate the version of your key, run the following command:

```bash
curl \
  --header "X-Vault-Token: $VAULT_TOKEN" \
  http://"$VAULT_URL"/v1/transit/keys/"$KEY_NAME">/rotate \
  --request POST
```

### Sign and verify payloads

If you've set [sign and verify policies](#policies), you can use your keys to sign and verify various payloads, such as a JSON Web Token (JWT) for authentication in your app. Note that all payloads (all plaintext data) must be base64-encoded.

To sign a specific payload, run the following command:

```bash
curl \
  --header "X-Vault-Token: $VAULT_TOKEN" \
  http://$VAULT_URL/v1/transit/sign/"$KEY_NAME"/sha2-512 \
  --data "{\"input\": \"$(echo SECRET | base64)\"}"
```

The string at the end of the URL denotes the specific [hash algorithm used by the Vault KMS](https://www.vaultproject.io/api-docs/secret/transit#hash_algorithm).

You get back a JSON object that includes the signature for the payload:

```json
{
  "request_id": "a58b549f-1356-4028-d191-4c9cd585ca25",
  ...
  "data": {
    "key_version": 1,
    "signature": "vault-kms:v1:MEUCIAiN4UtXh..."
  },
  ...
}
```

You can then use `data.signature` to sign things such as a JWT.

To verify a payload, run the following command:

```bash
curl \
  --header "X-Vault-Token: $VAULT_TOKEN" \
  http://"$VAULT_URL"/v1/transit/verify/"$KEY_NAME"/sha2-512 \
  --data "
{
  \"input\": \"$(echo SECRET | base64)\",
  \"signature\": \"$SIGNATURE\"
}"
```

You get back a JSON object that includes whether or not the signature is valid:

```json
{
  "request_id": "5b624718-fd9d-37f6-8b95-b387379d2648",
  ...
  "data": {
    "valid": true
  },
  ...
}
```

A `true` value means the signature matches and a `false` value means it doesn't.

### Encrypt and decrypt data

If you've set [encrypt and decrypt policies](#policies), you can use your keys to encrypt and decrypt any data you want. Note that all of plaintext data you work with must be base64-encoded.

To sign a specific payload, run the following command:

```bash
curl \
  --header "X-Vault-Token: $VAULT_TOKEN" \
  http://$VAULT_URL/v1/transit/encrypt/"$KEY_NAME" \
  --data "{\"plaintext\": \"$(echo SECRET | base64)\"}"
```

You get back a JSON object that includes your encrypted data:

```json
{
  "request_id": "690d634a-a4fb-bdd6-9947-e895578b79d5",
  ...
  "data": {
    "ciphertext": "vault-kms:v1:LEtOWSwh3N...",
    "key_version": 1
  },
  ...
}
```

To decrypt data that you've already encrypted, run the following command:

```bash
curl \
  --header "X-Vault-Token: $VAULT_TOKEN" \
  http://"$VAULT_URL"/v1/transit/decrypt/"$KEY_NAME" \
  --data "
{
  \"ciphertext\": \"$CIPHERTEXT\"
}"
```

You get back a JSON object that your decrypted data base64-encoded:

```json
{
  "request_id": "bbd411ca-6ed7-aa8b-8177-0f35055ce613",
  ...
  "data": {
    "plaintext": "U0VDUkVUCg=="
  },
  ...
}
```

To get the value un-encoded, add `| jq -r ".data.plaintext" | base64 -d` to the end of the `curl` command.

#### Rewrap encrypted data

If you have already encrypted data and you have [changed your key version](#manage-your-keys), you can rewrap the encrypted data with the new key.

Assuming `$CIPHERTEXT` stores your encrypted data (`vault:v1:LEtOWSwh3N...`), run the following command:

```bash
curl \
  --header "X-Vault-Token: $VAULT_TOKEN" \
  http://"$VAULT_URL"/v1/transit/rewrap/"$KEY_NAME" \
  --data "
{
  \"ciphertext\": \"$CIPHERTEXT\"
}"
```

In the JSON object that's returned, you can notice that the `ciphertext` is different (and now includes the new key version as a prefix) as is the `key_version`:
```json
{
  ...
  "data": {
    "ciphertext": "vault-kms:v2:ICRi0yAlH...",
    "key_version": 2
  },
  ...
}
```

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "username": "",
    "scheme": "http",
    "service": "vault-kms",
    "fragment": "",
    "ip": "169.254.196.95",
    "hostname": "ckmpv2fz7jtdmpkmrun7yfgut4.vault-kms.service._.eu-3.platformsh.site",
    "port": 8200,
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "vault-kms.internal",
    "rel": "sign",
    "path": "\/",
    "query": {
        "is_master": true
    },
    "password": "ChangeMe",
    "type": "vault-kms:1.6",
    "public": false,
    "host_mapped": false
}
```

## Policies

| Policy    | Endpoint | Capabilities | Purpose |
| --------- | -------- | ------------ | ------- |
| `admin`   | `transit/keys/${KEY}` | `read` | Access to key properties and various functions performed on keys such as rotation and deletion |
|           | `transit/keys/${KEY}/*` | `read`, `create`, `update`, `delete` | |
| `sign`    | `transit/sign/${KEY}/${HASH_ALGORITHM}` | `read`, `update` | Signing payloads with an existing key |
| `verify`  | `transit/verify/${KEY}/${HASH_ALGORITHM}` | `read`, `update` | Verifying already signed payloads |
| `encrypt` | `transit/encrypt/${KEY}` | `read`, `update` | Encrypting data with an existing key |
| `decrypt` | `transit/decrypt/${KEY}` | `read`, `update` | Decrypting data with an existing key |
| `rewrap`  | `transit/rewrap/${KEY}` | `read`, `update` | Re-encrypting data with a new key version without revealing the secret |
