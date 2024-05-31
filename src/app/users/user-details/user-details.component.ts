import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: { id: number, name: string, age: number, email: string, country: string, phone: string, address: string } | undefined;
  users = [
    { id: 1, name: 'John', age: 30, email: 'john@example.com', country: 'USA', phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'Jane', age: 25, email: 'jane@example.com', country: 'Canada', phone: '456-789-0123', address: '456 Elm St' },
    { id: 3, name: 'Doe', age: 35, email: 'doe@example.com', country: 'UK', phone: '789-012-3456', address: '789 Oak St' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.users.find(u => u.id === userId);
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
