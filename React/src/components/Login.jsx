import React from 'react'

function Login() {

    // const GetDetails = ()=>{

    // }
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login