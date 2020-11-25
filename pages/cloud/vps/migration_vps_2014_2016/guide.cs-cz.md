---
deprecated: true
title: Jak migrovat VPS 2014 na VPS 2016
excerpt: Tato příručka Vám ukáže jak lze snadno migrovat Vaše VPS.
slug: jak_migrovat_vps_2014_na_vps_2016
legacy_guide_number: g1862
hidden: true
---


## 
Classic VPS 2014 může být migrováno na odpovídající model řady VPS SSD 2015 ručně.
VPS Cloud 2014 může být migrováno na odpovídající model řady VPS 2016 ručně či automaticky.


## Ruční migrace
Dodáme Vám nové VPS z nové řady a převedeme zbývající kredit z Vašeho VPS přímou úměrností (založeno na různých cenách mezi dvěma modely). Například:

- VPS za 200 Kč měsíčně je zaplaceno na 3 měsíce.
- Nový model stojí 100 Kč měsíčně.
- Datum obnovení nového serveru bude posunuto o 6 měsíců v návaznosti na nižší cenu předplacené služby.

V praxi uvádíme novou cenu a datum expirace cílové služby ještě před samotným uskutečněním migrace.

Vaše staré VPS zůstane aktivní následujících 5 dní, což Vám umožní migraci migraci služby Vaším tempem. Po uplynutí této doby bude VPS pozastaveno.

Dodání Vašeho nového VPS začne jakmile provedete Vaši žádost a bude spuštěno jakmile vytvoříte a zaplatíte objednávku. O pár minut později od nás obdržíte email s instrukcemi pro přístup k Vašemu VPS 2016 a tento server se Vám zobrazí ve Vašem Zákaznickém prostoru.


## Automatická migrace
Tato možnost je dostupná pouze pro VPS Cloud. Vaše VPS bude převedeno do OpenStack formátu a spuštěno na nové infrastruktuře.

## Pozor, tato metoda má následující omezení:

- Bez záruky: úspěšně jsme testovali migraci našich šablon, ale určitá nastavení nového VPS (firewall, služby nastavené na veřejné IP, specifické nastavení sítě, atd.) můžou způsobovat problémy v chodu Vašeho VPS na nové infrastruktuře.

- Přerušení chodu služby: musíme vypnout Vašem VPS za účelem zkopírování Vašeho disku na novou infrastrukturu. Tato  operace trvá minimálně 30 minut v závislosti na velikosti Vašeho diskového prostoru u VPS. 


-Změna IP adresy: Vaše VPS změní IP adresu a musí být v DHCP, aby mohlo fungovat na nové infrastruktuře.
Když se rozhodnete provést automatickou migraci Vašeho VPS, poskytneme Vám budoucí IP adresu Vašeho VPS a samotnou migraci provedeme o 6 hodin později. Díky tomu si můžete naplánovat migraci na noční hodiny a mít čas na převod Vašich domén.

Pro zajištění bezproblémové migrace na Linux (není nutné nic migrovat na Windows), proveďte následující kroky: 

- Přesun na DHCP

```
# Debian a podobné
/etc/network/interfaces
auto lo
iface lo inet loopback
auto eth0
iface eth0 inet dhcp
```



```
# RedHat a podobné
/etc/sysconfig/network
Vymažte řádky začínající GATEWAY=
/etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE="eth0"
BOOTPROTO="dhcp"
IPV6INIT="no"
ONBOOT="yes"
```


- Deaktivace udev pravidel

```
#rm -f /etc/udev/rules.d/70-persistent-net.rules
#rm -f /lib/udev/write_net_rules
```



Jestliže zaznamenáte nějaký problém, doporučujeme použít KVM a režim rescue (ve Zákaznického prostoru), abyste mohli opravit nastavení Vašeho VPS.
Po migraci, jakmile vše funguje tak jak má, můžete:

- Odinstalovat VMwareTools (již nebudou potřeba)
- Reaktivovat Váš VPS SLA monitoring přes Zákaznický prostor či API


Vaše staré VPS ponecháme ještě 15 dní po samotné migraci, takže jestliže se Vám nepodaří zprovoznit Vaše VPS na nové infrastruktuře, restartujeme v této době Vaše staré VPS na požádání. Veškeré změny, které se mezi tím provedli však budou ztraceny.


## 
Před spuštěním migrace proveďte zálohu Vašich dat.

- Ujistěte se, že rozumíte procesu migrace. Jestliže máte nějaké dotazy či obavy, kontaktujte naši podporu a my Vám s migrací pomůžeme.
- Navštivte [url = "https://www.ovh.com/fr/vps2016/migration2014to2016/"] stránku s žádostí o migraci[/ url] a přihlašte se pomocí Vašeho zákaznického identifikátoru (NIC).
- Zvolte VPS, které chcete migrovat z rolovacího seznamu.
- Zvolte požadovaný migrační režim (automatický či ruční).
- Zvolte cílové datacentrum.
- Stránka Vám následně zobrazí nový tarif, nové datum expirace Vaší služby a novou IP adresu v případě automatické migrace.
- Pro spuštění pak stačí již jen souhlasit se speciálními podmínkami.



