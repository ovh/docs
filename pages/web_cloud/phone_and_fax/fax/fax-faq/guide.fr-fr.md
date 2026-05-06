---
title: "FAQ sur la solution Fax OVHcloud"
excerpt: "Retrouvez les questions les plus fréquemment posées sur le service Fax OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Retrouvez ici les questions les plus fréquemment posées sur le service Fax OVHcloud.

## FAQ

/// details | Quelle est la différence entre les offres EcoFax et Plug & Fax ?

OVHcloud propose deux offres de fax :

- **EcoFax Pro :** offre 100 % logicielle. L'envoi de fax se fait exclusivement par e-mail, via l'imprimante virtuelle EcoFax ou via l'espace client. La réception se fait par e-mail (le fax reçu arrive en pièce jointe PDF). Aucun matériel n'est nécessaire. C'est l'offre idéale pour une utilisation dématérialisée du fax.
- **Plug & Fax :** offre hybride qui inclut un adaptateur téléphonique (ATA) permettant de brancher un télécopieur physique classique sur votre connexion Internet. Vous pouvez ainsi continuer à utiliser votre fax physique existant tout en bénéficiant de l'infrastructure VoIP OVHcloud. L'offre Plug & Fax permet également l'envoi et la réception par e-mail en parallèle.

Les deux offres sont facturées à l'utilisation (par fax envoyé/reçu) en plus de l'abonnement mensuel.

///

/// details | Comment commander des fax ?

Pour envoyer des fax, vous devez d'abord disposer d'une ligne Fax dédiée. Choisissez votre offre depuis la [page dédiée](/links/telecom/fax) et votre ligne fax sera activée dans l'espace client à l'issue de la commande.
<br>Par la suite, vous n'avez pas à commander de fax. Chaque envoi de fax vous sera facturé à hauteur du nombre de destinataires compris dans votre campagne de fax.

///

/// details | Comment puis-je envoyer des fax ?

Vous pouvez envoyer des fax par plusieurs canaux. Le guide « [Envoyer des fax par e-mail](/pages/web_cloud/phone_and_fax/fax/envoyer_des_fax_et_creer_des_campagnes_par_e_mail) » vous permettra d'envoyer vos fax et vos campagnes de fax par e-mail.
<br>Pour l'envoi de campagnes de fax, nous vous recommandons de privilégier « [la méthode via l'espace client OVHcloud](/pages/web_cloud/phone_and_fax/fax/envoyer_une_campagne_de_fax_via_le_manager) » qui vous permet d'assurer un meilleur suivi du déroulement.

///

/// details | Comment envoyer une campagne de fax à plusieurs destinataires ?

OVHcloud propose deux méthodes pour envoyer une campagne de fax :

- **Via l'espace client :** [accédez à la section VoIP & Fax](/links/control-panel/telecom-voip-fax) de votre espace client OVHcloud, sélectionnez votre ligne Fax, puis cliquez sur l'onglet `Fax`{.action} puis sur `Campagnes de fax`{.action}. Chargez votre document (PDF recommandé) et la liste de destinataires (fichier txt contenant les numéros de fax au format international). Vous pouvez planifier l'heure d'envoi et suivre le taux de délivrance en temps réel.
- **Par e-mail :** envoyez votre document en pièce jointe à l'adresse `numéro1,numéro2,numéro3@fax.ovh.net` pour une liste courte.

La méthode via l'espace client est recommandée pour les campagnes volumineuses car elle offre un meilleur suivi et un rapport de délivrance détaillé. Pour plus de détails, consultez le guide « [Envoyer une campagne de fax depuis l'espace client OVHcloud](/pages/web_cloud/phone_and_fax/fax/envoyer_une_campagne_de_fax_via_le_manager) ».

///

/// details | Quels formats de fichier sont acceptés pour l'envoi de fax par e-mail ?

Les formats acceptés en pièce jointe sont : **PDF**, **TIFF**, **TXT**, **JPG/JPEG**, **BMP**, **GIF** et **PNG**. Le format PDF est recommandé car il garantit le meilleur rendu de mise en page. La taille maximale de la pièce jointe est de **5 Mo**. Si votre document dépasse cette taille, compressez-le ou réduisez sa résolution. Les fichiers Office (Word, Excel) ne sont pas directement supportés : convertissez-les en PDF avant l'envoi. L'e-mail d'envoi doit être adressé à `numéro_de_fax@fax.ovh.net` (remplacez `numéro_de_fax` par le numéro du destinataire au format international, ex : `0033xxxxxxxxx@fax.ovh.net`).

