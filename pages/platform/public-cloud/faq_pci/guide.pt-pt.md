---
title: FAQ Public Cloud OVHcloud
slug: public-cloud-faq
section: Introdução
order: 3
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 06/09/2021**

## Perguntas frequentes - Public Cloud

### Como conectar-se a uma instância Public Cloud?

A ligação faz-se graças a um par de chaves SSH a configurar aquando da criação da sua instância Public Cloud.

Sugerimos que consulte o guia [Criação e conexão a uma primeira instância Public Cloud](../public-cloud-primeiros-passos/).

### Perdi ou desejo mudar a minha chave SSH, como fazer?

Se já não pode ligar-se após a perda da sua chave privada, deverá alterar a chave pública da sua instância passando esta última em modo "Rescue".

Pode consultar o guia [Alterar a chave SSH em caso de perda](../alterar_a_chave_ssh_em_caso_de_perda/).

### Quais são as possibilidades de backup da minha instância?

Na Área de Cliente OVHcloud, pode criar uma cópia de segurança a qualquer momento. que lhe permite restaurar a sua instância numa configuração anterior ou criar uma nova instância.

Pode consultar o guia [Criar uma cópia de segurança de uma instância](../efetuar_backup_de_uma_instancia/).

### Como criar e gerir utilizadores OpenStack?  

Para poder utilizar as API Horizon ou OpenStack, deverá criar um utilizador OpenStack. Pode criar um número ilimitado.

Sugerimos que consulte o guia [Criar e eliminar um utilizador OpenStack](../criar-e-eliminar-um-utilizador-openstack/).

### Como funciona a faturação do Public Cloud?

A faturação ocorre entre o dia 1 e dia 5 de cada mês e tem em conta o consumo do mês anterior. Se optou por uma faturação mensal, o plano do mês a seguir será faturado ao mesmo tempo que o consumo do mês anterior (instâncias, Object Storage). Em caso de migração para um plano mensal de um recurso, ser-lhe-á imediatamente debitado um montante proporcional à sua utilização do mês a decorrer.
Tenha em conta que todas as instâncias são faturadas até serem eliminadas da Área de Cliente OVHcloud.
Pode seguir o seu consumo graças a projeções obtidas através do histórico das suas utilizações. Além isso, também é possível escolher uma faturação separada para cada projeto Public Cloud, o que permite uma eventual refaturação junto da sua empresa.

Para passar de um modo de faturação para outro, consulte o nosso manual [Passar de uma faturação à hora para uma faturação ao mês](../mudar-tipo-faturacao-public-cloud/).

### Como fazer evoluir as minhas instâncias no caso de ter necessidade de mais ou menos recursos?

Qualquer instância pode ser redimensionada para uma mais potente da mesma gama a partir da Área de Cliente ao clicar em `editar`{.action} na página da instância. Também é possível redimensioná-la para um modelo inferior, se for lançada com a opção "flex". Esta opção impõe um tamanho de disco de 50GB para todos os modelos, permitindo assim o redimensionamento nos dois sentidos.
Em qualquer caso, o redimensionamento de uma instância implica a sua reinicialização.

### As instâncias Public Cloud são compatíveis com cloud-init?

Sim, as imagens cloud fornecidas pela OVHcloud integram os scripts cloud-init que permitem personalizar as instâncias no arranque. A infraestrutura entrega as informações de personalização da instância através de um servidor de metadados diretamente contactado por cloud-init.

### É possível efetuar cópias de segurança dos meus servidores Public Cloud?

Pode criar, quando desejar e de forma ilimitada, instâncias de Backup dos seus servidores. Estas cópias de segurança são armazenadas e faturadas da mesma forma que as imagens em "Private Image". Através das API OpenStack, terá a possibilidade de as descarregar da infraestrutura OVHcloud ou para outros projetos.

Pode consultar o guia [Criar uma cópia de segurança de uma instância](../efetuar_backup_de_uma_instancia/).

### Posso aumentar, de forma dinâmica, o tamanho de um volume continuando a escrever no disco?

Não, um volume tem de ser desassociado antes de o poder aumentar.

### Existe um número máximo de volumes adicionais que podemos associar a cada instância?

Sim, o limite é de 25 volumes adicionais por instância.

### De que forma é que os meus servidores são protegidos?

A OVHcloud protege toda a sua infraestrutura graças à sua solução anti-DDoS exclusiva. Além disso, tem a possibilidade de adicionar os grupos de segurança OpenStack: este equivalente de firewall é gerido diretamente ao nível da infraestrutura da OpenStack, além das suas instâncias.

Pode consultar o guia [Configurar um grupo de segurança](../configurar_um_grupo_de_seguranca/).

Estas proteções, associadas às que pode aplicar aos seus servidores, irão permitir-lhe otimizar a fiabilidade da sua implementação.

### De que forma posso criar uma rede privada entre os meus servidores?

O Public Cloud integra uma solução SDN (software-defined network). que permite criar redes privadas de forma dinâmica e ligá-las às instâncias a partir da Área de Cliente ou através da API.
Estas redes privadas baseiam-se na tecnologia vRack da OVHcloud comum aos outros serviços da empresa, tais como o Private Cloud ou os servidores dedicados. Assim, oferece a possibilidade de fazer comunicar o conjunto dos seus elementos de infraestrutura na OVHcloud, de forma isolada e segura.

Sugerimos que consulte o guia [Configuração do vRack Public Cloud](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/) (EN).

### Posso alterar o IP público da minha instância?

Os IP públicos são atribuídos automaticamente às instâncias e não podem ser alterados. Para obter o controlo sobre o IP público de uma instância, aconselhamos que utilize um endereço IP Failover. Desta forma, qualquer que seja o endereço público atribuído automaticamente à instância, tem a possibilidade de adicionar um ou vários IP Failover à sua instância.

Para mais informações, consulte o guia [Adicionar um IP failover](../adicionar-um-ip-failover/).

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
