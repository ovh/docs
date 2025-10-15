---
title: "Démarrer avec Valkey sur Web Cloud Databases (OVHcloud)"
excerpt: "Créez une instance Valkey, autorisez vos IP, récupérez l’URL de connexion et testez depuis un CLI ou votre application (Node.js, Python, PHP, Java, Go)."
updated: 2025-10-15
---

## Objectif

**Valkey** est un magasin de données **en mémoire**, open source, compatible avec l’écosystème clients et protocoles de Redis (RESP). Il convient aux **caches**, **sessions**, **files d’attente légères** et **compteurs** à haute performance.  
Ce guide vous montre pas à pas comment utiliser **Valkey** avec **Web Cloud Databases (WCDB)** chez OVHcloud : création de l’instance, autorisation d’adresses IP, récupération des paramètres de connexion, test via un client en ligne de commande, puis intégration depuis des langages courants.

> [!warning]
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Assurez-vous de sécuriser l’accès (IPs autorisées, mots de passe robustes) et de tester en pré-production avant mise en ligne.

## Prérequis

- Un compte OVHcloud et l’accès à votre **espace client** : https://www.ovh.com/manager/
- Une offre **Web Cloud Databases** active (capable d’héberger Valkey).
- Pouvoir vous connecter **depuis une IP publique** (poste, VPS/serveur, hébergement web) que vous pourrez **autoriser**.
- Un client Valkey/Redis (CLI ou bibliothèque) côté poste/app.

---

## Étape 1 — Créer l’instance Valkey

1. Dans l’**espace client OVHcloud**, ouvrez **Web Cloud** > **Databases**.  
2. Cliquez sur **Créer une base de données** puis choisissez **Valkey**.  
3. Sélectionnez la **région**, la **version** et la **configuration** (RAM/plan), puis validez la commande.  
4. Une fois **provisionnée**, ouvrez la fiche du service pour consulter **hôte**, **port**, **TLS** (oui/non) et l’état.

> [!primary]
> Notez l’**hôte**, le **port** et si **TLS** est requis : vous en aurez besoin pour tous les exemples de connexion.

---

## Étape 2 — Autoriser l’adresse IP d’accès

Par défaut, l’instance n’accepte pas les connexions publiques. Vous devez **autoriser** (allowlist) les IP sources.

1. Dans la page de votre instance **Valkey**, ouvrez **Sécurité / IP autorisées**.  
2. Ajoutez l’**adresse IP** de votre poste (ou de votre serveur/app).  
3. **Enregistrez** puis patientez quelques instants que la règle soit appliquée.

> [!tip]
> Si votre IP **change** (fournisseur, 4G, domicile), pensez à la mettre à jour. Sur un serveur applicatif (VPS, Public Cloud, etc.), autorisez **l’IP du serveur**, pas celle de votre poste local.

---

## Étape 3 — Récupérer les identifiants

Dans la fiche du service :

- **Hôte** : `HOSTNAME` (ex. `xxx.wcdb.ovh.net`)  
- **Port** : `PORT` (ex. `6379` non-TLS ou `6380`/port TLS selon configuration)  
- **Mot de passe** : `PASSWORD` (généré / réinitialisable)  
- **TLS** : requis ou non (indiqué)

> [!warning]
> Le **nom d’utilisateur** n’est généralement **pas** utilisé avec Valkey (auth simple par mot de passe). Si une bibliothèque réclame un « user », laissez-le vide ou utilisez une valeur neutre selon le client, et **renseignez le mot de passe**.

---

## Étape 4 — Tester la connexion en ligne de commande

Vous pouvez utiliser **valkey-cli** (si disponible) ou un **redis-cli** compatible.

### Installer un client CLI (au choix)

**Debian/Ubuntu :**

```bash
sudo apt update && sudo apt -y install redis-tools
```

**AlmaLinux/Rocky :**

```bash
sudo dnf -y install redis
```

> Ces paquets fournissent généralement `redis-cli`. Il est compatible avec Valkey pour les opérations de base.

### Connexion (sans TLS)

```bash
redis-cli -h HOSTNAME -p PORT -a PASSWORD
```

### Connexion (avec TLS)

```bash
redis-cli --tls -h HOSTNAME -p PORT -a PASSWORD
# ou
redis-cli -u "rediss://:PASSWORD@HOSTNAME:PORT"
```

### Vérifier rapidement

```bash
PING
SET demo:key "hello"
GET demo:key
DEL demo:key
```

Si vous obtenez `PONG` puis `"hello"`, la connexion et l’écriture fonctionnent.

---

## Étape 5 — Se connecter depuis une application

Remplacez **HOSTNAME**, **PORT** et **PASSWORD** dans les exemples.

> [!primary]
> Si votre instance est **TLS**, utilisez **rediss://** ou activez l’option/booléen TLS du client.

### Node.js (ioredis)

Installer :

