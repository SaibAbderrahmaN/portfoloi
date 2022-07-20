import './index.scss';

const AnimationLetters=({letterClass, strArry, idx})=>{
    return(
    
    
    <span>
        
        
        
        {
            strArry.map((char,i) => (

                
                    <span key={char+i} className={`${letterClass} _${i+idx}`}>
                                    {char}
                    </span>
                
            ))
        }





    </span>)
}
export default AnimationLetters;