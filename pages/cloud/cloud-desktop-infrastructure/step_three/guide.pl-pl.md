---
title: Etap 3 - tworzenie pierwszej puli wirtualnych pulpitów
slug: jak-utworzyc-pule
excerpt: Dowiesz się, jak utworzyć Twoją pierwszą pulę pulpitów przy użyciu VMware Horizon 7.1
section: Wdrożenie
order: 3
---

**Ostatnia aktualizacja dnia 2018-02-19**

## Wprowadzenie

Wiesz już, jak [się zalogować do VMware Horizon](https://docs.ovh.com/pl/cloud-desktop-infrastructure/platforma-horizon-7/){.external}, a Twój [szablon puli](https://docs.ovh.com/pl/cloud-desktop-infrastructure/tworzenie-szablonu-puli/){.external} jest gotowy. Teraz utwórz Twoją pierwszą pulę pulpitów.

**Niniejszy przewodnik wyjaśni Ci, jak to zrobić, korzystając z VMware Horizon 7.1.**


## Wymagania początkowe

- Dostęp do VMware Horizon 7.1.


## W praktyce

Po zalogowaniu się do VMware Horizon wykonaj następujące kroki:

- przejdź do sekcji `Catalog`{.external}, następnie kliknij `Desktop Pool`{.external} i `Add`{.action}, aby otworzyć formularz tworzenia puli.

![tworzenie puli](images/1200.png){.thumbnail}

- następnie wybierz rodzaj puli `pool type` (np. *Zautomatyzowana*).


> [!primary]
>
> Istnieją trzy główne typy pul wirtualnych pulpitów: *zautomatyzowana*, *ręczna* oraz *RDS* (Remote Desktop Services).
>
> - *Zautomatyzowane* pule są tworzone na podstawie tego samego szablonu lub snapshota wirtualnej maszyny (VM).
>
> - *Ręczne* pule stacji roboczych są zbiorem wirtualnych maszyn lub komputerów. W przypadku pul *zautomatyzowanych* i *ręcznych* każda maszyna dostępna jest dla jednego zdalnego użytkownika w danym czasie.
>
> - Pule stacji roboczych *RDS* (Remote Desktop Service) nie są zbiorem maszyn. Udostępniają sesje stacji roboczej na hostach RDS. Z sesji stacji roboczej na hoście RDS może korzystać kilku użytkowników jednocześnie.
>


![tworzenie puli](images/1201.png){.thumbnail}

- Wybierz sposób w jaki użytkownicy będą przydzielani do wirtualnych pulpitów `User Assignment`{.action}:

 - *Dedicated:* wirtualny pulpit będzie przypisany do jednego użytkownika.
 - *Floating:* wirtualne pulpity z puli będą przydzielane użytkownikom w zależności od dostępności w danym momencie.

![tworzenie puli](images/1202.png){.thumbnail}

- Wybierz typ klonowania, który chcesz wykorzystać do tworzenia puli:

 - *Full virtual machines:* zostanie utworzony kompletny klon wirtualnej maszyny.
 - *View Composer linked clones:* utworzony zostanie klon powiązany ze snapshotem-wzorcem. Dzięki temu zużywasz mniej przestrzeni dyskowej, oszczędzasz zasoby i przyspieszasz uruchamianie, jednocześnie jednak utrzymane pozostaje silne powiązanie między szablonem maszyny wirtualnej a maszyną wirtualną uruchomionego pulpitu.

![tworzenie puli](images/1203.png){.thumbnail}

- Nadaj nazwę puli. Będziesz mógł zmienić wyświetlaną nazwę (*display name*) w późniejszym czasie, nie będziesz mógł jednak zmienić ID.

![tworzenie puli](images/1204.png){.thumbnail}

- Wybierz konfigurację puli (w razie potrzeby aktywuj *HTML access*).


> [!primary]
>
> Zalecamy użycie protokołu **Blast**. Zapewnia on większą płynność (niezależnie od przepustowości Twojego łącza), wyższy poziom bezpieczeństwa, a w przypadku użytkowników korzystających z usługi na urządzeniu przenośnym - istotnie mniejsze zużycie baterii. Więcej informacji o protokole znajdziesz pod [tym linkiem](https://docs.vmware.com/fr/VMware-Horizon-7/7.2/com.vmware.horizon-view.installation.doc/GUID-F64BAD49-78A0-44FE-97EA-76A56FD022D6.html){.external}.
>

![tworzenie puli](images/1205.png){.thumbnail}

- W kolejnym kroku wybierz sposób nadawania nazwy wirtualnym pulpitom, jak również liczbę wirtualnych maszyn.

![tworzenie puli](images/1206.png){.thumbnail}

- W następnym oknie wybierz, czy profile użytkowników będą umieszczone na dysku trwałym i czy potrzebny jest odrębny dysk do przechowywania tymczasowych plików.

![tworzenie puli](images/1207.png){.thumbnail}

- Możesz następnie wybrać sposób przechowywania danych, w tym odizolowanie dysków z systemem operacyjnym od dysków trwałych.

![tworzenie puli](images/1208.png){.thumbnail}

- W kolejnym oknie wybierz *szablon wirtualnej maszyny*, który chcesz zastosować.

> [!primary]
>
> Jeśli wirtualna maszyna nie pojawia się, wybierz `Show all parent VMs`{.action}, aby poznać przyczynę.
>

![tworzenie puli](images/1209.png){.thumbnail}

- Następnie wybierz *snapshot-szablon* (możliwy jest wybór kilku na potrzeby zarządzania wersjami, przeprowadzania testów lub produkcji w ramach różnych pul).

![tworzenie puli](images/1210.png){.thumbnail}

- Wybierz *docelowy folder* dla Twojej puli (w hierarchii katalogów vSphere). Zostanie w nim utworzony podfolder oznaczony nazwą puli, w którym przechowywane będą wirtualne maszyny.

![tworzenie puli](images/1211.png){.thumbnail}

- Wybierz *przestrzeń dyskową (datastore)*, która posłuży do przechowywania wirtualnych maszyn.

![tworzenie puli](images/1212.png){.thumbnail}

- W następnym oknie wybierz zaawansowane opcje związane z przechowywaniem wirtualnych pulpitów.

![tworzenie puli](images/1213.png){.thumbnail}

- Następnie możesz wybrać opcje związane z Active Directory oraz z personalizacją wirtualnych maszyn (wybierz personalizację SysPrep [spośród utworzonych w Private Cloud](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-sysprep/){.external}.

![tworzenie puli](images/1214.png){.thumbnail}

- Możesz również powiązać bezpośrednio użytkowników z daną pulą wirtualnych pulpitów lub zakończyć operację tworzenia puli i powiązać użytkowników później.

Tworzenie puli może potrwać dłużej lub krócej, w zależności od użytego szablonu. W przypadku błędu po stronie `Inventory` puli, system podaje szczegółowe informacje o procesie tworzenia każdej z wirtualnych maszyn, co pozwala zrozumieć przyczynę problemu.

Po utworzeniu puli możesz przejść do etapu [udostępniania wirtualnych pulpitów użytkownikom](https://docs.ovh.com/pl/cloud-desktop-infrastructure/udostepnianie-pulpitu/){.external}


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.