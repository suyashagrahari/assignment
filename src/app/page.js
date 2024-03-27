"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@/components/Grid";
import Headline from "@/components/Headline";
import Tabbing from "@/components/Tabbing";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="container my-3">
      <h1 className="text-center pt-4 fs-2 mb-4">Discover By Cities</h1>
      <div className="row justify-content-center mb-2">
        <div className="col-lg-12">
          <Grid />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="mb-3">Thousands of properties globally</h1>
          <p
            className="lead"
            style={{
              wordBreak: "break-word",
              maxHeight: "3.6em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}>
            Explore affluent and cozy student homes near renowned universities
            and bustling capitals
          </p>
        </div>
      </div>
      <div className="row justify-content-center mb-2 my-4">
        <Tabbing />
      </div>
      <div className="row justify-content-center my-4">
        <div className="col-lg-8 text-center">
          <h1 className="mb-3">Why choose us?</h1>
          <p
            className="lead"
            style={{
              wordBreak: "break-word",
              maxHeight: "3.6em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}>
            Lorem ipsum dolor sit amet consectetur. Nunc varius magna in est in fusce cursus suspenLorem ipsum dolor sit amet consectetur. Nunc varius magna in est in fusce cursus suspendisse.
          </p>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
