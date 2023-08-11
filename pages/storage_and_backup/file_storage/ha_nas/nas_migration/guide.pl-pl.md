---
title: Migracja danych z jednego serwera NAS-HA do innego przez NFS
excerpt: Dowiedz się, jak migrować dane z jednego NAS-HA do innego za pomocą zasobu NFS.
updated: 2021-02-09
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

**Ostatnia aktualizacja z dnia 09-02-2021**

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak przenieść dane z jednego serwera NAS-HA do innego. 

## Wymagania początkowe

Aby wykonać transfer danych, musisz:

- NAS-HA OVHcloud
- Dystrybucja kompatybilna z NFS
- Uruchomienie usługi NAS-HA przed jej rozpoczęciem zgodnie z instrukcją [montowania usługi NAS-HA przy użyciu protokołu NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs){.external}.

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

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie [ https://community.ovh.com/en/](https://community.ovh.com/en/){.external}