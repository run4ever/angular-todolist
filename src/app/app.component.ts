import { isFormattedError } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /* role du component parent = maintenir les données à jour
  les compo enfants vont pouvoir lire et maj ces données
  interet: une seule source pour le projet
  car des compo freres ne peuvent pas échanger des données
  */ 
  todolist:string[] = [
    'voir les composants',
    'voir les directives',
    'voir les modules'
  ];

  donelist:string[] = [
    'découverte angular'
  ];

  addTask(){
    let newTask = prompt('Nom de la tâche à créer','Nouvelle tâche');
    if(newTask != null && newTask.trim().length>0){
      this.todolist.push(newTask.trim());
    }
  }

  onTodoListDoneTaskEvent(eventTask){
    console.log(eventTask);
    let index = this.todolist.indexOf(eventTask)
    this.todolist.splice(index,1);
    //unshift ajoute en début de tableau
    this.donelist.unshift(eventTask);
  }

  onTodoListDeleteDoneTaskEvent(eventTask){
    let index = this.donelist.indexOf(eventTask)
    this.donelist.splice(index,1);
  }

  onMoveDoneTaskToTodoListEvent(eventTask){
    this.onTodoListDeleteDoneTaskEvent(eventTask);

    //let index = this.donelist.indexOf(eventTask)
    //this.donelist.splice(index,1);
    this.todolist.unshift(eventTask);

  }
}
