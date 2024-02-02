import React, { useState } from 'react'
import SideBar from '../sidebar/SideBar'
import { Button, FileInput, Label, Select, Spinner, Table , Card} from 'flowbite-react';

const Upload = () => {
    const [isProcessing,setIsProcessing]=useState(true);

    const [uploadedFileName, setUploadedFileName] = useState('');

    const handleFileChange = (event) => {
        if(event.target.files.length){

            const file = event.target.files[0];
            setUploadedFileName(file.name);
        }
        };

    const handleRemoveFile = () => {
        setUploadedFileName('');
        // setIsProcessing(true);

    };

    const handleUpload =()=>{
        if(uploadedFileName.length){
            setIsProcessing(false);
            setTimeout(()=>{
                setIsProcessing(true);
                alert('uploaded successfully');
            },500);
        }else{
            alert("No file chosen")
        }
    }

    const [data, setData] = useState([
        { id: 1, link: 'https://example.com', prefix: 'Prefix 1', selectedTags: ['Tag1', 'Tag2'], allTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'] },
        { id: 2, link: 'https://example2.com', prefix: 'Prefix 2', selectedTags: ['Tag3', 'Tag4'], allTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'] }
    ]);

    const handleTagChange = (id, selectedTags) => {
        setData(data.map(item => item.id === id && !item.selectedTags.includes(selectedTags) ? { ...item, selectedTags: [...item.selectedTags, ...selectedTags] } : item));
    };
    

  return (
    <div className='flex col w-[1440px] h-[1024px] overflow-hidden' >
        <SideBar/>
     <div className='flex-col w-[1000px] overflow-hidden'>
       <div className='content-div flex-col gap-[600px] '>
            <div className=' font-bold text-[24px] m-4 text-left'>Upload CSV</div>

            {/* csv upload div  */}
            <div className='w-[596px] h-[367px] flex-col justify-center m-auto 
            items-center gap-4 shadow-sm bg-white rounded-[10px] flex'>

                <div className="flex-col flex
                gap-4 items-center justify-center 
                w-[564px] h-[258px] m-8">
                    <div>

                <Label
                    htmlFor="dropzone-file"
                    className="dark:hover:bg-bray-800 flex h-[258px] w-[564px] cursor-pointer
                    flex-col items-center justify-center 
                    rounded-lg border-2 border-dashed
                    border-gray-300 bg-gray-50 hover:bg-gray-100
                    dark:border-gray-600 dark:bg-gray-700
                    dark:hover:border-gray-500
                    dark:hover:bg-gray-600 m-auto"
                    
                    >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <img src="/images/csv.svg" alt="csvlogo" className='w-[30px] h-[28px]'/>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">

                        {
                          uploadedFileName.length<=0 ?
                          <>
                            <span className="font-semibold">Drop your excel sheet here</span>
                         or 
                         <span className=' text-blue-500'> browse </span> 
                            </>: 
                            <div className="flex flex-col items-center justify-center w-[564px] h-12 bg-gray-100 rounded-lg">
                                <p className="mr-2">{uploadedFileName}</p>
                                <button className="text-red-500 bg-white" onClick={handleRemoveFile} >Remove</button>
                            </div>
                        }
                    </p>
                    </div>
                    <FileInput id="dropzone-file" className="hidden" onChange={handleFileChange} />
                </Label>

                    </div>
                 <Button className='h-[56px] w-[564px] p-[8px,16px,8px,8px] m-auto' size="md" onClick={handleUpload}>
                                  {isProcessing?<><img src="/images/upload.svg" alt="upload" /> <span>upload</span></>:<Spinner/>}
                </Button>
                </div>
            </div>

            {/* files             */}
        </div>

        <Card size="sm">
    <Table>
        <thead>
            <tr>
                <th>Sr. No</th>
                <th>Links</th>
                <th>Prefix</th>
                <th>Select Tags</th>
                <th>Selected Tags</th>
            </tr>
        </thead>
        <tbody className='row-span-4' style={{columnSpan:'20px'}}>
            {data.map((item, index) => (
                <tr key={item.id} className='bg-slate-200' >
                    <td>{index + 1}</td>
                    <td><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></td>
                    <td>{item.prefix}</td>
                    <td>
                        <Select
                            value={item.selectedTags}
                            onChange={(e) => handleTagChange(item.id, Array.from(e.target.selectedOptions, option => option.value))}
                            className="w-full"
                        >
                            {item.allTags.map((tag, index) => (
                                <option className='' key={index} value={tag}>{tag}</option>
                            ))}
                        </Select>
                    </td>
                    <td>{item.selectedTags.join(' ')}</td>
                </tr>
            ))}
        </tbody>
    </Table>
        </Card>

        </div>
    </div>
  )
}

export default Upload