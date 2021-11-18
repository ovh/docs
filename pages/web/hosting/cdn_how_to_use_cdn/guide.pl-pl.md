---
title: 'Przewodnik dotyczący usługi CDN na hostingu www'
excerpt: 'Zoptymalizuj Twoją witrynę internetową, przyspieszając jej ładowanie w hostingu WWW dzięki usłudze CDN'
id: '1290'
slug: przewodnik_dotyczacy_uslugi_geocache_na_hostingu_www
section: 'Optymalizacja strony WWW'
---

**Ostatnia aktualizacja z dnia 26-04-2021**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Jeśli chcesz poprawić doświadczenia użytkowników Twojej witryny, przyspieszając jej działanie, najskuteczniejszym sposobem będzie aktywacja usługi CDN. Umożliwia ona przeniesienie do pamięci podręcznej plików statycznych, takich jak obrazy, pliki CSS i JavaScript, na serwerach znajdujących się najbliżej klientów.

**Odkryj, jak zarządzać opcją CDN w Twoim hostingu WWW.**

## Definicja

**Jak działa CDN?**

CDN to sieć serwerów służąca do optymalizacji dostarczania treści. Wykorzystuje liczne serwery rozsiane po całym świecie, by wyświetlać Twoją witrynę WWW. Im bliżej te serwery znajdują się Twoich użytkowników, tym większa będzie szybkość ładowania Twojej witryny.

