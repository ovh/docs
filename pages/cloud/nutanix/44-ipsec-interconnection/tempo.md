#### Configuration du site en FRANCE

##### Mise en place du VPN IPSEC vers le CANADA

Connectez-vous sur l'adresse publique de la passerelle de la FRANCE en HTTPS comme ceci https://adressepublique-pfsense-france.

Allez dans le menu `VPN`{.action} et choisissez `IPSec`{.action}.

![Create VPN from FRANCE 01](images/08-configure-vpn-from-france01.png){.thumbnail}

Cliquez sur `Add P1`{.action} pour créer la phase 1 du VPN IPSEC

![Create VPN from FRANCE 02](images/08-configure-vpn-from-france02.png){.thumbnail}

Choisissez ces informations

* **Description** : `VPN TO CANADA`
* **Key Exchange version** : `IKEv2`
* **Internet Protocol** : `IPv4`
* **Interface**  : `WAN`
* **Remote Gateway** : `Adresse publique du PFSENSE distant au CANADA`

Ensuite faites défilez la fênetre à l'aide de la `Barre de défilement`{.action}

![Create VPN from FRANCE 03](images/08-configure-vpn-from-france03.png){.thumbnail}

Collez dans **Pre-shared Key** la clé prépartagée qui a été générée sur la passerelle se trouvant au CANADA.

Comparez les paramètres dans `Encryption Algorithm` avec la passerelle du CANADA 

Ensuite faites défiler la fenêtre à l'aide de la `Barre de défilement`{.action}

![Create VPN from FRANCE 04](images/08-configure-vpn-from-france04.png){.thumbnail}

Cliquez sur `Save`{.action}

![Create VPN from FRANCE 05](images/08-configure-vpn-from-france05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}

![Create VPN from FRANCE 06](images/08-configure-vpn-from-france06.png){.thumbnail}

Cliquez sur `Show Phase 2 Entries`{.action}

![Create VPN from FRANCE 07](images/08-configure-vpn-from-france07.png){.thumbnail}

Cliquez sur A`dd P2`{.action} pour ajouter la phase 2 du VPN IPSEC

![Create VPN from FRANCE 08](images/08-configure-vpn-from-france08.png){.thumbnail}

Effectuez la saisie de ces informations

* **Description** : `TO LAN 192.168.10.0/24 CANADA`
* **Local Network** : `LAN subnet`
* **Remote Network** : Type `Network`, Address `192.168.10.0/24`

Faites défilez la fenêtre avec la `Barre de défilement`{.action}

![Create VPN from FRANCE 09](images/08-configure-vpn-from-france09.png){.thumbnail}

Vérifiez les paramètres de chiffrements avec la passerelle du CANADA et faites defilez la fenêtre à l'aide de la `Barre de défilement`{.action}

![Create VPN from FRANCE 10](images/08-configure-vpn-from-france10.png){.thumbnail}

Cliquez sur `Save`{.action}

![Create VPN from FRANCE 11](images/08-configure-vpn-from-france11.png){.thumbnail}

Cliquez sur `Apply Changes`{.action} pour finaliser la création du VPN IPSEC coté CANADA

![Create VPN from FRANCE 12](images/08-configure-vpn-from-france12.png){.thumbnail}

##### Ajout d'un règle de parefeu pour autoriser le flux réseau au travers du VPN IPSEC entre le CANADA et la FRANCE

Choisisez Cliquez sur `Rules`{.action} dans le menu `Firewall`

![Create IPSEC firewall rule CANADA 01](images/09-addipsecrule-from-france01.png){.thumbnail}

Positionnez vous sur l'onglet `IPsec`{.action} et cliquez en bas sur `Add`{.action} avec la flêche vers le haut.

![Create IPSEC firewall rule CANADA 02](images/09-addipsecrule-from-france02.png){.thumbnail}

Modifiez ces options :

* **Source** : `LAN net`
* **Destination** : `Network` et `192.168.10.0/24` 

Ensuite cliquez sur `Save`{.action} 

![Create IPSEC firewall rule CANADA 03](images/09-addipsecrule-from-france03.png){.thumbnail}

Cliquez à nouveau sur `Add`{.action} avec la flêche vers le haut. pour rajouter une deuxième règle

![Create IPSEC firewall rule CANADA 04](images/09-addipsecrule-from-france04.png){.thumbnail}

Modifiez ces options : 

* **Source** : `Network` et `192.168.10.0/24` 
* **Destination** : `LAN net`

Et cliquez sur `Save`{.action} 

![Create IPSEC firewall rule CANADA 05](images/09-addipsecrule-from-france05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action} 

![Create IPSEC firewall rule CANADA 06](images/09-addipsecrule-from-france06.png){.thumbnail}

Le paramétrage coté canada est terminé.



