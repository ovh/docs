---
title: "How to Encrypt Kubernetes ETCD with OVHcloud KMS"
excerpt: "Find out how to configure Kubernetes to encrypt ETCD storage with OVHcloud KMS KMIP interface"
updated: 2026-02-13
---

## Objective

This guide explains how to set up the kube-apiserver [encryption provider](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/) enabling Kubernetes clusters to encrypt and decrypt data at rest using OVHcloud KMS through the KMIP protocol.

## Requirements

- An [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- You must have [ordered an OKMS domain](/pages/manage_and_operate/kms/quick-start).

## Instructions

### Installing the binary

The binary can be installed directly from Go packages.

```bash
go install github.com/ovh/okms-k8s-encryption-provider@latest
```

Or you can build from sources.

```bash
git clone https://github.com/ovh/okms-k8s-encryption-provider.git
cd okms-k8s-encryption-provider
go build -o okms-k8s-encryption-provider
```

### Configuring OVHcloud KMS (OKMS)

To use OVHcloud KMS as an encryption provider for Kubernetes, you will need the following:

- An OVHcloud user and permissions to manage OKMS KMIP keys.
- An access certificate for your OKMS domain.
- A KMIP AES key in your OKMS.

#### Creating user and access rights

Create a [IAM local user](/pages/account_and_service_management/account_information/ovhcloud-users-management) with access rights on your domain.

If you are using [IAM policies](/pages/account_and_service_management/account_information/iam-policy-ui) instead, the user should have at least the following rights on the OKMS domain:

- `okms:kmip:encrypt`
- `okms:kmip:decrypt`
- `okms:kmip:locate`

Otherwise, the user should be a member of a group with the ADMIN role.

Alternatively, it is possible to create a user using [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli):

```bash
ovhcloud iam user create --login "etcd-encryption" --group ADMIN --description "A user created for ETCD encryption" --password "xxxxxxxxx" --email "xxxxx@mycompany.com"
```

#### Creating access certificate

Create an [OKMS access certificate](/pages/manage_and_operate/kms/okms-certificate-management) and link the user previously created.

Save the certificate `cert.pem` and the private key `key.pem` generated, as they will be required for the encryption provider configuration.

#### Creating KMIP AES key

To create a KMIP AES key, you can use the [OKMS CLI](https://github.com/ovh/okms-cli):

Start by downloading the binary from the latest release or building from source.

Then you can create a key using :

```bash
okms-cli kmip create symmetric --alg aes --size 256
```

Keep the Key ID of the key generated. For the rest of the guide we'll use the Key ID **70001308-5674-43fe-93dd-6270ecac0710** as an example.

For more information on how to use the okms-cli, refer to the GitHub repository.

### Configuring encryption provider

The encryption provider can be run on the kube-apiserver hosts directly with the following command line:

```bash
./okms-k8s-encryption-provider \
  --client-cert "~/.ovh-kms/cert.pem" \
  --client-key "~/.ovh-kms/key.pem" \
  --kmip-addr "eu-west-par.okms.ovh.net:5696" \
  --kmip-key-id "70001308-5674-43fe-93dd-6270ecac0710"
```

The encryption provider supports the following options:

| Flag            | Description                                                                                                                                               | Default                          |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `--client-cert` | Path to the client certificate file for OVHcloud KMS authentication.                                                                                      | `""` (required)                  |
| `--client-key`  | Path to the private key file associated with the client certificate.                                                                                      | `""` (required)                  |
| `--kmip-addr`   | Address of the KMIP server. Available in your [OKMS domain dashboard](/links/control-panel/security-kms). (e.g., `eu-west-rbx.okms.ovh.net:5696`). | `""` (required)                  |
| `--kmip-key-id` | Identifier of the encryption key to use on the KMIP server.                                                                                               | `""` (required)                  |
| `--sock`        | Path to the Unix socket the provider will listen on. Should be mounted inside the Kubernetes apiserver.                                                    | `/var/run/okms_etcd_plugin.sock` |
| `--timeout`     | Timeout for the gRPC server operations.                                                                                                                   | `10s`                            |
| `--debug`       | Activate debug traces.                                                                                                                                    | `false`                          |

### Configuring Kubernetes

Based on the [official Kubernetes guide for encrypting data with a KMS provider](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/#encrypting-your-data-with-the-kms-provider), add the following flags on your kube-apiserver:

```bash
  --encryption-provider-config=<path/to>/encryption-config.yaml
  # Optional: reload the file if it is updated
  --encryption-provider-config-automatic-reload=true
```

Make sure to mount the directory containing the Unix socket that the KMS server is listening on into the kube-apiserver.

An example of `encryption-config.yaml`:

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

### Validating configuration

Create a secret with `kubectl create secret generic okms-test-secret -n default --from-literal=mykey=mydata` and then check the contents of the secret in ETCD storage by running the following:

```bash
ETCDCTL_API=3 etcdctl \
    --key /rootfs/etc/kubernetes/pki/kube-apiserver/etcd-client.key \
    --cert  /rootfs/etc/kubernetes/pki/kube-apiserver/etcd-client.crt \
    --cacert /rootfs/etc/kubernetes/pki/kube-apiserver/etcd-ca.crt  \
    --endpoints "https://etcd-a.internal.${CLUSTER}:4001" get /registry/secrets/default/okms-test-secret
```

The output should be unreadable:

```bash
0m`�He.0�cryption-provider:�1x��%�B���#JP��J���*ȝ���΂@\n�96�^��ۦ�~0| *�H��
                    `q�*�J�.P��;&~��o#�O�8m��->8L��0�C3���A7�����~���f�V�ܬ���X��_��`�H#�D��z)+�81��qW��y��`�q��}1<LF, ��N��p����i*�aC#E�߸�s������s��l�?�a
�AźR������.��8H�4�O
```

### Implementing key rotation

To rotate your key, you will need to run two encryption providers, each listening on a different Unix socket.

Below is an example encryption configuration file for all API servers prior to using the new key:

```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
    - secrets
    providers:
    # provider using old key
    - kms:
        name: okms-encryption-provider
        endpoint: unix:///var/run/kmsplugin/socket.sock
        cachesize: 1000
        timeout: 3s
    # provider using new key
    - kms:
        name: okms-encryption-provider-2
        endpoint: unix:///var/run/kmsplugin/socket2.sock
        cachesize: 1000
        timeout: 3s
    - identity: {}
```

After all API servers have been restarted and are able to decrypt using the new key, move the provider with the new key on top.

After all secrets have been re-encrypted with the new key, you can remove the old encryption provider.

## Go further

Join our [community of users](/links/community).

Find out how to use [Kubernetes External Secrets Operator with Secret Manager](/pages/manage_and_operate/secret_manager/external-secret-operator).