---
title: Object Storage Swift - Mettre en place CORS sur Object Storage
slug: pcs/cors
excerpt: Retrouvez ici les concepts permettant de mettre en oeuvre CORS.
section: Spécificités de la classe de stockage OpenStack Swift
order: 050
---

**Dernière mise à jour le 03/01/2022**

## Objectif

CORS est un mécanisme qui permet au code s'exécutant dans un navigateur (Javascript, par exemple) de faire des requêtes vers un domaine autre que celui d'où il provient.

Swift supporte les requêtes CORS vers les conteneurs et les objets.

Les métadonnées CORS ne sont présentes que dans le conteneur. Les valeurs indiquées s'appliquent au conteneur lui-même et à tous les objets qu'il contient.

> [!primary]
>
> CORS n'est pas compatible avec l'API S3.
>

**Ce guide a pour objectif de vous familiariser avec le concept de CORS.**

## Prérequis

- [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/ca/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/) en installant python-swiftclient.
- [Charger les variables d’environnement OpenStack](https://docs.ovh.com/ca/fr/public-cloud/charger-les-variables-denvironnement-openstack/).

## En pratique

Il existe 3 métadonnées permettant de gérer le CORS sur un conteneur :

| Métadonnées | Description |
|:------------|:------------|
| X-Container-Meta-Access-Control-Allow-Origin | Origins autorisés à faire des requêtes Cross Origin, séparés par un espace. |
| X-Container-Meta-Access-Control-Max-Age | Durée maximale pendant laquelle l'origins peut conserver les résultats du contrôle préalable. |
| X-Container-Meta-Access-Control-Expose-Headers | En-têtes exposés à l'agent utilisateur (par exemple, le navigateur) dans la réponse à la demande réelle. Séparés par un espace. |

### Contexte

```bash
swift stat <conteneur>
```

```bash
                           Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
                         Container: <conteneur>
                           Objects: 37
                             Bytes: 973749
                          Read ACL: .r:*
                         Write ACL:
                           Sync To:
                          Sync Key:
                  X-Storage-Policy: PCS
                     Accept-Ranges: bytes
                     Last-Modified: Mon, 02 Aug 2021 12:31:18 GMT
                       X-Timestamp: 1627890032.63094
                      Content-Type: text/plain; charset=utf-8
                              Vary: Accept
                        X-Trans-Id: tx3aa56a4d95b44bfb901b8-006107e597
            X-Openstack-Request-Id: tx3aa56a4d95b44bfb901b8-006107e597
                 X-Iplb-Request-Id: 6DBEFE1E:90B8_3626E64B:01BB_6107E597_4276574:220B
                   X-Iplb-Instance: 33617
```

### Définition des métadonnées CORS

CORS spécifie un caractère générique *, qui autorise l'accès à tous les agents utilisateurs, indépendamment du domaine, du protocole ou de l'hôte. Bien qu'il existe des cas d'utilisation valables pour cette approche, elle permet également à un acteur malveillant de créer un fac-similé convaincant d'une interface utilisateur et d'inciter les utilisateurs à révéler leurs informations d'authentification. Veuillez évaluer soigneusement votre cas d'utilisation et la documentation pertinente pour éviter tout risque pour votre organisation.


> [!primary]
>
> La spécification CORS ne prend pas en charge l'utilisation de ce caractère générique dans le cadre d'un URI. La définition de allowed_origin à * fonctionnerait, mais pas *.example.com.
>


> [!warning]  
>
> Si le serveur tourne sur un port non standard, il faut le préciser: `http://example.com:8080`
>

```bash
swift post -H 'X-Container-Meta-Access-Control-Allow-Origin: http://example.com' <conteneur>
swift post -H 'X-Container-Meta-Access-Control-Max-Age:3600' <conteneur>
swift post -H 'X-Container-Meta-Access-Control-Expose-Headers:X-Container-Meta-Access-Control-Allow-Origin' <conteneur>
# stat
swift stat <conteneur>
```

```bash
                             Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
                           Container: <conteneur>
                             Objects: 37
                               Bytes: 973749
                            Read ACL: .r:*
                           Write ACL:
                             Sync To:
                            Sync Key:
         Meta Access-Control-Max-Age: 3600
  Meta Access-Control-Expose-Headers: Meta Access-Control-Allow-Origin
    Meta Access-Control-Allow-Origin: http://example.com
                       Accept-Ranges: bytes
                    X-Storage-Policy: PCS
                       Last-Modified: Mon, 02 Aug 2021 09:07:41 GMT
                         X-Timestamp: 1627890032.63094
                        Content-Type: text/plain; charset=utf-8
                                Vary: Accept
                          X-Trans-Id: tx42f4221669584167a6ac8-006107e56e
              X-Openstack-Request-Id: tx42f4221669584167a6ac8-006107e56e
                   X-Iplb-Request-Id: 6DBEFE1E:9094_3626E64B:01BB_6107E56E_4CFC50A:15BC1
                     X-Iplb-Instance: 38427
```

#### Page de démonstration

Hébergez la page html suivante sur le serveur web correspondant au CORS origin.

`cors.html` :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test CORS</title>
  </head>
  <body>

    Token<br><input id="token" type="text" size="64"><br><br>

    Method<br>
    <select id="method">
        <option value="GET">GET</option>
        <option value="HEAD">HEAD</option>
        <option value="POST">POST</option>
        <option value="DELETE">DELETE</option>
        <option value="PUT">PUT</option>
    </select><br><br>

    URL (Container or Object)<br><input id="url" size="64" type="text"><br><br>

    <input id="submit" type="button" value="Submit" onclick="submit(); return false;">

    <pre id="response_headers"></pre>
    <p>
    <hr>
    <pre id="response_body"></pre>

    <script type="text/javascript">
      function submit() {
          var token = document.getElementById('token').value;
          var method = document.getElementById('method').value;
          var url = document.getElementById('url').value;

          document.getElementById('response_headers').textContent = null;
          document.getElementById('response_body').textContent = null;

          var request = new XMLHttpRequest();

          request.onreadystatechange = function (oEvent) {
              if (request.readyState == 4) {
                  responseHeaders = 'Status: ' + request.status;
                  responseHeaders = responseHeaders + '\nStatus Text: ' + request.statusText;
                  responseHeaders = responseHeaders + '\n\n' + request.getAllResponseHeaders();
                  document.getElementById('response_headers').textContent = responseHeaders;
                  document.getElementById('response_body').textContent = request.responseText;
              }
          }

          request.open(method, url);
          if (token != '') {
              // custom headers always trigger a pre-flight request
              request.setRequestHeader('X-Auth-Token', token);
          }
          request.send(null);
      }
    </script>

  </body>
</html>

```

**Request Headers**

```
GET /v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/pcs-web/lorem.txt HTTP/1.1
Host: storage.gra.cloud.ovh.net
Connection: keep-alive
sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"
X-Auth-Token: gAAAAABhB60RtB6kbTjksGne23pvSiW1X24BjFzpgInOeoXomd21etqpLw6ocys4SuC9PHZ3PfVMCHIMvb6yjyoEwg1XY2iWfcenCMOhG7POgv-i2NePNJSkjc9cE0eVTDEQ-VhtcOCc-ZvbU459a0HpsWUbGMwn8bUi4-hl3Cv5bwGgLuBxmbw
sec-ch-ua-mobile: ?0
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
Accept: */*
Origin: http://example.com
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://example.com
Accept-Encoding: gzip, deflate, br
Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
If-None-Match: 51f122f524c46cafcf9628305db99144
If-Modified-Since: Tue, 03 Aug 2021 07:10:26 GMT
```

**Response Headers**

```
HTTP/1.1 200 OK
Access-Control-Expose-Headers: expires, content-language, cache-control, meta, X-Container-Read, X-Storage-Policy, last-modified, etag, x-timestamp, pragma, x-trans-id, access-control-allow-origin, content-type, x-openstack-request-id, x-object-meta-mtime
Accept-Ranges: bytes
Last-Modified: Tue, 03 Aug 2021 07:10:26 GMT
X-Timestamp: 1627974625.84403
Access-Control-Allow-Origin: http://example.com
X-Object-Meta-Mtime: 1627974571.298786
X-Trans-Id: txdf16d14f7cbd4d0b83b5c-006108f198
X-Openstack-Request-Id: txdf16d14f7cbd4d0b83b5c-006108f198
Date: Tue, 03 Aug 2021 07:34:49 GMT
X-IPLB-Request-ID: 58AB65BB:76FF_3626E64B:01BB_6108F198_41D39CC:10AC4
X-IPLB-Instance: 12309
Content-Length: 746
Content-Type: text/plain
Etag: 51f122f524c46cafcf9628305db99144
```

Avant qu'un navigateur n'émette une demande réelle, il peut émettre une demande de contrôle préalable. La demande de contrôle préalable est un appel destiné à vérifier que l'origine est autorisée à effectuer la demande. La séquence des événements est la suivante :

- Le navigateur envoie une demande OPTIONS à Swift.
- Swift renvoie `200/401` au navigateur en fonction des `origins` autorisées.
- Si `200`, le navigateur effectue la « demande réelle » à Swift, c'est-à-dire `PUT`, `POST`, `DELETE`, `HEAD`, `GET`.

Lorsqu'un navigateur reçoit une réponse à une demande réelle, il n'expose que les en-têtes énumérés dans l'en-tête `Access-Control-Expose-Headers`. Par défaut, Swift renvoie les valeurs suivantes pour cet en-tête :

- « simple-response-header » telles qu'elles sont listées sur http://www.w3.org/TR/cors/#simple-response-header
- Les en-têtes `etag`, `x-timestamp`, `x-trans-id`, `x-openstack-request-id`.
- Tous les en-têtes de métadonnées (`X-Container-Meta-*` pour les conteneurs et `X-Object-Meta-*` pour les objets).
- Les en-têtes énumérés dans `X-Container-Meta-Access-Control-Expose-Headers`.
- Les en-têtes configurés à l'aide de l'option cors_expose_headers dans `proxy-server.conf`.

### Supprimer les métadonnées CORS

```bash
swift post -H "X-Remove-Container-Meta-Access-Control-Allow-Origin:x" <conteneur>
swift post -H "X-Remove-Container-Meta-Access-Control-Max-Age:x" <conteneur>
swift post -H "X-Remove-Container-Meta-Access-Control-Expose-Headers:x" <conteneur>
# stat
swift stat <conteneur>
```

```
                           Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
                         Container: <conteneur>
                           Objects: 37
                             Bytes: 973749
                          Read ACL: .r:*
                         Write ACL:
                           Sync To:
                          Sync Key:
                  X-Storage-Policy: PCS
                     Accept-Ranges: bytes
                     Last-Modified: Mon, 02 Aug 2021 12:31:18 GMT
                       X-Timestamp: 1627890032.63094
                      Content-Type: text/plain; charset=utf-8
                              Vary: Accept
                        X-Trans-Id: tx3aa56a4d95b44bfb901b8-006107e597
            X-Openstack-Request-Id: tx3aa56a4d95b44bfb901b8-006107e597
                 X-Iplb-Request-Id: 6DBEFE1E:90B8_3626E64B:01BB_6107E597_4276574:220B
                   X-Iplb-Instance: 33617
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
