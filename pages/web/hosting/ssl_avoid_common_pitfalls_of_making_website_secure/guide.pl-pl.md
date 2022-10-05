---
title: 'Wdrożenie certyfikatu SSL na istniejącej stronie WWW'
slug: unikanie_pulapek_ssl_na_stronie_www
excerpt: 'Dowiedz się, na co zwrócić uwagę przy wdrożeniu certyfikatu SSL na stronie internetowej'
section: SSL
order: 04
---

**Ostatnia aktualizacja dnia 20-09-2018**

## Wprowadzenie

W ramach hostingu w OVH możesz skorzystać z certyfikatów SSL dla wszystkich stron WWW. Certyfikat SSL zapewnia poufność i integralność danych przesyłanych przez Internet, np. za pośrednictwem formularza na stronie WWW czy poczty elektronicznej, oraz zawiera informacje o domenie. O obecności certyfikatu SSL świadczy ikona kłódki oraz protokół HTTPS w pasku adresu strony internetowej. Przesył danych pomiędzy komputerem użytkownika a serwerem jest wtedy szyfrowany.

Uruchomienie certyfikatu dla istniejącej strony WWW może stwarzać problemy. Przed wdrożeniem certyfikatu SSL upewnij się, że nie zakłóci to działania strony WWW.

**Dowiedz się, na co zwrócić uwagę przy wdrożeniu certyfikatu SSL na stronie internetowej.**

> [!warning]
>
> OVH udostępnia różnorodne usługi, jednak ich konfiguracja, zarządzanie oraz utrzymanie należy do Ciebie.  Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 


## W praktyce

### Treści mieszane
Na Twojej stronie nie wyświetlają się wczesniej zainstalowane elementy zewnętrzne, takie jak wtyczki Facebooka czy Twittera? Przyczyną problemu są prawdopodobnie treści mieszane, z ang. *mixed content*.

Od kilku lat przeglądarki WWW, takie jak Google Chrome, Mozilla Firefox i Internet Explorer nie pozwalają na wyświetlanie na stronach z HTTPS elementów strony, które są dostępne za pośrednictwem protokołu HTTP. Chodzi o to, żeby poufność danych zapewniona przez HTTPS nie została naruszona przez element pobrany z HTTP. 

W większości przypadków są to zewnętrzne skrypty pochodzące z innych stron WWW, takich jak na przykład sieci społecznościowe. Wystarczy zastąpić HTTP przez HTTPS, aby odwołać się do tych skryptów w sposób szyfrowany i zabezpieczony. 

Niektóre strony korzystają z usług CDN do obsługiwania bibliotek Javascript (na przykład JQuery). Jeśli usługi CDN dostarczają bibliotekę za pomocą adresu z HTTP, może to mieć wpływ na prawidłowe działanie strony. 

**Jak sprawdzić, czy problem dotyczy Twojej strony?**

Narzędzia debugujące dostarczane przez przeglądarki Mozilla Firefox i Google Chrome informują, jeśli strona zawiera elementy zablokowane z powodu treści mieszanych. Dokumentacja dostępna w ramach [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content) pozwala na uzyskanie dodatkowych informacji na ten temat.


### Powielone treści
Powielone treści (z ang. *duplicate content*) to posiadanie tych samych treści pod różnymi adresami WWW. Wyszukiwarki nie lubią tego zjawiska, które jest traktowane jako próba wpłynięcia na pozycjonowanie strony internetowej. Tego typu działania mogą zostać ukarana spadkiem pozycji w wynikach wyszukiwania.

Aby uniknąć tego problemu, zaleca się stronom działającym poprawnie z HTTPS dodanie przekierowania treści z HTTP na HTTPS. Osoby odwiedzające będą automatycznie przekierowywane na adres z HTTPS. Dla tej samej treści dostępny będzie tylko jeden adres URL. 

Poniżej znajduje się przykład przekierowania w pliku .htaccess umieszczonym w katalogu głównym strony WWW. 


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.twoja_domena.pl/$1 [R,L]
```



### Przełączenie z HTTPS na HTTP
Jeśli chcesz korzystać tylko z protokołu HTTP i nie chcesz już używać protokołu HTTPS, wystarczy odpowiednio skonfigurować plik .htaccess.

Twoi użytkownicy będą więc przekierowywani na adres z HTTP i tylko ten jeden adres będzie dostępny dla treści, nawet jeśli wejdą oni na stronę z HTTPS. 

Poniżej przedstawiamy przykład takiego przekierowania w pliku .htaccess znajdującym się w katalogu głównym:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.twoja_domena.pl/$1 [R,L]
```

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
