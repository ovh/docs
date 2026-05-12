---
title: "Configuring and using Git with an OVHcloud web hosting plan"
excerpt: "Find out how to configure and use Git with your web hosting plan in the OVHcloud Control Panel"
updated: 2026-05-04
---

## Objective

In today’s digital landscape, companies are becoming increasingly dynamic and innovative. The ability to effectively manage and deploy your website’s code is vital to maintaining your brand’s competitiveness and sustainability. Git, the most widely used version control system in the world, allows you to store your website's code on platforms like GitHub, allowing for better change traceability, as well as faster automation and deployments. As an OVHcloud customer, you benefit from a robust infrastructure to host your website, while leveraging the many benefits of Git and GitHub for website development and scalability.

**Find out how to configure and use Git with your web hosting plan via the OVHcloud Control Panel.**

## Requirements

- An [OVHcloud Web Hosting](/links/web/hosting) plan.
- A [GitHub](https://github.com/) account on which you must be logged in.

> [!primary]
>
> To date, only the GitHub platform is supported for use with OVHcloud Web Hosting services.

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

> [!primary]
>
> To associate and configure Git, you will need to make changes to your GitHub account. Before starting the guide, log in to your GitHub account.

### Associate a directory with Git <a name="associateGitRepo"></a>

> [!warning]
>
> When you associate a directory with Git, all domain names in that directory will also be associated with Git. For example, if the directory corresponding to the website you are associating with is `www`, then all domain names associated with the `www` directory will also be associated with Git.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Link Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Step 4**
>>
>> The Git association form appears. Several items must be configured:
>>
>> - GitHub Repository
>> - GitHub Repository Branch
>> - SSH Key (for a private GitHub repository)
>> - Webhook (optional)
>>
>> Continue reading this guide to get the necessary information to complete the required fields.

#### Set GitHub repository

Enter the address of your GitHub repository. If you don't have a GitHub repository for your project yet, create one.

To create a new repository:

- Log in to your GitHub account.
- Click on your profile picture in the top right-hand corner, then on `Your repositories`{.action}.
- On the right of the screen that appears, click `New`{.action}.

Define a name for your deposit and fill in the requested information.

> [!warning]
>
> Tick the option `Add a README file` for GitHub to correctly initialise your repository.

Finally, click `Create Repository`{.action}.

Copy the address of your GitHub repository. It must be of the form:

- `https://github.com/<username>/<repository_name>.git` for a public repository.
- `git@github.com:<username>/<repository_name>.git` for a private repository.

Return to the Git association form and paste the address of your GitHub repository into the `Deposit`{.action} field. If the address format is not correct, the following error message appears:

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-repository-name.png){.thumbnail}

Now define the branch of your GitHub repository. The default branch is `main`, but if you want to use another branch, create one on GitHub by following the steps below:

- Log in to your GitHub account.
- Click on your profile picture in the top right-hand corner, then on `Your repositories`{.action}.
- Go to the relevant GitHub repository.
- Click `Main`{.action}, then `View all branches`{.action}, or directly click `x Branch`{.action}.
- To the right of the screen that appears, click `New branch`{.action}.
- Enter the name of the new branch and confirm by clicking `Create new branch`{.action}.

Go back to the Git association form in the OVHcloud Control Panel, and enter the name of the new branch you have just created.

If you enter the address of a private GitHub repository (of type `git@github.com:<username>/<repository_name>.git`), an `SSH key` field will appear under the `Branch` field.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key.png){.thumbnail}

To configure your SSH key, please refer to the "Attach an SSH key to GitHub (only for private GitHub repositories)" step below.

#### Attach an SSH key to GitHub (only for private GitHub repositories) <a name="linkSSHKey"></a>

> [!primary]
>
> **Why is the SSH key required only for a private deposit?**
>
> When your GitHub repository is public, files can be retrieved without authentication, which means Git can clone and update code without the need for an SSH key. However, if your repository is private, GitHub requires authentication to access it. The SSH key can then be used to establish this secure connection and guarantee that only authorized users can interact with the repository.

> [!primary]
>
> Generating an SSH key is a crucial step, as it establishes a secure and encrypted connection between your website’s directory and the GitHub repository. This key ensures that data transfers and code changes are done in a secure and authenticated manner, preventing unauthorized access and ensuring code integrity.

