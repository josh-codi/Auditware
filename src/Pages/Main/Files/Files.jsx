import React from 'react'
import Wrapper from '../Components/Wrapper'
import { GridContent } from '../StyledComponents'
import FileCard from './Includes/FileCard'

function Files() {
    const data = [
  {
    type: 'doc',
    name: 'Management Board',
    size: '30mb'
  },
  {
    type: 'pdf',
    name: 'Annual Report',
    size: '25mb'
  },
  {
    type: 'xls',
    name: 'Financial Spreadsheet',
    size: '40mb'
  },
  {
    type: 'ppt',
    name: 'Quarterly Presentation',
    size: '20mb'
  },
  {
    type: 'jpg',
    name: 'Company Logo',
    size: '5mb'
  },
  {
    type: 'doc',
    name: 'Company Policies',
    size: '12mb'
  },
  {
    type: 'zip',
    name: 'Project Files',
    size: '50mb'
  },
  {
    type: 'pdf',
    name: 'Marketing Strategy',
    size: '35mb'
  },
  {
    type: 'doc',
    name: 'Employee Handbook',
    size: '28mb'
  },
  {
    type: 'xls',
    name: 'Sales Report',
    size: '33mb'
  },
  // Add more entries as needed
];

  return <Wrapper content={<>
    <br />
    <GridContent>
        {
            data.map((file, idx)=><FileCard
                                    type={file.type}
                                    name={file.name}
                                    size={file.size}
                                />)
        }
    </GridContent>
  </>} page={'Files'}/>
}

export default Files