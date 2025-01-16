---
title: Object Storage - Encrypt your server-side objects with SSE-C or SSE-OMK
excerpt: This guide explains how to encrypt your server-side objects with SSE-C or SSE-OMK
updated: 2024-11-29
---

<style>
td:nth-of-type(1) {
  vertical-align: top;
  white-space: nowrap;
}
.optional {
  font-style:italic;
  margin-top:10px;
  text-align:center;
}
</style>

## Objective

At OVHcloud, we understand the crucial importance of data protection in today’s digital ecosystem. In the face of ever-evolving security threats and increasingly stringent regulatory requirements, it’s essential to implement robust measures to secure data at all times. This includes not only data in transit, but also data at rest.

Protecting *at rest* data, i.e. data stored on physical devices or in the cloud, is a crucial part of any organization’s IT security strategy. In this context, there are two main approaches to encrypting this data: client-side encryption (CSE) and server-side encryption (SSE).

Client-Side Encryption (CSE) allows our customers to encrypt their data on their own device before sending it to our servers for storage. This ensures that data remains encrypted throughout its lifecycle, offering a high degree of security, as encryption keys are managed by the customer and never shared with OVHcloud or any other third party.

While this approach requires the customer to strictly manage the keys, it is an ideal solution for those who require complete control over their data security.

At the same time, server-side encryption (SSE) offers an alternative where data is encrypted when it arrives at our servers. This is the responsibility of OVHcloud, which greatly reduces the burden of security management for our customers. Two server-side encryption methods are available: 

- **SSE-C (Server-Side Encryption with Customer Keys)**: You can provide and manage your own encryption keys, giving you complete control over your data security. This option is particularly well-suited to organizations with specific compliance and data security needs, as it allows for exclusive management of encryption keys.
- **SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)**: Simplifies the encryption process by using keys managed by OVHcloud. This method is ideal for customers who want a robust encryption solution without the complexities of key management.

Our goal is to help you choose the type of encryption that is best for you. This page gives you all the information you need to make an informed choice. Whether you prefer to manage yourself with SSE-C or opt for the ease of SSE-OMK, we are committed to offering you flexible and secure solutions to protect your data when it is stored.

**This guide explains how to encrypt your server-side objects with SSE-C or SSE-OMK.**

> [!warning]
>
> Object Storage does not store the encryption key you provide. That means if you lose the encryption key, you lose the object. The only thing left to do is to delete it.
>

## Requirements

- An Object Storage bucket
- A user with the required access rights on the bucket
- Have installed and configured the AWS command line interface (aws-cli)

See our [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) guide.

## Instructions

Using server-side encryption with client-provided encryption keys (SSE-C) allows you to define your own encryption keys.

When you download an object, Object Storage uses the encryption key you provide to apply AES-256 encryption to your data. When you check out an object, you must provide the same encryption key as part of your request. Object Storage first checks that the encryption key you provided matches, then decrypts the object before returning the object data to you.

When you use SSE-C, you must provide encryption key information using the following request headers.

| Name | Description |
|:-----|:------------|
| --sse​-customer-algorithm | Use this header to specify the encryption algorithm. The header value must be *AES256.* |
| --sse-customer-key | Use this header to provide the 256-bit, base64-encoded encryption key for Object Storage to use to encrypt or decrypt your data. |
| --sse​-customer-key-md5 | Use this header to provide the base64-encoded 128-bit MD5 digest of the encryption key according to RFC 1321. Object Storage uses this header for a message integrity check to ensure that the encryption key was transmitted without error. |

### SSE-C - Server-Side Encryption with Client Encryption Keys

#### Creating an encryption key

Example of creating an encryption key ( *--sse-customer-key* ) with its MD5 hash:

```bash
$ secret=$(openssl rand 32)
$ encKey=$(echo -n $secret | base64)
$ md5Key=$(echo -n $secret | openssl dgst -md5 -binary | base64)
```

#### Uploading an object with SSE-C

To upload an object with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3api put-object \
  --body /etc/magic \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

#### Downloading an object with SSE-C

To download an object with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key \
  decrypt_magic
```

Without encryption headers, you will get a `Bad Request` error:

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  decrypt_magic

$ An error occurred (400) when calling the HeadObject operation: Bad Request
```

#### Getting object metadata with SSE-C

To get an object metadata with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3api head-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

Output should look like:

```json
{
    "LastModified": "Tue, 19 Apr 2022 09:38:47 GMT",
    "ContentLength": 111,
    "ETag": "\"272913026300e7ae9b5e2d51f138e674\"",
    "VersionId": "1650376416551536",
    "ContentType": "binary/octet-stream",
    "Metadata": {},
    "StorageClass": "STANDARD"
}
```

