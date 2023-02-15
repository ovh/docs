---
title: 'Pierwsza konfiguracja domeny'
slug: pierwsza-konfiguracja-domeny-na-cdn
excerpt: 'Poznaj dobre praktyki konfiguracji domeny w Twojej usłudze CDN'
section: 'Pierwsze kroki'
order: 2
updated: 2018-02-21
---

**Ostatnia aktualizacja dnia 07-12-2018**

## Wprowadzenie

Podczas pierwszej konfiguracji usługi CDN (Content Delivery Network) konieczne jest wskazanie Twoich domen w Panelu klienta i skonfigurowanie ich w taki sposób, aby można było z nich optymalnie korzystać.

**Niniejszy przewodnik wyjaśnia, jakie kroki należy wykonać w Panelu klienta oraz przedstawia dobre praktyki związane z korzystaniem z usługi CDN od OVH.**


## Wymagania początkowe

- Posiadanie usługi [CDN (Content Delivery Network) od OVH](https://www.ovh.pl/cdn/){.external}
- Dostęp do interfejsu zarządzania strefą DNS Twojej domeny
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}


## W praktyce

### Dodanie domeny do CDN

Pierwszy etap konfiguracji polega na dodaniu wybranej przez Ciebie subdomeny do usługi CDN, aby mogła ona przyjmować zapytania HTTP(S) dla tej domeny. 

W tym celu przejdź do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > zakładka `Serwery dedykowane`{.action} > `NAS i CDN`{.action}.

Następnie kliknij `Dodanie domeny do CDN`{.action}:

![Panel klienta CDN](images/cdn_customer_panel.png){.thumbnail}

W pierwszy kroku wybierz subdomenę, którą chcesz dodać do usługi CDN:

![Dodanie subdomeny do CDN](images/add_cdn_domain_step_1.png){.thumbnail}

W sekcji *backend* możesz wybrać *backend* już istniejący lub też możesz dodać nowy adres IP:

![Dodanie backendu](images/add_cdn_domain_step_2.png){.thumbnail}


Po chwili Twoja domena będzie dostępna w Panelu klienta i będziesz mógł przeprowadzić konfigurację.

Aby Twoje zapytania kierowane były przez infrastrukturę CDN OVH, zmodyfikuj Twoją strefę DNS dla tej subdomeny i skieruj rekord CNAME do **cdn.twojadomena.ovh.web.cdn.anycast.me**.


> [!warning]
>
> Pamiętaj, że użycie rekordu CNAME jest bardzo ważne.Dzięki niemu funkcja `Bypass` może działać prawidłowo. Jeśli używasz rekordu typu A, CDN będzie działał, ale nie będziesz mógł korzystać z funkcji `Bypass`.
>


Jeśli skonfigurujesz strefę DNS Twojej domeny w Panelu klienta, możesz dodać następujący rekord (dostosowując subdomenę do wybranej przez Ciebie konfiguracji):

![Szablon OVF Windows](images/cname_field.png){.thumbnail}

 

### Sprawdzanie czy plik znajduje się w pamięci cache
Możesz sprawdzić, czy plik znajduje się w pamięci cache, wykonując zapytanie do tego pliku:

```sh
curl -I http://sub.domena/
```

Uzyskasz wówczas wynik podobny do tego przedstawionego poniżej:

```bash
HTTP/1.1 200 OK
Date: Tue, 09 Jan 2018 10:30:57 GMT
Content-Type: text/plain
Last-Modified: Fri, 29 Dec 2017 13:30:42 GMT
ETag: W/"(5a464382-4ddf"
Expires: Wed, 09 Jan 2019 10:30:58 GMT
X-IPLB-Instance: 5905
Vary: Accept-Encoding
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 51.254.41.128/26
X-Cacheable: Matched cache
Accept-Ranges: bytes
Connection: keep-alive
```

Jeśli Twój plik jest wywoływany z pamięci cache, otrzymasz odpowiedź `Matched cache`.

Możesz również odnaleźć punkt obecności (PoP), z którego Twój plik jest wywoływany (w powyższym przykładzie *rbx1*).

Ten typ informacji jest również dostępny w Twojej przeglądarce internetowej, w zakładce `Sieć` w narzędziach programistycznych (klawisz F12). Po kliknięciu pliku, który chcesz sprawdzić, uzyskasz odpowiedź HTTP i jej nagłówki.


### Korzystanie z subdomeny dodanej do CDN zamiast domeny głównej

Do usługi CDN nie można dodać domeny głównej, a jedynie subdomeny. Tym samym nie można utworzyć rekordu CNAME dla domeny głównej. Jest to ograniczenie związane z normami RFC i nie można go obejść na poziomie strefy DNS.

Przypisanie określonej domeny do plików, które chcesz umieścić w pamięci cache pozwala Ci lepiej zarządzać:

- plikami: tylko pliki wywoływane w tej subdomenie będą buforowane w pamięci cache Dzięki temu możesz zachować wywołania dynamicznych plików lub tych, których nie chcesz buforować w głównej domenie. Pozwoli Ci to również określić szybciej źródło błędu wyświetlania na Twojej stronie WWW;
- użyciem zasobów i płatnościami: cały ruch (zbuforowany lub nie) przechodzący przez CDN jest fakturowany, pozwala to na ograniczenie liczby niepotrzebnych zapytań kierowanych do CDN w celu optymalizacji wykorzystania limitu.


### Konfiguracja nowej subdomeny w usłudze CDN

Jeśli chcesz skonfigurować nową subdomenę, aby użyć sieci CDN OVH, prawdopodobnie powinieneś także zmodyfikować konfigurację Twojej strony WWW i Twojej usługi WWW. 

Upewnij się przedtem, że Twój serwis WWW działania poprawnie korzystając z tej subdomeny. W tym celu skonfiguruj *vhost* dla tej domeny - z własnym folderem docelowym lub jako alias innej domeny.

Jeśli domena odpowiada poprawnie na poziomie Twojej usługi WWW, zmodyfikuj kod HTML, aby zmienić źródła plików, które muszą przechodzić przez CDN i upewnij się, czy są one poprawnie wywoływane za pomocą Twojej subdomenie.

 
## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>