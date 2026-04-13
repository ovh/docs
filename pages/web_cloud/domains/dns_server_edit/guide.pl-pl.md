---
title: "Zmiana serwerów DNS nazwy domeny OVHcloud"
excerpt: "Dowiedz się, jak zmienić serwery DNS Twojej nazwy domeny zarejestrowanej w OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Skrót **DNS** (**D**omain **N**ame **S**ystem) to zbiór elementów (serwery DNS, strefy DNS, etc.) pozwalających na powiązanie nazwy domeny z adresem IP.

Więcej informacji znajdziesz w przewodnikach "[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)" i "[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Dowiedz się, jak w 3 krokach zmienić serwery DNS Twojej nazwy domeny OVHcloud.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [nazwy domeny](/links/web/domains) zarejestrowanej w OVHcloud.
- Posiadanie [odpowiednich uprawnień do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) nazwą domeny.

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> **Operator** jest organizacją uprawnioną do sprzedaży nazw domen. Do tych **operatorów** należy OVHcloud.
>
> Jeśli Twoja nazwa domeny nie jest zarejestrowana w OVHcloud, zmodyfikuj serwery DNS u **operatora**, u którego jest aktualnie zarejestrowana Twoja nazwa domeny.

## W praktyce

> [!alert]
>
> **Zachowaj ostrożność podczas modyfikacji serwerów DNS nazwy domeny.**
>
> Błąd w konfiguracji może spowodować niedostępność Twojej strony WWW lub uniemożliwić otrzymywanie nowych wiadomości e-mail. Zrozumienie konsekwencji takiej zmiany pozwoli Ci lepiej przygotować się do wprowadzanych modyfikacji.

Kiedy zmieniasz serwery DNS Twojej nazwy domeny, zmieniasz jej konfigurację DNS. Nowa konfiguracja DNS zastępuje poprzednią i jest przechowywana na nowo zdefiniowanych serwerach DNS. Z technicznego punktu widzenia nazwa domeny korzysta wówczas z nowej strefy DNS.

Należy jednak wziąć pod uwagę następujące kwestie:

- W przypadku zmiany serwerów DNS (np. z zewnętrznego DNS na DNS OVHcloud) zawartość poprzedniej konfiguracji / strefy DNS nie jest automatycznie kopiowana do nowej. Upewnij się, że nowa strefa DNS zawiera wszystkie rekordy DNS wymagane do prawidłowego działania usług powiązanych z Twoją nazwą domeny (np. strona WWW i konta e-mail).
- Jeśli nie chcesz modyfikować serwerów DNS, lecz jeden lub więcej rekordów aktualnej konfiguracji / strefy DNS, zapoznaj się z naszym przewodnikiem: "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
- Niektóre organizacje (rejestry) zarządzające rozszerzeniami nazw domen mają określone wymagania dotyczące serwerów DNS (liczba serwerów nazw, wartość rekordów, etc.). W razie wątpliwości skontaktuj się z rejestrem odpowiedzialnym za daną nazwę domeny.

### 1 - Zmiana serwerów DNS <a name="modify-dns-servers"></a>

Zmiana serwerów DNS Twojej nazwy domeny może być konieczna w następujących sytuacjach:

- Chcesz korzystać z serwerów DNS dostarczanych przez OVHcloud.
- Chcesz korzystać z własnych serwerów DNS (lub serwerów DNS dostarczanych przez zewnętrznego dostawcę DNS).
- Chcesz połączyć korzystanie z serwerów DNS OVHcloud z własnymi serwerami DNS.

> [!primary]
>
> Gdy korzystasz z serwerów DNS OVHcloud, numery zawarte w nazwach serwerów nie mają żadnego związku z używanymi przez Ciebie usługami. Tylko opcja [DNS anycast](/links/web/domains-options) używa określonych serwerów DNS (`ns200.anycast.me` i `dns200.anycast.me`). Są one automatycznie przypisywane po wykupieniu usługi.

**Kliknij poniższe opcje, aby wyświetlić ich zawartość.**

/// details | Opcja 1 — Użyj domyślnych serwerów DNS OVHcloud

