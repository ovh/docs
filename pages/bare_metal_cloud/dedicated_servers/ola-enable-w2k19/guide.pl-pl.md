---
title: 'Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Windows Server 2019'
excerpt: 'Dowiedz się, jak włączyć OVHcloud Link Aggregation na serwerze Windows Server 2019'
updated: 2021-03-25
---


## Wprowadzenie

Technologia OVHcloud Link Aggregation (OLA) została przez nas zaprojektowana w celu zwiększenia dostępności serwera oraz podniesienia wydajności połączeń sieciowych. Możesz w prosty sposób przeprowadzić agregację kart sieciowych, dzięki czemu Twoje połączenia sieciowe staną się redundantne. Jeśli jedno połączenie zostanie zerwane, ruch zostanie automatycznie przekierowany do innego dostępnego łącza.


## Wymagania początkowe

- [Konfiguracja karty sieciowej dla OVHcloud Link Aggregation w Panelu klienta](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

Ponieważ konfiguracja kart sieciowych w OLA jest prywatna, nie będziesz mógł połączyć się z serwerem za pomocą SSH. W związku z tym do uzyskania dostępu do serwera użyj narzędzia IPMI.
<br>Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W części `Bare Metal Cloud`{.action} wybierz serwer z `Serwery dedykowane`{.action} i kliknij zakładkę `IPMI`{.action} (1).

Teraz kliknij przycisk `Z apletu Java (KVM)`{.action} (2).

![remote_kvm](images/remote_kvm2022.png){.thumbnail}

Zostanie pobrany program JNLP. Następnie otwórz program, aby skorzystać z połączenia IPMI. Zaloguj się, używając aktualnych danych do logowania do serwera.

Po połączeniu z serwerem otwórz Server Manager. Jeśli nie jest on otwarty domyślnie, znajdziesz go w menu Start.

![Server manager](images/local_server.png){.thumbnail}

Po otwarciu aplikacji Server Manager, kliknij zakładkę **Local Server** na pasku bocznym po lewej stronie. Następnie kliknij przycisk **Disabled** obok `NIC Teaming`.

![Local server](images/server_manager.png){.thumbnail}

W oknie dialogowym NIC Teaming, w menu rozwijanym **TASKS** w sekcji "TEAMS", kliknij przycisk **New Team**.

![nic teaming](images/nic_teaming.png){.thumbnail}

Nadaj nazwę zespołowi i sprawdź karty sieciowe (NIC), których chcesz używać w powiązaniu z OLA. Kliknij strzałkę obok `Additional properties` i zmień tryb `Teaming mode` na **LACP**. Po sprawdzeniu poprawności informacji, kliknij przycisk **OK**.

![New team](images/new_team.png){.thumbnail}

Uruchomienie zespołu kart sieciowych (NIC) może potrwać do kilku minut. Po zakończeniu tego procesu kliknij ikonkę połączenia sieciowego w prawym dolnym rogu. Teraz kliknij przycisk **Network & Internet settings**. Następnie kliknij przycisk **Ethernet** na pasku bocznym po lewej stronie w oknie.

![network button](images/network_button.png){.thumbnail}

Kliknij przycisk **Change adapter options**.

![Ethernet](images/ethernet.png){.thumbnail}

Następnie kliknij prawym przyciskiem myszy zespół kart sieciowych (NIC) i wybierz w menu rozwijanym **Properties**.

![Properties](images/properties.png){.thumbnail}

W następnym oknie dialogowym, które się pojawi kliknij dwukrotnie przycisk **Internet Protocol Version 4 (TCP/IPv4)**.

![ipv4](images/ipv4.png){.thumbnail}

Kliknij przycisk obok "Use the following IP address i dodaj wybrany przez Ciebie prywatny adres IP oraz podsieć. Po sprawdzeniu poprawności ustawień kliknij przycisk **OK**.

![ipv42](images/ipv42.png){.thumbnail}

Aby sprawdzić, czy zespół kart sieciowych działa, podłącz inny serwer do tego samego vRacka.  Jeśli wszystko działa poprawnie, ustawienie jest prawidłowe. W przeciwnym razie sprawdź dokładnie Twoje konfiguracje lub spróbuj zrestartować serwer.

## Podsumowanie

OVHcloud zapewnia klientom swobodę i elastyczność wykorzystania sprzętu w sposób najlepiej odpowiadający ich potrzebom. Po przeczytaniu tego przewodnika będziesz potrafił skonfigurować OVHcloud Link Aggregation (OLA) w Windows Server 2019 w celu wykorzystania obu kart sieciowych jako powiązanych interfejsów prywatnych.

## Sprawdź również

[Konfiguracja OVHcloud Link Aggregation w Panelu klienta](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
