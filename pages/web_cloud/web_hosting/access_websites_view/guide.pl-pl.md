---
title: "Wyświetl wszystkie strony WWW w Panelu klienta OVHcloud i zarządzaj nimi"
excerpt: "Dowiedz się, jak wyświetlać wszystkie Twoje strony WWW i zarządzać nimi w Panelu klienta"
updated: 2026-05-04
---

## Wprowadzenie

Interfejs przedstawiony w tym przewodniku pozwala na scentralizowane wyświetlanie wszystkich stron niezależnie od przypisanego hostingu. Ułatwia śledzenie, które funkcje są aktywowane dla każdej witryny, i daje szybki dostęp do podstawowych działań. Interfejs ten jest szczególnie przydatny dla agencji oraz specjalistów z dziedziny WWW, którzy zarządzają dużą liczbą domen rozdzielonych na kilka hostingów.

**Dowiedz się, jak wyświetlać wszystkie strony WWW i zarządzać nimi w Panelu klienta.**

## Wymagania początkowe

- Usługa [Hosting WWW OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-website-view -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Strony WWW](/links/control-panel/web-website-view)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Strony WWW`{.action} > Wybierz swoją stronę WWW

---
<!-- CP-NAV-END:web-website-view -->

## W praktyce

Kliknij poniższe zakładki, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strony WWW](/links/control-panel/web-website-view). Pojawi się tabela z listą wszystkich Twoich stron WWW i ich głównymi informacjami.
>>
>> ![widok_strony](images/website_view_tab.png){.thumbnail}
>>
> **Krok 2**
>>
>> Tabela zawiera następujące kolumny:
>>
>> - **Domena**: wyświetla główną domenę strony internetowej, tak jak jest ona skonfigurowana na karcie "Moje strony" w Twoim hostingu.
>> - **Diagnostyka**: informuje, czy domena prawidłowo wskazuje na przypisany hosting. Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Jak sprawdzić powiązanie "domena / strona internetowa"?](/pages/web_cloud/web_hosting/my_websites_diagnosis)".
>> - **Katalog główny**: określa katalog na hostingu (www, app, public_html, etc.), na który wskazuje domena.
>> - **Nazwa usługi**: nazwa techniczna usługi w postaci `FTPlogin.clusterXXX.hosting.ovh.net`.
>> - **Nazwa wyświetlana**: spersonalizowany alias do identyfikacji usługi w Panelu klienta.
>> - **Pakiet**: typ rozwiązania powiązanego z hostingiem: Starter, Perso, Pro lub Performance.
>> - **Git**: pokazuje stan integracji Git na stronie WWW. Więcej informacji na temat integracji Git znajdziesz w naszym przewodniku "[Konfiguracja i korzystanie z Git na hostingu WWW OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)".
>> - **Rozdzielone logi**: wskazuje, czy w domenie jest włączona przestrzeń logów (tylko domeny OVHcloud). Więcej informacji znajdziesz na stronie "[Monitorowanie i analiza ruchu na stronie internetowej](/links/web/hosting-traffic-analysis)".
>> - **CDN**: wyświetla status usługi CDN: Aktywny / Nieaktywny / ND (oferta nie jest kompatybilna). Aby uzyskać więcej informacji, przejdź na stronę "[Shared CDN](/links/web/hosting-options-cdn)".
>> - **SSL**: wskazuje, czy certyfikat SSL jest aktywny, zapewniając bezpieczne połączenie (**https://**). Aby uzyskać więcej informacji, przejdź na stronę "[Zabezpiecz Twoją stronę OVHcloud dzięki certyfikatowi SSL premium](/links/web/hosting-options-ssl)".
>> - **Firewall**: wskazuje, czy zapora aplikacyjna jest włączona w domenie. Więcej informacji znajdziesz na stronie "[Opcje niezbędne dla Twojego hostingu](/links/web/hosting-options)".
>> - **Boost**: wskazuje, czy opcja Boost jest włączona, pozwalając tymczasowo zwiększyć zasoby CPU i RAM. Więcej informacji na temat opcji Boost znajdziesz w naszym przewodniku "[Hosting WWW - Jak zmienić ofertę](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".
>>
>> Kliknięcie elementu w tabeli powoduje przekierowanie do odpowiedniego [hostingu WWW](/links/control-panel/web-hosting). Dokładniej:
>>
>> - Kolumny **Domena**, **Diagnostyka**, **Katalog główny**, **Git**, **Rozdzielone logi**, **CDN**, **SSL** i **Firewall** przekierowują do zakładki `Moje strony`{.action}.
>> - Kolumny **Nazwa usługi**, **Nazwa wyświetlana** i **Pakiet** przekierowują do zakładki `Informacje ogólne`{.action}.
>> - Kolumna **Boost** przekierowuje do zakładki `Skorzystaj z opcji Boost`{.action}.
>>
>> > [!warning]
>> > Nie można włączyć oddzielnych logów dla zewnętrznej nazwy domeny. Ta opcja jest dostępna tylko dla domen zarejestrowanych w OVHcloud.
>>

## Sprawdź również <a name="go-further"></a>
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).
