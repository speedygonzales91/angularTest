import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  createServerStatus = "No server was created";
  serverName = "zzz";
  constructor() {
    setTimeout(()=>{
      this.allowNewServers = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.createServerStatus = "Server was successfully created!";
  }

  onCreateServerName(event : any) {
    this.serverName = event.target.value;
  }

}
