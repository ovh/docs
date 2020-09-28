---
title: 'Przewodnik dotyczący usługi GeoCache na hostingu www'
excerpt: 'Zoptymalizuj Twoją witrynę internetową, przyspieszając jej ładowanie w hostingu WWW dzięki usłudze GeoCache'
id: '1290'
slug: przewodnik_dotyczacy_uslugi_geocache_na_hostingu_www
section: 'Optymalizacja strony WWW'
---

**Ostatnia aktualizacja z dnia 19-03-2020**

## Wprowadzenie

Jeśli chcesz poprawić doświadczenia użytkowników Twojej witryny, przyspieszając jej działanie, najskuteczniejszym sposobem będzie aktywacja usługi GeoCache. Umożliwia ona przeniesienie do pamięci podręcznej plików statycznych, takich jak obrazy, pliki CSS i JavaScript, na serwerach znajdujących się najbliżej klientów.

**Odkryj, jak zarządzać opcją GeoCache w Twoim hostingu WWW.**

## Definicja

**Jak działa GeoCache?**

GeoCache to sieć serwerów służąca do optymalizacji dostarczania treści. Wykorzystuje liczne serwery rozsiane po całym świecie, by wyświetlać Twoją witrynę WWW. Im bliżej te serwery znajdują się Twoich użytkowników, tym większa będzie szybkość ładowania Twojej witryny.

