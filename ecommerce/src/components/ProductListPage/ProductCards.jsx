import { faBorderAll, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "./Product";
import Brands from "../Repetitive/Brands";
import { useForm } from 'react-hook-form';
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useQueryParams from "../../hooks/useQueryParams";
import * as fetchTypes from '../../store/actions/fetchStatesTypes';
import { addMoreProducts, fetchProducts } from "../../store/actions/productAction/productAction";


export default function ProductCards() {
  
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.global.categories);
  const products = useSelector((store) => store.products);
  
  const { gender, category } = useParams();
    const { totalProductCount, productList, fetchState } = products;
    const { register, handleSubmit} = useForm();
    const [queryParams, setQueryParams] = useQueryParams({
        filter: "",
        sort: "",
    });
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const infiniteScrollParams = {
        limit: 25,
        offset: offset,
    };

    const onSubmit = data => {
        setOffset(0);
        setQueryParams(data);
    };
    let categoryId;
    let genderCode;
    if (gender, category) {
        genderCode = gender[0]
        categoryId = categories.find((c) => c.code == `${genderCode}:${category}`)?.id
    }

    useEffect(() => {
        dispatch(
            fetchProducts({
                ...queryParams,
                limit: infiniteScrollParams.limit,
                offset: 0,
                category: categoryId,
                sort: queryParams.sort,
            })
        )
    }, [queryParams, categoryId])

    const nextProducts = () => {
      let lastLimit = Math.min(25, totalProductCount - productList.length);
  
      if (lastLimit > 0) {
          dispatch(
              addMoreProducts({
                  ...queryParams,
                  limit: lastLimit,
                  offset: infiniteScrollParams.offset,
                  category: categoryId,
              })
          );
          setOffset(offset + 1);
      } else {
          setHasMore(false);
      }
  };

    useEffect(() => {
        if (totalProductCount && productList.length >= totalProductCount) {
            setOffset(0);
            setHasMore(false);
        } else {
            setHasMore(true);
        }
    }, [totalProductCount, productList.length]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


  return (
    <div>
      <div className="mt-5">
        <div className="flex max-w-screen-2xl justify-between mx-auto mb-10 sm:flex-col sm:justify-center sm:text-center sm:gap-6">
          <p className="text-lighterDark font-bold pt-2">
            Showing all results
          </p>
          <div className="flex gap-2 sm:justify-center sm:text-center sm:gap-4">
            <p className="text-lighterDark text-sm font-bold leading-normal tracking-tight pt-2">
              Views:
            </p>
            <FontAwesomeIcon
              icon={faBorderAll}
              className="text-darkText p-2 border rounded cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faListCheck}
              className="text-darkText p-2 border rounded cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-3 sm:justify-center sm:text-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-3">
            <input type="search" placeholder="Search" {...register("filter", {})} className="bg-white input input-bordered w-full text-neutral-500 text-sm font-semibold" />
              <select {...register("sort", {})} className="select w-full text-sm leading-normal tracking-tight">
                <option
                  className="text-lighterDark text-sm leading-normal tracking-tight"
                  value=""
                >
                  Popularity
                </option>
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value="price:desc"
                >
                  Highest Price
                </option>
                
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value="price:asc"
                >
                  Lowest Price
                </option>
                
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value="rating:asc"
                >
                  Lowest Rating
                </option>
                <option
                  className="text-lighterDark text-sm font-semibold leading-normal tracking-tight"
                  value="rating:desc"
                >
                  Highest Rating
                </option>
              </select>
              <button
                type="submit"
                className="bg-navBlue px-4 py-2 text-white text-sm font-bold leading-normal tracking-tight rounded"
              >
                {" "}
                Filter
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto">
                {fetchState === fetchTypes.FETCHED && (
                    <InfiniteScroll
                        dataLength={productList.length && 0}
                        next={nextProducts}
                        hasMore={hasMore}
                        
                        endMessage={
                            <p className="text-center p-4 text-neutral-500 text-lg font-semibold leading-normal tracking-tight">There are no more products in this category</p>
                        }
                        className="flex flex-col overflow-hidden h-full pt-4"
                    >
                        <Product products={productList} />
                    </InfiniteScroll>)}
                {fetchState === fetchTypes.FETCHING &&
                    <>
                        <p className="text-center p-4 text-neutral-500 text-lg font-semibold leading-normal tracking-tight">There are no more products in this category</p>
                        
                    </>}
            </div>

      <Brands />
    </div>
  );
}