Without encryption headers, you will get a `Bad Request` error.

#### Deleting an encrypted object with SSE-C

To delete an encrypted object with SSE-C and aws-cli, proceed as follows:

```bash
$ aws s3 rm s3://<bucket_name>/encrypt_magic
```

#### Presigned URLs and SSE-C

Presigned URLs, that can be used for operations such as upload a new object, retrieve an existing object, or object metadata, support the SSE-C as follows:

- When creating a presigned URL, you must specify the algorithm using the `x-amz-server-side​-encryption​-customer-algorithm` header in the signature calculation.

- When using the presigned URL to upload a new object, retrieve an existing object, or retrieve only object metadata, you must provide all the encryption headers in your client application.

> [!primary]
>
> You can use the presigned URL for SSE-C objects only programmatically, because in addition to the presigned URL, you also need to include HTTP headers that are specific to SSE-C objects.
>

### SSE-OMK - Server-side encryption with keys managed by OVHcloud

Using server-side encryption with keys managed by OVHcloud (SSE-OMK) helps protect your data stored on OVHcloud by encrypting it automatically at rest. SSE-OMK uses keys managed and protected by OVHcloud, eliminating the need for the user to manually manage these encryption keys.

#### Benefits

- **Simplified Key Management**

With OVHcloud supporting secure encryption key management, users benefit from simplified key management. This approach eliminates the complexities of key rotation while maintaining a high level of data security. It balances security with operational efficiency, eliminating the administrative burden of manually managing encryption keys.

- **Enhanced Security**

We use an advanced encryption strategy to offer maximum protection for your data. Each bucket has a unique key, and for each stored object, a separate encryption key is generated. This key is obtained by combining the unique key of the bucket with a random salt, which ensures that each object is encrypted with its own key. This key derivation method reduces the risk associated with exposing a single key and ensures enhanced security for your data.

- **Transparency**

The encryption and decryption process is completely transparent to the user, allowing encrypted data to be accessed and managed as easily as unencrypted data.

- **Enhanced security with OVHcloud Key Management Service (KMS)**

Our commitment to securing your data is reinforced through the use of OVHcloud Key Management Service (KMS), an advanced platform for secure storage and encryption key management. This approach ensures optimal data protection, setting up a robust security infrastructure without the complexities of directly managing encryption keys.

To further your understanding of OVHcloud Key Management Service (KMS) and its applications in various cloud infrastructure contexts, we recommend reading the following resources:

- **[Enabling Virtual Machine Encryption (VM Encrypt) - OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt)**: practical guide on enabling VM encryption using KMS capabilities.
- **[Enabling virtual machine encryption with vSphere Native Key Provider - OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp)**: detailed instructions on using KMS in conjunction with the vSphere Native Key Provider for VM encryption.

These documents provide valuable information on how the KMS can be used to enhance security in different cloud infrastructure scenarios.

#### Implementation

To enhance the security of data uploaded to OVHcloud, enabling server-side encryption (SSE-OMK) has been designed to be both easy and transparent. By configuring a default encryption method on your bucket via the `PutBucketEncryption` request, any uploaded object will be automatically encrypted without requiring any additional actions on your side. When uploading an object, simply specify the encryption option in the API request or via the AWS CLI command line. OVHcloud takes care of the rest, encrypting your data before it is stored using an automatically generated unique key for the bucket.

### Secure encryption key management with SSE-OMK on Object Storage

The implementation of SSE-OMK encryption on Object Storage is designed to provide encryption key management that is both secure and transparent for the user. Each bucket has a separate key, which ensures that data is secured individually and in isolation. This encryption method, integrated and managed by the platform, eliminates the complexities associated with manual key management by users. While making the user process as smooth and intuitive as possible, it maintains robust security and complies with the very strictest data protection standards.

#### Sending an object with SSE-OMK on Object Storage

##### Uploading an object on Object Storage with SSE-OMK encryption

To send an object in your Object Storage bucket on OVHcloud with SSE-OMK encryption, use the following Bash command via the AWS CLI. This command includes the server-side encryption option to enhance the security of your stored data.

```bash
aws s3api put-object --bucket your-bucket --key your-object --body path/to/your/file --server-side-encryption AES256 --endpoint-url https://s3.io.cloud.ovh.net
```

When using the AWS CLI command to upload an object with SSE-OMK encryption to Object Storage, make sure to replace the following values based on your specific information:

- `your-bucket`: replace this value with the name of your Object Storage bucket where you want to send the object.
- `your-object`: replace with the key or name under which you want the object to be stored in the bucket.
- `path/to/your/file`: Specify the full path to the file you plan to send.

