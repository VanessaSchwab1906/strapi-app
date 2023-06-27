import React from "react";
import { Link } from "react-router-dom";
// import { useQuery, gql } from "@apollo/client";

// const CATEGORIES = gql`
// query GetCategories `;

export default function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Ninja Reviews</h1>
      </Link>
    </div>
  );
}
