---
title: Connect an IoT Device
slug: iot-devices
excerpt: How to use Metrics with a connected IoT device
section: Metrics services
order: 2
---

**Last updated 23th August, 2019**


## Objective

IoT Devices can take a lot of form factors. From a simple wireless sensors to the Airbus A380, you will need the right strategy to connect your device. [Contact us](mailto:metrics@priv.ovh.net){.external} if you need help to choose the plan that suits you best.

With a Metrics account, you can store different kind of values: - Long - Double - Boolean - String


> [!warning]
>
> Some devices could push arbitrary binary values and you could need to unpack the data payload to extract the value.
> 

## Requirements

- a valid OVH Metrics account.

Operator's integration is a crucial criteria while choosing how you can acquire the data. 

They are many choices:

- GPRS/SMS
- 4G
- Sigfox
- LoraWan (auto operated or its operators)
- Others

![header](images/operators.png){.thumbnail}

## Instructions

In order to offer you a direct presence in many countries from many Operators, we invite you to use [PilotThings](http://www.pilot-things.com/accueil/){.external} which will operate for you :

- Local ISP Acquisition
- Payload extraction
- Push to Metrics

### Create a PilotThings account

To get your account details, just send an email to [contact@pilot-things.com](mailto:contact@pilot-things.com){.external} with your :

- First name
- Lastname
- Company
- Phone number
- Contact email

*Pilot Things for OVH* beta is free for one month.

![Step1 - Create PilotThings account and go to integration](images/OVH-PilotThings-Step1.png){.thumbnail}

### Associate your device

Now you have your account, you can associate your devices from the provided catalog. The latter will help you automatically decode data for devices from the list and PilotThings will send the data extracted from payload directly to the configured backend (see Integrations later)


![Step1 - Create PilotThings account and go to integration](images/device_association.png){.thumbnail}


### Provide a custom decoder

Eventually, if your device doesn't appear in this list, you have to provide your custom decoder. It will help PilotThings to extract the meaningful data from the payload. Decoders are JavaScript function.


![Step1 - Create PilotThings account and go to integration](images/decoder.png){.thumbnail}


### Setup OVH Metrics integration as backend

Fill the few fields by first naming your integrated Metrics account and choosing the corresponding protocol.


![Step2 - Select OVH Metrics as backend protocol](images/OVH-PilotThings-Step2.png){.thumbnail}

Then complete it with your specific account informations :

- the region endpoint URL
- a WRITE Token you will have generated through the [Metrics Manager](https://www.ovh.com/manager/dedicated/index.html#/){.external} (Cloud > Metrics > your project) or OVH API (/metrics)


![Step3 - Complete with your Warp 10™ endpoint and WRITE token](images/OVH-PilotThings-Step3.png){.thumbnail}

Save your backend, and you're good to go!


![Step4 - Save the integration backend and associate it with devices](images/OVH-PilotThings-Step4.png){.thumbnail}

## Go further

- Documentation: [Guides](../product.fr-fr.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
