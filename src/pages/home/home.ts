import { Answer } from './../../interfaces';
import { LetsGOService } from './../../provider/letsGO.service';
import { NewFriendPage } from './../new-friend/new-friend';
import { NewGamePage } from './../new-game/new-game';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public player = 'Spieler 1';
  public scoreWeek = 500;
  public scoreAlltime = 1000;

  public opponentName = 'Lars';
  public opponentScore = 5000;
  public gameStatus = 'blabla';

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public go: LetsGOService) {
    this.loadHomeScreen();
  }

  ionViewDidLoad() {
  }

  public loadHomeScreen() {
    this.go.loadHomePageData().subscribe(
      (answer: Answer) => {
        console.log(answer);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public newGame() {
    this.app.getRootNav().push(NewGamePage);
  }

  public newFriend() {
    this.app.getRootNav().push(NewFriendPage);
  }

}
