import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';

function Example() {
  return (
    <>
      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCard>
      <IonImg src="https://docs-demo.ionic.io/assets/madison.jpg" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
      <IonImg
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdevilchan.com%2Ffocalors-wallpapers-c30059&psig=AOvVaw3yIPljAykYxlsZLQ1Mrr-n&ust=1693876460584000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPirkNnjj4EDFQAAAAAdAAAAABAD"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
      ></IonImg>
    </>
  );
}
export default Example;
