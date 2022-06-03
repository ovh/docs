---
title: FAQ - czesto zadawane pytania
slug: pca/faq
excerpt: FAQ
section: Public Cloud Archive
order: 130
---


## Wstep
Usługa OVH Public Cloud Archive jest oparta na oprogramowaniu Openstack Swift. Pomimo, że OVH stara się ułatwić korzystanie z usługi object storage, mogą pojawić się kwestie zaskakujące dla nowego użytkownika.


## Pytania
**Dlaczego widzę kontener z końcówką "_segments" po zalogowaniu za pomocą protokołów scp/sftp/rsync?**

W celu instalowania dużych plików, Openstack Swift udostępnia mechanizm używający *segmentów* i *manifestów*. Każde archiwum większe niż 256 MiB transferowane za pomocą tych protokołów jest automatycznie segmentowane na fragmenty o rozmiarze 256 MiB. Segmenty będą przechowywane na drugim kontenerze i będą posiadały plik o rozmiarze 0 bajtów zwany manifestem na pierwszym kontenerze.

**Dlaczego mój plik pojawia się jako pusty, z rozmiarem 0 bajtów, w interfejsie www, pomimo że zainstalowałem go korzystając z scp/sftp/rsync?**

Tak jak wyjaśniliśmy w poprzedniej odpowiedzi, tworzony jest plik manifest, który zawiera informacje na temat wszystkich fragmentów segmentowanego archiwum. Manifest może być plikiem o rozmiarze 0 bajtów, a ważne informacje są przechowywane jako metadane. Jest to pewnego rodzaju link symboliczny.

**Dlaczego otrzymuję błąd, gdy próbuję pobrać archiwum za pomocą protokołów rsync/scp/sftp?**

OVH Cloud Archive to rozwiązanie działające w trybie rzadkiego dostępu do danych. Jest to usługa w bardzo niskiej cenie z długim czasem odzyskiwania danych. Aby uzyskać dostęp do archiwum, należy je najpierw odblokować.

**Jak mogę odblokować archiwum?**

Odblokowywanie archiwum polega na przesłaniu zlecenia odblokowania.

Odblokowanie może zostać wykonane za pomocą:

- [Panelu klienta](../../)
- [API Openstack](../../)
- Protokołów opartych na SSH

Status operacji można sprawdzić za pomocą:

- [Panelu klienta](../../)
- [API Openstack](../../)