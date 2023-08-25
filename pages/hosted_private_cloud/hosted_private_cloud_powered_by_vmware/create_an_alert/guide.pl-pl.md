---
title: 'Tworzenie alertu'
excerpt: 'Konfiguracja alertów na kliencie vSphere'
legacy_guide_number: g599
updated: 2020-07-08
---


## Wprowadzenie

Możliwe jest tworzenie alertów dotyczących wszystkich elementów usługi Private Cloud, takich jak centrum danych, klastry, wirtualne maszyny, datastores, sieci.

**Ten przewodnik wyjaśnia, jak tworzyć alerty.**

## Wymagania początkowe

- Wykupienie usługi [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/)
- Dostęp do [interfejsu vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion)

## W praktyce

### Tworzenie alertu

Aby utworzyć alert, kliknij prawym przyciskiem myszy na centrum danych lub inny element, który ma być monitorowany, po czym kliknij `Alarms`{.action} i `New Alarm Definition`{.action}.

![Tworzenie alertu](images/alarms01.png){.thumbnail}

### Nadanie nazwy alertu i określenie celu

W pierwszym kroku nadaj nazwę alertu i określ cel. Możesz też dodać opis.

![Nazwa i cel alertu](images/alarms02.png){.thumbnail}

### Określenie reguł alertu

Drugi krok polega na określeniu reguł alertu i działań, które ma uruchomić.

W polu `IF` wybierz spośród dostępnych zmiennych tę, która ma wyzwalać alert. W zależności od tego, którą zmienną wybierzesz, wyświetli się lista argumentów.

W polu `THEN` zaznacz stopień krytyczności alertu - w zależności od stopnia krytyczności alert będzie wywoływał różne działania, takie jak wysłanie e-maila, wykonanie skryptu lub zatrzymanie wirtualnej maszyny.

![Reguły alertu](images/alarms03.png){.thumbnail}

Dzięki regułom można na przykład monitorować RAM hosta, wskazując próg, który nie może zostać przekroczony przed włączeniem alertu i otrzymaniem e-maila z ostrzeżeniem.

>[!primary]
> Możesz dodać wiele reguł do swojego alertu, klikając przycisk `ADD ANOTHER RULE`{.action}.
>

### Wyłączenie alertu

W trzecim kroku określ kryteria wyłączenia alertu i uruchomienia kolejnych działań.

![Wyłączenie alertu](images/alarms04.png){.thumbnail}

### Podsumowanie reguł alertu

W ostatnim kroku otrzymasz podsumowanie zdefiniowanych reguł alertu. Alert można aktywować od razu poprzez zaznaczenie odpowiedniej opcji lub później, klikając prawym przyciskiem myszy na odpowiednią pozycję i wybierając `Alarms`{.action} i `Enable Alarm Actions`{.action}.

![Podsumowanie reguł alertu](images/alarms05.png){.thumbnail}

W tym kroku możesz również skonfigurować częstotliwość powtarzania alertów.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