Pour plus de détails, consultez le guide « [Envoyer des fax par e-mail](/pages/web_cloud/phone_and_fax/fax/envoyer_des_fax_et_creer_des_campagnes_par_e_mail) ».

///

/// details | Comment configurer l'imprimante virtuelle EcoFax sous Windows ?

Consultez le guide « [Envoyer des Fax via l'imprimante virtuelle EcoFax - Windows](/pages/web_cloud/phone_and_fax/fax/envoyer_des_fax_via_limprimante_virtuelle_ecofax-_windows) » pour installer et configurer l'imprimante virtuelle EcoFax sous Windows.

///

/// details | Comment configurer l'imprimante virtuelle EcoFax sous macOS ?

Consultez le guide « [Envoyer des Fax via l'imprimante virtuelle EcoFax - macOS X](/pages/web_cloud/phone_and_fax/fax/envoyer_des_fax_via_limprimante_virtuelle_ecofax_-_mac_os_x) » pour installer et configurer l'imprimante virtuelle EcoFax sous macOS.

///

/// details | Puis-je utiliser mon télécopieur/fax physique avec mon offre Plug & Fax ?

**Oui**, le guide suivant vous permet de comprendre le fonctionnement de l'offre Plug & Fax et d'ajuster la configuration du télécopieur utilisé pour obtenir le meilleur rendu : « [Utiliser son fax physique avec l'offre Plug & Fax](/pages/web_cloud/phone_and_fax/fax/utiliser_son_fax_physique_avec_l_offre_plug_and_fax) ».

///

/// details | Quels sont les paramètres optimaux pour envoyer un fax depuis un télécopieur physique via Plug & Fax ?

Pour obtenir le meilleur rendu via l'adaptateur Plug & Fax, les paramètres suivants sont recommandés sur votre télécopieur physique :

- **Vitesse de transmission :** réglez sur **9600 bps** (au lieu de 14400 bps par défaut). La VoIP introduit une latence qui rend les vitesses élevées moins fiables.
- **Mode de correction d'erreur (ECM) :** **désactivez-le**. L'ECM génère des retransmissions qui peuvent provoquer des coupures de connexion sur un lien VoIP.
- **Résolution :** utilisez la résolution **Standard** (200x100 dpi) pour la plupart des documents. La résolution « Fine » (200x200 dpi) augmente le temps de transmission.
- **Contraste :** réglez sur « Normal » ou « Sombre » pour les documents avec du texte clair.

Ces paramètres s'ajustent dans le menu de configuration de votre télécopieur. Consultez le guide « [Utiliser son fax physique avec l'offre Plug & Fax](/pages/web_cloud/phone_and_fax/fax/utiliser_son_fax_physique_avec_l_offre_plug_and_fax) » pour plus de détails.

///

/// details | Comment activer le répondeur Fax sur mon offre EcoFax Pro ou Plug & Fax ?

Le répondeur Fax permet de recevoir des fax entrants sous forme de pièces jointes e-mail, même lorsque votre ligne Fax n'est pas connectée à un télécopieur physique. [Accédez à la section VoIP & Fax](/links/control-panel/telecom-voip-fax) de votre espace client OVHcloud, sélectionnez votre ligne Fax, puis cliquez sur l'onglet `Répondeur`{.action}. Activez la fonctionnalité et renseignez l'adresse e-mail sur laquelle vous souhaitez recevoir les fax entrants en pièce jointe (format PDF). Vous pouvez également configurer une notification par e-mail pour chaque fax reçu, incluant les informations de l'expéditeur et la date/heure de réception.

Pour plus de détails, consultez le guide « [Activation du répondeur Fax EcoFax Pro / Plug & Fax](/pages/web_cloud/phone_and_fax/fax/activer_repondeur_fax) ».

///

/// details | Pourquoi mon Fax est-il en attente ?

Que cela soit [par e-mail](/pages/web_cloud/phone_and_fax/fax/envoyer_des_fax_et_creer_des_campagnes_par_e_mail) ou via un logiciel de type Ecofax, l'envoi d'un document par fax est automatiquement mis en attente si celui-ci n'est pas encore traité par nos systèmes.
<br>Si une erreur est rencontrée en cas d'envoi par e-mail, la raison de cette erreur sera envoyée à l'adresse e-mail émettrice. Retrouvez les erreurs les plus courantes dans le guide sur [l'envoi de fax par e-mail](/pages/web_cloud/phone_and_fax/fax/envoyer_des_fax_et_creer_des_campagnes_par_e_mail).

> [!success]
>
> **Trucs et astuces**
>
> En cas d'oubli de votre **mot de passe Fax**, consultez le [guide sur la configuration de votre ligne fax](/pages/web_cloud/phone_and_fax/fax/configuration_fax_espace_client) pour réinitialiser ce mot de passe depuis votre espace client OVHcloud.

///

/// details | Mon fax n'arrive pas au destinataire, que vérifier ?

Lorsqu'un fax ne parvient pas à son destinataire, plusieurs vérifications s'imposent :

- **Format du numéro :** le numéro du destinataire doit être au format international (ex : `0033xxxxxxxxx` pour la France). Vérifiez qu'il n'y a pas de faute de saisie.
- **Numéro valide :** assurez-vous que le numéro de destination est bien un numéro de fax actif et non un numéro de téléphone vocal.
- **Taille du fichier :** le document ne doit pas dépasser 5 Mo en envoi par e-mail.
- **Format du fichier :** utilisez un format supporté (PDF, TIFF, TXT, JPG). Les fichiers Word ou Excel doivent être convertis en PDF.
- **Accusé de réception :** consultez l'e-mail d'accusé de réception envoyé après la tentative d'envoi. Il contient le statut de l'envoi et le code d'erreur éventuel.
- **File d'attente :** les fax sont traités séquentiellement. En cas de forte charge, un délai peut s'appliquer.

Si le problème persiste, vérifiez que votre ligne Fax est bien active dans l'espace client et que votre identité a été validée.

///

/// details | Comment retrouver le RIO de ma ligne Fax ?

Tout numéro associé à une ligne Fax est portable grâce à son **RIO** (**R**elevé d'**I**dentité **O**pérateur).

Pour récupérer le RIO, [accédez à la section VoIP & Fax](/links/control-panel/telecom-voip-fax) de votre espace client OVHcloud. Cliquez sur le groupe de facturation souhaité puis sur la ligne Fax concernée dans l'onglet `Services`{.action}. Le RIO est affiché dans la rubrique `Informations générales`{.action}.

> [!warning]
>
> **La portabilité d'un numéro OVHcloud vers un autre opérateur entraîne sa résiliation technique et commerciale chez OVHcloud à la date effective de la portabilité.**

**Autres méthodes pour obtenir le RIO :**

- Depuis une ligne fixe : composez le **0805 69 3179**, puis renseignez le numéro OVHcloud concerné.

Le RIO sera envoyé par e-mail au contact détenteur du service.

///

/// details | Comment résilier une ligne Fax ?

[Accédez à la section VoIP & Fax](/links/control-panel/telecom-voip-fax) de votre espace client OVHcloud. Sélectionnez le groupe de facturation contenant la ligne Fax à résilier, puis cliquez sur le service dans l'onglet `Services`{.action}. Depuis l'onglet `Gestion`{.action}, cliquez sur `Résiliation du fax`{.action}. La résiliation prend effet à la fin de la période de facturation en cours. Un service résilié ne peut pas être réactivé. Si un boîtier Plug & Fax est associé au service, un bon de retour (RMA) vous sera envoyé pour le renvoyer et récupérer votre dépôt de garantie.

Pour plus de détails, consultez le guide « [Comment résilier un service VoIP ou une ligne Fax](/pages/web_cloud/phone_and_fax/voip/resilier-services-voip) ».

///

/// details | Comment fonctionne la procédure de RMA (retour matériel) pour un boîtier Fax ?

Le RMA (Return Merchandise Authorization) est la procédure de retour du boîtier Plug & Fax fourni sous caution par OVHcloud. Un RMA est déclenché lors d'une résiliation, d'un échange ou d'une panne nécessitant un remplacement. Lorsqu'un RMA est initié, vous recevez un bon de retour par e-mail avec les instructions d'expédition. Le matériel doit être retourné dans un délai de 15 jours dans son emballage d'origine, avec tous les accessoires. À réception, OVHcloud vérifie l'état du matériel : si celui-ci est en bon état, le dépôt de garantie vous est restitué. En cas de matériel endommagé ou incomplet, le dépôt peut être conservé partiellement ou intégralement.

Pour plus de détails, consultez le guide « [Déroulement d'un RMA](/pages/web_cloud/phone_and_fax/voip/deroulement_d_un_rma) ».

///

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