```bash
npm install ioredis
```

Code :

```javascript
const Redis = require("ioredis");
// TLS : utilisez rediss://
const url = "redis://:PASSWORD@HOSTNAME:PORT";
// const url = "rediss://:PASSWORD@HOSTNAME:PORT"; // si TLS
const client = new Redis(url);
(async () => {
  await client.set("demo:key", "hello");
  const v = await client.get("demo:key");
  console.log(v);
  await client.quit();
})();
```

### Python (redis-py)

Installer :

```bash
pip install redis
```

Code :

```python
import redis
r = redis.Redis(
    host="HOSTNAME",
    port=PORT,
    password="PASSWORD",
    ssl=False,  # True si TLS
    socket_timeout=5,
)
r.set("demo:key", "hello")
print(r.get("demo:key"))
```

### PHP (Predis)

Installer :

```bash
composer require predis/predis
```

Code :

```php
<?php
require 'vendor/autoload.php';
$client = new Predis\Client([
    'scheme'   => 'redis', // 'rediss' si TLS
    'host'     => 'HOSTNAME',
    'port'     => PORT,
    'password' => 'PASSWORD',
    // 'parameters' => ['ssl' => ['verify_peer' => false]], // tests TLS uniquement
]);
$client->set('demo:key', 'hello');
echo $client->get('demo:key');
```

### Java (Lettuce)

Dépendance Maven (ex.) :

```xml
<dependency>
  <groupId>io.lettuce</groupId>
  <artifactId>lettuce-core</artifactId>
  <version>6.5.4.RELEASE</version>
</dependency>
```

Code :

```java
import io.lettuce.core.RedisClient;
import io.lettuce.core.RedisURI;
import io.lettuce.core.api.sync.RedisCommands;

public class App {
  public static void main(String[] args) {
    RedisURI uri = RedisURI.Builder
      .redis("HOSTNAME", PORT)        // .withSsl(true) si TLS
      .withPassword("PASSWORD".toCharArray())
      .build();
    var client = RedisClient.create(uri);
    try (var conn = client.connect()) {
      RedisCommands<String, String> cmd = conn.sync();
      cmd.set("demo:key", "hello");
      System.out.println(cmd.get("demo:key"));
    } finally {
      client.shutdown();
    }
  }
}
```

### Go (go-redis)

Installer :

```bash
go get github.com/redis/go-redis/v9
```

Code :

```go
package main

import (
  "context"
  "crypto/tls"
  "fmt"
  "github.com/redis/go-redis/v9"
)

func main() {
  ctx := context.Background()
  rdb := redis.NewClient(&redis.Options{
    Addr:     "HOSTNAME:PORT",
    Password: "PASSWORD",
    // TLSConfig: &tls.Config{}, // décommentez si TLS
  })
  if err := rdb.Set(ctx, "demo:key", "hello", 0).Err(); err != nil {
    panic(err)
  }
  v, err := rdb.Get(ctx, "demo:key").Result()
  if err != nil {
    panic(err)
  }
  fmt.Println(v)
}
```

---

## Étape 6 — Bonnes pratiques clés

- **Autoriser uniquement les IP nécessaires**, supprimez les anciennes.  
- **Mot de passe robuste**, changez-le en cas de doute (depuis le manager).  
- **Activez TLS** si disponible et configurez-le côté client.  
- **Clés avec TTL** pour maîtriser la mémoire : `SET key value EX 3600`.  
- **Namespaces de clés** (`app1:session:...`) pour le suivi et les purges ciblées.  
- **Évitez `FLUSHALL`** en production (risque d’effacement global).  
- **Surveillance** : connexions, mémoire, latence, erreurs d’auth.

---

## Dépannage (FAQ)

**NOAUTH / WRONGPASS**  
Vérifiez le **mot de passe** dans le manager et le format d’URL utilisé par votre client.

**Connexion refusée / timeout**  
Contrôlez **IP autorisée**, **hôte/port**, et la cohérence **TLS** (client/service).

**READONLY You can't write against a read only replica**  
Votre endpoint est en **lecture seule** : repointez vers l’**endpoint d’écriture** (si applicable) ou n’exécutez que des commandes de lecture.

**Erreurs de certificat TLS**  
Pour tester, certaines libs permettent de désactiver la vérification (ex. `verify_peer=false`) ; **ne laissez pas cela en production**. Préférez une chaîne de certificats correcte côté système.

---

## Aller plus loin

- **Premiers pas Web Cloud Databases** : autoriser une IP, réinitialiser un mot de passe, lire les paramètres du service.  
- **Optimisation Valkey** : TTL, types de données (hashes, sets, sorted sets), pipelines, pooling.  
- **Sécurité** : rotation de secrets, journalisation et alertes.

Pour des prestations spécialisées, contactez les **partenaires OVHcloud** (/links/partner) et échangez avec notre **communauté** (/links/community).
