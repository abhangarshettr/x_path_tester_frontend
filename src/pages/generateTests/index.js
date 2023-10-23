import React, { useEffect, useState } from "react"
import SideBar from "../../components/SideBar"
import axios from "axios"
import Swal from "sweetalert2"

const GenerateTests = () => {
  const [yangFiles, setYangFiles] = useState([])
  const [selectedYangFile, setSelectedYangFile] = useState("")
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/get-yang-files`)
      .then((response) => {
        const { files } = response.data
        setYangFiles(files)
      })
  }, [])

  const generateFiles = () => {
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/generate-files`, {
        file_name: selectedYangFile,
      })
      .then((response) => {
        const { message, status_code } = response.data
        if (status_code === 200) {
          Swal.fire("Success!", message, "success")
        } else {
          Swal.fire("Error!", message, "error")
        }
      })
  }
  return (
    <SideBar>
      <div className="p-3">
        <h3>Generate Tests</h3>

        <div className="flex flex-col mt-5">
          <label>Select Yang File</label>
          <select
            className="select select-bordered w-full mt-1"
            defaultValue={selectedYangFile}
            onChange={(e) => setSelectedYangFile(e.target.value)}
          >
            <option disabled selected>
              Select Yang File
            </option>
            {yangFiles.map((yangfile, idx) => (
              <option key={idx} value={yangfile}>
                {yangfile}
              </option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-primary btn-block mt-5"
          onClick={generateFiles}
        >
          Generate Files
        </button>
      </div>
    </SideBar>
  )
}

export default GenerateTests
