---
title: "Automating the deployment of your website on your VPS via GitHub Actions (EN)"
excerpt: 'Find out how to deploy and automate your website’s code via GitHub Actions on an OVHcloud VPS'
updated: 2025-01-21
---

## Objective

Automating the deployment of your website on a VPS greatly simplifies the management of your updates. With GitHub Actions, you can configure an automatic deployment pipeline, avoiding manual deployments. This method ensures fast and reliable deployments, while reducing the risk of human errors. Whether you are a beginner or an experienced developer, this tutorial will help you set up a professional solution adapted to your needs.

**Find out how to automate the deployment of your web applications with GitHub Actions on an OVHcloud VPS.**

## Requirements

- A functional [VPS](/links/bare-metal/vps) in your OVHcloud account
- An active GitHub account
- A repository containing your website code (optional)
- A VPS configured with the necessary services (e.g. Apache/Nginx, PHP, DBMS, etc.)
- Administrative access to the VPS (via SSH)

> [!warning]
>
> If you need assistance, please read our guide on [Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) before reading this guide further.

## Instructions

> [!primary]
> To ensure that you meet the requirements, please read the guides [Installing a web development environment on a VPS or a dedicated server](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps) and [Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

**The main steps of the guide will be the following:**

- [Configure SSH access for GitHub Actions](#configure-ssh)
- [Add the private key to GitHub](#add-private-key-github)
- [Initialize the GitHub repository (optional)](#init-github-repo)
- [Configure GitHub Actions for Automatic Deployment](#configure-github-actions)
- [Check and test the GitHub Actions workflow](#verify-workflow-github)
- [Conclusion](#conclusion)

### Configure SSH access for GitHub Actions <a name="configure-ssh"></a>

If your website already exists, identify the path to the directory where it is hosted. For example, on an OVHcloud VPS, it can be `/var/www/html`. Keep this path in memory, so that you can use it when configuring the GitHub Actions pipeline.

To allow GitHub Actions to automatically deploy your website, configure secure SSH access to your VPS.

#### Create an SSH key pair

Log in to your VPS via SSH and generate a dedicated SSH key pair for GitHub Actions:

```bash
ssh-keygen -t rsa -b 4096 -C "github-actions" -f /home/<user>/.ssh/deploy_key
```

Replace `<user>` with the user configured to connect to your VPS.

Press `Enter` when a passphrase is requested (leaving the passphrase empty makes it easier to automate deployments with GitHub Actions. However, this requires securing the private key by limiting it to this use and storing it securely).

You get two files:

- `/home/<user>/.ssh/deploy_key`: private key
- `/home/<user>/.ssh/deploy_key.pub`: public key

#### Configure the public key on the VPS

To allow GitHub Actions to connect to your VPS via SSH and deploy your website’s code to it, add the generated public key to the list of authorized keys on the VPS.

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

3\. Test the SSH connection

Test the SSH connection with the private key to confirm that the access is functional:

```bash
ssh -i /home/<user>/.ssh/deploy_key <user>@<VPS_IP>
```

Replace `<user>` with the user configured to connect to your VPS and `<VPS_IP>` with your VPS IP.

#### Add the public key to GitHub

Once you have configured the public key on your VPS, add it to your GitHub account. Copy the content of the generated public key onto your VPS with:

```bash
cat /home/<user>/.ssh/deploy_key.pub
```

Follow the steps from the "Adding a new SSH key to your account" section of the [GitHub official documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#about-addition-of-ssh-keys-to-your-account) to add your public key to your GitHub account.

#### Configure SSH access to GitHub on the VPS

To ensure that GitHub uses the generated private key to establish a secure SSH connection, configure the `~/.ssh/config` file. This step facilitates subsequent commands by avoiding the need to manually specify the private key each time you interact with GitHub.

On your VPS, create or modify the file `~/.ssh/config`:

```bash
nano ~/.ssh/config
```

Add this configuration for GitHub access:

```console
Host github.com
    HostName github.com
    User git
    IdentityFile /home/<user>/.ssh/deploy_key
```

Save and exit the editor.

Test the SSH connection with GitHub:

```bash
ssh -T git@github.com
```

You should see a message like this:

```console
Hi <user-github>! You've successfully authenticated, but GitHub does not provide shell access.
```

### Add the private key to GitHub <a name="add-private-key-github"></a>

Copy the content of the generated private key to your VPS with:

```bash
cat /home/<user>/.ssh/deploy_key
```

To allow GitHub Actions to automatically connect to your VPS, add the private key in a secret repository on GitHub. This will allow GitHub to deploy your website via SSH. Follow the steps from the "Creating secrets for a repository" section of the [GitHub official documentation](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

### Initialize GitHub repository (optional) <a name="init-github-repo"></a>

> [!primary]
> If you already have a GitHub repository containing your website’s code, go to the [next step](#configure-github-actions).

#### Create a GitHub repository

To create a GitHub repository, follow the steps from the "Create a repository" page of the [GitHub official documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

#### Initialize the Git repository on the VPS

1\. Log in to your VPS via SSH:

```bash
ssh <user>@<VPS_IP>
```

2\. Install Git:

```bash
sudo apt update && sudo apt install git -y
```

3\. Initialize a Git repository in your website directory:

```bash
cd /var/www/html
sudo git init
sudo git remote add origin git@github.com:<github_user>/<repository_name>.git
```

Replace `<github_user>` with your GitHub username and `<repository_name>` with the name of your GitHub repository.

4\. Add the files and make a first commit:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### Configure GitHub Actions for automatic deployment <a name="configure-github-actions"></a>

Create and configure a workflow to automatically synchronize your website code between GitHub and the VPS.

#### Create the GitHub Actions workflow file

1\. Create a directory for workflows

On your VPS, create the directory `.github/workflows` in the folder containing your Git project (i.e. the directory containing your website’s code):

```bash
cd /var/www/html
mkdir -p .github/workflows
```

2\. Create a workflow file

Create a `deploy.yml` file in the `.github/workflows` directory:

```bash
nano .github/workflows/deploy.yml
```

3\. Configure the `deploy.yml` file

To configure the deployment pipeline, add the following content to the `deploy.yml` file:

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Copy files to VPS
      env:
        SSH_PRIVATE_KEY: ${{ secrets.DEPLOY_KEY }}
      run: |
        mkdir -p ~/.ssh
        echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        ssh-keyscan -H <VPS_IP> >> ~/.ssh/known_hosts
        rsync -avz --delete ./ <user>@<VPS_IP>:/var/www/html/
```

Replace the following:

- `<VPS_IP>`: by the IP address of your VPS.
- `<user>`: by the SSH user configured on your VPS.
- `DEPLOY_KEY`: by the secret name in your GitHub repository settings.

4\. Add the workflow file to the GitHub repository

Once the workflow file has been configured, add it to your Git repository and push it to GitHub:

```bash
git add .github/workflows/deploy.yml
git commit -m "Adding GitHub Actions workflow for deployment"
git push origin main
```

### Check and test the GitHub workflow Actions <a name="verify-workflow-github"></a>

#### Check the execution of the first workflow

Go to the `Actions` tab of your GitHub repository and check that your first workflow has run correctly.

If an error occurs, click the failed workflow to view the logs. Ensure that your private key is correctly added as a secret in your GitHub repository, and that your public key is added to the `.ssh/authorized_keys` file.

##### **Insufficient permissions**

During the first deployment, errors can occur concerning permissions (`Permission denied (13)`, `rsync: failed to set times`, etc.)

1\. Verify that the user has the necessary permissions

Ensure that the SSH user configured on your VPS has write permissions to the entire Git directory (`/var/www/html`) and its subdirectories:

```bash
sudo chown -R <user>:www-data /var/www/html
sudo chmod -R 775 /var/www/html
```

2\. Test locally with rsync

Before relaunching the GitHub Actions workflow, test the `rsync` command manually from your local machine. This will allow you to confirm that the permissions are correctly configured:

```bash
rsync -avz --no-times --exclude='.git*' -e "ssh -i ./deploy_key -o StrictHostKeyChecking=no" ./ <user>@<VPS_IP>:/var/www/html/
```

If this command succeeds, then restart the workflow on GitHub.

#### Trigger the Workflow with `git push`

When a `git push` is performed on the `main` branch (or any other branch specified in your `deploy.yml` file), the workflow executes the steps defined in the `deploy.yml` file:

- Cloning the GitHub repository in the GitHub Actions environment.
- Configuring the SSH key to connect to your VPS.
- Synchronize files from the GitHub repository to the directory `/var/www/html` on your VPS via `rsync`.

##### **Test the workflow**

1\. Clone the GitHub repository in a test directory on the VPS

Create a temporary directory on your VPS to simulate another user environment. For example:

```bash
mkdir /home/<user>/test-github-actions
cd /home/<user>/test-github-actions
```

2\. Clone the GitHub repository in this directory

```bash
git clone git@github.com:<github_user>/github-actions.git .
```

If your repository is already in HTTPS , update it to use SSH:

```bash
git remote set-url origin git@github.com:<github_user>/github-actions.git
```

3\. Make a change in the test repository

Add a new file or modify an existing file in the test directory and perform a `git push` to your GitHub repository:

```bash
echo "Test from VPS user number 2" >> testfile.txt
git add testfile.txt
git commit -m "Add a test from the VPS"
git push origin main
```

4\. Check the workflow execution on GitHub

Go to the `Actions` tab of your GitHub repository and check that the workflow was triggered automatically after the `git push`. If the workflow is successful, the changes will be synchronized in your website’s folder (`/var/www/html`).

5\. Confirm synchronization in `/var/www/html`

Return to your main deployment directory (`/var/www/html`) and check that the `testfile.txt` file is present:

```bash
ls /var/www/html
cat /var/www/html/testfile.txt
```

### Conclusion <a name="conclusion"></a>

By following this guide, you have set up an automatic deployment pipeline from your GitHub repository to your OVHcloud VPS using GitHub Actions. This workflow greatly optimizes the management of updates to your website, eliminating time-consuming manual deployments.

## Go further <a name="go-further"></a>

[Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

[Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).