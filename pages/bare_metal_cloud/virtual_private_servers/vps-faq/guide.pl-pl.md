---
title: "OVHcloud VPS - często zadawane pytania"
excerpt: "Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące ofert VPS"
updated: 2025-10-30
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>

## Ogólne pytania dotyczące oferty VPS

/// details | Co to jest VPS i do czego służy?

Serwer wirtualny prywatny (VPS) służy do hostowania stron internetowych (e-commerce, treści, media wizualne) oraz aplikacji oprogramowania (portale, ekstranety, rozwiązania wspólne, wiki, CRM). Na odmienną od hostingu współdzielonego, VPS oferuje izolowane środowisko, dedykowane klientowi. Nasze rozwiązania VPS wypełniają lukę między hostingu webowym a serwerami dedykowanymi, łącząc w sobie wydajność i niezawodność bez obciążenia zarządzania sprzętem. Możesz również łatwo uaktualnić swoją konfigurację bez zmieniania serwerów.

///

/// details | Jakie są zalety VPS od OVHcloud?

Oferty VPS od OVHcloud oferują świetną wartość dla wydajności, z nieograniczonym ruchem i kilkoma globalnymi lokalizacjami, aby zapewnić niską opóźnienie i poprawić dostępność, w zależności od Twoich potrzeb. 

///

/// details | Czy rozwiązanie VPS to właściwy wybór dla mnie?

Użycie VPS wymaga podstawowej wiedzy na temat administracji serwerem. Ważne jest, aby to uwzględnić, skutecznie zarządzając swoim systemem operacyjnym (Linux lub Windows) oraz konfigurować swoje aplikacje, np. PrestaShop lub WordPress.

Jeśli potrzebujesz VPS, ale brakuje Ci technicznej wiedzy, aby go zarządzać, rozważ kontakt z jednym z naszych [partnerów](/links/partner) w celu uzyskania pomocy.

Jeśli potrzebujesz przydzielonych zasobów, ale nie chcesz mieć do czynienia z administracją serwerem, zalecamy wybór naszych planów hostingu webowego Performance.

///

/// details | Czy mogę łatwo uaktualnić swój VPS do wyższego zakresu lub obniżyć konfigurację do niższego poziomu?

Tak, możesz uaktualnić swoją konfigurację z poziomu Panelu Kontrolnego OVHcloud, bez ręcznego migracji danych. Dostępne opcje uaktualnienia zależą od zakresu i modelu VPS.

Jednak aby obniżyć konfigurację, musisz zasubskrybować nowy plan, przenieść swoje dane, a następnie anulować stary usługę. Nasz zespół wsparcia jest dostępny, aby pomóc Ci w razie potrzeby.

///

/// details | Jaką lokalizację lub kraj powinienem wybrać dla mojego VPS?

Im bliżej Twojego centrum danych znajduje się Twoja odbiorców, tym niższe będzie opóźnienie, prowadząc do lepszego doświadczenia użytkownika i zwiększając zaufanie do Twoich usług.

///

/// details | Jakie są zalety VPS zlokalizowanego w Europie?

Hosting VPS w Francji lub ogólnie w UE oferuje zalety takie jak konkurencyjne ceny i wzmocnione ochrony danych. Twoja usługa nie podlega amerykańskiemu aktowi CLOUD, co chroni ją przed wpływami poza Europą.

///

/// details | Czy kopie zapasowe są dołączone do mojego VPS?

Tak, przy zamówieniu VPS, opcja codziennego backupu jest dołączona bezpłatnie.

Dla jeszcze lepszej ochrony możesz również wybrać naszą opcję premium backupu. Oferuje ona:

- Możliwość powrotu do kopii zapasowej, która może być starsza o do tygodnia.
- Możliwość zaplanowania kopii zapasowych, optymalizując zarządzanie danymi i minimalizując wpływ na operacje biznesowe.

Dodatkowo oferujemy:

- Zrzuty ekranu: Możesz tworzyć ręczne, natychmiastowe zrzuty ekranu, które przechwytują dokładny stan Twojego VPS tuż przed aktualizacją lub istotną zmianą.
- Zewnętrzny backup: Przechowuj swoje dane na osobnym, zabezpieczonym dysku, umożliwiając łatwe odzyskanie w przypadku dużego incydentu.

