---
title: "Automating the deployment of your website on your VPS via GitLab CI/CD (EN)"
excerpt: "Find out how to deploy and automate your website’s code via GitLab CI/CD on an OVHcloud VPS"
updated: 2025-01-28
---

## Objective

Automating the deployment of your website on a VPS greatly simplifies the management of updates. With GitLab CI/CD, you can configure an automatic deployment pipeline, avoiding manual deployments. This method ensures fast and reliable deployments, while reducing the risk of human error. Whether you are a beginner or an experienced developer, this tutorial will help you set up a professional solution adapted to your needs.

**Find out how to automate the deployment of your web applications with GitLab CI/CD on an OVHcloud VPS.**

## Requirements

- A functional [VPS](/links/bare-metal/vps) in your OVHcloud account
- An active GitLab account
- A GitLab project containing your website code
- A VPS configured with the necessary services (e.g. Apache/Nginx, PHP, DBMS, etc.)
- Administrative access to the VPS (via SSH)
- Ensure the `rsync` package is installed on the VPS (required for file synchronization)

> [!primary]
> To ensure that you meet the requirements, please read the guides [Installing a web development environment on a VPS or a dedicated server](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps) and [Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

> [!warning]
> If you need assistance, please read our guide on [Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) before reading this guide further.

## Instructions

**Contents:**

- [Configure SSH access for GitLab CI/CD](#configure-ssh)
- [Add private key to GitLab](#add-private-key-gitlab)
- [Configure GitLab CI/CD for automatic deployment](#configure-gitlab-ci-cd)
- [Test and verify pipeline](#test-pipeline)
- [Conclusion](#conclusion)

### Configure SSH access for GitLab CI/CD <a name="configure-ssh"></a>

To allow GitLab CI/CD to automatically deploy your website, configure a secure SSH access to your VPS.

#### Create an SSH key pair

Log in to your VPS via SSH and generate a dedicated SSH key pair for GitLab CI/CD:

```bash
ssh-keygen -t rsa -b 4096 -C "gitlab-ci" -f /home/<user>/.ssh/deploy_key
```

Replace `<user>` with the user configured to connect to your VPS.

Press `Enter` when prompted for a passphrase (leaving the passphrase empty simplifies automating deployment with GitLab CI/CD. However, it is imperative to secure the private key by limiting it to this use and storing it securely).

You get two files:

- `/home/<user>/.ssh/deploy_key`: private key
- `/home/<user>/.ssh/deploy_key.pub`: public key

Refer to the [official GitLab documentation](https://docs.gitlab.com/ee/user/ssh.html){.external} for more details on generating an SSH key pair.

#### Configure the public key on the VPS

To allow GitLab CI/CD to connect to your VPS via SSH and deploy your website’s code there, add the generated public key to the list of authorized keys on the VPS.

1\. Create the `.ssh` directory:

```bash
mkdir -p /home/<user>/.ssh
chmod 700 /home/<user>/.ssh
```

2\. Add the public key to the `authorized_keys` file:

```bash
cat /home/<user>/.ssh/deploy_key.pub >> /home/<user>/.ssh/authorized_keys
chmod 600 /home/<user>/.ssh/authorized_keys
```

3\. Test the SSH connection with the private key to confirm that the access is functional:

```bash
ssh -i /home/<user>/.ssh/deploy_key <user>@<VPS_IP>
```

Replace `<user>` with the user configured to connect to your VPS and `<VPS_IP>` with the IP address of your VPS.

#### Add the public key to GitLab

Once you have configured the public key on your VPS, add it to your GitLab account. Copy the content of the generated public key from your VPS with:

```bash
cat /home/<user>/.ssh/deploy_key.pub
```

Follow the steps in the "Add an SSH key to your GitLab account" section of the [GitLab official documentation](https://docs.gitlab.com/ee/user/ssh.html#add-an-ssh-key-to-your-gitlab-account){.external} to add your public key to your GitLab account.

#### Configure SSH access to GitLab on the VPS

To ensure that GitLab uses the generated private key to establish a secure SSH connection, configure the `~/.ssh/config` file. This step facilitates subsequent commands by eliminating the need to manually specify the private key each time you interact with GitLab.

On your VPS, create or modify the file `~/.ssh/config`:

```bash
nano ~/.ssh/config
```

Add this configuration for access to GitLab:

```console
Host gitlab.com
    HostName gitlab.com
    User git
    IdentityFile /home/<user>/.ssh/deploy_key
```

Save and exit the editor.

Test the SSH connection with GitLab:

```bash
ssh -T git@gitlab.com
```

The following message should appear:

```console
Welcome to GitLab, <username>!
```

### Add the private key to GitLab <a name="add-private-key-gitlab"></a>

Copy the content of the generated private key to your VPS with:

```bash
cat /home/<user>/.ssh/deploy_key
```

To add the SSH private key as a CI/CD variable, see the [official GitLab documentation](https://docs.gitlab.com/ee/ci/jobs/ssh_keys.html){.external}.

### Configure GitLab CI/CD for automatic deployment <a name="configure-gitlab-ci-cd"></a>

#### Create a `.gitlab-ci.yml` file for the pipeline

1\. In your local GitLab project, create a `.gitlab-ci.yml` file at the root:

```bash
nano .gitlab-ci.yml
```

2\. Add the following configuration to the file to automatically deploy your website:

```yaml
stages:
  - deploy

deploy:
  stage: deploy
  image: debian:bullseye
  before_script:
    - apt-get update && apt-get install -y rsync openssh-client
    - mkdir -p ~/.ssh
    - echo "$DEPLOY_PRIVATE_KEY" > ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa
    - ssh-keyscan -H <VPS_IP> >> ~/.ssh/known_hosts
  script:
    - rsync -avz --delete ./ <user>@<VPS_IP>:/var/www/html/
  only:
    - main
```

Replace:

- `<VPS_IP>` by your VPS IP address
- `<user>` by the SSH user configured on your VPS

3\. Add the file, commit it then push the changes to the remote repository:

```bash
git add .gitlab-ci.yml
git commit -m "Add GitLab CI/CD pipeline configuration"
git push origin main
```

### Check and test the pipeline <a name="test-pipeline"></a>

#### Check execution of the first pipeline

Go to the `Build > Pipelines` tab in the side menu of GitLab to check that your first pipeline ran successfully.

If an error occurs, click on the failed pipeline to view the logs.

#### **Insufficient permissions**

During the first deployment, errors can occur concerning permissions (`Permission denied (13)`, `rsync: failed to set times`, etc.)

1\. Ensure that the user has the required permissions

Ensure that the SSH user configured on your VPS has write permissions to the entire Git directory (`/var/www/html`) and its subdirectories:

```bash
sudo chown -R <user>:www-data /var/www/html
sudo chmod -R 775 /var/www/html
```

2\. Test locally with rsync

Before relaunching the GitLab pipeline, test the `rsync` command manually from your local machine. This will allow you to confirm that the permissions are correctly configured:

```bash
rsync -avz --no-times --exclude='.git*' -e "ssh -i ./deploy_key -o StrictHostKeyChecking=no" ./ <user>@<VPS_IP>:/var/www/html/
```

If this command succeeds, then restart the pipeline on GitLab.

### Conclusion <a name="conclusion"></a>

By following this guide, you have set up an automatic deployment pipeline between your GitLab project and your OVHcloud VPS using GitLab CI/CD. This workflow streamlines website updates, eliminating time-consuming manual deployments.

## Go further <a name="go-further"></a>

[Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

[Secure a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).