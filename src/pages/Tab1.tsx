import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jadi Ini adalh Header tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Jadi ini Eeee bagian header juga gk sih</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Bagian apa nih" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
