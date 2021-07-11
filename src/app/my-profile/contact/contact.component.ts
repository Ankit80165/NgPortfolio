import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  isLoading: boolean = false;
  constructor(
    private profileService: ProfileService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  submitContactForm() {
    this.isLoading = true;
    const name = this.contactForm.get('name').value;
    const email = this.contactForm.get('email').value;
    const subject = this.contactForm.get('subject').value;
    const message = this.contactForm.get('message').value;
    this.profileService.contact(name, email, subject, message).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.contactForm.reset();
        this.toastr.success('Thanks For Contacting!');
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.toastr.error('Something wrong happend');
      }
    );
  }
}
