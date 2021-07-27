---
title: 'Setting up your own monitoring solution'
slug: build-your-own-monitoring-solution
excerpt: 'Setting up your own monitoring solution using OVHcloud Insight and Grafana'
section: 'Diagnostics and troubleshooting'
order: 5
---

**Last updated 27/07/2021**

> [!warning]
>
> This guide is deprecated, the OVHcloud Insight offer used in this guide is plannned to close on 2021/10/26.
> More information on <http://travaux.ovh.net/?do=details&id=51756&>.
>

## Objective

With its [Insight solution](https://docs.ovh.com/fr/metrics/metrics-insight/), OVHcloud shares your service metrics, so that they can be integrated into your own solutions.

**Find out how to enable Insight and set up your first Grafana dashboard to monitor your internet access.**

## Requirements

- An [OVHcloud DSL or FTTH internet access](https://www.ovhtelecom.fr/offre-internet/){.external}.
- Your modem’s [remote configuration](https://docs.ovh.com/fr/xdsl/configuration_du_modem_a_partir_de_votre_espace_client/#etape-1-acceder-a-la-gestion-de-votre-box) must be enabled.

## Instructions

### Step 1: retrieve your OVHcloud Insight metric reading token

1\. Go to the APIv6 console here: [https://api.ovh.com/console/](https://api.ovh.com/console/){.external}

2\. Authenticate with your OVHcloud credentials. You can find more information on using APIs in the [First Steps with the OVHcloud APIs](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/) guide.

3\. Use the following method to retrieve your read token:

> [!api]
>
> @api {GET} /me/insight
>

![getToken](images/token.png){.thumbnail}

4\. Securely save your returned read token under the `access` key.

### Step 2: set up your first Grafana dashboard

1\. Go to the Grafana interface provided by OVHcloud at the following address: [https://grafana.metrics.ovh.net](https://grafana.metrics.ovh.net){.external}

2\. Authenticate with your OVHcloud credentials.

3\. Choose `Add data source`{.action}.

![grafanaAddSource](images/grafana1.png){.thumbnail}

4\. Configure the data source such as:

```
Name: Insight Warp10

Type: Warp10

Url: https://warp10.insight.eu.metrics.ovh.net
```

5\. Add a constant named `token` using your OVHcloud Insight reading token.

![grafanaAddConstant](images/grafana2.png){.thumbnail}

6\. Click `Add`{.action} to complete this configuration.

7\. Click on the Grafana icon in the top left and choose from the menu: `Dashboard`{.action}, then `Import`{.action}

8\. Upload the following template: [internet-access-grafana-dashboard-v3.json](http://files.isp.ovh.net/grafana/internet-access-grafana-dashboard-v3.json)

9\. Click `Import`{.action} to finish adding the template.

![grafanaDashboard](images/grafana3.png){.thumbnail}

> [!primary]
>
> Congratulations!
>
> You now have your first Grafana dashboard to monitor your OVHcloud internet access.
>


The following information is currently available for your internet access:

- incoming and outgoing bandwitdth
- latency

And if your modem is compatible:

- synchronisation
- SNR *(Signal to Noise Ratio)*
- attenuation
- CRC errors *(Cyclic Redundancy Check)*
- FEC errors *(Far End Corrected)*
- HEC errors *(Header Error Control)*
- synchronisation, connection and modem uptime

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
