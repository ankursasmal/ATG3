import React from 'react'
 import gmail from '../assets/gmail.png'
import social from '../assets/social.png'
import fourdiv from '../assets/fourdiv.png'
import manimg from '../assets/manimg.png'
import forYou from '../assets/forYou.png'


    import 'bootstrap/dist/css/bootstrap.min.css';
     
    import { Link } from 'react-router-dom';
   import '../App.css'
   function Five() {

   return (
       <div className='row row-cols-1 row-cols-lg-2' style={{ height: '100vh' }}>
           <div className='d-none d-lg-block' style={{ position: 'absolute',top: '-16vw', left: '27vw', borderRadius: '50%',  }}>
    
    <svg viewBox="0 0 36 36" style={{transform: 'rotate(-45deg)',overflow:'auto',position:'absolute',top:'20vw',right:'19vw', backgroundColor:'#6dc922',borderRadius:'50%' }}>
<path 
d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
fill="none"
stroke="#444"
stroke-width=".2"
stroke-dasharray="75, 100"
/>
</svg>
<Link to='/'> <div style={{width:'2vw',height:'2vw',borderRadius:'50%',backgroundColor:'blue',position:'absolute',top:'25vw',left:'4vw'}}></div></Link>
<Link to='/second'><div style={{width:'2vw',height:'2vw',borderRadius:'50%',backgroundColor:'blue',position:'absolute',top:'21vw',right:'32vw'}}></div></Link>
<Link to='/third'> <div style={{width:'2vw',height:'2vw',borderRadius:'50%',backgroundColor:'blue',position:'absolute',top:'25vw',right:'23vw'}}></div></Link>
<Link to='/forth'><div style={{width:'2vw',height:'2vw',borderRadius:'50%',backgroundColor:'blue',position:'absolute',top:'35vw',right:'20vw'}}></div></Link>
<Link to='/five'><div style={{width:'2vw',height:'2vw',borderRadius:'50%',backgroundColor:'blue',position:'absolute',top:'44vw',right:'24vw'}}></div></Link>
<Link to='/six'> <div style={{width:'2vw',height:'2vw',borderRadius:'50%',backgroundColor:'blue',position:'absolute',top:'48vw',right:'33vw'}}></div></Link>
<Link to='/sevens'> <div style={{width:'2vw',height:'2vw',borderRadius:'50%',backgroundColor:'blue',position:'absolute',top:'44vw',left:'5vw'}}></div></Link>

    
    
      <div className='d-flex' style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position:'absolute',top:'30vw',left:'2vw'  }}>
       <a style={{fontSize:'1.2vw' ,color:'white'}} >Developing ERP Solution for</a>
       <h1 style={{fontSize:'4vw' ,color:'white'}}>Text Headline</h1>
       <a style={{ alignSelf: 'flex-end',color:'white',fontSize:'1.2vw' }} >in furniture industry</a>
    </div>

 </div>

   
         <div className='col order-2 order-lg-1' style={{ backgroundColor: '#6dc922'}}>
           <div style={{ position: 'absolute', bottom: '5vw', padding: '2vw' }}>
           <div style={{display:'flex',flexDirection: 'column',width:'60%'}}> 

             <h1>ABC 346</h1>
             <a style={{color:'white',fontSize:'1.3vw'}}>Best since 2017
               We offer a wide range of web development and app development.</a>
             </div>
             <h3 style={{ marginTop: '4vw' }}>View Case Study</h3>
              <a style={{ position: 'absolute', bottom: '0', right: '2vw' ,fontSize:'1.7vw',color:'white'}}>SKIP</a>
           </div>
         </div>
   
         <div className='col order-1 order-lg-2' style={{ backgroundColor: '#b4e889', position: 'relative' ,zIndex:'-1'}}>
         <img src={gmail} alt="" style={{width:'10vw',position:'absolute',top:'-4vw',left:'6vw'}}/>
        <img src={social} alt="" style={{width:'14vw',position:'absolute',top:'-6vw',left:'17vw'}}/>
<img src={fourdiv} alt="" style={{width:'20vw',position:'absolute',top:'20%',left:'32vw'}}/>
        <img src={manimg} alt="" style={{width:'15vw',position:'absolute',bottom:'-6vw',left:'3vw',zIndex:'-10'}}/>
        <img src={forYou} alt="" style={{width:'13vw',position:'absolute',bottom:'-9vw',left:'20vw'}}/>
       
 </div>
         <div className='d-block d-lg-none' style={{position:'absolute',bottom:'2px',alignSelf:'center'}}>
     <center className='d-flex ' style={{alignItems:'center',justifyContent:'center',marginLeft:'2vw'}}> 
     <Link to='/'><div style={{width:'5vw',height:'5vw',borderRadius:'50%',backgroundColor:'#09e3b4',marginRight:'2vw'}}></div></Link>
     <Link to='/second'><div style={{width:'5vw',height:'5vw',borderRadius:'50%',backgroundColor:'#09e3b4',marginRight:'2vw'}}></div></Link>
     <Link to='/third'><div style={{width:'5vw',height:'5vw',borderRadius:'50%',backgroundColor:'#09e3b4',marginRight:'2vw'}}></div></Link>
     <Link to='/forth'><div style={{width:'5vw',height:'5vw',borderRadius:'50%',backgroundColor:'#09e3b4',marginRight:'2vw'}}></div></Link>
     <Link to='/five'><div style={{width:'5vw',height:'5vw',borderRadius:'50%',backgroundColor:'#09e3b4',marginRight:'2vw'}}></div></Link>
     <Link to='/six'><div style={{width:'5vw',height:'5vw',borderRadius:'50%',backgroundColor:'#09e3b4',marginRight:'2vw'}}></div></Link>
     <Link to='/seven'><div style={{width:'5vw',height:'5vw',borderRadius:'50%',backgroundColor:'#09e3b4',marginRight:'2vw'}}></div></Link>
   
   </center>
         </div>
       </div>
     )
   }
     
export default Five
       