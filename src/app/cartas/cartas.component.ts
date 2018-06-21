import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PeopleService} from "../people.service";
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {FotoService} from "../foto.service";



@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']

})


export class CartasComponent implements OnInit {

  characterList: any[];
  topRow: any[];
  bottomRow: any[];
  previous;
  next;
  respostinha:number =0;
  points: number = 0;
  fotoList: any[];
  topFoto: any[];
  bottomFoto: any[];
  awnsers: any[] = [];


  constructor(private peopleService: PeopleService,private router: Router, private fotoService: FotoService ) { }


  ngOnInit() {
   this.findAll(1);
   

}

  private findAll(page){
    this.peopleService.findAllPeople(page).subscribe((data) => {
      this.characterList = data.results;
      this.checkPeopleOnChangePage();
      this.allFotos();
      this.topRow = this.characterList.slice(0,5);
      this.bottomRow = this.characterList.slice(5,10);
      this.previous = data.previous;
      this.next = data.next;
      
    })
  }


  private allFotos(){
    this.characterList.forEach((item) =>{
      this.fotoService.addAllPictures(item.name).subscribe((data) =>{
      item.pic = data.items[ 0 ].link;
      
      })
    })
    }

  private changePages(page){
    this.findAll(page.charAt(page.length - 1));
  }

  voltarHome(){

    const swalWithBootstrapButtons = (swal as any).mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: 'Voltar Home',
      text: "Certeza que quer Voltar?",
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim, Sair!',
      cancelButtonText: 'Não, Continuar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
          this.router.navigate([""]);
      } 
    })
       
  }
  private infoPeople(person){

    let varinfo = this.htmlCode(person);

    swal({
      title: '<i>Informação do Char!</i>',
      html:varinfo,
      showCloseButton: true,
    
      
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Voltar!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    })
  }

  private htmlCode(person){
    return `
    <img class="info-pic size" src='${person.pic}'><br /><br />
    <p>Ano de Nascimento:  ${person.birth_year}</p> 
    <p>Height:  ${person.height}</p>
    <p>Hair:  ${person.hair_color}</p>
    `
  }



 
private peopleBlock(person,item){
  person.blockConfirm = true;
  person.resp = item.resp;
}

private checkPeopleOnChangePage(){
  
  this.characterList.forEach(person =>{
    this.awnsers.forEach(item =>{
      if(item.name == person.name){
        this.peopleBlock(person,item);
    }
  })
})
}


private verResposta(person){
  person.blockConfirm = true;
    this.awnsers.push(person);
    if(person.name.toUpperCase() === person.resp.toUpperCase()){
      this.points += 10;
      this.respostinha +=1;
  }
}


private endOfTheGame(){
  swal({
    title:"Parabens!",
    html:this.generateFinalMsg(),
    showCloseButton:true,
  })
  this.router.navigate([""]);
}

generateFinalMsg(){
  return `
  <b>Você Fez : </b>${this.points} pontos.<br>
  <b> Acertando : </b>${this.respostinha} respostas de 87.
`
}


  }



