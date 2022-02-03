
import { useEffect, useState } from 'react';
import { http } from '../services/http.service';

import Styles from '../styles/pages/Home.module.css';



export default function Home() {

  const [allData, setAllData] = useState([]);
  // useState: is a hook that lets you add state to a functional component.
  // useEffect: By using this Hook, you tell React that your component needs to do something after render 
  useEffect(() => {
    const getData = async () => {
      const response = await http.get('/search', {
        params: {
          q: termFromSearchBar
        }
      });
      setAllData(response.data.items);
      console.log('DATA AQUI', response)
    }

    getData().catch(console.error);

    allData.map((item: any) => {
     return console.log(item);
    });
  })



  return (
    
      <div className={Styles.container}>
        <input id="search" type="text" placeholder="search your video"/>
      </div>
     
    
  );
}
