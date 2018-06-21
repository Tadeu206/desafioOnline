import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Start Quiz!';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  startGame(){


    swal({
      title: 'Regras!',
      
      text: 'Você terá 2 minutos para preencher os nomes dos personagens corretamente de acordo com a imagem. Aperte do botão de ? para informações acidionais sobre o personagem. Seus pontos apareceram no final! Boa sorte!',
      imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--yPtsD2-S--/c_scale,f_auto,fl_progressive,q_80,w_800/apcxr6cecmyyidiai3ku.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false,
      background:'white' 
      }).then((result) => {
      if (result.value) {
        this.router.navigate(["jogo"]);
      }
    }

  
      )}
}
  
