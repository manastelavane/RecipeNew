// import React, { useEffect } from 'react'
// import './Recipe.css'
// import image2 from '../../images/beverages.jpg' 
// import {BiTimer} from 'react-icons/bi'
// const Recipe = () => {
//   return (
//     <div className='maincontainer'>
//       <div className='green'>
//         <div className='three-details'>
//             <div className='timeitem preptime'>
//                 <h5>
//                     PREP TIME
//                 </h5>
//                 <div className='timedetails'>
//                     <BiTimer className='timer-icon'/>
//                     <h5>30 mins</h5>
//                 </div>
//             </div>
//             <div className='timeitem cooktime'>
//                 <h5>
//                     COOK TIME
//                 </h5>
//                 <div className='timedetails'>
//                     <BiTimer className='timer-icon'/>
//                     <h5>30 mins</h5>
//                 </div>
//             </div>
//             <div className='timeitem readytime'>
//                 <h5>
//                     READY TIME
//                 </h5>
//                 <div className='timedetails'>
//                     <BiTimer className='timer-icon'/>
//                     <h5>30 mins</h5>
//                 </div>
//             </div>
//         </div>
//         <img src={image2}/>
//       </div>
//       <div className='recipedetails'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium consequatur sequi reiciendis autem? Reprehenderit quisquam possimus, libero fuga unde in id quis blanditiis cumque. Harum excepturi laborum quis commodi.
//       </div>
//     </div>
//   )
// }

// export default Recipe