The option `--server-side-encryption AES256` in the command indicates that you want to apply SSE-OMK encryption. This ensures that the sent object is securely encrypted directly on the OVHcloud server, providing an additional layer of protection for your data.

##### Downloading an Object with SSE-OMK to Object Storage

To download an object that has been encrypted with SSE-OMK from Object Storage, you do not need to specify encryption headers in the command. The object can be downloaded directly without any additional manipulation linked to the encryption, because the decryption is managed automatically on the server side. Here is an example of a download command:

```bash
aws s3api get-object --bucket your-bucket --key your-object path/to/destination/file --endpoint-url https://s3.io.cloud.ovh.net
```

- Replace `your-bucket` with the name of your bucket.
- Replace `your-object` with the key of the object you want to download.
- Replace `path/to/destination/file` with the path where you want to save the downloaded file.

Be careful not to include specific encryption headers when downloading an encrypted object with SSE-OMK to avoid errors, such as a 400 Bad Request error. 

#### Adding encryption to an existing bucket on Object Storage

To add SSE-OMK encryption to an existing Object Storage bucket on OVHcloud, you must use the `put-bucket-encryption` command from the AWS CLI. This command configures bucket encryption so that all newly added objects are automatically encrypted with SSE-OMK. Here is the specific command you would use:

```bash
aws s3api put-bucket-encryption --bucket your-bucket --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}' --endpoint-url https://s3.io.cloud.ovh.net
```

- Replace `your-bucket` with the name of your Object Storage bucket.

This will configure the bucket to use SSE-OMK encryption with keys managed by Object Storage (AES256) for all new objects. Existing objects will not be affected. If you also want to encrypt them, you will need to copy or upload them again after changing this configuration.

##### Viewing bucket encryption configuration

After configuring your bucket encryption via `PutBucketEncryption` to use SSE-OMK, make sure everything is set up correctly using the following command with the AWS CLI:

```bash
aws s3api get-bucket-encryption --bucket your-bucket --endpoint-url https://s3.io.cloud.ovh.net
```

- Replace `your-bucket` with the name of your bucket.

With this command, you can check your bucket’s current encryption configuration to ensure that SSE-OMK encryption is enabled.

In this order, replace `your-bucket` with the name of your bucket. This command returns the details of your bucket’s current encryption configuration, confirming the use of SSE-OMK for data encryption at rest.

This extra step ensures full transparency and helps ensure your data is kept safe to the highest standards, with the simplicity and efficiency offered by SSE-OMK encryption managed by OVHcloud.

##### Deleting an encrypted object with SSE-OMK

Deleting objects encrypted with SSE-OMK is no different from deleting objects that are not encrypted. You can use the following command to delete an object:

```bash
aws s3 rm s3://my-Bucket/my-object
```

- Replace `my-Bucket` with the name of your bucket
- Replace `my-object` by the name of the object you want to delete.

With this command, you can effectively delete an object, whether it is encrypted or not, from your bucket on Object Storage.

### SSE-OMK Encryption considerations

When using SSE-OMK encryption on Object Storage, it is important to consider the following:

#### Performance

- **Overhead**: SSE-OMK encryption can introduce a slight overhead due to the encryption and decryption process. However, this overhead is usually minimal and does not significantly affect overall performance.

#### Security

- **Key Management**: SSE-OMK offers a high level of security by automatically managing encryption keys. This simplifies security management for users.
- **Additional security practices**: Combining SSE-OMK encryption with other security practices is crucial for optimal protection. This includes the use of strict IAM policies and log access tracking to monitor and control data access.

#### Comparison of encryption methods

It’s essential to compare the different encryption methods available to choose the one that best suits your specific needs. Methods to consider include client-side encryption (CSE) and server-side encryption (SSE), with its SSE-C and SSE-OMK variants.

#### Pros and cons

- **CSE vs SSE**: Each method has its own advantages and disadvantages in terms of manageability, security and performance impact.
- **Recommended use cases**: depending on your specific situation, some methods may be more appropriate than others. It is important to evaluate the recommended use cases for each encryption method.

A comparative table may be useful for summarizing these elements, providing a clear overview that facilitates decision-making.

| Encryption method | Benefits | Cons | Recommended Use Cases |
|-------------------|----------|------|-----------------------|
| **CSE (Client-Side Encryption)** | - Full control over encryption keys<br>- Maximized security because keys never leave the client | - Complex key management<br>- Full responsibility for key security | - Scenarios requiring specific compliance<br>- High data sensitivity |
| **SSE-C (Server-Side Encryption with Customer Keys)** | - Control over encryption keys<br>- Enhanced security without the total complexity of CSE<br>- No additonal cost | - Need to provide keys at each request<br>- More complex key management than SSE-OMK | - Compliance and key control<br>- Intermediate security needs |
| **SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)** | - Simple to implement<br>- Automatic key management by OVHcloud<br>- Transparent usage<br>- No additonal cost | - Less control over encryption keys compared to CSE and SSE-C | - General purpose where manageability is paramount<br>- Less sensitive data |

