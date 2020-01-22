import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFab ,IonFabButton,IonFabList,IonIcon} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Trackabit</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Página de definición del Hábito  
      </IonContent>
    </IonPage>
  );
};

export default Home;
