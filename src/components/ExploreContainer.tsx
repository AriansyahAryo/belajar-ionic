import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed iste beatae dolore cumque ullam libero dolorem molestias quia. Distinctio esse iusto temporibus nobis quia error harum commodi quis. Saepe, sed.
        </IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCard>
      <IonCard>
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCard>
    </>
  );
}

export default Example;