Each encryption method has its own strengths and weaknesses. The choice of method depends on several factors, including the level of security required, the complexity of managing the keys you are willing to assume, and the regulatory or compliance specifics your organization must adhere to.

> [!primary]
>
> There are no additional fees for using server-side encryption with SSE-C or SSE-OMK.
>

### Recommended use cases for encryption on OVHcloud Object Storage

#### CSE (Client-Side Encryption)

- **Ideal for**: Organizations with very high security requirements, requiring encryption keys to remain under exclusive control.
- **Suitable for**: strictly regulated environments, such as financial institutions or healthcare services.

#### SSE-C (Server-Side Encryption with Customer Keys)

- **Suitable for**: Organizations seeking a balance between key control and manageability.
- **Useful for**: when customers are ready to manage keys but want to delegate encryption and decryption.

#### SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)

- **Perfect for**: users who prefer a turnkey solution without the burden of key management.
- **Preferred method for**: companies looking to protect their data without specific encryption compliance needs.

The choice between these methods should be guided by security policies and regulatory requirements, as well as the ability to manage encryption keys. A balance between ease of use and security is essential.

### Examples of scripts and commands

#### CSE (Client-Side Encryption)

```bash
# Generating a client-side encryption key
client_key=$(openssl rand -base64 32)
# Encryption of a file before sending
openssl enc -aes-256-cbc -salt -in path/to/your/file -out path/to/encrypted/file -pass pass:$client_key
# Sending encrypted file to Object Storage bucket
aws s3 cp path/to/encrypted/file s3://your-bucket/your-encrypted-object
```

#### SSE-C (Server-Side Encryption with Customer Keys)

```bash
# Creating an encryption key and its MD5 fingerprint
sse_c_key=$(openssl rand -base64 32)
sse_c_key_md5=$(echo -n $sse_c_key | openssl md5 -binary | base64)
# Uploading an object with SSE-C encryption
aws s3api put-object \
  --bucket your-bucket \
  --key your-object \
  --body path/to/your/file \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $sse_c_key \
  --sse-customer-key-md5 $sse_c_key_md5
# Retrieving an object with SSE-C encryption
aws s3api get-object \
  --bucket your-bucket \
  --key your-object \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $sse_c_key \
  --sse-customer-key-md5 $sse_c_key_md5 \
  path/to/destination/file
```

#### SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys):

```bash
# Sending an object with SSE-OMK encryption
aws s3api put-object \
  --bucket your-bucket \
  --key your-object \
  --body path/to/your/file \
  --server-side-encryption AES256
# Uploading an object with SSE-OMK encryption
aws s3api get-object \
  --bucket your-bucket \
  --key your-object \
  path/to/destination/file
```

## Troubleshooting and Common Error Resolution

### Error using SSE-C without proper encryption headers

- **Required headers**: ensure that the headers `--sse-customer-algorithm`, `--sse-customer-key`, and `--sse-customer-key-md5` are correctly included in your order.
- **Key verification**: Confirm that the encryption key is correct and has not been modified or altered since it was used to encrypt the object.

### In case of a loss of the SSE-C encryption key

- **Cannot Recover**: If the encryption key is lost, it is not possible to recover data encrypted with SSE-C. Keep your keys in a safe place and consider using key management services to improve security.

### Bad query error when using SSE-OMK

- **Without specific headers**: For SSE-OMK, avoid specifying encryption headers during download. The `--server-side-encryption AES256` option is sufficient.
- **Verifying encryption method**: Make sure the object was not originally encrypted with a different method.

### Performance or latency issues during encryption/decryption with SSE-OMK

- **Potential overhead**: Encryption and decryption may cause a slight overhead.
- **Performance Optimization**: To improve performance, perform encryption and decryption in a geographical region close to your location to minimize latency.

## Conclusion

This documentation highlights our commitment to providing advanced data security solutions. Whether you opt for client-side (CSE) or server-side (SSE-OMK) encryption, our goal is to offer you optimal security with minimal operational overhead.

The OVHcloud Key Management Service (KMS) is a testament to our commitment to securing your data, offering comprehensive protection without the complexities of direct key management. We encourage the adoption of these encryption practices to secure your data at rest, providing you with the tools and knowledge necessary for effective implementation. OVHcloud is here to help with any additional support regarding data encryption and security. Please refer to our additional resources or contact our technical support team for any clarification or assistance.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
