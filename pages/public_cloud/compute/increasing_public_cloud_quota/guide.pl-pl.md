---
title: 'Zwiększenie limitów Public Cloud'
excerpt: 'Dowiedz się, jak zwiększyć limity Public Cloud'
updated: 2024-05-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Domyślnie liczba zasobów (RAM, CPU, przestrzeń dyskowa, liczba instancji...) oraz projektów, które możesz utworzyć jest ograniczona.

Jeśli chcesz utworzyć więcej zasobów, musisz zwiększyć limit.

**Dowiedz się, jak zwiększyć limit Public Cloud w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- [Posiadanie ważnego](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) sposobu płatności w Panelu klienta OVHcloud.

## Wskazówki

### Zwiększenie limitu zasobów

Zgodnie z wewnętrznymi kryteriami (staż pracy, istnienie faktur zapłaconych...) możesz teraz dowolnie wnioskować o zwiększenie limitu zasobów projektu Public Cloud bezpośrednio w Panelu klienta OVHcloud.

Możesz zwiększyć limit zasobów ręcznie lub automatycznie.

#### Ręczne zwiększanie limitu zasobów

Procedura ta pozwala na ręczne zażądanie zwiększenia rozmiaru projektu i jego zatwierdzenie z góry (zasilenie Public Cloud).

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz Twój projekt Public Cloud.

Na lewym pasku bocznym kliknij pozycję `Quota and Regions`{.action}.

![access quota](images/raisepciquota1-2023.png){.thumbnail}

Na stronie tej znajdziesz podsumowanie aktualnych kwot Twojego projektu w rozbiciu na regiony. Obok zasobu pojawia się ostrzeżenie, gdy osiągnie się 80% jego limitu.

Aby zwiększyć limit, kliknij `Zwiększ limity`{.action}.

![raise-pci-quota](images/raisepciquota2023.png){.thumbnail}

Następnie kliknij na strzałkę rozwijaną obok "Wybierz wolumen", aby wyświetlić listę limitów zasobów, na które można aktualnie uaktualnić zasoby. W tej sekcji pokazano również kwotę do zapłaty w celu skorzystania z tych zasobów.

![select quota](images/selectquotas.png){.thumbnail}

Poniższa tabela wyszczególnia zasoby, które możesz uzyskać dla każdego limitu:

|Quota|Instancje|CPU/Cores|RAM (MB)|Rozmiar woluminu (GB)|Woluminy|Snapshots|Rozmiar kopii zapasowej (GB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|10 VMs|10|34|430080|20000|100|600|60000|15|5|2|
|20 VMs|20|40|430080|20000|200|1200|120000|30|10|4|
|50 VMs|50|64|507904|20000|500|3000|300000|75|25|10|
|100 VMs|100|128|1015808|40000|1000|6000|600000|300|10|10|
|200 VMs|200|512|4063232|80000|2000|12000|1200000|600|50|50|

Po wybraniu wolumenu kliknij przycisk `Zatwierdź`{.action}. Twoja płatność zostanie przetworzona tak szybko, jak to możliwe.

> [!warning]
> Rozliczenie na fakturze jest natychmiastowe.
>
> Po kliknięciu przycisku `Zatwierdź`{.action} zamówienie jest automatycznie tworzone i opłacane.
>

#### Automatyczne zwiększanie limitu zasobów dzięki "Limit autoscalingu"

Ta opcja pozwala na żądanie automatycznego, stopniowego zwiększenia limitu zasobów. Twój limit zostanie zwiększony w zależności od zużycia i zgodnie z pewną liczbą kryteriów wewnętrznych.

Nie jest to proces natychmiastowy, a przydział zasobów jest zwiększany z czasem.

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz Twój projekt Public Cloud.

Na lewym pasku bocznym kliknij pozycję `Quota and Regions`{.action}.

Kliknij na `?`{.action} aby uzyskać więcej informacji na temat tej funkcji, kliknij `ikonę przełącznika`{.action}, aby przełączyć stan na "**Aktywny**".

![autoscaling](images/autoscaling2023.png){.thumbnail}

Po wykonaniu tej czynności, autoscalingu zostanie włączony dla Twojego projektu, a Twój limit zasobów będzie zwiększany z biegiem czasu.

### Zwiększenie limitów Twoich projektów Public Cloud

Jeśli osiągnąłeś maksymalną liczbę projektów Cloud dozwoloną w Twoim Panelu klienta i chcesz tworzyć dodatkowe projekty, zwróć się o to do naszego zespołu obsługi klienta.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
