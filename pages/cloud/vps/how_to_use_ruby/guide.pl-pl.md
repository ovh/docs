---
title: How to Ruby
excerpt: Informacje ogólne dotyczące dystrybucji ruby
slug: how_to_ruby
legacy_guide_number: g1370
hidden: true
---


## 
Podczas tworzenia dystrybucji Ruby staraliśmy się pozostać jak najbliżej konfiguracji domyślnej. Chcemy, abyś mógł dowolnie personalizować serwer VPS. 
Zainstalowaliśmy zależności, których będziesz potrzebował do instalowania/kompilowania rubygems i używania RubyOnRails.

Poniżej komponenty serwera VPS:

- Debian Wheezy
- rbenv (pozwala na korzystanie z wybranej wersji ruby)
- Passenger (Apache lub Nginx)
- Baza danych (MySQL, PostgreSQL lub MongoDB)




## 
root: konto używane do ogólnej administracji serwerem (aktualizacje, tworzenie baz danych, itp.).
webmaster: konto używane do zarządzania aplikacją (instalacja ruby, wdrażanie aplikacji, itp.).


## 
Wersja ruby, którą wybrałeś jest instalowana poprzez rbenv dla użytkownika 'webmaster' i Passenger. Reszta systemu używa wersji ruby dostępnej z systemem Debian Wheezy (1.9.3p194 w momencie redagowania tego artykułu).

Aby zmienić wersję ruby, zaloguj się jako użytkownik webmaster i wpisz:

```
rbenv update (aktualizacja rbenv i wtyczek)
rbenv install --list (aby zobaczyć wszystkie dostępne wersje ruby)
rbenv install <version>
rbenv global <version>
```




## 
Passenger został zainstalowany z oficjalnych repozytoriów Phusion. Masz więc najnowszą stabilną wersję Phusion Passenger. Passenger używa tej samej wersji ruby co użytkownik 'webmaster'.

Serwer VPS jest dostarczany z domyślnym virtualHost (vpsXXXXX.ovh.net).
Możesz go używać bezpośrednio wdrażając aplikację w /var/www/vpsXXXXX.ovh.net
Możesz również go spersonalizować lub skopiować, aby móc wdrożyć kilka aplikacji. 

Aby poznać stan i wykorzystanie pamięci dla Passenger:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
Konfiguracja aplikacji znajduje się w /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Restart serwera: 
```
service apache2 restart (root)
```

Restart samej aplikacji: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Szczegółowa dokumentacja: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
Konfiguracja aplikacji znajduje się w /etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Restart serwera: 
```
service nginx restart (root)
```

Restart aplikacji: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Szczegółowa dokumentacja: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
Baza danych została zainstalowana z domyślnymi parametrami. Jest skonfigurowana tak, aby można się z nią było łączyć tylko z serwera VPS.

