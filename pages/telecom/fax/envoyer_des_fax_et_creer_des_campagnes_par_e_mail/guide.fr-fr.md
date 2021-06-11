---
title: Envoyer des fax et créer des campagnes par e-mail
slug: envoyer-des-fax-et-creer-des-campagnes-par-e-mail
legacy_guide_number: '8355851'
section: Envoi/Réception de fax
order: 1
---

### **Préambule** {#préambule}

Vous pouvez envoyer des fax par plusieurs canaux. Dans ce guide, la méthode présentée vous permettra d'envoyer vos fax et vos campagnes de fax par e-mail. Pour les campagnes, nous vous recommandons néanmoins de privilégier la méthode via le Manager qui vous permet d'assurer un meilleur suivi du déroulement.

Cette méthode est utilisable avec les offres suivantes :

-   Ecofax Perso
-   Ecofax Pro
-   Plug And Fax

***![](images/information.png){.thumbnail} Pour commander les offres Fax : <https://www.ovhtelecom.fr/fax/>***

**Sommaire :**

Niveau : Intermédiaire

------------------------------------------------------------------------

### Envoyer un fax par mail {#envoyer-un-fax-par-mail}

Pour envoyer un fax par e-mail, il faut :

-   le **numéro** de la ligne **Ecofax** émettrice ;
-   le **motdepassefax** de la ligne Ecofax ;
-   le numéro de votre destinataire ;
-   le fichier à faxer.

L'envoi d'un fax se fait aussi simplement que l'envoi d'un e-mail :

-   -   Le **destinataire de l'e- mail** est sous cette forme : **numero\_destinataire@ecofax.fr**Par exemple, pour envoyer un fax au 09 72 10 10 10, l'adresse e-mail destinataire sera : **0972101010@ecofax.fr**
    -   **L'**objet de l'e-mail** est le numéro de la ligne de **faxémettrice** : dans notre exemple, la ligne Ecofax utilisée est **03 66 72 03 07**, l'objet est donc **0366720307****
    -   Dans le **corps de l'e-mail**, indiquez le **mot de passe fax** de la ligne Ecofax sous cette forme : **p:le\_mot\_de\_passe\_de\_la\_ligne**(En suivant ce lien vous pourrez récupérer votre mot de pass : [Mot de passe fax](#Envoyerdesfaxetcréerdescampagnespare-mail-MotdepassFax))
    -   Il faut **attacher** en **piècejointe** de l'e-mail le **fichier** à **envoyer**.

    L'e-mail est prêt à être envoyé.

Vous recevrez un mail vous confirmant la bonne prise en compte de votre demande puisun deuxième mail vous confirmant la bonne transmission du Fax.

Dans le cas d'une erreur (e mot de passe fax par exemple), vous recevrez un e-mail pour vous prévenir.

Le sujet de ce mail sera "**Télécopie : erreur de traitement**". Le corps du mail vous expliquera l'erreur rencontrée.

### **Envoyer une campagne de fax par mail** {#envoyer-une-campagne-de-fax-par-mail}

Le service de fax permet d'effectuer une campagne par e-mails (jusqu'à **2000destinataires**). Pour réaliser la campagne, il faut :

-   le **numéro** de la ligne **Ecofax** émettrice ;
-   le **motdepassefax** de la ligne Ecofax ;
-   le fichier contenant les destinataires ;
-   le fichier à faxer.

La composition de la campagne se déroule de cette manière :

-   Le **destinataire de l'e-mail** est sous cette forme : **fax@ecofax.fr**.
-   L'**objet de l'e-mail** est le numéro de la ligne de **faxémettrice** : dans notre exemple la ligne Ecofax utilisée est **03 66 72 03 07**, l'objet est donc **0366720307**.
-   Dans le **corps de l'e-mail**, il faut entrer le **mot de passe fax** de la ligne Ecofax sous cette forme : **p:le\_mot\_de\_passe\_de\_la\_ligne**
-   Il faut **attacher** en **piècejointe** de l'e-mail le **fichier** à **envoyer**.
-   Dans le cadre de la campagne, les destinataires sont à joindre dans un fichier appelé **numbers.txt** contenant un numéro de destinataire par ligne.

