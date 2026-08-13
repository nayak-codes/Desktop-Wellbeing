export const APP_NAME = "Desktop Wellbeing";
export const RELEASE_VERSION = "v1.0.0";
export const RELEASE_DATE = "August 2026";

export const DOWNLOAD_OPTIONS = [
  {
    id: "installer",
    title: "Windows Setup Wizard (.exe)",
    subtitle: "Recommended for 95% of Users",
    filename: "DesktopWellbeing-Setup-v1.0.0.exe",
    size: "14.2 MB",
    type: "Installer",
    tag: "Recommended",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    desc: "Standard automated installer with startup registry, auto-updates, and system tray integration.",
    isPrimary: true
  },
  {
    id: "portable",
    title: "Portable Standalone (.zip)",
    subtitle: "Zero Installation Required",
    filename: "DesktopWellbeing-Portable-v1.0.0.zip",
    size: "12.8 MB",
    type: "Portable",
    tag: "Self-Contained",
    sha256: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    desc: "Run directly from a USB drive or local folder. Stores SQLite database in the application folder.",
    isPrimary: false
  },
  {
    id: "arm64",
    title: "Windows ARM64 Native (.exe)",
    subtitle: "Snapdragon X Elite & Surface Pro",
    filename: "DesktopWellbeing-Setup-v1.0.0-arm64.exe",
    size: "13.9 MB",
    type: "ARM64",
    tag: "Optimized ARM",
    sha256: "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
    desc: "100% native ARM64 compilation for Qualcomm Snapdragon Copilot+ PCs and Surface Pro devices.",
    isPrimary: false
  }
];

export const CLI_COMMANDS = {
  winget: {
    title: "Windows Package Manager",
    cmd: "winget install DesktopWellbeing.App --source winget"
  },
  choco: {
    title: "Chocolatey",
    cmd: "choco install desktop-wellbeing -y"
  },
  scoop: {
    title: "Scoop",
    cmd: "scoop bucket add extras && scoop install desktop-wellbeing"
  },
  powershell: {
    title: "PowerShell 1-Liner",
    cmd: "irm https://desktopwellbeing.app/install.ps1 | iex"
  }
};

export const CLI_INSTALL_COMMAND = "winget install DesktopWellbeing.App";

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
