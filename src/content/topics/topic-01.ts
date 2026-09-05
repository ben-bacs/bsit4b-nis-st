import { Topic } from '../../types/content';

export const TOPIC_01: Topic = {
  "id": "topic-01",
  "slug": "00-intro-to-linux",
  "topicNumber": "00",
  "title": "Linux Essentials for Digital Forensics",
  "subtitle": "Learn the system. Then use it carefully in forensic work.",
  "description": "Practical Linux workflows for acquiring, verifying, examining, and documenting digital evidence.",
  "author": "Mark Joseph J. Solidarios",
  "originalPath": "_00_intro_to_linux",
  "badge": "Foundations",
  "tags": [
    "Linux",
    "Kali Linux",
    "CLI",
    "NIST SP 800-86",
    "ddrescue",
    "The Sleuth Kit",
    "Live Response"
  ],
  "totalSlides": 37,
  "sections": [
    {
      "id": "course-outcome",
      "title": "Course Outcome & Mental Model",
      "eyebrow": "Foundations",
      "slides": [
        {
          "id": "slide-1",
          "slideNumber": 1,
          "title": "Linux Essentials",
          "eyebrow": "Cyberforensics foundations",
          "subtitle": "Learn the system. Then use it carefully in forensic work.",
          "byline": "Mark Joseph J. Solidarios",
          "isTitleSlide": true,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Cyberforensics foundations</p>\n          <h1>Linux Essentials</h1>\n          <p class=\"subtitle\">Learn the system. Then use it carefully in forensic work.</p>\n          <p class=\"byline\">Mark Joseph J. Solidarios</p>",
          "cleanText": "Cyberforensics foundations Linux Essentials Learn the system. Then use it carefully in forensic work. Mark Joseph J. Solidarios",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-2",
          "slideNumber": 2,
          "title": "Build Linux confidence before handling evidence",
          "eyebrow": "Course outcome",
          "lead": "By the end, you should be able to:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Course outcome</p>\n          <h2>Build Linux confidence before handling evidence</h2>\n          <div class=\"split\">\n            <div>\n              <p class=\"lead\">By the end, you should be able to:</p>\n              <ul class=\"compact\">\n                <li>navigate files and directories;</li>\n                <li>inspect permissions, processes, logs, and networks;</li>\n                <li>install tools and use remote workflows;</li>\n                <li>combine commands with pipes and redirection;</li>\n                <li>apply those skills without compromising evidence.</li>\n              </ul>\n            </div>\n            <div class=\"quote-block\">\n              <strong>Linux basics come first.</strong>\n              <span>Forensic tools make more sense when the filesystem, shell, permissions, and processes are already familiar.</span>\n            </div>\n          </div>",
          "cleanText": "Course outcome Build Linux confidence before handling evidence By the end, you should be able to: navigate files and directories; inspect permissions, processes, logs, and networks; install tools and use remote workflows; combine commands with pipes and redirection; apply those skills without compromising evidence. Linux basics come first. Forensic tools make more sense when the filesystem, shell, permissions, and processes are already familiar.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "part-1-linux-basics",
      "title": "Part 1: Linux Basics with Kali",
      "eyebrow": "Part 1",
      "summary": "Start with navigation and files, then build toward processes, networking, and remote work.",
      "slides": [
        {
          "id": "slide-3",
          "slideNumber": 3,
          "title": "Understand the workstation before using the forensic tools",
          "eyebrow": "Linux basics with Kali",
          "isTitleSlide": false,
          "isSectionDivider": true,
          "partNumber": "Part 1",
          "rawHtml": "<p class=\"part-number\">Part 1</p>\n          <p class=\"eyebrow\">Linux basics with Kali</p>\n          <h2>Understand the workstation before using the forensic tools</h2>\n          <p class=\"section-summary\">Start with navigation and files, then build toward processes, networking, and remote work.</p>",
          "cleanText": "Part 1 Linux basics with Kali Understand the workstation before using the forensic tools Start with navigation and files, then build toward processes, networking, and remote work.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-4",
          "slideNumber": 4,
          "title": "Kali is Linux with security tools pre-packaged",
          "eyebrow": "Kali Linux",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Kali Linux</p>\n          <h2>Kali is Linux with security tools pre-packaged</h2>\n          <div class=\"split\">\n            <div>\n              <ul class=\"compact\">\n                <li>Built on Debian, so familiar Linux commands and packages still apply.</li>\n                <li>Uses a rolling release model and the APT package manager.</li>\n                <li>Includes tools for security testing, incident response, and digital forensics.</li>\n                <li>Can run from an installed system, virtual machine, live USB, or container.</li>\n              </ul>\n            </div>\n            <div class=\"callout\">\n              <strong>Begin with the terminal</strong>\n              <span>The same core commands work across Kali, Debian, Ubuntu, and many other Linux distributions.</span>\n            </div>\n          </div>\n          <aside class=\"notes\">[Sources]\n- https://www.kali.org/docs/introduction/what-is-kali-linux/\n- https://www.kali.org/docs/general-use/kali-branches/\n[/Sources]</aside>",
          "cleanText": "Kali Linux Kali is Linux with security tools pre-packaged Built on Debian, so familiar Linux commands and packages still apply. Uses a rolling release model and the APT package manager. Includes tools for security testing, incident response, and digital forensics. Can run from an installed system, virtual machine, live USB, or container. Begin with the terminal The same core commands work across Kali, Debian, Ubuntu, and many other Linux distributions. [Sources] - https://www.kali.org/docs/introduction/what-is-kali-linux/ - https://www.kali.org/docs/general-use/kali-branches/ [/Sources]",
          "codeSnippets": [],
          "tables": [],
          "sources": [
            "https://www.kali.org/docs/introduction/what-is-kali-linux/",
            "https://www.kali.org/docs/general-use/kali-branches/"
          ],
          "images": []
        },
        {
          "id": "slide-5",
          "slideNumber": 5,
          "title": "Know where you are and how to move",
          "eyebrow": "Terminal navigation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Terminal navigation</p>\n          <h2>Know where you are and how to move</h2>\n          <pre><code class=\"bash\">pwd                  # Show the current directory\nls                   # List visible files\nls -la               # Include hidden files and details\nls -lh               # Show human-readable file sizes\n\ncd /var/log          # Move to an absolute path\ncd ..                # Move up one directory\ncd ~                 # Return to your home directory\ncd -                 # Return to the previous directory</code></pre>\n          <p class=\"caveat\">Beginner habit: run <code>pwd</code> and <code>ls</code> before copying, moving, or deleting anything.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.gnu.org/software/coreutils/manual/coreutils.html\n[/Sources]</aside>",
          "cleanText": "Terminal navigation Know where you are and how to move pwd # Show the current directory ls # List visible files ls -la # Include hidden files and details ls -lh # Show human-readable file sizes cd /var/log # Move to an absolute path cd .. # Move up one directory cd ~ # Return to your home directory cd - # Return to the previous directory Beginner habit: run pwd and ls before copying, moving, or deleting anything. [Sources] - https://www.gnu.org/software/coreutils/manual/coreutils.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "pwd                  # Show the current directory\nls                   # List visible files\nls -la               # Include hidden files and details\nls -lh               # Show human-readable file sizes\n\ncd /var/log          # Move to an absolute path\ncd ..                # Move up one directory\ncd ~                 # Return to your home directory\ncd -                 # Return to the previous directory"
            }
          ],
          "tables": [],
          "caveat": "Beginner habit: run pwd and ls before copying, moving, or deleting anything.",
          "sources": [
            "https://www.gnu.org/software/coreutils/manual/coreutils.html"
          ],
          "images": []
        },
        {
          "id": "slide-6",
          "slideNumber": 6,
          "title": "Important evidence lives in predictable places",
          "eyebrow": "Linux filesystem",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Linux filesystem</p>\n          <h2>Important evidence lives in predictable places</h2>\n          <div class=\"split filesystem-basics\">\n            <div>\n              <dl>\n                <dt><code>/etc</code></dt><dd>system and service configuration</dd>\n                <dt><code>/var/log</code></dt><dd>system and application logs</dd>\n                <dt><code>/home</code></dt><dd>normal users’ files and settings</dd>\n                <dt><code>/root</code></dt><dd>the root user’s home directory</dd>\n              </dl>\n            </div>\n            <div>\n              <dl>\n                <dt><code>/tmp</code></dt><dd>short-lived temporary files</dd>\n                <dt><code>/var/tmp</code></dt><dd>temporary files kept longer</dd>\n                <dt><code>/proc</code></dt><dd>live process and kernel information</dd>\n                <dt><code>/dev</code></dt><dd>devices such as disks and terminals</dd>\n              </dl>\n            </div>\n          </div>\n          <p class=\"caveat\">A path beginning with <code>/</code> is absolute. A path without it is relative to the current directory.</p>\n          <aside class=\"notes\">[Sources]\n- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html\n[/Sources]</aside>",
          "cleanText": "Linux filesystem Important evidence lives in predictable places /etc system and service configuration /var/log system and application logs /home normal users’ files and settings /root the root user’s home directory /tmp short-lived temporary files /var/tmp temporary files kept longer /proc live process and kernel information /dev devices such as disks and terminals A path beginning with / is absolute. A path without it is relative to the current directory. [Sources] - https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html [/Sources]",
          "codeSnippets": [],
          "tables": [],
          "caveat": "A path beginning with / is absolute. A path without it is relative to the current directory.",
          "sources": [
            "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html"
          ],
          "images": []
        },
        {
          "id": "slide-7",
          "slideNumber": 7,
          "title": "Search by name, type, size, or time",
          "eyebrow": "Finding files",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Finding files</p>\n          <h2>Search by name, type, size, or time</h2>\n          <pre><code class=\"bash\">find . -type f                    # Files below the current directory\nfind /var/log -name '*.log'      # Names ending in .log\nfind /home -type f -size +10M    # Files larger than 10 MiB\nfind /home -type f -mtime -7     # Modified within seven days\n\nfile downloads/item.bin          # Identify content by signature\nstat downloads/item.bin          # Show size, ownership, and timestamps\n\ngrep -RIn 'failed password' /var/log 2&gt;/dev/null</code></pre>\n          <p class=\"caveat\">Quote wildcard patterns such as <code>'*.log'</code> so the shell does not expand them too early.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.gnu.org/software/findutils/manual/html_mono/find.html\n- https://www.gnu.org/software/grep/manual/grep.html\n[/Sources]</aside>",
          "cleanText": "Finding files Search by name, type, size, or time find . -type f # Files below the current directory find /var/log -name '*.log' # Names ending in .log find /home -type f -size +10M # Files larger than 10 MiB find /home -type f -mtime -7 # Modified within seven days file downloads/item.bin # Identify content by signature stat downloads/item.bin # Show size, ownership, and timestamps grep -RIn 'failed password' /var/log 2>/dev/null Quote wildcard patterns such as '*.log' so the shell does not expand them too early. [Sources] - https://www.gnu.org/software/findutils/manual/html_mono/find.html - https://www.gnu.org/software/grep/manual/grep.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "find . -type f                    # Files below the current directory\nfind /var/log -name '*.log'      # Names ending in .log\nfind /home -type f -size +10M    # Files larger than 10 MiB\nfind /home -type f -mtime -7     # Modified within seven days\n\nfile downloads/item.bin          # Identify content by signature\nstat downloads/item.bin          # Show size, ownership, and timestamps\n\ngrep -RIn 'failed password' /var/log 2>/dev/null"
            }
          ],
          "tables": [],
          "caveat": "Quote wildcard patterns such as '*.log' so the shell does not expand them too early.",
          "sources": [
            "https://www.gnu.org/software/findutils/manual/html_mono/find.html",
            "https://www.gnu.org/software/grep/manual/grep.html"
          ],
          "images": []
        },
        {
          "id": "slide-8",
          "slideNumber": 8,
          "title": "Read the permission string before changing it",
          "eyebrow": "Permissions and ownership",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Permissions and ownership</p>\n          <h2>Read the permission string before changing it</h2>\n          <pre><code class=\"bash\">ls -l report.txt\n# -rw-r----- 1 alex analysts 2480 Aug 17 09:00 report.txt\n\n# owner: rw-   group: r--   others: ---\nchmod 640 report.txt        # Set those permissions numerically\nchmod u+x collect.sh        # Add execute permission for the owner\nchown alex:analysts report.txt\n\nid                          # Show your user and group memberships</code></pre>\n          <div class=\"two-notes\">\n            <span><strong>r</strong> reads, <strong>w</strong> changes, and <strong>x</strong> executes or enters.</span>\n            <span><code>sudo</code> raises privilege for one command; use it only when needed.</span>\n          </div>\n          <aside class=\"notes\">[Sources]\n- https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html\n[/Sources]</aside>",
          "cleanText": "Permissions and ownership Read the permission string before changing it ls -l report.txt # -rw-r----- 1 alex analysts 2480 Aug 17 09:00 report.txt # owner: rw- group: r-- others: --- chmod 640 report.txt # Set those permissions numerically chmod u+x collect.sh # Add execute permission for the owner chown alex:analysts report.txt id # Show your user and group memberships r reads, w changes, and x executes or enters. sudo raises privilege for one command; use it only when needed. [Sources] - https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "ls -l report.txt\n# -rw-r----- 1 alex analysts 2480 Aug 17 09:00 report.txt\n\n# owner: rw-   group: r--   others: ---\nchmod 640 report.txt        # Set those permissions numerically\nchmod u+x collect.sh        # Add execute permission for the owner\nchown alex:analysts report.txt\n\nid                          # Show your user and group memberships"
            }
          ],
          "tables": [],
          "sources": [
            "https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html"
          ],
          "images": []
        },
        {
          "id": "slide-9",
          "slideNumber": 9,
          "title": "APT installs and tracks software",
          "eyebrow": "Packages in Kali",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Packages in Kali</p>\n          <h2>APT installs and tracks software</h2>\n          <pre><code class=\"bash\">sudo apt update                 # Refresh package information\napt search sleuthkit            # Search available packages\napt show sleuthkit              # Read package details\nsudo apt install sleuthkit      # Install one package\n\napt list --installed            # List installed packages\napt-cache policy sleuthkit      # Show installed and candidate versions\nsudo apt remove sleuthkit       # Remove the package</code></pre>\n          <p class=\"caveat\">Do not copy commands blindly. Read what APT plans to install, upgrade, or remove before confirming.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.kali.org/docs/general-use/metapackages/\n- https://www.debian.org/doc/manuals/debian-reference/ch02.en.html\n[/Sources]</aside>",
          "cleanText": "Packages in Kali APT installs and tracks software sudo apt update # Refresh package information apt search sleuthkit # Search available packages apt show sleuthkit # Read package details sudo apt install sleuthkit # Install one package apt list --installed # List installed packages apt-cache policy sleuthkit # Show installed and candidate versions sudo apt remove sleuthkit # Remove the package Do not copy commands blindly. Read what APT plans to install, upgrade, or remove before confirming. [Sources] - https://www.kali.org/docs/general-use/metapackages/ - https://www.debian.org/doc/manuals/debian-reference/ch02.en.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "sudo apt update                 # Refresh package information\napt search sleuthkit            # Search available packages\napt show sleuthkit              # Read package details\nsudo apt install sleuthkit      # Install one package\n\napt list --installed            # List installed packages\napt-cache policy sleuthkit      # Show installed and candidate versions\nsudo apt remove sleuthkit       # Remove the package"
            }
          ],
          "tables": [],
          "caveat": "Do not copy commands blindly. Read what APT plans to install, upgrade, or remove before confirming.",
          "sources": [
            "https://www.kali.org/docs/general-use/metapackages/",
            "https://www.debian.org/doc/manuals/debian-reference/ch02.en.html"
          ],
          "images": []
        },
        {
          "id": "slide-10",
          "slideNumber": 10,
          "title": "Build answers one small command at a time",
          "eyebrow": "Pipes and text processing",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Pipes and text processing</p>\n          <h2>Build answers one small command at a time</h2>\n          <pre><code class=\"bash\">command &gt; output.txt            # Replace a file with command output\ncommand &gt;&gt; output.txt           # Append command output\ncommand 2&gt; errors.txt           # Save error messages\n\ncat auth.log | less             # Read one screen at a time\ngrep 'Failed password' auth.log # Keep matching lines\ncut -d' ' -f1 auth.log          # Select one field\nsort users.txt | uniq -c        # Sort, then count repeated lines\n\ngrep -c 'Failed password' /assets/mock-auth.log</code></pre>\n          <p class=\"caveat\">The pipe character <code>|</code> sends one command’s output into the next command.</p>",
          "cleanText": "Pipes and text processing Build answers one small command at a time command > output.txt # Replace a file with command output command >> output.txt # Append command output command 2> errors.txt # Save error messages cat auth.log | less # Read one screen at a time grep 'Failed password' auth.log # Keep matching lines cut -d' ' -f1 auth.log # Select one field sort users.txt | uniq -c # Sort, then count repeated lines grep -c 'Failed password' /assets/mock-auth.log The pipe character | sends one command’s output into the next command.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "command > output.txt            # Replace a file with command output\ncommand >> output.txt           # Append command output\ncommand 2> errors.txt           # Save error messages\n\ncat auth.log | less             # Read one screen at a time\ngrep 'Failed password' auth.log # Keep matching lines\ncut -d' ' -f1 auth.log          # Select one field\nsort users.txt | uniq -c        # Sort, then count repeated lines\n\ngrep -c 'Failed password' /assets/mock-auth.log"
            }
          ],
          "tables": [],
          "caveat": "The pipe character | sends one command’s output into the next command.",
          "images": []
        },
        {
          "id": "slide-11",
          "slideNumber": 11,
          "title": "See what is running before you stop it",
          "eyebrow": "Processes and services",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Processes and services</p>\n          <h2>See what is running before you stop it</h2>\n          <pre><code class=\"bash\">ps aux                    # Snapshot of running processes\nps aux | grep ssh         # Find a process by text\ntop                       # Live process view; press q to quit\n\nsystemctl status ssh      # Check one service\nsystemctl list-units --type=service --state=running\n\njournalctl -u ssh -n 20   # Last 20 messages for the SSH service\nlsof -p 1234              # Files opened by process 1234</code></pre>\n          <p class=\"caveat\">Stopping a process or service changes system state. Inspect first, then decide.</p>\n          <aside class=\"notes\">[Sources]\n- https://man7.org/linux/man-pages/man1/ps.1.html\n- https://www.freedesktop.org/software/systemd/man/latest/systemctl.html\n[/Sources]</aside>",
          "cleanText": "Processes and services See what is running before you stop it ps aux # Snapshot of running processes ps aux | grep ssh # Find a process by text top # Live process view; press q to quit systemctl status ssh # Check one service systemctl list-units --type=service --state=running journalctl -u ssh -n 20 # Last 20 messages for the SSH service lsof -p 1234 # Files opened by process 1234 Stopping a process or service changes system state. Inspect first, then decide. [Sources] - https://man7.org/linux/man-pages/man1/ps.1.html - https://www.freedesktop.org/software/systemd/man/latest/systemctl.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "ps aux                    # Snapshot of running processes\nps aux | grep ssh         # Find a process by text\ntop                       # Live process view; press q to quit\n\nsystemctl status ssh      # Check one service\nsystemctl list-units --type=service --state=running\n\njournalctl -u ssh -n 20   # Last 20 messages for the SSH service\nlsof -p 1234              # Files opened by process 1234"
            }
          ],
          "tables": [],
          "caveat": "Stopping a process or service changes system state. Inspect first, then decide.",
          "sources": [
            "https://man7.org/linux/man-pages/man1/ps.1.html",
            "https://www.freedesktop.org/software/systemd/man/latest/systemctl.html"
          ],
          "images": []
        },
        {
          "id": "slide-12",
          "slideNumber": 12,
          "title": "Check addresses, routes, sockets, and names",
          "eyebrow": "Networking basics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Networking basics</p>\n          <h2>Check addresses, routes, sockets, and names</h2>\n          <pre><code class=\"bash\">ip address show              # Local network addresses\nip route show                # Routes and default gateway\nss -tuln                     # Listening TCP and UDP sockets\nss -tpn                      # TCP connections with processes\n\nping -c 4 192.0.2.10         # Basic reachability test\ndig +short example.org       # DNS lookup\ncurl -I https://example.org  # Request HTTP response headers</code></pre>\n          <p class=\"caveat\">No response does not always mean “offline”; firewalls commonly block diagnostic traffic.</p>\n          <aside class=\"notes\">[Sources]\n- https://man7.org/linux/man-pages/man8/ip.8.html\n- https://man7.org/linux/man-pages/man8/ss.8.html\n[/Sources]</aside>",
          "cleanText": "Networking basics Check addresses, routes, sockets, and names ip address show # Local network addresses ip route show # Routes and default gateway ss -tuln # Listening TCP and UDP sockets ss -tpn # TCP connections with processes ping -c 4 192.0.2.10 # Basic reachability test dig +short example.org # DNS lookup curl -I https://example.org # Request HTTP response headers No response does not always mean “offline”; firewalls commonly block diagnostic traffic. [Sources] - https://man7.org/linux/man-pages/man8/ip.8.html - https://man7.org/linux/man-pages/man8/ss.8.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "ip address show              # Local network addresses\nip route show                # Routes and default gateway\nss -tuln                     # Listening TCP and UDP sockets\nss -tpn                      # TCP connections with processes\n\nping -c 4 192.0.2.10         # Basic reachability test\ndig +short example.org       # DNS lookup\ncurl -I https://example.org  # Request HTTP response headers"
            }
          ],
          "tables": [],
          "caveat": "No response does not always mean “offline”; firewalls commonly block diagnostic traffic.",
          "sources": [
            "https://man7.org/linux/man-pages/man8/ip.8.html",
            "https://man7.org/linux/man-pages/man8/ss.8.html"
          ],
          "images": []
        },
        {
          "id": "slide-13",
          "slideNumber": 13,
          "title": "SSH gives you a terminal on another Linux system",
          "eyebrow": "Secure Shell",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Secure Shell</p>\n          <h2>SSH gives you a terminal on another Linux system</h2>\n          <pre><code class=\"bash\">ssh analyst@192.0.2.25\n\n# Use a non-default port.\nssh -p 2222 analyst@192.0.2.25\n\n# Run one command and return.\nssh analyst@192.0.2.25 'hostname; date -u'\n\n# Leave the remote session.\nexit</code></pre>\n          <p class=\"caveat\">Check the host-key fingerprint through a trusted channel before accepting a new SSH host key.</p>\n          <aside class=\"notes\">[Sources]\n- https://man.openbsd.org/ssh\n[/Sources]</aside>",
          "cleanText": "Secure Shell SSH gives you a terminal on another Linux system ssh analyst@192.0.2.25 # Use a non-default port. ssh -p 2222 analyst@192.0.2.25 # Run one command and return. ssh analyst@192.0.2.25 'hostname; date -u' # Leave the remote session. exit Check the host-key fingerprint through a trusted channel before accepting a new SSH host key. [Sources] - https://man.openbsd.org/ssh [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "ssh analyst@192.0.2.25\n\n# Use a non-default port.\nssh -p 2222 analyst@192.0.2.25\n\n# Run one command and return.\nssh analyst@192.0.2.25 'hostname; date -u'\n\n# Leave the remote session.\nexit"
            }
          ],
          "tables": [],
          "caveat": "Check the host-key fingerprint through a trusted channel before accepting a new SSH host key.",
          "sources": [
            "https://man.openbsd.org/ssh"
          ],
          "images": []
        },
        {
          "id": "slide-14",
          "slideNumber": 14,
          "title": "Copy files over SSH and verify them afterward",
          "eyebrow": "Remote file transfer",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Remote file transfer</p>\n          <h2>Copy files over SSH and verify them afterward</h2>\n          <pre><code class=\"bash\"># Copy one remote file to the current directory.\nscp analyst@192.0.2.25:/var/tmp/report.txt .\n\n# Copy a local directory to a remote system.\nscp -r case-notes analyst@192.0.2.25:/data/\n\n# Resume and show progress with rsync over SSH.\nrsync -av --partial --progress case-notes/ \\\n  analyst@192.0.2.25:/data/case-notes/\n\nsha256sum report.txt</code></pre>\n          <p class=\"caveat\">A completed transfer is not the same as verified integrity; compare hashes when the file matters.</p>\n          <aside class=\"notes\">[Sources]\n- https://man.openbsd.org/scp\n- https://download.samba.org/pub/rsync/rsync.1\n[/Sources]</aside>",
          "cleanText": "Remote file transfer Copy files over SSH and verify them afterward # Copy one remote file to the current directory. scp analyst@192.0.2.25:/var/tmp/report.txt . # Copy a local directory to a remote system. scp -r case-notes analyst@192.0.2.25:/data/ # Resume and show progress with rsync over SSH. rsync -av --partial --progress case-notes/ \\ analyst@192.0.2.25:/data/case-notes/ sha256sum report.txt A completed transfer is not the same as verified integrity; compare hashes when the file matters. [Sources] - https://man.openbsd.org/scp - https://download.samba.org/pub/rsync/rsync.1 [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "# Copy one remote file to the current directory.\nscp analyst@192.0.2.25:/var/tmp/report.txt .\n\n# Copy a local directory to a remote system.\nscp -r case-notes analyst@192.0.2.25:/data/\n\n# Resume and show progress with rsync over SSH.\nrsync -av --partial --progress case-notes/ \\\n  analyst@192.0.2.25:/data/case-notes/\n\nsha256sum report.txt"
            }
          ],
          "tables": [],
          "caveat": "A completed transfer is not the same as verified integrity; compare hashes when the file matters.",
          "sources": [
            "https://man.openbsd.org/scp",
            "https://download.samba.org/pub/rsync/rsync.1"
          ],
          "images": []
        },
        {
          "id": "slide-15",
          "slideNumber": 15,
          "title": "tmux keeps a terminal session alive",
          "eyebrow": "Long-running work",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Long-running work</p>\n          <h2>tmux keeps a terminal session alive</h2>\n          <pre><code class=\"bash\">tmux new -s lab             # Start a named session\n\n# Inside tmux: Ctrl+b, then d to detach.\n\ntmux ls                     # List sessions\ntmux attach -t lab          # Reconnect to the session\n\n# Inside tmux:\n# Ctrl+b, then %   split left/right\n# Ctrl+b, then \"   split top/bottom</code></pre>\n          <p class=\"caveat\">Use a clear session name such as <code>case-017</code> or <code>imaging</code>, not the default number.</p>\n          <aside class=\"notes\">[Sources]\n- https://github.com/tmux/tmux/wiki/Getting-Started\n[/Sources]</aside>",
          "cleanText": "Long-running work tmux keeps a terminal session alive tmux new -s lab # Start a named session # Inside tmux: Ctrl+b, then d to detach. tmux ls # List sessions tmux attach -t lab # Reconnect to the session # Inside tmux: # Ctrl+b, then % split left/right # Ctrl+b, then \" split top/bottom Use a clear session name such as case-017 or imaging , not the default number. [Sources] - https://github.com/tmux/tmux/wiki/Getting-Started [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "tmux new -s lab             # Start a named session\n\n# Inside tmux: Ctrl+b, then d to detach.\n\ntmux ls                     # List sessions\ntmux attach -t lab          # Reconnect to the session\n\n# Inside tmux:\n# Ctrl+b, then %   split left/right\n# Ctrl+b, then \"   split top/bottom"
            }
          ],
          "tables": [],
          "caveat": "Use a clear session name such as case-017 or imaging , not the default number.",
          "sources": [
            "https://github.com/tmux/tmux/wiki/Getting-Started"
          ],
          "images": []
        },
        {
          "id": "slide-16",
          "slideNumber": 16,
          "title": "Docker can provide a clean, repeatable tool environment",
          "eyebrow": "Containers",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Containers</p>\n          <h2>Docker can provide a clean, repeatable tool environment</h2>\n          <pre><code class=\"bash\">docker pull kalilinux/kali-rolling\ndocker run --rm -it kalilinux/kali-rolling bash\n\n# Make a host directory read-only inside the container.\ndocker run --rm -it \\\n  --mount type=bind,src=/cases/demo,dst=/evidence,readonly \\\n  kalilinux/kali-rolling bash</code></pre>\n          <div class=\"callout warning\"><strong>Read-only inside Docker is not a hardware write blocker.</strong><span>Containers improve tool isolation; they do not replace evidence-handling controls.</span></div>\n          <aside class=\"notes\">[Sources]\n- https://www.kali.org/docs/containers/using-kali-docker-images/\n- https://docs.docker.com/engine/storage/bind-mounts/\n[/Sources]</aside>",
          "cleanText": "Containers Docker can provide a clean, repeatable tool environment docker pull kalilinux/kali-rolling docker run --rm -it kalilinux/kali-rolling bash # Make a host directory read-only inside the container. docker run --rm -it \\ --mount type=bind,src=/cases/demo,dst=/evidence,readonly \\ kalilinux/kali-rolling bash Read-only inside Docker is not a hardware write blocker. Containers improve tool isolation; they do not replace evidence-handling controls. [Sources] - https://www.kali.org/docs/containers/using-kali-docker-images/ - https://docs.docker.com/engine/storage/bind-mounts/ [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "docker pull kalilinux/kali-rolling\ndocker run --rm -it kalilinux/kali-rolling bash\n\n# Make a host directory read-only inside the container.\ndocker run --rm -it \\\n  --mount type=bind,src=/cases/demo,dst=/evidence,readonly \\\n  kalilinux/kali-rolling bash"
            }
          ],
          "tables": [],
          "sources": [
            "https://www.kali.org/docs/containers/using-kali-docker-images/",
            "https://docs.docker.com/engine/storage/bind-mounts/"
          ],
          "images": []
        }
      ]
    },
    {
      "id": "part-2-forensic-application",
      "title": "Part 2: Linux Applied to Digital Forensics",
      "eyebrow": "Part 2",
      "summary": "Now the goal is not only to get an answer—it is to preserve and explain how you obtained it.",
      "slides": [
        {
          "id": "slide-17",
          "slideNumber": 17,
          "title": "Use the same commands with stricter evidence controls",
          "eyebrow": "Linux applied to digital forensics",
          "isTitleSlide": false,
          "isSectionDivider": true,
          "partNumber": "Part 2",
          "rawHtml": "<p class=\"part-number\">Part 2</p>\n          <p class=\"eyebrow\">Linux applied to digital forensics</p>\n          <h2>Use the same commands with stricter evidence controls</h2>\n          <p class=\"section-summary\">Now the goal is not only to get an answer—it is to preserve and explain how you obtained it.</p>",
          "cleanText": "Part 2 Linux applied to digital forensics Use the same commands with stricter evidence controls Now the goal is not only to get an answer—it is to preserve and explain how you obtained it.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-18",
          "slideNumber": 18,
          "title": "Kali is a toolbox—not a guarantee of forensic soundness",
          "eyebrow": "Start with the right mental model",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Start with the right mental model</p>\n          <h2>Kali is a toolbox—not a guarantee of forensic soundness</h2>\n          <div class=\"split\">\n            <div>\n              <ul class=\"compact\">\n                <li>Kali Live includes a forensic boot mode that avoids automatic mounting and swap use.</li>\n                <li><code>kali-tools-forensics</code> installs Kali’s current forensic tool collection.</li>\n                <li>You still own every mount, command, destination, and interpretation.</li>\n              </ul>\n            </div>\n            <div class=\"callout warning\">\n              <strong>Validate your tools</strong>\n              <span>Test versions and behavior on known data before using them in casework.</span>\n            </div>\n          </div>\n          <aside class=\"notes\">[Sources]\n- https://www.kali.org/docs/general-use/kali-linux-forensics-mode/\n- https://www.kali.org/tools/kali-meta/\n[/Sources]</aside>",
          "cleanText": "Start with the right mental model Kali is a toolbox—not a guarantee of forensic soundness Kali Live includes a forensic boot mode that avoids automatic mounting and swap use. kali-tools-forensics installs Kali’s current forensic tool collection. You still own every mount, command, destination, and interpretation. Validate your tools Test versions and behavior on known data before using them in casework. [Sources] - https://www.kali.org/docs/general-use/kali-linux-forensics-mode/ - https://www.kali.org/tools/kali-meta/ [/Sources]",
          "codeSnippets": [],
          "tables": [],
          "sources": [
            "https://www.kali.org/docs/general-use/kali-linux-forensics-mode/",
            "https://www.kali.org/tools/kali-meta/"
          ],
          "images": []
        },
        {
          "id": "slide-19",
          "slideNumber": 19,
          "title": "Protect first; interpret later",
          "eyebrow": "A forensic workflow",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">A forensic workflow</p>\n          <h2>Protect first; interpret later</h2>\n          <div class=\"workflow\" aria-label=\"Forensic workflow\">\n            <div><b>01</b><strong>Prepare</strong><span>Authority, notes, clean storage</span></div>\n            <div><b>02</b><strong>Acquire</strong><span>Write-blocked source to image</span></div>\n            <div><b>03</b><strong>Verify</strong><span>Hashes, logs, tool versions</span></div>\n            <div><b>04</b><strong>Examine</strong><span>Read-only copy; focused queries</span></div>\n            <div><b>05</b><strong>Report</strong><span>Commands, findings, limitations</span></div>\n          </div>\n          <p class=\"bottom-line\">If the original changes, later analysis cannot undo it.</p>\n          <aside class=\"notes\">[Sources]\n- https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875\n[/Sources]</aside>",
          "cleanText": "A forensic workflow Protect first; interpret later 01 Prepare Authority, notes, clean storage 02 Acquire Write-blocked source to image 03 Verify Hashes, logs, tool versions 04 Examine Read-only copy; focused queries 05 Report Commands, findings, limitations If the original changes, later analysis cannot undo it. [Sources] - https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875 [/Sources]",
          "codeSnippets": [],
          "tables": [],
          "sources": [
            "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875"
          ],
          "images": []
        },
        {
          "id": "slide-20",
          "slideNumber": 20,
          "title": "Build a clean case workspace",
          "eyebrow": "Before connecting evidence",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Before connecting evidence</p>\n          <h2>Build a clean case workspace</h2>\n          <pre><code class=\"bash\">case_id=\"2026-017\"\ncase_root=\"/cases/$case_id\"\n\numask 077\nmkdir -p \"$case_root\"/{images,hashes,logs,exports,notes}\ndate -u +'%Y-%m-%dT%H:%M:%SZ' | tee \"$case_root/notes/opened.txt\"\nfind \"$case_root\" -maxdepth 1 -type d -printf '%f\\n' | sort</code></pre>\n          <div class=\"two-notes\">\n            <span><strong>Quote variables</strong> so spaces and wildcards do not change meaning.</span>\n            <span><strong>Write logs beside the image</strong>, never onto the evidence device.</span>\n          </div>",
          "cleanText": "Before connecting evidence Build a clean case workspace case_id=\"2026-017\" case_root=\"/cases/$case_id\" umask 077 mkdir -p \"$case_root\"/{images,hashes,logs,exports,notes} date -u +'%Y-%m-%dT%H:%M:%SZ' | tee \"$case_root/notes/opened.txt\" find \"$case_root\" -maxdepth 1 -type d -printf '%f\\n' | sort Quote variables so spaces and wildcards do not change meaning. Write logs beside the image , never onto the evidence device.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "case_id=\"2026-017\"\ncase_root=\"/cases/$case_id\"\n\numask 077\nmkdir -p \"$case_root\"/{images,hashes,logs,exports,notes}\ndate -u +'%Y-%m-%dT%H:%M:%SZ' | tee \"$case_root/notes/opened.txt\"\nfind \"$case_root\" -maxdepth 1 -type d -printf '%f\\n' | sort"
            }
          ],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-21",
          "slideNumber": 21,
          "title": "Record the session while you work",
          "eyebrow": "Reproducibility",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Reproducibility</p>\n          <h2>Record the session while you work</h2>\n          <pre><code class=\"bash\">export TZ=UTC\nexport HISTTIMEFORMAT='%F %T %z '\n\nscript -aqf \"$case_root/logs/terminal-$(date -u +%Y%m%dT%H%M%SZ).log\"\n\ndate -u\nuname -a\nprintf 'Operator: %s\\n' \"$USER\"\n# Type exit when the recorded session is complete.</code></pre>\n          <p class=\"caveat\"><code>script</code> improves traceability; it does not replace case notes or tool-generated logs.</p>\n          <aside class=\"notes\">[Sources]\n- https://man7.org/linux/man-pages/man1/script.1.html\n[/Sources]</aside>",
          "cleanText": "Reproducibility Record the session while you work export TZ=UTC export HISTTIMEFORMAT='%F %T %z ' script -aqf \"$case_root/logs/terminal-$(date -u +%Y%m%dT%H%M%SZ).log\" date -u uname -a printf 'Operator: %s\\n' \"$USER\" # Type exit when the recorded session is complete. script improves traceability; it does not replace case notes or tool-generated logs. [Sources] - https://man7.org/linux/man-pages/man1/script.1.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "export TZ=UTC\nexport HISTTIMEFORMAT='%F %T %z '\n\nscript -aqf \"$case_root/logs/terminal-$(date -u +%Y%m%dT%H%M%SZ).log\"\n\ndate -u\nuname -a\nprintf 'Operator: %s\\n' \"$USER\"\n# Type exit when the recorded session is complete."
            }
          ],
          "tables": [],
          "caveat": "script improves traceability; it does not replace case notes or tool-generated logs.",
          "sources": [
            "https://man7.org/linux/man-pages/man1/script.1.html"
          ],
          "images": []
        },
        {
          "id": "slide-22",
          "slideNumber": 22,
          "title": "Confirm the source and destination—twice",
          "eyebrow": "Device identification",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Device identification</p>\n          <h2>Confirm the source and destination—twice</h2>\n          <pre><code class=\"bash\">lsblk -e 7 -o NAME,PATH,SIZE,MODEL,SERIAL,TRAN,FSTYPE,MOUNTPOINTS,RO\nfindmnt --real\n\n# Replace sdX only after matching model, serial, and size.\nudevadm info --query=property --name=/dev/sdX |\n  grep -E '^(ID_MODEL|ID_SERIAL|ID_BUS)='\n\nsudo blockdev --getro /dev/sdX</code></pre>\n          <div class=\"callout danger\"><strong>Stop on ambiguity.</strong><span>A wrong <code>of=</code> or output path can destroy evidence or the examiner’s disk.</span></div>\n          <aside class=\"notes\">[Sources]\n- https://man7.org/linux/man-pages/man8/lsblk.8.html\n- https://man7.org/linux/man-pages/man8/blockdev.8.html\n[/Sources]</aside>",
          "cleanText": "Device identification Confirm the source and destination—twice lsblk -e 7 -o NAME,PATH,SIZE,MODEL,SERIAL,TRAN,FSTYPE,MOUNTPOINTS,RO findmnt --real # Replace sdX only after matching model, serial, and size. udevadm info --query=property --name=/dev/sdX | grep -E '^(ID_MODEL|ID_SERIAL|ID_BUS)=' sudo blockdev --getro /dev/sdX Stop on ambiguity. A wrong of= or output path can destroy evidence or the examiner’s disk. [Sources] - https://man7.org/linux/man-pages/man8/lsblk.8.html - https://man7.org/linux/man-pages/man8/blockdev.8.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "lsblk -e 7 -o NAME,PATH,SIZE,MODEL,SERIAL,TRAN,FSTYPE,MOUNTPOINTS,RO\nfindmnt --real\n\n# Replace sdX only after matching model, serial, and size.\nudevadm info --query=property --name=/dev/sdX |\n  grep -E '^(ID_MODEL|ID_SERIAL|ID_BUS)='\n\nsudo blockdev --getro /dev/sdX"
            }
          ],
          "tables": [],
          "sources": [
            "https://man7.org/linux/man-pages/man8/lsblk.8.html",
            "https://man7.org/linux/man-pages/man8/blockdev.8.html"
          ],
          "images": []
        },
        {
          "id": "slide-23",
          "slideNumber": 23,
          "title": "Use a resumable map when media may be damaged",
          "eyebrow": "Acquisition",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Acquisition</p>\n          <h2>Use a resumable map when media may be damaged</h2>\n          <pre><code class=\"bash\">source_dev=\"/dev/sdX\"\nimage=\"$case_root/images/disk01.raw\"\nmap=\"$case_root/logs/disk01.map\"\n\n# Fast first pass: copy readable areas without retries.\nsudo ddrescue -n \"$source_dev\" \"$image\" \"$map\"\n\n# Controlled retry pass; the map makes it resumable.\nsudo ddrescue -d -r3 \"$source_dev\" \"$image\" \"$map\"</code></pre>\n          <p class=\"caveat\">Use a tested hardware write blocker where the evidence and procedure require it. Keep the mapfile.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.gnu.org/software/ddrescue/manual/ddrescue_manual.html\n- https://www.nist.gov/system/files/documents/2017/05/09/hwb-v2-post-19-may-04.pdf\n[/Sources]</aside>",
          "cleanText": "Acquisition Use a resumable map when media may be damaged source_dev=\"/dev/sdX\" image=\"$case_root/images/disk01.raw\" map=\"$case_root/logs/disk01.map\" # Fast first pass: copy readable areas without retries. sudo ddrescue -n \"$source_dev\" \"$image\" \"$map\" # Controlled retry pass; the map makes it resumable. sudo ddrescue -d -r3 \"$source_dev\" \"$image\" \"$map\" Use a tested hardware write blocker where the evidence and procedure require it. Keep the mapfile. [Sources] - https://www.gnu.org/software/ddrescue/manual/ddrescue_manual.html - https://www.nist.gov/system/files/documents/2017/05/09/hwb-v2-post-19-may-04.pdf [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "source_dev=\"/dev/sdX\"\nimage=\"$case_root/images/disk01.raw\"\nmap=\"$case_root/logs/disk01.map\"\n\n# Fast first pass: copy readable areas without retries.\nsudo ddrescue -n \"$source_dev\" \"$image\" \"$map\"\n\n# Controlled retry pass; the map makes it resumable.\nsudo ddrescue -d -r3 \"$source_dev\" \"$image\" \"$map\""
            }
          ],
          "tables": [],
          "caveat": "Use a tested hardware write blocker where the evidence and procedure require it. Keep the mapfile.",
          "sources": [
            "https://www.gnu.org/software/ddrescue/manual/ddrescue_manual.html",
            "https://www.nist.gov/system/files/documents/2017/05/09/hwb-v2-post-19-may-04.pdf"
          ],
          "images": []
        },
        {
          "id": "slide-24",
          "slideNumber": 24,
          "title": "A hash identifies the image you actually examined",
          "eyebrow": "Verification",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Verification</p>\n          <h2>A hash identifies the image you actually examined</h2>\n          <pre><code class=\"bash\">image=\"$case_root/images/disk01.raw\"\nhashfile=\"$case_root/hashes/disk01.raw.sha256\"\n\nsha256sum \"$image\" | tee \"$hashfile\"\n\n# Recheck after transfer, before analysis, and before delivery.\n(cd \"$(dirname \"$image\")\" &amp;&amp; sha256sum -c \"$hashfile\")\n\nsha256sum --version | head -n 1 | tee -a \"$case_root/logs/tool-versions.txt\"</code></pre>\n          <div class=\"two-notes\">\n            <span><strong>Matching hashes</strong> show two byte streams are identical.</span>\n            <span><strong>They do not prove</strong> the acquisition process was complete or correctly authorized.</span>\n          </div>\n          <aside class=\"notes\">[Sources]\n- https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html\n- https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875\n[/Sources]</aside>",
          "cleanText": "Verification A hash identifies the image you actually examined image=\"$case_root/images/disk01.raw\" hashfile=\"$case_root/hashes/disk01.raw.sha256\" sha256sum \"$image\" | tee \"$hashfile\" # Recheck after transfer, before analysis, and before delivery. (cd \"$(dirname \"$image\")\" && sha256sum -c \"$hashfile\") sha256sum --version | head -n 1 | tee -a \"$case_root/logs/tool-versions.txt\" Matching hashes show two byte streams are identical. They do not prove the acquisition process was complete or correctly authorized. [Sources] - https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html - https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875 [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "image=\"$case_root/images/disk01.raw\"\nhashfile=\"$case_root/hashes/disk01.raw.sha256\"\n\nsha256sum \"$image\" | tee \"$hashfile\"\n\n# Recheck after transfer, before analysis, and before delivery.\n(cd \"$(dirname \"$image\")\" && sha256sum -c \"$hashfile\")\n\nsha256sum --version | head -n 1 | tee -a \"$case_root/logs/tool-versions.txt\""
            }
          ],
          "tables": [],
          "sources": [
            "https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html",
            "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875"
          ],
          "images": []
        },
        {
          "id": "slide-25",
          "slideNumber": 25,
          "title": "Inspect the container before mounting anything",
          "eyebrow": "Image anatomy",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Image anatomy</p>\n          <h2>Inspect the container before mounting anything</h2>\n          <pre><code class=\"bash\">image=\"$case_root/images/disk01.raw\"\n\nfile \"$image\"\nmmls \"$image\"\n\n# Example: mmls reports a filesystem starting at sector 2048.\nfsstat -o 2048 \"$image\" | less\n\n# List the root directory without mounting the image.\nfls -p -o 2048 \"$image\"</code></pre>\n          <p class=\"caveat\"><code>mmls</code> reports partition start sectors; pass the relevant start value to filesystem tools with <code>-o</code>.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.sleuthkit.org/sleuthkit/man/mmls.html\n- https://www.sleuthkit.org/sleuthkit/man/fsstat.html\n- https://www.sleuthkit.org/sleuthkit/man/fls.html\n[/Sources]</aside>",
          "cleanText": "Image anatomy Inspect the container before mounting anything image=\"$case_root/images/disk01.raw\" file \"$image\" mmls \"$image\" # Example: mmls reports a filesystem starting at sector 2048. fsstat -o 2048 \"$image\" | less # List the root directory without mounting the image. fls -p -o 2048 \"$image\" mmls reports partition start sectors; pass the relevant start value to filesystem tools with -o . [Sources] - https://www.sleuthkit.org/sleuthkit/man/mmls.html - https://www.sleuthkit.org/sleuthkit/man/fsstat.html - https://www.sleuthkit.org/sleuthkit/man/fls.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "image=\"$case_root/images/disk01.raw\"\n\nfile \"$image\"\nmmls \"$image\"\n\n# Example: mmls reports a filesystem starting at sector 2048.\nfsstat -o 2048 \"$image\" | less\n\n# List the root directory without mounting the image.\nfls -p -o 2048 \"$image\""
            }
          ],
          "tables": [],
          "caveat": "mmls reports partition start sectors; pass the relevant start value to filesystem tools with -o .",
          "sources": [
            "https://www.sleuthkit.org/sleuthkit/man/mmls.html",
            "https://www.sleuthkit.org/sleuthkit/man/fsstat.html",
            "https://www.sleuthkit.org/sleuthkit/man/fls.html"
          ],
          "images": []
        },
        {
          "id": "slide-26",
          "slideNumber": 26,
          "title": "Read-only must be verified, not assumed",
          "eyebrow": "Filesystem access",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Filesystem access</p>\n          <h2>Read-only must be verified, not assumed</h2>\n          <pre><code class=\"bash\">image=\"$case_root/images/disk01.raw\"\n\nloopdev=$(sudo losetup --find --show --read-only --partscan \"$image\")\nsudo blockdev --getro \"$loopdev\"\nlsblk -o NAME,PATH,FSTYPE,MOUNTPOINTS,RO \"$loopdev\"\n\n# ext3/ext4: noload prevents journal replay.\nsudo mount -o ro,noload \"${loopdev}p2\" /mnt/evidence\nfindmnt -no SOURCE,FSTYPE,OPTIONS /mnt/evidence</code></pre>\n          <p class=\"caveat\">Mount options are filesystem-specific. Prefer forensic parsers when mounting is unnecessary.</p>\n          <aside class=\"notes\">[Sources]\n- https://man7.org/linux/man-pages/man8/mount.8.html\n- https://man7.org/linux/man-pages/man8/losetup.8.html\n[/Sources]</aside>",
          "cleanText": "Filesystem access Read-only must be verified, not assumed image=\"$case_root/images/disk01.raw\" loopdev=$(sudo losetup --find --show --read-only --partscan \"$image\") sudo blockdev --getro \"$loopdev\" lsblk -o NAME,PATH,FSTYPE,MOUNTPOINTS,RO \"$loopdev\" # ext3/ext4: noload prevents journal replay. sudo mount -o ro,noload \"${loopdev}p2\" /mnt/evidence findmnt -no SOURCE,FSTYPE,OPTIONS /mnt/evidence Mount options are filesystem-specific. Prefer forensic parsers when mounting is unnecessary. [Sources] - https://man7.org/linux/man-pages/man8/mount.8.html - https://man7.org/linux/man-pages/man8/losetup.8.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "image=\"$case_root/images/disk01.raw\"\n\nloopdev=$(sudo losetup --find --show --read-only --partscan \"$image\")\nsudo blockdev --getro \"$loopdev\"\nlsblk -o NAME,PATH,FSTYPE,MOUNTPOINTS,RO \"$loopdev\"\n\n# ext3/ext4: noload prevents journal replay.\nsudo mount -o ro,noload \"${loopdev}p2\" /mnt/evidence\nfindmnt -no SOURCE,FSTYPE,OPTIONS /mnt/evidence"
            }
          ],
          "tables": [],
          "caveat": "Mount options are filesystem-specific. Prefer forensic parsers when mounting is unnecessary.",
          "sources": [
            "https://man7.org/linux/man-pages/man8/mount.8.html",
            "https://man7.org/linux/man-pages/man8/losetup.8.html"
          ],
          "images": []
        },
        {
          "id": "slide-27",
          "slideNumber": 27,
          "title": "Ask what a file is before trusting its name",
          "eyebrow": "File triage",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">File triage</p>\n          <h2>Ask what a file is before trusting its name</h2>\n          <pre><code class=\"bash\">artifact=\"/mnt/evidence/home/user/Downloads/report.pdf\"\n\nfile \"$artifact\"\nstat --printf='%A %a %U:%G %s bytes\\n%w birth\\n%y modified\\n%z changed\\n' \"$artifact\"\nsha256sum \"$artifact\"\nxxd -l 64 \"$artifact\"\nstrings -a -n 8 \"$artifact\" | head\nexiftool -time:all -G1 -a \"$artifact\"</code></pre>\n          <p class=\"caveat\">Extension, MIME signature, metadata, and content may disagree. That disagreement is a lead—not a conclusion.</p>",
          "cleanText": "File triage Ask what a file is before trusting its name artifact=\"/mnt/evidence/home/user/Downloads/report.pdf\" file \"$artifact\" stat --printf='%A %a %U:%G %s bytes\\n%w birth\\n%y modified\\n%z changed\\n' \"$artifact\" sha256sum \"$artifact\" xxd -l 64 \"$artifact\" strings -a -n 8 \"$artifact\" | head exiftool -time:all -G1 -a \"$artifact\" Extension, MIME signature, metadata, and content may disagree. That disagreement is a lead—not a conclusion.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "artifact=\"/mnt/evidence/home/user/Downloads/report.pdf\"\n\nfile \"$artifact\"\nstat --printf='%A %a %U:%G %s bytes\\n%w birth\\n%y modified\\n%z changed\\n' \"$artifact\"\nsha256sum \"$artifact\"\nxxd -l 64 \"$artifact\"\nstrings -a -n 8 \"$artifact\" | head\nexiftool -time:all -G1 -a \"$artifact\""
            }
          ],
          "tables": [],
          "caveat": "Extension, MIME signature, metadata, and content may disagree. That disagreement is a lead—not a conclusion.",
          "images": []
        },
        {
          "id": "slide-28",
          "slideNumber": 28,
          "title": "Constrain searches by scope, type, and time",
          "eyebrow": "Artifact discovery",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Artifact discovery</p>\n          <h2>Constrain searches by scope, type, and time</h2>\n          <pre><code class=\"bash\">root=\"/mnt/evidence\"\n\n# Stay on one filesystem and preserve full paths.\nfind \"$root\" -xdev -type f -printf '%T@\\t%s\\t%p\\n' |\n  sort -n &gt; \"$case_root/exports/files-by-mtime.tsv\"\n\n# Files modified during a defined UTC window.\nfind \"$root\" -xdev -type f \\\n  -newermt '2026-08-01 00:00:00 UTC' ! -newermt '2026-08-02 00:00:00 UTC'\n\n# Text search without treating binary files as text.\ngrep -RIna --binary-files=without-match 'api[_-]\\?key' \"$root/etc\"</code></pre>\n          <p class=\"caveat\">Search results are candidates. Preserve context and validate each hit.</p>",
          "cleanText": "Artifact discovery Constrain searches by scope, type, and time root=\"/mnt/evidence\" # Stay on one filesystem and preserve full paths. find \"$root\" -xdev -type f -printf '%T@\\t%s\\t%p\\n' | sort -n > \"$case_root/exports/files-by-mtime.tsv\" # Files modified during a defined UTC window. find \"$root\" -xdev -type f \\ -newermt '2026-08-01 00:00:00 UTC' ! -newermt '2026-08-02 00:00:00 UTC' # Text search without treating binary files as text. grep -RIna --binary-files=without-match 'api[_-]\\?key' \"$root/etc\" Search results are candidates. Preserve context and validate each hit.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "root=\"/mnt/evidence\"\n\n# Stay on one filesystem and preserve full paths.\nfind \"$root\" -xdev -type f -printf '%T@\\t%s\\t%p\\n' |\n  sort -n > \"$case_root/exports/files-by-mtime.tsv\"\n\n# Files modified during a defined UTC window.\nfind \"$root\" -xdev -type f \\\n  -newermt '2026-08-01 00:00:00 UTC' ! -newermt '2026-08-02 00:00:00 UTC'\n\n# Text search without treating binary files as text.\ngrep -RIna --binary-files=without-match 'api[_-]\\?key' \"$root/etc\""
            }
          ],
          "tables": [],
          "caveat": "Search results are candidates. Preserve context and validate each hit.",
          "images": []
        },
        {
          "id": "slide-29",
          "slideNumber": 29,
          "title": "Extract by metadata address without mounting",
          "eyebrow": "Filesystem forensics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Filesystem forensics</p>\n          <h2>Extract by metadata address without mounting</h2>\n          <pre><code class=\"bash\">image=\"$case_root/images/disk01.raw\"\noffset=2048\n\n# Include deleted entries and full paths.\nfls -r -d -p -o \"$offset\" \"$image\" &gt; \"$case_root/exports/deleted-files.txt\"\n\n# Inspect metadata, then recover the file content.\nistat -o \"$offset\" \"$image\" 128\nicat -o \"$offset\" \"$image\" 128 &gt; \"$case_root/exports/recovered-128.bin\"\nsha256sum \"$case_root/exports/recovered-128.bin\"</code></pre>\n          <p class=\"caveat\">Replace <code>128</code> with the metadata address reported by <code>fls</code>. Record the command and hash the export.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.sleuthkit.org/sleuthkit/man/fls.html\n- https://www.sleuthkit.org/sleuthkit/man/istat.html\n- https://www.sleuthkit.org/sleuthkit/man/icat.html\n[/Sources]</aside>",
          "cleanText": "Filesystem forensics Extract by metadata address without mounting image=\"$case_root/images/disk01.raw\" offset=2048 # Include deleted entries and full paths. fls -r -d -p -o \"$offset\" \"$image\" > \"$case_root/exports/deleted-files.txt\" # Inspect metadata, then recover the file content. istat -o \"$offset\" \"$image\" 128 icat -o \"$offset\" \"$image\" 128 > \"$case_root/exports/recovered-128.bin\" sha256sum \"$case_root/exports/recovered-128.bin\" Replace 128 with the metadata address reported by fls . Record the command and hash the export. [Sources] - https://www.sleuthkit.org/sleuthkit/man/fls.html - https://www.sleuthkit.org/sleuthkit/man/istat.html - https://www.sleuthkit.org/sleuthkit/man/icat.html [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "image=\"$case_root/images/disk01.raw\"\noffset=2048\n\n# Include deleted entries and full paths.\nfls -r -d -p -o \"$offset\" \"$image\" > \"$case_root/exports/deleted-files.txt\"\n\n# Inspect metadata, then recover the file content.\nistat -o \"$offset\" \"$image\" 128\nicat -o \"$offset\" \"$image\" 128 > \"$case_root/exports/recovered-128.bin\"\nsha256sum \"$case_root/exports/recovered-128.bin\""
            }
          ],
          "tables": [],
          "caveat": "Replace 128 with the metadata address reported by fls . Record the command and hash the export.",
          "sources": [
            "https://www.sleuthkit.org/sleuthkit/man/fls.html",
            "https://www.sleuthkit.org/sleuthkit/man/istat.html",
            "https://www.sleuthkit.org/sleuthkit/man/icat.html"
          ],
          "images": []
        },
        {
          "id": "slide-30",
          "slideNumber": 30,
          "title": "A timestamp needs a field, clock, and provenance",
          "eyebrow": "Time analysis",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Time analysis</p>\n          <h2>A timestamp needs a field, clock, and provenance</h2>\n          <div class=\"split timestamp-grid\">\n            <div>\n              <dl>\n                <dt>mtime</dt><dd>file content changed</dd>\n                <dt>ctime</dt><dd>inode metadata changed</dd>\n                <dt>atime</dt><dd>file accessed; often suppressed or coarse</dd>\n                <dt>btime</dt><dd>birth/creation time, when supported</dd>\n              </dl>\n            </div>\n            <div>\n              <pre><code class=\"bash\">export TZ=UTC\n\nstat -c '%n\nmtime=%y\nctime=%z\natime=%x\nbtime=%w' suspicious.bin\n\ndate -u +'%FT%TZ'</code></pre>\n            </div>\n          </div>\n          <p class=\"caveat\">Record the source timezone and clock skew. Timestamps can be altered; corroborate them with logs and other artifacts.</p>",
          "cleanText": "Time analysis A timestamp needs a field, clock, and provenance mtime file content changed ctime inode metadata changed atime file accessed; often suppressed or coarse btime birth/creation time, when supported export TZ=UTC stat -c '%n mtime=%y ctime=%z atime=%x btime=%w' suspicious.bin date -u +'%FT%TZ' Record the source timezone and clock skew. Timestamps can be altered; corroborate them with logs and other artifacts.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "export TZ=UTC\n\nstat -c '%n\nmtime=%y\nctime=%z\natime=%x\nbtime=%w' suspicious.bin\n\ndate -u +'%FT%TZ'"
            }
          ],
          "tables": [],
          "caveat": "Record the source timezone and clock skew. Timestamps can be altered; corroborate them with logs and other artifacts.",
          "images": []
        },
        {
          "id": "slide-31",
          "slideNumber": 31,
          "title": "Normalize time before correlating events",
          "eyebrow": "Log analysis",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Log analysis</p>\n          <h2>Normalize time before correlating events</h2>\n          <pre><code class=\"bash\"># Offline systemd journal copied or mounted from the image.\njournalctl --directory=/mnt/evidence/var/log/journal \\\n  --utc --since '2026-08-01 00:00:00' --until '2026-08-02 00:00:00'\n\n# Rotated text logs.\nzgrep -h 'Failed password' /mnt/evidence/var/log/auth.log*.gz\ngrep  -h 'Failed password' /mnt/evidence/var/log/auth.log*\n\n# Structured JSON logs.\njq -r 'select(.level == \"error\") | [.time,.host,.message] | @tsv' app.jsonl</code></pre>\n          <p class=\"caveat\">Retain the original logs. Export filtered views as derived evidence and record the filter.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.freedesktop.org/software/systemd/man/latest/journalctl.html\n- https://jqlang.org/manual/\n[/Sources]</aside>",
          "cleanText": "Log analysis Normalize time before correlating events # Offline systemd journal copied or mounted from the image. journalctl --directory=/mnt/evidence/var/log/journal \\ --utc --since '2026-08-01 00:00:00' --until '2026-08-02 00:00:00' # Rotated text logs. zgrep -h 'Failed password' /mnt/evidence/var/log/auth.log*.gz grep -h 'Failed password' /mnt/evidence/var/log/auth.log* # Structured JSON logs. jq -r 'select(.level == \"error\") | [.time,.host,.message] | @tsv' app.jsonl Retain the original logs. Export filtered views as derived evidence and record the filter. [Sources] - https://www.freedesktop.org/software/systemd/man/latest/journalctl.html - https://jqlang.org/manual/ [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "# Offline systemd journal copied or mounted from the image.\njournalctl --directory=/mnt/evidence/var/log/journal \\\n  --utc --since '2026-08-01 00:00:00' --until '2026-08-02 00:00:00'\n\n# Rotated text logs.\nzgrep -h 'Failed password' /mnt/evidence/var/log/auth.log*.gz\ngrep  -h 'Failed password' /mnt/evidence/var/log/auth.log*\n\n# Structured JSON logs.\njq -r 'select(.level == \"error\") | [.time,.host,.message] | @tsv' app.jsonl"
            }
          ],
          "tables": [],
          "caveat": "Retain the original logs. Export filtered views as derived evidence and record the filter.",
          "sources": [
            "https://www.freedesktop.org/software/systemd/man/latest/journalctl.html",
            "https://jqlang.org/manual/"
          ],
          "images": []
        },
        {
          "id": "slide-32",
          "slideNumber": 32,
          "title": "Collect volatile data before powering down",
          "eyebrow": "Live response is a different path",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Live response is a different path</p>\n          <h2>Collect volatile data before powering down</h2>\n          <pre><code class=\"bash\">out=\"$case_root/logs/live-$(hostname)-$(date -u +%Y%m%dT%H%M%SZ).txt\"\n\n{\n  date -u\n  uptime\n  who -a\n  ps auxww\n  ss -plant\n  ip address show\n  ip route show\n  lsof -nP\n} | tee \"$out\"\n</code></pre>\n          <p class=\"caveat\">Collect only what the incident and your approved procedure require. Save output to controlled storage—not the suspect disk.</p>\n          <aside class=\"notes\">[Sources]\n- https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875\n[/Sources]</aside>",
          "cleanText": "Live response is a different path Collect volatile data before powering down out=\"$case_root/logs/live-$(hostname)-$(date -u +%Y%m%dT%H%M%SZ).txt\" { date -u uptime who -a ps auxww ss -plant ip address show ip route show lsof -nP } | tee \"$out\" Collect only what the incident and your approved procedure require. Save output to controlled storage—not the suspect disk. [Sources] - https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875 [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "out=\"$case_root/logs/live-$(hostname)-$(date -u +%Y%m%dT%H%M%SZ).txt\"\n\n{\n  date -u\n  uptime\n  who -a\n  ps auxww\n  ss -plant\n  ip address show\n  ip route show\n  lsof -nP\n} | tee \"$out\""
            }
          ],
          "tables": [],
          "caveat": "Collect only what the incident and your approved procedure require. Save output to controlled storage—not the suspect disk.",
          "sources": [
            "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875"
          ],
          "images": []
        },
        {
          "id": "slide-33",
          "slideNumber": 33,
          "title": "Document the disturbance you introduce",
          "eyebrow": "Live response",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Live response</p>\n          <h2>Document the disturbance you introduce</h2>\n          <div class=\"split live-response-guidance\">\n            <div>\n              <ul class=\"compact\">\n                <li>Follow an approved order of volatility.</li>\n                <li>Record UTC time, operator, host, command, and destination.</li>\n                <li>Note failed commands and missing privileges; do not silently retry.</li>\n                <li>Preserve the original output and hash it immediately.</li>\n              </ul>\n              <pre><code class=\"bash\">sha256sum \"$out\" | tee \"$out.sha256\"\ndate -u +'%FT%TZ' | tee -a \"$case_root/notes/live-response.txt\"\nprintf 'Host=%s  Operator=%s\\n' \"$(hostname)\" \"$USER\" |\n  tee -a \"$case_root/notes/live-response.txt\"</code></pre>\n            </div>\n            <div class=\"callout warning\">\n              <strong>Every live command changes state.</strong>\n              <span>Explain why the expected evidentiary value outweighed that disturbance.</span>\n            </div>\n          </div>\n          <aside class=\"notes\">[Sources]\n- https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875\n[/Sources]</aside>",
          "cleanText": "Live response Document the disturbance you introduce Follow an approved order of volatility. Record UTC time, operator, host, command, and destination. Note failed commands and missing privileges; do not silently retry. Preserve the original output and hash it immediately. sha256sum \"$out\" | tee \"$out.sha256\" date -u +'%FT%TZ' | tee -a \"$case_root/notes/live-response.txt\" printf 'Host=%s Operator=%s\\n' \"$(hostname)\" \"$USER\" | tee -a \"$case_root/notes/live-response.txt\" Every live command changes state. Explain why the expected evidentiary value outweighed that disturbance. [Sources] - https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875 [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "sha256sum \"$out\" | tee \"$out.sha256\"\ndate -u +'%FT%TZ' | tee -a \"$case_root/notes/live-response.txt\"\nprintf 'Host=%s  Operator=%s\\n' \"$(hostname)\" \"$USER\" |\n  tee -a \"$case_root/notes/live-response.txt\""
            }
          ],
          "tables": [],
          "sources": [
            "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875"
          ],
          "images": []
        },
        {
          "id": "slide-34",
          "slideNumber": 34,
          "title": "Install deliberately and record exact versions",
          "eyebrow": "Tool control",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Tool control</p>\n          <h2>Install deliberately and record exact versions</h2>\n          <pre><code class=\"bash\">sudo apt update\nsudo apt install kali-tools-forensics\n\napt-cache policy sleuthkit gddrescue ewf-tools\ndpkg-query -W -f='${Package}\\t${Version}\\n' \\\n  sleuthkit gddrescue ewf-tools | tee \"$case_root/logs/tool-versions.tsv\"\n\nsha256sum /usr/bin/{mmls,fls,icat,ddrescue} \\\n  &gt; \"$case_root/hashes/tool-binaries.sha256\"</code></pre>\n          <p class=\"caveat\">Do not upgrade a validated case workstation mid-examination without recording and justifying the change.</p>\n          <aside class=\"notes\">[Sources]\n- https://www.kali.org/tools/kali-meta/\n- https://www.kali.org/docs/general-use/metapackages/\n[/Sources]</aside>",
          "cleanText": "Tool control Install deliberately and record exact versions sudo apt update sudo apt install kali-tools-forensics apt-cache policy sleuthkit gddrescue ewf-tools dpkg-query -W -f='${Package}\\t${Version}\\n' \\ sleuthkit gddrescue ewf-tools | tee \"$case_root/logs/tool-versions.tsv\" sha256sum /usr/bin/{mmls,fls,icat,ddrescue} \\ > \"$case_root/hashes/tool-binaries.sha256\" Do not upgrade a validated case workstation mid-examination without recording and justifying the change. [Sources] - https://www.kali.org/tools/kali-meta/ - https://www.kali.org/docs/general-use/metapackages/ [/Sources]",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "sudo apt update\nsudo apt install kali-tools-forensics\n\napt-cache policy sleuthkit gddrescue ewf-tools\ndpkg-query -W -f='${Package}\\t${Version}\\n' \\\n  sleuthkit gddrescue ewf-tools | tee \"$case_root/logs/tool-versions.tsv\"\n\nsha256sum /usr/bin/{mmls,fls,icat,ddrescue} \\\n  > \"$case_root/hashes/tool-binaries.sha256\""
            }
          ],
          "tables": [],
          "caveat": "Do not upgrade a validated case workstation mid-examination without recording and justifying the change.",
          "sources": [
            "https://www.kali.org/tools/kali-meta/",
            "https://www.kali.org/docs/general-use/metapackages/"
          ],
          "images": []
        },
        {
          "id": "slide-35",
          "slideNumber": 35,
          "title": "Read three login messages",
          "eyebrow": "Beginner activity",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Beginner activity</p>\n          <h2>Read three login messages</h2>\n          <p class=\"scenario\"><strong>Scenario:</strong> These lines came from a Linux login log. Read them from top to bottom.</p>\n          <pre class=\"log-sample\"><code class=\"text\">09:14:02  Failed password for alex from 203.0.113.42\n09:14:11  Failed password for alex from 203.0.113.42\n09:15:03  Accepted password for alex from 203.0.113.42</code></pre>\n          <div class=\"activity-prompts beginner-prompts\">\n            <span><b>1</b> What username was used?</span>\n            <span><b>2</b> What was the source IP?</span>\n            <span><b>3</b> How many attempts failed?</span>\n            <span><b>4</b> When did a login succeed?</span>\n          </div>\n          <aside class=\"notes\">The IP addresses use documentation-only ranges.\n\n[Sources]\n- https://www.rfc-editor.org/rfc/rfc5737\n[/Sources]</aside>",
          "cleanText": "Beginner activity Read three login messages Scenario: These lines came from a Linux login log. Read them from top to bottom. 09:14:02 Failed password for alex from 203.0.113.42 09:14:11 Failed password for alex from 203.0.113.42 09:15:03 Accepted password for alex from 203.0.113.42 1 What username was used? 2 What was the source IP? 3 How many attempts failed? 4 When did a login succeed? The IP addresses use documentation-only ranges. [Sources] - https://www.rfc-editor.org/rfc/rfc5737 [/Sources]",
          "codeSnippets": [
            {
              "language": "text",
              "code": "09:14:02  Failed password for alex from 203.0.113.42\n09:14:11  Failed password for alex from 203.0.113.42\n09:15:03  Accepted password for alex from 203.0.113.42"
            }
          ],
          "tables": [],
          "speakerNotes": [
            "The IP addresses use documentation-only ranges."
          ],
          "sources": [
            "https://www.rfc-editor.org/rfc/rfc5737"
          ],
          "images": []
        },
        {
          "id": "slide-36",
          "slideNumber": 36,
          "title": "Describe only what the messages show",
          "eyebrow": "Activity answers",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Activity answers</p>\n          <h2>Describe only what the messages show</h2>\n          <div class=\"split simulation-debrief\">\n            <div>\n              <h3>What we can say</h3>\n              <ul class=\"compact\">\n                <li>Username: <code>alex</code></li>\n                <li>Source IP: <code>203.0.113.42</code></li>\n                <li>Two failed attempts</li>\n                <li>One successful login at <code>09:15:03</code></li>\n              </ul>\n            </div>\n            <div>\n              <h3>What we cannot say yet</h3>\n              <ul class=\"compact\">\n                <li>Who was using the source computer</li>\n                <li>Whether the login was authorized</li>\n                <li>What happened after the login</li>\n              </ul>\n            </div>\n          </div>\n          <pre class=\"debrief-command\"><code class=\"bash\">grep 'Failed password' /assets/mock-auth.log\ngrep -c 'Failed password' /assets/mock-auth.log\ngrep 'Accepted password' /assets/mock-auth.log</code></pre>\n          <p class=\"caveat\"><code>grep</code> displays matching lines. <code>grep -c</code> counts matching lines.</p>",
          "cleanText": "Activity answers Describe only what the messages show What we can say Username: alex Source IP: 203.0.113.42 Two failed attempts One successful login at 09:15:03 What we cannot say yet Who was using the source computer Whether the login was authorized What happened after the login grep 'Failed password' /assets/mock-auth.log grep -c 'Failed password' /assets/mock-auth.log grep 'Accepted password' /assets/mock-auth.log grep displays matching lines. grep -c counts matching lines.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "grep 'Failed password' /assets/mock-auth.log\ngrep -c 'Failed password' /assets/mock-auth.log\ngrep 'Accepted password' /assets/mock-auth.log"
            }
          ],
          "tables": [],
          "caveat": "grep displays matching lines. grep -c counts matching lines.",
          "images": []
        },
        {
          "id": "slide-37",
          "slideNumber": 37,
          "title": "Primary documentation",
          "eyebrow": "Keep these references nearby",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Keep these references nearby</p>\n          <h2>Primary documentation</h2>\n          <ul class=\"resources\">\n            <li><a href=\"https://www.kali.org/docs/general-use/kali-linux-forensics-mode/\" target=\"_blank\">Kali Linux forensic mode</a></li>\n            <li><a href=\"https://www.gnu.org/software/ddrescue/manual/ddrescue_manual.html\" target=\"_blank\">GNU ddrescue manual</a></li>\n            <li><a href=\"https://www.sleuthkit.org/sleuthkit/docs.php\" target=\"_blank\">The Sleuth Kit documentation</a></li>\n            <li><a href=\"https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=50875\" target=\"_blank\">NIST SP 800-86</a></li>\n            <li><a href=\"https://man7.org/linux/man-pages/man8/mount.8.html\" target=\"_blank\">Linux <code>mount(8)</code> manual</a></li>\n          </ul>\n          <p class=\"closing-line\">Protect the source. Verify the copy. Explain every step.</p>",
          "cleanText": "Keep these references nearby Primary documentation Kali Linux forensic mode GNU ddrescue manual The Sleuth Kit documentation NIST SP 800-86 Linux mount(8) manual Protect the source. Verify the copy. Explain every step.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    }
  ]
};
