export interface ContactForm {
  service: ServiceType;
  name: string;
  contact: ContactInfo;
}

export interface ContactInfo {
  type: ContactType;
  value: string;
}

export enum ContactType {
  Phone = 'phone',
  Email = 'email',
  ICQ   = 'icq'
}

export enum ServiceType {
  Build       = 'build',
  Update      = 'update',
  Speed       = 'speed',
  Hosting     = 'hosting',
  SEO         = 'seo',
  Advertising = 'advertising',
  Other       = 'other'
}
