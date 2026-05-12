---
title: "Transfer nazwy domeny .uk do innego operatora"
excerpt: "Dowiedz się, jak wykonać transfer nazwy domeny wychodzącej z nazwy domeny UK do innego operatora"
updated: 2026-03-13
---

## Wprowadzenie

Proces zmiany operatora nazwy domeny *najwyższego poziomu* (*top-level domain*, lub **TLD**) dla nazwy domeny najwyższego poziomu **UK** (**.uk**) różni się od tego wyszczególnionego w naszym [przewodniku transferu nazw domen globalnych](/pages/web_cloud/domains/transfer_outgoing_domain). Poniższe instrukcje dotyczą następujących rozszerzeń:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Niniejszy przewodnik wyjaśnia, jak rozpocząć transfer wychodzący dla tych nazw domen w Panelu klienta OVHcloud.**

> [!warning]
>
> Jeśli nazwa domeny ma pozostać zarejestrowana w OVHcloud, ale została zmieniona w sposób umożliwiający zarządzanie nazwą domeny lub jej abonament, transfer wychodzący z nazwy domeny nie jest właściwą procedurą.
>
> Aby przenieść zarządzanie nazwą domeny na inne konto klienta OVHcloud, należy zmienić kontakt. Procedurę opisano w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
>
> Jeśli chcesz zmienić również **abonenta** nazwy domeny, musisz to zrobić **przed** zmianą kontaktów nazwy domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku OVHcloud dotyczącym [zmiany abonenta nazw domen](/pages/web_cloud/domains/trade_domain).
>

## Wymagania początkowe

- Posiadanie [nazwy domeny .uk](/links/web/domains) zarejestrowanej w OVHcloud
- Nazwa domeny musi być zawsze aktywna, co oznacza, że nie wygasła lub nie może zostać zablokowana przez OVHcloud
- Nazwa domeny nie może być przedmiotem sporu toczącego się w rejestrze [Nominet](https://www.nominet.uk/)

<!-- CP-NAV-START:web-domains -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Domeny](/links/control-panel/web-domains)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Domeny`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-domains -->


> [!primary]
>
> Jeśli nazwa domeny wygasła **mniej niż 90 dni** temu, nadal może być przeniesiona. Skontaktuj się z naszym zespołem pomocy technicznej, tworząc wniosek o wsparcie w Panelu klienta OVHcloud, aby odblokować nazwę domeny do transferu.
>
> Jeśli jesteś **abonentem** nazwy domeny, ale nie możesz nią zarządzać w Panelu klienta OVHcloud, ani poprzez własny dostęp, ani poprzez kontakt administracyjny, zapoznaj się z [tym przewodnikiem](/pages/account_and_service_management/account_information/managing_contacts) przed kontynuowaniem.
>

## W praktyce

Każdy z tych TLD posiada *TAG* odpowiadający aktualnemu operatorowi nazw domen, takiemu jak OVHcloud. Transfer rozpoczyna się od zastąpienia TAG identyfikatorem nowego operatora.

Jeśli nie znasz jeszcze wymaganego wpisu TAG, możesz złożyć wniosek u nowego operatora lub sprawdzić [listę rejestratorów Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### 1 - Zmień TAG Twojej nazwy domeny, aby zainicjować transfer do innego operatora

> [!primary]
>
> Aby wykonać te czynności, musisz być zalogowany jako [administrator](/pages/account_and_service_management/account_information/managing_contacts).

W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Domeny](/links/control-panel/web-domains), następnie wybierz odpowiednią domenę.
>>
>> ![Panel klienta OVHcloud - lista nazw domen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Krok 2**
>>
>> W sekcji **Konfiguracja** kliknij link `Tag transferu wychodzącego`{.action}.
>>
>> ![transfer wychodzący](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie, które się wyświetli wprowadź TAG nowego operatora, po czym kliknij `Zatwierdź`{.action}.
>>
>> ![transfer wychodzący](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.png){.thumbnail}

Jeśli nie możesz zmienić wpisu TAG Twojej nazwy domeny w Panelu klienta, możesz zlecić jego zmianę w rejestrze Nominet. Więcej informacji znajduje się na oficjalnej [stronie internetowej Nominet](https://www.nominet.uk/domain-support/).

### 2 - Sprawdź proces transferu u nowego operatora

Zmiana znacznika TAG aktywuje proces transferu.

Skontaktuj się z nowym dostawcą, aby uzyskać więcej informacji oraz wszelkie pytania dotyczące śledzenia transferu.

## Sprawdź również

[Transfer nazwy domeny do innego operatora](/pages/web_cloud/domains/transfer_outgoing_domain)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Dołącz do [grona naszych użytkowników](/links/community).
