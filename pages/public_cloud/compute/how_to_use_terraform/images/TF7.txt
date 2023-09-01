resource "ovh_cloud_project_network_private" "private_network" {
  service_name  = "c076ca2979904ef6bf93faff181dab18"
  name          = "backend"
  regions       = ["SBG5"]
  provider      = ovh.ovh
  vlan_id       = 42
  depends_on    = [ovh_vrack_cloudproject.vcp]
}
 
resource "ovh_cloud_project_network_private_subnet" "private_subnet" {
  network_id    = ovh_cloud_project_network_private.private_network.id
  service_name  = "c076ca2979904ef6bf93faff181dab18"
  region        = "SBG5"
  network       = "192.168.42.0/24"
  start         = "192.168.42.2"
  end           = "192.168.42.200"
  dhcp          = false
  provider      = ovh.ovh
  no_gateway    = true
}
 
data "openstack_images_image_v2" "archlinux" {
  name          = "Archlinux"
  most_recent   = true
  provider      = openstack.ovh
}
 
variable "front_private_ip" {
  type          = list(any)
  default       = ["192.168.42.2", "192.168.42.3"]
}
 
resource "openstack_compute_instance_v2" "front" {
  count           = length(var.front_private_ip)
  provider        = openstack.ovh
  name            = "front"
  key_pair        = openstack_compute_keypair_v2.test_keypair.name
  flavor_name     = "s1-2"
  image_id        = data.openstack_images_image_v2.archlinux.id
  security_groups = ["default"]
  network {
    name = "Ext-Net"
  }
  network {
    name = ovh_cloud_project_network_private.private_network.name
    fixed_ip_v4 = element(var.front_private_ip, count.index)
  }
  depends_on = [ovh_cloud_project_network_private_subnet.private_subnet]
}
 
resource "openstack_blockstorage_volume_v2" "backup" {
  name     = "backup_disk"
  size     = 10
  provider = openstack.ovh
}
 
resource "openstack_compute_instance_v2" "back" {
  provider        = openstack.ovh
  name            = "back"
  key_pair        = openstack_compute_keypair_v2.test_keypair.name
  flavor_name     = "s1-2"
  image_id        = data.openstack_images_image_v2.archlinux.id
  security_groups = ["default"]
  network {
    name        = ovh_cloud_project_network_private.private_network.name
    fixed_ip_v4 = "192.168.42.150"
  }
  block_device {
    uuid                  = data.openstack_images_image_v2.archlinux.id
    source_type           = "image"
    destination_type      = "local"
    volume_size           = 10
    boot_index            = 0
    delete_on_termination = true
  }
  block_device {
    source_type           = "blank"
    destination_type      = "volume"
    volume_size           = 20
    boot_index            = 1
    delete_on_termination = true
  }
  block_device {
    uuid                  = openstack_blockstorage_volume_v2.backup.id
    source_type           = "volume"
    destination_type      = "volume"
    boot_index            = 2
    delete_on_termination = true
  }
  depends_on = [ovh_cloud_project_network_private_subnet.private_subnet]
}
