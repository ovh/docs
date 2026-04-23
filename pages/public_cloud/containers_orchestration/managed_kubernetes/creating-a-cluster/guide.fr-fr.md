---
title: Créer un cluster
excerpt: 'Découvrez comment créer un cluster Kubernetes managé par OVHcloud via l''espace client, l''API, la CLI, Terraform, Pulumi ou CDK pour Terraform'
updated: 2026-04-23
---

## Objectif

Le service OVHcloud Managed Kubernetes vous permet de déployer des clusters prêts pour la production sans vous soucier de leur installation ou de leur maintenance. Créez un cluster via l'espace client OVHcloud, l'API, la CLI, ou automatisez le processus grâce à des outils d'Infrastructure as Code comme Terraform, Pulumi ou CDK pour Terraform.

## Prérequis

- Un [projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud

> [!success]
> Bénéficiez de tarifs réduits en vous engageant sur une durée de 1 à 36 mois sur vos ressources Public Cloud. Plus d'informations sur notre page [Savings Plans](/links/public-cloud/savings-plan).

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Chemin de navigation :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!primary]
> L'API OVHcloud, la CLI, Terraform, CDK pour Terraform et Pulumi nécessitent des identifiants API OVHcloud (`application_key`, `application_secret`, `consumer_key`). Suivez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour les générer.

## En pratique

