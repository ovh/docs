---
title: Tworzenie i usuwanie grup bezpieczeństwa w panelu Horizon
excerpt: Tworzenie zestawu reguł filtrowania IP
slug: tworzenie-usuwanie-grupy-bezpieczenstwa-horizon
section: Zarządzanie w interfejsie Horizon
---

**Ostatnia aktualizacja dnia 16-01-2018**

## Wprowadzenie

Grupy zabezpieczeń to zestawy reguł filtrowania IP, które są stosowane do wszystkich instancji danego Projektu i definiują dostęp sieciowy do instancji. Zasady grupy są specyficzne dla projektu - członkowie projektu mogą edytować domyślne reguły dla swojej grupy i dodawać nowe zestawy reguł.

Wszystkie Projekty mają domyślną grupę zabezpieczeń, która jest stosowana do każdej instancji, która nie ma innej zdefiniowanej grupy zabezpieczeń. W OVH domyślne ustawienia grupy bezpieczeństwa zapewniają zarówno ruch wychodzący jak i przychodzący dla instancji.


## Wymagania początkowe

- [Dostęp do interfejsu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/){.external}


## W praktyce

- Połącz się z interfejsem [Horizon](https://horizon.cloud.ovh.net/){.external}, następnie wybierz Region, w którym chcesz utworzyć grupę bezpieczeństwa (menu u góry ekranu):

![Wybór regionu](images/1_H_sec_groups_region_choosing.png){.thumbnail}

Grupa zabezpieczeń jest tworzona w wybranym Regionie, jeśli dana grupa ma być używana w wielu Regionach, należy ją zdefiniować w każdym z nich.


Klikając kartę "Network" (Sieci) zostanie rozwinięte małe menu, a w nim karta `Security Groups`{.action} (Grupy bezpieczeństwa):

![Grupy bezpieczeństwa](images/2_H_crete_sec_group.png){.thumbnail}

Aby utworzyć grupę zabezpieczeń, kliknij przycisk `+ Create Security Group`{.action} (Utwórz grupę bezpieczeństwa), następnie nadaj grupie nazwę oraz ewentualny opis:

![Tworzenie grup bezpieczeństwa](images/3_H_new_sec_gr_name.png){.thumbnail}

Zatwierdź operację klikając na przycisk: `Create Security Group`{.action} (Utwórz grupę bezpieczeństwa) w dole okna.

Aby usunąć grupę zabezpieczeń, zaznacz grupę zabezpieczeń, którą chcesz usunąć, i kliknij `Delete Security Groups`{.action} (Usuń grupy bezpieczeństwa).


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.