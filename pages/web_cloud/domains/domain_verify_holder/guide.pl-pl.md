---
title: "Popraw dane właściciela domeny"
excerpt: "Dowiedz się, jak poprawić lub uzupełnić dane kontaktowe właściciela domeny po otrzymaniu e-maila z alertem od OVHcloud"
updated: 2025-05-21
---

## Wprowadzenie

Właśnie otrzymałeś od OVHcloud e-maila z informacją, że Twoja domena wymaga podjęcia działań? E-mail ten zawiera również informację, że dane kontaktowe (dane kontaktowe) właściciela domeny muszą zostać poprawione lub uzupełnione?

**Dowiedz się, jak poprawić lub uzupełnić dane kontaktowe właściciela domeny po otrzymaniu od OVHcloud e-maila z alertem.**

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains) zarejestrowanej w OVHcloud.
- Dostęp do [panelu klienta OVHcloud](/links/manager).
- Otrzymałeś od OVHcloud e-mail z informacją, że należy podjąć działania w odniesieniu do danych właściciela Twojej domeny.
- Aby upewnić się, że to nie jest fałszywa wiadomość e-mail, należy sprawdzić następujące elementy:
    - Temat e-maila zawiera Twój identyfikator klienta (na przykład: `aa00000-ovh`) oraz Twoją domenę (na przykład: `domain.tld`).
    - Adres URL podany w e-mailu zaczyna się od: `https://www.ovh.com/manager/#/web/domain/operation/`.

## W praktyce

### 1 - Popraw lub uzupełnij dane/dane kontaktowe właściciela domeny

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **5**.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Domeny`{.action}, następnie wybierz odpowiednią domenę.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli, sprawdź najpierw, czy procedura dotyczy Twojej domeny, na pasku (żółty lub czerwony) wskazującym, jaką operację chcesz przeprowadzić.
>>
>> Następnie pojawi się informacja **Kontakty** w ramce **Abonament**. Kliknij przycisk `...`{.action} po prawej stronie, a następnie `Zarządzanie kontaktami`{.action}.
>>
>> ![Change owner](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na nowej stronie przejdź do pola **Właściciel**, następnie kliknij przycisk `Zmodyfikuj`{.action}.
>>
>> ![Manage contacts and owners](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/manage-contacts-and-owners.png){.thumbnail}
>>
> **Etap 5**
>>
>> > [!warning]
>> >
>> > Każda zmiana imienia, nazwiska, organizacji, statusu prawnego lub adresu e-mail właściciela jest traktowana jako zmiana **właściciela**.
>> >
>> > Jeśli zmieniasz **tylko** dane właściciela inne niż wymienione powyżej, wprowadź zmiany bezpośrednio i kliknij `Zatwierdź`{.action}. W tym przypadku nie jest konieczne zlecenie zmiany właściciela. W tym celu nie musisz potwierdzać zmian w e-mailu.
>> >
>> > Jeśli jest to konieczne i aby rozpocząć zmianę właściciela, kliknij na link znajdujący się na dole strony i zatytułowany `Kliknij tutaj, aby kontynuować`{.action}.
>>
>> ![Owner informations](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/owner.png){.thumbnail}
>>
>> Więcej informacji na temat zmiany właściciela znajdziesz w naszym przewodniku: "[Domena - Jak zmienić właściciela?](/pages/web_cloud/domains/trade_domain)".

### 2 - Uruchom ponownie operację weryfikacji danych kontaktowych/danych kontaktowych właściciela domeny

> [!warning]
>
> Jeśli poprawki wprowadzone zgodnie z pierwszą częścią tego przewodnika wymagały zainicjowania zmiany właściciela dla domeny, zakończ najpierw operację zmiany właściciela **przed** wykonaniem czynności opisanych w tym przewodniku.
>

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **4**.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Operacje w Toku`{.action}, następnie znajdź odpowiednią domenę na liście, która się wyświetli.
>>
>> ![Operacje w toku](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations.png){.thumbnail}
>>
> **Etap 3**
>>
>> Kliknij przycisk `⁝`{.action} po prawej stronie, a następnie `Zmień operację`{.action}.
>>
>> ![Domain name operation](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations/contact-correction.png){.thumbnail}
>>
> **Etap 4**
>>
>> W wyświetlonym oknie zaznacz opcję `Wznów operację`{.action}, następnie kliknij `Zatwierdź`{.action}.
>>
>> ![Operation data on domain](/pages/assets/screens/control_panel/product-selection/web-cloud/ongoing-operations/contact-correction-relaunch-operation.png){.thumbnail}

Zakończenie operacji zajmuje kilka minut. Odśwież stronę `Operacje na moich domenach`, na której znajdowała się operacja poprawiania kontaktów dla Twojej domeny.

Jeśli operacja zakończy się pomyślnie, wiersz odnoszący się do przetworzonej operacji nie będzie już wyświetlany.

W razie potrzeby oznacza to, że zawsze konieczne jest wprowadzenie poprawki na poziomie danych właściciela domeny. W takim przypadku, zapoznaj się z tym przewodnikiem od początku, aby naprawić sytuację.

## Sprawdź również

[Domena - Jak zmienić właściciela?](/pages/web_cloud/domains/trade_domain)

[Zarządzanie kontaktami swoich usług](/pages/account_and_service_management/account_information/managing_contacts).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).