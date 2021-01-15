---
deprecated: true
title: Jak použít Ruby
excerpt: Obecné informace o distribuci Ruby
slug: jak_pouzit_ruby
legacy_guide_number: g1370
hidden: true
---


## 
Během vytváření distribuce Ruby jsme kladli důraz na to, abychom zůstali co nejblíže implicitnímu nastavení. To nám umožní snadno upravovat VPS.
Nainstalovali jsme posloupnosti, které potřebujete pro instalování/kompilování Vašich rubygems a k používání RubyOnRails.

Zde jsou komponenty Vašeho VPS:

- Debian Wheezy
- Rbenv (umožňuje použít verzi ruby podle Vaší volby)
- Passenger (Apache nebo Nginx)
- Database (MySQL, PostgreSQL nebo MongoDB)




## 
root: použit pro obecnou administraci serveru (aktualizace, vytváření databází, atd.).
webmaster: použit pro správu aplikací (instalování ruby, vývoj aplikací, atd.)


## 
Verze ruby, kterou jste požadovali je instalována přes rbenv pro uživatele "webmaster" a Passenger. Zbytek systému používá verzi ruby z balíčku Debian Wheezy (1.9.3p194 verze v době psaní tohoto článku).

Pro změnu verze ruby se přihlaste jako webmaster a zadejte:

```
rbenv update (mise à jour de rbenv et ses plugins)
rbenv install --list (pour connaître toutes les versions de ruby disponibles)
rbenv install
rbenv global
```




## 
Passenger byl nainstalován z oficiálního depozitáře Phusion. Takže máte k dispozici poslední verzi Phusion Passenger. Passenger používá stejnou verzi ruby, jako webmaster.

Vaše VPS přichází s VirtualHost s implicitním názvem (vpsXXXXX.ovh.net).
Ten můžete použít přímo při nasazování Vašich aplikací v /var/www/vpsXXXXX.ovh.net
Ale můžete také upravit či kopírovat pro nasazení více aplikací.

Pro zjištění stavu a spotřebované paměti Passenger:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
Nastavení aplikace je v /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Restart serveru: 
```
service apache2 restart (root)
```

Restart aplikace: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Pro podrobnou dokumentaci Passenger::
[Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
Nastavení aplikace je v /etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Restart serveru: 
```
service nginx restart (root)
```

Restart aplikace: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Pro podrobnou dokumentaci Passenger: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
Vaše databáze byla nainstalována s implicitním nastavení a je možné na ni přistupovat pouze z Vašeho VPS.

