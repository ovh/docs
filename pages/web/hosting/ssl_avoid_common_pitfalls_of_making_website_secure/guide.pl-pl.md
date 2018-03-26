---
title: Unikanie pułapek SSL na stronie www
excerpt: Unikanie pułapek SSL na stronie www
id: '2220'
slug: unikanie_pulapek_ssl_na_stronie_www
section: FTP i SSH - zdalny dostęp
---


## Mixed content
Na Twojej stronie nie wyświetlają się elementy zewnętrzne, takie jak przyciski Facebooka czy Twittera? Prawdopodobnie jest to problem związany z mixed content.

Od kilku lat przeglądarki www takie jak Google Chrome, Mozilla Firefox i Internet Explorer nie pozwalają na wyświetlanie na stronach z HTTPS elementów strony, które są dostępne na stronie z HTTP. Chodzi o to, żeby poufność danych zapewniona przez HTTPS nie została naruszona przez element pobrany z HTTP. 

W większości przypadków są to zewnętrzne skrypty pochądzące z innych stron www, takich jak na przykład sieci społecznościowe. Wystarczy zastąpić http przez https, aby odwołać się do tych skryptów. 

Niektóre strony korzystają z usług CDN do obsługiwania bibliotek Javascript (na przykład JQuery). Jeśli usługi CDN dostarczają bibliotekę z adresem z http, może to mieć wpływ na działanie strony. 

Jak sprawdzić, czy problem dotyczy Twojej strony?

Narzędzia debugujące dostarczane przez przeglądarki Mozilla Firefox i Google Chrome informują, jeśli strona zawiera elementy zablokowane z powodu mixed content. Dokumentacja dostępna w ramach [Mozilla Developer Network](https://developer.mozilla.org/en/docs/Security/Mixed_content) pozwala na uzyskanie dodatkowych informacji na ten temat.


## Duplicate content
"Duplicate content" to posiadanie tych samych treści pod różnymi adresami www. Wyszukiwarki nie lubią tego zjawiska, które według nich jest próbą ulepszenia pozycjonowania. Wyszukiwarki nakładają kary na strony, które z tego korzystają. 

Aby uniknąć tego problemu, zaleca się stronom działającym poprawnie z HTTPS dodanie przekierowania treści z HTTP na HTTPS. Osoby odwiedzające będą automatycznie przekierowywane na adres z HTTPS. Dla tej samej treści dostępny będzie jeden adres. 

Poniżej znajduje się przykład przekierowania w pliku .htaccess umieszczonym w katalogu głównym strony www. 


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.twoja_domena.pl/$1 [R,L]
```




## Przejście z HTTPS na HTTP
Jeśli chcesz korzystać tylko z HTTP i nie chcesz już używać protokołu HTTPS, wystarczy odpowiednio skonfigurować plik .htaccess.

Twoi użytkownicy będą więc przekierowywani na adres z HTTP i tylko ten jeden adres będzie dostępny dla treści, nawet jeśli wejdą oni na stronę z HTTPS. 

Poniżej przedstawiamy przykład takiego przekierowania w pliku .htaccess znajdującym się w katalogu głównym:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.twoja_domena.pl/$1 [R,L]
```



