---
title: Gestão das regras de firewall e port security nas redes que utilizam OpenStack CLI
slug: firewall_security_pci
excerpt: Descubra o funcionamento dos grupos de segurança no Public Cloud
section: Gestão via OpenStack
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 26/06/2022**

## Objetivo

A plataforma OpenStack gere a segurança das firewalls combinando as regras de ligação em **grupos de segurança**. As regras são depois aplicadas afetando grupos de segurança aos portos de rede.

Uma **porta** no âmbito do [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} é um ponto de ligação entre as sub-redes e os elementos de rede (tais como instâncias, load-balancers, routers, etc...).

**Descubra como são geridos os grupos de segurança para as redes públicas e privadas no Public Cloud.**

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/)
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/)

## Instruções

### Procedimento de ativação <a name="activation"></a>

> [!primary]
>
> Esta secção do guia diz apenas respeito às configurações de redes privadas.

#### Para uma rede privada já criada

Para evitar qualquer rutura de configuração durante a montagem de versões OpenStack Stein e Open vSwitch, o parâmetro "port security" foi definido no "False" nas redes existentes.

Deve utilizar a CLI `openstack` para ativar a "port security" nas portas e na rede existente.

Em primeiro lugar, se deseja utilizar regras de firewall em redes privadas, deverá definir a propriedade "port security" em "True":

```bash
openstack network set --enable-port-security <network_ID>
```

De seguida, deverá ativar a "port security" na porta do seu serviço nesta rede. 

> [!primary]
> Lembrete: para recuperar a porta, pode utilizar a CLI OpenStack. Execute o comando `openstack port list --server <server_ID>` para recuperar as portas de um determinado servidor.
>

Para todos os serviços com uma porta ativa nesta rede, ative o "port security":

```bash
openstack port set --enable-port-security <port_ID>
```

De seguida, pode verificar se a "port security" está ativada numa porta específica:

```bash
openstack port show <port-ID> -f value -c port_security_enabled
```

O resultado deveria ser semelhante a isto:

<pre class="console"><code>$ openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
</code></pre>

#### Para uma nova rede privada:

Uma vez que a atualização para a versão Stein nas regiões OpenStack e a nova versão da Open vSwitch foram realizadas a partir de 06/09/2022 ([Private network port default configuration change](https://public-cloud.status-ovhcloud.com/incidents/z6qq4bcvsn11)), o parâmetro "port security" será definido no "True" por defeito em qualquer rede privada recentemente criada.

Isto assegurar-nos-á de sermos coerentes com a política "True" por defeito, como nas implementações vanilla OpenStack.

### Parâmetros predefinidos

Cada porta de rede está ligada a um grupo de segurança que contém regras específicas.

O grupo de segurança "default" inclui as seguintes regras:

```bash
openstack security group rule list default

+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| 3a5564b7-5b68-4923-b796-26eb623c5b53 | None        | IPv6      | ::/0      |            | None                  |
| 43f2b673-9cbc-4bac-ad66-22ef4789d0fc | None        | IPv6      | ::/0      |            | None                  |
| a6a1ecfd-4713-4316-a020-74eccd49fd6c | None        | IPv4      | 0.0.0.0/0 |            | None                  |
| cd66a601-de94-4dbe-ae21-44792229d351 | None        | IPv4      | 0.0.0.0/0 |            | None                  |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
```

O retorno obtido mostra que todas as ligações são autorizadas para qualquer protocolo e nos dois sentidos.

Consoante as regiões, a implementação pode ser diferente, mas o resultado é idêntico: todas as ligações são autorizadas.

Consequentemente, todas as portas de rede (públicas e privadas) permitem cada ligação ao arranque de uma instância.

### Gerir as regras da sua firewall privada

#### Adicionar regras

Se pretender configurar regras específicas, pode criar um novo grupo de segurança e associá-lo à sua porta de rede.

Utilize este comando para criar o grupo:

```bash
openstack security group create private

+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field           | Value                                                                                                                                                                      |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
| description     | private                                                                                                                                                                    |
| id              | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                       |
| location        | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone=    |
| name            | private                                                                                                                                                                    |
| project_id      | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                           |
| revision_number | 1                                                                                                                                                                          |
| rules           | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv4', id='54fae025-3439-4e45-8745-2ffe5b261f72', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
|                 | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv6', id='ad1aa507-79bd-434f-b674-221ef41d9ba6', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
| stateful        | None                                                                                                                                                                       |
| tags            | []                                                                                                                                                                         |
| updated_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Este exemplo de grupo de segurança tem apenas regras de saída, o que significa que não será autorizada nenhuma comunicação de entrada.

Para adicionar uma regra para, por exemplo, as ligações SSH, pode utilizar o seguinte comando:

```bash
openstack security group rule create --protocol tcp --dst-port 22 private

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field             | Value                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
| description       |                                                                                                                                                                         |
| direction         | ingress                                                                                                                                                                 |
| ether_type        | IPv4                                                                                                                                                                    |
| id                | 8f026e18-1c8b-4042-8655-10c9a773d131                                                                                                                                    |
| location          | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone= |
| name              | None                                                                                                                                                                    |
| port_range_max    | 22                                                                                                                                                                      |
| port_range_min    | 22                                                                                                                                                                      |
| project_id        | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                        |
| protocol          | tcp                                                                                                                                                                     |
| remote_group_id   | None                                                                                                                                                                    |
| remote_ip_prefix  | 0.0.0.0/0                                                                                                                                                               |
| revision_number   | 1                                                                                                                                                                       |
| security_group_id | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                    |
| tags              | []                                                                                                                                                                      |
| updated_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Introduza o seguinte comando para associar o seu grupo de segurança à sua porta:

```bash
openstack port set --security-group private 5be009d9-fc2e-4bf5-a152-dab52614b02d
```

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
