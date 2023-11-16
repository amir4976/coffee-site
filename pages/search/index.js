import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/header/Header";
import React from "react";
import { useSearchParams } from "next/navigation";
import MenuItem from "@/components/modules/menuItem/MenuItem";
function Search({ findData }) {
  console.log(findData);
  // get query params
  let params = useSearchParams().get("q");
  console.log(params);
  console.log(findData);
  return (
    <div>
      <Header />
      <div>
        <div class="container-fluid pt-5">
          <div class="container">
            <span class="display-4">you search for : {params}</span>
            <div class="row">
              <div class="col-lg-6">
                <h1 class="mb-5">Hot Coffee</h1>

                {findData.filter((item) => item.type == "HOT").length == 0 ? (
                  <>
                    {" "}
                    <h1> sorry its empty</h1>
                  </>
                ) : (
                  findData
                    .filter((item) => item.type == "HOT")
                    .map((item) => (
                      <>
                        <MenuItem {...item} />
                      </>
                    ))
                )}
              </div>

              <div class="col-lg-6">
                <h1 class="mb-5">cold Coffee</h1>
                  {/* so we are searching if the length === 0 so show sorry massage if not do your map or something */}
                {findData.filter((item) => item.type == "COLD").length == 0 ? (
                  <>
                    {" "}
                    <h1>sorry its empty</h1>
                  </>
                ) : (
                  findData
                    .filter((item) => item.type == "COLD")
                    .map((item) => (
                      <>
                        <MenuItem {...item} />
                      </>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // its a server side rendering

  // NOTE : step one is to get query params from the url
  const params = context.query.q;

  // NOTE : step two is to fetch the data from the server
  const getData = await fetch("http://localhost:3000/menu");
  const result = await getData.json();

  // NOTE : step three is to filter the data based on the query params
  const findData = result.filter(
    (item) =>
      item.type.toLowerCase().includes(params.toLowerCase()) ||
      item.title.toLowerCase().includes(params.toLowerCase())
  );

  // ? in the end we send findData to the page via props
  return {
    props: { findData },
  };
}

export default Search;