Korzystając z tych rozwiązań, możesz dostosować zarządzanie kopiami zapasowymi do swoich potrzeb bezpieczeństwa i ciągłości działania.

Wizytuj naszą [stronę internetową VPS](/links/bare-metal/vps), aby dowiedzieć się więcej o dostępnych opcjach.

///

/// details | Czy mogę hostować kilka stron internetowych na VPS?

Tak, VPS można skonfigurować w taki sposób, aby obsługiwał wiele stron internetowych lub projektów. Możesz podzielić przestrzeń dyskową zgodnie z własnymi potrzebami i używać specjalistycznych interfejsów, takich jak Plesk lub cPanel, aby uprościć zarządzanie swoimi stronami internetowymi.

///

/// details | Czy otrzymam nazwę domeny i usługę poczty e-mail wraz z moim VPS?

Nie, nasze rozwiązania VPS nie obejmują nazwy domeny ani usługi poczty e-mail. Te usługi można zamówić oddzielnie w Panelu Kontrolnym OVHcloud.

///

/// details | Jak wybrać między VPS a planem hostingu webowego?

**Plan hostingu webowego**

- Idealny dla podstawowych potrzeb hostingu z gotową konfiguracją.

**VPS**

- Większa elastyczność i kontrola, idealny do skalowania projektów z złożonymi potrzebami konfiguracji.

Hosting usług webowych na VPS pozwala Ci zainstalować preferowane oprogramowanie, dostosować ustawienia serwera i hostować wiele stron internetowych z dedykowanymi zasobami. Pamiętaj, że VPS należy skonfigurować w taki sposób, który odpowiada Twoim wymaganiom aplikacji i jest dostosowany do wzrostu Twojej działalności.

///

/// details | Jakie jest różnice między VPS a rozwiązaniami Public Cloud?

**VPS**

- Zoptymalizowana i dedykowana maszyna wirtualna odpowiednia zarówno do preprodukcji, jak i produkcji, zaprojektowana do hostowania kilku projektów internetowych.

**Public Cloud od OVHcloud**

- Oferuje infrastrukturę wielu serwerów z wysoką dostępnością i prywatną siecią (vRack), zaprojektowaną do złożonych, skalowalnych architektur.

///

/// details | Jakie są zalety VPS w porównaniu do serwera dedykowanego?

**VPS**

- Oferuje uproszczone zarządzanie bez konserwacji sprzętu, idealny dla projektów wymagających ścisłej kontroli.

**Serwer dedykowany**

- Zalecany dla złożonej infrastruktury, która wymaga pełnej kontroli nad sprzętem i gwarantowanej wydajności.

VPS eliminuje konieczność zarządzania sprzętem fizycznym, takim jak pamięć, RAM i CPU, co sprawia, że jest dobrze dopasowany do większości aplikacji internetowych. W miarę wzrostu Twojej działalności możesz uaktualnić swój VPS lub przenieść się na serwer dedykowany lub rozwiązanie Public Cloud, aby uzyskać bardziej elastyczną i potężną infrastrukturę.

///

/// details | Jaka przepustowość jest przydzielona do mojego VPS? Czy jest ona gwarantowana?

Przepustowość wymieniona na naszej [stronie internetowej VPS](/links/bare-metal/vps) jest gwarantowana. Jest to minimalna ilość przydzielona do Twojej usługi.

///

/// details | Który SLA jest stosowany do mojego VPS?

VPS od OVHcloud obejmuje SLA na poziomie 99,9%.

///
<span class="smallish-gap"></span>

/// details | Jakie są unikalne cechy VPS z Local Zone?

Z VPS z Local Zone możesz znacznie zmniejszyć czas dostępu do swoich stron i aplikacji, ponieważ dane są hostowane bliżej Twoich użytkowników. Tworzy to lepsze doświadczenie użytkownika, zmniejszając opóźnienie, kiedy aplikacje wymagają minimalnego czasu odpowiedzi. Po prostu wybierz jedną z naszych lokalizacji na całym świecie podczas składania zamówienia.

