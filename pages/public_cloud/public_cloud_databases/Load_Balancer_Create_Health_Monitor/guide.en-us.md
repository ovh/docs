---
title: How to create and manage a Health Monitor for OVHcloud Public Cloud Load Balancer
excerpt: Master the setup and management of a Health Monitor with OVHCloud Public Cloud Load Balancers via the OVHcloud interface, CLI, Horizon, and Terraform
updated: 2024-04-30
---

## Objective

Learn how to create and manage a Health Monitor for your OVHcloud Load Balancers using various interfaces such as the OVHcloud Control Panel, Command Line Interface (CLI), Horizon, and Terraform.

## Requirements

- An [active OVHcloud account](/links/manager)
- Understanding of the [Load Balancer concepts](/pages/public_cloud/public_cloud_network_services/concepts-03-loadbalancer)
- An active [Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project)
- A previously configured [Load Balancer](/pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service) within your OVHcloud project space

## Instructions

### Creating a Health Monitor

Health Monitors play a crucial role in managing the availability and performance of services hosted on infrastructures such as the OVHcloud Public Cloud. They perform regular checks on servers to ensure their ability to handle incoming requests. If a server fails to meet the established health criteria, it is temporarily removed from the pool, ensuring that traffic is directed only to functional servers.

### Types of Health Monitors and Configurations

Different types of Health Monitors cater to various specific needs:

#### HTTP/S

- Performs HTTP or HTTPS requests, ideal for checking the health status of web applications or REST APIs.

- **`url_path`**: Targeted path for the check, default is `/`.
- **`http_method`**: HTTP method used for the check, usually `GET`.
- **`expected_codes`**: Response codes indicating a healthy state, typically `200`.

#### PING

- Sends ICMP pings to test the network availability of a server.

#### TCP

- Attempts to establish a TCP connection to confirm the availability of a service listening on a given port, without data transfer.

#### TLS-HELLO

- Initiates an SSL/TLS negotiation with a "Client Hello" message, verifying the server's SSL/TLS response capability.

#### Uses and Key Points

- **HTTP/S** and **TLS-HELLO** checks are suited for secure contexts, especially when client certificate authentication is required.
- **PING** and **TCP** types are suitable for basic connectivity checks, without requiring specific server responses.

The precise configuration of Health Monitors, including the frequency of checks (`delay`), the maximum wait time for a response (`timeout`), and the number of attempts before marking a server as failing (`max_retries`), is essential for effectively balancing rapid problem detection while minimizing false alarms and reducing the load on monitored servers.

#### Key Configuration Options

- **`url_path`**: Specifies the path for HTTP/S requests, allowing targeting of specific endpoints for verification.
- **`http_method`**: Determines the HTTP method (GET, POST, HEAD) to use for HTTP/S checks.
- **`expected_codes`**: Configures the HTTP response codes considered valid, indicating the server is healthy.
- **`delay`**: Interval in seconds between each health check, allowing control over the frequency of tests.
- **`timeout`**: Maximum waiting time for a server response before considering it failing.
- **`max_retries`**: Number of failed verification attempts before a server is marked as failing.

### Best Practices for Configuring Health Monitors

Effectively setting up a Health Monitor is crucial for maintaining the high availability and performance of your online services. Here are best practices for optimizing your configuration:

#### Tips for HTTP Health Monitors

When configuring Health Monitors for web applications, keep the following tips in mind:

- **URL Path (`url_path`)**: Choose a lightweight and fast-loading path for health checks, ideally a page that does not require heavy processing or authentication.
  
- **HTTP Method (`http_method`)**: Use less resource-intensive methods, such as `HEAD` or `GET`, to minimize the impact on server performance.
  
- **Expected Response Codes (`expected_codes`)**: Configure the HTTP response codes that indicate a server is healthy, typically `200`.

#### Monitoring and Testing

- **Validation**: Test your configuration by simulating server failures to ensure that the Health Monitor responds as expected.

- **Monitoring**: Use OVHcloud monitoring tools to track the performance and health status of your Load Balancer and adjust the configuration as needed. See [Public Cloud Load Balancer monitoring with Prometheus](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus).

By integrating these best practices into your configuration process, you maximize the availability and performance of your hosted applications, while ensuring an optimal user experience.

#### Monitoring and Optimization

To maintain optimal performance, it is recommended to:

- Regularly monitor the health of your servers and the efficiency of your Load Balancer.
- Adjust the Health Monitor settings (delay, timeout, max-retries) as needed based on observed performance.
- Explore optimization strategies based on performance data and feedback.

### Configuring a Health Monitor through various OVHcloud Interfaces

Depending on the interface chosen, here are the steps to follow:

#### Configuring a Health Monitor via the OVHcloud Control Panel

