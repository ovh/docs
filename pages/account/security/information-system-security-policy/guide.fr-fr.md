---
title: "Politique de sécurité du système d'information (PSSI)"
slug: pssi
section: Politiques de sécurité
---

**Dernière mise à jour le 15/02/2021**

## Objectifs

La Politique de Sécurité du Système d'information (PSSI) fournit le cadre de référence en matière de cybersécurité pour OVHcloud. La PSSI définit les notions nécessaires pour comprendre l'approche d'OVHcloud en termes de sécurité et établit le lien entre le contexte des opérations et les moyens mis en œuvre pour assurer la sécurité. Elle précise :

- Le contexte des opérations d'OVHcloud permettant de comprendre les principaux risques de sécurité d'OVHcloud
- Les engagements en matière de sécurité vis-à-vis des parties intéressées d'OVHcloud et les principes de mise en œuvre et de maintien en condition de sécurité des systèmes d'information
- La déclinaison de ces principes au sein d'OVHcloud

OVHcloud opère au sein d'un écosystème dynamique dans un contexte qui évolue continuellement. Les pratiques visant à assurer la sécurité doivent donc évoluer rapidement pour rester pertinentes. La PSSI est la marque d'un engagement dans la durée de la direction générale. Elle vise à définir les critères permettant l'évaluation des risques, les principes guidant l'établissement des mesures de sécurité à mettre en place et la gestion de la sécurité au sein d'OVHcloud.

La PSSI est sous la responsabilité du CISO qui consulte le Comité Exécutif (ComEx) sur son contenu et l'adéquation aux objectifs stratégiques d'OVHcloud. Elle est revue annuellement. Elle se décline dans un ensemble de politiques de sécurité et de guides d'implémentation détaillés. Ces documents ont leurs cycles de vie propres, adaptés à leurs contenus.

La PSSI s'applique à toutes les sociétés du groupe, aux salariés, fournisseurs, prestataires, sous-traitants et utilisateurs du système d’information, quelles que soient leurs activités.

## Contexte de mise en oeuvre de la PSSI

### Qu'est ce que la sécurité de l'information ?

La sécurité consiste à protéger la disponibilité, l'intégrité et la confidentialité d'un système. Au sein d'OVHcloud, gérer la sécurité consiste à définir, mettre en œuvre, opérer et améliorer tous les moyens humains, organisationnels, techniques et légaux permettant de protéger les services et systèmes d'information d'OVHcloud sur ces critères. Protéger la confidentialité des données en toutes circonstances est au cœur de la démarche sécurité d'OVHcloud. Assurer la disponibilité et l'intégrité des services et des données est la première mission d'OVHcloud et dépasse le cadre de la PSSI. Sur ces deux critères, la démarche sécurité se concentre sur les risques d'origine malveillante.

En accord avec les engagements sécurité d'OVHcloud, les critères de traçabilité et de respect de la vie privée sont également pris en compte de manière formelle dans notre démarche sécurité.

Les critères de sécurité couverts par la PSSI sont donc la disponibilité (A), l'intégrité (I), la confidentialité (C), la traçabilité (T) et le respect de la vie privée (P). Ces critères sont utilisés pour valoriser les besoins en sécurité des actifs protégés, et les impacts associés à un risque ou un incident de sécurité.

### Quels actifs protégeons nous ?

#### Les infrastructures, les plateformes, les applications

OVHcloud opère une infrastructure mondiale. Cette infrastructure consiste en un ensemble de datacentres, d'équipements et de serveurs qui y sont hébergés ainsi qu'un réseau mondial d'interconnexion. OVHcloud opère également un système d'information supportant cette infrastructure. Ce système d'information supporte les opérations, porte l'automatisation et assure le travail collaboratif au sein d'OVHcloud. Il porte également les outils mis à disposition des clients pour l'administration de leurs services et la communication avec les équipes d'OVHcloud.

OVHcloud propose des services d'infrastructure (IaaS), de plateforme (PaaS) et d'application (SaaS) ainsi que des services de télécommunication. Chacun de ces services s'appuie sur les infrastructures, le système d'information d'OVHcloud et éventuellement d'autres services fournis par OVHcloud ou des partenaires.

