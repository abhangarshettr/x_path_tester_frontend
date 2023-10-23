import React from "react"
import SideBar from "../../components/SideBar"
import Button from "../../components/Button"
import axios from "axios"
import Swal from "sweetalert2"
function SetupEnv() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const yang_dir = event.target[0].value
    const deviation_source_file = event.target[1].value
    const openconfig_pkg = event.target[2].value
    const platform_annotation_file = event.target[3].value
    const plugin_dir = event.target[4].value
    const device_under_test = event.target[5].value
    const gnmi_port = event.target[6].value
    const username = event.target[7].value
    const password = event.target[8].value
    const test_release = event.target[9].value
    const test_platform = event.target[10].value
    const requestData = {
      yang_dir,
      deviation_source_file,
      openconfig_pkg,
      platform_annotation_file,
      plugin_dir,
      device_under_test,
      gnmi_port: Number(gnmi_port),
      username,
      password,
      test_release,
      test_platform,
    }
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/save-config`, requestData)
      .then((response) => {
        const { status_code, message } = response.data
        if (status_code === 200) {
          Swal.fire("Success!", message, "success")
        } else {
          Swal.fire("Error!", message, "error")
        }
      })
      .finally(() => {
        event.target.reset()
      })
  }
  return (
    <SideBar>
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-xl">File Configuration</h3>
        <h3 className="mt-5">
          This page allows you to set up the environment for the test. All paths
          should be absolute paths. Fill yang_dir and deviation_source_file or
          just provide the openconfig_pkg location. If all are provided,
          openconfig_pkg will take priority. If file is uploaded, and is a
          directory please upload a zipped .tgz file.
        </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-3">
            <label>Yang Dir</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>Deviation Source File</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>Open Config Package</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>Platform Annotation File</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>Plugin Dir</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>Device Under Test {"(Device Name or IP)"}</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>gNMI Port</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>username</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>password</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>Test Release</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex flex-col mt-3">
            <label>Test Platform</label>
            <input className="input input-bordered input-primary w-full" />
          </div>
          <div className="flex justify-center mt-5">
            <Button type="submit">Save Configuration</Button>
          </div>
        </form>
      </div>
    </SideBar>
  )
}

export default SetupEnv
