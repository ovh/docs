---
title: "Transfer domeny .uk do innego operatora"
excerpt: "Dowiedz się, jak wykonać transfer domeny wychodzącej z domeny UK do innego operatora"
updated: 2022-10-19
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Proces zmiany operatora domeny *najwyższego poziomu* (*top-level domain*, lub **TLD**) dla domeny najwyższego poziomu **UK** (**.uk**) różni się od tego wyszczególnionego w naszym [przewodniku transferu domen globalnychKET](/pages/web_cloud/domains/transfer_outgoing_domain). Poniższe instrukcje dotyczą następujących rozszerzeń:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Niniejszy przewodnik wyjaśnia, jak rozpocząć transfer wychodzący dla tych domen w Panelu klienta OVHcloud.**

> [!warning]
>
> Jeśli domena ma pozostać zarejestrowana w OVHcloud, ale została zmieniona w sposób umożliwiający zarządzanie domeną lub jej własność, transfer wychodzący z domeny nie jest właściwą procedurą.
>
> Aby przenieść zarządzanie domeną na inne konto klienta OVHcloud, należy zmienić kontakt. Procedurę opisano w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
>
> Jeśli chcesz zmienić również **właściciela** domeny, musisz to zrobić **przed** zmianą kontaktów domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku OVHcloud dotyczącym [zmiany właściciela domen](/pages/web_cloud/domains/trade_domain).
>

## Wymagania początkowe

- Posiadanie [domeny .uk](/links/web/domains) zarejestrowanej w OVHcloud
- Dostęp do [Panelu client OVHcloud](/links/manager) i posiadanie uprawnień niezbędnych do zarządzania domeną (administrator domeny)
- Nazwa domeny musi być zawsze aktywna, co oznacza, że nie wygasła lub nie może zostać zablokowana przez OVHcloud
- Nazwa domeny nie może być przedmiotem sporu toczącego się w rejestrze [Nominet](https://www.nominet.uk/)

> [!primary]
>
> Jeśli jesteś **właścicielem** domeny, ale zarządzanie nią w Panelu klienta OVHcloud jest niedostępne, zarówno poprzez własny dostęp, jak i poprzez kontakt administracyjny domeny, zapoznaj się z [tym przewodnikiem](/pages/account_and_service_management/account_information/managing_contacts#przypadek-wlasciciela-domeny).
>
> Jeśli domena wygasła na **mniej niż 90 dni**, nadal może być przeniesiona. Prosimy o kontakt z naszym zespołem pomocy technicznej poprzez utworzenie wniosku o wsparcie w Panelu client OVHcloud, aby odblokować nazwę domeny do transferu.
>

## W praktyce

Każdy z tych TLD posiada *TAG* odpowiadający aktualnemu operatorowi domen, takiemu jak OVHcloud. Transfer rozpoczyna się od zastąpienia APR identyfikatorem nowego operatora.

Jeśli nie znasz jeszcze wymaganego wpisu TAG, możesz złożyć wniosek u nowego operatora lub sprawdzić [listę rejestratorów Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### Etap 1: sprawdzenie niezbędnych informacji

Zaloguj się do [Panelu client OVHcloud](/links/manager) wybierz `Web Cloud`{.action}. Kliknij `Domeny`{.action}, po czym wybierz odpowiednią nazwę domeny.

Pamiętaj, że musisz być zalogowany jako kontakt administracyjny.

W zakładce `Informacje ogólne`{.action} możesz sprawdzić, czy spełnione są warunki niezbędne do przeprowadzenia procesu transferu.

### Etap 2: zmień APR dla Twojej domeny

Kliknij link `Tag transferu wychodzącego`{.action} w sekcji zatytułowanej **Bezpieczeństwo**.

![transfer wychodzący](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.jpg){.thumbnail}

W oknie, które się wyświetli wprowadź TAG nowego operatora, po czym kliknij `Zatwierdź`{.action}.

![transfer wychodzący](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.jpg){.thumbnail}

Jeśli nie możesz zmienić wpisu TAG Twojej domeny w Panelu klienta, możesz zlecić jego zmianę w rejestrze Nominet. Więcej informacji znajduje się na oficjalnej [stronie internetowej Nominet](https://www.nominet.uk/domain-support/).

### Etap 3: sprawdź proces transferu u nowego operatora

Zmiana znacznika TAG aktywuje proces transferu.

Skontaktuj się z nowym dostawcą, aby uzyskać więcej informacji oraz wszelkie pytania dotyczące śledzenia transferu.

## Sprawdź również

[Transfer domeny do innego operatora](/pages/web_cloud/domains/transfer_outgoing_domain)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Fale com nossa [comunidade de utilizadores](/links/community).