---
title: FAQ Public Cloud OVHcloud
excerpt: Encontre as perguntas mais frequentes sobre os serviços Public Cloud da OVHcloud
updated: 2024-10-11
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Perguntas frequentes - Public Cloud

### Opções e faturação

/// details | Como funciona a faturação do Public Cloud?

A faturação ocorre entre o dia 1 e dia 5 de cada mês e tem em conta o consumo do mês anterior. Se optou por uma faturação mensal, o plano do mês a seguir será faturado ao mesmo tempo que o consumo do mês anterior (instâncias, Object Storage). Em caso de migração para um plano mensal de um recurso, ser-lhe-á imediatamente debitado um montante proporcional à sua utilização do mês a decorrer.
Tenha em conta que todas as instâncias são faturadas até serem eliminadas da Área de Cliente OVHcloud.
Pode seguir o seu consumo graças a projeções obtidas através do histórico das suas utilizações. Além isso, também é possível escolher uma faturação separada para cada projeto Public Cloud, o que permite uma eventual refaturação junto da sua empresa.

Para passar de um modo de faturação para outro, consulte o nosso manual [Passar de uma faturação à hora para uma faturação ao mês](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

> [!success]
> Beneficie de preços reduzidos ao comprometer-se com um período de 1 a 36 meses nos seus recursos Public Cloud. Mais informações na nossa página [Savings Plans](/links/public-cloud/savings-plan).

///

/// details | Como associar uma instância Public Cloud ao Savings Plan que acabo de encomendar?

Não há nenhuma ação a ser realizada. Qualquer instância já criada (ou em breve criada) e que corresponda ao modelo escolhido para o seu [Savings Plan](/links/public-cloud/savings-plan) será automaticamente integrada, sob condição de que a quantidade de recursos do Savings Plan não seja esgotada.

///

/// details | Como fazer evoluir as minhas instâncias no caso de ter necessidade de mais ou menos recursos?

Qualquer instância pode ser redimensionada para uma mais potente da mesma gama a partir da Área de Cliente ao clicar em `editar`{.action} na página da instância. Também é possível redimensioná-la para um modelo inferior, se for lançada com a opção "flex". Esta opção impõe um tamanho de disco de 50GB para todos os modelos, permitindo assim o redimensionamento nos dois sentidos.
Em qualquer caso, o redimensionamento de uma instância implica a sua reinicialização.

///

/// details | As instâncias Public Cloud são compatíveis com cloud-init?

Sim, as imagens cloud fornecidas pela OVHcloud integram os scripts cloud-init que permitem personalizar as instâncias no arranque. A infraestrutura entrega as informações de personalização da instância através de um servidor de metadados diretamente contactado por cloud-init.

///

/// details | É possível a virtualização na instância?

Sim e não.

Sim, pois a opção está ativada (o *flag CPU VMX* está visível na sua instância). Assim, poderá utilizar qualquer solução de virtualização na sua instância (KVM, QEMU, VirtualBox, Xen, HyperV, etc.).

Não, pois assim que ocorrer uma migração livre da sua instância (e esta operação pode ocorrer a qualquer momento, com base no ciclo de vida do hypervisor subjacente), o seu kernel Linux pode disfuncionar (kernel panic).

Siga [este link](https://www.linux-kvm.org/page/Nested_Guests#Limitations) para mais informações.

///

### Ligação a uma instância

/// details | Como conectar-se a uma instância Public Cloud?

A ligação faz-se graças a um par de chaves SSH a configurar aquando da criação da sua instância Public Cloud.

Sugerimos que consulte o guia [Criação e conexão a uma primeira instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

///

/// details | Perdi ou desejo mudar a minha chave SSH, como fazer?

Se já não pode ligar-se após a perda da sua chave privada, deverá alterar a chave pública da sua instância passando esta última em modo "Rescue".

Pode consultar o guia [Alterar a chave SSH em caso de perda](/pages/public_cloud/compute/replacing_lost_ssh_key).

///

/// details | Como criar e gerir utilizadores OpenStack?

Para poder utilizar as API Horizon ou OpenStack, deverá criar um utilizador OpenStack. Pode criar um número ilimitado.

Sugerimos que consulte o guia [Criar e eliminar um utilizador OpenStack](/pages/public_cloud/compute/create_and_delete_a_user).

///

### Backups

/// details | É possível efetuar cópias de segurança dos meus servidores Public Cloud?

Na Área de Cliente OVHcloud, pode criar uma cópia de segurança a qualquer momento. Esta última permite-lhe restaurar a sua instância numa antiga configuração, ou de a poder recriar. Estes backups são armazenados e faturados da mesma forma que as imagens no "Private Image". Através das API OpenStack, terá a possibilidade de os descarregar da infraestrutura OVHcloud ou para outros projetos.

Pode consultar o guia [Criar uma cópia de segurança de uma instância](/pages/public_cloud/compute/save_an_instance).

///

/// details | Posso aumentar, de forma dinâmica, o tamanho de um volume continuando a escrever no disco?

Não, um volume tem de ser desassociado antes de o poder aumentar.

///

/// details | Existe um número máximo de volumes adicionais que podemos associar a cada instância?

Sim, o limite é de 25 volumes adicionais por instância.

///

### Rede

/// details | Quantos endereços IPv6 são fornecidos com a minha instância?

Cada instância vem com um endereço IPv6.

///

/// details | Posso alterar o IP público da minha instância?

Os IP públicos são atribuídos automaticamente às instâncias e não podem ser alterados. Para obter o controlo sobre o IP público de uma instância, aconselhamos que utilize um endereço Additional IP. Desta forma, qualquer que seja o endereço público atribuído automaticamente à instância, tem a possibilidade de adicionar um ou vários Additional IP à sua instância.

Para mais informações, consulte o guia [Adicionar um Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-buy).

///

/// details | Quantos Additional IPs posso anexar a cada instância?

Pode anexar até 256 Additional IPs por instância.

///

/// details | De que forma posso criar uma rede privada entre os meus servidores?

O Public Cloud integra uma solução SDN (software-defined network). que permite criar redes privadas de forma dinâmica e ligá-las às instâncias a partir da Área de Cliente ou através da API.
Estas redes privadas baseiam-se na tecnologia vRack da OVHcloud comum aos outros serviços da empresa, tais como o Private Cloud ou os servidores dedicados. Assim, oferece a possibilidade de fazer comunicar o conjunto dos seus elementos de infraestrutura na OVHcloud, de forma isolada e segura.

Sugerimos que consulte o guia [Configuração do vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

A rede privada dispõe por predefinição das proteções de rede nativas do Openstack. que incluem diferentes mecanismos como a proteção contra o spoofing de IP.<br>
Do lado das instâncias, isto pode traduzir-se em bloqueios de pacotes de rede consoante a sua utilização (pfSense, router, protocolo CARP, etc..).

Dependendo das suas necessidades, terá de desativar a função de `Port Security` na porta ou na rede privada.
Pode consultar o guia de [gestão das regras de firewall e port security nas redes que utilizam OpenStack CLI](/pages/public_cloud/compute/security_group_private_network).

Também pode consultar todos os detalhes sobre [documentação OpenStack](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) ou sobre [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

///

### Segurança

/// details | De que forma é que os meus servidores são protegidos?

A OVHcloud protege toda a sua infraestrutura graças à sua solução anti-DDoS exclusiva. Além disso, tem a possibilidade de adicionar os grupos de segurança OpenStack: este equivalente de firewall é gerido diretamente ao nível da infraestrutura da OpenStack, além das suas instâncias.

Pode consultar o guia [Configurar um grupo de segurança](/pages/public_cloud/compute/setup_security_group).

Estas proteções, associadas às que pode aplicar aos seus servidores, irão permitir-lhe otimizar a fiabilidade da sua implementação.

///

/// details | Como verificar se a minha instância é vulnerável à falha MDS?

A vulnerabilidade à [falha MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) pode ser verificada através do seguinte comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

Se o resultado for `Vulnerable`, não tenha medo nenhum, o hipervisor subjacente protege-o.

No entanto, é possível mitigar esta falha diretamente na sua instância fazendo um "hard" reboot da sua instância, quer [através da Área de Cliente OVHcloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance), quer com um comando como este:

```bash
openstack server reboot --hard $serverID
```

///

/// details | A minha instância continua vulnerável à falha SSBD?

A vulnerabilidade à [falha SSBD](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) pode ser verificada através do seguinte comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Mesmo que o resultado seja o `Vulnerable`, a sua instância está totalmente protegida contra esta falha.

A *flag CPU SSBD* não está disponível para a sua instância, pois pode causar instabilidades em certos SO.

///

## Quer saber mais?

Fale com nossa [comunidade de utilizadores](/links/community).
