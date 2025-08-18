import { Headings } from '@/components/headings'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {

  console.log("Dashboard is getting loaded");
  return (
    <div className='flex w-full items-center justify-between'>
        <Headings title="Dashboard" description="Create and Start your AI mock Interview" 
        isSubHeading={false}></Headings>

        {/*action button*/}
        <Link to="/generate/create">
            <Button size="sm">
                <Plus className="min-w-5 min-h-5 mr-2" /> Add New
            </Button>
        </Link>
    </div>
  )
}

