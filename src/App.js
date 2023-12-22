import React from 'react';

import './App.css';

const urls1 = [
  'https://www.esato.com/phonephotos/cam/samsung/sm_g900f/201406011711P0ER52.jpg',
  'https://nature.baikal.ru/phs/norm/84/84110.jpg',
  'https://prades.net/canada2004/493T1806.jpg',

  'https://i.pinimg.com/originals/55/49/0e/55490ee730c90b567d4d40bad287b6ca.jpg',
  'http://st.gde-fon.com/wallpapers_original/425001_vysokogornyj-otel_reka_pejzazh_priroda_1680x1050_www.Gde-Fon.com.jpg',


  'https://i.redd.it/v05doii2jwp31.jpg',
  'http://thereminder.ru/wp-content/uploads/2020/07/grand-canyon-crimea.jpg',
  'https://i.artfile.me/wallpaper/11-06-2013/4000x2667/priroda-reki-ozera-spirit-island-730985.jpg',
  'https://rondreizennoordamerika.nl/wp-content/uploads/2020/02/Valley-of-Fire-20190222-5N6A0728_1.jpg',
  'https://prades.net/canada2004/493T1914a.jpg',
  'https://photographylife.com/wp-content/uploads/2018/07/caPatchStart-1536x1103.jpg',
  'https://bugaga.ru/uploads/posts/2009-09/1251815154_01_09_2009_08628_philippe-sainte-laudy-6.jpg',
  'https://images.squarespace-cdn.com/content/v1/55c3df7ce4b0abe10a7ec1b9/1516168947908-K4NVIAE5KQDLFV10WAFQ/DJI_0140+-+Copy.jpg',
  'http://vsegda-pomnim.com/uploads/posts/2022-03/1647654770_66-vsegda-pomnim-com-p-gora-kostsyushko-foto-71.jpg',
];

function App() {
  const [arraySize, setArraySize] = React.useState(0)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        return response.json()
      })
      .then(json => setArraySize(s => s += 135))
      .catch((e) => console.log(`Error ${e}`))
  }, [arraySize]);

  return (
    <div>
      <h1>OverLoadedPage</h1>
      <h2>Объём загруженного массива - {Math.round(arraySize / 1000)} MB</h2>

      <ul>
        {urls1.map(item => {
          return (
            <li style={{listStyle: 'none'}}>
              <img
                alt={'image'}
                src={item}
                width={600}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
