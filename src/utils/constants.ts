export const SETTINGS_KEY = 'BABYAGIUI_SETTINGS';
export const EXECUTIONS_KEY = 'BABYAGIUI_EXECUTIONS';

export const MODELS = [
  {
    id: 'gpt-3.5-turbo',
    name: 'Sandy',
    icon: 'openai-logo.svg',
  },
  {
    id: 'text-davinci-003',
    name: 'Sandy Lite',
    message: 'Much Worse!',
    icon: 'openai-logo.svg',
  },
  {
    id: 'gpt-4',
    name: 'SuperSandy',
    message: '🚨 DOES NOT WORK! 🚨',
    icon: 'openai-logo.svg',
  },
];

export const ITERATIONS = [
  { id: '5', name: '5' },
  { id: '10', name: '10' },
  { id: '20', name: '20' },
  { id: '50', name: '50' },
  { id: '0', name: 'Infinite' }
];

export const BABYBEEAGI_ITERATIONS = [
  { id: '0', name: '\'til all tasks done 🐝' },
];

export const AGENT = [
  {
    id: 'supersandy',
    name: 'God Mode',
    icon: '🐱',
    message: 'Features: 🤖/🔎+📄',
    badge: 'SUPER GREAT!',
  },
  {
    id: 'sandypro',
    name: 'Pretty Good Mode',
    icon: '🐝',
    message: 'Features: 🤖/🔎/📄',
    badge: 'Decent!',
  },
  { id: 'sandy',
    name: 'Trash Mode',
    icon: '👶',
    message: 'Features: 🤖',
    badge: 'Useless!',
  },
];
