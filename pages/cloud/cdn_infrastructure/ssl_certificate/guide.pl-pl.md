---
title: 'Certyfikat SSL dla usługi CDN'
slug: certyfikat-ssl-cdn
excerpt: 'Dowiedz się, jak dodać certyfikat SSL do usługi CDN'
section: 'Pierwsze kroki'
order: 4
updated: 2018-02-22
---

**Ostatnia aktualizacja dnia 06-12-2018**

## Wprowadzenie

Do Twojej usługi Content Delivery Network (CDN) można dodać [certyfikat SSL](https://www.ovh.pl/ssl/){.external}, dzięki czemu Twoi użytkownicy mogą łączyć się bezpiecznie, nawet korzystając z CDN.

**W niniejszym przewodniku wyjaśnimy działanie certyfikatu SSL Let's Encrypt dostarczonego przez OVH.**


## Wymagania początkowe

- Posiadanie [usługi CDN od OVH](https://www.ovh.pl/cdn/){.external}
- Dostęp do interfejsu zarządzania strefą DNS domeny

## W praktyce

### Korzystanie certyfikatu Let's Encrypt od OVH

- Jeśli nie skonfigurowałeś żadnego certyfikatu i dodajesz Twoją pierwszą subdomenę do CDN, certyfikat Let's Encrypt zostanie automatycznie utworzony dla tej domeny.
- Jeśli dodajesz do CDN kolejną subdomenę, certyfikat zostanie automatycznie odnowiony i obejmie nową, właśnie skonfigurowaną, subdomenę.


Aby tworzenie certyfikatu przebiegało prawidłowo, konieczne jest, aby subdomena, którą właśnie dodałeś, wskazywała poprawnie CDN. Zapoznaj się z przewodnikiem, który wyjaśni, jak przeprowadzić [pierwszą konfigurację domeny](https://docs.ovh.com/pl/cdn-infrastructure/pierwsza-konfiguracja-domeny-na-cdn){.external}.

Certyfikatu odnawiany jest automatycznie i następuje to w ciągu 20 dni poprzedzających jego wygaśnięcie.

> [!warning]
>
> Certyfikat Let's Encrypt dostarczony przez OVH może objąć 100 pierwszych domen lub subdomen skonfigurowanych w ramach CDN. Jeśli chcesz, aby objął więcej niż 100 domen, skonfiguruj Twój własny certyfikat Wildcard (lub inny przeznaczony dla wielu domen).
>


### Trwa tworzenie mojego certyfikatu, ile czasu to zajmie?

Utworzenie (lub odnowienie) certyfikatu, jak również jego wdrożenie we wszystkich punktach obecności (PoP) OVH zajmuje średnio dwie godziny.

![Tworzenie certyfikat SSL w toku](images/ssl_in_progress.png){.thumbnail}


Jeśli proces tworzenia certyfikatu zostanie zablokowany, sprawdź, czy wszystkie domeny skonfigurowane w Twojej usłudze wskazują na CDN. Jeśli tak nie jest, robot OVH nie utworzy poprawnie certyfikatu.

Jeśli przeprowadziłeś korektę połączenia z CDN, robot OVH przez 48 godzin będzie wznawiał próbę utworzenia certyfikatu. Po tym czasie zadanie utworzenia certyfikatu zostanie anulowane.

Kolejna próba utworzenia certyfikatu zostanie podjęta w odpowiedzi na dodanie nowej domeny lub ponowne żądanie utworzenia certyfikatu.

Po aktywacji certyfikatu wyświetli się komunikat:

![Certyfikat SSL został utworzony](images/ssl_validated.png){.thumbnail}


### Dodanie własnego certyfikatu

- Jeśli jeszcze nie dodałeś domeny lub jeśli nie posiadasz żadnego certyfikatu, możesz użyć opcji `Dodaj mój certyfikat`{.action} w zakładce SSL Twojego CDN:


![Dodanie certyfikatu SSL](images/add_ssl.png){.thumbnail}

- Jeśli posiadasz już certyfikat Let's Encrypt, możesz użyć opcji `Zastąp moim certyfikatem`{.action}:

![Zmiana certyfikatu SSL](images/change_ssl.png){.thumbnail}


## Sprawdź również

[Pierwsza konfiguracja domeny](https://docs.ovh.com/pl/cdn-infrastructure/pierwsza-konfiguracja-domeny-na-cdn){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.