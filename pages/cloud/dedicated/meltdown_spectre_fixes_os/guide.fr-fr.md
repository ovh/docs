---
title: Find your patch for Meltdown and Spectre
slug: meltdown-spectre-kernel-update-per-operating-system
section: Meltdown and Spectre informations
---

<div id="main-content" class="wiki-content table-meltown-spectre">
   <p style="text-align: center;"><span style="color: rgb(51,102,255);"><br></span></p>
   <p><strong>Last update: 29 jun. at<span class="widont"> 02.00 pm CET</span></strong></p>
   <p><strong><strong>(this table reflects the situation at a given moment and is constantly evolving.)</strong></strong></p>
   <p style="text-align: center;"><span style="color: rgb(51,102,255);">&nbsp;</span></p>
   <h2 id="ExternalDocumentation/Proceduresforcustomers-Generalinformation">General information</h2>
   <p style="text-align: center;"><span style="color: rgb(51,102,255);">&nbsp;</span></p>
   <p>As we communicated, OVH has been informed of the Spectre (CVE-2017-5753 and CVE-2017-5715) and Meltdown (CVE-2017-5754) security vulnerabilities, making a large part of computer equipment in operation vulnerable to potential attacks, particularly those equipped with Intel CPUs. Note than some AMD cpu may be affected too.&nbsp;</p>
   <p>Some services, which are entirely managed by OVH, <u>will not require any manipulation on your part</u>: <em>Domains, Metrics and Logs Data Platform, xDSL, VoIP, DBaaS, OVH Load Balancer, vRack, Exchange, MX Plan, Web Hosting, Cloud Desktop, VDI, CDN, Swift, CEPH, NAS-HA, Public Cloud Storage and Public Cloud Archive</em>.</p>
   <p>Securing certain other services such as Dedicated servers, Public Cloud instances, VPS or Private Cloud <strong><u>will require additional action on your part</u></strong>, consisting of applying the recommended update and patches of the operating system vendor of your servers.</p>
   <p>&nbsp;</p>
   <p>To help you, we offer a non-exhaustive table listing the updates available for the main versions of the operating systems to find a patch to protect them against Meltdown and Spectre vulnerability. If you use another operating system, we recommend that you consult the documentation provided by the<span class="widont">&nbsp;</span>vendor to know if a patch is available to fix Meltdown and Spectre vulnerabilities.&nbsp;</p>
   <p>You will also find a list of all affected Intel CPU.&nbsp;If you are using one of them, your system is potentially vulnerable, and you will need to install a patch against Meltdown and Spectre and/or update your kernel.</p>
   <p>&nbsp;</p>
   <p>As a reminder, <span class="caps">OVH</span> provides self-managed machines which are the customer’s responsibility. Since we have no access to these machines we are not the administrators. It is your responsibility to manage software and install this patch against Meltdown or Spectre when available. Consequently, you will be responsible for potential<span class="widont">&nbsp;</span>instabilities.</p>
   <p><span style="color: rgb(51,102,255);">&nbsp;</span></p>
   <p style="text-align: left;"><em>Please note that you can also see the status of <a class="external-link" href="https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/" rel="nofollow">each <span class="caps">OVH</span> product in this </a><a class="external-link" href="https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes" rel="nofollow">page</a>.</em></p>
   <p style="text-align: left;"><em>Moreover, <a class="external-link" href="https://docs.ovh.com/gb/en/dedicated/updating-kernel-dedicated-server/" rel="nofollow">here is a guide</a>&nbsp;explaining how to update and patch your kernel to protect your system against Meltdown and Spectre if you're using an OVH image of your distribution.</em></p>
   <p style="text-align: left;">&nbsp;</p>
   <h2 style="text-align: left;" id="ExternalDocumentation/Proceduresforcustomers-MeltdownandSpectrepatchesavailabilityperOS"><span style="color: rgb(51,102,255);">&nbsp;</span>Meltdown and Spectre patches availability&nbsp; per <span class="caps">OS</span></h2>
   <p style="text-align: center;"><span style="color: rgb(51,102,255);"><br></span></p>
   <p style="text-align: center;"><span style="color: rgb(51,102,255);"><br></span></p>
   <div class="table-wrap">
      <table class="relative-table wrapped confluenceTable tablesorter tablesorter-default stickyTableHeaders" style="margin-left: auto; margin-right: auto; width: 96.0865%; padding: 0px;" role="grid">
         <thead class="tableFloatingHeaderOriginal" style="position: static; margin-top: 0px; left: 354.317px; z-index: 3; width: 1438px; top: 92px;">
            <tr role="row" class="tablesorter-headerRow">
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="&nbsp;: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">&nbsp;</div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="OS: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">OS</div>
               </th>
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Spectre - Variant 1***Bounds Check Bypass(CVE-2017-5753): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 1</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em>Bounds Check Bypass</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5753)</em></p>
                  </div>
               </th>
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Spectre - Variant 2***Branch Target Injection(CVE-2017-5715): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 2</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Branch Target Injection</span></em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5715)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Meltdown***Rogue Data Cache LoadMeltdown(CVE-2017-5754): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Meltdown</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Rogue Data Cache Load</span></em></p>
                     <p style="text-align: center;"><em>Meltdown</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5754)</em></p>
                  </div>
               </th>
            </tr>
         </thead>
         <thead class="tableFloatingHeader" style="display: none;">
            <tr role="row" class="tablesorter-headerRow">
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="&nbsp;: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">&nbsp;</div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="OS: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">OS</div>
               </th>
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Spectre - Variant 1***Bounds Check Bypass(CVE-2017-5753): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 1</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em>Bounds Check Bypass</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5753)</em></p>
                  </div>
               </th>
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Spectre - Variant 2***Branch Target Injection(CVE-2017-5715): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 2</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Branch Target Injection</span></em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5715)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Meltdown***Rogue Data Cache LoadMeltdown(CVE-2017-5754): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Meltdown</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Rogue Data Cache Load</span></em></p>
                     <p style="text-align: center;"><em>Meltdown</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5754)</em></p>
                  </div>
               </th>
            </tr>
         </thead>
         <tbody aria-live="polite" aria-relevant="all">
            <tr role="row">
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="confluence-information-macro has-no-icon confluence-information-macro-information conf-macro output-block" data-hasbody="true" data-macro-name="info">
                        <div class="confluence-information-macro-body">In addition of the software patch, CPU Microcode need to be updated by OVH to totally fix Spectre 2.</div>
                     </div>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Windows</td>
               <td colspan="1" class="confluenceTd">Server 2008</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                           <p style="text-align: left;">upgrade to Windows Server 2008 R2</p>
                           <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                        </div>
                     </div>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                           <p style="text-align: left;">upgrade to Windows Server 2008 R2</p>
                           <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                        </div>
                     </div>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                           <p>upgrade to Windows Server 2008 R2</p>
                           <p><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                        </div>
                     </div>
                     <p>&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Windows</td>
               <td colspan="1" class="confluenceTd">Server 2008 R2</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056897" rel="nofollow"><span>KB 4056897</span></a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056897" rel="nofollow">https://support.microsoft.com/en-us/help/4056897</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056897" rel="nofollow"><span>KB 4056897</span></a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056897" rel="nofollow">https://support.microsoft.com/en-us/help/4056897</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056897" rel="nofollow"><span>KB 4056897</span></a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056897" rel="nofollow">https://support.microsoft.com/en-us/help/4056897</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Windows</td>
               <td colspan="1" class="confluenceTd">Server 2012</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                           <p style="text-align: left;">upgrade to Windows Server 2012 R2</p>
                           <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                        </div>
                     </div>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                           <p style="text-align: left;">upgrade to Windows Server 2012 R2</p>
                           <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                        </div>
                     </div>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                           <p style="text-align: left;">upgrade to Windows Server 2012 R2</p>
                           <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                        </div>
                     </div>
                     <p>&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Windows</td>
               <td colspan="1" class="confluenceTd">Server 2012 R2</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus"><br></span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056898" rel="nofollow"><span class="x-hidden-focus">KB 4056898</span></a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056898" rel="nofollow">https://support.microsoft.com/en-us/help/4056898</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus"><br></span></p>
                  <div class="content-wrapper">
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056898" rel="nofollow"><span class="x-hidden-focus">KB 4056898</span></a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a><a class="external-link" href="https://support.microsoft.com/en-us/help/4056898" rel="nofollow"></a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056898" rel="nofollow">https://support.microsoft.com/en-us/help/4056898</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus"><br></span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056898" rel="nofollow"><span class="x-hidden-focus">KB 4056898</span></a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056898" rel="nofollow">https://support.microsoft.com/en-us/help/4056898</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Windows</td>
               <td colspan="1" class="confluenceTd">Server 2016</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus">&nbsp;</span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056890" rel="nofollow"><span class="x-hidden-focus">KB 4056890</span></a> installed</p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056890" rel="nofollow">https://support.microsoft.com/en-us/help/4056890</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056890" rel="nofollow"><span class="x-hidden-focus">KB 4056890</span></a> installed</p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056890" rel="nofollow">https://support.microsoft.com/en-us/help/4056890</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus">&nbsp;</span><span class="x-hidden-focus"><br></span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056890" rel="nofollow"><span class="x-hidden-focus">KB 4056890</span></a> installed</p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s" rel="nofollow">https://support.microsoft.com/en-us/help/4072698/windows-server-guidance-to-protect-against-the-speculative-execution-s</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://support.microsoft.com/en-us/help/4056890" rel="nofollow">https://support.microsoft.com/en-us/help/4056890</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">VMware</td>
               <td colspan="1" class="confluenceTd">vSphere 4.0/4.1/5.0/5.1</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></p>
                  </div>
               </td>
               <td colspan="1" style="text-align: left;" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                     <p><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-error conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT AVAILABLE</span></p>
                     <p style="text-align: left;">&nbsp;</p>
                     <p style="text-align: left;"><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">VMware</td>
               <td colspan="1" class="confluenceTd">vSphere 5.5</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></p>
                     <p><a class="external-link" href="http://kb.vmware.com/kb/2150876" rel="nofollow">http://kb.vmware.com/kb/2150876</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus"><br></span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></p>
                     <p style="text-align: left;"><a class="external-link" href="http://kb.vmware.com/kb/2150876" rel="nofollow">http://kb.vmware.com/kb/2150876</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span>
                     <p><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></p>
                     <p><a class="external-link" href="http://kb.vmware.com/kb/2150876" rel="nofollow">http://kb.vmware.com/kb/2150876</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">VMware</td>
               <td colspan="1" class="confluenceTd">vSphere 6.0/6.5</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus">&nbsp;</span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"> <a class="external-link" href="http://kb.vmware.com/kb/2151132" rel="nofollow">http://kb.vmware.com/kb/2151132</a></span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"> <a class="external-link" href="http://kb.vmware.com/kb/2151099" rel="nofollow">http://kb.vmware.com/kb/2151099</a><br></span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus">&nbsp;</span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"> <a class="external-link" href="http://kb.vmware.com/kb/2151132" rel="nofollow">http://kb.vmware.com/kb/2151132</a></span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"> <a class="external-link" href="http://kb.vmware.com/kb/2151099" rel="nofollow">http://kb.vmware.com/kb/2151099</a><br></span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus">&nbsp;</span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"><a class="external-link" href="https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html" rel="nofollow">https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html</a></span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"> <a class="external-link" href="http://kb.vmware.com/kb/2151132" rel="nofollow">http://kb.vmware.com/kb/2151132</a></span></p>
                     <p style="text-align: left;"><span class="x-hidden-focus"> <a class="external-link" href="http://kb.vmware.com/kb/2151099" rel="nofollow">http://kb.vmware.com/kb/2151099</a><br></span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td class="confluenceTd">Debian Wheezy</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5753" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5753</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5715" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5715</a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <div class="content-wrapper">
                              <div class="content-wrapper">
                                 <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                                 <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5754" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5754</a></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Debian Jessie</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5753" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5753</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5715" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5715</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5754" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5754</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Debian Stretch</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5753" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5753</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5715" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5715</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5754" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5754</a></p>
                     <div>
                        <p><span style="color: rgb(212,212,212);text-decoration: underline;"><a class="external-link" href="https://www.debian.org/doc/manuals/debian-faq/ch-uptodate.en.html" rel="nofollow">https://www.debian.org/doc/manuals/debian-faq/ch-uptodate.en.html</a></span></p>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Debian Buster</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5753" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5753</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5715" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5715</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                        <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5754" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5754</a></p>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Debian Sid</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5753" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5753</a>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5715" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5715</a>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                     <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span>
                     <p><a class="external-link" href="https://security-tracker.debian.org/tracker/CVE-2017-5754" rel="nofollow">https://security-tracker.debian.org/tracker/CVE-2017-5754</a></p>
                     <div>
                        <p><span style="color: rgb(212,212,212);text-decoration: underline;"><a class="external-link" href="https://www.debian.org/doc/manuals/debian-faq/ch-uptodate.en.html" rel="nofollow">https://www.debian.org/doc/manuals/debian-faq/ch-uptodate.en.html</a></span></p>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td class="confluenceTd"><span>Red Hat Enterprise Linux 7<br></span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519778" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=1519778</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519780" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=1519780</a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519781" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=1519781</a></p>
                     <p><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0007" rel="nofollow">RHSA-2018:0007</a></p>
                     <p><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0016" rel="nofollow">RHSA-2018:0016</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span><span>Red Hat Enterprise Linux 6<br></span></span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519778" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=1519778</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519780" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=1519780</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519781" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=1519781</a></p>
                     <p><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0008" rel="nofollow">RHSA-2018:0008</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span>Red Hat Enterprise Linux 5</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Red Hat Enterprise Linux OpenStack Platform 7.0 (Kilo) for RHEL 7</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span> Red Hat Enterprise Linux OpenStack Platform 6.0 (Juno) for RHEL 7</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span> Red Hat OpenStack Platform v 8/9/10/11/12</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://access.redhat.com/security/vulnerabilities/speculativeexecution" rel="nofollow">https://access.redhat.com/security/vulnerabilities/speculativeexecution</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td class="confluenceTd">CentOS 6</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><span style="color: rgb(0,0,0);"><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0008" rel="nofollow">https://access.redhat.com/errata/RHSA-2018:0008</a> </span></p>
                     <p><span style="color: rgb(0,0,0);"><br><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0013" rel="nofollow">https://access.redhat.com/errata/RHSA-2018:0013</a></span></p>
                     <p><span style="color: rgb(0,0,0);"><br><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0024" rel="nofollow">https://access.redhat.com/errata/RHSA-2018:0024</a></span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                        </div>
                        <div class="content-wrapper"><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0008" rel="nofollow">https://access.redhat.com/errata/RHSA-2018:0008</a></div>
                        <div class="content-wrapper"><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0008" rel="nofollow"> <br></a><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0013" rel="nofollow">https://access.redhat.com/errata/RHSA-2018:0013</a></div>
                        <div class="content-wrapper"><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0013" rel="nofollow"><br></a><a class="external-link" href="https://access.redhat.com/errata/RHSA-2018:0024" rel="nofollow">https://access.redhat.com/errata/RHSA-2018:0024</a></div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">CentOS 7</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span class="x-hidden-focus"> <br></span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://www.centos.org/forums/viewtopic.php?f=51&amp;t=65617" rel="nofollow">https://www.centos.org/forums/viewtopic.php?f=51&amp;t=65617</a></p>
                     <p style="text-align: left;"><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519778" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=151977</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                           <p><a class="external-link" href="https://www.centos.org/forums/viewtopic.php?f=51&amp;t=65617" rel="nofollow">https://www.centos.org/forums/viewtopic.php?f=51&amp;t=65617</a><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519778" rel="nofollow"></a></p>
                           <p><a class="external-link" href="https://bugzilla.redhat.com/show_bug.cgi?id=1519778" rel="nofollow">https://bugzilla.redhat.com/show_bug.cgi?id=1519778</a></p>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Fedora 26</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Fedora 27</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span>SUSE OpenStack Cloud 6</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5753/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5753/</a>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5715/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5715/</a>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5754/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5754/</a>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span> SUSE Linux Enterprise Server 11 SP3-LTSS</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5753/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5753/</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5715/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5715/</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5754/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5754/</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span> SUSE Linux Enterprise Server 11 SP4</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5753/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5753/</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=Sgz1BG6h3yE~" rel="nofollow">https://download.suse.com/Download?buildid=Sgz1BG6h3yE~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=8qOeEOkt8Vs~" rel="nofollow">https://download.suse.com/Download?buildid=8qOeEOkt8Vs~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=1x1ZNuXBr48~" rel="nofollow">https://download.suse.com/Download?buildid=1x1ZNuXBr48~</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5715/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5715/</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=Sgz1BG6h3yE~" rel="nofollow">https://download.suse.com/Download?buildid=Sgz1BG6h3yE~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=8qOeEOkt8Vs~" rel="nofollow">https://download.suse.com/Download?buildid=8qOeEOkt8Vs~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=1x1ZNuXBr48~" rel="nofollow">https://download.suse.com/Download?buildid=1x1ZNuXBr48~</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5754/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5754/</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=Sgz1BG6h3yE~" rel="nofollow">https://download.suse.com/Download?buildid=Sgz1BG6h3yE~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=8qOeEOkt8Vs~" rel="nofollow">https://download.suse.com/Download?buildid=8qOeEOkt8Vs~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=1x1ZNuXBr48~" rel="nofollow">https://download.suse.com/Download?buildid=1x1ZNuXBr48~</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span> SUSE Container as a Service Platform ALL</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5715/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5753/</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=GlSdn9vmvx8~" rel="nofollow">https://download.suse.com/Download?buildid=GlSdn9vmvx8~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=Bd4ejFnSPQA~" rel="nofollow">https://download.suse.com/Download?buildid=Bd4ejFnSPQA~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=7iQ4Q7STjhA~" rel="nofollow">https://download.suse.com/Download?buildid=7iQ4Q7STjhA~</a></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5753/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5753/</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5715/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5715/</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=GlSdn9vmvx8~" rel="nofollow">https://download.suse.com/Download?buildid=GlSdn9vmvx8~</a><a class="external-link" href="https://download.suse.com/Download?buildid=Bd4ejFnSPQA~" rel="nofollow"></a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=Bd4ejFnSPQA~" rel="nofollow">https://download.suse.com/Download?buildid=Bd4ejFnSPQA~</a></p>
                     <div class="content-wrapper"><a class="external-link" href="https://download.suse.com/Download?buildid=7iQ4Q7STjhA~" rel="nofollow">https://download.suse.com/Download?buildid=7iQ4Q7STjhA~</a></div>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5715/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5754/</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=GlSdn9vmvx8~" rel="nofollow">https://download.suse.com/Download?buildid=GlSdn9vmvx8~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=Bd4ejFnSPQA~" rel="nofollow">https://download.suse.com/Download?buildid=Bd4ejFnSPQA~</a></p>
                     <p><a class="external-link" href="https://download.suse.com/Download?buildid=7iQ4Q7STjhA~" rel="nofollow">https://download.suse.com/Download?buildid=7iQ4Q7STjhA~</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td class="confluenceTd">Gentoo</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://bugs.gentoo.org/643352" rel="nofollow">https://bugs.gentoo.org/643352</a></p>
                     <p><a class="external-link" href="https://wiki.gentoo.org/wiki/Project:Security/Vulnerabilities/Meltdown_and_Spectre" rel="nofollow">https://wiki.gentoo.org/wiki/Project:Security/Vulnerabilities/Meltdown_and_Spectre</a></p>
                     <p><a class="external-link" href="https://bugs.gentoo.org/643340" rel="nofollow">https://bugs.gentoo.org/643340</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://bugs.gentoo.org/643352" rel="nofollow">https://bugs.gentoo.org/643352</a></p>
                     <p><a class="external-link" href="https://wiki.gentoo.org/wiki/Project:Security/Vulnerabilities/Meltdown_and_Spectre" rel="nofollow">https://wiki.gentoo.org/wiki/Project:Security/Vulnerabilities/Meltdown_and_Spectre</a></p>
                     <p><a class="external-link" href="https://bugs.gentoo.org/643342" rel="nofollow">https://bugs.gentoo.org/643342</a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <div class="content-wrapper">
                              <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                           </div>
                        </div>
                     </div>
                     <p><a class="external-link" href="https://bugs.gentoo.org/643352" rel="nofollow">https://bugs.gentoo.org/643352</a></p>
                     <p><a class="external-link" href="https://wiki.gentoo.org/wiki/Project:Security/Vulnerabilities/Meltdown_and_Spectre" rel="nofollow">https://wiki.gentoo.org/wiki/Project:Security/Vulnerabilities/Meltdown_and_Spectre</a></p>
                     <p><a class="external-link" href="https://bugs.gentoo.org/643344" rel="nofollow">https://bugs.gentoo.org/643344</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Slackware 14</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                        </div>
                     </div>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                        </div>
                     </div>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="http://www.slackware.com/changelog/stable.php?cpu=x86_64" rel="nofollow">http://www.slackware.com/changelog/stable.php?cpu=x86_64</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Solaris</td>
               <td colspan="1" class="confluenceTd">SmartOS</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                           <p><a class="external-link" href="https://help.joyent.com/hc/en-us/articles/115015938847-Security-Advisory-Intel-Security-Findings" rel="nofollow">https://help.joyent.com/hc/en-us/articles/115015938847-Security-Advisory-Intel-Security-Findings</a></p>
                        </div>
                     </div>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                           <p><a class="external-link" href="https://help.joyent.com/hc/en-us/articles/115015938847-Security-Advisory-Intel-Security-Findings" rel="nofollow">https://help.joyent.com/hc/en-us/articles/115015938847-Security-Advisory-Intel-Security-Findings</a></p>
                        </div>
                     </div>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                           <p><a class="external-link" href="https://help.joyent.com/hc/en-us/articles/115015938847-Security-Advisory-Intel-Security-Findings" rel="nofollow">https://help.joyent.com/hc/en-us/articles/115015938847-Security-Advisory-Intel-Security-Findings</a></p>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">CloudLinux 6</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.cloudlinux.com/cloudlinux-os-blog/entry/cloudlinux-6-kernel-updated-1-5" rel="nofollow">https://www.cloudlinux.com/cloudlinux-os-blog/entry/cloudlinux-6-kernel-updated-1-5</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.cloudlinux.com/cloudlinux-os-blog/entry/cloudlinux-6-kernel-updated-1-5" rel="nofollow">https://www.cloudlinux.com/cloudlinux-os-blog/entry/cloudlinux-6-kernel-updated-1-5</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.cloudlinux.com/cloudlinux-os-blog/entry/cloudlinux-6-kernel-updated-1-5" rel="nofollow">https://www.cloudlinux.com/cloudlinux-os-blog/entry/cloudlinux-6-kernel-updated-1-5</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">CloudLinux 7</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.cloudlinux.com/cloudlinux-os-blog/entry/beta-cloudlinux-7-and-cloudlinux-6-hybrid-kernel-updated" rel="nofollow">https://www.cloudlinux.com/cloudlinux-os-blog/entry/beta-cloudlinux-7-and-cloudlinux-6-hybrid-kernel-updated</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://www.cloudlinux.com/cloudlinux-os-blog/entry/beta-cloudlinux-7-and-cloudlinux-6-hybrid-kernel-updated" rel="nofollow">https://www.cloudlinux.com/cloudlinux-os-blog/entry/beta-cloudlinux-7-and-cloudlinux-6-hybrid-kernel-updated</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><a class="external-link" href="https://www.cloudlinux.com/cloudlinux-os-blog/entry/beta-cloudlinux-7-and-cloudlinux-6-hybrid-kernel-updated" rel="nofollow"></a></p>
                     <p><a class="external-link" href="https://www.cloudlinux.com/cloudlinux-os-blog/entry/beta-cloudlinux-7-and-cloudlinux-6-hybrid-kernel-updated" rel="nofollow">https://www.cloudlinux.com/cloudlinux-os-blog/entry/beta-cloudlinux-7-and-cloudlinux-6-hybrid-kernel-updated</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">
                  <p>Ubuntu</p>
                  <p>&nbsp;</p>
                  <div><em>Ubuntu kernel updates addressing all three vulnerabilities (CVE-2017-5715, CVE-2017-5753, CVE-2017-5754) across amd64, ppc64el and s390x are released in USN-3541-1 (Ubuntu 17.10), USN-3540-1 (Ubuntu 16.04 LTS), USN-3541-2 (Ubuntu 16.04 LTS (HWE)), USN-3542-1 (Ubuntu 14.04 LTS) and USN-3540-2 (Ubuntu 14.04 LTS (HWE)).</em></div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                        </div>
                     </div>
                  </div>
                  <p><a class="external-link" href="https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown" rel="nofollow">https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown</a></p>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><a class="external-link" href="https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown" rel="nofollow">https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown</a></p>
                        </div>
                     </div>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                           <p><a class="external-link" href="https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown" rel="nofollow">https://wiki.ubuntu.com/SecurityTeam/KnowledgeBase/SpectreAndMeltdown</a></p>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd"><span> OpenSuse Linux based upon SUSE 12/11</span></td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                           <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5753/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5753/</a></p>
                        </div>
                     </div>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                           <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5715/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5715/</a></p>
                        </div>
                     </div>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <div class="content-wrapper">
                           <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                           <p><a class="external-link" href="https://www.suse.com/security/cve/CVE-2017-5754/" rel="nofollow">https://www.suse.com/security/cve/CVE-2017-5754/</a></p>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Archlinux</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://security.archlinux.org/CVE-2017-5754" rel="nofollow">https://security.archlinux.org/CVE-2017-5753</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://security.archlinux.org/CVE-2017-5754" rel="nofollow">https://security.archlinux.org/CVE-2017-5715</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://security.archlinux.org/CVE-2017-5754" rel="nofollow">https://security.archlinux.org/CVE-2017-5754</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" style="text-align: center;" class="confluenceTd">Linux</td>
               <td colspan="1" style="text-align: left;" class="confluenceTd">OpenVZ</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://openvz.org/Download/kernel/rhel6/042stab127.2" rel="nofollow">https://openvz.org/Download/kernel/rhel6/042stab127.2</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p style="text-align: left;"><a class="external-link" href="https://openvz.org/Download/kernel/rhel6/042stab127.2" rel="nofollow">https://openvz.org/Download/kernel/rhel6/042stab127.2</a></p>
                  </div>
               </td>
               <td colspan="1" style="text-align: left;" class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                        <p><a class="external-link" href="https://openvz.org/Download/kernel/rhel6/042stab127.2" rel="nofollow">https://openvz.org/Download/kernel/rhel6/042stab127.2</a></p>
                     </div>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Proxmox 3.x</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Proxmox 4.X</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/" rel="nofollow">https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p>(/!\ partial /!\)</p>
                     <p><a class="external-link" href="https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/" rel="nofollow">https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p>(/!\ partial /!\)</p>
                     <p><a class="external-link" href="https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/" rel="nofollow">https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">Proxmox 5.X</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/" rel="nofollow">https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p>(/!\ partial /!\)</p>
                     <p><a class="external-link" href="https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/" rel="nofollow">https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p>(/!\ partial /!\)</p>
                     <p><a class="external-link" href="https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/" rel="nofollow">https://forum.proxmox.com/threads/meltdown-and-spectre-linux-kernel-fixes.39110/</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Linux</td>
               <td colspan="1" class="confluenceTd">CoreOS Container Linux (channels Stable/Beta/Alpha)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://coreos.com/releases" rel="nofollow">https://coreos.com/releases</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: left;"><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://coreos.com/releases" rel="nofollow">https://coreos.com/releases</a></p>
                  </div>
               </td>
               <td colspan="1" style="text-align: left;" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="https://coreos.com/releases" rel="nofollow">https://coreos.com/releases</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">BSD</td>
               <td colspan="1" class="confluenceTd">
                  <p>DragonFlyBSD</p>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" style="text-align: left;" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p><a class="external-link" href="http://lists.dragonflybsd.org/pipermail/users/2018-January/313758.html" rel="nofollow">http://lists.dragonflybsd.org/pipermail/users/2018-January/313758.html</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">BSD</td>
               <td colspan="1" class="confluenceTd">
                  <p>&nbsp;FreeBSD</p>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://www.freebsd.org/fr/news/newsflash.html" rel="nofollow">https://www.freebsd.org/fr/news/newsflash.html</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                     <p><a class="external-link" href="https://www.freebsd.org/fr/news/newsflash.html" rel="nofollow">https://www.freebsd.org/fr/news/newsflash.html</a></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span>&nbsp;</p>
                     <p><a class="external-link" href="https://www.freebsd.org/fr/news/newsflash.html" rel="nofollow">https://www.freebsd.org/fr/news/newsflash.html</a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">BSD</td>
               <td colspan="1" class="confluenceTd">&nbsp;OpenBSD</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">BSD</td>
               <td colspan="1" class="confluenceTd">&nbsp;NetBSD</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span></p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <div id="floating-scrollbar" style="position: fixed; bottom: 0px; height: 30px; overflow-x: auto; overflow-y: hidden; display: none; left: 325px; width: 858px;">
      <div style="border: 1px solid rgb(255, 255, 255); opacity: 0.01; width: 940px;"></div>
   </div>
   <p>&nbsp;</p>
   <h2 id="ExternalDocumentation/Proceduresforcustomers-IntelaffectedCPUlist">Intel affected CPU list</h2>
   <p>Here is a&nbsp;non-exhaustive list of Intel processors affected by Meltdown and Spectre vulnerabilities :</p>
   <ul>
      <li>Intel Core™ i3 processor (45nm and 32nm)</li>
      <li>Intel Core™ i5 processor (45nm and 32nm)</li>
      <li>Intel Core™ i7 processor (45nm and 32nm)</li>
      <li>Intel Core™ M processor family (45nm and 32nm)</li>
      <li>2nd generation Intel Core processors</li>
      <li>3rd generation Intel Core processors</li>
      <li>4th generation Intel Core processors</li>
      <li>5th generation Intel Core processors</li>
      <li>6th generation Intel Core processors</li>
      <li>7th generation Intel Core processors</li>
      <li>8th generation Intel Core processors</li>
      <li>Intel Core X-series Processor Family for Intel X99 platforms</li>
      <li>Intel Core X-series Processor Family for Intel X299 platforms</li>
      <li>Intel Xeon processor 3400 series</li>
      <li>Intel Xeon processor 3600 series</li>
      <li>Intel Xeon processor 5500 series</li>
      <li>Intel Xeon processor 5600 series</li>
      <li>Intel Xeon processor 6500 series</li>
      <li>Intel Xeon processor 7500 series</li>
      <li>Intel Xeon Processor E3 Family</li>
      <li>Intel Xeon Processor E3 v2 Family</li>
      <li>Intel Xeon Processor E3 v3 Family</li>
      <li>Intel Xeon Processor E3 v4 Family</li>
      <li>Intel Xeon Processor E3 v5 Family</li>
      <li>Intel Xeon Processor E3 v6 Family</li>
      <li>Intel Xeon Processor E5 Family</li>
      <li>Intel Xeon Processor E5 v2 Family</li>
      <li>Intel Xeon Processor E5 v3 Family</li>
      <li>Intel Xeon Processor E5 v4 Family</li>
      <li>Intel Xeon Processor E7 Family</li>
      <li>Intel Xeon Processor E7 v2 Family</li>
      <li>Intel Xeon Processor E7 v3 Family</li>
      <li>Intel Xeon Processor E7 v4 Family</li>
      <li>Intel Xeon Processor Scalable Family</li>
      <li>Intel Xeon Phi Processor 3200, 5200, 7200 Series</li>
      <li>Intel Atom Processor C Series</li>
      <li>Intel Atom Processor E Series</li>
      <li>Intel Atom Processor A Series</li>
      <li>Intel Atom Processor x3 Series</li>
      <li>Intel Atom Processor Z Series</li>
      <li>Intel Celeron Processor J Series</li>
      <li>Intel Celeron Processor N Series</li>
      <li>Intel Pentium Processor J Series</li>
      <li>Intel Pentium Processor N Series<br><br></li>
   </ul>
   <p>All of them are affected. If you're using one of them,&nbsp;we strongly recommend you to update your system with the latest available patches.</p>
</div>

