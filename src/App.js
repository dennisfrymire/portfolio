import React, { useState, useEffect } from 'react';
import { getContentfulNav } from "./Queries/index";
import './App.css';
import Footer from './Components/Footer';
import Layout from './Layout';
import Homepagesections from './Components/HomepageSections';

import * as headings from './Styles/type';


function App() {

  let [data, setData] = useState({});

  const getData = async () => {
      const theData = await getContentfulNav();
      setData(theData);
  }



  useEffect(() => {
    getData()
  }, [])


 if (data.fields) {
   return (
     <Layout>
       <headings.HeaderOne>
          {data.fields.websiteTitle}
        </headings.HeaderOne>
       <headings.HeaderTwo larger>
          {data.fields.websiteSubtitle}
        </headings.HeaderTwo>
       <headings.BannerImage>
         <img src={data.fields.bannerImage.fields.file.url} alt="code"/>
       </headings.BannerImage>
       <hr></hr>
       <Homepagesections/>
      <Footer data={data} />
     </Layout>
   )
 }
 return <Layout>...loading</Layout>
}

export default App;
