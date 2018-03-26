---
title: Check the CPU Frequency of MC-64 OC
slug: check-cpu-frequency
excerpt: Find here how to check the frequency of your CPU on the MC-64 OC server.
section: Server Management
---


## Requirements
The MC-64 OC range has an i7-6700k processor that has its base frequency at 4Ghz, or 4.2Ghz in turbo.

We have tested this processor in order to increase performance and we have developed an overclock profile of this processor to 4.4Ghz in use on several core, or 4.7Ghz in turbo mode using only one core.

To perform the steps in this guide, you must :

- Have an MC-64 OC server.
- Have SSH access.
- Have Remote Desktop access (For Windows).


## Procedure

### Check the frequency from rescue mode
You can connect to your server in SSH with the rescue password you received by email.

In rescue mode, we can see the frequency in real time with this command :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# watch -n 0 "lscpu | grep MHz"</span> <span class="output">Every 0.1s: lscpu | grep MHz                                                  Sat Jan  7 20:36:21 2017</span> <span class="blank">&nbsp;</span> <span class="output">CPU MHz:               800.312</span> <span class="output">CPU max MHz:           4700.0000</span> <span class="output">CPU min MHz:           800.0000</span> </pre></div>
At rest, the processor reduces the frequency itself to reduce power consumption.

When we issue a `burnP6`{.action} on a single thread, it uses only one core and therefore we have the maximum CPU frequency.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# burnP6</span> <span class="prompt">root@rescue:~# lscpu | grep MHz</span> <span class="output">CPU MHz:               4671.562</span> <span class="output">CPU max MHz:           4700.0000</span> <span class="output">CPU min MHz:           800.0000</span> </pre></div>
The more we use thread, the more the frequency is degressive to the maximum of 4.4Ghz.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# burnP6 & burnP6 & burnP6 & burnP6</span> <span class="output">[1] 19146</span> <span class="output">[2] 19147</span> <span class="output">[3] 19148</span> <span class="blank">&nbsp;</span> <span class="prompt">root@rescue:~# lscpu | grep MHz</span> <span class="output">CPU MHz:               4400.625</span> <span class="output">CPU max MHz:           4700.0000</span> <span class="output">CPU min MHz:           800.0000</span> </pre></div>

### Check the frequency with a linux OS
Sometimes the distribution is too old and the lscpu command is not available.

In this case we have an alternative that is `i7z`{.action}.

You can install and run it as follows (This also works in rescue mode).

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@ns3054631:~# wget ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit</span> <span class="output">converted 'ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit' (ANSI_X3.4-1968) -> 'ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit' (UTF-8)</span> <span class="output">--2017-01-14 12:20:09--  ftp://ftp.ovh.net/made-in-ovh/dedie/bench/i7z_64bit</span> <span class="output">       => 'i7z_64bit'</span> <span class="output">Resolving ftp.ovh.net (ftp.ovh.net)... 213.186.33.9</span> <span class="output">Connecting to ftp.ovh.net (ftp.ovh.net)|213.186.33.9|:21... connected.</span> <span class="output">Logging in as anonymous ... Logged in!</span> <span class="output">==> SYST ... done.    ==> PWD ... done.</span> <span class="output">==> TYPE I ... done.  ==> CWD (1) /made-in-ovh/dedie/bench ... done.</span> <span class="output">==> SIZE i7z_64bit ... 1053813</span> <span class="output">==> PASV ... done.    ==> RETR i7z_64bit ... done.</span> <span class="output">Length: 1053813 (1.0M) (unauthoritative)</span> <span class="blank">&nbsp;</span> <span class="output">i7z_64bit                 100%[=====================================>]   1.00M  --.-KB/s   in 0.08s</span> <span class="blank">&nbsp;</span> <span class="output">2017-01-14 12:20:09 (12.0 MB/s) - 'i7z_64bit' saved [1053813]</span> <span class="blank">&nbsp;</span> <span class="prompt">root@ns3054631:~# chmod +x i7z_64bit</span> <span class="prompt">root@ns3054631:~# ./i7z_64bit</span> </pre></div>
You will then have a display of this type.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="output">Cpu speed from cpuinfo 4007.00Mhz</span> <span class="output">cpuinfo might be wrong if cpufreq is enabled. To guess correctly try estimating via tsc</span> <span class="output">Linux's inbuilt cpu_khz code emulated now</span> <span class="output">True Frequency (without accounting Turbo) 4007 MHz</span> <span class="output">CPU Multiplier 40x || Bus clock frequency (BCLK) 100.18 MHz</span> <span class="blank">&nbsp;</span> <span class="output">Socket [0] - [physical cores=4, logical cores=8, max online cores ever=4]</span> <span class="output">TURBO ENABLED on 4 Cores, Hyper Threading ON</span> <span class="output">True Frequency 4107.18 MHz (100.18 x [41])</span> <span class="output">Max TURBO Multiplier (if Enabled) with 1/2/3/4 Cores is  47x/46x/45x/44x</span> <span class="output">Current Frequency 800.65 MHz [100.18 x 7.99] (Max of below)</span> <span class="output">       Core [core-id]  :Actual Freq (Mult.)      C0%   Halt(C1)%  C3 %   C6 %  Temp</span> <span class="output">       Core 1 [0]:       799.57 (7.98x)           1     100       0       0    22</span> <span class="output">       Core 2 [1]:       799.74 (7.98x)           1      99       0       1    23</span> <span class="output">       Core 3 [2]:       799.83 (7.98x)           1     100       0       0    24</span> <span class="output">       Core 4 [3]:       800.65 (7.99x)           1     100       0       0    21</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">C0 = Processor running without halting</span> <span class="output">C1 = Processor running with halts (States >C0 are power saver)</span> <span class="output">C3 = Cores running with PLL turned off and core cache turned off</span> <span class="output">C6 = Everything in C3 + core state saved to last level cache</span> <span class="output">  Above values in table are in percentage over the last 1 sec</span> <span class="output">[core-id] refers to core-id number in /proc/cpuinfo</span> <span class="output">'Garbage Values' message printed when garbage values are read</span> <span class="output">  Ctrl+C to exit</span> </pre></div>
It should be noted, however, that the frequencies shown on the **CPU speed from cpuinfo** line and the **True Frequency** line are not the actual frequencies of the processor. The only values that count are those shown on **Core**.


### Check the frequency with Windows OS and WinPE mode
You can also check the frequency of the server in WinPE mode.

To do this, you must install a tier software because Windows can not read the actual native processor speeds.

Go to the [official CPU-Z website](http://www.cpuid.com/softwares/cpu-z.html){.external} to download this software, and install it.

We will then have a window showing the real frequencies of the processor :



> [!primary]
>
> To display the clocks window, go to Tools **, then click **clocks.
> 


![freq_win1](images/guide_freq_win1.png){.thumbnail}


![freq_win2](images/guide_freq_win2.png){.thumbnail}

You will notice that the speed limits to 4.7Ghz when using a single core.

For the rest of the test in Windows, we used the [CPU stress MT](http://www.octeam.fr/remository/utilitaires-cpu/cpu-stress-mt.html){.external}.

Once installed, to launch a bench, just click on the button `Start`{.action} without modifying the configurations.

If we run a bench of the processor, we will then have the speed of 4.4Ghz.


![freq_win3](images/guide_freq_win3.png){.thumbnail}