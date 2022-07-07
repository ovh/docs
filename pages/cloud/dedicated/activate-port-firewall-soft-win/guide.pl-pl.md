---
title: Konfiguracja firewalla w systemie Windows
excerpt: Dowiedz się, jak skonfigurować firewall w systemie Windows
slug: firewall-windows
section: Tutoriale
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 31-01-2022**

## Wprowadzenie

Aby optymalnie chronić system, serwer z systemem Windows Server dysponuje własną zintegrowaną zaporą ogniową. Jego konfiguracja pozwala na zwiększenie poziomu bezpieczeństwa i gwarantuje dostępność i integralność wszystkich elementów hostowanych na serwerze, takich jak role, usługi, foldery współdzielone.

**Niniejszy przewodnik wyjaśnia, jak stosować reguły firewalla w systemie Windows.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub zabezpieczeniem serwera rekomendujemy skorzystanie z pomocy wyspecjalizowanego usługodawcy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) z systemem Windows na koncie OVHcloud
- Dostęp administratora do serwera przez zdalny pulpit w systemie Windows 

## W praktyce

### Etap 1: dostęp do firewalla Windows

Aby uzyskać dostęp do firewalla Windows, możesz postępować zgodnie z tą kolejnością:

- kliknij przycisk `Start`{.action};
- kliknij `Szukaj`{.action};
- wyszukaj "Firewall Windows" na pasku wyszukiwania;
- kliknij `Firewall Windows`{.action}.

Następnie kliknij pozycję Konfiguracja `zaawansowana`{.action}.

![Step1](images/step1.PNG){.thumbnail}

### Etap 2: aktywuj regułę ruchu przychodzącego

W wyświetlonym oknie znajdziesz parametry takie jak:

- Zasady wjazdu i wyjazdu
- Reguły bezpieczeństwa logowania
- Opcje monitorowania zapory sieciowej serwera

Wybierając ` `{.action}Reguły ruchu przychodzącego, wyświetlają się wszystkie wstępnie skonfigurowane reguły Windows Server związane z połączeniami sieciowymi i przychodzącymi pakietami. Niektóre z tych reguł nie są domyślnie aktywowane. Jeśli chcesz je włączyć, kliknij prawym przyciskiem myszy regułę i wybierz opcję `Włącz regułę`{.action}.

![Step1](images/step2.PNG){.thumbnail}

### Etap 3: utworzyć nową regułę 

Aby utworzyć nową regułę, przejdź do menu `Action`{.action} i wybierz `Nową regułę`{.action}.
Kliknij opcję `Nowa reguła`{.action} w panelu po prawej stronie.

![Step3](images/step3.PNG){.thumbnail}

### Etap 4: zdefiniować rodzaj reguły, którą chcesz włączyć

Asystent wyświetla się, aby zdefiniować rodzaj reguły, którą chcesz utworzyć. Wybierz kratkę `Port`{.action}.

![Step4](images/step4.PNG){.thumbnail}

### Etap 5: zdefiniować typ portu, który ma zostać aktywowany

Na następnym etapie zdefiniuj rodzaj portu, który ma zostać aktywowany:

![Step5](images/step5.PNG){.thumbnail}

> [!primary]
>
>- TCP (protokół kontroli transmisji)
>Jest to protokół przeznaczony do logowania, co oznacza, że dzięki TCP można utworzyć połączenia między sobą, aby wysyłać strumienie danych. Protokół ten gwarantuje, że dane są dostarczane odbiorcy bez błędów i w tej samej kolejności, w jakiej zostały wysłane.
>
>- UDP (User Datagram Protocol - Protokół datagramu użytkownika)
>To protokół nieprzeznaczony do logowania. Jego rozwój opiera się na wymianie datagramów i ułatwia wysyłkę datagramów z sieci. Konieczne jest wcześniejsze nawiązanie połączenia z miejscem przeznaczenia.
>
>Możesz również wybrać kratkę `Wszystkie porty lokalne`{.action}, aby aktywować wszystkie porty TCP lub UDP na niezabezpieczonym serwerze. Możesz również zaznaczyć kratkę `Porty lokalne`{.action}, aby określić, który port ma być dozwolony. 
>

### Etap 6: autoryzuj lub blokuj połączenie

Aby określić działanie, które ta reguła wywoła, dostępne są następujące opcje. Wybierz ten, który Ci odpowiada.

- **Zezwalaj na połączenie**. Opcja ta pozwala na pełną komunikację za pośrednictwem tego portu.
- **Zezwalaj na połączenie, jeśli jest ono zabezpieczone**. Ta opcja pozwala na przesyłanie danych tylko wtedy, gdy połączenie jest uwierzytelnione przez IPsec.
- **Zablokuj połączenie**. Opcja ta uniemożliwia przesyłanie danych za pośrednictwem tego portu.

Wybierz opcję `Zezwalaj na połączenie`{.action} i kliknij `Dalej `{.action}. 

![Step6](images/step6.PNG){.thumbnail}

### Etap 7: określić profil i nazwę zapory, którą należy zastosować

Na koniec wybierz profil, na którym ma być stosowana reguła, wybierając spośród profili publicznych, domen lub prywatnych.
Możesz je włączyć w dowolnym momencie.

![Step7](images/step7.PNG){.thumbnail}

Nadaj nazwę i opis nowej reguły (opcjonalnie), aby ułatwić jej korzystanie z:

![Step7_01](images/step7-01.PNG){.thumbnail}

Kliknij przycisk `Zakończ`{.action}, aby zakończyć proces i utworzyć nową regułę.

![Step7_02](images/step7_02.PNG){.thumbnail}

Następnie możesz wprowadzić zmiany w zakresie bezpieczeństwa nowej reguły utworzonej.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
