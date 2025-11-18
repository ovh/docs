---
title: Guide de migration – Transférer votre cluster Kubernetes vers OVHcloud
excerpt: Découvrez comment migrer efficacement votre cluster Kubernetes depuis un fournisseur externe vers OVHcloud, en tirant parti de ses fonctionnalités et de sa flexibilité.
updated: 2025-08-19
---

## Objectif

Ce guide décrit le processus de migration de votre cluster Kubernetes depuis un fournisseur externe vers OVHcloud Managed Kubernetes. Il propose un accompagnement étape par étape pour transférer vos applications et vos données en toute fluidité, tout en minimisant les interruptions de service et en garantissant une transition réussie.

Nous aborderons les phases essentielles de la migration, notamment :

- Sauvegarde et restauration : utilisation de Velero pour un transfert de données efficace.
- Provisionnement du cluster : choix et déploiement de votre nouveau cluster Kubernetes sur OVHcloud.
- Validation post-migration : vérification du bon fonctionnement de vos applications dans le nouvel environnement.

L’objectif de ce guide est de vous fournir les connaissances nécessaires pour gérer efficacement la migration de votre cluster Kubernetes. Pour les scénarios complexes ou un accompagnement spécifique, l’équipe OVHcloud [Professional Services](/links/professional-services) est disponible pour vous apporter une expertise dédiée.

## Prérequis

Pour réussir la migration de votre cluster Kubernetes vers OVHcloud, assurez-vous de disposer des éléments suivants :

