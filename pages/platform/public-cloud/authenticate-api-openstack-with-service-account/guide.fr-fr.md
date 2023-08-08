---
title: Comment utiliser les comptes de service pour se connecter à Openstack
excerpt: "Comment se connecter aux API ou lignes de commande openstack avec ses comptes de service OVHcloud"
updated: 2023-08-08
---

> [!warning]
>
> Cette fonctionnalité est actuellement en béta. Vous pouvez trouver plus d'informations sur <https://labs.ovhcloud.com/fr/>.
>

## Objectifs

Pour réaliser des automatisations, il faut fournir des identifiants au code qui s'en charge. Avec les comptes de service OVHcloud, il est possible d'avoir un seul identifiant par script pour l'utilisation des différentes API proposées par les produits de OVHcloud ([API de OVHcloud](/pages/account/customer/console-preview), [API de openstack](/pages/platform/public-cloud/starting_with_nova)... )

Ce guide va vous expliquer comment utiliser les comptes de service afin de se connecter aux APIs de Openstack.

Cela peut vous permettre : 
- D'intégrer des alertes en provenance de votre infrastructure
- De gérer la montée en charge de votre infrastructure dynamiquement
- D'automatiser la résolution des incidents les plus courants

## Pré-requis

- Vous avez un commpte client [OVHcloud account](/pages/account/customer/ovhcloud-account-creation).
- Vous savez configurer des politiques d'accès via API [how to configure policies for IAM](/pages/account/customer/iam-policies-api).
- Vous savez utiliser les APIs de Openstack [Débuter avec l'api Openstack](/pages/platform/public-cloud/starting_with_nova)
- Avoir créé un compte de service via API [Créer et utiliser des comptes de service OVHcloud](/pages/account/policies/manage-service-account)

Pour l'exemple dans ce guide, nous utiliserons le compte de service **urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f** pour accéder au projet public cloud 
**urn:v1:eu:resource:publicCloudProject:0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f**. N'oubliez pas de modifier ces valeurs dans les exemples suivant.

## Associer des droits d'accès à Openstack à son compte de service

Avant toute chose, il faut que notre compte de service puisse accèder à votre infrastructure openstack. OVHcloud fournit 11 niveaux de droits utilisable au sein de OpenStack dont les droits sont décrits dans le tableau suivant : 

| Droits Openstack                                      | Nova: compute_manage | Nova: compute_snapshot_manage | Nova: compute_read | Swift: objectstore_all | glance: image_manage | glance: image_read | glance: image_import | Cinder: volume_manage | Cinder: volume_snapshot_manage | Cinder: volume_read | Neutron: network_manage | Neutron: network_read | Neutron: network_secgroup_manage | Neutron: network_secgroup_read | AI Training: ai_training_all | AI Training: ai_training_read | 
| :---------------------------------------------------- |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| publicCloudProject:openstack:administrator            |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |  x  |     |     |
| publicCloudProject:openstack:backupOperator           |     |  x  |  x  |     |     |  x  |  x  |     |  x  |  x  |     |     |     |     |     |     |
| publicCloudProject:openstack:computeOperator          |  x  |  x  |  x  |     |     |  x  |     |     |     |  x  |     |  x  |     |  x  |     |     |
| publicCloudProject:openstack:imageOperator            |     |     |     |     |  x  |  x  |  x  |     |     |     |     |     |     |     |     |     |
| publicCloudProject:openstack:infrastructureSupervisor |     |     |  x  |     |     |  x  |     |     |     |  x  |     |  x  |     |  x  |     |     |
| publicCloudProject:openstack:networkOperator          |     |     |     |     |     |     |     |     |     |     |  x  |  x  |     |  x  |     |     |
| publicCloudProject:openstack:networkSecurityOperator  |     |     |     |     |     |     |     |     |     |     |     |     |  x  |  x  |     |     |
| publicCloudProject:openstack:objectstoreOperator      |     |     |     |  x  |     |     |     |     |     |     |     |     |     |     |     |     |
| publicCloudProject:openstack:volumeOperator           |     |     |     |     |     |     |     |  x  |  x  |  x  |     |     |     |     |     |     |
| publicCloudProject:ai:aiTrainingOperator              |     |     |     |     |     |     |     |     |     |     |     |     |     |     |  x  |  x  |
| publicCloudProject:ai:aiTrainingRead                  |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |  x  |


Pour notre exemple, nous souhaitons ajouter le droit publicCloudProject:openstack:infrastructureSupervisor qui permet de récupérer des informations sur notre infrastructure. Il peut être utile pour mettre en place des scripts de monitoring.

Vous pouvez désormais ajouter la politique d'accès suivante : 

```json
{
  "description": "Demo for service account guide with openstack",
  "identities": [
    "urn:v1:eu:identity:credential:xx11111-ovh/oauth2-0f0f0f0f0f0f0f0f"
  ],
  "name": "Demo-service-account",
  "permissions": {
    "allow": [
      {
        "action": "publicCloudProject:openstack:infrastructureSupervisor"
      }
    ]
  },
  "resources": [
    {
        "urn": "urn:v1:eu:resource:publicCloudProject:0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f"
    }
  ]
}
```

## Utiliser le compte de service avec la ligne de commande (CLI) Openstack

Si vous utilisez votre infrastructure openstack avec la ligne de commande, vous devez utiliser les variables d'environnement suivante : 

```bash
export OS_AUTH_TYPE=v3oidcclientcredentials
export OS_PROTOCOL=openid
export OS_ACCESS_TOKEN_TYPE=id_token
export OS_AUTH_URL=https://auth.preprod.cloud.ovh.net/v3
```

Si vous utilisez les services de OVHcloud depuis la région EMEA, ajoutez les variables suivantes
```bash
export OS_IDENTITY_PROVIDER=ovhcloud-emea
export OS_DISCOVERY_ENDPOINT=https://iam.ovh.net/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration
```

Si vous utilisez les services de OVHcloud depuis la région "Rest of the World", ajoutez les variables suivantes
```bash
export OS_IDENTITY_PROVIDER=ovhcloud-world
export OS_DISCOVERY_ENDPOINT=https://iam.ovh.ca/role-adapter/urn:v1:eu:resource:publicCloudProject:pci/.well-known/openid-configuration
```

Puis ajoutez les variables suivantes avec les valeurs correspondant à votre configuration
```bash
export OS_PROJECT_ID=0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f
export OS_CLIENT_ID=0f0f0f0f0f0f0f0f
export OS_CLIENT_SECRET=xxxx
export OS_REGION_NAME=GRA7
```

8e63474692f845ec8323f7141814af8d


- **OS_PROJECT_ID**: Identifiant de votre projet cloud
- **OS_CLIENT_ID**: Identifiant de votre compte de service
- **OS_CLIENT_SECRET**: Secret de votre compte de service
- **OS_REGION_NAME**: Region concernée par votre script

Vous pouvez désormais utiliser votre ligne de commande pour observer vos machines virtuelles.

```bash
$ openstack server list
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
| ID                                   | Name                | Status | Networks                                        | Image     | Flavor |
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
| 0f0f0f0f-0f0f-0f0f-0f0f-0f0f0f0f0ff0 | name_vm             | ACTIVE | Ext-Net=127.0.0.1,                              | Debian 12 | d2-2   |
+--------------------------------------+---------------------+--------+-------------------------------------------------+-----------+--------+
```

Cependant, vous n'avez pas accès aux object storage swift avec ce compte de service

```bash
$ openstack container list
Forbidden (HTTP 403) (Request-ID: 0f0f0f0f0f0f0f0f0f0f0f0-000f0f0f0f)
```

## Utiliser le compte de service en utilisant le SDK python


