---
title: Testa la perdita temporanea di un host attivando la modalità resilienza
excerpt: Questa guida ti mostra come verificare la perdita temporanea di un host in modalità resilienza sulla tua infrastruttura Hosted Private Cloud OVHcloud
---

## Obiettivo

Per effettuare un test di resilienza sulla tua infrastruttura Hosted Private Cloud OVHcloud, la modalità resilienza permette di simulare la perdita temporanea di un host e di confermare la continuità di attività della tua produzione in caso di incidente.

**Questa guida ti mostra come verificare la perdita temporanea di un host in modalità resilienza sulla tua infrastruttura Hosted Private Cloud OVHcloud**

## Prerequisiti

- Disporre di una soluzione [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

## Procedura

Questa operazione si effettua dalle API OVHcloud e avrà l'effetto di interrompere l'accessibilità alla rete per l'host selezionato e di disattivarlo per una durata definita in precedenza (min:10min, max:24h, default:1h).

Il test è indipendente dal sistema di sorveglianza ed evita la sostituzione automatica dell'host.

In questo modo le VM vengono arrestate e la migrazione e il riavvio verso l’host o gli host restanti vengono effettuati da vSphere HA se la funzionalità è configurata correttamente sul cluster.

Per maggiori informazioni su vSphere HA, consulta la documentazione VMware "[Funzionamento di vSphere HA](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.avail.doc/GUID-33A65FF7-DA22-4DC5-8B18-5A7F97CCA536.html)".

In questo modo è possibile stimare il tempo di ripresa dell’attività dall’avvio del test e la simulazione dell’incidente (RTO) fino al riavvio delle VM.

Per visualizzare e ottenere gli identificativi dell’infrastruttura, del datacenter e dell’host su cui eseguire il test, esegui queste chiamate:

Per recuperare il nome dell’infrastruttura (pcc-xx-xx-xx):

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud

Per recuperare l'identificativo del datacenter:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter

Per recuperare l’identificativo dell’host:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Una volta in possesso di queste informazioni, per confermare che è possibile avviare l’azione, è possibile utilizzare la chiamata seguente che confermerà le condizioni di realizzazione del test ed evitare qualsiasi perdita di attività:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled

Se il test è possibile, il risultato è true.

Per avviare il test, utilizza questa chiamata:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilienza/enable

L’host sarà disconnesso e passerà in modalità "Nessuna risposta" fino al termine del test:

![vsphere](images/resilience_mode.png){.thumbnail}

È possibile verificare lo stato dell'azione utilizzando la seguente chiamata:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilienza

Se il test è stato avviato correttamente sull’host, il risultato sarà: enabled.

Se necessario, è possibile anche interrompere il test prima della durata scelta utilizzando questa chiamata:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilienza/disable

Tra le informazioni restituite, troviamo la pianificazione dell'attività "updateHostResilienceOff".

La connettività dell'host verrà ripristinata al termine del test e l'infrastruttura HPC tornerà alle normali condizioni di utilizzo.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
