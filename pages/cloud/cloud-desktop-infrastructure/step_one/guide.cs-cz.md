---
deprecated: true
title: 1. část - seznámení s platformou VMware Horizon 7.1
slug: platforma-horizon-7
excerpt: Zjistěte, jak se připojit k platformě VMware Horizon 7.1
section: Nastavení
order: 1
---

**Poslední aktualizace 09/03/2018**

## Cíl

Série pěti po sobě jdoucích příruček slouží jako detailní úvod do nastavení a ovládání  služby [Cloud Desktop Infrastructure](https://www.ovh.cz/cloud/cloud-desktop/infrastructure/){.external}.

**V první části seriálu se dozvíte, jak se připojit k platformě VMware Horizon 7.1**.

## Prerekvizity

- E-mail s přístupovými údaji ke službě [Cloud Desktop Infrastructure](https://www.ovh.cz/cloud/cloud-desktop/infrastructure/){.external}.

## Postup

### Obecné informace

Platforma VMware Horizon 7.1 je složena z následujících prvků:

- Administrační rozhraní VMware Horizon 7.1
- Přístupová URL adresa k Vaší první skupině virtuálních ploch (pool)
- [Private Cloud](https://www.ovh.cz/private-cloud/){.external} platforma pro vytváření virtuálních strojů (VM) a virtuálních ploch


### Infrastruktura

![Infrastruktura VMware Horizon 7.1](images/1200.png){.thumbnail}

Administrační infrastruktura (*ConnectionServer*, *Composer*, *ActiveDirectory*) je poskytována a spravována společností OVH. Díky tomu nemá tato složka naprosto žádný vliv na zdrojové kapacity určené pro vytváření Vašich virtuálních ploch.

OVH poskytuje virtuální routery a *AccessPoints*, které umožňují, aby skupiny virtuálních ploch měly přístup k Private Cloud zdrojům, dodávaným s Vaší platformou.

Při dodání platformy je privátní síť implicitně nakonfigurována s jedním *AccessPointem*. Další *AccessPoints* lze přidat prostřednictvím Zákaznického prostoru OVH.


### Dodání služby

V rámci jedné hodiny od uhrazení objednávky od nás obdržíte e-mail s přihlašovacími údaji a instrukcemi pro správu Vašich virtuálních ploch:  

> [!secondary]
>
> Dobrý den,
>
> děkujeme Vám za Váš zájem o službu Virtual Desktop Infrastructure (VDI).
>
> 
> N íže naleznete kompletní přehled informací potřebných pro připojení k Vaší službě:
>
> 
> * Přístup do administračního rozhraní: https://#URL#/admin
> 
> * Uživatelské jméno: #USERNAME#
> 
> * Heslo: #PASSWORD#
> 
> 
> Pro správu svých šablon se prosím přihlaste ke službě Private Cloud.
>
> Přihlásit se můžete:
> 
> - prostřednictvím klienta vSphere
> 
>   * Klient je ke stažení zde: https://#VPNHOSTNAME#/client/VMware-viclient.exe
> 
>   * IP adresa: #VPNHOSTNAME#
>
> 
> - prostřednictvím webového klienta vSphere
> 
>   *  https://#VPNHOSTNAME#/vsphere-client
>
> Pozn.: vSphere používá následující přístupové porty: 80, 443 a 8443. Pro vytvoření své první skupiny virtuálních ploch použijte následující údaje:
>
> 
> * desktop access : https://#POOLURL#
> 
> * DHCP síť: #PORTGROUP#
>
> 
> Níže naleznete seznam 10 uživatelů domény:
> 
> * vdi1 : #USER1#
> 
> * vdi2 : #USER2#
> 
> * vdi3 : #USER3#
> ...
>
> 
> Pokud si s nastavením služby nevíte rady, obraťte se na naše uživatelské příručky:
> 
>  
> https://www.ovh.cz/cloud/cloud-desktop/infrastructure/
>
> 
> O své uživatelské zkušenosti se můžete podělit na následujícím mailing listu:
>
> 
> cdi@ml.ovh.net
> 
>  
> V případě jakýchkoli dotazů neváhejte kontaktovat naši zákaznickou podporu.
> 
> Váš Cloud Desktop Infrastructure tým.
> 


Další část: [Šablony skupin virtuálních ploch](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-pool/){.external}.


## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.