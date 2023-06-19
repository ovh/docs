---
title: Utah tests - Sample article
excerpt: Nunc ac maximus erat, eu ornare ipsum. In aliquet mi quis ipsum pulvinar dignissim.
updated: 2023-06-16
---

> [!alert]
>
> This article only exists for ServiceNow Utah upgrade tests purposes.

## Objectif

Nulla vel ex accumsan, eleifend nisl ac, tincidunt dui. Duis congue, mi eu aliquet bibendum, tellus nisi egestas purus, non molestie quam lorem sed nisi.<br>Praesent ultricies mattis nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br><br>Maecenas est nibh, cursus eu risus vitae, malesuada fermentum libero. 

*Suspendisse rhoncus ac lorem elementum cursus. Morbi nibh est, ultrices in leo vel, interdum elementum nulla. Integer posuere nulla a quam malesuada pretium.*

Vivamus eu erat ac neque iaculis imperdiet. Nam sit amet condimentum turpis. Mauris convallis ex libero, eget euismod orci ultricies nec. 


## En pratique

### Images insertion

#### PNG

![png image alt text](images/dns-dkim-platform-emailpro.png){.thumbnail}

#### GIF

![gif image alt text](images/puttygen_02.gif){.thumbnail}

### Primary - Warning - Alert - Success

> [!primary]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

> [!alert]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

> [!success]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

### Nested lists

- Prendre en charge l'incident avec les objectifs suivants :
    - Réduire les impacts opérationnels
    - Préserver les éléments de preuve permettant de supporter une éventuelle judiciarisation ou des sanctions
    - Revenir à une situation nominale
- Informer les parties intéressées en accord avec les obligations légales et contractuelles

### Tables

| Rôles |
| --- |
|R : Est en charge de la Réalisation du processus|
|A : Est gArant de la bonne fin du processus|
|C : Est Consulté pendant le processus|
|I : est Informé des résultats  du processus|


| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir la localisation des serveurs dédiés | RA | I |
| Dimensionner les serveurs dédiés en fonction des besoins | RA | I |
| Choisir les options en fonction des besoins | RA | I |

### Buttons highlighting and code coloration

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) and select `Web Cloud`{.action} in the top navigation bar. Click `Hosting plans`{.action} in the services bar on the left-hand side, then choose the Web Hosting plan concerned.

Next, navigate to the `Statistics and logs`{.action} tab by selecting it in the `More +`{.action} submenu.

#### Bash

```bash
curl -X GET -H "X-Schemas-Version: 1.0" https://ca.api.ovh.com/v2/iam/policy
```

#### Yaml

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
            routes:
              - to: "IPv6_GATEWAY"
                scope: link
```

#### PHP

```php
<?php
   // PHP version 7.4 used here
    try {
        // connect to OVHcloud Public Cloud Databases for MongoDB (cluster in version 4.4, MongoDB PHP Extension in 1.8.1)
        $m = new MongoDB\Driver\Manager('mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset');
        echo "Connection to database successfully";
        // display the content of the driver, for diagnosis purpose
        var_dump($m);
    }
    catch (Throwable $e) {
        // catch throwables when the connection is not a success
        echo "Captured Throwable for connection : " . $e->getMessage() . PHP_EOL;
    }
?>
```

#### Python

```python
import ovh

# Instantiate. Visit https://api.ovh.com/createToken/?GET=/me
# to get your credentials
client = ovh.Client(
    endpoint='ovh-eu',
    application_key='<application key>',
    application_secret='<application secret>',
    consumer_key='<consumer key>',
)

# Print nice welcome message
print("Welcome", client.get('/me')['firstname'])
```

#### Json

```json
{
  "state":"pendingValidation",
  "consumerKey":"5DU984kYxyoAe4lRaevZCGnmt9FVnKT2",
  "validationUrl":"https://ca.api.ovh.com/auth/?credentialToken=RAXoRq9FvUQFI1S6hE0HmkySyVp8aDWwIqBA3fYrOr0vVSMdpjqxFqp3IjyjGAfu"
```

#### Javascript

```javascript
"use strict"

module.exports = (context, callback) => {
    callback(undefined, {message: 'Hello world'});
}
```

#### Go

```go
package v1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// OvhNginxSpec defines the desired state of OvhNginx
type OvhNginxSpec struct {
	// Number of replicas for the Nginx Pods
	ReplicaCount int32 `json:"replicaCount"`
	// Exposed port for the Nginx server
	Port int32 `json:"port"`
}

// OvhNginxStatus defines the observed state of OvhNginx
type OvhNginxStatus struct {
	// INSERT ADDITIONAL STATUS FIELD - define observed state of cluster
	// Important: Run "make" to regenerate code after modifying this file
}

//+kubebuilder:object:root=true
//+kubebuilder:subresource:status

// OvhNginx is the Schema for the ovhnginxes API
type OvhNginx struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	Spec   OvhNginxSpec   `json:"spec,omitempty"`
	Status OvhNginxStatus `json:"status,omitempty"`
}

//+kubebuilder:object:root=true

// OvhNginxList contains a list of OvhNginx
type OvhNginxList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`
	Items           []OvhNginx `json:"items"`
}

func init() {
	SchemeBuilder.Register(&OvhNginx{}, &OvhNginxList{})
}
```

