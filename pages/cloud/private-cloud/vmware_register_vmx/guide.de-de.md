---
title: VMs in einem neuen Dedicated Cloud speichern
slug: vsphere-register-vm-vmx
excerpt: Hier erfahren Sie, wie Sie VMs über alte Datastores auf einem neuen Dienst neu speichern.
section: VMware vSphere Funktionen
order: 06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 22.03.2021**

## Ziel

Nach einer Störung erscheinen virtuelle Maschinen nicht mehr in Ihrem vSphere Inventar, aber alle Dateien sind noch auf den Datastores vorhanden.

**Hier erfahren Sie, wie Sie VMs eines Datastores in Ihr vSphere Inventar aufnehmen.**

## Voraussetzungen

- Sie sind in Ihrem [vSphere Interface](../den_vsphere_client_installieren/) angemeldet.
- Sie verfügen über Datastores, die die Dateien der virtuellen Maschinen enthalten.

## In der praktischen Anwendung

Gehen Sie [in Ihrem vSphere](../den_vsphere_client_installieren/) Interface in die Ansicht `Storage`{.action}.

![Storage](images/register-vmx-01.png){.thumbnail}

Wählen Sie einen Datastore in der Liste aus.

![Datastore auswählen](images/register-vmx-02.png){.thumbnail}

Wählen Sie in den Ordnern dieses Datastores die Datei `.vmx` aus und klicken Sie auf `Register VM`{.action}.

![VM speichern](images/register-vmx-03.png){.thumbnail}

Füllen Sie die erforderlichen Informationen aus und klicken Sie auf `Finish`{.action}.

![VM speichern](images/register-vmx-04.png){.thumbnail}

Diese Operationen sind auf jedem Datastore und für jede neu zu registrierende VM zu wiederholen.

Überprüfen Sie die Einstellungen Ihrer VMs (Name, [Portgroup](../vxlan-erstellung/) etc.), indem Sie mit der rechten Maustaste auf jede Ihrer VMs klicken und `Edit Settings`{.action}.

![Ändern](images/register-vmx-06.png){.thumbnail}

Bei einem Einstellfehler wird Ihnen eine Fehlermeldung angezeigt, wenn Sie die VM wieder einschalten.

Sie können eine VM wieder einschalten, indem Sie mit der rechten Maustaste auf diese klicken und dann auf `Power on`{.action}

![VM speichern](images/register-vmx-05.png){.thumbnail}

### Automatisierung

Wenn Sie mehrere Dutzend VMs und/oder Datastores haben, können Skripte verwendet werden, um den Weg der Datastores und die Registrierung der darauf befindlichen VMs durchzuführen.

#### mit PowerCLI

VMware liefert PowerCLI für VMware Administratoren mit PowerShell: [Installieren Sie PowerCLI](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-F02D0C2D-B226-4908-9E5C-2E783D41FE2D.html){.external}.

