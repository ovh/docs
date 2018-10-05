---
title: 'Release notes'
excerpt: 'Release notes'
section: 'Release notes'
---

This page documents updates to Analytics Data Platform.
#### ADP v1.0.1 October 5, 2018
<table class="table-features">
  <tbody>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        Ambari is now syncronized with FreeIPA every 2 minute
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        A progress bar now shows cluster deployment status in Openstack CLI
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        When cancelling a deployment or on error, all resources are deleted for a complete rollback  
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        Cluster now have edge nodes for better users work isolation  
      </td>
    </tr>
  </tbody>
</table>

<table class="table-bugfixes">
  <tbody>
    <tr>
      <td>
        <span class="label bugfix warning">Bugfix</span>
      </td>
      <td>
        Knox Hive API link does not point on LLAP
      </td>
    </tr>
    <tr>
      <td>
        <span class="label bugfix warning">Bugfix</span>
      </td>
      <td>
        Knox LogSearch link 404 
      </td>
    </tr>
  </tbody>
</table>

#### ADP v0.4.0 September 15, 2018
<table class="table-features">
  <tbody>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        Analytics Data Platform can now be deployed on a1-80 or a1-160 featuring NVMe SSD drives for enhanced I/O  
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        HDFS can now work with storage policies. Clusters can be deployed with full SSD storage or mixed SSD/CEPH storage with a
        1SSD+2CEPH blocks replication.  
      </td>
    </tr>
  </tbody>
</table>


#### ADP v0.3.0 September 1, 2018

<table class="table-features">
  <tbody>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        Analytics Data Platform now features a identity manager allowing to manage users and groups
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        Two factors authentication can now be enabled for UI logins and SSH sessions
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release success">Feature</span>
      </td>
      <td>
        SSH sessions to bastion are now recorded for auditing
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release warning">Changed</span>
      </td>
      <td>
         NAT gateway is now using <i>r2-15</i> flavors for guaranteed bandwidth
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release warning">Changed</span>
      </td>
      <td>
         HDP updated to <a href="https://docs.hortonworks.com/HDPDocuments/HDPforCloud/HDPforCloud-2.6.5/bk_release-notes/content/ch_relnotes.html">2.6.5</a>
      </td>
    </tr>
    <tr>
      <td>
        <span class="label release warning">Changed</span>
      </td>
      <td>
         Ambari updated to <a href="https://docs.hortonworks.com/HDPDocuments/Ambari-2.6.2.2/bk_ambari-release-notes/content/ambari_relnotes-2.6.2.2-fixed-issues.html">2.6.2.2</a>
      </td>
    </tr>
  </tbody>
</table>


___

#### ADP v0.0.1 July 1, 2018

First release of OVH Analytics Data Platform
