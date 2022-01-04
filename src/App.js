import Navbar from './components/Navbar'
import Place from './components/Place'
import locations from './locations.js'
import Footer from './components/Footer'
function App() {
  const items = locations.map(data=>{
    return(
      <Place
        item={data} 
      />
    )
  })
  return (
   <div className="container">
     <Navbar />
     {items}
     <Footer />
   </div>
  );
}

export default App;
