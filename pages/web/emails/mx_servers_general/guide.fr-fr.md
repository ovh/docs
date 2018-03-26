---
title: Généralités sur les serveurs MX mutualisés
slug: generalites-sur-les-serveurs-mx-mutualises
legacy_guide_number: 2003
excerpt: Retrouvez ici differentes informations concernant la configuration de vos serveurs MX mutualisés
section: Généralités
order: 3
---

## Généralités

### Qu'est-ce qu'un serveur MX ?
Le ou les serveurs MX sont les serveurs mail que vous définissez dans la zone DNS de votre nom de domaine. Ce sont ces serveurs qui recevront les mails du nom de domaine.

Par exemple :

- Vous souhaitez recevoir correctement vos mails sur [monadresse@mypersonaldomain.ovh](mailto:monadresse@mypersonaldomain.ovh){.external} qui est un compte mail chez OVH.

Alors il faut les champs MX de votre zone DNS, utilisée par votre domaine, soient ceux de OVH.

Cela permet de faire la liaison entre un nom de domaine, et ses serveurs mails.

Plusieurs combinaisons et configurations sont possibles, nous verrons dans ce guide les modèles de bases, ainsi que quelque exemples d'utilisation avancée.

On pourrait schématiser le nom de domaine, les serveurs DNS, et la zone DNS ainsi :


![emails](images/img_3414.jpg){.thumbnail}


### Pre-requis
- Avoir l'accès à votre [espace client](https://www.ovh.com/manager/web/login/){.external} .

- Vouloir utiliser les services mails d'OVH


### Ou se configurent les serveurs MX d'un nom de domaine ?
Il faut dans un premier temps que vous sachiez où est enregistré votre nom de domaine, et quels serveurs DNS il utilise.

- Le choix des serveurs DNS de votre domaine se fait uniquement chez le registrar où est enregistré votre domaine.
- C'est sur ces serveurs DNS utilisés par votre domaine qu'est présente la zone DNS de votre domaine.
- C'est dans cette zone DNS que vous pouvez modifier les champs MX , qui déterminent les serveurs mails du nom de domaine.

Voici un exemple de zone DNS chez OVH. Notez au milieu, les différents types de champs ( NS /  **MX**  /A / CNAME / TXT ). Et à droite, leur cible.


|Domaine|Type|Cible|
|---|---|---|
||NS|ns109.ovh.net.|
||NS|dns109.ovh.net.|
||MX 1|mx1.mail.ovh.net.|
||MX 5|mx2.mail.ovh.net.|
||MX 10|mx3.mail.ovh.net.|
||A|213.186.33.18|
||TXT|"v=spf1 include:mx.ovh.com ~all"|
|_autodiscover._tcp|SRV|0 0 443 mailconfig.ovh.net.|
|_imaps._tcp|SRV|0 0 993 ssl0.ovh.net.|
|_submission._tcp|SRV|0 0 465 ssl0.ovh.net.|
|autoconfig|CNAME|mailconfig.ovh.net.|
|ftp|CNAME|ftp.cluster017.hosting.ovh.net.|
|imap|CNAME|ssl0.ovh.net.|
|mail|CNAME|ssl0.ovh.net.|
|pop3|CNAME|ssl0.ovh.net.|
|smtp|CNAME|ssl0.ovh.net.|

Dans cette zone DNS, les serveurs mails (MX) du nom de domaine sont donc :

```bash
MX 1   mx1.mail.ovh.net.
MX 5   mx2.mail.ovh.net.
MX 10  mx3.mail.ovh.net.
```

Le nombre juste à droite de "MX" indique sa priorité.

Ce sont donc ces champs que vous devez modifier si vous souhaiter changer de serveur mail.

> [!alert]
>
> Attention : Toute modification dans votre zone DNS peut prendre jusqu'à 24 heures avant d'être fonctionnelle.
> 

## Cas pratiques

Vous utilisez une zone DNS OVH ? Nous vous invitons à suivre le guide : [Configuration MX sur votre zone DNS OVH](https://docs.ovh.com/fr/emails/mail-mutualise-guide-de-configuration-mx-avec-zone-dns-ovh/){.ref}.

Vous n'utilisez pas de zone DNS OVH ? Nous vous invitons à suivre le guide : [Configuration MX avec zone DNS non OVH](https://docs.ovh.com/fr/emails/mail-mutualise-guide-de-configuration-mx-avec-zone-dns-non-ovh/){.ref}.