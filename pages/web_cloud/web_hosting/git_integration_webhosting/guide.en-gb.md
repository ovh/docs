---
title: "Configuring and using Git with an OVHcloud web hosting plan"
excerpt: "Find out how to configure and use Git with your web hosting plan in the OVHcloud Control Panel"
updated: 2024-07-17
flag: hidden
---

> [!alert]
>
> The Git feature on an OVHcloud web hosting plan is not yet available. This guide will be updated when the feature is made available to the public.

## Objective

In today’s digital landscape, companies are becoming increasingly dynamic and innovative. The ability to effectively manage and deploy your website’s code is vital to maintaining your brand’s competitiveness and sustainability. Git, the most widely used version control system in the world, allows you to store your website's code on platforms like GitHub, allowing for better change traceability, as well as faster automation and deployments. As an OVHcloud customer, you benefit from a robust infrastructure to host your website, while leveraging the many benefits of Git and GitHub for website development and scalability.

**Find out how to configure and use Git with your web hosting plan via the OVHcloud Control Panel.**

## Requirements

- An [OVHcloud Web Hosting](/links/web/hosting) plan.
- Be login to your [OVHcloud Control Panel](/links/manager), in the Web Cloud section.
- You must have an account [GitHub](https://github.com/){.external} and be logged in.

## Instructions

> [!primary]
>
> To associate and configure Git, you will need to make changes to your GitHub account. Before starting the guide, log in to your GitHub account.
>

### Associate a directory with Git <a name="associateGitRepo"></a>

> [!warning]
>
> When you associate a directory with Git, all domain names in that directory will also be associated with Git. For example, if the directory corresponding to the website you are associating with is `www`, then all domain names associated with the `www` directory will also be associated with Git.
>

Log in to your [OVHcloud Control Panel](/links/manager) and perform the following actions:

- Go to the `Web Cloud`{.action} tab.
- Select your web hosting plan in the `Hosting plans`{.action} section on the left.
- Click on the `Multisite`{.action} tab.
- In the table that pops up, identify the row corresponding to the directory you want to associate with Git.
- Click on the button `...`{.action} then select `Associate Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/associate-git.png){.thumbnail}

The Git association form is displayed. There are several elements that need to be configured:

- SSH key
- GitHub repository
- GitHub repository branch
- Webhook (optional)

#### Attach an SSH key to GitHub <a name="linkSSHKey"></a>

> [!primary]
>
> Generating an SSH key is a crucial step, as it establishes a secure and encrypted connection between your website’s directory and the GitHub repository. This key ensures that data transfers and code changes are done in a secure and authenticated manner, preventing unauthorized access and ensuring code integrity.
>

Copy and save the SSH key to your GitHub account. This way, you can establish a secure connection without having to enter a password each time you perform a Git operation.

- Log in to your GitHub account.
- Click on your profile picture in the top right-hand corner, then on `Settings`{.action}.
- On the new page, click `SSH and GPG keys`{.action} in the left-hand column.
- Select `New SSH key`{.action} or `Add SSH key`{.action}.

The form for adding a new SSH key will open:

- **Title** : add a description for your SSH key. For example, you can name this key “OVHcloud”.
- **Type of key**: leave the default value `authentication key`{.action}
- **Key**: Paste your SSH key.

To confirm the information, click `Add SSH key`{.action}. If prompted, confirm access to your account in GitHub.

#### Set GitHub repository

Return to the Git association form in the OVHcloud Control Panel. You must enter the address of your GitHub repository. If you don't have a GitHub repository for your project yet, create one.

To create a new repository:

- Log in to your GitHub account.
- Click on your profile picture in the top right-hand corner, then on `Your repositories`{.action}.
- On the right of the screen that appears, click `New`{.action}.

Define a name for your deposit and fill in the requested information.

> [!warning]
>
> Tick the option `Add a README file` for GitHub to correctly initialize your repository.
>

Finally, click `Create Repository`{.action}.

Copy the address of your GitHub repository. It must be of the form `https://github.com/<username>/<repository_name>`{.action}. Return to the Git association form and paste the address of your GitHub repository into the `Repository`{.action} field. If the address format is not correct, the following error message appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Now define the branch of your GitHub repository. The default branch is `main`, but if you want to use another branch, create one on GitHub by following the steps below:

- Log in to your GitHub account.
- Click on your profile picture in the top right-hand corner, then on `Your repositories`{.action}.
- Go to the relevant GitHub repository.
- Click `Main`{.action}, then `View all branches`{.action}, or directly click `x Branch`{.action}.
- To the right of the screen that appears, click `New branch`{.action}.
- Enter the name of the new branch and confirm by clicking `Create new branch`{.action}.

Go back to the Git association form in the OVHcloud Control Panel, and enter the name of the new branch you have just created.

#### Configure automatic deployment

At the bottom of the Git association form, a `Configuring automatic deployment`{.action} section will appear, along with the webhook URL. By configuring a webhook, your GitHub repository can automatically notify your OVHcloud web hosting plan of events that occur on the GitHub repository (new deployment, changes in code, etc.). This feature is especially useful if you work as a group on the same project and want to stay up to date with all changes in the GitHub repository. To learn more, learn how to [configure a webhook on GitHub](#configureWebhook).

#### Validate Git association

Before validating the Git association form, make sure that:

- Your SSH key has been saved in your GitHub account.
- The address of your GitHub repository is correct. It must be of the form `https://github.com/<username>/<repository_name>`{.action}.
- The name of the GitHub repository branch is correct.
- Your installation directory is empty.

To validate the information in the Git association form, click `Apply configuration`{.action}.

### Enabling Git association

#### Successful association of Git

After validating the Git association form, you are redirected to the Multisite tab.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

A green banner will show you that Git is being enabled. Follow the activation of Git by clicking on the `Ongoing tasks`{.action} link.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

The status `Running`{.action} indicates that the Git association is in progress. The process may take several minutes. When the task is complete, the status `Enabled`{.action} is displayed.

You can also track the progress of Git activation from the `Multisite`{.action} tab. In the table, identify the rows that correspond to the directory you want to associate with Git. For each of the rows concerned, in the `Git`{.action} column, the phrase `Ongoing`{.action} tells you that Git is being enabled.

When the Git association is complete, the status `Enabled`{.action} appears in the `Git`{.action} column for the rows concerned.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Git association errors

In the table in the `Multisite`{.action} tab, identify the rows corresponding to the directory you want to associate with Git. In the `Git` column, if the word `Error` appears, this means that at least one of the following errors has occurred:

- The SSH key has not been saved in your GitHub account.
- The installation directory is not empty.
- The GitHub repository address does not exist or is incorrect.
- The branch of the GitHub repository does not exist or its name is incorrect.

For the exact cause of the error, see the information from the last deployment. In the table, identify the row corresponding to the domain name for which you want to view the logs for the last deployment. To the right of the line, click on the `...`{.action} button, then on `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Once you have identified the error(s), associate Git again. Retry the operation by clicking on the `...`{.action} button on the corresponding line, then on `Associate Git`{.action}.

### Deploy your GitHub repository on your OVHcloud web hosting plan

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that pops up, identify the row for the domain name that you want to deploy with Git. Ensure that the status of the Git column is `Enabled`{.action}. Click the `...`{.action} button, then `Deploy Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

A confirmation message appears, along with a check box telling you that if there is a conflict during deployment, you can force remote (GitHub repository) changes on your local repository. Tick or untick the box depending on your choice, then click `Confirm`{.action} to validate the deployment.

> [!warning]
>
> To avoid losing your local changes, remember to save them before overwriting them with changes from the remote branch.
>

The new version of your website has been deployed on your OVHcloud hosting plan. If other people are working on the same project and they make changes on the GitHub repository, then you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed to your web hosting plan. This avoids having to deploy Git manually, and your web hosting plan will always be up-to-date.

### Modify a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row for the domain you want to modify. Click the `...`{.action} button, then `Modify the domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modify the information of your choice and click `Next`{.action}.

A second confirmation window will appear, with a summary of your changes.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Click `Confirm`{.action} to confirm your domain name changes.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before changing your domain name.

### Detach a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that pops up, identify the line corresponding to the domain that you want to detach from your OVHcloud web hosting plan. Click the `...`{.action} button, then `Detach domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window will appear.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Click `Confirm`{.action} to confirm the detachment of your domain name.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before detaching your domain name.

### Configure Git

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row corresponding to the directory you want to configure with Git. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

The following information is displayed:

- SSH key: if you have not already done so, [save your SSH key in your GitHub account](#linkSSHKey).
- Deposit: address of your Git deposit. This field is grayed out because you cannot change the address of the Git repository. To change the Git repository URL, you must [remove Git association from your directory](#deleteGitAssociation) and then [associate directory to Git](#associateGitRepo) again.
- Branch: name of the branch of the GitHub repository. You can edit this field.
- Webhook URL: If you want to optimize your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

### Latest deployment information

Once you have deployed your GitHub repository on your web hosting plan, you can view information on the latest deployment, such as errors, tests and any useful information. 

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that pops up, identify the row for the domain whose logs you want to view from the last deployment. To the right of the line, click the `...`{.action} button, then `information on the last deployment`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

On this screen, you can view all the information related to the latest deployment.

### Delete Git <a name="deleteGitAssociation"></a> association

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row corresponding to the directory whose association with Git you want to remove. Click the `...`{.action} button, then `Delete Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

The message informs you that the deletion will apply to all domain names attached to your directory. Tick the `Do you want to empty the contents of the <your_directory>`{.action} directory if you also want to delete the contents (folders and files) of the directory.

1\.	If you select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory, as well as its contents.

2\.	If you do not select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory.

### Configure a webhook on GitHub

#### Retrieve the webhook URL

> [!primary]
>
> If you are already in the Git association form, copy the webhook URL and go to the step “[Configure the webhook](#configureWebhook)”.
>

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row that corresponds to the directory where you want to configure a webhook. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

At the bottom of the form that opens, identify the address of the `Webhook URL`{.action} field, and copy it. You will now need to save the URL and configure the webhook on your GitHub account.

#### Configure the <a name="configureWebhook"></a> webhook

Log in to your GitHub account, and go to the repository where you want to configure the webhook. Go to the `Settings`{.action} tab, then in the settings side menu, click `Webhooks`{.action}. Click the `Add webhook`{.action} button to access the form:

- **Payload URL**: Enter the URL provided in the Git association form (`Webhook URL`{.action}).
- **Content type**: choose `application/json`{.action} as the content type for the data sent.
- **Secret**: the secret is optional. GitHub will use it to sign messages sent by the webhook, enhancing security.
- **SSL verification**: If your website supports HTTPS, leave this option enabled for increased security.
- **Which events would you like to trigger this webhook?**: select the events that will trigger the webhook to be sent. For automatic deployment, `Just the push event`{.action} is often enough, but you can choose `Send me everything`{.action} to receive notifications for all events.
- **Active**: make sure that the box is ticked to enable the webhook.

Click `Add webhook`{.action} to save and activate your new webhook.

#### Test your webhook

Once you have created your webhook in GitHub, go to the list of your webhooks and select the one you have just created, or click `Edit`{.action}.

On the screen that pops up, click on the `Recent Deliveries`{.action} tab. To send a test event specifically, GitHub usually sends a `ping` event when creating the webhook, and you can use the `Redeliver`{.action} button next to this event to test it.

If the test has worked, the `Response`{.action} tab returns a code of 200. If an error code is returned (usually 500 or 400), this means that your webhook has been misconfigured. Return to the form for adding a webhook, and check the information, specifically the webhook URL provided by OVHcloud.

#### Use the webhook

Once your webhook has been set up, your website’s code will be updated automatically whenever changes occur on the GitHub repository. For example, if changes are made by one of your colleagues on the GitHub repository, then your website code will be updated locally (on your OVHcloud hosting plan).

### Conclusion

You have just linked your website code with Git, via your GitHub repository. You can now deploy the changes made on the GitHub repository to your web hosting plan, or deploy them in an automated way using the webhook. You can also view your deployment logs and perform multiple actions in just a few clicks via the OVHcloud Control Panel.

## Go further

[Putting a website online on your web hosting plan](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).