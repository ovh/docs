---
title: "VPS - Włączanie logów uruchamiania Windows"
excerpt: "Dowiedz się, jak włączyć logi uruchamiania Windows, aby pomóc w diagnozowaniu i rozwiązywaniu problemów z uruchamianiem VPS"
updated: 2026-01-21
---

## Wprowadzenie

Logi uruchamiania Windows pozwalają zidentyfikować sterowniki i usługi wczytywane podczas uruchamiania systemu.  
Są szczególnie przydatne do **diagnozowania problemów z uruchamianiem**, **niebieskich ekranów** lub **zamrażania systemu**.

**Ta instrukcja wyjaśnia, jak włączyć logi uruchamiania Windows na serwerze, aby pomóc w analizie i rozwiązywaniu problemów z VPS.**

## Wymagania początkowe

- Posiadaj aktywne [VPS](/links/bare-metal/vps) w Panelu klienta OVHcloud.

## W praktyce

### Włączanie logów uruchamiania Windows

Logi uruchamiania Windows mogą być przydatne do diagnozowania błędów serwera.

Aby je włączyć, wykonaj poniższe kroki, przechodząc przez zakładki:

> [!tabs]
> 1. **Połącz się z serwerem**
>>
>> Połącz się z serwerem za pomocą pulpitu zdalnego lub [sesji KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
>>
> 2. **Otwórz uchwyt uruchamiania**
>>
>> Otwórz menu `Start` systemu Windows i kliknij `Uruchom`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}
>>
> 3. **Otwórz `msconfig`**
>>
>> Wpisz `msconfig` i kliknij `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}
>>
> 4. **Włącz logi**
>>
>> W nowym oknie włącz opcję logowania obok `Boot log`. Następnie kliknij `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}
>>

Podczas następnego uruchamiania serwera logi zostaną zapisane w pliku `.txt`. Ścieżka do pliku to: `C:\Windows\ntbtlog.txt`.

Aby uzyskać dostęp do pliku logu w trybie ratunkowym, postępuj zgodnie z instrukcjami w przewodniku "[Uruchamianie i korzystanie z trybu Rescue na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)".

## Sprawdź również

[Zmiana hasła administratora na serwerze Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Zabezpieczenie VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Jak odzyskać dostęp do serwera, jeśli straciłeś hasło użytkownika](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Dołącz do [grona naszych użytkowników](/links/community).