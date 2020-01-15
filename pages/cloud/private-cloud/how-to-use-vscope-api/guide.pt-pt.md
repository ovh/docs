---
title: 'Como utilizar a API de vScope'
slug: vscopeapi
excerpt: 'A API vScope permite-lhe utilizar os dados de monitorização nas suas aplicações'
section: 'Serviços e opções OVH'
---

**Última atualização: 25/11/2019**

## Sumário

A OVHcloud coloca à sua disposição uma ferramenta de supervisão e monitorização das suas máquinas virtuais e da sua infraestrutura, designada por **vScope**.

Trata-se de uma página Internet onde estão reunidas todas as informações úteis relativas à utilização dos seus recursos.

Estas informações encontram-se também disponíveis através da APIv6 e da API Metrics.

**Este guia descreve a utilização destas APIs**.

## Instruções

O vScope disponibiliza dois tipos de informações:

- informações **live**, que correspondem às informações dos vários componentes num determinado instante T;
- gráficos que apresentam os dados históricos de desempenho dos vários componentes. Por exemplo: CPU, RAM de uma máquina virtual.


### Recolher os dados **live**

Os dados **live**  são os dados disponíveis a partir da página principal da interface vScope.

![vScope-API](images/vScope1.png){.thumbnail}

Pode recuperar estes dados **live** para os seguintes componentes:

- filers
- hosts
- virtual machines

A utilização da API faz-se através destas três chamadas APIv6:

#### Filers

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

#### Hosts

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
> 

#### Máquinas virtuais

> [!api]
> 
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
> 

### Recolher os dados históricos (Graphs)

Para recolher e utilizar os dados históricos (Graphs), usamos o produto **Metrics Data Platforms**.

Através do protocolo Opentsdb ou WARP10, vai poder recuperar os seus dados sob a forma de pontos. Poderá explorar estes pontos através da sua aplicação ou apresentá-los diretamente em função do resultado pretendido.


Este artigo diz respeito à utilização do protocolo Opentsdb para uma apresentação bruta dos dados (sem resultado gráfico).

Para poder utilizar **Metrics Data Platforms**, terá de obter um token de leitura. Com a nova versão do vScope, cada utilizador da infraestrutura tem um token de leitura. 

Para o utilizador pretendido, utilize a chamada APIv6 seguinte para recuperar o token de leitura:

> [!api]
> 
> @api {POST} /dedicatedCloud/{serviceName}/user/{userId}/getVscopeMetricsToken
> 

O seu token encontra-se no campo **token** do resultado.

```json
{
    "warpEndpoint": "https://warp10.gra1-ovh.metrics.ovh.net",
    "token": "XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX",
    "opentsdbEndpoint": "https://opentsdb.gra1-ovh.metrics.ovh.net"
}
```

Para cada tipo de componente, está disponível uma lista de métricas que precisa de um conjunto de parâmetros (também chamado "etiquetas") muito precisos.

#### Filers

| Métricas | Descrição | Etiquetas |
| ----------- | ----------- | ----------- |
| vscope.filer.datastore.diskspace.used | Utilização do filer em kB | datacenter : pcc-37-187-228-180_datacenter869, <br>datastore: pcc-000443 |

#### Hosts

| Métricas | Descrição | Etiquetas |
| ----------- | ----------- | ----------- |
| vscope.host.cpu.usage.perc | Utilização do processador do host em percentagem | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51 |
| vscope.host.mem.usage.perc | Utilização da memória do host em percentagem | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51 |
| vscope.host.net.tx | Utilização da rede do host em emissão | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname: vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.rx | Utilização da rede do host em receção | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname: vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetstx | Número de packs de rede transmitidos do host | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname: vmnic0/vmnic1/vmnic2/vmnic3 |
| vscope.host.net.packetsrx | Número de packs de rede recebidos do host | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- host: 172.17.86.51<br>\- nicname: vmnic0/vmnic1/vmnic2/vmnic3 |

#### Máquinas virtuais

| Métricas | Descrição | Etiquetas |
| ----------- | ----------- | ----------- |
| vscope.vm.cpu.usage.perc | Utilização do processador da vm em percentagem | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.mem.usage.perc | Utilização da memória da vm em percentagem | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.cpu.ready |CPU Ready da vm em milissegundos | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.rx | Utilização da rede da vm em receção | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.tx | Utilização da rede da vm em transmissão | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.packetsrx | Número de packs de rede recebidos da vm | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.net.packetstx | Número de packs de rede transmitidos da vm | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.io.read | Número de IO em leitura por segundo da vm | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.io.write | Número de IO em escrita por segundo da vm | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.bandwidth.read |  Largura de banda do disco da vm em leitura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.bandwidth.write | Largura de banda do disco da vm em escrita | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.latency.read | Latência do disco da vm em leitura | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |
| vscope.vm.disk.latency.write | Latência do disco da vm em escrita | \- datacenter: pcc-37-187-228-180_datacenter869, <br>\- vm: vm-01254 |

