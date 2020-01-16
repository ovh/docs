---
title: 'Tworzenie / przywracanie serwera wirtualnego na podstawie kopii zapasowej'
excerpt: 'Dowiedz się, jak utworzyć lub przywrócić kopię zapasową instancji'
slug: tworzenie_przywracanie_serwera_wirtualnego_na_podstawie_kopii_zapasowej
legacy_guide_number: g1882
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja z dnia 22-11-2019**

## Wprowadzenie
Może zajść konieczność przywrócenia instancji z kopii zapasowej, np. w przypadku błędu podczas konfigurowania Twojej instancji. 

Kopia zapasowa może także posłużyć do utworzenia nowej instancji, zduplikowania jej w celu zrównoważenia obciążenia, czy też w celu zapewnienia wysokiej dostępności.

Dzięki niniejszemu przewodnikowi dowiesz się, jak korzystać ze swoich kopii zapasowych, by duplikować lub też przywracać swoje instancje.

## Wymagania początkowe
- Posiadanie kopii zapasowej instancji Public Cloud. Należy zapoznać się w tym celu z [instrukcją tworzenia kopii zapasowej](https://docs.ovh.com/pl/public-cloud/kopia_zapasowa_instancji/).
- Zalogowanie się do panelu klienta OVHcloud.

## W praktyce

### Tworzenie instancji na podstawie kopii zapasowej

Zaloguj się do swojego [panelu klient  OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} i kliknij opcję`Public Cloud`{.action}. Następnie wybierz rubrykę `Instance backup`{.action} (Kopia zapasowa instancji).

Kliknij `...`{.action} z prawej strony wybranej kopii zapasowej i wybierz opcję `Create an instance`{.action} (Utwórz instancję).

![public-cloud-instance-backup](images/restorebackup1.png){.thumbnail}

Wyświetlona zostanie strona tworzenia instancji.

![public-cloud-instance-backup](images/restorebackup2.png){.thumbnail}

Niektóre elementy są wstępnie określone:

* Lokalizacja: Twoja instancja zostanie utworzona w tym samym centrum danych, co Twoja kopia zapasowa.
* Obraz: odpowiada Twojej kopii zapasowej.
* Modele: dostępne są wyłącznie modele mogące przyjąć Twój obraz, w zależności od limitu miejsca.

Aby uzyskać więcej informacji na temat tworzenia instancji, zapoznaj się z [tym przewodnikiem](https://docs.ovh.com/pl/public-cloud/tworzenie_instancji_w_panelu_klienta_ovh/).

Aby utworzyć instancję w innym centrum danych niż lokalizacja kopii zapasowej, konieczne będzie jej przeniesienie do odpowiedniej strefy. Aby to zrobić, należy postępować zgodnie z [instrukcją przenoszenia instancji do innego centrum danych](https://docs.ovh.com/pl/public-cloud/przenoszenie_kopii_zapasowych_pomiedzy_centrami_danych/).

### Przywracanie instancji z kopii zapasowej

Aby przywrócić instancję z kopii zapasowej, wybierz menu `Instance`{.action} (Instancja), następnie kliknij przycisk `...`{.action} z prawej strony przywracanej instancji, a następnie wybierz opcję `Edit`{.action} (Edytuj).

![public-cloud-instance-backup](images/restorebackup3.png){.thumbnail}

Wyświetli się wówczas strona edycji instancji. Można tu zmienić:

* nazwę instancji,
* obraz instancji,
* model instancji.
* Sposób rozliczenia dla instancji (tylko od „Godzinowe” do „Miesięczne”).

Wybierz wówczas w rubryce `Image`{.action} (Obraz) ten, który zawiera kopię zapasową do przywrócenia.

![public-cloud-instance-backup](images/restorebackup4.png){.thumbnail}


> [!alert]
>
>W żółtej ramce pojawi się informacja, że nie będzie możliwe przywrócenie żadnych danych dodanych po utworzeniu tej kopii zapasowej.
>

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en>
