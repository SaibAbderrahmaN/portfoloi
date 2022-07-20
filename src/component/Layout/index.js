import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'





const layout = ()=>{
  return  <div className='app'>
    <Sidebar />
    <div className='page'>
      <span className='tages top-tages'>&lt;body&gt;</span>
      <Outlet  />
      <span className='tages bottom-tages'>&lt;body&gt;
      <br />
      <span className='bottom-tag-html'>&lt;html&gt;</span>
      </span>



    </div>
  
  
  
  
  
  </div>
}

export default layout
