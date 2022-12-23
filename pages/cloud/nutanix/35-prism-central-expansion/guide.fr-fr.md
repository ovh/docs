---
title: Remplacement de Prism Central du mode Small au mode X-LARGE
slug: prism-central-to-xlarge-mode
excerpt: 'Comment remplacer Prism Central par trois machines virtuelles en mode X-LARGE' 
section: "Utilisation avancée"
order: 05
---

**Dernière mise à jour le 19/12/2022**

## Objectif

**Ce guide vous explique comment remplacer votre déploiement Prism Central initial sur une seule machine virtuelle a trois machine virtuelles**.


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central.
- Connaitre le mot de passe admin de Prism Element (Lors d'un déploiment de cluster ce mot de passe est le même que sur Prism Central mais il peut être changé par la suite).

## Présentation

Lorsque vous déployez votre cluster vous avez la possibilité de choisir le dimensionnement de Prism Central sur une ou trois machines virtuelles. Cette option est modifiable lorsque vous redéployer votre cluster mais toutes les données du cluster Nutanix sont effacées.\<br\>

**Prism Central** peux être dimensionné avec une ou trois machines virtuelles pour une meilleure résilience, il est aussi possible d'avoir un dimensionnement de chaque machine virtuelles plus importante.

- Small avec 6 vCPU 26 Gb de mémoire et 500 Gb de stockage par machine virtuelle.
- Large avec 10 vCPU, 44 Gb de mémoire et 2500 Go de stockage par machine virtuelle.
- X-Large avec 14 vCPU, 60 Gb de mémoire et 2500 Gb de mémoire.

Le mode de déploiement de Prism Central sur les cluster Nutanix by OVHcloud est en mode *Small* avec une machine virtuelle ou trois machines virtuelles.

## En pratique

Nous allons voir comment remplacer Prism Central en Mode Small sur une seule machine virtuelle par un Prism Central en mode X-Large et ensuite étendre Prism Central sur 3 machines virtuelles pour plus de résiliance

> [!warning]
> Le remplacement du mode de fonctionnement de Prism Central implique la suppression de Prism Central et de toutes les options gérées par Prism Central (Microsegmentation, Disaster recovery, etc...)
>

### Paramètrage de l'accès à Prism Element via l'espace client OVHcloud

Nous allons créer un accès à Prism Element en SSH avec le Load Balancer.

Allez dans votre espace client OVHcloud choisissez l'onglet `Hosted Private Cloud`{.action} en haut, ensuite dans la rubrique Nutanix à gauche cliquez sur votre `Cluster`{.action} et faite défiler la fenêtre et cliquez sur le  `Load Balancer`{.action} associé à votre cluster.

![Add ssh PE on Load Balancer 01](images/01-add-pe-ssh-on-loadbalancer01.png){.thumbnail}

Dans les pages de de configuration de votre Load Balancer allez dans l'onglet `Ferme de serveurs`{.action} et cliquez sur 

`Ajouter une ferme de serveurs`{.action}.

![Add ssh PE on Load Balancer 02](images/01-add-pe-ssh-on-loadbalancer02.png){.thumbnail}

Saisissez ces informations :

* **** : ``

* **Nom (facultatif)** : `PE SSH`
* **Protocole** : `TCP`
* **Port** : `22`
* **Datacenter** : `Tous(ALL)`
* **Réseau privé** : `nutanix`

Ensuite cliquez sur `Ajouter`{.action}

![Add ssh PE on Load Balancer 03](images/01-add-pe-ssh-on-loadbalancer03.png){.thumbnail}

A l'intérieur de la ferme de serveurs cliquez sur `Ajouter un serveur`{.action}.

![Add ssh PE on Load Balancer 04](images/01-add-pe-ssh-on-loadbalancer04.png){.thumbnail}

Completez ces valeurs : 

* **Nom (facultatif)** : `PE SSH`
* **adresse IPv4** : `Prism Element IP Address`
* **Port** : `22`

Et cliquez sur `Ajouter`{.action}

![Add ssh PE on Load Balancer 05](images/01-add-pe-ssh-on-loadbalancer05.png){.thumbnail}

Cliquez sur `Appliquer la configuration`{.action} à l'intérieur de l'encadré jaune.

![Add ssh PE on Load Balancer 06](images/01-add-pe-ssh-on-loadbalancer06.png){.thumbnail}

Sélectionnez votre site et cliquez sur `Appliquer la configuration`{.action}.

![Add ssh PE on Load Balancer 07](images/01-add-pe-ssh-on-loadbalancer07.png){.thumbnail}

Sélectionnez à nouveau votre site et cliquez sur `Appliquer la configuration`{.action}.

![Add ssh PE on Load Balancer 08](images/01-add-pe-ssh-on-loadbalancer08.png){.thumbnail}

Allez dans l'onglet `Tâches`{.action} pour voir l'avancement de la modification de la configuration.

![Add ssh PE on Load Balancer 09](images/01-add-pe-ssh-on-loadbalancer09.png){.thumbnail}

Quand la tâche sera finie allez dans l'onglet `Frontends`{.action} et cliquez sur `Ajouter un frontend`{.action}.

![Add ssh PE on Load Balancer 10](images/01-add-pe-ssh-on-loadbalancer10.png){.thumbnail}

Saisissez ces informations :

* **Nom (facultatif)** : `PE-FRONTEND`
* **Port** : `22`
* **Datacenter** : `Tous(ALL)`

Ensuite cliquez sur `Afficher`{.action}.

![Add ssh PE on Load Balancer 11](images/01-add-pe-ssh-on-loadbalancer11.png){.thumbnail}

Dans l'option **Restreindre l'accès à des IPs** saisissez le réseau ou l'adresse ip qui aura l'autorisation d'accès sur Prism Element en SSH au ormation XX.XX.XX.XX ou XX.XX.XX.XX/XX.

Et cliquez sur `Ajouter`{.action}.

![Add ssh PE on Load Balancer 12](images/01-add-pe-ssh-on-loadbalancer12.png){.thumbnail}

Cliquez sur `Appliquer la configuration`{.action} à l'intérieur de l'encadré jaune.

![Add ssh PE on Load Balancer 13](images/01-add-pe-ssh-on-loadbalancer13.png){.thumbnail}

Sélectionnez votre site et cliquez sur `Appliquer la configuration`{.action}.

![Add ssh PE on Load Balancer 14](images/01-add-pe-ssh-on-loadbalancer14.png){.thumbnail}

Sélectionnez votre site et cliquez sur `Appliquer la configuration`{.action}.

![Add ssh PE on Load Balancer 15](images/01-add-pe-ssh-on-loadbalancer15.png){.thumbnail}

Allez dans l'onglet `Tâches`{.action} pour voir l'avancement de la modification de la configuration.

![Add ssh PE on Load Balancer 16](images/01-add-pe-ssh-on-loadbalancer16.png){.thumbnail}

La configuration du Load Balancer est terminée, vous pouvez maintenant vous connecter en ssh sur la console Prism Element avec ces informations :

```bash
ssh admin@cluster-nutanix-fqdn
``` 
ou 

```bash
ssh nutanix@cluster-nutanix-fqdn
```

### Remplacement de la machine virtuelle Prism Central par une machine en mod X-LARGE

Exécutez ces commandes en ayant au préalable modifié ces informations :

* **\\<Prism-Central-Private-IP-address\\>** : Adresse IP privé de Prism Central
* **\<Prism-Element-Admin-Password\>** : Mot de passe du compte admin de Prism Element
* **\<Prism-Central-VM-Name\>** : nom de la machine virtuelle Prism Central

```bash
# Disconnect Prism Element in Prism Central
ncli multicluster remove-from-multicluster external-ip-address-or-svm-ips=\<Prism-Central-Private-IP-address\> username=admin password=\<Prism-Element-Admin-Password\> force=true
# Delete VM
acli vm.delete \<Prism-Central-VM-Name\>
```

Ensuite connectez vous à un hôte AHV du cluster avec cette commande

```bash
ssh root@private-ip-address-of-one-ahv-servers
```

Exécutez cette commande pour récupérer le UUID de votre stockage par défaut en ayant modifié ces paramètres :

* **\<Prism-Element-Password\\>** : Mot de passe du compte admin de **Prism Element**.
* **\<Prism-Element-IP\>** : Adresse IP privée de Prism Element.

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:\<Prism-Element-Password\>" -X GET "https://\<Prism-Element-Ip\>:9440/PrismGateway/services/rest/v2.0/storage_containers/" | jq -r '[.entities[] | select( .name | contains("default-container")) | .storage_container_uuid][0]'
```

Et cette commande pour récuperer l'UUID du réseau d'administration de votre cluster avec les mêmes éléments à modifier que la commande précedente :

```bash
curl -s -k -H Accept:application/json -H Content-Type:application/json -u "admin:\<Prism-Element-Password\>" -X POST https://\<prism element ip\>:9440/api/nutanix/v3/subnets/list -d {} | jq -r "[.entities[] | select( .spec.name | contains(\"\<subnet name\>\")) | .metadata.uuid][0]"
```

Créez un fichier nommé **PrismCentralXlarge.json** et rajouter ce texte en remplaçant ces élements :

* **\<Prism-Central-Password\>** : Mot de passe de la future machine virtuelle Prism Central.
* **\<Default-Container-UUID\>** : UUID du stockage par défaut récupéré précedemment.
* **\<Prism-Central-Private-IP-Address\>** : Adresse IP privé de Prism Central.
* **\<Nutanix-Network-Admin-UUID\>** : UUID du réseau d'administration du cluster Nutanix.
* **\<Nutanix-Network-Admin-mask\>** : Masque de sous réseaux du réseau d'administration du cluster Nutanix.
* **\<Nutanix-Network-Admin-Gateway\>** : Passerelle par défaut du réseau d'administration du cluster Nutanix.

```json
{
    "resources": {
        "version": "pc.2022.6.0.1",
        "should_auto_register": false,
        "initial_password": "\<Prism-Central-Password\>",
        "pc_vm_list": [
            {
                "vm_name": "prism-central",
                "container_uuid": "\<Default-Container-UUID\>",
                "num_sockets": 14,
                "data_disk_size_bytes": 2684354560000,
                "memory_size_bytes": 64424509440,
                "nic_list": [
                    {
                        "ip_list": [
                            "\<Prism-Central-Private-IP-Address\>"
                        ],
                        "network_configuration": {
                            "network_uuid": "\<Nutanix-Network-Admin-UUID\>",
                            "subnet_mask": "\<Nutanix-Network-Admin-mask\>",
                            "default_gateway": "\<Nutanix-Network-Admin-Gateway\>"
                        }
                    }
                ]
            }
        ]
    }
}
```

Executer cette commande pour déployer votre machine virtuelle Prism Central en mode X-Large en modifiant ces paramètres

* **\<Prism-Element-Password\>** : Mot de passe du compte admin de Prism Element
* **\<Prism-Element-Private-IP-Address\>** : Adresse IP privée de Prism Element


...bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:\<Prism-Element-Password\>" -X POST "https://\<Prism-Element-Private-IP-Address\>:9440/api/nutanix/v3/prism_central" -d @PrismCentralXlarge.json
...

> [!warning]
> Patientez pendant trente minutes pendant le déploiement de cette machine virtuelles
>

Saisissez cette commande en modifiant ces options pour créer un fichier **pcregister.json**

* **\<Prism-Central-Password\>** : 
* **\<Prism-Central-Private-IP-Address\>** :

...bash
echo "{\"username\":\"admin\",\"password\":\"\<Prism-Central-Password\>\",\"port\":9440,\"ipAddresses\":[\"\<Prism-Central-Private-IP-address\>\"]}" \>pcregister.json
...

Executez cette commande pour enregistrer Prism Element dans votre nouvelle machine virtuelle Prism Central en modifiant ces paramètres :

* **\<Prism-Element-Password\>** : Mot de passe du compte admin de Prism Element
* **\<Prism-Element-Private-IP-Address\>** : 

...bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:\<Prism-Element-Password\>" -X POST "https://\<Prism-Element-Private-IP-Address\>:9440/PrismGateway/services/rest/v1/multicluster/prism_central/register" -d @pcregister.json
...

Prism Element est maintenant enregistré dans le nouveau Prism Central.

### Migration sur mode de Prism Central vers 3 machines virtuelles




## Aller plus loin <a name="gofurther"></a>


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

