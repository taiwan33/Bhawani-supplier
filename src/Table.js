import React from 'react'

const Table = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-3 lg:px-5">
                    <div className="overflow-hidden">

                        <table className="min-w-full ">
                            <thead className="border-black border-t-[1px]">
                                <tr className='text-left'>
                                    <th scope="col" className="text-md font-semibold px-2 py-1 ">
                                        Particulars
                                    </th>
                                    <th scope="col" className="text-md font-medium px-2 py-1">
                                        Texable Amt
                                    </th>
                                    <th scope="col" className="text-md font-medium px-2 py-1">
                                        Tax Amt
                                    </th>
                                    <th scope="col" className="text-md font-medium px-2 py-1">
                                        Excise Duty
                                    </th>
                                    <th scope="col" className="text-md font-medium px-2 py-1">
                                        Exempted Amt
                                    </th>
                                    <th scope="col" className="text-md font-medium px-2 py-1">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-black border-t-[1px]">
                                    <td className="text-sm px-4 py-1 font-medium whitespace-nowrap">
                                        Sales Turnover
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        529682.32
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        68858.69
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        598541.01
                                    </td>
                                </tr>
                                <tr className="border-black border-t-[1px]">
                                    <td className="text-sm font-medium px-4 py-1 whitespace-nowrap">
                                        Sales Return
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                </tr>
                                <tr className="border-black border-t-[1px]">
                                    <td className="text-sm font-medium px-4 py-1 whitespace-nowrap">
                                        Purchase Turnover
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                </tr>
                                <tr className="border-black border-t-[1px]">
                                    <td className="text-sm font-medium px-4 py-1 whitespace-nowrap">
                                        Purchase Return
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                </tr>
                                <tr className="border-black border-t-[1px] font-semibold">
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        Total
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        529682.32
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        68858.69
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        598541.01
                                    </td>
                                </tr>
                                <tr className="border-black border-t-[1px] font-semibold">
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        Opening Balance
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        Nil
                                    </td>
                                </tr>
                                <tr className="border-black border-t-[1px] font-semibold">
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        Cash/Bank Received Or Adjustment
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        598541.01
                                    </td>
                                </tr>
                                <tr className="border-black border-y-[1px] font-semibold">
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        Closing Balance
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">

                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                    </td>
                                    <td className="text-sm px-4 py-1 whitespace-nowrap">
                                        Nil
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table