---
title: "Zmiana serwerów DNS domeny OVHcloud"
excerpt: "Dowiedz się, jak modyfikować serwery DNS Twojej domeny zarejestrowanej w OVHcloud"
updated: 2024-09-16
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Skrót **DNS** (**D**omain **N**ame **S**ystem) to zbiór elementów (serwery DNS, strefy DNS, etc.) pozwalających na dopasowanie nazwy domeny do adresu IP.

Więcej informacji znajdziesz w przewodnikach "[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)" i "[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Dowiedz się, jak w 3 krokach zmienić serwery DNS Twojej domeny OVHcloud.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains) zarejestrowanej w OVHcloud.
- Posiadanie uprawnień [do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) nazwy domeny z poziomu [panelu klienta OVHcloud](/links/manager).
- Dostęp do [panelu klienta OVHcloud](/links/manager).

> [!primary]
>
> **Operator** jest organizacją uprawnioną do sprzedaży domen. Do tych **operatorów** należy OVHcloud.
>
> Jeśli Twoja domena nie jest zarejestrowana w OVHcloud, zmodyfikuj serwery DNS u **operatora**, u którego zarejestrowana jest aktualnie Twoja domena.
>

## W praktyce

> [!alert]
>
> **Należy zachować ostrożność podczas modyfikacji serwerów DNS domeny.**
>
> Błąd podczas obsługi może spowodować niedostępność Twojej strony WWW lub uniemożliwić otrzymywanie nowych wiadomości e-mail. Zrozumienie konsekwencji takiej zmiany pozwoli Ci lepiej zrozumieć zmiany, które będziesz wprowadzał.

Kiedy zmieniasz serwery DNS Twojej domeny, zmieniasz jej konfigurację DNS. Nowa konfiguracja DNS zastępuje poprzednią i jest przechowywana na nowych serwerach DNS. Z technicznego punktu widzenia domena używa nowej strefy DNS.

Należy jednak wziąć pod uwagę następujące kwestie:

- W przypadku zmiany serwera DNS (na przykład zewnętrznego DNS poprzez DNS OVHCloud) zawartość poprzedniej konfiguracji / strefy DNS nie jest automatycznie kopiowana do nowej. Upewnij się, że nowa strefa DNS zawiera wszystkie rekordy DNS wymagane do prawidłowego działania usług powiązanych z Twoją domeną (np. strona WWW i konta e-mail).
- Jeśli nie chcesz modyfikować serwerów DNS, ale jeden lub więcej rekordów aktualnej konfiguracji / strefy DNS, zapoznaj się z naszym przewodnikiem: "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".
- Niektóre organizacje lub operatorzy zarządzający rozszerzeniami domen mają określone wymagania dotyczące serwerów DNS (liczba serwerów nazw, wartość rekordów, etc.). W razie wątpliwości sprawdź wymagania u operatora domeny.

### Etap 1 - Dostęp do zarządzania serwerami DNS OVHcloud <a name="access-dns-servers"></a>

W tym celu wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Domeny`{.action}.
4. Wybierz odpowiednią domenę.
5. Na stronie, która się wyświetli kliknij zakładkę `Serwery DNS`{.action}.

Tabela, która się wyświetla zawiera listę serwerów DNS zdefiniowanych aktualnie przez OVHcloud dla Twojej domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednej linii w tabeli.

> [!primary]
>
> Gdy korzystasz z serwerów DNS OVHcloud, numery zawarte w nazwach serwerów nie mają żadnego związku z używanymi przez Ciebie usługami. Tylko opcja [DNS anycast](/links/web/domains-options) używa określonych serwerów DNS (`ns200.anycast.me` i `dns200.anycast.me`). Są one automatycznie przypisywane do Twojego konta klienta.

![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Etap 2 - Modyfikacja serwerów DNS <a name="modify-dns-servers"></a>

> [!primary]
>
> Wszystkie opisane poniżej funkcje są dostępne w zakładce `Serwery DNS`{.action} wspomnianej w [etapie 1](#access-dns-servers) niniejszego przewodnika.
>

Aby zmienić serwery DNS, kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się pod tabelą.

Pojawi się nowa strona z trzema opcjami edycji.

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers.png){.thumbnail}

#### Opcja 1 - Użyj domyślnych serwerów DNS OVHcloud

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}

Ta opcja pozwala na automatyczne zastosowanie istniejącej konfiguracji strefy DNS OVHcloud dla Twojej domeny. Przed przystąpieniem do operacji upewnij się, że dla Twojej domeny istnieje strefa DNS w OVHcloud.

> [!primary]
>
> W razie potrzeby sprawdź przewodniki "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)" i/lub "[Tworzenie strefy DNS OVHcloud dla domeny](/pages/web_cloud/domains/dns_zone_create)", aby sprawdzić, czy dla Twojej domeny istnieje strefa DNS OVHcloud.

Aby użyć domyślnych serwerów DNS OVHcloud, kliknij przycisk Zastosuj konfigurację`{.action}. Pojawi się następujące okno:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}

