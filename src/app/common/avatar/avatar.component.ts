import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  codeLabel: string = '<ft-avatar label="John Doe"></ft-avatar>';
  codeSrc: string = '<ft-avatar label="John Doe" src="https://..."></ft-avatar>';

  constructor() { }

  ngOnInit(): void {
  }

}