- **Configuration de Velero :** Velero, ainsi que son chart Helm, doivent être installés et configurés sur votre cluster Kubernetes source. Il est essentiel que Velero soit connecté à un Endpoint OVHcloud Object Storage compatible S3<sup>1</sup> pour le stockage des sauvegardes. Vous trouverez des instructions détaillées pour l’installation et la configuration de Velero dans la [documentation officielle du chart Helm Velero](https://github.com/vmware-tanzu/helm-charts/blob/main/charts/velero/README.md).
- **Endpoint OVHcloud compatible S3 :** vérifiez que votre configuration Velero référence correctement les points de terminaison OVHcloud compatibles S3 en tant que BackupStorageLocation. En cas de difficulté avec ces paramètres, n’hésitez pas à contacter notre équipe [Professional Services](/links/professional-services) pour obtenir de l’aide.
- **kubectl :** vous aurez besoin de l’outil en ligne de commande kubectl pour interagir avec vos clusters Kubernetes. Reportez-vous à la [documentation officielle Kubernetes](https://kubernetes.io/docs/tasks/tools/) pour les instructions d’installation.

## En pratique

Le schéma ci-dessous illustre l’ensemble du parcours de migration depuis votre environnement Kubernetes actuel vers OVHcloud. Cette représentation visuelle permet de mieux comprendre chacune des étapes nécessaires au transfert de votre cluster.

![Migration de Kubernetes vers OVHcloud](images/migration-schema.png){.thumbnail}

Passons maintenant aux étapes détaillées de la migration de votre cluster Kubernetes vers OVHcloud :

1. **Installer et configurer Velero avec le stockage S3 d’OVHcloud**

    Assurez-vous que le chart Helm Velero est installé sur votre cluster Kubernetes et configuré pour utiliser le stockage OVHcloud Object Storage compatible S3.

2. **Sauvegarder votre cluster avec Velero**

    Reportez-vous à la [documentation officielle de Velero sur la sauvegarde](https://velero.io/docs/v1.16/backup-reference/) pour sauvegarder vos manifestes Kubernetes et vos Persistent Volume Claims (PVCs).

    Vérifiez que toutes les sauvegardes sont correctement stockées dans votre Object Storage OVHcloud configuré.

3. **Créer votre cluster Kubernetes cible sur OVHcloud**

    - Suivez les instructions de la documentation OVHcloud pour [créer un cluster Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster).
    - Choisissez votre mode de déploiement préféré et procédez à la création du cluster.
    - **Facultatif :** l'équipe [Professional Services](/links/professional-services) OVHcloud peut vous accompagner dans la création d’un script Infrastructure-as-Code pour le déploiement de votre nouveau cluster Kubernetes avec OpenTofu, afin de simplifier et d’automatiser le processus de provisionnement.

4. **Choisir une flavour et un pool de nodes pour votre nouveau cluster OVHcloud**

    - **Dimensionner vos nodes de calcul :** analysez attentivement les besoins en CPU et en mémoire RAM de votre architecture actuelle, puis sélectionnez la flavour du node OVHcloud qui correspond à ces spécifications.
    - **Reproduire la configuration réseau :** assurez-vous que la configuration réseau de votre nouveau cluster reflète celle de votre cluster d’origine (par exemple : private nodes dans un sous-réseau privé, passerelle de sortie dédiée).
    - **Choisir le mode de déploiement :** sélectionnez un mode de déploiement (par ex. 1AZ ou 3AZ) en fonction de vos besoins en tolérance aux pannes et en haute disponibilité.

5. **Déployer le chart Helm Velero sur le nouveau cluster**

    - Sur votre cluster Kubernetes OVHcloud nouvellement créé, déployez le chart Helm Velero. Pour cela, vous pouvez suivre ce [guide](/pages/public_cloud/containers_orchestration/managed_kubernetes/backing-up-cluster-with-velero).
    - Point essentiel : configurez Velero pour qu’il utilise le même point de terminaison OVHcloud Object Storage compatible S3 contenant vos sauvegardes existantes. Cette opération permettra de rendre automatiquement disponibles vos ressources de sauvegarde sur le nouveau cluster.

6. **Restaurer vos sauvegardes sur le nouveau cluster**

    - Utilisez la CLI Velero pour restaurer l’ensemble de vos sauvegardes précédentes sur le nouveau cluster. Reportez-vous à la [documentation Velero sur la sauvegarde au niveau du système de fichiers](https://velero.io/docs/v1.16/file-system-backup/) pour consulter les commandes détaillées.
    - Avant de lancer la restauration, placez vos applications en mode maintenance sur le cluster source afin d’éviter toute incohérence de données pendant la transition.
    - Après la restauration, mettez à jour soigneusement tous vos enregistrements DNS pour qu’ils pointent vers les services du nouveau cluster.
    - Assurez-vous que vos ingress controllers et vos Load Balancers sont correctement configurés et opérationnels sur le nouveau cluster.
    - Si vos classes de stockage diffèrent entre les environnements, mappez la classe de stockage du cluster source à l’équivalent sur le cluster cible à l’aide de la [configuration Velero](https://velero.io/docs/v1.16/restore-reference/).
    - **Facultatif :** si le processus de déploiement vous paraît trop complexe ou si vous avez besoin d’un accompagnement sur les stratégies de migration et de rollback, n’hésitez pas à contacter l’équipe [Professional Services](/links/professional-services) OVHcloud.

7. **Exécuter des tests d’intégration pour valider la restauration**

    - Lancez l’ensemble des tests d’intégration de vos applications sur le nouveau cluster cible.
    - Vérifiez de manière approfondie l’état de santé et le bon fonctionnement de vos applications après le déploiement.
    - Si des problèmes sont détectés, soyez prêt à effectuer un rollback vers votre cluster source si nécessaire.

8. **Faire appel à l’assistance Professional Services (si besoin)**

    Si certaines ressources de votre cluster source sont particulièrement complexes ou nécessitent une expertise spécifique pour la migration, l’équipe OVHcloud Professional Services est disponible pour vous apporter un accompagnement expert. Vous pouvez trouver plus d’informations sur leurs services [ici](/links/professional-services).

9. **Mettre en place des Saving Plans (si nécessaire)**

    Explorez l’option des [Savings Plans OVHcloud](/pages/public_cloud/public_cloud_cross_functional/savings_plans) afin d’optimiser vos coûts cloud. Renseignez-vous sur les différents Saving Plans disponibles pour déterminer s’ils correspondent à votre stratégie financière.

10. **Désactiver votre cluster source**

    Une fois que vous avez validé de manière approfondie que vos applications fonctionnent correctement et de façon stable sur le nouveau cluster Kubernetes OVHcloud, vous pouvez procéder à la suppression en toute sécurité de votre cluster source.

## Aller plus loin

Pour avoir une vue d’ensemble du service OVHcloud Managed Kubernetes, consultez la page [OVHcloud Managed Kubernetes](/links/public-cloud/kubernetes).

Pour déployer votre première application sur votre cluster Kubernetes, nous vous invitons à suivre nos guides pour [configurer les paramètres par défaut de kubectl](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster) et pour [déployer une application Hello World](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world).

Si vous avez besoin de formation ou d’une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander à nos experts Professional Services une analyse personnalisée de votre projet.

Rejoignez notre [communauté d’utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.