#### Les informations

Les données considérées comme les plus sensibles par OVHcloud sont les données appartenant aux clients. Concernant ces données hébergées dans le cadre des services, le client est responsable de traitement et OVHcloud est sous-traitant. De manière générale les salariés OVHcloud ne connaissent pas le type de données hébergées et n'y accèdent pas. Le client, en tant que responsable de traitement, doit s'assurer de l'adéquation entre le niveau de service proposé et la sensibilité des données. OVHcloud, en tant que sous-traitant, agit sur instructions du client dans le cadre contractuel des services.

OVHcloud protège également les données internes en support des opérations. Dans ce cadre, OVHcloud est le responsable de traitement. Ces données couvrent les données techniques et administratives nécessaires à la fourniture du service, à la relation commerciale et au respect des obligations légales. Les données internes d'OVHcloud utilisées pour la gestion et le développement de l'entreprise sont également couvertes. Ces données peuvent concerner directement ou indirectement les clients, les salariés, les prestataires et les partenaires d'OVHcloud. Elles peuvent éventuellement être transmises à des tiers dans le respect des réglementations en vigueur. En tant que responsable de traitement, OVHcloud définit les mesures de sécurité adaptées à chaque type de données pour chaque étape de leur cycle de vie, en adéquation avec leur sensibilité.

### A quelles menaces sommes-nous confrontés ?

En tant qu'entreprise, OVHcloud est concernée par les attaques auxquelles toute entreprise est soumise : vol de données, vol de ressources, chantage, fraude, extorsion, logiciels malveillants, compromission des systèmes exposés, etc. Ces attaques, ciblées ou non peuvent mettre en péril les données gérées par OVHcloud et impacter les opérations.

En tant qu'acteur majeur du cloud, OVHcloud opère des infrastructures à l'échelle d'Internet. Ce positionnement expose OVHcloud à des menaces spécifiques dont les motivations peuvent être d'atteindre la réputation d'un acteur à forte visibilité dans un contexte concurrentiel dynamique, de challenger des technologies innovantes ou leur mise en œuvre spécifique par OVHcloud par intérêt technique ou d'atteindre des infrastructures larges et fortement connectés pour tenter d'utiliser à des fins malveillantes les ressources de puissance de calcul et de connectivité.

Enfin, en tant que fournisseurs d'infrastructures, de plateformes et de solutions, nous devons également anticiper les menaces ciblant nos clients ou des tiers :

- Les attaques visant les données et traitements de nos clients via nos infrastructures,
- Les attaques exploitant une faiblesse dans l'isolation logique ou physique entre les environnements des différents clients liés à la mutualisation de ressources,
- L'utilisation des ressources mises à disposition par OVHcloud en tant que vecteur d'attaque sur des tiers.

Les motivations et les chemins d'attaques pour cibler les infrastructures de nos clients sont aussi variées que les typologies des systèmes qu’ils opèrent. Elles ne peuvent être listés exhaustivement. Nous devons donc être préparés à toute éventualité d'attaque ciblant un de nos clients ou OVHcloud.

Les menaces ciblant OVHcloud sont principalement d'origine externe. Cependant nos équipes sont nombreuses, déployées à l'international et en croissance rapide. Outre la possibilité d'erreurs humaines dans les opérations, nous devons inclure le risque de malveillances internes dans notre démarche de gestion des risques.

### Qui est concerné par la sécurité ?

#### Les clients et les partenaires

Les clients et partenaires d'OVHcloud nous confient la responsabilité d'opérer au sein de nos datacentres des infrastructures, des plateformes et des logiciels. Du bon fonctionnement de ces services dépendent leurs systèmes d'information et de leurs activités numériques. Les clients d'OVHcloud opèrent eux-mêmes des services qu'ils proposent à des tiers au sein d'un écosystème riche et complexe. Les acteurs impliqués dans cette chaîne d'approvisionnement et les utilisateurs finaux attendent d'OVHcloud l'expertise et la maîtrise opérationnelle des services fournis. Notre engagement à assurer la sécurité des données et des traitements hébergés doit être entier et permanent.

#### Les autorités et les régulateurs sectoriels

