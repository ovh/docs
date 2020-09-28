---
title: Dostęp do interfejsu zarządzania NSX
slug: dostep-interfejs-nsx
excerpt: Poznaj interfejs NSX
section: NSX
order: 1
---

**Ostatnia aktualizacja z dnia 03-09-2020**

## Wprowadzenie

NSX to rozwiązanie Software Defined Network (SDN) stworzone przez VMware, które aktywowane jest z poziomu vCenter i sterowane bezpośrednio z interfejsu vSphere. Za pomocą NSX skonfigurujesz zasady dostępu do swoich sieci, utworzysz politykę bezpieczeństwa oraz wdrożysz różne usługi sieciowe niezbędne do zbudowania infrastruktury.

**Ten przewodnik prezentuje interfejs NSX.**

## Wymagania początkowe

- Posiadanie aktywnego identyfikatora użytkownika z uprawnieniami dla NSX.
- Dostęp do [interfejsu vSphere](../polaczenie-interfejs-vsphere/)

## W praktyce

VMWare NSX jest dostępny tylko z poziomu interfejsu vSphere.

Na stronie głównej klienta vSphere kliknij kategorię `Networking and Security`{.action} w menu po lewej stronie:

![Networking and Security](images/nsx01.png){.thumbnail}

Masz teraz dostęp do strony głównej NSX oraz wszystkich menu.


> [!primary]
>
> Aby uzyskać dostęp do API NSX, użyj linku https://nsx.pcc-x-x-x-x.ovh.com/api
>
> Przykład pokazujący, jak przywrócić konfigurację firewall: 
>
> ```
> curl -u "admin:xxxx" -XGET "https://nsx.pcc-x-x-x-x.ovh.com/api/4.0/firewall/globalroot-0/defaultconfig"
> ```
>
> Ze względów bezpieczeństwa /api/1.0/ nie są obsługiwane.
> 


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
