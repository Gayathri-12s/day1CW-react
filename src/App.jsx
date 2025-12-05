
import './App.css';
import images from "./images/f1.jpg";

console.log("React app started");

function App() {

   
    let  userName = "Gayathri";
   
    return (


      <div className="container d-flex justify-content-center mt-5 vh-100 " >
          
     
         <div className = "card" style={{width: "500px"}} >
            <h2 className='text-center 'style={{color:"orange", fontFamily: "sans-serif"}}> Welcome to React Learning, {userName} </h2>
     

            <img  src = {images} className = "img-fluid mx-auto mt-3" alt = "Responsive Image" width = "200" height = "200"/>
            <div className = "card-body mb-3">
            <p className = "card-text text-center text-muted">This is your first card with images and styles! </p>
          </div>
            <img src ="https://m.media-amazon.com/images/I/71cL+bBACrL._SX679_.jpg" className = "img-fluid mx-auto" alt = "Responsive Image" width = "200" height = "200"/>
   
         <div className = "card-body">
         <p className = "card-text text-center text-muted">This is your first card with images and styles! </p>
        </div>
  
    </div>
</div>
  

    

     


    );
 
  
  
 
}

export default App;