Les autorités définissent le cadre assurant la protection des citoyens et des entreprises sous leurs juridictions. Cette protection s’étend aux données et traitements des citoyens et des entreprises. OVHcloud prend en compte ces exigences dans toutes les géographies où le service est opéré pour assurer un service adapté aux écosystèmes locaux. Les régulateurs sectoriels formulent également des exigences pour l'hébergement de certains types de données et de traitements, associés à des risques particuliers. OVHcloud peut proposer des services spécifiquement adaptés à ces exigences. Dans ce cas, OVHcloud s'engage sur la couverture des exigences sectorielles et des risques spécifiques au secteur.

#### Les salariés, la direction d'OVHcloud et les actionnaires

Les salariés d'OVHcloud conçoivent, maintiennent et opèrent les systèmes et processus en support des services d'OVHcloud. Tout incident de sécurité a un impact direct et génère des perturbations dans les opérations. Il peut aussi remettre en question la fiabilité des services rendus aux clients, l'expertise et le professionnalisme des équipes. Opérer des systèmes d'information sécurisés permet de mettre en valeur les innovations, la passion, l'engagement des équipes et la qualité des services d'OVHcloud.

OVHcloud, en tant que fournisseur de cloud alternatif, doit assurer une croissance forte pour soutenir l'innovation et le développement à l'international renforçant sa crédibilité. La confiance de nos clients, principal vecteur de cette croissance, est directement liée à la capacité d'OVHcloud à protéger leurs données et traitements. La sécurité est donc un des piliers en support de la stratégie de développement portée par la direction et les actionnaires d'OVHcloud.

## Nos engagements sécurité

### Déployer une approche industrielle à grande échelle de la sécurité

Les équipes OVHcloud s'engagent à innover de façon permanente pour répondre aux besoins en constante évolution des clients en termes de technologie, de fonctionnalités et de performances. La sécurité est intégrée dans le cycle de vie du développement des produits. L'équipe de sécurité est constamment impliquée pour challenger et aider toutes les décisions susceptibles d'avoir un impact sur la sécurité.

La sécurité d'OVHcloud repose sur la responsabilité de chaque employé en matière de sécurité des données. Nos développeurs et administrateurs sont choisis pour leur expertise technologique. L'équipe sécurité assure la cohérence des outils, des processus et des connaissances de sécurité avec la politique de sécurité d'OVHcloud.

Nous mettons en œuvre et opérons des mesures de sécurité adaptées pour prévenir et réduire les risques de sécurité. Nous voulons que cette approche soit directe et transparente afin de renforcer la confiance de nos clients et partenaires. Nous concevons et exploitons un grand nombre de systèmes. Notre démarche s'appuie sur des mesures de sécurité normalisées, sur des architectures sécurisées dès leur conception et sur des processus formels, éprouvés, fortement automatisés. Ces mesures de sécurité sont issues de l'expérience d'OVHcloud, de nos engagements contractuels, des obligations légales et règlementaires et des bonnes pratiques métier reconnues. Elles nous permettent d’assurer la sécurité à l’échelle d'OVHcloud.

Une gestion formelle des risques de sécurité permet de prendre en compte les spécificités liées à chaque projet. Nous complétons ainsi nos mesures de sécurité normalisées avec des mesures spécifiques à ces projets. Les démarches de gestion des évènements, des incidents, des vulnérabilités, des menaces et de remontées d'information de sécurité demeurent normalisées au sein d'une approche unifiée.

Enfin, OVHcloud opère un dispositif d'analyse permanent des menaces lié à une surveillance permanente des systèmes. Ainsi, nous adaptons systématiquement les pratiques opérationnelles aux risques immédiats et réagissons efficacement aux incidents de sécurité. L'organisation des équipes sécurité permet de mobiliser au plus vite les experts pour investiguer et résoudre les incidents de sécurité. De cette manière, nous minimisons les impacts potentiels et mettons en place les actions correctives au plus vite de manière pérenne.

### Placer OVHcloud comme un acteur de confiance au sein de l'écosystème