import React,{useEffect,useState} from 'react'
import image2 from '../../images/beverages.jpg' 
import './Recipe.css'
import { Rating } from '@mui/material';
import {BiTimer} from 'react-icons/bi'
import { Doughnut} from "react-chartjs-2";
import VideoDetail from '../Video/VideoDetail'
import VideoList from '../Video/VideoList'
import useVideos from '../Video/hooks/useVideos';
import Navbar from '../Navbar/Navbar';
const Recipe = () => {
    const [selectedVideo,setSelectedVideo]=useState(null)
  const [videos,search]=useVideos('dessert food recipe english')
  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos])
    
    const doughnutState = {
        labels: ["Carbs", "Proteins","Fats"],
        datasets: [
          {
            backgroundColor: ["#f94642", "#3177bb","#fda120"],
            hoverBackgroundColor: ["#ff7f7d","#3177bb", "#fda120"],
            data: [5, 10,15],
          },
        ],
      };
  return (
    <>
    <Navbar/>
    <section className='recipe-header'>
        <div className='main-content'>
            <div className='outer-two-container'>
                <div className='two-container'>
                    <div className='two-container-content'>
                        <div className='two-container-content-time'>
                            <ul className='cooking-times'>
                                <li className='cooking-times-items'>
                                    <div className='time'>
                                        <div className='time__label'>
                                            <p className='time-label'>PREP TIME</p>
                                        </div>
                                        <div className='time__value'>
                                            <div className='time-value-icon'>
                                                <BiTimer className='timer-icon'/>
                                            </div>
                                            <p className='time-value'>
                                                10&nbsp; 
                                                <span className='time-value__unit'>min</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className='cooking-times-items'>
                                    <div className='time'>
                                        <div className='time__label'>
                                            <p className='time-label'>COOK TIME</p>
                                        </div>
                                        <div className='time__value'>
                                            <div className='time-value-icon'>
                                                <BiTimer className='timer-icon'/>
                                            </div>
                                            <p className='time-value'>
                                                 10&nbsp; 
                                                <span className='time-value__unit'>min</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className='cooking-times-items'>
                                    <div className='time'>
                                        <div className='time__label'>
                                            <p className='time-label'>READY TIME</p>
                                        </div>
                                        <div className='time__value'>
                                            <div className='time-value-icon'>
                                                <BiTimer className='timer-icon'/>
                                            </div>
                                            <p className='time-value'>
                                                10&nbsp; 
                                                <span className='time-value__unit'>min</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='two-container-content-header'>
                            <h1 className='header__header'>Keto Italian Cabage Noddles</h1>
                            
                            <div className='header__rating'>
                                <div className='header__rating'>
                                    <Rating name="half-rating" value={3.5} precision={0.5} readOnly />&nbsp;&nbsp;
                                    <span className='rating-count'>{5} ratings</span>
                                </div>      
                            </div>
                            <div className='header__text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis quod molestias labore. Mollitia, eius? Est, neque optio libero dicta nulla in corrupti minus similique sunt quibusdam magnam, eos quod? Cupiditate eius, libero, atque architecto consequatur sed nisi perferendis aspernatur quaerat nulla fugit deserunt consectetur obcaecati quisquam adipisci similique. Exercitationem, id. Labore dolorem alias delectus pariatur ipsam vel excepturi quo repellendus praesentium q
                               </div>
                            <div className="tags">  
                                <span>Gluten Free</span>
                                <span>Quick & Easy</span>
                                <span>Snacks</span>
                                <span>Desserts</span>
                            </div>
                        </div>
                    </div>
                    <div className='two-container-image'>
                    <img src={image2} alt="imageOfRecipe" className="recipe-image"/>
                    
                    </div>
                </div>
        {/* hello */}
            </div>
            <div className='nutrients-info-container'>
                <div className='nutrients-info'>
                    <div className='nutrients'>
                        <ul className='ul-nutrients'>
                            <li className='li-nutrients'>Net Carbs : 5g</li>
                            <li className='li-nutrients'>Sugar Content : 5g</li>
                            <li className='li-nutrients'>Proteins : 5g</li>
                            <li className='li-nutrients'>Cholestrol Content : 5g</li>
                            <li className='li-nutrients'>Fats : 5g</li>
                            <li className='li-nutrients'>Fibre Content : 5g</li>
                            <li className='li-nutrients'>Calories : 5cal</li>
                            <li className='li-nutrients'>Sodium Content : 5g</li>
                        </ul>
                    </div>
                </div>
                <div className='graph'>
                <Doughnut data={doughnutState} />
                
                </div>
                
            </div>
            <div className='grid'>
        <div className='row'> 
          <div className='eleven-wide'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five-wide'>
            <VideoList videos={videos} onVideoSelect={(video)=>setSelectedVideo(video)}/>
          </div>
        </div>
      </div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit totam nostrum veniam, recusandae repudiandae numquam sint excepturi officiis earum adipisci id ullam minima asperiores nihil saepe? Ad at eos aliquid explicabo atque. Deleniti fugit est ad similique? Dicta, vero omnis, nisi perspiciatis quae voluptatibus sint natus veritatis vitae iusto eius maxime, quas eum architecto debitis! Animi vitae numquam ea corrupti dicta omnis, recusandae voluptatibus commodi voluptatum! Animi aspernatur adipisci qui nihil quisquam nisi est quasi cum fuga, praesentium et, nostrum voluptate a ipsum facere natus corporis, ipsa explicabo voluptates nobis facilis minus voluptatem aperiam. Dolores praesentium placeat, odio quia repellendus error voluptatum eaque pariatur assumenda! Dolor reprehenderit fugiat obcaecati repellendus quidem fuga? Quas eveniet porro harum tempore, sequi quidem officiis omnis delectus deleniti autem ab eum praesentium nulla modi, ipsum, recusandae nihil repellendus eaque perspiciatis saepe ut sapiente adipisci dolorum. Quaerat ab delectus libero ipsa. Laboriosam facilis ipsam ad eos officia repellat iusto sint saepe qui sed, nihil illo harum reiciendis ducimus, maiores placeat praesentium voluptates, magni nemo inventore perferendis eius ipsum! Eligendi a rem iusto rerum mollitia odio molestiae dicta harum natus incidunt? Veritatis fuga vel accusantium. Consequatur dolores ratione vel error id sequi itaque culpa voluptatem illum voluptatum.
        </div>
    </section>
    </>
  )
}

export default Recipe
