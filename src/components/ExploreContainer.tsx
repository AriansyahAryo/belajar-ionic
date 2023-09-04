import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonAccordion, IonAccordionGroup } from '@ionic/react';

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
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>First Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Card Content</IonCardContent>
            </IonCard>
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Second Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Second Content
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>Third Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Third Content
          </div>
        </IonAccordion>
      </IonAccordionGroup>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem>

            <IonItem lines="none">
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default Example;
