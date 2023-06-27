---
title: VMware Fault Tolerance
excerpt: Zapewnienie ciągłości działania wirtualnej maszyny przy użyciu Fault Tolerance
legacy_guide_number: '2163251'
updated: 2020-07-07
---

**Ostatnia aktualizacja z dnia 11-09-2020**

## Wprowadzenie

Funkcja **Fault Tolerance** (FT) w VMware vSphere pozwala chronić wirtualną maszynę przed awariami sprzętowymi poprzez sklonowanie jej na dwóch oddzielnych hostach.

![Fault Tolerance](images/FT10v2.gif){.thumbnail}

**Dowiedz się, jak korzystać z funkcji Fault Tolerance na Twojej wirtualnej maszynie**

## Wymagania początkowe

- Aktywacja vSphere HA
- Rezerwacja zasobów równa 100% pamięci
- Instalacja VMware Tools 
- Procesory tej samej generacji
- Maksymalnie 4 vCPU

## W praktyce 


Aby włączyć opcję **Fault Tolerance**, kliknij wirtualną maszynę prawym przyciskiem myszy, po czym kliknij kolejno `Fault Tolerance` i `Włącz Fault Tolerance`.

![Fault Tolerance](images/FT.png){.thumbnail}

W oknie konfiguracyjnym, które się otworzy, wybierz ustawienia dla zapasowej maszyny wirtualnej.

Magazyn danych:

![Fault Tolerance](images/FT1.png){.thumbnail}

Host 

![Fault Tolerance](images/FT2.png){.thumbnail}

Podsumowanie wybranych ustawień. Zatwierdź, aby włączyć FT w Twojej wirtualnej maszynie.

![Fault Tolerance](images/FT3.png){.thumbnail}

Twoja wirtualna maszyna jest teraz chroniona za pomocą **Fault Tolerance**, przypisana do niej ikona zmieniła się, a nazwa maszyny wskazuje status "Primary".

![Fault Tolerance](images/FT4.png){.thumbnail}

W zależności od Twoich potrzeb, dostępnych jest teraz kilka operacji.

![Fault Tolerance](images/FT5.png){.thumbnail}

## Niemożliwe działania i niekompatybilności

Na maszynie wirtualnej z włączoną funkcją **Fault Tolerance** nie jest możliwe wykonywanie pewnych działań ani korzystanie z niektórych urządzeń.

Lista niemożliwych do przeprowadzenia działań dostępna jest [na tej stronie](https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.avail.doc/GUID-F5264795-11DA-4242-B774-8C3450997033.html){.external-link}, a lista niekompatybilności na [tej stronie](https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.avail.doc/GUID-C1749AD4-70E2-406C-864C-719F54BF1BC1.html){.external-link}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