Copy your SSH key by clicking on the button on the right.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key-copy.png){.thumbnail}

Save the SSH key to your GitHub account:

- Log in to your GitHub account.
- Click on your profile picture in the top right-hand corner, then on `Settings`{.action}.
- On the new page, click `SSH and GPG keys`{.action} in the left-hand column.
- Select `New SSH key`{.action} or `Add SSH key`{.action}.

The form for adding a new SSH key will open:

- **Title** : add a description for your SSH key. For example, you can name this key "OVHcloud".
- **Type of key**: leave the default value `authentication key`
- **Key**: Paste your SSH key.

To confirm the information, click `Add SSH key`{.action}. If prompted, confirm access to your account in GitHub.

#### Configure automatic deployment

At the bottom of the Git association form, a `Configuring automatic deployment`{.action} section will appear, along with the webhook URL. By configuring a webhook, your GitHub repository can automatically notify your OVHcloud web hosting plan of events that occur on the GitHub repository (new deployment, changes in code, etc.). This feature is especially useful if you work as a group on the same project and want to stay up to date with all changes in the GitHub repository. To learn more, learn how to [configure a webhook on GitHub](#configureWebhook).

#### Validate Git association

Before validating the Git association form, make sure that:

- Your SSH key has been saved in your GitHub account.
- The address of your GitHub repository is correct. It must be of the form `https://github.com/<username>/<repository_name>.git`.
- The name of the GitHub repository branch is correct.
- Your installation directory is empty.

To validate the information in the Git association form, click `Apply configuration`{.action}.

### Enabling Git association

#### Successful association of Git

After submitting the Git association form, you are redirected to the `My sites`{.action} tab page.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/git-activation-ongoing.png){.thumbnail}

A green banner will show you that Git is being enabled. Follow the activation of Git by clicking on the `Current tasks`{.action} link.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

The status `Running`{.action} indicates that the Git association is in progress. The process may take several minutes. When the task is complete, the status `Enabled`{.action} is displayed.

You can also follow the progress of Git activation from the `My sites`{.action} tab. In the `Git`{.action} column of the table, the `In progress`{.action} message on the line of the relevant website indicates that Git is being activated.

When Git association is completed, the `Enabled`{.action} status appears in the `Git`{.action} column for the relevant website.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Git association errors

In the table of the `My sites`{.action} tab, identify the rows corresponding to the website directory you want to associate with Git. In the `Git` column, if the `Error` message appears, it means that at least one of the following errors has occurred:

- The SSH key has not been saved in your GitHub account.
- The installation directory is not empty.
- The GitHub repository address does not exist or is incorrect.
- The branch of the GitHub repository does not exist or its name is incorrect.

To find out the exact cause of the error, check the information of the last deployment. In the table, click on the `⁝`{.action} button to the right of the relevant website, then on `Latest deployment information`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Once the error(s) has been identified, associate Git again. Repeat the operation by clicking on the `⁝`{.action} button to the right of the relevant website, then on `Link Git`{.action}.

### Deploy your GitHub repository on your OVHcloud web hosting plan

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Deploy Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 4**
>>
>> A confirmation message appears, as well as a checkbox indicating that in case of a conflict during deployment, you can force the remote changes (from the GitHub repository) over your local repository. Check or uncheck the box according to your choice, then click on `Confirm`{.action} to validate the deployment.
>>
>> > [!warning]
>> >
>> > To avoid losing your local changes, remember to save them before overwriting them with the changes from the remote branch.
>>
>> The new version of your website has been successfully deployed on your OVHcloud web hosting. If other people are working on the same project and making changes to the GitHub repository, you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed on your web hosting. This avoids having to deploy Git manually, and your website will always be up to date.

