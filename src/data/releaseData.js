export const APP_NAME = "Desktop Wellbeing";
export const RELEASE_VERSION = "v1.0.1";
export const RELEASE_TAG = "v2";
export const RELEASE_DATE = "September 2026";
export const EXE_FILENAME = "Desktop.Wellbeing.Setup.1.0.1.exe";
export const COMPANY_NAME = "Balanju Solutions";
export const COMPANY_URL = "https://balanju-solutions.vercel.app";
export const COMPANY_TAGLINE = "We Build. We Serve. We Deliver.";
export const GITHUB_REPO = "https://github.com/nayak-codes/Desktop-Wellbeing";
export const GITHUB_RELEASE_URL = "https://github.com/nayak-codes/Desktop-Wellbeing/releases/tag/v2";
export const DIRECT_EXE_DOWNLOAD_URL = "https://github.com/nayak-codes/Desktop-Wellbeing/releases/download/v2/Desktop.Wellbeing.Setup.1.0.1.exe";
export const DIRECT_ZIP_DOWNLOAD_URL = "https://github.com/nayak-codes/Desktop-Wellbeing/archive/refs/tags/v2.zip";

export const DOWNLOAD_OPTIONS = [
  {
    id: "installer",
    title: "Windows Setup (.exe)",
    subtitle: "Official Windows 10 & 11 Installer",
    filename: EXE_FILENAME,
    size: "159 MB",
    type: "Installer (.exe)",
    tag: "Official Release (v2)",
    url: DIRECT_EXE_DOWNLOAD_URL,
    sha256: "61aa34bf8916baa989578e67e8bd6576e33044e1f744e7c75628b082fa3240fb",
    desc: "Complete standalone Windows setup installer with background tracker, system startup, and auto system-tray dashboard.",
    isPrimary: true
  },
  {
    id: "github-release",
    title: "GitHub Release Hub (v2)",
    subtitle: "View Release Notes & Assets",
    filename: "releases/tag/v2",
    size: "Official Hub",
    type: "GitHub Release",
    tag: "Latest Tag v2",
    url: GITHUB_RELEASE_URL,
    sha256: "61aa34bf8916baa989578e67e8bd6576e33044e1f744e7c75628b082fa3240fb",
    desc: "Direct access to the official GitHub Release v2 page with release notes, commit verification, and binary downloads.",
    isPrimary: false
  },
  {
    id: "source-zip",
    title: "Source Code Archive (.zip)",
    subtitle: "Full React + Electron Source",
    filename: "Desktop-Wellbeing-v2.zip",
    size: "Source Package",
    type: "Source (.zip)",
    tag: "MIT Open Source",
    url: DIRECT_ZIP_DOWNLOAD_URL,
    sha256: "61aa34bf8916baa989578e67e8bd6576e33044e1f744e7c75628b082fa3240fb",
    desc: "Download the complete audited source archive. Inspect code or build locally with Node.js and Electron.",
    isPrimary: false
  }
];

export const CLI_COMMANDS = {
  powershell: {
    title: "PowerShell Direct Download & Install",
    cmd: `Invoke-WebRequest -Uri "${DIRECT_EXE_DOWNLOAD_URL}" -OutFile "${EXE_FILENAME}"; .\\${EXE_FILENAME}`
  },
  curl: {
    title: "cURL Download",
    cmd: `curl -L -O "${DIRECT_EXE_DOWNLOAD_URL}"`
  },
  git: {
    title: "Git Clone & Run Dev",
    cmd: "git clone https://github.com/nayak-codes/Desktop-Wellbeing.git && cd Desktop-Wellbeing && npm install && npm run electron:dev"
  }
};

export const CLI_INSTALL_COMMAND = `curl -L -O "${DIRECT_EXE_DOWNLOAD_URL}"`;

export const FAQS = [
  {
    category: "Privacy",
    q: "Is my screen time and activity data private?",
    a: "Yes, 100%. All application tracking, focus metrics, and custom limits are saved strictly in a local SQLite database directly on your computer's SSD. Desktop Wellbeing contains zero telemetry scripts, zero external tracking pixels, and never connects to remote analytics servers."
  },
  {
    category: "Performance",
    q: "Will this impact gaming FPS or slow down heavy IDEs?",
    a: "No. Unlike electron-heavy browser extensions that consume 400MB+ RAM, Desktop Wellbeing is compiled as a lightweight native Windows Win32 background service. It consumes less than 15MB RAM and 0.02% CPU, guaranteeing zero lag during gaming or compilation."
  },
  {
    category: "Features",
    q: "How does the Strict Mode focus lock work?",
    a: "When an un-bypassable Focus Sprint is initiated, Desktop Wellbeing locks the process interceptor. If you try to open restricted apps like YouTube, Discord, or Steam, the window is instantly minimized and replaced with your deep work dashboard until your sprint concludes."
  },
  {
    category: "General",
    q: "Is Desktop Wellbeing free and open source?",
    a: "Yes! Desktop Wellbeing is 100% free and open source under the permissive MIT license. There are no subscriptions, paywalls, premium tiers, or advertising."
  },
  {
    category: "Installation",
    q: "Why does Windows SmartScreen appear on first launch?",
    a: "As an independent open-source release, new versions need time to accumulate Microsoft certificate reputation points. Simply click 'More info' and 'Run anyway' to launch. The complete source code is audited and publicly accessible on GitHub."
  }
];
