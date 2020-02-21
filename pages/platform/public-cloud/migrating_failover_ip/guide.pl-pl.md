---
title: 'Przeniesienie adresu IP Fail Over'
excerpt: 'Przeniesienie adresu IP Fail Over'
slug: przeniesienie_adresu_ip_fail_over
legacy_guide_number: g1890
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 04-12-2019**

## 
W tym przewodniku wyjaśniono, jak przenieść adres IP Failover (używany w przypadku awarii) z jednej instancji do innej. Dzięki tej operacji można ograniczyć czas niedostępności serwera lub uniknąć sytuacji braku dostępności, a ponadto jest możliwe:

- przeniesienie wielu stron internetowych do ich „nowych wersji”,
- prowadzenie działalności na serwerze zreplikowanym przy jednoczesnym przeprowadzaniu konserwacji lub aktualizacji na serwerze produkcyjnym.




## Wymagania początkowe

- Co najmniej dwie działające instancje Public Cloud
- Adres IP Failover




## 

- Aby rozpocząć, kliknij sekcję Failover IP poniżej pozycji Sieć w lewym menu. Z informacji w wyświetlonym oknie wynika, że adres IP Failover jest kierowany do instancji A (instance_A), a ma zostać przekierowany do instancji B (instance_B).

![](images/failover.png){.thumbnail}

Kliknij ikonę z trzema kropkami po prawej stronie adresu IP Failover, a następnie wybierz pozycję Zmodyfikuj powiązaną instancję.

![](images/modify.png){.thumbnail}

Kliknij pole obok serwera docelowego.

![](images/modify1.png){.thumbnail}

- Kliknij przycisk Dołącz.

- Po kilku sekundach Panel klienta zostanie zaktualizowany. Zostanie też wyświetlony następujący komunikat z potwierdzeniem pomyślnego przeniesienia:

![](images/modify2.png){.thumbnail}

## 

Adres IP Failover można skonfigurować na serwerze docelowym przed przeniesieniem lub po nim. Jeśli został skonfigurowany wcześniej, zacznie odpowiadać od razu po ukończeniu operacji routingu.


## 
[Powrót do indeksu przewodników rozwiązania Cloud]({legacy}1785)

