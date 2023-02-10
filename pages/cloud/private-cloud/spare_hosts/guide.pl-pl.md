---
title: 'Host zapasowy'
excerpt: 'Mechanizm wymiany hosta'
slug: hosty_zapasowe
section: 'Funkcjonalności OVHcloud'
legacy_guide_number: g860
order: 4
updated: 2020-06-29
---

**Ostatnia aktualizacja z dnia 02-09-2020**

## Wymagania początkowe

- Wykupienie usługi [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/).

## Wprowadzenie

OVHcloud w swoich umowach gwarantuje wymianę niedostępnego hosta.

**Ten przewodnik wyjaśnia, na czym polega wymiana hosta.**

## Dostarczenie zapasowego hosta

W przypadku awarii jednego z hostów automatycznie dostarczamy bezpłatny host zapasowy, aby zapewnić ciągłość usług. 

Gdy tylko host zostanie dostarczony, otrzymasz wiadomość e-mail ze wszystkimi potrzebnymi informacjami oraz adresem IP hosta, dzięki czemu łatwo go znajdziesz w interfejsie vSphere.

Usługa VMware [High Availability](../vmware-ha-high-availability)(HA) jest domyślnie aktywowana w klastrze. Jeśli pozostawisz ją włączoną, Twoje wirtualne maszyny zostaną automatycznie zrestartowane. Jeśli usługa Distributed Resources Scheduler (DRS) jest włączona i skonfigurowana w trybie "Pełna automatyzacja", równoważenie obciążeń na hostach w klastrze będzie również wykonywane automatycznie.

> [!warning]
> 
> Jeśli napęd CD/DVD jest nadal zamontowany lub podłączony do wirtualnej maszyny, usługa HA nie będzie w stanie uruchomić go ponownie na zapasowym hoście. Zalecamy, aby napęd CD/DVD zawsze był podłączony jako urządzenie klienckie.
>

## Jakie kroki należy wykonać po otrzymaniu hosta zapasowego

Po przywróceniu działania oryginalnego hosta możesz nam zwrócić jeden z hostów (host zapasowy lub oryginalny).

Rekomendujemy zwrócenie oryginalnego hosta, abyśmy mogli przeprowadzić testy diagnozujące przyczynę incydentu w celu uniknięcia potencjalnych awarii w przyszłości. W tym przypadku zachowasz host zapasowy. Zapoznaj się z przewodnikiem [Usunięcie hosta](../usuwanie-serwera-hosta/)

OVHcloud automatycznie odzyska oryginalny host, gdy tylko zostanie on usunięty.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
