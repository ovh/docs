---
title: 'Automatyczna kopia zapasowa - kernel panic (cPanel)'
slug: cpanel_auto_backup
excerpt: 'Dowiedz się, jak usunąć problemy z blokowaniem serwerów cPanel podczas wykonywania automatycznej kopii zapasowej OVHcloud'
section: 'Poziom zaawansowany'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 09-03-2021**

## Wprowadzenie

Kiedy korzystasz z funkcji automatycznych kopii zapasowych na serwerze VPS uruchamianym przez cPanel, możesz spotkać się z przypadkami, w których Twój VPS jest zablokowany w stanie kopii zapasowej zbyt długo i staje się niedostępny. Główna przyczyna jest związana z użytkownikami cPanel korzystającymi z dostępu Jailed Shell. Tworzy on "virtfs" w Twoim systemie plików. 

Podczas tworzenia kopii zapasowej Twojego serwera VPS (w przypadku zamówienia automatycznych kopii zapasowych lub snapshotów), hypervisor komunikuje się z Twoim serwerem VPS za pośrednictwem QEMU Guest Agent w celu zablokowania systemu plików na serwerze VPS przed wykonaniem kopii zapasowej. Mechanizm ten gwarantuje, że podczas wykonywania kopii zapasowej nie zostanie wykonany żaden zapis na dysku.
<br>Jednakże, kiedy pozwalasz na dostęp do Jailed Shell, cPanel tworzy "wirtualne", które nie może być zamrożone w ten sposób. Blokuje się on i powoduje powstanie jądra panic.
<br>Istnieją trzy metody zapobiegania:

1. Wyłącz QEMU Guest Agent
2. Nie zezwalaj Jailed Shell
3. Wyłącz bezpieczeństwo partycji /tmp (nie zalecane przez cPanel, ale jest dostępna opcja)

## Wymagania początkowe

- Posiadanie serwera [VPS](https://www.ovhcloud.com/pl/vps/) (VPS Value, Essential, Comfort lub Elite) na Twoim koncie OVHcloud
- cPanel musi być zainstalowany na serwerze

## W praktyce

Wybierz spośród 3 powyższych opcji i postępuj zgodnie z wybraną przez Ciebie sekcją przewodnika. Musisz tylko jeden.
Proszę wybrać ostrożnie, ponieważ każda z nich ma swoje wady i zalety.

### Wyłącz QEMU Guest Agent

Najpierw należy sprawdzić, czy QEMU Guest Agent działa na Twoim serwerze. Możesz to sprawdzić za pomocą polecenia:

```
systemctl status qemu-guest-agent
```

Status usługi jest wskazany obok opcji "Active:". Jeśli usługa jest aktywna lub wykonywana, należy ją zatrzymać i wyłączyć, aby w przyszłości uniemożliwić jej ponowne uruchomienie. W tym celu użyj następujących poleceń:

```
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent
```

### Przejście z Jailed Shell do Normal Shell

Odkryj różnice między Jailed Shell i Normal Shell [tutaj](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell)

Aby wyłączyć środowisko Jailed Shell dla wszystkich użytkowników, należy wyłączyć domyślną opcję jailshell w interfejsie "WHM's Tweak Settings" (WHM >> Home >> Server Configuration >>Tweak Settings).

Ta opcja pozwala włączyć/wyłączyć korzystanie z Jailed Shell dla nowych kont oraz kont używanych w następujących interfejsach:

1. Interfejs "WHM's Modify an Account" (WHM >> Home >> Account Functions >> Modify An Account).
2. Interfejs "WHM’s Upgrade/Downgrade an Account" (WHM >> Home >> Account Functions Upgrade >>/Downgrade An Account).

Ta opcja nie ma wpływu na konta, które są dostępne na serwerze, ale nie zostały zmodyfikowane w tych interfejsach.

Aby wyłączyć środowisko Jailed Shell od określonego użytkownika, użyj interfejsu "WHM's Manage Shell Access" (WHM >> Home Account Functions >> Manage >> Shell Access).

### Wyłącz bezpieczeństwo partycji /tmp na cPanel

Nie zaleca się stosowania tej metody przez cPanel. Korzystanie z niego jest na ryzyko. Jeśli chcesz kontynuować tę opcję, możesz przeczytać kolejne etapy zgodnie z instrukcją [cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition).

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
