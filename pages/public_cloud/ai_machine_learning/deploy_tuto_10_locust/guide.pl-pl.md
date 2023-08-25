---
title: AI Deploy - Tutorial - How to load test your application with Locust
routes:
    canonical: '/pages/public_cloud/ai_machine_learning/deploy_tuto_10_locust'
excerpt: Understand how you can easily benchmark your APIs and find their limits
updated: 2023-04-04
---


> [!primary]
>
> AI Deploy is covered by **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

The aim of this tutorial is to load test your deployed applications, by gradually querying your APIs  with a load testing tool.
Usually, your challenge is to forecast your compute needs, for example how many CPUs or GPUs will be required for 1000 API calls per hour and acceptable latency.

There are several applications to simulate the amount of users and requests that you may have to address. 

In this tutorial, we will use one of them and interpret the results.

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- A [Public Cloud project](https://www.ovhcloud.com/pl/public-cloud/) in your OVHcloud account.
- An app with an API running in AI Deploy on your Public Cloud project.
- A python environment, with enough CPU and RAM and internet access (a virtual machine is recommended).

### Selecting the right load testing tool for your needs

Depending on your preferred programming language and time to spend on this topic, you can opt for different options.

First you can go for a SaaS load tester, such as [Gatling.io](https://gatling.io/) or [K6.io](https://k6.io). Nothing to install, easy to start.

A second option is using open source load testing tools. Some tools are only command-line based, such as [hey](https://github.com/rakyll/hey) or [Wrk2](https://github.com/giltene/wrk2), others come with a web interface like [Locust](https://locust.io/). 

Selecting the right tool for the right test is mandatory. For the next parts, **we will select and use Locust**, allowing us to show visual graphs. 

## Instructions

### Deploy an app with a REST API

Feel free to deploy any app and API that you would like to load test, as long as you can query it via REST queries.

For this tutorial, we will load test a spam classifier API from the [AI Deploy app portfolio](/pages/public_cloud/ai_machine_learning/deploy_guide_05_app_portfolio).
This API takes sentences (emails) as input text, and outputs a spam probability score. 

You can deploy this API easily from the [OVHcloud control panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) or [OVHcloud CLI](/pages/public_cloud/ai_machine_learning/cli_10_howto_install_cli). A good strategy is to deploy with autoscaling, with minimum and maximum replicas. This way we will monitor the growth of used replicas.

Here is the CLI command used to deploy it, with autoscaling going from 1 to 5 replicas and a CPU threshold of 75%:

```console
ovhai app run --name spamclassifier --cpu 1 \
--auto-min-replicas 1 \
--auto-max-replicas 5 \
--auto-resource-type CPU \
--auto-resource-usage-threshold 75 \
priv-registry.gra.ai.cloud.ovh.net/ai-deploy-portfolio/fastapi-spam-classification
```

### Verify that your API is up and running with cURL

> [!primary]
> To be able to connect to your AI Deploy app, you have to [create a token](/pages/public_cloud/ai_machine_learning/cli_13_howto_app_token_cli) bearer for your OVHcloud AI user.
>

Once deployed, let's test first our API with a simple cURL command. Here is the command to try in a terminal:

```console 
curl -s -X POST \ 
"<api_url>/spam_detection_path \
-H "Authorization: Bearer <token>" \
-H "Content-Type: application/json" \
-d '{"message":"This is a test from my machine"}' | jq
```

Here is the result given by our call:

```console
{
  "label": "ham",
  "label_probability": 0.9875114695528484
}
```

A few explanations on the lines above:

- In the first line, we specify that we will use a POST method.
- We specify the url where the POST request will be executed. The `api_url` is the url of your API. It should be similar to: `https://baac2c13-2e69-4d0f-ae6b-dg9eff9be513.app.gra.ai.cloud.ovh.net/`. 
- We put the token to access our API, generated via the OVHcloud Control Panel or `ovhai` CLI. We specify it in the header of the request. If you want to know more about generation and use of tokens, you can follow [this tutorial](/pages/public_cloud/ai_machine_learning/deploy_guide_03_tokens).
- We specify that our body is in a JSON format.
- We put in our body the message we want to send to the spam classifier. In your case, the body could be different because it depends of the API. Our objective is that the spam classifier will send us the probability of each response. The last `| jq` instruction allows us to have a good display of the result in the terminal. 

We now have the confirmation that our API is up and running, let's try to load test it. 

We will simply simulate several curl commands. With the Locust tool, we can simulate several users and define a number of calls per minute to the API. This can be easily done with Locust's interface. But before using this interface, we need to launch Locust and configure the tool. This can be easily done with python.

### Install locust.io

Locust is an open source Python package that you can install with one line of code. Follow their [official documentation](https://docs.locust.io/en/stable/index.html):

```console
pip3 install locust
```

You can install it on your personal computer, but keep in mind that load testing tools will require four elements to **not become the bottleneck in your load test**:

- Enough compute (CPU).
- Enough memory (RAM).
- Low latency connectivity to your API.
- No "noisy neighbors", meaning no software installed that can compromise your results. Imagine your CPU power getting used by video rendering, it will bias your results.

For all these reasons, a **Public Cloud instance is recommended**, such as a medium-sized virtual machine. For this tutorial, we will use an OVHcloud B2-30 instance.

### Configure Locust

To configure the software, you need to create a file named `locustfile.py`. In this file, you can put the path where you want to make your request, the headers of your request, the type of the request (POST, GET, etc) and the body if you want to add a body to the request. 

A generic file will look like this:

```python
from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("/hello")
        self.client.get("/world")
```

For our API and our needs, the locust file will be slightly modified: 

```python
# Import the Locust dependencies
from locust import HttpUser, task

# Import general library from python
import os
import random

# Import lorem ipsum library to generate some random texts
from lorem_text import lorem

# Import dotenv to load the environments variables
from dotenv import load_dotenv
load_dotenv()

# Create a table with some lorem ipsum texts
messages = []

# Add 1000 random texts of 10 paragraphs each (simulate 1000 emails)
for i in range(1000):
    messages.append(lorem.paragraphs(10))

# Define the headers of the request. Token is stored as an environment variable here
headers = {
    "Authorization": "Bearer {os.getenv('TOKEN')}", "Content-Type": "application/json"}


class HelloWorldUser(HttpUser):
    # Definition of the first path where we do our post request
    @task
    def hello_world(self):
        # Define the body with the email choose randomly from the tab of all the emails
        body = {"message": random.choice(messages)}
        # Do the post request on the spam detection path
        self.client.post("/spam_detection_path",
                         headers=headers, json=body)
```

For your own needs, you will have to change the path, the headers and the body because these are parameters which change from one API to another. 

Once your `locustfile.py` is ready, open the Locust web interface on `<http://your_IP:8089>`. 

The web interface should look as below:

![image](images/locust.png){.thumbnail}

### Run your load tests

You now have your app running on OVHcloud, and Locust configured. Let's simulate some user calls.

From the web interface, fill in the amount of simultaneous users (API calls) and incremental step (spaw rate).

For this tutorial, we will add 480 users in total, and a spawn rate of 2 users added per second. We will simulate this for a duration of 4 minutes. We suppose that this case is for a rush on the API. Most of the times, we can assume that there aren't so many users on the platform. 

Launch the test.

### Interpret the results via Locust

At the end of the load test, you will see this quick summary: 

![image](images/result_locust.png){.thumbnail}

If we want to get more details about our test, we can see the graphs provided by Locust in the `charts` tab. Here is what we can see:

![image](images/locust_graphs.png){.thumbnail}

We deployed this API from 1 to 5 replicas, with 1 CPU for each of them, completed with auto-scaling. We can see that our API has been a bit overloaded. Indeed, with the graphics or with the quick summary, we can see some failures. These failures are due to server errors. We may suppose that we reached some hardware limits at some point, for example before scaling to a greater amount of replicas.

Also, we can see an increasing call latency over time. At the end, we can expect more than 3 seconds per call.

Result interpretation may depend of your needs and performance criterias. We can of course make a new test with more users to see the limits of our APIs, and put several tasks in the `locustfile.py`. 

One thing can not be seen here: OVHcloud backend scaling. We deployed our app with autoscaling, from 1 replica minimum to 5 replicas maximum.
Did we use them ? Were they useful and at maximum capacity?

Let's see the same results in details with the AI Deploy monitoring tool.

### Interpret the results with the AI Deploy Monitoring

Go in the OVHcloud Control Panel and get the detail of your deployed application. Click on the `Access Dashboards`{.action} button.

This dashboard is provided for free in AI Deploy, for each deployed application. All of the deployed apps are combined in a simple Grafana Dashboard.

You can select the deployed app at the top of this Grafana dashboard, as shown below: 

![image](images/general_dashboard.png){.thumbnail}

With this dashboard, you can see the percentage of CPU used in real time, the HTTP latency of your API, the autoscaling of the app, network bandwidth and more. 
Vertical blue bars show scaling events.

Here is the result for the CPU load, overall (all replicas combined): 

![image](images/cpu_spam.png){.thumbnail}

We can see that our app has scaled a few times and hasn't reach maximum capacity usage, thanks to autoscaling. Let's now take a look at the latency of our application:

![image](images/latency_spam.png){.thumbnail}

Here we see that the latency has increased gradually, since we have a spawn rate of two new users per second. API latency was stable with approximately 750ms then peaked to 1.5s. 

Again, interpretation will depend on your needs. Do we need to provide more CPU because the latency is too high? This question will vary depending on your customers need. For an anti-spam, adding 1 second is quite big for a company receiving thousands of mails per day, not so disturbing if it's a dozen per day. Let's now take a look at the scaling of our application:

![image](images/scaling_spam.png){.thumbnail}

We can see that the threshold has been capped at 75% for the autoscaling and this has been respected. On the 5 replicas provided to the application, 4 have been used. 

As a conclusion, both Locust and AI Deploy Monitoring are useful to interpret results but, more than tools, the most important thing is to define realistic workloads and performance criterias.

Last point : while Locust is measuring an end-to-end latency (from Locust virtual machine here, to the API model deployed), AI Deploy monitoring is only measuring backbone latency (from the query to the answer). That's why latency values are higher on Locust side, reaching 2.5 seconds. 

## Go further

Locust official documentation : [Locust.io](https://docs.locust.io/en/stable/)

Comparison of load testing tools : [Comparison of load testing tools](https://k6.io/blog/comparing-best-open-source-load-testing-tools/)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pl/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
