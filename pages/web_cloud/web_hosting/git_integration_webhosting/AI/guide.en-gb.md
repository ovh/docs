35 71 

Click on the tabs below to display each of the **5** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Associate Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Step 5**
>>
>> The Git association form appears. Several items must be configured:
>>
>> - GitHub Repository
>> - GitHub Repository Branch
>> - SSH Key (for a private GitHub repository)
>> - Webhook (optional)
>>
>> Continue reading this guide to get the necessary information to complete the required fields.

167

After submitting the Git association form, you are redirected to the `My Websites`{.action} tab page.

177 179

You can also follow the progress of Git activation from the `My Websites`{.action} tab. In the `Git`{.action} column of the table, the `In progress`{.action} message on the line of the relevant website indicates that Git is being activated.

When Git association is completed, the `Enabled`{.action} status appears in the `Git`{.action} column for the relevant website.

185

In the table of the `My Websites`{.action} tab, identify the rows corresponding to the website directory you want to associate with Git. In the `Git` column, if the `Error` message appears, it means that at least one of the following errors has occurred:

192 196

To find out the exact cause of the error, check the information of the last deployment. In the table, click on the `⁝`{.action} button to the right of the relevant website, then on `Information of the last deployment`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Once the error(s) has been identified, associate Git again. Repeat the operation by clicking on the `⁝`{.action} button to the right of the relevant website, then on `Associate Git`{.action}.

200 235

Click on the tabs below to display each of the **5** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Deploy Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 5**
>>
>> A confirmation message appears, as well as a checkbox indicating that in case of a conflict during deployment, you can force the remote changes (from the GitHub repository) over your local repository. Check or uncheck the box according to your choice, then click on `Confirm`{.action} to validate the deployment.
>>
>> > [!warning]
>> >
>> > To avoid losing your local changes, remember to save them before overwriting them with the changes from the remote branch.
>>
>> The new version of your website has been successfully deployed on your OVHcloud web hosting. If other people are working on the same project and making changes to the GitHub repository, you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed on your web hosting. This avoids having to deploy Git manually, and your website will always be up to date.

239 294

Click on the tabs below to display each of the **5** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `>`{.action} button to the left of the name of the relevant website to display the associated domain names or subdomains.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Then click on the `⁝`{.action} button to the right of the relevant domain name or subdomain, then on `Edit domain`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Step 5**
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

298 347

Click on the tabs below to display each of the **5** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `>`{.action} button to the left of the name of the relevant website to display the associated domain names or subdomains.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Then click on the `⁝`{.action} button to the right of the relevant domain name or subdomain, then on `Detach domain`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Step 5**
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

351 385

Click on the tabs below to display each of the **5** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Configure Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 5**
>>
>> The following information appears:
>>
>> - SSH Key: If you have not already done so, [register your SSH key in your GitHub account](#linkSSHKey).
>> - Repository: Address of your Git repository. This field is greyed out as you cannot modify the Git repository address. To change the Git repository URL, you must [remove the Git association from your directory](#deleteGitAssociation) and then [re-associate the directory with Git](#associateGitRepo).
>> - Branch: Name of the GitHub repository branch. You can modify this field if needed.
>> - Webhook URL: If you want to optimise your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

391 418

Click on the tabs below to display each of the **4** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Information of the last deployment`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Find all the information related to the last deployment on this screen.

422 467

Click on the tabs below to display each of the **5** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Delete Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 5**
>>
>> The following window appears:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> The message informs you that the deletion will apply to all domain names attached to your website. Check the box `Do you want to empty the content of the directory <your_directory>`{.action} if you also want to delete the content (folders and files) of the directory.
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

477 506

Click on the tabs below to display each of the **5** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Hosting`{.action} menu, then choose the relevant web hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that appears, click on the `My Websites`{.action} tab.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table that appears, click on the `⁝`{.action} button to the right of the relevant website, then on `Configure Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Step 5**
>>
>> At the bottom of the form that appears, copy the address contained in the `Webhook URL`{.action} field. You must now register the URL and configure the webhook on your GitHub account.