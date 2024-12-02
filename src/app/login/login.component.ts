import { AdminService } from './../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Admin } from '../interfaces/admin';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin(): void {
 if (this.username && this.password) {
     console.log('Usuário:', this.username);
     console.log('Senha:', this.password);
     alert('Login realizado com sucesso!');
   } else {
     alert('Por favor, preencha todos os campos!');
   }
 }
}
