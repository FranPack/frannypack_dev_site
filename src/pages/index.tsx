import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HomeLayout from "../components/HomeLayout"
import Welcome from "../components/Welcome"
// import Hero from "../img/undraw.svg"

const Home = () => {
  return (
    <>
      <HomeLayout>
        <Welcome />
      </HomeLayout>
    </>
  );
};

export default Home;