<!-- CP-STEPS-START:opcja-1-domyslne-serwery-dns -->
Ta opcja pozwala na automatyczne zastosowanie istniejącej konfiguracji strefy DNS OVHcloud dla Twojej nazwy domeny. Upewnij się wcześniej, że dla Twojej nazwy domeny istnieje strefa DNS w OVHcloud.

> [!primary]
>
> W razie potrzeby zapoznaj się z przewodnikami "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" i/lub "[Tworzenie strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)", aby sprawdzić, czy dla Twojej nazwy domeny istnieje strefa DNS OVHcloud.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po wybraniu nazwy domeny.
>>
> **Krok 3**
>>
>> Wyświetlona tabela zawiera listę serwerów DNS aktualnie zdefiniowanych przez OVHcloud dla Twojej nazwy domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednemu wierszowi w tabeli.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się pod tabelą.
>>
> **Krok 4**
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}
>>
>> Aby użyć domyślnych serwerów DNS OVHcloud, kliknij `Zastosuj konfigurację`{.action}. Pojawi się następujące okno:
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}
>>
>> Zawiera ono nazwy 2 serwerów DNS, które zostaną zastosowane do Twojej nazwy domeny. Muszą one mieć jedną z 3 następujących form:
>>
>> - `nsXX.ovh.net` i `dnsXX.ovh.net` lub `nsXXX.ovh.net` i `dnsXXX.ovh.net` (gdzie każdy `X` reprezentuje cyfrę między **0** a **9**)
>> - `nsXX.ovh.ca` i `dnsXX.ovh.ca` lub `nsXXX.ovh.ca` i `dnsXXX.ovh.ca` (gdzie każdy `X` reprezentuje cyfrę między **0** a **9**)
>> - `ns200.anycast.me` i `dns200.anycast.me` (jeśli wykupiłeś opcję [DNS anycast](/links/web/domains-options))
>>
>> Jeśli odpowiadają one tym, które chcesz zastosować, kliknij `Zastosuj`{.action}.
>>
>> W ten sposób dla Twojej nazwy domeny zostaną użyte 2 serwery DNS zadeklarowane (w rekordach typu NS strefy DNS OVHcloud).

Poprzednio zadeklarowane serwery DNS i stosowana przez nie konfiguracja DNS zostaną wyłączone dla Twojej nazwy domeny. Strefa DNS OVHcloud stanie się aktywną strefą DNS dla Twojej nazwy domeny.
<!-- CP-STEPS-END:opcja-1-domyslne-serwery-dns -->

///

/// details | Opcja 2 — Użyj własnych serwerów DNS

<!-- CP-STEPS-START:opcja-2-wlasne-serwery-dns -->
Ta opcja pozwala na zadeklarowanie serwerów DNS strefy DNS niezarządzanej z poziomu Panelu klienta OVHcloud.

Może to być na przykład:

- zewnętrzne serwery DNS dostarczane przez jednego z naszych konkurentów;
- własne serwery DNS, jeśli hostujesz strefę DNS na jednym z Twoich serwerów. Serwery DNS mogą być również hostowane w infrastrukturze OVHcloud (serwer dedykowany, VPS, etc.).

> [!success]
>
> Przed dodaniem serwera DNS sprawdź, czy jest **dostępny** i czy zawiera strefę DNS dla Twojej nazwy domeny. Upewnij się również, że ta strefa DNS zawiera wszystkie rekordy typu NS dla wszystkich serwerów DNS, które zamierzasz zadeklarować dla Twojej nazwy domeny.
>
> Na przykład: chcesz zadeklarować serwery DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* i *ns3.dns-server.tld* dla Twojej nazwy domeny. Sprawdź, czy w 3 strefach DNS hostowanych na tych 3 serwerach DNS widoczne są następujące trzy rekordy typu NS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.

