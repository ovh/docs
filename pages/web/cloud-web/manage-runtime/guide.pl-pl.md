---
title: 'Zarządzanie frameworkami na Cloud Web'
slug: zarzadzanie-framework-runtime-cloud-web
excerpt: 'Dowiedz się, jak zarządzać frameworkami dostępnymi w ramach hostingu Cloud Web'
section: 'Konfiguracja hostingu'
---

**Ostatnia aktualizacja z dnia 08-04-2019**

## Wprowadzenie

W ramach Cloud Web udostępniamy różne języki programowania do tworzenia Twojego projektu. Do jego ukończenia konieczne może się okazać użycie jednego z dostępnych frameworków. 

**Dowiedz się, jak zarządzać frameworkami Twojego hostingu Cloud Web.**

## Wymagania początkowe

- Posiadanie hostingu [Cloud Web](https://www.ovh.pl/hosting/cloud-web.xml)
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager), sekcja `Web`{.action}

## W praktyce

W ramach Cloud Web możesz użyć jednego lub kilku frameworków. Wybór odpowiedniego będzie zatem zależał od efektu, jaki chcesz uzyskać. 

Dlatego, jeśli jeszcze tego nie zrobiłeś **upewnij się, czy Twój projekt jest kompatybilny pod względem technicznym z Twoim hostingiem Cloud Web**. Lista języków programowania znajduje się tutaj: <https://www.ovh.pl/hosting/cloud-web.xml>. 

Po wskazaniu frameworku lub frameworków, których będziesz używał, możesz rozpocząć operacje opisane poniżej.

### Etap 1: dostęp do zarządzania frameworkami

Aby uzyskać dostęp do frameworków Twojego hostingu Cloud Web, zaloguj się do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Po zalogowaniu kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiedni hosting. Teraz przejdź do zakładki `Frameworki`{.action}.

Wyświetli się tabela z listą frameworków obecnie dodanych do Twojego hostingu Cloud Web. Framework jest automatycznie tworzony podczas instalacji hostingu.

![cloud web hosting ssd](images/cloud-web-runtime-step1.png){.thumbnail}

### Etap 2: zarządzanie frameworkami

Istnieje kilka sposobów zarządzania frameworkami hostingu Cloud Web:

- [dodanie lub zmiana frameworku](./#21-dodaj-lub-zmien-framework){.external} (maksymalna liczba frameworków zależy od wybranej oferty);
- oznaczenie frameworku jako wyboru domyślnego;
- usunięcie wybranego frameworku.

#### 2.1 Dodaj lub zmień framework

> [!primary]
>
> Zanim zmienisz framework, upewnij się, czy nie spowoduje to niedostępności strony lub używającej jej aplikacji. Możesz odszukać liczbę powiązanych stron w opcji MultiSite, sprawdzając frameworki w kolumnie `Liczba powiązanych stron w opcji MultiSite`. Następnie, w zakładce `MultiSite`{.action}, odszukaj w odpowiedniej kolumnie tabeli `Framework` używany dla każdej domeny.
> 

Aby dodać lub zmienić framework, przejdź do zakładki `Frameworki`{.action} odpowiedniego hostingu Cloud Web. Następnie:

- **jeśli chcesz dodać framework**: kliknij `Operacje`{.action} nad tabelą, po czym `Dodaj framework`{.action};
- **jeśli chcesz zmienić framework**: kliknij przycisk `...`{.action} po prawej stronie odpowiedniego frameworku, po czym kliknij `Zmień`{.action}.

![cloud web hosting ssd](images/cloud-web-runtime-step2.png){.thumbnail}

W oknie, które się wyświetla, wprowadź wymagane informacje: Następnie wykonaj kroki właściwe dla wybranego frameworka:

- [PHP](./#php){.external};
- [Node.js](./#nodejs){.external}.

##### PHP

|Informacja|Opis | 
|---|---| 
|Spersonalizowana nazwa|Wpisz nazwę pozwalającą odróżnić ten framework od pozostałych frameworków wyświetlających się w Twoim Panelu klienta.|  
|Framework|Wybierz nowy framework.|  

Po uzupełnieniu informacji, kliknij przycisk `Zatwierdź`{.action}. Upewnij się teraz, czy framework jest używany przez odpowiednie strony podpięte w opcji MultiSite. W tym celu przejdź do etapu 3: [Powiązanie frameworka ze stroną podpiętą w opcji MultiSite](./#etap-3-powiazanie-frameworka-ze-strona-podpieta-w-opcji-multisite_2){.external}.

![cloud web hosting ssd](images/cloud-web-runtime-step3.png){.thumbnail}

##### Node.js

|Informacja|Opis | 
|---|---| 
|Spersonalizowana nazwa|Wpisz nazwę pozwalającą odróżnić ten framework od pozostałych frameworków wyświetlających się w Twoim Panelu klienta.|
|Framework|Wybierz nowy framework.|
|Ścieżka dostępu do katalogu publicznego|Wskaż katalog, w którym będzie hostowana zawartość statyczna (framework nie uruchomi tej zawartości).|
|Środowisko aplikacji|Określ, czy chodzi o środowisko „produkcyjne”, „testowe” czy „deweloperskie”. Pamiętaj, że środowisko „deweloperskie” zachowuje się inaczej od pozostałych i wyświetla błędy bezpośrednio w interfejsie internetowym: miej to na uwadze korzystając ze środowiska deweloperskiego.|
|Skrypt uruchamiania aplikacji|Nazwij skrypt, który wywoła środowisko Node.js.|

Po uzupełnieniu informacji, kliknij przycisk `Zatwierdź`{.action}. Upewnij się teraz, czy framework jest używany przez odpowiednie strony podpięte w opcji MultiSite. W tym celu przejdź do etapu 3: [Powiązanie frameworka ze stroną podpiętą w opcji MultiSite](./#etap-3-powiazanie-frameworka-ze-strona-podpieta-w-opcji-multisite_2){.external}.

![cloud web hosting ssd](images/cloud-web-runtime-step3-2.png){.thumbnail}

### Etap 3: powiązanie frameworka ze stroną podpiętą w opcji MultiSite

Po wybraniu jednego lub kilku frameworków niezbędnych do Twojego projektu, upewnij się, czy są one powiązane z Twoimi stronami podpiętymi w opcji MultiSite. W tym celu przejdź do zakładki `MultiSite`{.action} odpowiedniego hostingu Cloud Web. 

Sprawdź w tabeli, w kolumnie `Framework`, czy dla poszczególnych domen wyświetla się prawidłowy framework. Wyświetlane nazwy odpowiadają „nazwie spersonalizowanej” przez Ciebie .

![cloud web hosting ssd](images/cloud-web-runtime-step4.png){.thumbnail}

Jeśli chcesz zmienić framework powiązany ze stroną podpiętą w opcji MultiSite, kliknij koło zębate po prawej stronie odpowiedniej domeny, po czym kliknij `Zmień`{.action}.

![cloud web hosting ssd](images/cloud-web-runtime-step5.png){.thumbnail}

W oknie, które się wyświetla wybierz odpowiedni framework w polu `Framework`.  Przypominamy, że nazwy, które się wyświetlają odpowiadają „nazwie spersonalizowanej” przez Ciebie. Pamiętaj, że strona lub aplikacja dostępne w ramach wybranej domeny muszą być kompatybilne z frameworkiem. 

Po dokonaniu wyboru wykonaj poszczególne kroki aż do zakończenia operacji.

![cloud web hosting ssd](images/cloud-web-runtime-step6.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.