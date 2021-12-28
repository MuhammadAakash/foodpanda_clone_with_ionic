import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  imageProperties = {
    quality:100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
  }
  theActualPicture = ""
  constructor() {}
  

  async takePicture(){
    const image = await Camera.getPhoto(this.imageProperties)

    this.theActualPicture = image.dataUrl

  }
  deleteimage(){
    this.theActualPicture = ""
  }
}
