---
title: Przewodnik dotyczący usługi GeoCache na hostingu www
excerpt: Przewodnik dotyczący usługi GeoCache zawartej w ofercie hostingu www
id: '1290'
slug: przewodnik_dotyczacy_uslugi_geocache_na_hostingu_www
section: Optymalizacja strony WWW
---


## 
Zaloguj się do [panelu klienta](https://www.ovh.com/manager/web) za pomocą identyfikatora klienta i przypisanego do niego hasła.

Następnie wybierz hosting www w menu "Hosting".

![](images/img_2904.jpg){.thumbnail}


## Usuwanie treści z pamięci cache usługi GeoCache
TTL (Time to Live = czas życia pliku w pamięci cache w punkcie PoP) to od 5 do 60 minut (czas zarządzany przez nasze serwery do optymalizacji). Po tym czasie plik jest usuwany z pamięci cache. Należy poczekać, aż użytkownik odwoła się do tego elementu, aby element ten został ponownie umieszczony w pamięci cache. 

Aby wymusić wymienienie pliku w pamięci cache w punkcie PoP, na przykład po wprowadzeniu zmian na stronie internetowej, należy wyczyścić cache. Należy poczekać, aż użytkownik odwoła się do tego elementu, aby element ten został ponownie umieszczony w pamięci cache. 

Aby ręcznie wyczyścić cache w punktach PoP w sieci OVH, należy kliknąć na "Wyczyść pamięć cache usługi CDN".

![](images/img_2957.jpg){.thumbnail}


## Wyłączanie opcji GeoCache
Jeśli nie chcesz korzystać z usługi GeoCache zawartej w ofercie hostingu www, możesz wybrać jedno z poniższych rozwiązań:


- Nie używaj adresu IP (pole A)  hostingu związanego z usługa GeoCache.
- Zmodyfikuj plik z regułami w katalogu głównym hostingu (będzie to opisane w kolejnej sekcji).


Opiszemy tutaj rozwiązanie polegające na zmianie adresu IP używanego przez hosting. 

Przejdź do sekcji "Domeny & DNS" dla domeny głównej hostingu korzystającego z funkcji GeoCache. Kliknij na ikonkę "Strefa DNS".

Teraz należy odnaleźć "pole A" przypisane do IP typu 213.xxx.xxxx.xxx *

* Jest to IP usługi GeoCache przypisane do hostingu. Aby przywrócić funkcję GeoCache, należy podać ten adres IP w tym miejscu. Lista adresów IP jest dostępna niżej.

Następnie kliknij na przycisk "Zmień" (ikonka kartki z ołówkiem) na poziomie pola A. 

Na stronie z formularzem zobaczysz następujące pola:


- Subdomena: pole A wybrane domyślnie (nie zmieniać)
- Wybierz adres IP: Wybierz "Hosting".
- Wybierz hosting: wybierz domenę główną hostingu.
- Wybierz państwo: wybierz geograficzną lokalizację IP.


Kliknij na przycisk "Zatwierdź". Adres IP zostanie zmieniony. 

Lista adresów IP przypisanych do usługi GeoCache 3 PoP / 17 PoP


W panelu klienta w zakładce "Hosting", ikonka "FTP" lub w e-mailu instalacyjnym możesz sprawdzić, na jakim klastrze znajduje się Twój hosting.


|Cluster|bez GeoCache|3 PoP (Basic)|17 PoP (Business)|
|002|37.187.184.2|213.186.33.2 ou 213.186.33.68|213.186.33.69|
|003|37.187.184.4|213.186.33.4 ou 213.186.33.84|213.186.33.85|
|005|37.187.184.16|213.186.33.16 ou 213.186.33.94|213.186.33.95|
|006|37.187.184.17|213.186.33.17 ou 213.186.33.96|213.186.33.97|
|007|37.187.184.18|213.186.33.18 ou 213.186.33.104|213.186.33.105|
|010|37.187.184.19|213.186.33.19 ou 213.186.33.106|213.186.33.107|
|011|37.187.184.40|213.186.33.40 ou 213.186.33.150|213.186.33.151|
|012|37.187.184.48|213.186.33.48 ou 213.186.33.152|213.186.33.153|
|013|37.187.184.24|213.186.33.24 ou 213.186.33.82|213.186.33.83|
|014|37.187.184.87|213.186.33.87 ou 213.186.33.168|213.186.33.169|
|015|37.187.184.3|213.186.33.3 ou 213.186.33.170|213.186.33.171|
|017|37.187.184.50|213.186.33.50 ou 213.186.33.172|213.186.33.173|




## 
Aby uzyskać dostęp do danego pliku, zaloguj się do FTP na swoim hostingu. 

Możesz używać programu FileZilla.


## Włączanie/Wyłączanie funkcji GeoCache
Po zalogowaniu na FTP zobaczysz katalog główny. W katalogu głównym znajdują się pliki i katalogi. Nas interesuje plik ".ovhconfig".

Pobierz ten plik na swój komputer. Otwórz plik do edycji za pomocą edytora tekstu. Zmień nazwę na ovhconfig.txt.

Zmień "environment" tak, aby wymienić "production" na "development" (pisownia angielska).

Zmień nazwę pliku ponownie na .ovhconfig i umieść plik w katalogu głównym na FTP zastępując aktualny plik.

Aby ponownie włączyć GeoCache wystarczy ponownie zmienić parametr "environment" na "production".

![](images/img_1207.jpg){.thumbnail}
Możesz również dodać taką linię do pliku .htaccess:

```
Header set Cache-Control "no-cache"
```



