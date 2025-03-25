---
title: "Encrypting Backup Jobs with Veeam and OKMS"
excerpt: "Learn how to configure encrypted backup jobs using Veeam and the OVHcloud KMS (OKMS) service to enhance data protection."
updated: 2025-03-25
---

## Objective
This guide explains how to configure encrypted backup jobs using the Veeam backup solution and the OVHcloud KMS (OKMS) service.

## Requirements
- Access to the OVHcloud KMS (OKMS) service.
- Veeam Backup & Replication software.
- OpenSSL installed on your machine.

## Instructions
### Step 1: Create the Certificate in OKMS Service

1. Generate the private key using the following API (without CSR):

> [!api]
>
> @api {v1} /okms POST / /okms/resource/{okmsId}/credential

![Generate an access certificate](images/veeam_okms_1.png){.thumbnail}

2. Retrieve the certificate by making a GET request:

> [!api]
>
> @api {v1} /okms GET /okms/resource/{okmsId}/credential

Fill in the required fields in the Generate an access certificate window and select the option `I don’t have a private key`{.action}.

![Generate Access Certificate - No Private Key](images/veeam_okms_2.png){.thumbnail}

3. Download the private key.

4. Download the certificate.

![Download Certificate](images/veeam_okms_3.png){.thumbnail}

### Step 2: Convert PEM to PFX

To import the certificate into Veeam, you must convert it to `.pfx` format using the following command:

```bash
openssl pkcs12 -export -out cert.pfx -inkey privatekey.pem -in certificate.pem
```

### Step 3: Import the Certificate to Veeam Windows Certificate Store
1. Open the Windows Certificate Store on your Veeam server.
2. Import the `.pfx` certificate into the Veeam Windows Certificate Store.
3. Mark the certificate as exportable during import.

![Import Certificate - Exportable](images/veeam_okms_4.png){.thumbnail}

### Step 4: Register the KMS Inside Veeam
1. Open Veeam Backup & Replication and go to `Credentials & Passwords`{.action} then click on `Key Management Servers`{.action}.

![Veeam Key Management Servers](images/veeam_okms_5.png){.thumbnail}

2. Click on `Add`{.action} to a new KMS server.

![Add KMS Server](images/veeam_okms_6.png){.thumbnail}

3. Enter the server address. 

For example, for a KMS created in the **eu-west-rbx** region: <https://eu-west-rbx.okms.ovh.net>.

Then, import your certificate from the Windows Key Store (the .`.pfx` file you imported previously).

![Add KMS Server Details](images/veeam_okms_7.png){.thumbnail}

### Step 5: Retrieve the Server Certificate
To retrieve the certificate from the OKMS server, use this command:

```bash
openssl s_client -connect eu-west-rbx.okms.ovh.net:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'
```

### Step 6: Configure Backup Job Encryption
1. Register the KMS server in your Veeam Backup & Replication console.
2. Select the desired backup job and configure encryption using the registered KMS.

![Configure Backup Encryption](images/veeam_okms_8.png){.thumbnail}

3. Once the backup is complete, you will see a lock icon next to the backup name indicating it is encrypted.

![Encrypted Backup](images/veeam_okms_9.png){.thumbnail}

4. If you encounter the error Unsupported attribute: OPERATION_POLICY_NAME, follow the instructions provided in the documentation to resolve the issue.

![Operation Policy Name Error](images/veeam_okms_10.png){.thumbnail}

## Go further

If you need training or technical assistance to implement our solutions, please contact your Technical Account Manager or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).