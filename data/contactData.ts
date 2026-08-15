export interface ProjectScope {
  id: string;
  label: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DirectChannel {
  name: string;
  url: string;
  badgeText: string;
  badgeVariant: 'emerald' | 'muted';
  displayHandle: string;
}

export const PROJECT_SCOPES: ProjectScope[] = [
  { id: '01', label: '[01] WEB_APPLICATION' },
  { id: '02', label: '[02] AI / ML_SERVICES' },
  { id: '03', label: '[03] FRONTEND_ARCHITECTURE' },
  { id: '04', label: '[04] OTHER_INQUIRY' },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '01',
    question: '> ACCEPTING_NEW_CONTRACTS?',
    answer:
      'AFFIRMATIVE. Open for freelance contracts, full-time remote engineering roles, and architectural consultations worldwide.',
  },
  {
    id: '02',
    question: '> TYPICAL_RESPONSE_LATENCY?',
    answer:
      'All incoming signals on GitHub and LinkedIn are acknowledged within < 24 hours. X/Twitter queries experience standard latency.',
  },
  {
    id: '03',
    question: '> PRIMARY_ENGINEERING_STACK?',
    answer:
      'Next.js 14+, React, TypeScript, Tailwind CSS, Python/FastAPI, Node.js, and modern AI/ML API integration pipelines.',
  },
];

export const DIRECT_CHANNELS: DirectChannel[] = [
  {
    name: 'GITHUB',
    url: 'https://github.com/yusss4me',
    badgeText: '< 24h_RESPONSE',
    badgeVariant: 'emerald',
    displayHandle: 'GITHUB // @yusss4me',
  },
  {
    name: 'LINKEDIN',
    url: 'https://linkedin.com',
    badgeText: '< 24h_RESPONSE',
    badgeVariant: 'emerald',
    displayHandle: 'LINKEDIN // Ardi Yustiar',
  },
  {
    name: 'X/TWITTER',
    url: 'https://x.com',
    badgeText: 'SLOW_RESPONSE',
    badgeVariant: 'muted',
    displayHandle: 'X/TWITTER // @yusss4me',
  },
];

export const contactData = {
  terminal: {
    title: 'TRANSMIT_SIGNAL',
    subtitle: 'INITIALIZING SECURE CONNECTION VIA PROTOCOL v9.0.4...',
    successNotification: 'TRANSMISSION_SUCCESSFUL // Signal received. Operational response will be dispatched shortly.',
    scopeLabel: '[ SELECT_PROJECT_SCOPE ]',
    senderNameLabel: 'SENDER_NAME //',
    senderNamePlaceholder: 'Enter identification...',
    returnAddressLabel: 'RETURN_ADDRESS //',
    returnAddressPlaceholder: 'user@domain.tld',
    payloadLabel: 'TRANSMISSION_PAYLOAD //',
    payloadPlaceholder: 'Detail your project parameters here...',
    submitButton: 'TRANSMIT_MESSAGE',
    submittingButton: 'TRANSMITTING_SIGNAL...',
    faqSectionTitle: '[ FREQUENT_INQUIRIES_LOG ]',
  },
  controlPanel: {
    statusTitle: 'SYSTEM_STATUS //',
    quickTransmitTitle: 'QUICK_TRANSMIT',
    directChannelsTitle: '[ DIRECT_CHANNELS ]',
  },
  popovers: {
    diagnosticsTitle: 'System Diagnostics',
    directChannelsTitle: 'Direct Channels',
    quickTransmitTitle: 'Quick Transmit',
    faqTitle: 'Protocol FAQ',
    copiedText: 'COPIED_TO_CLIPBOARD!',
    copyButtonText: 'COPY_CONTACT_EMAIL',
    signalDispatched: '✓ SIGNAL DISPATCHED!',
    quickEmailPlaceholder: 'Return address...',
    quickMessagePlaceholder: 'Transmission payload...',
    quickTransmitButton: 'TRANSMIT_SIGNAL',
    pingingText: 'DIAGNOSTIC_PINGING...',
    pingButtonText: 'RUN_SYSTEM_PING',
    viewFullFaq: 'VIEW_FULL_FAQ_LOG',
  },
};
