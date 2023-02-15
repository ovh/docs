---
title: 'FAQ Najczęściej zadawane pytania o Private Cloud'
excerpt: ''
slug: faq_dedicated_cloud
section: FAQ
legacy_guide_number: g598
updated: 2022-12-08
---

## Podczas konfigurowania opcji HA pojawił się błąd: "Erreur HA : Impossible d’effectuer la configuration HA"

Jeśli pojawia się ten błąd, musisz zmienić ręcznie konfigurację na klastrze z HA. Przejdź do części dotyczącej właściwości klastra, odznacz opcję HA i zatwierdź zmianę. Kiedy operacja zostanie zakończona, będziesz mógł wrócić do właściwości i ponownie włączyć opcję HA. Po aktywacji opcja HA pownownie stanie się aktywna.


## Do czego służy opcja Rescan Datastore?
Opcja ta jest używana w przypadku przestrzeni iSCSI do aktualizowania kanałów dostępu. 
Czynność ta nie będzie konieczna w OVH, ponieważ OVH nie proponuje serwerów z iSCSI.


## Jak wyłączyć alert?
Po pojawieniu się alarmu jest on widoczny na hoście (czerwony trójkąt).
Należy zatwierdzić ten alarm i zmienić jego status na kolor zielony w zakładce Alerty.


## Posiadam VM ze statusem Invalid
W tym przypadku usuń VM z listy korzystając z prawego przycisku myszy. 
UWAGA: wybierz « Remove from Inventory » a nie « Delete from disk ». W tym drugim przypadku stracisz dane z VM. 
Następnie wystarczy dodać VM do listy.


## Podczas łączenia z konsolą VM pojawia się czarny ekran
W takim przypadku system operacyjny VM uruchomił wygaszenie ekranu. Kliknij na przycisk klawiatury, aby włączyć ekran.

