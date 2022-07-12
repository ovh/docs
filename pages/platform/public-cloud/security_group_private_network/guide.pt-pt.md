---
title: Gestão das regras de firewall e segurança das portas nas redes privadas
slug: firewall_security_pci
excerpt: Descubra o funcionamento dos grupos de segurança no Public Cloud
section: Gestão via OpenStack
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 16/06/2022**

## Objetivo

A plataforma OpenStack gere a segurança das firewalls combinando as regras de ligação em **grupos de segurança**. As regras são depois aplicadas afetando grupos de segurança aos portos de rede.

Uma **porta** no âmbito do [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} é um ponto de ligação entre as sub-redes e os elementos de rede (tais como instâncias, load-balancers, routers, etc...).

**Saiba como gerir os grupos de segurança das redes privadas no Public Cloud.**

> [!primary]
>
> Este guia só diz respeito às configurações de redes privadas. No que diz respeito às redes públicas, as regras de firewall são globais.
>
> Sugerimos que consulte os [detalhes da migração](#migration) abaixo relativos às alterações nas [regiões](#regions) Public Cloud OpenStack.
>

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/)
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/)

## Instruções

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

Se pretender configurar regras específicas, pode modificar o grupo de segurança predefinido. Também pode criar um novo grupo de segurança e associá-lo à sua porta de rede.

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

#### Diferenças de comportamento entre regiões <a name="regions"></a>

A configuração predefinida da rede privada pode diferir consoante a região utilizada.

> [!primary]
> Em certas regiões, a propriedade "port security" é considerada como *enabled*, embora não aplique regras na rede privada. Em algumas outras regiões (em função da versão do OpenStack implementada), a propriedade "port security" é vista como *enabled* e as regras são corretamente aplicadas na rede privada.
> 


Resumindo, as seguintes regiões executam a Newton OpenStack release e **nenhuma regra de firewall funcionará** para as suas redes privadas, mesmo que a segurança das portas esteja ativada:

- Singapura: SGP1
- Sydney: SYD1
- Hillsboro: US-WEST-OR-1
- Vint Hill: US-EAST-VA-1

Nas regiões seguintes (executando a versão Stein OpenStack), as regras de firewall para as redes privadas **funcionarão** como previsto:

- Beauharnois: BHS1, BHS3, BHS5
- Frankfurt: DE1
- Gravelines: GRA1, GRA3, GRA5, GRA7, GRA9, GRA11
- Estrasburgo: SBG5, SBG7
- Londres: UK1
- Varsóvia: WAW1

A OVHcloud vai progressivamente atualizar todas as regiões de Newton para Stein, de modo que a funcionalidade "port security" esteja disponível.

Para evitar qualquer interrupção do serviço durante a atualização, o valor *False* será atribuído à propriedade "port security" em todas as redes já criadas. Uma vez que uma região seja atualizada na versão Stein OpenStack, se deseja utilizar regras de firewall em redes privadas, deverá definir a propriedade "port security" na *True*.

Execute o seguinte comando para verificar se a propriedade "port security" está ativada na sua porta de rede privada:

```bash
openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
```

### Processo de migração <a name="migration"></a>

A migração seguirá o seguinte processo:

- As regras de firewall para as novas portas não serão aplicadas enquanto não tiver ativado a propriedade "port security" no novo porto. Nada muda para os portos existentes.
- As regiões OpenStack passarão para a versão Stein.
- As regiões OpenStack em versão Stein passarão por uma nova versão de OpenVSwitch.

> [!primary]
> A partir desta etapa, para os utilizadores do Terraform, é necessário forçar a parametrização do [port security para "false"](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_network_v2#port_security_enabled){.external} para que os playbooks possam funcionar.
>

- Poderá ativar a "port security" nas regiões de Stein.
- A porta security predefinida será alterada para **ativa** (será enviada uma comunicação global em tempo útil).
- As regras de firewall funcionarão para as novas portas. Nada muda para os portos existentes.
- A opção que permite ativar a propriedade "port security" nos portos existentes será ativada.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
