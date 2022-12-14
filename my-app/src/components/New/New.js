import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Link,useLocation, useNavigate } from 'react-router-dom';

import Navbar from '../Navbar/Navbar'
import { getNewCards } from '../../actions/cards';
import ActionAreaCard from '../Card/Card';
import Loader from '../Loader/Loader';
import './New.css'

import { Pagination, PaginationItem } from '@material-ui/lab';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const New = () => {
  const navigate=useNavigate()
    const query = useQuery();
  const page = query.get('page') || 1;
    const dispatch=useDispatch()
    const {isLoading,neww,newnumberOfPages} = useSelector((state) => state.cards);
    useEffect(()=>{
        dispatch(getNewCards(page))
        navigate(`/new?page=${page}`);
        if(page!==1){
          window.scrollTo(0, 300)
        }else{
          window.scrollTo(0, 0)
        }
    },[dispatch,navigate,page])
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
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
              size='small'
              color="primary"
              renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/new?page=${item.page}`} />
              )}
            />
          </div>
        </>
      )} 
    </div>
  )
}

export default New
