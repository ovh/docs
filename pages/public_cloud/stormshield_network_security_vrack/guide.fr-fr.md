---
title : 'Tutoriel sur Stormshield Network Security : sécuriser votre infrastructure OVHcloud'
excerpt: 'Découvrez comment sécuriser votre infrastructure OVHcloud avec Stormshield Network Security'
updated : 2024-10-21
---

## Objectif

Dans le paysage numérique actuel en constante évolution, la sécurisation de l'infrastructure cloud est devenue une priorité absolue pour les organisations de toutes tailles. Alors que les entreprises dépendent de plus en plus des solutions cloud pour leurs opérations, assurer la protection des données sensibles et maintenir l'intégrité du réseau est une tâche critique. **S**tormshield **N**etwork **S**ecurity (SNS) est une solution de sécurité complète conçue pour protéger les environnements cloud contre un large éventail de menaces. Ce guide fournit des instructions pas à pas pour déployer et configurer le SNS sur le Public Cloud d’OVHcloud avec le vRack et le routage IP public, couvrant les fonctionnalités clés telles que les pare-feu réseau, les VPN IPSec et les VPN SSL/TLS. En suivant ce guide, vous renforcerez la sécurité de votre infrastructure Public Cloud OVHcloud et assurerez la sécurité et la sûreté de vos opérations.

