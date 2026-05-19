---
title: "Web Cloud Databases - Zmiana uprawnień użytkownika"
excerpt: "Dowiedz się, jak zmienić uprawnienia użytkownika w rozwiązaniu Web Cloud Databases"
updated: 2026-03-24
---

## Wprowadzenie

Rozwiązanie [Web Cloud Databases](/links/web/databases) może zawierać kilka baz danych. Pozwala na zdefiniowanie jednego lub kilku użytkowników do zarządzania bazami danych i korzystania z nich. Ci użytkownicy mogą mieć wyższe lub niższe uprawnienia w zależności od ich ról na poziomie baz danych.
Podczas korzystania z produktu może być konieczna zmiana uprawnień użytkownika w rozwiązaniu [Web Cloud Databases](/links/web/databases).

**Dowiedz się, jak zmienić uprawnienia użytkownika w rozwiązaniu Web Cloud Databases.**

## Wymagania początkowe

- Posiadanie rozwiązania [Web Cloud Databases](/links/web/databases) oraz jednego lub kilku użytkowników.

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

> [!primary]
> Aby utworzyć nowego użytkownika w rozwiązaniu Web Cloud Databases, zapoznaj się z sekcją **Tworzenie użytkownika** w naszym przewodniku "[Tworzenie baz danych i użytkowników na serwerze bazy danych](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

<!-- CP-STEPS-START:wcdb-modify-rights-tabs -->
Kliknij poniższe zakładki, aby wyświetlić kolejno każdy z **4** kroków.

> [!tabs]
> **Etap 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etap 2**
>>
>> Na wyświetlonej stronie kliknij zakładkę `Użytkownicy i uprawnienia`{.action}.
>>
>> ![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Etap 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie wybranego użytkownika, a następnie `Zarządzanie uprawnieniami`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na nowej stronie znajdziesz tabelę z wszystkimi bazami danych dostępnymi w rozwiązaniu Web Cloud Databases. Tabela ta zawiera listę wszystkich uprawnień, którymi dysponuje użytkownik dla każdej bazy danych w rozwiązaniu Web Cloud Databases.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> Tutaj możesz zmienić uprawnienia użytkownika dla każdej bazy danych. W tym celu, dla każdej bazy danych, której dotyczy operacja, kliknij puste kółka odpowiadające uprawnieniom, które chcesz przedefiniować dla użytkownika. Zmiana zostanie zastosowana w ciągu kilku chwil.
<!-- CP-STEPS-END:wcdb-modify-rights-tabs -->

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
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">&#10004;</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