En tant que fournisseur mondial de cloud, OVHcloud a une grande responsabilité dans la lutte contre les menaces de sécurité. Nous déployons des outils de protection à grande échelle. Nous automatisons la protection des systèmes de nos clients contre ces menaces. Nous détectons les systèmes vulnérables. Nous partageons nos innovations et nos connaissances avec la communauté de la sécurité. Nous gérons plusieurs millions d'adresses IP publiques pour le compte de nos clients. Ces adresses sont des actifs essentiels des systèmes d'informations dans le cloud et leurs réputations est l'une de nos préoccupations.

L'équipe sécurité et les experts techniques d'OVHcloud entretiennent des relations opérationnelles solides avec les communautés d'experts en sécurité, les autorités, les éditeurs de logiciels et les fabricants de matériel. De cette manière, nous anticipons les nouvelles menaces et les nouvelles vulnérabilités. Ainsi, nous réduisons les risques associés. Nous partageons nos innovations et nos connaissances avec la communauté de la sécurité et nous promouvons la divulgation responsable.

Nous challengeons continuellement notre sécurité. Nous mettons en œuvre un programme structuré de revues, de tests et de contrôles, tant internes qu'externes. Notre organisation de la gestion de la sécurité est basée sur des normes internationales reconnues, et en particulier l'ISO/IEC 27001 qui met en évidence ces principes. Nous évaluons nos dispositifs de sécurité régulièrement en nous appuyant sur des tiers de confiance et des référentiels d'audit reconnus.

### Opérer un cloud de confiance pour tous

OVHcloud propose ses solutions à tout type de client dans tous les domaines d'activités : startup, PME, grande entreprise, administration, multinationale. Chaque client d'OVHcloud a une approche de la sécurité particulière dépendante de son contexte métier ou de ses besoins de souveraineté que nous devons prendre en compte. La sécurité est un des pilliers de la confiance de nos clients.

La sécurité d'un système dans le cloud est une responsabilité partagée entre le fournisseur de cloud et le client. OVHcloud assure la sécurité des services fournis et des infrastructures sous-jacentes. Nos clients sont responsables de la sécurité de leurs systèmes d'information dans le cloud. Nous leur offrons un niveau de transparence important sur les mesures de sécurité incluses dans leurs services pour les aider à faire les bons choix. Nous définissons clairement leurs domaines de responsabilité afin d'éviter toute vulnérabilité découlant d'une prise de conscience insuffisante.

OVHcloud fournit et développe un ensemble d'outils, de fonctionnalités et de configurations afin d'améliorer la sécurité des systèmes des clients dans le cloud. La plupart des fonctions de sécurité sont incluses pour tous les clients. Des fonctions de sécurité supplémentaires sont également proposées pour aider nos clients à réduire les risques spécifiques auxquels ils sont confrontés.

OVHcloud s'engage également sur la protection des données à caractère personnel, en tant que responsable de traitement pour les données relatives à nos clients et en tant que sous-traitant de données à caractère personnel dans le cas ou nos clients sont eux-mêmes responsables de traitement. La politique de sécurité des systèmes d'information porte notamment cet engagement par la définition, la mise en œuvre et l'amélioration des dispositifs de sécurité assurant la protection des données à caractère personnel hébergées.

Les produits conçus chez OVHcloud utilisent des technologies open source et/ou des standards technologiques éprouvés. L'adoption et la réversibilité du produit s’en trouvent facilités. Ce choix stratégique garantit à nos clients le déploiement de systèmes standards dans le cloud. Ils peuvent ajouter leurs propres solutions de sécurité, tirer parti des compétences et des outils usuels de leurs équipes. Une large offre de solutions et de services de sécurité est disponible avec les partenaires OVHcloud ainsi que d'autres fournisseurs.

### Comment OVHcloud s'engage ?

L'engagement d'OVHcloud vis à vis des clients et partenaires est avant tout porté par la relation contractuelle qui le formalise et l'explicite.

OVHcloud respecte les lois et règlementations applicables dans le cadre de la fourniture des services dans chaque pays. Aussi, OVHcloud s'engage contractuellement à respecter certaines règlementations sectorielles spécifiques, par exemple pour les systèmes d'information de santé ou financiers.

Au-delà des liens contractuels, OVHcloud s'engage auprès de son écosystème, ses clients et prospects en s’assurant de la clarté et de la transparence des messages en toutes circonstances.