Każdy serwer przechowuje w pamięci podręcznej (cache) część Twojej witryny. Ogólnie zaleca się, by przechowywać tam tzw. pliki statyczne, czyli obrazy, pliki JavaScript i CSS, które umożliwiają prawidłowe działanie witryny, ale bardzo rzadko są modyfikowane.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Posiadanie [hostingu WWW](https://www.ovhcloud.com/pl/web-hosting/){.external}.

## W praktyce

###  Wdrożenie opcji CDN

> [!primary]
> 
> Opcja CDN jest zawarta w ofertach hostingowych Performance.

####  Jeśli opcja CDN nie jest zamówiona lub włączona na Twoim hostingu

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz `Web Cloud`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. Kliknij `...`{.action} po prawej stronie "Opcji CDN", a następnie `Zamów CDN`{.action} lub `Włącz opcję`{.action}, jeśli opcja CDN jest już zawarta w Twoim hostingu.

> [!primary]
> 
> Jeśli posiadasz opcję CDN sprzed 19/11/2020, możesz zamówić nową usługę Shared CDN klikając na `Aktualizuj CDN do wyższej`{.action} wersji.

![CDN](images/manage_CDN_01.png){.thumbnail}

Zostaniesz przekierowany do formularza zamówienia. Usługa zostanie aktywowana kilka minut po jej opłaceniu.

#### Jeśli opcja CDN jest już włączona na Twoim hostingu

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz `Web Cloud`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. W karcie `Multisite`{.action} kliknij ikonę koła zębatego po prawej stronie, a następnie wybierz `Zmień`{.action}.

Zaznacz opcję „Aktywuj CDN”, kliknij przycisk `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> W przypadku nazwy domeny wykupionej poza OVHcloud i dodanej w opcji Multisite w hostingu WWW, należy podać adres IP Twojego hostingu w strefie DNS dla nazwy domeny.<br>
> Zapoznaj się z [listą adresów IP klastrów i hostingów WWW](../lista-adresow-ip-klastrow-i-hostingow-www/){.external}, aby znaleźć adres IP wykorzystywany przez usługę CDN w Twoim klastrze.

 
**Dlaczego nie mogę korzystać z geolokalizowanego adresu IP z opcją CDN?** <br>
<br>
Funkcja CDN wykorzystuje zasadę działania IP Anycast. Użytkownik nie łączy się z tym samym serwerem z każdej lokalizacji, lecz z najbliższym, co pozwala bardzo skutecznie skrócić czas ładowania plików statycznych. Geolokalizacja adresu IP jest więc zbędna. <br>
Jeśli chodzi o SEO (pozycjonowanie w wyszukiwarkach), szybkość wyświetlania strony ma większe znaczenie niż geolokalizacja adresu IP hostingu.

### Zarządzaj usługą Shared CDN 

> [!primary]
> 
> Opcja shared CDN jest już zawarta w ofercie hostingu Performance lub dostępna w zamówieniu od 19/11/20. W przypadku starszych wersji, skorzystaj z punktu [Zarządzanie usługą CDN (wersja historyczna)](./#zarzadzaj-usluga-cdn-wersja-historyczna_2).

#### Wyczyść cache usługi Shared CDN

Czasem konieczne może okazać się usunięcie pamięci podręcznej z CDN, zwłaszcza po wprowadzeniu zmian w plikach statycznych. Na przykład przy publikowaniu nowej wersji swojej witryny. Możesz wyczyścić cache dla każdego wpisu w opcji MultiSite.

Przejdź do karty `MultiSite`{.action} Twojego hostingu, kliknij `...`{.action} po prawej stronie wpisu MultiSite, a następnie `Wyczyść CDN`{.action}.

![CDN](images/manage_sharedCDN_01.png){.thumbnail}

#### Konfiguracja opcji usługi Shared CDN

Przejdź do karty `MultiSite`{.action} Twojego hostingu, kliknij `...`{.action} po prawej stronie wpisu MultiSite, a następnie `Zmień CDN`{.action}.

> [!warning]
> 
> Niektóre opcje są zablokowane dla oferty Basic.

![CDN](images/manage_sharedCDN_02.png){.thumbnail}

- **Zawsze online**: Umożliwia przechowywanie danych CDN online w przypadku awarii serwera.

- **HTTP/2**: Protokół umożliwiający zwiększenie wydajności strony www pod względem bezpieczeństwa i czasu odpowiedzi.

- **Dev-mode**: pozwala na wyłączenie cache podczas tworzenia strony.

- **Brotli**:  rodzaj kompresji pozwalającej na optymalizację rozmiaru plików w pamięci cache.

- **Zasada cache**: Utwórz do 5 reguł. Określają one częstotliwość odświeżania bufora dla określonych zasobów na Twojej stronie. ([postępuj zgodnie z kolejnym krokiem](./#utworz-regule-cache)).

Po wybraniu opcji kliknij `Zastosuj konfigurację`{.action}, a następnie `Zatwierdź konfigurację`{.action} w następnym oknie.

![CDN](images/manage_sharedCDN_03.png){.thumbnail}

##### **Utwórz regułę cache**

Aby dodać regułę cache do jednego z elementów Twojej strony, przejdź do karty `MultiSite`{.action} hostingu, kliknij `...`{.action} po prawej stronie wpisu MultiSite, a następnie `Skonfiguruj CDN`{.action}.

W pozycji **Reguły cache** kliknij przycisk `Dodaj regułę`{.action}.

![CDN](images/manage_sharedCDN_04.png){.thumbnail}

- **Nazwa reguły**: Nadaj nazwę swojej regule.

- **URI**: Wpisz podzbiór zasobów Twojej strony WWW w jej katalogu. W przypadku ofert CDN-Basic i CDN-Security można podać tylko rozszerzenie pliku.

- **Czas**: wskaż czas przechowywania wybranego zasobu w pamięci cache.

- **Klasyfikacja**:  Ustaw kolejność wykonywania reguł (od najniższej do najwyższej).

Po dokonaniu wyboru kliknij przycisk `Utwórz regułę`{.action}.

Reguły znajdują się na liście. Możesz je zmienić, klikając przycisk `...`{.action} znajdujący się po prawej stronie, a następnie `Zmień regułę`{.action} lub usunąć, klikając `Usuń regułę`{.action}.

![CDN](images/manage_sharedCDN_05.png){.thumbnail}

Po skonfigurowaniu reguł i wybraniu opcji kliknij `Zastosuj konfigurację`{.action}, a następnie `Zatwierdź konfigurację`{.action} w następnym oknie.

#### Konfiguracja opcji CDN Security

> [!primary]
>  poniższe opcje wymagają zamówienia na [CDN security](https://www.ovhcloud.com/pl/web-hosting/options/cdn/) lub [CDN Advanced](https://www.ovhcloud.com/pl/web-hosting/options/cdn/)

Przejdź do karty `MultiSite`{.action} Twojego hostingu, kliknij `...`{.action} po prawej stronie MultiSite, a następnie `Zmień CDN`{.action}. 

Po aktywacji opcji GeoCache możesz również kliknąć na ikonę wstrzykiwacza po prawej stronie wpisu MultiSite. Następnie kliknij `Edytuj CDN`{.action}.

- **Cross-Origin Resource Sharing (CORS)**: Wpisz na liście nazwy domen zewnętrznych, które będą mogły uzyskać dostęp do zasobów Twojej strony WWW, aby je udostępnić. 

Po włączeniu funkcji kliknij `Edytuj listę zewnętrznych`{.action} zasobów, aby dodać domeny, które mogą współdzielić Twoje zasoby.

![GeoCache](images/manage_CDNsecurity_01.png){.thumbnail}

Po uzupełnieniu listy kliknij `Zatwierdź`{.action}.

> [!primary]
> Po włączeniu opcji CORS bez podawania nazw domen na liście oznacza to, że wszystkie domeny mogą korzystać z zasobów Twojej strony WWW.

- **HTTPS-redirect**: Chroń cały ruch na Twojej stronie WWW poprzez przekierowanie go na protokół HTTPS tymczasowo lub na stałe.

Po włączeniu funkcji kliknij rozwijane menu, aby wybrać między stałym `przekierowaniem (301)` lub tymczasowym `przekierowaniem (302)`.

![GeoCache](images/manage_CDNsecurity_02.png){.thumbnail}

- **HTTP Strict Transport Security (HSTS)**: Zarządzaj dostępem do Twojej strony WWW za pomocą protokołu HTTPS. Rozwiązanie WWW jest więc zabezpieczone przed atakami przez retrogradację (lub ataki typu repli).

Po aktywacji funkcji określ okres, w którym przeglądarka zastosuje funkcję HSTS na Twojej stronie WWW. 

![GeoCache](images/manage_CDNsecurity_03.png){.thumbnail}

> [!primary]
> 
> Po włączeniu funkcji HSTS na Twojej stronie, zmusi ona protokół HTTPS do Twojej przeglądarki aż do końca tzw. "wieku maksymalnego", nawet po wyłączeniu funkcji w Panelu klienta. Jeśli pamięć podręczna jest usuwana z przeglądarki, która już przeprowadziła wizytę na Twojej stronie WWW, strona ta zastosuje nowy stan funkcji HSTS.

- **Mixed content**: Wymuś zawartość wszystkich swoich stron www. Zostaną one załadowane w bezpieczny sposób, co przyczyni się do optymalnego doświadczenia użytkownika. Wszystkie zasoby Twojej strony WWW, zarówno wewnętrzne, jak i zewnętrzne, muszą być dostępne poprzez HTTPS, aby uniknąć błędu przeglądarki.

- **Firewall aplikacyjny**: **W**eb **A**pplication **F**irewall (WAF) chroni Twoją stronę WWW przed oszukańczymi atakami, takimi jak wprowadzanie kodu, nieuprawnione zapytania lub kradzież danych. Zawiera on najważniejsze znane luki w sieci, filtrując wysyłane zapytania i pakiety (lista luk jest zarządzana przez OVHcloud i regularnie aktualizowana).  

> [!warning]
>
> W celu zainstalowania [modułu za 1 kliknięciem OVHcloud](../hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/) należy wyłączyć WAF, aby instalacja modułu nie została zablokowana.

> [!primary]
>  
> WAF jest w pełni administrowany przez OVHcloud. Lista luk jest regularnie aktualizowana.

### Wyświetl statystyki usługi CDN

W zakładce MultiSite` `{.action} Twojego hostingu, w tabeli możesz wyświetlić statystyki usługi CDN, wskazując liczbę zapytań na minutę zmierzonych w tym CDN.

![GeoCache](images/manage_CDNstat_01.png){.thumbnail}

### Zarządzaj usługą CDN (wersja historyczna)

> [!primary]
> 
> Opcja CDN jest już zawarta w ofertach hostingu Performance lub w ofertach zamówionych przed 19/11/20.

#### Czyszczenie pamięci cache w CDN

Czasem konieczne może okazać się usunięcie pamięci podręcznej z CDN, zwłaszcza po wprowadzeniu zmian w plikach statycznych. Na przykład przy publikowaniu nowej wersji swojej witryny. Należy wówczas całkowicie wyczyścić pamięć podręczną w CDN.

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz `Web Cloud`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. Kliknij `...`{.action} po prawej stronie „Opcji CDN”, a następnie `Wyczyść pamięć cache`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Jak przenieść pliki do pamięci cache w usłudze CDN?

**Za pomocą systemu CMS**

Główne systemy CMS proponują wiele wtyczek umożliwiających konfigurację pamięci cache plików statycznych, aby były one automatycznie uwzględniane przez CDN. Inne z kolei pozwalają automatycznie skonfigurować pliki statyczne, aktywując zintegrowaną z CMS-em funkcję przenoszenia plików do pamięci podręcznej. Aby uzyskać więcej informacji, zapoznaj się z oficjalną dokumentacją używanego systemu CMS lub skontaktuj się z autorem wtyczki.

**Bez używania systemu CMS**

Jeśli nie korzystasz z CMS-a, również możesz korzystać z usługi CDN. W tym celu należy dodać nagłówki do żądań HTTP. Istnieje wiele sposobów na ich dodanie. Jednym z najprostszych jest zdefiniowanie reguł w pliku .htaccess, w zależności od rozszerzeń plików.

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
> Przeniesienie do pamięci cache za pomocą nagłówków HTTP umożliwia przechowywanie plików nie tylko w CDN, ale też w przeglądarkach Twoich użytkowników. Dlatego też zaleca się zmienianie nazw plików po każdym ich uaktualnieniu, aby internauci nie oglądali nieaktualnych wersji plików znajdujących się w pamięci cache.
> 

### Wyłącz opcję CDN

Operacja ta pozwala wyłączyć CDN dla jednej lub kilku pozycji podpiętych w opcji MultiSite, bez usuwania opcji CDN z Twojego hostingu WWW.

Przejdź do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz `Web Cloud`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. W zakładce `MultiSite`{.action} kliknij `...`{.action}. po prawej stronie wpisu MultiSite, a następnie `Zmień`{.action}.

Usuń zaznaczenie opcji „Aktywuj CDN”, kliknij przycisk `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Usunięcie opcji CDN

Celem tego działania jest usunięcie opcji CDN dla całego hostingu WWW.

Przejdź do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz `Web Cloud`{.action}. Kliknij przycisk `Hostingi`{.action} na pasku usług po lewej stronie i wybierz odpowiednie rozwiązanie. Kliknij `...`{.action} po prawej stronie „Opcji CDN”, a następnie `Rezygnacja z CDN`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Kliknij `Zatwierdź`{.action}, aby potwierdzić rezygnację.

> [!warning]
>
> Otrzymasz wiadomość e-mail z procedurą rezygnacji z CDN. Należy postępować zgodnie z podanymi instrukcjami, aby potwierdzić lub anulować swój wniosek. 
> 


### Sprawdzenie, czy CDN działa

Aby upewnić się, że usługa CDN jest włączona dla Twojej nazwy domeny, można to sprawdzić z poziomu terminala, wpisując następujące polecenie:

```
curl -i http://yourpersonnaldomain.ovh/
```

Jeśli usługa CDN jest włączona dla Twojej nazwy domeny, otrzymasz wynik podobny do przedstawionego poniżej:

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
Pozycje „*X-CDN*” stanowią potwierdzenie, że korzystasz z CDN.

Jeśli nazwa domeny nie wykorzystuje CDN, otrzymasz wynik podobny do przedstawionego poniżej:

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

Brak pozycji „*X-CDN*” oznacza, że domena nie korzysta z CDN.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie [ https://community.ovh.com/en/](https://community.ovh.com/en/){.external}
