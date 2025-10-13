import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  imports: [FontAwesomeModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto implements OnInit {
  public iconoUbicacion = faLocationDot;
  public iconoTelefono = faPhone;
  public iconoCorreo = faEnvelope;
  public iconoFacebook = faSquareFacebook;
  public iconoInstagram = faInstagram;

  private publicKey = 'dtGB8Tkmi-4oNtyDZ';
  private templateId = 'template_vpksx5e';
  private serviceId = 'service_7tkfm15';

  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    emailjs.init({ publicKey: this.publicKey });
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      phone: ['']
    });
  }

  async sendEmail(): Promise<void> {
    if (this.contactForm.valid) {
      const originalMessage = this.contactForm.value.message;
      const phoneNumber = this.contactForm.value.phone;

      // Adjunta el número de teléfono al mensaje
      const fullMessage = `${originalMessage}\n\nTeléfono de contacto: ${phoneNumber}`;

      const templateParams = {
        from_name: this.contactForm.value.from_name,
        from_email: this.contactForm.value.from_email,
        subject: this.contactForm.value.subject,
        message: fullMessage,

      };

      try {
        const response = await emailjs.send(this.serviceId, this.templateId, templateParams);
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
        this.contactForm.reset();
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        alert('Error al enviar el mensaje. Disculpe las molestias, Contáctenos por WhatsApp.');
      }
    }
  }
}