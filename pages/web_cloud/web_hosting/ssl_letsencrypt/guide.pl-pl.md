---
title: "Hosting WWW - Aktywacja darmowego certyfikatu SSL Let's Encrypt"
excerpt: "Dowiedz się, jak aktywować bezpłatny certyfikat SSL Let's Encrypt na Twoim hostingu"
updated: 2025-06-16
---

## Wprowadzenie

Certyfikaty Secure Socket Layer (SSL) umożliwiają szyfrowanie informacji przesyłanych na Twojej stronie WWW. Dzięki temu możesz uniknąć sytuacji, w której osoba lub złośliwy robot "odsłuchuje" zapytań wysyłanych lub wysyłanych z Twojej strony WWW.

OVHcloud oferuje kilka typów certyfikatów SSL dla naszych ofert [hosting OVHcloud](/links/web/hosting). Są one przedstawione w naszym przewodniku "[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Certyfikaty SSL są niezbędne dla bezpieczeństwa Twojej strony WWW.

Istnieją trzy rodzaje certyfikatów SSL:

- Domain Validation (DV)
- Organizacja potwierdzania (OV)
- Rozszerzenie weryfikacji (EV)

Poziomy szyfrowania SSL są identyczne między tymi trzema typami certyfikatu.

Główną różnicą jest poziom weryfikacji, który zostanie przeprowadzony przez organ certyfikacji (AC) wydający certyfikat SSL i poświadczający jego autentyczność.

Let's Encrypt to bezpłatny, zautomatyzowany, otwarty i nienastawiony na zysk organ certyfikacji. Więcej informacji na stronie <https://letsencrypt.org/pl/about/>.

**Dowiedz się, jak aktywować bezpłatny certyfikat SSL Let's Encrypt na Twoim hostingu OVHcloud.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Zamówić lub dysponować [hostingiem OVHcloud](/links/web/hosting).
- Zamówić lub dysponować [domeną](/links/web/domains) i mieć wyłączne prawa do jej używania. Nazwa domeny nie może być już powiązana z certyfikatem SSL.

> [!primary]
>
> Od **06/08/2025** certyfikat SSL Let's Encrypt jest automatycznie aktywowany domyślnie dla:
>
> - Wszystkie nowe domeny/subdomeny powiązane z hostingiem.
> - wszystkie nowe zamówienia na nową domenę z nowym hostingiem.
>
> Konfiguracja usług pozwala zaoszczędzić czas. Certyfikat Let's Encrypt SSL będziesz mógł dezaktywować w [Panelu klienta OVHcloud](/links/manager), jeśli chcesz zainstalować inny certyfikat SSL (Sectigo DV, Sectigo EV lub spersonalizowany certyfikat SSL).
> Więcej informacji znajdziesz w przewodniku "[Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)", sekcja **Wyłączenie certyfikatu SSL na hostingu**.

## W praktyce

> [!warning]
>
> **Zanim przejdziesz dalej**, sprawdź, czy **każda domena i/lub subdomena** objęta przyszłym certyfikatem SSL Let's Encrypt:
>
> - wskazuje na adres IP hostingu.
> - dostępny w opcji MultiSite na Twoim hostingu.
> - nie ma już aktywnego certyfikatu SSL.
>
> Jeśli potrzebujesz pomocy, zapoznaj się z naszymi przewodnikami:
>
> - [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Hosting WWW - Lista adresów IP według klastra](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
> - [Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), sekcja **Wyłączenie certyfikatu SSL na hostingu**.

### Aktywacja certyfikatu SSL Let's Encrypt

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **4**:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kiedy pojawi się zawartość karty, wybierz domenę lub subdomenę, dla której chcesz aktywować bezpłatny certyfikat SSL Let's Encrypt (DV), zaznaczając opcję `Włącz certyfikat SSL`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Następnie kliknij przycisk `Włącz SSL Let's Encrypt`{.action}.

Wdrożenie certyfikatu SSL Let's Encrypt może potrwać kilka godzin.

### Sprawdź aktywację darmowego certyfikatu SSL Let's Encrypt (DV)

Aby sprawdzić, czy instalacja została zakończona, kliknij poniższe zakładki, aby wyświetlić kolejne **4** etapy:

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Certyfikaty SSL`{.action}.
>>
>> ![Certyfikaty SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etap 4**
>>
>> Kiedy pojawi się zawartość karty, sprawdź, czy każda domena i/lub subdomena figuruje w tabeli z certyfikatem SSL `Let's Encrypt`.
>>
>> ![Tabela zarządzania certyfikatami SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Certyfikat SSL Let's Encrypt jest teraz zainstalowany i aktywny. Od tej chwili możesz korzystać z niej w ramach (swoich) nowej(ych) strony(ów) www, przechodząc na przykład do (swoich) nowej(ych) [strony(ów) www(ów) HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Sprawdź również

[Hosting - Zarządzanie certyfikatem SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Hosting WWW - Ustaw HTTPS na stronie WWW](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).