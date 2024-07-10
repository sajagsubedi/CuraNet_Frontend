import {Link} from "react-router-dom"
import {useState} from "react"

export default function Login() {
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const handlePhoneChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
    if(e.target.value.length<11 && (e.target.value.length==0 ||Number.isInteger(Number.parseInt(e.target.value)))  ){
    setPhone(e.target.value)
    }
  
    
  }
    const handlePasswordChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
    if(e.target.value.length<20)  {
    setPassword(e.target.value)
    }
  }

    return (
        <section className="text-gray-600 body-font px-6 pt-20 flex justify-center">
                <div className="w-full sm:w-[325px] flex flex-col">
                    <h2 className=" text-2xl md:text-3xl mb-4 font-bold title-font text-left ">
                    Hey,<br/>
                        <span className="text-blue-600">Welcome</span> back. 
                    </h2>
                    <div className="relative mb-4">
                        <label
                            for="email"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="9XXXXXXXX"
                           className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            for="message"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="••••••••"
                            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                      <div className="mb-2 text-right">
                    <Link className="text-blue-500 underline" to="/forgot-password"> Forgot password?</Link>
                    </div>
                    <button className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                        Login
                    </button>
                  <div className="mt-5 flex items-center gap-2 justify-center text-gray-500"><hr className="w-[175px] h-[2px] bg-gray-200" />or<hr className="w-[175px]  h-[2px] bg-gray-200" /></div>
                   <p className="flex gap-2 justify-end 
                    mt-6">  Don't have an account? 
                    <Link className="text-blue-500 underline" to="/signup">Signup</Link>
                    </p>
                </div>
        </section>
    );
}
