---
title: 'Weryfikacja i blokowanie podatności L1TF'
slug: weryfikacja-blokowanie-podatnosci-l1tf
excerpt: 'Dowiedz się, jak zablokować lukę L1TF'
section: Bezpieczeństwo
---

**Ostatnia aktualizacja z dnia 01-06-2019**

## Wprowadzenie

W związku z informacją o istnieniu podatności L1TF („L1 Terminal Fault” lub „Foreshadow”), opublikowane zostały różne procedury i udostępnione łatki mające na celu zminimalizowanie ryzyka.

**Przewodnik wyjaśnia, jak zablokować podatność L1TF.**

## Wymagania początkowe

- Utworzony użytkownik z uprawnieniami do logowania do vSphere
- Używanie opcji Hyper-Threading w wirtualnych maszynach 

## W praktyce

Przypomnienie:

|Wariant|podatność|usunięta za pomocą łatki?|
|:---|:---:|:---:|
|Wariant 1: L1 Terminal Fault - VMM (CVE-2018-3646)|TAK|NIE (ale zneutralizowana)||
|Wariant 2: L1 Terminal Fault - OS (CVE-2018-3620)|NIE| |
|Wariant 3: L1 Terminal Fault - SGX (CVE-2018-3615)|NIE| |

> [!primary]
> 
> L1 Terminal Fault - OS (CVE-2018-3620) [nie ma negatywnego wpływu na hiperwizory VMware](https://kb.vmware.com/s/article/55807) i [wymaga lokalnego dostępu do vCenter/VCSA](https://kb.vmware.com/s/article/52312).
>

> [!primary]
> 
> L1 Terminal Fault - SGX (CVE-2018-3615) nie ma negatywnego wpływu na hiperwizory VMware: [https://kb.vmware.com/s/article/54913](https://kb.vmware.com/s/article/54913).
> 

Jeśli chodzi o ofertę **Private Cloud**, jedynie pakiety SDDC są zagrożone tą podatnością.

Więcej informacji o tej luce znajdziesz w naszym [artykule na blogu](https://www.ovh.com/fr/blog/ovh-l1-terminal-fault-l1ft-foreshadow-disclosure/){.external-link}.

## Proces mitygacji zagrożenia

> [!primary]
>
> Pamiętaj, że luka nie zostaje usunięta za pomocą opisanych poniżej operacji.
>
> Operacje umożliwiają jedynie wyłączenie opcji Hyper-Threading na Twoich hostach ESXi. Ponieważ jednak podatność L1TF potrzebuje do działania opcji Hyper-Threading, jej wyłączenie chroni Twoją infrastrukturę przed wykorzystaniem podatności.
>

Proces neutralizacji jest opisany w bazie wiedzy VMware : [https://kb.vmware.com/s/article/55806](https://kb.vmware.com/s/article/55806){.external-link}.

Procedura dzieli się na trzy różne fazy.

### Etap 1: aktualizacja

Aktualizacja vCenter jest wykonywana przez OVH, jednak łatkę hostów ESXi instaluje samodzielnie użytkownik. Jest ona dostępna [w menedżerze aktualizacji](https://docs.ovh.com/pl/private-cloud/korzystanie_z_vmware_update_manager/){.external-link}.

Listę łatek dla hostów ESXi znajdziesz w [tym dokumencie](https://www.vmware.com/security/advisories/VMSA-2018-0020.html){.external-link}.

Po aktualizacji hostów w podsumowaniu hosta pojawi się następujący alert:

![](images/warningMsg.png){.thumbnail}

### Etap 2: ewaluacja środowiska

W tej fazie hosty ESXi są zaktualizowane, ale poprawka nie jest jeszcze zastosowana.

Ważne, abyś był świadomy, że mogą wystąpić potencjalne problemy wymienione we wspomnianej wyżej [bazie wiedzy](https://kb.vmware.com/s/article/55806){.external-link} oraz spadki wydajności opisane w tej bazie: [https://kb.vmware.com/s/article/55767](https://kb.vmware.com/s/article/55767){.external-link}.

### Etap 3: aktywacja

Po zapoznaniu się z poszczególnymi elementami możesz aktywować parametr umożliwiający wyłączenie Hyper-Threadingu (w zaawansowanych ustawieniach systemu).

![mitigation](images/enableMitigation.png){.thumbnail}

Na górze po prawej stronie okna dostępny jest filtr.

Operację tę należy wykonać na każdym hoście.

Aby dowiedzieć się więcej, możesz przejść do etapu 3 dotyczącego rozwiązania zaprezentowanego w [tej bazie wiedzy VMware](https://kb.vmware.com/s/article/55806){.external-link}.

> [!warning]
> 
> Jeśli po przejrzeniu poszczególnych elementów nie chcesz wyłączyć Hyper-threadingu, możesz usunąć wiadomość z alertem, postępując zgodnie z instrukcjami z tej [bazy wiedzy](https://kb.vmware.com/s/article/57374){.external-link}.
> 
> ![](images/deleteWarning.png){.thumbnail}
> OVH nie zaleca tego rozwiązania i nie ponosi odpowiedzialności za ryzyko podjęte przez użytkownika.
>

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.