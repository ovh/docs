---
title: Uruchamianie trybu Rescue na serwerze VPS
slug: rescue
excerpt: Sprawdź, jak włączyć serwer VPS w trybie Rescue
section: Diagnostyka i tryb Rescue
---

**Ostatnia aktualizacja dnia 2018-04-18**

## Wprowadzenie
Tryb Rescue pozwala na uruchomienie serwera w niezależnej konfiguracji OVH. Dysk może więc zostać zamontowany jako niezależna partycja.

Dzięki temu trybowi możesz wykonywać testy lub operacje w wybranej przez siebie chwili.

Tryb ten pozwala również na poprawianie błędów, które spowodowały odcięcie dostępu do serwera.

## Wymagania początkowe

- Zakupiony [serwer VPS](https://www.ovh.pl/vps/){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}

## W praktyce

Aby uruchomić serwer w trybie Rescue, należy zalogować się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} i przejść do sekcji `Cloud`{.action}. W kolumnie z lewej strony wybierz swój VPS:


![horizon](images/vps_rescue1.png){.thumbnail}

Na ekranie głównym z prawej strony odnajdziesz przycisk `Restartuj do trybu rescue`{.action}. Zatwierdź **restart** serwera VPS.

![horizon](images/vps_rescue2.png){.thumbnail}

> [!primary]
>
> Następnie otrzymasz automatyczny e-mail z danymi do logowania przez SSH do trybu Rescue.
> E-mail ten będzie również dostępny w Panelu klienta (sekcja Moje konto > Otrzymane e-maile).
> 

Możesz teraz zalogować się do serwera VPS w **trybie Rescue** za pomocą protokołu **SSH**.

Po zakończeniu operacji w **trybie Rescue**, możesz uruchomić serwer VPS z dysku głównego za pomocą przycisku `Zrestartuj serwer VPS`{.action}.

## Sprawdź również

[Wprowadzenie do protokołów SSH](https://docs.ovh.com/pl/dedicated/ssh-wprowadzenie/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.