**Exemple de fichier numbers.txt**

    0972101010 0972101927 0366720307

Pour éditer le fichier numbers.txt, il est recommandé d'utiliser un éditeur de fichier texte basique. Sous Windows, **Notepad**, sous Mac OS, **TextEdit**et pour Linux, **VI**.

Le **déroulement** de la **campagne** se fait par **mail** : un e-mail est envoyé.

------------------------------------------------------------------------

### **Les options supplémentaires** {#les-options-supplémentaires}

Deux options sont proposées pour l'envoi par mail :

-   **La qualité:**il y a le choix entre plusieurs qualités d'envoi :
    -   -   **normal** : utilisée pour les lignes Ecofax Perso ;
        -   **premium** : qualité standard des lignes Ecofax Pro ;
        -   **best**: permet d'envoyer des fax vers les numéros spéciaux.

Cette option se définit dans le corps du mail sous cette forme : **qualite:best**.

-   **L'envoi différé:** permet de programmer à l'avance l'envoi d'un fax.

Cette option se définit dans le corps du mail sous cette forme : **date:21-06-2015 15:15:00**.

------------------------------------------------------------------------

****

### Les erreurs que vous pouvez rencontrer {#les-erreurs-que-vous-pouvez-rencontrer}

Différentes erreurs peuvent êtres rencontrées lors de l'envoi d'un fax par e-mail. L'explication est donnée dans le corps de l'e-mail. Voici les erreurs les plus courantes :

-   **Télécopie : Erreur de traitement:** Généralement, le mot de passe de la ligne fax est incorrect. Ce message peut être indiqué également lorsqu'il n'y a pas eu de numéro de fax valide détecté. Dans tous les cas, le détail de l'erreur est indiqué dans le corps de l'e-mail.
-   **Télécopie de 'fax.pdf' : Numéro dupliqué:**ce message est un avertissement pour informer qu'il y a eu un doublon de numéros dans le fichier **numbers.txt**. Le fax ne sera pas envoyé plusieurs fois au même numéro.
-   **Télécopie de '' : Numéros restreints :** ce message indique qu'il y a un numéro non autorisé dans les destinataires. Il suffit d'ajouter l'option **qualite:best** pour autoriser l'envoi.

    ------------------------------------------------------------------------

### **Les formats de fichiers supportés** {#les-formats-de-fichiers-supportés}

Plusieurs formats sont supportés par notre infrastructure. Il est néanmoins recommandé d'utiliser le format PDF.

-   Microsoft Word (\*.doc)
-   OpenDocument Text (\*.odt)
-   OpenOffice.org 1.0 Text (\*.sxw)
-   Rich Text Format (\*.rtf)
-   WordPerfect (\*.wpd)
-   Plain Text (\*.txt)
-   OpenDocument Text (\*.odt)
-   MediaWiki wikitext (\*.wiki)
-   Microsoft Excel (\*.xls)
-   OpenDocument Spreadsheet (\*.ods)
-   OpenOffice.org 1.0 Spreadsheet (\*.sxc)
-   Microsoft Excel (\*.xls)
-   Comma-Separated Values (\*.csv)
-   Tab-Separated Values (\*.tsv)
-   OpenDocument Spreadsheet (\*.ods)
-   OpenOffice.org 1.0 Spreadsheet (\*.sxc)
-   Tab-Separated Values (\*.tsv)
-   OpenDocument Presentation (\*.odp)
-   OpenOffice.org 1.0 Presentation (\*.sxi)
-   Microsoft PowerPoint (\*.ppt)
-   OpenDocument Drawing (\*.odg)
-   Scalable Vector Graphics (\*.svg)
-   Macromedia Flash (\*.swf)
-   Bitmap (\*.bmp)
-   JPEG (\*.jpg)
-   PNG (\*.png)




