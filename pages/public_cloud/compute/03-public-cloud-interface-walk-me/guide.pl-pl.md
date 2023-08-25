---
title: "Poznaj interfejs Public Cloud"
excerpt: "Przewodnik po interfejsie Public Cloud do znajdowania poszczególnych sekcji"
updated: 2021-12-06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>


## Wprowadzenie

Właśnie utworzyłeś Twój projekt Public Cloud i chcesz dowiedzieć się więcej o interfejsie użytkownika w Panelu klienta OVHcloud.

**Poznaj główne sekcje interfejsu Public Cloud w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Utworzenie [pierwszego projekt Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project).

## W praktyce

Po utworzeniu pierwszego projektu Public Cloud zostaniesz przekierowany do głównego interfejsu Public Cloud.

![Public Cloud interfejs](images/main-interface.png){.thumbnail}

### Dostęp do danych konta OVHcloud

Parametry konta OVHcloud pozostają dostępne w każdej chwili, podobnie jak powiadomienia lub zmiana języka w Panelu klienta.

![Public Cloud interfejs - menu konta](images/account.png){.thumbnail}

### Twój projekt Public Cloud

Ponieważ możliwe jest użycie kilku projektów (w zależności od rozmiaru projektu), nazwa i ID projektu są zawsze wyświetlane, niezależnie od wyświetlanego ekranu, aby dowiedzieć się, w jakim środowisku działa.

![Menu projektu](images/project-menu.png){.thumbnail}

ID może być konieczne podczas korzystania z CLI, niektórych zgłoszeń dotyczących wsparcia lub innych. Możesz go skopiować klikając ikonę znajdującą się po prawej stronie.

Możesz zmienić nazwę projektu w zakładce `Ustawienia`{.action}. Wpisz nową nazwę i kliknij na `Aktualizuj`{.action}.

![Zmień nazwę projektu Public Cloud](images/rename-project.png){.thumbnail}

### Menu główne Public Cloud

![Public Cloud interface - menu główne](images/main-menu.png){.thumbnail}

|Sekcja|Opis opcji|
|---|---|
|**Compute**|W tej sekcji możesz uruchomić instancje, które są dostępne na żądanie.|
|**Storage**|W tej sekcji znajdziesz rozwiązania do przechowywania danych i baz danych, z których każda odpowiada konkretnym potrzebom i wykorzystaniu.|
|**Network**|W tej sekcji znajdziesz informacje, jak połączyć Twoje zasoby Public Cloud, a także co łączyć je z innymi produktami OVHcloud.|
|**Containers and Orchestration**|W tej sekcji możesz korzystać z różnych narzędzi do automatyzacji architektury.|
|**AI & Machine Learning**|W tej sekcji znajdziesz narzędzia OVHcloud do sztucznej inteligencji.|
|**Data & Analytics**|Usługi te pomogą Ci rozwiązać problem Big Data i Data Analytics.|

### Skróty

W centrum ekranu znajdują się skróty umożliwiające szybki dostęp do asystentów konfiguracji i do najbardziej przydatnych przewodników.

![Public Cloud interfejs - menu skrótów](images/shortcuts.png){.thumbnail}

#### Pomoc na tworzenie zasobów

Dla każdego zasobu, który chcesz utworzyć, towarzyszą Ci asystent konfiguracji, który, krok po kroku, pozwala na ustawienie zasobów zgodnie z Twoimi potrzebami.
<br>W większości przypadków będziesz musiał wybrać lokalizację zasobu, model, kilka ustawień, które można spersonalizować, a w niektórych przypadkach również sposób płatności.

![Public Cloud interface - asystent konfiguracji](images/wizard.png){.thumbnail}

### Narzędzia do zarządzania

W projekcie Public Cloud dostępnych jest kilka narzędzi do zarządzania. Są one na dole paska menu po lewej stronie.

![Public Cloud interface - narzędzia do zarządzania](images/management-tools.png){.thumbnail}

|Wejście do menu|Opis|
|---|---|
|**Horizon**|Jest to [interfejs graficzny](/pages/public_cloud/compute/introducing_horizon) zazwyczaj dostępny na OpenStack. Nie została zmodyfikowana, co pozwala użytkownikom, którzy przywykli do korzystania z tego interfejsu, na odnalezienie własnego odruchu.|
|**Users and Roles**|Umożliwia [tworzenie użytkowników](/pages/public_cloud/compute/create_and_delete_a_user) i przypisywanie im roli. Użytkownicy ci umożliwiają między innymi bezpośredni dostęp do API lub do interfejsu Horizon. Możesz na przykład utworzyć użytkownika do Twoich klasycznych prac konserwacyjnych oraz użytkownika do narzędzi automatyzacji, takich jak Terraform.|
|**Quota and Regions**|Narzędzie to pozwala na zarządzanie lokalizacjami i limitami zasobów dostępnymi dla Twojego projektu.<br><br>**Limity**: Zgodnie z określonymi kryteriami (liczba faktur już opłaconych, korzystanie z innych produktów OVHcloud) nasz system ustala kwoty (limity) dla liczby zasobów, które możesz utworzyć, aby uniknąć problemów z brakiem płatności. Domyślnie system automatycznie zwiększa limity, gdy spełnione są określone kryteria. Można jednak [ręcznie zwiększyć kwotę](/pages/public_cloud/compute/increasing_public_cloud_quota#reczne-zwiekszanie-limitu-zasobow) za pomocą tego narzędzia.<br><br>**Lokalizacje**: Public Cloud jest dostępny w kilku lokalizacjach na świecie. Dodatkowo każda lokalizacja może zawierać kilka "regionów" (pojęcie specyficzne dla OpenStack). Na przykład dla klienta europejskiego strefa APAC (Azja-Pacyfik) jest domyślnie wyłączona. Jeśli Twoje potrzeby są spełnione, możesz aktywować nowe regiony z tego menu.|
|**SSH Keys**|Narzędzie do zarządzania [kluczami SSH](/pages/public_cloud/compute/public-cloud-first-steps#krok-1-utworzenie-kluczy-ssh).|
|**Billing Control**|Public Cloud działający w trybie *pay as you go*, faktury są publikowane pod koniec miesiąca. W [tym menu](/pages/public_cloud/compute/analyze_billing) będziesz mógł śledzić bieżące zużycie zasobów, zobaczyć prognozę kolejnej faktury i oczywiście wyświetlić Twoje poprzednie faktury.|
|**Credit and Vouchers**|W tym menu możesz sprawdzić wykorzystanie kuponu, dodać kupon lub [dodać zasilenie](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project) bezpośrednio do Twojego projektu Public Cloud.|
|**Contacts and Rights**|Oprócz możliwości zmiany kontaktu technicznego lub kontaktu księgowego Twojego projektu, będziesz mógł [dodać kolejne kontakty](/pages/public_cloud/compute/change_project_contacts) (konto OVHcloud), aby zarządzać Twoim projektem. Możesz również dodawać użytkowników tylko do wglądu *read-only*.|
|**Project settings**|To ostatnie narzędzie pozwala na skonfigurowanie ogólnych parametrów projektu, takich jak nazwa, konfiguracja jako "domyślny projekt konta", kompatybilność HDS, czy też na [usunięcie projektu Public Cloud](/pages/public_cloud/compute/delete_a_project).|

## Sprawdź również

[Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.