## Application de la PSSI et déclinaison au sein des systèmes d'information

### Organisation et acteurs de la sécurité

Les principes et règles de sécurité applicables sont définis par l'équipe sécurité en partenariat avec la direction générale. L'équipe sécurité, sous la responsabilité du CISO est elle-même composée de 3 équipes:

L'équipe **security.tools** en charge du développement de l'outillage sécurité utilisé au sein d'OVHcloud. Cette équipe conçoit et opère les outils en support de certaines mesures sécurité déployées sur tous les systèmes d'information d'OVHcloud. Ces outils couvrent notamment la gestion des identités et des accès des salariés et prestataires, les mécanismes d'authentification mis à disposition des clients, l'identification des vulnérabilités sur les systèmes et le monitoring sécurité. Cette équipe accompagne également les autres directions dans la conception et le déploiement des architectures en s'assurant de la sécurité dès la phase de définition.

L'équipe **security.operations**, en charge de l'accompagnement des équipes dans la mise en place des bonnes pratiques de sécurité au sein des opérations, la mise en place des processus formels de gestion de la sécurité, l'accompagnement dans l'intégration des outils de sécurité et l'alignement des dispositifs de sécurité au sein d'OVHcloud. L'équipe security.ops met en place un dispositif de contrôle interne, aussi bien organisationnel que technique sur la sécurité et accompagne les équipes produits dans la mise en place de systèmes de management de la sécurité de l'information formels et dans leurs certification.

L'équipe **security.cert** est en charge de la surveillance des sources de menaces, d'identifier les outils et méthodes d'attaques pour les anticiper et de gérer les incidents de sécurité dont l'origine est malveillante. Cette équipe gère le CSIRT d'OVHcloud et échange avec les communautés d'experts internationaux permettant de disposer des meilleures sources d'information pour anticiper les attaques.

L'équipe sécurité est accompagnée par les **équipes en charge de la gestion de la sécurité physique** et les équipes en charge de la protection de la vie privée. Ces trois équipes travaillent conjointement pour assurer une efficacité optimale des actions sur ces sujets ayant de fortes adhérences.

Par ailleurs, des **référents sécurité** sont déployés au sein des équipes d'OVHcloud. Ces référents permettent d'assurer la diffusion des bonnes pratiques au sein des équipes, fournissent un point de contact identifié pour la gestion des incidents et des crises et permettent également la remontée d'information issues des opérations à l'équipe sécurité.

Un **comité sécurité** animé par le CISO et les managers de l'équipe sécurité assure la communication avec le Comité Executif (ComEx) d'OVHcloud. Lors de ce comité semestriel sont présentés les principales menaces sous surveillances, les risques majeurs, les métriques de suivi, l'état d'avancement des actions en cours et la feuille de route actualisée. Ce comité permet également de s'assurer que la PSSI est alignée avec les objectifs stratégiques et opérationnels d'OVHcloud.

### Le système de management de la sécurité de l'information d'OVHcloud

La SU.security établit, implémente, maintien et améliore formellement le Système de Management de la Sécurité de l'Information d'OVHcloud (SMSI OVHcloud), conforme aux exigences de la norme ISO/IEC 27001. Les principaux objectifs du SMSI d'OVHcloud sont :

#### Démontrer le respect des engagements d'OVHcloud

Le SMSI vise à assurer la prise en compte des exigences de sécurité issues des différentes parties intéressées d'OVHcloud. Ces exigences sont de différentes natures:

- Exigences légales ou règlementaires
- Engagements contractuels
- Référentiels de bonnes pratiques sur lesquels OVHcloud s'engage et en particulier la norme ISO/IEC 27001

Ces exigences sont recencées et consolidées et les éléments permettant de démontrer qu'OVHcloud les respectent sont gérés dans le cadre des SMSI.

#### Déployer un cadre formel pour la gestion des mesures de sécurité

OVHcloud déploie une approche formelle de gestion des mesures de sécurité, mises en œuvre pour:

- Assurer le respect des règles définies dans les politiques de sécurité détaillées
- Assurer le formalisme et le suivi des activités mises en place pour réduire les risques
- Assurer la conformité aux exigences légales, règlementaires ou contractuelles applicables

