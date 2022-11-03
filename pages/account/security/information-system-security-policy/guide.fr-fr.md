---
title: "Politique de sécurité du système d'information (PSSI)"
slug: pssi
section: Politiques de sécurité
---

**Dernière mise à jour le 21/07/2022**

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

#### Les employés, la direction d'OVHcloud et les actionnaires

Les salariés d'OVHcloud conçoivent, maintiennent et opèrent les systèmes et processus en support des services d'OVHcloud. Tout incident de sécurité a un impact négatif direct sur les opérations, il peut également remettre en question la valeur du service, l'expertise et le professionnalisme des équipes. Opérer des systèmes d'information sécurisés permet de mettre en valeur les innovations, la passion, l'engagement des équipes et la qualité des services d'OVHcloud.

OVHcloud, en tant que fournisseur de cloud alternatif dans un environnement très compétitif, doit assurer une croissance forte pour soutenir l'innovation et le développement à l'international renforçant sa crédibilité. La confiance de nos clients, principal vecteur de cette croissance, est directement liée à la capacité d'OVHcloud à protéger leurs données et charges de traitements. La cybersécurité est donc un des piliers en support de la stratégie de développement portée par la direction et les actionnaires d'OVHcloud.

## Nos engagements sécurité

### Déployer une approche industrielle à grande échelle de la sécurité

Les équipes OVHcloud s'engagent à innover de façon permanente pour répondre aux besoins en constante évolution des clients en termes de technologie, de fonctionnalités et de performances. La sécurité est intégrée dans le cycle de vie du développement des produits. L'équipe de sécurité est constamment impliquée pour challenger et aider toutes les décisions susceptibles d'avoir un impact sur la sécurité.

La sécurité d'OVHcloud repose sur la responsabilité de chaque employé en matière de sécurité des données. Nos développeurs et administrateurs sont choisis pour leur expertise technologique. L'équipe sécurité assure la cohérence des outils, des processus et des connaissances de sécurité avec la politique de sécurité d'OVHcloud.

Nous mettons en œuvre et opérons des mesures de sécurité adaptées pour prévenir et réduire les risques de sécurité. Nous voulons que cette approche soit directe et transparente afin de renforcer la confiance de nos clients et partenaires. Nous concevons et exploitons un grand nombre de systèmes. Notre démarche s'appuie sur des mesures de sécurité normalisées, sur des architectures sécurisées dès leur conception et sur des processus formels, éprouvés, fortement automatisés. Ces mesures de sécurité sont issues de l'expérience d'OVHcloud, de nos engagements contractuels, des obligations légales et règlementaires et des bonnes pratiques métier reconnues. Elles nous permettent d’assurer la sécurité à l’échelle d'OVHcloud.

Une gestion formelle des risques de sécurité permet de prendre en compte les spécificités liées à chaque projet. Nous complétons ainsi nos mesures de sécurité normalisées avec des mesures spécifiques à ces projets. Les démarches de gestion des évènements, des incidents, des vulnérabilités, des menaces et de remontées d'information de sécurité demeurent normalisées au sein d'une approche unifiée.

Enfin, OVHcloud opère un dispositif d'analyse permanent des menaces lié à une surveillance permanente des systèmes. Ainsi, nous adaptons systématiquement les pratiques opérationnelles aux risques immédiats et réagissons efficacement aux incidents de sécurité. L'organisation des équipes sécurité permet de mobiliser au plus vite les experts pour investiguer et résoudre les incidents de sécurité. De cette manière, nous minimisons les impacts potentiels et mettons en place les actions correctives au plus vite de manière pérenne.

### Positionner OVHcloud comme un acteur de confiance au sein de l'écosystème

En tant que fournisseur mondial de cloud, OVHcloud a une grande responsabilité dans la lutte contre les menaces de sécurité. Nous déployons des outils de protection à grande échelle. Nous automatisons la protection des systèmes de nos clients contre ces menaces. Nous détectons les systèmes vulnérables. Nous partageons nos innovations et nos connaissances avec la communauté de la sécurité. Nous gérons plusieurs millions d'adresses IP publiques pour le compte de nos clients. Ces adresses sont des actifs essentiels des systèmes d'informations dans le cloud et leurs réputations est l'une de nos préoccupations.

