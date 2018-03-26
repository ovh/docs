---
title: Securiser votre domaine avec DNSSEC
slug: securiser-votre-domaine-avec-dnssec
legacy_guide_number: 609
excerpt: Protegez-vous contre le Cache Poisoning
section: Protection et sécurité
order: 1
---


## Avant de commencer...

### Prérequis
- Votre domaine doit être enregistré chez OVH, c'est une contrainte technique due à la nécessité de tenir à jour les enregistrements DS côté registry.
- Il doit contenir une des extensions suivantes : .fr, .com, .be, .net, .eu, .pl, .re, .pm, .yt, .wf, .tf, .info, .li, .ch, .biz, .de, .sx, .org, .se, .nl, .in, .us, .at, .nu, .la, .ac, .cz, .me, .sh, .io, .uk, .co.uk, .me.uk, .org.uk, ou n'importe quelle nouvelle extension récemment sortie comme .paris, .club, .xyz, .wiki, .ink, et toutes les extensions de Donuts. (d'autres extensions à venir)


### Les deux cas d'utilisation
- Soit vous hébergez votre domaine sur des serveurs DNS tiers (votre serveur dédié, ou tout autre machine), dans ce cas référez-vous aux documentations présentes sur internet, ou auprès de votre prestataire qui vous expliquera comment générer vos clés, signer votre zone, et soumettre à OVH la clé publique permettant de mettre à jour l'enregistrement DS côté registry.
- Soit vous utilisez les DNS mutualisés d'OVH, qui est le cas d'utilisation couvert par ce guide. Nous gérons alors les clés, leur rotation périodique, la mise à jour de l'enregistrement DS ainsi que la signature de la zone de façon transparente pour vous.



> [!success]
>
> En cas de doute, vous pouvez le vérifier en vous rendant dans votre espace
> client, une fois le domaine sélectionné,
> section "Gestion DNS". Si les serveurs DNS listés sont de la forme
> nsXX.ovh.net, dnsXX.ovh.net, ou Xns200.anycast.me, alors vous êtes bien sur les
> serveurs DNS d'OVH.
> 


## Activer/Desactiver DNSSEC