Pamiętaj, że VPS z Local Zone, w przeciwieństwie do zwykłego VPS, nie obejmuje funkcji bezpieczeństwa, takich jak Anti-DDoS, czy zaawansowane opcje, takie jak Additional IP i Load Balancer.

VPS z Local Zone spełnia również potrzeby projektów z wymaganiami dotyczącymi lokalizacji danych i suwerenności. Hostując swoje usługi w określonej lokalizacji, możesz łatwo spełnić lokalne przepisy dotyczące przetwarzania i przechowywania danych, takie jak europejski RODO.

///

/// details | Czy mogę przenieść swój VPS z Local Zone do centrum danych i odwrotnie?

Nie, nie możesz bezpośrednio migrować usług. Musisz zasubskrybować wybrany VPS, przenieść swoje dane, a następnie anulować stary usługę. Nasz zespół wsparcia może Ci w tym pomóc, jeśli to konieczne.

///

/// details | Jakie są ryzyka korzystania z VPS bez ochrony przed DDoS?

Wirtualne serwery prywatne bez ochrony przed atakami DDoS automatycznie narażają się na ataki dystrybuowane (DDoS), co może prowadzić do awarii usług i poważnych luk w zabezpieczeniach.

- Bezpośrednie narażenie: Jeśli Twój serwer zostanie zaatakowany przez atak DDoS, strumień żądań może go zatopić, powodując, że Twoje strony i aplikacje staną się niedostępne.
- Brak automatycznej neutralizacji: Aby chronić swój serwer, będziesz musiał odpierać ataki za pomocą oprogramowania zabezpieczeniowego trzecich firm lub konkretnych konfiguracji.
- Dodatkowe obciążenie zarządzania: Brak solidnych, wbudowanych zabezpieczeń przedstawia poważne ryzyko, podkreślając konieczność czujnego monitorowania i strategii proaktywnych, szczególnie dla projektów o dużym ruchu.

Jeśli odporność na ataki DDoS jest kluczowym czynnikiem dla Twojego projektu, zalecamy wybór VPS od OVHcloud hostowanego w jednym z naszych centrów danych, które oferują wbudowaną ochronę.

///


## Pytania dotyczące administrowania serwerem VPS

/// details | Jak się zalogować do mojego VPS?

Możesz zalogować się zdalnie do Twojego serwera VPS, korzystając z danych przesłanych w e-mailu po dostarczeniu usługi.  
Metoda połączenia zależy od używanych systemów operacyjnych.

