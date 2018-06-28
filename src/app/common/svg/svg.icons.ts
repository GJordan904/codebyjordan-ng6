import { SafeResourceUrl } from '@angular/platform-browser';

export interface SVGIconEntry {
  ns: string;
  name: string;
  url: SafeResourceUrl;
}

export const ICONS: { ns: string, name: string }[] = [
  // Material Icons
  { ns: 'md', name: 'desktop_windows' },
  { ns: 'md', name: 'phone_android' },
  { ns: 'md', name: 'search' },
  { ns: 'md', name: 'developer_mode' },
  { ns: 'md', name: 'ondemand_video' },
  { ns: 'md', name: 'done' },
  { ns: 'md', name: 'edit' },
  { ns: 'md', name: 'check' },
  // Dev Icons
  { ns: 'dev', name: 'angular-plain' },
  { ns: 'dev', name: 'angularjs-grey' },
  { ns: 'dev', name: 'google-grey' },
  { ns: 'dev', name: 'google-original' },
  { ns: 'dev', name: 'linux-plain' },
  { ns: 'dev', name: 'linux-original' },
];
