---
title: "Web Cloud Databases - Zmiana uprawnień użytkownika"
excerpt: "Dowiedz się, jak zmienić uprawnienia użytkownika w rozwiązaniu Web Cloud Databases"
updated: 2025-06-23
---

## Wprowadzenie

Rozwiązanie [Web Cloud Databases](/links/web/databases) może zawierać kilka baz danych. Pozwala ona na zdefiniowanie jednego lub kilku użytkowników do zarządzania i korzystania z baz danych. Ci użytkownicy mogą mieć wyższe lub niższe uprawnienia w zależności od ich ról na poziomie Twoich baz danych.
Podczas korzystania z produktu może być konieczna zmiana uprawnień użytkownika do [Web Cloud Databases](/links/web/databases).

**Dowiedz się, jak zmienić uprawnienia użytkownika w rozwiązaniu Web Cloud Databases.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Posiadanie rozwiązania [Web Cloud Databases](/links/web/databases) oraz jednego lub kilku użytkowników.

## W praktyce

> [!primary]
> Aby utworzyć nowego użytkownika w rozwiązaniu Web Cloud Databases, zapoznaj się z sekcją **Tworzenie użytkownika** w naszym przewodniku "[Tworzenie baz danych i użytkowników na serwerze bazy danych](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Kliknij poniższe zakładki, aby wyświetlić kolejne kroki **5**.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Web Cloud Databases`{.action}, następnie wybierz odpowiednie rozwiązanie Web Cloud Databases.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Użytkownicy i uprawnienia`{.action}.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Etap 4**
>>
>> W tabeli się pojawi przycisk `...`{.action} po prawej stronie wybranego użytkownika, następnie `Zarządzanie uprawnieniami`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Etap 5**
>>
>> Na nowej stronie, która się wyświetli, znajduje się tabela wyszczególniająca wszystkie bazy danych dostępne w rozwiązaniu Web Cloud Databases. W tej tabeli wyświetlisz listę wszystkich uprawnień, którymi dysponuje Twój użytkownik dla każdej bazy danych dostępnej w Twoim rozwiązaniu Web Cloud Databases.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> Tutaj możesz zmienić uprawnienia użytkownika dla każdej bazy danych. W tym celu, dla każdej bazy danych, której dotyczy operacja, wystarczy kliknąć puste kółka odpowiadające uprawnieniom, które chcesz przedefiniować dla użytkownika. Zmiana jest wykonywana w ciągu kilku minut.

Poniżej znajduje się tabela podsumowująca możliwe typy zapytań do bazy danych w zależności od uprawnień przyznanych użytkownikowi:

<table align="center">
<thead>
<tr>
<th><center>Uprawnienia</center></th>
<th><center>Administrator</center></th>
<th><center>Odczyt / Zapis</center></th>
<th><center>Odczyt</center></th>
<th><center>Żaden</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Sprawdź również
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).