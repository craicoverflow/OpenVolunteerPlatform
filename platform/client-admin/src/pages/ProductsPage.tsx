import React from 'react';
import {
  IonPage,
  IonFooter,
  IonLoading,
  IonContent,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { Header } from '../components';
import { RouteComponentProps } from 'react-router';
import { useFindAllProductsQuery } from '../dataFacade';
import { ProductList } from '../components/model/ProductList';
import { Link } from 'react-router-dom';
import { open } from 'ionicons/icons';


export const ProductsPage: React.FC<RouteComponentProps> = ({ match }) => {
  let { data, loading, error } = useFindAllProductsQuery();

  if (error) {
    console.log(error);
  }

  if (loading) return <IonLoading
    isOpen={loading}
    message={'Loading...'}
  />;

  const products = data?.findAllProducts || [];
  const content = <ProductList products={products as any} />
  
  return (
    <IonPage>
      <Header title="List of Products" match={match} />
      <IonContent className="ion-padding" >
        {content}
        <Link to={'createProduct'}>
          <IonButton item-start color='primary' fill="outline">
            <IonIcon icon={open} />
              Create Product
          </IonButton>
        </Link>
      </IonContent>
      <IonFooter>
        <div>
          OpenVolunteer Platform
        </div>
      </IonFooter>
    </IonPage >
  );

};