Kliknij poniższe karty, aby wyświetlić kolejne **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po wybraniu nazwy domeny.
>>
> **Krok 3**
>>
>> Wyświetlona tabela zawiera listę serwerów DNS aktualnie zdefiniowanych przez OVHcloud dla Twojej nazwy domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednemu wierszowi w tabeli.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się pod tabelą.
>>
> **Krok 4**
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}
>>
>> Aby wprowadzić jeden z własnych serwerów DNS, wypełnij 2 pola formularza w ramce jak poniżej:
>>
>> - `Serwer DNS`: nazwa serwera DNS, który ma zostać zastosowany do Twojej nazwy domeny.
>> - `Przypisane IP (opcjonalnie)`: adres IP (IPv4 lub IPv6) wprowadzonego serwera DNS. W tym formularzu można podać tylko **jeden adres IP**.
>>
>> > [!warning]
>> >
>> > Każde pole (widoczne na poprzednim zrzucie ekranu) może zawierać tylko **jeden** serwer DNS. Jeden serwer DNS odpowiada jednemu polu.
>> >
>> > Ponadto niebieska nota informacyjna umieszczona nad pierwszym polem wskazuje zakres serwerów DNS, które możesz zadeklarować dla Twojej nazwy domeny. Wartości te różnią się w zależności od rozszerzenia nazwy domeny.
>>
> **Krok 5**
>>
>> Po wpisaniu informacji kliknij przycisk `+`{.action} znajdujący się po prawej stronie 2 pól formularza. Spowoduje to dodanie serwera DNS i wyświetlenie nowego pola pod poprzednim.
>>
>> Powtórz operację dla każdego serwera DNS, który chcesz dodać, przestrzegając limitów wskazanych w nocie informacyjnej.
>> Kliknij przycisk `+`{.action} dla każdego serwera DNS, aby zatwierdzić jego wprowadzenie i dodanie.
>>
>> Po dodaniu wszystkich własnych serwerów DNS kliknij `Zastosuj konfigurację`{.action}. Pojawi się następujące okno:
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}
>>
>> Zawiera ono podsumowanie nazw serwerów DNS, które zostaną zastosowane do Twojej nazwy domeny.
>> Jeśli odpowiadają one tym, które chcesz zastosować, kliknij `Zastosuj`{.action}.

Poprzednio zadeklarowane serwery DNS i stosowana przez nie konfiguracja DNS zostaną wyłączone dla Twojej nazwy domeny. Strefa DNS zadeklarowana na Twoich własnych serwerach DNS stanie się aktywną strefą DNS dla Twojej nazwy domeny.
<!-- CP-STEPS-END:opcja-2-wlasne-serwery-dns -->

///

/// details | Opcja 3 — Użyj serwerów DNS OVHcloud i własnych serwerów DNS

<!-- CP-STEPS-START:opcja-3-serwery-ovhcloud-i-wlasne -->
Ta opcja pozwala na połączenie korzystania z własnych serwerów DNS przy jednoczesnym zachowaniu aktywnych serwerów DNS OVHcloud dla Twojej nazwy domeny. Ta kombinacja pozwala na przykład na zapewnienie większej dostępności różnych usług powiązanych z Twoją nazwą domeny (hosting WWW, serwery e-mail, etc.). Jeśli jedna grupa serwerów DNS stanie się niedostępna na kilka minut, inne zadeklarowane serwery DNS mogą przejąć jej zadania.

Upewnij się jednak, że konfiguracje stref DNS na poszczególnych serwerach DNS są poprawnie skonfigurowane i mogą ze sobą współpracować. W większości przypadków wszystkie serwery DNS będą operacyjne. Wszystkie będą w stanie odpowiedzieć na żądania kierowane do nich losowo w sieci DNS.

> [!warning]
>
> 1. Zachowaj ostrożność, jeśli zdecydujesz się skorzystać z tej ostatniej opcji. Wymaga to zaawansowanej wiedzy na temat działania sieci DNS, serwerów DNS i stref DNS.
> 2. Opcja [DNSSEC](/pages/web_cloud/domains/dns_dnssec) musi być wyłączona, aby połączyć korzystanie z Twoich własnych serwerów DNS z serwerami DNS OVHcloud.
> 3. Upewnij się, że nie łączysz jednej grupy serwerów DNS OVHcloud z inną grupą serwerów DNS OVHcloud. Na przykład *dns19.ovh.net* i *ns19.ovh.net* odpowiadają jednej grupie serwerów DNS OVHcloud, są ze sobą powiązane i zsynchronizowane. W OVHcloud grupy serwerów DNS są identyfikowane na podstawie numeru zawartego w nazwach serwerów. Dwa serwery DNS OVHcloud należą do tej samej grupy, jeśli mają ten sam numer. Na przykład *dns19.ovh.net* i *ns19.ovh.net*.

