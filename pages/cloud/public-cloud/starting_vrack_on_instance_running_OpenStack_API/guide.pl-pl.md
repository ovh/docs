---
title: Dodanie instancji Public Cloud do usługi vRack przez API OpenStack
slug: uruchomienie-vrack-openstack-api
excerpt: Uruchomienie usługi vRack dla już działających instancji Public Cloud za pomocą API OpenStack
section: Zarządzanie w OpenStack CLI
---

**Ostatnia aktualizacja dnia 2018-03-19**

## Wprowadzenie

Technologia [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external} czyli wirtualna szafa umożliwia zebranie wielu serwerów, bez względu na ich liczbę i fizyczną lokalizację w naszych centrach danych, i ich podłączenie do wirtualnego przełącznika w ramach tej samej prywatnej sieci. Pozwala na łączenie, odizolowanie i rozdzielenie usług OVH w ramach jednej lub kilku prywatnych i zabezpieczonych sieci. Rozwiązanie vRack jest kompatybilne z [serwerami dedykowanymi](https://www.ovh.pl/serwery_dedykowane/){.external} (zgodnie z ofertą), instancjami [Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external}, rozwiązaniem [Private Cloud](https://www.ovh.pl/private-cloud/){.external}.

**Przewodnik opisuje przypadek, gdy usługa vRack jest uruchamiana już po zainstalowaniu instancji, co jest równoznaczne z brakiem skonfigurowanych prywatnych sieci w projekcie. W takim przypadku instancja nie posiada uruchomionego drugiego interfejsu sieciowego dla vRack i należy go utworzyć.**



## Wymagania początkowe

- Instancja [Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external}
- Uruchomiona usługa [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
- Utworzona sieć prywatna VLAN w projekcie
- Projekt przypisany do usługi vRack


## W praktyce

Instancja potrzebuje drugiego interfejsu sieciowego do połączenia z usługą vRack. Niestety ta operacja nie jest obecnie możliwa do realizacji za pomocą Panelu klienta.

Do pracującej już instancji interfejs sieci prywatnej można dodać korzstając z API OVH ([Dodanie usługi vRack do instancji Public Cloud przez API OVH](https://docs.ovh.com/pl/public-cloud/uruchomienie-vrack-instancje-api-ovh/){.external}) lub korzystając ze środowiska API OpenStack. 

Zadanie należy realizować chronologicznie wykonując czynności z przytoczonych poniżej przewodników i instrukcji:

### Etap 1: instalacja programów OpenStack na instancji

Aby móc zarządzać usługami Public Cloud za pomocą terminala, możesz zainstalować programy OpenStack w Pythonie.
skorzystaj z przewodnika: [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/){.external}
 

### Etap 2: ładowanie zmiennych rodowiskowych OpenStack

W kontekście korzystania z klientów OpenStack konieczne jest załadowanie zmiennych środowiskowych, które umożliwiają uwierzytelnianie w punktach dostępowych OVH.
Jak załadować zmienne środowiskowe wyjaśniamy w przewodniku: [Załadowanie zmiennych środowiskowych](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/){.external}


### Etap 3: dodanie interfejsu sieciowego do instancji

Po podłączeniu do interfejsu API OpenStack można dodać prywatny interfejs sieciowy do już istniejącej instancji. W tym celu wykonaj poniższe kroki.

#### Krok 1: wylistowanie dostępnych sieci

```sh
~$ nova network-list

+-------------------------------------+---------+------+
| ID                                   | Label   | Cidr |
+-------------------------------------+---------+------+
| 6c928965-47ea-463f-acc8-6d4a152e9745 | Ext-Net | -    |
| c8f6e94a-d765-4d53-ad2a-704152fd88e9 | VLAN 11 | -    |
+-------------------------------------+---------+------+

```

#### Krok 2: wylistowanie dostępnych instancji

```sh
$ nova list
+-------------------------------------+----------+--------+---------+------------+------------------------+
| ID                                   | Name     | Status |  Task   |  Power     | Networks                |
|                                      |          |        |  State  |  State     |                         |
+-------------------------------------+----------+--------+---------+------------+------------------------+
| 450beda7-564e-4803-9583-xxxxxxxxxxxx | Serwer 1 | ACTIVE | -       | Running    | Ext-Net=54.38.xxx.xxx,  |
|                                      |          |        |         |            | 2001:41d0:xxx:xxx::xxx  |
+-------------------------------------+----------+--------+---------+------------+------------------------+
```


#### Krok 3: dodanie interfejsu sieciowego do wybranej instancji

```sh
$ nova interface-attach --net-id 73ea574c-fd7b-479c-9839-xxxxxxxxxxxx 'Serwer 1'
```


#### Krok 4: weryfikacja poprawności działania

```sh
$ nova list
+-------------------------------------+----------+--------+---------+------------+------------------------+
| ID                                   | Name     | Status |  Task   |  Power     | Networks                |
|                                      |          |        |  State  |  State     |                         |
+-------------------------------------+----------+--------+---------+------------+------------------------+
| 450beda7-564e-4803-9583-xxxxxxxxxxxx | Serwer 1 | ACTIVE | -       | Running    | vlan_20=10.10.20.31;     |
|                                      |          |        |         |            | Ext-Net=54.38.xxx.xxx,  |
|                                      |          |        |         |            | 2001:41d0:xxx:xxx::xxx  |
+-------------------------------------+----------+--------+---------+------------+------------------------+
```




### Etap 4: konfiguruacja dodanego interfejsu sieciowego po stronie instancji

Aby umożliwić połączenie instancji z vRack należy skonfigurować co najmniej jeden adres IP na dodanym przed chwilą interfejsie sieciowym.
Część dotyczącą konfiguracji znajdziesz w etapie drugim przewodnika [Dodanie instancji Public Cloud do usługi vRack przez API OVH](https://docs.ovh.com/pl/public-cloud/uruchomienie-vrack-instancje-api-ovh/#etap-2-dzialania-w-systemie-operacyjnym-instancji){.external}



## Sprawdź również

[Włączanie i wyłączanie usługi vRack](https://docs.ovh.com/pl/public-cloud/Wlaczanie-wylaczanie-vrack/){.external}

[Połączenie instancji Public Cloud z innymi produktami OVH za pomocą vRack](https://docs.ovh.com/pl/public-cloud/polaczenie-vrack-public-cloud-inne-uslugi/){.external}

[Tworzenie i usuwanie prywatnych sieci vRack](https://docs.ovh.com/pl/public-cloud/tworzenie-usuwanie-vlan-w-vrack/){.external}

[Zmiana hasła dla użytkownika OpenStack](https://docs.ovh.com/pl/public-cloud/zmiana-hasla-horizon/){.external}


Przyłącz się do społeczności naszych użytkowników na <https://community.ovh.com/en/>.