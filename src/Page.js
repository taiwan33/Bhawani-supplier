import React from 'react'
import Table from './Table'
const Page = () => {

    return (
        <div className='space-y-5 w-[88%] m-auto mb-5'>
            <div>
                <div className='font-semibold justify-center text-center mt-2'>
                    <div className='text-xl '>Bhawani Suppliers</div>
                    <div className='text-lg'>PAN NO.:302808296</div>
                </div>
                <div className='flex justify-end font-medium'>
                    <div>
                        <p>Date: 16-jul-21</p>
                        <p>Miti:</p>
                    </div>
                </div>
            </div>
            <div className=' font-semibold'>Ref: Sales/Purchase/Balance during FY 20/21(From 17-jul-20 To 16-jul-21)</div>
            <div className='font-semibold'>
                <p>To,</p>
                <p>Anmol Khusi Cold Stores</p>
                <p>PAN No.: 611985540</p>
            </div>
            <div className=' font-semibold'>Sub: Confirmation of Transactions & Accounts Balance.</div>
            <div>Dear Sir/Madam,</div>
            <div>With reference to the above subject, as part of annual audit, we are sending you the following information regarding sale, purchase and balance of accounts for your information. </div>
            <Table />

            <div>
                Please add your confirmation or send us the received copy with sign & official stamp on this letter within 7 days of its receipt falling to which the details provided by us will be treated as final confirmation by you.
            </div>
            <div className='space-y-2'>
                <div>For any query, please contact-</div>
                <div>Please do the necessary as early as possible.</div>
                <div>Thanking you.</div>
            </div>

            <div className='flex justify-between'>
                <div>
                    <div>Your Sincerery</div>
                    <div>For Bhawani Suppliers</div>
                </div>
                <div>
                    <div>Receiver Signature & Stamp</div>
                    <div className='font-semibold'>Receiver Name & Phone No.</div>
                </div>
            </div>
        </div>
    )
}

export default Page