#### Exemplo de recolha com a utilização do protocolo OpenTSDB

Agora que recuperou o seu token, o seu endpoint e que tem a lista das métricas, vai recuperar os dados de utilização da memória de um host ao longo de 1 dia.

Em seguida, encontre um exemplo de pedido.

```
curl -XPOST https://read:XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX@opentsdb.gra1-ovh.metrics.ovh.net/api/query
-d '{ 
    "start":1564407950, 
    "queries":[ 
        { 
            "metric":"vscope.host.mem.usage.perc", 
            "aggregator":"sum",
            "downsample":"20m-max-zero",
            "tags": {
                "datacenter":"pcc-37-187-228-180_datacenter869",
                "host":"172.17.86.51" 
            } 
        } 
    ] 
}'
```

Explicação dos vários campos utilizados:

- read: utilizador utilizado para realizar o pedido (será sempre read);
- XXXXXXXXXXXX_XXXXXXXXXXXZZZZZZZZZZZ_YYYYYYYYYYYYYY-XXXXXXXXX: token anteriormente recuperado com a APIv6;
- opentsdb.gra1-ovh.metrics.ovh.net: endpoint OpenTSDB, também recuperado com a APIv6. Este endpoint pode variar em função da sua localização;
- start: carimbo de hora correspondente à data de início do pedido;
- queries: quadro com as métricas a recuperar. Várias métricas podem ser recuperadas num único pedido;
- métrica: nome da métrica a recuperar;
- agregador: nome da função de agregação (consultar a documentação OpenTSDB para mais pormenores);
- downsample: nome da função de escalonagem (permite reduzir a quantidade de dados a recuperar. Parâmetro opcional);
- tags: lista das etiquetas sob a forma de chave/valor;

Podem também ser fornecidos outros parâmetros. Consulte a documentação da api OpenTSDB para mais pormenores.

Receberá então um json com o resumo do pedido, bem como os carimbos de hora associados ao respetivo valor no campo **dps**.
Por exemplo:

```json
[
    {
        "metric":"vscope.host.mem.usage.perc",
        "tags":{
            "datacenter":"pcc-37-187-228-180_datacenter869",
            "env":"prod",
            "host":"172.17.86.51",
            "servicename":"pcc-37-187-228-180",
            "servicetype":"vscope"
        },
        "query":{
            "index":0
        },
        "aggregateTags":[],
        "dps":{
            "1564409391":4.38,
            "1564410591":4.35,
            "1564411791":4.37,
            "1564412991":4.38,
            "1564414191":4.35,
            "1564415391":4.38,
            "1564416591":4.35,
            "1564417791":4.36,
            "1564418991":4.36,
            "1564420191":4.37,
            "1564421391":4.37,
            "1564422591":4.37,
            "1564423791":4.37,
            "1564424991":4.38,
            "1564426191":4.36,
            "1564427391":4.35,
            "1564428591":4.37,
            "1564429791":4.36,
            "1564430991":4.38,
            "1564432191":4.35,
            "1564433391":4.37,
            "1564434591":4.36,
            "1564435791":4.37,
            "1564436991":4.37,
            "1564438191":4.37,
            "1564439391":4.38,
            "1564440591":4.36,
            "1564441791":4.36,
            "1564442991":4.37,
            "1564444191":4.37,
            "1564445391":4.35,
            "1564446591":4.36,
            "1564447791":4.36,
            "1564448991":4.36,
            "1564450191":4.35,
            "1564451391":4.37,
            "1564452591":4.37,
            "1564453791":4.35,
            "1564454991":4.36,
            "1564456191":4.37,
            "1564457391":4.37,
            "1564458591":4.36,
            "1564459791":4.37,
            "1564460991":4.34,
            "1564462191":4.36,
            "1564463391":4.34,
            "1564464591":4.37,
            "1564465791":4.34,
            "1564466991":4.37,
            "1564468191":4.34,
            "1564469391":4.36,
            "1564470591":4.36,
            "1564471791":4.36,
            "1564472991":4.37,
            "1564474191":4.37,
            "1564475391":4.36,
            "1564476591":4.35,
            "1564477791":4.36,
            "1564478991":4.35,
            "1564480191":4.35,
            "1564481391":4.37,
            "1564482591":4.36,
            "1564483791":4.34,
            "1564484991":4.37,
            "1564486191":4.38,
            "1564487391":4.35,
            "1564488591":4.34,
            "1564489791":4.36,
            "1564490991":4.35,
            "1564492191":4.36,
            "1564493391":4.36,
            "1564494591":4.36
        }
    }
]
```

Para mais pormenores sobre os pedidos OpenTSDB, pode consultar a seguinte documentação: [OpenTSDB api query](http://opentsdb.net/docs/build/html/api_http/query/index.html)

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.