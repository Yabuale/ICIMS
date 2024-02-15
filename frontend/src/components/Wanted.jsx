import { useState } from 'react';
import WantedCard from './WantedCard';
const data = [
  {
    imageUrl: 'https://kuyou.id/content/images/ctc_2020021605150668915.jpg',
    subtitle: 'SUBTITLE 1',
    title: 'Chichen Itza 1',
    description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
  },

  {
    title: 'Colosseum Roma',
    subtitle: 'SUBTITLE',
    imageUrl: 'https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg',
    description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
  },
  {
      title: 'Colosseum Roma',
      subtitle: 'SUBTITLE',
      imageUrl: 'https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      title: 'Colosseum Roma',
      subtitle: 'SUBTITLE',
      imageUrl: 'https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
]; 
 const Wanted = () => {
    return (

      <div >
        
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto max-w-7x1">
    <div className="flex flex-wrap w-full mb-4 p-4">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-sky-950">Wanted</h1>
        <div className="h-1 w-20 bg-sky-800 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">

    
    {data.map((item, index) => (
        <WantedCard
          key={index}
          imageUrl={item.imageUrl}
          subtitle={item.subtitle}
          title={item.title}
          description={item.description}
        />))}
      
      {data.map((item, index) => (
        <WantedCard
          key={index}
          imageUrl={item.imageUrl}
          subtitle={item.subtitle}
          title={item.title}
          description={item.description}
        />))}
       
      
    </div>
    
  </div>
</section>
      </div>
        
    );
  };
  export default Wanted