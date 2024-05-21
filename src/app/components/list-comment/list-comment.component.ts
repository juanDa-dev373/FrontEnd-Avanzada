import { Component, Input } from '@angular/core';
import { ClientService } from '../../services/user/client.service';

@Component({
  selector: 'app-list-comment',
  standalone: true,
  imports: [],
  templateUrl: './list-comment.component.html',
  styleUrl: './list-comment.component.css'
})
export class ListCommentComponent {
  @Input()comment:any={};
  constructor(private clients:ClientService){}
}
