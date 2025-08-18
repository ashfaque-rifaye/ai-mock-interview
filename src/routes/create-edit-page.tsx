
import { useParams } from 'react-router-dom'

export const CreateEditPage = () => {

    const {interviewID} = useParams<{interviewID: string}>()
    console.log("Take an Interview Page is Loading...")
  return (
    <div>CreateEditPage : {interviewID}</div>
  )
}
