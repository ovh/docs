---
title: 'Korzystanie z IPMI dla serwerów dedykowanych'
slug: uzywanie-ipmi-serwery-dedykowane
excerpt: 'IPMI pozwala na połączenie się z serwerem bez korzystania z zewnętrznego oprogramowania'
section: 'Pierwsze kroki'
---

**Ostatnia aktualizacja z dnia 23-08-2018**

## Wprowadzenie

Konsola IPMI (Intelligent Platform Management Interface) umożliwia bezpośrednie połączenie do serwera dedykowanego bez korzystania z oprogramowania zewnętrznego (na przykład z terminala lub Putty). Niniejszy przewodnik wyjaśnia, jak uruchomić tę konsolę.

Uwaga: napotkasz również termin KVM (Keyboard Video and Mouse), który jest używany przy serwerach VPS dla tego rozwiązania.


## Wymagania początkowe

- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)


## W praktyce

Połączenie z IPMI można wykonać za pomocą dwóch metod: apletu Java (zalecane) lub przeglądarki (Serial over LAN).

### Logowanie przy pomocy apletu Java

Aby aplet Javy działał, na komputerze musi być zainstalowana Java.  Jeśli jeszcze tego nie zrobiłeś, przejdź do [oficjalnej strony](https://www.java.com/pl/download/){.external} Java.

W części poświęconej `IPMI`{.action} w Panelu klienta kliknij `Z poziomu apletu Java (KVM)`{.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Pobierz zaproponowany plik `kvm.jnlp` i uruchom go:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

Następnie pojawi się strona logowania, na której wymagane są dane użytkownika `root`, tak jak przy logowaniu za pomocą terminala lub zewnętrznego oprogramowania:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

Teraz możesz zarządzać Twoim serwerem tak, jak zwykle.

### Logowanie za pomocą przeglądarki z Serial over LAN (SoL)

Chociaż zalecane jest logowanie za pośrednictwem apletu Java, to możliwe jest użycie IPMI z funkcją Serial over LAN. W tym celu w części poświęconej `IPMI`{.action} kliknij `Z poziomu przeglądarki (SoL)`{.action}:

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> Logowanie przy użyciu funkcji SoL może potrwać kilka minut, w związku z tym zalecany jest aplet.
>

### Testowanie i restartowanie IPMI

Może się zdarzyć, że IPMI nie odpowiada. Jeśli nie możesz uzyskać do niego dostępu, możesz najpierw wykonać test, klikając `Przetestuj IPMI`{.action} i wyświetlić wynik diagnostyki:

![IPMI test](images/ipmi_test.png){.thumbnail}

Jeśli wszystko przebiega prawidłowo, tak jak w podanym przykładzie, prawdopodobnie masz do czynienia z lokalnym problemem (połączenie z Internetem, komputer lokalny).  Jeśli wystąpił problem z IPMI, możesz uruchomić go ponownie, klikając `Zrestartuj IPMI`{.action}.

![IPMI test](images/ipmi_reboot.png){.thumbnail}

Ponowne uruchomienie potrwa kilka minut.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.