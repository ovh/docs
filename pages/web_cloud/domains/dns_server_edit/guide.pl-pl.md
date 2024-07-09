---
title: 'Zmiana serwerów DNS domeny w OVHcloud'
excerpt: 'Dowiedz się, jak zmodyfikować serwery DNS Twojej domeny w OVHcloud'
updated: 2024-06-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Skrót DNS oznaczający **D**omain **N**ame **S**ystem, to zbiór elementów (serwery DNS, strefy DNS itp.) pozwalających na dopasowanie nazwy domeny z adresem IP.

Zapoznaj się z przewodnikami "[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)" i "[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)", aby uzyskać więcej informacji.

**Dowiedz się, jak modyfikować serwery DNS Twojej domeny OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains) zarejestrowanej w OVHcloud.
- Posiadanie uprawnień [do zarządzania](/pages/account_and_service_management/account_information/managing_contacts) domeny z poziomu [Panelu klienta OVHcloud](/links/manager){.external}.
- Dostęp do [panelu klienta OVHcloud](/links/manager){.external}.

> [!primary]
>
> *Registrar* to firma upoważniona do sprzedaży domen. OVHcloud jest jednym z tych *Registrars*.
>
> Jeśli Twoja domena nie jest zarejestrowana w OVHcloud, zmodyfikuj serwery DNS u *Registrar*, u którego zarejestrowana jest aktualnie Twoja domena.
>

## W praktyce

> [!warning]
>
> **Należy zachować ostrożność podczas modyfikacji serwerów DNS domeny.** Błąd podczas obsługi może spowodować niedostępność Twojej strony WWW lub uniemożliwić otrzymywanie nowych wiadomości e-mail. Zrozumienie konsekwencji takiej zmiany pozwoli Ci lepiej zrozumieć, jaką zmianę wprowadzisz.
>

Kiedy zmieniasz serwery DNS Twojej domeny, zmieniasz jej konfigurację DNS. Nowa konfiguracja DNS zastępuje poprzednią i jest przechowywana na nowych serwerach DNS. Z technicznego punktu widzenia domena używa nowej strefy DNS.

Należy jednak pamiętać, że:

- Podczas zmiany serwera DNS (np. DNS zewnętrzny (DNS OVHCloud), zawartość starej konfiguracji / strefy DNS nie jest automatycznie kopiowana do nowej. Upewnij się, że nowa strefa DNS zawiera wszystkie rekordy DNS wymagane do prawidłowego działania usług powiązanych z Twoją domeną (np. strona WWW i konta e-mail).

- Jeśli chcesz zmienić nie serwery DNS, ale jeden lub więcej rekordów aktualnej konfiguracji / strefy DNS, zapoznaj się z naszym przewodnikiem: "[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- Niektóre organizacje lub operatorzy zarządzający rozszerzeniami domen mają określone wymagania dotyczące serwerów DNS (liczba serwerów nazw, wartość rekordów, etc.). W razie wątpliwości sprawdź wymagania u operatora domeny.

Upewnij się, że wprowadzone zmiany nie uniemożliwią dostępu do Twojej domeny. Jeśli nie jesteś tego pewien, skontaktuj się z osobą, która poprosiła Cię o wprowadzenie tych zmian.

### Dostęp do zarządzania serwerami DNS OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](/links/manager){.external} i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij `Domeny`{.action}, następnie wybierz odpowiednią domenę. Wybierz zakładkę `Serwery DNS`{.action}.

Tabela, która się wyświetla zawiera listę serwerów DNS zdefiniowanych aktualnie przez OVHcloud dla Twojej domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednej linii w tabeli.

> [!primary]
>
> Gdy korzystasz z serwerów DNS OVHcloud, numery zawarte w nazwach serwerów nie mają żadnego związku z używanymi przez Ciebie usługami. Tylko opcja [DNS anycast](/links/web/domains-options) używa określonych serwerów DNS, które są automatycznie przypisywane. 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Zmień serwery DNS

Jeśli chcesz korzystać z zewnętrznych serwerów DNS, musisz zastąpić serwery DNS OVHcloud tymi zewnętrznymi serwerami DNS, a nie dodawać oba razem.

Kliknij przycisk `Zmień serwery DNS`{.action} po prawej stronie.

W formularzach wprowadzania należy **zastąpić** aktualne wartości serwerów DNS informacjami o nowych serwerach DNS, które mają zostać ustawione. Aby dodać nowe serwery do aktualnej listy, kliknij przycisk `+`{.action} po prawej stronie w ostatniej linii tabeli. W tabeli, którą możesz uzupełnić, pojawi się dodatkowy wiersz.

> [!warning]
>
> Nie mieszaj grupy serwerów DNS z innymi serwerami. 
>
> Na przykład *dns19.ovh.net* i *ns19.ovh.net* odpowiadają grupie serwerów DNS OVHcloud, idą w parze i są synchronizowane. Jeśli dodajesz do tego zewnętrzne serwery DNS OVHcloud (lub inną grupę OVHcloud), rozdzielczość DNS będzie losowa między serwerami DNS OVHcloud i wskazanymi zewnętrznymi serwerami DNS.
>
> W OVHCloud grupy serwerów DNS są identyfikowane przy użyciu numeru obecnego w nazwach serwerów. Dwa serwery DNS OVHcloud należą do tej samej grupy serwerów, jeśli dzielą one ten sam numer. Na przykład *dns19.ovh.net* i *ns19.ovh.net*.
>

Po wpisaniu informacji, kliknij przycisk `Zastosuj konfigurację`{.action}. Statusy serwerów DNS zostaną zaktualizowane w tabeli i pojawią się nowe informacje, które właśnie podałeś.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/edit-dns-servers.png){.thumbnail}

> [!success]
>
> Zmiana serwerów DNS przypisanych do domeny spowoduje maksymalną propagację w czasie od **24** do **48** godzin, zanim efekty tej modyfikacji staną się widoczne.
>

### Przypadki szczególne: Zresetuj serwery DNS 

Przycisk `Resetuj serwery DNS`{.action} pozwala zresetować aktualne serwery DNS, zastępując je automatycznie serwerami DNS OVHcloud, z których pochodzą. Użyj tej opcji **tylko**, jeśli chcesz ponownie korzystać z serwerów DNS OVHcloud (oraz strefy DNS OVHcloud powiązanej z serwerami DNS OVHcloud). 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/reset-the-dns-servers.png){.thumbnail}

Po zakończeniu operacji należy odczekać określony czas, zanim zmiany staną się widoczne. Na czas oczekiwania składają się dwa czynniki:

- zmiana wprowadzona w OVHcloud musi zostać uwzględniona przez *registry* zarządzający rozszerzeniem Twojej domeny (na przykład rejestr rozszerzeń *.pl*). Możesz śledzić postęp operacji w [Panelu klienta OVHcloud](/links/manager){.external}. W tym celu przejdź do sekcji `Web Cloud`{.action}, przejdź do sekcji `Domeny`{.action} w kolumnie po lewej stronie, następnie kliknij `Operacje w toku`{.action}.
- po uwzględnieniu zmiany przez organizację zarządzającą rozszerzeniem domeny konieczny jest maksymalny czas propagacji wynoszący **48 godzin**, aby modyfikacje stały się w pełni widoczne.

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Modyfikacja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).