### Modify a domain name

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `>`{.action} button to the left of the name of the relevant website to display the associated domain names or subdomains.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Then click on the `⁝`{.action} button to the right of the relevant domain name or subdomain, then on `Modify domain`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Step 4**
>>
>> Two scenarios are possible:
>>
>> **1 - One or more other domain names are attached to the website**
>>
>> The following window appears:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Modify the information as needed and click on `Next`{.action}.
>>
>> A second confirmation window appears with a summary of your changes:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Click on `Confirm`{.action} to validate the changes to your domain name.
>>
>> **2 - Only one domain name is attached to the website**
>>
>> The following window appears:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> As the message indicates, [remove your Git association](#deleteGitAssociation) first before modifying your domain name.

### Detach a domain name

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `>`{.action} button to the left of the name of the relevant website to display the associated domain names or subdomains.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Then click on the `⁝`{.action} button to the right of the relevant domain name or subdomain, then on `Detach domain`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Step 4**
>>
>> Two scenarios are possible:
>>
>> **1 - One or more other domain names are attached to the website**
>>
>> The following window appears.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Click on `Confirm`{.action} to validate the detachment of your domain name.
>>
>> **2 - Only one domain name is attached to the website**
>>
>> The following window appears:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> As the message indicates, [remove your Git association](#deleteGitAssociation) first before detaching your domain name.

### Configure Git

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Configure Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 4**
>>
>> The following information appears:
>>
>> - SSH Key: If you have not already done so, [register your SSH key in your GitHub account](#linkSSHKey).
>> - Repository: Address of your Git repository. This field is greyed out as you cannot modify the Git repository address. To change the Git repository URL, you must [remove the Git association from your directory](#deleteGitAssociation) and then [re-associate the directory with Git](#associateGitRepo).
>> - Branch: Name of the GitHub repository branch. You can modify this field if needed.
>> - Webhook URL: If you want to optimise your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

### Latest deployment information

Once you have deployed your GitHub repository on your web hosting plan, you can view information on the latest deployment, such as errors, tests and any useful information. 

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Latest deployment information`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Find all the information related to the last deployment on this screen.

### Delete Git <a name="deleteGitAssociation"></a> association

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Delete Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 4**
>>
>> The following window appears:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> The message informs you that the deletion will apply to all domain names attached to your website. Check the box `Do you want to empty the contents of the <your_directory> directory?`{.action} if you also want to delete the content (folders and files) of the directory.
>>
>> 1\. If you check the box, the following window appears:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>>
>> Click on `Confirm`{.action} to validate the deletion of the Git association of your directory as well as its content.
>>
>> 2\. If you do not check the box, the following window appears:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>>
>> Click on `Confirm`{.action} to validate the deletion of the Git association of your directory.

### Configure a webhook on GitHub

#### Retrieve the webhook URL

> [!primary]
>
> If you are already in the Git association form, copy the webhook URL and go to the step “[Configure the webhook](#configureWebhook)”.

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>> 
>> On the page that pops up, click on the `My sites`{.action} tab.
>> 
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Step 3**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Configure Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 4**
>>
>> At the bottom of the form that appears, copy the address contained in the `Webhook URL`{.action} field. You must now register the URL and configure the webhook on your GitHub account.

#### Configure the <a name="configureWebhook"></a> webhook

Log in to your GitHub account, and go to the repository where you want to configure the webhook. Go to the `Settings`{.action} tab, then in the settings side menu, click `Webhooks`{.action}. Click the `Add webhook`{.action} button to access the form:

- **Payload URL**: Enter the URL provided in the Git association form (`Webhook URL`{.action}).
- **Content type**: Choose `application/json`{.action} as the content type for the data sent.
- **Secret**: The secret is optional. GitHub will use it to sign messages sent by the webhook, enhancing security.
- **SSL verification**: If your website supports HTTPS, leave this option enabled for increased security.
- **Which events would you like to trigger this webhook?**: Select the events that will trigger the webhook to be sent. For automatic deployment, `Just the push event`{.action} is often enough, but you can choose `Send me everything`{.action} to receive notifications for all events.
- **Active**: Make sure that the box is ticked to enable the webhook.

Click `Add webhook`{.action} to save and activate your new webhook.

#### Test your webhook

Once you have created your webhook in GitHub, go to the list of your webhooks and select the one you have just created, or click `Edit`{.action}.

On the screen that appears, click on the `Recent Deliveries`{.action} tab. To send a test event specifically, GitHub usually sends a `ping` event when creating the webhook, and you can use the `Redeliver`{.action} button next to this event to test it.

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
