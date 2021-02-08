---
title: 'Konfiguracja sieci vRack między Public Cloud a serwerem dedykowanym'
slug: konfiguracja-vrack-pci-serwer-dedykowany
excerpt: 'Dowiedz się, jak skonfigurować prywatną sieć między instancją Public Cloud a serwerem dedykowanym'
section: vRack
---

**Ostatnia aktualizacja z dnia 26-10-2018**

## Wprowadzenie

Rozwiązanie [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external} umożliwia konfigurację sieci między dwoma lub więcej [serwerami dedykowanymi](https://www.ovh.pl/serwery_dedykowane/){.external} OVH. Umożliwia ponadto dodawanie [instancji Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external} do Twojej prywatnej sieci w celu utworzenia infrastruktury z zasobów fizycznych i wirtualnych. 

**Niniejszy przewodnik wyjaśnia, jak skonfigurować prywatną sieć między instancją Public Cloud a serwerem dedykowanym.**


## Wymagania początkowe

- Aktywowanie usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
- Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane//){.external} kompatybilnego z rozwiązaniem vRack
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Dostęp do wybranego zakresu Twoich prywatnych adresów IP


## W praktyce

### Utworzenie projektu Public Cloud

Po zalogowaniu się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} kliknij menu `Cloud`{.action}, następnie przycisk `Zamów`{.action}.

![Utwórz projekt](images/pci-project-01.png){.thumbnail}

W menu `Zamów` kliknij przycisk `Projekt cloud`{.action}.

![Utwórz projekt](images/pci-project-02.png){.thumbnail}

Nadaj nazwę projektowi, wybierz tryb płatności, następnie kliknij przycisk `Utwórz projekt`{.action}.

![Utwórz projekt](images/pci-project-03.png){.thumbnail}

Po skonfigurowaniu Twojego projektu aktywuj prywatne sieci. Kliknij przycisk `Aktywuj prywatne sieci`{.action} na stronie projektu.

![Aktywuj vRack](images/pci-vrack-01.png){.thumbnail}

Następnie wybierz opcję `Istniejąca`{.action}, po czym wybierz Twoją sieć vRack na rozwijanej liście.

![Aktywuj vRack](images/pci-vrack-02.png){.thumbnail}


### Utworzenie instancji Public Cloud.

Na stronie Twojego projektu kliknij przycisk `Operacje`{.action}.

![Utwórz instancję](images/pci-01.png){.thumbnail}

Na rozwijanej liście kliknij opcję `Dodaj serwer`{.action}.

![Utwórz instancję](images/pci-02.png){.thumbnail}

Kliknij przycisk `Opcje zaawansowane`{.action}.

![Utwórz instancję](images/pci-03.png){.thumbnail}

Następnie na rozwijanej liście kliknij **Przypisz prywatną sieć:** i wybierz Twoją sieć vRack. Potem kliknij `Dalej`{.action}, aby powrócić do poprzedniego ekranu.

![Utwórz instancję](images/pci-04.png){.thumbnail}

Aby zakończyć operację, wybierz opcje instalacji i kliknij przycisk `Uruchom teraz`{.action}.

![Utwórz instancję](images/pci-05.png){.thumbnail}


### Konfiguracja interfejsów sieciowych

Aby dowiedzieć się, jak skonfigurować interfejsy sieciowe między nowo utworzoną instancją Public Cloud a Twoim serwerem dedykowanym, skorzystaj z instrukcji [Konfiguracja kilku serwerów dedykowanych w sieci vRack](https://docs.ovh.com/pl/dedicated/konfiguracja-kilku-serwerow-dedykowanych-vrack/){.external}.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.