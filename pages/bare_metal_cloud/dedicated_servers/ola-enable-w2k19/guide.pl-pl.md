---
title: "Konfiguracja OVHcloud Link Aggregation na serwerze dedykowanym (Windows)"
excerpt: "Włącz OVHcloud Link Aggregation na serwerze dedykowanym Windows Server 2019."
updated: 2026-04-20
---

## Wprowadzenie

Technologia OVHcloud Link Aggregation (OLA) została zaprojektowana przez nasze zespoły w celu zwiększenia dostępności serwera oraz podniesienia wydajności połączeń sieciowych. Za pomocą kilku kliknięć możesz połączyć karty sieciowe i sprawić, że Twoje połączenia sieciowe staną się redundantne. Oznacza to, że jeśli jedno połączenie zostanie zerwane, ruch zostanie automatycznie przekierowany do innego dostępnego łącza. Dostępna przepustowość jest również podwajana dzięki agregacji.
Agregacja oparta jest na technologii IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Niniejszy przewodnik wyjaśnia, jak skonfigurować NIC Teaming dla OLA w Windows Server 2019.**

## Wymagania początkowe

- [Konfiguracja OVHcloud Link Aggregation w Panelu klienta OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Serwery dedykowane](/links/control-panel/baremetal-dedicated-servers)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Serwery dedykowane`{.action} > Wybierz serwer

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## W praktyce

Ponieważ konfiguracja kart sieciowych w OLA jest prywatna, nie będziesz mógł połączyć się z serwerem za pomocą SSH. W związku z tym do uzyskania dostępu do serwera użyj narzędzia IPMI.
<br>W tym celu kliknij zakładkę `IPMI`{.action} (1).

Następnie kliknij przycisk `Z apletu Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

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

W następnym oknie dialogowym, które się pojawi kliknij dwukrotnie przycisk **Internet Protocol Version 4 (TCP/IPv4)**.

![Właściwości protokołu IPv4 TCP/IPv4](images/ipv4.png){.thumbnail}

Kliknij przycisk obok "Use the following IP address" i dodaj wybrany przez Ciebie prywatny adres IP oraz podsieć. Po sprawdzeniu poprawności ustawień kliknij przycisk **OK**.

![ipv42](images/ipv42.png){.thumbnail}

Aby sprawdzić, czy zespół kart sieciowych działa, wyślij polecenie ping do innego serwera w tym samym vRack. Jeśli działa, wszystko jest gotowe. W przeciwnym razie sprawdź konfiguracje lub spróbuj zrestartować serwer.

## Sprawdź również

[Konfiguracja OVHcloud Link Aggregation w Panelu klienta OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 12 lub Ubuntu 24.04 z Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9–11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Dołącz do [grona naszych użytkowników](/links/community).
