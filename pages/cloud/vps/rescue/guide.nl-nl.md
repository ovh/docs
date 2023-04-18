---
deprecated: true
title: Reddingsmodus-activatie op een VPS
excerpt: Ontdek hoe u uw VPS in de Reddingsmodus kunt opstarten.
updated: 2022-05-02
---

**Laatste update 22/12/2017**

## Introductie

Met de Reddingsmodus kunt u uw server opnieuw opstarten op een onafhankelijke OVH-configuratie.  Uw disk kan er ook mee gemonteerd worden op een autonome partitie. 

Het voordeel ervan is dat u uw tests en configuratiewijzigingen kunt uitvoeren wanneer het u het beste uitkomt en het de minste impact op uw serveractiviteiten zal hebben.   Het stelt u ook in staat om eventuele configuratiefouten corrigeren, die u de toegang tot de serverschijf blokkeerden.

> [!warning]
>
> Als u online diensten hebt dan zal de Reddingsmodus ze onderbreken wanneer de machine opnieuw wordt opgestart in de OVH-Reddingsomgeving.
> 

Ontdek hoe u uw VPS in de Reddingsmodus kunt opstarten.

## Vereisten

- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl)


## Instructies

Nadat u bent ingelogd op uw Control Panel, gaat u naar het gedeelte `Cloud`{.action} en kiest u uw VPS in de linkerkolom:

![VPS in uw Control Panel](images/vps_rescue1.png){.thumbnail}

Klik in het hoofdvenster van uw VPS met de rechtermuisknop op `Reboot in de rescue modus`{.action} en bevestig de herstart:

![Validatie van de Reddingsmodus](images/vps_rescue2.png){.thumbnail}

Een voortgangsbalk informeert u over de voortgang van de herstarttaak (dit kan enkele minuten duren):

![Voortgang Reddingsmodus](images/rescue_task.png){.thumbnail}

> [!primary]
>
> Aan het einde van deze stap ontvangt u automatisch een e-mail met het SSH-ID van de Reddingsmodus. Deze e-mail is ook beschikbaar in uw Control Panel, onder `Mijn account`{.action} en vervolgens `Ontvangen e-mails`{.action}.
> 

U kunt nu verbinding maken met de Reddingsmodus van uw VPS via SSH. Nadat uw configuraties in de Reddingsmodus zijn uitgevoerd, kunt u de VPS opnieuw starten op de primaire vaste schijf via de knop `Mijn VPS opnieuw opstarten`{.action}.


## Ga verder

[Introductie tot SSH](/pages/cloud/dedicated/ssh_introduction){.external}

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/> .