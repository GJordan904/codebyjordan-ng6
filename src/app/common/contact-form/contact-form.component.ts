import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { pulse } from '../animations/attention';
import { ContactType, ServiceType } from './contact-form.interfaces';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'cbj-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    pulse()
  ]
})
export class ContactFormComponent implements OnInit {
  serviceGroup: FormGroup;
  nameGroup: FormGroup;
  contactGroup: FormGroup;
  stopPulsing: Subject<void>;

  pulsing = 'start';
  submitted = false;
  sending = true;
  services = [
    { label: 'Build me a website, app, or API', value: ServiceType.Build },
    { label: 'Work on my existing app or site', value: ServiceType.Update },
    { label: 'Speed up my site, app, or server', value: ServiceType.Speed },
    { label: 'I want to save money on hosting', value: ServiceType.Hosting },
    { label: 'I need to increase my visibility in searches', value: ServiceType.SEO },
    { label: 'I\'m interested in Adwords and PPC advertising', value: ServiceType.Advertising },
    { label: 'I need something not listed', value: ServiceType.Other }
  ];

  methods = [
    { label: 'Email me', value: ContactType.Email },
    { label: 'Call me', value: ContactType.Phone },
    { label: 'ICQ', value: ContactType.ICQ }
  ];

  constructor(private fb: FormBuilder,
              private cfService: ContactFormService) {
    this.stopPulsing = new Subject();
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    this.submitted = true;
    interval(225).pipe(takeUntil(this.stopPulsing)).subscribe(this.pulse);
    this.cfService.submitContactForm({
      service: this.serviceGroup.value,
      name: this.nameGroup.value.name,
      contact: this.contactGroup.value
    }).subscribe(val => this.sending = false, err => this.sending = false);
  }

  private createForm() {
    this.serviceGroup = this.fb.group({ service: [ '', Validators.required ] });
    this.nameGroup = this.fb.group({  name: [ '', Validators.required ] });
    this.contactGroup = this.fb.group({
      type: [ '', Validators.required ],
      value: [ '', Validators.required ]
    });
  }

  private pulse = () => {
    this.pulsing = this.pulsing === 'start' ? 'end' : 'start';
  }
}