Szczegóły znajdziesz w przewodniku [Jak rozpocząć pracę z VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

///

/// details | Czy OVHcloud zapewnia mi pomoc w konfiguracji oprogramowania do mojego serwera VPS?

Chociaż nie możemy zaoferować pomocy w konfiguracji oprogramowania ani w administrowaniu, zapewniamy narzędzia i zasoby, które pomogą Ci rozpocząć pracę.

Oferujemy na przykład gamę wstępnie skonfigurowanych szablonów i obrazów dla popularnych systemów operacyjnych i aplikacji, aby pomóc Ci szybko wdrożyć Twój VPS. Udostępniamy również Panel klienta OVHcloud, w którym możesz zarządzać serwerami VPS i wykonywać zadania, takie jak restart, reinstalacja i monitoring zasobów.

Ponadto, nasza dokumentacja i baza wiedzy zawierają wiele informacji dotyczących konfiguracji i zarządzania serwerem VPS.

Jednak w przypadku specyficznej pomocy w konfiguracji oprogramowania, zalecamy skontaktowanie się z naszą [społecznością](/links/community) lub uzyskanie pomocy wykwalifikowanego administratora systemu lub programisty poprzez nasz [portal partnera](/links/partner).

///

/// details | Czy mogę zainstalować kilka systemów operacyjnych na moim serwerze VPS?

Instalacja OVHcloud jest możliwa tylko dla jednego systemu operacyjnego.  
Konfiguracje spersonalizowane mogą być wdrażane po stronie klienta, za co odpowiedzialność ponosi administrator serwera. Usługi OVHcloud nie obejmują zadań administracyjnych, takich jak konfiguracja oprogramowania lub narzędzia zewnętrzne.

W przypadku problemów z konfiguracją i administracją zalecamy kontakt z naszą [społecznością](/links/community) lub uzyskanie pomocy wykwalifikowanego administratora systemu lub programisty poprzez nasz [portal partnera](/links/partner).

///

/// details | Czy mogę zainstalować wirtualne maszyny na serwerze VPS za pomocą oprogramowania do wirtualizacji (takiego jak Proxmox)?

Szablony instalacyjne OVHcloud dla serwerów VPS nie zawierają systemu operacyjnego Proxmox ani podobnego systemu operacyjnego do wirtualizacji.

Konfiguracje spersonalizowane mogą być wdrażane po stronie klienta, za co odpowiedzialność ponosi administrator serwera. Usługi OVHcloud nie obejmują zadań administracyjnych, takich jak konfiguracja oprogramowania lub korzystanie z narzędzi zewnętrznych.

W przypadku problemów z konfiguracją i administracją zalecamy kontakt z naszą [społecznością](/links/community) lub uzyskanie pomocy wykwalifikowanego administratora systemu lub programisty poprzez nasz [portal partnera](/links/partner).

///

/// details | Czy mogę wybrać odpowiedni sprzęt dla mojego VPS (GPU, CPU, itp.) i wykonać upgrade?

Nie można spersonalizować ani zmodyfikować serwera VPS na poziomie sprzętowym.  
Wybierz serwer [VPS model](/links/bare-metal/vps) zgodnie z Twoimi minimalnymi potrzebami i zaktualizuj go zgodnie z Twoimi potrzebami.

///

/// details | Mój VPS jest zbyt wolny, czy mogę przenieść swój VPS na inny host?

Aby rozwiązać problemy z wydajnością na serwerze VPS, przekaż naszemu zespołowi obsługi klienta konkretne wyniki testów.

Należy pamiętać, że serwer VPS musi zostać uruchomiony w [tryb rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue), aby wykluczyć ewentualne problemy z oprogramowaniem.

Skontaktuj się z zespołem pomocy, [tworząc zgłoszenie w Centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help), aby uzyskać pełną listę testów niezbędnych do prawidłowej oceny.

///

/// details | Czy mogę zamówić nowy VPS, przenieść niewykorzystany abonament na stary VPS czy zwrócić należność?

Jest to zazwyczaj możliwe, ale proces ten wymaga [zapytania do naszego zespołu wsparcia za pośrednictwem Centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help).

Zanim przystąpisz do tej operacji, upewnij się, że [przeniosłeś wszystkie dane, których nadal potrzebujesz](/pages/bare_metal_cloud/dedicated_servers/migrate_a_server_to_another) do nowej usługi lub utworzyłeś kopie zapasowe danych.

///

/// details | Czy mogę przenieść mój VPS do innego centrum danych OVHcloud w innym kraju?

Nie można przenieść VPS do innego centrum danych. W tym celu możesz przeprowadzić [migrację ręczną](/pages/bare_metal_cloud/dedicated_servers/migrate_a_server_to_another):

- Pobierz dane z aktualnego VPS.
- Zamów nowy VPS.
- Zapisanie danych na nowym VPS.
- [Rezygnacja z serwera VPS poprzedniej generacji](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services).

///

/// details | Ile dodatkowych adresów IP mogę skonfigurować na serwerze VPS?

Liczba adresów VPS jest ograniczona do [16 Additional IP](/links/network/additional-ip).

Zapoznaj się z przewodnikiem [Skonfiguruj adres IP jako alias](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing) aby uzyskać przykłady konfiguracji adresów IP.

///

/// details | Czy mogę dodać bloki adresów IP do mojego serwera VPS?

Nie można dodawać bloków IP do serwera VPS.  
Na serwerze VPS można skonfigurować do [16 dodatkowych adresów IP](/links/network/additional-ip).

///

/// details | Czy mogę zmienić serwer VPS przypisany do mojej licencji (Plesk, cPanel)?

Licencje mogą być przenoszone między serwerami, ale istnieją ograniczenia.

Najlepszą opcją jest zalogowanie się do naszego [API console](/links/api) za pomocą danych identyfikacyjnych konta klienta i sprawdzenie, czy licencja może zostać przeniesiona na inny VPS. [Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps).

Po zalogowaniu, skorzystaj z następujących wywołań w zależności od używanego programu:

**Plesk**

> [!api]
>
> @api {v1} /license/plesk GET /license/plesk/{serviceName}/canLicenseBeMovedTo
>

**cPanel**

> [!api]
>
> @api {v1} /license/cpanel GET /license/cpanel/{serviceName}/canLicenseBeMovedTo
>

![Licencja API](images/getlicense.png){.thumbnail}

Wpisz parametry w następujący sposób:

- `serviceName`: wpisz wewnętrzną nazwę licencji (patrz sekcja `Licencje` w [Panelu klienta OVHcloud](/links/manager)).
- `destinationIp`: Wpisz adres IPv4 usługi docelowej.

Kliknij przycisk `EXECUTE`{.action}.

Jeśli wynik jest ujemny (`false`), powód zostanie uwzględniony w polu `RESPONSE`.

![Licencja API](images/getlicense_response.png){.thumbnail}

Jeśli IP docelowe jest kompatybilne z Twoją licencją ('true`), możesz przenieść je za pomocą odpowiedniego wywołania:

**Plesk**

> [!api]
>
> @api {v1} /license/plesk POST /license/plesk/{serviceName}/changeIp
>

**cPanel**

> [!api]
>
> @api {v1} /license/cpanel POST /license/cpanel/{serviceName}/changeIp
>

///


## Pytania dotyczące bezpieczeństwa i kopii zapasowych

/// details | Jak zabezpieczyć serwer VPS?

Domyślnie VPS jest dostarczany z zainstalowanym tylko wybranym systemem operacyjnym. Po dostarczeniu serwera VPS administrator serwera VPS wprowadził odpowiednią konfigurację zabezpieczeń.  
W tym celu zapoznaj się z przewodnikiem [Zabezpieczenie serwera VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

///

/// details | Jak mogę pobrać pliki lub kopię danych z serwera VPS?

Istnieje kilka możliwości, na przykład:

- Pobranie przez SFTP: Połącz się z prywatnym serwerem wirtualnym za pomocą klienta programowego dysponującego dostępem SFTP (na przykład [FileZilla](/pages/bare_metal_cloud/dedicated_servers/comment-deposer-ou-recuperer-des-donnees-sur-un-serveur-dedie-via-sftp)), następnie prześlij wszystkie pliki z katalogu głównego systemu.
- Pobierz za pomocą `rsync` (narzędzie wiersza poleceń): Wpisz polecenie `rsync -avz -e ssh nazwa użytkownika@vps_ip_address:/ /local_directory/`, aby pobrać z Twojego serwera VPS wszystkie pliki i foldery.
- Pobierz za pomocą opcji **Automatyczne kopie zapasowe**: Zapoznaj się z przewodnikiem [Jak korzystać ze zautomatyzowanych kopii zapasowych na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps), aby pobrać pliki z kopii zapasowej.
- Pobierz za pomocą opcji **Snapshot**: Zapoznaj się z przewodnikiem [Jak korzystać z Snapshotów na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/using-snapshots-on-a-vps), aby pobrać snapshot z serwera VPS.

///

/// details | Jak mogę pobrać plik VPS jako plik VM?

Nie można pobrać pliku VM z VPS OVHcloud. Do pobrania pliku obrazu możesz użyć opcji VPS **Snapshot** z poziomu Panelu klienta OVHcloud.

Zapoznaj się z przewodnikiem [Jak używać migawek na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/using-snapshots-on-a-vps), aby utworzyć i pobrać migawkę serwera VPS.

Następnie możesz lokalnie przekonwertować pobrany plik snapshot na format odpowiadający Twoim potrzebom.

Zastanów się nad skontaktowaniem z jednym z naszych [partnerów](/links/partner) w celu uzyskania dalszej pomocy.

///

/// details | Jak uzyskać dostęp do usługi backup storage z adresu IP spoza mojej usługi?

Dostęp do usługi backup storage na serwerze VPS (przestrzeń FTP) może być ograniczony do adresów IP przypisanych do usługi w ramach konta klienta OVHcloud.

Aby dodać inne adresy IP, z których można uzyskać dostęp, możesz skorzystać z interfejsu API OVHcloud.  
Kopia zapasowa może być pobrana z innej usługi za pomocą różnych protokołów (FTP, NFS, CIFS).

> [!warning]
> Można autoryzować wyłącznie adresy IP OVHcloud.
>

Zaloguj się do [OVHcloud API console](/links/api) za pomocą danych identyfikacyjnych konta klienta i użyj następującego wywołania:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/backupftp/access
>

Edytuj parametry w następujący sposób:

- `serviceName`: wpisz wewnętrzną nazwę serwera VPS (`vps-x11x11xyy.vps.ovh.net`).
- `cifs`: Ustaw na `true`, jeśli dotyczy.
- `ftp`: Ustaw na `true`, jeśli jest potrzebny.
- `ipBlock`: w formie `203.0.113.100/32` wpisz adres IP, który będzie miał dostęp.
- `nfs`: Ustaw na `true`, jeśli dotyczy.

Kliknij przycisk `EXECUTE`{.action}.

Aby sprawdzić, czy adres IP jest dozwolony, użyj następującego wywołania:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/backupftp/access
>

///
<span class="smallish-gap"></span>

/// details | Czy mój VPS jest chroniony przed zewnętrznymi atakami?

Chociaż OVHcloud stosuje środki bezpieczeństwa w celu ochrony całej infrastruktury, administrator serwera VPS jest odpowiedzialny za bezpieczeństwo aplikacji i danych na nim hostowanych.

- Zapoznaj się z przewodnikiem [Aktywacja i konfiguracja Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network), który jest zintegrowany z naszą infrastrukturą Anty-DDoS, ograniczając ekspozycję Twoich usług na ataki DDoS.
- Ponadto, zapoznaj się z naszymi przewodnikami dotyczącymi [jak skonfigurować własny firewall](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable) z `iptable` dla dystrybucji opartych na systemie Linux oraz [jak włączyć firewall w systemie Windows](/pages/bare_metal_cloud/virtual_private_servers/activate-port-firewall-soft-win).
- W przypadku dystrybucji opartych na systemie Linux na serwerze VPS należy postępować zgodnie z instrukcjami zawartymi w przewodniku [How to secure a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), aby zastosować dodatkowe środki bezpieczeństwa.

///

/// details | Jak zabezpieczyć swój VPS przed atakami DDoS?

OVHcloud zapewnia kilka funkcji bezpieczeństwa, które chronią Twój VPS przed złośliwym ruchem:

- Ochrona Anty-DDoS: nasze usługi VPS są domyślnie chronione przez naszą [infrastrukturę Anty-DDoS](/links/security/antiddos), która wykrywa i mityguje ataki DDoS w czasie rzeczywistym.
- Blokowanie IP: [Uniemożliwienie określonym adresom IP lub zakresom IP](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) połączenia z Twoim VPS.
- Reguły firewall: [skonfiguruj spersonalizowane reguły firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) w celu monitorowania ruchu przychodzącego i wychodzącego bezpośrednio na serwerze VPS.
- VAC (VPS Anty-DDoS): System VAC zapewnia dodatkową warstwę ochrony przed atakami DDoS, w tym filtrowanie ruchu i ograniczenie szybkości.

///

/// details | Czy chcę używać serwera VPS jako serwera gier. Czy będzie on korzystał z tego samego firewalla, który chroni serwery dedykowane Game?

Ochrona DDoS Game OVHcloud jest dostępna tylko na serwerach dedykowanych Game. Jeśli zamawiasz VPS do hostingu gier, będziesz musiał skonfigurować firewall bezpośrednio w systemie, w zależności od wybranej gry. Więcej informacji zawiera przewodnik [Konfiguracja firewalla w systemie Linux z systemem iptables](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable).

Zaletą VPS w porównaniu do serwera dedykowanego jest możliwość skalowania zasobów w zależności od rzeczywistych zastosowań. Aby skorzystać z mocniejszego systemu, wystarczy kilka kliknięć, aby przejść na wyższy model VPS.

///

## Sprawdź również

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