### Activation
- Vous devez dans un premier temps vous connecter à votre [espace
client](https://www.ovh.com/manager/web){.external} .
- Sélectionnez ensuite le nom de domaine concerné dans la section "Domaines" de votre espace client.


![domains](images/2896.png){.thumbnail}

- Vous pouvez vérifier que vous utilisez bien des serveurs dns OVH dans la section "Gestion DNS" .


![domains](images/3966.png){.thumbnail}

- Une fois la vérification des DNS effectuée, cliquez sur le bouton d'activation du DNSSEC.


![domains](images/3967.png){.thumbnail}

- Une fenêtre pop-up apparaît alors afin de valider l'opération. Il est indiqué que cette opération peut prendre jusqu'à 24h.


![domains](images/2895.png){.thumbnail}

- Le bouton d'activation s'anime une fois la validation effectuée.


![domains](images/3968.png){.thumbnail}

- Vous pouvez ensuite vérifier dans l'onglet "opération en cours" que l'opération est bien démarrée.


![domains](images/3969.png){.thumbnail}


### Desactivation
Afin de désactiver l'option DNSSEC, vous devez de nouveau sélectionner votre domaine puis cliquer sur le "bouton de désactivation". Une nouvelle fenêtre pop-up apparaît alors afin de valider l'opération. Notez que si une activation est en cours, vous devrez attendre qu'elle se termine (le bouton sera grisé), et ce afin de ne pas laisser la configuration DNSSEC de votre domaine dans un état intermédiaire.


![domains](images/3970.png){.thumbnail}


## Verifier que DNSSEC est correctement deploye pour votre domaine

### Methode 1 &#58; en utilisant Firefox ou Chrome
Vous pouvez installer une extension Firefox qui permet de vérifier si les sites que vous visitez sont sécurisés par DNSSEC, et si oui, quel est le résultat de la validation. Cette extension est [disponible ici](http://www.dnssec-validator.cz/){.external}. Une fois installée, vous verrez une clé à gauche de la barre d'adresse du navigateur. Pour les domaines sur lesquels la clé est verte, l'IP du site a été vérifiée par DNSSEC.


![domains](images/119.png){.thumbnail}

Si la clé est orange, c'est que le serveur DNS récursif de votre FAI n'est pas compatible DNSSEC. Ce n'est pas grave : vous pouvez utiliser des serveurs DNS alternatifs pour effectuer cette validation. Le module Firefox vous en propose une liste, à laquelle vous pouvez accéder en cliquant droit sur la clé, puis en sélectionnant "Préférences".

Une version alpha de cette extension est également disponible pour Chrome sur [cette page](https://chrome.google.com/webstore/detail/hpmbmjbcmglolhjdcbicfdhmgmcoeknm){.external}.


### Methode 2 &#58; en mode console, avec declaration prealable de la cle racine
Pour vérifier que DNSSEC est correctement configuré pour un domaine, vous pouvez utiliser l'outil  **dig** . Pour pouvoir effectuer la validation DNSSEC, il a besoin de connaître la clé publique racine (avec laquelle est signée la clé qui signe la zone root "."). Cette clé est disponible à plusieurs endroits sur Internet. A des fins de simplification, nous la reproduisons ci- dessous, vous pouvez la recopier telle quelle dans le fichier  **/etc/trusted- key.key**  (tout doit être sur la même ligne) :


```bash
.           172717  IN  DNSKEY  257 3 8 AwEAAagAIKlVZrpC6Ia7gEzahOR+9W29euxhJhVVLOyQbSEW0O8gcCjF
FVQUTf6v58fLjwBd0YI0EzrAcQqBGCzh/RStIoO8g0NfnfL2MTJRkxoX
bfDaUeVPQuYEhg37NZWAJQ9VnMVDxP/VHL496M/QZxkjf5/Efucp2gaD
X6RS6CXpoY68LsvPVjR0ZSwzz1apAzvN9dlzEheX7ICJBBtuA6G3LQpz
W5hOA2hzCTMjJPJ8LbqF6dsV6DoBQzgul0sGIcGOYl7OyQdXfZ57relS
Qageu+ipAdTTJ25AsRTAoub8ONGcLmqrAmRLKBP1dfwhYB4N7knNnulq
QxA+Uk1ihz0=
```



> [!alert]
>
> Notez que vous ne devriez pas la recopier sans vérifier son authenticité,
> puisqu'avec DNSSEC, comme dans tout système cryptographique basé sur une
> chaîne de confiance, l'importance des items racine auxquels on fait confiance
> par définition est  capitale . Son point de distribution officiel est chez
> l'IANA, et le fichier est lui-même
> signé par GPG.
> 

La commande à lancer est la suivante, on cherche ici à valider l'IP du site www.eurid.eu :


```bash
$ dig +sigchase www.eurid.eu
;; RRset to chase:
www.eurid.eu.               544     IN      CNAME   eurid.eu.
[...]
;; WE HAVE MATERIAL, WE NOW DO VALIDATION
;; VERIFYING DS RRset for eu. with DNSKEY:55231: success
;; OK We found DNSKEY (or more) to validate the RRset
;; Ok, find a Trusted Key in the DNSKEY RRset: 19036
;; VERIFYING DNSKEY RRset for . with DNSKEY:19036: success

;; Ok this DNSKEY is a Trusted Key, DNSSEC validation is ok: SUCCESS
```

La dernière ligne indique que la validation s'est bien déroulée, car la chaîne de confiance a pu être remontée avec succès et correspond bien, tout au bout, à la clé publique connue de la zone racine.

Si vous obtenez le message suivant, c'est que  **dig**  n'a pas trouvé la clé racine dans  **/etc/trusted-key.key**  :


```bash
$ dig +sigchase www.eurid.eu
No trusted keys present
```


### Methode 3 &#58; en mode console, sans declaration prealable de la cle racine
Si vous ne pouvez pas déclarer la clé publique comme ci-dessus, vous pouvez faire confiance à un serveur DNS tiers pour faire la validation à votre place. Certains serveurs DNS récursifs validant DNSSEC sont ainsi mis à disposition du public par diverses entités. Notons par exemple ceux du [DNS-OARC](https://www.dns-oarc.net/oarc/services/odvr){.external}, que nous reprenons dans l'exemple ci-dessous, où nous cherchons à valider l'IP du site www.eurid.eu :


```bash
$ dig +dnssec www.eurid.eu @149.20.64.21

; <<>> DiG 9.7.3 <<>> +dnssec www.eurid.eu @149.20.64.21
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26117
;; flags: qr rd ra ad; QUERY: 1, ANSWER: 6, AUTHORITY: 7, ADDITIONAL: 16
[...]
```

C'est ici la présence du flag " **ad**" qui indique que la réponse que vous recevez a été validée par le résolveur récursif.