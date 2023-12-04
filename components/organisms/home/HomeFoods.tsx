import { useGetHomeFood } from "@/customHooks/useGetHomeFood";
import { FC, Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { HomeFood } from "@/apiCalls/types";
import BusinessPresentation from "@/components/molecules/home/BusinessPresentation";

import FoodCard from "@/components/molecules/home/FoodCard";
import FoodCardLoadMore from "@/components/atoms/home/FoodCardLoadMore";

interface Props {
  businesses: HomeFood;
}

const HomeFoods: FC<Props> = ({ businesses }) => {
  const { ref, inView } = useInView({ threshold: 0.8 });

  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetHomeFood({
      pageSize: 6,
      initialHomeFood: businesses,
    });

  // console.log(`home data`, data);

  useEffect(() => {
    // console.log("fetching next page", inView && hasNextPage);
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      {businesses.home_food &&
        data?.pages.map(({ home_food, next_page }) => (
          <Fragment key={next_page}>
            {home_food.map(({ business_id, city, name, foods }) => {
              return (
                <div className="w-full mb-10" key={business_id}>
                  {/* business info */}
                  <BusinessPresentation
                    businessName={name}
                    businessCity={city}
                  />

                  {/* food */}
                  <div className="flex flex-row flex-wrap justify-between w-full pt-16">
                    {foods.map(
                      ({
                        food_id,
                        food_title,
                        food_description,
                        food_price,
                        food_available_per_day,
                        food_img,
                      }) => {
                        return (
                          <FoodCard
                            key={food_id}
                            business_id={business_id}
                            food_id={food_id}
                            food_title={food_title}
                            food_description={food_description}
                            food_img={food_img}
                            food_price={{
                              prettify: food_price.prettify,
                              real_price: food_price.real_price,
                            }}
                            food_available_per_day={food_available_per_day}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </Fragment>
        ))}
      <FoodCardLoadMore
        intersectionRef={ref}
        loading={isFetching || isFetchingNextPage}
      />
    </>
  );
};

export default HomeFoods;