Le cycle de vie complet des mesures de sécurité est géré dans le cadre du SMSI.

#### Promouvoir les décisions basées sur une approche par les risques

OVHcloud déploie une approche de gestion des risques permettant de structurer les décisions opérationnelles ayant un impact sur la sécurité. Cette approche de gestion des risques s'appuie sur les principes des normes ISO/IEC 31000 et ISO/IEC 27005. Elle repose sur:

- La connaissance approfondie des système via une cartographie des actifs, leurs classifications et leurs valorisations d'un point de vue sécurité
- Une analyse permanente des événement redoutés, des vulnérabilités et de l'environnement de menace
- Une formalisation uniforme des risques de sécurité permettant de les rendre explicites aux experts techniques et aux décisionnaires  pour une prise de décision raisonnable et éclairée
- Un suivi rigoureux des décisions et des plans d'action consécutifs à l'identification d'un risque

La mise en place d'une gestion formelle des risques permet de prendre en compte les spécificités opérationnelles liées à un projet ou un produit et atteindre des objectifs de sécurité spécifiques. Le non-respect d'une règle de la PSSI donne lieu à une analyse des risques résultant dans la mise en place de mesures des sécurité compensatoires permettant d'atteindre un niveau de sécurité au moins équivalent ou une acceptation du risque.

#### Répondre efficacement aux incidents de sécurité

OVHcloud déploie une approche unifiée de gestion des incidents de sécurité en mettant en place les moyens organisationnels et techniques permettant de :

- Détecter et consolider les évenements pouvant impacter la sécurité des systèmes d'information et des services
- Corréler les évenements indiquant une éventuelle atteinte à la sécurité de l'information et déclencher la prise en charge de l'incident le plus rapidement possible
- Mobiliser les experts et décisionnaires en charge de la résolution de l'incident
- Prendre en charge l'incident avec les objectifs suivants :
    - Réduire les impacts opérationnels
    - Préserver les éléments de preuve permettant de supporter une éventuelle judiciarisation ou des sanctions
    - Revenir à une situation nominale
- Informer les parties intéressées en accord avec les obligations légales et contractuelles
- Identifier les causes racines, mettre à jour les analyses de risques et définir les plans d'actions éventuels pour réduire le risque de nouvel occurrence

#### Accompagner les évolutions des SI et des produits

OVHcloud intègre la sécurité au sein des projets d'évolution et de transformation. Le respect de la PSSI et la protection des données est un prérequis général à toutes les activités d'OVHcloud. L'équipe sécurité accompagne les équipes projets d'OVHcloud dans le cycle de vie complet de tous les projets pour s'assurer que les moyens mis en œuvre pour assurer la sécurité sont adéquats et correctement implémentés. Cet accompagnement consiste à :

- Déterminer la criticité en sécurité des données et des traitements concernés par le projet
- Accompagner les chefs de projets dans la définition de l'architecture technique et fonctionnelle
- Accompagner les équipes projets dans l'intégration dans le SI OVHcloud
- Assurer le respect du socle de sécurité dans le cadre du projet et les mesures de sécurité spécifique à mettre en place
- Aider les sponsors et chefs de projet à arbitrer les mesures spécifiques par rapport aux contraintes financières et opérationnelles
- Evaluer le niveau de sécurité du projet en phase de recette et après sa mise en production
- Déterminer les risques résiduels et les surveiller dans le temps

#### Assurer l'alignement des moyens faces aux enjeux

OVHcloud intègre la gestion des ressources affectées à la sécurité. Cette gestion concerne:

- Les investissements et les ressources humaines de la direction sécurité en lien avec les priorités sécurité
- L'élaboration des feuilles de routes des autres équipes OVHcloud afin d'y intégrer les besoins sécurité (investissement et ressources humaines)
- Les besoins en compétences et formations sécurité pour les équipes et la prise en compte dans le plan de formation
- L'identification des écarts entre les besoin et les ressources disponibles pour l'adaptation des feuilles de route et la prise en compte dans le cadre de la gestion des risques.

#### Développer la culture sécurité des équipes

