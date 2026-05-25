// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        'setup/index',
        'technical-overview',
        'push-to-talk',
        'testing-in-editor',
        'voice-quality-settings',
      ],
    },
    {
      type: 'category',
      label: 'Voice Features',
      collapsed: false,
      items: [
        'audio-volume',
        'events',
        'voice-channels',
        'speaker-components',
        'effects-and-attenuation',
        'muting',
      ],
    },
    {
      type: 'category',
      label: 'Recording & Integrations',
      collapsed: false,
      items: [
        'recording',
        'dedicated-servers',
        'ffmpeg-recordings',
        'pixel-streaming',
        'nameplates',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: false,
      items: [
        'logging-console-commands',
        'overriding-base-classes',
        'audio-data-capture',
        'runtime-audio-objects',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: ['changelog', 'troubleshooting'],
    },
  ],
};

module.exports = sidebars;
