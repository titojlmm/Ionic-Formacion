import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Dialogs } from '@ionic-native/dialogs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

export const firebaseConfig = {
  apiKey: "AIzaSyD9WwNqjOmHgspHJfTLKXqFbx8kfYgKfJ8",
  authDomain: "ionic2do-a4307.firebaseapp.com",
  databaseURL: "https://ionic2do-a4307.firebaseio.com",
  projectId: "ionic2do-a4307",
  storageBucket: "ionic2do-a4307.appspot.com",
  messagingSenderId: "128875838437"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
