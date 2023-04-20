---
title: Sending SMS messages with the OVHcloud API in PHP
excerpt: Find out how to send SMS messages with the OVHcloud RESTful API in PHP
legacy_guide_number: g1639
updated: 2020-06-25
---

**Last updated 25th June 2020**

## Objective

SMS messages are widely used to share practical information, track an order status or transactional process, send alerts regarding unusual events, and send appointment reminders. This guide details the method for sending a first SMS message via the OVHcloud API in PHP. 

**Find out how to send SMS messages with the OVHcloud RESTful API in PHP.**

## Requirements

- a PHP development environment
- an OVHcloud SMS account with SMS credits

## Instructions

### Step 1: Retrieve the PHP wrapper for OVHcloud APIs.

Go to the [https://github.com/ovh/php-ovh](https://github.com/ovh/php-ovh) GitHub project.

You will be able to integrate the PHP wrapper quickly using Composer: [https://getcomposer.org/](https://getcomposer.org/)

Follow the instructions on GitHub, and create the composer.json file as instructed in the project:
GitHub> Readme > Quickstart

In your project, you will retrieve the directory <b>./vendor/ovh/ovh/</b>, as well as the file <b>autoload.php</b>, which is used to manage all dependencies and imports.

![your project with Composer](images/img_2450.jpg){.thumbnail}


### Step 2: Create your credentials.

You will need credentials to use the SMS API. These credentials are created once, to identify the application that will be sending SMS messages. The lifespan of these credentials can be configured.

Create all of your script credentials (all keys at once) on this page:
[https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs&POST=/sms/*/jobs) (this URL will automatically give you the correct rights for the steps described in this guide).


![create tokens](images/img_2451.jpg){.thumbnail}

In this basic example, we retrieve the rights to access information on the account, the right to view pending SMS messages, and the right to send SMS messages. 


- GET /sms
- GET /sms/\*/jobs
- POST /sms/\*/jobs


The asterisk (\*) enables calls to these methods for all of your SMS accounts. You can also limit calls to one account only, if you generate several SMS accounts on a single OVHcloud account. You can do this by replacing “/sms” with “/sms/ACCOUNT-NAME”, and  “/sms/\*/” with “/sms/ACCOUNT-NAME”.

You can then retrieve the credentials for your script:

- Application Key (identifies your application)
- Application Secret (authenticates your application)
- Consumer Key (authorises the application to access the methods chosen)



![retrieving tokens](images/img_2452.jpg){.thumbnail}

The environment is ready, the credentials have been created, and you are now ready to code your PHP script.


### Step 3: Set up a PHP SDK (software development kit).

To simplify things, we have set up a PHP SDK, which you can access [here](https://github.com/ovh/php-ovh-sms).


### Step 4: Basic connection to the API.

You can now test the API connection, by displaying the details for each SMS account:

```
<?php
/**
 * Lists and displays the details for each SMS account
 * 
 * Go to https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs&POST=/sms/*/jobs
 * to generate the API access keys for:
 *
 * GET /sms
 * GET /sms/*/jobs
 * POST /sms/*/jobs
 */

require __DIR__ . '/vendor/autoload.php';
use \Ovh\Api;

$endpoint = 'ovh-eu';
$applicationKey = "your_app_key";
$applicationSecret = "your_app_secret";
$consumer_key = "your_consumer_key";

$conn = new Api(    $applicationKey,
                    $applicationSecret,
                    $endpoint,
                    $consumer_key);
     
$smsServices = $conn->get('/sms/');
foreach ($smsServices as $smsService) {

    print_r($smsService);
}

?>
```


When this script launches, you should retrieve the list of your SMS accounts.


### Step 5: Send your first SMS message.

To send SMS messages, use the POST jobs method: [https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

> [!primary]
>
> **For OVHcloud accounts in France only:**
> 
> With the senderForResponse setting, you can use a short number, which enables you to send SMS messages directly without needing to create an alpha-numeric sender (e.g. your name).
> 
> Short numbers also mean you are able to receive replies from recipients of your SMS messages, which may be useful for satisfaction surveys, voting applications, games, and more.
>
>



```
<?php
/**
 * Sends an SMS message, then displays the list of SMS messages that are waiting to be sent.
 * 
 * Go to https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs&POST=/sms/*/jobs
 * to generate the API access keys for:
 *
 * GET /sms
 * GET /sms/*/jobs
 * POST /sms/*/jobs
 */

require __DIR__ . '/vendor/autoload.php';
use \Ovh\Api;

$endpoint = 'ovh-eu';
$applicationKey = "your_app_key";
$applicationSecret = "your_app_secret";
$consumer_key = "your_consumer_key";

$conn = new Api(    $applicationKey,
                    $applicationSecret,
                    $endpoint,
                    $consumer_key);
     
$smsServices = $conn->get('/sms/');
foreach ($smsServices as $smsService) {

    print_r($smsService);
}

$content = (object) array(
	"charset"=> "UTF-8",
	"class"=> "phoneDisplay",
	"coding"=> "7bit",
	"message"=> "Bonjour les SMS OVH par api.ovh.com",
	"noStopClause"=> false,
	"priority"=> "high",
	"receivers"=> [ "+3360000000" ],
	"senderForResponse"=> true,
	"validityPeriod"=> 2880
);
$resultPostJob = $conn->post('/sms/'. $smsServices[0] . '/jobs', $content);

print_r($resultPostJob);

$smsJobs = $conn->get('/sms/'. $smsServices[0] . '/jobs');
print_r($smsJobs);
        
?>
```


This is the kind of response you should expect:

```
sms-XXXXXX-1
Array
(
    [totalCreditsRemoved] => 1
    [invalidReceivers] => Array
        (
        )

    [ids] => Array
        (
            [0] => 26929925
        )

    [validReceivers] => Array
        (
            [0] => +3360000000
        )

)
Array
(
)
```

You will retrieve the SMS account (ServiceName). You will receive a response with 1 credit used per valid number. And you will see that there are no SMS messages waiting to be sent.


## Go further

With the API console ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)), you can explore other methods for using SMS services, such as: SMS messages with the ability to send replies (for OVHcloud accounts in France only), mass-sending a CSV file, advertising mail, acknowledgements of receipt, etc.


Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).

