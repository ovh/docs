---
title: 'Public Cloud Compute - Zmiana typu rozliczenia z godzinowego na miesięczne dla instancji Public Cloud'
excerpt: 'Dowiedz się, jak zmienić typ rozliczenia za instancję Public Cloud'
updated: 2025-09-05
---

## Wprowadzenie

Podczas tworzenia instancji Public Cloud można wybrać typ rozliczenia za godzinę lub miesięcznie (z wyjątkiem instancji Public Cloud trzeciej generacji, które są domyślnie fakturowane za godzinę i nie oferują opcji miesięcznej podczas tworzenia instancji). Instancje w typu godzinowym są płatne według faktycznego zużycia, czyli na koniec miesiąca użytkownicy są rozliczani za konkretne zasoby, z których korzystali. Instancje w subskrypcji miesięcznej są płatne z góry, ale rozliczane według niższej ceny (do 50% taniej niż w przypadku rozliczeń godzinowych). Jeśli początkowo zostało wybrane rozliczenie godzinowe, w dowolnym momencie można je zmienić na miesięczne.

**Dowiedz się, jak zmienić typ rozliczenia godzinowego na miesięczne.**

> [!warning]
>
> Nie można zmienić rozliczenia miesięcznego na godzinowe. Aby rozliczać się godzinowo, należy usunąć instancję rozliczaną miesięcznie, utworzyć nową instancję i wybrać dla niej typ rozliczenia godzinowego. W takiej sytuacji wykonaj następujące działania:
>
>- Utwórz migawkę bieżącej instancji.
>
>- Utwórz nową instancję na podstawie migawki.
>
>- Usuń instancję rozliczaną miesięcznie.
>

## Wymagania początkowe

- utworzona [instancja Public Cloud](/links/public-cloud/public-cloud)
- zalogowanie do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

### W Panelu klienta OVHcloud

> [!warning]
> Następująca procedura nie działa dla instancji trzeciej generacji (przykład: B3-32). Aby móc płacić za ten typ instancji w trybie miesięcznym, utwórz dla tego modelu instancji [Savings Plan](/pages/public_cloud/public_cloud_cross_functional/save_plans).
>

W [Panelu klienta OVHcloud](/links/manager) wybierz instancję, dla której chcesz zmienić typ rozliczenia, i otwórz menu opcji, klikając ikonę z trzema kropkami (po prawej stronie instancji). Zobaczysz przycisk `Zmień na subskrypcję miesięczną`{.action}:

![Change billing calculation](images/switch_to_monthly_updated.png){.thumbnail}

Następnie potwierdź zmianę typu rozliczenia:

![Confirm billing calculation change](images/confirm_to_monthly_updated.png){.thumbnail}

Po potwierdzeniu wyboru, natychmiast otrzymają Państwo miesięczny rachunek proporcjonalny. Następny rachunek będzie zawierał część stawki godzinowej z danego miesiąca (od 1. dnia miesiąca do zmiany) oraz nową opłatę miesięczną.

### Z poziomu API Openstack

Podczas tworzenia instancji za pomocą API Openstack, o ile nie zostało to określone w skrypcie tworzenia, instancja jest automatycznie tworzona z abonamentem godzinowym. Aby przejść na abonament miesięczny, wprowadź następującą komendę:

```bash
openstack server set --property ovh-monthly-instance=1 "InstanceID"
```

Zastąp "InstanceID" identyfikatorem odpowiedniej instancji. Identyfikator może zostać pobrany z Panelu klienta lub API OVHcloud.

### Z poziomu API OVHcloud

Zaloguj się do [interfejsu API OVHcloud](/links/api) zgodnie z [odpowiednim przewodnikiem](/pages/manage_and_operate/api/first-steps) i postępuj zgodnie z poniższymi krokami.

Skorzystaj z następującego połączenia:

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
>

### Ze skryptu Terraform

Jest to możliwe dzięki `metadata` [attribute](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2#metadata) z zasobu [openstack_compute_instance_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2):

```terraform
metadata = {
"ovh-monthly-instance" = 1
}
```

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).