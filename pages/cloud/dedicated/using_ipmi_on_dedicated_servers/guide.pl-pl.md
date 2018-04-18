---
title: Korzystanie z IPMI dla serwerów dedykowanych
slug: uzywanie-ipmi-serwery-dedykowane
excerpt: IPMI pozwala na połączenie się z serwerem bez korzystania z zewnętrznego oprogramowania
section: Pierwsze kroki
---

**Ostatnia aktualizacja: 17.11.2017**

## Wprowadzenie

Konsola IPMI (Intelligent Platform Management Interface) umożliwia bezpośrednie zalogowanie do serwera dedykowanego bez korzystania z oprogramowania zewnętrznego (na przykład z terminala lub Putty). Ten przewodnik wyjaśnia jak uruchomić ten interfejs.

Uwaga: napotkasz również termin KVM (Keyboard Video and Mouse), który jest używany przy serwerach VPS dla tego rozwiązania.

## Wymagania początkowe

- Zalogowanie do [panelu klienta] (https://www.ovh.com/auth/?action=gotomanager) w sekcji `Dedykowane`{.action} następnie `Serwery Dedykowane`{.action}.

## W praktyce

Połączenie z IPMI można wykonać za pomocą dwóch metod: apletu Java (zalecane) lub przeglądarki (Serial over LAN).

### Logowanie przy pomocy apletu Java

Aby aplet Javy działał, na komputerze musi być zainstalowana Java. Jeśli jeszcze tego nie zrobiła/eś, wejdź na [oficjalną stronę] (https://www.java.com/en/download/){.external}.

W części poświęconej `IPMI`{.action} w panelu klienta kliknij 'Z poziomu apletu Java (KVM)` {.action}:

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Pobierz zaproponowany plik `kvm.jnlp` i uruchom go:

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

Następnie pojawi się strona logowania, na której wymagane są dane użytkownika `root`, tak jak przy logowaniu za pomocą terminala lub zewnętrznego oprogramowania:

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

Następnie możesz zarządzać swoim serwerem tak jak zwykle.

### Logowanie przy pomocy przeglądarki z funkcją Serial over LAN (SoL)

Chociaż zalecane jest logowanie za pośrednictwem apletu Java, to możliwe jest użytkowanie IPMI w funkcji Serial over LAN. W tym celu w części poświęconej `IPMI` {.action} kliknij `Z poziomu przeglądarki (SoL)`:

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> Logowanie przy użyciu funkcji SoL może potrwać kilka minut, w związku z tym zalecany jest aplet.
>

### Testowanie i restartowanie IPMI

Może sie zdarzyć, że IPMI nie działa poprawnie. Jeśli nie możesz uzyskać do niego dostępu, możesz najpierw wykonać test, klikając `Przetestuj IPMI` {.action}:

![IPMI test](images/ipmi_test.png){.thumbnail}

Jeśli wszystko przebiega normalnie, tak jak na przykładzie, prawdopodobnie masz do czynienia z lokalnym problemem (połączenie z Internetem, komputer lokalny). Jeśli wystąpił problem z IPMI, możesz uruchomić konsolę ponownie klikając `Zrestartuj IPMI` {.action}.

![IPMI test](images/ipmi_reboot.png){.thumbnail}

Ponowne uruchomienie trwa kilka minut.

## Sprawdź również

Wymień swoje doświadczenia z naszą społecznością użytkowników na <https://community.ovh.com>.