> [!success]
>
> Przed dodaniem serwera DNS sprawdź, czy jest **dostępny** i czy zawiera strefę DNS dla Twojej nazwy domeny. Upewnij się również, że ta strefa DNS zawiera wszystkie rekordy typu NS dla wszystkich serwerów DNS, które zamierzasz zadeklarować dla Twojej nazwy domeny.
>
> Na przykład: chcesz zadeklarować serwery DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* i *nsXX.ovh.net* dla Twojej nazwy domeny. Sprawdź, czy w 3 strefach DNS hostowanych na tych 3 serwerach DNS widoczne są następujące trzy rekordy typu NS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.

Kliknij poniższe karty, aby wyświetlić kolejne **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wybierz zakładkę `Serwery DNS`{.action} po wybraniu nazwy domeny.
>>
> **Krok 3**
>>
>> Wyświetlona tabela zawiera listę serwerów DNS aktualnie zdefiniowanych przez OVHcloud dla Twojej nazwy domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednemu wierszowi w tabeli.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Kliknij przycisk `Zmień serwery DNS`{.action} znajdujący się po prawej stronie tabeli "Serwery DNS". W zależności od rozdzielczości ekranu przycisk może znajdować się pod tabelą.
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}
>>
> **Krok 4**
>>
>> Aby wprowadzić jeden z własnych serwerów DNS, wypełnij 2 pola formularza w ramce jak poniżej:
>>
>> - `Serwer DNS`: nazwa serwera DNS, który ma zostać zastosowany do Twojej nazwy domeny.
>> - `Przypisane IP (opcjonalnie)`: adres IP (IPv4 lub IPv6) wprowadzonego serwera DNS. W tym formularzu można podać tylko **jeden adres IP**.
>>
>> > [!warning]
>> >
>> > Każde pole (widoczne na poprzednim zrzucie ekranu) może zawierać tylko **jeden** serwer DNS. Jeden serwer DNS odpowiada jednemu polu.
>> >
>> > Ponadto niebieska nota informacyjna umieszczona nad pierwszym polem wskazuje zakres serwerów DNS, które możesz zadeklarować dla Twojej nazwy domeny. Wartości te różnią się w zależności od rozszerzenia nazwy domeny.
>>
>> Po wpisaniu informacji kliknij przycisk `+`{.action} znajdujący się po prawej stronie 2 pól formularza. Spowoduje to dodanie serwera DNS i wyświetlenie nowego pola pod poprzednim.
>>
>> Powtórz operację dla każdego serwera DNS, który chcesz dodać, przestrzegając limitów wskazanych w nocie informacyjnej.
>> Kliknij przycisk `+`{.action} dla każdego serwera DNS, aby zatwierdzić jego wprowadzenie i dodanie.
>>
> **Krok 5**
>>
>> Po dodaniu wszystkich własnych serwerów DNS kliknij `Zastosuj konfigurację`{.action}. Pojawi się następujące okno:
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}
>>
>> Zawiera ono podsumowanie nazw serwerów DNS, które zostaną zastosowane do Twojej nazwy domeny.
>> Jeśli odpowiadają one tym, które chcesz zastosować, kliknij `Zastosuj`{.action}.

Poprzednio zadeklarowane serwery DNS i stosowana przez nie konfiguracja DNS zostaną wyłączone dla Twojej nazwy domeny. Strefy DNS na Twoich własnych serwerach DNS oraz na serwerach DNS OVHcloud staną się aktywnymi strefami dla Twojej nazwy domeny.
<!-- CP-STEPS-END:opcja-3-serwery-ovhcloud-i-wlasne -->

///

### 2 - Propagacja zmian serwerów DNS

Po wprowadzeniu modyfikacji należy uwzględnić dwa następujące po sobie okresy:

- *Rejestr* zarządzający rozszerzeniem Twojej nazwy domeny (np. rejestr rozszerzeń *.fr*) musi zostać poinformowany o zmianie DNS wprowadzonej po stronie OVHcloud. Postęp operacji można śledzić na stronie [Operacje w toku](/links/control-panel/web-ongoing-operations).
- Po zaktualizowaniu informacji w *rejestrze* odczekaj maksymalnie **48 godzin**, aż zmiany zostaną w pełni rozpropagowane i będą skuteczne.

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
