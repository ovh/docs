---
title: Enterprise File Storage - Zarządzanie polityką wykonywania snapshotów
excerpt: "Dowiedz się, jak utworzyć politykę wykonywania snapshotów, zastosować ją do Twojego wolumenu, zmodyfikować i usunąć z poziomu panelu klienta"
updated: 2023-08-07
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

W niniejszym przewodniku wyjaśnimy, jak zarządzać politykami wykonywania snapshotów dla wolumenów Enterprise File Storage OVHcloud.

**Dowiedz się, jak utworzyć politykę wykonywania snapshotów, zastosować ją do Twojego wolumenu, zmodyfikować i usunąć z poziomu Panelu klienta.**

## Wymagania początkowe

- Usługa Enterprise File Storage od OVHcloud z dostępnym wolumenem
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## Podstawowe zasady

Snapshot wolumenu to jednorazowa kopia woluminu przeznaczona tylko do odczytu.<br>
Snapshoty są tworzone na podstawie istniejącego wolumenu operacyjnego. Bez tego nie mogą istnieć.<br>
Polityka wykonywania snapshotów pozwala na zautomatyzowanie tworzenia snapshotów przy użyciu różnych ustawień. Jeśli nie będziesz go potrzebował, polityka może zostać zmodyfikowana i usunięta.

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i na górnym pasku nawigacji wybierz zakładkę `Bare Metal Cloud`{.action}. Otwórz `Storage i Backup`{.action}, następnie `Enterprise File Storage`{.action} w menu po lewej stronie i wybierz swoją usługę z listy.

### Utwórz politykę wykonywania snapshotów

Polityka wykonywania snapshotów pozwala na automatyzację snapshotów poprzez zdefiniowanie częstotliwości tworzenia w minutach, godzinach, dniach, tygodniach lub miesiącach. 
Konieczne jest również określenie liczby kopii, które chcesz zachować.

1\. Kliknij zakładkę `Reguły dotyczące snapshotów`{.action}.

![SnapshotPolicy](images/Snapshot_Policy_1.png){.thumbnail}

2\. Nadaj nazwę polityce wykonywania snapshotów, określ jej opis, następnie kliknij przycisk `Dodaj nową regułę`{.action}, aby dodać jedną lub więcej reguł do polityki.

![SnapshotPolicy](images/Snapshot_Policy_2.png){.thumbnail}

3\. Wypełnij pola, aby określić godzinę, dni miesiąca, dni tygodnia i miesiące, w których ma zostać utworzony snapshot. Wprowadź również prefiks dla snapshotów niezbędny do nadania im nazwy.

Szczegółowe informacje o każdej wartości można znaleźć, klikając znak zapytania. Rozwijając sekcję `Przykład`{.action}, możesz wyświetlić dwa zestawy reguł wraz z wyjaśnieniem ich wyniku.

Kliknij pole wyboru, aby dodać nową regułę. Po dodaniu wszystkich reguł kliknij przycisk `Utwórz nową politykę tworzenia snapshotów`{.action}.

> [!primary]
> Należy określić prefiks i czas trwania w minutach. Opcjonalnie możesz podać godziny, dni i miesiące wykonania, aby precyzyjnie określić harmonogram.
>

Nie możesz zmienić polityki wykonywania snapshotów po jej utworzeniu. Jeśli musisz zastosować nowe ustawienia częstotliwości, musisz usunąć bieżącą politykę wykonywania snapshotów i utworzyć nową. 

### Zastosowanie polityki wykonywania snapshotów 

Po utworzeniu polityki wykonywania snapshotów możesz ją zastosować do wolumenu.

1\. Przejdź do zakładki `Wolumeny`{.action} w puli pojemności.

![ApplySnapshotPolicy](images/Snapshot_Policy_3.png){.thumbnail}

2\. Wybierz z listy wolumin, do którego ma zostać zastosowana polityka wykonywania snapshotów.
3\. Przejdź do sekcji `Snapshoty`{.action} i do sekcji `Zarządzaj polityką wykonywania snapshotów`{.action}, wybierz politykę, którą chcesz zastosować. 
4\. Kliknij przycisk `Zastosuj politykę`{.action}.

![ApplySnapshotPolicy](images/Snapshot_Policy_4.png){.thumbnail}

### Usuń politykę wykonywania snapshotów

> [!warning]
>
> Polityka wykonywania snapshotów przypisana do wolumenu nie może zostać usunięta. Jeśli chcesz usunąć politykę wykonywania snapshotów powiązaną z jednym lub kilkoma wolumenami, musisz najpierw odłączyć tę politykę, kojarząc inną politykę wykonywania snapshotów z tymi wolumenami.
>

Aby usunąć politykę wykonywania snapshotów:

1\. Przejdź do zakładki `Reguły dotyczące snapshotów`{.action} Twojej puli pojemności.

![DeleteSnapshotPolicy](images/Snapshot_Policy_5.png){.thumbnail}

2\. Wybierz politykę, którą chcesz usunąć.
3\. Kliknij przycisk Usuń reprezentowany przez `kosz`{.action}.

![DeleteSnapshotPolicy](images/Snapshot_Policy_6.png){.thumbnail}

## Sprawdź również <a name="go-further"></a>

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
