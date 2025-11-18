---
title: "Web Cloud Databases - Alterar as permissões de um utilizador"
excerpt: "Saiba como alterar os direitos de um utilizador no seu serviço Web Cloud Databases"
updated: 2025-06-23
---

## Objetivo

A solução [Web Cloud Databases](/links/web/databases) pode conter várias bases de dados. Permite definir um ou vários utilizadores para a gestão e a utilização das suas bases de dados. Estes utilizadores podem ter direitos mais ou menos elevados, em função das suas funções no nível das suas bases de dados.
Durante a utilização do produto, pode ser levado a modificar os direitos de um utilizador no seu [Web Cloud Databases](/links/web/databases).

**Saiba como alterar os direitos de um utilizador no seu serviço Web Cloud Databases.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Dispor de uma solução [Web Cloud Databases](/links/web/databases) e de um ou vários utilizadores.

## Na Prática

> [!primary]
> Para criar um novo utilizador na sua solução Web Cloud Databases, consulte **Criar um utilizador** no nosso guia "[Criar bases de dados e utilizadores no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".

Clique nas guias abaixo para exibir sucessivamente cada um dos **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Web Cloud Databases`{.action} e escolha a solução Web Cloud Databases correspondente.
>>
>>![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `Utilizadores e permissões`{.action}.
>>
>>![Users and rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na tabela, clique no botão `...`{.action} à direita do utilizador em questão e, a seguir, em `Gerir permissões`{.action}.
>>
>> ![Manage rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-user-alone.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Na nova página que vai aparecer, encontrará uma tabela que indica todas as bases de dados presentes na sua solução Web Cloud Databases. Consultará neste quadro o conjunto dos direitos de que o seu utilizador dispõe para cada uma das bases de dados presentes na sua solução Web Cloud Databases.
>>
>> ![Changing user rights](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights-db-alone.png){.thumbnail}
>>
>> É aqui que poderá modificar os direitos do seu utilizador para cada uma das suas bases de dados. Para isso, e para cada uma das bases de dados em causa, basta clicar nos círculos vazios correspondentes às permissões que pretende redefinir para o seu utilizador. A alteração ficará efetiva em alguns instantes.

De seguida encontrará uma tabela recapitulativa dos tipos de pedidos possíveis numa base de dados em função da permissão atribuída ao utilizador:

<table align="center">
<thead>
<tr>
<th><center>Permissões</center></th>
<th><center>Administrador</center></th>
<th><center>Leitura / Escrita</center></th>
<th><center>Leitura</center></th>
<th><center>Nenhum</center></th>
</tr>
</thead>
<tbody>
<tr>
<td><center>Select</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td>
</tr>
<tr>
<td><center>Insert</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<tr>
<td><center>Update</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Delete</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td>
</tr>
<td><center>Create</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Alter</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
<td><center>Drop</center></td>
<td><center><span style="background-color:#198754; color:#ffffff; padding:2px 7px; border-radius:7px;">✔</span></center></td>
<td></td><td></td><td></td>
</tr>
</tbody>
</table>

## Quer saber mais?
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).