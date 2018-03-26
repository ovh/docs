---
title: Que faire en cas d’erreur 500 Internal Server Error ?
legacy_guide_number: 1987
slug: erreur-500-internal-server-error
excerpt: Les erreurs 500 sont dues a la mauvaise configuration de votre site. Les origines peuvent etre multiples.
section: Diagnostic
---

## Les sources d'erreurs

### .htaccess

Si la syntaxe de .htaccess n'est pas correcte, le serveur web affichera erreur 500. Il faut renommer .htaccess en .htaccess_bak par exemple. Si votre site refonctionne alors c'est bien .htaccess qui est en cause.

Reportez-vous au guide suivant pour de plus amples informations : <https://docs.ovh.com/fr/hosting/mutualise-tout-sur-le-fichier-htaccess/>.


### Permissions/droits

Vous devez respecter quelques regles de securité au niveau des droits que vous donnez à vos scripts :

- la racine de votre site doit être obligatoirement en 705 (les permissions mises par défaut par OVH). Il s'agit du repertoire / ou . (point) de votre serveur FTP, ne le modifiez pas ;
- les autres repertoires doivent être au maximum 755 ;
- les scripts php/cgi doivent être au maximum 755.

Comment modifier les droits d'un fichier ou répertoire : [Cliquer ici](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/#droits-des-fichiers-dossiers){.external}


### Erreur de script

Si vous programmez en perl par exemple, une erreur dans votre script se résume en une erreur 500. Vous ne pouvez pas avoir plus de details (question de securité). Pour debugger vos scripts, vous pouvez utiliser la connexion telnet/ssh (possible à partir de l'offre Pro).

Reportez-vous au guide suivant pour de plus amples informations : <https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/>.