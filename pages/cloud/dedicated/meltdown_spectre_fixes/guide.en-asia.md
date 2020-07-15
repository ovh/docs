---
title: Information about Meltdown and Spectre vulnerability fixes
slug: information-about-meltdown-spectre-vulnerability-fixes
section: Meltdown and Spectre informations
fullwidth: true
---

<div id="main-content" class="wiki-content table-meltown-spectre">
   <p><strong>Last update 26. June.&nbsp; at<span class="widont">&nbsp;3:00pm CET<br></span></strong></p>
   <p><strong>(this table reflects the situation at a given moment and is constantly evolving.)<br></strong></p>
   <p><strong><br></strong></p>
   <h2 id="SummaryOles-Introduction">Introduction<span style="color: rgb(0,0,0);"> <br></span></h2>
   <p>As we communicated, OVH has been informed of the Spectre (CVE-2017-5753 and CVE-2017-5715) and Meltdown (CVE-2017-5754) security vulnerabilities, making a large part of computer equipment in operation vulnerable to potential attacks, particularly those equipped with Intel CPUs.</p>
   <p><span style="color: rgb(0,0,0);">&nbsp;</span>Our technical teams are currently continuing to work on securing OVH infrastructures in order to minimize the exposure of your services to these vulnerabilities.<span style="color: rgb(0,0,0);">&nbsp;</span></p>
   <p><span style="color: rgb(0,0,0);">&nbsp;</span>Restarting of some services has already begun, so that we can apply the first tested and approved stability patches to our systems, both in the operating systems of the machines and their kernel as well as in the microcode.</p>
   <p><span style="color: rgb(0,0,0);">&nbsp;</span></p>
   <h3 id="SummaryOles-Whatshouldyoudo?"><span style="color: rgb(0,0,0);">&nbsp;</span>What should you do?</h3>
   <p><span style="color: rgb(0,0,0);">&nbsp;</span>Some services, which are entirely managed by OVH, <u>will not require any manipulation on your part</u>: <em>Domains, Metrics and Logs Data Platform, xDSL, VoIP, DBaaS, OVH Load Balancer, vRack, Exchange, MX Plan, Web Hosting, Cloud Desktop, VDI, CDN, Swift, CEPH, NAS-HA, Public Cloud Storage and Public Cloud Archive</em>.</p>
   <p><span style="color: rgb(0,0,0);">&nbsp;</span>OVH is working to secure the infrastructures concerned, applying the patches provided by the operating system and motherboard vendors as they become available. Some operations require a reboot of the machine, which could cause an interruption of service for a short time.</p>
   <p><span style="color: rgb(0,0,0);">&nbsp;</span>Securing certain other services such as dedicated servers, Public Cloud instances, VPS or Private Cloud <strong><u>will require additional action on your part</u></strong>, consisting of applying the recommended update of the operating system vendor of your servers.</p>
   <p>Here is :</p>
   <ol>
      <li>General information about these vulnerabilities ;</li>
      <li>A detailled list of all OVH products and all actions in progress and/or actions you need to do (<u><strong><span style="color: rgb(255,0,0);">please read carefully this section</span></strong></u>)<br><br></li>
   </ol>
   <p><span style="color: rgb(0,0,0);">&nbsp;</span><span style="color: rgb(0,0,0);">&nbsp;</span>To help you, we also offer you <a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow">a non-exhaustive table</a> listing the updates available for the main versions of the operating systems.&nbsp;</p>
   <p>&nbsp;</p>
   <h2 id="SummaryOles-Generalinformartion">General informartion</h2>
   <p>&nbsp;</p>
   <div class="table-wrap">
      <table class="wrapped relative-table confluenceTable tablesorter tablesorter-default stickyTableHeaders" style="width: 100%; padding: 0px;" role="grid">
         <thead class="tableFloatingHeaderOriginal" style="position: static; margin-top: 0px; left: 325px; z-index: 3; width: 1497px; top: 41px;">
            <tr role="row" class="tablesorter-headerRow">
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="&nbsp;: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">&nbsp;</div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Spectre - Variant 1***Bounds Check Bypass(CVE-2017-5753): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 1</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em>Bounds Check Bypass</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5753)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Spectre - Variant 2***Branch Target Injection(CVE-2017-5715): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 2</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Branch Target Injection</span></em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5715)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Meltdown***Rogue Data Cache LoadMeltdown(CVE-2017-5754): No sort applied, activate to apply an ascending sort">
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
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="&nbsp;: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">&nbsp;</div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Spectre - Variant 1***Bounds Check Bypass(CVE-2017-5753): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 1</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em>Bounds Check Bypass</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5753)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Spectre - Variant 2***Branch Target Injection(CVE-2017-5715): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 2</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Branch Target Injection</span></em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5715)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Meltdown***Rogue Data Cache LoadMeltdown(CVE-2017-5754): No sort applied, activate to apply an ascending sort">
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
               <td class="confluenceTd">Linux</td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span>Status : <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><br></span></p>
                     <p><span><br></span></p>
                     <p><span>Most distributions have recompiled their Kernel using LFENCE instruction.</span></p>
                     <p><span><br></span></p>
                     <p><span>Softwares need to be recompiled with a patched compiler using LFENCE instruction to stop speculation.</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><u><span style="color: rgb(0,51,102);"><strong>Mitigation 1: <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></strong></span></u></p>
                     <p><span><br></span></p>
                     <p>Two conditions to be protected, A <strong>and</strong> B:</p>
                     <p><span>A) boot the OS with the new microcodes to activate new flags in CPU (the SPEC_CTRL and PRED_CMD MSRs). Two ways to do this:<br></span></p>
                     <p style="margin-left: 30.0px;"><span>Option.1) charge microcode after BIOS and at the very beginning of kernel boot. The new microcode has to be loaded to the CPU each time the OS starts. </span></p>
                     <p style="margin-left: 30.0px;"><span>&nbsp;</span>Option.2) upgrade BIOS, so BIOS will load new microcode in CPU, before the OS boot phase. Once the BIOS is upgraded, the system will load with new microcode automatically.</p>
                     <p style="margin-left: 30.0px;"><span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span><span> OVH already released any microcode and BIOS that vendors provided.</span></p>
                     <p>B) Install a kernel that is integrating the new IBRS and IBPB patches that are using the new CPU MSR, made available by the microcode update in A) to successfully mitigate the vulnerability.</p>
                     <p><span><br></span></p>
                     <p><span><br></span></p>
                     <p>On Linux, those patches have been integrated in latest kernels (4.14.14 as well as 4.9.77), and they have been compiled with a GCC with retpoline support. <span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></p>
                     <p>&nbsp;</p>
                     <p><span><span>Openstack KVM/Qemu: <br><a class="external-link" href="https://lists.gnu.org/archive/html/qemu-devel/2018-01/msg00692.html" rel="nofollow">https://lists.gnu.org/archive/html/qemu-devel/2018-01/msg00692.html</a><br>KVM patches</span></span> show to guests the new capabilities of the host CPU from the new microcode. Then, with a patched guest kernel (same as point B) above), the guest will be able to protect himself.</p>
                     <p>&nbsp;</p>
                     <p><span><br></span></p>
                     <p><u><strong>Mitigation 2: <span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></strong></u></p>
                     <p><span>Patch compilers to avoid any indirect jump and use a static trampoline (aka retpoline) gcc have a pending patch to introduce this feature. <span>But if you recompile the kernel with this, it'll fix only the kernel itself. If the kernel is fixed, you'll not be able to read kernel memory, but you'll still be able to read other process memory. All software have to be recompiled with mitigation to be secured.</span></span></p>
                     <p><span><a class="external-link" href="https://lkml.org/lkml/2018/1/3/780" rel="nofollow">https://lkml.org/lkml/2018/1/3/780</a></span></p>
                     <p><span><span><a class="external-link" href="https://googleprojectzero.blogspot.fr/2018/01/reading-privileged-memory-with-side.html" rel="nofollow">https://googleprojectzero.blogspot.fr/2018/01/reading-privileged-memory-with-side.html</a></span></span></p>
                     <p><span><span>GCC patches for retpoline: <a class="external-link" href="http://git.infradead.org/users/dwmw2/gcc-retpoline.git/shortlog/refs/heads/gcc-7_2_0-retpoline-20171219" rel="nofollow"> http://git.infradead.org/users/dwmw2/gcc-retpoline.git/shortlog/refs/heads/gcc-7_2_0-retpoline-20171219</a></span></span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span>Status:<span>&nbsp;</span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></span></p>
                     <p><span><br></span></p>
                     <p><span>Kernel patch to isolate kernel space and user space (aka KPTI).</span></p>
                     <p><span><br></span></p>
                     <p><span>It is available in kernel vanilla 4.14.11+, 4.9.75+, 4.4.110+</span></p>
                     <p><span><br></span></p>
                     <p>Linux distributions are backporting the patches themselves in their own kernel versions, refer to <a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow">our list of patches available per distribution </a>for more information.</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td class="confluenceTd">Windows</td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></span></p>
                     <p><span><span><br></span></span></p>
                     <p><span><span><span>Softwares need to be recompiled with a patched compiler using</span><span> LFENCE instruction to stop speculation.</span><br></span></span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Two conditions to be protected, A <strong>and</strong> B:</p>
                     <p>&nbsp;</p>
                     <div>
                        A) boot the OS with the new microcodes to activate new flags in CPU (the SPEC_CTRL and PRED_CMD MSRs), there are 2 ways to do this:
                        <p style="margin-left: 30.0px;">A.Option.1) charge microcode after BIOS and at the very beginning of kernel boot. In progress with Windows.</p>
                        <p style="margin-left: 30.0px;">A.Option.2) upgrade BIOS, so BIOS will load new microcode in CPU, before the OS boot phase. Once the BIOS is upgraded, the system will load with new microcode automatically. Works with all OS.</p>
                        <p style="margin-left: 30.0px;"><span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span><span> OVH already released any microcode and BIOS that vendors provided.</span></p>
                        <p>&nbsp;</p>
                        <div>B) Install the latest Windows security updates that integrates the patches that are using the new CPU MSR, made available by the microcode update in A) to successfully mitigate the vulnerability. Note that you must also have a compatible Antivirus for this security install to be available, refer to the OS matrix for details.</div>
                     </div>
                     <p>Status:&nbsp;<span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span> <span>refer to the </span><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow">OS matrix </a><span>for details</span></span></span></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span>&nbsp;</span>Status:&nbsp;<span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td class="confluenceTd">BSD</td>
               <td style="text-align: center;" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span> <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></span></p>
                     <p><span><a class="external-link" href="https://wiki.freebsd.org/SpeculativeExecutionVulnerabilities" rel="nofollow">https://wiki.freebsd.org/SpeculativeExecutionVulnerabilities</a><br></span></p>
                  </div>
               </td>
               <td style="text-align: center;" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span> <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></span></p>
                     <p><span><a class="external-link" href="https://wiki.freebsd.org/SpeculativeExecutionVulnerabilities" rel="nofollow" style="text-decoration: underline;text-align: center;">https://wiki.freebsd.org/SpeculativeExecutionVulnerabilities</a><br></span></p>
                  </div>
               </td>
               <td style="text-align: center;" class="confluenceTd">
                  <div class="content-wrapper">
                     <p style="text-align: center;"><span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p style="text-align: center;"><a class="external-link" href="https://wiki.freebsd.org/SpeculativeExecutionVulnerabilities" rel="nofollow" style="text-decoration: underline;">https://wiki.freebsd.org/SpeculativeExecutionVulnerabilities</a></p>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <p>&nbsp;</p>
   <p>&nbsp;</p>
   <p>&nbsp;</p>
   <h2 id="SummaryOles-StatusperOVHservicesandproducts">Status per OVH services and products</h2>
   <p>&nbsp;</p>
   <div class="table-wrap">
      <table class="wrapped relative-table confluenceTable tablesorter tablesorter-default stickyTableHeaders" style="width: 99.9576%; padding: 0px;" role="grid">
          <thead class="tableFloatingHeaderOriginal" style="position: static; margin-top: 0px; left: 325px; z-index: 3; width: 1496px; top: 92px;">
            <tr role="row" class="tablesorter-headerRow">
               <th colspan="1" style="text-align: center; -moz-user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="SERVICE: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">SERVICE</div>
               </th>
               <th colspan="1" style="text-align: center; -moz-user-select: none; min-width: 8px; max-width: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="PRODUCT: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">PRODUCT</div>
               </th>
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="&nbsp;: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">&nbsp;</div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="WHAT HAS TO BE DONE By Who ?: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">WHAT HAS TO BE DONE By Who ?</p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Spectre - Variant 1***Bounds Check Bypass(CVE-2017-5753): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 1</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em>Bounds Check Bypass</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5753)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Spectre - Variant 2***Branch Target Injection(CVE-2017-5715): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 2</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Branch Target Injection</span></em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5715)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="6" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none; min-width: 8px; max-width: none;" aria-sort="none" aria-label="Meltdown***Rogue Data Cache LoadMeltdown(CVE-2017-5754): No sort applied, activate to apply an ascending sort">
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
               <th colspan="1" style="text-align: center; -moz-user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="SERVICE: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">SERVICE</div>
               </th>
               <th colspan="1" style="text-align: center; -moz-user-select: none;" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="PRODUCT: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">PRODUCT</div>
               </th>
               <th colspan="1" class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="2" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="&nbsp;: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">&nbsp;</div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="3" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="WHAT HAS TO BE DONE By Who ?: No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">WHAT HAS TO BE DONE By Who ?</p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="4" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Spectre - Variant 1***Bounds Check Bypass(CVE-2017-5753): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 1</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em>Bounds Check Bypass</em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5753)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="5" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Spectre - Variant 2***Branch Target Injection(CVE-2017-5715): No sort applied, activate to apply an ascending sort">
                  <div class="tablesorter-header-inner">
                     <p style="text-align: center;">Spectre - Variant 2</p>
                     <p style="text-align: center;">***</p>
                     <p style="text-align: center;"><em><span style="color: rgb(0,0,0);text-decoration: none;">Branch Target Injection</span></em></p>
                     <p style="text-align: center;"><em>(CVE-2017-5715)</em></p>
                  </div>
               </th>
               <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="6" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" style="-moz-user-select: none;" aria-sort="none" aria-label="Meltdown***Rogue Data Cache LoadMeltdown(CVE-2017-5754): No sort applied, activate to apply an ascending sort">
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
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Dedicated Server</p>
                  <p><em>(aka Baremetal)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">KS, SYS, SP, MG, EG, HG, FS, GAME</td>
               <td class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span><span>&nbsp;</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>Linux:</p>
                     <ul style="list-style-type: square;">
                        <li>deploying intel microcode in netboot and disk boot via initramfs/<span>OVH Kernel</span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></li>
                        <li>deploying intel microcode in via UEFI<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span><span><br></span></li>
                        <li><span>deploying microcode on disk boot&nbsp; <span>(3rd-party Kernels and distributor-supplied microcodes)</span> <span><span><span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></span></span></span></span></li>
                        <li><span>waiting for updated AMD microcodes <span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span><br></span></li>
                        <li>waiting for Kernel + GCC with the patch to use the new flags in CPU <span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></li>
                     </ul>
                     <p>Windows:</p>
                     <ul style="list-style-type: square;">
                        <li>testing UEFI+microcode+windows <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></li>
                        <li>deploying received BIOS per MB <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span><br><br></li>
                     </ul>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span><span>&nbsp;</span></p>
                     <p>&nbsp;</p>
                     <p>Linux : 4.14.14 and 4.9.77 are available via Netboot</p>
                     <p>Windows: Microsoft proposes the patch.</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Dedicated Server</p>
                  <em>(aka Baremetal)</em>
               </td>
               <td colspan="1" class="confluenceTd">KS, SYS, SP, MG, EG, HG, FS, GAME</td>
               <td class="confluenceTd">
                  <p>OS Update (<em><span style="color: rgb(255,153,0);">Customer action needed</span></em>)</p>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span><span>&nbsp;</span></p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp; <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>&nbsp;</p>
                     <p>Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>Linux : 4.14.14 and 4.9.77 are available via Netboot : <strong>please update your kenel or use Netboot</strong>.&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>Windows:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Public Cloud</p>
                  <p><em>(aka PCI)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">OpenStack KVM</td>
               <td class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to KVM: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span> (variant 1 doesn't cross VM boundaries)</span></p>
                     <p><span><br></span></p>
                     <p>VM to VM: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span> (variant 1 doesn't cross VM boundaries)</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Microcode:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>OS:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p>VM to KVM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to VM: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>MSR exposed to VM:&nbsp;<span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span> update from KVM</p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span> KVM is not impacted.&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Public Cloud</p>
                  <em>(aka PCI)</em>
               </td>
               <td colspan="1" class="confluenceTd">OpenStack&nbsp;KVM</td>
               <td class="confluenceTd">
                  <p>VM's OS update</p>
                  <p>(<em><span style="color: rgb(255,153,0);">Customer action needed</span></em>)</p>
                  <p>&nbsp;</p>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span> KVM is not impacted.</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">VPS</td>
               <td colspan="1" class="confluenceTd">2014 powered by pCC</td>
               <td class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>&nbsp;</p>
                     <p>VM to ESXi:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span> (variant 1 doesn't cross VM boundaries)</span></p>
                     <p><span><br></span></p>
                     <p>VM to VM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span> (variant 1 doesn't cross VM boundaries)</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to ESXi:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to VM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></div>
                     <p>&nbsp;</p>
                     <p>VM to ESXi:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to VM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">VPS</td>
               <td colspan="1" class="confluenceTd">2014 powered by pCC</td>
               <td class="confluenceTd">CUSTOMER</td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Managed by OVH (line above)</p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span>Managed by OVH (line above)</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  Managed by OVH (line above)
                  <div class="content-wrapper">
                     <p>&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">VPS</td>
               <td colspan="1" class="confluenceTd">2016 powered by pCI</td>
               <td class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <div class="content-wrapper">
                        <p>OS:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                        <p>&nbsp;</p>
                        <p>VM to KVM:&nbsp;<span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span> (variant 1 doesn't cross VM boundaries)</span></span></p>
                        <p><span><span><br></span></span></p>
                        <p>VM to VM: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span> (variant 1 doesn't cross VM boundaries)</span></p>
                     </div>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Microcode:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>OS:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                     <p>VM to KVM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span> Cloud-IaaS/Baremetal</p>
                     <p>VM to VM: <span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span> Cloud-IaaS/Baremetal</p>
                     <p>&nbsp;</p>
                     <p>MSR exposed to VM:&nbsp;<span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span> update from KVM</p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span> KVM is not impacted.&nbsp;<span>&nbsp;</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">VPS</td>
               <td colspan="1" class="confluenceTd">2016 powered by pCI</td>
               <td class="confluenceTd">
                  <p>VM's OS update</p>
                  (<em><span style="color: rgb(255,153,0);">Customer action needed</span></em>)
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>&nbsp;</p>
                     Windows:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Private Cloud</p>
                  <p><em>(aka PCC)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">vSphere 4.1/5.0/5.1/5.5</td>
               <td colspan="1" class="confluenceTd">Service (OVH/CUSTOMER)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>There is no patch to protect vSphere 4.1/5.0/5.1, OVH advices the customer to upgrade pCC to vSphere 6.0/6.5. It's free.</p>
                     <p>vSphere 5.5 is vulnerable, waiting for VMware to patch. No ETA.</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>There is no patch to protect vSphere 4.1/5.0/5.1, Ovh advices the customer to upgrade pCC to vSphere 6.0/6.5. It's free.</p>
                     <p>vSphere 5.5 : <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <p>There is no patch to protect vSphere 4.0/4.1/5.0/5.1/5.5, Ovh advices the customer to upgrade pCC to vSphere 6.0/6.5. It's free.</p>
                  <p>VMware can propose the patch for vSphere 5.5. No ETA.</p>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Private Cloud based on AMD hosts</p>
                  <p><em>(aka PCC)</em></p>
                  <p>&nbsp;</p>
               </td>
               <td colspan="1" class="confluenceTd">vSphere 6.0/6.5</td>
               <td colspan="1" class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
                  <p>All host : 100% patched</p>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to KVM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span>&nbsp;</span></p>
                     <p><span>VM to VM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></span><span>&nbsp;</span></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to ESXi: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>VM to VM: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span> AMD is not vulnerable (AMD statement URL)</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Private Cloud based on AMD hosts</p>
                  <em>(aka PCC)</em>
               </td>
               <td colspan="1" class="confluenceTd">vSphere 6.0/6.5</td>
               <td class="confluenceTd">
                  <p>VM's OS update</p>
                  (<em><span style="color: rgb(255,153,0);">Customer action needed</span></em>)
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span> Cloud-IaaS/Baremetal</p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span> Cloud-IaaS/Baremetal</p>
                     <p>&nbsp;</p>
                     <p><span>Windows: </span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span><span>&nbsp;</span></p>
                     <p><span><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a><br></span></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span><span>&nbsp;</span><span>AMD is not vulnerable (AMD statement URL)</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Private Cloud based on Intel hosts</p>
                  <em>(aka PCC)</em>
               </td>
               <td colspan="1" class="confluenceTd">vSphere 6.0/6.5</td>
               <td class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
                  <p><a class="external-link" href="http://travaux.ovh.net/?do=details&amp;id=29250" rel="nofollow">http://travaux.ovh.net/?do=details&amp;id=29250</a></p>
                  <p>All host : 100% patched</p>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to ESXi:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>VM to VM:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to ESXi: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>VM to VM: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>MSR exposed to VM: <span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span> update from VMware</p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to ESXi: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VM to VM: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Private Cloud based on Intel hosts</p>
                  <em>(aka PCC)</em>
               </td>
               <td colspan="1" class="confluenceTd">vSphere 6.0/6.5</td>
               <td class="confluenceTd">
                  <p>VM's OS update</p>
                  (<em><span style="color: rgb(255,153,0);">Customer action needed</span></em>)
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span> Cloud-IaaS/Baremetal</p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span> Cloud-IaaS/Baremetal</p>
                     <p>&nbsp;</p>
                     Windows: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
               <td class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span></p>
                     <p>&nbsp;</p>
                     Windows:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTABLE</span>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Cloud Desktop aaS</p>
                  <p><em>(aka VDI)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">Horizon 7 aaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
                  <p><a class="external-link" href="http://travaux.ovh.net/?do=details&amp;id=29251" rel="nofollow">http://travaux.ovh.net/?do=details&amp;id=29251</a></p>
                  <p>&nbsp;</p>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to ESXi:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to VDI:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to ESXi: <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to VDI: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>MSR exposed to VDI: <span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span> update from VMware</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to ESXi: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to VDI:<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">
                  <p>Cloud Desktop aaS</p>
                  <p><em>(aka VDI)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">Horizon 7 aaS</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Managed by OVH (see line above)</td>
               <td colspan="1" class="confluenceTd"><span>Managed by OVH (see line above)</span></td>
               <td colspan="1" class="confluenceTd"><span>Managed by OVH (see line above)</span></td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">Private Cloud Desktop</td>
               <td colspan="1" class="confluenceTd">Horizon 7 over pCC</td>
               <td colspan="1" class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
                  <p><a class="external-link" href="http://travaux.ovh.net/?do=details&amp;id=29250" rel="nofollow">http://travaux.ovh.net/?do=details&amp;id=29250</a></p>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to ESXi:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to VDI:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to ESXi: <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to VDI: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>MSR exposed to VDI: <span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span> update from VMware</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>OS: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to ESXi: <span class="status-macro aui-lozenge aui-lozenge-current conf-macro output-inline" data-hasbody="false" data-macro-name="status">IN PROGRESS</span></p>
                     <p>&nbsp;</p>
                     <p>VDI to VDI:<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></p>
                     <p>&nbsp;</p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">Private Cloud Desktop</td>
               <td colspan="1" class="confluenceTd">Horizon 7 over pCC</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd"><span>Managed by OVH (see line above)</span></td>
               <td colspan="1" class="confluenceTd"><span>Managed by OVH (see line above)</span></td>
               <td colspan="1" class="confluenceTd"><span>Managed by OVH (see line above)</span></td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">CaaS</td>
               <td colspan="1" class="confluenceTd">Container aaS / Mesos / Docker</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span> Cloud-IaaS/Baremetal</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-complete conf-macro output-inline" data-hasbody="false" data-macro-name="status">WAIT</span> Cloud-IaaS/Baremetal</p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud IaaS</td>
               <td colspan="1" class="confluenceTd">CaaS</td>
               <td colspan="1" class="confluenceTd">Container aaS / Mesos / Docker</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">
                  <p>Object Storage</p>
                  <p><em>(aka PCS)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">Openstack Swift</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span><span>&nbsp;</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">
                  <p>Object Storage</p>
                  <em>(aka PCS)</em>
               </td>
               <td colspan="1" class="confluenceTd">Openstack Swift</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">Block Storage</td>
               <td colspan="1" class="confluenceTd">Ceph</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">Block Storage</td>
               <td colspan="1" class="confluenceTd">Ceph</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">NAS</td>
               <td colspan="1" class="confluenceTd">NFS/ZFS</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">NAS</td>
               <td colspan="1" class="confluenceTd">NFS/ZFS</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">vRack (L2)</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud storage</td>
               <td colspan="1" class="confluenceTd">vRack (L2)</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">IP LB</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">IP LB</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">vRouter</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">vRouter</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">Dedicated Connect (L2)</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">Dedicated Connect (L2)</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">vRack Connect (L3)</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud network</td>
               <td colspan="1" class="confluenceTd">vRack Connect (L3)</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DBaaS</td>
               <td colspan="1" class="confluenceTd">MySQL</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DBaaS</td>
               <td colspan="1" class="confluenceTd">MySQL</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DBaaS</td>
               <td colspan="1" class="confluenceTd">PgSQL</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DBaaS</td>
               <td colspan="1" class="confluenceTd">PgSQL</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DataPlateform Metric</td>
               <td colspan="1" class="confluenceTd">Warp 10™, OpenTSDB, Prometheus, InfluxDB Graphite</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DataPlateform Metric</td>
               <td colspan="1" class="confluenceTd">Warp 10™, OpenTSDB, Prometheus, InfluxDB Graphite</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DataPlateform Logs</td>
               <td colspan="1" class="confluenceTd">Elastic Search</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Cloud PaaS</td>
               <td colspan="1" class="confluenceTd">DataPlateform Logs</td>
               <td colspan="1" class="confluenceTd">Elastic Search</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Domain Name</td>
               <td colspan="1" class="confluenceTd">DNS</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Domain Name</td>
               <td colspan="1" class="confluenceTd">DNS</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Domain Name</td>
               <td colspan="1" class="confluenceTd">AnyCast</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Domain Name</td>
               <td colspan="1" class="confluenceTd">AnyCast</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">
                  <p>Web Hosting</p>
                  <p><em>(aka Shared Hosting)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">LXC</td>
               <td colspan="1" class="confluenceTd">
                  <p>Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</p>
                  <p><a class="external-link" href="http://travaux.ovh.net/?do=details&amp;id=29245" rel="nofollow">http://travaux.ovh.net/?do=details&amp;id=29245</a></p>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">DONE</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Linux:&nbsp;<span>&nbsp;</span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">
                  <p>Web Hosting</p>
                  <p><em>(aka Shared Hosting)</em></p>
               </td>
               <td colspan="1" class="confluenceTd">LXC</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Email</td>
               <td colspan="1" class="confluenceTd">Mxplan</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Email</td>
               <td colspan="1" class="confluenceTd">Mxplan</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Email</td>
               <td colspan="1" class="confluenceTd">Exchange</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                     <p>&nbsp;</p>
                     <p>Windows:&nbsp;<span>&nbsp;</span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></span></p>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Email</td>
               <td colspan="1" class="confluenceTd">Exchange</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Collaborative Tools</td>
               <td colspan="1" class="confluenceTd">Sharepoint / OneDrive</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                     <p>&nbsp;</p>
                     <p>Windows:&nbsp;<span>&nbsp;</span><span><span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">PROTECTED</span></span></p>
                     <p><a class="external-link" href="https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/" rel="nofollow"><em>Clic here for more information</em></a></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">Collaborative Tools</td>
               <td colspan="1" class="confluenceTd">Sharepoint / OneDrive</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">xDSL</td>
               <td colspan="1" class="confluenceTd">ADSL, SDSL, VDSL</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">xDSL</td>
               <td colspan="1" class="confluenceTd">ADSL, SDSL, VDSL</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">xDSL</td>
               <td colspan="1" class="confluenceTd">OTB</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">xDSL</td>
               <td colspan="1" class="confluenceTd">OTB</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">VoIP</td>
               <td colspan="1" class="confluenceTd">SIP Softphone</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">VoIP</td>
               <td colspan="1" class="confluenceTd">SIP Softphone</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">VoIP</td>
               <td colspan="1" class="confluenceTd">SIP/MGCP Hardphone</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">VoIP</td>
               <td colspan="1" class="confluenceTd">SIP/MGCP Hardphone</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">SMS/FAX</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">SMS/FAX</td>
               <td colspan="1" class="confluenceTd">&nbsp;</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">hubiC</td>
               <td colspan="1" class="confluenceTd">Based on PCS</td>
               <td colspan="1" class="confluenceTd">Service update (<em><span style="color: rgb(0,0,255);">OVH side</span></em>)</td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status:&nbsp;<span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
               <td colspan="1" class="confluenceTd">
                  <div class="content-wrapper">
                     <p>Status: <span class="status-macro aui-lozenge aui-lozenge-success conf-macro output-inline" data-hasbody="false" data-macro-name="status">NOT EXPOSED</span></p>
                  </div>
               </td>
            </tr>
            <tr role="row">
               <td colspan="1" class="confluenceTd">Web and Telecom</td>
               <td colspan="1" class="confluenceTd">hubiC</td>
               <td colspan="1" class="confluenceTd">frontend, apps, desktop</td>
               <td colspan="1" class="confluenceTd">CUSTOMER</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
               <td colspan="1" class="confluenceTd">Nothing to do</td>
            </tr>
         </tbody>
      </table>
   </div>
</div>