Then generate the manifest:
```bash
make manifests
```

#### Powershell

```powershell
PS C:\Windows\system32> get-disk| Sort-Object -Property number |Where-Object -Property FriendlyName -Match WDC

Number Friendly Name            Serial Number            HealthStatus         OperationalStatus      Total Size   Partition 
                                                                                                                  Style
------ -------------            -------------            ------------         -----------------      ----------   ----------
6      WDC WUH721414AL5201      QGKN3K0T                 Healthy              Offline                  12.73 TB   RAW
7      WDC WUH721414AL5201      QGKN5Y0T                 Healthy              Offline                  12.73 TB   RAW
8      WDC WUH721414AL5201      QGKN9HTT                 Healthy              Offline                  12.73 TB   RAW
9      WDC WUH721414AL5201      9KGKM0EL                 Healthy              Offline                  12.73 TB   RAW
10     WDC WUH721414AL5201      QGKMHM8T                 Healthy              Offline                  12.73 TB   RAW
11     WDC WUH721414AL5201      QGKN3GYT                 Healthy              Offline                  12.73 TB   RAW
12     WDC WUH721414AL5201      QGKM1ART                 Healthy              Offline                  12.73 TB   RAW
13     WDC WUH721414AL5201      QGKN9BZT                 Healthy              Offline                  12.73 TB   RAW
14     WDC WUH721414AL5201    
...  
102    WDC WUH721414AL5201      X0GLPWBC                 Healthy              Offline                  12.73 TB   RAW
103    WDC WUH721414AL5201      QGKWST0T                 Healthy              Offline                  12.73 TB   RAW
104    WDC WUH721414AL5201      9RJ2T4RC                 Healthy              Offline                  12.73 TB   RAW
105    WDC WUH721414AL5201      QGKM32VT                 Healthy              Offline                  12.73 TB   RAW
106    WDC WUH721414AL5201      QGKM304T                 Healthy              Offline                  12.73 TB   RAW
107    WDC WUH721414AL5201      QGKM9E0T                 Healthy              Offline                  12.73 TB   RAW
```  

### Video insertion

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### API calls

> [!api]
>
> @api {GET} /domain
>

> [!api]
>
> @api {POST} /domain/zone/{zoneName}/record
>

> [!api]
>
> @api {PUT} /domain/zone/{zoneName}/record/{id}
>

> [!api]
>
> @api {DELETE}  /domain/zone/{zoneName}/record/{id}
>

### Tabs

#### Tabs with API calls

> [!tabs]
> Cassandra
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/database/cassandra
>> >
> Kafka
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/database/kafka
>> >
> Kafka Connect
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/database/kafkaConnect
>> >
> MySQL
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/database/mysql
>> >
> Opensearch
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/database/opensearch
>> >
> PostgreSQL
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/database/postgresql
>> >
> Redis
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/database/redis
>> >

#### Tabs with text and images

> [!tabs]
> **Exchange**
>>
>> Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans l'onglet `Web Cloud`{.action}, cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. Cliquez enfin sur le nom du service Exchange concerné. Par défaut, le nom de votre plateforme correspond à sa référence ou celle-ci sera visible sous le nom que vous lui avez attribué (voir l'image ci-dessous).
>>
>> ![email](images/dns-dkim-platform-exchange.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans l'onglet `Web Cloud`{.action}, cliquez sur `E-mails Pro`{.action}, puis sur le nom du service E-mail Pro concerné. Par défaut, le nom de votre plateforme correspond à sa référence ou celle-ci sera visible sous le nom que vous lui avez attribué (voir l'image ci-dessous).
>>
>> ![email](images/dns-dkim-platform-emailpro.png){.thumbnail}

#### Tabs with code and images

> [!tabs]
> Bash
>> ```bash
>> # Get the GRA9 private network Id
>> export pvnwGRA9Id="$(utils/ovhAPI.sh GET /cloud/project/$OS_TENANT_ID/network/private/${vlanId} | jq '.regions[] | select(.region=="GRA9")' | jq -r .openstackId)" && echo $pvnwGRA9Id
>> # Create the kube payload file
>> cat tpl/data-kube.json.tpl | sed -e "s|@privateNetworkId@|$pvnwGRA9Id|g" > tpl/data-kube.json
>> # Create the kube cluster
>> export kubeId="$(utils/ovhAPI.sh POST /cloud/project/$OS_TENANT_ID/kube "$(cat tpl/data-kube.json)" | jq -r .id)" && echo $kubeId
>> ```
> API
>> > [!api]
>> >
>> > @api {GET} /cloud/project/{serviceName}/network/private/{networkId}
>> > 
>> > @api {POST} /cloud/project/{serviceName}/kube
>> > 
>> > @api {GET} /cloud/project/{serviceName}/kube
> OVHcloud Control Panel
>> Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.
>> 
>> Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu:
>> 
>> ![Attach a Vrack gateway to an OVHcloud Managed Kubernetes cluster](images/attach-vrack-gateway-to-kubernetes-cluster.png)

## Aller plus loin

[Généralités sur les serveurs DNS](/pages/web/domains/dns_server_general_information#les-serveurs-dns){.external}.

[Modification d'une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external}.

[Protégez votre domaine contre le Cache Poisoning avec le DNSSEC](https://www.ovhcloud.com/fr/domains/dnssec/){.external}.

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
