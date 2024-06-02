import React from 'react'

function Card(props) {
  return (
    <div class="m-5 flex items-center shadow-lg w-56 h-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <div class="flex gap-3 items-center justify-center">
            {props.img}
           <div>
                {props.n}
                {props.p}
            </div> 
        </div>
    </div>
  )
}

export default Card