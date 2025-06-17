---
title: "Wyświetl wszystkie strony WWW w Panelu klienta OVHcloud i zarządzaj nimi"
excerpt: "Dowiedz się, jak wyświetlać wszystkie Twoje strony WWW i zarządzać nimi w Panelu klienta"
updated: 2025-05-27
---

## Wprowadzenie

Widok `Strony WWW` pozwala na scentralizowane wyświetlanie wszystkich stron niezależnie od przypisanego hostingu. Ułatwia śledzenie, które funkcje są aktywowane dla każdej witryny, i daje szybki dostęp do podstawowych działań. Interfejs ten jest szczególnie przydatny dla agencji oraz specjalistów z dziedziny WWW, którzy zarządzają dużą liczbą domen rozdzielonych na kilka hostingów.

**Dowiedz się, jak wyświetlać wszystkie strony WWW i zarządzać nimi w Panelu klienta.**

## Wymagania początkowe

- Zalogowanie do [Panel klienta OVHcloud](/links/manager).
- Usługa [Hosting WWW OVHcloud](/links/web/hosting).

## W praktyce

### Przejdź do widoku `Strony WWW`

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}. W lewym menu kliknij `Strony WWW`{.action}. Pojawi się tabela z listą wszystkich Twoich stron WWW i ich głównymi informacjami.

![widok_strony](images/website_view_tab.png){.thumbnail}

#### Domena

Wyświetla główną nazwę domeny hostingu skonfigurowaną w zakładce MultiSite Twojego hostingu.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

#### Diagnostyka

Informuje, czy domena prawidłowo wskazuje na przypisany hosting. Dla każdej nazwy domeny mogą pojawić się trzy scenariusze:

- `A/AAAA` na zielono: Pola A i/lub AAAA domeny poprawnie wskazują na adres IP hostingu.
- `A/AAAA` yellow: Wpisy A i/lub AAAA dla Twojej domeny wskazują na adres IP inny niż adres IP Twojego hostingu.
- `A/AAAA`szary: Nie skonfigurowałeś żadnego rekordu A lub AAAA. Twoja domena nie wskazuje na żaden adres IP.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

Aby uzyskać więcej informacji, zapoznaj się z częścią "Diagnostyka domen" naszego przewodnika "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

#### Katalog główny

Określa katalog na hostingu (na przykład: www, app, public_html, etc.), na który wskazuje domena.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

#### Nazwa usługi

Nazwa techniczna usługi hostingu, na którym skonfigurowana jest strona internetowa w postaci `abcdv.clusterXX.hosting.ovh.net`.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `Informacje ogólne`{.action} danego hostingu.

#### Nazwa wyświetlana

Spersonalizowany alias zdefiniowany przez klienta, w celu lepszej identyfikacji usługi w Panelu klienta.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `Informacje ogólne`{.action} danego hostingu.

#### Pakiet

Pokazuje typ rozwiązania powiązanego z hostingiem: Starter, Perso, Pro lub Performance.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `Informacje ogólne`{.action} danego hostingu.

#### Git

Pokazuje stan integracji Git na stronie WWW:

- Aktywny: Repozytorium Git jest połączone.
- Nieaktywny: Repozytorium Git nie jest włączone.
- W trakcie: Trwa konfiguracja repozytorium Git.
- Błąd: Wykryto błąd w konfiguracji repozytorium Git.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

#### Rozdzielone logi

Wskazuje, czy w wybranej domenie jest włączona przestrzeń logów.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

Przejdź na stronę "[Monitorowanie i analiza ruchu na stronie internetowej](/links/web/hosting-traffic-analysis)", aby uzyskać więcej informacji.

> [!warning]
>
> Nie można włączyć oddzielnych logów dla zewnętrznej nazwy domeny. Ta opcja jest dostępna tylko dla domen zarejestrowanych w OVHcloud.
>

#### CDN

Wyświetla status usługi CDN (**C**content **D**delivery **N**network) dla domeny:

- Aktywny: CDN działa.
- Nieaktywny: CDN jest wyłączony.
- ND: Nie dotyczy (oferta nie jest kompatybilna).

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

CDN pozwala na umieszczanie w pamięci cache statycznych elementów Twojej strony WWW, takich jak obrazy. Aby uzyskać więcej informacji, przejdź na stronę "[Shared CDN](/links/web/hosting-options-cdn)".
     
#### SSL

Wskazuje, czy certyfikat SSL jest aktywny dla danej domeny.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

Certyfikat SSL zapewnia bezpieczne połączenie (**https://**) z wybraną nazwą domeny. Przejdź na stronę "[Zabezpiecz Twoją stronę OVHcloud dzięki certyfikatowi SSL premium](/links/web/hosting-options-ssl)", aby uzyskać więcej informacji.

#### Firewall

Wskazuje, czy zapora aplikacyjna jest włączona w domenie.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `MultiSite`{.action} danego hostingu.

Więcej informacji znajdziesz na stronie "[Opcje niezbędne dla Twojego hostingu](/links/web/hosting-options)".

#### Boost

Wskazuje, czy opcja boost jest włączona na Twoim hostingu. Opcja Boost pozwala tymczasowo zwiększyć zasoby CPU i RAM Twojego hostingu.

Kliknięcie tego przycisku spowoduje przekierowanie do zakładki `Skorzystaj z opcji Boost`{.action} dla danego hostingu.

Aby uzyskać więcej informacji na temat opcji Boost, zapoznaj się z częścią "Zwiększ tymczasowo swój hosting Performance" przewodnika "[Hosting WWW - Jak zmienić ofertę](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

## Sprawdź również <a name="go-further"></a>
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).