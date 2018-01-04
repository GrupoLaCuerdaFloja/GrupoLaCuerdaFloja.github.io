import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Cuerda FLoja';  
  
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
}
scroll = (): void => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("menu").style.display = "none";    
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("menu").style.display = "block";    
  }
};

}

