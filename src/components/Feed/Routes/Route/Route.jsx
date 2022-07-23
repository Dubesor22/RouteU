// import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";


const Route = () => {
  const { routes } = useSelector((state) => state.routes);

  const routeList = routes?.map((elements) => {
    console.log("elements", elements._id);
    return (
      <>
        <section class="py-5">
          <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div class="col mb-5">
                <div class="card h-100">
                  <img
                    class="card-img-top"
                    src={elements.image}
                    alt="foto de la ruta"
                  />

                  <div class="card-body p-4">
                    <div class="text-center" key={elements._id}>
                      <h5 class="fw-bolder">{elements.name}</h5>
                    </div>
                  </div>

                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      {" "}
                      <Link to={"/getRouteById/" + elements._id}>                        
                        <a class="btn btn-outline-dark mt-auto" href="#">
                          Detalles
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  });
  return <div className="group">{routeList}</div>;
};

export default Route;