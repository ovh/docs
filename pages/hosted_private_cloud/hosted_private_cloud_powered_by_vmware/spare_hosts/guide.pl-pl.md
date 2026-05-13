---
title: 'Host zapasowy'
excerpt: 'Mechanizm wymiany hosta'
updated: 2026-05-12
---

## Wprowadzenie

OVHcloud w swoich umowach gwarantuje wymianę niedostępnego hosta.

**Ten przewodnik wyjaśnia, na czym polega wymiana hosta.**

## Wymagania początkowe

- Wykupienie usługi [Hosted Private Cloud](/links/hosted-private-cloud/vmware).

## W praktyce

### Dostarczenie zapasowego hosta

W przypadku awarii jednego z hostów automatycznie dostarczamy bezpłatny host zapasowy, aby zapewnić ciągłość usług.

Gdy tylko host zostanie dostarczony, otrzymasz wiadomość e-mail ze wszystkimi potrzebnymi informacjami oraz adresem IP hosta, dzięki czemu łatwo go znajdziesz w interfejsie vSphere.

Usługa VMware [HA (High Availability)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability) jest domyślnie aktywowana w klastrze. Jeśli pozostawisz ją włączoną, Twoje wirtualne maszyny zostaną automatycznie zrestartowane. Jeśli usługa [DRS (Distributed Resource Scheduler)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) jest włączona i skonfigurowana w trybie "Całkowicie automatycznym", równoważenie obciążeń na hostach w klastrze będzie również wykonywane automatycznie.

> [!warning]
> 
> Jeśli napęd CD/DVD jest nadal zamontowany lub podłączony do wirtualnej maszyny, usługa HA nie będzie w stanie uruchomić go ponownie na zapasowym hoście. Zalecamy, aby napęd CD/DVD zawsze był podłączony jako urządzenie klienckie.
>

### Jakie kroki należy wykonać po otrzymaniu hosta zapasowego

Rekomendujemy zwrócenie oryginalnego hosta, abyśmy mogli przeprowadzić testy diagnozujące przyczynę incydentu w celu uniknięcia potencjalnych awarii w przyszłości. W tym przypadku zachowasz host zapasowy. Zapoznaj się z przewodnikiem [Usunięcie hosta](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_host)

> [!warning]
> 
> W przypadku braku zwrotu jednego z dwóch hostów (oryginalny lub zapasowy) w terminie 7 dni, za host zapasowy będzie naliczana opłata godzinowa począwszy od 8. dnia.
>

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).
