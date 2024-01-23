import { Button } from "../component/Button.jsx"
import { Input } from "../component/Input.jsx"
export const Login = () => {
    return (

        <> 
        <div className="container bg-slate-600 h-[500px]">
          <Input className="w-[300px] form-control"/>
          <Input />
          <Button>Login</Button>
        </div>
         
         </>



    )
}