Zawiera ona nazwy 2 serwerów DNS, które zostaną zastosowane do Twojej domeny. Muszą one mieć jedną z 3 następujących form:

- `nsXX.ovh.net` i `dnsXX.ovh.net` lub, `nsXXX.ovh.net` i `dnsXXX.ovh.net` (gdzie każdy `X` reprezentuje cyfrę między **0** a **9**)
- `nsXX.ovh.ca` i `dnsXX.ovh.ca` lub, `nsXXX.ovh.ca` i `dnsXXX.ovh.ca` (gdzie każdy `X` reprezentuje cyfrę między **0** a **9**)
- `ns200.anycast.me` i `dns200.anycast.me` (jeśli wybrałeś opcję [DNS anycast](/links/web/domains-options))

Jeśli odpowiadają one kryteriom, które chcesz zastosować, kliknij przycisk `Zastosuj`{.action}.

W ten sposób dla Twojej domeny zostaną użyte 2 serwery DNS zadeklarowane (w rekordach typu NS strefy DNS OVHcloud).

Poprzednie zadeklarowane serwery DNS i konfiguracja DNS, którą stosują, zostaną wyłączone dla Twojej domeny. Strefa DNS OVHcloud stanie się aktywną strefą DNS dla Twojej domeny.

#### Opcja 2 - Używaj własnych serwerów DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}

Opcja ta pozwala na zadeklarowanie serwerów DNS w niezarządzanej strefie DNS w Panelu klienta OVHcloud.

Może to być na przykład:

- zewnętrzne serwery DNS dostarczane przez naszych konkurentów;
- własne serwery DNS, jeśli hostujesz strefę DNS na jednym z Twoich serwerów. Serwery DNS mogą być również hostowane w infrastrukturze OVHcloud (serwery dedykowane, VPS, etc.).

> [!success]
>
> Przed dodaniem serwera DNS sprawdź, czy jest dostępny **i czy** zawiera strefę DNS dla Twojej domeny. Upewnij się również, że ta strefa DNS zawiera wszystkie rekordy typu "NS" na wszystkich serwerach DNS, które zadeklarujesz dla Twojej domeny.
>
> Na przykład: chcesz zadeklarować serwery DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* i *ns3.dns-server.tld* dla Twojej domeny. Należy wówczas sprawdzić, czy w 3 strefach DNS zainstalowanych na tych 3 serwerach DNS widoczne są następujące trzy rekordy typu "NS":
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.
>

Aby wypełnić jeden z Twoich własnych serwerów DNS, wypełnij 2 formularze w ramce, jak pokazano poniżej:

- `Serwer DNS`: nazwa serwera DNS, który ma zostać zastosowany do Twojej domeny.
- `Przypisane IP (opcjonalnie)` : adresse IP (IPv4 lub IPv6) danego serwera DNS. W tym formularzu można podać tylko **jeden adres IP**.

> [!warning]
>
> Każda ramka wejściowa (widoczna w poprzednim zrzucie ekranu) może zawierać tylko **jeden** serwer DNS. Serwer DNS odpowiada ramce.
>
> Ponadto nota informacyjna na niebieskim tle, umieszczona nad pierwszą ramką, pokazuje, jaki zakres serwerów DNS możesz zadeklarować dla Twojej domeny. Wartości te zależą od rozszerzenia domeny.

Po wpisaniu informacji kliknij przycisk `+`{.action}} znajdujący się po prawej stronie 2 formularzy. Pozwala on na dodanie serwera DNS oraz wyświetlenie nowej ramki pod poprzednią.

Powtórz operację tyle razy, ile masz serwery DNS do dodania, w granicach podanych w nocie informacyjnej.
Kliknij przycisk `+`{.action} dla każdego serwera DNS, aby zatwierdzić jego wprowadzenie i dodanie.

Po dodaniu wszystkich Twoich własnych serwerów DNS kliknij `Zastosuj konfigurację`{.action}. Pojawi się następujące okno:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}

Zawiera ona podsumowanie nazw serwerów DNS, które zostaną zastosowane do Twojej domeny.
Jeśli odpowiadają one kryteriom, które chcesz zastosować, kliknij przycisk `Zastosuj`{.action}.

Poprzednie zadeklarowane serwery DNS i konfiguracja DNS, którą stosują, zostaną wyłączone dla Twojej domeny. Strefa DNS zadeklarowana na Twoich własnych serwerach DNS stanie się aktywną strefą DNS dla Twojej domeny.

#### Opcja 3 - Korzystaj z serwerów DNS OVHcloud i własnych serwerów DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}

Opcja ta pozwala na połączenie korzystania z własnych serwerów DNS, przy jednoczesnym zachowaniu aktywnych serwerów DNS OVHcloud dla Twojej domeny. Ta kombinacja pozwala na przykład na zapewnienie większego dostępu do różnych usług przypisanych do Twojej domeny (hosting www, serwery e-mail, itp.). Jeśli jedna grupa serwerów DNS stanie się niedostępna przez kilka minut, inne zadeklarowane serwery DNS mogą przejąć jej zadania.

