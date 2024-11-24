import { AdminService } from './../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Admin } from '../interfaces/admin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  protected admin!: Admin
  constructor(private route: ActivatedRoute, private adminService: AdminService) {}

  ngOnInit(): void {
    this.admin = this.adminService.createAdmin()
  }

  isVerified() {
    return this.adminService.isVerified(this.admin)
  }
}