L'équipe sécurité met en œuvre un dispositif de sensibilisation des collaborateurs dès leur intégration et durant toute leur présence au sein des effectifs d'OVHcloud. Cette sensibilisation se matérialise par :

- Des sessions formelles de présentation des menaces ciblant OVHcloud et des dispositifs de sécurité mis en place
- Des communications régulières sur les bonnes pratiques et les risques
- Des communications ciblées sur une menace précise, en lien avec l'actualité ou nos activités de détection
- Des tests des réflexes et des capacités de réaction des collaborateurs
- Le partage de ressources documentaires et de retours d'expérience sur les menaces et vulnérabilités du cloud

#### Mettre en place une approche privacy by design

La politique d'utilisation de données à caractère personnel cadre la gestion de ces données. Les SMSI portent notamment cet engagement par la définition, la mise en œuvre et l'amélioration des dispositifs de sécurité assurant la protection des données à caractère personnel hébergées. Cette prise en compte se matérialise par:

- La mise en place d'un Système de management des données personnelles (PIMS) intégré avec les SMSI
- La mise en place d'instance de pilotage conjointe entre les équipes sécurité et privacy
- Un alignement des politiques de sécurité et de la politique d'utilisation de données à caractère personnel
- La prise en compte des mesures de sécurité opérées au sein des SMSI dans les engagements contractuels sur la protection des données à caractère personnel avec les clients
- La participation de l'équipe privacy aux instances de pilotage des SMSI
- La participation de l'équipe sécurité aux démarches de définition des risques liés à la protection de la vie privée
- La participation conjointe à la résolution des incidents de sécurité ayant un impact sur les données à caractère personnel
- La définition conjointe des objectifs de sécurité et des mesures à mettre en œuvre dans le cadre des projets.

#### Securiser la chaine d'approvisionnement

Les équipes produits d'OVHcloud s'appuient principalement sur les autres équipes d'OVHcloud mais également sur des partenaires, sous-traitants et fournisseurs pour assurer les opérations et composer les produits et services rendus aux clients. L'adéquation entre les activités sous-traitées et l'engagement de sécurité d'OVHcloud doit être gérée :

- Identification des dépendances entre les équipes OVHcloud et les sous-traitants, fournisseurs et partenaires
- Classification des dépendances par criticité
- Analyse des risques et réductions des risques si nécessaire
- Cascade des niveaux de service et engagements sécurité
- Prise en compte de la sécurité dans les projets
- Plan d'assurance sécurité pour les sous-traitants

#### Evaluer la sécurité et mettre en place l'amélioration continue

##### **Contrôles internes**

De nombreux dispositifs de contrôles internes de premier niveau sont déployés par les équipes opérationnelles et par l'équipe sécurité. Ces activités de contrôle sont principalement mises en place sous la forme :

- De mécanismes de surveillance automatisés sur les systèmes
- De points de contrôles opérationnels intégrés aux processus pour assurer la coordination entre équipes, la prise en compte des risques, et les validations éventuelles sur les activités risquées. Dans la mesure du possible ces points de contrôles sont intégrés aux outils.
- De contrôles opérationnels ponctuels par des experts sécurité

Un contrôle interne de second niveau est réalisé par les équipes sécurités afin de s'assurer de l'efficacité des dispositifs de contrôles de premier niveau. Ces activités sont formelles.

L'efficacité des SMSI est également suivie dans le cadre des activités de pilotage.

##### **Audits internes**

OVHcloud s'appuie sur des démarches d'audit interne pour évaluer l'efficacité des activités de contrôles interne. Ces dispositifs sont mis en place par des équipes indépendantes des opérations et systèmes audités. Les démarches d'audits internes recouvrent notamment les activités suivantes :

- Audit organisationnels et technique sur les règles définies au sein de la PSSI
- Audit technique de revue d'architecture, de déploiement, de projet
- Audit de code sources
- Tests d'intrusion

Ces démarches sont réalisées par des personnels OVHcloud ou des sous-traitants externes.

OVHcloud met en œuvre un programme de Bug Bounty public permettant une mise à l'épreuve permanente de nos systèmes exposés sur internet.

Ces dispositifs permettent d'identifier des vulnérabilités, des non-conformités et des opportunités d'amélioration et alimentent la démarche d'amélioration continue de la sécurité.

