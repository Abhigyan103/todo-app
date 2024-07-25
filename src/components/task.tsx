import Check from "@/assets/Check"
import Trash from "@/assets/Trash"
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
 const Task = ({isCompleted,children, onClick} : {
    isCompleted:Boolean,
    onClick?: ()=> void,
    children:React.ReactNode
}) => {
  return (
    <div onClick={onClick} className="flex w-full bg-[#15101C] my-2 rounded-md items-center px-4 py-4 font-light space-x-2">
      <div onClick={()=>{
          copy(children!.toString())
          toast.success('Copied to clipboard!');
        }} className={`text-wrap grow select-none ${!isCompleted ?'text-[#9E78CF]' : 'text-[#78CFB0] line-through'}`}>
        {children}
      </div>
      {!isCompleted ? <div className="flex space-x-2">
        <Button onClick={()=>{/*TODO*/}}>
        <Check className="fill-green-600 hover:fill-green-800"/>
        </Button>
        <Button onClick={()=>{/*TODO*/}}>
        <Trash className="fill-red-600 hover:fill-red-800"/>
        </Button>
      </div> : null}
    </div>
  )
}

const Button = ({onClick, children}:{
  onClick: ()=> void,
  children:React.ReactNode
})=>{
  return <button className="align-middle" onClick={onClick}>{children}</button>
}
export default Task
