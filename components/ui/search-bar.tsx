'use client'

import { FC, useState } from 'react'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import { Users } from 'lucide-react'

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSearch = () => {
    // Perform search logic based on the 'input' value
    console.log(`Searching for: ${input}`)
    // You can expand this function to perform actual search operations
  }
  
  return (
    <Command className='relative rounded-lg border max-w-lg z-50 overflow-visible'>
      <div className='relative'>
        <CommandInput
          value={input}
          onChange={handleInputChange}
          className='outline-none border-none focus:border-none focus:outline-none ring-0 py-2 px-3 rounded-lg'
          placeholder='Search communities...'
        />
      </div>

      {/* <CommandList className='absolute bg-white top-full inset-x-0 shadow rounded-b-md mt-2'>
        {/* Example of showing no results */}
        {/* <CommandEmpty>No results found.</CommandEmpty> */}
        
        {/* Example of showing search results 
         <CommandGroup heading='Communities'>
          <CommandItem value='subreddit.name'>
            <Users className='mr-2 h-4 w-4' />
            <a href={`/r/subreddit.name`}>r/subreddit.name</a>
          </CommandItem>
        </CommandGroup>
      </CommandList>*/}
    </Command> 
  )
}

export default SearchBar
