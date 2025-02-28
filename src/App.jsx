import './App.module.css'
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import article from './data/article'
import image1 from './images/girafee.jpeg'
import image2 from './images/Polarbear.jpeg'


function App() {
 

  return (
    <>
      <Header/>
      {
        article.map((item,index)=>(
          <Content 
            key={index}
            {...item}
            img = {index === 0 ?image1: image2}
            />
        ))
      }    
      <Footer/>
    </>
  )
}

export default App;
