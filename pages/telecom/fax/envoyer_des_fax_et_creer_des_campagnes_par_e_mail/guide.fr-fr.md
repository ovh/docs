---
title: Envoyer des fax par e-mail
slug: envoyer-des-fax-et-creer-des-campagnes-par-e-mail
excerpt: Découvrez comment envoyer des fax ou des campagnes de fax par e-mail
legacy_guide_number: '8355851'
section: Envoi/Réception de fax
order: 1
---

**Dernière mise à jour le 23/06/2022**

## Objectif

Vous pouvez envoyer des fax OVHcloud de différentes manières. Ce guide vous présente la méthode pour envoyer vos fax et campagnes de fax par e-mail, via n'importe quel webmail ou logiciel client e-mail (de type Outlook, Thunderbird, etc).

**Découvrez comment envoyer un fax ou une campagne de fax par e-mail.**

## Prérequis

- Disposer d’une [ligne Fax OVHcloud](https://www.ovhtelecom.fr/fax/).
- Être connecté à son adresse e-mail via un client e-mail (webmail ou logiciel).
- Connaître ou réinitialiser le mot de passe de la ligne Fax. Pour plus d'informations, consultez notre guide « [Configuration de votre ligne Fax](https://docs.ovh.com/fr/fax/configuration-fax/#mot-de-passe-fax) ».

## En pratique

Ce guide détaille comment compléter les champs d'un e-mail afin d'envoyer un fax ou une campagne de fax.<br>
Ouvrez votre client e-mail ou votre webmail puis ouvrez une fenêtre d'envoi d'e-mail.

### Envoyer un fax par mail

Pour envoyer un fax par e-mail, vous devez renseigner les informations suivantes dans les champs décrits dans le tableau ci-dessous.

|Information|Champ de l'e-mail où renseigner l'information|
|---|---|
|**1.** Le **numéro de fax de votre destinataire** |Renseignez le numéro sous la forme `numero@ecofax.fr` dans le champ `À`{.action} où vous renseignez habituellement l'adresse e-mail d'un destinataire.<br><br>**Par exemple** : `0123456789@ecofax.fr`|
|**2.** Le **numéro de votre ligne Ecofax émettrice** | Renseignez votre numéro, sans espaces, dans le champ `Objet`{.action}.<br><br>**Par exemple** : `0987654321` pour le numéro 09 87 65 43 21|
|**3.** Le **fichier** à faxer|Ajoutez le fichier à faxer en tant que `pièce jointe`{.action} attachée à l'e-mail.<br><br>Retrouvez la liste des formats acceptés [en bas de ce guide](#formats)|
|**4.** Le **mot de passe** de la ligne Ecofax |Renseignez ce mot de passe dans le `corps`{.action} de l'e-mail, précédé de `p:`<br><br>**Par exemple** : `p:motdepassefax`.<br><br>Ce mot de passe est bien entendu donné ici à titre d'exemple, veillez à bien utiliser le véritable [mot de passe de votre ligne Fax](https://docs.ovh.com/fr/fax/configuration-fax/#mot-de-passe-fax).<br><br>Veillez à désactiver toute signature automatique d'e-mail et à ne pas ajouter de caractères supplémentaires dans le corps de votre e-mail. En effet, ces éléments pourraient empêcher la bonne prise en compte de votre mot de passe.|

Vous devriez obtenir des champs complétés de façon similaire à l'exemple ci-dessous (les numéros indiqués en orange correspondent à ceux du tableau ci-dessus) :

![fax-par-mail](images/mail2fax.png){.thumbnail}

> [!primary]
> Consultez la partie de ce guide sur [les options supplémentaires](#options) pour plus de détails sur les options de qualité et d'envoi différé.

L'e-mail / fax est alors prêt à être envoyé.

Une fois l'envoi effectué, vous recevrez automatiquement un premier e-mail vous confirmant la bonne prise en compte de votre demande, puis un deuxième e-mail vous confirmant la bonne transmission du fax.

En cas d'erreur (par exemple, le mot de passe fax renseigné est erroné), vous recevrez un e-mail intitulé `Télécopie : erreur de traitement` et vous donnant des détails sur les raisons de l'erreur.<br>
Consultez la partie de ce guide sur [les erreurs de traitement](#errors) pour plus de détails.

### Envoyer une campagne de fax par mail

Vous pouvez utiliser la méthode d'envoi de fax par e-mail pour envoyer une campagne de fax.

> [!primary]
> **Limites et format du fichier de destinaires**
>
> L'envoi d'une campagne de fax est limité à **2000 destinataires maximum**.
>
> Dans le cadre de l'envoi d'une campagne de fax par e-mail, les numéros des destinataires doivent être listés dans un fichier au format Plain Text (\*.txt) et impérativement intitulé `numbers.txt`.
>
> Vous trouverez sur <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/telecom/fax/envoyer_des_fax_et_creer_des_campagnes_par_e_mail/images/numbers.txt" download>ce lien</a> un modèle de fichier `numbers.txt` à compléter par vos soins (faites un clic-droit sur le lien et cliquez sur `Enregistrer le lien sous`{.action}).
> Une fois votre liste complétée, veillez à supprimer les 3 premiers numéros uniquement écrits à des fins d'exemple.
>
> Pour éditer le fichier `numbers.txt`, nous vous recommandons d'utiliser un éditeur de fichiers texte basique, dont voici quelques exemples :
>
> - sous Windows, **Notepad**; 
> - sous MacOS, **TextEdit**;
> - sous Linux, **VI**.

Pour envoyer une campagne de fax par e-mail, vous devez renseigner les informations suivantes dans les champs décrits dans le tableau ci-dessous.

|Information|Champ de l'e-mail où renseigner l'information|
|---|---|
|**1.** Le **destinataire de l'email** |Renseignez le destinataire `fax@ecofax.fr` dans le champ `À`{.action} où vous renseignez habituellement l'adresse e-mail d'un destinataire.|
|**2.** Le **numéro de votre ligne Ecofax émettrice** | Renseignez votre numéro, sans espaces, dans le champ `Objet`{.action}.<br><br>**Par exemple** : `0987654321` pour le numéro 09 87 65 43 21|
|**3.** Le **fichier** à faxer|Ajoutez le fichier à faxer en tant que `pièce jointe`{.action} attachée à l'e-mail.<br><br>Retrouvez la liste des formats acceptés [en bas de ce guide](#formats)|
|**4.** Le **fichier de destinaires**|Ajoutez, en tant que `pièce jointe`{.action} attachée à l'e-mail, le fichier `numbers.txt` contenant votre liste de destinataires.|
|**5.** Le **mot de passe** de la ligne Ecofax |Renseignez ce mot de passe dans le `corps`{.action} de l'e-mail, précédé de `p:`<br><br>**Par exemple** : `p:motdepassefax`.<br><br>Ce mot de passe est bien entendu donné ici à titre d'exemple, veillez à bien utiliser le véritable [mot de passe de votre ligne Fax](https://docs.ovh.com/fr/fax/configuration-fax/#mot-de-passe-fax).<br><br>Veillez à désactiver toute signature automatique d'e-mail et à ne pas ajouter de caractères supplémentaires dans le corps de votre e-mail. En effet, ces éléments pourraient empêcher la bonne prise en compte de votre mot de passe.|

Vous devriez obtenir des champs complétés de façon similaire à l'exemple ci-dessous (les numéros indiqués en orange correspondent à ceux du tableau ci-dessus) :

![fax-par-mail](images/mail2faxcampaign.png){.thumbnail}

> [!primary]
> Consultez la partie de ce guide sur [les options supplémentaires](#options) pour plus de détails sur les options de qualité et d'envoi différé.

La campagne de fax est alors prête à être envoyée.

Une fois l'envoi effectué, vous recevrez automatiquement un premier e-mail vous confirmant la bonne prise en compte de votre demande, puis un deuxième e-mail vous confirmant la bonne transmission de la campagne de fax.

En cas d'erreur (par exemple, le mot de passe fax renseigné est erroné), vous recevrez un e-mail intitulé `Télécopie : erreur de traitement` et vous donnant des détails sur les raisons de l'erreur.<br>
Consultez la partie de ce guide sur [les erreurs de traitement](#errors) pour plus de détails.

### Les options supplémentaires <a name="options"></a>

Deux options sont proposées pour l'envoi par mail :

- La **qualité**. Vous avez le choix entre plusieurs qualités d'envoi :
    - **normal** : qualité utilisée pour les lignes Ecofax Perso;
    - **premium** : qualité standard des lignes Ecofax Pro;
    - **best** : permet d'envoyer des fax vers les numéros spéciaux.

Cette option peut être activée en écrivant, dans le corps de l'e-mail, une variable sous cette forme : `qualite:best`.

- **L'envoi différé** : permet de programmer à l'avance l'envoi d'un fax.

Cette option peut être activée en écrivant, dans le corps de l'e-mail, une variable sous cette forme : `date:2022-06-21 15:45:00`.

### Les erreurs d'envoi <a name="errors"></a>

Différentes erreurs peuvent êtres rencontrées lors de l'envoi d'un fax par e-mail. L'explication est donnée dans le corps de l'e-mail que vous recevez alors automatiquement.

Voici les erreurs les plus courantes :

|Erreur|Explications|
|---|---|
|`Télécopie : Erreur de traitement`|Généralement, ce message résulte d'un mot de passe de ligne fax erroné. Cela peut également indiquer qu'il n'y a pas eu de numéro de fax valide détecté.<br><br>Dans tous les cas, le détail de l'erreur est indiqué dans le corps de l'e-mail qui vous est automatiquement envoyé.|
|`Télécopie de 'fax.pdf' : Numéro dupliqué`|Ce message est un avertissement pour informer qu'il y a eu un doublon de numéros dans le fichier `numbers.txt`. Le fax ne sera pas envoyé plusieurs fois au même numéro.|
|`Télécopie de '' : Numéros restreints`|Ce message indique qu'il y a un numéro non autorisé parmi les destinataires.<br>Vous pouvez alors ajouter l'option `qualite:best` pour autoriser l'envoi.<br>Consultez la partie de ce guide sur [les options supplémentaires](#options) pour plus de détails.|

### Les formats de fichiers supportés <a name="formats"></a>

Nous vous recommandons d'utiliser le format PDF pour vos fichiers à envoyer par fax.<br>
Néanmoins, les formats suivants sont supportés par notre infrastructure :

- Microsoft Word (\*.doc)
- OpenDocument Text (\*.odt)
- OpenOffice.org 1.0 Text (\*.sxw)
- Rich Text Format (\*.rtf)
- WordPerfect (\*.wpd)
- Plain Text (\*.txt)
- OpenDocument Text (\*.odt)
- MediaWiki wikitext (\*.wiki)
- Microsoft Excel (\*.xls)
- OpenDocument Spreadsheet (\*.ods)
- OpenOffice.org 1.0 Spreadsheet (\*.sxc)
- Microsoft Excel (\*.xls)
- Comma-Separated Values (\*.csv)
- Tab-Separated Values (\*.tsv)
- OpenDocument Spreadsheet (\*.ods)
- OpenOffice.org 1.0 Spreadsheet (\*.sxc)
- Tab-Separated Values (\*.tsv)
- OpenDocument Presentation (\*.odp)
- OpenOffice.org 1.0 Presentation (\*.sxi)
- Microsoft PowerPoint (\*.ppt)
- OpenDocument Drawing (\*.odg)
- Scalable Vector Graphics (\*.svg)
- Macromedia Flash (\*.swf)
- Bitmap (\*.bmp)
- JPEG (\*.jpg)
- PNG (\*.png)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
