import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../../features/api/apiSlice'
import ROUTES from '../../../utils/routes'
import Product from './Product'

const SingleProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

    useEffect(() => {
        if(!isLoading && !isFetching && !isSuccess){
            navigate(ROUTES.HOME)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    return !data ? (
        <section>No Data For this Product</section>
    ) : (
        <div>
            <Product {...data}/>
        </div>
    )
    
}

export default SingleProduct