**Ce guide explique comment sécuriser votre infrastructure OVHcloud avec Stormshield Network Security déployé sur Public Cloud.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=FR).
- Un [utilisateur OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (optionnel).
- Connaissances de base en réseau.
- Compte Stormshield sur le [site Stormshield](https://www.stormshield.com/fr/){.external}.
- S'assurer que le vRack est activé et configuré pour permettre une communication sécurisée entre les composants de l'infrastructure.
- Adresse IP supplémentaire pour assurer le basculement du réseau et la configuration de la haute disponibilité.
- Licence Stormshield Network Security BYOL (**B**ring **Y**our **O**wn **L**icence), obtenue auprès de [partenaires ou revendeurs tiers](https://www.stormshield.com/partner/partner-finder/){.external}, que vous devrez fournir lors de l'installation et de la configuration.

## En pratique

En plus de l’installation et de la configuration de Stormshield Network Security, ce tutoriel propose différents cas d’utilisation en fonction de vos besoins :

- [Installer et configurer Stormshield Network Security sur votre environnement Public Cloud](#step1)
- [Cas d'utilisation 1 : configurer Stormshield Network Security comme passerelle](#step2)
- [Cas d'utilisation 2 : configurer un NAT (**N**etwork **A**ddress **T**ranslation) pour accéder à un service HTTP privé de l'extérieur](#step3)
- [Cas d'utilisation 3 : tunnel IPsec (site à site)](#step4)
- [Cas d'utilisation 4 : VPN SSL/TLS (de client à site)](#step5)

### Installez et configurez Stormshield Network Security sur votre environnement Public Cloud <a name="step1"></a>

> [!primary]
> Dans ce tutoriel, l'installation et la configuration de Stormshield Network Security s'effectuent principalement via la ligne de commande. Ouvrez un terminal pour exécuter les instructions.
>
> Veuillez noter que toutes les rubriques relatives à la « Haute disponibilité » ou à « Stormshield-2 » sont facultatives, de même que l’utilisation du réseau vRack avec Additional IP. Ils sont inclus pour montrer comment mettre en place le système avec deux instances en mode actif/passif pour une haute disponibilité. En version minimale, il peut également fonctionner avec une seule instance si cela suffit à vos besoins.

> [!primary]
> Dans ce scénario, nous utiliserons deux machines virtuelles configurées pour l'appliance de sécurité afin d'atteindre la haute disponibilité (High Availability ou HA) et une machine virtuelle supplémentaire pour la gestion. Cette configuration assure une protection contre le basculement et une disponibilité continue du service. Pour plus d'exemples et des conseils détaillés sur les options d'évolutivité, veuillez consulter la [documentation de Stormshield](https://documentation.stormshield.eu/HOME/Content/Website_Topics/Root-HomePage-FR.htm){.external}.


#### Configurez votre vRack

Dans cette étape, nous configurons le vRack, un réseau virtuel privé fourni par OVHcloud. Le vRack vous permet d’interconnecter plusieurs instances ou serveurs au sein d’un environnement Public Cloud, assurant ainsi l’isolation du réseau tout en maintenant une communication sécurisée. En ajoutant votre projet Public Cloud et votre bloc Additional IP au même vRack, vous pouvez permettre à vos instances SNS de communiquer de manière sécurisée, tout en gardant le contrôle total de la gestion des adresses IP. Le réseau privé vRack vous permet également de sécuriser des serveurs Bare Metal Cloud ou des VM Private Cloud avec une appliance de sécurité déployée au-dessus du Public Cloud.

**Ajoutez votre projet Public Cloud et votre bloc Additional IP au même vRack**

Dans cet exemple de guide, le bloc IP est `147.135.161.152/29`.
Nous utilisons la première IP utilisable `147.135.161.153` pour la première instance de SNS et nous utilisons temporellement la seconde IP utilisable `147.135.161.154` pour le second SNS.
L'adresse de la passerelle est `147.135.161.158`.

Reportez-vous au guide [Configurer un bloc IP dans un vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) pour plus d'informations.

Ci-dessous, l'architecture que nous allons mettre en place.

![SNS vrack](./images/stormshield-ha-vrack.png)

#### Configurer le réseau OpenStack

* Créez le réseau privé pour les interfaces externes SNS :

```console
openstack network create --provider-network-type vrack --provider-segment 0 --disable-port-security stormshield-ext
```

```console
openstack subnet create --network stormshield-ext --subnet-range 192.168.1.0/29 --dhcp stormshield-ext
```

* Créez le réseau privé pour les interfaces internes du SNS :

```console
openstack network create --provider-network-type vrack --provider-segment 200 --disable-port-security stormshield-vlan200
```

```console
openstack subnet create --network stormshield-vlan200 --subnet-range 10.200.0.0/16 --dhcp --dns-nameserver <dns_address_ip> stormshield-vlan200
```

* Créez le réseau privé pour les interfaces SNS HA (**H**igh **A**vailability) :

```console
openstack network create --provider-network-type vrack --provider-segment 199 --disable-port-security stormshield-ha
```

```console
openstack subnet create --network stormshield-ha --subnet-range 192.168.2.0/29 --dhcp --gateway none stormshield-ha
```

#### Déployer les instances SNS

Rendez-vous dans la section `download` du [site officiel de Stormshield](https://documentation.stormshield.eu/SNS/v4/fr/Content/PAYG_Deployment_Guide/Downloading_installation_file.htm){.external}. Connectez-vous à votre compte Stormshield et suivez les instructions pour télécharger l'image Stormshield OpenStack.

Rendez-vous dans le dossier où vous avez téléchargé votre image SNS Openstack et téléchargez l'image (pour ce tutoriel, nous utilisons l'image `utm-SNS-EVA-4.8.3-openstack.qcow2`) :

```console
openstack image create --disk-format raw --container-format bare --file ./utm-SNS-EVA-4.8.3-openstack.qcow2 stormshield-SNS-EVA-4.7.6
```

* Créez les instances SNS (pour cet exemple, nous les avons appelées `stormshield-1` et `stormshield-2`) :

```console
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.7.6 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-1
```

```console
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.7.6 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-2
```

> [!primary]
> Pour des raisons de performance, nous vous suggérons d’utiliser les versions de VM listées pour des types de licence SNS EVA donnés :
>
> - EVA1 : saveurs B3-16 ou B3-32
> - EVA2 : B3-32
> - EVA3 : B3-32 ou B3-64
> - EVA4 : B3-128
> - EVAU : B3-256
>

#### Configurer les instances SNS

Connectez-vous à votre espace client OVHcloud, rendez-vous dans la section Public Cloud et sélectionnez le projet Public Cloud concerné. Dans le menu de gauche, cliquez sur `Instances` dans la section `Compute`, puis retrouvez vos deux instances SNS.

Accédez à la console VNC pour les deux instances SNS et configurez la disposition du clavier et le mot de passe.

* Configurez la passerelle par défaut sur le premier SNS avec notre passerelle de bloc IP :

```console
vi /usr/Firewall/ConfigFiles/object

[Host]
Firewall_out_router=147.135.161.158,resolve=static
...
```

* Configurez l'interface réseau externe sur le premier SNS avec la première adresse IP utilisable de notre bloc IP et l'interface réseau interne avec l'adresse IP `10.200.0.1` :

```console
vi /usr/Firewall/ConfigFiles/network

...
[ethernet0]
...
Address=147.135.161.153
Mask=255.255.255.248

[ethernet1]
...
Address=10.200.0.1
Mask=255.255.0.0
...
```

* Appliquez la nouvelle configuration réseau

```console
ennetwork
```

* Effectuez la même configuration pour le second SNS mais avec la seconde adresse IP `147.135.161.154` de notre bloc IP pour l'interface externe au lieu de `147.135.161.153`.

* Ajoutez une licence différente sur les deux instances SNS en suivant la [documentation officielle](https://documentation.stormshield.eu/SNS/v4/fr/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm){.external}.

* Créez une règle de pare-feu similaire sur les deux SNS dans l'interface graphique Web :

![SNS vrack](./images/ha-filter.png)

* Sur le premier SNS, créez un groupe de pare-feu (Configuration -> Système -> Haute disponibilité). Concernant l'adresse IP, vérifiez quelle IP a été assignée à l'interface HA par le DHCP OpenStack.

![SNS vrack](./images/ha-1.png)

![SNS vrack](./images/ha-2.png)

* Lorsque la configuration du HA est terminée sur le premier SNS. Rejoignez le groupe pare-feu sur le second :

![SNS vrack](./images/ha-3.png)

![SNS vrack](./images/ha-4.png)

La seconde interface externe du SNS utilisera désormais la même adresse IP que la première. Par conséquent, l'adresse IP `147.135.161.154` peut être utilisée pour autre chose maintenant.

Si tout est configuré correctement, après le redémarrage du second SNS, vous devriez voir quelque chose de similaire dans les indicateurs d'intégrité du lien HA :

![SNS vrack](./images/ha-5.png)

#### Configurer et sécuriser la gestion du SNS

> [!tabs]
> **Étape 1**
>>
>> Récupérez votre adresse IP publique :
>> ```console
>> curl ipinfo.io/ip
>> <adresse_ip>
>> ```
>>
> **Étape 2**
>>
>> Créez un objet hôte pour votre IP publique :
>>![SNS vrack](./images/configure-management-1.png)
>>
> **Étape 3**
>>
>> Limitez l'accès à l'interface graphique à votre IP publique et activez le SSH :
>> ![SNS vrack](./images/configure-management-2.png)
>>
> **Étape 4**
>>
>> Limitez l'accès au SSH à votre IP publique
>> ![SNS vrack](./images/configure-management-3.png)

#### Resynchronisez la configuration HA

La synchronisation entre les deux instances SNS est cruciale pour s'assurer que les deux pare-feu sont toujours à jour avec la même configuration. À ce stade, les deux instances SNS ne doivent plus être synchronisées, car nous avons configuré beaucoup de paramètres sur la première instance que la seconde ne connaît pas.

* Connectez-vous en SSH à l'instance SNS active :

```console
ssh admin@<adresse_ip>
```

* Synchronisez les deux SNS :

```console
hasync
```

Cette manipulation est nécessaire à chaque mise à jour de la configuration.

### Configuration des cas d'utilisation

Après avoir déployé le firewall SNS **E**lastic **V**irtual **A**ppliance (EVA), il peut être utilisé dans plusieurs scénarios de sécurité avancés tels que VPN IPsec, VPN SSL/TLS, passerelles réseau (IN ou OUT) comme décrit ci-dessous.
Grâce au réseau privé vRack, les VLAN listés peuvent également être utilisés en dehors de l’environnement Public Cloud : sur les produits BareMetal ou PrivateCloud.

#### Cas d'utilisation 1 : configurer Stormshield Network Security comme passerelle <a name="step2"></a>

Dans cet exemple, l'appliance de pare-feu virtuel agira comme une passerelle sécurisée pour les instances privées (ou tout autre serveur) à l'intérieur du réseau VLAN200 du vRack. Ce type de trafic peut faire l'objet d'un filtrage d'URL sur le pare-feu.

![SNS vrack](./images/stormshield-gateway.png)

* Créez un objet réseau pour le VLAN200 en suivant cette [partie de la documentation officielle de Stormshield](https://documentation.stormshield.eu/SNS/v4/fr/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm){.external}.

* [Créez une nouvelle règle de filtrage](https://documentation.stormshield.com/SNS/v4/fr/Content/HowTo_-_IPSec_VPN_-_Authentication_by_certificate/Setup-Main-Site-30-Creating-Filtering-policy.htm){.external} similaire à celui-ci pour permettre au trafic provenant de VLAN200 de sortir :

![SNS vrack](./images/gateway-2.png)

* [Créez une règle NAT](https://documentation.stormshield.eu/SNS/v4/fr/Content/SNS_for_Cloud_-_VMWare_NSX/NAT-Rules.htm){.external} similaire à celui-ci :

![SNS vrack](./images/gateway-3.png)

* Synchronisez les deux instances HA SNS :

```console
ssh admin@<adresse_ip>
hasyn
```

##### Vérifiez si une instance peut se connecter à Internet à partir de VLAN200

* [Import your SSH public key](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/keypair.html){.external} :

```console
openstack keypair create --public-key ~/.ssh/id_rsa.pub <nom>
```

* Créez une instance sur VLAN200 :

```console
openstack server create --flavor b2-7 --image « Ubuntu 22.04 » --network stormshield-vlan200 --key-name <name> ubuntu-webserver
```

* Connexion en SSH à l'instance SNS :

```console
ssh -A admin@<ip_instance>
```

* Depuis l'instance SNS, connectez-vous en SSH au serveur web Ubuntu. Vérifiez quelle IP a été assignée à votre instance de serveur web Ubuntu par le DHCP OpenStack :

```console
ssh ubuntu@<adresse_ip>
```

* Testez si vous pouvez atteindre un site public :

```console
curl -I https://www.ovh.com/manager/
HTTP/2 200
```

#### Cas d'utilisation 2 : configurer un NAT (**N**etwork **A**ddress **T**ranslation) pour accéder à un service HTTP privé depuis l’extérieur <a name="step3"></a>

Dans cet exemple, Internet doit pouvoir atteindre le serveur Web privé installé à l'intérieur de VLAN200. L’objectif d’une telle configuration est de protéger le serveur web avec un pare-feu réseau.

![SNS vrack](./images/stormshield-nat-http.png)

> [!tabs]
> **Étape 1**
>>
>> Installez Nginx sur l'instance ubuntu-webserver :
>> ```console
>> sudo apt-get update
>> sudo apt-get install -y nginx
>> ```
> **Étape 2**
>>
>> Créez un objet hôte pour l'ubuntu-webserver :
![SNS vrack](./images/nat-1.png)
>>>
> **Étape 3**
>>
>> Créez une règle NAT similaire à celle-ci :
![SNS vrack](./images/nat-2.png)
>>
> **Étape 4**
>>
>> Créez une règle de filtrage similaire à celle-ci :
![SNS vrack](./images/nat-3.png)

* Test d'accès au site depuis l'extérieur :

```console
curl -I http://<adresse_ip>
HTTP/1.1 200 OK
```

* Synchronisez les deux instances HA SNS :

```console
ssh admin@<adresse_ip>
hasyn
```

#### Usecase 3 : tunnel IPsec (site à site) <a name="step4"></a>

Dans cet exemple, le tunnel IPsec est configuré pour interconnecter deux régions PCI différentes : SBG7 (réseau VLAN200) et GRA11 (réseau VLAN201), mais chacun de ces sites peut être un site distant comme un bureau ou un datacenter.

![SNS vrack](./images/stormshield-ipsec.png)

* Répétez toutes les étapes dans une autre région en utilisant le VLAN 201 au lieu du VLAN 200 et des plages d'IP différentes pour le sous-réseau Stormshield-ext et Stormshield-ha.

##### Configurer le premier site

* [Add a host object](https://documentation.stormshield.eu/SNS/v4/fr/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm){.external} for the remote SNS and add a network object for the VLAN201 remote private network.

* [Créez un tunnel de site à site standard](https://documentation.stormshield.eu/SNS/v4/fr/Content/User_Configuration_Manual_SNS_v4/IPSec_VPN/Encryption_policy-Tunnels_tab-Site_to_Site-Creating.htm){.external}.

> [!tabs]
> **Étape 1**
>>
>> Ajoutez le réseau privé local et le réseau privé distant :
![SNS vrack](./images/ipsec-3.png)
> **Étape 2**
>>
>> Créez la passerelle distante :
![SNS vrack](./images/ipsec-4.png)
>>
> **Étape 3**
>>
>> Choisir une clé pré-partagée :
![SNS vrack](./images/ipsec-5.png)
>>
> **Étape 4**
>>
>> Créez et activez le tunnel :
![SNS vrack](./images/ipsec-7.png)
>>
> **Étape 5**
>>
>> Ajoutez une règle de filtrage comme celle-ci pour autoriser le trafic à travers le tunnel :
![SNS vrack](./images/ipsec-8.png)

* Synchronisez les deux instances HA SNS :

```console
ssh admin@<adresse_ip>
hasync
```

##### Configurer le second site

Procédez exactement de la même manière que pour le premier site, mais utilisez VLAN200 pour le réseau privé distant et l'adresse IP appropriée pour OVH_REMOTE_FW.

##### Testez le tunnel VPN IPsec

* À partir de la première instance de serveur web privé du site :

```console
ssh -A admin@<adresse_ip>
ssh ubuntu@<adresse_ip>
ping <adresse_ip>
PING <adresse_ip>(<adresse_ip>) 56(84) bytes of data.
64 bytes from <adresse_ip>: icmp_seq=1 ttl=64 time=15.2 ms
64 bytes from <adresse_ip>: icmp_seq=2 ttl=64 time=14.0 ms
```

* À partir de la seconde instance de serveur web privé du site :

```console
ssh -A admin@<adresse_ip>
ssh ubuntu@<adresse_ip>
ping <adresse_ip>
PING <adresse_ip> (<adresse_ip>) 56(84) bytes of data.
64 bytes from <adresse_ip>: icmp_seq=2 ttl=64 time=16.9 ms
64 bytes from <adresse_ip>: icmp_seq=3 ttl=64 time=16.4 ms
```

#### Usecase 4 : SSL/TLS VPN (de client à site) <a name="step5"></a>

Dans cet exemple, un client OpenVPN distant se connectera au réseau privé à l'intérieur de VLAN200.

![SNS vrack](./images/stormshield-ssl-vpn.png)

##### Configuration du répertoire LDAP

* [Créez un annuaire LDAP interne](https://documentation.stormshield.eu/SNS/v4/fr/Content/User_Configuration_Manual_SNS_v4/Directory_configuration/Creating_an_internal_LDAP.htm){.external} pour gérer les utilisateurs VPN. Dans un scénario de production, ce LDAP/AD doit être distant et non local.

![SNS vrack](./images/ssl-vpn-1.png)

* Créez l'annuaire des utilisateurs :

![SNS vrack](./images/ssl-vpn-2.png)

* Ajoutez un utilisateur à notre annuaire local :

![SNS vrack](./images/ssl-vpn-3.png)

* Choisissez un mot de passe pour le nouvel utilisateur :

![SNS vrack](./images/ssl-vpn-4.png)

##### Configuration des objets réseau VPN

* Créez deux objets réseau pour le client VPN SSL.

UDP client network :

![SNS vrack](./images/ssl-vpn-5.png)

Réseau client TCP :

![SNS vrack](./images/ssl-vpn-6.png)

##### Configuration du serveur VPN SSL

* Configurez le serveur VPN SSL :

![SNS vrack](./images/ssl-vpn-7.png)

##### Gestion des autorisations utilisateur

* Donnez à votre utilisateur l'autorisation d'utiliser le serveur VPN SSL (Configuration -> Utilisateurs -> Privilèges d'accès -> Accès détaillé -> Ajouter)

* Recherchez votre utilisateur :

![SNS vrack](./images/ssl-vpn-8.png)

* Autorisez VPN SSL :

![SNS vrack](./images/ssl-vpn-9.png)

##### Configuration des règles de filtrage

* Ajoutez une règle de filtrage comme celle-ci pour permettre au client VPN d'accéder au VLAN200 :

![SNS vrack](./images/ssl-vpn-10.png)

#### Synchronisation des instances SNS

* Synchronisez les deux instances HA SNS :

```console
ssh admin@<adresse_ip>
hasync
```

##### Testez le VPN SSL/TLS

> [!primary]
> Pour tester la connectivité SSL/TLS, vous pouvez utiliser n'importe quel appareil sur lequel OpenVPN est installé. Cet exemple inclut le test du client OpenVPN au-dessus de l'instance OpenStack dans une autre région.
>

* Téléchargez le fichier de configuration VPN (Configuration->VPN->SSL VPN->Configuration avancée->Exporter le fichier de configuration).

* Créez une instance client OpenVPN publique dans la région de votre choix :

« console
openstack server create --flavor b2-7 --image « Ubuntu 22.04 » --network Ext-Net --key-name sguyenne ubuntu-vpn-client
«

* Vérifiez l'IP assignée à l'instance et y copier le fichier de configuration :

```console
scp ~/Download/openvpn_mobile_client.ovpn ubuntu@<adresse_ip>:~
```

* Connectez-vous à l'instance :

```console
ssh ubuntu@<adresse_ip>
```

* Installez le client OpenVPN :

```console
sudo apt-get update
sudo apt-get install -y openvpn
```
* Connectez-vous au VPN :

```console
sudo openvpn --config openvpn_mobile_client.ovpn
Entrez le nom d'utilisateur de l'authentification : address@stormshield.ovh
🔐 le mot de passe d'authentification : *******************
```

* Test de ping de l'instance privée du serveur web :

```console
ssh ubuntu@<adresse_ip>
ping <adresse_ip>

PING <adresse_ip> (<adresse_ip>) 56(84) bytes of data.
64 bytes from <adresse_ip>: icmp_seq=1 ttl=64 time=14.1 ms
64 bytes from <adresse_ip>: icmp_seq=2 ttl=64 time=13.1 ms
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.