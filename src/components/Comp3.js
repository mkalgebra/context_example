import { useContext } from "react"
import { SentenceContext } from "../App"

export default function Comp3({prezime}){
    const endOfSentence = useContext(SentenceContext)

    return(<><span>Marijo</span><span>{prezime}</span><span>{endOfSentence}</span></>)
}