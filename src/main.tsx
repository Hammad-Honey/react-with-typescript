// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import Demo from './Demo'
import './main.css'

const myElement=(
    <div>
      <table>
        <tr>
          <th>
            Sr.
          </th>
          <th>
            User
          </th>
          <th>
            Age
          </th>
        </tr>

         <tr>
          <td>
            1
          </td>
          <td>
            Hammad
          </td>
          <td>
            27
          </td>
         </tr>

      </table>
    </div>
)

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  <h1 className='bg-[#B0C4DE]'>#Print H1 Using creating root as HTMLElement</h1>
  <Demo/>
  {myElement}
  
  </>
)