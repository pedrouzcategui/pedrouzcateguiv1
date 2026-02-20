export type N8NWorkflow = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  apps: { id: string; icon: string; bg: string; label: string }[];
  stat: string;
  overview: string;
  requirements: string[];
  steps: string[];
};

export const workflows: N8NWorkflow[] = [
  {
    id: "fb-ads-gemini",
    title: "Upload HTML directly to Google Drive as Google Doc",
    description:
      "Pull campaigns, summarize performance with Gemini, and send a clean report to Sheets.",
    tags: ["Facebook Ads", "Gemini", "Google Sheets"],
    apps: [
      {
        id: "sheets",
        icon: "📄",
        bg: "bg-emerald-500/15 text-emerald-200",
        label: "Google Sheets",
      },
      {
        id: "web",
        icon: "🌐",
        bg: "bg-sky-500/15 text-sky-200",
        label: "HTTP Request",
      },
      {
        id: "gemini",
        icon: "✨",
        bg: "bg-indigo-500/15 text-indigo-200",
        label: "Gemini",
      },
    ],
    stat: "+13",
    overview:
      "Centralize ad metrics, let Gemini summarize key performance changes, and keep a tidy dashboard in Sheets.",
    requirements: [
      "Facebook Ads account with reporting access",
      "Gemini API key",
      "Google Sheets spreadsheet to write the report",
    ],
    steps: [
      "Pull campaign insights for the last 7 days",
      "Aggregate KPIs and generate a short narrative summary",
      "Write metrics and summary into a Sheets tab",
      "Send a notification with the link to the report",
    ],
  },
  {
    id: "slack-command-center",
    title: "Slack Command Center for Slack Block Kit Builder",
    description:
      "Collect receipts from Drive, extract totals, and organize them by vendor & month.",
    tags: ["Drive", "OCR", "Finance"],
    apps: [
      {
        id: "sheets",
        icon: "📄",
        bg: "bg-emerald-500/15 text-emerald-200",
        label: "Google Sheets",
      },
      {
        id: "drive",
        icon: "🗂️",
        bg: "bg-blue-500/15 text-blue-200",
        label: "Google Drive",
      },
      {
        id: "ai",
        icon: "🧠",
        bg: "bg-fuchsia-500/15 text-fuchsia-200",
        label: "OCR/AI",
      },
    ],
    stat: "+5",
    overview:
      "Automate expense tracking by extracting receipt data and organizing it into clean monthly reports.",
    requirements: [
      "Drive folder with incoming receipt uploads",
      "OCR provider or AI extraction endpoint",
      "Sheets budget tracker",
    ],
    steps: [
      "Watch a Drive folder for new receipts",
      "Extract vendor, total, and date via OCR",
      "Normalize the data and enrich with categories",
      "Append rows to the monthly budget sheet",
    ],
  },
  {
    id: "news-aggregator",
    title: "HITL (Human in the loop) for research",
    description:
      "Sync headlines from multiple APIs, dedupe content, and publish a daily digest.",
    tags: ["NewsAPI", "Mediastack", "Database"],
    apps: [
      {
        id: "web",
        icon: "🌐",
        bg: "bg-sky-500/15 text-sky-200",
        label: "HTTP Request",
      },
      {
        id: "edit",
        icon: "✍️",
        bg: "bg-amber-500/15 text-amber-200",
        label: "Formatter",
      },
      {
        id: "sync",
        icon: "🔁",
        bg: "bg-cyan-500/15 text-cyan-200",
        label: "Database",
      },
    ],
    stat: "+6",
    overview:
      "Fetch headlines from multiple sources, deduplicate them, and store a clean digest for publishing.",
    requirements: [
      "API keys for your news providers",
      "Database connection for storing headlines",
      "Slack or email channel for daily summary",
    ],
    steps: [
      "Fetch headlines from each provider",
      "Normalize fields and remove duplicates",
      "Store the curated list in a database",
      "Send a daily digest notification",
    ],
  },
  {
    id: "3d-body-model",
    title: "Multipart Body Request with N8N",
    description:
      "Process uploads, run SAM-3D, and store outputs in a project workspace.",
    tags: ["SAM-3D", "Images", "Google Sheets"],
    apps: [
      {
        id: "sheets",
        icon: "📄",
        bg: "bg-emerald-500/15 text-emerald-200",
        label: "Google Sheets",
      },
      {
        id: "web",
        icon: "🌐",
        bg: "bg-sky-500/15 text-sky-200",
        label: "HTTP Request",
      },
      {
        id: "ai",
        icon: "🤖",
        bg: "bg-violet-500/15 text-violet-200",
        label: "SAM-3D",
      },
    ],
    stat: "+5",
    overview:
      "Turn image uploads into 3D models and track delivery status in a shared workspace.",
    requirements: [
      "Image upload form or storage bucket",
      "SAM-3D inference endpoint",
      "Project tracker sheet",
    ],
    steps: [
      "Capture new image uploads",
      "Send the images to SAM-3D for processing",
      "Store the output model URL",
      "Update the tracker with status and links",
    ],
  },
  {
    id: "e2e-slack-bot",
    title: "E2E Slack Bot",
    description:
      "Process uploads, run SAM-3D, and store outputs in a project workspace.",
    tags: ["SAM-3D", "Images", "Google Sheets"],
    apps: [
      {
        id: "sheets",
        icon: "📄",
        bg: "bg-emerald-500/15 text-emerald-200",
        label: "Google Sheets",
      },
      {
        id: "web",
        icon: "🌐",
        bg: "bg-sky-500/15 text-sky-200",
        label: "HTTP Request",
      },
      {
        id: "ai",
        icon: "🤖",
        bg: "bg-violet-500/15 text-violet-200",
        label: "SAM-3D",
      },
    ],
    stat: "+5",
    overview:
      "Turn image uploads into 3D models and track delivery status in a shared workspace.",
    requirements: [
      "Image upload form or storage bucket",
      "SAM-3D inference endpoint",
      "Project tracker sheet",
    ],
    steps: [
      "Capture new image uploads",
      "Send the images to SAM-3D for processing",
      "Store the output model URL",
      "Update the tracker with status and links",
    ],
  },
  {
    id: "files-to-ai",
    title: "Use Files into your favorite A.I models",
    description:
      "Process uploads, run SAM-3D, and store outputs in a project workspace.",
    tags: ["SAM-3D", "Images", "Google Sheets"],
    apps: [
      {
        id: "sheets",
        icon: "📄",
        bg: "bg-emerald-500/15 text-emerald-200",
        label: "Google Sheets",
      },
      {
        id: "web",
        icon: "🌐",
        bg: "bg-sky-500/15 text-sky-200",
        label: "HTTP Request",
      },
      {
        id: "ai",
        icon: "🤖",
        bg: "bg-violet-500/15 text-violet-200",
        label: "SAM-3D",
      },
    ],
    stat: "+5",
    overview:
      "Turn image uploads into 3D models and track delivery status in a shared workspace.",
    requirements: [
      "Image upload form or storage bucket",
      "SAM-3D inference endpoint",
      "Project tracker sheet",
    ],
    steps: [
      "Capture new image uploads",
      "Send the images to SAM-3D for processing",
      "Store the output model URL",
      "Update the tracker with status and links",
    ],
  },
    {
    id: "error-catcher",
    title: "Catch all errors",
    description:
      "Process uploads, run SAM-3D, and store outputs in a project workspace.",
    tags: ["SAM-3D", "Images", "Google Sheets"],
    apps: [
      {
        id: "sheets",
        icon: "📄",
        bg: "bg-emerald-500/15 text-emerald-200",
        label: "Google Sheets",
      },
      {
        id: "web",
        icon: "🌐",
        bg: "bg-sky-500/15 text-sky-200",
        label: "HTTP Request",
      },
      {
        id: "ai",
        icon: "🤖",
        bg: "bg-violet-500/15 text-violet-200",
        label: "SAM-3D",
      },
    ],
    stat: "+5",
    overview:
      "Turn image uploads into 3D models and track delivery status in a shared workspace.",
    requirements: [
      "Image upload form or storage bucket",
      "SAM-3D inference endpoint",
      "Project tracker sheet",
    ],
    steps: [
      "Capture new image uploads",
      "Send the images to SAM-3D for processing",
      "Store the output model URL",
      "Update the tracker with status and links",
    ],
  },
];
