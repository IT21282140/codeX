import React, { useEffect, useState } from 'react'
import Toaster from '../../../../Utils/Constants/Toaster';
import LocalStore from '../../../../Store/LocalStore';
import BugSevice from '../../../../Services/Bug/BugSevice';
import DateFormatter from '../../../../Utils/Constants/DateFormatter';

export default function HistoryTable({ bugs, viewBug, removeBug,addBugToFavourite,addBugToStarred }) {


    return (
        <div className="overflow-scroll overflow-x-hidden me-2" style={{ flex: 1 }}>
            <div className=" h-100 w-100 shadow-sm">
                <div className="row h-100">
                    <div className='col-12 rounded d-flex flex-column'>
                        <div className="card p-3 mb-3 flex-grow-1">
                            {/* header */}
                            <div className="d-flex flex-row justify-content-between align-items-center" role="search">
                                <div className="div">
                                    <h4 className='h1 fw-bolder'>Bug History</h4>
                                    <p>showing the total analyzed bugs</p>
                                </div>
                                <div className="div">
                                    <h1>🐞</h1>
                                </div>
                            </div>
                            {/* table */}
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Bug Req</th>
                                        <th scope="col">Created</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bugs !== null ? (
                                            <>
                                                {
                                                    bugs.map((bug) => {
                                                        return (
                                                            <tr key={bug._id}>
                                                                <td>
                                                                    {bug.email}
                                                                </td>
                                                                {/* <td >
                                                                    <div dangerouslySetInnerHTML={{ __html: bug.bug_res_html}}></div>
                                                                </td> */}
                                                                <td>{DateFormatter.formatDate(bug.created_at)}</td>
                                                                <td className='d-flex justify-content-between align-items-center'>
                                                                    <button onClick={() => {
                                                                        removeBug(bug._id)
                                                                    }} className='btn btn-danger rounded text-white p-2'>❌</button>
                                                                    <button onClick={() => {
                                                                        addBugToFavourite(bug._id)
                                                                    }} className='btn btn-danger rounded text-white p-2 mx-1'>💘</button>
                                                                    <button onClick={() => {
                                                                        addBugToStarred(bug._id)
                                                                    }} className='btn btn-warning rounded text-white p-2'>🌟</button>
                                                                    <button onClick={() => {
                                                                        viewBug(bug._id)
                                                                    }} className='btn btn-dark rounded text-white p-2 mx-1'>More</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </>
                                        ) : (
                                            <tr>
                                                <td>Not Found</td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}