Należy jednak sprawdzić, czy konfiguracje stref DNS na poszczególnych serwerach DNS są poprawnie skonfigurowane i działają razem. W większości przypadków działają wszystkie serwery DNS. Wszystkie będą w stanie odpowiedzieć na żądania, które zostaną im losowo przypisane w sieci DNS.

> [!warning]
>
> 1. Zachowaj ostrożność, jeśli zdecydujesz się skorzystać z tej drugiej opcji. Wymaga to zaawansowanej wiedzy na temat działania sieci DNS, serwerów DNS i stref DNS.<br>
> 2. Opcja [DNSSEC](/pages/web_cloud/domains/dns_dnssec) musi zostać wyłączona, aby połączyć korzystanie z Twoich własnych serwerów DNS z serwerami DNS OVHcloud.<br>
> 3. Upewnij się, że nie łączysz grupy serwerów DNS OVHcloud z innymi grupami serwerów DNS OVHcloud. Na przykład *dns19.ovh.net* i *ns19.ovh.net* odpowiadają grupie serwerów DNS OVHcloud, idą w parze i są synchronizowane. W OVHcloud grupy serwerów DNS są identyfikowane przy użyciu numeru obecnego w nazwach serwerów. Dwa serwery DNS OVHcloud należą do tej samej grupy serwerów DNS, jeśli dzielą one ten sam numer. Na przykład *dns19.ovh.net* i *ns19.ovh.net*.

> [!success]
>
> Przed dodaniem serwera DNS sprawdź, czy jest dostępny **i czy** zawiera strefę DNS dla Twojej domeny. Upewnij się również, że ta strefa DNS zawiera wszystkie rekordy typu "NS" na wszystkich serwerach DNS, które zadeklarujesz dla Twojej domeny.
>
> Na przykład: chcesz zadeklarować serwery DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* i *nsXX.ovh.net* dla Twojej domeny. Należy wówczas sprawdzić, czy w 3 strefach DNS zainstalowanych na tych 3 serwerach DNS widoczne są następujące trzy rekordy typu "NS":
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.
>

Aby wypełnić jeden z Twoich własnych serwerów DNS, wypełnij 2 formularze w ramce jak poniżej:

- `Serwer DNS`: nazwa serwera DNS, który ma zostać zastosowany do Twojej domeny.
- `Przypisane IP (opcjonalnie)` : adresse IP (IPv4 lub IPv6) danego serwera DNS. W tym formularzu można podać tylko **jeden adres IP**.

> [!warning]
>
> Każda ramka wejściowa (widoczna w poprzednim zrzucie ekranu) może zawierać tylko **jeden** serwer DNS. Serwer DNS odpowiada ramce.
>
> Ponadto nota informacyjna na niebieskim tle, umieszczona nad pierwszą ramką, pokazuje, jaki zakres serwerów DNS możesz zadeklarować dla Twojej domeny. Wartości te zależą od rozszerzenia domeny.

Po wpisaniu informacji kliknij przycisk `+`{.action} znajdujący się po prawej stronie 2 formularzy. Pozwala on na dodanie serwera DNS oraz wyświetlenie nowej ramki pod poprzednią.

Powtórz operację tyle razy, ile masz serwery DNS do dodania, w granicach podanych w nocie informacyjnej.
Kliknij przycisk `+`{.action} dla każdego serwera DNS, aby zatwierdzić jego wprowadzenie i dodanie.

Po dodaniu wszystkich Twoich własnych serwerów DNS kliknij `Zastosuj konfigurację`{.action}. Pojawi się następujące okno:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}

Zawiera ona podsumowanie nazw serwerów DNS, które zostaną zastosowane do Twojej domeny.
Jeśli odpowiadają one kryteriom, które chcesz zastosować, kliknij przycisk `Zastosuj`{.action}.

Poprzednie zadeklarowane serwery DNS i konfiguracja DNS, którą stosują, zostaną wyłączone dla Twojej domeny. Strefy DNS przypisane do Twojej domeny staną się strefami włączonymi dla Twoich własnych serwerów DNS oraz dla serwerów DNS OVHcloud.

### Etap 3 - Wprowadzenie zmian dla serwerów DNS

Po wprowadzeniu modyfikacji, należy pamiętać o dwóch następujących po sobie okresach:

- Registry* zarządzający rozszerzeniem Twojej domeny (na przykład rejestr rozszerzeń *.fr*) powinien zostać poinformowany o zmianie DNS wprowadzonej w OVHcloud. Śledź postęp operacji w [Panelu klienta OVHcloud](/links/manager). W tym celu przejdź do sekcji `Web Cloud`{.action}, przejdź do sekcji `Domeny`{.action} w kolumnie po lewej stronie, następnie kliknij `Operacje w toku`{.action}.
- Po zaktualizowaniu informacji dotyczących *rejestru* odczekaj maksymalnie **48 godzin**, aby wprowadzone zmiany stały się widoczne i widoczne.

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Informacje o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Modyfikacja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).