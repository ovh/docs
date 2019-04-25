---
title: 'Komunikat o błędzie "Controller VM deleted"'
slug: blad-kontrolera-nsx
excerpt: 'Dowiedz się, co oznacza komunikat o błędzie "Usunięto VM kontrolera"'
section: NSX
---

**Ostatnia aktualizacja dnia 2018-06-12**

## Wprowadzenie

W interfejsie NSX może pojawić się komunikat *„Controller VM deleted”* (Usunięto VM kontrolera).

**Niniejszy przewodnik wyjaśnia, co oznacza ten komunikat.**


## Wymagania początkowe

- Posiadanie włączonej opcji NSX w usłudze Private Cloud
- Utworzenie użytkownika z [prawami dostępu NSX - FR](https://docs.ovh.com/fr/private-cloud/changer-les-droits-d-un-utilisateur/){.external}


## W praktyce

W [interfejsie NSX](https://docs.ovh.com/pl/private-cloud/dostep-interfejs-nsx/), w sekcji `Instalacja`{.action} pod nazwą kontrolera może pojawić się komunikat *Usunięto VM kontrolera*:

![Controller VM deleted NSX](images/controllervmdeleted.JPG)


Powodem wyświetlenia tego komunikatu jest fakt, że OVH nie hostuje kontrolerów wewnątrz Twojej infrastruktury, aby nie zużywać na niej zasobów, tylko na odrębnej wewnętrznej infrastrukturze zarządzania.

Zgodnie ze standardową konfiguracją NSX kontrolery zlokalizowane są w tym samym datacenter, co wirtualne maszyny, stąd komunikat o błędzie. Wyświetlenie tego komunikatu nie będzie miało żadnego wpływu na funkcjonowanie Twojej maszyny. 

Sprawdź jedynie w interfejsie NSX, czy status kontrolerów to `Podłączony` (ang. Connected). Jeśli tak jest, Twoja maszyna działa poprawnie.


> [!warning]
>
> Próba usunięcia błędu poprzez kliknięcie przycisku `Rozwiąż`{.action} spowoduje usunięcie kontrolerów z Twojej infrastruktury i zakłóci korzystanie z NSX lub sieci infrastruktury. Zalecamy zatem, aby nie wykonywać tej czynności. Zarządzanie kontrolerami NSX pozostaje w gestii OVH.
> 

To wyjaśnia również alert w dashboardzie NSX:

![Alert w interfejsie NSX](images/controllervmdeleted2.JPG)


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.