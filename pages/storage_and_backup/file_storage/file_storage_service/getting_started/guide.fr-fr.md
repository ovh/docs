---
title: "File Storage Service - Premiers pas (Alpha)"
excerpt: "Découvrez comment configurer et gérer le service File Storage d’OVHcloud avec votre projet OpenStack. Ce guide couvre l’installation de la CLI, la création de shares, l’accès des clients et le montage sur vos machines virtuelles."
updated: 2025-10-21
---

## Objectif

OVHcloud propose un service File Storage basé sur OpenStack Manila. Ce service fournit des shares NFS gérés sur des réseaux privés, avec un accès ReadWriteMany (RWX) possible depuis plusieurs instances ou pods Kubernetes.

Il est accessible via OpenStack CLI, API, Manila CSI et Terraform.

> [!warning]
>
> Ce service est actuellement en Alpha, disponible uniquement dans la région **SBG5** et réservé aux clients Alpha enregistrés. Les fonctionnalités et la disponibilité peuvent évoluer.
>
> Pendant la phase Alpha, la taille autorisée des shares varie entre 10 Gio et 5 Tio.
>

## Prérequis

- Votre projet est autorisé pour Manila Alpha (inscrivez-vous [ici](https://labs.ovhcloud.com/en/file-storage/))
- Vous disposez déjà d’un [réseau privé](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack) dans votre projet Public Cloud
- Une [instance Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Un [environnement CLI OpenStack prêt à l’emploi](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

## En pratique

> [!primary]
>
> Actuellement, le service File Storage ne peut être consulté et géré que via la CLI OpenStack avec le plugin Manila. D’autres interfaces seront disponibles à l’avenir.
>

> [!tabs]
> Via la CLI OpenStack avec le plugin Manila
>> **1\. Installer le plugin CLI Manila**
>>
>> Si les commandes Manila ne sont pas encore disponibles, installez le plugin :
>>
>> ```bash
>> sudo apt update && sudo apt install -y python3-manilaclient
>> ```
>>
>> Vérifiez l’installation :
>>
>> ```bash
>> openstack share --help
>> ```
>>
>> Vous devriez voir des commandes telles que :
>>
>> - share create
>> - share list
>> - share network create
>> - share access create
>>
>> **2\. Vérifier les types de shares disponibles**
>>
>> Listez les types de shares disponibles dans votre région :
>>
>> ```bash
>> openstack share type list --os-region-name <REGION_NAME>
>> ```
>>
>> Sortie attendue :
>>
>> ```bash
>> +----------+-----------+------------+------------+
>> | ID       | Name      | Visibility | Is Default |
>> +----------+-----------+------------+------------+
>> | acceb7b4 | generic_0 | public     | True       |
>> +----------+-----------+------------+------------+
>> ```
>>
>> > [!primary]
>> >
>> > Remarque : Pour le type generic_0, vous devez obligatoirement choisir un share network, sinon le share ne pourra pas être créé.
>> >
>>
>> **3\. Créer un Share Network**
>>
>> Identifiez votre réseau privé et votre sous-réseau :
>>
>> ```bash
>> openstack network list --os-region-name <REGION_NAME>
>> openstack subnet list --os-region-name <REGION_NAME>
>> ```
>>
>> Récupérez leurs IDs :
>>
>> ```bash
>> openstack network show --os-region-name <REGION_NAME> -c id -f value <PRIVATE_NETWORK_NAME>
>> openstack subnet show --os-region-name <REGION_NAME> -c id -f value <PRIVATE_SUBNET_NAME>
>> ```
>>
>> > [!primary]
>> >
>> > Les IDs du réseau et du sous-réseau devraient ressembler à : **abc12345-def6-4abc-8def-123456abcdef**
>> >
>>
>> Créez un share network lié à votre réseau privé :
>>
>> ```bash
>> openstack share network create \
>>   --os-region-name <REGION_NAME> \
>>   --name <my-share-network-name> \
>>   --neutron-net-id <NETWORK_ID> \
>>   --neutron-subnet-id <SUBNET_ID>
>> ```
>>
>> > [!primary]
>> >
>> > Remarque : Remplacez `<my-share-network-name>` par le nom que vous souhaitez donner à votre share network.
>> >
>>
>> Vérifiez le share network :
>>
>> ```bash
>> openstack share network list --os-region-name <REGION_NAME>
>> ```
>>
>> **4\. Créer un share NFS**
>>
>> Créez un share NFS de 150 Go :
>>
>> ```bash
>> openstack share create \
>>   --os-region-name <REGION_NAME> \
>>   --share-type generic_0 \
>>   --share-network <my-share-network-name> \
>>   --name <my-first-share-name> \
>>   NFS 150
>> ```
>>
>> > [!primary]
>> >
>> > Remarque : Remplacez <my-first-share-name> par le nom que vous souhaitez donner à votre share.
>> >
>>
>> Surveillez l’état du share jusqu’à ce qu’il devienne `available` :
>>
>> ```bash
>> openstack share list --os-region-name <REGION_NAME>
>> ```
>>
>> **5\. Autoriser une VM cliente**
>>
>> Assurez-vous que votre VM cliente se trouve dans le même réseau privé que le share.
>>
>> Récupérez l’adresse IP privée de la VM :
>>
>> ```bash
>> openstack server show --os-region-name <REGION_NAME> <VM_NAME> -c addresses -f value
>> ```
>>
>> Exemple de sortie :
>>
>> ```bash
>> {'my-private-net': ['10.1.0.123', '57.123.88.111']}
>> ```
>>
>> Autorisez l’accès au share en utilisant l’IP privée de la VM (par exemple, 10.1.0.123) :
>>
>> ```bash
>> openstack share access create \
>>   --os-region-name <REGION_NAME> \
>>   <my-first-share-name> \
>>   ip 10.1.0.123
>> ```
>>
>> Vérifiez les accès :
>>
>> ```bash
>> openstack share access list --os-region-name <REGION_NAME> <my-first-share-name>
>> ```
>>
>> **6\. Récupérer le chemin d’export**
>>
>> Obtenez l’emplacement d’export NFS :
>>
>> ```bash
>> openstack share export location list --os-region-name <REGION_NAME> <my-first-share-name>
>> ```
>>
>> Exemple de sortie :
>>
>> ```bash
>> 10.1.0.12:/shares/share-abc12345-def6-4abc-8def-123456abcdef
>> ```
>>
>> > [!primary]
>> >
>> > Remarque : Ce chemin d’export est utilisé pour monter le share sur votre VM cliente.
>> >
>>
>> **7\. Monter le share sur votre VM cliente**
>>
>> Connectez-vous à votre VM et installez les utilitaires NFS :
>>
>> ```bash
>> sudo apt update && sudo apt install -y nfs-common
>> ```
>>
>> Créez un point de montage et montez le share :
>>
>> ```bash
>> sudo mkdir -p /mnt/share
>> sudo mount -t nfs4 10.1.0.12:/shares/share-abc12345-def6-4abc-8def-123456abcdef /mnt/share
>> ```
>>
>> Vérifiez le montage :
>>
>> ```bash
>> df -h /mnt/share
>> ```
>>
>> > [!primary]
>> >
>> > Remarque : Remplacez le chemin d’export par celui récupéré pour votre share.
>> >
>>
>> **8\. Vérifier la capacité et l’utilisation**
>>
>> Affichez l’espace disponible sur le share monté :
>>
>> ```bash
>> df -h /mnt/share
>> ```
>>
>> Exemple de sortie :
>>
>> ```bash
>> Example:
>> Filesystem                          Size  Used  Avail Use% Mounted on
>> 10.1.0.12:/shares/share-abc1...     150G  100M   150G   1% /mnt/share
>> ```
>>
>> > [!primary]
>> >
>> > Remarque : Cela vous permet de suivre la capacité de stockage et l’utilisation de votre share NFS.
>> >
>>
>> **9\. Gérer le cycle de vie du share**
>>
>> Redimensionner le share :
>>
>> > [!warning]
>> >
>> > Seule l’extension d’un share est autorisée pour le moment ; la réduction n’est pas supportée.
>> >
>>
>> ```bash
>> openstack share resize --os-region-name <REGION_NAME> <my-first-share-name> 200
>> ```
>>
>> Supprimer un share :
>>
>> ```bash
>> openstack share delete --os-region-name <REGION_NAME> <my-first-share-name>
>> ```
>>
>> Supprimer le share network :
>>
>> ```bash
>> openstack share network delete --os-region-name <REGION_NAME> <my-share-network-name>
>> ```
>>
>> > [!primary]
>> >
>> > Remarque : Assurez-vous qu’aucun share actif n’utilise le réseau avant de le supprimer.
>> >
>>
>> **10\. Dépannage**
>>
>> | Symptôme	                 | Cause	                                        | Solution                                                                                   |
>> | --------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
>> | `Unknown command ['share']` | CLI Manila non installée                         | Installez-la avec `sudo apt install python3-manilaclient`                                  |
>> | `Share network must be set` | Utilisation d’un type de share DHSS=True       | Fournissez `--share-network`                                                               |
>> | Cannot mount NFS            | IP non autorisée ou réseau incorrect             | Assurez-vous que la VM est sur le même sous-réseau privé et que la règle d’accès est créée |
>> | `403 Forbidden`             | Projet non autorisé pour Manila                  | Assurez-vous d’être inscrit à l’Alpha                                                      |
>> | Share stuck in creating     | ID de réseau ou sous-réseau invalide             | Vérifiez `NETWORK_ID` et `SUBNET_ID`                                                       |
>>
> Via Manila CSI dans l'environnement K8s
>> **1\. Prérequis supplémentaires :**
>>
>> - Helm CLI installé sur votre machine locale.
>> - OpenStack CLI configuré et prêt à l'emploi.
>> - Krew (gestionnaire de plugins kubectl) installé.
>> - Stern (plugin de suivi des logs kubectl) installé via Krew.
>> - Un cluster Kubernetes déployé dans un réseau privé au sein d'une région Public Cloud où les points de terminaison Manila sont accessibles.
>>
>> > [!primary]
>> >
>> > Ce guide fonctionne à la fois avec les clusters Managed Kubernetes Service (MKS) et les clusters Kubernetes autogérés.
>> >
>>
>> **2\. Installation de la ligne de commande Helm**
>>
>> ```bash
>> curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
>> chmod 700 get_helm.sh
>> ./get_helm.sh
>> ```
>>
>> **3\. Installation des outils Krew et Stern**
>>
>> Exécutez la commande suivante pour installer Krew dans votre environnement :
>>
>> ```bash
>> (
>>   set -x; cd "$(mktemp -d)" &&
>>   OS="$(uname | tr '[:upper:]' '[:lower:]')" &&
>>   ARCH="$(uname -m | sed -e 's/x86_64/amd64/' -e 's/\(arm\)\(64\)\?.*/\1\2/' -e 's/aarch64$/arm64/')" &&
>>   KREW="krew-${OS}_${ARCH}" &&
>>   curl -fsSLO "https://github.com/kubernetes-sigs/krew/releases/latest/download/${KREW}.tar.gz" &&
>>   tar zxvf "${KREW}.tar.gz" &&
>>   ./"${KREW}" install krew
>> )
>> export PATH="${KREW_ROOT:-$HOME/.krew}/bin:$PATH"
>> ```
>>
>> Une fois Krew installé, installez Stern avec :
>>
>> ```bash
>> kubectl krew install stern
>> ```
>>
>> **4\. Installation de la CLI OpenStack**
>>
>> Préparez votre environnement pour utiliser l'API OpenStack en installant python-openstackclient, en suivant [ce guide](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> Installez le client Manila pour gérer les partages du service File Storage :
>>
>> ```bash
>> pip install python-manilaclient
>> ```
>>
>> N'oubliez pas de mettre à jour votre script de complétion de shell pour activer l'autocomplétion OpenStack `share`.
>>
>> **5\. Installation du driver CSI NFS**
>>
>> Ajoutez le référentiel de chart Helm :
>>
>> ```bash
>> helm repo add csi-driver-nfs https://raw.githubusercontent.com/kubernetes-csi/csi-driver-nfs/master/charts
>> helm repo update
>> ```
>>
>> Listez les versions disponibles du chart CSI NFS :
>>
>> ```bash
>> helm search repo -l csi-driver-nfs
>> ```
>>
>> Installez la version choisie du chart Helm :
>>
>> > [!primary]
>> >
>> > Remplacez les flags facultatifs `--wait -v=5 --debug` selon vos besoins pour le débogage ou l'installation synchrone.
>> >
>>
>> ```bash
>> helm install csi-driver-nfs csi-driver-nfs/csi-driver-nfs \
>>   --namespace kube-system \
>>   --version v4.11.0 \
>>   [--wait -v=5 --debug]
>> ```
>>
>> Suivez les logs du driver CSI NFS :
>>
>> ```bash
>> kubectl stern -n kube-system -l app.kubernetes.io/instance=csi-driver-nfs
>> ```
>>
>> **6\. Installation du driver CSI Manila**
>>
>> Ajoutez le référentiel de chart Helm :
>>
>> ```bash
>> helm repo add cpo https://kubernetes.github.io/cloud-provider-openstack
>> helm repo update
>> ```
>>
>> Listez les versions disponibles du driver CSI Manila :
>>
>> ```bash
>> helm search repo -l openstack-manila-csi
>> ```
>>
>> Installez la version choisie du chart Helm :
>>
>> ```bash
>> helm install manila-csi cpo/openstack-manila-csi --version 2.33.1 --namespace kube-system [--values ./csi-config/helm-chart-values.yaml]
>> ```
>>
>> Suivez les logs du driver CSI Manila :
>>
>> ```bash
>> kubectl stern -n kube-system -l app=openstack-manila-csi
>> ```
>>
>> **7\. Préparation des ressources OpenStack pour Manila CSI**
>>
>> 7.1\. Créez un utilisateur OpenStack dédié pour Manila
>>
>> Vous avez besoin d'un utilisateur OpenStack séparé pour gérer les ressources Manila. Cet utilisateur peut être créé :
>>
>> - Via l'espace client OVHcloud (Public Cloud > Paramètres > Utilisateurs & Rôles)
>> - Ou via la CLI OVHcloud
>>
>> 7.2\. Collectez les détails du projet et de l'utilisateur OpenStack
>>
>> Téléchargez le fichier openrc de votre projet depuis l'espace client OVHcloud et notez les informations suivantes :
>>
>> - os-userName
>> - os-password
>> - os-domainName
>> - os-projectDomainID
>> - os-projectName
>> - os-projectDomainID
>>
>> Une fois ces valeurs obtenues, créez un fichier nommé secrets.yaml avec le contenu suivant. Ce secret Kubernetes permet au pilote CSI Manila de s'authentifier auprès d'OpenStack et de gérer les ressources Manila dans votre cluster.
>>
>> ```yaml
>> apiVersion: v1
>> kind: Secret
>> metadata:
>>   name: csi-manila-secrets
>>   namespace: default
>> stringData:
>>   # Mandatory
>>   os-authURL: "https://auth.cloud.ovh.net/v3"
>>   os-region: "SBG5"
>>
>>   # Openstack authentication
>>   os-userName: "<os-userName>"
>>   os-password: "<os-password>"
>>   os-domainName: "default"
>>   os-projectName: "os-projectName"
>>   os-projectDomainID: "default"
>> ```
>>
>> Ensuite, appliquez-le à votre cluster Kubernetes :
>>
>> ```bash
>> kubectl apply -f secrets.yaml
>> ```
>>
>> 7.3\. Configurez le réseau partagé OpenStack
>>
>> Manila nécessite un réseau partagé car le driver est configuré avec `DHSS=true` (`driver_handles_share_servers`).
>>
>> Cette ressource est gérée par le propriétaire du projet OpenStack.
>>
>> ```bash
>> # Listez les réseaux privés attachés à votre cluster MKS
>> openstack --os-region-name SBG5 network list
>>
>> # Récupérez l'ID du réseau
>> openstack --os-region-name SBG5 network show -c id -f value <PRIVATE_NETWORK_NAME>
>>
>> # Récupérez l'ID du sous-réseau lié à ce réseau
>> openstack --os-region-name SBG5 subnet show -c id -f value <PRIVATE_SUBNET_NAME>
>>
>> # Créez le réseau partagé Manila
>> openstack --os-region-name SBG5 share network create \
>>   --name mks-manila-csi-tests \
>>   --neutron-net-id <PRIVATE_NETWORK_ID> \
>>   --neutron-subnet-id <PRIVATE_SUBNET_ID>
>> ```
>>
>> Exemple de sortie :
>>
>> ```bash
>> +-----------------------------------+----------------------------------------------------------+
>> | Field                             | Value                                                    |
>> +-----------------------------------+----------------------------------------------------------+
>> | created_at                        | 2025-10-04T14:12:25.111776                               |
>> | description                       | None                                                     |
>> | id                                | 07363bc7-be2a-4a7d-b675-09844b344b3b                     |
>> | name                              | mks-manila-csi-tests                                     |
>> | network_allocation_update_support | True                                                     |
>> | project_id                        | <PROJECT_ID>                                             |
>> | security_service_update_support   | True                                                     |
>> | share_network_subnets             |                                                          |
>> |                                   | id = 90cf66fc-23eb-4dce-80a3-bf8fa3a912c3                |
>> |                                   | availability_zone = None                                 |
>> |                                   | created_at = 2025-10-04T14:12:25.126327                  |
>> |                                   | updated_at = None                                        |
>> |                                   | segmentation_id = None                                   |
>> |                                   | neutron_net_id = <PRIVATE_NETWORK_NAME>                  |
>> |                                   | neutron_subnet_id = <PRIVATE_SUBNET_NAME>                |
>> |                                   | ip_version = None                                        |
>> |                                   | cidr = None                                              |
>> |                                   | network_type = None                                      |
>> |                                   | mtu = None                                               |
>> |                                   | gateway = None                                           |
>> | status                            | active                                                   |
>> | updated_at                        | None                                                     |
>> +-----------------------------------+----------------------------------------------------------+
>> ```
>>
>> **8\. Configuration du driver CSI Manila**
>>
>> Une fois le réseau de share OpenStack créé, et avant de configurer le pilote CSI Manila, vous devez définir la plage CIDR utilisée par vos nœuds Kubernetes. Cela garantit que les nœuds peuvent accéder aux shares Manila.
>>
>> Éditez la ConfigMap de runtime :
>>
>> Créez un fichier nommé `manila-runtime-configmap.yaml` et mettez à jour le champ `nfs.matchExportLocationAddress` afin qu'il corresponde au CIDR de votre cluster :
>>
>> ```yaml
>> apiVersion: v1
>> kind: ConfigMap
>> metadata:
>>   name: manila-csi-runtimeconf-cm
>>   namespace: default
>>   annotations:
>>     meta.helm.sh/release-name: manila-csi
>>     meta.helm.sh/release-namespace: default
>>   labels:
>>     app.kubernetes.io/managed-by: Helm
>> data:
>>   runtimeconfig.json: |
>>     {
>>       "nfs": {
>>         # When mounting an NFS share, select an export location with
>>         # this IP address. No match between this address and
>>         # at least a single export location for this share will
>>         # result in an error.
>>         # Expects a CIDR-formatted address. If prefix is not provided,
>>         # /32 or /128 prefix is assumed for IPv4 and IPv6 respectively.
>>         "matchExportLocationAddress": "<SUBNET_CIDR>"
>>       }
>>     }
>> ```
>>
>> Exemple :
>>
>> ```bash
>> "nfs":
>>   "matchExportLocationAddress": "10.42.0.0/16"
>> ```
>>
>> Appliquez la ConfigMap à votre cluster Kubernetes :
>>
>> ```bash
>> # Optionnel si la configuration de runtime est déjà définie dans les valeurs Helm
>> kubectl apply -f manila-runtime-configmap.yaml
>> ```
>>
>> **9\. Création de shares NFS via provisionnement dynamique**
>>
>> Pour permettre au driver CSI Manila de créer dynamiquement des shares Manila et de les utiliser comme volumes Kubernetes, vous devez définir une StorageClass dans votre cluster. Cette StorageClass spécifie le réseau partagé qui sera utilisé pour créer et accorder l'accès aux exports NFS.
>>
>> Récupérez l'ID du réseau partagé en utilisant la CLI OpenStack pour obtenir l'ID de votre réseau partagé :
>>
>> ```bash
>> openstack --os-region-name SBG5 share network list -f value -c ID
>> ```
>>
>> Configurez la StorageClass :
>>
>> - Créez un fichier nommé `dynamic-storageclass.yaml` avec le contenu suivant :
>>
>> ```yaml
>> apiVersion: storage.k8s.io/v1
>> kind: StorageClass
>> metadata:
>>   name: csi-manila-nfs
>> provisioner: nfs.manila.csi.openstack.org
>> allowVolumeExpansion: true
>> parameters:
>>   # Manila share type
>>   # default value: default
>>   # openstack share type list to find proper value
>>   type: generic_0
>>   # /!\ MANDATORY /!\
>>   # openstack share network list
>>   shareNetworkID: "<OS_SHARE_NETWORK_ID>"
>>   nfs-shareClient: "<SUBNET_CIDR>"
>>
>>   csi.storage.k8s.io/provisioner-secret-name: csi-manila-secrets
>>   csi.storage.k8s.io/provisioner-secret-namespace: default
>>   csi.storage.k8s.io/controller-expand-secret-name: csi-manila-secrets
>>   csi.storage.k8s.io/controller-expand-secret-namespace: default
>>   csi.storage.k8s.io/node-stage-secret-name: csi-manila-secrets
>>   csi.storage.k8s.io/node-stage-secret-namespace: default
>>   csi.storage.k8s.io/node-publish-secret-name: csi-manila-secrets
>>   csi.storage.k8s.io/node-publish-secret-namespace: default
>> ```
>>
>> - Mettez à jour la valeur `parameter.shareNetworkID` avec l'identifiant réseau partagé.
>> - Mettez à jour la valeur `parameter.nfs-shareClient` avec le CIDR du sous-réseau défini lors de la création du cluster.
>>
>> Créez la StorageClass dynamique en appliquant la StorageClass à votre cluster :
>>
>> ```bash
>> # Une StorageClass ne peut pas être mise à jour. Si des modifications sont nécessaires, supprimez-la et recréez-la.
>> kubectl apply -f dynamic-storageclass.yaml
>> ```
>>
>> Une fois la StorageClass créée, créez un fichier nommé `nfs-pvc.yaml` définissant une PersistentVolumeClaim (PVC) qui utilise cette StorageClass. Par exemple, demandez un volume de 15 Gi avec un accès `ReadWriteMany` (RWX) :
>>
>> ```yaml
>> apiVersion: v1
>> kind: PersistentVolumeClaim
>> metadata:
>>   name: nfs-share-pvc
>> spec:
>>   accessModes:
>>     - ReadWriteMany
>>   resources:
>>     requests:
>>       storage: 15Gi
>>   storageClassName: csi-manila-nfs
>> ```
>>
>> ```bash
>> kubectl apply -f nfs-pvc.yaml
>> ```
>>
>> Après avoir appliqué la demande de volume, listez les nouveaux shares Manila créés dans votre projet Public Cloud :
>>
>> ```bash
>> openstack --os-region SBG5 share list
>> ```
>>
>> Exemple de sortie :
>>
>> ```bash
>> +--------------------------------------+------------------------------------------+------+-------------+-----------+-----------+-----------------+------+-------------------+
>> | ID                                   | Name                                     | Size | Share Proto | Status    | Is Public | Share Type Name | Host | Availability Zone |
>> +--------------------------------------+------------------------------------------+------+-------------+-----------+-----------+-----------------+------+-------------------+
>> | 9484d5f3-7bf7-486b-b88e-40bbedeet9f3 | pvc-78135a68-c6f4-48fe-8644-454b387a3ad4 |   15 | NFS         | available | False     | generic_0       |      | nova              |
>> +--------------------------------------+------------------------------------------+------+-------------+-----------+-----------+-----------------+------+-------------------+
>> ```
>>
>> Créez un fichier nommé `nfs-deployment.yaml` avec le contenu suivant :
>>
>> ```yaml
>> apiVersion: apps/v1
>> kind: Deployment
>> metadata:
>>   name: nfs-share
>>   labels:
>>     app: nfs-share
>> spec:
>>   replicas: 2
>>   selector:
>>     matchLabels:
>>       app: nfs-share
>>   template:
>>     metadata:
>>       labels:
>>         app: nfs-share
>>     spec:
>>       containers:
>>       - name: web-server
>>         resources:
>>           limits:
>>             cpu: 250m
>>             memory: 256Mi
>>           requests:
>>             cpu: 100m
>>             memory: 256Mi
>>         image: nginx
>>         imagePullPolicy: IfNotPresent
>>         volumeMounts:
>>           - name: nfs-share-pvc
>>             mountPath: /var/lib/www
>>       volumes:
>>       - name: nfs-share-pvc
>>         persistentVolumeClaim:
>>           claimName: nfs-share-pvc
>>           readOnly: false
>> ```
>>
>> Déployez le serveur web avec 2 répliques, qui monteront et partageront le volume `RWX` créé précédemment :
>>
>> ```bash
>> kubectl apply -f nfs-deployment.yaml
>> ```
>>
>> Vous pouvez vérifier la fonctionnalité RWX en vous connectant à un pod en utilisant la commande `kubectl exec` et en créant un fichier dans le répertoire monté (par exemple, `/var/lib/www/`). Ensuite, connectez-vous au deuxième pod et vérifiez que le fichier est visible. Si c'est le cas, votre share Manila exposé via NFS fonctionne correctement.
>>
>> **10\. Redimensionner un share NFS à l'aide du provisionnement dynamique**
>>
>> > [!warning]
>> >
>> > Le redimensionnement d'un share NFS n'est pris en charge que pour :
>> >
>> > - Les PersistentVolumeClaims (PVC) provisionnés dynamiquement
>> > - Les volumes démontés (vous devez réduire votre déploiement avant de redimensionner pour éviter les erreurs)
>> >
>> > À l'heure actuelle, seule l'extension de share est prise en charge — il n'est pas possible de réduire un volume.
>> >
>>
>> Pour redimensionner un share Manila existant :
>>
>> Réduisez le déploiement pour vous assurer que le volume est démonté :
>>
>> ```bash
>> kubectl scale deployment nfs-share --replicas 0
>> ```
>>
>> Modifiez le PVC pour demander une nouvelle taille (par exemple, 42 Gi) :
>>
>> ```bash
>> kubectl patch pvc nfs-share-pvc -p '{ "spec": { "resources": { "requests": { "storage": "42Gi" }}}}'
>> ```
>>
>> Vérifiez que le share OpenStack a été mis à jour :
>>
>> ```bash
>> openstack --os-region SBG5 share show <SHARE_ID>
>> ```
>>
>> Si le share a été étendu avec succès, redimensionnez le déploiement :
>>
>> ```bash
>> kubectl scale deployment nfs-share --replicas 2
>> ```
>>
>> > [!warning]
>> >
>> > Toute tentative de redimensionnement d'un PVC qui n'est pas provisionné dynamiquement par une StorageClass entraînera une erreur telle que :
>> >
>> > error: persistentvolumeclaims "existing-nfs-share-pvc" could not be patched: persistentvolumeclaims "existing-nfs-share-pvc" is forbidden: only dynamically provisioned pvc can be resized and the storageclass that provisions the pvc must support resize
>> >
>>
>> **11. Montage d'un share Manila existant comme volume dans les pods**
>>
>> Comme indiqué précédemment, une StorageClass Kubernetes peut créer dynamiquement des shares Manila exposés via NFS. Alternativement, vous pouvez utiliser un share Manila pré-provisionné et le monter directement dans un pod.
>>
>> Créez un nouveau share avec la CLI OpenStack :
>>
>> ```bash
>> openstack --os-region SBG5 share create \
>>   --share-type <SHARE_TYPE> \
>>   --share-network <SHARE_NETWORK_ID> \
>>   --name <NFS_SHARE_NAME> \
>>   SHARE_PROTOCOL SHARE_SIZE
>> ```
>>
>> Où :
>>
>> - `SHARE_TYPE` est `generic_0` par défaut. Vous pouvez vérifier les types de share existants avec :
>>
>> ```bash
>> openstack --os-region SBG5 share type list
>> ```
>>
>> - `SHARE_NETWORK_ID` est l'identifiant de votre réseau partagé.
>> - `NFS_SHARE_NAME` est le nom de votre share NFS.
>> - `SHARE_PROTOCOL` est le protocole à utiliser (actuellement, seul NFS est pris en charge).
>> - `SHARE_SIZE` est la taille à allouer à votre volume NFS (en GiB).
>>
>> Créez une règle d'accès au share :
>>
>> ```bash
>> openstack --os-region SBG5 share access create <NFS_SHARE_NAME> ip <SUBNET_CIDR>
>> ```
>>
>> Où :
>>
>> - `SHARE_ACCESS_NAME` est le nom du share.
>> - `SUBNET_CIDR` est le CIDR utilisé lors de la configuration du runtime Manila CSI.
>>
>> >> Récupérez l'ID de share NFS et l'ID d'accès au share, puis créez un fichier nommé `static-provisioning.yaml` et mettez à jour les paramètres `volumeAttributes.shareID` et `volumeAttributes.shareAccessID` :
>>
>> ```yaml
>> apiVersion: v1
>> kind: PersistentVolume
>> metadata:
>>   name: preprovisioned-nfs-share
>>   labels:
>>     name: preprovisioned-nfs-share
>> spec:
>>   accessModes:
>>   - ReadWriteMany
>>   capacity:
>>     storage: 120Gi
>>   csi:
>>     driver: nfs.manila.csi.openstack.org
>>     volumeHandle: preprovisioned-nfs-share
>>     nodeStageSecretRef:
>>       name: csi-manila-secrets
>>       namespace: default
>>     nodePublishSecretRef:
>>       name: csi-manila-secrets
>>       namespace: default
>>     volumeAttributes:
>>       shareID: <SHARE_ID>
>>       shareAccessID: <SHARE_ACCESS_ID>
>> ---
>> apiVersion: v1
>> kind: PersistentVolumeClaim
>> metadata:
>>   name: existing-nfs-share-pvc
>> spec:
>>   accessModes:
>>   - ReadWriteMany
>>   resources:
>>     requests:
>>       storage: 120Gi
>>   storageClassName: "" # <--- Prevent default Cinder CSI usage
>>   selector:
>>     matchExpressions:
>>     - key: name
>>       operator: In
>>       values: ["preprovisioned-nfs-share"]
>> ```
>>
>> Appliquez le manifeste pour créer un volume persistant et sa demande de volume persistant en utilisant le share NFS pré-provisionné. Le share Manila ne sera utilisé que si le pod qui réclame la demande de volume est déployé dans votre cluster :
>>
>> ```bash
>> kubectl apply -f static-provisioning.yaml
>> ```
>>
>> Déployez un pod qui monte ce share :
>>
>> ```bash
>> kubectl apply -f pod.yaml
>> ```
>>
>> Vous pouvez maintenant utiliser `kubectl exec` pour accéder au pod et exécuter `df -h` pour vérifier que le share Manila pré-créé est correctement monté.
>>
>> **CLI utiles**
>>
>> Avec vos informations d'identification OpenStack chargées dans l'environnement, vous pouvez gérer les shares Manila en utilisant la CLI OpenStack. Les commandes courantes incluent :
>>
>> ```bash
>> openstack share list # Liste tous les shares
>> openstack share type list # Liste les types de share disponibles
>> openstack share access list|create|delete [${SHARE_ID}] # Gérez les règles d'accès pour un share spécifique
>> openstack share list|create|delete [${SHARE_ID}] # Créez, listez ou supprimez un share par son ID
>> openstack share message list # pour voir les erreurs liées aux ressources Manila
>> ```
>>
>> **Ressources utiles**
>>
>> [Votre stockage ReadWriteMany (RWX) dans k8s avec Manila CSI](https://www.youtube.com/watch?v=WSMZDKx4JAI){.external}
>> [Manila/Concepts](https://wiki.openstack.org/wiki/Manila/Concepts#share_type){.external}
>> [Approche générique pour le provisionnement de share](https://docs.openstack.org/manila/latest/admin/generic_driver.html){.external}
>> [Plugin officiel Manila CSI sur GitHub](https://github.com/kubernetes/cloud-provider-openstack/tree/master/examples/manila-csi-plugin){.external}
>>
> Via Terraform
>> **1\. Prérequis additionnels**
>>
>> - Vous disposez déjà d'un environnement [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform) fonctionnel.
>>
>> > [!primary]
>> >
>> > Vous pouvez trouver des exemples utiles [ici](https://github.com/ovh/public-cloud-examples/tree/main/storage/file-storage-as-a-service){.external}
>> >
>>
>> **2\. Déclarer le fournisseur OpenStack**
>>
>> Ajoutez la configuration suivante à votre `main.tf` pour spécifier les fournisseurs Terraform requis :
>>
>> ```
>> vim main.tf
>>
>> terraform {
>>   required_providers {
>>     ovh = {
>>       source  = "ovh/ovh"
>>     }
>>  
>>     openstack = {
>>       source  = "terraform-provider-openstack/openstack"
>>     }
>>   }
>> }
>> ```
>>
>> Ce bloc garantit que Terraform utilise les fournisseurs corrects pour gérer les ressources OVH et OpenStack.
>>
>> **3\. Récupérer les informations de votre réseau privé**
>>
>> Ajoutez les blocs suivants à votre fichier `main.tf` pour récupérer les détails de votre réseau privé et sous-réseau :
>>
>> ```bash
>> data "openstack_networking_network_v2" "private_network" {
>>   name   = "<YOUR_PRIVATE_NETWORK_NAME>"
>>   region = "<YOUR_REGION_NAME>"
>> }
>>
>> data "openstack_networking_subnet_v2" "private_subnet" {
>>   name   = "<YOUR_PRIVATE_SUBNET_NAME>"
>>   region = "<YOUR_REGION_NAME>"
>> }
>> ```
>>
>> Ces blocs de données permettent à Terraform d'interroger OpenStack et de récupérer les détails nécessaires de votre réseau privé et sous-réseau, requis pour configurer le service File Storage.
>>
>> **4\. Créer un réseau partagé**
>>
>> Ajoutez la ressource suivante à votre `main.tf` pour créer un réseau partagé pour votre service File Storage :
>>
>> ```bash
>> resource "openstack_sharedfilesystem_sharenetwork_v2" "sharenetwork" {
>>   name              = "<YOUR_SHARE_NETWORK_NAME>"
>>   region            = "<YOUR_REGION_NAME>"
>>   neutron_net_id    = data.openstack_networking_network_v2.private_network.id
>>   neutron_subnet_id = data.openstack_networking_subnet_v2.private_subnet.id
>> }
>> ```
>>
>> Cette ressource crée un réseau partagé dans OpenStack, l'associant à votre réseau privé et sous-réseau existants. Elle est nécessaire pour provisionner et gérer des systèmes de fichiers partagés.
>>
>> **5\. Créer un partage NFS**
>>
>> Ajoutez la ressource suivante à votre `main.tf` pour créer un partage NFS sur votre service File Storage :
>>
>> ```bash
>> vim main.tf
>>
>>
>> resource "openstack_sharedfilesystem_share_v2" "share" {
>>   name             = "<YOUR_SHARE_NAME>"
>>   region           = "<YOUR_REGION_NAME>"
>>   share_type       = "generic_0"
>>   share_proto      = "NFS"
>>   size             = 150
>>   share_network_id = openstack_sharedfilesystem_sharenetwork_v2.sharenetwork.id
>> }
>> ```
>>
>> Cette ressource provisionne un partage NFS dans OpenStack, lié au réseau partagé précédemment créé. Ajustez la `size` et `share_type` selon vos besoins.
>>
>> **6\. Autoriser une machine virtuelle cliente**
>>
>> Assurez-vous que votre machine virtuelle cliente est connectée au même réseau privé que votre partage.
>>
>> Récupérez l'adresse IP privée de la machine virtuelle :
>>
>> ```bash
>> openstack server show --os-region-name <YOUR_REGION_NAME> <YOUR_CLIENT_VM_NAME> -c addresses -f value
>> ```
>>
>> Exemple de sortie :
>>
>> ```bash
>> {'my-private-net': ['10.1.0.123', '57.123.88.111']}
>> ```
>>
>> Utilisez l'adresse IP privée (par exemple : `10.1.0.123`) pour accorder l'accès au partage NFS :
>>
>> ```bash
>> resource "openstack_sharedfilesystem_share_access_v2" "share_access" {
>>   share_id     = openstack_sharedfilesystem_share_v2.share.id
>>   region       = "<YOUR_REGION_NAME>"
>>   access_type  = "ip"
>>   access_to    = "10.1.0.123"
>>   access_level = "rw"
>> }
>> ```
>>
>> Cette ressource autorise la machine virtuelle cliente spécifiée à accéder au partage NFS avec des permissions en lecture / écriture.
>>
>> **7\. Récupérer le chemin d'exportation**
>>
>> Ajoutez le bloc de sortie suivant à votre `main.tf` pour récupérer le chemin d'exportation du partage NFS :
>>
>> ```bash
>> output "export_path" {
>>   value = openstack_sharedfilesystem_share_v2.share.export_locations[0].path
>> }
>> ```
>>
>> Cette sortie fournit le chemin d'exportation NFS, utilisable par les machines virtuelles clientes pour monter le partage.
>>
>> **8\. Monter le partage sur votre machine virtuelle cliente**
>>
>> Connectez-vous à votre machine virtuelle cliente et installez les utilitaires NFS nécessaires :
>>
>> ```bash
>> sudo apt update && sudo apt install -y nfs-common
>> ```
>>
>> Créez un point de montage et montez le partage :
>>
>> ```bash
>> sudo mkdir -p /mnt/share
>> sudo mount -t nfs4 <NFS_EXPORT_PATH> /mnt/share
>> ```
>>
>> Remplacez <NFS_EXPORT_PATH> par le chemin d'exportation récupéré via Terraform (par exemple : `10.1.0.12:/shares/share-abc12345-def6-4abc-8def-123456abcdef`).
>>
>> Vérifiez le montage :
>>
>> ```bash
>> df -h /mnt/share
>> ```
>>
>> Rendez le montage persistant après les redémarrages :
>>
>> ```bash
>> echo "<NFS_EXPORT_PATH> /mnt/share nfs nfsvers=4 defaults,noauto 0 0" | sudo tee -a /etc/fstab
>> ```
>>
>> Cela garantit que votre partage NFS est automatiquement remonté après les redémarrages de la machine virtuelle.
>>
>> **9\. Vérifier la capacité et l'utilisation**
>>
>> Une fois le partage NFS monté, vérifiez son espace disponible et son utilisation :
>>
>> ```bash
>> df -h /mnt/share
>> ```
>>
>> Exemple de sortie :
>>
>> ```bash
>> Filesystem                          Size  Used  Avail Use% Mounted on
>> 10.1.0.12:/shares/share-abc1...     150G  100M   150G   1% /mnt/share
>> ```
>>
>> Cette commande affiche la taille totale, l'espace utilisé et l'espace disponible sur votre partage NFS monté.
>>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).