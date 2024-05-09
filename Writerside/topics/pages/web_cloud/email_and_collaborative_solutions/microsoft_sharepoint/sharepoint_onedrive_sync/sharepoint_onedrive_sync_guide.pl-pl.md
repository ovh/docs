---
title: "Sharepoint : synchronizacja danych na komputerze"
excerpt: Dowiedz się, jak utworzyć kopię zapasową danych z usługi Sharepoint OVHcloud na Twoim komputerze
updated: 2023-09-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Jeśli chcesz pobrać lub przenieść dane z Twojej platformy SharePoint OVHcloud, w niniejszym przewodniku znajdziesz czynności niezbędne do wyodrębnienia wszystkich danych do lokalnej pamięci masowej Twojego komputera.

**Dowiedz się, jak utworzyć kopię zapasową danych z usługi Sharepoint OVHcloud na Twoim komputerze.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Posiadanie [rozwiązania Sharepoint OVHcloud](https://www.ovhcloud.com/pl/collaborative-tools/sharepoint/)
- Komputer z systemem operacyjnym Microsoft Windows umożliwiający wykonanie migracji.

## W praktyce

Przewodnik podzielony jest na 4 etapy:

- [Etap 1 - Zainstaluj usługę OneDrive dla Firm](#installonedrive.): usługa OneDrive dla Firm umożliwia przeniesienie danych z programu Sharepoint na komputer
- [Etap 2 - Przygotowanie migracji w Panelu klienta OVHcloud](#controlpanelconfig.): skonfiguruj platformę Sharepoint, wyznaczając jedno konto administratora, które będzie mogło przenieść zawartość usługi OneDrive z każdego konta Sharepoint.
- [Etap 3 - Rozpocznij migrację za pomocą interfejsu Sharepoint](#migrationignition.): zaloguj się na konto wskazane w etapie 2, aby przenieść zawartość do komputera.
- [Etap 4 - Migruj zawartość innych kont programu](#migrationother.) Sharepoint — postępuj zgodnie z procedurą wyświetlania i synchronizowania zawartości usługi OneDrive dla każdego konta na platformie Sharepoint.

### Etap 1 — Zainstaluj aplikację OneDrive dla Firm <a name="installonedrive"></a>

Aby dokonać migracji danych usługi SharePoint OVHcloud, musisz użyć aplikacji OneDrive dla Firm o nazwie technicznej "Groove.exe".

Aby ją zainstalować, postępuj zgodnie z poniższymi instrukcjami:

1. Pobierz plik ISO z linku <https://download.mail.ovh.net/sharepoint/onedrive.iso>
2. Na komputerze kliknij prawym przyciskiem myszy plik `onedrive.iso`, otwórz jego `Właściwości`{.action}, zaznacz pole `Odblokuj`{.action}, kliknij `Zastosuj`{.action}, a następnie kliknij przycisk `OK`{.action}.
3. Kliknij dwukrotnie plik `onedrive.iso`, aby go otworzyć.
4. Kliknij dwukrotnie plik `setup.bat`, aby rozpocząć instalację.
5. Zaczekaj, ponieważ może to potrwać kilka minut. **Zaczekaj na zamknięcie okna**, aby zakończyć instalację.

> [!warning]
>
> Jeśli plik `setup.bat` nie zostanie poprawnie uruchomiony (w etapie 4), można skopiować zawartość pliku `onedrive.iso` do folderu na pulpicie komputera i ponownie spróbować wykonać etap 4.

![sharepoint](sharepoint-eol-00.gif){.thumbnail}

> [!primary]
>
> Jeśli ta metoda nie działa na Twoim komputerze, możesz zainstalować usługę OneDrive dla Firm zgodnie z oficjalną [procedurą firmy Microsoft](https://learn.microsoft.com/sharepoint/install-previous-sync-app#install-groove-exe-with-office-2016).

### Etap 2 - Przygotowanie migracji w Panelu klienta OVHcloud <a name="controlpanelconfig"></a>

Aby uzyskać dostęp do wszystkich obszarów usługi OneDrive w ramach usługi Sharepoint, musisz usunąć uprawnienia administratora wszystkich użytkowników w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

Przejdź do sekcji `Web Cloud`{.action} w Panelu klienta. Kliknij pozycję `Microsoft`{.action}, kliknij pozycję `Sharepoint`{.action}, a następnie wybierz odpowiednią platformę SharePoint.

W karcie `Użytkownicy`{.action} przejdź do interfejsu zarządzania kontami Sharepoint w Twojej platformie. Dla każdego konta kliknij przycisk `...`{.action} po prawej stronie, a następnie `Usuń uprawnienia administratora`{.action}.

![sharepoint](sharepoint-eol-01.png){.thumbnail}

Po usunięciu uprawnień administratora dla wszystkich kont programu SharePoint konieczne będzie wyznaczenie jednego konta, które będzie miało dostęp do wszystkich obszarów usługi OneDrive na platformie.

Włącz uprawnienia administratora dla wskazanego konta.

W karcie `Użytkownicy`{.action} Twojej usługi Sharepoint kliknij przycisk `...`{.action} po prawej stronie wskazanego konta, a następnie `Włącz uprawnienia administratora`{.action}.

![sharepoint](sharepoint-eol-02.png){.thumbnail}

Teraz możesz synchronizować wszystkie usługi OneDrive na platformie Sharepoint za pomocą tego konta.

### Etap 3 - Rozpoczęcie migracji z poziomu interfejsu Sharepoint <a name="migrationignition"></a>

Przejdź do interfejsu online Twojej usługi SharePoint. Adres URL dostępu można znaleźć w Panelu klienta OVHcloud w zakładce `Informacje ogólne`{.action}, pod nagłówkiem `URL do weryfikacji`.

![sharepoint](sharepoint-eol-03.png){.thumbnail}

Zaloguj się przy użyciu danych logowania użytkownika z uprawnieniami administratora.

![sharepoint](sharepoint-eol-04.png){.thumbnail}

Aby przejść do sekcji usługi OneDrive, kliknij ikonę w lewym górnym rogu interfejsu Sharepoint, a następnie kliknij ikonę `OneDrive`{.action}.

![sharepoint](sharepoint-eol-05.png){.thumbnail}

Aby zsynchronizować zawartość usługi OneDrive z komputerem, kliknij przycisk `Sync`{.action}, a następnie kliknij pozycję `Sync Now`{.action}.

![sharepoint](sharepoint-eol-06.png){.thumbnail}

Pojawi się okno, w którym witryna może otworzyć odnośnik **grvopen**. Aby udzielić zezwolenia, zaznacz opcję "Always allow **https://myServiceAddress.spX.ovh.net** to open **grvopen** links", a następnie kliknij przycisk `Otwórz link`{.action}.

![sharepoint](sharepoint-eol-07.png){.thumbnail}

Wprowadź dane dostępowe do konta administratora programu Sharepoint. Użyj użytkownika z uprawnieniami administratora (skonfigurowanego w [etapie 2](#controlpanelconfig.)).

![sharepoint](sharepoint-eol-08.png){.thumbnail}

Kliknij przycisk `Sync Now`{.action}.

![sharepoint](sharepoint-eol-09.png){.thumbnail}

Wybierz szablon biblioteki "**Form Templates**" w oknie "Select the library you want to sync". Następnie kliknij opcję Wybrana `Sync selected`{.action}.

![sharepoint](sharepoint-eol-10.png){.thumbnail}

Po zakończeniu tej synchronizacji na komputerze będą przesyłane na ten komputer tylko dane z konta programu Sharepoint, do którego użytkownik jest zalogowany.

**Aby przenieść zawartość z usługi OneDrive do każdego konta w platformie Sharepoint, wykonaj poniższy etap 4.**

### Etap 4 - migrowanie zawartości innych kont programu Sharepoint <a name="migrationother"></a>

Aby uzyskać dostęp do usługi OneDrive innych użytkowników platformy i synchronizować powiązane dane, musisz zmienić adres URL (w przeglądarce) po zalogowaniu się do usługi OneDrive konta administratora.

W tym celu w wyświetlającym się adresie URL zastąp "sekcję" (odpowiadającą użytkownikowi), która znajduje się między częściami `/personal/` i `/Documents/`.

- **Przykład 1**: w przypadku użytkownika **user@domain.name** znaki "**@**" i "**.**" należy zamienić na "**_**". Otrzymujesz "user_domain_name". W związku z tym Twój link będzie wyglądał następująco:

![sharepoint](sharepoint-eol-11.png){.thumbnail}

- **Przykład 2**: dla użytkownika **john.smith@example.com** otrzymujesz "john_smith_example_com". Twój link będzie wyglądał następująco:

![sharepoint](sharepoint-eol-12.png){.thumbnail}

> [!warning]
>
> Poniższe adresy URL są podane tylko w celach przykładowych. Pamiętaj, aby używać adresu URL wygenerowanego przez Twoją platformę Sharepoint.

Kolejne konta będą mogły być synchronizowane przez ponowne wykonanie tego etapu.

## Sprawdź również

[Aktywuj i zarządzaj usługą SharePoint OVHcloud](sharepoint_manage1.)

Jeśli potrzebujesz specjalistycznych usług (SEO, programowanie, etc.), skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).
Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszą [ofertą pomocy](https://www.ovhcloud.com/pl/support-levels/)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.