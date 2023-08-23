import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function CodeGene() {
    const [text, setText] = useState("")

    function generateCode(e) {
        setText()
    }
    function handleChange(e) {
        setText(e.target.value)
    }
    return (
        <>

            <div className="flex justify-center items-center h-screen p-10">
                <div className="flex flex-col text-center  bg-white p-10 rounded-2xl">
                    <h1 className='text-2xl'>QR Code Generator</h1>
                    <div className="flex justify-center">
                        <QRCode value={text} className='w-10/12' />
                    </div>
                    <input 
                    type='text' 
                    value={text} 
                    onChange={(e) => { handleChange(e) }} 
                    placeholder='Enter the Text / URL' 
                    className='text-center p-2 outline-none' />
                </div>
            </div>

        </>
    )
}

export default CodeGene