L'équipe sécurité et les experts techniques d'OVHcloud entretiennent des relations opérationnelles solides avec les communautés d'experts en sécurité, les autorités, les éditeurs de logiciels et les fabricants de matériel. De cette manière, nous anticipons les nouvelles menaces et les nouvelles vulnérabilités. Ainsi, nous réduisons les risques associés. Nous partageons nos innovations et nos connaissances avec la communauté de la sécurité et nous promouvons la divulgation responsable.

Nous challengeons continuellement notre sécurité. Nous mettons en œuvre un programme structuré de revues, de tests et de contrôles, tant internes qu'externes. Notre organisation de la gestion de la sécurité est basée sur des normes internationales reconnues, et en particulier l'ISO/IEC 27001 qui met en évidence ces principes. Nous évaluons nos dispositifs de sécurité régulièrement en nous appuyant sur des tiers de confiance et des référentiels d'audit reconnus.

### Opérer un cloud de confiance pour tous

OVHcloud propose ses solutions à tout type de client dans tous les domaines d'activités : startup, PME, grande entreprise, administration, multinationale. Chaque client d'OVHcloud a une approche de la sécurité particulière dépendante de son contexte métier ou de ses besoins de souveraineté que nous devons prendre en compte. La sécurité est un des pilliers de la confiance de nos clients.

La sécurité d'un système dans le cloud est une responsabilité partagée entre le fournisseur de cloud et le client. OVHcloud assure la sécurité des services fournis et des infrastructures sous-jacentes. Nos clients sont toutefois responsables de la sécurité de leurs systèmes d'information dans le cloud. Nous leur offrons un haut niveau de transparence sur les mesures de sécurité implémentées par OVHcloud pour les aider dans leur plan global de mitigation des risques sécurité. Nous définissons clairement leurs domaines de responsabilité afin d'éviter toute vulnérabilité découlant d'une prise de conscience insuffisante.

OVHcloud fournit et développe un ensemble d'outils, de fonctionnalités et de configurations afin d'améliorer la sécurité des systèmes des clients dans le cloud. La plupart des fonctions de sécurité sont incluses pour tous les clients. Des fonctions de sécurité supplémentaires sont également proposées pour aider nos clients à réduire les risques spécifiques auxquels ils sont confrontés.

OVHcloud s'engage également sur la protection des données à caractère personnel, en tant que responsable de traitement pour les données relatives à nos clients et en tant que sous-traitant de données à caractère personnel dans le cas ou nos clients sont eux-mêmes responsables de traitement. La politique de sécurité des systèmes d'information porte notamment cet engagement par la définition, la mise en œuvre et l'amélioration des dispositifs de sécurité assurant la protection des données à caractère personnel hébergées.

Les produits conçus chez OVHcloud utilisent des technologies open source et/ou des standards technologiques éprouvés. L'adoption et la réversibilité du produit s’en trouvent facilités. Ce choix stratégique garantit à nos clients le déploiement de systèmes standards dans le cloud. Ils peuvent ajouter leurs propres solutions de sécurité, tirer parti des compétences et des outils usuels de leurs équipes. Une large offre de solutions et de services de sécurité est disponible avec les partenaires OVHcloud ainsi que d'autres fournisseurs.

### Comment OVHcloud s'engage ?

L'engagement d'OVHcloud vis à vis des clients et partenaires est avant tout porté par la relation contractuelle qui le formalise et l'explicite.

OVHcloud respecte les lois et règlementations applicables dans le cadre de la fourniture des services dans chaque pays. Aussi, OVHcloud s'engage contractuellement à respecter certaines règlementations sectorielles spécifiques, par exemple pour les systèmes d'information de santé ou financiers.

Au-delà des liens contractuels, OVHcloud s'engage auprès de son écosystème, ses clients et prospects en s’assurant de la clarté et de la transparence des messages en toutes circonstances.
