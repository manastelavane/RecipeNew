import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch ,useSelector} from 'react-redux';
import './New.css'
import { Pagination, PaginationItem } from '@material-ui/lab';
import { getNewCards } from '../../actions/cards';
import ActionAreaCard from '../Card/Card';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const New = () => {
    const query = useQuery();
  const page = query.get('page') || 1;
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const {isLoading,neww,newnumberOfPages} = useSelector((state) => state.cards);
    useEffect(()=>{
        dispatch(getNewCards(page))
        navigate(`/new?page=1`);
    },[dispatch,navigate])
  return (
    <div>
        {isLoading?(<Loader/>):(
            <>
            <Navbar/>
            <div className='new-hero'>
             <div className='new-hero-content'>
                 New Recipe...
             </div>
           </div>
           <div className='card-container'>
           {neww &&
                  neww.map((card) => (
                    <ActionAreaCard card={card} key={card._id} />
                  ))
    }
            
          </div>
          <div className='pagination'>
    
         
          <Pagination
          className="pagination-ul"
          count={newnumberOfPages}
          page={Number(page) || 1}
          variant="outlined"
          color="primary"
          renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/card/new?page=${item.page}`} />
          )}
          />
          </div>
          </>
        )}
      
      
    </div>
  )
}

export default New
