---
title: 'Benchmark - ewaluacja wydajności przestrzeni dyskowej'
slug: ceph-io-benchmarking
excerpt: 'Dowiedz się, jak przeprowadzić ewaluację wydajności Cloud Disk Array'
section: 'Cloud Disk Array'
---

**Ostatnia aktualizacja z dnia 12-07-2019**

## Wymagania początkowe
Zanim rozpoczniesz testy wydajności, zapoznaj się z używanym środowiskiem. Pamiętaj, że nawet drobne błędy metodologiczne mogą wpłynąć negatywnie na wiarygodność benchmarku. Na przykład, nie powinno się przeprowadzać testów porównawczych wydajności Cloud Disk Array znajdujących się w różnych centrach danych. Opóźnienia między centrami są zbyt duże, aby wyniki ewaluacji były wiarygodne.

Bardzo istotne jest ponadto, abyś wybrał parametry odpowiednie dla Twojego przypadku. Jeśli planujesz hostować bazę danych, całkowita dostępna liczba IOPS dla bloków 8 KiB będzie prawdopodobnie miała większe znaczenie niż całkowita przepustowość I/O dużych bloków. Jeśli planujesz zastosować Hadoop, wymagania przestrzeni dyskowej będą całkowicie inne.

W przedstawionym przykładzie staramy się znaleźć równowagę między różnymi obciążeniami. Używamy Fio — popularnego narzędzia do benchmarkingu. Posiada ono liczne funkcje pozwalające symulować wybrane obciążenia i dostarcza szczegółowych statystyk dotyczących zachowania przestrzeni dyskowej w momencie obciążenia. Narzędzie Fio jest dostępne bezpłatnie w wielu systemach operacyjnych.

## W praktyce

### Wstępny benchmark
Upewnij się, czy klient używany do testu ma dostęp do Twojej przestrzeni Cloud Disk Array. Możesz to sprawdzić za pomocą polecenia:


```bash
$ ceph -s
cluster 3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 health HEALTH_OK
 monmap e1: 3 mons at {mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.x:6789/0,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10..a.b.y:6789/0,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.z:6789/0}
        election epoch 50, quorum 0,1,2 mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 osdmap e52: 3 osds: 3 up, 3 in
  pgmap v2709: 64 pgs, 1 pools, 83255 MB data, 1300 kobjects
        261 GB used, 16401 GB / 16662 GB avail
              64 active+clean
```

Jeśli otrzymasz wynik podobny do powyższego, możesz zacząć przygotowywać obraz dla testu za pomocą polecenia:


```bash
rbd -p rbd create --size 1024 --image-format 2 test-image
```

Możesz przetestować wydajność na trzy różne sposoby:

- używając bezpośrednio RBD;
- poprzez mapowanie obrazu do urządzenia `/dev/rbd`;
- poprzez uruchomienie stanowiska testowego w wirtualnej maszynie działającej na obrazie RBD.

Użycie pierwszej metody uruchamia Fio, jak pokazano w poniższym przykładzie:


```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

W przypadku uruchomienia testu w urządzeniu `/dev/rbd` lub w maszynie wirtualnej niektóre czynniki mogą obniżać wydajność:

- cache systemu operacyjnego: można odnieść wrażenie, że system operacyjny jest przez jakiś czas bardzo szybki, a następnie zwalnia. Aby tego uniknąć, użyj bezpośrednich I/O;
- obsługa żądań FLUSH / FUA w stosie pamięci używanym do testów;
- hiperwizor i/lub sterownik (virtio/scsi) używany do wirtualizacji;
- “rozgrzej” przestrzeń dyskową przed rozpoczęciem lub kilkukrotnym uruchomieniem benchmarku.


### Właściwy benchmark
W zależności od rozmiaru klastra możesz przetestować większą liczbę obrazów lub użyć innych parametrów. Możesz zmienić liczbę obrazów, ich rozmiar i wielkość kolejki, liczbę <i>FIO workers</i>, typ obciążenia (odczyt/zapis /losowy/sekwencyjny), czas trwania testu, etc.


#### Mieszany odczyt/zapis losowy bloków 4 KB

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


#### Odczyty sekwencyjne bloków 1 MB

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=read --bs=1M --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


#### Zapisy losowe bloków 4 000 KB
Ten test generuje cztery procesy Fio, z których każdy jest zapisywany w innym obrazie za pomocą dwóch wątków.


```bash
fio --runtime=600 --time_based --group_reporting \
    --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image-1 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-2 --ioengine=rbd --pool=rbd --rbdname=test-image-2 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-3 --ioengine=rbd --pool=rbd --rbdname=test-image-3 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-4 --ioengine=rbd --pool=rbd --rbdname=test-image-4 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32
```


#### Odczyt/zapis mieszany bloków o różnych rozmiarach

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 \
    --bssplit=64k/47:4k/22:16k/12:8k/6:512/5:32k/4:12k/3:256k/1,8k/89:4k/11 \
    --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Pomiar wydajności Cloud Disk Array
Aby zmierzyć wydajność Cloud Disk Array, prowadzimy przez kilka godzin testy na 32 obrazach o rozmiarze 32 GB każdy. Wykorzystanie bardzo dużej ilości danych podczas testów gwarantuje, że wydajność pozostaje na określonym poziomie.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
