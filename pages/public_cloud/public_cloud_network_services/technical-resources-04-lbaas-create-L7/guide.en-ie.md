---
title: "How to create and manage Level 7 (L7) Policies and Rules for OVHcloud Public Cloud Load Balancers"
excerpt: "Learn how to configure and manage Level 7 (L7) Policies and Rules for OVHcloud Public Cloud Load Balancers"
updated: 2024-05-06
---

## Objective

Using L7 capabilities allows for intelligent traffic routing based on the content of HTTP/HTTPS requests, thereby enhancing the security, performance, and reliability of your applications.

**This guide explains how to configure and manage Level 7 (L7) policies and rules for Public Cloud Load Balancers in the OVHcloud environment.**

## Requirements

- An [active OVHcloud account](/links/manager)
- Understanding of the [Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer)
- An active [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project)
- A previously configured [Load Balancer](/pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service) within your OVHcloud project space

## Instructions

To configure your Load Balancer at OVHcloud, several management options are available. You don't need to use all of them, but it is necessary to choose at least one according to your preferences:

- **OVHcloud Control Panel:** Allows management via the graphical interface, ideal for those who prefer a visual and intuitive approach.
- **OpenStack CLI:** For command line management. More information on preparing your OpenStack API environment is available [here](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- **Horizon Interface:** Offers graphical management via OpenStack for users familiar with this platform. Additional details [here](/pages/public_cloud/compute/introducing_horizon).
- **Terraform:** Enables management via Infrastructure as Code, useful for automating and reproducing environments through code files. Information on the OVH provider for Terraform is available [here](https://registry.terraform.io/providers/ovh/ovh/latest/docs).

Each method offers specific advantages, allowing you to customize the management of your Load Balancer according to your needs and technical expertise.

### Key Concepts Detail

#### L7 Policies and Rules

- **L7 Policy:** A directive applied to a Load Balancer listener to control traffic based on specific criteria, such as URI, HTTP headers, or cookies. Possible actions include redirecting to a specific URL or server pool, or rejecting the request.

**The order of evaluation of L7 policies is important and is determined by the position parameter of each policy.**

Policies are evaluated in a specific order defined by the position attribute, where the first matching policy is the one whose action is followed. If multiple L7 policies are associated with a listener, the position parameter becomes crucial to determining the order of evaluation.

Reject policies (REJECT) take precedence over all others, followed by redirects to a URL (REDIRECT_TO_URL) and then redirects to a pool (REDIRECT_TO_POOL). If a matching policy is found, its action is executed.

If no policy matches, the request is directed to the listener's default pool, or a 503 error is returned if no default pool exists.

- **Main characteristics:**
    - **action**: The action to be performed (e.g. redirect, reject).
    - **redirect_http_code**: The HTTP code used during redirection.
    - **redirect_pool_id**: The ID of the server pool to redirect to.
    - **redirect_prefix**: The prefix to add to the URL during a redirection.
    - **redirect_url**: The specific URL to which to redirect.
- **Constraints:**
    - L7 policies only apply to `HTTP` or `TERMINATED_HTTPS` type listeners.

- **L7 Rule:** The underlying condition of an L7 policy, which defines the specific criteria for matching traffic, such as a URI or cookie match. Multiple rules can be associated with a policy, and all must match (AND logic) for the policy's action to be applied. To express a logical OR operation between rules, it is necessary to create multiple policies with the same action.

- **Main characteristics:**
    - **type**: The type of condition (e.g. HEADER, COOKIE, URI).
    - **compare_type**: The type of comparison (e.g. EQUAL_TO, STARTS_WITH).
    - **value**: The value to compare.
    - **key**: The specific key to compare, if applicable.

### Examples of L7 Policy and L7 Rules

- **L7 Policy Example:**
    - **Action**: Redirect
    - **redirect_url**: `https://example.com/newpath`
    - **redirect_http_code**: 302

- **Associated L7 Rule:**
    - **Type**: URI
    - **compare_type**: STARTS_WITH
    - **value**: `/oldpath`

This example demonstrates how to redirect traffic from `/oldpath` to `https://example.com/newpath` with a HTTP 302 redirect code when the URI starts with `/oldpath`.

### Tips for Configuring L7 Rules

- **Test each rule individually**: Before combining multiple rules, ensure that each rule functions as intended by testing it in various scenarios.
- **Document your rules**: Keep a record of the logic behind each rule to facilitate future modifications or to help new administrators understand the setup.
- **Monitor the impact of rules**: After activating the rules, monitor the traffic behavior to ensure that they are working as expected without blocking legitimate traffic.

### Configuration via the OVHcloud Control Panel

Configuring L7 policies and rules via the OVHcloud customer space allows you to manage your Load Balancer in an intuitive and graphical manner. Here are the detailed steps to follow:

#### Step 1: Access the OVHcloud Control Panel

Go to the [OVHcloud website](/links/manager) and log in with your credentials. Once logged in, you will have an overview of all your OVHcloud services.

#### Step 2: Navigate to the Load Balancer

Click on the `Public Cloud`{.action} tab. Select the desired Public Cloud project if you have multiple.

Select `Load Balancer`{.action} in the `Network`section or use the quick search function. You will see a list of your Load Balancers. Click on the one you wish to configure.

#### Step 3: Manage L7 Policies

After selecting your Load Balancer, you will access its management interface. Find and click on the `Listeners`{.action} tab to display the list of listeners.

To access the management options for L7 policies of a specific listener, click  the `...`{.action} button to the right of the listener you want to configure.

Select the `View L7 policies`{.action} option from the dropdown menu.

![Schema 1](images/Policy9.png){.thumbnail}

> [!warning]
> The management of L7 policies is only available for listeners using the `HTTP` and `TERMINATED HTTPS` protocols. Ensure your listener uses one of these protocols before attempting to access these settings.

Once in the L7 policies section, you can view existing policies or click on `Add an L7 policy`{.action} to create a new policy, depending on the options available in the interface.

![Schema 1](images/Policy10.png){.thumbnail}

##### Filling out the form to create an L7 policy

- **Name:** Assign a unique name to your policy for easy identification.
- **Position:** Specify the policy's position in the order of evaluation. Positions start at 1 and determine the order in which policies are evaluated.
- **Action:** Select the action that the policy should execute when the conditions are met. The options include:
    - `REDIRECT_TO_URL`: Redirects requests to a specified URL. You will need to provide the redirect URL and select the HTTP response code (e.g. 301, 302, 303, 307, or 308).
    - `REDIRECT_TO_POOL`: Redirects requests to a specified server pool. A dropdown named `pool` will appear where you can choose your pool. Ensure you have pre-configured existing pools.
    - `REDIRECT_PREFIX`: Here, the Load Balancer adds a prefix to the URL received in the request. Fill in the `Prefix` field and choose the appropriate HTTP response code for the redirection.
    - `REJECT`: Rejects requests and returns the HTTP 403 (Forbidden) code.

![Schema 1](images/Policy11.png){.thumbnail}

After filling in all the necessary fields, click on `Add`{.action} to create your L7 policy.

![Schema 1](images/Policy4.png){.thumbnail}

#### Step 4: Adding Specific Rules to an L7 Policy

After creating an L7 policy, you can add rules to specify the conditions under which this policy should activate. Here are the steps to add L7 rules to an existing policy:

1\. **Accessing L7 Policy Options**:

On the L7 policies page of your listener, locate the policy to which you want to add rules. Click the `...`{.action} button next to the relevant policy and select `Manage L7 rules`{.action}.

![Schema 1](images/Policy5.png){.thumbnail}

2\. **Add a New L7 Rule**:

On the L7 rules page, click the `Add an L7 rule`{.action} button.

![Schema 1](images/Policy6.png){.thumbnail}

An L7 rule is a logical test that returns "True" or "False" statuses. To trigger the policy's action, all rules must return "True".

3\. **Configuring the L7 Rule**:

- **Type of L7 Rule**: Select the type of rule you want to create (e.g. Cookie, Header, Host name, Path, etc.).
- **Comparison Type**: Choose how you want to compare the data (Regex, starts with, ends with, contains, equal to).
- **Key**: For certain types of rules like Cookie or Header, specify the key to evaluate.
- **Value**: Indicate the value used by the comparison type.
- **Invert**: Optionally, you can invert the rule's logic so that when the condition is "True", the rule's logic is considered "False" and vice versa.

4\. **Available Types of L7 Rules**:

- **Cookie**: Inspects cookies in requests to identify specific criteria.
- **Header**: Analyzes HTTP headers to detect defined values.
- **Host Name**: Compares the host name of the request to a specific value.
- **Path**: Examines the URI path to find specific matches.
- **SSL Conn Has Cert**: Checks if an SSL connection has a certificate.
- **SSL Verify Result**: Assesses the result of SSL certificate validation.
- **File Type**: Analyzes the file type in the URI to identify specific extensions.
- **SSL BN Field**: Examines SSL certificate name fields for specific matches.

![Schema 1](images/Policy7.png){.thumbnail}

5\. **Saving the Rule**:

Once all fields are filled in according to your criteria, click `Add`{.action} to save the rule to your L7 policy.

![Schema 1](images/Policy8.png){.thumbnail}

### Using the OpenStack CLI and Horizon

The OpenStack CLI and Horizon graphical interface offer alternatives to the OVHcloud Control Panel for managing L7 policies and rules.

- **CLI (Command Line Interface)**: Ideal for those who prefer a scriptable and rapid approach to configuration management.
- **Horizon (Graphical Interface)**: Perfect for those who favor an intuitive visual interface for navigation and configuration management. Horizon is particularly useful for users less familiar with command line operations.

Whether you choose the CLI for its speed and flexibility in scripting, or Horizon for its ease of use and intuitive graphical interface, these tools significantly enhance your ability to finely manage incoming traffic on your applications deployed at OVHcloud.

#### Using the OpenStack CLI

The OpenStack CLI allows you to manage your cloud resources via commands executed in your terminal. To create L7 policies on your Load Balancers, follow these instructions:

1\. **Open your terminal**

Ensure that your CLI environment is configured with the correct credentials.

2\. **List the available listeners**

Use the following command to obtain the list of listeners for your Load Balancer:

```bash
openstack loadbalancer listener list
```

3\. **Create an L7 Policy**:

After identifying the appropriate listener, create an L7 policy using the following command. Replace `<LISTENER_ID>` with the ID of the listener where you want to add the policy:

```bash
openstack loadbalancer l7policy create --action REDIRECT_TO_POOL --redirect-pool <POOL_ID> --name <POLICY_NAME> --position 1 <LISTENER_ID>
```

4\. **Add an L7 Rule to the Policy**:


To add a rule to the policy you just created, use the following command. Adjust parameters such as `<POLICY_ID>`, `<TYPE>`, `<COMPARE_TYPE>`, `<VALUE>` according to your needs:

```bash
openstack loadbalancer l7rule create --type <TYPE> --compare-type <COMPARE_TYPE> --value '<VALUE>' <POLICY_ID>
```

- Examples of rule types include `PATH`, `HEADER`, `COOKIE`, etc. 
- Comparison types can be `REGEX`, `STARTS_WITH`, `ENDS_WITH`, `EQUAL_TO`, `CONTAINS`.

5\. **Verify the Creation of the Rule**:

To confirm that the rule has been correctly added to your L7 policy, you can list the rules associated with the policy:

```bash
openstack loadbalancer l7rule list <POLICY_ID>
```

By following these steps, you can effectively configure and manage L7 policies and rules for your Load Balancers using the OpenStack CLI, offering a flexible and powerful approach for advanced network traffic control.

Here is an example of the command output format:

```shell
| id       | default_pool_id | name                           | project_id | protocol | protocol_port | admin_state_up |
|----------|-----------------|--------------------------------|------------|----------|---------------|----------------|
| REDACTED | REDACTED        | LB_S_GRA9-154-360-listener-1   | REDACTED   | HTTP     | 80            | True           |
```

**Explanation of columns in the Listener list:**

| Column                | Details                                                                   |
|-----------------------|---------------------------------------------------------------------------|
| `id`                  | Unique identifier of the listener.                                        |
| `default_pool_id`     | ID of the default pool (where the listener sends traffic by default).     |
| `name`                | Name of the listener.                                                     |
| `project_id`          | ID of the project associated with this listener.                          |
| `protocol`            | The protocol used by the listener (e.g. HTTP, HTTPS).                     |
| `protocol_port`       | The port on which the listener listens.                                   |
| `admin_state_up`      | Indicates whether the listener is enabled (`True`) or disabled (`False`). |


### Creating a New L7 Policy

Use the following command to create a new L7 policy, replacing `mon-listener-id` with your listener's ID and `https://example.com` with the desired redirect URL:

```bash
openstack loadbalancer l7policy create \
  --name ma-politique-l7 \
  --listener mon-listener-id \
  --action REDIRECT_TO_URL \
  --redirect-url https://example.com
```
#### Management via Horizon

Horizon, the OpenStack web interface, offers a graphical view on the configuration of your cloud resources, including Load Balancers and L7 policies.

There are two ways to access the Horizon interface:

- To log in with OVHcloud Single Sign-On: Use the `Horizon`{.action} link in the left-hand menu under "Management Interfaces" after opening your `Public Cloud`{.action} project in the [OVHcloud Control Panel](/links/manager).

- To log in with a specific OpenStack user: Open the [Horizon login page](https://horizon.cloud.ovh.net/auth/login/) and enter the [OpenStack user credentials](/pages/public_cloud/compute/create_and_delete_a_user) previously created, then click on `Connect`{.action}.

In the Horizon dashboard, select your `Project`{.action}<br>
In the left menu, click on the `Network`{.action} tab and select `Load Balancers`{.action}.

##### Configuring L7 Policies

1\. **Access the Load Balancer**:

Navigate to the Load Balancer you wish to configure and click on it to access its details.

2\. **Managing Listeners**:

Find the listener to which you want to add L7 policies and click on it to access its details.

In the listener's details, locate and click on the `L7 policies`{.action} tab. This tab lists all existing policies.

To add a new policy, click the `Create L7 Policy`{.action} button.

3\. **Creating the L7 Policy**:

You will be guided through a form to define the following:

- **Policy Name**: Assign a unique name to the policy.
- **Action**: Choose the action that the policy should execute (e.g. REDIRECT_TO_URL, REDIRECT_TO_POOL, REJECT).
- **Specific Conditions**: Define any specific criteria that must be met for the policy to be activated.

4\. **Adding Rules to the Policy**:

Once the policy is created, to add specific rules to this policy, return to the L7 policy details screen.

Click on `Add Rule`{.action} to set up the rules that will determine the specific conditions under which the policy will apply.

You will be prompted to specify criteria such as the type of condition (URI, Header, Cookie), the type of comparison (EQUAL_TO, STARTS_WITH, etc.), and the values to compare.

### Automated Configuration with Terraform

Automated configuration with Terraform enables you to deploy and manage cloud resources declaratively, using configuration files in the HashiCorp Language (HCL) format. This simplifies the implementation of L7 policies for Load Balancers at OVHcloud. 

For more information on specific Terraform resources, consult the documentation for [L7 Policy](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/lb_l7policy_v2) and [L7 Rule](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/lb_l7rule_v2). Below is a more detailed example of configuring an L7 policy with Terraform.

#### Requirements

- **Installing Terraform**: Ensure you have Terraform installed on your machine. You can download the latest version of Terraform from the [official site](https://www.terraform.io/downloads.html).
- **Configuring the OpenStack Provider**: Configure Terraform to use the OpenStack provider. You will need to provide your OVHcloud API credentials to enable Terraform to interact with your Public Cloud project.

#### Configuration of an HTTPS Redirection Policy

The following example shows how to define a Terraform resource to create an L7 policy that redirects all HTTP requests to HTTPS:

```bash
# Define the OpenStack provider
provider "openstack" {
  auth_url    = "https://auth.cloud.ovh.net/v3"
  user_name   = "your_username"
  tenant_name = "your_project_name"
  password    = "your_password"
  region      = "your_region"
}

# Resource for the Load Balancer
resource "openstack_lb_loadbalancer_v2" "loadbalancer_1" {
  name          = "my-loadbalancer"
  vip_subnet_id = "your_subnet_id"
}

# Resource for the Listener
resource "openstack_lb_listener_v2" "listener_1" {
  name            = "my-listener"
  protocol        = "HTTP"
  protocol_port   = 80
  loadbalancer_id = openstack_lb_loadbalancer_v2.loadbalancer_1.id
}

# Resource for the L7 Policy
resource "openstack_lb_l7policy_v2" "l7policy_1" {
  name         = "https_redirect"
  action       = "REDIRECT_TO_URL"
  listener_id  = openstack_lb_listener_v2.listener_1.id
  redirect_url = "https://www.example.com"
}

# Resource for the L7 Rule
resource "openstack_lb_l7rule_v2" "l7rule_1" {
  l7policy_id   = openstack_lb_l7policy_v2.l7policy_1.id
  type          = "HOST_NAME"
  compare_type  = "REGEX"
  value         = ".*"
}
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