> [!tabs]
> Via l'espace client OVHcloud
>> <iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/ApfujBFT82g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
>>
>> Cliquez sur `Managed Kubernetes Service`{.action} dans le menu de gauche, puis sur `Créer un cluster`{.action}.
>>
>> ![Créer un cluster](images/creating-a-cluster1.png){.thumbnail}
>>
>> Sélectionnez une localisation pour votre nouveau cluster.
>>
>> ![Sélectionner une localisation](images/creating-a-cluster2.png){.thumbnail}
>>
>> Choisissez la version mineure de Kubernetes.
>>
>> ![Choisir la version mineure de Kubernetes](images/creating-a-cluster3.png){.thumbnail}
>>
>> > [!primary]
>> > Nous recommandons d'utiliser toujours la dernière version stable. Consultez notre page [Fin de vie / fin de support](/pages/public_cloud/containers_orchestration/managed_kubernetes/eos-eol-policies) pour comprendre notre politique de versions.
>>
>> Vous pouvez intégrer votre cluster Kubernetes à un réseau privé via le vRack OVHcloud. Pour plus d'informations, consultez notre guide [Utiliser le vRack](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-vrack).
>>
>> ![Choisir un réseau privé pour ce cluster](images/creating-a-cluster4.png){.thumbnail}
>>
>> Configurez le node pool par défaut. Un node pool est un groupe de nœuds partageant la même configuration. Consultez le guide [Gérer les node pools](/pages/public_cloud/containers_orchestration/managed_kubernetes/managing-nodes) pour plus d'informations.
>>
>> ![Node pool](images/creating-a-cluster5.png){.thumbnail}
>>
>> Définissez la taille du node pool par défaut.
>>
>> ![Node pool par défaut](images/creating-a-cluster6.png){.thumbnail}
>>
>> Activez optionnellement l'`Autoscaling`{.action} et définissez la taille minimale et maximale du pool.
>>
>> ![Autoscaling](images/creating-a-cluster7.png){.thumbnail}
>>
>> Choisissez le mode de facturation (mensuel ou horaire) et activez optionnellement le mode anti-affinité.
>>
>> ![Choisir le mode de facturation](images/creating-a-cluster8.png){.thumbnail}
>>
>> > [!primary]
>> > L'anti-affinité répartit les nœuds sur différents hyperviseurs pour une meilleure tolérance aux pannes. Les node pools en anti-affinité sont limités à 5 nœuds. La facturation mensuelle ne peut pas être convertie en facturation horaire par la suite.
>>
>> Saisissez un nom pour votre cluster et cliquez sur `Envoyer`{.action}.
>>
>> ![Saisir un nom pour votre cluster](images/creating-a-cluster9.png){.thumbnail}
>>
>> Le cluster sera disponible dans quelques minutes.
>>
>> > [!warning]
>> > Une fois un cluster créé, la région et l'identifiant du réseau privé ne peuvent plus être modifiés.
>>
> Via l'API OVHcloud
>> Connectez-vous à [l'explorateur d'API OVHcloud](/links/api).
>>
>> **Créer le cluster :**
>>
>> Appelez `POST /cloud/project/{serviceName}/kube` avec le corps suivant :
>>
>> ```json
>> {
>>   "name": "my-cluster",
>>   "region": "GRA7",
>>   "version": "1.34"
>> }
>> ```
>>
>> > [!primary]
>> > Nous recommandons d'utiliser toujours la dernière version stable. Consultez notre page [Fin de vie / fin de support](/pages/public_cloud/containers_orchestration/managed_kubernetes/eos-eol-policies) pour comprendre notre politique de versions.
>>
>> Notez l'`id` retourné dans la réponse — il sera nécessaire pour créer le node pool.
>>
>> **Créer un node pool :**
>>
>> Appelez `POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool` avec le corps suivant :
>>
>> ```json
>> {
>>   "name": "my-pool",
>>   "flavorName": "b2-7",
>>   "desiredNodes": 3,
>>   "minNodes": 3,
>>   "maxNodes": 3
>> }
>> ```
>>
>> > [!warning]
>> > Les noms de node pool n'acceptent que les caractères minuscules, les chiffres et le tiret `-`. Les underscores et les points ne sont pas supportés.
>>
>> > [!warning]
>> > Une fois un cluster créé, la région et l'identifiant du réseau privé ne peuvent plus être modifiés.
>>
> Via la CLI OVHcloud
>> > [!primary]
>> > Installez la [CLI OVHcloud](https://github.com/ovh/ovhcloud-cli) et configurez vos identifiants avant de commencer.
>>
>> **Créer le cluster :**
>>
>> ```bash
>> ovhcloud cloud kube create \
>>   --cloud-project <serviceName> \
>>   --name my-cluster \
>>   --region GRA7 \
>>   --version 1.34
>> ```
>>
>> > [!primary]
>> > Nous recommandons d'utiliser toujours la dernière version stable. Consultez notre page [Fin de vie / fin de support](/pages/public_cloud/containers_orchestration/managed_kubernetes/eos-eol-policies) pour comprendre notre politique de versions.
>>
>> Notez l'`id` dans la sortie — il sera nécessaire pour créer le node pool.
>>
>> **Créer un node pool :**
>>
>> ```bash
>> ovhcloud cloud kube nodepool create <kubeId> \
>>   --cloud-project <serviceName> \
>>   --name my-pool \
>>   --flavor-name b2-7 \
>>   --desired-nodes 3 \
>>   --min-nodes 3 \
>>   --max-nodes 3
>> ```
>>
>> > [!warning]
>> > Les noms de node pool n'acceptent que les caractères minuscules, les chiffres et le tiret `-`. Les underscores et les points ne sont pas supportés.
>>
>> > [!warning]
>> > Une fois un cluster créé, la région et l'identifiant du réseau privé ne peuvent plus être modifiés.
>>
> Via Terraform
>> > [!primary]
>> > Installez [Terraform CLI](https://www.terraform.io/docs/cli/index.html) (version 0.12.x minimum) avant de commencer.
>>
>> OVHcloud fournit un [provider Terraform](https://registry.terraform.io/providers/ovh/ovh/latest) disponible dans le registre officiel Terraform.
>>
>> L'identifiant de votre projet Public Cloud correspond au `service_name`. Récupérez-le via le bouton `Copier dans le presse-papier`{.action} dans la section Public Cloud.
>>
>> ![Copier le service name](images/get-service-name.png){.thumbnail}
>>
>> **provider.tf :**
>>
>> ```bash
>> terraform {
>>   required_providers {
>>     ovh = {
>>       source = "ovh/ovh"
>>     }
>>   }
>> }
>>
>> provider "ovh" {
>>   endpoint           = "ovh-eu"
>>   application_key    = "<your_access_key>"
>>   application_secret = "<your_application_secret>"
>>   consumer_key       = "<your_consumer_key>"
>> }
>> ```
>>
>> Utilisez des variables d'environnement pour éviter de stocker des secrets dans votre code source : `OVH_ENDPOINT`, `OVH_APPLICATION_KEY`, `OVH_APPLICATION_SECRET`, `OVH_CONSUMER_KEY`.
>>
>> **variables.tf :**
>>
>> ```bash
>> variable service_name {
>>   type    = string
>>   default = "<your_service_name>"
>> }
>> ```
>>
>> **ovh_kube_cluster.tf :**
>>
>> ```bash
>> resource "ovh_cloud_project_kube" "my_kube_cluster" {
>>    service_name = "${var.service_name}"
>>    name         = "my_kube_cluster"
>>    region       = "GRA7"
>>    version      = "1.34"
>> }
>>
>> resource "ovh_cloud_project_kube_nodepool" "node_pool" {
>>    service_name  = "${var.service_name}"
>>    kube_id       = ovh_cloud_project_kube.my_kube_cluster.id
>>    name          = "my-pool"
>>    flavor_name   = "b2-7"
>>    desired_nodes = 3
>>    max_nodes     = 3
>>    min_nodes     = 3
>> }
>> ```
>>
>> **output.tf :**
>>
>> ```bash
>> output "kubeconfig" {
>>   value     = ovh_cloud_project_kube.my_kube_cluster.kubeconfig
>>   sensitive = true
>> }
>> ```
>>
>> > [!warning]
>> > Les noms de node pool n'acceptent que les caractères minuscules, les chiffres et le tiret `-`. Les underscores et les points génèrent une erreur `gzip: invalid header`.
>>
>> Déployez :
>>
>> ```bash
>> terraform init && terraform apply
>> ```
>>
> Via CDK pour Terraform
>> > [!primary]
>> > Vous avez besoin de [kubectl](https://kubernetes.io/docs/tasks/tools/), de la [CLI CDK pour Terraform](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-install) et de [Go](https://go.dev/doc/install) installés.
>>
>> ![CDKTF](images/cdktf.png){.thumbnail}
>>
>> CDKTF traduit le code Go en HCL Terraform et utilise le provider Terraform OVHcloud. Définissez les identifiants nécessaires sous forme de variables d'environnement :
>>
>> ```bash
>> export OVH_ENDPOINT="ovh-eu"
>> export OVH_APPLICATION_KEY="xxx"
>> export OVH_APPLICATION_SECRET="xxx"
>> export OVH_CONSUMER_KEY="xxx"
>> export OVH_CLOUD_PROJECT_SERVICE="xxx"
>> ```
>>
>> Initialisez le projet :
>>
>> ```bash
>> mkdir ovhcloud-kube && cd ovhcloud-kube
>> cdktf init --template=go --providers="ovh/ovh@~>0.37.0" "hashicorp/local" --providers-force-local --local --project-name=ovhcloud-kube
>> ```
>>
>> Éditez `main.go` :
>>
>> ```go
>> package main
>>
>> import (
>>     "os"
>>     "path"
>>
>>     "cdk.tf/go/stack/generated/hashicorp/local/file"
>>     local "cdk.tf/go/stack/generated/hashicorp/local/provider"
>>     "cdk.tf/go/stack/generated/ovh/ovh/cloudprojectkube"
>>     "cdk.tf/go/stack/generated/ovh/ovh/cloudprojectkubenodepool"
>>     ovh "cdk.tf/go/stack/generated/ovh/ovh/provider"
>>     "github.com/aws/constructs-go/constructs/v10"
>>     "github.com/aws/jsii-runtime-go"
>>     "github.com/hashicorp/terraform-cdk-go/cdktf"
>> )
>>
>> func NewMyStack(scope constructs.Construct, id string) cdktf.TerraformStack {
>>     stack := cdktf.NewTerraformStack(scope, &id)
>>
>>     ovh.NewOvhProvider(stack, jsii.String("ovh"), &ovh.OvhProviderConfig{
>>         Endpoint: jsii.String("ovh-eu"),
>>     })
>>     local.NewLocalProvider(stack, jsii.String("local"), &local.LocalProviderConfig{})
>>
>>     serviceName := os.Getenv("OVH_CLOUD_PROJECT_SERVICE")
>>
>>     kube := cloudprojectkube.NewCloudProjectKube(stack, jsii.String("my_desired_cluster"), &cloudprojectkube.CloudProjectKubeConfig{
>>         ServiceName: jsii.String(serviceName),
>>         Name:        jsii.String("my_desired_cluster"),
>>         Region:      jsii.String("GRA5"),
>>     })
>>
>>     cdktf.NewTerraformOutput(stack, jsii.String("cluster_version"), &cdktf.TerraformOutputConfig{
>>         Value: kube.Version(),
>>     })
>>
>>     pwd, _ := os.Getwd()
>>     file.NewFile(stack, jsii.String("kubeconfig"), &file.FileConfig{
>>         Filename:       jsii.String(path.Join(pwd, "kubeconfig.yaml")),
>>         Content:        kube.Kubeconfig(),
>>         FilePermission: jsii.String("0644"),
>>     })
>>
>>     nodePool := cloudprojectkubenodepool.NewCloudProjectKubeNodepool(stack, jsii.String("my-pool"), &cloudprojectkubenodepool.CloudProjectKubeNodepoolConfig{
>>         ServiceName:  kube.ServiceName(),
>>         KubeId:       kube.Id(),
>>         Name:         jsii.String("my-pool"),
>>         DesiredNodes: jsii.Number(1),
>>         MaxNodes:     jsii.Number(3),
>>         MinNodes:     jsii.Number(1),
>>         FlavorName:   jsii.String("b2-7"),
>>     })
>>
>>     cdktf.NewTerraformOutput(stack, jsii.String("nodePoolID"), &cdktf.TerraformOutputConfig{
>>         Value: nodePool.Id(),
>>     })
>>
>>     return stack
>> }
>>
>> func main() {
>>     app := cdktf.NewApp(nil)
>>     NewMyStack(app, "ovhcloud")
>>     app.Synth()
>> }
>> ```
>>
>> Déployez :
>>
>> ```bash
>> cdktf deploy
>> ```
>>
> Via Pulumi
>> > [!primary]
>> > Vous avez besoin de la [CLI Pulumi](https://www.pulumi.com/docs/install/), d'un [compte Pulumi](https://www.pulumi.com/) avec un [token d'accès](https://app.pulumi.com/account/tokens) et de [kubectl](https://kubernetes.io/docs/tasks/tools/) installés.
>>
>> ![Pulumi](images/pulumi.jpg){.thumbnail}
>>
>> Le provider Pulumi OVH supporte Go, Python, Node.js/TypeScript, C# et Java. Consultez les [exemples](https://github.com/ovh/pulumi-ovh/tree/main/examples/kubernetes).
>>
>> Définissez les identifiants sous forme de variables d'environnement :
>>
>> ```bash
>> export OVH_ENDPOINT="ovh-eu"
>> export OVH_APPLICATION_KEY="xxx"
>> export OVH_APPLICATION_SECRET="xxx"
>> export OVH_CONSUMER_KEY="xxx"
>> ```
>>
>> Créez et initialisez le projet :
>>
>> ```bash
>> mkdir pulumi_ovh_kube && cd pulumi_ovh_kube
>> pulumi new go -y
>> go get github.com/ovh/pulumi-ovh/sdk/go/...
>> ```
>>
>> Éditez `Pulumi.yaml` pour ajouter le service name :
>>
>> ```yaml
>> config:
>>  serviceName: <your-service-name>
>> ```
>>
>> Éditez `main.go` :
>>
>> ```go
>> package main
>>
>> import (
>>     "github.com/pulumi/pulumi/sdk/v3/go/pulumi"
>>     "github.com/pulumi/pulumi/sdk/v3/go/pulumi/config"
>>     "github.com/ovh/pulumi-ovh/sdk/go/ovh/cloudproject"
>> )
>>
>> func main() {
>>     pulumi.Run(func(ctx *pulumi.Context) error {
>>         serviceName := config.Require(ctx, "serviceName")
>>
>>         myKube, err := cloudproject.NewKube(ctx, "my_desired_cluster", &cloudproject.KubeArgs{
>>             ServiceName: pulumi.String(serviceName),
>>             Name:        pulumi.String("my_desired_cluster"),
>>             Region:      pulumi.String("GRA5"),
>>         })
>>         if err != nil {
>>             return err
>>         }
>>
>>         ctx.Export("kubeconfig", pulumi.ToSecret(myKube.Kubeconfig))
>>
>>         nodePool, err := cloudproject.NewKubeNodePool(ctx, "my-desired-pool", &cloudproject.KubeNodePoolArgs{
>>             ServiceName:  pulumi.String(serviceName),
>>             KubeId:       myKube.ID(),
>>             Name:         pulumi.String("my-desired-pool"),
>>             DesiredNodes: pulumi.Int(1),
>>             MaxNodes:     pulumi.Int(3),
>>             MinNodes:     pulumi.Int(1),
>>             FlavorName:   pulumi.String("b2-7"),
>>         })
>>         if err != nil {
>>             return err
>>         }
>>
>>         ctx.Export("nodePoolID", nodePool.ID())
>>         return nil
>>     })
>> }
>> ```
>>
>> Exécutez `go mod tidy` puis déployez :
>>
>> ```bash
>> pulumi up
>> ```
>>

## Connexion au cluster

> [!tabs]
> Via l'espace client OVHcloud
>> Sur la page de votre cluster, ouvrez l'onglet `Service`{.action} et téléchargez le fichier de configuration `kubectl` pour vous connecter à votre cluster.
>>
> Via l'API OVHcloud
>> Appelez `GET /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig` pour récupérer le contenu du kubeconfig et enregistrez-le dans un fichier :
>>
>> ```bash
>> kubectl --kubeconfig=kubeconfig.yaml get nodes
>> ```
>>
> Via la CLI OVHcloud
>> ```bash
>> ovhcloud cloud kube kubeconfig generate <kubeId> \
>>   --cloud-project <serviceName> > kubeconfig.yaml
>> kubectl --kubeconfig=kubeconfig.yaml get nodes
>> ```
>>
> Via Terraform
>> ```bash
>> terraform output -raw kubeconfig > ~/.kube/my_kube_cluster.yml
>> kubectl --kubeconfig=~/.kube/my_kube_cluster.yml get nodes
>> ```
>>
> Via CDK pour Terraform
>> Le fichier kubeconfig a été enregistré localement sous `kubeconfig.yaml` lors du déploiement :
>>
>> ```bash
>> kubectl --kubeconfig=kubeconfig.yaml get nodes
>> ```
>>
> Via Pulumi
>> ```bash
>> pulumi stack output kubeconfig --show-secrets -s dev > kubeconfig.yaml
>> kubectl --kubeconfig=kubeconfig.yaml get nodes
>> ```
>>

## Problèmes connus

### « not enough xxx quotas »

Par défaut, les quotas de ressources Public Cloud (RAM, CPU, espace disque, nombre d'instances, etc.) sont limités pour des raisons de sécurité. Si vous manquez de ressources lors de la création d'un node pool, suivez le guide [Augmenter les quotas Public Cloud](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) pour les augmenter.

> [!tabs]
> Via Terraform
>> **« gzip: invalid header »**
>>
>> Cette erreur survient lorsque le nom d'un node pool ou d'un flavor contient `_` ou `.`. Seuls les caractères minuscules, les chiffres et le tiret `-` sont acceptés :
>>
>> ```bash
>> name        = "my-pool"
>> flavor_name = "b2-7"
>> ```
>>
> Via Pulumi
>> **« Provider is missing a required configuration key »**
>>
>> Vous avez oublié d'exporter les variables d'environnement OVHcloud requises :
>>
>> ```bash
>> export OVH_ENDPOINT="ovh-eu"
>> export OVH_APPLICATION_KEY="xxx"
>> export OVH_APPLICATION_SECRET="xxx"
>> export OVH_CONSUMER_KEY="xxx"
>> ```
>>
>> **« Node pool name xxx is invalid »**
>>
>> Seuls les caractères minuscules, les chiffres et le tiret `-` sont acceptés dans les noms de node pool. Renommez votre node pool avec une valeur valide :
>>
>> ```go
>> Name: pulumi.String("my-desired-pool"),
>> ```
>>

## Suppression (nettoyage)

> [!tabs]
> Via l'espace client OVHcloud
>> Dans la section `Managed Kubernetes Service`{.action}, cliquez sur le bouton `...`{.action} en regard de votre cluster et sélectionnez `Supprimer`{.action}.
>>
> Via l'API OVHcloud
>> Appelez `DELETE /cloud/project/{serviceName}/kube/{kubeId}` pour supprimer le cluster et toutes ses ressources associées.
>>
> Via la CLI OVHcloud
>> ```bash
>> ovhcloud cloud kube delete <kubeId> --cloud-project <serviceName>
>> ```
>>
> Via Terraform
>> ```bash
>> terraform destroy
>> ```
>>
> Via CDK pour Terraform
>> ```bash
>> cdktf destroy
>> ```
>>
> Via Pulumi
>> ```bash
>> pulumi destroy
>> ```
>>
>> Pour supprimer également l'historique du stack Pulumi :
>>
>> ```bash
>> pulumi stack rm dev
>> ```
>>

## Aller plus loin

Pour avoir une vue d'ensemble du service OVHcloud Managed Kubernetes, rendez-vous sur la [page OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes).

Pour déployer votre première application sur votre cluster Kubernetes, nous vous invitons à suivre notre guide de [configuration des paramètres par défaut de `kubectl`](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster) et de [déploiement d'une application Hello World](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world).

- Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

- Échangez avec notre [communauté d'utilisateurs](/links/community).
