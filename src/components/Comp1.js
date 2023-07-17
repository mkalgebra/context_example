import Comp2 from "./Comp2"

export default function Comp1({prezime}){
    return(<><span>Ja</span><Comp2 prezime={prezime}/></>)
}