Każdy serwer przechowuje w pamięci podręcznej (cache) część Twojej witryny. Ogólnie zaleca się, by przechowywać tam tzw. pliki statyczne, czyli obrazy, pliki JavaScript i CSS, które umożliwiają prawidłowe działanie witryny, ale bardzo rzadko są modyfikowane.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Posiadanie [hostingu WWW](https://www.ovh.com/fr/hebergement-web/){.external}.

## W praktyce

###  Włączenie opcji GeoCache

> [!primary]
> 
> Opcja GeoCache jest zawarta w ofertach hostingowych Performance.

####  Jeśli Twój hosting nie zawiera usługi GeoCache

Zaloguj się do swojego [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i wybierz opcję `Web`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. Kliknij `...`{.action} po prawej stronie „Opcji GeoCache”, a następnie `Zamów GeoCache`{.action}.

![GeoCache](images/manage_CDN_01.png){.thumbnail}

Zostaniesz przekierowany do formularza zamówienia. Usługa zostanie aktywowana kilka minut po jej opłaceniu.

#### Jeśli funkcja GeoCache jest już aktywna w Twoim hostingu WWW

Zaloguj się do swojego [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i wybierz opcję `Web`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. W karcie `Multisite`{.action} kliknij ikonę koła zębatego po prawej stronie, a następnie wybierz `Zmień`{.action}.

Zaznacz opcję „Aktywuj GeoCache”, kliknij przycisk `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

![GeoCache](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> W przypadku nazwy domeny wykupionej poza OVHcloud i dodanej w opcji Multisite w hostingu WWW, należy podać adres IP Twojego hostingu w strefie DNS dla nazwy domeny.<br>
> Zapoznaj się z [listą adresów IP klastrów i hostingów WWW](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/){.external}, aby znaleźć adres IP wykorzystywany przez usługę GeoCache w Twoim klastrze.

 
**Dlaczego nie mogę korzystać z geolokalizacji IP z opcją GeoCache?** <br>
<br>
Funkcja GeoCache wykorzystuje zasadę działania IP Anycast. Użytkownik nie łączy się z tym samym serwerem z każdej lokalizacji, lecz z najbliższym, co pozwala bardzo skutecznie skrócić czas ładowania plików statycznych. Geolokalizacja adresu IP jest więc zbędna. <br>
Jeśli chodzi o SEO (pozycjonowanie w wyszukiwarkach), szybkość wyświetlania witryny ma większe znacznie niż geolokalizacja adresów IP w Twoim hostingu.


### Jak przenieść pliki do pamięci cache w usłudze GeoCache?

**Za pomocą systemu CMS**

Istnieje wiele wtyczek do najpopularniejszych systemów CMS, które umożliwiają przeniesienie plików statycznych do pamięci cache, tak by były one automatycznie uwzględniane przez usługę GeoCache. Inne z kolei pozwalają automatycznie skonfigurować pliki statyczne, aktywując zintegrowaną z CMS-em funkcję przenoszenia plików do pamięci podręcznej. Aby uzyskać więcej informacji, zapoznaj się z oficjalną dokumentacją używanego systemu CMS lub skontaktuj się z autorem wtyczki.

**Bez używania systemu CMS**

Jeśli nie korzystasz z CMS-a, również możesz korzystać z usługi GeoCache. W tym celu należy dodać nagłówki do żądań HTTP. Istnieje wiele sposobów na ich dodanie. Jednym z najprostszych jest utworzenie reguł w pliku .htaccess dostosowanych do rozszerzeń plików.

```htaccess
1. # Przechowywanie obrazów w pamięci cache przez okres 1 tygodnia
2. <FilesMatch "\.(jpg|jpeg|png|gif)$">
3. Header set Cache-Control "max-age=604800, public"
4. </FilesMatch>
5. 
6. # Przechowywanie plików JavaScript i CSS przez 1 miesiąc
7. <FilesMatch "\.(js|css)$">
8. Header set Cache-Control "max-age=2592000"
9. </FilesMatch>
```
> [!warning]
>
> Przeniesienie do pamięci cache za pomocą nagłówków HTTP umożliwia przechowywanie plików nie tylko w GeoCache, ale też w przeglądarkach Twoich użytkowników. Dlatego też zaleca się zmienianie nazw plików po każdym ich uaktualnieniu, aby internauci nie oglądali nieaktualnych wersji plików znajdujących się w pamięci cache.
> 



### Czyszczenie pamięci cache w GeoCache

Czasem konieczne może okazać się usunięcie pamięci podręcznej z GeoCache, zwłaszcza po wprowadzeniu zmian w plikach statycznych. Na przykład przy publikowaniu nowej wersji swojej witryny. Należy wówczas całkowicie wyczyścić pamięć podręczną w GeoCache.

Zaloguj się do swojego [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i wybierz opcję `Web`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. Kliknij `...`{.action} po prawej stronie „Opcji GeoCache”, a następnie `Wyczyść pamięć cache`{.action}.

![GeoCache](images/manage_CDN_02.png){.thumbnail}

### Dezaktywacja opcji GeoCache

To działanie pozwala wyłączyć GeoCache dla jednej lub większej liczby pozycji Multisite, nie usuwając przy tym opcji GeoCache ze swojego hostingu WWW.

Zaloguj się do swojego [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i wybierz opcję `Web`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. W karcie `Multisite`{.action} kliknij ikonę koła zębatego po prawej stronie, a następnie wybierz `Zmień`{.action}.

Usuń zaznaczenie opcji „Aktywuj GeoCache”, kliknij przycisk `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

![GeoCache](images/manage_CDN_03.png){.thumbnail}

### Usunięcie opcji GeoCache

Celem tego działania jest usunięcie opcji GeoCache dla całego hostingu WWW.

Zaloguj się do swojego [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i wybierz opcję `Web`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. Kliknij `...`{.action} po prawej stronie „Opcji GeoCache”, a następnie `Rezygnacja z GeoCache`{.action}.

![GeoCache](images/manage_CDN_04.png){.thumbnail}

Kliknij `Zatwierdź`{.action}, aby potwierdzić rezygnację.

> [!warning]
>
> Otrzymasz wiadomość e-mail z procedurą rezygnacji z GeoCache. Należy postępować zgodnie z podanymi instrukcjami, aby potwierdzić lub anulować swój wniosek. 
> 


### Sprawdzenie, czy GeoCache działa

Aby upewnić się, że usługa GeoCache jest włączona dla Twojej nazwy domeny, można to sprawdzić z poziomu terminala, wpisując następujące polecenie:

```
curl -i http://yourpersonnaldomain.ovh/
```

Jeśli usługa GeoCache jest włączona dla Twojej nazwy domeny, otrzymasz wynik podobny do przedstawionego poniżej:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable: Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
X-IPLB-Instance: 12345
```
Pozycje „*X-CDN*” stanowią potwierdzenie, że korzystasz z GeoCache.

Jeśli nazwa domeny nie wykorzystuje GeoCache, otrzymasz wynik podobny do przedstawionego poniżej:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
X-IPLB-Instance: 12345
```

Brak pozycji „*X-CDN*” oznacza, że domena nie korzysta z GeoCache.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie [ https://community.ovh.com/en/](https://community.ovh.com/en){.external}