##### **Audits externes**

OVHcloud met en œuvre un programme d'audit externe sur les périmètres disposant de certification. Nous nous appuyons sur :

- Des référentiels généralistes : ISO 27001, AICPA TSP (SOC)
- Des référentiels spécifiques aux Cloud Provider : ISO 27017, CISPE, CSA CCM
- Des référentiels dédiés à des problématiques particulières comme le respect de la vie privée : CISPE, ISO 27018, ISO 27701
- Des référentiels sectoriels ou géographique : PCI DSS, HDS, PSEE, SecNumCloud, AGID, ENS

Pour chaque référentiel, nous déterminons l'organisme de certification ou d'audit le plus adapté pour renforcer la confiance de nos clients dans notre capacité à respecter les exigences adaptées à leurs attentes.

##### **Audits par les clients et les autorités**

OVHcloud permet à ses clients, sous certaines conditions de réaliser des audits de sécurité sur les systèmes.

Ces audits peuvent être :

- Techniques à distance (Test d'intrusion, scan de vulnérabilité), réalisés en autonomie sans intervention des équipes OVHcloud
- Organisationnels et techniques à distance en asynchrone par le biais de questionnaires et d'échanges écrits avec les équipes OVHcloud
- Organisationnels et techniques sur site, incluant des visites d'installation, des entretiens avec les opérationnels et un accès à la documentation et aux configurations. Ces évaluations sont conditionnées au respect des standards d'audit

Tout comme les audits internes et externes, ces évaluations permettent d'alimenter la démarche d'amélioration continue de la sécurité.

##### **Amélioration continue**

OVHcloud met en œuvre une démarche d'amélioration continue de la sécurité et des processus de gestion. Les opportunités d'améliorations sont identifiées par:

- Les activités de contrôles interne
- Les audits internes et externes
- L'analyse des incidents de sécurité
- L'identification des risques de sécurité
- Les acteurs impliqués dans les processus de gestion de la sécurité
- Les parties intéressées de la sécurité d'OVHcloud
- L'analyse des causes racines des non-conformités, vulnérabilités et incidents

Ces opportunités d'amélioration sont évaluées avant mise en œuvre et le cas échéant priorisées et arbitrées. Les plans d'actions consécutifs sont suivis formellement dans les outils de gestion de projets utilisés par les équipes

### Les systèmes de management de la sécurité de l'information des units

OVHcloud est organisé en "units", disposant d'une autonomie forte au sein du cadre global d'OVHcloud. Chaque unit instancie un périmètre dédié de gestion de la sécurité se matérialisant par l'instanciation de Systèmes de Management de la Sécurité de l'Information au niveau de la units (SMSI Unit) afin de :

- Définir l'organisation sécurité au sein de la unit permettant de piloter la sécurité sur le périmètre de responsabilité de la unit
- Affecter et gérer les ressources nécessaires à la gestion de la sécurité dans le contexte de la unit.
- Identifer les exigences légales, contractuelles et métiers à prendre en compte par la unit
- Identifier et gérer les risques de sécurité dans le contexte de la unit
- Définir des objectifs de sécurité spécifiques sur la base du contexte de la unit et des services proposés à ses clients externes ou internes
- Mettre en œuvre et opérer les mesures de sécurité permettant d'assurer le respect de la PSSI dans le contexte de la unit
- Mettre en œuvre et opérer les mesures de sécurité spécifiques en liens avec les objectifs de sécurité spécifiques
- Gérer la sécurité des activités réalisées par des tiers interne et externes, pour le compte de la unit
- Définir, prioriser et suivre les plans d'action de mise en œuvre et d'amélioration de la sécurité
- Evaluer et remettre en question la pertinence et l'efficacité des mesures mise en place
- Apporter la garanties sur le niveau de sécurité mis en œuvre aux parties intéressées de la unit

Chaque SMSI Unit dispose d'une politique de sécurité formalisant le contexte et les éléments spécifiques du périmètre afin d'en assurer la prise en compte en plus de la PSSI OVHcloud. Ces politiques sont sous la responsabilité des directeurs des SMSI Unit sont revues annuellement.