Anschließend können Sie das nachstehende Skript verwenden, das dem von [LucD erstellten Skript entspricht](https://www.lucd.info/2009/12/02/raiders-of-the-lost-vmx/){.external}.

```powershell
function register-vmxX {
    param($entityName = $null,$dsNames = $null,$template = $false,$ignore = $null,$checkNFS = $true,$whatif=$false)

    function Get-Usage{
        Write-Host "Parameters incorrect" -ForegroundColor red
        Write-Host "register-vmxX -entityName  -dsNames [,...]"
        Write-Host "entityName   : a cluster-, datacenter or ESX hostname (not together with -dsNames)"
        Write-Host "dsNames      : one or more datastorename names (not together with -entityName)"
        Write-Host "ignore       : names of folders that shouldn't be checked"
        Write-Host "template     : register guests ($false)or templates ($true) - default : $false"
        Write-Host "checkNFS     : include NFS datastores - default : $true"
        Write-Host "whatif       : when $true will only list and not execute - default : $false"
    }

    if(($entityName -ne $null -and $dsNames -ne $null) -or ($entityName -eq $null -and $dsNames -eq $null)){
        Get-Usage
        break
    }

    if($dsNames -eq $null){
        switch((Get-Inventory -Name $entityName).GetType().Name.Replace("Wrapper","")){
            "Cluster"{
                $dsNames = Get-Cluster -Name $entityName | Get-VMHost | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            "Datacenter"{
                $dsNames = Get-Datacenter -Name $entityName | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            "VMHost"{
                $dsNames = Get-VMHost -Name $entityName | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            Default{
                Get-Usage
                exit
            }
        }
    }
    else{
        $dsNames = Get-Datastore -Name $dsNames | where {$_.Type -eq "VMFS" -or $checkNFS} | Select -Unique | % {$_.Name}
    }

    $dsNames = $dsNames | Sort-Object
    $pattern = "*.vmx"
    if($template){
        $pattern = "*.vmtx"
    }

    foreach($dsName in $dsNames){
        Write-Host "Checking " -NoNewline; Write-Host -ForegroundColor red -BackgroundColor yellow $dsName
        $ds = Get-Datastore $dsName | Select -Unique | Get-View
        $dsBrowser = Get-View $ds.Browser
        $dc = Get-View $ds.Parent
        while($dc.MoRef.Type -ne "Datacenter"){
            $dc = Get-View $dc.Parent
        }
        $tgtfolder = Get-View $dc.VmFolder
        $esx = Get-View $ds.Host[0].Key
        $pool = Get-View (Get-View $esx.Parent).ResourcePool

        $vms = @()
        foreach($vmImpl in $ds.Vm){
            $vm = Get-View $vmImpl
            $vms += $vm.Config.Files.VmPathName
        }
        $datastorepath = "[" + $ds.Name + "]"

        $searchspec = New-Object VMware.Vim.HostDatastoreBrowserSearchSpec
        $searchspec.MatchPattern = $pattern

        $taskMoRef = $dsBrowser.SearchDatastoreSubFolders_Task($datastorePath, $searchSpec)

        $task = Get-View $taskMoRef
        while ("running","queued" -contains $task.Info.State){
            $task.UpdateViewData("Info.State")
        }
        $task.UpdateViewData("Info.Result")
        foreach ($folder in $task.Info.Result){
            if(!($ignore -and (&{$res = $false; $folder.FolderPath.Split("]")[1].Trim(" /").Split("/") | %{$res = $res -or ($ignore -contains $_)}; $res}))){
                $found = $FALSE
                if($folder.file -ne $null){
                    foreach($vmx in $vms){
                        if(($folder.FolderPath + $folder.File[0].Path) -eq $vmx){
                            $found = $TRUE
                        }
                    }
                    if (-not $found){
                        if($folder.FolderPath[-1] -ne "/"){$folder.FolderPath += "/"}
                        $vmx = $folder.FolderPath + $folder.File[0].Path
                        if($template){
                            $params = @($vmx,$null,$true,$null,$esx.MoRef)
                        }
                        else{
                            $params = @($vmx,$null,$false,$pool.MoRef,$null)
                        }
                        if(!$whatif){
                            $taskMoRef = $tgtfolder.GetType().GetMethod("RegisterVM_Task").Invoke($tgtfolder, $params)
                            Write-Host "`t" $vmx "registered"
                        }
                        else{
                            Write-Host "`t" $vmx "registered" -NoNewline; Write-Host -ForegroundColor blue -BackgroundColor white " ==> What If"
                        }
                    }
                }
            }
        }
        Write-Host "Done"
        }
    }
```

> [!primary]
>
> Das nachstehende Skript wurde für die VMware-Umgebung von OVHcloud angepasst.
> Die Laufbahn der NFS Datastores ist standardmäßig aktiviert.
>

Nachdem Sie das Skript in Ihrer Umgebung angegeben haben, können Sie es wie folgt verwenden:

```powershell
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337"
register-vmxX -dsNames "ssd-012345","pcc-012345"
register-vmxX -dsNames "ssd-012345","pcc-012345" -template:$true
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337" -ignore "upload-vpn"
register-vmxX -dsNames "ssd-012345","pcc-012345" -ignore "upload-vpn" -checkNFS:$true
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337" -whatif:$true
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