**Setting up a Health Monitor on OVHcloud Load Balancer**

Follow these steps to add a Health Monitor to a pool of your OVHcloud Load Balancer, which will monitor the health status of the servers in the pool:

1\. Log in to the [OVHcloud Control Panel](/links/manager).
2\. Navigate to the `Public Cloud`{.action} section and select your project.
3\. Click on `Load Balancer`{.action} in the left menu and select the Load Balancer you want to configure.
4\. Go to the `Pools`{.action} tab, then click on the Pool for which you want to create a Health Monitor.

![Schema 1](images/healthM1.png){.thumbnail}

5\. Click on the `Health Monitors`{.action} tab within the Pool details, then on `Add a Health Monitor`{.action}.

![Schema 1](images/healthM2.png){.thumbnail}

- **General Information**:
  - **Name**: Must contain only letters, numbers, underscores, dashes, or dots.
  - **Type**: Select the type of Health Monitor (e.g. HTTP, HTTPS, TCP, TLS-hello).

- For **HTTP** and **HTTPS** types:
  - **URL PATH**: Specify the path used for the test.
  - **Expected Code**: Indicate the expected HTTP status codes, which can be a single digit, a list of digits separated by commas, or a range (two digits separated by a hyphen).

- **Test Settings**:
  - **Max Retries Down**: Number of connection failures allowed before marking the member as failing (between 1 and 10, default 3).
  - **Delay**: Interval between two tests of the Health Monitor (must be greater than the timeout).
  - **Max Retries**: Total number of connection failures allowed before marking the member as inactive (between 1 and 10).
  - **Timeout**: Duration after which a test stops (must be equal to or greater than the periodicity).

6\. Once all the information is filled in, click on `Add`{.action} to activate your Health Monitor.

![Schema 1](images/healthM3.png){.thumbnail}

This process creates a Health Monitor that will regularly perform health checks on each member of the pool, using the results to determine whether the member should receive new connections. Only one Health Monitor can be set for each pool.

#### CLI (OpenStack)

1\. Ensure the OpenStack CLI tool is installed and configured on your machine.
2\. Use the following command to create a Health Monitor:

```bash
   openstack loadbalancer healthmonitor create --delay 5 --max-retries 4 --timeout 3 --type HTTP --http-method GET --url-path /healthcheck --expected-codes 200 <POOL_ID>
```

Replace <POOL_ID> with the ID of your Pool.

3\. Confirm the creation of the Health Monitor by listing the Health Monitors associated with your Load Balancer using:

```bash
openstack loadbalancer healthmonitor list
```

#### Horizon (OpenStack)

There are two ways to access the Horizon interface:

- To log in with OVHcloud Single Sign-On: Use the `Horizon`{.action} link in the left-hand menu under "Management Interfaces" after opening your `Public Cloud`{.action} project in the [OVHcloud Control Panel](/links/manager).

- To log in with a specific OpenStack user: Open the [Horizon login page](https://horizon.cloud.ovh.net/auth/login/) and enter the [OpenStack user credentials](/pages/public_cloud/compute/create_and_delete_a_user) previously created, then click on `Connect`{.action}.

1. In the left menu, click on the `Network`{.action} tab and select `Load Balancers`{.action}.
2. Choose the Load Balancer you want to configure and click on the `Health Monitors`{.action} tab.
3. Click on `Create Health Monitor`{.action} and fill in the required fields such as `type`, `check interval`, `maximum retry count`, and `timeout`.
4. Confirm the creation by clicking on `Create`{.action}.

#### Terraform

Create a `.tf` file and define your Health Monitor as a resource. For example:

```hcl
resource "openstack_lb_monitor_v2" "monitor_1" {
  pool_id     = "<POOL_ID>"
  type        = "HTTP"
  delay       = 5
  timeout     = 3
  max_retries = 4
  url_path    = "/healthcheck"
  http_method = "GET"
  expected_codes = "200"
}
```

Replace `<POOL_ID>` with the ID of your Pool. For more details on the available options for this resource, refer to the [official documentation](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/lb_monitor_v2) for the `openstack_lb_monitor_v2` resource on the Terraform Registry.

**Applying the Configuration**

To apply your Terraform configuration:

- Run `terraform init` to initialize the Terraform working directory.
- Run `terraform apply` to apply the changes defined in your configuration.

**Verification**

After running `terraform apply`, Terraform will provide you with a summary of the resources created, modified, or deleted. This confirms the creation or update of your Health Monitor.

Each method offers specific advantages depending on your familiarity with the tools and your working environment. The choice of interface depends on your personal preferences and the technical requirements of your project.

## Go further
 
Join our community of users on <https://community.ovh.com/en/>.
