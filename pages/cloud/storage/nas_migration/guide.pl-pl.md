---
title: Migracja danych z jednego serwera NAS-HA do innego przez NFS
slug: nas/nas-migration
excerpt: Dowiedz się, jak migrować dane z jednego NAS-HA do innego za pomocą zasobu NFS.
section: NAS
order: 05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 09-02-2021**

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak przenieść dane z jednego serwera NAS-HA do innego. 

## Wymagania początkowe

Aby wykonać transfer danych, musisz:

- NAS-HA OVHcloud
- Dystrybucja kompatybilna z NFS
- Uruchomienie usługi NAS-HA przed jej rozpoczęciem zgodnie z instrukcją [montowania usługi NAS-HA przy użyciu protokołu NFS](https://docs.ovh.com/pl/storage/nas-nfs/){.external}.

## W praktyce

Kompatybilność: Debian 6/7/8 & Ubuntu 12/13/14

Do przesyłania danych użyjemy komendy `rsync`. Możesz przenieść Twoje dane w kilku miejscach. Możesz użyć jednego zamiast drugiego.

Poniższy przykład umożliwia przeniesienie danych z punktu montowania Source do punktu montowania Przeznaczenie.

```sh
rsync -Pva /mnt/SrcNas /mnt/DstNas
```

|Argument|Opis|
|---|---|
|SrcNas|Punkt montowania źródłowego|
|DstNas|Punkt montowania docelowego|

> [!alert]
>
> Uwaga: jeśli dodajesz inne opcje do rsync, mogą one nie być kompatybilne z systemem praw i uprawnień NAS-HA.
>

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie [ https://community.ovh.com/en/](https://community.ovh.com/en/){.external}