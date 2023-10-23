import React from "react"
import HomeCard from "../../components/HomeCard"
import { useNavigate } from "react-router-dom"
import { SETUP_ENV, EXECUTE_TESTS, GENERATE_TESTS } from "../../router/paths"
function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-around items-center h-52 flex-col">
        <h1 className="text-3xl">X Path Tester</h1>
        <img src="/logo.png" alt="logo" width={200} />
      </div>
      <div className="flex justify-center items-center gap-16">
        <HomeCard
          title={"Environment Setup"}
          text={"Create your setup environment to configure the test creation"}
          onClick={() => navigate(SETUP_ENV)}
        />
        <HomeCard
          title={"Test Creation"}
          text={"Create Test for a particular Yang model and assign value"}
          onClick={() => navigate(GENERATE_TESTS)}
        />
      </div>
      <div className="flex justify-center items-center mt-10">
        <HomeCard
          title={"Test Execution"}
          text={"Execute tests for a particular Yang model and assign values"}
          onClick={() => navigate(EXECUTE_TESTS)}
        />
      </div>
    </div>
  )
}

export default Home
