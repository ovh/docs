













### Step 2 - Les cas particuliers de migration VCD

/// details | Quelle sont les cas particuliers de migration VCD ?

| Step             | Check                                                                               | Actions                                                                                                                                                                                                                                  |
|------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DURING MIGRATION | CARP (avertissement) to be coded                                                    | detection + VCD implementation side → Jira to create Kevin Le Ner step 12 public documentation                                                                                                                                           |
| DURING MIGRATION | 	Scale0 on PCC (NSX-T 4.0.1) → (coche)                                              | 	ignore this profile and remove them                                                                                                                                                                                                     |
| DURING MIGRATION | 	Edge, Backup infra, zerto infra, private GW... (OVH vms) Virtual Machines → (coche) | 	Do not migrate                                                                                                                                                                                                                          |
| PRECHECK         | Multi vDC (avertissement)                                                           | 	public documentation, if datacenter empty → ignore else only one customer, contact him and block                                                                                                                                        |
| PRECHECK         | FT (coche)                                                                          | Detection + error? + mail or detection + mail + disable FT on PCC side + migra → Kevin Le Ner to check with PM → public documentation + disable FT on PCC side + migrate VM                                                              |
| PRECHECK         | DRS Affinity/Anti affinity rules (avertissement)                                    | Partial only VMs, distinction between required and preferred in VCD, what do we take by default? → detection + VCD implementation side → (avertissement) public documentation VM ↔ host won't be migrated and migrate VMs affinity rules |
| PRECHECK         | 	Check special devices (CD...) → (coche)                                            | Public documentation, notify customer + mail to ask customer to remove device                                                                                                                                                            |
| PRECHECK         | 	Datastores cluster → (coche)                                                       | Public documentation, notify customer and ignore                                                                                                                                                                                         |
| PRECHECK         | Memory over-commitment (avertissement)                                              | Public documentation, detect + error + mail to ask customer to add resources or add free resources Kevin Le Ner  ???                                                                                                                     |
| PRECHECK         | 	Resource pools → 2 use cases, (avertissement)                                      | Public documentation, no notion on VCD, remove and document → ok                                                                                                                                                                         |
| PRECHECK         | 	Security option (erreur)                                                           | 	Public documentation and detect security option linked to certification and block                                                                                                                                                       |
| PRECHECK         | 	Encrypted VM disks (erreur)	                                                       | Public documentation and detect and block                                                                                                                                                                                                |
| PRECHECK         | 	Zerto (erreur) → list block (avertissement)                                        | 	8 PCCs (avertissement) public documentation                                                                                                                                                                                             |
| PRECHECK         | 	Backup (coche)	                                                                    | detection + migration scenario + Jira Inno → to discuss technical feasibility without being too much intrusive on PCC => link the backuprepositories to the PCC VCD service, ... see with Flu plan                                       |
| PRECHECK         | 	VM with IDE disk → ???                                                             | À creuser avec timo                                                                                                                                                                                                                      |
| PRECHECK         | 	Hosts freespare and hourly                                                         | public documentation, notify customer and retry maintenance 1hx24, go in error state and CCO to contact customer (to check with Thibaut Gillardeau )                                                                                     |
| PRECHECK         | 	SQLServer usage                                                                    | 	SQLServer reporting may 99% chances not be ready at GA                                                                                                                                                                                  |
| PRECHECK         | 	Global zpools                                                                      | 	only check. not blocking except in multi vcd case                                                                                                                                                                                       |
| PRECHECK         | 	Check NSX-v usage                                                                  | 	public documentation can not be migrated if edges and DFW, block migration for now, to be processed in another wave (we will check whether it can be managed manually → 15 occurrences with usage)                                      |
| PRECHECK         | 	Check HCX usage (erreur)                                                           | 	public documentation can not be migrated. feature must be disabled prior migration                                                                                                                                                      |
HCX usage (erreur)	public documentation can not be migrated. feature must be disabled prior migration