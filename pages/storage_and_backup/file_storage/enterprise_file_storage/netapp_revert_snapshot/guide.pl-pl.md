---
title: "Enterprise File Storage - Przywracanie wolumenu za pomocą API przywracania snapshotów"
excerpt: "Dowiedz się, jak przywrócić wolumeny rozwiązania Enterprise File Storage przy użyciu funkcji przywracania snapshotów dostarczonej przez API OVHcloud"
updated: 2023-09-15
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

W niniejszym przewodniku wyjaśnimy, jak przywrócić wolumen do jego ostatniego snapshota za pomocą funkcji *snapshot revert*.

**Dowiedz się, jak przywrócić wolumeny w rozwiązaniu Enterprise File Storage przy użyciu funkcji przywracania snapshotów za pośrednictwem API OVHcloud.**

## Wymagania początkowe

- Wykupienie usługi OVHcloud Enterprise File Storage z wolumenem
- Połączenie z [API OVHcloud](https://api.ovh.com/)

## Podstawowe zasady

Snapshot woluminu jest jednorazową kopią woluminu przeznaczoną tylko do odczytu.
Snapshoty są tworzone na podstawie istniejącego i działającego wolumenu. Snapshot nie może zostać użyty, jeśli wolumin, do którego należy, już nie istnieje.

> [!warning]
>
> Pamiętaj, że po przywróceniu wolumenu za pomocą snapshota wszystkie pliki lub snapshoty utworzone później zostaną utracone. Po przywróceniu wolumenu wszystkie przechowywane na nim dane zostaną zastąpione danymi z kopii zapasowej snapshot. Operacja ta jest nieodwracalna.
>

W tym przewodniku wolumen określany jest również jako "*share*", podobnie jak w API OVHcloud.

## Limity

Można tylko przywrócić wolumen do jego najnowszego dostępnego snapshota. Jeśli jednak chcesz przywrócić wolumen z poprzedniego snapshota, musisz usunąć snapshoty, aż do momentu, gdy snapshot używany do przywrócenia będzie najnowszy.

## W praktyce

### Scenariusz 1: Przywróć wolumen ze snapshota typu `manual`

W tym scenariuszu chcesz przywrócić wolumen do ostatniego snapshota typu `manual` utworzonego za pośrednictwem API OVHcloud lub Panelu klienta OVHcloud.

> [!primary]
> **Wymagania początkowe dla tego scenariusza:**
>
> - Utworzyłeś już snapshot typu `manual`. W przeciwnym razie możesz utworzyć snapshot typu `manual` za pośrednictwem API OVHcloud lub Panelu klienta OVHcloud.
> - Snapshot typu `manual` musi należeć do wolumenu, który chcesz przywrócić.

1\. Zidentyfikuj ostatni snapshot typu `manual` za pomocą następującego wywołania API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` to unikalny identyfikator usługi
- `{shareId}` to wolumen, który chcesz przywrócić 

![RevertManualSnapshot](images/use_case_1_step_1.png){.thumbnail}

2\. Przywróć wolumen do jego ostatniego snapshota, używając wywołania API`/revert`: 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` to unikalny identyfikator usługi
- `{shareId}` to wolumen, który chcesz przywrócić
- `{snapshotID}` to ostatni snapshot wolumenu

API OVHcloud zwróci tylko kod HTTP 202 (*Accepted*).<br>
Stan woluminu zostanie zmieniony na `reverting`, a następnie po zakończeniu procesu przywracania woluminu powróci do `available`. Jednocześnie stan snapshota zmieni się na `restoring` i powróci do `available` po zakończeniu procesu przywracania wolumenu.

![RevertManualSnapshot](images/use_case_1_step_2.png){.thumbnail}

### Scenariusz 2: Przywracanie wolumenu z kopii zapasowej wykonanej za pomocą polityki wykonywania snapshotów

W tym scenariuszu, reguła polityki wykonywania snapshotów (*Snapshot policy*) pobiera regularne (automatyczne) snapshoty wolumenu i chcesz przywrócić wolumen do ostatniego snapshota utworzonego przez *Snapshot policy*.

Należy "zachować" (`hold`) ostatni snapshot wykonany przez politykę wykonywania snapshotów przypisaną do wolumenu, aby snapshot ten stał się snapshotem `manual`. Gdy snapshot jest typu `manual`, można przywrócić do niego skojarzony wolumen.

> [!primary]
> **Wymagania początkowe dla tego scenariusza:**
>
> - Utworzyłeś *Snapshot policy* i przypisałeś go do wolumenu, który chcesz przywrócić.
> - Ta *Snapshot policy* utworzyła przynajmniej jeden snapshot.

> [!primary]
>
> Snapshoty wykonywane przez *Snapshot policy* są typu `automatic`. Aby można było ich użyć do przywracania woluminów, muszą one zostać zachowane przy użyciu trasy API `/hold`. Uniemożliwi to ich rotację poprzez *Snapshot policy*.
>

1\. Zidentyfikuj ostatni snapshot typu `automatic` za pomocą następującego wywołania API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` to unikalny identyfikator usługi
- `{shareId}` to wolumen, który chcesz przywrócić

![RevertSnapshot](images/use_case_2_step_1.png){.thumbnail}

2\. Zachowaj snapshot, używając następującego wywołania API: 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}/hold

- `{serviceName}` to unikalny identyfikator usługi
- `{shareId}` to wolumen, który chcesz przywrócić
- `{snapshotID}` to ostatni automatycznie wykonany snapshot

> [!warning]
>
> Po wykonaniu operacji zachowywania danych (`hold`) identyfikator i typ snapshota zostaną zmienione. Jednak jego właściwości `name`, `createdAt` i `path` zostaną zachowane. Zapisz informacje o nowym `id` dla kolejnych etapów.
>

![RevertSnapshot](images/use_case_2_step_2.png){.thumbnail}

3\. Upewnij się, że nowy snapshot jest ostatnim snapshotem typu `manual` woluminu.

Jeśli snapshoty typu `manual` zostały utworzone przed tą snapshotem, powinny zostać usunięte.

4\. Trasa API użyta do pobrania listy snapshotów woluminu etapu 1 może zostać użyta ponownie tutaj.

![RevertSnapshot](images/use_case_2_step_3.png){.thumbnail}

5\. Przywróć wolumen do jego ostatniego snapshota, wywołując trasę API `/revert`:

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` to unikalny identyfikator usługi
- `{shareId}` jest wolumenem do przywrócenia
- `{snapshotID}` to ostatni snapshot w dacie wolumenu

API OVHcloud zwróci tylko kod HTTP 202 (*Accepted*).<br>
Stan woluminu zostanie zmieniony na `reverting`, a następnie po zakończeniu procesu przywracania woluminu powróci do `available`. Jednocześnie stan snapshota zmieni się na `restoring` i powróci do `available` po zakończeniu procesu przywracania wolumenu.

![RevertSnapshot](images/use_case_2_step_4.png){.thumbnail}

Wolumen jest teraz przywracany do wybranego snapshota.

## Sprawdź również <a name="go-further"></a>

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
