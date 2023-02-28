---
title: Administrar un cubo S3 con terraform (EN)
slug: s3/manage-s3-bucket-with-terraform
section: Tutorials
order: 140
updated: 2023-03-01
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/object-storage/s3/manage-s3-bucket-with-terraform/'
---

**Last updated on 1st March 2023**

## Objective

This tutorial will enable you to automate some actions on S3 object storage with Terraform which is an open source tool to automate infrastructure provisioning. The following actions will be automated

- S3 user creation
- bucket creation
- file copy into the bucket
- S3 policies and assignment

## Requirements

- Have terraform command line installed (see this [tutorial](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli) from Hashicorp the company behind Terraform). 
- Have git command line installed
- You will need to have set up an account to interact with OVH API : [https://docs.ovh.com/es/api/first-steps-with-ovh-api/](https://docs.ovh.com/es/api/first-steps-with-ovh-api/). From the application key created in this tutorial, you will need to export the 4 environment variables :

```bash
$ export OVH_ENDPOINT=ovh-eu
$ export OVH_APPLICATION_KEY=Your_key_application_OVH(or_AK)
$ export OVH_APPLICATION_SECRET=Your_secret_application_key_OVH(or_AS)
$ export OVH_CONSUMER_KEY=Your_token(or_CK)  
```   

- A Public Cloud project, with the ID exported as the variable `TF_VAR_OVH_PUBLIC_CLOUD_PROJECT_ID`

```bash
$ export TF_VAR_OVH_PUBLIC_CLOUD_PROJECT_ID=Your_public_cloud_project_id  
```

**If you do not have your AWS CLI** configured, you should set dummy values with the following. This is due to a limitation in Terraform dependency graph for providers initialization (see this long lasting terraform [issue)](https://github.com/hashicorp/terraform/issues/2430)

```bash
$ export AWS_ACCESS_KEY_ID="no_need_to_define_an_access_key"  
$ export AWS_SECRET_ACCESS_KEY="no_need_to_define_a_secret_key"
```

## Instruction

### Manage an S3 bucket with terraform @OVHcloud

#### Initialize

Clone repo

```bash
git clone https://github.com/yomovh/tf-at-ovhcloud && cd tf-at-ovhcloud/s3_bucket_only
```

Initialize terraform

```bash
$ terraform init
```

#### Plan

With the following command, you will see what are the actions that terraform is going to perform.

```bash
$ terraform plan
```

Now let's have a look at the content of the `main.tf` file:

- The *variable* block defines the region and s3 endpoint that are used to create the bucket. You can update it according to your needs [https://docs.ovh.com/es/storage/object-storage/s3/location/](https://docs.ovh.com/es/storage/object-storage/s3/location/)
- The *Providers* block defines 2 providers : ovh and Hashicorp AWS one. The first one is necessary to create the user whose identity / credentials will be used for the latest.
- The *User / Credential* block defines the user & credential that are visible in the Settings > Users & Roles tab. They are needed to configure the Hashicorp  AWS provider.
- The Bucket block define the bucket itself
- The Output defines the access & secret key that may be useful for CLI usage.



#### Run

```bash
$ terraform apply
```  

Now you can go in the Console and check the "Object Storage" tab. Your bucket is created !

#### Destroy

With the following command you will be back to your original state : terraform will destroy all the resources that were previously created.

```bash
$ terraform destroy
```

**Note :**

- This script does not follow terraform best practices to split the project in multiple files e.g. provider.tf, **`main.tf`, `variables.tf`, `outputs.tf`**, ... This has been done intentionnaly to avoid switching into multiples files for what is a really simple example.
- The secret that is created by this script is stored in the [local](https://developer.hashicorp.com/terraform/language/settings/backends/local) state back-end. If you use this back-end in production, be sure to consider the state file as a secret.

### Automating S3 policies with Terraform

#### Initialize

Clone repo

```bash
git clone https://github.com/yomovh/tf-at-ovhcloud && cd tf-at-ovhcloud/s3_policy
```

Initialize terraform

```bash
$ terraform init
```

#### Plan

With the following command, you will see what are the actions that terraform is going to perform.

```bash
$ terraform plan
```

Now let's have a look at the content of the `main.tf` file & compare it with the previous example

- The *User / Credential* block defines 3 user & credentials : one user will be administrator of the bucket and create it, the two others will have read/write & read-only access.
- In the *Bucket* block we have added the creation of a file into the bucket
- The *Policy* block defines 2 policies one for read/write and the other for read-only on the bucket.

#### Run

```bash
$ terraform apply
```

Now you can go in the Console and check the "Object Storage" tab. You will see the bucket and the file.

You can also check the access right by using the AWS CLI with the 2 users that have the read / write & read-only access

#### Destroy

With the following command you will be back to your original state : terraform will destroy all the resources that were previously created.

```bash
$ terraform destroy
```

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
