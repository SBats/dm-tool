import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "dm-tool-app";

  constructor(private http: HttpClient) {
    this.http
      .get<string>("http://localhost:9999")
      .toPromise()
      .then(console.log)
      .catch(console.error);
  }
}
